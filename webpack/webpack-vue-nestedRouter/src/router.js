
// 1. 导入 vue-router 包
import VueRouter from 'vue-router'


// 导入 Account 组件
import account from './main/Account.vue'
import goodslist from './main/GoodsList.vue'

// 导入Account的两个子组件
import login from './subcom/login.vue'
import register from './subcom/register.vue'

// 3. 创建路由对象
var router = new VueRouter({
    routes: [
        // acount  goodslist
        { path: '/account', 
          component: account,
          children: [ // 子路由的嵌套
              { path: 'login',component: login },
              { path: 'register',component: register },
          ]
         },
        { path: '/goodslist', component: goodslist }
    ]
})

export default router