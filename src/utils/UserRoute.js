import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const UserRoute = ({ component: Component, auth, userType, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        auth.isAuthenticated === true && userType === "user" ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

// UserRoute.propTypes = {
//   auth: PropTypes.object.isRequired
// };

const mapStateToProps = state => ({
  auth: state.User,
  userType: state.Profile.userType
});

export default connect(mapStateToProps)(UserRoute);
