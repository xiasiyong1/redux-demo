import { connect } from "react-redux";
import {
  increment,
  decrement,
  incrementMany,
} from "../features/counter1/action";
import { bindActionCreators } from "redux";

function TestRedux1V2(props) {
  const { count, increment, decrement, incrementMany } = props;
  return (
    <div>
      <h2>使用bindActionCreators优化</h2>
      <p>count: {count}</p>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={() => incrementMany(2)}>increnment2</button>
      <p>
        bindActionCreators(increment) === increment: () => dispatch(increment())
      </p>
      <p>缺点：但是action的写法看起来还是很别扭</p>
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
    ...bindActionCreators({ increment, decrement, incrementMany }, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TestRedux1V2);
