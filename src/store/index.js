import { createStore } from "vuex";

import applicationModule from "./modules/application";
import planetsModule from "./modules/planets";

const state = {};
const actions = {};
const mutations = {};
const getters = {};

const modules = {
  application: applicationModule,
  planets: planetsModule,
};

export default createStore({
  state,
  actions,
  mutations,
  getters,
  modules,
});
