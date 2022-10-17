import Image from "next/future/image";

import { Heading } from "@/components/heading";
import { styled } from "@/styles";

export const ImagesSectionHeader = styled("div", {
  [`${Heading}`]: {
    maxWidth: "80%",
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
  padding: "0 2rem 2rem",

  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  gap: "0.5rem",

  position: "absolute",
  bottom: 0,
  width: "100%",
  height: "50%",

  "@mobile": {
    padding: "0 1rem 1rem",
  },

  "&::before": {
    content: "",
    height: "100%",
    width: "100%",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    background:
      "linear-gradient(to top, rgba(0,0,0,0.8),rgba(0,0,0,0.77311) 12.83%,rgba(0,0,0,0.72685) 24%,rgba(0,0,0,0.66487) 33.77%,rgba(0,0,0,0.59081) 42.37%,rgba(0,0,0,0.50831) 50.07%,rgba(0,0,0,0.421) 57.13%,rgba(0,0,0,0.33252) 63.78%,rgba(0,0,0,0.24652) 70.3%,rgba(0,0,0,0.16663) 76.92%,rgba(0,0,0,0.09648) 83.91%,rgba(0,0,0,0.03973) 91.52%,rgba(0,0,0,0))",
    borderBottomLeftRadius: "$md",
    borderBottomRightRadius: "$md",
  },

  "*": {
    zIndex: 2,
  },

  p: {
    lineHeight: "1.5",
  },
});
