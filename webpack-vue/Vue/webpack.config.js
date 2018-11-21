const path = require('path')

// 导入在内存中生成 HTML 页面的插件
// 只要是插件,都一定要放到plugins节点中去
// 这个插件的两个作用
// 1. 自动在内存中根据指定页面生成一个内存的页面
// 2. 自动把打包好的 bundle,js 追加到页面中去
const htmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

// 这个配置文件,其实就是一个js文件,通过 Node 中的模块操作,向外暴露了一个配置对象
module.exports = {
    // 在配置文件中,需要手动配置入口文件和出口文件
    entry: path.join(__dirname, './src/main.js'), // 入口,表示要使用 webpack 打包哪个文件
    output: { // 输出文件相关的配置
        path: path.join(__dirname,'./dist'),  // 指定打包好的文件,输出到哪个目录中去
        filename: 'bundle.js' // 这是指定输出的文件名称
    },
    plugins: [
        // new webpack.HotModleReplacementPlugin()
        new htmlWebpackPlugin({ // 创建一个在内存中生成 HTML 页面的插件
            template: path.join(__dirname, "./src/index.html"), // 这是指定 模板页面,将来会根据指定的页面路径,去生成内存中的页面
            filename: 'index.html' // 指定生成的页面名称
        }),
        new VueLoaderPlugin()
    ],
    module: { // 这个节点用于配置所有第三方模块加载器
        rules: [ // 所有第三方模块的匹配规则
            { test:/\.css$/, use:['style-loader','css-loader'] }, // 配置处理 .css 文件的第三方loader规则
            { test:/\.less$/, use:['style-loader','css-loader','less-loader'] }, // 配置处理 .css文件的第三方 loader 规则
            { test:/\.(jpg|png|gif|bmp|jpeg)$/, use: 'url-loader?limit=7631&name=[hash:8]-[name].[ext]' },  // 处理图片路径的loader
            // limit 给定的值,是图片的大小,单位是byte,如果我们引用的图片,大于或等于给定的limit值,则不会被转为base64格式的字符串,如果图片小于给定的 limit 值,则会被转为base64的字符串
            { test:/\.(ttf|eot|svg|woff|woff2)$/, use: 'url-loader' }, // 处理字体文件的 loader
            { test: /\.js$/, use: 'babel-loader', exclude: /(node_modules|bower_components)/ }, // 配置babel来转换高级的ES语法
            { test:/\.vue$/, use: 'vue-loader' }, // 处理 .vue 文件的 loader
        ]

    },
    resolve: {
        alias: { // 修改 Vue 被导入时候的包的路径
            // "vue$": "vue/dist/vue.js"
        }
    }
}


// 当我们在控制台输入webpack命令执行的时候,webpack就会去项目根目录中查找一个叫做'webpack.config.js'的配置文件
// 当找到配置文件后,webpack会去解析这个配置文件,当解析执行完配置文件后,就得到了配置文件中,导出的配置对象
// 当webpack拿到配置对象后,就拿到了配置对象中指定的入口和出口,然后进行打包构建;


// 使用 webpack-dev-server 这个工具,来实现自动打包编译的功能
// 1. 运行 npmi webpack-dev-server -D 把这个工具安装到项目的本地开发依赖
// 2. 用法和 webpack 的用法完全一样
// 3. 本地安装无法直接运行指令,只有全局才行
// 4. 注意: webpack-dev-server 这个工具如果想要正常运行,要求本地项目中必须安装 webpack
// 5. webpack-dev-server 帮我们打包生成的 bundle.js 文件,并没有存放到实际的 物理磁盘 上,而是直接托管到了 电脑的内存当中 ,所以在根目录中看不见此文件
// 6. webpack-dev-server 帮我们打包生成的文件以一种虚拟的形式托管到了项目的根目录中,虽然看不见,但可以认为和dist src node0modules 平级,有一个看不见的文件叫做bundle.js