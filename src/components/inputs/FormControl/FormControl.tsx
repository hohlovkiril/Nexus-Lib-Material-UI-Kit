import React from "react";
import {
  FormControlProps,
  FormGroupProps,
  FormLabelProps,
  FormControlLabelProps
} from './FormControl.types'
import {
  StyledFormControl,
  StyledFormGroup,
  StyledFormLabel,
  StyledFormControlLabel
} from './FormControl.style'

export const FormControl: React.FC<FormControlProps> = (props) => {
  return (
    <StyledFormControl
      {...props}
    >
      {props.children}
    </StyledFormControl>
  )
}

export const FormGroup: React.FC<FormGroupProps> = (props) => {
  return (
    <StyledFormGroup
      {...props}
    >
      {props.children}
    </StyledFormGroup>
  )
}

export const FormLabel: React.FC<FormLabelProps> = (props) => {
  return (
    <StyledFormLabel
      {...props}
    >
      {props.children}
    </StyledFormLabel>
  )
}

export const FormControlLabel: React.FC<FormControlLabelProps> = (props) => {
  return (
    <StyledFormControlLabel
      {...props}
    />
  )
}