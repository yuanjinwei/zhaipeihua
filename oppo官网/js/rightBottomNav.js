$(function(){
	rigBotNav();
	
	//右下角导航显示与隐藏
	function rigBotNav(){
		function rigBottomNav(){
		    var t = document.documentElement.scrollTop || document.body.scrollTop;
		    if(t>400){$('.rightBottomNav').fadeIn(400)}
		    if(t<400){$('.rightBottomNav').fadeOut(400)}
		}
		setInterval(function(){rigBottomNav()},1)
	}
})