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

<title>订单管理页</title>
</head>
<body>
<div id="divSupplierindex">
	 <div id="divSupplierButtomTop">
         
        <a class="btn btn-success" href="${pageContext.request.contextPath}/ordersList.action" role="button">添加</a>
         
    </div>
	<br>
<div id="divSupplierTable">
	<table border="1px" class="table table-hover" style="width: 96% ;margin: 0 auto">
		<tr>
			<th>订单</th>
			<th>产生时间</th>
			<th>用户id</th>
			<th>收货地址</th>
			<th>操作</th>
			
			 
		<tr>
		<c:forEach var="order" items="${ordersPendingList}">
		<tr>
			<td>${order.orderId}</td>
			<td><fmt:formatDate value="${order.orderStartDate}" pattern="yyyy-MM-dd HH:mm:ss"/></td>
			<td>${order.userId}</td>
			<td>${order.province}${order.city}${order.alladdress}</td>
			<td><a href="${pageContext.request.contextPath}/trade?orderId=${order.orderId}&warehouseId=0">详细订单信息</a> </td>
			<%-- <td>    
			 <a class="btn btn-info" href="${pageContext.request.contextPath}/goodsUpdate?goodsId=${good.goodsId}" role="button">修改</a></td>
			 --%>
		</tr>
		</c:forEach>
	</table>
	
</div>
</div>
</body>
</html>
