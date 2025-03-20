import React from "react";
import {
  RadioProps,
  RadioGroupProps,
} from './Radio.types'
import {
  StyledRadio,
  StyledRadioGroup,
} from './Radio.style'

export const Radio: React.FC<RadioProps> = (props) => {
  return (
    <StyledRadio
      {...props}
    />
  )
}

export const RadioGroup: React.FC<RadioGroupProps> = (props) => {
  return (
    <StyledRadioGroup
      {...props}
    >
      {props.children}
    </StyledRadioGroup>
  )
}