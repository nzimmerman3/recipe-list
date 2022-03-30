import React from "react";
import Navbar from "../components/Navbar";
import { Container } from "@mui/material";

const Profile = () => {
  return (
    <div>
      <Navbar />
      <Container className="under-navbar">Profile</Container>
    </div>
  );
};

export default Profile;
