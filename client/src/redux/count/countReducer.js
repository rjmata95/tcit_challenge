import { DEPOSIT, WITHDRAW } from "./countTypes";

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
