/**
 * Replacement for toggle
 */
jQuery.fn.toggle = function(fn, fn2) {
	// Don't mess with animation or css toggles
	if(!jQuery.isFunction(fn) || !jQuery.isFunction(fn2)) {
		return oldToggle.apply(this, arguments);
	}
	// Save reference to arguments for access in closure
	var args = arguments,
		guid = fn.guid || jQuery.guid++,
		i = 0,
		toggler = function(event) {
			// Figure out which function to execute
			var lastToggle = (jQuery._data(this, "lastToggle" + fn.guid) || 0) % i;
			jQuery._data(this, "lastToggle" + fn.guid, lastToggle + 1);
			// Make sure that clicks stop
			event.preventDefault();
			// and execute the function
			return args[lastToggle].apply(this, arguments) || false;
		};
	// link all the functions, so any of them can unbind this click handler
	toggler.guid = guid;
	while(i < args.length) {
		args[i++].guid = guid;
	}
	return this.click(toggler);
};
/*
 * 首页banner轮播
 */
$(function() {
	var i = 0;
	var j = $(".banner_img ul li").length - 1;
	$(".prev_right").click(function() {

		lunbo();

	})

	$(".prev_left").click(function() {

		if(i == 0) {
			i = j;
			var moveright = $(".banner_img").width() * i;
			$(".banner_img ul").animate({
				right: moveright
			}, 1000);
			$(".bottom_icon ul li").eq(i).addClass("bottom_icon_selected")
				.siblings().removeClass("bottom_icon_selected");
		} else {
			i--;
			var moveright = $(".banner_img").width() * i;
			$(".banner_img ul").animate({
				right: moveright
			}, 1000);
			$(".bottom_icon ul li").eq(i).addClass("bottom_icon_selected")
				.siblings().removeClass("bottom_icon_selected");
		}
	})

	$(".bottom_icon ul li").click(function() {
		$(this).addClass("bottom_icon_selected")
			.siblings().removeClass("bottom_icon_selected");
		i = $(this).index();

		var moveright = $(".banner_img").width() * i;
		$(".banner_img ul").animate({
			right: moveright
		}, 1000);

	})

	function lunbo() {

		if(i == j) {
			i = 0;
			var moveright = $(".banner_img").width() * i;
			$(".banner_img ul").animate({
				right: moveright
			}, 1000);
			$(".bottom_icon ul li").eq(i).addClass("bottom_icon_selected")
				.siblings().removeClass("bottom_icon_selected");

		} else {
			i++;
			var moveright = $(".banner_img").width() * i;
			$(".banner_img ul").animate({
				right: moveright
			}, 1000);
			$(".bottom_icon ul li").eq(i).addClass("bottom_icon_selected")
				.siblings().removeClass("bottom_icon_selected");
		}

	}

	setInterval(lunbo, 4000);

})
/*
 * banner搜索框搜索分类
 */
$(function() {
	$(".zuffl").mouseover(function() {
		$(".zuffl ul").show()
	}).mouseleave(function() {
		$(".zuffl ul").hide()
	})

	$(".zuffl ul li").click(function() {
		$(this).parent().hide();
		$(this).parent().siblings("span").text($(this).text())
	})
})
/*
 * 首页展示
 */
$(function() {
	var zsli_wid = $(".index_zs_link ul li").width();
	var zsliLength = $(".index_zs_link ul li").length;
	$(".index_zs_link").width(410 * 3)
	$(".index_zs_link ul").width(410 * zsliLength);
	/*var zsliImg_wid=$(".zs_img").width();
	$(".zs_img").height(zsliImg_wid*29/39);
	$(window).resize(function(){
		var zsliImg_wid=$(".zs_img").width();
		$(".zs_img").height(zsliImg_wid*29/39);
	})*/
	$(".zs_title h3").each(function() {
		$(this).attr("title", $(this).text())
	})
	$(".zs_title p").each(function() {
		$(this).attr("title", $(this).text())
	})

})
/*
 * 我要租房筛选
 */
