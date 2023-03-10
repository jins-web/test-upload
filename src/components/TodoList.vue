<template>
  <div>TodoList</div>
  <button @click="getTodoList">Request Todo</button>
  <ul>
    <li v-for="todo in todoList" :key="todo.id">{{ todo.title }}</li>
  </ul>
  <div></div>
  <p v-if="errorMessage">{{ errorMessage }}</p>
</template>

<script>
import axios from "axios";
export default {
  name: "TodoList",
  data() {
    return {
      todoList: [],
      errorMessage: "",
    };
  },
  methods: {
    getTodoList() {
      const url = "https://jsonplaceholder.typicode.com/todos";
      axios
        .get(url)
        .then((res) => (this.todoList = res.data))
        .catch(() => {
          this.errorMessage = "에러가 발생했음!!";
        });
    },
  },
};
</script>

<style></style>
