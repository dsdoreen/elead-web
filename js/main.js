$(function() {

	// 我要订货页 点击产品图弹出产品详情
	$(".ul_product li a").on("mouseenter", function(event) {

		$(this).parent().siblings().find("div").remove();

		$(this).append('<div class="box_pro_details"><form class="uk-form"><fieldset><div class="uk-form-row"><h1> 妃常健康E时代<a href="productinfo.html" class="a_jt" style="color:#555"> &nbsp;&nbsp;&nbsp;&nbsp;>></a></h1><span class="uk-text-muted uk-text-small">Let’s Talk About Health</span></div><div class="uk-form-row"><span>USD:</span><span class="uk-text-muted marlef-10 num">65</span></div><div class="uk-form-row"><span>SV:</span><span class="uk-text-muted marlef-10 num">65</span></div><div class="uk-form-row"><span class="uk-float-left uk-text-muted uk-text-small">库存100件</span><span class="uk-float-right"><input type="number"class="uk-float-right uk-width-1-2" value="1"/></span></div><div class="uk-form-row"><button class="uk-button">加入购物车</button></div></fieldset></form></div>');

	});
	$(".ul_product li a").on("mouseleave", function(event) {

		$(this).find("div").remove();

	});

	//产品详情页
	//点击大图替换	
	$(".small_ul img").bind("click", function() {
		$(this).parent().siblings().removeClass("active");
		$(this).parent().addClass("active");
		$(".big_img img").attr("src", $(this).attr("src"));
	})

	//我的订单页  根据状态和时间筛选
	$(".state span").bind("click", function() {
		$(this).siblings().removeClass("active");
		$(this).addClass("active");
	})
	$(".timequantum span").bind("click", function() {
		$(this).siblings().removeClass("active");
		$(this).addClass("active");
	})

	//全选全不选
	$("#all").click(function() {
		if(this.checked) {
			$(".shopcar_tb :checkbox").prop("checked", true);
		} else {
			$(".shopcar_tb :checkbox").prop("checked", false);
		}
	});

	//我的收货地址页面  设为默认地址效果
	$(".option").click(function() {

		$(".active_default").parent().addClass("uk-hidden");
		$(".active_default").parent().next().removeClass("uk-hidden");
		$(".active_default").removeClass("active_default");

		$(this).parent().prev().children().addClass("active_default");
		$(this).parent().addClass("uk-hidden");
		$(this).parent().prev().removeClass("uk-hidden");
	})

	$("#shopcar").on("mouseenter", function() {
		$(".wishinfo").show();
	})
	$("#shopcar").on("mouseleave", function() {
		//		$(".wishinfo").hide();
	})

	$(".cl_wish").bind("click", function() {
		$(".wishinfo").hide();
	})
	
})