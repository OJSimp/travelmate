import "./TextInputIcon.scss";
import "./TextInput.scss";

import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

import { useState } from "react";

export default function TextInput(props) {
  const [inputValue, setInputValue] = useState("");

  // Show hide password
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleInputValue = (e) => {
    props.setInputValue(e.target.value);
    return inputValue;
  };

  return (
    <div className="input-text">
      <input
        className={props.class ? `"input__text" ${props.class}` : "input__text"}
        placeholder=" "
        type={showPassword ? "text" : props.type}
        id={props.id}
        onChange={handleInputValue}
        onFocus={props.onFocus}
        autoComplete="off"
        name={props.name}
      />
      <label className="text-input__label" htmlFor={props.id}>
        {props.label}
      </label>
      {/* If there is an error for this input return error message */}
      {props.error && (
        <span className="error-message text-input__error-message">
          <InfoOutlinedIcon className="icon--small" />
          {props.error}
        </span>
      )}

      {/* Show and hide password on click of eye icon */}
      <button
        type="button"
        className="text-input__icon"
        onClick={togglePasswordVisibility}
      >
        {showPassword ? (
          <span className="password-display">
            <VisibilityOffIcon />
          </span>
        ) : (
          <span className="password-hide">{<VisibilityIcon />}</span>
        )}
      </button>
    </div>
  );
}
