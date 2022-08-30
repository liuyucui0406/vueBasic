<template>
  <a-input v-focus></a-input>
  <button @click="giveFocus">按钮</button>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    let focusValue = ref(false);
    const giveFocus = () => {
      focusValue.value = true;
    };
    return {
      focusValue,
      giveFocus,
    };
  },
});
</script>
<style scoped>
input:focus {
  outline: 1px solid red;
}
</style>
