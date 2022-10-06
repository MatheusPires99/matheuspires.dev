import { Container } from "@/components/container";
import { Link } from "@/components/link";
import { lightTheme, styled } from "@/styles";

export const HeaderContainer = styled("header", {
  height: "$header-height",
  width: "100%",
  backgroundColor: "rgb(19, 22, 32, 0.75)",
  backdropFilter: "blur(12px)",
  zIndex: "9999",
  borderBottom: "1px solid $divider",

  position: "fixed",
  top: 0,

  [`.${lightTheme} &`]: {
    backgroundColor: "rgb(253, 253, 254, 0.75)",
  },
});

export const HeaderContent = styled(Container, {
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

export const Navigation = styled("nav", {
  display: "flex",
  alignItems: "center",
  gap: "2rem",

  [`${Link}`]: {
    padding: "0.5rem",
  },
});
