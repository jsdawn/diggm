// main 入口文件

import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "@/serviceWorker";
import FastClick from "fastclick";

import App from "@/App";

FastClick.attach(document.body);

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
