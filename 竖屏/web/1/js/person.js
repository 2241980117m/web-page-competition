 window.onload=function(){
 	//alert('a');
 	var flag=0;
 	var anim=setInterval(function(){
 		var oAnimImg=document.getElementById('animImg');
		// for(var i=0;i<5;i++){
		var oImg=document.createElement('img');
		oAnimImg.appendChild(oImg);
		oImg.src='../image/51.gif';
		oImg.className='animimg';
	// }
	// if(document.getElementsByClassName('animimg').length==6){
	// 	flag=0;
	// }
	flag++;
	//alert(flag);
	if(flag==5){
		
		for(var i=flag-1;i>0;i--){

			oAnimImg.removeChild(oAnimImg.childNodes[i]);
			//alert(oAnimImg.childNodes[i]);
		}
		flag=0;
		 clearInterval(anim);
	}
 	},1500);
	
}