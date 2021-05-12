<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<%@ taglib prefix="shiro" uri="http://shiro.apache.org/tags"%>
 <!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" type="text/css"
	href="${pageContext.request.contextPath}/esayUI/eui/themes/default/easyui.css">
<link rel="stylesheet" type="text/css"
	href="${pageContext.request.contextPath}/esayUI/eui/themes/icon.css">
<link rel="stylesheet" type="text/css"
	href="${pageContext.request.contextPath}/css/mycss.css">
<link
	href="${pageContext.request.contextPath}/dist/css/bootstrap.min.css"
	rel="stylesheet">
<script type="text/javascript"
	src="${pageContext.request.contextPath}/esayUI/eui/jquery.min.js"></script>
<script src="${pageContext.request.contextPath}/dist/js/bootstrap.js"></script>
<script type="text/javascript"
	src="${pageContext.request.contextPath}/esayUI/eui/jquery.easyui.min.js"></script>
<script src="${pageContext.request.contextPath}/js/jquery.validate.min.js"></script>
<script src="${pageContext.request.contextPath}/js/messages_zh.js"></script>
<title>登录</title>
</head>
<script type="text/javascript">
$(function(){
	
$('#username').click(function() {
	
	 $('#msg').empty();
});
$('#inputPassword3').click(function() {
	
	 $('#msg').empty();
});
});

$.validator.setDefaults({
    submitHandler: function() {
     	 return true;
    }
});
$().ready(function() {
$("#signupForm").validate({
	rules: {
	       
	      username: "required" ,
	      password: "required" ,
	      
	    },
	    messages: {
	      
	      username: "请输入用户名",
	      password: "请输入密码" 
	    
	    }
	});
});

</script>
<style>
body {
	background: url("${pageContext.request.contextPath}/img/background.jpg");
	background-size: 100%;
}
.error{
	color:red;
}
</style>
<body>
	
<div id="divlogin">
    <div id="divlogin-3"></div>
    <div id="divlogin-2">
        <p>欢迎登录</p></div>
    <div id="divlogin-1">

        <form id="signupForm" class="form-horizontal" action="${pageContext.request.contextPath}/admin/login.action" method="post" onsubmit="return check()">

            <div class="form-group">
                <!--<label class="col-sm-2 control-label"></label>-->
                <div class="">
                    <input type="text" name="username" class="form-control" id="username" onkeyup="value=value.replace(/[^\w\.\/]/ig,'')" placeholder="请输入用户名：">
                </div>
            </div>
            <div class="form-group">
                <!--<label class="col-sm-2 control-label"> </label>-->
                <div class="">
                    <input type="password" name="password" class="form-control" id="inputPassword3"
                           onkeydown="if(event.keyCode==32) return false"   placeholder="请输入密码">
                </div>
            </div>

            <div class="">
                <div class="">

                    <input type="checkbox" name="rememberMe"> 自动登录
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span id="msg" class="error">${msg}</span>
                </div>
            </div>


            <div class="">
                <button type="submit" class="btn btn-danger" id="butsign">登录</button>
            </div>

        </form>
    </div>
</div>	
	
</body>
</html>

