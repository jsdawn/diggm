import axios from "axios";

axios.interceptors.request.use(function(config) {
  let channel = localStorage.getItem("channel");

  config.headers["Authorization"] = channel
    ? JSON.parse(channel).channel_token
    : "";

  return config;
});

const basicUrl = "";

const request = function(url, params, method) {
  method = method || "GET";
  let urlFormat = basicUrl + url;

  if (method === "POST") {
    return new Promise(function(resolve, reject) {
      axios
        .post(urlFormat, params)
        .then(function(response) {
          resolve(response.data);
        })
        .catch(function(error) {
          reject(error);
        });
    });
  } else {
    return new Promise(function(resolve, reject) {
      axios
        .get(urlFormat, { params: params })
        .then(function(response) {
          resolve(response.data);
        })
        .catch(function(error) {
          reject(error);
        });
    });
  }
};

export default request;
