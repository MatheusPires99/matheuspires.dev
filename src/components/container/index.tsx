import { styled } from "@/styles";

export const Container = styled("div", {
  maxWidth: "$page-width",
  width: "100%",
  margin: "0 auto",
  padding: "0 2rem",

  "@mobile": {
    padding: "0 1rem",
  },
});
