import { styled } from "@/styles";

export const OtherProjectsGroup = styled("ul", {
  marginTop: "3.5rem",

  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "1.5rem",

  "@mobile": {
    display: "flex",
    flexDirection: "column",
  },
});
