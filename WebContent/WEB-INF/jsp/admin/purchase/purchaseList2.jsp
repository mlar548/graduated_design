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
<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/static/admin/layui/css/layui.css" />
<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/static/admin/css/admin.css" />
<title>管理供应商</title>
</head>
<body>
<div id="divSupplierindex">
	 <div id="divSupplierButtomTop">
         
        <a class="btn btn-success" href="${pageContext.request.contextPath}/purchaseAdd" role="button">采购</a>
         
    </div>
	<br>
<div id="divSupplierTable">
	<table border="1px" class="table table-hover" style="width: 96% ;margin: 0 auto">
		<tr>
			<th>采购编号</th>
			<th>商品名称</th>
			<th>数量</th>
			<th>采购时间</th>
			<th>采购价格</th>
			<th>仓库编号</th>
			<th>物流编号</th>
			
			 
		<tr>
		<c:forEach var="purchase" items="${purchaseList}">
		<tr>
			<td>${purchase.purchaseId}</td>
			 
			<td>${purchase.goodsName}</td>
			 
			<td>${purchase.purchaseQuantity}</td>
			<td>
			<fmt:formatDate value="${purchase.purchaseDate}" pattern="yyyy-MM-dd"/>
			</td>
			<td>${purchase.purchasePrice}</td>
			<td>${purchase.warehouseName}</td>
			<td>${purchase.logisticsId}</td>
 
			
			
			
		</tr>
		</c:forEach>
	</table>
	
</div>
</div>
</body>
</html>
