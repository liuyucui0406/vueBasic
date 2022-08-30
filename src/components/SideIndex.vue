<template>
  <a-menu
    id="dddddd"
    v-model:openKeys="openKeys"
    v-model:selectedKeys="selectedKeys"
    style="width: 256px"
    mode="inline"
    @click="handleClick"
  >
    <a-menu-item v-for="route in routes1" :key="route.name">
      <router-link :to="route.path">{{ route.name }}</router-link>
    </a-menu-item>
  </a-menu>
</template>
<script lang="ts">
import { defineComponent, ref, watch } from "vue";
import { routes } from "./../router/index";
import type { MenuProps } from "ant-design-vue";
export default defineComponent({
  components: {},
  setup() {
    const routes1 = ref(routes);

    const selectedKeys = ref<string[]>(["1"]);
    const openKeys = ref<string[]>(["sub1"]);
    const handleClick: MenuProps["onClick"] = (e) => {
      console.log("click", e);
    };
    const titleClick = (e: Event) => {
      console.log("titleClick", e);
    };
    watch(
      () => openKeys,
      (val) => {
        console.log("openKeys", val);
      }
    );
    return {
      selectedKeys,
      openKeys,
      handleClick,
      titleClick,
      routes1,
    };
  },
});
</script>