#!/usr/bin/env python3
"""Optimize the raw gallery photos for web delivery and image SEO.

For every image in updated_gallery_image/ this writes, into public/gallery/:

  <slug>-1200.webp / -2000.webp   responsive widths (WebP)
  <slug>-1200.jpg                 JPEG fallback for the common width
  manifest.json                   dimensions + alt text for the gallery UI

Photos are renamed from camera filenames (IMG_4071.jpeg) to descriptive,
keyword-bearing slugs, EXIF/GPS is stripped, and quality steps down
adaptively so no file exceeds the size budget. Videos are ignored.

Usage:  python3 scripts/optimize_gallery.py [--dry-run]
"""

from __future__ import annotations

import argparse
import json
import subprocess
import sys
import tempfile
from pathlib import Path

from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / "updated_gallery_image"
OUT = ROOT / "public" / "gallery"

# Responsive widths. 2000 covers a full-bleed hero on a 2x display;
# 1200 is what a grid tile actually needs.
WIDTHS = (1200, 2000)
FALLBACK_WIDTH = 1200

# Step quality down until the file fits the budget, so detail-dense
# photos (foliage, water, stonework) don't blow past it at a fixed q.
QUALITY_STEPS = (82, 76, 70, 64)
MAX_BYTES = {1200: 180 * 1024, 2000: 420 * 1024}

VIDEO_EXT = {".mov", ".mp4", ".m4v", ".avi"}
IMAGE_EXT = {".jpg", ".jpeg", ".png", ".heic", ".heif", ".webp"}

BUSINESS = "pinnacle-pools"

