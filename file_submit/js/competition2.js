window.onload=function(){
	var sign=document.getElementById('sign');
	var rules=document.getElementById('competition-rules');
	var submit_file=document.getElementById('submit_file');
	var Input=document.getElementsByTagName('input');
    var obtn = document.getElementsByClassName("btn form-control submit")[0];
    var tishi=document.getElementById('tishi');
    var check=document.getElementsByClassName("btn check")[0];
    var script;

    	//清空作用
    	Input[3].onfocus=function(){
    		Input[6].style.visibility="hidden";
    	}
    	Input[4].onfocus=function(){
    		Input[6].style.visibility="hidden";
    	}
    	Input[5].onfocus=function(){
    		Input[6].style.visibility="hidden";
    	}

	Input[3].onblur = function(){
		// alert("1")
		
         if(this.value == "" ){
         	Input[6].style.visibility="visible";
         	// this.placeholder ='请填写团队名称';
         	
          	Input[6].value="请填写团队名称";
          }else if(!/^[\u4E00-\u9FA5A-Za-z0-9]{1,20}$/.test(this.value)){
          		Input[6].style.visibility="visible";
         	// this.placeholder ='请填写团队名称';
         	
          		Input[6].value="团队名称格式错误";
          }
          else{
          	  $.ajax({
          	  	  url: "php/getname.php",
          	  	  async:true,
          	  	  type:'post',
          	  	  data:{
          	  	  	name:Input[3].value
          	  	  },
          	  	  success:function(data){
          	  	  	  if(data == '1'){
          	  	  	  	   Input[3].value="";
                           Input[3].placeholder="该团队已经报名请重新填写";
						   obtn.disabled = true;
					}

					  else{
					  	obtn.disabled = false;
					  }
          	  	  },
          	  	  error:function(jqxhr,statetext,state){
          	  	  	   alert(state);
          	  	  }
          	  });
          } 
	}
	Input[4].onblur = function(){
		var Tel=/^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9]|17[7|3|0|1])\d{8}$/;   //验证电话号码

		if(this.value == ''){
			Input[6].style.visibility="visible";
			Input[6].value="请填写联系方式";
			obtn.disabled = true;
		}else if(!Tel.test(this.value)){
				Input[6].style.visibility="visible";
				Input[6].value="联系方式格式错误";
				obtn.disabled = true;
			}else{
				 obtn.disabled = false;
			}
		
	}
	Input[5].onblur = function(){
		if(this.value == ''){
			Input[6].style.visibility="visible";
			Input[6].value="请填写邮箱";
			obtn.disabled = true;
               		// this.placeholder="请填写邮箱";
		}else if(!/^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/.test(this.value)){
				// this.placeholder="输入格式错误";
				Input[6].style.visibility="visible";
				Input[6].value="Email格式错误"
				obtn.disabled = true;
			}else{
				 obtn.disabled = false;
			}
		
	}
	obtn.onclick=function(){
		Input[6].style.visibility="visible";
        
		if( judge()){
			  $.ajax({
			  	url:'./php/code.php',
			  	method:'get',
                async:false,
                dataType:'text',
                success:function(data){
                    alert(data);
                },
                error:function(){
                	alert("请求验证码失败");
                }
			  });
						//将数据填入数据库
				         $.ajax({
							url:"php/signup.php",
							type : "POST",
							async : true,
							data:{
								name : Input[3].value,
								tel : Input[4].value,
								email : Input[5].value
							},
							success: function(data,state,jqxhr){
								Input[6].value=data;

					            obtn.disabled = true;
								
							},
							error:function(jqxhr,stateText,date){
								Input[6].value=data;
								Input[6].disabled = true;
							}
						});

		}
	}
	
	var tname = document.getElementById('team'); 
	tname.onblur = function(){
	
          if(tname.value == ""){
          	 tname.placeholder="请输入团队名称"
          	 check.disabled=true;
          }else{
          	  $.ajax({
          	  	  url: 'php/getname.php',
          	  	  async:true,
          	  	  type:'post',
          	  	  data:{
          	  	  	name:tname.value
          	  	  },
          	  	  success:function(data){
          	  	  	  if(data == '1'){
          	  	  	  	tishi.innerHTML="";
          	  	  	  	tishi.style.visibility="visible";
          	  	  	  	check.disabled=false;	
                        document.getElementById("file").style.display="block";

           	  	  	  }else{
          	  	  	  	tishi.style.visibility="visible";
          	  	  	  	tishi.innerHTML="该团队没有报名,请先报名";
          	  	  	  	check.disabled=true;
                        document.getElementById("file").style.display="none";

          	  	  	  }
          	  	  },
          	  	  error:function(jqxhr,statetext,state){
          	  	  	 alert(state);
          	  	  }
          	  });
          } 
	}

	function judge(){
		var Tel=/^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9]|17[7|3|0|1])\d{8}$/;   //验证电话号码
		//var Tel =/^(1[3|4|5|7|8])[0-9]{9}$/;
		var Email= /^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/;   //验证邮箱
		var Tname=/^[\u4E00-\u9FA5A-Za-z0-9]{1,20}$/;//验证用户名  允许5-16字节，允许字母数字下划线
		
		if(Input[3].value=="" || Input[4].value=="" || Input[5].value=="") {
			Input[6].value="输入不能为空";
			return false;
		}else if(!(Tname.test(Input[3].value))){
			Input[6].value="团队名称格式错误";

			return false;
		}
		else if( !(Tel.test(Input[4].value))){
			Input[6].value="联系方式格式错误"
			return false;
		}else if( !(Email.test(Input[5].value))){
			Input[6].value="Email格式错误"
			return false;
		}else return true;
	}
}



