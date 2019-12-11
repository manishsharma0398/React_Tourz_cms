import React from "react";
import PropTypes from "prop-types";

const Input = props => {
  return (
    <div className="form-group">
      <input
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        className="form-input"
        type={props.type}
        placeholder={props.placeholder}
        required={props.required}
      />
      {props.feedback && (
        <span className="feedback error">{props.feedback}</span>
      )}
    </div>
  );
};

Input.defaultProps = {
  required: false,
  type: "text"
};

export default Input;
