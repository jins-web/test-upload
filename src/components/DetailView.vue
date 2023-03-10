<template>
  <div class="wrapper">
    <div class="container">
      <h2>Detail Page</h2>
      <button @click="closeDetail">close</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "detailPage",
  methods: {
    closeDetail() {
      this.$emit("closeDetail");
    },
  },
};
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  background: rgba(rgb(44, 34, 34), green, blue, 0.5);
}
</style>
