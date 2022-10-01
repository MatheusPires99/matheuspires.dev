import { styled } from "@/styles";

export const StyledHeading = styled("h1", {
  variants: {
    size: {
      h1: {
        fontSize: "$4xl",
      },
      h2: {
        fontSize: "$3xl",
      },
      h3: {
        fontSize: "$2xl",
      },
    },
  },

  defaultVariants: {
    size: "h1",
  },
});
