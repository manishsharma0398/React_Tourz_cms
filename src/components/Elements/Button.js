import React from "react";

const Button = props => {
  return (
    <div className={"btn-div " + props.position}>
      <button className="btn" type="button">
        {props.value}
      </button>
    </div>
  );
};

export default Button;
