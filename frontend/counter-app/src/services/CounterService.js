import http from "../http-common";

const getCounter = () => {
  return http.get("/Counter");
};


const createCounter = data => {
  return http.post("/Counter", data);
};


const getFileSize = () => {
    return http.get("/FileSize");
  };


export default {
  getCounter,
  getFileSize,
  createCounter,
};