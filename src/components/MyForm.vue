<template>
  <form class="validate-form-container">
    <slot name="default"></slot>
    <div class="submit-area" @click.prevent="submitFun">
      <slot name="submit">
        <button type="submit" class="btn btn-primary">提交</button>
      </slot>
    </div>
  </form>
</template>
<script lang="ts">
import { defineComponent, onUnmounted } from "vue";
import { emitter } from "@/types";
type ValidateFunc = () => boolean;
export default defineComponent({
  emits: ["form-submit"],
  setup(props, context) {
    let funcArr: ValidateFunc[] = [];
    // 将监听得到的验证函数都存到一个数组中
    const callback = (func: any) => {
      funcArr.push(func);
    };
    // 添加监听
    emitter.on("form-item-created", callback);
    onUnmounted(() => {
      emitter.off("form-item-created", callback);
    });
    const submitFun = () => {
      // 循环执行数组 得到最后的验证结果
      const result = funcArr.map((func) => func()).every((result) => result);
      context.emit("form-submit", result);
    };
    return {
      submitFun,
    };
  },
});
</script>
