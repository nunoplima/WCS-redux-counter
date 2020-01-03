import React from "react";
import { connect } from "react-redux";
import { counterAdd, counterSubtract } from "../actions";

const mapStateToProps = (state) => ({ count: state } );

const mapDispatchToProps = (dispatch) => (
  {
    onClickHandler: action => {
      return action === "INCREMENT" ? dispatch(counterAdd) : dispatch(counterSubtract);
    }
  }
);

const CounterContainer = ({ count, onClickHandler }) => (
  <>
    <h1>{count}</h1>
    <button onClick={() => onClickHandler("INCREMENT")}>+</button>
    <button onClick={() => onClickHandler("DECREMENT")}>-</button>
  </>
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterContainer);