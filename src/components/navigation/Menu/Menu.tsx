import React from 'react';
import {
  MenuProps,
  MenuListProps,
  MenuItemProps,
} from './Menu.types'
import {
  StyledMenu,
  StyledMenuList,
  StyledMenuItem,
} from './Menu.style'

export const Menu: React.FC<MenuProps> = (props) => {
  return (
    <StyledMenu
      {...props}
    >
      {props.children}
    </StyledMenu>
  )
}

export const MenuList: React.FC<MenuListProps> = (props) => {
  return (
    <StyledMenuList
      {...props}
    >
      {props.children}
    </StyledMenuList>
  )
}

export const MenuItem: React.FC<MenuItemProps> = (props) => {
  return (
    <StyledMenuItem
      {...props}
    >
      {props.children}
    </StyledMenuItem>
  )
}