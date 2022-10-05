import { styled } from "@/styles";

import { Link } from "../link";

export const HeaderContainer = styled("header", {
  height: "$header-height",
  width: "100%",
  backgroundColor: "rgb(19, 22, 32, 0.75)",
  backdropFilter: "blur(12px)",
  zIndex: "9999",
  borderBottom: "1px solid $divider",

  position: "fixed",
  top: 0,
});

export const Navigation = styled("nav", {
  display: "flex",
  alignItems: "center",
  gap: "2rem",

  [`${Link}`]: {
    padding: "0.5rem",
  },
});
