import { styled } from "@/styles";

export const IconButton = styled("button", {
  color: "$text-base",
  backgroundColor: "transparent",
  border: "none",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  transition: "color 0.2s",

  "&:hover": {
    color: "$text-contrast",
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
