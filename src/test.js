<template>
  <div>
    <h1 v-if="showname">hello vue {{ user.name }}</h1>
    <h2 v-else>hello vue2</h2>
    <ul>
      <template v-if="quiz === 'front'">
        <li>html</li>
      </template>
      <template v-else>
        <li>css</li>
      </template>
    </ul>
    <div v-for="(animal, index) in animals" :key="index">
      <h2>animal ==> {{ animal.name }}</h2>
      <ul>
        <li v-for="(food, foodIndex) in animal.favoritFood" :key="foodIndex">
          {{ food }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      animals: [
        { name: "lion", size: "큼", favoritFood: ["banana", "apple"] },
        { name: "tiger", size: "큼", favoritFood: ["pizza", "apple"] },
        { name: "bear", size: "큼", favoritFood: ["ramen", "apple"] },
      ],
      quiz: "back",
      showname: false,
      user: {
        name: "scalper",
        age: 100,
        job: "programmer",
      },
    };
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
