import React, { useState, useEffect } from "react";
import Input from "../Elements/Input";
import Submit from "../Elements/Button";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { registerNewUser } from "../../../redux/actions/authActions";
// import ErrorHeader from "../Elements/ErrorHeader";

const Register = props => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [error, setError] = useState({});

  const onChangeHandler = e => {
    if (e.target.id === "username") {
      setUserName(e.target.value);
    }
    if (e.target.id === "email") {
      setEmail(e.target.value);
    }
    if (e.target.id === "password") {
      setPassword(e.target.value);
    }
    if (e.target.id === "phoneNumber") {
      setPhoneNo(e.target.value);
    }
  };

  const registerHandler = e => {
    e.preventDefault();
    props.registerNewUser({
      username: userName,
      email,
      password,
      phone_number: phoneNo
    });
  };

  const { isAuthenticated } = props.user;
  const { push } = props.history;

  useEffect(() => {
    setError(props.errors.errors);
  }, [props.errors.errors]);

  useEffect(() => {
    if (isAuthenticated) {
      if (props.userType === "admin") {
        push("/admin");
      }
      if (props.userType === "user") {
        push("/user");
      }
    }
  }, [isAuthenticated, push, props.userType]);

  return (
    <div className="auth">
      <h2>Welcome</h2>
      <h4>Signup to continue</h4>
      <form onSubmit={registerHandler} className="register">
        {/* <ErrorHeader feedback={error.} /> */}
        <Input
          id="username"
          value={userName}
          onChange={onChangeHandler}
          required
          placeholder="Username"
          feedback={error.username}
        />
        <Input
          id="email"
          value={email}
          onChange={onChangeHandler}
          type="email"
          placeholder="Email"
          feedback={error.email}
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
        <Input
          id="phoneNumber"
          value={phoneNo}
          onChange={onChangeHandler}
          type="number"
          required
          placeholder="Mobile Number"
          feedback={error.phone_number}
        />
        <Submit position="center" value="Register" />
      </form>
    </div>
  );
};

Register.propTypes = {
  user: PropTypes.object.isRequired,
  userType: PropTypes.string.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  user: state.User,
  userType: state.Profile.userType,
  errors: state.Errors
});

export default connect(mapStateToProps, { registerNewUser })(Register);
