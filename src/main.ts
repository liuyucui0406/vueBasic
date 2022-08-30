import { createApp } from 'vue';
import Antd from 'ant-design-vue';
import App from './App.vue';
import 'ant-design-vue/dist/antd.css';
// import "bootstrap/dist/css/bootstrap.min.css";
import router from './router/index.js'
//createApp(App)重新创建一个实例，避免直接修改同一个vue实例引起的冲突
import Directives from './directives/index.js';


const app = createApp(App);
app.use(Antd)
app.use(router)
app.use(Directives);
app.mount('#app');

// app.directive('focus', {
//     mounted(el){
//         console.log(el)
//         el.focus()
//     }
// })