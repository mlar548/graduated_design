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
<br >

<a class="btn btn-info" role="button" href="${pageContext.request.contextPath}/logisticsList">商品采购物流</a>
<a class="btn btn-danger" role="button" href="${pageContext.request.contextPath}/logisticsOrdersList">客户订单物流</a>
<a class="btn btn-info" role="button" href="${pageContext.request.contextPath}/logistics/logisticsOtList">仓库调拨物流</a>
<div id="divSupplierindex">
	 <div id="divSupplierButtomTop">
         
         
    </div>
	<br>
<div id="divSupplierTable">
	<table border="1px" class="table table-hover" style="width: 96% ;margin: 0 auto">
		<tr>
			<th>物流编号</th>
			<th>物流公司</th>
			<th>快递单生成时间</th>
			<th>客户</th> 
			<th>物流信息</th>
			 
		<tr>
		<c:forEach var="logistics" items="${logisticsList}">
		
		<tr>
			<td>${logistics.logisticsId}</td>
			<td>${logistics.logisticsName}</td>
			<td><fmt:formatDate value="${logistics.logisticsTime}" pattern="yyyy-MM-dd HH:mm:ss"/>
			
			</td>
			<td>${logistics.userId}</td>
		 
			<td><a href="${pageContext.request.contextPath}/logisticsInformation?logisticsId=${logistics.logisticsId}">查看物流信息</a></td>
			 
			
			 
		</tr>
		</c:forEach>
	</table>
	
</div>
</div>
</body>
</html>
