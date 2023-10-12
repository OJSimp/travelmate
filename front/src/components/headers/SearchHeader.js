import "./SearchHeader.scss";

import { useState } from "react";

// Components
import SearchModal from "../modals/SearchModal";

//Icons
import TuneIcon from "@mui/icons-material/Tune";
import MapIcon from "@mui/icons-material/Map";
import SearchIcon from "@mui/icons-material/Search";

const SearchHeader = () => {
  const [searchModal, setSearchModal] = useState(false);

  return (
    <>
      <header className="header--search">
        <button
          className="btn--search"
          onClick={() => setSearchModal(!searchModal)}
        >
          Search: {}{" "}
          <span>
            <SearchIcon />
          </span>
        </button>
        <div className="header-search__btns-right">
          <button className="btn-icon--outline">
            <TuneIcon />
          </button>
          {/* <button className="btn-icon--outline">
          <MapIcon />
        </button> */}
        </div>
      </header>
      {searchModal && <SearchModal />}
    </>
  );
};

export default SearchHeader;
