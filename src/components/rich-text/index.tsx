import { ComponentProps } from "react";

import { RichTextContainer } from "./styles";

type RichTextProps = ComponentProps<typeof RichTextContainer> & {
  children: string;
};

export const RichText = ({ children, ...props }: RichTextProps) => {
  return (
    <RichTextContainer
      {...props}
      dangerouslySetInnerHTML={{ __html: children }}
    />
  );
};
