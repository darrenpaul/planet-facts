<template>
  <div class="glance--container">
    <p>{{ title }}</p>
    <p>{{ information }}</p>
  </div>
</template>

<script>
export default {
  name: "Glance Card",

  props: {
    title: { type: String },
    information: { type: String },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/base.scss";
@import "@/assets/styles/components/glance-card.scss";
</style>
