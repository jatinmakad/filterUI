import React from "react";
import Rating from "@material-ui/lab/Rating";
const Ratings = ({ data }) => {
  return (
    <p>
      <Rating name="read-only" key={data} value={data} readOnly size="small" />
    </p>
  );
};

export default Ratings;
