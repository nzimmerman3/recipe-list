import React from "react";
import { Avatar, Typography, Divider } from "@mui/material";

const Author = (props) => {
  return (
    <div>
      <Avatar
        alt={props.name}
        src={props.image}
        sx={{ width: "100%", height: "auto", marginBottom: 2 }}
        align="right"
      />
      <Divider />
      <Typography variant="h6" align="center" sx={{ marginTop: 2 }}>
        {props.name}
      </Typography>
    </div>
  );
};

export default Author;
