import http from "../http";

export const getAlbums = () => {
  return http.get("/albums").then((response) => response.data);
};
