import { classed } from "@tw-classed/react";

export const bgColorVariation = {
  blue: "bg-gradient-to-b from-blue-200 to-white",
  pink: "bg-gradient-to-b from-pink-200 to-white",
  yellow: "bg-gradient-to-b from-yellow-200 to-white",
  gray: "bg-gradient-to-b from-gray-200 to-white",
  "gray-solid": "bg-gray-200",
};

export const Flex = classed.div({
  variants: {
    direction: {
      row: "flex-row",
      column: "flex-col",
      "row-reverse": "flex-row-reverse",
      "column-reverse": "flex-col-reverse",
    },
    align: {
      start: "items-start",
      center: "items-center",
      end: "items-end",
    },
    justify: {
      start: "justify-start",
      center: "justify-center",
      end: "justify-end",
      between: "justify-between",
      around: "justify-around",
    },
    gap: {
      0: "gap-0",
      1: "gap-1",
      2: "gap-2",
      3: "gap-3",
      4: "gap-4",
      5: "gap-5",
      6: "gap-6",
      7: "gap-7",
      8: "gap-8",
    },
    grow: {
      0: "grow-0",
      1: "grow",
    },
    flex: {
      1: "flex-1",
      auto: "flex-auto",
      none: "flex-none",
      initial: "flex-initial",
    },
    wrap: {
      wrap: "flex-wrap",
      "wrap-reverse": "flex-wrap-reverse",
      "no-wrap": "flex-nowrap",
    },
    basis: {
      "1/3": "basis-1/3",
      "2/3": "basis-2/3",
      "1/2": "basis-1/2",
      "1/4": "basis-1/4",
      "3/4": "basis-3/4",
    },
    bgColor: bgColorVariation,
    display: {
      flex: "flex",
      "inline-flex": "inline-flex",
      block: "block",
      "inline-block": "inline-block",
      inline: "inline",
    },
  },
  defaultVariants: {
    display: "flex",
  },
});
