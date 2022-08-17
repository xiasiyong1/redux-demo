import { INCREMENT, DECREMENT, INCREMENT_MANY } from "./action-type";

export const increment = () => {
  return {
    type: INCREMENT,
  };
};

export const decrement = () => {
  return {
    type: DECREMENT,
  };
};

export const incrementMany = (payload) => {
  return {
    type: INCREMENT_MANY,
    payload,
  };
};
