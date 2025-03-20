import React from 'react';
import { BadgeProps } from './Badge.types';
import { StyledBadge } from './Badge.style'

export const Badge: React.FC<BadgeProps> = (props) => {
  return (
    <StyledBadge
      {...props}
    >
      {props.children}
    </StyledBadge>
  )
}