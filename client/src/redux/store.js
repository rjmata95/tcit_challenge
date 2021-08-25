import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import postsReducer from "./posts/postsReducer";

const reducers = combineReducers({
  // count: countReducers,
  posts: postsReducer,
});
const store = createStore(reducers, applyMiddleware(thunk));

export default store;
