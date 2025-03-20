import React from "react";
import {
  ToggleButtonGroupProps,
  ToggleButtonProps,
} from './ToggleButton.types'
import {
  StyledToggleButtonGroup,
  StyledToggleButton,
} from './ToggleButton.style'

export const ToggleButtonGroup: React.FC<ToggleButtonGroupProps> = (props) => {
  return (
    <StyledToggleButtonGroup
      {...props}
    >
      {props.children}
    </StyledToggleButtonGroup>
  )
}

export const ToggleButton: React.FC<ToggleButtonProps> = (props) => {
  return (
    <StyledToggleButton
      {...props}
    >
      {props.children}
    </StyledToggleButton>
  )
}