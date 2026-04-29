import http from "../http";

export const getComments = () => {
  return http.get("/comments").then((response) => response.data);
};

export const getCommentsByPost = (id) => {
  console.log("Bateu na Service | ID:", id);
  return http.get(`/comments?postId=${id}`).then((response) => response.data);
};
