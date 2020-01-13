// app.js 入口页面

import React, { Component } from "react";
import { Provider } from "react-redux";

import "@/style/index.css";
import Router from "@/router/Router.js";
import store from "@/store/index.js";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
