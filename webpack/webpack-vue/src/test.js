// 这是 Node 中向外暴露成员的形式: 
// module.exports = {}

// 在ES6中,叶通过规范的形式,规定了ES6中如何导入和导出模块
// ES6中导入模块,使用 import 模块名称 from '模块标识符'   import  '表示路径'

// 在ES6中,使用 export default 和 export 向外暴露成员 : 
// export default {
//     name: 'ZS',
//     age: 20
// }

var info = {
    name: 'ZS',
    age: 15
}

export default info
// 可是使用自定义名字来接收 export default 所暴露出去的成员

// 注意: export default 向外暴露的成员,可以使用任意的变量来接收
// 注意: 在一个模块中, export default 只允许向外暴露一次
// 注意: 在一个模块中, 可以同时使用 export 和 export default 向外暴露成员




export var title = "小可爱"
export var content = "小宝贝"


// 注意: 使用export向外暴露的成员,只能使用{  } 的形式来接收,这种形式叫做(按需导出)
// 注意: export 可以向外暴露多个成员, 同时,如果某些成员在 import 的时候,不需要,则可以不在 {} 中定义
// 注意: 使用 export 导出的成员,必须严格按照导出时候的名称来使用 {} 按需接收
// 注意: 使用 export 导出的成员,如果想换个名称接收,可以使用 as 来起别名






// 在Node中 使用 var 名称 = require('模块标识符')
// module.exports 和 export 来暴露成员