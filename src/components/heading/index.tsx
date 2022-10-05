import { styled } from "@/styles";

export const Heading = styled("h1", {
  fontWeight: "600",

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
      h4: {
        fontSize: "$xl",
      },
    },
    centered: {
      true: {
        textAlign: "center",
      },
    },
  },

  defaultVariants: {
    size: "h1",
  },
});
