import React from 'react'
import {
  CardProps,
  CardActionAreaProps,
  CardHeaderProps,
  CardContentProps,
  CardActionsProps,
  CardMediaProps,
} from './Card.types'
import {
  StyledCard,
  StyledCardActionArea,
  StyledCardHeader,
  StyledCardContent,
  StyledCardActions,
  StyledCardMedia,
} from './Card.style'

export const Card: React.FC<CardProps> = (props) => {
  return (
    <StyledCard
      {...props}
    >
      {props.children}
    </StyledCard>
  )
}

export const CardActionArea: React.FC<CardActionAreaProps> = (props) => {
  return (
    <StyledCardActionArea
      {...props}
    >
      {props.children}
    </StyledCardActionArea>
  )
}

export const CardHeader: React.FC<CardHeaderProps> = (props) => {
  return (
    <StyledCardHeader
      {...props}
    >
      {props.children}
    </StyledCardHeader>
  )
}

export const CardContent: React.FC<CardContentProps> = (props) => {
  return (
    <StyledCardContent
      {...props}
    >
      {props.children}
    </StyledCardContent>
  )
}

export const CardActions: React.FC<CardActionsProps> = (props) => {
  return (
    <StyledCardActions
      {...props}
    >
      {props.children}
    </StyledCardActions>
  )
}

export const CardMedia: React.FC<CardMediaProps> = (props) => {
  return (
    <StyledCardMedia
      {...props}
    />
  )
}