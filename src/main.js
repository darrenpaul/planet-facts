import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import {
  faBars,
  faChevronRight,
  faCircle,
  faExternalLinkSquareAlt,
} from "@fortawesome/free-solid-svg-icons";

library.add(faExternalLinkSquareAlt, faBars, faCircle, faChevronRight);

createApp(App)
  .use(store)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
