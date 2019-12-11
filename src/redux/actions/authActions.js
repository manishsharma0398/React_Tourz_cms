import React from "react";
import { Redirect } from "react-router-dom";

import {
  SET_AUTHENTICATION,
  USER_LOADING,
  SET_USER_TYPE,
  SET_ERROR
} from "../types";
import API from "../../utils/api";
import { apiWithToken } from "../../utils/apiWithToken.js";

import { setProfile, setProfileLoading } from "./profileActions";

export const loginUser = userData => async dispatch => {
  dispatch(setUserLoading(true));
  dispatch({
    type: SET_ERROR,
    payload: {}
  });
  try {
    const res = await API.post(`/auth/login/`, userData);
    // get token
    const data = await res.data;
    // save token to localstorage
    localStorage.setItem("token", data.token);

    dispatch(getUserDetails(data.token));
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: SET_ERROR,
      payload: err.response.data
    });
    dispatch(setUserLoading(false));
  }
};

export const registerNewUser = userData => dispatch => {
  dispatch(setUserLoading(true));
  dispatch({
    type: SET_ERROR,
    payload: {}
  });
  API.post("/auth/register/", userData)
    .then(res => console.log(res))
    .catch(err => {
      console.log(err);
      console.log(err.response);
      dispatch({
        type: SET_ERROR,
        payload: err.response.data
      });
      dispatch(setUserLoading(false));
    });
};

export const logOutUser = () => dispatch => {
  dispatch(setUserLoading(true));
  apiWithToken(localStorage.getItem("token"))
    .post("/auth/logout/")
    .then(res => {
      localStorage.removeItem("token");
      // console.log(res);
      dispatch(clearAll());
      return <Redirect to="/" />;
    })
    .catch(err => console.log(err));
};

export const getUserDetails = token => dispatch => {
  apiWithToken(token)
    .get("/auth/profile/")
    .then(res => {
      dispatch(setAuthentication(true));
      dispatch(setProfileLoading(true));
      dispatch(setProfile(res.data));
      dispatch(setUserType("admin"));
      dispatch(setUserLoading(false));
    })
    .catch(err => {
      console.log(err);

      if (
        err.response.data.detail === "Invalid token" ||
        err.response.data.detail === "Token has expired"
      ) {
        console.log("some problem with token");
        dispatch(clearAll());
        // localStorage.removeItem("token");
        // return <Redirect to="/login" />;
      } else {
        dispatch({
          type: SET_ERROR,
          payload: {
            network: "Network Error. Please try again"
          }
        });
      }
    });
};

export const setAuthentication = bool => dispatch => {
  dispatch({
    type: SET_AUTHENTICATION,
    payload: bool
  });
};

export const setUserType = userType => dispatch => {
  dispatch({
    type: SET_USER_TYPE,
    payload: userType
  });
};

export const setUserLoading = bool => dispatch => {
  dispatch({
    type: USER_LOADING,
    payload: bool
  });
};

export const clearAll = () => dispatch => {
  // localStorage.removeItem("token");
  dispatch(setAuthentication(false));
  dispatch(setProfileLoading(false));
  dispatch(setProfile(null));
  dispatch(setUserType("none"));
  dispatch(setUserLoading(false));
};
