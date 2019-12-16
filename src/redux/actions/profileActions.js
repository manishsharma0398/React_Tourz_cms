import { SET_PROFILE, PROFILE_LOADING } from "../types";

export const setProfile = profileDetails => dispatch => {
  dispatch({
    type: SET_PROFILE,
    payload: profileDetails
  });
};

export const setProfileLoading = bool => dispatch => {
  dispatch({
    type: PROFILE_LOADING,
    payload: bool
  });
};
