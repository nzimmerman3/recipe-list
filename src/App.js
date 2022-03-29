import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./routes/Home";
import Recipe from "./routes/Recipe";
import Favorites from "./routes/Favorites";
import Create from "./routes/Create";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Auth0Provider } from "@auth0/auth0-react";

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
          <Auth0Provider
            domain={process.env.REACT_APP_AUTH0_DOMAIN}
            clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
            redirectUri={window.location.origin}
          >
            <Routes>
              <Route exact path="/" element={<Home />}></Route>
              <Route path="/recipe" element={<Recipe />}></Route>
              <Route path="/create" element={<Create />}></Route>
              <Route path="/favorites" element={<Favorites />}></Route>
            </Routes>
          </Auth0Provider>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
