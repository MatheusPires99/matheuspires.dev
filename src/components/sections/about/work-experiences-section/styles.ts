import { WorkExperienceContainer as WorkExperience } from "@/components/work-experience/styles";
import { styled } from "@/styles";

export const WorkExperienceGroup = styled("div", {
  position: "relative",

  display: "flex",
  flexDirection: "column",

  "@tablet": {
    gap: "2rem",
  },

  "&::before": {
    content: "",
    height: "100%",
    width: 2,
    backgroundColor: "$shape",
    position: "absolute",
    left: "50%",

    "@tablet": {
      left: "calc(3.75rem / 2)",
    },
  },

  [`${WorkExperience}:nth-child(even)`]: {
    flexDirection: "row-reverse",

    "@tablet": {
      flexDirection: "row",
    },
  },
});
