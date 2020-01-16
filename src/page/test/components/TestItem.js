import React from "react";
import PropTypes from "prop-types";

import "./TestItem.scss";

TestItem.propTypes = {
  row: PropTypes.object,
  handleItem: PropTypes.func
};

function TestItem(props) {
  let { row, handleItem } = props;

  return (
    <div className="am-list-item am-list-item-top">
      <div className="am-list-thumb">
        <img src={row.pic} alt="" />
      </div>

      <div
        className="am-list-line am-list-line-multiple"
        onClick={() => {
          handleItem(row.id);
        }}
      >
        <div className="am-list-content">
          {row.title}
          <div className="am-list-brief">
            {row.brief ? row.brief : "客官进来看看 吖"}
          </div>
        </div>
        <div className="am-list-extra">{row.like_num}收藏</div>
      </div>
    </div>
  );
}

export default TestItem;
