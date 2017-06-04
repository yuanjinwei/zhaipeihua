$(function(){
	//轮播
   	bannerPlay();
   	//右下角导航显示与隐藏
   	rigBotNav();
	ie();
 	
 	//banner轮播开始
 	function bannerPlay(){
		var	index = 0;
		var	bannerTimer;
		$('.banner>a').css('opacity',0).eq(index).css('opacity',1);
		function banner(left){
			if(left == 0){
				index--;
				if(index<0){index=$('.banner>a').length-1}
			}else{
				index++;
				if(index == $('.banner>a').length){index = 0;}
			}
			$('.banner>a').css('opacity',0).eq(index).css('opacity',1);
			$('.banner li').removeClass('bannerPresent').eq(index).addClass('bannerPresent')
		}
		//每5s图片切换一次
		bannerTimer = setInterval(function(){banner();},5000)
		//左
		$('.left').click(function(){banner(0)})
		//右
		$('.right').click(function(){banner(1)})
		
		//鼠标移入移出
		$('.banner>div>a').hover(function(){
			clearInterval(bannerTimer);
			bannerTimer = null;
		},function(){
			bannerTimer = setInterval(function(){banner();},5000)
		})
		$('.banner li').hover(function(){
			clearInterval(bannerTimer);
			bannerTimer = null;
			$('.banner>a').css('opacity',0).eq($(this).index()).css('opacity',1);
			$('.banner li').removeClass('bannerPresent').eq($(this).index()).addClass('bannerPresent')
			index = $(this).index();
		},function(){
			bannerTimer = setInterval(function(){banner();},5000)
		})
		
		//选项卡动态定位
		function positionl(){
			var positionLeft = parseFloat($('.headerNav').css('width').slice(0,-2))/2+parseFloat($('.headerNav').css('marginLeft').slice(0,-2))-parseFloat($('.banner>ul').css('width').slice(0,-2))/2+'px'
			$('.banner>ul').css('marginLeft',positionLeft)
		}
		setInterval(function(){positionl()},1)
	}		
	//banner轮播结束
	
	//右下角导航显示与隐藏
	function rigBotNav(){
		function rigBottomNav(){
		    var t = document.documentElement.scrollTop || document.body.scrollTop;
		    if(t>400){$('.rightBottomNav').fadeIn(400)}
		    if(t<400){$('.rightBottomNav').fadeOut(400)}
		}
		setInterval(function(){rigBottomNav()},1)
	}
	//ie字体大小兼容
		function ie(){
			function isIE() { 
				 if (!!window.ActiveXObject || "ActiveXObject" in window)
				  return true;
				  else
				  return false;
			 }
			if(isIE()==true){
				$('#phone').css('font-size','30px')
			}else{
				$('#phone').css('font-size','25px')
			}
		}
})
