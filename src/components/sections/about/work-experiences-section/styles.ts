import { styled } from "@/styles";

export const WorkExperience = styled("div", {
  display: "flex",
  alignItems: "center",

  "@tablet": {
    gap: "1.5rem",
    alignItems: "flex-start",
  },
});

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

export const CompanyImage = styled("div", {
  backgroundColor: "$shape",
  borderRadius: "$full",
  width: "3.75rem",
  height: "3.75rem",
  zIndex: 2,

  position: "absolute",
  left: "50%",
  marginLeft: "calc(-3.75rem / 2)",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,

  "@tablet": {
    position: "unset",
    margin: 0,
  },

  img: {
    width: "2.5rem",
    height: "2.5rem",
  },
});

export const WorkExperienceContent = styled("div", {
  width: "45%",

  display: "flex",
  flexDirection: "column",

  "@tablet": {
    width: "auto",
  },
});

export const WorkExperiencePeriod = styled("span", {
  fontFamily: "$code",
  color: "$accent-text",
  marginTop: "0.5rem",
  display: "block",
});
