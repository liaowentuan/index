// 方法 1
/* eslint-disable */
// 创建长度为 10 字节的 Buffer 实例：
var buf1 = new Buffer(10)
// 方法 2

// 通过给定的数组创建 Buffer 实例：
var buf2 = new Buffer([10, 20, 30, 40, 50])
// 方法 3

// 通过一个字符串来创建 Buffer 实例：
var buf3 = new Buffer('www.w3cschool.cn', 'utf-8')
// utf-8 是默认的编码方式，此外它同样支持以下编码："ascii", "utf8", "utf16le", "ucs2", "base64" 和 "hex"。


console.log(buf1, buf2, buf3)
console.log('\n')
console.log(buf1, buf2.toJSON(), buf3.toString())

var buffer1 = new Buffer('W3Cschool教程 ')
var buffer2 = new Buffer('www.w3cschool.cn')
var buffer3 = Buffer.concat([buffer1, buffer2])
console.log('\n')
console.log('buffer3 内容: ' + buffer3.toString())

var buffer1 = new Buffer('中国BCD');
// 拷贝一个缓冲区
var buffer2 = new Buffer(3);
buffer1.copy(buffer2);
console.log("buffer2 content: " + buffer2.toString());


var buffer1 = new Buffer('youj');
// 剪切缓冲区
var buffer2 = buffer1.slice(0,2);
console.log("buffer2 content: " + buffer2.toString());

var buffer = new Buffer('www.w3cschool.cn');
//  缓冲区长度
console.log("buffer length: " + buffer.length);

/* eslint-enable */
