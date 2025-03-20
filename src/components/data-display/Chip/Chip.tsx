import React from "react";
import { ChipProps } from './Chip.types';
import { StyledChip } from "./Chip.style";

export const Chip: React.FC<ChipProps> = (props) => {
  return (
    <StyledChip
      {...props}
    >
      {props.children}
    </StyledChip>
  )
}