// 如何在 webpack 构建的项目中,使用Vue进行开发

// 在普通网页中使用Vue:
//  1. 使用script标签,引入 vue 的包
//  2. 在 index 页面中,创建一个 id 为 app div 容器
//  3. 通过 new Vue 得到vm实例

// 在 webpack 中尝试使用 Vue: 
// 注意: 在webpack中, 使用 import Vue from 'vue 导入的Vue构造函数,功能不完整,只提供了 runtime-only 的方式,并没有像网页中那样的使用方式;
import Vue from 'vue'
// import Vue from '../node_modules/vue/dist/vue.js'
// 回顾 包的查找规则: 
//  1. 找项目根目录中有没有 node_modules 的文件夹
//  2. 在 node_modules 中,根据包名,找对应的Vue文件夹
//  3. 在 Vue 文件夹中,找一个叫做 package.json 的包配置文件
//  4. 在package.json 文件中查找一个 main 属性 [main属性指定了这个包在被加载的时候,的入口文件]

// var login = {
//     template: "<h1>这是login组件,是使用网页中的形式创建出来的组件</h1>"
// }


// 1. 导入 login 组件
import login from './login.vue'
// 默认 weback 无法打包 .vue 文件,需要安装相关的 loader;
// npm i vue-loader vue-template-compiler -D
// 在配置文件中,新增loader配置项 { test:/\.vue$/, use: 'vue-loader' }

var vm = new Vue({
    el: '#app',
    data: {
        msg: '123'
    },
    // components: {
    //     login
    // }
    // render: function (createElements) { // 在 webpack 中,如果想要通过 Vue, 把一个组件放到页面中去展示,VM 实例中的 render 函数可以实现
    //     return createElements(login)
    //  }
    render: c => c(login)
})

import m1, { title as title123, content } from './test.js'
console.log(m1)
console.log(title123 + '---' + content)