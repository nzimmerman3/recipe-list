import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";
import LoginButton from "./Login";
import LogoutButton from "./Logout";

const pages = ["Create", "Favorites"];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  let navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const { isAuthenticated } = useAuth0();

  const [cursor, setCursor] = React.useState("pointer");

  return (
    <AppBar className="Navbar">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
            onClick={() => navigate("/")}
            onMouseOver={() => setCursor("pointer")}
            style={{ cursor: cursor }}
          >
            MY RECIPES
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page}
                  onClick={() => {
                    handleCloseNavMenu();
                    navigate(`/${page.toLowerCase()}`);
                  }}
                  style={{ color: "black" }}
                >
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
              {isAuthenticated ? (
                <LogoutButton type="menu" />
              ) : (
                <LoginButton type="menu" />
              )}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
            onMouseOver={() => setCursor("pointer")}
            style={{ cursor: cursor }}
            onClick={() => navigate("/")}
          >
            MY RECIPES
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              flexDirection: "row-reverse",
              display: { xs: "none", md: "flex" },
              alignItems: "center",
            }}
          >
            {isAuthenticated ? (
              <LogoutButton type="expand" />
            ) : (
              <LoginButton type="expand" />
            )}

            {pages.map((page) => (
              <Button
                key={page}
                style={{ color: "black" }}
                onClick={() => {
                  handleCloseNavMenu();
                  navigate(`/${page.toLowerCase()}`);
                }}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
