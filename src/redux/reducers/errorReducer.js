import { SET_ERROR } from "../types";

const initialState = {
  errors: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_ERROR:
      return {
        ...state,
        errors: action.payload
      };

    default:
      return state;
  }
}
