import React from "react";
import "./App.css";

import { Route, Switch, withRouter } from "react-router-dom";

import LandingPage from "./components/LandingPage";

import Navbar1 from "./components/common/Navbar/Navbar1";
import Navbar2 from "./components/common/Navbar/Navbar2";

import Login from "./components/common/Auth/Login";
import Register from "./components/common/Auth/Register";

import { connect } from "react-redux";
import store from "./redux/store";
import { getUserDetails, setUserLoading } from "./redux/actions/authActions";
import Admin from "./components/admin/Admin";

import "./utils/UIFunctions";

import AdminRoute from "./utils/AdminRoute";
// import UserRoute from "./utils/UserRoute";

if (localStorage.token) {
  store.dispatch(setUserLoading(true));
  store.dispatch(getUserDetails(localStorage.getItem("token")));
}

function App(props) {
  const { isAuthenticated, loading } = props.user;
  const { userType } = props.userType;
  // console.log(props.history);
  const { pathname } = props.history.location;

  console.log(props);

  return (
    <React.Fragment>
      {loading ? (
        <div id="loader">
          <div className="spinner"></div>
        </div>
      ) : (
        <div
          className={
            pathname === "/" ||
            pathname === "/login" ||
            pathname === "/register"
              ? "others"
              : "App"
          }
        >
          <Navbar1 />
          <Navbar2 />
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <AdminRoute path="/admin" component={Admin} />
          </Switch>
        </div>
      )}
    </React.Fragment>
  );
}

const mapStateToProps = state => ({
  user: state.User,
  userType: state.Profile.userType
});

export default connect(mapStateToProps)(withRouter(App));
