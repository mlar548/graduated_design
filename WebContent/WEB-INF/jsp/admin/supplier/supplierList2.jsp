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
	<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/static/admin/layui/css/layui.css" />
		<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/static/admin/css/admin.css" />

<title>管理供应商</title>
</head>
<body>
<div id="divSupplierindex">
	 <div id="divSupplierButtomTop">
      
        <a class="btn btn-success" href="${pageContext.request.contextPath}/supplierAdd" role="button">添加</a>
         
    </div>
	<br>
<div id="divSupplierTable">
	<table border="1px" class="table table-hover" style="width: 96% ;margin: 0 auto">
		<tr>
			<th>编号</th>
			<th>供应商名称</th>
			<th>电话</th>
			<th>邮箱</th>
			<th>操作</th>
		<tr>
		<c:forEach var="supplier" items="${supplierlist}">
		<tr>
			<td>${supplier.supplierId}</td>
			<td>${supplier.supplierName}</td>
			<td>${supplier.supplierPhone}</td>
			<td>${supplier.supplierEmail}</td>
			<td> 
			<shiro:hasPermission name="role:supplierDelete.action">
			<a class="btn btn-danger" href="${pageContext.request.contextPath}/supplierDelete.action?supplierId=${supplier.supplierId}" role="button">删除</a>
			</shiro:hasPermission>
			<shiro:hasPermission name="role:supplierUpdate">
			 <a class="btn btn-danger" href="${pageContext.request.contextPath}/supplierUpdate?supplierId=${supplier.supplierId}" role="button">修改</a> 
			</shiro:hasPermission>
			</td>
		</tr>
		</c:forEach>
	</table>
</div>
</div>
</body>
</html>
