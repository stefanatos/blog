import { actionTypes } from "../actions/actionTypes";

const postReducer = (state = [], action) => {
  switch (action.type) {
    case actionTypes.FETCH_POSTS:
      return action.payload;
    default:
      return state;
  }
};

export default postReducer;
