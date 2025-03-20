import React from "react";
import { PaperProps } from "./Paper.types";
import { StyledPaper } from "./Paper.style";

export const Paper: React.FC<PaperProps> = (props) => {
  return (
    <StyledPaper
      {...props}
    >
      {props.children}
    </StyledPaper>
  )
}