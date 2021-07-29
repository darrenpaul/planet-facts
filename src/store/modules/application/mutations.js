import { SAVE_MOBILE_MENU } from "./types";

export default {
  [SAVE_MOBILE_MENU](state, data) {
    state.menu = data;
  },
};
