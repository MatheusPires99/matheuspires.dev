import { ComponentProps } from "react";

import { StyledHeading } from "./styles";

type HeadingProps = ComponentProps<typeof StyledHeading>;

export const Heading = ({ children, ...props }: HeadingProps) => {
  return (
    <StyledHeading as={props.size as any} {...props}>
      {children}
    </StyledHeading>
  );
};
