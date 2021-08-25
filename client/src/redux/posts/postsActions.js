import {
  ADD_POST,
  DELETE_POST,
  POST_REQUEST,
  FETCH_POST_SUCCESS,
  POST_REQUEST_FAILURE,
} from "./postsTypes";
import axios from "axios";

const { REACT_APP_API, REACT_APP_POST_URL } = process.env;

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
      .get(`${REACT_APP_API}${REACT_APP_POST_URL}`)
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
      .delete(`${REACT_APP_API}${REACT_APP_POST_URL}/${id}`, {})
      .then(({ data }) => {
        if (data.response !== 1) throw { message: "Registry not Found" };

        dispatch(confirmDeletion(id));
      })
      .catch(({ message }) => {
        dispatch(postRequestFailure(message));
      });
  };
};

export const createPost = (post) => {
  return (dispatch) => {
    dispatch(postRequest());
    axios
      .post(`${REACT_APP_API}${REACT_APP_POST_URL}`, post)
      .then(({ data }) => {
        dispatch(fetchPosts());
        // dispatch(addPost(data.response));
      })
      .catch(({ message }) => {
        dispatch(postRequestFailure(message));
      });
    // dispatch(addPost())
  };
};
