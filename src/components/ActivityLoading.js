import React from "react";
import { ActivityIndicator, Flex } from "antd-mobile";

function ActivityLoading(props) {
  return (
    <Flex
      className="comp-activity-loading"
      justify="center"
      style={{ paddingTop: "20px" }}
    >
      <ActivityIndicator text="Loading..." />
    </Flex>
  );
}

export default ActivityLoading;
