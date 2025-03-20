import React from 'react';
import { AvatarProps } from './Avatar.types'
import { StyledAvatar } from './Avatar.style';

export const Avatar: React.FC<AvatarProps> = (props) => {
  return (
    <StyledAvatar
      {...props}
    >
      {props.children}
    </StyledAvatar>
  )
}