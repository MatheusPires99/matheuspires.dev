import { styled } from "@/styles";

import { Card } from "../card";

export const ProjectCardContainer = styled(Card, {
  height: "100%",
  maxWidth: 296,
  padding: 0,

  display: "flex",
  flexDirection: "column",

  "@tablet": {
    maxWidth: "none",
  },
});

export const ProjectCardImage = styled("div", {
  overflow: "hidden",
  position: "relative",
  height: 180,

  display: "flex",

  img: {
    width: "100%",
    objectFit: "cover",
    transition: "transform 0.2s ease-in-out",

    "&:hover": {
      transform: "scale(1.05)",
    },
  },
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
