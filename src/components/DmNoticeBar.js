import React, { Component } from "react";
import { connect } from "react-redux";

import { NoticeBar, Toast } from "antd-mobile";
import copyTo from "copy-to-clipboard";

function mapStateToProps(state) {
  return {};
}

class MyComponent extends Component {
  copyPublicId = () => {
    let copyResult = copyTo("DiggMind", 111);

    if (copyResult) {
      const customContent = () => (
        <div>
          <p>已为您复制 </p>
          <p>【DiggMind】公众号ID</p>
          <p>请前往微信「粘贴」搜索</p>
        </div>
      );
      Toast.success(customContent(), 13);
    } else {
      const customContent = () => (
        <div>
          <p>请前往微信 搜索：</p>
          <p>公众号：DiggMind</p>
        </div>
      );
      Toast.offline(customContent(), 3);
    }
  };

  render() {
    return (
      <NoticeBar
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 100
        }}
        marqueeProps={{ loop: true, style: { padding: "0 15px 0 8px" } }}
        mode="link"
        action={
          <span
            style={{ color: "#108ee9", cursor: "pointer", fontWeight: 600 }}
            onClick={this.copyPublicId}
          >
            去看看
          </span>
        }
      >
        该测评来源：微信公众号 【DiggMind】，关注公众号 挖掘自我，认识自我。
      </NoticeBar>
    );
  }
}

export default connect(mapStateToProps)(MyComponent);
