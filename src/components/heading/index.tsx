import { styled } from "@/styles";

export const Heading = styled("h2", {
  fontWeight: "600",
  fontFamily: "$default",

  variants: {
    size: {
      sm: { fontSize: "$xl" },
      md: { fontSize: "$2xl" },
      lg: { fontSize: "$3xl", "@mobile": { fontSize: "$2xl" } },
      xl: { fontSize: "$4xl", "@mobile": { fontSize: "$3xl" } },
      "2xl": { fontSize: "$5xl", "@mobile": { fontSize: "$4xl" } },
      "3xl": { fontSize: "$6xl", "@mobile": { fontSize: "$5xl" } },
    },
    centered: {
      true: {
        textAlign: "center",
      },
    },
  },

  defaultVariants: {
    size: "2xl",
  },
});
