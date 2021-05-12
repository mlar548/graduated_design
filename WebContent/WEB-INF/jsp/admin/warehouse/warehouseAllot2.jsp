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
<link rel="stylesheet" type="text/css"
	href="${pageContext.request.contextPath}/css/mycss2.css">
<script type="text/javascript">
 /* ajax */
    $(function(){
     
     /* 点击仓库，地址响应 */
    	  $('#warehouseFrom').change(function(){
    		   
	      		var url= "warehouseAjaxForOt.action";
	      		 
		      		var params = {
		      				warehouseId:$('#warehouseFrom').val()
	      		};
      		
			      		  $.getJSON(url,params,function(warehouseGoodsList){//响应回来的json数组
			      			 $('#goods').empty();
			      			  $.each(warehouseGoodsList,function(i,Goods){//jquery遍历数组函数
			      				  //先构建<option>节点
			      				  var opt = $("<option value='"+Goods.goodsId+"'>"+Goods.goodsName+"</option>");
			      				 $('#goods').append($(opt));
			      			  });
      		              });  
    	});  
    	  
    	   /* 点击物品，数量响应 */
    	  $('#goods').change(function(){
   		   
	      		var url= "warehouseAjaxForGoods.action";
	      		 
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
<script
	src="${pageContext.request.contextPath}/js/jquery.validate.min.js"></script>
<script src="${pageContext.request.contextPath}/js/messages_zh.js"></script>

<script type="text/javascript">
	$.validator.setDefaults({
		submitHandler : function() {
			alert("提交成功");
			return true;
		}
	});
	$().ready(function() {
		var date = new Date;
		var year = date.getFullYear();
		// 在键盘按下并释放及提交后验证提交表单
		$("#signupForm").validate({
			rules : {
				warehouseGoodsQuantity : "required",
			 

			},
			messages : {
				warehouseGoodsQuantity : "数量不能为空",
				 
			}
		});
	});
	jQuery.validator.addMethod("isSame", function(value, element) {
        var length = value.length;
        var mobile = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/;
        return this.optional(element) || (length == 11 && mobile.test(value));
       }, "请填写正确的手机号码");//可以自定义默认提示信
       
       function check(e) { 
   	              
    	   
    	 var a =  $('#warehouseFrom').val()
    	 var b =  $('#towarehouse').val()
   	    
   	    if (a==b) { 
   	              alert("要调拨的仓库不能相同");
   	        } else{
   	        	return true;
   	        }
   	    } 
 
</script>
<style type="text/css">
hr {
	width: 80%;
	background-color: #EBEBEB;
	height: 2px;
}

.error {
	color: red;
}
</style>
</head>
<body>
<br>
<form class="form-inline" id="signupForm" action="${pageContext.request.contextPath}/warehouseAllot.action"
		method="post" onsubmit="return check()">
		 <center>
			<h2>仓库商品调拨</h2>
		</center>
		<center>
			<hr>
		</center>
		<div class="tianjia">
		<div class="form-group">
				<label>选择仓库:</label>
				</div>
<br>
<div class="form-group">
 <label>从仓库:</label>
 <select name="fromWarehouseId" id="warehouseFrom" class="form-control"
					style="width: 100px"  >
<c:forEach var="warehouse" items="${warehouseList}">
       <option  value="${warehouse.warehouseId}"> ${warehouse.warehouseName}</option> 
      </c:forEach>
</select>  
&nbsp; &nbsp;

<label>调拨到仓库:</label>
<select name="toWarehouseId" id="towarehouse" class="form-control" style="width: 100px" >
<c:forEach var="warehouse" items="${warehouseList}">
       <option  value="${warehouse.warehouseId}"> ${warehouse.warehouseName}</option> 
      </c:forEach>
</select>
</div><br>
<div class="form-group">
<label>选择要调拨的商品:</label> <select name="goodsId" id="goods" class="form-control" style="width: 200px" >
          
</select>  
</div>
  <br>

<div class="form-group">
<label>*数量：</label><input onkeyup="this.value=this.value.replace(/\D/g,'')" type="text" name="warehouseGoodsQuantity" id="warehouseGoodsQuantity" class="form-control" style="width: 100px"/> 
 &nbsp;
 
 
<span id="sp"></span>
</div><br>
<div class="form-group">

 <label>选择物流公司 :</label> <select name="logisticsName" id="logisticsName"  class="form-control" style="width: 100px">
<c:forEach var="logisticsCompany" items="${logisticsCompanyList}">
       <option  value="${logisticsCompany.logisticsName}"> ${logisticsCompany.logisticsName}</option> 
      </c:forEach>
</select><br>
</div> 
 </div>
<center>
			<input type="submit" class="btn btn-success"  onmousedown="check(this)"   value="提交">&nbsp;&nbsp;&nbsp;
		</center>
</form>
</body>
</html>
