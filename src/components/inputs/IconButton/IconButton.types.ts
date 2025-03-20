import {
  IconButtonProps as MuiIconButtonProps,
} from "@mui/material";

export type IconButtonProps = {
  variant?: 'circle' | 'rounded';
} & MuiIconButtonProps;