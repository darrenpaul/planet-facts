import { NAMES, PLANET, CONTEXT } from "./types";

export default {
  [NAMES]: (state) => {
    return state.planets.map((planet) => planet.name);
  },

  [PLANET]: (state) => {
    return state.planets.filter((planet) => planet.name === state.active)[0];
  },

  [CONTEXT]: (state) => state.context,
};
