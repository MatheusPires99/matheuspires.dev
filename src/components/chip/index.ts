import { lightTheme, styled } from "@/styles";

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
  fontSize: "$xs",
  fontFamily: "$mono",
  lineHeight: 1,

  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "0.25rem",

  transition: "all 0.2s",

  "&:hover": {
    transform: "scale(1.05)",
  },

  img: {
    [`.${lightTheme} &`]: {
      filter: "invert(0.9)",
    },
  },

  variants: {
    highlightColor: {
      cyan: {
        "&:hover": {
          color: "#00c2d7",
          backgroundColor: "#061e24",
          borderColor: "#064150",

          [`.${lightTheme} &`]: {
            color: "#0c7792",
            backgroundColor: "#f2fcfd",
            borderColor: "#aadee6",
          },
        },
      },
      green: {
        "&:hover": {
          color: "#4cc38a",
          backgroundColor: "#0c1f17",
          borderColor: "#164430",

          [`.${lightTheme} &`]: {
            color: "#18794e",
            backgroundColor: "#f2fcf5",
            borderColor: "#b4dfc4",
          },
        },
      },
      yellow: {
        "&:hover": {
          color: "#f0c000",
          backgroundColor: "#221a00",
          borderColor: "#493c00",

          [`.${lightTheme} &`]: {
            color: "#946800",
            backgroundColor: "#fffce8",
            borderColor: "#f9e68c",
          },
        },
      },
      pink: {
        "&:hover": {
          color: "#f65cb6",
          backgroundColor: "#271421",
          borderColor: "#601d48",

          [`.${lightTheme} &`]: {
            color: "#cd1d8d",
            backgroundColor: "#fff7fc",
            borderColor: "#f3c6e2",
          },
        },
      },
      blue: {
        "&:hover": {
          color: "#52a9ff",
          backgroundColor: "#0f1b2d",
          borderColor: "#0d3868",

          [`.${lightTheme} &`]: {
            color: "#006adc",
            backgroundColor: "#f5faff",
            borderColor: "#b7d9f8",
          },
        },
      },
      orange: {
        "&:hover": {
          color: "#ff8b3e",
          backgroundColor: "#2b1400",
          borderColor: "#5f2a06",

          [`.${lightTheme} &`]: {
            color: "#bd4b00",
            backgroundColor: "#fef8f4",
            borderColor: "#ffcca7",
          },
        },
      },
      black: {
        "&:hover": {
          // Custom color schema for black in dark mode
          color: "#ededed",
          backgroundColor: "rgba(136, 136, 136, 0.08)",
          borderColor: "rgba(136, 136, 136, 0.5)",

          [`.${lightTheme} &`]: {
            color: "#6f6f6f",
            backgroundColor: "#f8f8f8",
            borderColor: "#e2e2e2",
          },
        },
      },
      red: {
        "&:hover": {
          color: "#ff6369",
          backgroundColor: "#291415",
          borderColor: "#671e22",

          [`.${lightTheme} &`]: {
            color: "#cd2b31",
            backgroundColor: "#fff8f8",
            borderColor: "#f9c6c6",
          },
        },
      },
    },
  },
});
