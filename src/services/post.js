import http from "../http";

export const getPosts = () => {
  return http.get("/posts").then((response) => response.data);
};
