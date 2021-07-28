<template>
  <div class="main--container">
    <div class="images--container">
      <img class="planet--image" :src="imagePath" alt="" />
    </div>

    <div class="information--container">
      <h3>{{ planetData.name }}</h3>
      <p>{{ planetData[activeContext].content }}</p>
      <p>
        Source:&nbsp;
        <a :href="planetData[activeContext].source" target="_blank">
          Wikipedia
          <font-awesome-icon
            class="--icon"
            :icon="['fas', 'external-link-square-alt']"
        /></a>
      </p>
    </div>

    <div class="context-buttons--container">
      <button
        v-for="(button, index) in contextButtons"
        :key="index"
        :class="['context--button']"
        :style="{
          background: button.value === activeContext ? `${activeColor}` : '',
        }"
        @click="() => onContextClick(button.value)"
      >
        <p>0{{ index + 1 }}</p>
        <p>{{ button.name }}</p>
      </button>
    </div>

    <div class="glance-cards--container">
      <GlanceCard :title="'Rotation Time'" :information="planetData.rotation" />
      <GlanceCard
        :title="'Revolution Time'"
        :information="planetData.revolution"
      />
      <GlanceCard :title="'Radius'" :information="planetData.radius" />
      <GlanceCard
        :title="'Average Temp'"
        :information="planetData.temperature"
      />
    </div>
  </div>
</template>

<script>
// Components
import GlanceCard from "@/components/GlanceCard.vue";

export default {
  name: "Planet Component",

  components: { GlanceCard },

  props: {
    planetData: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      contextButtons: [
        { name: "Overview", value: "overview" },
        { name: "Internal Structure", value: "structure" },
        { name: "Surface Geology", value: "geology" },
      ],
      activeColors: {
        mercury: "#419ebb",
        venus: "#eda249",
        earth: "#6f2ed6",
        mars: "#d14c32",
        jupiter: "#d83a34",
        saturn: "#cd5120",
        uranus: "#1ec2a4",
        neptune: "#2d68f0",
      },
    };
  },

  computed: {
    imagePath() {
      let image = this.planetData.images.planet;
      if (this.activeContext === "structure") {
        image = this.planetData.images.internal;
      }
      if (this.activeContext === "geology") {
        image = this.planetData.images.geology;
      }
      return require(`@/assets/images/${image}`);
    },

    activeContext() {
      return this.$store.getters["planets/CONTEXT"];
    },

    activeColor() {
      console.log(this.activeContext);
      console.log(this.activeColors[this.activeContext]);
      return this.activeColors[this.planetData.name.toLowerCase()];
    },
  },

  methods: {
    onContextClick(contextValue) {
      this.$store.dispatch("planets/SET_CONTEXT", contextValue);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/base.scss";
@import "@/assets/styles/components/planet.scss";
</style>
