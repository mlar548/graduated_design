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

<title>选择物流页供应商</title>
</head>
<body>

<form action="${pageContext.request.contextPath}/ordersLog.action"
		method="post" onsubmit="return check()"  >
选择物流:
 <select name="logisticsName" id="logisticsName" >
<c:forEach var="logisticsCompany" items="${logistijavascript:;csCompanyList}">
       <option  value="${logisticsCompany.logisticsName}"> ${logisticsCompany.logisticsName}</option> 
      </c:forEach>
</select>   <br> 
<input type="hidden" name="orderId" value="${orderId}">
<input type="hidden" name="addressId" value="${addressId}">


<input type="submit" value="提交" >
</form>
</body>
</html>
