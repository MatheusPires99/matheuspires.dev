import Image from "next/future/image";

import { Heading } from "@/components/heading";
import { styled } from "@/styles";

export const ImagesSectionHeader = styled("div", {
  [`${Heading}`]: {
    maxWidth: "80%",

    "@mobile": {
      maxWidth: "100%",
    },
  },

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
  },
});
