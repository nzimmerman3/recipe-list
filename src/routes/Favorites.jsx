import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Navbar from "../components/Navbar";
import axios from "axios";
import RecipeCard from "../components/RecipeCard";
import Grid from "@mui/material/Grid";
import Footer from "../components/Footer";
import { Container } from "@mui/material";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  const { isAuthenticated, user } = useAuth0();

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/favorites", {
        params: { id: user.sub },
      })
      .then(({ data }) => {
        data.favorites.forEach((favorite) => {
          axios
            .get("http://localhost:3001/api/recipe", {
              params: { recipe: favorite },
            })
            .then(({ data }) => {
              setFavorites((prevFavorites) => [...prevFavorites, data]);
            });
        });
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
          {favorites.map((recipe, index) => {
            return (
              <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
                <RecipeCard
                  recipe={recipe}
                  favorites={favorites}
                  favorite={true}
                />
              </Grid>
            );
          })}
        </Grid>
      </Container>

      <Footer />
    </div>
  );
};

export default Favorites;
