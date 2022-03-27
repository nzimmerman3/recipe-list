import React, { useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";

const Create = () => {
  const [recipeInfo, setRecipeInfo] = useState({
    name: "",
    desc: "",
    //time: "",
    // servings: "",
    ingredients: [],
    image: "/images/Baked-Ziti.jpg",
    author: {
      image: "/images/Nick-Zimmerman.jpg",
      name: "",
    },
    directions: [],
  });

  const [numIngr, setNumIngr] = useState(0);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await axios.post("http://localhost:3001/api", recipeInfo);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      {/* <Navbar /> */}
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={recipeInfo.name}
            onChange={handleNameChange}
          />
        </label>
        <br />
        <label>
          Description:
          <input
            type="text"
            name="desc"
            value={recipeInfo.desc}
            onChange={handleDescChange}
          />
        </label>
        <br />
        <label>
          Time (minutes):
          <input
            type="number"
            name="time"
            value={recipeInfo.time}
            onChange={handleTimeChange}
          />
        </label>
        <br />
        <label>
          Servings:
          <input
            type="number"
            name="servings"
            value={recipeInfo.servings}
            onChange={handleServingsChange}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Create;
