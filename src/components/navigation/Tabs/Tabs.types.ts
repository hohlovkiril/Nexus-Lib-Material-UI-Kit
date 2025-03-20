import {
  TabsProps as MuiTabsProps,
  TabProps as MuiTabProps,
  BoxProps as MuiBoxProps,
} from '@mui/material'

export type TabsProps = {} & MuiTabsProps;

export type TabProps = {} & MuiTabProps;

export type TabPanelProps = {
  tabIndex: number;
  tabValue: number;
} & MuiBoxProps;