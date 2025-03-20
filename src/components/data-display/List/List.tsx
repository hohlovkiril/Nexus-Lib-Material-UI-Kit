import React from 'react'
import { 
  ListProps,
  ListSubheaderProps,
  ListItemProps, 
  ListItemButtonProps, 
  ListItemAvatarProps,
  ListItemIconProps, 
  ListItemTextProps,
} from "./List.types";
import {
  StyledList,
  StyledListSubheader,
  StyledListItem,
  StyledListItemButton,
  StyledListItemAvatar,
  StyledListItemIcon,
  StyledListItemText,
} from './List.style'

export const List: React.FC<ListProps> = (props) => {
  return (
    <StyledList
      {...props}
    >
      {props.children}
    </StyledList>
  )
}

export const ListSubheader: React.FC<ListSubheaderProps> = (props) => {
  return (
    <StyledListSubheader
      {...props}
    >
      {props.children}
    </StyledListSubheader>
  )
}

export const ListItem: React.FC<ListItemProps> = (props) => {
  return (
    <StyledListItem
      {...props}
    >
      {props.children}
    </StyledListItem>
  )
}

export const ListItemButton: React.FC<ListItemButtonProps> = (props) => {
  return (
    <StyledListItemButton
      {...props}
    >
      {props.children}
    </StyledListItemButton>
  )
}

export const ListItemAvatar: React.FC<ListItemAvatarProps> = (props) => {
  return (
    <StyledListItemAvatar
      {...props}
    >
      {props.children}
    </StyledListItemAvatar>
  )
}

export const ListItemIcon: React.FC<ListItemIconProps> = (props) => {
  return (
    <StyledListItemIcon
      {...props}
    >
      {props.children}
    </StyledListItemIcon>
  )
}

export const ListItemText: React.FC<ListItemTextProps> = (props) => {
  return (
    <StyledListItemText
      {...props}
    >
      {props.children}
    </StyledListItemText>
  )
}