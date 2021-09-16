<template>
  <div>
    <label>Todo: </label>
    <input type="text" v-model="inputValue" />
    <button @click="addTodo">Add</button>

    <div class="todo-item" v-for="todo of todos" :key="todo.text" :class="{ done: todo.done }">
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
</style>