import React from 'react'
import {
  MobileStepperProps,
  StepperProps,
  StepProps,
  StepButtonProps,
  StepConnectorProps,
  StepContentProps,
  StepIconProps,
  StepLabelProps,
} from './Stepper.types'
import {
  StyledMobileStepper,
  StyledStepper,
  StyledStep,
  StyledStepButton,
  StyledStepConnector,
  StyledStepContent,
  StyledStepIcon,
  StyledStepLabel
} from './Stepper.style'

export const MobileStepper: React.FC<MobileStepperProps> = (props) => {
  return (
    <StyledMobileStepper
      {...props}
    />
  )
}

export const Stepper: React.FC<StepperProps> = (props) => {
  return (
    <StyledStepper
      {...props}
    >
      {props.children}
    </StyledStepper>
  )
}

export const Step: React.FC<StepProps> = (props) => {
  return (
    <StyledStep
      {...props}
    >
      {props.children}
    </StyledStep>
  )
}

export const StepButton: React.FC<StepButtonProps> = (props) => {
  return (
    <StyledStepButton
      {...props}
    >
      {props.children}
    </StyledStepButton>
  )
}

export const StepConnector: React.FC<StepConnectorProps> = (props) => {
  return (
    <StyledStepConnector
      {...props}
    />
  )
}

export const StepContent: React.FC<StepContentProps> = (props) => {
  return (
    <StyledStepContent
      {...props}
    >
      {props.children}
    </StyledStepContent>
  )
}

export const StepIcon: React.FC<StepIconProps> = (props) => {
  return (
    <StyledStepIcon
      {...props}
    />
  )
}

export const StepLabel: React.FC<StepLabelProps> = (props) => {
  return (
    <StyledStepLabel
      {...props}
    >
      {props.children}
    </StyledStepLabel>
  )
}