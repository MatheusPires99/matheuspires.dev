import { styled } from "@/styles";

export const RichText = styled("div", {
  color: "$accent-text",
  lineHeight: "$base",

  "p + p": {
    marginTop: "1rem",
  },

  strong: {
    color: "$text-base",
    fontWeight: "600",
  },

  a: {
    textDecoration: "none",
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

  variants: {
    variant: {
      md: {
        fontSize: "$md",
      },
      lg: {
        fontSize: "$lg",
      },
    },
  },

  defaultVariants: {
    variant: "md",
  },
});
