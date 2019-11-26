import React from "react";

const Button = props => {
  return (
    <button className="addBtn" type="button">
      {props.value}
    </button>
  );
};

export default Button;
