import React from "react";
import { RatingProps } from "./Rating.types";
import { StyledRating } from "./Rating.style";

export const Rating: React.FC<RatingProps> = (props) => {
  return (
    <StyledRating
      {...props}
    />
  )
}