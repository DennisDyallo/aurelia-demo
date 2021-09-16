<template>
  <div>
    <TodoInput v-model="inputValue" @keyup.enter="addTodo()" />
    <TodoItem v-for="(todo, index) in todos" :key="index" :item="todo" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { TodoItemModel } from "../models/TodoItemModel";
import TodoItem from "./TodoItem.vue";
import TodoInput from "./TodoInput.vue";

export default defineComponent({
  components: {
    TodoItem,
    TodoInput,
  },
  setup() {
    const inputValue = ref("");
    const todos = ref<TodoItemModel[]>([]);

    function addTodo() {
      if (inputValue.value) {
        todos.value.push({ text: inputValue.value, done: false });
        inputValue.value = "";
      }
      return true;
    }

    return {
      inputValue,
      todos,
      addTodo,
    };
  },
});
</script>

<style scoped>
.done {
  text-decoration: line-through;
}
</style>
