$(function(){
//	给中间的容器加事件
 $('#consent').append('<div class="intor"><img src="images/2.png"></div>');
   $('.oDiv').on({
   	 'mouseover':function(){
   	 	$(this).addClass('oDiv_s');
   },
     'mouseout':function(){
     	$(this).removeClass('oDiv_s');
     }
 });
     $('.consent').hover(function(){
   	 	$(this).append('<div class="intor intor_1"><img style="opacity:2" src="images/2.png"></div>');
   	},function(){
     	$('.intor').remove();
    });
//  给中间选项卡头部添加样式
    $('.mian_header>ul>li').on({
    	'mouseover':function(){
    		$('.mian_header>ul>li').removeClass('oLi_1');
    		$(this).addClass('oLi_1');
    	}
    });
//  底部导航条
    $('.index>ul>li').on({
    	'mouseover':function(){
    		$('.index>ul>li').removeClass('oIndex');
    		$(this).addClass('oIndex');
    	},
    	'mouseout':function(){
    		$(this).removeClass('oIndex');	
    	}
    });
    //右下角导航显示与隐藏
	function rigBotNav(){
		function rigBottomNav(){
		    var t = document.documentElement.scrollTop || document.body.scrollTop;
		    if(t>400){$('.rightBottomNav').fadeIn(400)}
		    if(t<400){$('.rightBottomNav').fadeOut(400)}
		}
		setInterval(function(){rigBottomNav()},1)
	}
	rigBotNav();
	$('.oIndex_1').on({
		"mouseover":function(){
			$('.oIndex_1').css("opacity","0.7");
		},
		"mouseout":function(){
			$('.oIndex_1').css("opacity","1");
		}
	})
			function isIE() { 
				 if (!!window.ActiveXObject || "ActiveXObject" in window)
				  return true;
				  else
				  return false;
			 }
			if(isIE()==true){
				$('#phone').css('font-size','30px')
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
	ie()
});