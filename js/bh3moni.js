

/*依照概率生成随机数字*/
function random(arr1, arr2) {
  var sum = 0,
    factor = 0,
    random = Math.random();

  for(var i = arr2.length - 1; i >= 0; i--) {
    sum += arr2[i]; // 统计概率总和
  };
  random *= sum; // 生成概率随机数
  for(var i = arr2.length - 1; i >= 0; i--) {
    factor += arr2[i];
    if(random <= factor) 
     return arr1[i];
  };
  return null;
};


/*标配池*/

var WalkureS = 0.015;
var WalkureSDebris = 0.0127;
var WalkureA = 0.135;
var WalkureADebris = 0.1019;
var WalkureB = 0.055;
var weapon4 = 0.0046;
var shenghen4 = 0.0073;
var weapon3 = 0.075;
var shenghen3 = 0.225;
var material = 0.1474;
var exp = 0.1474;
var cost = 0.0737;




/*自定义表单数据获取*/
$(document).on("click", "#update", function(){
	/*水晶刷新*/
	var i = $("#iceShow").val();
/*	alert(jQuery.type(i));*/
	if( i == ""){
		alert("不输入水晶数也想抽？");
		return;
	}else{
		$("#is").val(parseInt(i));
		var ice = parseInt($("#is").val());
		$("#ice_text").html(ice);			
	}
	var data= ["WalkureS", "WalkureSDebris", "WalkureA", "WalkureADebris", "WalkureB", "weapon4", "weapon3", "shenghen3", "material", "exp", "cost"];
	$.each(data, function(index, value){
		var val = $("#"+value).val();
		if(val == ""){
			value = parseFloat($("#"+value).attr("placeholder"));
		}else{
			//刷新概率
			WalkureS = parseFloat($("#WalkureS").val())/100;
			WalkureSDebris = parseFloat($("#WalkureSDebris").val())/100;
			WalkureA = parseFloat($("#WalkureA").val())/100;
			WalkureADebris = parseFloat($("#WalkureA").val())/100;
			WalkureB = parseFloat($("#WalkureB").val())/100;
			weapon4 = parseFloat($("#weapon4").val())/100;
			shenghen4 = parseFloat($("#shenghen4").val())/100;
			weapon3 = parseFloat($("#weapon3").val())/100;
			shenghen3 = parseFloat($("#shenghen3").val())/100;
			material = parseFloat($("#material").val())/100;
			exp = parseFloat($("#exp").val())/100;
			cost =  parseFloat($("#cost").val())/100;	
		}
	});
	$(function(){
		$(".customContent").css({"width":"0px", "height":"0px"});
		$(".customContent div").css("display","none");
		setTimeout(function(){
			disblock();
		},300);
	});
	/*alert(cost);*/
	/*alert(iceShow+WalkureS+WalkureSDebris+WalkureA+WalkureADebris+WalkureB+weapon4+shenghen4+weapon3+shenghen3+material+exp+cost);*/
});



//标配池内容存储

