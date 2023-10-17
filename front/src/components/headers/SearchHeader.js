import "./SearchHeader.scss";

import { useState } from "react";

// Components
import SearchModal from "../modals/SearchModal";

//Icons
import TuneIcon from "@mui/icons-material/Tune";
import MapIcon from "@mui/icons-material/Map";
import SearchIcon from "@mui/icons-material/Search";
import FilterModal from "../modals/FilterModal";

const SearchHeader = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <header className="header--search">
        <button className="btn--search" onClick={() => openModal()}>
          Search: {}{" "}
          <span>
            <SearchIcon />
          </span>
        </button>
        <div className="header-search__btns-right">
          <button
            className="btn-icon--outline"
            onClick={() => {
              openModal();
            }}
          >
            <TuneIcon />
          </button>
        </div>
      </header>
      <FilterModal
        isModalOpen={isModalOpen}
        onClose={closeModal}
        headingModal={"Filter"}
      />
      <SearchModal
        isModalOpen={isModalOpen}
        onClose={closeModal}
        headingModal={"Search"}
      />
    </>
  );
};

export default SearchHeader;
