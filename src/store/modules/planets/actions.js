import {
  SET_PLANETS,
  SET_ACTIVE,
  SET_CONTEXT,
  SAVE_PLANETS,
  SAVE_ACTIVE,
  SAVE_CONTEXT,
} from "./types";

export default {
  [SET_PLANETS]({ commit }, value) {
    commit(SAVE_PLANETS, value);
  },

  [SET_ACTIVE]({ commit }, value) {
    commit(SAVE_ACTIVE, value);
  },

  [SET_CONTEXT]({ commit }, value) {
    commit(SAVE_CONTEXT, value);
  },
};