var a = [
	"60204_4","60103_4","60304_4","60404_4","60502_4","60504_4","10204_4","10103_4","10304_4","10404_4","10502_4","10504_4","60102_4","60104_4","60202_4","60203_4","60302_4","60303_4","60401_4",
	"60402_4","60501_4","10102_4","10104_4","10202_4","10203_4","10302_4","10303_4","10401_4","10402_4","10501_4","60101_4","60201_4","60301_4","60403_4",'Weapon_Cannon_B5_47_4',
	'Weapon_Cannon_B6_46_4','Weapon_Cannon_B7_48_4','Weapon_Cannon_B13_86_4','Weapon_Cannon_B14_87_4',
	'Weapon_Cannon_B15_121_4','Weapon_Cannon_B16_122_4','Weapon_Cannon_B17_130_4','Weapon_Cannon_B21_149_4',
	'Weapon_Cannon_B23_173_4','Weapon_Cannon_B25_177_4','Weapon_Claymore_H5_57_4','Weapon_Claymore_H6_58_4',
	'Weapon_Claymore_H7_59_4','Weapon_Claymore_H8_60_4','Weapon_Claymore_H14_95_4','Weapon_Claymore_H16_97_4',
	'Weapon_Claymore_H21_150_4','Weapon_Claymore_H22_174_4','Weapon_Cross_T6_166_4','Weapon_Cross_T7_167_4',
	'Weapon_Cross_T9_169_4','Weapon_Cross_T10_170_4','Weapon_Cross_T13_183_4','Weapon_Katana_M4_21_4',
	'Weapon_Katana_M5_22_4','Weapon_Katana_M6_24_4','Weapon_Katana_M12_77_4','Weapon_Katana_M13_78_4',
	'Weapon_Katana_M15_124_4','Weapon_Katana_M17_129_4','Weapon_Katana_M18_132_4','Weapon_Katana_M21_147_4',
	'Weapon_Katana_M22_154_4','Weapon_Katana_M23_171_4','Weapon_Katana_M26_193_4','Weapon_Katana_M27_176_4',
	'Weapon_Pistol_K5_12_4','Weapon_Pistol_K6_11_4','Weapon_Pistol_K7_10_4','Weapon_Pistol_K13_68_4','Weapon_Pistol_K14_69_4',
	'Weapon_Pistol_K15_118_4','Weapon_Pistol_K17_128_4','Weapon_Pistol_K21_148_4','Weapon_Pistol_K24_155_4',
	'Weapon_Pistol_K26_184_4','S4A_1_4','S4A_2_4','S4A_3_4','S4AA_1_4','S4AA_2_4','S4AA_3_4','S4AD_1_4','S4AD_2_4','S4AD_3_4','S4AE_1_4','S4AE_2_4',
	'S4AE_3_4','S4AF_1_4','S4AF_2_4','S4AF_3_4','S4AG_1_4','S4AG_2_4','S4AG_3_4','S4AI_1_4','S4AI_2_4','S4AI_3_4','S4AO_1_4','S4AO_2_4','S4AO_3_4','S4AQ_1_4',
	'S4AQ_2_4','S4AQ_3_4','S4AT_1_4','S4AT_2_4','S4AT_3_4','S4AW_1_4','S4AW_2_4','S4AW_3_4','S4B_1_4','S4B_2_4','S4B_3_4','S4C_1_4','S4C_2_4','S4C_3_4',
	'S4D_1_4','S4D_2_4','S4D_3_4','S4E_1_4','S4E_2_4','S4E_3_4','S4K_1_4','S4K_2_4','S4K_3_4','S4L_1_4','S4L_2_4','S4L_3_4','S4M_1_4','S4M_2_4','S4M_3_4','S4N_1_4',
	'S4N_2_4','S4N_3_4','S4O_1_4','S4O_2_4','S4O_3_4','S4P_1_4','S4P_2_4','S4P_3_4','S4Q_1_4','S4Q_2_4','S4Q_3_4','S4R_1_4','S4R_2_4','S4R_3_4','S4S_1_4','S4S_2_4',
	'S4S_3_4','S4T_1_4','S4T_2_4','S4T_3_4','S4U_1_4','S4U_2_4','S4U_3_4','S4V_1_4','S4V_2_4','S4V_3_4','S4Y_1_4','S4Y_2_4','S4Y_3_4','S4Z_1_4','S4Z_2_4','S4Z_3_4',
	'Weapon_Cannon_B3_41_3','Weapon_Cannon_B3_42_3','Weapon_Cannon_B4_43_3','Weapon_Cannon_B4_44_3',
	'Weapon_Cannon_B11_83_3','Weapon_Cannon_B11_84_3',
	'Weapon_Claymore_H3_53_3','Weapon_Claymore_H3_55_3','Weapon_Claymore_H4_54_3','Weapon_Claymore_H4_56_3',
	'Weapon_Claymore_H10_90_2','Weapon_Claymore_H12_92_3','Weapon_Claymore_H12_93_3',
	'Weapon_Cross_T3_160_2','Weapon_Cross_T3_161_2','Weapon_Cross_T4_162_3',
	'Weapon_Cross_T5_164_3','Weapon_Cross_T5_165_3','Weapon_Katana_M1_15_2','Weapon_Katana_M1_16_2','Weapon_Katana_M2_17_3',
	'Weapon_Katana_M2_19_3','Weapon_Katana_M3_18_3','Weapon_Katana_M3_20_3','Weapon_Pistol_K1_02_1','Weapon_Pistol_K2_03_2',
	'Weapon_Pistol_K2_04_2','Weapon_Pistol_K3_05_3','Weapon_Pistol_K3_06_3','Weapon_Pistol_K4_07_3','Weapon_Pistol_K4_08_3',
	'S2C_1','S2C_2','S2C_3','S2D_1','S2D_2','S2D_3','S2E_1','S2E_2','S2E_3','S3A_1','S3A_2','S3A_3','S3B_1','S3B_2','S3B_3','S3C_1',
	'S3C_2','S3C_3','S3D_1','S3D_2','S3D_3','S3E_1','S3E_2','S3E_3','S3O_1','S3O_2','S3O_3','S3P_1','S3P_2','S3P_3',
	'S3W_1','S3W_2','S3W_3','S3Y_1','S3Y_2','S3Y_3','4003','4004_4','4007','4008_4','4011','4012_4','3003','3004_4','3007','1003',
	'3008_4','1004','1005','1006_4','1007_4','1008_4','7024','7025','7026_4','7027_4'
	];
