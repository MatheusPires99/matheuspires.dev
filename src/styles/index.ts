import { indigoDark, grayDark } from "@radix-ui/colors";
import { createStitches } from "@stitches/react";

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      background: indigoDark.indigo1,
      "background-light": indigoDark.indigo2,
      shape: indigoDark.indigo3,
      "shape-hover": indigoDark.indigo4,
      border: indigoDark.indigo7,
      "border-hover": indigoDark.indigo8,
      "solid-background": indigoDark.indigo9,
      "solid-background-hover": indigoDark.indigo10,
      "text-contrast": indigoDark.indigo11,
      "text-base": indigoDark.indigo12,

      "accent-border": grayDark.gray9,
      "accent-text": grayDark.gray11,

      divider: grayDark.gray6,
    },
    fonts: {
      sans: "Inter, sans-serif",
      mono: "Fira Mono, monospace",
    },
    fontSizes: {
      sm: "0.75rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.5rem",
      "2xl": "2rem",
      "3xl": "2.625rem",
      "4xl": "3.75rem",
    },
    radii: {
      sm: "4px",
      lg: "8px",
      full: "9999px",
    },
    shadows: {
      md: "0 8px 30px rgba(0,0,0,.12)",
    },
    sizes: {
      "page-width": "946px",
    },
  },
});
