import Image from "next/future/image";

import { styled } from "@/styles";

export const HeroImage = styled(Image, {
  borderRadius: "$sm",

  "@mobile": {
    width: "11.25rem",
    height: "11.25rem",
  },
});

export const HeroContent = styled("div", {
  display: "flex",
  flexDirection: "column",
});

export const Introduction = styled("div", {
  marginBottom: "1rem",

  display: "flex",
  flexDirection: "column",

  span: {
    fontFamily: "$mono",
    fontSize: "$lg",
    color: "$text-contrast",
    marginBottom: "0.5rem",

    "@mobile": {
      fontSize: "$base",
    },
  },

  p: {
    fontSize: "$lg",
    lineHeight: "1.5",
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
