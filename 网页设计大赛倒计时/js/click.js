window.onload=function(){
    //计时器
   
   function count(){
        var sign = 0; //记录播放状态
        document.getElementsByClassName("load1")[0].style.animationPlayState="running";
             document.getElementsByClassName("load2")[0].style.animationPlayState="running";
             document.getElementsByClassName("load3")[0].style.animationPlayState="running";
             document.getElementsByClassName("load4")[0].style.animationPlayState="running";
             document.getElementsByClassName("load5")[0].style.animationPlayState="running";
             document.getElementById("load1").style.animationPlayState="running";

             document.getElementById("load2").style.animationPlayState="running";
             document.getElementById("load3").style.animationPlayState="running";
             document.getElementById("load4").style.animationPlayState="running";
             document.getElementById("load5").style.animationPlayState="running";
    	var index = setInterval(function(){
    	    var content = document.getElementsByClassName("content");
            var min =  Number(content[0].innerHTML);
            var sec =  Number(content[1].innerHTML);
            console.log(min);
            console.log(sec);
             if(sec == 0){
             	 sec = 59;
             	 min = min -1;
             }else{
             	 sec = sec -1;
             }
             if(sec == 0){
                document.getElementsByClassName("content")[1].innerHTML = '00';
             }else if(sec == 10 && sign == 0 && min == 0){
                //播放音频

                var embed = document.createElement("embed");
                embed.style.visibility = "hidden";
                embed.src="./3462.wav";
                embed.style.loop = "true";
                document.body.appendChild(embed);
                sign = 1;
             }else{
             	if(sec < 10){
             		document.getElementsByClassName("content")[1].innerHTML = '0'+sec;
             	}else{
                  document.getElementsByClassName("content")[1].innerHTML = sec;  document.getElementsByClassName("content")[1].innerHTML = sec;
                }
             	
             }
            document.getElementsByClassName("content")[0].innerHTML = '0' + min;
           if(min == 0 && sec == 0){
    		 clearInterval(index);
             document.getElementsByClassName("load1")[0].style.animationPlayState="paused";
             document.getElementsByClassName("load2")[0].style.animationPlayState="paused";
             document.getElementsByClassName("load3")[0].style.animationPlayState="paused";
             document.getElementsByClassName("load4")[0].style.animationPlayState="paused";
             document.getElementsByClassName("load5")[0].style.animationPlayState="paused";
             document.getElementById("load1").style.animationPlayState="paused";

             document.getElementById("load2").style.animationPlayState="paused";
             document.getElementById("load3").style.animationPlayState="paused";
             document.getElementById("load4").style.animationPlayState="paused";
             document.getElementById("load5").style.animationPlayState="paused";

            // $("embed").pause();
         //   document.body.removeChild("embed");
    	   }
           document.getElementsByClassName("pause")[0].onclick=function(){
             document.getElementsByClassName("load1")[0].style.animationPlayState="paused";
             document.getElementsByClassName("load2")[0].style.animationPlayState="paused";
             document.getElementsByClassName("load3")[0].style.animationPlayState="paused";
             document.getElementsByClassName("load4")[0].style.animationPlayState="paused";
             document.getElementsByClassName("load5")[0].style.animationPlayState="paused";
             document.getElementById("load1").style.animationPlayState="paused";

             document.getElementById("load2").style.animationPlayState="paused";
             document.getElementById("load3").style.animationPlayState="paused";
             document.getElementById("load4").style.animationPlayState="paused";
             document.getElementById("load5").style.animationPlayState="paused";
             clearInterval(index);
           }
    	},1000);

    }
    $(".start").click(function(){
        count();;
    })
}