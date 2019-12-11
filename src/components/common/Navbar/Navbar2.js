import React from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logOutUser } from "../../../redux/actions/authActions";
import {
  // toggleNavbar,
  // collapseHideNavDropdown,
  navLinkHandler
} from "../../../utils/UIFunctions";

const Navbar2 = props => {
  const logOutHandler = () => {
    props.logOutUser();
  };

  const { isAuthenticated } = props.user;
  const { userType } = props.userType;

  return (
    <div className="navbar2">
      {isAuthenticated ? (
        userType === "admin" ? (
          <ul className="navbar-nav">
            <li
              onClick={e => navLinkHandler(e, "nav-link", 0)}
              className="nav-item active nav-el"
            >
              <Link to="/admin" className="nav-link">
                <span>Overview</span>
              </Link>
            </li>

            <li
              onClick={e => navLinkHandler(e, "nav-dropdown", 1)}
              className="nav-dropdown nav-el"
            >
              <p className="dropdown-menu">
                <span>Bookings </span>
              </p>
              <ul className="dropdown-menu-links">
                <li
                  onClick={e => navLinkHandler(e, "nav-item-dropdown", 1.0)}
                  className="nav-item-dropdown"
                >
                  <Link
                    to="/admin/bookings/recent"
                    className="nav-link-dropdown"
                  >
                    Recent Bookings
                  </Link>
                </li>
                <li
                  onClick={e => navLinkHandler(e, "nav-item-dropdown", 1.1)}
                  className="nav-item-dropdown"
                >
                  <Link to="/admin/bookings/new" className="nav-link-dropdown">
                    New Booking
                  </Link>
                </li>
              </ul>
            </li>

            <li
              onClick={e => navLinkHandler(e, "nav-dropdown", 2)}
              className="nav-dropdown nav-el"
            >
              <p className="dropdown-menu">
                <span>Vehicles Management </span>
              </p>
              <ul className="dropdown-menu-links">
                <li
                  onClick={e => navLinkHandler(e, "nav-item-dropdown", 2.0)}
                  className="nav-item-dropdown"
                >
                  <Link to="/admin/vehicles" className="nav-link-dropdown">
                    Vehicles
                  </Link>
                </li>
                <li
                  onClick={e => navLinkHandler(e, "nav-item-dropdown", 2.1)}
                  className="nav-item-dropdown"
                >
                  <Link to="/admin/vehicles/add" className="nav-link-dropdown">
                    Add Vehicles
                  </Link>
                </li>
              </ul>
            </li>

            <li
              onClick={e => navLinkHandler(e, "nav-dropdown", 3)}
              className="nav-dropdown nav-el"
            >
              <p className="dropdown-menu">
                <span>Users Management </span>
              </p>
              <ul className="dropdown-menu-links">
                <li
                  onClick={e => navLinkHandler(e, "nav-item-dropdown", 3.0)}
                  className="nav-item-dropdown"
                >
                  <Link to="/admin/users" className="nav-link-dropdown">
                    User
                  </Link>
                </li>
                <li
                  onClick={e => navLinkHandler(e, "nav-item-dropdown", 3.1)}
                  className="nav-item-dropdown"
                >
                  <Link to="/admin/users/add" className="nav-link-dropdown">
                    Add Users
                  </Link>
                </li>
              </ul>
            </li>

            <li
              onClick={e => navLinkHandler(e, "nav-link", 4)}
              className="nav-item nav-el for-mob"
            >
              <Link to="/admin/settings" className="nav-link">
                <span>Settings</span>
              </Link>
            </li>

            <li onClick={logOutHandler} className="nav-item nav-el for-mob">
              <a href="#!" className="nav-link">
                <span>Logout</span>
              </a>
            </li>
          </ul>
        ) : (
          <ul className="navbar-nav">
            <li
              onClick={e => navLinkHandler(e, "nav-link", 0)}
              className="nav-item active nav-el"
            >
              <Link to="/home/overview" className="nav-link">
                <span>Book Vehicle</span>
              </Link>
            </li>

            <li
              onClick={e => navLinkHandler(e, "nav-link", 1)}
              className="nav-item nav-el for-mob"
            >
              <Link to="/logout" className="nav-link">
                <span>Logout</span>
              </Link>
            </li>
          </ul>
        )
      ) : (
        <ul className="navbar-nav">
          <li
            onClick={e => navLinkHandler(e, "nav-link", 0)}
            className="nav-item active nav-el for-mob"
          >
            <Link to="/" className="nav-link">
              <span>Home</span>
            </Link>
          </li>

          <li
            onClick={e => navLinkHandler(e, "nav-link", 1)}
            className="nav-item nav-el for-mob"
          >
            <Link to="/login" className="nav-link">
              <span>Login</span>
            </Link>
          </li>

          <li
            onClick={e => navLinkHandler(e, "nav-link", 2)}
            className="nav-item nav-el for-mob"
          >
            <Link to="/register" className="nav-link">
              <span>Register</span>
            </Link>
          </li>
        </ul>
      )}

      <p className="footer for-mob">Tourz 2019. A Product of Tourz Pvt. Ltd.</p>
    </div>
  );
};

Navbar2.propTypes = {
  user: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  user: state.User,
  userType: state.Profile
});

export default connect(mapStateToProps, { logOutUser })(Navbar2);
