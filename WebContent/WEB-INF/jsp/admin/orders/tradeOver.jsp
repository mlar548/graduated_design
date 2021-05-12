<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib prefix="shiro" uri="http://shiro.apache.org/tags"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
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

<script type="text/javascript">
	$(function() {
		$('#warehouseFrom')
				.change(
						function() {
							var warehouseId = $('#warehouseFrom').val();
							var url = '${pageContext.request.contextPath}/trade?orderId=${order.orderId}&warehouseId='
									+ warehouseId;
							$(location).attr('href', url);
						});

	});
	 
</script>

<title>已处理订单信息</title>
</head>
<body>

	 
		
		<br>
		<br>
		 
	 <table border="1px" class="table table-hover" style="width: 96% ;margin: 0 auto">
	 <tr >
	  	<td colspan="2" style="text-align:center"  >客户收货地址:${order.province}${order.city}${order.alladdress} </td>
	 </tr>
   <tr>
       <th>商品名</th>
       <th>数量</th>
       
   </tr>
		
		<c:forEach var="trade" items="${tradeList}">
		<tr>
	 <th>${trade.goodsName}</th>
	 <th>${trade.tradeQuantity}</th>
	 </tr>
		</c:forEach>

 </table>
 
 
	 
</body>
</html>
