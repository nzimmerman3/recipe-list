import React from "react";
import Navbar from "../components/Navbar";
import Directions from "../components/Directions";
import { useLocation } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@mui/material/Container";
import CardMedia from "@mui/material/CardMedia";

/* 
{
    "name": "Baked Ziti",
    "desc": "This bubbling baked ziti is perfect for feeding a crowd, and it freezes well too.",
    "time": 90,
    "servings": 8,
    "ingredients": [
      "1 lb ziti noodles",
      "1.5 lbs ground spicy or sweet Italian sausage (or removed from casings)",
      "4 cloves garlic, minced",
      "1 (28-oz) can crushed tomatoes",
      "1 teaspoon salt",
      "1½ teaspoons sugar",
      "¼ teaspoon crushed red pepper flakes",
      "1 cup heavy cream",
      "⅓ cup plus 3 tablespoons grated pecorino Romano (or Parmigiano Reggiano) cheese, divided",
      "⅓ cup chopped fresh basil, plus more for serving",
      "8 oz whole milk mozzarella cheese, shredded (about 2 cups)"
    ],
    "image": "/images/Baked-Ziti.jpg"
  }
*/

const Recipe = () => {
  const { state } = useLocation();
  return (
    <div>
      <Navbar />
      <Container>
        <CardMedia
          component="img"
          height="140"
          image={state.image}
          alt="Baked Ziti"
        />
        <Grid
          container
          // spacing={2}
          marginTop={1}
          border={1}
          padding={1}
          direction="column"
          alignItems="center"
          justifyContent={"center"}
          // style={{ backgroundColor: "#f5f5f5" }}
        >
          <Typography variant="h6" xs={12}>
            Ingredients
          </Typography>

          {state.ingredients.map((ingredient, index) => (
            // <Typography variant="subtitle1">{ingredient}</Typography>
            <Grid container item xs={12} key={index}>
              {ingredient}
            </Grid>
          ))}
        </Grid>
        <Directions directions={state.directions} />
      </Container>
    </div>
  );
};

export default Recipe;
