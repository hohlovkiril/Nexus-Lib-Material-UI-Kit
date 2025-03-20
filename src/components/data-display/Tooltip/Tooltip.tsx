import React from "react";
import { TooltipProps } from "./Tooltip.types";
import { StyledTooltip } from "./Tooltip.style";

export const Tooltip: React.FC<TooltipProps> = (props) => {
  return (
    <StyledTooltip
      {...props}
    >
      {props.children}
    </StyledTooltip>
  )
}