import { globalCss } from ".";

export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
  },

  body: {
    backgroundColor: "$accent-background",
    color: "$accent-text-high-contrast",
    "-webkit-font-smoothing": "antialiased",
    "-moz-osx-font-smoothing": "grayscale",
  },

  "body, input, textarea, button": {
    fontFamily: "$sans",
    fontWeight: "400",
    fontSize: "1rem",
  },

  button: {
    cursor: "pointer",
  },

  a: {
    color: "inherit",
    textDecoration: "none",
  },

  "h1, h2, h3, h4": {
    fontFamily: "$sans",
    fontWeight: "600",
  },
});
