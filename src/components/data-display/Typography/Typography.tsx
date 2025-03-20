import React from "react";
import { TypographyProps } from "./Typography.types";
import { StyledTypography } from "./Typography.style";

export const Typography: React.FC<TypographyProps> = (props) => {
  return (
    <StyledTypography
      {...props}
    >
      {props.children}
    </StyledTypography>
  )
}