import { styled } from "@/styles";

export const ProjectCardContainer = styled("div", {
  height: "100%",
  backgroundColor: "$shape",
  borderRadius: "$sm",
  boxShadow: "$md",
  overflow: "hidden",

  display: "flex",
  flexDirection: "column",
});

export const ProjectCardContent = styled("div", {
  padding: "1.5rem",
  paddingTop: "1rem",

  display: "flex",
  flexDirection: "column",
  flex: 1,
});

export const ProjectCardHead = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  div: {
    display: "flex",
    alignItems: "center",
  },
});

export const ProjectCardDescription = styled("p", {
  flex: 1,
  marginTop: "1rem",
  color: "$accent-text",
  lineHeight: "1.5",
  display: "-webkit-box",
  "-webkit-line-clamp": "4",
  "-webkit-box-orient": "vertical",
  overflow: "hidden",
});
