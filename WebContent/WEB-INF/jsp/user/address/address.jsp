<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib prefix="shiro" uri="http://shiro.apache.org/tags" %>
<shiro name="users">
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>管理我的收货地址</title>
</head>
<body>
	<a href="${pageContext.request.contextPath}/user/address/addressAdd">添加</a>
	<a href="${pageContext.request.contextPath}/user/address/addressDelete">删除</a>
	<a href="${pageContext.request.contextPath}/user/address/addressUpdate">修改</a>
	<br>

	<table border="1px">
		<tr>
			<th>编号</th>
			<th>省</th>
			<th>市</th>
			<th>详细地址</th>
		<tr>
		<c:forEach var="address" items="${addressList}">
		<tr>
			<td>${address.addressId}</td>
			<td>${address.province}</td>
			<td>${address.city}</td>
			<td>${address.alladdress}</td>
		</tr>
		</c:forEach>
	</table>

</body>
</html>
</shiro>