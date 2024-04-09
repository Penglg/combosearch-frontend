import axios from "axios";

// 自定义axios实例
const instance = axios.create({
  baseURL: "http://localhost:8101/api",
  timeout: 10000,
  headers: {},
});

instance.interceptors.response.use(
  function(response) {
    const data = response.data;
    if (data.code === 0) {
      return data.data;
    }
    console.error("request error", data);
    return response.data;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default instance;