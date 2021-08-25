import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "../reducers";
import initialState from "./initialState";

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
