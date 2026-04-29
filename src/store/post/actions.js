import * as services from "../../services/post";

export const getPosts = ({ commit }) => {
  return services.getPosts().then((response) => {
    const posts = response.map((post) => ({
      ...post,
      image: post.id,
    }));
    commit("SET_POSTS", posts);
  });
};
