import React, { useState, useEffect } from "react";
import Input from "../Elements/Input";
import Button from "../Elements/Button";
import PropTypes from "prop-types";
import ErrorHeader from "../Elements/ErrorHeader";

import { connect } from "react-redux";
import { loginUser } from "../../../redux/actions/authActions";

const Login = props => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({});

  const loginHandler = e => {
    e.preventDefault();
    props.loginUser({ login: userName, password });
  };

  console.log(props);

  const onChangeHandler = e => {
    // console.log(e.target);
    if (e.target.id === "userName") {
      setUserName(e.target.value);
    }
    if (e.target.id === "password") {
      setPassword(e.target.value);
    }
  };

  useEffect(() => {
    setError(props.errors.errors);
  }, [props.errors.errors]);

  const { push } = props.history;
  const { isAuthenticated } = props.user;

  useEffect(() => {
    if (isAuthenticated) {
      if (props.userType === "admin") {
        push("/admin");
      }
      if (props.userType === "user") {
        push("/user");
      }
    }
    // console.log(props.errors);
  }, [isAuthenticated, props.userType, push]);

  return (
    <div className="auth">
      <h2>Welcome</h2>
      <h4>Signin to continue</h4>
      <form onSubmit={loginHandler} className="login">
        <ErrorHeader feedback={error.detail} />
        <Input
          id="userName"
          value={userName}
          onChange={onChangeHandler}
          placeholder="Username/Email"
          feedback={error.login}
          required
        />
        <Input
          id="password"
          value={password}
          onChange={onChangeHandler}
          type="password"
          placeholder="Password"
          feedback={error.password}
          required
        />
        <Button type="submit" position="center" value="Login" />
      </form>
    </div>
  );
};

Login.propTypes = {
  user: PropTypes.object.isRequired,
  userType: PropTypes.string.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  user: state.User,
  userType: state.Profile.userType,
  errors: state.Errors
});

export default connect(mapStateToProps, { loginUser })(Login);
