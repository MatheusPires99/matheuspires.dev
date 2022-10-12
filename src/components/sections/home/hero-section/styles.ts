import Image from "next/future/image";

import { styled } from "@/styles";

export const HeroImage = styled(Image, {
  borderRadius: "$sm",
  boxShadow: "$md",

  "@laptop": {
    width: "15rem",
    height: "15rem",
  },

  "@mobile": {
    width: "11.25rem",
    height: "11.25rem",
  },
});

export const HeroContent = styled("div", {
  display: "flex",
  flexDirection: "column",
});

export const Summary = styled("div", {
  marginBottom: "1rem",

  display: "flex",
  flexDirection: "column",

  span: {
    fontFamily: "$code",
    fontSize: "$lg",
    color: "$text-contrast",
    marginBottom: "0.5rem",

    "@mobile": {
      fontSize: "$base",
    },
  },

  p: {
    fontSize: "$lg",
    lineHeight: "$normal",
    color: "$accent-text",
    marginTop: "1.5rem",

    "@mobile": {
      fontSize: "$base",
      marginTop: "1rem",
    },
  },
});

export const CallToActions = styled("div", {
  marginTop: "2rem",

  display: "flex",
  alignItems: "center",
  gap: "1rem",
});
