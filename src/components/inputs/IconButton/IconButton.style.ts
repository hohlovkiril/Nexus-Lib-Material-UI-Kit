import { IconButton, styled } from "@mui/material";
import { IconButtonProps } from "./IconButton.types";

export const StyledIconButton = styled(IconButton, {
  shouldForwardProp: (prop) => prop !== 'variant',
})<IconButtonProps>(() => ({
  variants: [
    {
      props: { variant: 'rounded' },
      style: {
        borderRadius: '6px',
      }
    }
  ]
}))