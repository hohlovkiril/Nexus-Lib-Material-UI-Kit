import React from 'react';
import { DividerProps } from './Divider.types';
import { StyledDivider } from './Divider.style';

export const Divider: React.FC<DividerProps> = (props) => {
  return (
    <StyledDivider
      {...props}
    >
      {props.children}
    </StyledDivider>
  )
}