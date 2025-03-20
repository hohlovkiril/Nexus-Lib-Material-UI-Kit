import React from "react";
import { BoxProps } from "./Box.types";
import { StyledBox } from "./Box.style";

export const Box: React.FC<BoxProps> = (props) => {
  return (
    <StyledBox
      {...props}
    >
      {props.children}
    </StyledBox>
  )
}