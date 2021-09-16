<template>
  <div class="todo-input">
    <label v-if="label">{{ label }}</label>
    <input
      type="text"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    modelValue: String,
    label: { type: String, default: "Todo: " },
  },
});
</script>

<style scoped>
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
</style>
