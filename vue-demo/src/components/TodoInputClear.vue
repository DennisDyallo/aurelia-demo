<template>
  <div class="todo-input">
    <label for="input">{{ label }}</label>
    <input
      id="input"
      type="text"
      :value="modelValue"
      @input="valueChanged($event.target.value)"
    />
    <button @click="clearValue()">❌</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    modelValue: String,
    label: { type: String, default: "Todo: " },
  },
  emits: ["update:modelValue"],
  setup(_, { emit }) {
    function valueChanged(newValue: string) {
      emit("update:modelValue", newValue);
    }

    function clearValue() {
      emit("update:modelValue", "");
    }

    return {
      valueChanged,
      clearValue,
    };
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

button {
  background: inherit;
  border: none;
}
</style>
