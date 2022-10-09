import { WorkExperienceContainer as WorkExperience } from "@/components/work-experience/styles";
import { styled } from "@/styles";

export const WorkExperienceGroup = styled("div", {
  position: "relative",

  display: "flex",
  flexDirection: "column",

  "@mobile": {
    gap: "2rem",
  },

  "&::before": {
    content: "",
    height: "100%",
    width: 2,
    backgroundColor: "$shape",
    position: "absolute",
    left: "50%",

    "@mobile": {
      left: "calc(3.75rem / 2)",
    },
  },

  [`${WorkExperience}:nth-child(even)`]: {
    flexDirection: "row-reverse",

    "@mobile": {
      flexDirection: "row",
    },
  },
});
