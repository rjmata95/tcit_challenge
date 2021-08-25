import { DEPOSIT, WITHDRAW } from "../constants/count";

export const increaseCount = (payload) => ({
  type: DEPOSIT,
  payload,
});

export const decreaseCount = (payload) => ({
  type: WITHDRAW,
  payload,
});
