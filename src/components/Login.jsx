import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { Button } from "@mui/material";
import { MenuItem } from "@mui/material";
import { Typography } from "@mui/material";

const LoginButton = ({ type }) => {
  const { loginWithRedirect } = useAuth0();

  return type === "menu" ? (
    <MenuItem
      onClick={() => {
        loginWithRedirect();
      }}
      style={{ color: "black" }}
    >
      <Typography textAlign="center">Login</Typography>
    </MenuItem>
  ) : (
    <Button
      style={{ color: "black" }}
      onClick={() => {
        loginWithRedirect();
      }}
      sx={{
        my: 2,
        color: "white",
        display: "block",
      }}
    >
      Login
    </Button>
  );
};

export default LoginButton;