# Descriptive slugs keyed by original filename stem, written from a visual
# pass over every photo. Anything not listed falls back to a generic
# (still keyword-bearing) name.
NAMES: dict[str, str] = {
    '03021497-87c4-484b-8e24-5c2185b59270': 'freeform-pool-artificial-turf-backyard',
    '0949169b-7313-40bb-bc15-452bbff482ba': 'freeform-pool-paver-deck-raised-bond-beam',
    '0ac75aab-8251-4e49-9158-2d43846b5013': 'freeform-pool-paver-deck-planter',
    '1190871103859452399': 'freeform-pool-led-lighting-sunset',
    '126a93b2-9774-490a-ba26-07f991f515d0': 'rectangular-pool-tanning-ledge-spa',
    '14235285-a216-4b5a-aff2-6df6e98348ae': 'freeform-pool-broom-finish-deck',
    '4075739023697675984': 'pool-sheer-descent-waterfall-glass-tile',
    '4419511062161269980': 'freeform-pool-blue-led-lighting-dusk',
    '4E3A1989-2CC8-4EFB-81B0-208D159F3D39': 'rectangular-pool-artificial-turf-lawn',
    '5413839136119157003': 'freeform-pool-color-led-lighting-purple',
    '70a953c4-aa17-4e6a-8975-430f487466cf': 'small-pool-spa-string-lights-patio',
    '78da73ad-24b8-4d14-90dc-afecaff5de59': 'geometric-pool-spa-pebble-finish',
    'ACLV6592': 'pool-spa-string-lights-evening-entertaining',
    'E37AEDE8-8DE7-457D-BCD3-DCB5640850E6': 'linear-fire-pit-table-night-lighting',
    'IMG_0495': 'new-concrete-driveway-pour',
    'IMG_0919': 'concrete-patio-slab-installation',
    'IMG_1247': 'rectangular-pool-led-lighting-night',
    'IMG_1249': 'pool-raised-wall-led-lighting-string-lights',
    'IMG_1273': 'pool-spa-stamped-concrete-deck-turf',
    'IMG_1648': 'pool-waterfall-stacked-stone-wall',
    'IMG_1816': 'pool-raised-spa-glass-tile-spillway',
    'IMG_2155': 'freeform-pool-spa-turquoise-water-night',
    'IMG_2193': 'outdoor-fireplace-fire-pit-seating-pool',
    'IMG_2616': 'pool-raised-spa-glass-tile-hillside-view',
    'IMG_2854': 'geometric-pool-dusk-stamped-concrete',
    'IMG_3244': 'stamped-concrete-driveway-decorative',
    'IMG_3562': 'pool-fire-feature-blue-led-night',
    'IMG_3580': 'artificial-turf-lawn-side-yard',
    'IMG_3679': 'freeform-pool-color-led-lighting-landscape',
    'IMG_4068': 'geometric-pool-spa-sheer-descent-waterfall',
    'IMG_4071': 'geometric-pool-spa-water-feature-deck',
    'IMG_5331': 'rectangular-pool-tanning-ledge-concrete-deck',
    'IMG_5698': 'rectangular-pool-raised-spa-spillway',
    'IMG_6135': 'geometric-pool-baja-shelf-steps',
    'IMG_6197': 'pool-spa-travertine-deck-glass-tile',
    'IMG_6198': 'rectangular-pool-spa-travertine-coping',
    'IMG_6224': 'pool-construction-shell-fence-view',
    'IMG_7246': 'pool-spa-fire-pit-backyard-construction',
    'IMG_7247': 'fire-pit-glass-rock-stone-veneer',
    'IMG_7254': 'pool-raised-spa-spillway-glass-tile',
    'IMG_7257': 'pool-waterfall-stone-veneer-wall',
    'IMG_7392': 'geometric-pool-spa-blue-led-night',
    'IMG_7396': 'pool-purple-led-lighting-night',
    'IMG_7403': 'raised-spa-spillway-green-led-lighting',
    'IMG_7405': 'raised-spa-spillway-purple-led-lighting',
    'IMG_7695': 'completed-pool-project-backyard',
    'IMG_7811': 'pool-spa-construction-coping-installation',
    'IMG_7849': 'outdoor-kitchen-built-in-grill-bar',
    'IMG_7953': 'concrete-patio-pour-backyard',
    'IMG_8181': 'pool-hillside-view-lounge-deck',
    'IMG_8312': 'outdoor-kitchen-stone-veneer-grill-island',
    'IMG_8725': 'pool-raised-spa-tile-waterline',
    'IMG_8925': 'rectangular-pool-tanning-ledge-stamped-concrete',
    'IMG_8926': 'rectangular-pool-baja-shelf-deck',
    'IMG_9194': 'geometric-pool-dark-finish-country-view',
    'IMG_9196': 'geometric-pool-dark-finish-lounge-chairs',
    'IMG_9623': 'rectangular-pool-spa-pergola-cabana',
    'QVCY6600': 'putting-green-artificial-turf-backyard',
    'SAOR4680': 'front-yard-artificial-turf-walkway',
    '_MG_0065': 'pool-coping-tile-detail-closeup',
    '_MG_0083': 'rectangular-pool-string-lights-poolhouse',
    '_MG_0092': 'pool-step-tile-mosaic-detail',
    '_MG_0111': 'rock-waterfall-grotto-pool',
    '_MG_0115': 'rock-waterfall-pool-slide',
    '_MG_4221': 'pool-sheer-descent-waterfall-blue-tile',
    '_MG_4237': 'completed-pool-project-clients',
    '_MG_4247': 'rectangular-pool-diving-board-led-night',
    '_MG_4249': 'geometric-pool-spa-color-led-night',
    '_MG_4327': 'pool-water-features-landscape-lighting-night',
    '_MG_4342': 'pool-sheer-descent-waterfall-night-lighting',
    '_MG_4347': 'pool-deck-jets-water-features-night',
    '_MG_4367': 'pool-linear-fire-feature-night',
    '_MG_4369': 'raised-spa-linear-fire-feature-night',
    '_MG_4378': 'rectangular-pool-deck-jets-poolhouse-night',
    '_MG_4379': 'rectangular-pool-landscape-lighting-night',
    '_MG_4384': 'outdoor-fireplace-stone-patio-seating',
    '_MG_4393': 'fire-pit-lounge-seating-waterfall-spa',
    '_MG_4396': 'pool-glass-mosaic-tile-raised-wall',
    '_MG_4397': 'raised-spa-fire-bowl-glass-tile-spillway',
    '_MG_4399': 'outdoor-fireplace-fire-pit-lounge-dusk',
    '_MG_4401': 'outdoor-fireplace-stone-veneer-patio',
    '_MG_4404': 'garden-statuary-stone-veneer-wall',
    '_MG_4411': 'circular-fire-pit-curved-bench-seating',
    '_MG_4417': 'pool-glass-tile-mosaic-band-detail',
    '_MG_4422': 'circular-fire-pit-lounge-seating-night',
    '_MG_4423': 'circular-fire-pit-seating-pool-spa',
    '_MG_4425': 'pool-mosaic-tile-waterline-detail',
    '_MG_4434': 'outdoor-fireplace-fire-pit-patio-night',
    '_MG_4439': 'freeform-pool-fire-pit-fireplace-backyard',
    '_MG_4449': 'outdoor-fireplace-pool-color-lighting-night',
    'b376dd96-a3b1-4779-9ed2-ed2908f93242': 'pool-raised-spa-tanning-ledge-turf',
    'cddf5faf-7775-45fb-8da7-c325b979da93': 'pool-sheer-descent-waterfall-stacked-stone',
    'dji_fly_20231031_124228_73_1704485084133_photo': 'aerial-view-geometric-pool-paver-deck',
    'fe4e0791-d719-43e4-a5cc-91b03956113c': 'freeform-pool-stamped-concrete-deck-sunset',
    'ffb00e21-bf92-4bf1-a714-3dbedf7c13fe': 'pool-landscape-paver-walkway-turf',
}

GENERIC = "custom-pool-landscape-sacramento"


