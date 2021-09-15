<template>
  <div>
    <label for="input">{{ label }}</label>
    <input id="input" type="text" v-model="inputValue" />
    <button @click="addTodo()">Add</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  props: {
    label: { type: String, default: "Todo: " },
  },
  setup(props) {
    const inputValue = ref("");

    return {
      inputValue,
    };
  },
});
</script>

<style scoped>
.done {
  text-decoration: line-through;
}
</style>
