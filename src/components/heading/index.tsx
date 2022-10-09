import { styled } from "@/styles";

export const Heading = styled("h1", {
  fontWeight: "600",
  color: "$text-base",

  variants: {
    size: {
      h1: {
        fontSize: "$5xl",
      },
      h2: {
        fontSize: "$4xl",
      },
      h3: {
        fontSize: "$3xl",
      },
      h4: {
        fontSize: "$2xl",
      },
      h5: {
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
