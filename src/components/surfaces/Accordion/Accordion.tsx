import React from "react";
import { AccordionProps, AccordionSummaryProps, AccordionDetailsProps } from "./Accordion.types";
import { StyledAccordion, StyledAccordionSummary, StyledAccordionDetails} from './Accordion.style'

export const Accordion: React.FC<AccordionProps> = (props) => {
  return (
    <StyledAccordion
      {...props}
    >
      {props.children}
    </StyledAccordion>
  )
}

export const AccordionSummary: React.FC<AccordionSummaryProps> = (props) => {
  return (
    <StyledAccordionSummary
      {...props}
    >
      {props.children}
    </StyledAccordionSummary>
  )
}

export const AccordionDetails: React.FC<AccordionDetailsProps> = (props) => {
  return (
    <StyledAccordionDetails
      {...props}
    >
      {props.children}
    </StyledAccordionDetails>
  )
}