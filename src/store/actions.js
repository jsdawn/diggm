import * as ActionTypes from "./actionTypes";

export const addTests = item => {
  return {
    type: ActionTypes.ADD_TESTS,
    value: item
  };
};

export const toggleTests = tests => {
  return {
    type: ActionTypes.TOGGLE_TESTS,
    value: tests
  };
};

export const setChannel = channel => {
  return {
    type: ActionTypes.SET_CHANNEL,
    value: channel
  };
};
