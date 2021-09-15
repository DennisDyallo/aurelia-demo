<template>
  <div>
    <label for="todo-input">Todo:</label>
    <input id="todo-input" type="text" v-model="inputValue" />
    <button @click="addTodo()">Add</button>

    <ul>
      <li v-for="todo of todos" :key="todo.text" :class="{ done: todo.done }">
        {{ todo.text }}
        <button v-if="!todo.done" @click="markDone(todo)">✔️</button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { TodoItemModel } from "../models/TodoItemModel";

export default defineComponent({
  setup() {
    const inputValue = ref("");
    const todos = ref<TodoItemModel[]>([]);

    function addTodo() {
      if (!inputValue.value) return;

      todos.value.push({ text: inputValue.value, done: false });
      inputValue.value = "";
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
