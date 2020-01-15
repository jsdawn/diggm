import { combineReducers } from "redux";
import * as ActionTypes from "./actionTypes";

const LS = window.localStorage;

// init data
const initState = {
  tests: ["测试1", "测试2"],
  channel: LS.getItem("channel") || null
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

const channel = (channel = initState.channel, action) => {
  switch (action.type) {
    case ActionTypes.SET_CHANNEL:
      LS.setItem("channel", JSON.stringify(action.value));
      return action.value;

    default:
      return channel;
  }
};

const reducers = combineReducers({
  tests,
  channel
});

export default reducers;
