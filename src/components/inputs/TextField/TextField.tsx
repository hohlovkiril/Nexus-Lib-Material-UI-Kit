import React from "react";
import { TextFieldProps } from "./TextField.types";
import { StyledTextField } from "./TextField.style";

export const TextField: React.FC<TextFieldProps> = (props) => {
  return (
    <StyledTextField
      {...props}
    />
  )
}