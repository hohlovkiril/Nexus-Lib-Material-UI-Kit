import React from 'react';
import { BreadcrumbsProps } from './Breadcrumbs.types';
import { StyledBreadcrumbs } from './Breadcrumbs.style';

export const Breadcrumbs: React.FC<BreadcrumbsProps> = (props) => {
  return (
    <StyledBreadcrumbs
      {...props}
    >
      {props.children}
    </StyledBreadcrumbs>
  )
}