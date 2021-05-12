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
 <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/static/admin/layui/css/modules/myicon/iconfont.css"/>
	<style>
.fanhuiA{
    position: absolute; 
    left: 20px;
    top: 1px;
    }
.fanhuiA i{
    color:#05C697;
    font-size: 30px;
    }
</style>
<title>物流详情页</title>
</head>
<body>

 <a     class="fanhuiA " style=" text-decoration:none;"  href="javascript:history.go(-1);"  >
							<i class="iconfont "  > &#xe606;</i>
						</a> 
						
						<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						<c:forEach var="logisticsInformation" items="${logisticsInformationList}" begin="0" end="0">
						物流编号:${logisticsInformation.ltId}
						</c:forEach>
						<br>
					 
<table border="1px" class="table table-hover" style="width: 96% ;margin: 0 auto">
   <tr>
       <th>流水号</th>
       <th>实时地址</th>
       <th> 详情 </th>
       <th> 时间 </th>
   </tr>
<c:forEach var="logisticsInformation" items="${logisticsInformationList}">
   <tr>
    <td>  ${logisticsInformation.id}  </td>
   <td>    ${logisticsInformation.address}</td>
    <td>   ${logisticsInformation.information}</td>
   <td>  
   <fmt:formatDate value="${logisticsInformation.ltTime}" pattern="yyyy-MM-dd HH:mm:ss"/>
    </td>
	</tr>
	</c:forEach>
	
</table>	
</body>
</html>
