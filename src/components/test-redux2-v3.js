import { useSelector, useDispatch } from "react-redux";
import { createSelector } from "@reduxjs/toolkit";
import { memo } from "react";
import {
  increment2,
  decrement2,
  incrementMany2,
  changeOther,
} from "../features/counter2/counter";

// • useSelector、useDispatch、useStore

const selectCount = (state) => {
  console.log("count selecter");
  return state.counter2.count;
};
const selectOther = (state) => {
  console.log("other selecter");
  return state.counter2.other;
};

const otherSelector = createSelector(selectOther, (other) => {
  console.log("createSelector");
  return other + "computed";
});

function TestRedux2V3(props) {
  console.log("TestRedux2V3");
  console.log("TestRedux2V322");
  const other = useSelector(otherSelector);
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>使用reselect优化</h2>
      <p>count: {count}</p>
      <p>other: {other}</p>
      <button onClick={() => dispatch(increment2())}>increment</button>
      <button onClick={() => dispatch(decrement2())}>decrement</button>
      <button onClick={() => dispatch(incrementMany2(2))}>increnment2</button>
      <button onClick={() => dispatch(changeOther("hello"))}>
        change other
      </button>
      <p>存在的问题： selector没有被缓存</p>
      <hr />
    </div>
  );
}

export default memo(TestRedux2V3);
