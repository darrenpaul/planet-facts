<template>
  <nav>
    <h2>The Planets</h2>

    <div :class="['--links', mobileMenuShow ? '--show' : '']">
      <button
        v-for="(link, index) in links"
        :key="index"
        @click="() => onLinkClick(link)"
      >
        <div>
          <font-awesome-icon
            class="--icon"
            icon="circle"
            :style="{ color: planetColor(link) }"
          />
          <p :class="[activePlanet === link.toLowerCase() ? '--active' : '']">
            {{ link }}
          </p>
        </div>
        <font-awesome-icon class="--icon" icon="chevron-right" />
      </button>
    </div>

    <button
      :class="['menu--button', mobileMenuShow ? '--show' : '']"
      @click="onMobileMenuClick"
    >
      <font-awesome-icon icon="bars" />
    </button>
  </nav>
</template>

<script>
// Scripts
import { colors } from "@/utils/colors";

export default {
  name: "Navigation",

  data() {
    return {
      mobileMenuShow: false,
    };
  },

  computed: {
    links() {
      return this.$store.getters["planets/NAMES"];
    },

    activePlanet() {
      return this.$store.getters["planets/PLANET"].name.toLowerCase();
    },
  },

  methods: {
    planetColor(planetName) {
      return colors[planetName.toLowerCase()];
    },

    onLinkClick(linkName) {
      this.mobileMenuShow = false;
      this.$store.dispatch("application/SET_MOBILE_MENU", false);
      this.$store.dispatch("planets/SET_ACTIVE", linkName);
      this.$store.dispatch("planets/SET_CONTEXT", "overview");
    },

    onMobileMenuClick() {
      this.mobileMenuShow = !this.mobileMenuShow;
      this.$store.dispatch("application/SET_MOBILE_MENU", this.mobileMenuShow);
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/styles/base.scss";
@import "@/assets/styles/components/navigation.scss";
</style>
