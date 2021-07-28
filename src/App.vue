<template>
  <Navigation />
  <router-view />
</template>

<script>
// Components
import Navigation from "@/components/Navigation.vue";
// Data
import planetDataJson from "@/data/planetData.json";

export default {
  name: "Planets App",

  components: { Navigation },

  mounted() {
    this.$store.dispatch("planets/SET_PLANETS", planetDataJson);
  },
};
</script>

<style lang="scss">
@import "@/assets/styles/base.scss";
</style>
