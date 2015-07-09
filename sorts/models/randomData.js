var rand = {};
//
rand.generateList = function(max, min, length){
	max = parseInt(max);
	min = parseInt(min);
	length = parseInt(length);
	var datalist = new Array();
	for (var i = length - 1; i >= 0; i--) {
		datalist[i] = Math.floor(Math.random() * max) + min;
	};
	return datalist;
}

module.exports = rand;