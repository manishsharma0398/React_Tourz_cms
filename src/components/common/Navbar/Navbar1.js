import React from "react";
import { connect } from "react-redux";
import { toggleNavbar } from "../../../utils/UIFunctions";
import { Link } from "react-router-dom";

const Navbar1 = props => {
  const { profile, userType } = props.profile;
  const { isAuthenticated } = props.user;

  return (
    <div className="navbar1">
      <div className="navbar1-leftDiv">
        <div className="navbar1-leftDiv-logo">
          <span className="logo">Tourz</span>
        </div>
        <div className="navbar1-leftDiv-searchForm">
          <form className="searchForm" action="#!">
            <img src={process.env.PUBLIC_URL + "/images/search.svg"} alt="" />
            <input
              className="searchForm_input"
              type="text"
              placeholder="Search Here..."
            />
          </form>
        </div>
      </div>
      {isAuthenticated ? (
        <div className="navbar1-rightDiv-auth">
          <div className="navbar1-rightDiv-auth-notification">
            <img
              src={process.env.PUBLIC_URL + "/images/bell.svg"}
              alt="Notification logo"
            />
          </div>
          <div className="navbar1-rightDiv-auth-userType">
            <span className="userName">{profile ? profile.username : ""}</span>
            <span className="userType">{profile ? userType : ""}</span>
          </div>
          <div className="navbar1-rightDiv-auth-userImg">
            <img
              src={
                profile
                  ? profile.avatar
                  : process.env.PUBLIC_URL + "/images/user.jpg"
              }
              alt="User"
            />
          </div>
        </div>
      ) : (
        <div className="navbar1-rightDiv">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/login" className="nav-link">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/register" className="nav-link">
                Register
              </Link>
            </li>
          </ul>
        </div>
      )}

      <div className="navbar1-toggler">
        <div onClick={toggleNavbar} className="wrapper">
          <div className="circle icon ">
            <span className="line top"></span>
            <span className="line middle"></span>
            <span className="line bottom"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  profile: state.Profile,
  user: state.User
});

export default connect(mapStateToProps)(Navbar1);
