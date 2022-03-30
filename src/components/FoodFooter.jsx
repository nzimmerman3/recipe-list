import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button, CardActions } from "@mui/material";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

//TODO make api call to get list of favorites and make favorite icon red if already in list

function FoodFooter({ recipe }) {
  const { isAuthenticated, user } = useAuth0();

  const addToFavorites = () => {
    console.log(recipe);

    if (!isAuthenticated) {
      handleClick();
    } else {
      console.log("Authenticated");
      console.log(user);
    }
    //TODO test with database

    //make api post call to add to list of favorites
  };

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  return (
    <CardActions>
      <Grid container spacing={2}>
        <Grid item xs={6} style={{ textAlign: "left" }}>
          <Button size="small" style={{ color: "black" }}>
            Share
          </Button>
        </Grid>
        <Grid item xs={6} style={{ textAlign: "right" }}>
          <IconButton
            aria-label="add to favorites"
            className="recipe-favorite-icon"
            onClick={addToFavorites}
          >
            <FavoriteIcon />
          </IconButton>
        </Grid>
      </Grid>
      <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          Not logged in
        </Alert>
      </Snackbar>
    </CardActions>
  );
}

export default FoodFooter;
