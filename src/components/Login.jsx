import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { Button } from "@mui/material";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Button
      style={{ color: "black" }}
      onClick={() => {
        loginWithRedirect();
      }}
      sx={{ my: 2, color: "white", display: "block" }}
    >
      Log In
    </Button>
  );
};

export default LoginButton;
