<template>
  <my-form @formSubmit="formSubmit">
    <my-input
      :rules="rules"
      v-model="myEmail"
      type="text"
      placeholder="请输入内容"
    ></my-input>
    <my-input
      :rules="rules"
      v-model="myEmail1"
      type="text"
      placeholder="请输入内容"
    ></my-input>
  </my-form>
</template>
<script lang="ts">
import { defineComponent ,ref} from "vue";
import MyForm from "@/components/MyForm.vue";
import MyInput from "@/components/MyInput.vue";
import type { RulesProp } from "@/types";
export default defineComponent({
  components: {
    MyInput,
    MyForm,
  },
  setup() {
    const myEmail = ref("");
    const myEmail1 = ref("");
    const emilRules: RulesProp = [
      { type: "required", message: "电子邮箱地址不能为空" },
      { type: "email", message: "请输入正确的电子邮箱格式" },
    ];
    const formSubmit = (n: string) => {
      console.log(n, 123456786543);
    };
    return {
      rules:emilRules,
      myEmail,
      myEmail1,
      formSubmit
    };
  },
});
</script>
