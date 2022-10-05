import { styled } from "@/styles";

import { Card } from "../card";

export const ProjectCardContainer = styled(Card, {
  height: "100%",

  display: "flex",
  flexDirection: "column",
});

export const ProjectCardContent = styled("div", {
  padding: "1.5rem",
  paddingTop: "1rem",

  display: "flex",
  flexDirection: "column",
  flex: 1,
});

export const ProjectCardHead = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  div: {
    display: "flex",
    alignItems: "center",
  },
});

export const ProjectCardDescription = styled("p", {
  flex: 1,
  marginTop: "0.5rem",
  color: "$accent-text",
  display: "-webkit-box",
  "-webkit-line-clamp": "4",
  "-webkit-box-orient": "vertical",
  overflow: "hidden",
});
