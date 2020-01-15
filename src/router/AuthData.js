import React, { Component } from "react";
import { connect } from "react-redux";

import { setChannel } from "@/store/actions";
import { getGlobalData } from "@/api";

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    setChannel: channel => dispatch(setChannel(channel))
  };
}

class AuthData extends Component {
  render() {
    return <div>auth...</div>;
  }

  componentDidMount() {
    this.fetchChannel();
  }

  fetchChannel() {
    getGlobalData().then(res => {
      let channel = res.data ? res.data.channel : null;
      channel.channel_key = res.data.channel_key;
      channel.channel_token = res.data.channel_token;
      channel.channel_token_expire = res.data.channel_token_expire;

      this.props.setChannel(channel);

      let redirect = this.props.location.state
        ? this.props.location.state.redirect
        : "/";
      this.props.history.push({ pathname: redirect });
    });
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthData);