//标配池概率存储
/*var str = a[20];
var s = str.charAt(str.length - 1);
if(s == 4){
	alert("四星");
}else if(s == 3){
	alert("三星");
}*/
var b = [];
function probabilitySave(){
	b = [
	WalkureS,WalkureS,WalkureS,WalkureS,WalkureS,WalkureS,WalkureSDebris,WalkureSDebris,WalkureSDebris,WalkureSDebris,
	WalkureSDebris,WalkureSDebris,WalkureA,WalkureA,WalkureA,WalkureA,WalkureA,WalkureA,WalkureA,WalkureA,WalkureA,WalkureADebris,
	WalkureADebris,WalkureADebris,WalkureADebris,WalkureADebris,WalkureADebris,WalkureADebris,WalkureADebris,WalkureADebris,
	WalkureB,WalkureB,WalkureB,WalkureB,weapon4,weapon4,weapon4,weapon4,weapon4,weapon4,weapon4,weapon4,weapon4,
	weapon4,weapon4,weapon4,weapon4,weapon4,weapon4,weapon4,weapon4,weapon4,weapon4,weapon4,weapon4,weapon4,
	weapon4,weapon4,weapon4,weapon4,weapon4,weapon4,weapon4,weapon4,weapon4,weapon4,weapon4,weapon4,weapon4,
	weapon4,weapon4,weapon4,weapon4,weapon4,weapon4,weapon4,weapon4,weapon4,weapon4,weapon4,weapon4,shenghen4,
	shenghen4,shenghen4,shenghen4,shenghen4,shenghen4,shenghen4,shenghen4,shenghen4,shenghen4,shenghen4,shenghen4,
	shenghen4,shenghen4,shenghen4,shenghen4,shenghen4,shenghen4,shenghen4,shenghen4,shenghen4,shenghen4,shenghen4,
	shenghen4,shenghen4,shenghen4,shenghen4,shenghen4,shenghen4,shenghen4,shenghen4,shenghen4,shenghen4,shenghen4,
	shenghen4,shenghen4,shenghen4,shenghen4,shenghen4,shenghen4,shenghen4,shenghen4,shenghen4,shenghen4,shenghen4,
	shenghen4,shenghen4,shenghen4,shenghen4,shenghen4,shenghen4,shenghen4,shenghen4,shenghen4,shenghen4,shenghen4,shenghen4,
	shenghen4,shenghen4,shenghen4,shenghen4,shenghen4,shenghen4,shenghen4,shenghen4,shenghen4,shenghen4,shenghen4,
	shenghen4,shenghen4,shenghen4,shenghen4,shenghen4,shenghen4,shenghen4,shenghen4,shenghen4,shenghen4,shenghen4,
	shenghen4,shenghen4,shenghen4,shenghen4,shenghen4,shenghen4,weapon3,weapon3,weapon3,weapon3,
	weapon3,weapon3,weapon3,weapon3,weapon3,weapon3,weapon3,weapon3,weapon3,weapon3,weapon3,weapon3,
	weapon3,weapon3,weapon3,weapon3,weapon3,weapon3,weapon3,weapon3,weapon3,weapon3,weapon3,
	weapon3,weapon3,weapon3,weapon3,weapon3,shenghen3,shenghen3,shenghen3,shenghen3,shenghen3,
	shenghen3,shenghen3,shenghen3,shenghen3,shenghen3,shenghen3,shenghen3,shenghen3,shenghen3,shenghen3,
	shenghen3,shenghen3,shenghen3,shenghen3,shenghen3,shenghen3,shenghen3,shenghen3,shenghen3,shenghen3,shenghen3,
	shenghen3,shenghen3,shenghen3,shenghen3,shenghen3,shenghen3,shenghen3,shenghen3,shenghen3,shenghen3,shenghen3,
	material,material,material,material,material,material,material,material,material,material,exp,exp,exp,exp,exp,exp,
	cost,cost,cost,cost
	];
}
probabilitySave();
/*console.log(random(a, b));*/

/*alert(a.length);
alert(b.length);*/

/*暂处理*/
$(function(){
	/*alert(a.length);*/
});

