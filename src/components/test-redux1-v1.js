import { connect } from "react-redux";
import {
  increment,
  decrement,
  incrementMany,
} from "../features/counter1/action";

function TestRedux1V1(props) {
  const { count, increment, decrement, incrementMany } = props;
  return (
    <div>
      <h2>最原始的redux用法</h2>
      <p>count: {count}</p>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={() => incrementMany(2)}>increnment2</button>
      <p>缺点：mapDispatchToProps的写法太冗余了</p>
      <hr />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    count: state.counter1.count,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
    incrementMany: () => dispatch(incrementMany(2)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TestRedux1V1);
