import React from "react";

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
      />
      {props.feedback && (
        <span className="feedback error">{props.feedback}</span>
      )}
    </div>
  );
};

export default Input;
