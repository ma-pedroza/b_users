import http from "../http";

export const getPhotos = () => {
  return http.get("/photos").then((response) => response.data);
};
