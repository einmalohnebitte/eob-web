import { classed } from "@tw-classed/react";
import { bgColorVariation } from "./Flex/Flex";

export const Section = classed.div("p-1 mt-5 md:p-8 max-w-screen-lg mx-auto", {
  variants: {
    bgColor: bgColorVariation,
  },
});

export const SplitSection = classed(
  Section,
  "flex flex-col md:flex-row items-center gap-2 md:gap-6"
);
