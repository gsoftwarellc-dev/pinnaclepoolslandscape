#!/usr/bin/env bash
# Builds the Apache/PHP static export into out/.
#
# The Next.js API routes under src/app/api cannot coexist with output: "export",
# and the PHP endpoint in public/api replaces them on that host. They are moved
# aside for the duration of the build and restored afterwards, so the Vercel
# deployment keeps using them unchanged.
set -euo pipefail

cd "$(dirname "$0")/.."

API_DIR="src/app/api"
STASH_DIR=".api-stash"

restore() {
  if [ -d "$STASH_DIR" ]; then
    rm -rf "$API_DIR"
    mv "$STASH_DIR" "$API_DIR"
    echo "restored $API_DIR"
  fi
}
trap restore EXIT

rm -rf "$STASH_DIR" out
mv "$API_DIR" "$STASH_DIR"

STATIC_EXPORT=1 \
  NEXT_PUBLIC_LEAD_ENDPOINT="${NEXT_PUBLIC_LEAD_ENDPOINT:-/api/lead.php}" \
  npx next build

echo "static export written to out/"
