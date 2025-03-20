import React from "react";
import { ButtonProps } from "./Button.types";
import { StyledButton } from "./Button.style";

export const Button: React.FC<ButtonProps> = (props) => {
  return (
    <StyledButton
      {...props}
    >
      {props.children}
    </StyledButton>
  )
}