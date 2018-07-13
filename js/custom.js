
/*隐藏主界面*/
function disnone(){
	$("#bg_pic").css("display","none");
	$("#content").css("display","none");
	$("#bh3_button").css("display","none");
}
// 显示主界面
function disblock(){
	$("#bg_pic").css("display","block");
	$("#bh3_button").css("display","block");	
}

/*显示自定义界面*/
function customInterface(){
	var customContent = '<div class="customContent"></div>';
	var customTitle = '<div class="customTitle"><span>自定义</span><span id="customBack">返回补给</span></div>';
	var customcontentLeft = '<div class="con"><div class="left"><div class="iceshow input"><label for="iceShow">拥有水晶数：</label><input placeholder="输入水晶数" id="iceShow"/><label class="text">个</label></div></div></div>';
	var customcontentRight = '<div class="right"></div>';
	var WalkureS = '<div class="WalkureS input"><label for="WalkureS">S级女武神概率：</label><input placeholder="输入百分比" id="WalkureS"/><label class="text">%</label></div>';
	var WalkureSDebris = '<div class="WalkureSDebris input"><label for="WalkureS">S级女武神碎片概率：</label><input placeholder="输入百分比" id="WalkureSDebris"/><label class="text">%</label></div>';
	var WalkureA = '<div class="WalkureA input"><label for="WalkureA">A级女武神概率：</label><input placeholder="输入百分比" id="WalkureA"/><label class="text">%</label></div>';
	var WalkureADebris = '<div class="WalkureADebris input"><label for="WalkureADebris">A级女武神碎片概率：</label><input placeholder="输入百分比" id="WalkureADebris"/><label class="text">%</label></div>';
	var WalkureB = '<div class="WalkureB input"><label for="WalkureB">B级女武神概率：</label><input placeholder="输入百分比" id="WalkureB"/><label class="text">%</label></div>';
	var weapon4 = '<div class="weapon4 input"><label for="weapon4">四星武器概率：</label><input placeholder="输入百分比" id="weapon4"/><label class="text">%</label></div>';
	var shenghen4 = '<div class="shenghen4 input"><label for="shenghen4">四星圣痕概率：</label><input placeholder="输入百分比" id="shenghen4"/><label class="text">%</label></div>';
	var weapon3 = '<div class="weapon3 input"><label for="weapon3">三星武器概率：</label><input placeholder="输入百分比" id="weapon3"/><label class="text">%</label></div>';
	var shenghen3 = '<div class="shenghen3 input"><label for="shenghen3">三星圣痕概率：</label><input placeholder="输入百分比" id="shenghen3"/><label class="text">%</label></div>';
	var material = '<div class="material input"><label for="material">进化材料：</label><input placeholder="输入百分比" id="material"/><label class="text">%</label></div>';
	var exp = '<div class="exp input"><label for="exp">角色经验：</label><input placeholder="输入百分比" id="exp"/><label class="text">%</label></div>';
	var cost = '<div class="Cost input"><label for="cost">角色经验：</label><input placeholder="输入百分比" id="cost"/><label class="text">%</label></div>';
	var footer = '<div class="footer"><div id="update">提交</div></div>';
	$("#custom_content").append(customContent);
	setTimeout(function(){
		$(".customContent").append(customTitle);
		$(".customContent").append(customcontentLeft);
		$(".customContent .con").append(customcontentRight);
		$(".customContent").append(footer);
		/*左侧内容插入*/
		$(".con .left").append(WalkureS);
		$(".con .left").append(WalkureSDebris);
		$(".con .left").append(WalkureA);
		$(".con .left").append(WalkureADebris);
		$(".con .left").append(WalkureB);
		$(".con .left").append(weapon4);
		/*右侧内容插入*/
		$(".con .right").append(shenghen4);
		$(".con .right").append(weapon3);
		$(".con .right").append(shenghen3);
		$(".con .right").append(material);
		$(".con .right").append(exp);
		$(".con .right").append(cost);
	},300);
	$(".customContent").removeClass("animated zoomOut");
	$(".customContent").addClass("animated zoomIn");
	$(function(){
		$(".customContent").show();
	});
	
}
/*返回补给界面*/
function customBack(){
	$(".customContent").removeClass("animated zoomIn");
	$(".customContent").addClass("animated zoomOut");
	$(".customContent div").css("display","none");
	setTimeout(function(){
		disblock();
		$(".customContent").hide();
	},300);
	
}



/*自定义界面点击按钮触发*/
$("#custom").click(function(){
	$(".customContent").remove();
	$("#dis").hide();
	disnone();
	customInterface();

});

/*返回补给按钮触发*/
$(document).on("click","#customBack",function(){
	customBack();	
});













