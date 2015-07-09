 $(function(){
    var sortMethods = {};
    sortMethods.methodSet = new Array('insertSorts', 'selectionSorts','shellSorts','bubbleSort', 'quickSort','heapSort','mergeSort');
    sortMethods.datalist = '';

    $("#submit").click(function(){
        var params ={
            Low: $("#dataLow").val(),
            High: $("#dataHigh").val(),
            Length: $("#dataLength").val()
        };
        $.ajax({
            data: params,
            url: '/generator',
            dataType: 'json',
            cache: false,
            type:'Get',
            timeout: 5000,
            success: function(data){
                $("#randomData").text(data.datalist);
                sortMethods.datalist = data.datalist;
            },
            error: function(jqXHR, textStatus, errorThrown){
                alert('error: ' + textStatus + " " + errorThrown);  
            }
        });
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
			$.ajax({
	            data: params,
	            url: '/calculate',
	            dataType: 'json',
	            cache: false,
	            type:'post',
	            success: function(data){
	            	var date1 = new Date();
				    var time2 = date1.getTime() - time ;
	                $("#resultData").text(data.datalist);
	                $("#resultTime").text(method+'花费时间：' + time2);
	            },
	            error: function(jqXHR, textStatus, errorThrown){
	                alert('error: ' + textStatus + " " + errorThrown);  
	            }
	        });
        };
    });

    
    
    
});
