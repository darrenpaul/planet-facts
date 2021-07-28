<template>
  <nav>
    <h2>The Planets</h2>
    <div class="--links">
      <button
        v-for="(link, index) in links"
        :key="index"
        :class="[activePlanet === link.toLowerCase() ? 'active' : '']"
        @click="() => onLinkClick(link)"
      >
        {{ link }}
      </button>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navigation",

  computed: {
    links() {
      return this.$store.getters["planets/NAMES"];
    },

    activePlanet() {
      return this.$store.getters["planets/PLANET"].name.toLowerCase();
    },
  },

  methods: {
    onLinkClick(linkName) {
      this.$store.dispatch("planets/SET_ACTIVE", linkName);
      this.$store.dispatch("planets/SET_CONTEXT", "overview");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/base.scss";
@import "@/assets/styles/components/navigation.scss";
</style>
