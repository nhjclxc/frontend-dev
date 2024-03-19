
// require一个模块的时候永远指向的是module.exports指向的对象xx
const myModule = require('./MyModule.js')

// console.log(myModule.add(1,5))
// console.log(add(1,5))

console.log('输出 ', myModule)
console.log('输出 ', myModule.name)
console.log('输出 ', myModule.add(1,5))