import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Directions from "../components/Directions";
import Typography from "@material-ui/core/Typography";
import Container from "@mui/material/Container";
import CardMedia from "@mui/material/CardMedia";
import { Button, Divider } from "@mui/material";
import { Grid } from "@mui/material";
import Author from "../components/Author";
import axios from "axios";
import { useNavigate, useSearchParams } from "react-router-dom";

const Recipe = () => {
  let navigate = useNavigate();

  const [searchParams] = useSearchParams();
  const params = searchParams.get("id");

  const [remove, setRemove] = useState(false);
  const [recipe, setRecipe] = useState({});

  useEffect(async () => {
    try {
      await axios
        .get("http://localhost:3001/api/recipe", {
          params: { recipe: params },
        })
        .then((recipe) => {
          setRecipe(recipe.data);
        });
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(async () => {
    if (remove) {
      try {
        await axios
          .delete("http://localhost:3001/api/recipes", {
            data: { recipe: recipe._id },
          })
          .then(navigate("/"));
      } catch (err) {
        console.log(err);
      }
    }
  });

  return (
    <div>
      {Object.keys(recipe).length === 0 ? (
        <div></div>
      ) : (
        <div>
          <Navbar />

          <Container style={{ marginTop: "13vh", marginBottom: "3vh" }}>
            <Typography
              align="center"
              variant="h4"
              xs={12}
              style={{ marginBottom: "2vh", marginTop: "14vh" }}
            >
              {recipe.name}
            </Typography>

            <Grid container spacing={5}>
              <Grid item xs={9}>
                <CardMedia
                  className="recipe-image"
                  component="img"
                  image={recipe.image}
                  alt="Baked Ziti"
                />

                <Typography align="center" variant="subtitle2">
                  {recipe.desc}
                </Typography>
              </Grid>
              <Grid item xs={3} alignItems="center">
                <Author image={recipe.author.image} name={recipe.author.name} />
              </Grid>
            </Grid>

            <Divider />
            <Typography variant="h6" className="recipe-ingredients-title">
              Ingredients
            </Typography>
            <ul className="recipe-ingredient-list">
              {recipe.ingredients.map((ingredient, index) => (
                <li className="recipe-ingredient-item" key={index}>
                  {ingredient}
                </li>
              ))}
            </ul>
            <Divider />

            <Directions directions={recipe.directions} />
            <Button
              variant="outlined"
              onClick={() => setRemove(true)}
              color="form"
            >
              Delete Recipe
            </Button>
          </Container>
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Recipe;
