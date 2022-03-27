import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Directions from "../components/Directions";
import { useLocation } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Container from "@mui/material/Container";
import CardMedia from "@mui/material/CardMedia";
import { Divider } from "@mui/material";
import { Grid } from "@mui/material";
import Author from "../components/Author";

const Recipe = () => {
  const { state } = useLocation();
  return (
    <div>
      <Navbar />

      <Container style={{ marginTop: "13vh", marginBottom: "3vh" }}>
        <Typography
          align="center"
          variant="h4"
          xs={12}
          style={{ marginBottom: "2vh", marginTop: "14vh" }}
        >
          {state.name}
        </Typography>

        <Grid container spacing={5}>
          <Grid item xs={9}>
            <CardMedia
              className="recipe-image"
              component="img"
              image={state.image}
              alt="Baked Ziti"
            />

            <Typography align="center" variant="subtitle2">
              {state.desc}
            </Typography>
          </Grid>
          <Grid item xs={3} alignItems="center">
            <Author image={state.author.image} name={state.author.name} />
          </Grid>
        </Grid>

        <Divider />
        <Typography variant="h6" className="recipe-ingredients-title">
          Ingredients
        </Typography>
        <ul className="recipe-ingredient-list">
          {state.ingredients.map((ingredient, index) => (
            <li className="recipe-ingredient-item" key={index}>
              {ingredient}
            </li>
          ))}
        </ul>
        <Divider />

        <Directions directions={state.directions} />
      </Container>
      <Footer />
    </div>
  );
};

export default Recipe;
