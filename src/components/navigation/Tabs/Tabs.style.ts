import {
  styled,
  Box,
  Tabs,
  Tab,
} from '@mui/material';
import { TabPanelProps } from './Tabs.types';

export const StyledTabs = styled(Tabs)(() => ({

}))

export const StyledTab = styled(Tab)(() => ({

}))

export const StyledTabPanel = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'tabIndex'
    && prop !== 'tabValue'
})<TabPanelProps>(({ tabIndex, tabValue }) => ({
  variants: [
    {
      props: { tabValue: tabIndex === tabValue },
      style: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        gap: '.5em',
      }
    },
    {
      props: { tabValue: tabIndex !== tabValue },
      style: {
        display: 'none',
      }
    }
  ]
}))