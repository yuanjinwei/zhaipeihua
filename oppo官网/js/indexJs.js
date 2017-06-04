$(function(){
	//背景移动速度
	if($(window).scrollTop()<=900){
		$('.bgBox').css('top', -$(document).scrollTop()/5);
	}else{
		$('.bgBox').css('top', -$(document).scrollTop()/3);
	}
	//侧边栏定位
	if($(window).scrollTop()<50){
		$('.sidebar').fadeOut();
	}else{
		$('.sidebar').fadeIn();
	}
	$(window).scroll(function(){
		if($(window).scrollTop()<=900){
			$('.bgBox').css('top', -$(document).scrollTop()/5);
		}else{
			$('.bgBox').css('top', -$(document).scrollTop()/3);
		}
	//侧边栏定位
		if($(window).scrollTop()<50){
			$('.sidebar').fadeOut();
		}else{
			$('.sidebar').fadeIn();
		}
	})
	
//	第一个地方弹出相片
	var currentImg = 0;
	$('.imgBox_1>a').click(function(){
		$('.bigImgBox_1').css('top',$(window).scrollTop());
		//禁用滚动条
		$('body').css('overflowY','hidden');
		currentImg = $(this).index();
		$('.bigImgBox_1').show().find('li').eq(currentImg).css('top',0).siblings().css('top',-$('.bigImgBox_1').height());
		$('.prevBtn').click(function(){
			if(currentImg<0)currentImg = 5;
			toggle(--currentImg);
		})
		$('.nextBtn').click(function(){
			if(currentImg>4)currentImg = -1;
			toggle(++currentImg);
		})
		$('.closeBtn').click(function(){
			$('body').css('overflowY','scroll');
			$('.bigImgBox').hide();
		})
		function toggle(n){
			$('.bigImgBox_1').find('li').eq(n).css('top',-$(this).height()).stop(true).animate({
				top : 0 
			}).siblings().stop(true).animate({
				top : $(this).height() 
			});
		}
	})
	
//	第二个地方弹出相片
	$('.imgBox_2>a').click(function(){
		$('.bigImgBox_2').css('top',$(window).scrollTop());
		//禁用滚动条
		$('body').css('overflowY','hidden');
		currentImg = $(this).index();
		$('.bigImgBox_2').show().find('li').eq(currentImg).css('top',0).siblings().css('top',-$('.bigImgBox_2').height());
		$('.prevBtn').click(function(){
			if(currentImg<0)currentImg = 5;
			toggle(--currentImg);
		})
		$('.nextBtn').click(function(){
			if(currentImg>4)currentImg = -1;
			toggle(++currentImg);
		})
		$('.closeBtn').click(function(){
			$('body').css('overflowY','scroll');
			$('.bigImgBox').hide();
		})
		function toggle(n){
			$('.bigImgBox_2').find('li').eq(n).css('top',-$(this).height()).stop(true).animate({
				top : 0 
			}).siblings().stop(true).animate({
				top : $(this).height() 
			});
		}
	})
	
//	第三个地方弹出相片
	$('.imgBox_3>a').click(function(){
		$('.bigImgBox_3').css('top',$(window).scrollTop());
		//禁用滚动条
		$('body').css('overflowY','hidden');
		currentImg = $(this).index();
		$('.bigImgBox_3').show().find('li').eq(currentImg).css('top',0).siblings().css('top',-$('.bigImgBox_3').height());
		$('.prevBtn').click(function(){
			if(currentImg<0)currentImg = 5;
			toggle(--currentImg);
		})
		$('.nextBtn').click(function(){
			if(currentImg>4)currentImg = -1;
			toggle(++currentImg);
		})
		$('.closeBtn').click(function(){
			$('body').css('overflowY','scroll');
			$('.bigImgBox').hide();
		})
		function toggle(n){
			$('.bigImgBox_3').find('li').eq(n).css('top',-$(this).height()).stop(true).animate({
				top : 0 
			}).siblings().stop(true).animate({
				top : $(this).height() 
			});
		}
	})
	
//	第四个地方弹出相片
	$('.imgBox_4>a').click(function(){
		$('.bigImgBox_4').css('top',$(window).scrollTop());
		//禁用滚动条
		$('body').css('overflowY','hidden');
		currentImg = $(this).index();
		$('.bigImgBox_4').show().find('li').eq(currentImg).css('top',0).siblings().css('top',-$('.bigImgBox_4').height());
		$('.prevBtn').click(function(){
			if(currentImg<0)currentImg = 5;
			toggle(--currentImg);
		})
		$('.nextBtn').click(function(){
			if(currentImg>4)currentImg = -1;
			toggle(++currentImg);
		})
		$('.closeBtn').click(function(){
			$('body').css('overflowY','scroll');
			$('.bigImgBox').hide();
		})
		function toggle(n){
			$('.bigImgBox_4').find('li').eq(n).css('top',-$(this).height()).stop(true).animate({
				top : 0 
			}).siblings().stop(true).animate({
				top : $(this).height() 
			});
		}
	})
	//视频的播放与暂停
	$('.video_con a').click(function(){
		$(this).hide().prev().hide();
		$(this).prev().prev().show().trigger('play');
		$(this).prev().prev().click(function(){
			if ($(this).hasClass('pause')){
				$(this).trigger("play");
				$(this).removeClass('pause');
				$(this).next().next().hide();
			} else {
				$(this).trigger("pause");
				$(this).addClass('pause');
				$(this).next().next().show();
			}
		})
	})
	
	//点击侧边栏
	$('.sidebar li').click(function(){
		switch($(this).index()){
			case 0: $(window).scrollTop(0);
				break;
			case 1:  $(window).scrollTop(3100);
				break;
			case 2:  $(window).scrollTop(6200);
				break;
			case 3:  $(window).scrollTop(9300);
				break;
			case 4:  $(window).scrollTop(11000);
				break;
			case 7:  $(window).scrollTop(0);
				break;
		}
	})
	

	//开局动画
	$('.begin .KeepOutUp').animate({
		top : -$('.begin').height()/2
	},2000)
	$('.begin .KeepOutDown').animate({
		bottom : -$('.begin').height()/2
	},2000,function(){
		$('.begin img').fadeOut(1500);
		$('.begin .KeepOutLeft').animate({
			left : -$('.begin').width()/2
		},2000)
		$('.begin .KeepOutRight').animate({
			right : -$('.begin').width()/2
		},2000)
		$('.begin').fadeOut(3500,function(){$('body').css('overflowY','scroll')});
	})
	
	//跳动的向下按钮
	setInterval(function(){
		$('.arrowBtn').animate({
			top : 7,
			opacity : 0.5
		},1000,function(){
			$('.arrowBtn').animate({
				top : 0,
				opacity : 1
			},1000)
		})
	},1500);
		
	
	$('video').each(function(){
		var _this=$(this);
		$(this).get(0).onplay=function(){
			_this.next().next().hide();
		}
		$(this).get(0).onpause=function(){
			_this.next().next().show();
		}
	})

	
	

})
