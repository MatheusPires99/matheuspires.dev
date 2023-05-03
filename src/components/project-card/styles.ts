import { Card } from "@/components/card";
import { styled } from "@/styles";

export const ProjectCardContainer = styled(Card, {
  height: "100%",
  maxWidth: 296,
  width: "100%",
  margin: "0 auto",
  padding: 0,
  position: "relative",

  display: "flex",
  flexDirection: "column",

  "@tablet": {
    maxWidth: 336,
  },

  "&:hover": {
    img: {
      transform: "scale(1.05)",
      filter: "brightness(0.9)",

      "@tablet": {
        transform: "none",
      },
    },
  },
});

export const ProjectCardImageContainer = styled("div", {
  overflow: "hidden",
  position: "relative",
  height: 180,

  display: "flex",

  img: {
    objectFit: "cover",
    transition: "transform 0.2s, filter 0.2s",
  },
});

export const ProjectCardContent = styled("div", {
  padding: "1.5rem",
  paddingTop: "1rem",

  display: "flex",
  flexDirection: "column",
  flex: 1,
});

export const ProjectCardDescription = styled("p", {
  flex: 1,
  marginTop: "0.25rem",
  fontSize: "$sm",
  color: "$accent-text",
  display: "-webkit-box",
  "-webkit-line-clamp": "3",
  "-webkit-box-orient": "vertical",
  overflow: "hidden",
});
