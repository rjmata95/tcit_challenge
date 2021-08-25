// import initialState from "../store/initialState";

import { DEPOSIT, WITHDRAW } from "../constants/count";

const initialState = {
  count: 0,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case DEPOSIT:
      return { ...state, count: state.count + payload };
    case WITHDRAW:
      return { ...state, count: state.count - payload };
    default:
      return state;
  }
};
export default reducer;
