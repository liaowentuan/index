var fs = require('fs')

// 堵塞start
var data = fs.readFileSync('http.js')

// console.log(data); // Buffer
console.log(data.toString()) // Buffer

console.log('程序执行结束!')
// 堵塞end

// 非堵塞start
fs.readFile('http.js', function (err, data) {
  if (err) return console.error(err)
  console.log(data.toString())
})

console.log('程序执行结束!')
// 非堵塞end