/*数据字典存储*/
var dic = Array();
dic["7024"] = "吼姆宝藏";
dic["7025"] = "吼里宝藏";
dic["7026_4"] = "吼美宝藏";
dic["7027_4"] = "吼咪宝藏";
dic["10102_4"] = "女武神·游侠碎片";
dic["10103_4"] = "白骑士·月光碎片";
dic["10104_4"] = "圣女祈祷碎片";
dic["10202_4"] = "鹦鹉冲击碎片";
dic["10203_4"] = "女武神·强袭碎片";
dic["10204_4"] = "雷电女王的鬼铠碎片";
dic["10302_4"] = "驱动装·山吹";
dic["10303_4"] = "雪地狙击碎片";
dic["10304_4"] = "次元边界突破碎片";
dic["10401_4"] = "女武神·凯旋碎片";
dic["10402_4"] = "融核装·深红碎片";
dic["10403_4"] = "战场疾风碎片";
dic["10404_4"] = "血色玫瑰碎片";
dic["10501_4"] = "女武神·誓约碎片";
dic["10502_4"] = "处刑装·紫苑碎片";
dic["10504_4"] = "神恩颂歌碎片";
dic["60101_4"] = "女武神·白练";
dic["60102_4"] = "女武神·游侠";
dic["60103_4"] = "白骑士·月光";
dic["60104_4"] = "女武神·游侠";
dic["60201_4"] = "脉冲装·绯红"
dic["60202_4"] = "鹦鹉冲击";
dic["60203_4"] = "女武神·强袭";
dic["60204_4"] = "雷电女王的鬼铠";
dic["60301_4"] = "女武神·战车";
dic["60302_4"] = "驱动装·山吹";
dic["60303_4"] = "雪地狙击";
dic["60304_4"] = "次元边界突破";
dic["60401_4"] = "女武神·凯旋";
dic["60402_4"] = "融核装·深红";
dic["60403_4"] = "战场疾风";
dic["60404_4"] = "血色玫瑰";
dic["60501_4"] = "女武神·誓约";
dic["60502_4"] = "处刑装·紫苑";
dic["60504_4"] = "神恩颂歌";
dic["1003"] = "高级生物芯片";
dic["1004"] = "高级机械芯片";
dic["1005"] = "高级异能芯片";
dic["1006_4"] = "特级生物芯片";
dic["1007_4"] = "特级机械芯片";
dic["1008_4"] = "特级异能芯片";
dic["3002"] = "双子以太芯片";
dic["3003"] = "以太结晶";
dic["3004_4"] = "双子以太结晶";
dic["3006"] = "双子灵魂碎片";
dic["3007"] = "灵魂结晶";
dic["3008_4"] = "双子灵魂结晶";
dic["4002"] = "钛合金枪管";
dic["4003"] = "断裂的刀柄";
dic["4004_4"] = "超合金盾";
dic["4007"] = "超小型反应炉";
dic["4008_4"] = "相转移镜面";
dic["4011"] = "钛合金火星塞";
dic["4012_4"] = "特斯拉涡轮机";
dic["S2C_1"] = "露西亚（上）";
dic["S2C_2"] = "露西亚（中）";
dic["S2C_3"] = "露西亚（下）";
dic["S2D_1"] = "薇欧拉（上）";
dic["S2D_2"] = "薇欧拉（中）";
dic["S2D_3"] = "薇欧拉（下）";
dic["S2E_1"] = "维多利亚（上）";
dic["S2E_2"] = "维多利亚（中）";
dic["S2E_3"] = "维多利亚（下）";
dic["S3A_1"] = "巴托里·伊丽莎白（上）";
dic["S3A_2"] = "巴托里·伊丽莎白（中）";
dic["S3A_3"] = "巴托里·伊丽莎白（下）";
dic["S3B_1"] = "呼邪（上）";
dic["S3B_2"] = "呼邪（中）";
dic["S3B_3"] = "呼邪（下）";
dic["S3C_1"] = "阿提拉（上）";
dic["S3C_2"] = "阿提拉（中）";
dic["S3C_3"] = "阿提拉（下）";
dic["S3D_1"] = "坂本龙马（上）";
dic["S3D_2"] = "坂本龙马（中）";
dic["S3D_3"] = "坂本龙马（下）";
dic["S3E_1"] = "尼古拉·特斯拉（上）";
dic["S3E_2"] = "尼古拉·特斯拉（中）";
dic["S3E_3"] = "尼古拉·特斯拉（下）";
dic["S3O_1"] = "查理曼（上）";
dic["S3O_2"] = "查理曼（中）";
dic["S3O_3"] = "查理曼（下）";
dic["S3P_1"] = "奥尔吉（上）";
dic["S3P_2"] = "奥尔吉（中）";
dic["S3P_3"] = "奥尔吉（下）";
dic["S3W_1"] = "时雨绮罗（上）";
dic["S3W_2"] = "时雨绮罗（中）";
dic["S3W_3"] = "时雨绮罗（下）";
dic["S3Y_1"] = "里纳尔多（上）";
dic["S3Y_2"] = "里纳尔多（中）";
dic["S3Y_3"] = "里纳尔多（下）";
dic["S4A_1_4"] = "克列欧博克拉（上）";
dic["S4A_2_4"] = "克列欧博克拉（中）";
dic["S4A_3_4"] = "克列欧博克拉（下）";
dic["S4AA_1_4"] = "开普勒（上）";
dic["S4AA_2_4"] = "开普勒（中）";
dic["S4AA_3_4"] = "开普勒（下）";
dic["S4AD_1_4"] = "长光（上）";
dic["S4AD_2_4"] = "长光（中）";
dic["S4AD_3_4"] = "长光（下）";
dic["S4AE_1_4"] = "德古拉（上）";
dic["S4AE_2_4"] = "德古拉（中）";
dic["S4AE_3_4"] = "德古拉（下）";
dic["S4AF_1_4"] = "布洛妮娅·黯影（上）";
dic["S4AF_2_4"] = "布洛妮娅·黯影（中）";
dic["S4AF_3_4"] = "布洛妮娅·黯影（下）";
dic["S4AG_1_4"] = "杏·玛尔（上）";
dic["S4AG_2_4"] = "杏·玛尔（中）";
dic["S4AG_3_4"] = "杏·玛尔（下）";
dic["S4AI_1_4"] = "奥托·阿波卡利斯（上）";
dic["S4AI_2_4"] = "奥托·阿波卡利斯（中）";
dic["S4AI_3_4"] = "奥托·阿波卡利斯（下）";
dic["S4AO_1_4"] = "卡莲·颂歌（上）";
dic["S4AO_2_4"] = "卡莲·颂歌（中）";
dic["S4AO_3_4"] = "卡莲·颂歌（下）";
dic["S4AQ_1_4"] = "绯狱丸（上）";
dic["S4AQ_2_4"] = "绯狱丸（中）";
dic["S4AQ_3_4"] = "绯狱丸（下）";
dic["S4AT_1_4"] = "西琳（上）";
dic["S4AT_2_4"] = "西琳（中）";
dic["S4AT_3_4"] = "西琳（下）";
dic["S4AW_1_4"] = "特斯拉·乐队（上）";
dic["S4AW_2_4"] = "特斯拉·乐队（中）";
dic["S4AW_3_4"] = "特斯拉·乐队（下）";
dic["S4B_1_4"] = "姬麟（上）";
dic["S4B_2_4"] = "姬麟（中）";
dic["S4B_3_4"] = "姬麟（下）";
dic["S4C_1_4"] = "莎士比亚（上）";
dic["S4C_2_4"] = "莎士比亚（中）";
dic["S4C_3_4"] = "莎士比亚（下）";
dic["S4D_1_4"] = "叶卡捷琳娜（上）";
dic["S4D_2_4"] = "叶卡捷琳娜（中）";
dic["S4D_3_4"] = "叶卡捷琳娜（下）";
dic["S4E_1_4"] = "萧云（上）";
dic["S4E_2_4"] = "萧云（中）";
dic["S4E_3_4"] = "萧云（下）";
dic["S4K_1_4"] = "苍玄（上）";
dic["S4K_2_4"] = "苍玄（上）";
dic["S4K_3_4"] = "苍玄（上）";
dic["S4L_1_4"] = "朱丹（上）";
dic["S4L_2_4"] = "朱丹（中）";
dic["S4L_3_4"] = "朱丹（下）";
dic["S4M_1_4"] = "连山（上）";
dic["S4M_2_4"] = "连山（中）";
dic["S4M_3_4"] = "连山（下）";
dic["S4N_1_4"] = "伊萨克·牛顿（上）";
dic["S4N_2_4"] = "伊萨克·牛顿（中）";
dic["S4N_3_4"] = "伊萨克·牛顿（下）";
dic["S4O_1_4"] = "薛定谔（上）";
dic["S4O_2_4"] = "薛定谔（中）";
dic["S4O_3_4"] = "薛定谔（下）";
dic["S4P_1_4"] = "普朗克（上）";
dic["S4P_2_4"] = "普朗克（中）";
dic["S4P_3_4"] = "普朗克（下）";
dic["S4Q_1_4"] = "萧云·红（上）";
dic["S4Q_2_4"] = "萧云·红（中）";
dic["S4Q_3_4"] = "萧云·红（下）";
dic["S4R_1_4"] = "卡莲·誓约（上）";
dic["S4R_2_4"] = "卡莲·誓约（中）";
dic["S4R_3_4"] = "卡莲·誓约（下）";
dic["S4S_1_4"] = "真田幸村（上）";
dic["S4S_2_4"] = "真田幸村（中）";
dic["S4S_3_4"] = "真田幸村（下）";
dic["S4T_1_4"] = "齐格飞·卡斯兰娜（上）";
dic["S4T_2_4"] = "齐格飞·卡斯兰娜（中）";
dic["S4T_3_4"] = "齐格飞·卡斯兰娜（下）";
dic["S4U_1_4"] = "塞西莉亚·沙尼亚特（上）";
dic["S4U_2_4"] = "塞西莉亚·沙尼亚特（中）";
dic["S4U_3_4"] = "塞西莉亚·沙尼亚特（下）";
dic["S4V_1_4"] = "浓姬（上）";
dic["S4V_2_4"] = "浓姬（中）";
dic["S4V_3_4"] = "浓姬（下）";
dic["S4Y_1_4"] = "爱因斯坦·乐队（上）";
dic["S4Y_2_4"] = "爱因斯坦·乐队（中）";
dic["S4Y_3_4"] = "爱因斯坦·乐队（下）";
dic["S4Z_1_4"] = "琪亚娜·泳装（上）";
dic["S4Z_2_4"] = "芽衣·泳装（中）";
dic["S4Z_3_4"] = "布洛妮娅·泳装（下）";
/*武器*/
dic["Weapon_Cannon_B3_41_3"] = "马尔科夫A型";
dic["Weapon_Cannon_B3_42_3"] = "马尔科夫C型";
dic["Weapon_Cannon_B4_43_3"] = "阴极子炮07式";
dic["Weapon_Cannon_B4_44_3"] = "阴极子炮09式";
dic["Weapon_Cannon_B5_47_4"] = "百手巨人初型";
dic["Weapon_Cannon_B6_46_4"] = "5th圣遗物";
dic["Weapon_Cannon_B7_48_4"] = "重装小兔19C";
dic["Weapon_Cannon_B11_83_3"] = "突击者分裂导弹";
dic["Weapon_Cannon_B11_84_3"] = "X-01青眼巨蟒";
dic["Weapon_Cannon_B13_86_4"] = "核心聚能炮Delta";
dic["Weapon_Cannon_B14_87_4"] = "尤弥尔之腕";
dic["Weapon_Cannon_B15_121_4"] = "伏羲之书";
dic["Weapon_Cannon_B16_122_4"] = "蚩尤巨炮";
dic["Weapon_Cannon_B17_130_4"] = "量子毁灭者Ⅱ型";
dic["Weapon_Cannon_B21_149_4"] = "火刀·真田";
dic["Weapon_Cannon_B23_173_4"] = "提尔的断腕";
dic["Weapon_Cannon_B25_177_4"] = "歼星者19C";
dic["Weapon_Claymore_H3_53_3"] = "氮素结晶剑";
dic["Weapon_Claymore_H3_55_3"] = "电离共振剑";
dic["Weapon_Claymore_H4_54_3"] = "超重剑·冲锋";
dic["Weapon_Claymore_H4_56_3"] = "超重剑·王蛇";
dic["Weapon_Claymore_H5_57_4"] = "尼德霍格翼爪";
dic["Weapon_Claymore_H6_58_4"] = "7th圣遗物";
dic["Weapon_Claymore_H7_59_4"] = "鲜血之舞";
dic["Weapon_Claymore_H8_60_4"] = "日炎大剑";
dic["Weapon_Claymore_H10_90_2"] = "混种大剑27式";
dic["Weapon_Claymore_H12_92_3"] = "深紫骑士";
dic["Weapon_Claymore_H12_93_3"] = "绯红皇后";
dic["Weapon_Claymore_H14_95_4"] = "激光斩舰刀";
dic["Weapon_Claymore_H16_97_4"] = "轩辕剑";
dic["Weapon_Claymore_H21_150_4"] = "牛鬼切·长光";
dic["Weapon_Claymore_H22_174_4"] = "巴鲁蒙格";
dic["Weapon_Cross_T1_157_2"] = "十字架·冰弹";
dic["Weapon_Cross_T2_158_2"] = "火焰发射台";
dic["Weapon_Cross_T2_159_2"] = "破甲弹发射台";
dic["Weapon_Cross_T3_160_2"] = "冰霜之誓";
dic["Weapon_Cross_T3_161_2"] = "烈火之誓";
dic["Weapon_Cross_T4_162_3"] = "黑色粉碎者";
dic["Weapon_Cross_T5_164_3"] = "火天使";
dic["Weapon_Cross_T5_165_3"] = "雷天使";
dic["Weapon_Cross_T6_166_4"] = "犹大的誓约";
dic["Weapon_Cross_T7_167_4"] = "仿犹大·血之拥抱";
dic["Weapon_Cross_T9_169_4"] = "樱花的誓约";
dic["Weapon_Cross_T10_170_4"] = "11th圣遗物";
dic["Weapon_Cross_T13_183_4"] = "埃琉德尼尔";
dic["Weapon_Katana_M1_15_2"] = "妖刀雨村";
dic["Weapon_Katana_M1_16_2"] = "妖刀村正";
dic["Weapon_Katana_M2_17_3"] = "苗刀·雷妖";
dic["Weapon_Katana_M2_19_3"] = "苗刀·电魂";
dic["Weapon_Katana_M3_18_3"] = "脉冲太刀17式";
dic["Weapon_Katana_M3_20_3"] = "脉冲太刀19式";
dic["Weapon_Katana_M4_21_4"] = "雷切";
dic["Weapon_Katana_M5_22_4"] = "3rd圣遗物";
dic["Weapon_Katana_M6_24_4"] = "磁暴·斩";
dic["Weapon_Katana_M12_77_4"] = "反立场打刀11式";
dic["Weapon_Katana_M13_78_4"] = "虚无之刃";
dic["Weapon_Katana_M15_124_4"] = "朱丹剑";
dic["Weapon_Katana_M17_129_4"] = "高周波切割刀";
dic["Weapon_Katana_M18_132_4"] = "藏锋";
dic["Weapon_Katana_M21_147_4"] = "仿灵刀·冰昙天";
dic["Weapon_Katana_M22_154_4"] = "灵刀·樱吹雪";
dic["Weapon_Katana_M23_171_4"] = "妖精剑·希尔文";
dic["Weapon_Katana_M26_193_4"] = "灵刀·赤染樱";
dic["Weapon_Katana_M27_176_4"] = "雨后的誓约";
dic["Weapon_Pistol_K1_02_1"] = "usp改";
dic["Weapon_Pistol_K2_03_2"] = "M1911";
dic["Weapon_Pistol_K2_04_2"] = "沙漠之鹰";
dic["Weapon_Pistol_K3_05_3"] = "水妖精Ⅰ型";
dic["Weapon_Pistol_K3_06_3"] = "火妖精Ⅰ型";
dic["Weapon_Pistol_K4_07_3"] = "火妖精Ⅱ型";
dic["Weapon_Pistol_K4_08_3"] = "水妖精Ⅱ型";
dic["Weapon_Pistol_K5_12_4"] = "索尔之锤";
dic["Weapon_Pistol_K6_11_4"] = "超电磁手炮";
dic["Weapon_Pistol_K7_10_4"] = "2nd圣遗物";
dic["Weapon_Pistol_K9_63_2"] = "柯尔特·捍卫者";
dic["Weapon_Pistol_K9_62_2"] = "柯尔特巨蟒·改";
dic["Weapon_Pistol_K13_68_4"] = "烈焰毁灭者";
dic["Weapon_Pistol_K14_69_4"] = "光与影";
dic["Weapon_Pistol_K15_118_4"] = "连山守护";
dic["Weapon_Pistol_K17_128_4"] = "能量跃迁者";
dic["Weapon_Pistol_K21_148_4"] = "雷刀·鬼角";
dic["Weapon_Pistol_K24_155_4"] = "原型·妖精之弓";
dic["Weapon_Pistol_K26_184_4"] = "异型·赫尔之弓";




