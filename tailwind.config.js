const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        "background-light": "var(--background-light)",
        shape: "var(--shape)",
        "shape-hover": "var(--shape-hover)",
        border: "var(--border)",
        "border-hover": "var(--border-hover)",
        "solid-background": "var(--solid-background)",
        "solid-background-hover": "var(--solid-background-hover)",
        "text-contrast": "var(--text-contrast)",
        "text-base": "var(--text-base)",

        "accent-border": "var(--accent-border)",
        "accent-placeholder": "var(--accent-placeholder)",
        "accent-text": "var(--accent-text)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        mono: ["var(--font-mono)", ...fontFamily.mono],
      },
      fontSize: {
        "3xl": "2rem",
        "4xl": "2.5rem",
      },
      spacing: {
        18: "4.5rem",
        26: "6.5rem",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
