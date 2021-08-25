import { combineReducers } from "redux";
import countReducers from "./countReducer";
import postsReducers from "./postsReducer";
const reducers = combineReducers({
  count: countReducers,
  posts: postsReducers,
});

export default reducers;
