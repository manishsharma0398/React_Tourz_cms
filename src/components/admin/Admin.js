import React from "react";
import Activities from "./Activities";
import Contents from "./Contents/Contents";
import Selectors from "./Selectors";

function Admin() {
  return (
    <React.Fragment>
      <Activities />
      <Contents />
      <Selectors />
    </React.Fragment>
  );
}

export default Admin;
