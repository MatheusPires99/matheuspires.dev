import { styled } from "@/styles";

export const OtherProjectsGroup = styled("ul", {
  marginTop: "3.5rem",

  display: "grid",
  gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
  gap: "1.5rem",

  "@tablet": {
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
  },

  "@mobile": {
    gridTemplateColumns: "repeat(1, minmax(0, 1fr))",
  },
});
