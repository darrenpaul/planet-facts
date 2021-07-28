<template>
  <div class="main-app--container">
    <Planet :planetData="planetData" />
  </div>
</template>

<script>
// Components
import Planet from "@/components/Planet.vue";

export default {
  name: "Home",

  components: { Planet },

  data() {
    return {
      activePlanet: "Earth",
    };
  },

  computed: {
    planetData() {
      return this.$store.getters["planets/PLANET"];
    },
  },
};
</script>

<style></style>

planet
