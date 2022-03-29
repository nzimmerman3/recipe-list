import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { Button } from "@mui/material";
import { Typography } from "@mui/material";
import { MenuItem } from "@mui/material";

const LogoutButton = ({ type }) => {
  const { logout } = useAuth0();
  const doLogout = () => logout({ returnTo: window.location.origin });

  return type === "menu" ? (
    <MenuItem onClick={doLogout} style={{ color: "black" }}>
      <Typography textAlign="center">Login</Typography>
    </MenuItem>
  ) : (
    <Button
      style={{ color: "black" }}
      onClick={doLogout}
      sx={{
        my: 2,
        color: "white",
        display: "block",
      }}
    >
      Logout
    </Button>
  );
};

export default LogoutButton;
