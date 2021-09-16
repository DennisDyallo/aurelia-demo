<template>
  <div class="components">
    <TodoComponent />
    <TodoComponentNew />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TodoComponent from "./components/TodoComponent.vue";
import TodoComponentNew from "./components/TodoComponentNew.vue";

export default defineComponent({
  name: "App",
  components: {
    TodoComponent,
    TodoComponentNew,
  },
});
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
}
body {
  display: flex;
}
#app {
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.components {
  display: flex;
  align-items: center;
}
</style>
