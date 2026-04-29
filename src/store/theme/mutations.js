export default {
  SET_THEME(state) {
    state.darkMode = !state.darkMode;
    if (state.darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  },
};
