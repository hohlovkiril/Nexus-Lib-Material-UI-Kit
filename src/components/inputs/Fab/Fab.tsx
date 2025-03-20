import React from "react";
import { FabProps } from "./Fab.types";
import { StyledFab } from "./Fab.style";

export const Fab: React.FC<FabProps> = (props) => {
  return (
    <StyledFab
      {...props}
    >
      {props.children}
    </StyledFab>
  )
}