import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button, CardActions } from "@mui/material";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import axios from "axios";
import { useNavigate, createSearchParams } from "react-router-dom";

function FoodFooter({ recipe, favorites, favorite }) {
  //TODO check if recipe id is in favorites and adjust state accordingly
  const { isAuthenticated, user } = useAuth0();
  const [alertType, setAlertType] = useState("");

  const addToFavorites = () => {
    if (!isAuthenticated) {
      setAlertType("favorite");
      handleClick();
    } else {
      setColor((currColor) =>
        currColor === "#757575" ? "#f44538" : "#757575"
      );
      try {
        axios.put("http://localhost:3001/api/favorites", {
          recipe: recipe._id,
          user: user.sub,
          favorite: color === "#757575",
        });
      } catch (err) {
        console.log(err);
      }
    }
  };

  let navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const [color, setColor] = useState(favorite ? "#f44538" : "#757575");

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const share = () => {
    const url = `${window.location}recipe?id=${recipe._id}`;
    navigator.clipboard.writeText(url);
    setAlertType("copy");
    handleClick();
  };

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  return (
    <CardActions>
      <Grid container spacing={2}>
        <Grid item xs={6} style={{ textAlign: "left" }}>
          <Button size="small" style={{ color: "black" }} onClick={share}>
            Share
          </Button>
        </Grid>
        <Grid item xs={6} style={{ textAlign: "right" }}>
          <IconButton
            aria-label="add to favorites"
            className="recipe-favorite-icon"
            onClick={addToFavorites}
            style={{ color: color }}
          >
            <FavoriteIcon />
          </IconButton>
        </Grid>
      </Grid>
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        {alertType === "favorite" ? (
          <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
            Please log in
          </Alert>
        ) : (
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            URL copied to clipboard
          </Alert>
        )}
      </Snackbar>
    </CardActions>
  );
}

export default FoodFooter;
