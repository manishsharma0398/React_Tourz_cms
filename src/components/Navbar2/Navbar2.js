import React from "react";
import { Link } from "react-router-dom";

const Navbar2 = () => {
  const leg = (e, index) => {
    const q = document.querySelectorAll(".nav-el");
    q.forEach(el => {
      el.classList.remove("active");
      if (el.classList.contains("nav-dropdown")) {
        el.classList.remove("expand");
        el.children[0].classList.remove("expand");
      }
    });
    q[index].classList.add("active");
    if (q[index].classList.contains("nav-dropdown")) {
      q[index].classList.add("expand");
      q[index].children[0].classList.add("expand");
    }
  };

  return (
    <div className="navbar2">
      <ul className="navbar-nav">
        <li onClick={e => leg(e, 0)} className="nav-item active nav-el">
          <Link to="/home/overview" className="nav-link">
            <span>Overview</span>
          </Link>
        </li>

        <li onClick={e => leg(e, 1)} className="nav-dropdown nav-el">
          <Link to="/home/bookings" className="dropdown-menu">
            <span>Bookings </span>
          </Link>
          <ul className="dropdown-menu-links">
            <li className="nav-item-dropdown">
              <Link
                to="/home/bookings/recent-bookings"
                className="nav-link-dropdown"
              >
                Recent Bookings
              </Link>
            </li>
            <li className="nav-item-dropdown">
              <Link
                to="/home/bookings/new-booking"
                className="nav-link-dropdown"
              >
                New Booking
              </Link>
            </li>
          </ul>
        </li>

        <li onClick={e => leg(e, 2)} className="nav-dropdown nav-el">
          <Link to="/home/vehicles" className="dropdown-menu">
            <span>Vehicles Management </span>
          </Link>
          <ul className="dropdown-menu-links">
            <li className="nav-item-dropdown">
              <Link to="/home/vehicles/vehicles" className="nav-link-dropdown">
                Vehicles
              </Link>
            </li>
            <li className="nav-item-dropdown">
              <Link to="/home/vehicles/add" className="nav-link-dropdown">
                Add Vehicles
              </Link>
            </li>
          </ul>
        </li>

        <li onClick={e => leg(e, 3)} className="nav-dropdown nav-el">
          <Link to="/home/users" className="dropdown-menu">
            <span>Users Management </span>
          </Link>
          <ul className="dropdown-menu-links">
            <li className="nav-item-dropdown">
              <Link to="/home/users/users" className="nav-link-dropdown">
                User
              </Link>
            </li>
            <li className="nav-item-dropdown">
              <Link to="/home/users/add" className="nav-link-dropdown">
                Add Users
              </Link>
            </li>
          </ul>
        </li>

        <li onClick={e => leg(e, 4)} className="nav-item nav-el for-mob">
          <Link to="/settings" className="nav-link">
            <span>Settings</span>
          </Link>
        </li>

        <li onClick={e => leg(e, 5)} className="nav-item nav-el for-mob">
          <Link to="/logout" className="nav-link">
            <span>Logout</span>
          </Link>
        </li>
      </ul>

      <p className="footer for-mob">Tourz 2019. A Product of Tourz Pvt. Ltd.</p>
    </div>
  );
};

export default Navbar2;
