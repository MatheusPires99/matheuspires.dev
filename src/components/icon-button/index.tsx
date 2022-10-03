import { styled } from "@/styles";

export const IconButton = styled("button", {
  color: "$accent-text-contrast",
  backgroundColor: "transparent",
  border: "none",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  transition: "color 0.2s",

  "&:hover": {
    color: "$accent-text",
  },

  variants: {
    size: {
      sm: {
        fontSize: "1rem",
        width: "2rem",
        height: "2rem",
      },
      lg: {
        fontSize: "1.5rem",
        width: "2.5rem",
        height: "2.5rem",
      },
    },
  },

  defaultVariants: {
    size: "lg",
  },
});
