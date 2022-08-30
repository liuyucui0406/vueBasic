import copy from './v-copy';
import focus from './v-focus'
// 自定义指令
const directives = {
  copy,
  focus
};
// 这种写法可以批量注册指令
export default {
  install(Vue) {
    Object.keys(directives).forEach((key) => {
      Vue.directive(key, directives[key]);
    });
  },
};