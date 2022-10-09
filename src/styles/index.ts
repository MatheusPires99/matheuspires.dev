import {
  indigoDark,
  indigoDarkA,
  indigo,
  indigoA,
  grayDark,
  gray,
} from "@radix-ui/colors";
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
      "shape-alpha": indigoDarkA.indigoA3,
      "shape-hover": indigoDark.indigo4,
      border: indigoDark.indigo7,
      "border-hover": indigoDark.indigo8,
      "solid-background": indigoDark.indigo9,
      "solid-background-hover": indigoDark.indigo10,
      "text-contrast": indigoDark.indigo11,
      "text-base": indigoDark.indigo12,

      "accent-border": grayDark.gray6,
      "accent-placeholder": grayDark.gray9,
      "accent-text": grayDark.gray11,

      divider: grayDark.gray6,
    },
    fonts: {
      sans: "Inter, sans-serif",
      mono: "Fira Mono, monospace",
    },
    fontSizes: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "2rem",
      "4xl": "2.625rem",
      "5xl": "3.75rem",
    },
    radii: {
      sm: "4px",
      lg: "8px",
      full: "9999px",
    },
    shadows: {
      md: "0 10px 15px -3px rgb(0, 0, 0, 0.1), 0 4px 6px -4px rgb(0, 0, 0, 0.1)",
    },
    sizes: {
      "page-width": "1000px",
      "header-height": "80px",
    },
  },
  media: {
    mobile: "(max-width: 768px)",
    tablet: "(max-width: 1024px)",
  },
});

export const lightTheme = createTheme("light-theme", {
  colors: {
    background: indigo.indigo1,
    "background-light": indigo.indigo2,
    shape: indigo.indigo3,
    "shape-alpha": indigoA.indigoA3,
    "shape-hover": indigo.indigo4,
    border: indigo.indigo7,
    "border-hover": indigo.indigo8,
    "solid-background": indigo.indigo9,
    "solid-background-hover": indigo.indigo10,
    "text-contrast": indigo.indigo11,
    "text-base": indigo.indigo12,

    "accent-border": gray.gray6,
    "accent-placeholder": gray.gray9,
    "accent-text": gray.gray11,

    divider: gray.gray6,
  },
});
