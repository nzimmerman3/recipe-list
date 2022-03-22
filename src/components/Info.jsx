import React from "react";

const Info = (props) => {
  return (
    <div>
      {props.servings} <br /> {props.time}
    </div>
  );
};

export default Info;
