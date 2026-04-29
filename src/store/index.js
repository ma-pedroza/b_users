import Vue from "vue";
import Vuex from "vuex";
import usuario from "./usuario";
import post from "./post";
import comment from "./comment";
import theme from "./theme";
import album from "./albums";
import photo from "./photos";
import auth from "./auth";
import todo from "./todo";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    usuario,
    post,
    comment,
    theme,
    album,
    photo,
    auth,
    todo,
  },
});
