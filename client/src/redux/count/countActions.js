import { DEPOSIT, WITHDRAW } from "./countTypes";

export const increaseCount = (payload) => ({
  type: DEPOSIT,
  payload,
});

export const decreaseCount = (payload) => ({
  type: WITHDRAW,
  payload,
});
