import { actionTypes } from "./actionTypes";
import jsonPlaceholder from "../apis/jsonPlaceholder";
import _ from "lodash";

export const getPostsandUsers = () => {
  return async (dispatch, getState) => {
    await dispatch(fetchPosts());
    const userIds = _.uniq(_.map(getState().posts, "userId"));
    userIds.forEach(id => dispatch(fetchUser(id)));
  };
};

export const fetchPosts = () => {
  return async dispatch => {
    const responce = await jsonPlaceholder.get("/posts");
    dispatch({
      type: actionTypes.FETCH_POSTS,
      payload: responce.data,
    });
  };
};

export const fetchUser = userId => {
  return async dispatch => {
    const responce = await jsonPlaceholder.get(`/users/${userId}`);
    dispatch({
      type: actionTypes.FETCH_USER,
      payload: responce.data,
    });
  };
};
