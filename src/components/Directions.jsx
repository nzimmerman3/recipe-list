import React from "react";
import RecipeDirection from "./RecipeDirection";

const Directions = (props) => {
  return (
    <div>
      {props.directions.map((direction) => (
        <RecipeDirection direction={direction} />
      ))}
    </div>
  );
};

export default Directions;
