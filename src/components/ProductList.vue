<template>
  <div>
    <ul>
      {{
        products
      }}
    </ul>
  </div>
</template>

<script>
export default {
  name: "product-list",
  props: {
    products: {
      type: Array,
      defalut() {
        return [];
      },
    },
  },
};
</script>

<style></style>
