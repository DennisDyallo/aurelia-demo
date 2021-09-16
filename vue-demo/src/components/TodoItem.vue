<template>
  <div class="todo-item" :class="{ done: item.done }">
    {{ item.text }}
    <button v-if="!item.done" @click="markDone(item)">✔️</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { TodoItemModel } from "../models/TodoItemModel";

export default defineComponent({
  props: {
    item: Object as () => TodoItemModel,
  },
  setup(props) {
    function markDone(item: TodoItemModel) {
      // props.item.done = true;
      item.done = true;
    }

    return {
      markDone,
    };
  },
});
</script>

<style scoped>
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
