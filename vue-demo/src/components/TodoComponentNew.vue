<template>
  <div>
    <label for="todo-input">Todo:</label>
    <input id="todo-input" type="text" />
    <button @click="addTodo()">Add</button>
    <TodoInput v-model="inputValue" @keypress="addTodo($event)" />
    <TodoItem v-for="(todo, index) in todos" :key="index" :todo="todo" />
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

    function addTodo(event?: KeyboardEvent) {
      if (event && event.key === "Enter") {
        todos.value.push({ text: inputValue.value, done: false });
        inputValue.value = "";
      }
      return true;
    }

    function markDone(item: TodoItemModel) {
      item.done = true;
    }

    return {
      inputValue,
      todos,
      addTodo,
      markDone,
    };
  },
});
</script>

<style scoped>
.done {
  text-decoration: line-through;
}
</style>
