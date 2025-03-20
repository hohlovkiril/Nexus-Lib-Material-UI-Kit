import React from "react";
import { SwitchProps } from "./Switch.types";
import { StyledSwitch } from "./Switch.style";

export const Switch: React.FC<SwitchProps> = (props) => {
  return (
    <StyledSwitch
      {...props}
    />
  )
}