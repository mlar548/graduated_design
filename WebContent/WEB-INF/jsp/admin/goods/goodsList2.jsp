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

<title>管理供应商</title>
</head>
<body>
<div id="divSupplierindex">
	 <div id="divSupplierButtomTop">
         
        <a class="btn btn-success" href="${pageContext.request.contextPath}/GoodsAdd" role="button">添加</a>
         
    </div>
	<br>
<div id="divSupplierTable">
	<table border="1px" class="table table-hover" style="width: 96% ;margin: 0 auto">
		<tr>
			<th>商品货号</th>
			<th>商品名称</th>
			<th>商品类型</th>
			<th>供应商名称</th>
			<th>标题</th>
			<th>价格</th>
			<th>原价</th>
			<th>单位</th>
			<th>库存</th>
			<th>操作</th>
		<tr>
		<c:forEach var="good" items="${goodsList}">
		<tr>
			<td>${good.goodsId}</td>
			<td>${good.goodsName}</td>
			<td>${good.goodsTypeId}</td>
			<td>${good.supplierId}</td>
			<td>${good.title}</td>
			<td>${good.price}</td>
			<td>${good.beforeprice}</td>
			<td>${good.unit}</td>
			<td>${good.remain}</td>
			<td> 
			<shiro:hasPermission name="role:goodsDelete">
			<a class="btn btn-danger" href="${pageContext.request.contextPath}/goodsDelete.action?goodsId=${good.goodsId}" role="button">删除</a>  
			</shiro:hasPermission>
			<shiro:hasPermission name="role:goodsUpdate">
			 <a class="btn btn-danger" href="${pageContext.request.contextPath}/goodsUpdate?goodsId=${good.goodsId}" role="button">修改</a>
			 </shiro:hasPermission>
			 </td>
			
		</tr>
		</c:forEach>
	</table>
	
</div>
</div>
</body>
</html>
