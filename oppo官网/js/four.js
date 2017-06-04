$(function(){
//	点赞
	$('.oImg').click(function(){
		var x=$(this).parents('li').index();
		var z=+($('.number').eq(x).html())+1
		$('.number').eq(x).html(z);
	});
	$('.toomuchPhoto>ul>li').on({
		'mouseover':function(){
			$(this).addClass('oLi');
			$(this).css("opacity","0.7");
			$(this).css("background","papayawhip");
		},
		'mouseout':function(){
			$(this).removeClass('oLi');
			$(this).css("opacity","1");
			$(this).css("background","#fff");
		}
	});
	$('.oImg').hover(
		function(){
			$(this).css("background-image","url(images/012.png)");
			$('.number').eq($(this).parents('li').index()).css("color","red");
	    },
	    function(){
	    	$(this).css("background-image","url(images/011.png)")
	    	$('.number').eq($(this).parents('li').index()).css("color","#7D7D7D");
	    }
	);
//	鼠标移入字体变色
	$('.rectangle>span').hover(
		function(){
			$('.rectangle>span').css("color","#008B56");
			$('.rectangle>span').css("cursor","pointer");
		},
		function(){
			$('.rectangle>span').css("color","#000");
		}
	);
	$('.table-user').hover(
		function(){
		   $(this).css("color","#008B56") ;
	    },
	    function(){
	    	$(this).css("color","#000");
	    }
    )
	var load = 1008;
	var aa = 0.99;
	$(window).scroll(function(){
			if($(window).scrollTop()/($(document).height()-$(window).height())>aa){
				aa = 1.5;
				$('#preloader_2').show();
				$('#preloader_2').fadeOut(2000,function(){
					for(var i = 0;i<6;i++){
						$('.oUl').append('<li><div class="bgimg"></div><div><div class="consent"><div class="smallimg"></div><span class="table-user">陈00</span>'+
						'<a><img class="oImg"src="images/011.png"/><br><span class="number">56</span></a></div></div></li>');
					}
					aa = 0.99;
					$('#preloader_2').hide();
						$('.oImg').click(function(){
							var x=$(this).parents('li').index();
							var z=+($('.number').eq(x).html())+1
							$('.number').eq(x).html(z);
						});
						$('.toomuchPhoto>ul>li').on({
							'mouseover':function(){
								$(this).addClass('oLi');
								$(this).css("opacity","0.7");
								$(this).css("background","papayawhip");
							},
							'mouseout':function(){
								$(this).removeClass('oLi');
								$(this).css("opacity","1");
								$(this).css("background","#fff");
							}
						});
						$('.oImg').hover(
							function(){
								$(this).css("background-image","url(images/012.png)");
								$('.number').eq($(this).parents('li').index()).css("color","red");
						    },
						    function(){
						    	$(this).css("background-image","url(images/011.png)")
						    	$('.number').eq($(this).parents('li').index()).css("color","#7D7D7D");
						    }
						);
						$('.table-user').hover(
							function(){
							   $(this).css("color","#008B56") ;
						    },
						    function(){
						    	$(this).css("color","#000");
						    }
					    );
				})
					
			}
	})
	
})
