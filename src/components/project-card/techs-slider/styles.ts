import { IconButton } from "@/components/icon-button";
import { styled } from "@/styles";

export const TechsSliderContainer = styled("div", {
  position: "relative",
  marginTop: "1.75rem",
});

export const SliderNavigation = styled("div", {
  height: "100%",
  zIndex: 10,

  display: "flex",

  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",

  "&.swiper-button-disabled": {
    display: "none",
  },

  [`${IconButton}`]: {
    backgroundColor: "$accent-shape",
  },

  variants: {
    direction: {
      right: {
        right: -16,

        "&::before": {
          content: "",
          width: 32,
          height: "100%",
          background:
            "linear-gradient(to left, $accent-shape, rgba(25, 33, 64, 0.9) 10%, rgba(25, 33, 64, 0.01) 90%)",
        },
      },
      left: {
        left: -16,

        "&::after": {
          content: "",
          width: 32,
          height: "100%",
          background:
            "linear-gradient(to right, $accent-shape, rgba(25, 33, 64, 0.9) 10%, rgba(25, 33, 64, 0.01) 90%)",
        },
      },
    },
  },
});
