window.onload=function(){


	var imgLis=document.getElementsByClassName("imgLi");
	//var oShowBook=document.getElementsByClassName("showBook");
	var oGuidLi=document.getElementsByClassName('showBook');//获取导航所有内容
	var oToExit=document.getElementsByClassName('toExit');//
	var oBook=document.getElementsByClassName('book')[0];  //获取书
	var oBookFront=document.getElementsByClassName('book-page-1')[0];//.getElementsByTagName('p')[0];获取首页内容
	var oBookTwo=document.getElementsByClassName('book-page-2')[0];
	var oBookThree=document.getElementsByClassName('book-page-3')[0];
	var oBookFive=document.getElementsByClassName('book-page-5')[0];
	var oBookSix=document.getElementsByClassName('book-page-6')[0];

	var oBookFrontP=document.getElementsByClassName('con1')[0];//.getElementsByTagName('p')[0];获取首页内容
	var oBookTwoP=document.getElementsByClassName('con2')[0];
	var oBookThreeP=document.getElementsByClassName('con3')[0];
	var oBookFourP=document.getElementsByClassName('con4')[0];  //正文第三页p
	var oBookFiveP=document.getElementsByClassName('con5')[0];
	var oBookSixP=document.getElementsByClassName('con6')[0];

	var oToKnow=document.getElementsByClassName('oToKnowMore')[0];
		 		var oToKnowUl=document.getElementsByClassName('oToKnowUl')[0];
	var oLeftLine=document.getElementsByClassName('leftline');
	var num;
	var oOutWrap=document.getElementById('outWrap'); 
	var toBlack=document.getElementById('wrap').children; 
	var oUl=document.getElementsByTagName('ul');
	function SiteOn(){}
    SiteOn.prototype={
       	 init:function(){
            this.picLunbo();
            //this.flipBook();
            this.clickLi();
           this.toHtml();
           // this.moveEvent();
        	},
        toHtml:function(){
        	var oLi=document.getElementById('move').getElementsByTagName('li');
        	this.addevent(oLi[0],'click',function(){
        		window.location.href='../html/history.html';
        		
        	});
        	this.addevent(oLi[1],'click',function(){
        		window.location.href='../html/xingzheng.html';
        	});
        	this.addevent(oLi[2],'click',function(){
        		// oLi[2].style.transform="rotateY(30deg)";
        		window.location.href='../html/person.html';
        	});

        },
        picLunbo:function(){
           	//var imgLis=document.getElementsByClassName("imgLi");
			var j=0;
			var i;
			var flag=0
			setInterval(function(){
				if(flag>=0){//&&j>0&&j<=imgLis.length
					imgLis[5].style.display="none";
				}
				if(j>0&&j<=imgLis.length){
					imgLis[j-1].style.display="none";
				}
				if(j<imgLis.length){
					imgLis[j].style.display="block";
					j=j+1;
					i=j;

 					if(i==6){
 						flag+=1;
						j=0;
					}
				}
			},1200);

		 },
		 /*
*-------------------1.先隐藏书,当点击任意一个想要浏览的内容时出现书     #########
*-------------------2.书出现后，点击首页，进入第一页，点击第一页进入第二页，以此类推    ######
*---------------------------1.问题：
*---------------------------------点击第一次动画执行，点击第二次及以后，鼠标没有点击但是动画zhixing#####
*------------------------------------解决：添加动画前先删除#####
*-------------------3.选择要查看的项目时 改变相应内容  ####
*-------------------改进：
							1.书面翻过去后 文字改变  
		 	*/
		 clickLi:function(){
		 	//点击出现书
		 	this.addevent(oGuidLi[0],'click',this.flipBook.bind(this));
		 	this.addevent(oGuidLi[1],'click',this.flipBook.bind(this));
		 	this.addevent(oGuidLi[2],'click',this.flipBook.bind(this));
		 	this.addevent(oGuidLi[3],'click',this.flipBook.bind(this));
		 	this.addevent(oGuidLi[4],'click',this.flipBook.bind(this));
		 	this.addevent(oGuidLi[5],'click',this.flipBook.bind(this));
		 	this.addevent(oGuidLi[6],'click',this.flipBook.bind(this));
		 	this.addevent(oGuidLi[7],'click',this.flipBook.bind(this));


		 	this.addevent(oToExit[0],'click',this.fnExit.bind(this));   //点击书右下角退出浏览。隐藏书
		 	this.addevent(oToExit[1],'click',this.fnExit.bind(this));
		 	this.addevent(oToExit[2],'click',this.fnExit.bind(this));
		 	this.addevent(oToExit[3],'click',this.fnExit.bind(this));
		 },
		
		 fnExit:function(){
		 	
		 	oBook.style.display='none';
		 	oOutWrap.style.backgroundColor='wheat';
		 	oOutWrap.style.backgroundImage="url(../image/4.jpg)";
		 	toBlack[0].style.display='block';
		 	toBlack[1].style.display='block';
		 	toBlack[2].style.display='block';
		 	oUl[0].style.display='block';
		 	document.getElementById('wrap').style.boxShadow='0 0 5px 1px rgba(255,204,153,0.6)';
		 },
		
		 flipBook:function(e){
		 	oBookFront.style.display='block';
		 	var oBook=document.getElementsByClassName('book')[0];  //获取书
		 	var e = e || window.event;
        	var target = e.target || e.srcElement;
		 	//alert(target.innerHTML);   //###
		 	var a=target.innerHTML;
		 	//alert(a);
		 	oOutWrap.style.backgroundColor='black';
		 	oOutWrap.style.backgroundImage='none';
		 	toBlack[0].style.display='none';
		 	toBlack[1].style.display='none';
		 	toBlack[2].style.display='none';
		 	oUl[0].style.display='none';
		 	document.getElementById('wrap').style.boxShadow='0 0 1px 1px black';
		 	switch (a){
		 		case '地理环境':{
		 							 // console.log(target.innerHTML);
		 							this.showContent('1');
		 							// test('0');
		 							break;
		 						}
		 		case '国家象征':{
		 							// console.log(target.innerHTML);
		 							this.showContent('2');
		 							break;
		 						}
		 		case '政    治':{
		 							// console.log(target.innerHTML);
		 							this.showContent('3');
		 							break;
		 						}
		 		case '军    事':{
		 							// console.log(target.innerHTML);
		 							this.showContent('4');
		 							break;}
		 		case '经    济':{
		 			// console.log(target.innerHTML);
		 							this.showContent('5');
		 							break;}
		 		case '外    交':{
		 			// console.log(target.innerHTML);
		 							this.showContent('6');
		 							break;}
		 		case '文    化':{
		 			// console.log(target.innerHTML);
		 							this.showContent('7');
		 							break;}
		 		case '旅    游':{	
		 			// console.log(target.innerHTML);
		 							this.showContent('8');
		 							break;
		 						}
		 	}
		 	var oBookPageBox=document.getElementsByClassName('book-page-box');
		 		for(var i=0;i<oBookPageBox.length;i++){
		 		
		 		oBookPageBox[i].style.animationName=null;
				oBookPageBox[i].style.webkitAnimationName=null;
				oBookPageBox[i].style.animationDuration=null; //Internet Explorer 10、Firefox 以及 Opera    //Internet Explorer 9 以及更早的版本不支持 animation-duration 属性。
				oBookPageBox[i].style.webkitAnimationDuration=null;   //Safari 和 Chrome 
				oBookPageBox[i].style.animationFillMode=null;
				oBookPageBox[i].style.webkitAnimationFillMode=null;  //使动画保持最后一个属性
				//alert('a');
		 		}
		 		
		 	oBook.style.display='block';
		 	//alert(parseInt(para));
				oBookFront.onclick=function(){  //点击首页，进入第一页
					// console.log('1');
				oBookFront.style.animationName="flipBook1";
				oBookFront.style.webkitAnimationName="flipBook1";
				oBookFront.style.animationDuration="7s"; //Internet Explorer 10、Firefox 以及 Opera    //Internet Explorer 9 以及更早的版本不支持 animation-duration 属性。
				oBookFront.style.webkitAnimationDuration="7S";   //Safari 和 Chrome 
				oBookFront.style.animationFillMode="forwards";
				oBookFront.style.webkitAnimationFillMode="forwards";  //使动画保持最后一个属性
				
				setTimeout(function(){

					switch(a){
						case '地理环境':
						case '国家象征':
						case '政    治':
						case '军    事':
						case '经    济':
						case '外    交':
						case '文    化':
						case '旅    游':
										{
											
											oBookFrontP.innerHTML="";
										}
					}
				},2000);
				 }
				oBookTwo.onclick=function(){  //点击第一页，进入第2页
					
				oBookTwoP.style.fontSize=18+"px";	
				// console.log('2');
				//alert('a');
				oBookTwo.style.animationName="flipBook2";
				oBookTwo.style.webkitAnimationName="flipBook2";
				oBookTwo.style.animationDuration="7s"; //Internet Explorer 10、Firefox 以及 Opera    //Internet Explorer 9 以及更早的版本不支持 animation-duration 属性。
				oBookTwo.style.webkitAnimationDuration="7S";   //Safari 和 Chrome 
				oBookTwo.style.animationFillMode="forwards";
				oBookTwo.style.webkitAnimationFillMode="forwards";  //使动画保持最后一个属性
				setTimeout(function(){
					
					oBookTwoP.innerHTML='';
				},2000);
				
				}
				oBookThree.onclick=function(){  //点击第2页，进入第3页
				// console.log('3');
				//alert('a');
				oBookThreeP.style.fontSize=18+"px";
				oBookThree.style.animationName="flipBook3";
				oBookThree.style.webkitAnimationName="flipBook3";
				oBookThree.style.animationDuration="7s"; //Internet Explorer 10、Firefox 以及 Opera    //Internet Explorer 9 以及更早的版本不支持 animation-duration 属性。
				oBookThree.style.webkitAnimationDuration="7S";   //Safari 和 Chrome 
				oBookThree.style.animationFillMode="forwards";
				oBookThree.style.webkitAnimationFillMode="forwards";  //使动画保持最后一个属性
				setTimeout(function(){
					
					oBookThreeP.innerHTML='';
				},2000);
				
				}
				
				oBookFive.onclick=function(){  //点击第4页，进入第5页
				// console.log('5');
				//alert('a');
				oBookFiveP.style.fontSize=18+"px";
				oBookFive.style.animationName="flipBook5";
				oBookFive.style.webkitAnimationName="flipBook5";
				oBookFive.style.animationDuration="7s"; //Internet Explorer 10、Firefox 以及 Opera    //Internet Explorer 9 以及更早的版本不支持 animation-duration 属性。
				oBookFive.style.webkitAnimationDuration="7S";   //Safari 和 Chrome 
				oBookFive.style.animationFillMode="forwards";
				oBookFive.style.webkitAnimationFillMode="forwards";  //使动画保持最后一个属性
				setTimeout(function(){
					
					oBookFiveP.innerHTML='';
				},2000);
			
				}
				oBookSix.onclick=function(){
				oBook.style.display="none";
				oOutWrap.style.backgroundColor='';
		 		oOutWrap.style.backgroundImage="url(../image/4.jpg)";
		 		toBlack[0].style.display='block';
		 		toBlack[1].style.display='block';
		 		toBlack[2].style.display='block';
		 		oUl[0].style.display='block';
		 		document.getElementById('wrap').style.boxShadow='0 0 5px 1px rgba(255,204,153,0.6)';
		 	
				}

		 },
		 addevent:function(element,type,handler){
				return   element.addEventListener?element.addEventListener(type,handler,false):element.attachEvent('on'+type,handler);
			},
		 showContent:function(para){

		 	//先添加一个容纳文字的div
		 	function addDiv(obj,cname){
		 		var div=document.createElement('div');
		 		obj.appendChild(div);
		 		div.className=cname;
		 		return div;
		 	}
		 	function deleDiv(node){
		 		node.innerHTML='';
		 	}
		 	var pa=parseInt(para);
		 	//alert(pa);
		 	switch(pa){
		 		case 1:{
		 			//alert(oBookFrontP.children.length);
		 			deleDiv(oBookFrontP);
					deleDiv(oBookTwoP);
					deleDiv(oBookThreeP);
					//deleDiv(oBookFourP);
					deleDiv(oBookFiveP);
					deleDiv(oBookSixP);
		 			
		 			var div1=addDiv(oBookFrontP,'bookHeader');
		 			// div1.innerHTML='';
		 			div1.innerHTML='地理位置';
		 			//alert('a');

		 			var div21=addDiv(oBookTwoP,'pageHeader');
		 			// div21.innerHTML='';
		 			div21.innerHTML='位置';
		 			var div2=addDiv(oBookTwoP,'cBox');
		 			// div2.innerHTML='';
		 			div2.innerHTML='埃及地处欧亚非三大洲的交通要冲，北部经埃及行政区划埃及行政区划地中海与欧洲相通'+
		 							'东部经阿里什直通巴勒斯坦。西连利比亚，南接苏丹，东临红海并与巴勒斯坦接壤，东南与约旦、'+
		 							'沙特阿拉伯相望，海岸线长2700多千米。苏伊士运河沟通了大西洋与印度洋，战略位置和经济意义都十分重要。';

					var div31=addDiv(oBookThreeP,'pageHeader');
					// div31.innerHTML='';
		 			div31.innerHTML='地形';
		 			var div3=addDiv(oBookThreeP,'cBox');
		 			// div3.innerHTML='';
		 			div3.innerHTML='跨亚、非两洲,大部分位于非洲东北部.苏伊士运河东的西奈半岛位于亚洲西南角.西连利比亚,南接苏丹,东临红海并与巴勒斯坦接壤,北濒地中海,东南与约旦、沙特阿拉伯相望海岸线长2700多千米.'+
									'全境96%为沙漠.最高峰为凯瑟琳山,海拔2642米,尼罗河流过全境,发达在尼罗河三角洲,全境干燥少雨,尼罗河三角洲和北部沿海地区属亚热带地中海式气候,'+
									'世界第一长河尼罗河从南到北流贯全境，埃及段长1350公里，两岸形成宽约3—16公里的狭长河谷，并在首都开罗以北形成2.4万平方公里的三角洲。'+
									'1月平均气温12℃,7月26℃；';

					var div61=addDiv(oBookSixP,'pageHeader');
					// div61.innerHTML='';
		 			div61.innerHTML='气候';
		 			var div6=addDiv(oBookSixP,'cBox');
		 			// div6.innerHTML='';
		 			div6.innerHTML='全国干燥少雨，气候干热。埃及南部属热带沙漠气候，夏季气温较高，昼夜温差较大。尼罗河三角洲和北部沿海地区，'+
		 							'属亚热带地中海气候，气候相对温和，其余大部地区属热带沙漠气候。白尼罗河发源于南半球的热带草原气候区，'+
		 							'青尼罗河发源于北半球的热带草原气候区，两河汛期不同。1月平均气温12℃，7月26℃；全境干燥少雨，年均降水量50～200毫米。'+
		 							'余大部地区属热带沙漠气候，炎热干燥，气温可达40℃[1]  。每年4～5月间常有“五旬风”，夹带沙石，损坏农作物。';/**/

		 			var div51=addDiv(oBookFiveP,'pageHeader');
		 			// div51.innerHTML='';
		 			div51.innerHTML='资源';
		 			var div5=addDiv(oBookFiveP,'cBox');
		 			// div5.innerHTML='';
		 			div5.innerHTML='主要资源是石油、天然气、磷酸盐、铁等。已探明的储量为：石油44.5亿桶（2013年1月），天然气2.186万亿立方米（2012年1月），'+
		 							'磷酸盐约70亿吨，铁矿6000万吨。此外还有锰、煤、金、锌、铬、银、钼、铜和滑石等。平均原油日产量达71.15万桶，'+
		 							'天然气日产量达1.68亿立方米，国内消耗的天然气数量占天然气总产量的70%，其余30%供出口。[1] ';


		 			break;
		 		}
		 		case 2:{
		 			//alert(oBookTwoP.children.length);//2
		 			deleDiv(oBookFrontP);
					deleDiv(oBookTwoP);
					deleDiv(oBookThreeP);
					//deleDiv(oBookFourP);
					deleDiv(oBookFiveP);
					deleDiv(oBookSixP);

		 			var div1=addDiv(oBookFrontP,'bookHeader');
		 			// div1.innerHTML='';
		 			div1.innerHTML='国家象征';

		 			var div21=addDiv(oBookTwoP,'pageHeader');
		 			// div21.innerHTML='';
		 			div21.innerHTML='国名';
		 			var div2=addDiv(oBookTwoP,'cBox');
		 			// div2.innerHTML='';
		 			div2.innerHTML='通常认为，英语中“埃及”一词是从古希腊语演变而来的。阿拉伯人则将“埃及”称作米斯尔，'+
		 							'在阿拉伯语中意为“辽阔的国家”。埃及又称为金字塔之国，棉花之国。[6] ';

					var div31=addDiv(oBookThreeP,'pageHeader');
						// div31.innerHTML='';
		 			div31.innerHTML='国旗';
		 			var div3=addDiv(oBookThreeP,'cBox');
		 			// div3.innerHTML='';
		 			div3.innerHTML='埃及国旗呈长方形，长与宽之比为3∶2。自上而下由红、白、黑三个平行相等的横长方形组成，白色部分中间有国徽图案。'+
									'红色象征革命，白色象征纯洁和光明前途，黑色象征埃及过去的黑暗岁月。';

					var div61=addDiv(oBookSixP,'pageHeader');
					// div61.innerHTML='';
		 			div61.innerHTML='国徽';
		 			var div6=addDiv(oBookSixP,'cBox');
		 			// div6.innerHTML='';
		 			div6.innerHTML='埃及国徽为一只金色的鹰，称萨拉丁雄鹰。金鹰昂首挺立、舒展双翼，象征胜利、勇敢和忠诚，'+
		 							'它是埃及人民不畏烈日风暴、在高空自由飞翔的化身。'+
		 							'鹰胸前为盾形的红、白、黑三色国旗图案，底部座基饰带上用阿拉伯文写着“阿拉伯埃及共和国”。';

		 			var div51=addDiv(oBookFiveP,'pageHeader');
		 			// div51.innerHTML='';
		 			div51.innerHTML='首都';
		 			var div5=addDiv(oBookFiveP,'cBox');
		 			// div5.innerHTML='';
		 			div5.innerHTML='开罗（Cairo），面积约3085平方公里，人口800万（2012年1月）。'+
		 							'多的城市。夏季平均气温最高34. 2℃，最低20. 8℃；冬季最高19. 9℃，最低9. 7℃。[1] ';

		 		

		 			break;
		 		}
/*--------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/		 		
		 		case 3:{
		 			deleDiv(oBookFrontP);
					deleDiv(oBookTwoP);
					deleDiv(oBookThreeP);
					//deleDiv(oBookFourP);
					deleDiv(oBookFiveP);
					deleDiv(oBookSixP);

		 			var div1=addDiv(oBookFrontP,'bookHeader');
		 			// div1.innerHTML='';
		 			div1.innerHTML='政治';

		 			var div21=addDiv(oBookTwoP,'pageHeader');
		 			// div21.innerHTML='';
		 			div21.innerHTML='宪法';
		 			var div2=addDiv(oBookTwoP,'cBox');
		 			// div2.innerHTML='';
		 			div2.innerHTML='埃及历史上第一部宪法于1971年9月经全民投票通过，1980、2005和2007年三次修'+
		 							'订，2011年穆巴拉克下台后被废止。2012年12月，埃及全民公投以63.8%的支持率通过新宪'+
		 							'法（2012年宪法）。2013年7月3日，埃及军方宣布中止2012年宪法。2014年1月，新宪法'+
		 							'草案以98.1%的支持率通过全民公投。[1] '+
		 							'埃及新宪法草案共有247项条款，分为序言、国家和社会的基本原则、自由、权利和公共义务、政府体制等章节。据“中央社”30日报道，埃及临时总统曼苏尔表示，埃及新宪法定于下个月付诸公投表决，政府保证在新宪法获批准的6个月内举行国会和总统大选。';

					var div31=addDiv(oBookThreeP,'pageHeader');
					// div31.innerHTML='';
		 			div31.innerHTML='议会';
		 			var div3=addDiv(oBookThreeP,'cBox');
		 			// div3.innerHTML='';
		 			div3.innerHTML='埃及人民议会，一院制立法机构。2011年埃及政局动荡后，武装部队最高委员会宣布解散人民议会。2012年1月新一届人'+
									'民议会成立，共508席。6月14日，最高宪法法院裁定人民议会选举法部分条款违宪并予以解散。'+'\<br\>'
									'埃及2012年宪法将人民议会更名为众议院，并规定在众议院选举产生前，由协商会议行'+
									'使立法权。2013年7月初埃及政局再次剧变后，根据2014年1月通过的新宪法，将取消此前'+
									'的协商会议，将“两院制”改为“一院制”，统称议会，设有596个席位，其中448个席位归属不'+
									'隶属于任何政党的独立议员，120个席位归属党派议员，28个席位的议员由总统直接任命。'+
									'埃及议会选举于2015年10月、11月分两阶段进行。2016年1月，埃及新议会第一次全体会议在埃及议会大厦举行。现任议长阿里·阿卜杜勒阿勒。[1] ';

				
		 			var div51=addDiv(oBookFiveP,'pageHeader');
		 			// div51.innerHTML='';
		 			div51.innerHTML='政要';
		 			var div5=addDiv(oBookFiveP,'cBox');
		 			// div5.innerHTML='';
		 			div5.innerHTML='总统阿卜杜勒·法塔赫·塞西，全名阿卜杜勒－法塔赫·赛义德·侯赛因·哈利勒·塞西，1954年11月出生，1969年开始在埃及陆军步兵部队服役，曾先后在埃及、英国和美国的军事院校学习。2008年，塞西升任埃及北方军区司令。'+
		 							'2008年，塞西升任埃及北方军区司令。2011年，穆巴拉克政权被推翻后，塞西被任命为军事情报局局长，并成为暂时执掌国家政权的武装部队最高委员会成员。2012年8月，塞西被时任总统穆尔西任命为国防部长兼武装部队最高委员会主席。'+
		 							'2013年7月，塞西宣布解除穆尔西的总统职务并公布过渡时期路线图。塞西在过渡政府中担任国防部长、第一副总理，并继续担任武装部队最高委员会主席。';
		 			var div61=addDiv(oBookSixP,'pageHeader');
		 			// div61.innerHTML='';
		 			div61.innerHTML='在联合国的地位 政党';
		 			var div6=addDiv(oBookSixP,'cBox');
		 			// div6.innerHTML='';
		 			div6.innerHTML='第70届联合国大会15日上午举行全体会议[14]  ，选举2016-2017年度安理会非常任理事国，中国常驻联合国代表刘结一大使出席会议并参加投票。最终，日本、埃及、塞内加尔、乌拉圭和乌克兰五国顺利当选[14]  。1952年革命后，曾禁止政党活动。阿拉伯社会主义联盟于1962年10月成立，为埃及唯一合法政党，纳赛尔任主席。1977年开始实行多党制。2011年颁布新政党法，现有政党及政治组织近百个，其中经国家政党委员会批准成立的政党约60个。'+
		 			'（1）萨拉菲光明党（Al-Nour Party）：2011年6月12日成立。主张以正宗的伊斯兰教义、教规作为基本指南规范国家的政治架构。反对女性参政。主张禁酒，要求女性包头巾。主席尤尼斯·马赫尤恩（Younus Makhyoun）。'+
		 			'（2）新华夫脱党（New Wafd Party）：1978年2月成立，前身是华夫脱党，是穆巴拉克时期主要反对党。要求加快政治、经济和社会改革，保障基本自由和人权，密切同阿拉伯和伊斯兰国家的关系，重点发展与非洲国家关系。主席赛义德·拜达维（Al-Sayyid Al-Badawi）。';
		 			break;
		 		}
		 		case 4:{
		 			deleDiv(oBookFrontP);
					deleDiv(oBookTwoP);
					deleDiv(oBookThreeP);
					//deleDiv(oBookFourP);
					deleDiv(oBookFiveP);
					deleDiv(oBookSixP);

		 			var div1=addDiv(oBookFrontP,'bookHeader');
		 			div1.innerHTML='';
		 			div1.innerHTML='军事';

		 			var div21=addDiv(oBookTwoP,'pageHeader');
		 			div21.innerHTML='';
		 			div21.innerHTML='陆军';
		 			var div2=addDiv(oBookTwoP,'cBox');
		 			div2.innerHTML='';
		 			div2.innerHTML='埃及陆军兵力32万人。编有4个军区、2个军团司令部、4个装甲师、8个机械化步兵师、1个共和国警卫装甲旅、4个独立装甲旅、1个空运旅、2个独立步'+
		 							'坦克：T-54/-55型840辆、“朗塞”-Ⅱ型260辆、T-62型500辆、M-60A1型400辆、M-60A3型1300辆、M1A1型400辆。装甲侦察车：БРДМ-2型300辆、“突击侦察”式112辆。'+
		 							'地地导弹：“蛙”7型12部，“天鹰”80型若干部， “飞毛腿”B型9部。反坦克导弹：“耐火箱”1400具，“米兰”220具， ';

					var div31=addDiv(oBookThreeP,'pageHeader');
					div31.innerHTML='';
		 			div31.innerHTML='海军';
		 			var div3=addDiv(oBookThreeP,'cBox');
		 			div3.innerHTML='';
		 			div3.innerHTML='埃及海军兵力约2万人（包括2000名海岸警卫队）。潜艇：“R”级8艘。驱逐舰：“法塔赫”级1艘。护卫舰：“穆巴拉克”级2艘，“苏伊士”级2艘， “胜利者”级2艘，“达米亚特”（美式“诺克斯”）级2艘。导弹艇：“拉马丹”级6艘，“黄蜂”Ⅰ级5艘，“十月”级6艘，“蚊子”级8艘。'+
									'巡逻艇：18艘。扫雷舰艇：11艘。两栖舰艇：12艘。支援与杂务舰船：10艘。海军航空兵：装备有武装直升机24架，其中“海王”式5架，SA-342型9架，SH-2G型10架。岸防部队：装备有130毫米火炮若干门，“奥托马特”型岸舰导弹若干部。[15]';

					var div51=addDiv(oBookFiveP,'pageHeader');
					div51.innerHTML='';
		 			div51.innerHTML='空军';
		 			var div5=addDiv(oBookFiveP,'cBox');
		 			div5.innerHTML='';
		 			div5.innerHTML='截止2014年，埃及空军兵力规模为5万人（现役人员3万，预备役人员2万），共装备1100架固定翼飞机和290架直升机。空军司令部设在开罗，现任空军司令是尤尼斯·哈迈德中将。'+
		 							'埃及空军的主要作战装备是475架战斗机和100余架武装直升机， '+
		 							'（值得一提的是，埃及是装备F-16战机数量第四多的国家，仅次于美国、以色列和土耳其。 '+
		 							'埃及现在拥有26个军用机场、7个军民两用机场、20处二线机场、1处高速公路机场、4个能起降军用飞机的民用机场。总的来看，埃及空军在战时可以使用的机场数量达到58个。';

		 			
		 			var div61=addDiv(oBookSixP,'pageHeader');
		 			div61.innerHTML='';
		 			var div6=addDiv(oBookSixP,'cBox');
		 			div6.style.backgroundImage="url(../image/40.jpg)";
		 			
		 			 div6.style.backgroundSize='100% 95%';
		 			 div6.style.backgroundRepeat='no-repeat';
    				div6.style.webkitBackgroundOrigin='conten-box';
    				div6.style.backgroundOrigin='conten-box';
		 			
		 			break;
		 		}
		 		case 5:{
		 			deleDiv(oBookFrontP);
					deleDiv(oBookTwoP);
					deleDiv(oBookThreeP);
					//deleDiv(oBookFourP);
					deleDiv(oBookFiveP);
					deleDiv(oBookSixP);

		 			var div1=addDiv(oBookFrontP,'bookHeader');
		 			div1.innerHTML='';
		 			div1.innerHTML='经济';

		 			var div21=addDiv(oBookTwoP,'pageHeader');
		 			div21.innerHTML='';
		 			div21.innerHTML='概况';
		 			var div2=addDiv(oBookTwoP,'cBox');
		 			div2.innerHTML='';
		 			div2.innerHTML='埃及是非洲第三大经济体，属开放型市场经济，拥有相对完整的工业、农业和服务业体系。服务业约占国内生产总值的50%。工业以纺织、食品加工等轻工业为主。农村人口占总人口的55%，农业占国内生产总值的14%。'+
		 							'2011年初以来的埃动荡局势对国民经济造成严重冲击。埃政府采取措施恢复生产，增收节支，吸引外资，改善民生，多方寻求国际支持与援助，以渡过当前经济困难。主要经济数据如下：'+
		 							'国内生产总值(2012年)：2346亿美元经济增长率(2012/2013财年前9个月)：';

					var div31=addDiv(oBookThreeP,'pageHeader');
					div31.innerHTML='';
		 			div31.innerHTML='工业';
		 			var div3=addDiv(oBookThreeP,'cBox');
		 			div3.innerHTML='';
		 			div3.innerHTML='工业以纺织和食品加工等轻工业为主，重工业以石油化工业、机械制造业及汽车工业为主。工业约占国内生产总值的16%，工业产品出口约占商品出口总额的60%，工业从业人员274万人，占全国劳动力总数的14%。埃工业企业过去一直以国营为主体，自20世纪90年代初开始，埃开始积极推行私有化改革，出售企业上百家';

					// var div41=addDiv(oBookFourP,'pageHeader');
		 		// 	div41.innerHTML='农业';
		 		// 	var div4=addDiv(oBookFourP,'cBox');
		 		// 	div4.innerHTML='三分之一以上的职业人口从事农业。全国可耕地面积为310万公顷，约占国土总面积的3.7%[1]  ，绝大部分为灌溉地。耕作集约，年可二熟或三熟，是非洲单位面积产量最高的国家。主产长绒棉和稻米，产量均居非洲首位，玉米、小麦居非洲前列，还产甘蔗、花生等。农业在埃及国民经济中占有重要的地位。农村人口占全国人口的52%。政府极为重视农业发展和扩大耕地面积。主要农作物有棉花、小麦、水稻、高粱、玉米、甘蔗、亚麻、花生、水果、蔬菜等。';

		 			var div51=addDiv(oBookFiveP,'pageHeader');
		 			div51.innerHTML='';
		 			div51.innerHTML='对外贸易';
		 			var div5=addDiv(oBookFiveP,'cBox');
		 			div5.innerHTML='';
		 			div5.innerHTML='埃及同120多个国家和地区有贸易关系，主要贸易伙伴是美国、法国、德国、意大利、英国、日本、沙特、阿联酋等。由于出口商品少，外贸连年逆差。'+
		 							'埃主要进口商品是：机械设备、谷物、电器设备、矿物燃料、塑料及其制品、钢铁及其制品、木及木制品、车辆、动物饲料等。主要出口产品是：矿物燃料(原油及其制品)、棉花、陶瓷、纺织服装、铝及其制品、钢铁、谷物和蔬菜。埃及出口商品主要销往阿拉伯国家。';
		 			var div61=addDiv(oBookSixP,'pageHeader');
		 			div61.innerHTML='';
		 			div61.innerHTML='服务业';
		 			var div6=addDiv(oBookSixP,'cBox');
		 			div6.innerHTML='';
		 			div6.innerHTML='埃及历史悠久，名胜古迹很多，具有发展旅游业的良好条件。政府非常重视发展旅游业。主要旅游景点有金字塔、狮身人面像、卢克索神庙、阿斯旺高坝、沙姆沙伊赫等。2011年埃及动荡局势对旅游业影响较大，赴埃旅游人数、饭店房间价格、旅游投资均明显下降。2012年旅游收入约100亿美元。2012/2013财年第三季度，旅游收入增长18%。';
		 			break;
		 		}
		 		case 6:{
		 			deleDiv(oBookFrontP);
					deleDiv(oBookTwoP);
					deleDiv(oBookThreeP);
					//deleDiv(oBookFourP);
					deleDiv(oBookFiveP);
					deleDiv(oBookSixP);

		 			var div1=addDiv(oBookFrontP,'bookHeader');
		 			div1.innerHTML='';
		 			div1.innerHTML='外交';

		 			var div21=addDiv(oBookTwoP,'pageHeader');
		 			div21.innerHTML='外交政策';
		 			var div2=addDiv(oBookTwoP,'cBox');
		 			div2.innerHTML='埃及奉行独立自主、不结盟政策，主张在相互尊重和不干涉内政的基础上建立国际政治和经济新秩序，加强南北对话和南南合作。突出阿拉伯和伊斯兰属性，积极开展和平外交，致力于加强阿拉伯国家团结合作，推动中东和平进程，关注叙利亚等地区热点问题。反对国际恐怖主义。倡议在中东和非洲地区建立无核武器和大规模杀伤性武器区。重视大国外交，巩固同美国关系，加强同欧盟、俄罗斯等大国关系，积极发展同新兴国家关系。在阿盟、非盟、伊斯兰合作组织等国际组织中较为活跃。截止2014年3月，埃及已与165个国家建立了外交关系[1]  。';

					var div31=addDiv(oBookThreeP,'pageHeader');
		 			div31.innerHTML='对外关系';
		 			var div3=addDiv(oBookThreeP,'cBox');
		 			div3.innerHTML='同中国的关系   ：中埃文教、新闻、科技等领域交流合作活跃。2005年到2012年，双方举办了文化周、电影节、文物展、图片展等丰富多彩的活动，深受两国人民欢迎。截止至2013年，埃及有4所大学开设中文专业。'+
									'同非洲国家关系   ：非洲国家与埃及历史、文化渊源深厚，而且对埃国家安全特别是水资源安全具有战略意义，非洲国家在埃及对外政策中占据突出位置。'+
									'同美国关系  :  2013年1月，美参议院外交委员会主席麦凯恩访埃。'+
									'同欧盟国家关系  :  2013年1月，欧洲理事会主席范龙佩访埃，表示欧盟将向埃及提供50亿欧元的贷款和援助。';

			
		 			var div51=addDiv(oBookFiveP,'pageHeader');
		 			div51.innerHTML="";
		 			var div5=addDiv(oBookFiveP,'cBox');
		 			div5.style.backgroundImage="url(../image/28.jpg)";
		 			 div5.style.backgroundSize='100% 95%';
		 			 div5.style.backgroundRepeat='no-repeat';
    				div5.style.webkitBackgroundOrigin='conten-box';
    				div5.style.backgroundOrigin='conten-box';
		 			
		 			var div61=addDiv(oBookSixP,'pageHeader');
		 			div61.innerHTML='';
		 			var div6=addDiv(oBookSixP,'cBox');
		 			div6.style.backgroundImage="url(../image/40.jpg)";
		 			
		 			 div6.style.backgroundSize='100% 95%';
		 			 div6.style.backgroundRepeat='no-repeat';
    				div6.style.webkitBackgroundOrigin='conten-box';
    				div6.style.backgroundOrigin='conten-box';
		 			break;
		 		}
		 		case 7:{
		 			deleDiv(oBookFrontP);
					deleDiv(oBookTwoP);
					deleDiv(oBookThreeP);
					//deleDiv(oBookFourP);
					deleDiv(oBookFiveP);
					deleDiv(oBookSixP);

		 			var div1=addDiv(oBookFrontP,'bookHeader');
		 			div1.innerHTML='';
		 			div1.innerHTML='文化';

		 			var div21=addDiv(oBookTwoP,'pageHeader');
		 			div21.innerHTML='综述';
		 			var div2=addDiv(oBookTwoP,'cBox');
		 			div2.innerHTML='埃及文化是具有非洲特点的阿拉伯文化，特别是亚历山大城，其次是开罗。其间夹杂着黎凡特文化的特点，即法国、希腊、土耳其和叙利亚文化的混合体。随着7世纪阿拉伯人的入侵，新的统治者和自身文化的保护人将阿拉伯语和伊斯兰教传播开来，其中禁止偶像崇拜，'+
		 			'对大部分埃及人从过去法老和希腊罗马时代的宗教中解脱出来产生重大影响。只有很少过去的传统在科普特教堂中以改良的方式保存下来。埃及城市中，中产阶级的生活状况和生活方式与欧美居民没有太大的区别。以开罗为例，在众多书店、电影院、新歌剧院、文化团体和大学里，'+
		 			'他们有很多机会去分享和体验国际社会的方方面面。';

					var div31=addDiv(oBookThreeP,'pageHeader');
		 			div31.innerHTML='饮食 婚嫁';
		 			var div3=addDiv(oBookThreeP,'cBox');
		 			div3.innerHTML='埃及人喜吃甜食，正式宴会或富有家庭正餐的最后一道菜都是上甜食。著名甜食有“库纳法”和“盖塔伊夫”。“锦葵汤”、“基食颗”是埃及人日常生活中的最佳食品。“盖麦尔丁”是埃及人在斋月里的必备食品。“蚕豆”是必不可少的一种食品。其制造方法多种多样，制成的食品也花样百出。'+
									'每一位埃及成年男子到了婚配年龄，首先要向意中人的父亲提亲或者在母系亲属及邻居中择偶。提亲后，男女双方开始商讨女方的陪嫁数额，一般是男方把陪嫁款项的2/3作为聘礼送给女方。然后，在村长的主持下订立婚约。';

				
		 			var div51=addDiv(oBookFiveP,'pageHeader');
		 			div51.innerHTML='社交 生活水平';
		 			var div5=addDiv(oBookFiveP,'cBox');
		 			div5.innerHTML='埃及人的交往礼仪既有民族传统的习俗，又通行西方人的做法，两者皆有，上层人士更倾向于欧美礼仪。埃及人见面时异常热情。'+
		 							'在埃及，进伊斯兰教清真寺时，务必脱鞋。埃及人爱绿色、红色、橙色，忌蓝色和黄色，认为蓝色是恶魔，黄色是不幸的象征，遇丧事都穿黄衣服。也忌熊猫，因它的形体近似肥猪。'+
		 							'在人民生活方面，埃及政府长期实行家庭补贴制度。另外还对大米、面粉、食油、糖和能源等实行物价补贴,虽然埃及人均生产值不如中国。';
		 			var div61=addDiv(oBookSixP,'pageHeader');
		 			div61.innerHTML='通讯 科学';
		 			var div6=addDiv(oBookSixP,'cBox');
		 			div6.innerHTML='古埃及创造了人类历史上最早的太阳历。早在公元前4000年时，埃及人就已经把1年确定为365天，全年分成12个月，每月30天，余下的5天作为节日之用'+
					'建筑中的天文学: 古埃及建筑与天文学密切相关。著名的金字塔就隐含了许多天文学知识。金字塔的四面正对着东南西北四个方向。'+
					'数学:古埃及人很早就采用了十进制记数法。在现存的莱因特纸草和莫斯科纸草上记载了不少埃及人的数学问题，'+
					'医学:古埃及千年不腐的“木乃伊”闻名于世。'+
					'新世纪以来，埃及大力发展电信和信息产业。';
		 			break;
		 		}
		 		case 8:{
		 			deleDiv(oBookFrontP);
					deleDiv(oBookTwoP);
					deleDiv(oBookThreeP);
					//deleDiv(oBookFourP);
					deleDiv(oBookFiveP);
					deleDiv(oBookSixP);

		 			var div1=addDiv(oBookFrontP,'bookHeader');
		 			div1.innerHTML='';
		 			div1.innerHTML='旅游';

		 			var div21=addDiv(oBookTwoP,'pageHeader');
		 			div21.innerHTML='国家博物馆 金字塔 左塞尔陵墓';
		 			var div2=addDiv(oBookTwoP,'cBox');
		 			div2.innerHTML='国家博物馆埃及博物馆坐落在开罗市中心的解放广场，1902年建成开馆，是世界上最著名、规模最大的古埃及文物博物馆。'+
		 							'金字塔埃及共发现金字塔96座，最大的是开罗郊区吉萨的三座金字塔。金字塔胡夫金字塔胡夫金字塔是古埃及法老为自己修建的陵墓。大金字塔是第四王朝第二个国王胡夫的陵墓，建于公元前2690年左右，原高146.5米 '+
		 							'萨卡拉金字塔位于开罗南郊30公里，尼罗河西河谷绿洲边缘外的沙漠上，由多个金字塔组成。其中最著名的是阶梯金字塔，为古埃及第三王朝国王左塞尔的陵墓，约建于公元前2700年。该金字塔是埃及现有金字塔中年代最早的，也是世界上最早用石块修建的陵墓。该金字塔呈6层阶梯塔状，高约60米。';

					var div31=addDiv(oBookThreeP,'pageHeader');
		 			div31.innerHTML='古城堡 汗·哈利里';
		 			var div3=addDiv(oBookThreeP,'cBox');
		 			div3.innerHTML='古城堡建于1176年，为阿尤布王朝国王萨拉丁为抵御十字军的侵略保护开罗而建。'+
									'汗.哈利里位于开罗市中心地带（老城区），由分布在几十条小街巷里的几千家个体小店组成，许多店铺可追溯到公元14世纪。市场道路狭窄，街道两旁挤满了小店铺，主要出售金银首饰、铜盘、石雕、皮货及其他埃及传统手工艺品，素以店面古朴、货物齐全深受外国游客喜爱。这块地方原是法特梅三朝后裔的墓地，公元14世纪，当时埃及的统治者汗·哈利里以法特梅是叛教者无权建墓地为由下令拆毁墓地，并出资在此建起一个市场，即汗·哈利里市场。它已成为开罗古老文化和东方伊斯兰色彩的一个象征，吸引世界各地的游客。  ';

		 			var div51=addDiv(oBookFiveP,'pageHeader');
		 			div51.innerHTML='尼罗河 法老村';
		 			var div5=addDiv(oBookFiveP,'cBox');
		 			div5.innerHTML='尼罗河发源于埃塞俄比亚高原，流经布隆迪、卢旺达、坦桑尼亚、乌干达、肯尼亚、扎伊尔、苏丹和埃及九国，全长6700公里，是非洲第一大河，也是世界上第一条最长的河流，'+
		 			'可航行水道长约3000公里。尼罗河有两条上源河流，西源出自布隆迪群山，经非洲最大的湖--维多利亚湖（南半球）北流,被称为白尼罗河;东源出自埃塞俄比亚高原的塔纳湖,称为青尼罗河。青、白尼罗河在苏丹的喀土穆汇合，然后流入埃及。'+
		 			'法老村位于开罗市内尼罗河的一个小岛上，占地约200亩，是埃及首任驻华大使哈桑·拉贾布博士在发现失传一千年的纸草造纸工艺后于1984年集资修建的。';
		 			var div61=addDiv(oBookSixP,'pageHeader');
		 			div61.innerHTML='卢克索 苏伊士运河';
		 			var div6=addDiv(oBookSixP,'cBox');
		 			div6.innerHTML='位于尼罗河上游，距开罗670公里。古埃及时代称为TABE，是古埃及帝国首都'+
					'底比斯的一部分。公元前1570年左右，底比斯人赶走了西克索人（HIKUSOS），以此为中心重新统一了埃及，建立了一个更加强大的帝国，领土南接苏丹，北达叙利亚。这个帝国维持了1500多年，在此建造了众多宏伟壮观的神殿及王家陵墓，因此成为古埃及遗迹的宝库，是探访埃及古文明不可不到的地方。主要参观景点有：'+
		 			'位于埃及东北部，扼欧、亚、非三洲交通要冲，沟通红海和地中海、大西洋和印度洋，具有重要战略意义和经济意义。';
		 			break;
		 		}
		 	}
		 	},
		 	
		 	
	}
var siteon=new SiteOn();
 siteon.init();

 
}