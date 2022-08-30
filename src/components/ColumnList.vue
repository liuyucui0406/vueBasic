<template>
  <div class="row">
    <div v-for="column in ColumnList" :key="column.id" class="card-box">
      <img :src="column.avatar" :alt="column.title" class="card-img" />
      <h5 class="card-title">{{ column.title }}</h5>
      <p class="card-text">{{ column.description }}</p>
      <a href="#" class="btn">进入专栏</a>
    </div>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, PropType } from "vue";
export interface ColumnProps {
  id: number;
  title: string;
  avatar?: string;
  description: string;
}
export default defineComponent({
  props: {
    list: {
      type: Array as PropType<ColumnProps[]>,
      required: true,
    },
  },
  setup(props) {
    const ColumnList = computed(() => {
      return props.list.map((item) => {
        if (!item.avatar) {
          item.avatar = require("@/assets/sample.jpg");
        }
        return item;
      });
    });
    return {
      ColumnList,
    };
  },
});
</script>
<style scoped>
.row {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
}
.card-box {
  display: flex;
  flex-direction: column;
  flex: 1 1 33%;
  max-width: 33%;
  justify-content: space-around;
  height: 200px;
  border-bottom: 1px solid #ccc;
  border-right: 1px solid #ccc;
}
.card-img {
  height: 40px;
  width: 40px;
  border-radius: 50%;
}
.card-box .btn,
.card-box .card-img {
  align-self: center;
}
</style>
