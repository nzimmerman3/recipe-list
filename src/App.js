import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./routes/Home";
import Recipe from "./routes/Recipe";
import Favorites from "./routes/Favorites";
import Create from "./routes/Create";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/recipe" element={<Recipe />}></Route>
          <Route path="/create" element={<Create />}></Route>
          <Route path="/favorites" element={<Favorites />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
