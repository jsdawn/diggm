import React, { Component } from "react";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return {
    tests: state.tests
  };
}

class Index extends Component {
  render() {
    return (
      <div>
        <p>我是首页</p>

        <button
          onClick={() => {
            this.props.history.push("tests");
          }}
        >
          前往列表 ({this.props.tests.length})
        </button>
      </div>
    );
  }

  componentDidMount() {}
}

export default connect(mapStateToProps)(Index);
