import {
  ADD_POST,
  DELETE_POST,
  POST_REQUEST,
  FETCH_POST_SUCCESS,
  POST_REQUEST_FAILURE,
} from "./postsTypes";
import axios from "axios";

export const addPost = (post) => ({
  type: ADD_POST,
  payload: post,
});

export const confirmDeletion = (id) => ({
  type: DELETE_POST,
  payload: id,
});

export const postRequest = () => ({
  type: POST_REQUEST,
});

export const fetchPostSuccess = (posts) => ({
  type: FETCH_POST_SUCCESS,
  payload: posts,
});

export const postRequestFailure = (error) => ({
  type: POST_REQUEST_FAILURE,
  payload: error,
});

export const fetchPosts = () => {
  return (dispatch) => {
    dispatch(postRequest());
    axios
      .get("http://localhost:5000/post")
      .then(({ data }) => {
        //response.data has the fetched data

        dispatch(fetchPostSuccess(data.response));
      })
      .catch(({ message }) => {
        // error.message has the error
        dispatch(postRequestFailure(message));
      });
  };
};

export const deletePost = (id) => {
  return (dispatch) => {
    dispatch(postRequest());
    axios
      .delete(`http://localhost:5000/post/${id}`, {})
      .then(({ data }) => {
        if (data.response !== 1) throw { message: "Registry not Found" };

        dispatch(confirmDeletion(id));
      })
      .catch(({ message }) => {
        dispatch(postRequestFailure(message));
      });
  };
};
