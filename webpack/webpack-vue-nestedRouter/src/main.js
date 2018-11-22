import Vue from 'vue'


// 2. 手动安装 VueRouter
Vue.use(VueRouter)

// 导入 app 组件
import app from './App.vue'

// 导入自定义路由模块
import router from './router.js'




var vm = new Vue({
    el: '#app',
    render: c => c(app), // render 会把 el 指定的容器中,所有内容清空覆盖,不要把路由的 router-view 和 router-link 直接写到 el 所控制的元素中
    router // 4. 将路由对象挂载到 vm 上
})

// 注意: App 这个组件是通过 VM 实例的 render 函数渲染出来的, render 函数如果要渲染组件,渲染出来的组件,只能放到 el: '#app' 所指定的元素中;
// Account 和 GoodsList 组件, 是通过路由匹配监听到的,所以这两个组件,只能展示到属于路由的<router-view></router-view> 中去