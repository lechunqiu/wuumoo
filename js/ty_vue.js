/*
 * 页头
 */
var indexTop = new Vue({
	el: '#index_top',
	data: {
		logo_url: 'index.html',
		logo_img_src: 'img/top_logo.png',
		citySelect: '0',
		options: [{
				text: '上海',
				value: '0'
			},
			{
				text: '杭州',
				value: '1'
			},
			{
				text: '北京',
				value: '2'
			}
		],
		nav: [{
				href: 'index.html',
				text: '首页'
			},
			{
				href: 'woyaozufang.html',
				text: '我要租房'
			},
			{
				href: 'qingnianshequ.html',
				text: '青年社区'
			},
			{
				href: 'fangwutuoguan.html',
				text: '房屋托管'
			},
			{
				href: 'wuyehezuo.html',
				text: '物业合作'
			},
			{
				href: 'jingcaishenghuo.html',
				text: '精彩生活'
			},
			{
				href: 'guanyuwumo.html',
				text: '关于梧陌'
			}
		],
		navNumber: 0,
		dl_href: 'denglu.html',
		dl: '登录',
		zc_href: 'zhuce.html',
		zc: '注册',

	}
	/*,
					methods:{
						changeNavNo:function(){
							this.navNumber=1;
						}
					}*/

})