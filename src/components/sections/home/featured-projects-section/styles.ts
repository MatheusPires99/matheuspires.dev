import { styled } from "@/styles";

export const FeaturedProjectsGroup = styled("div", {
  marginTop: "3.5rem",

  display: "flex",
  flexDirection: "column",
  gap: "6.5rem",

  "@mobile": {
    gap: "4rem",
  },
});

export const FeaturedProject = styled("div", {
  position: "relative",
  display: "flex",

  variants: {
    direction: {
      left: {
        justifyContent: "flex-start",
      },
      right: {
        justifyContent: "flex-end",
      },
    },
  },
});

export const FeaturedProjectImageContainer = styled("div", {
  borderRadius: "$sm",
  border: "1px solid $accent-border",
  overflow: "hidden",
  width: 602,
  height: 328,
  position: "relative",

  "@laptop": {
    width: "100%",
    height: 216,
    zIndex: -1,
    position: "absolute",
    top: "6.5rem",
  },

  img: {
    objectFit: "cover",
    transition: "transform 0.2s ease-in-out",

    "&:hover": {
      transform: "scale(1.05)",

      "@tablet": {
        transform: "none",
      },
    },
  },
});

export const FeaturedProjectContent = styled("div", {
  width: 430,

  display: "flex",
  flexDirection: "column",

  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",

  "@laptop": {
    width: "100%",
    position: "unset",
    top: "unset",
    transform: "unset",
  },
});
