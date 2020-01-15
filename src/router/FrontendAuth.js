import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

function mapStateToProps(state) {
  return {
    channel: state.channel
  };
}

const NOT_CHANNEL = ["/404", "/auth"];

class FrontendAuth extends Component {
  render() {
    const { location, config, channel } = this.props;
    const { pathname } = location;

    const targetRouterConfig = config.find(v => v.path === pathname);

    // redirect router  - redirect
    if (targetRouterConfig && targetRouterConfig.redirect) {
      return <Redirect to={targetRouterConfig.redirect} />;
    }

    // Redirect /404
    if (!targetRouterConfig || !targetRouterConfig.component) {
      return <Redirect to="/404" />;
    }

    const { component } = targetRouterConfig;

    // Redirect /auth
    if (!channel && !NOT_CHANNEL.includes(pathname)) {
      return (
        <Redirect to={{ pathname: "/auth", state: { redirect: pathname } }} />
      );
    }

    // Route to component
    return <Route exact path={pathname} component={component} />;
  }
}

export default connect(mapStateToProps)(FrontendAuth);
