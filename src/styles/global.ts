import { globalCss } from ".";

export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
  },

  ":focus-visible": {
    outline: "2px dashed $text-contrast",
    outlineOffset: 4,
  },

  body: {
    backgroundColor: "$background",
    color: "$text-base",
    "-webkit-font-smoothing": "antialiased",
    "-moz-osx-font-smoothing": "grayscale",
  },

  "body, input, textarea, button": {
    fontFamily: "$sans",
    fontWeight: "400",
    fontSize: "$base",
  },

  button: {
    cursor: "pointer",
  },

  "h1, h2, h3": {
    fontFamily: "$sans",
    fontWeight: "600",
  },

  ul: {
    listStyle: "none",
  },
});
