import React from "react";

const Button = props => {
  return (
    <div className={"btn-div " + props.position}>
      <button type={props.type} className="btn">
        {props.value}
      </button>
    </div>
  );
};

export default Button;
