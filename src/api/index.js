import request from "./request";
import { BASE_URL } from "./config";

export const getGlobalData = function(channelId) {
  let url = BASE_URL + "/v1/wx/channelData";
  return request(url, {
    channel_id: channelId ? channelId : 1
  });
};

export const getTestList = function(categoryId, testType, flag, page, size) {
  let params = {};
  params.page = page || 1;
  params.size = size || 20;
  params.category_id = categoryId;

  if (testType) params.test_type = testType;

  if (flag) params.flag = flag;

  return request("/v2/test/list", params);
};