/*alert(str);*/

/*补给记录存储*/
var bjHistory = new Array();
var bjHistoryCopy = new Array();

/*计算补给数据*/
function his(){
	$(function(){
		var i = 1;
		var len = (bjHistory.length)/100+1;
		for(i = 1; i<=len; i++){
			var id = "count"+i;
			
			/*var s = str.charAt(str.length - 1);*/
			/*alert(id);	*/	
			$("#"+id).click(function(){
			/*	
				alert("初始化完成");*/
				$("#index").html("");
				var id=$(this).attr("id");
				$("#page li").css("background","none");
				$("#"+id).css("background","rgba(0,0,0,0.3)");
				 var val = id.replace(/[^0-8]/ig,"");
				 var Int = id.replace(/[^abc]/ig,"");
				 var valInt = (val-1)*100+1;
				 for(i=0, I=bjHistory.length; i<I;i++){
				 	var str = dic[bjHistory[i]];
					var bg = bjHistory[i].split("");
					var color = bg[bg.length - 1];
					if(color == "4"){
						var c = "a157d5";
					}else{
						var c = "FFF";
					}
					var style="style='color:"+"#"+c+";'"	
					var liContent = "<li id='licontent"+i+"'"+style+">"+str+"<span style='color:#FFF;'>"+i+"</span></li>";
					if(i >= valInt && i <= valInt+99){
					 	$("#index").append(liContent);	
				 	}
				 		
				 };
			});	
		}
	});	
}



