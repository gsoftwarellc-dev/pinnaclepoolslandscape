import type { BeforeAfterPair } from "@/components/BeforeAfter";

/**
 * Before/after pairs drawn from our own project photography. Each pair is two photos of the
 * same job, so the comparison is honest — nothing here is a stock or stand-in image.
 */
export const transformations: BeforeAfterPair[] = [
  {
    title: "Bare Lot to Finished Landscape",
    location: "Sacramento County",
    beforeSrc: "/gallery/Landscape-Before-4-14-22.jpg",
    beforeLabel: "Before",
    afterSrc: "/gallery/Landscape-After-4-14-22.jpg",
    afterLabel: "After",
    caption:
      "A blank builder-grade yard rebuilt with planting beds, irrigation, and finished hardscape borders.",
  },
  {
    title: "Cracked Driveway Replacement",
    location: "Greater Sacramento",
    beforeSrc: "/gallery/Before-Driveway-5-18-22.jpg",
    beforeLabel: "Before",
    afterSrc: "/gallery/After-Driveway-5-18-22.jpg",
    afterLabel: "After",
    caption:
      "Failing concrete removed and replaced with a properly based, full-width driveway pour.",
  },
  {
    title: "Excavation to First Swim",
    location: "Elk Grove, CA",
    beforeSrc: "/gallery/During-Dig-4-26-22.jpg",
    beforeLabel: "During Dig",
    afterSrc: "/gallery/After-Pool-1-5-16-22.jpg",
    afterLabel: "Completed",
    caption:
      "Three weeks from open excavation to a plastered, filled, and swim-ready custom pool.",
  },
];
