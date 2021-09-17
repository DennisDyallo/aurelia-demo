<template>
  <div>
    <TodoInput v-model="inputValue" @keyup.enter="addTodo()" />
    <TodoItem v-for="(todo, index) in todos" :key="index" :item="todo" />
    <div>Unfinished todo items: {{ unfinishedCount }}</div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import { TodoItemModel } from "../models/TodoItemModel";
import TodoItem from "./TodoItem.vue";
import TodoInput from "./TodoInputClear.vue";

export default defineComponent({
  components: {
    TodoItem,
    TodoInput,
  },
  setup() {
    const inputValue = ref("");
    const todos = ref<TodoItemModel[]>([]);

    const unfinishedCount = computed(
      () => todos.value.filter((t) => !t.done).length
    );

    function addTodo() {
      if (!inputValue.value) return;

      todos.value.unshift({ text: inputValue.value, done: false });
      inputValue.value = "";
    }

    return {
      inputValue,
      todos,
      addTodo,
      unfinishedCount,
    };
  },
});
</script>