def load(path: Path) -> Image.Image:
    """Open an image, converting HEIC via macOS sips when Pillow can't."""
    if path.suffix.lower() in {".heic", ".heif"}:
        tmp = Path(tempfile.mkdtemp()) / (path.stem + ".jpg")
        subprocess.run(
            ["sips", "-s", "format", "jpeg", "-s", "formatOptions", "95",
             str(path), "--out", str(tmp)],
            check=True, capture_output=True,
        )
        return Image.open(tmp)
    return Image.open(path)


def prepare(im: Image.Image) -> Image.Image:
    """Bake in EXIF rotation, flatten to RGB, drop all metadata."""
    im = ImageOps.exif_transpose(im)
    if im.mode in ("RGBA", "LA", "P"):
        bg = Image.new("RGB", im.size, (255, 255, 255))
        im = im.convert("RGBA")
        bg.paste(im, mask=im.split()[-1])
        im = bg
    elif im.mode != "RGB":
        im = im.convert("RGB")

    # Rebuild without EXIF/ICC so no GPS or camera data ships to the browser.
    clean = Image.new("RGB", im.size)
    clean.putdata(list(im.getdata()))
    return clean


def encode(im: Image.Image, dest: Path, fmt: str, budget: int) -> int:
    """Save at the highest quality that still fits the byte budget."""
    for q in QUALITY_STEPS:
        if fmt == "WEBP":
            im.save(dest, "WEBP", quality=q, method=6)
        else:
            im.save(dest, "JPEG", quality=q, optimize=True, progressive=True)
        if dest.stat().st_size <= budget:
            break
    return dest.stat().st_size


def resized(im: Image.Image, width: int) -> Image.Image:
    if im.width <= width:
        return im
    height = round(im.height * width / im.width)
    return im.resize((width, height), Image.LANCZOS)


def slug_for(path: Path, used: dict[str, int]) -> str:
    base = NAMES.get(path.stem, GENERIC)
    used[base] = used.get(base, 0) + 1
    n = used[base]
    return f"{BUSINESS}-{base}" if n == 1 else f"{BUSINESS}-{base}-{n}"


def alt_for(slug: str) -> str:
    """Human-readable alt text derived from the slug."""
    words = slug.replace(f"{BUSINESS}-", "").replace("-", " ").strip()
    words = "".join(c for c in words if not c.isdigit()).strip()
    return f"{words.capitalize()} by Pinnacle Pools and Landscape, Sacramento CA"


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--dry-run", action="store_true")
    args = ap.parse_args()

    if not SRC.is_dir():
        print(f"source folder not found: {SRC}", file=sys.stderr)
        return 1

    files = sorted(p for p in SRC.iterdir() if p.is_file() and not p.name.startswith("."))
    images = [p for p in files if p.suffix.lower() in IMAGE_EXT]
    videos = [p for p in files if p.suffix.lower() in VIDEO_EXT]

    print(f"{len(images)} images, {len(videos)} videos skipped")
    if args.dry_run:
        return 0

    OUT.mkdir(parents=True, exist_ok=True)
    manifest, used, before, after = [], {}, 0, 0

    for i, path in enumerate(images, 1):
        try:
            full = prepare(load(path))
        except Exception as exc:  # noqa: BLE001 - report and continue
            print(f"  !! {path.name}: {exc}", file=sys.stderr)
            continue

        slug = slug_for(path, used)
        sources, total = {}, 0

        for w in WIDTHS:
            if full.width < w and w != WIDTHS[0]:
                continue          # never upscale past the source
            im = resized(full, w)
            dest = OUT / f"{slug}-{w}.webp"
            total += encode(im, dest, "WEBP", MAX_BYTES[w])
            sources[w] = {"src": f"/gallery/{dest.name}",
                          "width": im.width, "height": im.height}

        fb = resized(full, FALLBACK_WIDTH)
        fb_dest = OUT / f"{slug}-{FALLBACK_WIDTH}.jpg"
        encode(fb, fb_dest, "JPEG", MAX_BYTES[FALLBACK_WIDTH])

        src_size = path.stat().st_size
        before += src_size
        after += total

        largest = sources[max(sources)]
        manifest.append({
            "slug": slug,
            "alt": alt_for(slug),
            "src": largest["src"],
            "fallback": f"/gallery/{fb_dest.name}",
            "width": largest["width"],
            "height": largest["height"],
            "srcset": [sources[w] for w in sorted(sources)],
            "original": path.name,
        })
        print(f"[{i:>3}/{len(images)}] {path.name} "
              f"{src_size/1e6:.1f}MB -> {total/1e6:.2f}MB  {slug}")

    (OUT / "manifest.json").write_text(json.dumps(manifest, indent=2) + "\n")

    print(f"\n{len(manifest)} images -> {OUT}")
    print(f"total {before/1e6:.0f}MB -> {after/1e6:.0f}MB "
          f"({100 * (1 - after / before):.0f}% smaller)")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
