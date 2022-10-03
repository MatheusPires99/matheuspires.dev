import NextLink from "next/link";

import { styled } from "@/styles";

export const Link = styled(NextLink, {
  textDecoration: "none",

  transition: "color 0.2s",

  variants: {
    variant: {
      primary: {
        color: "$text-base",

        "&:hover": {
          color: "$text-contrast",
        },
      },
      hightlight: {
        color: "$text-contrast",
        fontWeight: "600",

        "&:hover": {
          textDecoration: "underline",
        },
      },
      unstyled: {},
    },
  },

  defaultVariants: {
    variant: "unstyled",
  },
});
