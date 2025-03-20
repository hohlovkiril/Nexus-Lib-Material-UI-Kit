import React from "react";
import { CheckboxProps } from "./Checkbox.types";
import { StyledCheckbox } from "./Checkbox.style";

export const Checkbox: React.FC<CheckboxProps> = (props) => {
  return (
    <StyledCheckbox
      {...props}
    />
  )
}