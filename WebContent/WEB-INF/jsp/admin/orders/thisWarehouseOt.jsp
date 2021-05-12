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

<title>仓库调拨页</title>

<script type="text/javascript">
 /* ajax */
    $(function(){
     
     
    	  
    	   /* 点击物品，数量响应 */
    	  $('#warehouseFrom').change(function(){
   		   
	      		var url= "ordersAjaxForGoods.action";
	      		 
		      		var params = {
		      				goodsId:$('#goods').val(),
		      				warehouseId:$('#warehouseFrom').val()
	      		};
    		
			      		  $.getJSON(url,params,function(warehouseGoods){//响应回来的json数组
			      			 
			      			 
			      				$('#sp').html("剩余数量："+warehouseGoods.warehouseGoodsQuantity);
			      				  
			      			  
    		              });  
      	});    
    });
    
    
</script>
</head>
<body>
<br>
<form action="${pageContext.request.contextPath}/warehouseAllot.action"
		method="post" onsubmit="return check()">
		

选择仓库:<br>
 从仓库:<select name="fromWarehouseId" id="warehouseFrom" >
<c:forEach var="warehouse" items="${warehouseList}">
       <option  value="${warehouse.warehouseId}"> ${warehouse.warehouseName}</option> 
      </c:forEach>
</select>   &nbsp; &nbsp;
调拨到仓库:
<input name="toWarehouseId" value="${toWarehouseId}" readonly="readonly">
   <br>

要调拨的商品:<input id="goods" name="goodsId" value="${goodsId}" readonly="readonly">  <br>


数量：<input type="text" name="warehouseGoodsQuantity"  /> 
 &nbsp;
 
 
<span id="sp"></span>
<br>
 选择物流公司 : <select name="logisticsName" id="logisticsName" >
<c:forEach var="logisticsCompany" items="${logisticsCompanyList}">
       <option  value="${logisticsCompany.logisticsName}"> ${logisticsCompany.logisticsName}</option> 
      </c:forEach>
</select><br>
  
 
<input type="submit" value="提交" >
</form>
</body>
</html>
