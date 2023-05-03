import Image from "next/image";

import { styled } from "@/styles";

export const ImagesSectionHeader = styled("div", {
  p: {
    color: "$accent-text",
    marginTop: "1rem",
    lineHeight: "1.5",
  },
});

export const ImagesList = styled("ul", {
  marginTop: "3.5rem",

  display: "flex",
  flexDirection: "column",
  gap: "3.5rem",
});

export const ImageItem = styled("li", {
  position: "relative",

  display: "flex",
  flexDirection: "column",
  gap: "1.5rem",

  "@mobile": {
    gap: "1rem",
  },
});

export const CoverImage = styled(Image, {
  borderRadius: "$md",
  boxShadow: "$md",

  "@laptop": {
    width: "100%",
    height: "100%",
  },
});

export const ImageContent = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",

  p: {
    lineHeight: "1.5",
    color: "$accent-text",

    "@mobile": {
      fontSize: "$sm",
    },
  },
});
