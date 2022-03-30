import React, { useEffect, useState } from "react";
import Recipe from "../components/RecipeCard";
import Grid from "@mui/material/Grid";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Container } from "@mui/material";
import axios from "axios";
// import recipeData from "../data/recipes.json";

function Home() {
  const [recipes, setRecipes] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/recipes")
      .then(({ data }) => {
        setRecipes(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <Navbar />
      <Container>
        <Grid container className="under-navbar" spacing={2} marginBottom={2}>
          {recipes.map((recipe, index) => {
            return (
              <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
                <Recipe recipe={recipe} />{" "}
              </Grid>
            );
          })}
        </Grid>
      </Container>

      <Footer />
    </div>
  );
}

export default Home;
