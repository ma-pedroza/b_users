import * as services from "../../services/photo";

export const getPhotos = ({ commit }) => {
  return services.getPhotos().then((response) => {
    commit("SET_PHOTOS", response);
  });
};
