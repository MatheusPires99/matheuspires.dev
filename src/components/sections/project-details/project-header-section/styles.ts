import Image from "next/image";

import { styled } from "@/styles";

export const CoverImage = styled(Image, {
  borderRadius: "$md",
  boxShadow: "$md",

  "@laptop": {
    width: "100%",
    height: "100%",
  },
});

export const ProjectDetails = styled("div", {
  marginTop: "2rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "1rem",

  "@tablet": {
    flexDirection: "column",
    alignItems: "normal",
    gap: "2rem",
  },
});

export const ProjectTechnologies = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "0.75rem",

  span: {
    color: "$accent-text",
    fontSize: "$sm",
  },
});

export const ActionButtons = styled("div", {
  display: "flex",
  alignItems: "center",
  flexShrink: 0,
  gap: "1rem",
});
