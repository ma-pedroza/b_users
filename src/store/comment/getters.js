export const getCommentsByPost = (state) => (id) => {
  return state.comments.filter((comment) => comment.postId === id);
};
