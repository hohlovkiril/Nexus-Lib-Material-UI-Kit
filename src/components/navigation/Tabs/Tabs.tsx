import React from 'react';
import {
  TabsProps,
  TabProps,
  TabPanelProps,
} from './Tabs.types'
import {
  StyledTabs,
  StyledTab,
  StyledTabPanel,
} from './Tabs.style';

export const Tabs: React.FC<TabsProps> = (props) => {
  return (
    <StyledTabs
      {...props}
    >
      {props.children}
    </StyledTabs>
  )
}

export const Tab: React.FC<TabProps> = (props) => {
  return (
    <StyledTab
      {...props}
    >
      {props.children}
    </StyledTab>
  )
}

export const TabPanel: React.FC<TabPanelProps> = (props) => {

  if (props.tabIndex !== props.tabValue) return null;

  return (
    <StyledTabPanel
      {...props}
    >
      {props.children}
    </StyledTabPanel>
  )
}