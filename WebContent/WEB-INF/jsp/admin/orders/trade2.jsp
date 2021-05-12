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
 <script src="${pageContext.request.contextPath}/js/jquery.validate.min.js"></script>
<script src="${pageContext.request.contextPath}/js/messages_zh.js"></script>
 
<script type="text/javascript">
$.validator.setDefaults({
    submitHandler: function() {
      
    	//提交时检查仓库商品是否大于客户需要的数量
      <c:forEach var="trade" items="${tradeList}">
  	
    	if(($('#re_${trade.goodsId}').val())<0){
    		 
    		alert('该仓库商品:'+'${trade.goodsName}'+' 不足'); 
    		return false;
    		alert("123");
    	} 
  	</c:forEach > 
  	alert("处理成功");
      return true;
    }
});
$().ready(function() {
	var date=new Date;
	var year=date.getFullYear();
	// 在键盘按下并释放及提交后验证提交表单
	  $("#signupForm").validate({
		    rules: { 
		    	  
		    },
		    messages: {
		      
		    }
		});
	});

$(function(){
	$('#warehouseFrom').change(function(){
		var warehouseId=$('#warehouseFrom').val();
		var url='${pageContext.request.contextPath}/trade?orderId=${order.orderId}&warehouseId='+warehouseId;
		$(location).attr('href', url);
});  
    
	
	
});
//提交时检查仓库商品是否大于客户需要的数量
/* function chickTrue() { 
	
  	<c:forEach var="trade" items="${tradeList}">
	
  	if(($('#re_${trade.goodsId}').val())<0){
  		 
  		alert('该仓库商品:'+'${trade.goodsName}'+' 不足'); 
  		return false;
  		alert("123");
  	} 
	</c:forEach > 
	alert("222"); 
	 return true; 
}*/



</script>
 
<title>具体信息</title>
</head>
<body>

<form class="form-inline" id="signupForm" action="${pageContext.request.contextPath}/ordersLog.action"
		method="post" onsubmit="return check()"  >
	客户收货地址:${order.province}${order.city}${order.alladdress}
	<br> 离客户收货地址最近仓库:

	<c:forEach var="warehouse" items="${warehouseList}">
        ${warehouse.warehouseName}&nbsp;&nbsp;&nbsp; &nbsp; 
</c:forEach>
<shiro:hasPermission name="role:thisWarehouseOt">
	<br> 选择要发货的仓库:
	<select name="fromWarehouseId" id="warehouseFrom">
		<c:forEach var="warehouse" items="${warehouseList}">
			<option value="${warehouse.warehouseId}"
			<c:if test="${warehouse.warehouseId==warehouseId}">selected="selected"</c:if>
			>
				${warehouse.warehouseName}</option>
		</c:forEach>
	</select>
	</shiro:hasPermission>
	<hr>
	<c:forEach var="trade" items="${tradeList}">
	
        商品名:<span id="${trade.goodsId}">${trade.goodsName}</span > &nbsp;&nbsp; 数量：  ${trade.tradeQuantity}  
        &nbsp;&nbsp; 此仓库剩余数量：<span id="${trade.warehouseGoodsQuantity}">${trade.warehouseGoodsQuantity}</span>
<input id="re_${trade.goodsId}"  type="hidden" value="${trade.warehouseGoodsQuantity-trade.tradeQuantity}">
	&nbsp;&nbsp;
	 <shiro:hasPermission name="role:thisWarehouseOt">
	<a class="btn btn-danger" href="${pageContext.request.contextPath}/thisWarehouseOt?goodsId=${trade.goodsId}&warehouseId=${warehouseId}"
			role="button">调拨</a>
			 </shiro:hasPermission>
		<br>
		<br>
	 
	</c:forEach>
	



 <input type="hidden" name="orderId" value="${orderId}"> 
 <input type="hidden" name="addressId" value="${addressId}">  

 <shiro:hasPermission name="role:thisWarehouseOt">
 <hr>
 选择物流:
 <select name="logisticsName" id="logisticsName" >
<c:forEach var="logisticsCompany" items="${logisticsCompanyList}">
       <option  value="${logisticsCompany.logisticsName}"> ${logisticsCompany.logisticsName}</option> 
      </c:forEach>
</select>   <br> 
<input type="submit"  value="提交" ><!-- onclick="chickTrue()" -->
  </shiro:hasPermission>
</form>
</body>
</html>
