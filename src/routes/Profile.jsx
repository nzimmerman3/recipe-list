import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Navbar from "../components/Navbar";
import { Container, Box, Stack, Typography } from "@mui/material";

const Profile = () => {
  const { user } = useAuth0();
  console.log(user);
  return (
    <div>
      <Navbar />
      <Container className="under-navbar">
        <Box>
          <Stack spacing={2}>
            <Typography marginTop={2}>Name:{" " + user.name}</Typography>
            <Typography>Email:{" " + user.email}</Typography>
          </Stack>
        </Box>
      </Container>
    </div>
  );
};

export default Profile;
