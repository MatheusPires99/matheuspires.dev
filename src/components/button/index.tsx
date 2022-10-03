import { styled } from "@/styles";

export const Button = styled("button", {
  height: "3.5rem",
  padding: "0 1.75rem",
  fontFamily: "$mono",
  fontWeight: "500",
  backgroundColor: "transparent",
  border: "none",
  borderRadius: "$lg",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  variants: {
    variant: {
      primary: {
        backgroundColor: "$solid-background",
        color: "$text-base",

        transition: "background-color 0.2s",

        "&:hover": {
          backgroundColor: "$solid-background-hover",
        },
      },
      outline: {
        color: "$text-contrast",
        border: "1px solid $border",

        transition: "background-color 0.2s, border-color 0.2s",

        "&:hover": {
          backgroundColor: "$background-light",
          borderColor: "$border-hover",
        },
      },
    },
  },

  defaultVariants: {
    variant: "primary",
  },
});
