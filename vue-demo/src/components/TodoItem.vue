<template>
  <div>
    <li :class="{ done: todo.done }">
      {{ todo.text }}
      <button v-if="!todo.done" @click="markDone(todo)">✔️</button>
    </li>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { TodoItemModel } from "../models/TodoItemModel";

export default defineComponent({
  props: {
    todo: { type: Object as () => TodoItemModel, required: true },
  },
  setup(props) {
    function markDone(item: TodoItemModel) {
      props.todo.done = true;
    }

    return {
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
