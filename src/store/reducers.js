import { combineReducers } from "redux";
import * as ActionTypes from "./actionTypes";

// init data
const initState = {
  tests: ["测试1", "测试2"]
};

const tests = (tests = initState.tests, action) => {
  switch (action.type) {
    case ActionTypes.ADD_TESTS:
      let adds = new Array(action.value);
      return tests.concat(adds);

    case ActionTypes.TOGGLE_TESTS:
      return action.value;

    default:
      return tests;
  }
};

const reducers = combineReducers({
  tests
});

export default reducers;
