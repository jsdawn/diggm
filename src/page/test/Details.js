import React, { Component } from "react";

import "./Details.scss";

import { Card, WingBlank, WhiteSpace } from "antd-mobile";

import { getTestDetail } from "@/api/index.js";

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      testId: 0,
      detail: null
    };
  }

  fetchDetail() {
    if (this.state.testId <= 0) return;

    getTestDetail(this.state.testId).then(res => {
      this.setState({ detail: res.data });
    });
  }

  componentDidMount() {
    let testId = window._getQueryBySearch(this.props.location, "id");
    this.setState({ testId: testId });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.testId !== this.state.testId) {
      this.fetchDetail(this.state.testId);
    }
  }

  render() {
    let { detail } = this.state;

    if (!detail) {
      return <div>加载...</div>;
    }

    return (
      <WingBlank size="lg">
        <WhiteSpace size="lg" />
        <Card>
          <Card.Header
            title={detail.title}
            extra={<span>test id: {detail.id}</span>}
          />
          <Card.Body>
            <div>This is content of `Card`</div>
          </Card.Body>
          <Card.Footer
            content="footer content"
            extra={<div>extra footer content</div>}
          />
        </Card>
        <WhiteSpace size="lg" />
      </WingBlank>
    );
  }
}

export default Details;
