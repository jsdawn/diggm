import React, { Component } from "react";
import { connect } from "react-redux";
import { Button } from "antd-mobile";

import { addTests } from "@/store/actions.js";

function mapStateToProps(state) {
  return {
    tests: state.tests
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addTests: item => dispatch(addTests(item))
  };
}

class Tests extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  changeValue = e => {
    this.setState({
      value: e.target.value
    });
  };

  addList = () => {
    this.props.addTests(this.state.value);
  };

  render() {
    return (
      <div>
        <input type="text" placeholder="输入文字" onChange={this.changeValue} />
        <Button type="primary" inline size="small" onClick={this.addList}>
          添加测试
        </Button>

        <ul className="test-list">
          {this.props.tests.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Tests);
