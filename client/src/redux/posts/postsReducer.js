import {
  ADD_POST,
  DELETE_POST,
  POST_REQUEST,
  FETCH_POST_SUCCESS,
  POST_REQUEST_FAILURE,
} from "./postsTypes";

const initialState = {
  loading: true,
  data: [],
  error: "",
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_POST:
      return {
        ...state,
        data: [...state.data, ...payload],
      };
    case DELETE_POST:
      return {
        ...state,
        data: state.data.filter(({ id }) => id !== payload),
        loading: false,
      };
    case POST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        data: [...payload],
      };
    case POST_REQUEST_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    // case SEARCH_POST:
    //   return { ...state, data: state.data payload };
    default:
      return state;
  }
};
export default reducer;
