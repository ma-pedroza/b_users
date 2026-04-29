export const getUsuarioById = (state) => (id) => {
  return state.usuarios.find((user) => user.id === id);
};
