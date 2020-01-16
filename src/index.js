// main 入口文件

import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "@/serviceWorker";
import FastClick from "fastclick";

import "@/style/index.scss";

import "@/util/copyright.js";
import "@/util/global.js";

import App from "@/App";

FastClick.attach(document.body);

ReactDOM.render(<App glo="gggg" />, document.getElementById("root"));

serviceWorker.unregister();
