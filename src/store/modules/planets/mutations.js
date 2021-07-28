import { SAVE_PLANETS, SAVE_ACTIVE, SAVE_CONTEXT } from "./types";

export default {
  [SAVE_PLANETS](state, data) {
    state.planets = data;
  },

  [SAVE_ACTIVE](state, data) {
    state.active = data;
  },

  [SAVE_CONTEXT](state, data) {
    state.context = data;
  },
};
