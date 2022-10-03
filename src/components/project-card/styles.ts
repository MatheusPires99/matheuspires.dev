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

export const ProjectCardContent = styled("div", {
  marginTop: "1.5rem",
  flex: 1,

  p: {
    color: "$neutral-text",
  },

  "> div": {
    marginTop: "1rem",

    display: "flex",
    alignItems: "center",
    gap: "1.5rem",
  },
});

export const ProjectStat = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "0.375rem",

  span: {
    fontFamily: "$mono",
    fontSize: "$sm",
  },
});
