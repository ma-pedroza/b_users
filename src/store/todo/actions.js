import * as services from "../../services/todo";

export const getTodos = ({ commit }) => {
  return services.getTodos().then((response) => {
    commit("SET_TODOS", response);
  });
};
