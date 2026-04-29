export default {
  SET_AUTH_USER(state, user) {
    state.authUsers.push(user);
  },

  CHANGE_IS_LOGGED(state) {
    state.isLogged = !state.isLogged;
  },

  SET_CURRENT_USER(state, user) {
    state.currentUser = {
      usuario: user.usuario,
      senha: user.senha,
      email: "",
      nomeCompleto: "",
      genero: "",
      linguagem: "",
    };
  },

  UPDATE_CURRENT_USER(state, user) {
    state.currentUser = { ...user };
  },
};
