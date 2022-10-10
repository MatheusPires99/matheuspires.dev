import Image from "next/future/image";

import { styled } from "@/styles";

export const BioHeader = styled("header", {
  marginBottom: "2rem",

  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

export const BioImage = styled(Image, {
  "@laptop": {
    width: "100%",
    height: "100%",
  },
});
