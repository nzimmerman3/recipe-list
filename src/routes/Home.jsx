import React from "react";
import Recipe from "../components/Recipe";
import Grid from "@mui/material/Grid";
import Navbar from "../components/Navbar";
import Recipes from "../data/recipes.json";

function Home() {
  return (
    <div>
      <Navbar />
      <Grid container spacing={2} marginTop={1}>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Recipe recipe={Recipes[0]} />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Recipe recipe={Recipes[0]} />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Recipe recipe={Recipes[0]} />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Recipe recipe={Recipes[0]} />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Recipe recipe={Recipes[0]} />
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
