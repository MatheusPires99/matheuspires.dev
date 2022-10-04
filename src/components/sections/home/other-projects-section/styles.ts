import { styled } from "@/styles";

export const OtherProjectsGroup = styled("ul", {
  marginTop: "3.5rem",

  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(296px, 1fr))",
  gap: "1.5rem",
});
