import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

const useStyles = makeStyles({
  root: {
    width: "100%",
    display: "flex",
    alignItems: "center",
  },
  iconLeft: {
    marginRight: "10px",
    fontSize: "18px",
  },
  iconRight: {
    marginLeft: "10px",
    fontSize: "18px",
  },
  thumb: {
    color: "#FF7070",
    background: "#fff",
    border: "1px solid #FF7070",
  },
  rail: {
    color: `#FCB5B5`,
  },
  track: {
    color: "#FF7070",
  }
});

const SliderProton = ({ value, changePrice }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <p className={classes.iconLeft}>1</p>
      <Slider
        value={value}
        onChange={changePrice}
        valueLabelDisplay="auto"
        min={1}
        max={5}
        classes={{
          thumb: classes.thumb,
          rail: classes.rail,
          track: classes.track,
        }}
      />
      <p className={classes.iconRight}>5</p>
    </div>
  );
};

export default SliderProton;
