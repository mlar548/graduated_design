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
		<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/static/admin/layui/css/layui.css"/>
<script type="text/javascript">
/* ajax */
$(function(){
	/* 点击角色，响应 */
	 
	  $('#roleChoose').change(function(){
		  var url= "permissionsRemoveAjaxForroleChoose";
 		 
    		var params = {
    				roleId:$('#roleChoose').val()
		};
	  
	      		  $.getJSON(url,params,function(permissionsList){//响应回来的json数组
	      			 $('#tbodyPessmissionsList').html("");
	      			  $.each(permissionsList,function(i,permissions){//jquery遍历数组函数
	      				  //先构建<option>节点
	      				   var tbody = $("<tr> <td class='hidden-xs'>"+permissions.permissionId+"</td>"+
	      						   
	      						  "<td class='hidden-xs'>"+permissions.name+"</td>"+
	      						  "<td class='hidden-xs'>"+permissions.description+"</td>"+
	      						  "<td class='hidden-xs'> "+permissions.type+"</td>"+
	      						  "<td ><div class='layui-inline'>"+
	      					    	"<a class='btn btn-success' role='button' href='${pageContext.request.contextPath}/toPermissionsAdd?roleId="+permissions.roleId+"&permissionId="+permissions.permissionId+"' ><span class='glyphicon glyphicon-ok' aria-hidden='true'></span></a>"+                         
	      						
	      						  " </div></td></tr>");  
	      						  
	      						  
	      				  
	      				 $('#tbodyPessmissionsList').append($(tbody));
	      			  });
	              });  
	});  
	
	
});

</script>		
<title>权限添加</title>
</head>
<style>
 body{
 
    /* background-color:#D0DFEF ;    */
 }
    .tianjiaPermissions{
 /*    width:700px;
    height:800px;
    */
 
    margin-left: 30px; 
    }
    hr{
     
    width:80%;
    background-color:#EBEBEB;
      height:2px;
    }
    
    #anniu{
  width:100%;
  
    text-align: center;
    }
    
     .form-group{
    margin-top:10px;
    }
   
</style>
<body>
<br>
<!-- window.history.back(-1); -->




<form class="form-inline" action="${pageContext.request.contextPath}/supplierAdd.action"
		method="post" onsubmit="return check()">
		<%-- <center><h1>添加权限</h1></center> --%>
	 
		<div class="tianjiaPermissions">
<div class="form-group">
    <label >选择要添加权限的管理员角色:</label>
    <select name="roleId" id="roleChoose"  class="form-control" style="width:150px">	
	<option value="4" >客户管理员</option>
	<option value="6" <c:if test="${roleId==6}">selected="selected"</c:if>>经理</option> 
	<option value="5" <c:if test="${roleId==5}">selected="selected"</c:if>>仓品管理员</option> 
</select>
 
   </div>
<!--    
<div class="form-group">
    <label >类型:</label>
    <select name="type" class="form-control"  style="width:100px">	
	<option value="meue ">meue</option>
	<option value="button">button</option>
</select>  </div> <br> -->  
<!-- 
&nbsp;&nbsp;&nbsp;
<div class="form-group">
    <label >选择要添加的权限:</label>
    <select name="type" class="form-control"  style="width:180px">	
	<option value="权限1">权限1</option>
	<option value="	权限2"> 权限2</option>
</select>
 
   </div> 
   &nbsp;&nbsp;&nbsp;   
 <div class="form-group ">
<input type="submit"  class="form-control btn btn-success" value="确认添加" >&nbsp;&nbsp;&nbsp;
 </div> -->
 </div>
</form> 
<center><hr></center>
<center><h1>该管理员未授权限</h1></center>
<div class="wrap-container clearfix">

				<div class="column-content-detail">
					 
					<div class="layui-form" id="table-list">
						<table class="layui-table" lay-even lay-skin="nob">
							<colgroup>
								<%-- <col width="50"> --%>
								<col class="hidden-xs " width="100">
								<col  width="150">
								<col  class="hidden-xs" >
								<col class="hidden-xs" width="130">
								
								 
								<col   width="120">
								 
							</colgroup>
						<thead>
							
								<tr>
									<!-- <th><input type="checkbox" name="" lay-skin="primary" lay-filter="allChoose"></th> -->
									<th class="hidden-xs">权限Id</th>
									<th >权限名称</th>
									<th class="hidden-xs">具体功能</th>
									<th class="hidden-xs">权限类型</th>
									<th>授权</th>
									 
									 
								</tr>
							</thead>
							<tbody id="tbodyPessmissionsList">
							 
							<c:forEach var="permissions" items="${permissionsList}">
								<tr >
									<%-- <td><input type="checkbox" name="" lay-skin="primary" data-id="${good.goodsId}"></td> --%>
									<td class="hidden-xs">${permissions.permissionId}</td>
									<td >${permissions.name}</td>
									<td class="hidden-xs">${permissions.description}</td>
									<td class="hidden-xs"> ${permissions.type}</td>
									<td  >
										<div class="layui-inline"> 
											 <a class="btn btn-success" role="button"  href="${pageContext.request.contextPath}/toPermissionsAdd?roleId=${permissions.roleId}&permissionId=${permissions.permissionId}"><span class="glyphicon glyphicon-ok" aria-hidden="true"></span></a>
										</div>

									</td>
								</tr>
								</c:forEach> 

							</tbody>
						</table>
					  
					</div>
				</div>
		</div>

</body>
 
</html>
