import { styled } from "@/styles";

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

export const WorkExperience = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "1rem",

  variants: {
    direction: {
      right: {
        flexDirection: "row-reverse",
      },
      left: {
        flexDirection: "row",
      },
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

  img: {
    width: "1.5rem",
    height: "1.5rem",
  },
});

export const WorkContent = styled("div", {
  width: "45%",

  display: "flex",
  flexDirection: "column",
});

export const RoleAndCompany = styled("div", {
  fontSize: "$xl",

  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
});

export const WorkPeriod = styled("span", {
  fontFamily: "$mono",
  color: "$accent-text",
  marginTop: "0.5rem",
  display: "block",
});
