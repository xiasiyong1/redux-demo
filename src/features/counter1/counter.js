import { INCREMENT, DECREMENT, INCREMENT_MANY } from "./action-type";

const initState = {
  count: 0,
};

const counter1Reducer = (state = initState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    case DECREMENT:
      return { ...state, count: state.count - 1 };
    case INCREMENT_MANY:
      return { ...state, count: state.count + action.payload };
    default:
      return state;
  }
};

export default counter1Reducer;
