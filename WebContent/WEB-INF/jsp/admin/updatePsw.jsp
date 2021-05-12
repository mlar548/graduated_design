<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib prefix="shiro" uri="http://shiro.apache.org/tags"%>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type"
	content="multipart/form-data;charset=utf-8" />
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
<link rel="stylesheet" type="text/css"
	href="${pageContext.request.contextPath}/css/mycss2.css">
	<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/static/admin/layui/css/modules/myicon/iconfont.css"/>
		
<title>管理供应商</title>

<script
	src="${pageContext.request.contextPath}/js/jquery.validate.min.js"></script>
<script src="${pageContext.request.contextPath}/js/messages_zh.js"></script>

<script type="text/javascript">
$(function(){
	$("#bePwd").blur(function(){
		 var url="${pageContext.request.contextPath}/cherkAJAXforPwd.action";
		 var params = {userId:$("#userId").val(),
				 bePwd:$("#bePwd").val(),
				 
		 };
		 $.getJSON(url,params,function(result){
			 if(result=="1"){
				 $("#msgCherk").html("输入不正确");
				 $("#sub").addClass("a1");
				 $("#sub").removeClass("a");
			 }else{
				 $("#msgCherk").html("");
				 $("#sub").addClass("a");
				 $("#sub").removeClass("a1");
				 
				 
			 }
		 }) 
	});
	
	
});


$.validator.setDefaults({
    submitHandler: function() {
      alert("修改成功");
      return true;
    }
});
$().ready(function() {
	var date=new Date;
	var year=date.getFullYear();
	// 在键盘按下并释放及提交后验证提交表单
	  $("#signupForm").validate({
		    rules: {
		    	password: "required",
		    	bePwd: "required",
		    	passwordAgain:{
		    		equalTo:"#password",
		    		required:"required"
		    		},
		   
		    },
		    messages: {
		    	bePwd: "请输入原密码",
		    	password: "请输入新密码",
		    	passwordAgain: "输入不一致",
		    }
		});
	});
</script>
<style type="text/css">
color:red;
	}
	.a1{
	display:none;
	}
	.a{
display:inline;
	}
hr {
	width: 80%;
	background-color: #EBEBEB;
	height: 2px;
}

.error {
	color: red;
}
.fanhuiA{
    position: absolute;
    
    left: 20px;
    top: 20px;
    }
.fanhuiA i{
    color:#05C697;
    font-size: 30px;
    }
</style>
</head>
<body>
<%-- action="${pageContext.request.contextPath}/goodsAdd.action" --%>
	<form class="form-inline" id="signupForm"
		action="${pageContext.request.contextPath}/adminUpdatePwd"
		method="post" onsubmit="return check()" enctype="multipart/form-data">
		<center>
			<h2>修改密码</h2>
		</center>
		<center>
			<hr>
		</center>
		<div class="tianjia">
		 <a     class="fanhuiA " style=" text-decoration:none;"  href="javascript:history.go(-1);"  >
							<i class="iconfont "  > &#xe606;</i>
						</a> 
						
						  <!-- 隐藏域 -->
                        <input type="hidden" id="userId" name="userId" value="${myuser.userId}" />
                        
			<div class="form-group">
				<label>原密码:</label> <input type="password" class="form-control"
					style="width: 150px" name="bePwd" id="bePwd"
					placeholder="输入原密码" /><span style="color:red;" id="msgCherk">${msg}</span>
			</div>
			<br>
			<div class="form-group">
				<label> 新密码:</label> <input class="form-control"
					style="width: 150px" type="password" name="password" id="password" placeholder="输入新密码">
				  
			</div>
			 <br>
			<div class="form-group">
				<label> 确认密码:</label> <input type="password" name="passwordAgain" class="form-control"
					style="width: 150px" placeholder="确认密码" >
				 
				 
			</div>
			 
	 
		</div>
		<br>
		<center>
			<input type="submit" class="btn btn-success  a1" id="sub" value="确认修改">&nbsp;&nbsp;&nbsp;
		</center>
	</form>
</body>
</html>
