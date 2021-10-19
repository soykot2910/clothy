import React from "react";
import "./formInput.style.scss";

const FormInputComp = ({ handleChange, label, ...other }) => {
  return (
    <div className="group">
      <input className="form-input" onChange={handleChange} {...other} />
      {label ? (
        <label
          className={`${other.value.length ? "shrink" : ""} form-input-label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default FormInputComp;
