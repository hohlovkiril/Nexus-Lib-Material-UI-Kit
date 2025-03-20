import React from 'react';
import { IconButtonProps } from './IconButton.types';
import { StyledIconButton } from './IconButton.style';

export const IconButton: React.FC<IconButtonProps> = (props) => {
  return (
    <StyledIconButton
      {...props}
    >
      {props.children}
    </StyledIconButton>
  )
}