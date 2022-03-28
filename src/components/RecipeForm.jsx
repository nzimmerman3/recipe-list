import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { MenuItem, Button } from "@mui/material";

const RecipeForm = () => {
  let navigate = useNavigate();
  const [recipeInfo, setRecipeInfo] = useState({
    name: "",
    desc: "",
    time: 0,
    unit: "minutes",
    servings: 0,
    ingredients: [],
    image: "/images/Baked-Ziti.jpg",
    author: {
      image: "/images/Nick-Zimmerman.jpg",
      name: "",
    },
    directions: [],
  });
  const [currIngredient, setCurrIngredient] = useState("");
  const [currDirection, setCurrDirection] = useState("");

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

  const handleUnitChange = (event) => {
    // event.persist();
    setRecipeInfo((recipeInfo) => ({
      ...recipeInfo,
      unit: event.target.value,
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post("http://localhost:3001/api", recipeInfo)
        .then(navigate("/recipe", { state: recipeInfo }));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="recipe-form" style={{ marginTop: "14vh" }}>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
      >
        <TextField
          variant="standard"
          value={recipeInfo.name}
          onChange={handleNameChange}
          label="Name"
        />
        <TextField
          variant="standard"
          value={recipeInfo.desc}
          onChange={handleDescChange}
          label="Description"
        />
        <TextField
          variant="standard"
          type="number"
          value={recipeInfo.time === 0 ? "" : recipeInfo.time}
          onChange={handleTimeChange}
          label="Time"
        />
        <TextField
          select
          label="Unit"
          value={recipeInfo.unit}
          onChange={handleUnitChange}
        >
          <MenuItem value="minutes">Minutes</MenuItem>
          <MenuItem value="hours">Hours</MenuItem>
          <MenuItem value="seconds">Seconds</MenuItem>
        </TextField>
        <TextField
          variant="standard"
          type="number"
          value={recipeInfo.servings}
          onChange={handleServingsChange}
          label="Servings"
        />

        {recipeInfo.ingredients.map((ingredient) => (
          <div>{ingredient}</div>
        ))}
        <div style={{ display: "flex", alignItems: "center" }}>
          <TextField
            variant="standard"
            value={currIngredient}
            onChange={(event) => setCurrIngredient(event.target.value)}
            label="Ingredient"
          />
          <Button variant="outlined" onClick={addIngredient} color="form">
            Add
          </Button>
        </div>
        {recipeInfo.directions.map((direction) => (
          <div>{direction}</div>
        ))}
        <div style={{ display: "flex", alignItems: "center" }}>
          <TextField
            variant="standard"
            value={currDirection}
            onChange={(event) => setCurrDirection(event.target.value)}
            label="Direction"
          />
          <Button variant="outlined" onClick={addDirection} color="form">
            Add
          </Button>
        </div>

        <Button variant="outlined" onClick={handleSubmit} color="form">
          Save
        </Button>
      </Box>
    </div>
  );
};

export default RecipeForm;
