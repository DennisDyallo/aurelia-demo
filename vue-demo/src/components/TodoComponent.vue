<template>
  <div>
    <label for="todo-input">Todo: </label>
    <input id="todo-input" type="text" v-model="inputValue" @keyup.enter="addTodo" />

    <div v-for="todo of todos" :key="todo.text" :class="{ done: todo.done }" class="todo-item">
      {{ todo.text }}
      <button v-if="!todo.done" @click="markDone(todo)">✔️</button>
    </div>
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

      todos.value.unshift({ text: inputValue.value, done: false });
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
.todo-input {
  display: flex;
  gap: 4px;
  flex: 1;
  align-items: center;
  justify-content: center;
}
input {
  border: 1px solid black;
  border-radius: 4px;
  flex: 1;
  padding: 6px;
}
.todo-item {
  border: 1px solid black;
  border-radius: 4px;
  padding: 8px;
  margin: 2px;
  height: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.todo-item.done {
  text-decoration: line-through;
  background: rgb(240, 240, 240);
}
button {
  background: inherit;
  border: none;
}
</style>
