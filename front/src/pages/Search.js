import "./Search.scss";

import NavFooter from "../components/footers/NavFooter";

//
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PersonIcon from "@mui/icons-material/Person";

const Search = () => {
  return (
    <div className="page--search">
      <header className="header--page">
        <h2>Search</h2>
      </header>
      <div className="search__nav">
        <button className="btn-search__nav">Stays</button>
        <button className="btn-search__nav">Experiences</button>
      </div>
      <div className="search__contianer">
        <button className="btn-search">
          Where to?{" "}
          <span>
            <LocationOnIcon />
          </span>
        </button>
        <button className="btn-search">
          When are you going?{" "}
          <span>
            <CalendarMonthIcon />
          </span>
        </button>
        <button className="btn-search">
          Who's coming?{" "}
          <span>
            <PersonIcon />
          </span>
        </button>
        <button className="btn-primary">Search</button>
      </div>
      <NavFooter />
    </div>
  );
};

export default Search;
