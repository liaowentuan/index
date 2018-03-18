/* eslint-disable */
var fs = require("fs");
var data = '';

/*// 创建可读流
var readerStream = fs.createReadStream('event.js');

// 设置编码为 utf8。
readerStream.setEncoding('UTF8');

// 处理流事件 --> data, end, and error
readerStream.on('data', function(chunk) {
   data += chunk;
});

readerStream.on('end',function(){
   console.log(data);
});

readerStream.on('error', function(err){
   console.log(err.stack);
});

console.log("程序执行完毕");*/

// 创建可读流
var readerStream = fs.createReadStream('8.1Kmeans算法.mp4');

// 设置编码为 utf8。
// readerStream.setEncoding('MPEG4');

readerStream.on('data', function(chunk) {
   data += chunk;
});

readerStream.on('end',function(){
   console.log(data);
});

readerStream.on('error', function(err){
   console.log(err.stack);
});


