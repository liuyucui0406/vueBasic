<template>
  <div class="container">
    <layout-index></layout-index>
    <!-- <global-head :user="userData"></global-head>
    <router-view></router-view> -->

    <!-- <home-index></home-index>
    <login-index></login-index> -->
    <!-- <calendar-index></calendar-index> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// import "bootstrap/dist/css/bootstrap.min.css";

import GlobalHead, { UserProps } from "./components/GlobalHead.vue";
import LayoutIndex from "./Layout/LayoutIndex.vue";
// import LoginIndex from "./views/LoginIndex.vue";
// import HomeIndex from "./views/HomeIndex.vue";
// import CalendarIndex from "./views/CalendarIndex.vue";
const userData: UserProps = {
  name: "jack",
  id: "111",
  isLogin: true,
};
export default defineComponent({
  name: "App",
  components: {
    // GlobalHead,
    LayoutIndex,
    // LoginIndex,
    // HomeIndex,
    // CalendarIndex,
  },
  setup() {
    return {
      userData: userData,
    };
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
