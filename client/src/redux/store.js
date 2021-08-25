import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import postsReducer from "./posts/postsReducer";
import countReducer from "./count/countReducer";

const reducers = combineReducers({
  count: countReducer,
  posts: postsReducer,
});
const store = createStore(reducers, applyMiddleware(thunk));

export default store;
