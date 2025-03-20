import React from 'react';
import { StackProps } from './Stack.types';
import { StyledStack } from './Stack.style';

export const Stack: React.FC<StackProps> = (props) => {
  return (
    <StyledStack
      {...props}
    >
      {props.children}
    </StyledStack>
  )
}