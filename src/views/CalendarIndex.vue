<template>
  <a-calendar v-model:value="value" @panelChange="panelChange">
    <template #headerRender="{ value: current, onChange }">
      <a-date-picker :value="current" picker="month" @change="onChange" />
    </template>
    <template #dateCellRender="{ current }">
      <div>
        <h2>{{ getListData(current) }}</h2>
      </div>
    </template>
  </a-calendar>
</template>
<script lang="ts">
import { defineComponent, onBeforeMount, onMounted, ref } from "vue";
import { Dayjs } from "dayjs";
import dayjs from "dayjs";
export default defineComponent({
  setup() {
    let listData: any = [];
    const value = ref<Dayjs>();
    const panelChange = (value: Dayjs) => {
      let d = value.format("YYYY-MM");
      let dateMonth = [];
      for (let i = 1; i < 32; i++) {
        dateMonth.push({ date: d + "-" + (i < 10 ? "0" + i : i) });
      }
      listData = dateMonth;
    };
    const getListData = (value: Dayjs) => {
      let dataArr = listData.filter(
        (v: any) => v.date == value.format("YYYY-MM-DD")
      );
      return dataArr[0]?.date || "";
    };
    onBeforeMount(() => {
      panelChange(dayjs());
    });
    return {
      value,
      getListData,
      panelChange,
    };
  },
});
</script>
<style scoped>
.events {
  list-style: none;
  margin: 0;
  padding: 0;
}
.events .ant-badge-status {
  overflow: hidden;
  white-space: nowrap;
  width: 100%;
  text-overflow: ellipsis;
  font-size: 12px;
}
.notes-month {
  text-align: center;
  font-size: 28px;
}
.notes-month section {
  font-size: 28px;
}
</style>