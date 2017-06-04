$(function(){
	$('.footerRight li').click(function(){
		$(this).addClass('liHover').siblings().removeClass('liHover');
	})
	
	$('.scrollSpan').animate({
		marginLeft : -200
	},10000,'linear',function(){
		$('.scrollSpan').css('marginLeft',650);
	})
	setInterval(function(){
		$('.scrollSpan').animate({
			marginLeft : -200
		},10000,'linear',function(){
			$('.scrollSpan').css('marginLeft',650);
		})
	},10000)
	
	
	//评论功能
	$('.icoBtn').click(function(e){
		$('.face').toggle();
		e.stopPropagation();   //阻止冒泡事件
	})
	$(document).click(function(){
		$(".face").hide();
	});
	//点击小图标时，添加图片
	$(".face ul li").click(function(){
		$(".inputS").append($(this).find("img").clone());
	});
	//清除默认的字符
	$(".inputS").html('');
	$('.sendEnt').click(function(){
		if($(".inputS").html()==''){
			$('.history>ul').append('<li class="CusService"><div></div><span><img src="images/3_03.jpg" alt="" />'+				
			'你什么都不说人家怎么回复你，不可以这样哦'+'</span></li>');
		}else{
			$('.history>ul').append('<li class="optMe"><div></div><span><img src="images/4_07.png" alt="" />'+				
				$(".inputS").html()+'</span></li>');
			$('.history>ul').append('<li class="CusService"><div></div><span><img src="images/3_03.jpg" alt="" />'+				
				reply()+'</span></li>');
			$(".inputS").html('');	
		}	
		//重置高度，聊天记录始终在底部
		$('.history').scrollTop($('.history>ul').height());
	});
	function reply(){
		var arr=['有什么需要了解的么？可以重新提问试试哦~','很高兴你来，有什么可以帮到你？','小O不是很明白你的意思，换个问法试试，例如”手机如何备份资料“。','我竟无言以对','←_←','人是铁饭是钢','别着急，慢慢说，有小O陪着你呢','您好！问题不能为空，请输入您要问的问题。','我是小O，很高兴认识你','什么事情这么惊讶~','小O陪陪你','我不坏，你不爱','既然你这么诚心诚意地问我，那么我就大发慈悲地告诉你吧。为了防止地球被破坏，为了保护世界的和平，我就是人见人爱花见花开的小O。','不见不散','有什么需要了解的么？可以重新提问试试哦~','放大手势的设置方法'];
		return arr[Math.ceil(Math.random()*15)];
	}
	$('.voice').click(function(){
		if($(this).css('backgroundPosition')=='-4px -455px'){
			$(this).css('background','url(images/toolsbar.png) -4px -50px');
		}else{
			$(this).css('background','url(images/toolsbar.png) -4px -455px');
		}
	});
	
//	右侧鼠标移入效果
	$('.severList>li>a').mouseover(function(){
		$('.alertInput').show();
		$('.alertInput').css('top',$(this).position().top+$(this).get(0).offsetHeight-20);
		$('.alertHover').stop(true).animate({
			left : $(this).parent('li').position().left
		});
	})
	$('.options').hover(function(){},function(){
		$('.alertInput').hide();
	})
	$('.alertInput').click(function(){
		$(".inputS").html('R9s购买');
		//执行发送事件
		$(".sendEnt").trigger("click");
	})
	//确认发送
	$('.inputS').focus(function(){
		$(document).keydown(function(e){
			if(e.keyCode==13){    
				$(".sendEnt").trigger("click");
				return false;
			}
		})
	})
//	关闭
	$('.endActive').click(function(){
		if(confirm("您确定要离开客服妹妹吗？")){
			window.close();
			window.history.back();
		}
	})
		
})
