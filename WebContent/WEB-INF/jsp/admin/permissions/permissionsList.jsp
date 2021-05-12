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
<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/static/admin/layui/css/layui.css" />
<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/static/admin/css/admin.css" />
<script type="text/javascript">
/* ajax */
$(function(){
	/* 点击角色，响应 */
	 
	  $('#roleChoose').change(function(){
		  var url= "permissionsAjaxForroleChoose";
 		 
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
	      						  
	      						"<a class='btn btn-danger' role='button' href='${pageContext.request.contextPath}/permissionsDelete?roleId="+permissions.roleId+"&permissionId="+permissions.permissionId+"' ><span class='glyphicon glyphicon-remove' aria-hidden='true'></span></a>"+                                                                                             
	      						  " </div></td></tr>");  
	      						  
	      						  
	      				  
	      				 $('#tbodyPessmissionsList').append($(tbody));
	      			  });
	              });  
	});  
	
	
});

</script>
<style type="text/css">
.myTop{
   width:100%;
   
   margin-left: 30px;
   margin-top: 20px;
    position:relative;
}
 .myTopLeft{
   position:absolute;
    right:120px;
 }
 
</style>

<title>权限管理 </title>
</head>
<body>
<div class="myTop">	

<form class="form-inline">

<div class="form-group  " >
 <label   >请选择：</label>
<select name="roleId" id="roleChoose"  class="form-control" style="width:150px">	
	<option value="4" >客户管理员</option>
	<option value="6" <c:if test="${roleId==6}">selected="selected"</c:if>>经理</option>
	<option value="5" <c:if test="${roleId==5}">selected="selected"</c:if>>仓品管理员</option>
</select>

 </div>
 
<!--  &nbsp;  
 <div class="form-group  ">
<select name="type" class="form-control"  style="width:100px">	
	<option value="meue ">meue</option>
	<option value="button">button</option>
</select>
 </div> -->
 <div class="form-group myTopLeft " >
  
<button class="layui-btn layui-btn-small layui-btn-normal addSupplierBtn" data-msg="授权" data-url="${pageContext.request.contextPath}/permissionsAdd"><i class="layui-icon">&#xe654;</i></button>
 </div>
 </form>
</div>
 

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
									<th>移除权限</th>
									 
									 
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
											 
											 
												<a class="btn btn-danger" role="button"  href="${pageContext.request.contextPath}/permissionsDelete?roleId=${permissions.roleId}&permissionId=${permissions.permissionId}"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span></a>
											 
										</div>

									</td>
								</tr>
								</c:forEach> 

							</tbody>
						</table>
					  
					</div>
				</div>
		</div>
		
	<%-- 	<div id="fenye"> <!-- 分页 -->
		
								<nav aria-label="Page navigation" id="asd">
									  <ul class="pagination">
										    <li>
										      <a href="${pageContext.request.contextPath}/purchaseList?pageNo=${prev}" aria-label="Previous">
										        <span aria-hidden="true">&laquo;</span>
										      </a>
										    </li>
										    
										    <c:forEach begin="1" var="i" end="${allPage}">
										    <li><a href="${pageContext.request.contextPath}/purchaseList?pageNo=${i}">${i}</a></li>
										    </c:forEach>
										    <li>
										      <a href="${pageContext.request.contextPath}/purchaseList?pageNo=${next}" aria-label="Next">
										        <span aria-hidden="true">&raquo;</span>
										      </a>
										    </li>
									  </ul>
								</nav>
                            </div> --%>
</body>
<script src="${pageContext.request.contextPath}/static/admin/layui/layui.js" type="text/javascript" charset="utf-8"></script>
<script type="text/javascript">
	layui.config({
		base: '${pageContext.request.contextPath}/static/admin/js/module/'
	}).extend({
		dialog: 'dialog',
	});
	</script>
	
<script src="${pageContext.request.contextPath}/static/admin/js/common.js" type="text/javascript" charset="utf-8"></script>

</html>
