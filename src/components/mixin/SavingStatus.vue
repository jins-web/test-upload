<template>
  <div>
    <h2>총 적금: {{ totalMoney }}</h2>
    <button @click="addMoney(50)">50</button>
    <button @click="addMoney(100)">100</button>
    <button @click="addMoney(150)">150</button>
    <button @click="addMoney(200)">200</button>
  </div>
</template>

<script>
import moneyMixin from "../../mixins/moneyMixins";
export default {
  name: "SavingStatus",
  data() {
    return {};
  },
  mixins: [moneyMixin],
  methods: {},
};
</script>

<style></style>
