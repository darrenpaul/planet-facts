<template>
  <div v-if="menuState === false" class="main--container">
    <div class="images--container">
      <img class="planet--image" :src="imagePath" alt="" />
    </div>

    <div class="information--container">
      <h3>{{ planetData.name }}</h3>
      <p>{{ planetData[activeContext].content }}</p>
      <p class="--link">
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
          background:
            button.value === activeContext && isMobile === false
              ? `${activeColor}`
              : `none`,
          borderBottom:
            button.value === activeContext && isMobile
              ? `solid 3px ${activeColor}`
              : isMobile === false
              ? ''
              : `none`,
        }"
        @click="() => onContextClick(button.value)"
      >
        <p>0{{ index + 1 }}</p>
        <p
          :style="{
            color:
              button.value === activeContext && isMobile
                ? `#ffffff`
                : isMobile === false
                ? '#ffffff'
                : '#838391',
          }"
        >
          {{ isMobile ? button.short : button.name }}
        </p>
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
// Scripts
import { colors } from "@/utils/colors";

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
        { name: "Overview", value: "overview", short: "Overview" },
        { name: "Internal Structure", value: "structure", short: "Structure" },
        { name: "Surface Geology", value: "geology", short: "Surface" },
      ],
      activeColors: colors,
      windowWidth: window.innerWidth,
    };
  },

  mounted() {
    window.onresize = () => {
      this.windowWidth = window.innerWidth;
    };

    this.$store.getters["application/MENU_STATE"];
  },

  computed: {
    menuState() {
      return this.$store.getters["application/MENU_STATE"];
    },

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
      return this.activeColors[this.planetData.name.toLowerCase()];
    },

    isMobile() {
      if (this.windowWidth > 570) return false;
      return true;
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
