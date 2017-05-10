window.onload = function(){
	/*var sign = document.getElementById('sign');
	var rules = document.getElementById('competition-rules');
	var submit_file = document.getElementById('submit_file');
	var Input = document.getElementsByTagName('input');
	var obtn = document.getElementsByClassName("btn form-control submit")[0];*/
	var tishi = document.getElementById('tishi');
	var check = document.getElementsByClassName("btn check")[0];
	var script;
    //var testbtn = document.getElementsByTagName('button')[1];
    	//清空作用
    	/*Input[3].onfocus=function(){
    		Input[7].style.visibility="hidden";
    	}
    	Input[4].onfocus=function(){
    		Input[7].style.visibility="hidden";
    	}
    	Input[5].onfocus=function(){
    		Input[7].style.visibility="hidden";
    	}

	Input[3].onblur = function(){
		// alert("1")
		
         if(this.value == "" ){
         	Input[7].style.visibility="visible";
         	
         	
          	Input[7].value="请填写团队名称";
          }else if(!/^[\u4E00-\u9FA5A-Za-z0-9]{1,20}$/.test(this.value)){
          		Input[7].style.visibility="visible";
          		Input[7].value="团队名称格式错误";
          }
          else{
          		checkName();
          } 
	}
	Input[4].onblur = function(){
		var Tel=/^(13[\d]{1}|14[5|7]|15[\d]{1}|18[\d]{1}|17[7|3|0|1])\d{8}$/;   //验证电话号码

		if(this.value == ''){
			Input[7].style.visibility="visible";
			Input[7].value="请填写联系方式";
			obtn.disabled = true;
		}else if(!Tel.test(this.value)){
				Input[7].style.visibility="visible";
				Input[7].value="联系方式格式错误";
				obtn.disabled = true;
			}else{
			   checkTel();
				
			}
		
	}
	Input[5].onblur = function(){
		if(this.value == ''){
			Input[7].style.visibility="visible";
			Input[7].value="请填写邮箱";
			obtn.disabled = true;
               		
		}else if(!/^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/.test(this.value)){
				Input[7].style.visibility="visible";
				Input[7].value="Email格式错误";
				 obtn.disabled = true;
			}else{
               checkEmail();
				 
			}
		
	}
	testbtn.onclick = function(){
		obtn.disabled = false;
		 $.ajax({
			url:'./action.php',
			method:'post',
			async:true,
			data:{
				name:Input[3].value,
				email:Input[5].value
			},
			dataType:'text',
			success:function(data){
			    alert(data);
			    Input[3].readOnly=true;
			    Input[5].readOnly=true;
			},
			error:function(data){
				alert(data);

			}
		})
	}
	obtn.onclick=function(){
		Input[7].style.visibility="visible";
        
		if( judge()){
						//将数据填入数据库
				         $.ajax({
							url:"php/signup.php",
							type : "POST",
							async : true,
							data:{
								name : Input[3].value,
								tel : Input[4].value,
								email : Input[5].value,
								test : Input[6].value
							},
							success: function(data,state,jqxhr){
								Input[7].value=data;

					            obtn.disabled = true;
								
							},
							error:function(jqxhr,stateText,date){
								Input[7].value=data;
								Input[7].disabled = true;
							}
						});
				    
		}
	}*/
	
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
          	  	  	  	tishi.innerHTML="该团队还没有报名,请先报名";
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
		var Tel=/^(13[\d]{1}|14[5|7]|15[\d]{1}|18[\d]{1}|17[7|3|0|1])\d{8}$/;   //验证电话号码
		//var Tel =/^(1[3|4|5|7|8])[0-9]{9}$/;
		var Email= /^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/;   //验证邮箱
		var Tname=/^[\u4E00-\u9FA5A-Za-z0-9]{1,20}$/;//验证用户名  允许5-16字节，允许字母数字下划线
		
		if(Input[3].value=="" || Input[4].value=="" || Input[5].value=="") {
			Input[7].value="输入不能为空";
			return false;
		}else if(!(Tname.test(Input[3].value))){
			Input[7].style.visibility="visible";
			Input[7].value="团队名称格式错误";

			return false;
		}
		else if( !(Tel.test(Input[4].value))){
			Input[7].style.visibility="visible";
			Input[7].value="联系方式格式错误"
			return false;
		}else if( !(Email.test(Input[5].value))){
			Input[7].style.visibility="visible";
			Input[7].value="Email格式错误"
			return false;
		}else return true;
	}
	function checkName(){
		       $.ajax({
          	  	  url: "php/getname.php",
          	  	  async:true,
          	  	  type:'post',
          	  	  data:{
          	  	  	name:Input[3].value
          	  	  },
          	  	  success:function(data){
          	  	  	  if(data == '1'){
			               Input[7].style.visibility="visible";
			               Input[7].value ="该团队已经报过名";
			               Input[3].value = '';
                           Input[3].placeholder="该团队已经报名请重新填写";
						   obtn.disabled = true;
					
					}else{
					  	obtn.disabled = false;
					
					  }
          	  	  },
          	  	  error:function(jqxhr,statetext,state){
          	  	  	  Input[7].value = stateText+state;
					  obtn.disabled = true;
          	  	  }
          	  });
	}
	function checkEmail(){
		      $.ajax({
					url:'./php/getEmail.php',
					async:false,
					method:'post',
					data:{
						email:Input[5].value
					},
					success:function(data){
						if(data == '1'){
							Input[7].style.visibility="visible";

							Input[7].value="Email已经报过名";
							obtn.disabled = true;
							Input[5].value = '';
						}else{
							Input[7].value = '';
							obtn.disabled = false;
						}
					},
					error:function(jqxhr,stateText,state){
						Input[7].style.visibility="visible";

						Input[7].value = stateText+state;
						obtn.disabled = true;
					}
				})
	}
	function checkTel(){
		  	$.ajax({
 				   url:'./php/getTel.php',
 				   async:false,
 				   method:'post',
 				   data:{
 				   	tel:Input[4].value
 				   },
 				   success:function(data){
 				   	if(data == '1'){
						Input[7].style.visibility="visible";

 				   		Input[7].value = "该手机已经报过名";
 				   		Input[4].value = '';
 				   		obtn.disabled = true;
 				   		
 				   	}else{
 				   		Input[7].value = "";
 				   		obtn.disabled = false;
 		
 				   	}
 				   },
 				   error:function(jqxhr,stateText,state){
						Input[7].style.visibility="visible";

 				   	  Input[7].value = stateText+state;
						obtn.disabled = true;
 				   }
				})
	}
}



