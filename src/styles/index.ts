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
      "accent-text-low-contrast": indigoDark.indigo11,
      "accent-text-high-contrast": indigoDark.indigo12,

      "neutral-divider": grayDark.gray6,
      "neutral-border": grayDark.gray9,
      "neutral-placeholder": grayDark.gray11,
    },
    fonts: {
      sans: "Inter, sans-serif",
      mono: "Fira Mono, monospace",
    },
  },
});
