var sorts = require('./sortMethods');
var generator = require('./randomData');
var dataList = generator.generateList(100, 1, 100);
console.log(dataList);
console.log(sorts.mergeSort(dataList));