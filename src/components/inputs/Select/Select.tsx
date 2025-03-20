import React from "react";
import { SelectProps } from "./Select.types";
import { StyledSelect } from "./Select.style";

export const Select: React.FC<SelectProps> = (props) => {
  return (
    <StyledSelect
      {...props}
    >
      {props.children}
    </StyledSelect>
  )
}