import React from "react";
import { SliderProps } from "./Slider.types";
import { StyledSlider } from "./Slider.style";

export const Slider: React.FC<SliderProps> = (props) => {
  return (
    <StyledSlider
      {...props}
    />
  )
}