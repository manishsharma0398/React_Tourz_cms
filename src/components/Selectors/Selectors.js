import React, { Component } from "react";
import { Link } from "react-router-dom";

class Selectors extends Component {
  state = {
    home: "/images/home_active.svg",
    settings: "/images/settings.svg"
  };

  render() {
    const active = index => {
      const q = document.querySelector(".selectors");

      Array.from(q.children).forEach(el => {
        el.classList.remove("active");
      });

      if (index === 0) {
        q.children[0].classList.add("active");
        this.setState({
          home: "/images/home_active.svg",
          settings: "/images/settings.svg"
        });
      }
      if (index === 1) {
        q.children[1].classList.add("active");
        this.setState({
          home: "/images/home.svg",
          settings: "/images/settings_active.svg"
        });
      }
    };
    return (
      <div className="selectors">
        <div onClick={() => active(0)} className="home active">
          <Link to="/home">
            <img src={process.env.PUBLIC_URL + this.state.home} alt="" />
          </Link>
        </div>

        <div onClick={() => active(1)} className="settings">
          <Link to="/settings">
            <img src={process.env.PUBLIC_URL + this.state.settings} alt="" />
          </Link>
        </div>
      </div>
    );
  }
}

export default Selectors;
