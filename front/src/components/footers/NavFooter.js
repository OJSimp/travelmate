import "./NavFooter.scss";

// Icons
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PersonIcon from "@mui/icons-material/Person";

import { NavLink } from "react-router-dom";

const NavFooter = () => {
  return (
    <footer className="footer--nav">
      <NavLink className="btn-footer" to="/">
        <span>
          <HomeIcon />
        </span>
        Home
      </NavLink>
      <NavLink className="btn-footer" to="/search">
        <span>
          <SearchIcon />
        </span>
        Search
      </NavLink>
      <NavLink className="btn-footer">
        <span>
          <CalendarMonthIcon />
        </span>
        My Trips
      </NavLink>
      <NavLink className="btn-footer" to="/access">
        <span>
          <PersonIcon />
        </span>
        Profile
      </NavLink>
    </footer>
  );
};

export default NavFooter;
