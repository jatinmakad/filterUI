import React from "react";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import NotificationsIcon from "@material-ui/icons/Notifications";
import FilterListIcon from "@material-ui/icons/FilterList";
import "./Header.css";
import SearchBar from "./SearchBar";
import FormControlLabel from "@material-ui/core/FormControlLabel";

function Header({ isSelect, handleOpen, value, change, changeHand }) {
  return (
    <div className="header">
      <div className="header-in">
        <div className="header-inner">
          <ArrowBackIosIcon />
          <h1>MENTORS</h1>
        </div>
        <div className="notification">
          <NotificationsIcon />
        </div>
      </div>
      {!isSelect ? (
        <div className="filter-search">
          <SearchBar value={value} change={change} />
          <FilterListIcon
            onClick={() => {
              handleOpen();
              changeHand();
            }}
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Header;
