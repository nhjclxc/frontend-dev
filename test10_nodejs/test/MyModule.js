function add(a, b){
    a = +a
    b = +b
    return a + b
}

const myModuleName = 'test10_nodejs/test/MyModule.js'
console.log('执行 test10_nodejs/test/MyModule.js')


// 由于模块作用域问题，外部无法访问到这个文件里面的函数或变量
// 要想外部能够访问到这个模块里面的内容必须通过module.exports来向外部暴露信息
// 其实使用const myModule = require('./MyModule.js')导入的就是module.exports的值

console.log(module)
/*
{
  id: 'D:\\code\\frontend-dev\\test10_nodejs\\test\\MyModule.js',
  path: 'D:\\code\\frontend-dev\\test10_nodejs\\test',
  exports: {},
  filename: 'D:\\code\\frontend-dev\\test10_nodejs\\test\\MyModule.js',
  loaded: false,
  children: [],
  paths: [
    'D:\\code\\frontend-dev\\test10_nodejs\\test\\node_modules',
    'D:\\code\\frontend-dev\\test10_nodejs\\node_modules',
    'D:\\code\\frontend-dev\\node_modules',
    'D:\\code\\node_modules',
    'D:\\node_modules'
  ]
}
*/

// 通过module.exports来向外部暴露信息
// 这是一种方法，这个方法每一次都要写module.exports.xxx很多
module.exports.name = myModuleName
module.exports.add = add

// 第二种方法，直接使module.exports指向一个json对象，这个json对象就是要暴露出去的所有内容
module.exports = {
    name: myModuleName,
    add: add,
    test: '你好，世界'
}


console.log(module.exports)
console.log(exports)

console.log(module.exports === exports)
