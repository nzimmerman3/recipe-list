import React from "react";
import { Button, CardActions } from "@mui/material";

import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";

function FoodFooter(props) {
  return (
    <CardActions>
      <Button size="small" color="primary">
        Share
      </Button>
      <IconButton aria-label="add to favorites">
        <FavoriteIcon />
      </IconButton>
    </CardActions>
  );
}

export default FoodFooter;
