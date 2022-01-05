import React, { useEffect, useState } from "react";
import Card from "@material-ui/core/Card";
import { styled } from "@material-ui/core/styles";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Avatar } from "@material-ui/core";
import Icon from "../../images/Avatar.png";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import "./listStyle.css";
import TimeLine from "../../components/Home/TimeLine/TimeLine";
import Ratings from "../../components/common/Ratings";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  // transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));
const data = [
  {
    time: "15 Mins",
  },
  {
    time: "30 Mins",
  },
  {
    time: "45 Mins",
  },
];
function ListMain({ list, isSelect, isMobile }) {
  const [age, setAge] = useState("");
  const [collapse, setCollapse] = useState("");
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const [expanded, setExpanded] = useState(false);
  const handleExpandClick = (value) => {
    setExpanded(!expanded);
    if (collapse === value) {
      setCollapse("");
    } else {
      setCollapse(value);
    }
  };
  return (
    <Box className="box">
      <Grid container spacing={2} style={{ flexGrow: 1 }}>
        {list.map((_data, index) => {
          return (
            <Grid item xs={12} md={12} lg={6}>
              <Card key={_data.id} style={{ borderRadius: "20px" }}>
                <div className="card-outer">
                  <CardHeader
                    style={{ paddingLeft: "0" }}
                    avatar={
                      <Avatar
                        src={Icon}
                        className="card-avatar"
                        aria-label="recipe"
                      />
                    }
                    title={<h1 className="card-title">{_data.title}</h1>}
                    subheader={
                      <p className="card-subheader">
                        Enterprenuer | CEO {isSelect ? <Ratings /> : ""}
                      </p>
                    }
                  />

                  {isSelect ? (
                    <FormControl style={{ width: "15%" }}>
                      <InputLabel id="demo-simple-select-label">
                        Time
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        label="Age"
                        onChange={handleChange}
                      >
                        {data.map((s) => {
                          return (
                            <MenuItem value={s.time} key={s.time}>
                              {s.time}
                            </MenuItem>
                          );
                        })}
                      </Select>
                    </FormControl>
                  ) : (
                    ""
                  )}

                  <p className="card-price">INR {_data.price}/hour</p>
                  {isMobile === false ? (
                    <CardActions style={{ padding: "0" }}>
                      <ExpandMore
                        expand={expanded}
                        onClick={() => handleExpandClick(_data.id)}
                        aria-expanded={expanded}
                        aria-label="show more"
                      >
                        <ExpandMoreIcon />
                      </ExpandMore>
                    </CardActions>
                  ) : (
                    ""
                  )}
                </div>

                <Collapse
                  in={isMobile === true ? true : index === collapse}
                  timeout="auto"
                  unmountOnExit
                >
                  <CardContent className="card-content">
                    <div style={{ marginBottom: "10px" }}>
                      <h1 className="card-content-h1">Domain</h1>
                      <span
                        style={{
                          fontWeight: "500",
                          marginLeft: "5px",
                          fontSize: "18px",
                          textTransform: "capitalize",
                        }}
                      >
                        {_data.domain}
                      </span>
                    </div>

                    <h1 className="card-content-h1">Experience</h1>
                    <TimeLine />

                    <div style={{ marginBottom: "10px" }}>
                      <h1 className="card-content-h1">
                        Mentees Mentored :{" "}
                        <span style={{ color: "black" }}>{_data.mentored}</span>
                      </h1>
                    </div>
                    {!isSelect ? (
                      <div style={{ marginBottom: "10px" }}>
                        <h1 className="card-content-h1">
                          Rating
                          <Ratings />
                        </h1>
                      </div>
                    ) : (
                      ""
                    )}

                    <button className="view-profile">View Full Profile</button>
                  </CardContent>
                </Collapse>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
export default ListMain;
