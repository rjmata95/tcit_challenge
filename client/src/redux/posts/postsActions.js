import {
  ADD_POST,
  DELETE_POST,
  FETCH_POST_REQUEST,
  FETCH_POST_SUCCESS,
  FETCH_POST_FAILURE,
} from "./postsTypes";
import axios from "axios";

export const addPost = (post) => ({
  type: ADD_POST,
  payload: post,
});

export const deletePost = (postId) => ({
  type: DELETE_POST,
  payload: postId,
});

export const fetchPostFromAPI = () => ({
  type: FETCH_POST_REQUEST,
});

export const fetchPostSuccess = (posts) => ({
  type: FETCH_POST_SUCCESS,
  payload: posts,
});

export const fetchPostFailure = (error) => ({
  type: FETCH_POST_FAILURE,
  payload: error,
});

export const fetchPosts = () => {
  return (dispatch) => {
    dispatch(fetchPostFromAPI());
    axios
      .get("MOCK_DATA.json")
      .then(({ data }) => {
        //response.data has the fetched data

        dispatch(fetchPostSuccess(data));
      })
      .catch(({ message }) => {
        // error.message has the error
        dispatch(fetchPostFailure());
      });
  };
};
