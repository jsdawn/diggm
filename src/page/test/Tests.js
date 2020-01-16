import React, { Component } from "react";
import { connect } from "react-redux";

import "./Tests.scss";

import { ListView, Icon, Result } from "antd-mobile";
import TestItem from "@/page/test/components/TestItem";
import ActivityLoading from "@/components/ActivityLoading";

import { getTestList } from "@/api/index.js";

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {};
}

const myImg = src => <img src={src} style={{ width: "60px" }} alt="" />;

class Tests extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.state = {
      dataSource: ds,
      list: [],
      upLoading: false,
      hasMore: true,

      categoryId: 0,
      testType: null,
      flag: null,
      page: 0,
      size: 20
    };
  }

  //上拉加载
  onEndReached = () => {
    if (this.state.upLoading || !this.state.hasMore) {
      return;
    }
    this.fetchList();
  };

  fetchList = () => {
    this.setState({
      upLoading: true,
      page: this.state.page + 1
    });

    let { categoryId, testType, flag, page, size } = this.state;
    getTestList(categoryId, testType, flag, page, size).then(res => {
      let list = res.data;

      this.setState({
        upLoading: false,
        list: this.state.list.concat(list),
        hasMore: list.length >= size
      });
    });
  };

  handleItem = testId => {
    this.props.history.push(`/details?id=${testId}`);
  };

  componentDidMount() {
    this.fetchList();
  }

  render() {
    const { list, dataSource, hasMore, size } = this.state;

    const ListFooter = () => {
      return (
        <div style={{ padding: 10, textAlign: "center" }}>
          {hasMore ? <Icon type="loading" /> : "- 完 -"}
        </div>
      );
    };

    if (list.length === 0 && hasMore) {
      return <ActivityLoading />;
    }

    if (list.length === 0 && !hasMore) {
      return (
        <Result
          img={myImg(
            "https://gw.alipayobjects.com/zos/rmsportal/GIyMDJnuqmcqPLpHCSkj.svg"
          )}
          title="暂无数据"
          message="关注微信公众号【DiggMind】，挖掘自我，认知自我"
        />
      );
    }

    return (
      <div className="page-tests">
        <ListView
          dataSource={dataSource.cloneWithRows(list)}
          renderRow={(rowData, id1, i) => {
            return <TestItem row={rowData} handleItem={this.handleItem} />;
          }}
          initialListSize={size}
          pageSize={size}
          renderFooter={() => <ListFooter />}
          onEndReached={() => this.onEndReached()}
          onEndReachedThreshold={20}
          useBodyScroll={true}
        />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Tests);
