import React from "react";
import Card from "@mui/material/Card";
import FoodHeader from "./FoodHeader";
import FoodFooter from "./FoodFooter";

const RecipeCard = ({ recipe, favorites }) => {
  return (
    <div>
      <Card>
        <FoodHeader recipe={recipe} />
        <FoodFooter recipe={recipe} favorites={favorites} />
      </Card>
    </div>
  );
};

export default RecipeCard;
