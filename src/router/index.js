import { createRouter
  ,createWebHashHistory} from "vue-router"
export const routes=[
    { 
    path: '/',
    name:"首页", 
    component: ()=>import ('./../views/HomeIndex') 
  },
  { 
    path: '/calendar',
    name:"日历List", 
    component: ()=>import ('./../views/CalendarIndex') 
  },
  { 
    path: '/demoIndex',
    name:"directiveDemo", 
    component: ()=>import ('./../views/DemoIndex') 
  },
  { 
    path: '/cssDisplay',
    name:"几种常见布局", 
    component: ()=>import ('./../views/CssDisplay') 
  },
  { 
    path: '/formIndex',
    name:"手工单", 
    component: ()=>import ('./../views/FormIndex') 
  },

  
]
const router = createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHashHistory(),
    routes, // `routes: routes` 的缩写
  })
export default router