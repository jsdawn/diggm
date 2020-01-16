// app.js 页面入口页面

import React, { Component } from "react";
import { Provider } from "react-redux";

import Router from "@/router/Router.js";
import store from "@/store/index.js";

import DmNoticeBar from "@/components/DmNoticeBar";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="app minipage has-notice-bar">
          <DmNoticeBar />
          <Router />
        </div>
      </Provider>
    );
  }
}

export default App;
