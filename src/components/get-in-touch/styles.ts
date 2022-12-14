import { Button } from "@/components/button";
import { styled } from "@/styles";

import { Container } from "../container";

export const GetInTouchContainer = styled(Container, {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  p: {
    marginTop: "1rem",
    textAlign: "center",
    fontSize: "$lg",
    lineHeight: "$base",
    color: "$accent-text",
  },

  [`${Button}`]: {
    marginTop: "3.5rem",

    "@mobile": {
      marginTop: "2.5rem",
    },
  },
});
