import http from "../http";

export const getTodos = () => {
  return http.get("/todos").then((response) => response.data);
};
