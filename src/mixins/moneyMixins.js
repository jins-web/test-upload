export default {
  data() {
    return {
      totalMoney: 0,
    };
  },
  methods: {
    addMoney(price) {
      this.totalMoney += price;
    },
  },
};
