import { styled } from "@/styles";

export const InputContainer = styled("div", {
  position: "relative",
  width: "100%",

  input: {
    width: "100%",
    border: "1px solid $accent-border",
    borderRadius: "$sm",
    backgroundColor: "transparent",
    color: "$text",
    height: "3.25rem",
    padding: "0 1rem",
    paddingLeft: "2.75rem",

    "&:focus": {
      boxShadow: "0 0 0 2px $colors$border-hover",
    },

    "&:focus-visible": {
      outline: "none",
    },

    "&::placeholder": {
      color: "$accent-placeholder",
    },
  },
});

export const PreffixContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  position: "absolute",
  left: "1rem",
  top: "50%",
  transform: "translateY(-50%)",

  svg: {
    width: "1.25rem",
    height: "1.25rem",
    color: "$accent-placeholder",
  },
});
