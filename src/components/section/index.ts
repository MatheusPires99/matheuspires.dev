import { styled } from "@/styles";

export const Section = styled("section", {
  padding: "6.5rem 0",

  variants: {
    isFirstSection: {
      true: {
        padding: "4rem 0 6.5rem",
      },
    },
  },
});