$(function() {
	/*$(".fwtdysqh a:gt(0)").toggle(function(){
		$(".fwtdysqh a").addClass("tjsx_a_ed")
		$(".fwtdysqh a:first-child").removeClass("tjsx_a_ed")
	},function(){
		$(this).removeClass("tjsx_a_ed")
	})*/
	$(".fwtdysqh a:gt(0)").each(function() {
		$(this).toggle(function() {
			$(this).addClass("tjsx_a_ed")
			$(".fwtdysqh a:first-child").removeClass("tjsx_a_ed")
		}, function() {
			$(this).removeClass("tjsx_a_ed")
		})
	})
	$(".fwtdysqh a:first-child").click(function() {
		$(this).addClass("tjsx_a_ed").siblings().removeClass("tjsx_a_ed")
	})

})
/*
 * 我要租房列表
 */
$(function() {
	$(".wyzf_zd_link ul").css("width", "auto")
})
/*
 * 租房详情地图
 */
$(function() {
	$(".dtfl_con p").each(function() {
		$(this).attr("title", $(this).text());
	})
})
/*
 * 社群活动
 */
$(function() {
	$(".sqggmk_box").each(function() {
		$(this).find(".sqhd_bq span").attr("title", $(this).find(".sqhd_bq span").text())
	})
})

/*
 * 梧陌合租
 */
$(function() {
	$li1 = $(".hz_list li");
	$window1 = $(".hz_list");
	$left1 = $(".wmhz_left_icon");
	$right1 = $(".wmhz_right_icon");
	var lc1 = 0;
	var rc1 = $li1.length - 3;

	$left1.click(function() {

		if(lc1 < 1) {
			/*alert("已经是第一张图片");*/
			return;
		}

		lc1--;
		rc1++;
		$window1.animate({
			left: '+=410px'
		}, 1000);

	});
	$right1.click(function() {
		hezuZs();

	});

	function hezuZs() {
		if(rc1 < 1) {
			/*alert("已经是最后一张图片");*/
			lc1 = 0;
			rc1 = $li1.length - 3;
			$window1.animate({
				left: 0
			}, 1000);
			return;
		}

		lc1++;
		rc1--;
		$window1.animate({
			left: '-=410px'
		}, 1000);

	}

	setInterval(hezuZs, 5000);
})
/*
 * 梧陌整租
 */
$(function() {
	$li2 = $(".zz_list li");
	$window2 = $(".zz_list");
	$left2 = $(".zzzsl_left_icon");
	$right2 = $(".zzzsl_right_icon");
	var lc2 = 0;
	var rc2 = $li2.length - 3;

	$left2.click(function() {

		if(lc2 < 1) {
			/*alert("已经是第一张图片");*/
			return;
		}

		lc2--;
		rc2++;
		$window2.animate({
			left: '+=410px'
		}, 1000);

	});
	$right2.click(function() {
		zhengzZs();

	});

	function zhengzZs() {
		if(rc2 < 1) {
			/*alert("已经是最后一张图片");*/
			lc2 = 0;
			rc2 = $li2.length - 3;
			$window2.animate({
				left: 0
			}, 1000);
			return;
		}

		lc2++;
		rc2--;
		$window2.animate({
			left: '-=410px'
		}, 1000);

	}

	setInterval(zhengzZs, 5000);
})

/*
 * 优质房源小区名称title
 */
$(function() {
	$('.yzfyzsbt p').each(function() {
		$(this).attr('title', $(this).text())
	})
})
/*
 * 活动报名弹出框
 */
$(function() {

	$('.wybm').click(function() {
		if($(this).is('.wybm_ed')) {
			alert('活动已结束！你可以关注下其他活动！')
		} else {
			$('.model_box').show()
		}

	})

	$('.black_bg').click(function() {
		$(this).parent().hide()
	})
	$('.close_btn').click(function() {
		$(this).parent().parent().hide()
	})
})
/*
 * 分类切换
 */
$(function(){
	$('.fenleiqh a').click(function(){
		$(this).addClass('tjsx_a_ed').siblings().removeClass('tjsx_a_ed');
	})
	$('.xzqy_ej a').click(function(){
		$(this).addClass('tjsx_a_ed').siblings().removeClass('tjsx_a_ed');
	})
	$('.wyzfpx_list li').click(function(){
		$(this).addClass('zfpxlist_ed').siblings().removeClass('zfpxlist_ed');
	})
	$('.zfxqxxyl li').click(function(){
		$(this).addClass('zfxqcl_ed').siblings().removeClass('zfxqcl_ed');
	})
})