function icerefesh(){
	var ice = parseFloat($("#is").val()); /*默认水晶数量存储*/
	$("#ice_text").html(ice);	
	$("#iceCost").html("0");
	$("#cost_text").html("0");
};
icerefesh();


/*刷新*/
function refesh(){
		/*$("th").removeClass("bounceIn");*/
		$("#content").css("display","none");
		$("#dis").hide();
		$("th").css("display", "none");
		$(".recharge_Body").removeClass("animated zoomIn");
		$(".recharge_Body").css("display","none");
		$("#bg_pic").removeClass("zoomIn");
		$("#bg_pic").css("display","none");
		$("#bh3_button").css("display","block");		
		$("#bh3_button").addClass("animated zoomIn");	
		$("#custom_content div").remove();
}

/*删除补给记录*/
function removeHistory(){
	bjHistory = [];
	bjHistoryCopy = [];
	$("#index").find("li").remove();
/*	alert("2333");*/
}


var refeshclick = function(){
	if(confirm("(≖_≖ )?你抽到的老婆会刷新掉，确定吗？")){
		icerefesh();
		refesh();
		$(document).ready(function(){
			$("#bg_pic").css("display","block");
			$("#bg_pic").addClass("animated zoomIn");
		});
	}
}

$("#refesh").click(function(){	
	refeshclick();
	removeHistory();

});	
$(document).keydown(function(){
	if(event.keyCode == '70'){
		refeshclick();
	}	
});
var clickJump = function(){
	$("#bg_pic").css("display","none");
	$("#content").css("display","none");
	$("#bh3_button").css("display","none");
	$(".recharge_Body").css("display", "block");
	$(".recharge_Body").addClass("animated zoomIn");	
	$("#custom").css("display", "none");
	$("#index_click").css("display", "none");	
}



