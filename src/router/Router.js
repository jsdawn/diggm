import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

import Home from "@/page/home/Index.js";
import Details from "@/page/test/Details.js";
import Tests from "@/page/test/Tests.js";

const BasicRoute = () => (
  <HashRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/details" component={Details} />
      <Route exact path="/tests" component={Tests} />
    </Switch>
  </HashRouter>
);

export default BasicRoute;
