import React from "react";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import CardActions from "@material-ui/core/CardActions";
import { styled } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme }) => ({
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));
const ExpandActions = ({
  expanded,
  handleExpandClick,
  index,
  id,
  collapse,
}) => {
  return !expanded ? (
    <CardActions style={{ padding: "0" }}>
      <ExpandMore
        expand={expanded}
        onClick={() => handleExpandClick(id)}
        aria-expanded={expanded}
        aria-label="show more"
      >
        <ExpandMoreIcon />
      </ExpandMore>
    </CardActions>
  ) : index === collapse ? (
    <CardActions style={{ padding: "0" }}>
      <ExpandLessIcon
        expand={expanded}
        onClick={() => handleExpandClick(id)}
        aria-expanded={expanded}
        aria-label="show more"
      >
        <ExpandMoreIcon />
      </ExpandLessIcon>
    </CardActions>
  ) : (
    <CardActions style={{ padding: "0" }}>
      <ExpandMore
        expand={expanded}
        onClick={() => handleExpandClick(id)}
        aria-expanded={expanded}
        aria-label="show more"
      >
        <ExpandMoreIcon />
      </ExpandMore>
    </CardActions>
  );
};

export default ExpandActions;
