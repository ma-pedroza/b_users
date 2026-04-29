import * as getters from "../theme/getters";
import state from "./state";
import mutations from "./mutations";
import * as actions from "./actions";

export default {
  getters,
  state,
  actions,
  mutations,
  namespaced: true,
};
