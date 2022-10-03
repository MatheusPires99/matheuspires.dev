import { styled } from "@/styles";

export const ChipsGroup = styled("ul", {
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
  flexWrap: "wrap",
});

export const Chip = styled("div", {
  borderRadius: "$full",
  border: "1px solid $accent-border",
  padding: "0.5rem",
  color: "$text-base",
  fontSize: "$sm",
  fontFamily: "$mono",
  lineHeight: 1,

  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "0.25rem",

  transition: "all 0.2s",

  variants: {
    highlightColor: {
      green: {
        "&:hover": {
          color: "#4cc38a",
          backgroundColor: "#0c1f17",
          borderColor: "#164430",
        },
      },
      yellow: {
        "&:hover": {
          color: "#f0c000",
          backgroundColor: "#221a00",
          borderColor: "#493c00",
        },
      },
      pink: {
        "&:hover": {
          color: "#f65cb6",
          backgroundColor: "#271421",
          borderColor: "#601d48",
        },
      },
      blue: {
        "&:hover": {
          color: "#52a9ff",
          backgroundColor: "#0f1b2d",
          borderColor: "#0d3868",
        },
      },
      red: {
        "&:hover": {
          color: "#ff6369",
          backgroundColor: "#291415",
          borderColor: "#671e22",
        },
      },
      orange: {
        "&:hover": {
          color: "#ff8b3e",
          backgroundColor: "#2b1400",
          borderColor: "#5f2a06",
        },
      },
    },
  },
});
