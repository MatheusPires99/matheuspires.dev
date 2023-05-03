import { styled } from "@/styles";

export const ContactInfo = styled("div", {
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
