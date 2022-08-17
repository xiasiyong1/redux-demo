import { createActions, handleActions, combineActions } from "redux-actions";

const initState = {
  count: 12,
  other: "test other",
};

const { increment2, decrement2, incrementMany2, changeOther } = createActions({
  INCREMENT2: (amount = 1) => ({ amount }),
  DECREMENT2: (amount = 1) => ({ amount: -amount }),
  INCREMENT_MANY2: (amount = 1) => ({ amount }),
  CHANGE_OTHER: (text) => ({ text }),
});

const counter2Reducer = handleActions(
  {
    [combineActions(increment2, decrement2)]: (
      state,
      { payload: { amount } }
    ) => {
      return { ...state, count: state.count + amount };
    },
    [incrementMany2]: (state, { payload: { amount } }) => {
      return { ...state, count: state.count + amount };
    },
    [changeOther]: (state, { payload: { text } }) => {
      return { ...state, other: text };
    },
  },
  initState
);

export { increment2, decrement2, incrementMany2, changeOther };

export default counter2Reducer;
