import NextLink from "next/link";

import { styled } from "@/styles";

export const Link = styled(NextLink, {
  textDecoration: "none",

  variants: {
    variant: {
      primary: {
        color: "$text-base",

        transition: "color 0.2s",

        "&:hover": {
          color: "$text-contrast",
        },
      },
      hightlight: {
        color: "$text-contrast",
        fontWeight: "600",
        position: "relative",

        "&:hover::before": {
          content: "",
          width: "100%",
          height: 1,
          backgroundColor: "$text-contrast",
          position: "absolute",
          bottom: 0,
        },
      },
      unstyled: {},
    },
    isSelected: {
      true: {
        color: "$text-contrast",
      },
    },
  },

  defaultVariants: {
    variant: "unstyled",
    isSelected: false,
  },
});
