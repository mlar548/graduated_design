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

<title>管理供应商</title>
</head>
<body>
<form class="form-inline" id="signupForm" action="${pageContext.request.contextPath}/logisticsCompanyUpdate.action"
		method="post" onsubmit="return check()"   >
      
		<center>
			<h2>物流公司信息修改</h2>
		</center>
		<center>
			<hr>
		</center>
		<div class="tianjia">
        <input type="hidden" name="id" value="${logisticsCompany.id}" >
        <div class="form-group">
        <label>   物流公司名字：</label>
        
     <input type="text" name="logisticsName" class="form-control"
					style="width: 100px" value="${logisticsCompany.logisticsName}" ><br>
     </div>
     <div class="form-group">
        <label>  联系方式：</label>
        
       <input type="text" name="phone"  class="form-control"
					style="width: 100px" value="${logisticsCompany.phone}" ><br>
        </div>
        </div>
        <br>
         
       <center>
			<input type="submit" class="btn btn-success"  onmousedown="check(this)"   value="提交">&nbsp;&nbsp;&nbsp;
		</center>
</form>
</body>
</html>
