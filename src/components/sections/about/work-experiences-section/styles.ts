import { styled } from "@stitches/react";

export const WorkExperienceGroup = styled("div", {
  position: "relative",

  "&::before": {
    content: "",
    height: "100%",
    width: 2,
    backgroundColor: "$shape",
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)",
  },
});
