import { styled } from "@/styles";

export const ChipGroup = styled("ul", {
  listStyle: "none",

  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
  flexWrap: "wrap",
});

export const Chip = styled("div", {
  borderRadius: "$full",
  border: "1px solid $neutral-border",
  padding: "0.5rem",
  color: "$accent-text-contrast",
  fontSize: "$sm",
  fontFamily: "$mono",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "0.25rem",

  transition: "all 0.2s",

  "&:hover": {
    transform: "scale(1.0125)",
  },

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
