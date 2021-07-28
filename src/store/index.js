import { createStore, createLogger } from "vuex";

import planetsModule from "./modules/planets";

const state = {};
const actions = {};
const mutations = {};
const getters = {};

const modules = {
  planets: planetsModule,
};

export default createStore({
  state,
  actions,
  mutations,
  getters,
  modules,
  plugins: [createLogger()],
});
