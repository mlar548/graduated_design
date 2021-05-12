<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="multipart/form-data;charset=utf-8" />
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>修改个人信息</title>
</head>
<body> 
	<form action="${pageContext.request.contextPath}/user/updateUser.action"
		method="post" onsubmit="return check()" enctype="multipart/form-data">  
		昵 称：<input type="text" id="userName" name="userName" /><br>
		联系电话：<input type="text" id="userPhone" name="userPhone" /> <br>
		修改头像：<input type="File" id="userPhoto" name="userPhotoFile"  /> <br>
		
		性别：<input type="radio" name="sex" value="男" />男<input type="radio"
			name="sex" value="女" />女<br> 
		出生日期：<input type="date" name="birthday" /><br>
		<!-- <input type="text"
			id="birthday" name="birthdayIn" value="2012-06-15" readonly class="form_datetime"/> <br>  -->
		邮件：<input type="text" id="userEmail" name="userEmail" /> <br>
		qq：<input type="text" id="qq" name="userQq" /><br> 
		 
		<input type="submit" value="确认修改" />
	</form> 
</body>
</html>