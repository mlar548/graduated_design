<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib prefix="shiro" uri="http://shiro.apache.org/tags" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>

<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
 
<link rel="stylesheet" type="text/css"
	href="${pageContext.request.contextPath}/css/mycss.css">
<link
	href="${pageContext.request.contextPath}/dist/css/bootstrap.min.css"
	rel="stylesheet">
<script type="text/javascript"
	src="${pageContext.request.contextPath}/esayUI/eui/jquery.min.js"></script>
<script src="${pageContext.request.contextPath}/dist/js/bootstrap.js"></script>
		<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/static/admin/layui/css/layui.css"/>
<script
	src="${pageContext.request.contextPath}/js/jquery.validate.min.js"></script>
<script src="${pageContext.request.contextPath}/js/messages_zh.js"></script>
<title>添加管理员</title>

</head>
<script type="text/javascript">
$.validator.setDefaults({
	submitHandler : function() {
		 
		  
			alert("添加成功");
			return true;
		 
		
	}
});
$().ready(function() {
	// 在键盘按下并释放及提交后验证提交表单
	$("#signupForm").validate({
		rules : {
			username : "required",
			name : "required",
			userPhone : "required"
 
			 
		},
		messages : {
			username : "请输入管理员登录名",
			name : "请输入真实姓名",
			userPhone : "请输入电话号码"
		}
	});
});



$(function() {
	  
	$('#username').blur(function(){
		 
		 	var url= "${pageContext.request.contextPath}/checkAJAX";
			 
	    		var params = {
	    				name:$('#username').val()
			};
		
		      		  $.getJSON(url,params,function(result){//响应回来的json数组
		      			  if(result==1){
		      				$('#msgusername').html("用户名已存在");
		      				
		      			  }else{
		      				 
		      				$('#msgusername').html("可以使用该用户名！");
		      				
		      			  }
		      			 
		      			 
		              });    
	});  
}); 

</script>
<style>
 .error {
	color: red;
}
    .tianjia{
 /*    width:700px;
    height:800px;
    */
    width:75%;
    
    margin: 0 auto; 
    /* margin-left: 90px ;  */
    }
    hr{
     
    width:80%;
    background-color:#EBEBEB;
      height:2px;
    }
    
    #anniu{
  width:100%;
  
    text-align: center;
    }
    
    .tianjia .form-group{
    margin-top:10px;
    }
   <style>
.error{
	color:red;
}
</style>
<body>
<br>
<!-- window.history.back(-1); -->
 


<form id="signupForm" class="form-inline" action="${pageContext.request.contextPath}/adminAdd.action"


		method="post"  >
		<center><h1>必填信息</h1></center>
		<div class="tianjia">
		<br>
		
<div class="form-group">
    <label for="exampleInputName2"  >管理员登录名:</label>
    <input type="text" class="form-control" style="width: 200px"  name="username" id="username" placeholder="请输入用户名">
   </div>
   <span class=""   id="msgusername"></span> 
   <div class="form-group">
    <label for="exampleInputName2"  >真实姓名:</label>
    <input type="text" class="form-control" style="width: 200px"  name="name" placeholder="请输入真实姓名">
   </div> <br>
   <div class="form-group">
    <label for="exampleInputName2">电话号码:</label>
    <input type="text" class="form-control" style="width: 150px" name="userPhone" placeholder="请输入真实姓名电话号码 ">
  </div> <br>
<div class="form-group">  
    <label for="exampleInputName2">默认密码: 123456</label>
     </div>  
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<div class="form-group">  
    <label for="exampleInputName2">管理员类型 :</label>
    <select type="password" class="form-control" style="width: 200px" name="roleId" >
    <option value="6">经理</option>
    <option value="5"> 仓品管理员</option>
    <option value="4">客户管理员</option>
    </select>
  </div>  

   <center> <hr ></center><br>
  <center><h1>选填信息</h1></center> 
		<br>
<div class="form-group">
    <label for="exampleInputName2">性别:</label> &nbsp; &nbsp;
  <input type="radio"     name="sex"   value="男">&nbsp;<label >男</label>   &nbsp; &nbsp;
    <input type="radio"     name="sex"  value="女">&nbsp;<label >女</label>
    
  </div> 
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<div class="form-group">
    <label for="exampleInputName2">出生日期:</label>
    <input type="date"    placeholder="1996-11-22" style="width: 200px"  name="birthday" class="form-control">
  </div> <br>
  
<div class="form-group">
    <label for="exampleInputName2">qq:</label>
    <input type="text"    placeholder="输入你的QQ号码" style="width: 200px"  name="userQq" class="form-control">
  </div>  
<div class="form-group">
    <label for="exampleInputName2">邮箱:</label>
    <input type="text"    placeholder="入你的电子邮箱" style="width: 200px"  name="userEmail" class="form-control">
  </div> <br>
   </div>
    <br>
 
 
 

 <center>
<input type="submit"  class="btn btn-success" value="提交" >&nbsp;&nbsp;&nbsp;
<input type="reset"  class="btn btn-info" value="重置" >
 </center>
</form> 

</body>
</html>
