$(document).ready(function(){
 //wow.js
  if (!(/msie [6|7|8|9]/i.test(navigator.userAgent))){
	new WOW().init();
};
//导航
var arr = $('.nav li');
   for(var i =0;i<5;i++){  
    $(arr[i]).click(function(){
        $(this).addClass("liactive");
        $(this).siblings().removeClass("liactive");
    });
     }
//轮播图片宽度
var calen=$(".container").width();
var cahei=calen*0.358;
$(".item").css({'width':'calen','height':'cahei'});
$(".item img").css({'width':'100%','height':'100%'});

$('.con_1').click(function(){
	$('.c-btn-group button').removeClass('active')
	$(this).addClass('active');
	$('.c-con').hide();
	$('.c-con-1').show();
})
$('.con_2').click(function(){
	$('.c-btn-group button').removeClass('active')
	$(this).addClass('active');
	$('.c-con').hide();
	$('.c-con-2').show();
})
$('.con_3').click(function(){
	$('.c-btn-group button').removeClass('active')
	$(this).addClass('active');
	$('.c-con').hide();
	$('.c-con-3').show();
})
$('.con_4').click(function(){
	$('.c-btn-group button').removeClass('active')
	$(this).addClass('active');
	$('.c-con').hide();
	$('.c-con-4').show();
})
$('.con_5').click(function(){
	$('.c-btn-group button').removeClass('active')
	$(this).addClass('active');
	$('.c-con').hide();
	$('.c-con-5').show();
})

	$('.c-btn').hover(function(){
		$('this span').css('display','block');
	}),function(){
		$('this').find('span').css('display','none');
	}

$(".c-btn").click(function(){
			$(".c-btn").css({'background':' white','border':'4px solid black'});
			$(this).css({'background':'#bff3c8','border':'4px solid #5d9a9c'});
		})
});
//cultrue
var arra = $('.Cultrue-hover');
   for(var i =0;i<5;i++){  
    $(arra[i]).hover(function(){
        $(this).css('color','black');
         $(this).siblings().css('color','#353434');
    },function(){
        $(this).css('color','#353434');
       
    });
     }