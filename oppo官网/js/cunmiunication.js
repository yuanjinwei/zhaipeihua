//首页以及其他的选项卡效果
$(function(){
	//点击首页等时的选项卡效果
	$('.header-b-right>span').click(function(){
		//因为页面中有多个section，所以先将所有的section隐藏
		$('section').css('display','none');
		//这里又将点击的菜单栏中的下标索引到所属于的那个section中，让它显示出来
		$('section:eq('+$(this).index()+')').css('display','block');
		//当选项不是在首页的时候将轮播图隐藏
		if($(this).index()!=0){
			$('nav').css('display','none');
//			$('aside').css('margin-top','109px');
//			$('aside').css('margin-right','-500px');
			$('.aside-div-one,.friendLink').css('display','none');
		}else{
			$('nav').css('display','block');
//			$('aside').css('margin-top','20px');
//			$('aside').css('margin-right','400px');
			$('.aside-div-one,.friendLink').css('display','block');
		}
		$(this).addClass('colorAdd').siblings().removeClass('colorAdd');
		
	});

//	$('.header-b-right a').click(function(){
//		$('.header-b-right a').css('color','#000000').eq($(this).index()).css('color','#008B56')
//		console.log($(this).index())
//	})
//	
	//话题选项卡中的页面加载效果
	var load = 1008;
	var aa= 0.99;
	$(window).scroll(function(){
			if($(window).scrollTop()/($(document).height()-$(window).height())>aa){
				aa=10.5;
				$('.load').show();
				$('.load').fadeOut(5000,function(){
					for(var i = 0;i<6;i++){
						$('.ddfirst').append('<ul id="welcomeFlower"><div class="userimg"><img src="images/75_avatar_small.jpg" /></div><div class="tuserNL"><span class="tusername">开森呀</span><span class="tuserlv">&nbsp;&nbsp;lv10.研究生O粉</span></div><div class="tuseranwser">感觉离不开了啦</div><li class="userphoto"><img src="images/pinlun1.jpg" /><img src="images/pinlun2.jpg" /><img src="images/pinlun2.jpg" /></li><li class="tsource">&nbsp;12小时前&nbsp; 来自&nbsp; OPPO &nbsp;R9s.这一刻&nbsp; 更清晰</li><div class="lscl"><div class="home-share"></div><span>24</span><div class="home-chat"></div><span>24</span><div class="home-love"></div><span>24</span><div class="home-look"></div><span>24</span></div></ul><hr style="height:2px;border:none;border-top:1px solid #ccc;" />');
					}
					aa=0.99;
					$('.load').hide();
				})
					
			}
	})
	//自动加载不会
	
	//做话题那部分的选项卡 
	$('.conversation>ul>li').click(function(){
		$('.bmw>div').css('display','none');
		$('.bmw>div:eq('+$(this).index()+')').css('display','block');
		$(this).addClass('colorAdd').siblings().removeClass('colorAdd');
	});

	$('.header-b-right>span>a').click(function(){
		$('.header-b-right>span>a').removeClass('colorAdd')
		$('.header-b-right>span>a').eq($(this).index()).addClass('colorAdd')
	})
})