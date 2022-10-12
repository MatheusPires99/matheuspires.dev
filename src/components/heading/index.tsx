import { styled } from "@/styles";

export const Heading = styled("h2", {
  fontWeight: "600",
  fontFamily: "$default",

  variants: {
    size: {
      sm: { fontSize: "$xl" },
      md: { fontSize: "$2xl" },
      lg: { fontSize: "$3xl" },
      xl: { fontSize: "$4xl", "@mobile": { fontSize: "$3xl" } },
      "2xl": { fontSize: "$5xl", "@mobile": { fontSize: "$4xl" } },
    },
    centered: {
      true: {
        textAlign: "center",
      },
    },
  },

  defaultVariants: {
    size: "xl",
  },
});
