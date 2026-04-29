export const setAuthUser = ({ state, commit }, payload) => {
  const exist = state.authUsers.find(
    (authUser) => authUser.usuario === payload.usuario
  );

  if (exist) {
    return { status: false, message: "Usuário já existe" };
  } else {
    commit("SET_AUTH_USER", payload);
    return { status: true, message: `Seja bem vindo ${payload.usuario}!` };
  }
};

export const updateCurrentUser = ({ commit }, payload) => {
  commit("UPDATE_CURRENT_USER", payload);
  return { status: true, message: "Usuario atualizado com sucesso!" };
};

export const login = ({ state, commit }, payload) => {
  const usuario = state.authUsers.find(
    (authUser) =>
      authUser.usuario === payload.usuario && authUser.senha === payload.senha
  );

  if (usuario) {
    if (state.isLogged === true) {
      return;
    }
    commit("SET_CURRENT_USER", payload);
    commit("CHANGE_IS_LOGGED");

    return { status: true, message: `Bem vindo de volta ${payload.usuario}` };
  } else {
    return { status: false, message: "Usuario não encontrado." };
  }
};

export const changeIsLogged = ({ commit }) => {
  commit("CHANGE_IS_LOGGED");
};
