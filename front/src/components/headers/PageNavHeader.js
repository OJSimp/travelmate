import "./PageNavHeader.scss";

import { useNavigate } from "react-router-dom";

import { IoChevronBackOutline } from "react-icons/io5";

function PageNavHeader() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); // This navigates back to the previous route
  };

  return (
    <div className="header nav--page-header">
      <button onClick={goBack} className="btn--icon">
        <IoChevronBackOutline className=" grey-200" />
      </button>
    </div>
  );
}

export default PageNavHeader;
