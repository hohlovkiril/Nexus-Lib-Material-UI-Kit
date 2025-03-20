import React from "react";
import { ButtonGroupProps } from "./ButtonGroup.types";
import { StyledButtonGroup } from "./ButtonGroup.style";

export const ButtonGroup: React.FC<ButtonGroupProps> = (props) => {
  return (
    <StyledButtonGroup
      {...props}
    >
      {props.children}
    </StyledButtonGroup>
  )
}