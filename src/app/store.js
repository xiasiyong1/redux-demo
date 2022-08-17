import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import counter1Reducer from "../features/counter1/counter";
import counter2Reducer from "../features/counter2/counter";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    counter1: counter1Reducer,
    counter2: counter2Reducer,
  },
});
