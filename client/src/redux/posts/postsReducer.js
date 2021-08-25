import {
  ADD_POST,
  DELETE_POST,
  FETCH_POST_REQUEST,
  FETCH_POST_SUCCESS,
  FETCH_POST_FAILURE,
} from "./postsTypes";

const initialState = {
  loading: false,
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
        data: state.data.filter((id) => id !== payload),
      };
    case FETCH_POST_REQUEST:
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
    case FETCH_POST_FAILURE:
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
