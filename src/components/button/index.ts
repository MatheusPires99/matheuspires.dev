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

  transition: "background-color 0.2s, border-color 0.2s",

  variants: {
    variant: {
      outline: {
        color: "$accent-text",
        border: "1px solid $accent-border",

        "&:hover": {
          backgroundColor: "$accent-background-subtle",
          borderColor: "$accent-border-hover",
        },
      },
    },
  },
});
