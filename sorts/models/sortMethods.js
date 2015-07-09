var sorts = {};
var _tempF = {};

// using insert method to sort, add the next data into the ordered list
sorts.insertSorts = function(datalist){
	if (arguments.length === 0 || datalist.length === 0) {
		console.log("please input the date!");
		return;
	} else{
		if (datalist.length !== 1) {
			var temp = 0;
			for (var i = 1; i <= datalist.length - 1; i++) {
				if (datalist[i] < datalist[i - 1]) {
					// insert to the ordered place, and change the data
					temp = datalist[i];
					for (var j = i - 1; j >= 0; j--) {
						if (datalist[j] > temp) {
							datalist[j+1] = datalist[j];
							datalist[j] = temp;
						};
					};
				} else{
					continue;
				};
			};
		};
		return datalist;
	};
} 


//selection sort, select the minimun data and add the data into the end
//this is unsteadable for the exchange, if you want to be steady, just shift to the end, not using change
sorts.selectionSorts = function(datalist){
	if (arguments.length === 0 || datalist.length === 0) {
		console.log("please input the date!");
		return;
	} else{
		if (datalist.length !== 1) {
			var temp = 0;
			for (var i = 0; i <= datalist.length - 2; i++) {
				var minIndex = i;
				for (var j = i + 1; j <= datalist.length - 1; j++) {
					if (datalist[j] < datalist[minIndex]) {
						minIndex = j;
					};
				};
				if (minIndex !== i) {
					temp = datalist[minIndex];
					datalist[minIndex] = datalist[i];
					datalist[i] = temp;
				};
			};
		};
		return datalist;
	};
}

//shell sort is a update for insert. by this we don't need to shift all the data
//用增量， 我们将数组分成几块， 然后用插入排序
sorts.shellSorts = function(datalist){
	if (arguments.length === 0 || datalist.length === 0) {
		console.log("please input the date!");
		return;
	} else{
		if (datalist.length !== 1) {
			//inital the inc
			var inc = Math.floor(datalist.length/2.2); 
			var temp = 0;
			while(inc > 0){
				for (var i = 0; i <= inc; i++) {
				// for each row in this inc
					for (var j = i + inc; j < datalist.length; j += inc) {
						// using insert sort
						if (datalist[j] < datalist[j - inc]) {
							// insert to the ordered place, and change the data
							temp = datalist[j];
							for (var jj = j - inc; jj >= i; jj = jj - inc) {
								if (datalist[jj] > temp) {
									datalist[jj+inc] = datalist[jj];
									datalist[jj] = temp;
								};
							};
						} else{
							continue;
						};
					};
				};
				inc = Math.floor(inc/2);
			};
		};
		return datalist;
	};
};


//bubble is using exchange, every time to exchange the max to the end, then the rest is ordered
sorts.bubbleSort = function(datalist){
if (arguments.length === 0 || datalist.length === 0) {
		console.log("please input the date!");
		return;
	} else{
		if (datalist.length !== 1) {
			var temp = 0;
			var state = 1; //this is very good to check whether is necesay to go on
			for (var i = datalist.length-1; i >= 1; i--) {
				while(state){
					state = 0;
					for (var j = 0; j <= i; j++) {
						if (datalist[j] > datalist[j+1]) {
							temp = datalist[j];
							datalist[j] = datalist[j + 1];
							datalist[j + 1] = temp;
							state = 1;
						};
					};
				};
			};
		};
		return datalist;
	};
}

// quick sort is choose a key to exchange all the values
sorts.quickSort = function(datalist){
if (arguments.length === 0 || datalist.length === 0) {
		console.log("please input the date!");
		return;
	} else{
		if (datalist.length !== 1) {
			return _tempF.qSort(datalist, 0, datalist.length-1)
		};
	};
}


//heap sort
//each time find the max, put it into the ends
sorts.heapSort = function(datalist){
if (arguments.length === 0 || datalist.length === 0) {
		console.log("please input the date!");
		return;
	} else{
		if (datalist.length !== 1) {
			//build the maximun heap
			for(var i=Math.floor(datalist.length/2)-1;i>=0;i--){
				_tempF.adjust(i, datalist.length-1, datalist);
			}

			for(var i = datalist.length-1;i>0;i--){
				//exchange the values
				_tempF.exchange(0 ,i, datalist);
				//adjust the heap
				_tempF.adjust(0, i, datalist);
			}
			return datalist;
		};
	};
}



//heap sort
//each time find the max, put it into the ends
sorts.mergeSort = function(datalist){
if (arguments.length === 0 || datalist.length === 0) {
		console.log("please input the date!");
		return;
	} else{
		if (datalist.length !== 1) {
			var　middle=Math.floor(datalist.length/2),
			left=datalist.slice(0,middle),
			right=datalist.slice(middle);
			return　_tempF.merge(sorts.mergeSort(left),sorts.mergeSort(right));
		}else{
			return datalist;
		}
	};
}


_tempF.merge = function(left,right){
	var　result=[];
	while(left.length>0 && right.length>0){
		if(left[0]<right[0]){
			result.push(left.shift());
		}else{
			result.push(right.shift());
		}
	}
	return　result.concat(left).concat(right);
}






_tempF.qSort = function(datalist, s,d){
	if (s<d) {
		var res = _tempF.partion(datalist, s, d);
		datalist = res[1];
		piv = res[0];
		_tempF.qSort(datalist, s, piv-1);
		_tempF.qSort(datalist, piv+1, d);
	};
	return datalist;
}

_tempF.partion = function(datalist, s, d){
	var temp = datalist[s];
	while(s<d){
		while(s<d ){
			if (datalist[d] >= temp) {
				d = d - 1;		
			} else{
				datalist[s] = datalist[d];				
				s = s + 1;
				break;
			};
		};
		while(s < d){
			if (datalist[s] <= temp) {
				s = s + 1;				
			} else{
				datalist[d] = datalist[s];				
				d = d - 1;
				break;
			};
		};
	}
	datalist[s] = temp;
	var result = new Array(s, datalist);
	return result;
}

_tempF.exchange = function(i ,j, datalist){
	var tmp=datalist[i];
	datalist[i]=datalist[j];
	datalist[j]=tmp;
	return datalist;
}

_tempF.adjust = function(i, j, datalist){
	var largest = i;
	var left = 2*i+1;
	var right = 2*i+2;
	 
	if(left<j && datalist[largest] < datalist[left]){
		largest=left;
	}
	 
	if(right < j && datalist[largest] < datalist[right]){
		largest=right;
	}
	 
	if(largest!=i){
		datalist = _tempF.exchange(i,largest,datalist);
		datalist = _tempF.adjust(largest,j,datalist);
	}
	return datalist;
}




module.exports = sorts;