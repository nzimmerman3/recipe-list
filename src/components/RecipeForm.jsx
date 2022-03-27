import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RecipeForm = () => {
  let navigate = useNavigate();
  const [recipeInfo, setRecipeInfo] = useState({
    name: "",
    desc: "",
    time: 15,
    unit: "minutes",
    servings: 1,
    ingredients: [],
    image: "/images/Baked-Ziti.jpg",
    author: {
      image: "/images/Nick-Zimmerman.jpg",
      name: "",
    },
    directions: [],
  });
  const [currIngredient, setCurrIngredient] = useState("");

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
    event.persist();
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

  const addIngredient = () => {
    setRecipeInfo((recipeInfo) => ({
      ...recipeInfo,
      ingredients: [...recipeInfo.ingredients, currIngredient],
    }));
    setCurrIngredient("");
  };
  return (
    <div className="recipe-form">
      <form onSubmit={handleSubmit}>
        <label for="name">Name:</label>
        <input
          type="text"
          name="name"
          value={recipeInfo.name}
          onChange={handleNameChange}
        />
        <br />
        <label for="desc">Description:</label>
        <input
          type="text"
          name="desc"
          value={recipeInfo.desc}
          onChange={handleDescChange}
        />
        <br />
        <label for="time">Time:</label>
        <input
          type="number"
          name="time"
          value={recipeInfo.time}
          onChange={handleTimeChange}
        />
        <select value={recipeInfo.unit} onChange={handleUnitChange} name="unit">
          <option>Minutes</option>
          <option>Hours</option>
          <option>Seconds</option>
        </select>
        <br />
        <label for="servings">Servings:</label>
        <input
          type="number"
          name="servings"
          value={recipeInfo.servings}
          onChange={handleServingsChange}
        />
        <br />

        {recipeInfo.ingredients.map((ingredient) => (
          <div>
            {ingredient} <br />
          </div>
        ))}
        <label for="ingredient">Ingredients:</label>
        <input
          type="text"
          name="ingredient"
          value={currIngredient}
          onChange={(event) => setCurrIngredient(event.target.value)}
        />
        <button type="button" onClick={addIngredient}>
          Add
        </button>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default RecipeForm;
