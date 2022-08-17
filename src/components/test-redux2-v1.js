import { connect } from "react-redux";
import {
  increment2,
  decrement2,
  incrementMany2,
} from "../features/counter2/counter";
import { bindActionCreators } from "redux";

// console.log("increment2", increment2(1));

function TestRedux2V1(props) {
  const { count, increment2, decrement2, incrementMany2 } = props;
  return (
    <div>
      <h2>使用redux-actions优化reducer</h2>
      <p>count: {count}</p>
      <button onClick={() => increment2()}>increment</button>
      <button onClick={() => decrement2()}>decrement</button>
      <button onClick={() => incrementMany2(2)}>increnment2</button>
      <hr />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    count: state.counter2.count,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
    ...bindActionCreators({ increment2, decrement2, incrementMany2 }, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TestRedux2V1);
