import { styled } from "@/styles";

export const IconButton = styled("button", {
  color: "$text-base",
  backgroundColor: "transparent",
  border: "none",
  borderRadius: "$lg",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  transition: "color 0.2s, background-color 0.2s",

  "&:hover": {
    color: "$text-contrast",
    backgroundColor: "$shape-alpha",
  },

  variants: {
    size: {
      sm: {
        fontSize: "1rem",
        width: "2.25rem",
        height: "2.25rem",
      },
      md: {
        fontSize: "1.25rem",
        width: "2.25rem",
        height: "2.25rem",
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
