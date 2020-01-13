import axios from "axios";

axios.interceptors.request.use(function(config) {
  config.headers["Authorization"] = localStorage.getItem("accessToken");
  config.headers["Authorization-User"] = localStorage.getItem("userToken");
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
          resolve(response);
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
          resolve(response);
        })
        .catch(function(error) {
          reject(error);
        });
    });
  }
};

export default request;
