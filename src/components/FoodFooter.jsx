import React from "react";
import { Button, CardActions } from "@mui/material";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";

function FoodFooter(props) {
  return (
    <CardActions>
      <Grid container spacing={2}>
        <Grid item xs={6} style={{ textAlign: "left" }}>
          <Button size="small" style={{ color: "black" }}>
            Share
          </Button>
        </Grid>
        <Grid item xs={6} style={{ textAlign: "right" }}>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
        </Grid>
      </Grid>
    </CardActions>
  );
}

export default FoodFooter;
