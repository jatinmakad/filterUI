import React from "react";
import { timeList } from "../../../constants";
import DropDown from "../../common/DropDown/DropDown";
import DropIndustry from "../../common/DropDown/DropIndustry";
import FilterListToggle from "../../common/FilterListToggle";
import SliderProton from "../../common/SliderProton";
import SliderExperiance from "../../common/SliderProton/SliderExperiance";
import SliderMentor from "../../common/SliderProton/SliderMentor";
import SliderPrice from "../../common/SliderProton/SliderPrice";
import FilterListIcon from "@material-ui/icons/FilterList";
import ClearIcon from "@material-ui/icons/Clear";
import "./styles.css";

const FilterPanel = ({
  selectedTime,
  industryData,
  selectedPrice,
  selectedRating,
  selectedMentored,
  selectedExperience,
  domain,
  industry,
  selectIndustry,
  selectDomain,
  selectTime,
  changePrice,
  changeMentored,
  changeExperience,
  changeRating,
  applyFilters,
  clearFilter,
  handleClose,
  isMobile,
  changeHand,
}) => {
  const applyFunc = () => {
    handleClose();
    applyFilters();
    changeHand();
  };
  const clearFunc = () => {
    handleClose();
    clearFilter();
    changeHand();
  };
  return (
    <div className="filter-main">
      <div
        className="filter-outer"
        style={{ width: "100%", marginBottom: "1.5rem" }}
      >
        <div className="filter-outer">
          <FilterListIcon style={{ marginRight: "5px" }} />
          <h3 style={{ fontWeight: "700" }}>Filters</h3>
        </div>
        {!isMobile ? (
          <ClearIcon
            onClick={() => {
              handleClose();
              changeHand();
            }}
          />
        ) : (
          ""
        )}
      </div>
      <div className="input-group">
        <p className="label-range">Filter by Ratings</p>
        <SliderProton value={selectedRating} changePrice={changeRating} />
      </div>
      <div className="input-group">
        <p className="label-range">Industry</p>
        <DropIndustry
          industryData={industryData}
          values={industry}
          changesValue={selectIndustry}
        />
      </div>
      <div className="input-group">
        <p className="label-range">Domain</p>
        <DropDown value={domain} changesValue={selectDomain} />
      </div>

      <div className="input-group">
        <p className="label-range">Time</p>
        <FilterListToggle
          options={timeList}
          value={selectedTime}
          selectToggle={selectTime}
        />
      </div>
      <div className="input-group">
        <p className="label-range">Price</p>
        <SliderPrice value={selectedPrice} changePrice={changePrice} />
      </div>
      <div className="input-group">
        <p className="label-range">Experience</p>
        <SliderExperiance
          value={selectedExperience}
          changePrice={changeExperience}
        />
      </div>
      <div className="input-group">
        <p className="label-range">Mentees Mentored</p>
        <SliderMentor value={selectedMentored} changePrice={changeMentored} />
      </div>
      <div className="apply-outer">
        <button
          onClick={() => (!isMobile ? applyFunc() : applyFilters())}
          className="apply-btn"
        >
          Apply
        </button>
        <button
          className="clear-btn"
          onClick={() => (!isMobile ? clearFunc() : clearFilter())}
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default FilterPanel;
