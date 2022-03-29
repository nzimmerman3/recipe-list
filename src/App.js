import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./routes/Home";
import Recipe from "./routes/Recipe";
import Favorites from "./routes/Favorites";
import Create from "./routes/Create";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Auth0ProviderWithHistory } from "./components/auth0-provider-with-history";
import { ProtectedRoute } from "./components/ProtectedRoute";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#f5f5f5",
      },
      form: {
        main: "#000000",
      },
    },
  });
  console.log(process.env);
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Router>
          <Auth0ProviderWithHistory>
            <Routes>
              <Route exact path="/" element={<Home />}></Route>
              <Route path="/recipe" element={<Recipe />}></Route>
              <Route
                path="/create"
                element={<ProtectedRoute component={Create} />}
              ></Route>
              <Route
                path="/favorites"
                element={<ProtectedRoute component={Favorites} />}
              ></Route>
            </Routes>
          </Auth0ProviderWithHistory>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
