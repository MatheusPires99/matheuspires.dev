import { Card } from "@/components/card";
import { ChipsGroup } from "@/components/chip";
import { styled } from "@/styles";

import { Heading } from "../heading";

export const FeaturedProjectContainer = styled("div", {
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

export const ProjectImageContainer = styled("div", {
  borderRadius: "$sm",
  border: "1px solid $accent-border",
  overflow: "hidden",
  width: 602,
  height: 328,
  position: "relative",

  img: {
    transition: "transform 0.2s ease-in-out",

    "&:hover": {
      transform: "scale(1.1)",
    },
  },
});

export const ProjectContent = styled("div", {
  width: 430,

  display: "flex",
  flexDirection: "column",

  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",

  [`${Heading}`]: {
    transition: "color 0.2s",

    "&:hover": {
      color: "$text-contrast",
    },
  },

  [`${ChipsGroup}`]: {
    marginTop: "1rem",
  },

  [`${Card}`]: {
    marginTop: "1.5rem",
    lineHeight: "1.5",
  },

  footer: {
    marginTop: "1rem",

    display: "flex",
    alignItems: "center",
  },

  variants: {
    direction: {
      left: {
        alignItems: "flex-end",
        right: 0,

        [`${Card}`]: {
          textAlign: "right",
        },
      },
      right: {
        alignItems: "flex-start",
        left: 0,

        [`${Card}`]: {
          textAlign: "left",
        },
      },
    },
  },
});
