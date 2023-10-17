import { useState } from "react";

import CloseIcon from "@mui/icons-material/Close";

const HeaderModal = ({ onClose, headingModal }) => {
  return (
    <header className="modal">
      <h4>{headingModal}</h4>
      <button onClick={onClose}>
        <CloseIcon />
      </button>
    </header>
  );
};

export default HeaderModal;
