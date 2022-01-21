import React, { useEffect, useState } from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Collapse from "@material-ui/core/Collapse";
import { Avatar, Typography } from "@material-ui/core";
import Icon from "../../images/Avatar.png";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import { dataList } from "../../constants";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import "./listStyle.css";
import TimeLine from "../../components/Home/TimeLine/TimeLine";
import Ratings from "../../components/common/Ratings";
import ExpandActions from "../../components/common/ExpandActions";
import Select from "@material-ui/core/Select";

const data = [
  {
    id: 1,
    value: "15",
    price: "50",
  },
  {
    id: 2,
    value: "30",
    price: "150",
  },
  {
    id: 3,
    value: "60",
    price: "100",
  },
];
function ListMain({ list, isSelect, isMobile }) {
  const [age, setAge] = useState();
  const [hand, sethandel] = useState();
  const [collapse, setCollapse] = useState(0);
  const handleChange = (event, index) => {
    setAge(event.target.value);
  };
  // console.log(hand,age)
  const [expanded, setExpanded] = useState(false);
  const handleExpandClick = (value) => {
    setExpanded(!expanded);
    if (collapse === value) {
      setCollapse("");
    } else {
      setCollapse(value);
    }
  };
  const [demo, setDemo] = useState("");
  console.log(demo)
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
                    title={
                      <h1 className="card-title" key={_data.title}>
                        {_data.title}
                      </h1>
                    }
                    subheader={
                      <div className="card-subheader">
                        Enterprenuer | CEO <Ratings data={_data.rating} />
                      </div>
                    }
                  />

                  {isSelect ? (
                    <select
                      onChange={(e) => {
                        setDemo(e.target.value);
                        setAge(e.target.selectedIndex);
                        sethandel(_data.id);
                      }}
                      className="select-btn"
                      defaultValue={_data.time[_data.time.length - 1]}
                    >
                      {_data.time.map((item, index) => {
                        return <option value={item}>{item}</option>;
                      })}
                    </select>
                  ) : (
                    ""
                  )}
                    <div className="card-price" key={_data.id}>
                      {/* INR {_data.id === hand && _data.secPrice[age]}/hour */}
                      INR {_data.price}/hour
                    </div>
                  <span className="expand-card">
                    <ExpandActions
                      expanded={expanded}
                      collapse={collapse}
                      id={_data.id}
                      handleExpandClick={() => handleExpandClick(index)}
                      index={index}
                    />
                  </span>
                </div>

                <Collapse
                  in={isMobile === true ? true : index === collapse}
                  timeout="auto"
                  unmountOnExit
                >
                  <CardContent className="card-content">
                    <div style={{ marginBottom: "10px" }}>
                      <h1 className="card-content-h1">Domain</h1>
                      <span key={_data.domain}>{_data.domain}</span>
                    </div>

                    <h1
                      className="card-content-h1"
                      style={{ marginBottom: "5px" }}
                    >
                      Experience
                    </h1>
                    <TimeLine data={_data.experienceData} />

                    <div style={{ marginBottom: "10px" }}>
                      <h1 className="card-content-h1">
                        Mentees Mentored :{" "}
                        <span style={{ color: "black" }} key={_data.mentored}>
                          {_data.mentored}
                        </span>
                      </h1>
                    </div>
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
