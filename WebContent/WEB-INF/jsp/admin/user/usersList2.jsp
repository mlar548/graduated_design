<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib prefix="shiro" uri="http://shiro.apache.org/tags" %>
<%@taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
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

<title>仓库管理页</title>
</head>
<body>
<div id="divSupplierindex">
  
<div id="divSupplierTable">
	<table border="1px" class="table table-hover" style="width: 96% ;margin: 0 auto">
		<tr>
			<th>用户名</th>
			<th>昵称</th>
			<th>性别</th>
			<th>联系方式</th>
			<th>电子邮箱</th>
			<th>生日</th>
			<th>qq</th>
			<th>创建时间</th>
			<th>最后登陆时间</th>
			 
			 
		<tr>
		<c:forEach var="user" items="${usersList}">
		<tr>
			<td>${user.username}</td>
			<td>${user.name}</td>
			<td>${user.sex}</td>
			<td>${user.userPhone}</td>
			<td>${user.userEmail}</td>
			<td><fmt:formatDate value="${user.birthday}" pattern="yyyy-MM-dd"/>
			 </td>
			<td>${user.userQq}</td>
			<td><fmt:formatDate value="${user.createTime}" pattern="yyyy-MM-dd HH:mm:ss"/>
			</td>
			<td>
			<fmt:formatDate value="${user.lastLoginTime}" pattern="yyyy-MM-dd HH:mm:ss"/>
			</td>
			 
			 
			 
		</tr>
		</c:forEach>
	</table>
	
</div>
</div>
</body>
</html>
