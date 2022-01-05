import React from 'react'
import Rating from "@material-ui/lab/Rating";
const Ratings = () => {
  return (
    <p>
      <Rating
        name="half-rating-read"
        defaultValue={2.5}
        precision={0.5}
        readOnly
        size="small"
      />
    </p>

  )
}

export default Ratings
