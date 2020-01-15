/*
 * Router.js - 路由入口
 * routerConfig.js - 路由配置
 * FrontendAuth.js - 路由高阶组件（路由守卫）
 * AuthData.js - 守卫数据逻辑（可选）
 * */

import React from "react";
import { HashRouter, Switch } from "react-router-dom";

import FrontendAuth from "@/router/FrontendAuth.js";

import { routerConfig } from "@/router/routerConfig.js";

const BasicRoute = () => (
  <HashRouter>
    <Switch>
      <FrontendAuth config={routerConfig} />
    </Switch>
  </HashRouter>
);

export default BasicRoute;
