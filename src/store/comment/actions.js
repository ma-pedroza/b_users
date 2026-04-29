import * as services from "../../services/comment";

export const getComments = ({ commit }) => {
  return services.getComments().then((response) => {
    commit("SET_COMMENTS", response);
  });
};
