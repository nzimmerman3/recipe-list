import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Directions from "../components/Directions";
import { useLocation } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Container from "@mui/material/Container";
import CardMedia from "@mui/material/CardMedia";
import { Button, Divider } from "@mui/material";
import { Grid } from "@mui/material";
import Author from "../components/Author";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Recipe = () => {
  let navigate = useNavigate();

  const { state } = useLocation();
  const [remove, setRemove] = useState(false);
  useEffect(async () => {
    if (remove) {
      try {
        console.log(state);
        await axios
          .delete("http://localhost:3001/api/recipes", {
            data: { recipe: state._id },
          })
          .then(navigate("/"));
      } catch (err) {
        console.log(err);
      }
    }
  });
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
        <Button variant="outlined" onClick={() => setRemove(true)} color="form">
          Delete Recipe
        </Button>
      </Container>
      <Footer />
    </div>
  );
};

export default Recipe;
