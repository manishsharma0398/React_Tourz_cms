import React from "react";

const Navbar1 = () => {
  const toggleNavbar = e => {
    document.querySelector(".circle").classList.toggle("close");
    document.querySelector(".navbar2").classList.toggle("show");
    document.querySelector(".navbar1").classList.toggle("show");
  };

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
      <div className="navbar1-rightDiv">
        <div className="navbar1-rightDiv-notification">
          <img
            src={process.env.PUBLIC_URL + "/images/bell.svg"}
            alt="Notification logo"
          />
        </div>
        <div className="navbar1-rightDiv-userType">
          <span className="userName">Manish</span>
          <span className="userType">Admin</span>
        </div>
        <div className="navbar1-rightDiv-userImg">
          <img src={process.env.PUBLIC_URL + "/images/user.jpg"} alt="User" />
        </div>
      </div>
      <div className="navbar1-toggler">
        <div onClick={e => toggleNavbar(e)} className="wrapper">
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

export default Navbar1;
