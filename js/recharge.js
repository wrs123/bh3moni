function change(){
	$(".label").css({'border':'none','background':'none'});
	$("#foot_text").css("display","block");
}

$(document).ready(function(){
	$("#label1").click(function(){
		$("#value").val("60");
		$("#rmbcost").val("6");
		$("#iceby").html("6");
		change();
		$("#label1").css({'border':'5px solid #FFF','background':'rgba(255,255,255,0.5)'});
	});
	$("#label2").click(function(){
		$("#value").val("300");
		$("#rmbcost").val("30");
		$("#iceby").html("30");
		change();
		$("#label2").css({'border':'5px solid #FFF','background':'rgba(255,255,255,0.5)'});
	});
	$("#label3").click(function(){
		$("#value").val("1280");
		$("#rmbcost").val("128");
		$("#iceby").html("1280");
		change();
		$("#label3").css({'border':'5px solid #FFF','background':'rgba(255,255,255,0.5)'});
	});
	$("#label4").click(function(){
		$("#value").val("3280");
		$("#rmbcost").val("328");
		$("#iceby").html("3280");
		change();
		$("#label4").css({'border':'5px solid #FFF','background':'rgba(255,255,255,0.5)'});
	});
	$("#label5").click(function(object,cost){
		$("#value").val("6480");
		$("#rmbcost").val("648");
		$("#iceby").html("6480");
		change();
		$("#label5").css({'border':'5px solid #FFF','background':'rgba(255,255,255,0.5)'});	
	});
	$("#label6").click(function(){
		$("#value").val("0");
		$("#rmbcost").val("0");
		change();
		$("#label6").css({'border':'5px solid #FFF','background':'rgba(255,255,255,0.5)'});
	});	
});


var Enter = function(){
	var iceText = document.getElementById("ice_text");
	var rmbcost = document.getElementById("cost_text");
	var by = $("#value").val();
	var rmb = $("#rmbcost").val();
	if(by == ""){
		alert("Σ (ﾟДﾟ;) 还没选择充值选项吧");		
	}else{
		if(by == "0"){
		alert("(〃'▽'〃)想要捐赠开发者吗？很可惜现在还在施工中，待会儿再来试试吧~");
		}
		var byInt = new Number(by);
		var rmbcostInt = new Number(rmb);
		iceText.innerHTML = parseInt(iceText.innerHTML)+byInt;
		rmbcost.innerHTML = parseInt(rmbcost.innerHTML)+rmbcostInt;		
	}
}


var back = function(){
		$("th").removeClass("bounceIn");
		$("th").css("display", "block");
		$(".recharge_Body").css("display","none");
		$("#bg_pic").css("display","block");
		$("#bh3_button").css("display", "block");
		$("#bg_pic").addClass("animated zoomIn");
		$("#bh3_button").addClass("animated zoomIn");
		$("#foot_text").css("display","none");
		$("#index_click").css("display","block");
		$("#custom").css("display", "block");
		$(".setting").show();
	}

/*确定充值*/
$("#foot_button").click(function(){
	Enter();
});
$(document).keydown(function(){
	if($(".recharge_Body").css("display") == "block"){
		if(event.keyCode == '0XD'){
			$("#foot_button").css("background-color","#FFF");//222 = "'"
			Enter();
		}	
	}
	
});
$(document).keyup(function(){
	if(event.keyCode == '0XD'){
		$("#foot_button").css("background-color","#fae267");
	}
});

/*返回到补给界面*/
$("#label7").click(function(){
	back();	
});
$(document).keydown(function(){
	if($(".recharge_Body").css("display") == "block"){
		if(event.keyCode == '8'){
			back();
		}	
	}

});




