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

<title>模拟物流页</title>
</head>
<script type="text/javascript">
function formatDateTime(inputTime) {  
    var date = new Date(inputTime);
    var y = date.getFullYear();  
    var m = date.getMonth() + 1;  
    m = m < 10 ? ('0' + m) : m;  
    var d = date.getDate();  
    d = d < 10 ? ('0' + d) : d;  
    var h = date.getHours();
    h = h < 10 ? ('0' + h) : h;
    var minute = date.getMinutes();
    var second = date.getSeconds();
    minute = minute < 10 ? ('0' + minute) : minute;  
    second = second < 10 ? ('0' + second) : second; 
    return y + '-' + m + '-' + d+' '+h+':'+minute+':'+second;  
};
/* ajax */
$(function() {
	 
	 
	$('#ltId').blur(function(){
		 
		 	var url= "logisticsInformationAjax.action";
			 
	    		var params = {
	    				ltId:$('#ltId').val()
			};
		
		      		  $.getJSON(url,params,function(logisticsInformationList){//响应回来的json数组
		      			
		      			   $('#table1').empty();
		      			  $.each(logisticsInformationList,function(i,logisticsInformation){//jquery遍历数组函数
		      				//先构建<option>节点
		      				 var a=formatDateTime(logisticsInformation.ltTime);
		      				   var tbody = $("<tr> <td >"+logisticsInformation.id+"</td>"+
		      						   
		      						  "<td >"+logisticsInformation.address+"</td>"+
		      						  "<td >"+logisticsInformation.information+"</td>"+
		      						  
		      						  "<td >"+a+"</td>" 
		      						   
		      				                                                                                           
		      						 );  
		      						  
		      						  
		      				  
		      				 $('#table1').append($(tbody));
		      			  }); 
		      			  
		      			  
		      			  
		              });    
	});  
 
 
	$('#sub').click(function(){
		 
		 	var url= "logisticsInformationAjaxForAna.action";
			 
	    		var params = {
	    				ltId:$('#ltId').val(),
	    				selectVal:$('#selectVal').val(),
	    				addrellVal:$('#addrellVal').val()
	    			 	
			};
		
		      		  $.getJSON(url,params,function(logisticsInformationList){//响应回来的json数组
		      			   
		      			   $('#table1').empty();
		      			  $.each(logisticsInformationList,function(i,logisticsInformation){//jquery遍历数组函数
		      				//先构建<option>节点
		      				 var a=formatDateTime(logisticsInformation.ltTime);
		      				   var tbody = $("<tr> <td >"+logisticsInformation.id+"</td>"+
		      						   
		      						  "<td >"+logisticsInformation.address+"</td>"+
		      						  "<td >"+logisticsInformation.information+"</td>"+
		      						  
		      						  "<td >"+a+"</td>" 
		      						   
		      				                                                                                           
		      						 );  
		      						  
		      						  
		      				  
		      				 $('#table1').append($(tbody));
		      			  }); 
		      			  
		      			  
		      			  
		              });    
	});  
}); 
</script>

<body>
<form action="${pageContext.request.contextPath}/logisticsInformationAna.action"
		method="post" onsubmit="return check()" >
  物流编号：<input type="text" name="ltId" id="ltId" value="${ltId}" >&nbsp;&nbsp;
  所在地址：<input type="text" name="address" id="addrellVal">&nbsp;&nbsp;
  信息：
  <select name="information" id="selectVal">
         <option value="运输中">运输中</option>
         <option value="已到达">已到达，请取件</option>
  </select>
 
  <input type="button" id="sub" value="模拟">
  
  </form>
  <table border="1px" class="table table-hover" style="width: 96% ;margin: 0 auto">
    <tr>
       <th>流水号</th>
       <th>实时地址</th>
       <th> 详情 </th>
       <th> 时间 </th>
   </tr>
   <tbody  id="table1">
 
	 </tbody>
</table>	
  
</body>
</html>
