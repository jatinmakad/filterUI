import React, { useEffect, useState } from "react";
import EmptyView from "../../components/common/EmptyView";
import FilterPanel from "../../components/Home/FilterPanel";
import SearchBar from "../../components/Home/SearchBar";
import FilterListIcon from "@material-ui/icons/FilterList";
import { dataList } from "../../constants";
import ListMain from "./ListMain";
import "./styles.css";
import Collapse from "@material-ui/core/Collapse";
import Modal from "@material-ui/core/Modal";
import Header from "../../components/Home/Header";
import Slide from "@material-ui/core/Slide";

const Home = () => {
  const [selectedTime, setSelectedTime] = useState(null);
  const [searchInput, setSearchInput] = useState("");
  const [domain, setDomain] = useState(null);
  const [industry, setIndustry] = useState("");
  const [selectedPrice, setSelectedPrice] = useState([1000, 5000]);
  const [selectedRating, setSelectedRating] = useState([1, 5]);
  const [selectedExperience, setSelectedExperience] = useState([1, 10]);
  const [selectedMentored, setSelectedMentored] = useState([1, 10]);
  const [list, setList] = useState(dataList);
  const [resultsFound, setResultsFound] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [open, setOpen] = useState(false);
  const [checked, setChecked] = useState(false);
  const handleChange = () => {
    setChecked((prev) => !prev);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  let isMobile = false;
  if (windowWidth <= 957) {
    isMobile = false;
  } else {
    isMobile = true;
  }

  let isSelect = false;
  if (windowWidth <= 650) {
    isSelect = false;
  } else {
    isSelect = true;
  }
  useEffect(() => {
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("resize", update);
    };
  }, [windowWidth]);
  const update = () => {
    setWindowWidth(window.innerWidth);
    setOpen(false);
  };

  const handleSelectTime = (event, value) =>
    !value ? null : setSelectedTime(value);

  const handleChangePrice = (event, value) => {
    setSelectedPrice(value);
  };
  const handleChangeRating = (event, value) => {
    setSelectedRating(value);
  };
  const handleChangeExperience = (event, value) => {
    setSelectedExperience(value);
  };
  const handleChangeMentored = (event, value) => {
    setSelectedMentored(value);
  };
  const handleDomainChange = (value) => {
    setDomain(value);
  };
  const handleIndustryChange = (value) => {
    setIndustry(value);
  };
  const clearFilter = () => {
    setSelectedExperience([1, 10]);
    setSelectedMentored([1, 10]);
    setSelectedPrice([1000, 5000]);
    setSelectedRating([1, 5]);
    setIndustry(null);
    setDomain(null);
    setSelectedTime(null);
    setList(dataList);
    setResultsFound(true);
  };
  const applyFilters = () => {
    let updatedList = dataList;
    let industryValue;
    let domainValue;
    // Search Filter
    if (searchInput) {
      updatedList = updatedList.filter(
        (item) =>
          item.title.toLowerCase().search(searchInput.toLowerCase().trim()) !==
          -1
      );
    }

    // Time Filter
    if (selectedTime) {
      updatedList = updatedList.filter((item) =>
        item.time.includes(selectedTime)
      );
    }
    // Domain Filter
    if (domain) {
      domainValue = domain.map((s) => s.label);
      updatedList = updatedList.filter((item) =>
        domainValue.includes(item.domain)
      );
    }
    // Industry Filter
    if (industry) {
      industryValue = industry.map((s) => s.label);
      updatedList = updatedList.filter((item) =>
        industryValue.includes(item.industry)
      );
    }

    // Rating Filter
    const minRating = selectedRating[0];
    const maxRating = selectedRating[1];
    updatedList = updatedList.filter(
      (item) => item.rating >= minRating && item.rating <= maxRating
    );
    setList(updatedList);
    !updatedList.length ? setResultsFound(false) : setResultsFound(true);

    // Experience Filter
    const minExperience = selectedExperience[0];
    const maxExperience = selectedExperience[1];
    updatedList = updatedList.filter(
      (item) =>
        item.experience >= minExperience && item.experience <= maxExperience
    );
    setList(updatedList);
    !updatedList.length ? setResultsFound(false) : setResultsFound(true);
    // Mentored Filter
    const minMenotred = selectedMentored[0];
    const maxMentored = selectedMentored[1];
    updatedList = updatedList.filter(
      (item) => item.mentored >= minMenotred && item.mentored <= maxMentored
    );
    setList(updatedList);
    !updatedList.length ? setResultsFound(false) : setResultsFound(true);

    // Price Filter
    const minPrice = selectedPrice[0];
    const maxPrice = selectedPrice[1];
    updatedList = updatedList.filter(
      (item) => item.price >= minPrice && item.price <= maxPrice
    );
    setList(updatedList);
    !updatedList.length ? setResultsFound(false) : setResultsFound(true);
  };

  useEffect(() => {
    applyFilters();
  }, [searchInput]);

  return (
    <div className="home">
      <Header
        isSelect={isSelect}
        value={searchInput}
        change={setSearchInput}
        handleOpen={handleOpen}
        changeHand={handleChange}
      />
      {isMobile === false ? (
        isSelect ? (
          <FilterListIcon
            onClick={() => {
              handleOpen();
              handleChange();
            }}
            className="filterIcon"
          />
        ) : (
          ""
        )
      ) : (
        ""
      )}
      <div className="home_panelList-wrap">
        {/* List & Empty View */}
        <div className="home_list-wrap">
          {isSelect ? (
            <SearchBar value={searchInput} change={setSearchInput} />
          ) : (
            ""
          )}
          {resultsFound ? (
            <ListMain isSelect={isSelect} isMobile={isMobile} list={list} />
          ) : (
            <EmptyView />
          )}
        </div>
        {/* Filter Panel */}
        <Collapse
          in={isMobile === true ? true : ""}
          timeout="auto"
          unmountOnExit
        >
          <div className="home_panel-wrap">
            <FilterPanel
              changeHand={handleChange}
              selectedTime={selectedTime}
              selectedPrice={selectedPrice}
              selectedExperience={selectedExperience}
              selectedRating={selectedRating}
              selectedMentored={selectedMentored}
              domain={domain}
              industry={industry}
              selectIndustry={handleIndustryChange}
              selectDomain={handleDomainChange}
              selectTime={handleSelectTime}
              changePrice={handleChangePrice}
              changeRating={handleChangeRating}
              changeExperience={handleChangeExperience}
              changeMentored={handleChangeMentored}
              applyFilters={applyFilters}
              clearFilter={clearFilter}
              isMobile={isMobile}
            />
          </div>
        </Collapse>
        <Modal
          open={open}
          onClose={() => {
            handleClose();
            handleChange();
          }}
          className="modal"
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Slide direction="up" in={checked} mountOnEnter unmountOnExit>
            <div className="home_panel-wrap second-pannel">
              <FilterPanel
                changeHand={handleChange}
                selectedTime={selectedTime}
                selectedPrice={selectedPrice}
                selectedExperience={selectedExperience}
                selectedRating={selectedRating}
                selectedMentored={selectedMentored}
                domain={domain}
                industry={industry}
                selectIndustry={handleIndustryChange}
                selectDomain={handleDomainChange}
                selectTime={handleSelectTime}
                changePrice={handleChangePrice}
                changeRating={handleChangeRating}
                changeExperience={handleChangeExperience}
                changeMentored={handleChangeMentored}
                applyFilters={applyFilters}
                clearFilter={clearFilter}
                handleClose={handleClose}
              />
            </div>
          </Slide>
        </Modal>
      </div>
    </div>
  );
};

export default Home;
