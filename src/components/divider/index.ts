import * as SeparatorPrimitive from "@radix-ui/react-separator";

import { styled } from "@/styles";

export const Divider = styled(SeparatorPrimitive.Root, {
  backgroundColor: "$neutral-divider",

  "&[data-orientation=horizontal]": {
    height: 1,
    width: 120,
    margin: "0 auto",
  },
});
