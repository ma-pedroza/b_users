import http from "../http";

export const getUsuarios = () => {
  return http.get("/users").then((response) => response.data);
};

export const postUsuario = (payload) => {
  return http.post("/users", payload).then((response) => response);
};

export const patchUsuario = (payload) => {
  return http
    .patch(`/users/${payload.id}`, payload)
    .then((response) => response);
};
