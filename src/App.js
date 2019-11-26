import React from "react";
import "./App.css";

import { BrowserRouter as Router } from "react-router-dom";

import Navbar1 from "./components/Navbar1/Navbar1";
import Navbar2 from "./components/Navbar2/Navbar2";
import Activities from "./components/Activities/Activities";
import Contents from "./components/Contents/Contents";
import Selectors from "./components/Selectors/Selectors";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar1 />
        <Navbar2 />
        <Activities />
        <Contents />
        <Selectors />
      </Router>
    </div>
  );
}

export default App;
