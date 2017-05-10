window.onload=function() {
	//var oDiv=document.querySelector('#welcomeWrap');
	var oShowW=document.getElementsByClassName('moveWord')[0];//Egypt
	var word='E  g  y  p  t ';
	var i=0;
	//world='';
	//alert(world[0]);
	var showWord=setInterval(function(){
		
		oShowW.innerHTML+=word[i];
		i++;
		if(i>word.length-1){
			oShowW.innerHTML='';
			i=0;
		}
		oShowW.style.color='#'+cColor();
		//alert(cColor())；
	},300);
	//设置字体颜色随机
	function cColor(){
		var color='abcdef1234567890';
		var value='';
		for(var i=0;i<6;i++){
			var j=Math.floor((Math.random()*16));
			value+=color[j];
		}
		return value;
	}

	//cColor();

/*---------------------heart---------------------*/
/*

*/
	var oHeart=document.getElementsByClassName("heart")[0];
	for(var i=0;i<36;i++)
		{
				var oDiv=document.createElement("div");
				oDiv.className='rib';
				oHeart.appendChild(oDiv);
				oDiv.style.transform="rotateY("+i*10+"deg) rotateZ(45deg) translateX(30px)";
				oDiv.style.webkitTransform="rotateY("+i*10+"deg) rotateZ(45deg) translateX(30px)";
				oDiv.style.mozTransform="rotateY("+i*10+"deg) rotateZ(45deg) translateX(30px)";
				oHeart.appendChild(oDiv);
		}
/*----------------产生掉落的心形-----------------*/
var flag=0;
	//function makeFallHeart(){
	var falldown=setInterval(function(){
		var oWrap=document.getElementById('wrap');
		var oFHWrap=document.createElement('div');
		oWrap.appendChild(oFHWrap);
		oFHWrap.className='fallheartWrap';
		//oFHWrap.style.marginTop=(Math.random()*(oWrap.offsetWidth)+1)+'px';
		//alert(oFHWrap.offsetTop);
		oFHWrap.style.marginLeft=(Math.random()*(oWrap.offsetWidth)-50)+'px';
		//for(var i=0;i<2;i++){
		var oH1=document.createElement('div');
		oFHWrap.appendChild(oH1);
		var oH2=document.createElement('div');
		oFHWrap.appendChild(oH2);
		oH1.className='leftHeart';
		oH2.className='rightHeart';
		flag++;
		//alert('a');

		//}
		//alert(flag);
	//=setInterval(makeFallHeart,2000);
			if(flag==9){
				//alert(flag);
				clearInterval(falldown);
			}
		},2000);
	 var k=0;
	 var num=2*k;
	 var nextNum=2*k+1;
	 var limitCircle=0;
	 var oLoadToWrap=document.getElementById('loadToWrap');
	setInterval(function(){
			var oCircles=document.createElement('p');
			oLoadToWrap.appendChild(oCircles);
			oCircles.className='loadTo';
			//alert(k);
			//alert(document.getElementsByClassName('loadTo').length);
			if(k%2==0){
				//alert(k);
				var t=parseInt(oCircles.offsetTop);//style.marginTop
				//alert(parseInt(oCircles.offsetTop));
				t+=5;
				oCircles.style.marginTop=t+'px';
			}
			//document.getElementsByClassName('loadTo')[5].style.offsetTop=5
			else {
				var l=parseInt(oCircles.offsetTop);//
				l-=5;
				oCircles.style.marginTop=l+'px';
			}
			if(k==6){
				for(var i=0;i<document.getElementsByClassName('loadTo').length;i++){
				document.getElementsByClassName('loadTo')[i].style.marginTop=20+'px';
				k=0;
			}}

			oCircles.style.backgroundColor='#'+cColor();
			limitCircle++;
			k++;
			if(limitCircle==6){
				for(var i=5;i>0;i--){
					//alert(i);
					oLoadToWrap.removeChild(document.getElementsByClassName('loadTo')[i]);
				}
				oLoadToWrap.removeChild(document.getElementsByClassName('loadTo')[0]);
				limitCircle=0;
			}
	},500);
	//设置盒子随鼠标倾斜
	var oDiv=document.getElementById('welcomeWrap');
	oDiv.onmousemove=function(e){
		var e=e||window.event;
		var numX,numY,numx,numy,orignX,orignY;
		// console.log(e.pageX+''+e.pageY);
		// console.log();
		if(parseInt(e.pageX)<500 && parseInt(e.pageY)<120){  //1
			// alert('h');
			numX=Math.random()*5; //20
			numY=-Math.random()*10;//10
			 numx=Math.random()*40; 
			numy=Math.random()*40;
			// orignX=10;
			// orignY=10;
			oDiv.style.transformOrigin="120px 150px";
		};

		if(parseInt(e.pageX)>500 && parseInt(e.pageY)<120){  //2
			// alert('h');
			numX=Math.random()*5; //10
			numY=Math.random()*5;//10
			 numx=-Math.random()*20; 
			numy=Math.random()*20;
			// orignX=70;
			// orignY=20;
			oDiv.style.transformOrigin="870px 170px";
		};
		if(parseInt(e.pageX)<500 && parseInt(e.pageY)>120){  //3
			// alert('h');
			numX=-Math.random()*5; //10
			numY=-Math.random()*5;//10
			 numx=Math.random()*40; 
			numy=-Math.random()*15;
			// orignX=10;
			// orignY=70;
			oDiv.style.transformOrigin="120px 400px";
		};
		if(parseInt(e.pageX)>500 && parseInt(e.pageY)>120){//4
			// alert('h');
			numX=-Math.random()*5; //10
			numY=Math.random()*5;//10
			 numx=-Math.random()*50; 
			numy=-Math.random()*15;
			// orignX=70;
			// orignY=70;
			oDiv.style.transformOrigin="860px 420px";
		};
		oDiv.style.transform="translate3d("+numx+"px, "+numy+"px, 0px)"
		oDiv.style.transition="all 0.3s 0s";
		oDiv.style.transform='rotateY'+'('+numY+'deg'+')'+'rotateX'+'('+numX+'deg'+')';
		// oDiv.style.transformOrigin=orignX+'%'+' '+orignX+'%';
		// alert(orignX+'%'+' '+orignX+'%');
	}
	oDiv.onmouseout=function(e){
		var e=e||window.event;
		// alert('exit');
		// if(parseInt(e.pageX)>890||parseInt(e.pageX<85) && parseInt(e.pageY)>440||parseInt(e.pageY<135)){
			// alert(oDiv.style.transform);
			oDiv.style.transform="rotateX(0deg) rotateY(0deg)";
			oDiv.style.transform="translate3d(0px, 0px, 0px)";
		// }
	}
	function addevent(element,type,handler){
				return   element.addEventListener?element.addEventListener(type,handler,false):element.attachEvent('on'+type,handler);
	}
	//点击登录，或注册
	addevent(oLoadToWrap,'click',function(){
		var oLogInBox=document.getElementById('logInBox');
		oLogInBox.style.display="block";
		oDiv.style.display="none";
	});
	var oChoiceSpan=document.getElementsByClassName('choiceSpan');
	var oInput=document.getElementsByTagName('input');
	//点击登录，核对账号密码然后登陆
	(function(){
		addevent(oChoiceSpan[0],'click',function(){
			// alert('a');
			
			if((oInput[0].value=='02155017')&&(oInput[1].value=="155017")){
				window.location='1.html';
			}
		});
	})();
	//为注册页面切换图片
	var oChoiceSpan=document.getElementsByClassName('choiceSpan');
	var oHideLi=document.getElementsByClassName('hideLi')[0];
	var flag;
	// var oInput
	//登录按钮事件
	addevent(oChoiceSpan[0],'click',function(){
		
		var oBgimg=document.getElementById('logIn');
		// alert('b');
		oBgimg.style.backgroundImage='url'+'('+'../image/3.png'+')';
		oBgimg.style.backgroundSize="70% 70%";
		oChoiceSpan[0].style.backgroundColor=' rgba(255,239,213,0.9)';
		oHideLi.style.display="none";
		for(var i=0;i<3;i++){
			oInput[i].style.color="cornsilk;";
		}
	});
	addevent(oChoiceSpan[0],'mouseover',function(){
		oChoiceSpan[0].style.backgroundColor=' rgba(255,239,213,0.9)';
	});
	addevent(oChoiceSpan[0],'mouseout',function(){
		oChoiceSpan[0].style.backgroundColor=' rgba(255,239,213,0.4)';
	});
  //注册按钮事件
	addevent(oChoiceSpan[1],'click',function(){
		
		var oBgimg=document.getElementById('logIn');
		
		// alert('a');
		oBgimg.style.backgroundImage='url'+'('+'../image/16.png'+')';
		oBgimg.style.backgroundSize="180% 180%";
		oHideLi.style.display="block";
		for(var i=0;i<3;i++){
			oInput[i].style.color="hotpink";
		}
		
	});
	addevent(oChoiceSpan[1],'mouseover',function(){
		oChoiceSpan[1].style.backgroundColor=' rgba(255,239,213,0.9)';
	});
	addevent(oChoiceSpan[1],'mouseout',function(){
		oChoiceSpan[1].style.backgroundColor=' rgba(255,239,213,0.4)';
	});
	//确认按钮事件
	addevent(oChoiceSpan[2],'click',function(){
		var filter=/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
			var mail=oInput[0].value;
			var flag;
			var pwdText=document.getElementById('pwdText');
			var rePwdText=document.getElementById('rePwdText');
			var btnType;
			var bol;
			var types;
		function testAll(){
			if(oHideLi.style.display=='block'){
					btnType=1;//注册之后确认
				}
			else btnType=0;
			//alert(btnType);
    		switch(btnType){
    			case 0:{
    			 //判断所有空格是否都已填写
    			 // alert(document.getElementsByTagName('input')[1].value=='');
    							if((oInput[0].value!='')&&(oInput[1].value!='')){
    										types=1;
    									}
    									else {
    										alert('请填写全部内容');
    										types=0;
    										// return false;
    									}
    								
    			// alert('types1='+types);
    			//
    			if(types==1){
    				if (filter.test(oInput[0].value)){
    				types=1;
    				// return true;
    				}	
    				else{
						alert('您的电子邮件格式不正确');
						types=0;
 										// return false;
					}
    			}
    			if(types==1){
    					if((oInput[1].value.length)>=6&&(oInput[1].value.length)<=12){	
							// return true;
							types=1;
					}
					else{
							alert('请输入6到12位密码');
    						oInput[1].focus();
    						types=0;
					}
    			}
					break;

    			}
    			case 1:{
    				if((oInput[0].value!='')&&(oInput[1].value!='')){
    										types=1;
    									}
    									else {
    										alert('请填写全部内容');
    										types=0;
    									}

    				if(types==1){
    					if (filter.test(oInput[0].value)){
    						types=1;
    					}	

    					else{
								alert('您的电子邮件格式不正确');
								types=0;
						}
    				}
    						
				if(types==1){
					if((oInput[1].value.length)>=6&&(oInput[1].value.length)<=12){	
							types=1;}
					else{
							alert('请输入6到12位密码');
    						oInput[1].focus();
    						types=0;}

					}	
    					if(types==1){
    							
    					if(pwdText.value==rePwdText.value){
											types=1;
    								}
    					else{
    							alert('两次密码不一致，请检查');
    							types=0;
    						}
    				}
    			break;
    			}
    		}
	}
			testAll();
			//alert(types);
		if(types==1){
    		// alert('succeed');
    		
    		if(confirm('确认提交吗？')){
    			window.location='1.html';
    		}
    	}
	});
addevent(oChoiceSpan[3],'click',function(){
var oLogInBox=document.getElementById('logInBox');
		oLogInBox.style.display="none";
		oDiv.style.display="block";
});
}

