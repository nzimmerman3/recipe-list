import React from "react";
import RecipeDirection from "./RecipeDirection";
import Typography from "@material-ui/core/Typography";

const Directions = (props) => {
  return (
    <div>
      <Typography variant="h6" xs={12} className="recipe-ingredients-title">
        Directions
      </Typography>
      <ol>
        {props.directions.map((direction, index) => (
          <RecipeDirection key={index} direction={direction} />
        ))}
      </ol>
    </div>
  );
};

export default Directions;
