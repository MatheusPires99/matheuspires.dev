import Image from "next/future/image";

import { styled } from "@/styles";

export const HeroImage = styled(Image, {
  borderRadius: "$sm",
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
  },

  p: {
    fontSize: "$lg",
    lineHeight: "1.5",
    color: "$accent-text",
    marginTop: "1.5rem",
  },
});

export const CallToActions = styled("div", {
  marginTop: "2rem",

  display: "flex",
  alignItems: "center",
  gap: "1rem",
});
