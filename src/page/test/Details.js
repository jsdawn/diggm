import React, { Component } from "react";

import "./Details.scss";

import { Card, WingBlank, WhiteSpace } from "antd-mobile";
import DmNoticeBar from "@/components/DmNoticeBar";

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
      <div className="test-detail has-notice-bar">
        <DmNoticeBar />

        <WingBlank size="lg">
          <WhiteSpace size="lg" />
          <Card>
            <Card.Header
              title={detail.title}
              thumb={detail.pic}
              thumbStyle={{ width: "25%", marginRight: "10px" }}
            />
            <Card.Body>
              <div
                className="detail-content"
                dangerouslySetInnerHTML={{ __html: detail.content }}
              />
            </Card.Body>
            <Card.Footer
              content={detail.like_num + "收藏"}
              extra={detail.tested_num + "测过"}
            />
          </Card>
          <WhiteSpace size="lg" />
        </WingBlank>
      </div>
    );
  }
}

export default Details;
