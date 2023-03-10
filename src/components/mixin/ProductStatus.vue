<template>
  <div>
    <h2>전체 금액: {{ totalMoney }}</h2>
    <div>
      <button @click="addMoney(100)">100</button>
      <button @click="addMoney(200)">200</button>
      <button @click="addMoney(300)">300</button>
    </div>
    <FeeStatusVue />
  </div>
</template>

<script>
import moneyMixin from "../../mixins/moneyMixins";
export default {
  name: "productStatus",
  data() {
    return {};
  },
  mixins: [moneyMixin],
  methods: {},
  componenets: {},
};
</script>

<style></style>
