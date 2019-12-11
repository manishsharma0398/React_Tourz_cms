import {
  SET_PROFILE,
  CLEAR_PROFILE,
  PROFILE_LOADING,
  SET_USER_TYPE
} from "../types";

const initialState = {
  profile: null,
  loading: null,
  // userType: "admin"
  userType: "none"
};

export default function(state = initialState, action) {
  switch (action.type) {
    case PROFILE_LOADING:
      return {
        ...state,
        loading: action.payload
      };

    case SET_USER_TYPE:
      return {
        ...state,
        userType: action.payload
      };

    case SET_PROFILE:
      return {
        ...state,
        profile: action.payload
      };

    case CLEAR_PROFILE:
      return {
        ...state,
        profile: null,
        loading: false
      };

    default:
      return state;
  }
}
