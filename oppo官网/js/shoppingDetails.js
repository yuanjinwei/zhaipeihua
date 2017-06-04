$(function(){
	rigBotNav();
	bennerPlay();
	selects();
	ie();
	
	//右下角导航显示与隐藏
	function rigBotNav(){
		function rigBottomNav(){
		    var t = document.documentElement.scrollTop || document.body.scrollTop;
		    if(t>400){$('.rightBottomNav').fadeIn(400)}
		    if(t<400){$('.rightBottomNav').fadeOut(400)}
		}
		setInterval(function(){rigBottomNav()},1)
	}
	//	详情页轮播///选择
		function bennerPlay(){
			var index = 0;
			var timer;
			function play(){
				index++;
				if(index==$('.displayBlock').find('img').length){index=0}
				$('.displayBlock').find('img').stop(true).fadeOut(400).eq(index).stop(true).fadeIn(400)
				$('.displayBlock').find('li').removeClass('border').eq(index).addClass('border')
			}
			clearInterval(timer);
			timer = setInterval(function(){play()},3000)
		
			$('.select').find('li').on({
				click:function(){
					clearInterval(timer);
					timer = null;
					index = $(this).index()-1;
					play()
				},
				mouseover:function(){
					clearInterval(timer);
					timer = null;
					index = $(this).index()-1;
					play()
				},
				mouseout:function(){
					timer = setInterval(function(){play()},3000)
				}
			})
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
				$('#phone').css({
					'font-size':'30px',
					'textAlign':'center'
				})
			}else{
					$('#phone').css({
					'font-size':'25px',
					'textAlign':'center'
				})
			}
	}
	//选项卡
	function selects(){
		//款式选择
		$('.filtrateLi3').find('li').click(function(){
			$('.filtrateLi3').find('li').removeClass('borderColor').eq($(this).index()).addClass('borderColor');
			$('.show').children('div').removeClass('displayBlock').eq($(this).index()).addClass('displayBlock');
			$('.filtrateLi7').css('display','block')
		}).eq(3).click(function(){
			$('.filtrateLi7').css('display','none')
		})
		//商品详情，参数，评论
		$('.shoppingArguments>div>ul>li').click(function(){
			$('.shoppingArguments>div>ul>li').removeClass('borderBottom').eq($(this).index()).addClass('borderBottom')
			$('.product-view>div').eq(1).children('div').removeClass('imgBlock').eq($(this).index()).addClass('imgBlock')
		})
		//评论筛选
		$('.tab').children('a').slice(0,3).click(function(){
			$('.tab>a').slice(0,3).children('i').removeClass('green').end().eq($(this).index()).children('i').addClass('green')
		}).end().slice(0,1).click(function(){
			$('.commentContent>ul>li').css('display','block')
		}).end().slice(1,2).click(function(){
			$('.commentContent>ul>li').css('display','none').children('p').children('img').parents("li").css('display','block')
		}).end().slice(2,3).click(function(){
			$('.commentContent>ul>li').css('display','none').children('div').children('ul').parents('li').css('display','block')
		})
	}
})
