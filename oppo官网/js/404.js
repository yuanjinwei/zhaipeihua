$(function(){
	var timer;
	function txt(){
		var texts = $('.error span').text();
		texts = texts-1;
		$('.error span').text(texts);
		if(texts==1){
			clearInterval(timer)
			window.history.back()
		}
	}
	timer = setInterval(function(){txt()},1000)
	
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
})
