<template>
  <div>
    <CompLevel1 />
    <button @click="activeTab = 'Menu1'">menu1</button>
    <button @click="activeTab = 'Menu2'">menu2</button>
    <button @click="activeTab = 'Menu3'">menu3</button>
    <component :is="activeTab"></component>
    <TodoList />
    <ProductStatus />
    <FeeStatus />
    <SavingStatus />
    <div>
      price <input type="number" v-model="price" /> amount
      <input type="number" v-model="amount" />
      <h3>total price :: {{ totalPrice }}</h3>
    </div>
    <h3>full name :: {{ fullName }}</h3>
  </div>
</template>
<script>
import { ref, computed, reactive, toRefs, watch } from "vue";
import FeeStatus from "./components/mixin/FeeStatus.vue";
import SavingStatus from "./components/mixin/SavingStatus.vue";
import ProductStatus from "./components/mixin/ProductStatus.vue";
import TodoList from "./components/TodoList.vue";
import Menu1 from "./components/Menu1.vue";
import Menu2 from "./components/Menu2.vue";
import Menu3 from "./components/Menu3.vue";
import CompLevel1 from "./components/CompLevel1";
export default {
  name: "App",
  setup() {
    const username = ref("jin");
    const price = ref(5000);
    const amount = ref(1);
    const totalPrice = computed(() => {
      return price.value + amount.value;
    });
    const state = reactive({
      first: "code",
      last: "jin",
    });
    const fullName = computed(function () {
      return `${state.first} ${state.last}`;
    });
    watch(
      () => {
        return state.first;
      },
      (newValue, oldValue) => {
        console.log(newValue, oldValue);
      }
    );
    return {
      username,
      price,
      amount,
      totalPrice,
      ...toRefs(state),
      fullName,
    };
  },
  data() {
    return {
      money: 0,
      userName: "kim",
      displayDetail: false,
      activeTab: "Menu1",
    };
  },
  components: {
    CompLevel1,
    Menu1,
    Menu2,
    Menu3,
    TodoList,
    ProductStatus,
    FeeStatus,
    SavingStatus,
  },
  methods: {
    close() {
      this.displayDetail = false;
    },
  },
  provide() {
    return {
      name: this.userName,
    };
  },
  watch: {
    userName: {
      handler(newValue) {
        console.log(newValue);
      },
      deep: true,
    },
    money(newValue, oldValue) {
      console.log(oldValue);
      if (newValue > 2000 && newValue > oldValue) {
        console.log("mossion good");
      }
      if (oldValue < 1500 && newValue < oldValue) {
        console.log("save good");
      }
    },
  },
};
</script>
<style>
.line-through {
  text-decoration: line-through;
}
.highlight {
  color: red;
}
</style>
