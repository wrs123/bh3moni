/*补给记录存储*/
var bjHistory = ["one","two","three","233","233d","233ddd","233ddd","23a3","23ad3","23fa3","23a344et3","23a3434et3","234aet3","2333aet3","23aet3","23aet3","23aet3","23aet3","23aet3","23aet3","23aet3",
"23aet3","23aet3","23aet3","23aet3","263aet3","235aet3","23a34et3","23a345et3","23aet3","23677aet3","2883aet3","23a545et3","23566aet3","23a344et3","23aet3","23aet3","23aet3","23aet3","23aet3","23aet3","23aet3"];

/*分页栏判断*/
$(function(){
	if(bjHistory.length >=10){
		var count = 1;
		var countN = parseInt(bjHistory.length/9)+1;
		for(count; count<=countN; count++){
			$("#page").append("<li id='count"+count+"'>"+count+"</li>");
		}
	}
});
function Page(){
	if($("#index li").length <= 8){
		$(".page_body").css("display","none");
	}else if(bjHistory.length >=10){
		$(".page_body").css("display","block");
	}
};

$("#index_click").click(function(){
/*	alert(bjHistory);*/
	if($("#dis").css("width") == "0px" ){
		$("#dis").css("width","900px");
		$("#dis").css("display","block");
		setTimeout(function(){
			$("#index").css("display","block");
			$(".index_title").css("display","block");
			Page();
		},300);
	}else if($("#dis").css("width") != "0px"){
		$("#dis").css("display","none");
		$("#dis").css("width","0");
		$("#index").css("display","none");
		$(".page_body").css("display","none");
		$(".index_title").css("display","none");
	}
			
});

/*分页栏页数存储*/
var countAry = [];

$(function(){	
	$.each(bjHistory,function(index,value){
		var liContent = "<li id='licontent"+index+"'>"+value+"<span>"+index+"</span></li>";
		countAry.push(index+1);
		if(index <= 8){
			$("#index").append(liContent);
		}	
	});

});
$(function(){
	var i = 1;
	var len = (bjHistory.length)/9+1;
	for(i = 1; i<=len; i++){
		var id = "count"+i;
/*		alert(id);	*/		
		$("#"+id).click(function(){
			$("#index").html("");
			var id=$(this).attr("id");
			$("#page li").css("background","none");
			$("#"+id).css("background","rgba(0,0,0,0.3)");
			 var val = id.replace(/[^0-9]/ig,"");
			 var valInt = (val-1)*9+1;
			 for(i=0, I=bjHistory.length; i<I;i++){
			 	var liContent = "<li id='licontent"+i+"'>"+bjHistory[i]+"<span>"+i+"</span></li>";
				if(i >= valInt && i <= valInt+8){
			 		$("#index").append(liContent);
			 	}	
			 	
			 };

		});	
		/*alert(i);*/
	}
});










