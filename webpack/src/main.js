// 这个main.js 是我们项目的JS入口文件

// 1. 导入jquery
// import *** from *** 是ES6中导入模块的方式
// 由于ES6语法太高级了,浏览器解析不了,这一行执行会报错
import $ from 'jquery'
// const $ = require('jquery')

// 使用 import 语法,导入css样式表
import './css/index.css'
import './css/index.less'
// 注意: webpack, 默认只能打包处理 JS 类型文件,无法处理其他的非 JS 类型文件
// 如果要处理非 JS 类型的文件,我们需要手动安装一些 合适 第三方loader加载器
// 1. 如果想要打包处理 css 类型文件,需要安装 npm i style-loader css-loader -D
// 2. 打开 webpack.config.js 这个配置文件, 在里面新增一个 配置节点 叫做 module, 他是一个对象;在这个 module 对象身上,有个 rules 属性, 这个 reles 属性是个 数组;这个数组中存放了所有第三方的文件的匹配和处理规则;


// 注意: webpack 处理第三方文件类型的过程:
// 1. 发现这个文件不是JS文件,然后去配置文件中,查找有没有对应的第三方 loader 规则
// 2. 如果能找到对应的规则,就会调用对应的 loader 处理这种文件类型;
// 3. 在调用 loader 的时候,是从后面往前调用的;
// 4. 当最后一个 loader 调用完毕,会把处理的结果,直接交给 webpack 进行打包合并,最终输出到 bundle.js 当中去

$(function () { 
    $('li:odd').css('backgroundColor','skyblue')
    $('li:even').css('backgroundColor','pink')
 })

 // 1. webpack可以处理JS文件互相依赖的关系
 // 2. webpack能够处理JS的兼容问题,把浏览器不识别的高级语法转化成让低级浏览器能识别的语法


 // 格式: webpack  要打包的文件路径  打包好的输出文件路径