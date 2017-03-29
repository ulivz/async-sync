// 验证驼峰法

let CAMEL_CASE_TEST = /^[a-z]+([A-Z][a-z]+)$/;
let IS_CONTAIN_UPPERWORD = /[A-Z]/g;

let type = 'nameDDD';

console.log(IS_CONTAIN_UPPERWORD.test(type));
console.log(type.match(IS_CONTAIN_UPPERWORD));

var s = "fooStyleCss";
let arr = [];

// 驼峰法转成-拼接
s = s.replace(/([A-Z])/g,"-$1").toLowerCase();

// 转成数组
arr = s.split('-')
// console.log(arr);


