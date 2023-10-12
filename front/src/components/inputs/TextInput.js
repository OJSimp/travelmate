import "./TextInput.scss";

import { useState } from "react";

import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

const TextInput = (props) => {
  // change to text input
  const [inputValue, setInputValue] = useState("");

  // return the value of the input
  const handleInputValue = (e) => {
    props.setInputValue(e.target.value);
    return inputValue;
  };

  return (
    <div className="input-text">
      <input
        className="input__text"
        placeholder=" "
        type={props.type}
        id={props.id}
        onChange={handleInputValue}
        autoComplete="off"
      />
      <label className="text-input__label" htmlFor={props.id}>
        {props.label}
      </label>
      {props.error && (
        <span className="error-message text-input__error-message">
          <InfoOutlinedIcon className="icon--small" />
          {props.error}
        </span>
      )}
    </div>
  );
};

export default TextInput;
