<template>
  <div id="layout-content">
    <a-layout>
      <a-layout-header>
        <global-head :user="userData"></global-head>
      </a-layout-header>
      <a-layout>
        <a-layout-sider><side-index></side-index></a-layout-sider>
        <a-layout-content>
          <router-view></router-view>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </div>
</template>
<script lang="ts">
import SideIndex from "@/components/SideIndex.vue";
import { defineComponent } from "vue";
import GlobalHead, { UserProps } from "./../components/GlobalHead.vue";
const userData: UserProps = {
  name: "jack",
  id: "111",
  isLogin: true,
};
export default defineComponent({
  components: { GlobalHead, SideIndex },
  setup() {
    return {
      userData: userData,
    };
  },
});
</script>

<style>
.a-layout {
  overflow: hidden;
}
#layout-content .ant-layout-header,
#layout-content .ant-layout-sider,
#layout-content .ant-layout-content {
  background: #fff;
  border: 1px solid #ccc;
}
#layout-content .ant-layout-header {
  height: 65px;
}
#layout-content .ant-layout-sider {
  min-width: 200px;
  overflow: hidden;
}
#layout-content .ant-layout-content {
  height: calc(100vh - 65px);
  overflow: auto;
}
</style>