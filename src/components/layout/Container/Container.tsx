import React from "react";
import { ContainerProps } from "./Container.types";
import { StyledContainer } from "./Container.style";

export const Container: React.FC<ContainerProps> = (props) => {
  return (
    <StyledContainer
      {...props}
    >
      {props.children}
    </StyledContainer>
  )
}