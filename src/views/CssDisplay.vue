<template>
  <a-tabs v-model:activeKey="activeKey">
    <a-tab-pane key="1" tab="多列等高">
      <div class="tab1">
        <div class="box1"></div>
        <div class="box2"></div>
        <div class="box3"></div>
      </div>
    </a-tab-pane>
    <a-tab-pane key="2" tab="品字排列">
      <div class="tab2">
        <div class="box1 box">top</div>
        <div class="box2 box">left</div>
        <div class="box3 box">right</div>
      </div>
    </a-tab-pane>
    <a-tab-pane key="3" tab="瀑布流">
      <div class="tab3">
        <div class="item"><div class="large"></div></div>
        <div class="item"><div class="middle"></div></div>
        <div class="item"><div class="large"></div></div>
        <div class="item"><div class="middle"></div></div>
        <div class="item"><div class="large"></div></div>
        <div class="item"><div class="middle"></div></div>
        <div class="item"><div class="small"></div></div>
        <div class="item"><div class="large"></div></div>
      </div>
    </a-tab-pane>
  </a-tabs>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    return {
      activeKey: ref("1"),
    };
  },
});
</script>
<style scoped lang="less">
.tab1 {
  border: 1px solid #ccc;
  display: flex;
  .box1 {
    background-color: red;
    flex: 1 1 20%;
  }
  .box2 {
    background-color: blue;
    flex: 1 1 60%;
    height: 300px;
  }
  .box3 {
    background-color: yellow;
    flex: 1 1 20%;
  }
}
.tab2 {
  .box {
    height: 300px;
    width: 300px;
  }
  .box1 {
    background-color: red;
    margin: 0 auto;
  }
  .box2 {
    background-color: blue;
    float: left;
    margin-left: 50%;
    transform: translate(-100%);
  }
  .box3 {
    background-color: yellow;
    float: left;
    transform: translate(-100%);
  }
}
.tab3 {
  display: flex;
  flex-flow: column wrap;
  width: 100%;
  height: 200px;
  border-bottom: 1px solid #ccc;
  .item {
    width: 100px;
    margin: 10px;
    background-color: aqua;
    break-inside: avoid;
    -webkit-break-inside: avoid;
    .large {
      height: 300px;
    }
    .middle {
      height: 200px;
    }
    .small {
      height: 100px;
    }
  }
}
</style>