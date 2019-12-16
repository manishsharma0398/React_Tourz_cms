import React from "react";

const ErrorHeader = props => {
  return (
    <React.Fragment>
      {props.feedback && (
        <span className="feedback error">{props.feedback}</span>
      )}
    </React.Fragment>
  );
};

export default ErrorHeader;
