import * as services from "../../services/usuario";

export const getUsuarios = ({ commit }) => {
  return services.getUsuarios().then((response) => {
    commit("SET_USUARIOS", response);
  });
};

export const postUsuario = (_, payload) => {
  return services.postUsuario(payload).then((response) => response);
};

export const patchUsuario = (_, payload) => {
  return services.patchUsuario(payload).then((response) => response);
};
