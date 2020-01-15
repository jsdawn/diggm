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
