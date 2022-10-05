import { InputHTMLAttributes, ReactNode } from "react";

import { InputContainer, PreffixContainer } from "./styles";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  preffix: ReactNode;
};

export const Input = ({ preffix, ...props }: InputProps) => {
  return (
    <InputContainer>
      <PreffixContainer>{preffix}</PreffixContainer>
      <input {...props} />
    </InputContainer>
  );
};