/*一次补给*/
$("#button_one").click(function(){	
	probabilitySave();
	refesh();
	var iceText = document.getElementById("ice_text");
	var iceCost = document.getElementById("iceCost");	
	var nv = random(a,b);
	var bg = nv-"60200";
	if(iceText.innerHTML < 280){
		if(confirm("钻石不足，氪金吧骚年!")){	
			clickJump();
		}else{	
			icerefesh();

		}
	}else if(iceCost.innerHTML > 270000){
		alert("别抽了，卡池都要被你抽爆了");
		
	}else{
		$("#moudle1").ready(function(){
			var bg = nv.split("");
			var background = bg[bg.length - 1];
			/*alert(typeof background);*/
			$("#card_pic1").css("background-image" , "url('./img/Walkure/"+nv+".png')");
			if(background  == "4"){
				$(".cp1").css("background-image","url(./img/Walkure/4.png)");
			}else{
				$(".cp1").css("background-image","url(./img/Walkure/2.png)");
			}
			
			$("#content").css("display", "block");
			$("#moudle1").css("display", "block");
			$("#moudle1").addClass("animated bounceIn");

		});			
		iceCost.innerHTML = parseInt(iceCost.innerHTML)+280;
		iceText.innerHTML = parseInt(iceText.innerHTML)-280;
		bjHistory.push(nv);
		/*alert(bjHistory.length);*/
	}	
});








/*十次补给*/
var one = function(){
	probabilitySave();
		refesh();
		var iceText = document.getElementById("ice_text");
		var iceCost = document.getElementById('iceCost'); 	
		if(iceText.innerHTML < 2800){
			if(confirm("钻石不足，氪金吧骚年!")){	
				clickJump();
			}else{	
				alert("取消水晶购买");
				$("#content").css("display","block");

			}
		}else if(iceCost.innerHTML > 270000){
			alert("别抽了，卡池都要被你抽爆了");
		}else{
			$("th").ready(function(){
				var i = 1;
				for(i=1; i<=10; i++){
					if(i <=10){
						var nvten = random(a,b);
						var bg = nvten.split("");
						var background = bg[bg.length - 1];
						var cardPic = 'card_pic' + i ;
						var moudle = 'moudle'  + i ;
						var cp = 'cp'+i;
						$("#"+cardPic).css("background-image" , "url('./img/Walkure/"+nvten+".png')");
						if(background  == "4"){
							$("."+cp).css("background-image","url(./img/Walkure/4.png)");
						}else{
							$("."+cp).css("background-image","url(./img/Walkure/2.png)");
						}
						bjHistory.push(nvten);	
						$("#content").css("display", "block");
						$("#"+moudle).css("display", "block");
						$("#"+moudle).addClass("animated bounceIn");											
					}		
				}		
			});
			iceCost.innerHTML = parseInt(iceCost.innerHTML)+2800;
			iceText.innerHTML = parseInt(iceText.innerHTML)-2800;
			/*	alert(bjHistory.length);*/
			}
	}




