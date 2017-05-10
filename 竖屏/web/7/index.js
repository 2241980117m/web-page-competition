$(function(){
	$(".section").fullpage({
     		    verticalCentered:false,
     			scrollingSpeed:1000,
     			css3:true,
     			resize:false,
     			slidesNavigation:true,
     			slidesNavPosition:"bottom",
     			slideNavigationTooltips:['tip','p','l'],
     			loopHorizontal:false,
                anchors:['slide'],
     	});

});



$(document).ready(function(){
  
     if (localStorage.pagecount){
               localStorage.pagecount=Number(localStorage.pagecount)+1;
           }
           else{
              localStorage.pagecount=1;
           }

       $("#value").html(localStorage.pagecount);


	//第一屏
 
$("#fp-prev").bind("mouseenter",function(){
	$(".fp-controlArrow.fp-prev").css("opacity",1);
	 $(".fp-controlArrow.fp-prev").hover(function(){
	 	$(this).css("opacity",1);
    	
    })
});
$("#fp-next").bind("mouseenter",function(){
	$(".fp-controlArrow.fp-next").css("opacity",1);
	$(".fp-controlArrow.fp-next").hover(function(){
		$(this).css("opacity",1);
    	
    })
});

  $("#fp-prev").bind("mouseleave",function(){
	$(".fp-controlArrow.fp-prev").css("opacity",0);
});
  $("#fp-next").bind("mouseleave",function(){
	$(".fp-controlArrow.fp-next").css("opacity",0);
});
   $(".first").find(".add").bind("click",function(){
   	  $(".first").find(".top").slideToggle();
       $(".first").find(".top").find("p").animate({
       	 opacity:1,
         width:'512px',
         height:'150px'

       },1000);

   })
     


	//第二屏
   var k=0;
	$(".news-visuel").hover(function(){
          var  img=$(this).find('img');
         
          	for(var i=0;i<img.length;i++){
              
           
            img[i].onclick=function(){
            
              img[k].style.display="none";
           if(k+1==3)
           {
		 	    k=-1;
		 	   
           }
		 	
		    img[k+1].style.display="inline";
		   k++;
        }
          }
 
		})
  // $("#hot").find('video')[0].play();
 
 	
 
  //第三屏
$("#era").bind("click",function(){
	$(".AI").find(".content1").attr("id","animation4");
    $("#AIcontent2").css("display","block");
    $(".AI").find("video")[0].play();
     $(".AI").find("video")[0].volume=0.1;
      $(".AI").find("video")[0].loop=false;

});
$("#AIcontent2").bind("click",function(){
    
	$(".AI").find("video")[0].pause();
   	$(".AI").find(".content1").attr("id","animation4Back");
    
});

$(".AI").bind("hover",function(){
  
    $("#us").animate({
		width:'630px',
		height:"50px",
		opacity:1

	},1000);
	$("#hr").animate({
		opacity:1
	},1000);
	$("#title3").animate({
		opacity:1,
		width:'640px',
		height:'90px'
	},3000);


})
$(".fp-controlArrow").bind("click",function(){
   $("#us").animate({
		width:'0px',
		height:"10px",
		opacity:0

	},10);
	$("#hr").animate({
		opacity:0
	},10);
	$("#title3").animate({
		opacity:0,
		width:'0px',
		height:'0px'
	},10);


})
 
	//第四屏
	$("#go").click(function(){
		$(".content1").fadeOut();
		$(".content2").fadeIn();
	})
	$("#launch").click(function(){
		$(".content3").animate({
			top:0
		},1000)
		$(".content3").find('video')[0].play();
	     $(".content3").find('video')[0].volume=0.1;
	     $(".content3").find('video')[0].loop=false;
         
	     
	})
	$(".content3").click(function(){
		$(this).animate({
			top:800+'px'
		},1000);
	  $(".content3").find('video')[0].pause();
	})
	$(".fp-controlArrow").bind("click",function(){
		$(".content1").fadeIn();
		$(".content2").fadeOut();
	})
	//第五屏
		function DivFlying() {
	 var stroke0 = $(".medical").find(".stroke0")[0];		
  var stroke1 = $(".medical").find(".stroke1")[0];
  var  stroke2=$(".medical").find(".stroke2")[0];
  var   stroke=$(".medical").find(".stroke")[0];
  var   title1=$(".medical").find(".title1")[0];
  var    title2=$(".medical").find(".title2")[0];
  var    title3=$(".medical").find(".title3")[0];
   var    line=$(".medical").find(".line")[0];
  var intX = window.event.clientX;
  var intY = window.event.clientY;
  stroke.style.left = intX + 'px';
  stroke.style.top = intY + 'px';
  stroke1.style.left = intX + 'px';
  stroke1.style.top = intY + 'px';
  stroke2.style.left = intX + 'px';
  stroke2.style.top = intY + 'px';
   stroke0.style.left = intX + 'px';
  stroke0.style.top = intY + 'px';
   title1.style.left = intX + 'px';
    title1.style.top = intY + 'px';
    title2.style.left = intX + 'px';
    title2.style.top = intY + 'px';
    title3.style.left = intX + 'px';
    title3.style.top = intY + 'px';
      line.style.left = intX + 'px';
    line.style.top = intY + 'px';
}
   document.onmousemove = DivFlying;

     $("#stroke").bind("click",function(){

	$(".medical").find(".container").attr("id","animation4");
	$(".medical").find(".back").css("display","block");
    $(".medical").find("video")[0].play();
     $(".medical").find("video")[0].volume=0.1;
      $(".medical").find("video")[0].loop=false;
})
   $(".medical").find(".back").click(function(){
   	$(".medical").find("video")[0].pause();
   	$(".medical").find(".container").attr("id","animation4Back");
})
    //第六屏
    $("#adisseo").bind("click",function(){
    	$("#content").find(".content1").animate({
    		bottom:-110+'%'
    	},"slow");

    	$("#content").animate({
    		bottom:-10+'%'
    	},"slow");
    	$("#secondcontent").animate({
    		bottom:35+'%',
    	},"slow");
    	
    	$("#content").find(".agriculturelaunch").animate({
    		bottom:82+'%'
    	},"slow");
    		$("#content").find(".separation2").fadeIn();

    });
    
      $(".agriculturelaunch").bind("click",function(){
            
    	 $(".agriculture").find("#content").attr("class","move");
    	  $(".agriculture").find('.video').css("display","block");
    	  $(".agriculture").find('video')[0].play();
    	   $(".agriculture").find('video')[0].volume=0.1;
    	   $(".agriculture").find('video')[0].loop=false;
    });
       $(".agriculture").find('.video').click(function(){
       	 $(".agriculture").find('video')[0].pause();
       	 $(".agriculture").find("#content").attr("class","back");
       });

       $(".fp-controlArrow").bind("click",function(){

         $("#content").find(".content1").animate({
    		bottom:30+'%'
    	},"slow");

    	$("#content").animate({
    		bottom:0+'%'
    	},"slow");
      
    	$("#secondcontent").animate({
    		bottom:135+'%',
    	},"slow");

    	$("#content").find(".agriculturelaunch").animate({
    		bottom:100+'%'
    	},"slow");
		$("#content").find(".separation2").fadeOut();
    	
	});



   //第七屏
    $("#photo").css("display","block");

	var div1=$(".try").find(".content2").find('div');
	   
      div1.mouseenter(function(){
      	$(this).animate({opacity:0},1000);
      });
      div1.mouseleave(function(){
      	$(this).animate({opacity:1},1000);
      });
      
 
     $("#photo").bind("mousemove",function(){

          $("#mp4").css("display","block");
       
         
     	 $("#mp4").find("video")[0].play();
     	 $(".try").find('video')[0].loop=true;
     	  
     })
    
   $("#photo").bind("click",function(){
   	   
    
        $("#photo").fadeOut();
      
         $("#mp4").fadeIn();
       

         
   });

   $("#mp4").bind("click",function(){
   	       
   	        $("#photo").fadeIn();
   	         $("#mp4").fadeOut();
   		 $("#mp4").find("video")[0].pause();
        
   });

 

       $(".fp-controlArrow").bind("click",function(){

           $("#photo").fadeIn();
           $("#mp4").fadeOut();
           $("#mp4").css("display","none");
        	 $("#photo").css("display","block");
      
       

   })
       
     

   })

  

		
