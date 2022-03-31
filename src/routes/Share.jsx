import React from "react";
import { useSearchParams } from "react-router-dom";

const Share = () => {
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("sort"));
  return <div>Share</div>;
};

export default Share;
