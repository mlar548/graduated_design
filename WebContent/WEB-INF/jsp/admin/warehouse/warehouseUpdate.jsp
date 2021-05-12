<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>


<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>

<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<!-- <meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1"> -->
 
<link rel="stylesheet" type="text/css"
	href="${pageContext.request.contextPath}/css/mycss.css">
<link
	href="${pageContext.request.contextPath}/dist/css/bootstrap.min.css"
	rel="stylesheet">
 <script type="text/javascript"
	src="${pageContext.request.contextPath}/esayUI/eui/jquery.min.js"></script>  
 <link rel="stylesheet" type="text/css"
	href="${pageContext.request.contextPath}/css/mycss2.css">
	<script type="text/javascript"
	src="${pageContext.request.contextPath}/esayUI/eui/jquery.min.js"></script>
<script src="${pageContext.request.contextPath}/dist/js/bootstrap.js"></script>
<script
	src="${pageContext.request.contextPath}/js/jquery.validate.min.js"></script>
<script src="${pageContext.request.contextPath}/js/messages_zh.js"></script>
 <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/static/admin/layui/css/modules/myicon/iconfont.css"/>
		
<script type="text/javascript">
	$.validator.setDefaults({
		submitHandler : function() {
			alert("修改成功");
			return true;
		}
	});
	$().ready(function() {
		var date = new Date;
		var year = date.getFullYear();
		// 在键盘按下并释放及提交后验证提交表单
		$("#signupForm").validate({
			rules : {
				allCapacity : "required",
				warehouseAddress : "required"
				

			},
			messages : {
				allCapacity : "不能为空",
				warehouseAddress : "具体地址不能为空"
				 
			}
		});
	});
 
 
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
.fanhuiA{
    position: absolute;
    
    left: 20px;
    top: 20px;
    }
.fanhuiA i{
    color:#05C697;
    font-size: 30px;
    }

</style>
<script type="text/javascript">
 
    $(function(){
    	$('#warehouseCity').change(function(){
    		 $("#warehouseAddress").attr("value","");
    	});
    
    	  $('#warehouseProvince').change(function(){
    		  $("#warehouseAddress").attr("value","");
      		var url= "warehouseAjax.action";
      		 
      		var params = {
      				warehouseProvince:$('#warehouseProvince').val()
      		};
      		
      		  $.getJSON(url,params,function(CityList){//响应回来的json数组
      			 $('#warehouseCity').empty();
      			  $.each(CityList,function(i,City){//jquery遍历数组函数
      				  //先构建<option>节点
      				  var opt = $("<option value='"+City.city+"'>"+City.city+"</option>");
      				  $('#warehouseCity').append($(opt));
      			  });
      		});  
    	});  
    });
    
    
</script>
<title>仓库信息修改页</title>

</head>
<body>
 
<form  class="form-inline" id="signupForm" action="${pageContext.request.contextPath}/warehouseUpdate.action"
		method="post" onsubmit="return check()">
		
		<center>
			<h2>仓库信息修改</h2>
		</center>
		<center>
			<hr>
		</center>
		<div class="tianjia">
	

 <a     class="fanhuiA " style=" text-decoration:none;"  href="javascript:history.go(-1);"  >
							<i class="iconfont "  > &#xe606;</i>
						</a> 
 <input type="hidden" name="warehouseId" value="${warehouse.warehouseId}"/> 
	<div class="form-group">
				<label>仓库名字:</label>

<input type="text" name="warehouseName" class="form-control"
					style="width: 100px" value="${warehouse.warehouseName}"/><br>
</div>
<div class="form-group">
				<label>仓库地址:</label>
 
<select name="warehouseProvince" id="warehouseProvince" class="form-control"
					style="width: 100px">
<c:forEach var="provinces" items="${provincesList}"> 
       <option  value="${provinces.province}" <c:if test="${warehouse.warehouseProvince==provinces.province}">selected="selected"</c:if> >${provinces.province}</option> 
</c:forEach>
</select>
  
<select name="warehouseCity" id="warehouseCity" class="form-control"
					style="width: 100px">
        <c:forEach var="cities" items="${citiesList}">
       <option  value="${warehouse.warehouseCity}" <c:if test="${warehouse.warehouseCity==cities.city}">selected="selected"</c:if> >${cities.city}</option> 
</c:forEach>  



</select>
</div>
<br>
<div class="form-group">
				<label>具体地址:</label>
<input type="text" name="warehouseAddress" id="warehouseAddress" class="form-control"
					style="width: 350px" id="warehouseAddress" value="${warehouse.warehouseAddress}"/>  
</div>
<br>
<div class="form-group">
				<label>总空间大小:</label>
<input type="text" name="allCapacity" id="allCapacity" class="form-control"
					style="width: 100px" onkeyup="this.value=this.value.replace(/\D/g,'')" value="${warehouse.allCapacity}"/><br>
</div>
</div>
<center>
			<input type="submit" class="btn btn-success"  onmousedown="check(this)"   value="提交">&nbsp;&nbsp;&nbsp;
		</center>
</form>
</body>
</html>
