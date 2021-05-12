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

<title>仓品信息页</title>
</head>
<body>
 
	 
<div id="divSupplierTable">
	<table border="1px" class="table table-hover" style="width: 96% ;margin: 0 auto">
		<tr>
			 
			<th>编号</th>
			<th>商品名</th>
			<th>数量</th>
			<th>所占空间</th>
			 
			 
		<tr>
		<c:forEach var="warehouseGoods" items="${warehouseGoodsList}">
		<tr>
			 
			<td>${warehouseGoods.warehouseGoodsId}</td>
			<td>${warehouseGoods.goodsName} </td>
			<td>${warehouseGoods.warehouseGoodsQuantity}</td>
			<td>${warehouseGoods.usedCapacity}</td>
			 
		</tr>
		</c:forEach>
	</table>
	
</div>
</div>
</body>
</html>