$("#button_ten").click(function(){
	one();		
});

$(document).keydown(function(){
	if($(".recharge_Body").css("display") == "none"){
		if(event.keyCode == '0XD'){
			one();
		}
	}		
});


/*氪金跳转*/
var shop = function(){
	$("#index_click").css("display","none");	
	$("#bg_pic").css("display","none");
	$("#content").css("display","none");
	$("#bh3_button").css("display","none");
	$(".recharge_Body").css("display", "block");
	$(".recharge_Body").addClass("animated zoomIn");
	$("#dis").css("display", "none");
	$("#index").css("display","none");
	$(".page_body").css("display","none");
	$(".index_title").css("display","none");
	/*setTimeout(function(){
		$("#bg_pic").css("display","block");
		$("#bh3_button").css("display","block");
	},300);	*/

}

$(".ice_add").click(function(){
	shop();	
	$("#custom_content div").remove();
	$("#custom").css("display", "none");
	$(".setting").hide();
});
$(document).keydown(function(){
	if(event.keyCode == '83'){
		shop();
	}	
});




/*分页栏判断*/
function pa(){
	if(bjHistory.length >=10){
		var count = 1;
		var countN = parseInt(bjHistory.length/100)+1;
		/*alert(countN);*/
		$("#page li").remove();
		for(count; count<=countN; count++){
			$("#page").append("<li id='count"+count+"'>"+count+"</li>");
		}
	}
};

function Page(){

	if($("#index li").length <= 7){
		$(".page_body").css("display","none");
	}else if(bjHistory.length >=10){
		$(".page_body").css("display","block");
	}
};


/*隐藏补给界面*/
function bjyincang(){
	$("#bg_pic").css("display","none");
	$("#content").css("display","none");
	$("#bh3_button").css("display","none");
}

/*显示补给界面*/
function bjdisplay(){
	$("#bg_pic").css("display","block");
	$("#content").css("display","block");
	$("#bh3_button").css("display","block");
}


/*显示补给记录界面*/
$("#index_click").click(function(){
	bjyincang();	
	checkArry();
	$("#custom_content div").css("display", "none");
/*	alert(bjHistory);*/
	$("#dis").removeClass("zoomOut");
	$("#dis").show();
	$(function(){
		$("#dis").addClass("animated zoomIn");
		setTimeout(function(){
			$("#index").show();
			$(".index_title").show();
			Page();
		},300);
	});				
});

function ccc(){
	$("#dis").addClass("animated zoomOut");
	$("#index").css("display","none");
	$(".page_body").css("display","none");
	$(".index_title").css("display","none");
}


/*隐藏补给记录界面*/
$("#back").click(function(){
	ccc();
	setTimeout(function(){
		$("#dis").css("display","none");
		$("#bg_pic").css("display","block");
		$("#bh3_button").css("display","block");
	},300);	
});


/*分页栏页数存储*/
var countAry = [];

function dis(){
	$(function(){	
		$.each(bjHistory,function(index,value){
			var indexi = index + 1;
			var str = dic[value];
			var bg = value.split("");
			var color = bg[bg.length - 1];
			if(color == "4"){
				var c = "a157d5";
			}else{
				var c = "FFF";
			}
			var style="style='color:"+"#"+c+";'"
			var liContent = "<li id='licontent"+index+"'"+style+">"+str+"<span style='color:#FFF;'>"+indexi+"</span></li>";
			countAry.push(index+1);
			if(index <= 99){
				$("#index").append(liContent);	
				/*alert("1");*/
			}
		his();
		});
	pa();
	});
}

function checkArry(){
	if(bjHistory.length >bjHistoryCopy.length){
		$("#index li").remove();
		dis();
	}else if(bjHistory.length > 0){
		dis();
		bjHistoryCopy = bjHistory;
		/*alert(bjHistoryCopy);*/
	}
}
/*alert(bjHistory.length);*/


/*自定义表单数据初始化*/
function int(){
	/*水晶*/
	var ice = $("#ice_text").text();
	$("#iceShow").attr("placeholder",ice);
	$("#WalkureS").attr("placeholder",WalkureS);
	$("#WalkureSDebris").attr("placeholder",WalkureSDebris);
	$("#WalkureA").attr("placeholder",WalkureA);
	$("#WalkureADebris").attr("placeholder",WalkureADebris);
	$("#WalkureB").attr("placeholder",WalkureB);
	$("#weapon4").attr("placeholder",weapon4);
	$("#shenghen4").attr("placeholder",shenghen4);
	$("#weapon3").attr("placeholder",weapon3);
	$("#shenghen3").attr("placeholder",shenghen3);
	$("#material").attr("placeholder",material);
	$("#exp").attr("placeholder",exp);
	$("#cost").attr("placeholder",cost);
};



$(document).on("click", "#custom", function(){
	ccc();
	setTimeout(function(){
		int();	
	},300);		
});




//·筛选功能
//按照概率筛选--12部分
//























