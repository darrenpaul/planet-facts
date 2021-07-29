import { SET_MOBILE_MENU, SAVE_MOBILE_MENU } from "./types";

export default {
  [SET_MOBILE_MENU]({ commit }, value) {
    commit(SAVE_MOBILE_MENU, value);
  },
};
