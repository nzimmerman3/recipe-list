import React from "react";
import { CardActionArea } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";

function FoodHeader(props) {
  let navigate = useNavigate();
  return (
    <CardActionArea
      onClick={() => navigate("/recipe", { state: props.recipe })}
    >
      <CardMedia
        component="img"
        height="140"
        image={props.recipe.image}
        alt="Baked Ziti"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.recipe.name}
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={6} style={{ textAlign: "left" }}>
            <Typography variant="body2" color="text.primary">
              Serves {props.recipe.servings}
            </Typography>
          </Grid>
          <Grid item xs={6} style={{ textAlign: "right" }}>
            <Typography variant="body2" color="text.primary">
              Time: {props.recipe.time} {props.recipe.unit}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </CardActionArea>
  );
}

export default FoodHeader;
