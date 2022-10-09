import { styled } from "@/styles";

export const WorkExperienceContainer = styled("div", {
  display: "flex",
  alignItems: "center",

  "@mobile": {
    gap: "1.5rem",
    alignItems: "flex-start",
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

  "@mobile": {
    position: "unset",
    margin: 0,
  },

  img: {
    width: "2.5rem",
    height: "2.5rem",
  },
});

export const WorkContent = styled("div", {
  width: "45%",

  display: "flex",
  flexDirection: "column",

  "@mobile": {
    width: "auto",
  },
});

export const RoleAndCompany = styled("div", {
  fontSize: "$2xl",

  display: "flex",
  alignItems: "center",
  gap: "0.5rem",

  "@tablet": {
    flexWrap: "wrap",
  },
});

export const WorkPeriod = styled("span", {
  fontFamily: "$mono",
  color: "$accent-text",
  marginTop: "0.5rem",
  display: "block",
});
