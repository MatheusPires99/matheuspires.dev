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
      "accent-background": indigoDark.indigo1,
      "accent-background-subtle": indigoDark.indigo2,
      "accent-shape": indigoDark.indigo3,
      "accent-border": indigoDark.indigo7,
      "accent-text": indigoDark.indigo11,
      "accent-text-contrast": indigoDark.indigo12,

      "neutral-divider": grayDark.gray6,
      "neutral-border": grayDark.gray9,
      "neutral-text": grayDark.gray11,
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
  },
});
