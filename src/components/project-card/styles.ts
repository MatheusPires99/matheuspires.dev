import { Card } from "@/components/card";
import { styled } from "@/styles";

export const ProjectCardContainer = styled(Card, {
  height: "100%",

  display: "flex",
  flexDirection: "column",
});

export const ProjectCardHeader = styled("header", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  strong: {
    fontSize: "1.5rem",
    fontWeight: 600,
  },

  div: {
    display: "flex",
    alignItems: "center",
  },
});

export const ProjectCardDescription = styled("p", {
  flex: 1,
  marginTop: "1.5rem",
  color: "$accent-text",
  lineHeight: "1.5",
  display: "-webkit-box",
  "-webkit-line-clamp": "4",
  "-webkit-box-orient": "vertical",
  overflow: "hidden",
});
