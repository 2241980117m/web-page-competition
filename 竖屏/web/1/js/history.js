window.onload=function(){
 function picLunbo(){
 	//alert('a');
           	var imgLis=document.getElementsByClassName("imgLi");
			var j=0;
			var i;
			var flag=0;
			
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

		 
		 
	}
	picLunbo();

var flag=0;
var i=0;  //列
var j=0;  //行
var k=0;
var inter;
var x,y;
	function lunbo(){
		var oMoveWord=document.getElementById('moveWord');
		var oInnerText=oMoveWord.innerHTML;
		var omb3=document.getElementById('mainbody3');
		var oWord=new Array();
		oWord[0]='埃及是四大文明古国之一。公元前3100年出现统一的奴隶制国家，古埃及连续形成了31个王朝。公元前11世纪至前1世纪，断断续续被亚述、巴比伦、波斯、古马其顿和罗马帝国征服。';
		// console.log(oWord[0].length);
		oWord[1]='公元4—7世纪并入东罗马帝国，古埃及文明灭亡。后被波斯萨珊王朝占据。公元7世纪中期，阿拉伯人入侵，为阿拉伯帝国的一部分。';
		//console.log(oWord[1].length);
		oWord[2]='阿拉伯帝国后期，埃及出现了法蒂玛王朝和阿尤布王朝。';
		//console.log(oWord[2].length);
		oWord[3]='阿拉伯帝国后期，埃及出现了法蒂玛王朝和阿尤布王朝。';
		//console.log(oWord[3].length);
		oWord[4]='1249年开始由马木鲁克王朝统治，1517年被奥斯曼土耳其征服，成为奥斯曼帝国的埃及行省。';
		//console.log(oWord[4].length);
		oWord[5]='1798年～1801年一度被拿破仑占领。1805~1840年在穆罕默德·阿里领导下进入短暂的独立。';
		//console.log(oWord[5].length);
		oWord[6]='1882年被英国军队占领，1914年成为英国的保护国。';
		//console.log(oWord[6].length);
		oWord[7]='1922年2月28日，英国被迫承认埃及独立，但仍保留对埃国防、外交、少数民族等权，埃及当局是英国控制下的傀儡王朝，英埃政府间协议英国可随时为了保护英国在埃及利益对埃及出兵。';
		//console.log(oWord[7].length);
		oWord[8]='1952年，以纳赛尔为首的“自由军官组织”发动军事政变，推翻法鲁克王朝，成立“革命指导委员会”，掌握国家政权，获得真正独立。1953年6月18日废除帝制，成立共和国。';
		//console.log(oWord[8].length);
		oWord[9]='1954年，英国被迫同意分批从埃及撤军，直到1956年英军才全部撤出埃及，但仍然保持对苏伊士运河区的事实治权。';
		//console.log(oWord[9].length);
		oWord[10]='1956年，纳赛尔将苏伊士运河收为国有，引发第二次中东战争，英国与法国、以色列组成联军，突击控制了西奈半岛与苏伊士运河区，围歼了多支埃及军队';
		//console.log(oWord[10].length);
		oWord[11]='1958年2月，埃及与叙利亚合并，成立阿拉伯联合共和国。1961年9月，叙利亚脱离阿拉伯联合共和国。1967年，第三次中东战争爆发，埃及失去西奈半岛。';
		//console.log(oWord[11].length);
		oWord[12]='1970年，纳赛尔去世，由萨达特继任总统。1971年9月，改国名为“阿拉伯埃及共和国”。';
		//console.log(oWord[12].length);
		oWord[13]='1978年，埃及与以色列签订和平条约。1981年，萨达特遭刺杀身亡，由穆罕默德·胡斯尼·穆巴拉克继任总统。1982年取回西奈半岛的主权。';
		//console.log(oWord[13].length);
		oWord[14]='2011年发生茉莉花革命，阿拉伯世界多国发生社会动荡，“争民主、反独裁、反腐败”的反政府示威风起云涌。埃及成为这台大戏中重要一幕';
		//console.log(oWord[14].length);
		oWord[15]='2014年6月3日，阿卜杜勒－法塔赫·塞西当选总统，6月8日宣誓就职';
		//console.log(oWord[15].length);
		oWord[16]='2016年10月28日，埃及当选联合国人权理事会成员，任期从2017年至2019年。';
	addevent(document.getElementsByClassName('but')[0],'click',function(){//开始按钮
			if(flag==0){
				inter=setInterval(function(){
							oMoveWord.innerHTML+=oWord[j][i];
						i++;
			console.log('j:'+j);
							//console.log('i:'+i);
						if((typeof oWord[j][i])!='string'){
								oMoveWord.innerHTML='';
								j++;
								i=0;
								}
						if(j==17){
								j=0;
								i=0;
							}
				},150);

			}
			if(flag!=0){
				//alert(flag);
					inter=setInterval(function(){
							console.log('j:'+j);
							console.log('i:'+i);
							oMoveWord.innerHTML+=oWord[j][i];
						i++;
						if((typeof oWord[j][i])!='string'){
								oMoveWord.innerHTML='';
								j++;
								i=0;
								}
						if(j==17){
								j=0;
								i=0;
							}
				},150);
			}
			
	});
	
addevent(document.getElementsByClassName('but')[1],'click',function(){  //结束按钮
		// alert('a');
		clearInterval(inter);
		flag=1;
	});	

}
	
	lunbo();

	function  addevent(element,type,handler){
				return   element.addEventListener?element.addEventListener(type,handler,false):element.attachEvent('on'+type,handler);
		}


}
