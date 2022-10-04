import { styled } from "@/styles";

export const WorkExperienceContainer = styled("div", {
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
    width: "2.5rem",
    height: "2.5rem",
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
