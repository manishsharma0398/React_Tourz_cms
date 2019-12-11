import { SET_AUTHENTICATION, USER_LOADING } from "../types";

const initialState = {
  // isAuthenticated: true,
  isAuthenticated: false,
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case USER_LOADING:
      return {
        ...state,
        loading: action.payload
      };

    case SET_AUTHENTICATION:
      return {
        ...state,
        isAuthenticated: action.payload
      };

    default:
      return state;
  }
}
