import * as services from "../../services/album";

export const getAlbums = ({ commit }) => {
  return services.getAlbums().then((response) => {
    commit("SET_ALBUMS", response);
  });
};
