'use strict';

/**
* 使用spilt方法实现模糊查询
* @param {Array} list 进行查询的数组
* @param {String} keyWord 查询的关键词
* @return {Array} 查询的结果 */

function fuzzyQuery(list, keyWord) {
  var arr = []; for (var i = 0; i < list.length; i++) {
    if (list[i].split(keyWord).length > 1) {
      arr.push(list[i]);
    }
  }
  return arr;
}

var mylist = ["你好", "我不好", "我是谁", "王大锤"];
var mm = "好";

var mdd = fuzzyQuery(mylist,mm);

console.log(mdd);
console.log(typeof(mdd));
