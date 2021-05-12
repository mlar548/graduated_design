<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>客户信息</title>
</head>
<body>
	<table border=1>
		<tr>
			<td>用户名</td>
			<td>姓名</td>
			<td>密码</td>
			<td>性别</td>
			<td>出生日期</td>
			<td>手机号码</td>
		</tr>
		<tr>
			<td>${user.userId}</td>
			<td>${user.userName}</td>
			<td>${user.userPassword}</td>
			<td>${user.sex}</td>
			<td>${user.birthday}</td>
			<td>${user.userPhone}</td>
			
		<tr>
	</table>
</body>
</html>