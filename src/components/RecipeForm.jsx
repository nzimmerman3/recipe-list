import React, { useEffect, useState, useReducer } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import { useAuth0 } from "@auth0/auth0-react";

const RecipeForm = () => {
  let navigate = useNavigate();
  const [, forceUpdate] = useReducer((x) => x + 1, 0);
  const { user } = useAuth0();
  console.log(user);

  const [recipeInfo, setRecipeInfo] = useState({
    name: "",
    desc: "",
    time: 0,
    servings: 0,
    ingredients: [],
    image: "/images/Baked-Ziti.jpg",
    author: {
      image: "/images/Nick-Zimmerman.jpg",
      name: "",
    },
    directions: [],
  });
  const [error, setError] = useState({
    name: false,
    desc: false,
    time: false,
    servings: false,
    ingredients: false,
    directions: false,
  });
  const [currIngredient, setCurrIngredient] = useState("");
  const [currDirection, setCurrDirection] = useState("");
  const [submit, setSubmit] = useState(false);

  const handleNameChange = (event) => {
    event.persist();
    setRecipeInfo((recipeInfo) => ({
      ...recipeInfo,
      name: event.target.value,
    }));
  };

  const handleDescChange = (event) => {
    event.persist();
    setRecipeInfo((recipeInfo) => ({
      ...recipeInfo,
      desc: event.target.value,
    }));
  };

  const handleTimeChange = (event) => {
    event.persist();
    setRecipeInfo((recipeInfo) => ({
      ...recipeInfo,
      time: event.target.value,
    }));
  };

  const handleServingsChange = (event) => {
    event.persist();
    setRecipeInfo((recipeInfo) => ({
      ...recipeInfo,
      servings: event.target.value,
    }));
  };

  const addIngredient = () => {
    setRecipeInfo((recipeInfo) => ({
      ...recipeInfo,
      ingredients: [...recipeInfo.ingredients, currIngredient],
    }));
    setCurrIngredient("");
  };

  const addDirection = () => {
    setRecipeInfo((recipeInfo) => ({
      ...recipeInfo,
      directions: [...recipeInfo.directions, currDirection],
    }));
    setCurrDirection("");
  };

  const isValid = () => {
    return !(
      error.name ||
      error.desc ||
      error.time ||
      error.servings ||
      error.ingredients ||
      error.directions
    );
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setError((currError) => ({
      ...currError,
      name: recipeInfo.name === "",
      desc: recipeInfo.desc === "",
      time: !recipeInfo.time,
      servings: !recipeInfo.servings,
      ingredients: !recipeInfo.ingredients.length,
      directions: !recipeInfo.directions.length,
    }));
    setSubmit(true);
  };

  useEffect(async () => {
    if (isValid() && submit) {
      try {
        await axios
          .post("http://localhost:3001/api/recipes", recipeInfo)
          .then(navigate("/recipe", { state: recipeInfo }));
      } catch (err) {
        console.log(err);
      }
    }
  }, [error, submit]);

  const defaultSize = "25ch";
  const smallSize = "13ch";
  const fullSize = "66.5ch";

  return (
    <div
      className="recipe-form"
      style={{
        marginTop: "14vh",
        maxWidth: "99%",
      }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          "& .MuiTextField-root": { m: 1 },
          m: 1,
        }}
      >
        <div>
          <TextField
            sx={{ width: defaultSize }}
            variant="outlined"
            value={recipeInfo.name}
            onChange={handleNameChange}
            label="Recipe"
            color="form"
            error={error.name}
            helperText={error.name ? "Error!" : ""}
          />
          <TextField
            sx={{ width: defaultSize }}
            variant="outlined"
            type="number"
            value={recipeInfo.time === 0 ? "" : recipeInfo.time}
            onChange={handleTimeChange}
            label="Time"
            color="form"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">minutes</InputAdornment>
              ),
            }}
            error={error.time}
            helperText={error.time ? "Error!" : ""}
          />
          <TextField
            sx={{ width: smallSize }}
            variant="outlined"
            type="number"
            value={recipeInfo.servings === 0 ? "" : recipeInfo.servings}
            onChange={handleServingsChange}
            label="Servings"
            color="form"
            error={error.servings}
            helperText={error.servings ? "Error!" : ""}
          />
        </div>

        <TextField
          sx={{ width: fullSize }}
          variant="outlined"
          value={recipeInfo.desc}
          onChange={handleDescChange}
          label="Description"
          color="form"
          multiline
          error={error.desc}
          helperText={error.desc ? "Error!" : ""}
        />
        <ul>
          {recipeInfo.ingredients.map((ingredient, index) => (
            <li key={index} className="form-ingredient-item">
              <div className="form-ingredient-item-container">
                <div className="form-ingredient-text">{ingredient}</div>
                <Button
                  variant="outlined"
                  color="error"
                  onClick={() => {
                    console.log(index);
                    setRecipeInfo((currRecipeInfo) => {
                      currRecipeInfo.ingredients.splice(index, 1);
                      return currRecipeInfo;
                    });
                    forceUpdate();
                  }}
                >
                  Delete
                </Button>
              </div>
            </li>
          ))}
        </ul>

        <div style={{ display: "flex", alignItems: "center" }}>
          <TextField
            sx={{ width: fullSize }}
            variant="outlined"
            value={currIngredient}
            onChange={(event) => setCurrIngredient(event.target.value)}
            label="Ingredient"
            color="form"
            error={error.ingredients}
            helperText={error.ingredients ? "Error!" : ""}
          />
          <Button variant="outlined" onClick={addIngredient} color="form">
            Add
          </Button>
        </div>
        <ol>
          {recipeInfo.directions.map((direction, index) => (
            <li key={index} className="form-ingredient-item">
              <div className="form-ingredient-item-container">
                <div className="form-ingredient-text">{direction}</div>
                <Button
                  variant="outlined"
                  color="error"
                  onClick={() => {
                    console.log(index);
                    setRecipeInfo((currRecipeInfo) => {
                      currRecipeInfo.directions.splice(index, 1);
                      return currRecipeInfo;
                    });
                    forceUpdate();
                  }}
                >
                  Delete
                </Button>
              </div>
            </li>
          ))}
        </ol>

        <div style={{ display: "flex", alignItems: "center" }}>
          <TextField
            sx={{ width: fullSize }}
            variant="outlined"
            value={currDirection}
            onChange={(event) => setCurrDirection(event.target.value)}
            label="Direction"
            color="form"
            error={error.directions}
            helperText={error.directions ? "Error!" : ""}
          />
          <Button variant="outlined" onClick={addDirection} color="form">
            Add
          </Button>
        </div>

        <Button variant="outlined" onClick={handleSubmit} color="success">
          Save
        </Button>
      </Box>
    </div>
  );
};

export default RecipeForm;
