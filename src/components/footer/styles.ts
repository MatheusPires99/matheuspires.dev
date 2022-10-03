import { Button } from "@/components/button";
import { Section } from "@/components/section";
import { styled } from "@/styles";

export const FooterContainer = styled(Section, {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

export const GetInTouch = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  p: {
    marginTop: "1rem",
    fontSize: "$lg",
    color: "$accent-text",
  },

  [`${Button}`]: {
    marginTop: "3.5rem",
  },
});

export const ContactInfo = styled("div", {
  marginTop: "6.5rem",

  display: "flex",
  alignItems: "center",
  gap: "2.5rem",

  strong: {
    fontSize: "$lg",
  },

  "> div": {
    display: "flex",
    alignItems: "center",
  },
});

export const DesignedBy = styled("span", {
  marginTop: "1rem",
  color: "$accent-text",
});
