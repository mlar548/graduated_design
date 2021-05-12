<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>客户信息</title>
</head>
<body>
	<table border=1>
		<tr>
			<td>交易号</td>
			<td>用户名</td>
			<td>订单号</td>
			<td>商品号</td>
			<td>时间</td>
		</tr>
		<c:forEach var="TradeOrderGoods" items="${TradeOrderGoodsList}">
		<tr>
			<td>${TradeOrderGoods.tradeId}</td>
			<td>${TradeOrderGoods.userId}</td>
			<td>${TradeOrderGoods.orderId}</td>
			<td>${TradeOrderGoods.goodsId}</td>
			<td>${TradeOrderGoods.orderStartDate}</td>
		<tr>
		</c:forEach>
	</table>
</body>
</html>