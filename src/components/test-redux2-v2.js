import { useSelector, useDispatch } from "react-redux";
import {
  increment2,
  decrement2,
  incrementMany2,
} from "../features/counter2/counter";

// • useSelector、useDispatch、useStore

const selectCount = (state) => state.counter2.count;

function TestRedux2V2(props) {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>不适用connect， 使用hook操作redux</h2>
      <p>count: {count}</p>
      <button onClick={() => dispatch(increment2())}>increment</button>
      <button onClick={() => dispatch(decrement2())}>decrement</button>
      <button onClick={() => dispatch(incrementMany2(2))}>increnment2</button>
      <p>存在的问题： selector没有被缓存</p>
      <hr />
    </div>
  );
}

export default TestRedux2V2;
