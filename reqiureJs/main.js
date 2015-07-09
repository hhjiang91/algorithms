require(['a','b','ab','randomData','sorts'],function(a,b,ab,randomData,sorts){
    ab.b();
    var sortMethods = {};
    sortMethods.methodSet = new Array('insertSorts', 'selectionSorts','shellSorts','bubbleSort', 'quickSort','heapSort','mergeSort');
    sortMethods.datalist = '';
    console.log(sortMethods);
    console.log(randomData);
    console.log(sorts);
    $("#submit").click(function(){
    	var datalist = randomData.generateList($("#dataHigh").val(),$("#dataLow").val(),$("#dataLength").val());
        $("#randomData").text(datalist);
        sortMethods.datalist = datalist;
    });
    $("#clear").click(function(){
        $("#randomData").text('');
        sortMethods.datalist = '';
        $("#resultData").text('');
        $("#resultTime").text('');
    });

    $('.methodSel button').click(function(){
        var _that = this;
        var method = sortMethods.methodSet[parseInt(_that.id.charAt(_that.id.length-1))-1];
        if (sortMethods.datalist === '') {
        	alert('请先生成随机数');
        } else{
			var params ={
				method:method,
				datalist:sortMethods.datalist
			};
			var date = new Date();
		    var time = date.getTime();
		    // for (var i = req.body.datalist.length - 1; i >= 0; i--) {
		            // req.body.datalist[i] = parseInt(req.body.datalist[i]);
		        // };   
		    sortMethods.datalist = sorts[method](sortMethods.datalist);
		    var date1 = new Date();
		    var time2 = date1.getTime() - time ;
            $("#resultData").text(sortMethods.datalist);
            $("#resultTime").text(method+'花费时间：' + time2);
			
        };
    });
})

