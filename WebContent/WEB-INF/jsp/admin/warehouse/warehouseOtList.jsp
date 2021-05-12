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

<title>仓库调拨页</title>
</head>
<body>

<div class="wrap-container clearfix">

				<div class="column-content-detail">
					<%-- <form class="layui-form" action="">
						<div class="layui-form-item">
							<div class="layui-inline tool-btn">
								<button class="layui-btn layui-btn-small layui-btn-normal addSupplierBtn" data-msg="添加采购" data-url="${pageContext.request.contextPath}/warehouseList"><i class="layui-icon">&#xe654;</i></button>
							</div>
							<div class="layui-inline"  ">
								<input type="text" name="title" required lay-verify="required" placeholder="请输入标题" autocomplete="off" class="layui-input">
							</div>
							  <div class="layui-inline">
								<select name="states" lay-filter="status">
									<option value="">选择类型</option>
									<option value="010">正常</option>
									<option value="021">停止</option>
									<option value="0571">删除</option>
								</select>
							</div>  
							<button class="layui-btn layui-btn-normal" lay-submit="search">搜索</button>
						</div>
					</form> --%>
					<div class="layui-form" id="table-list">
						<table class="layui-table" lay-even lay-skin="nob">
							<colgroup>
								 
								<col class="hidden-xs " width="60">
								<col class="hidden-xs " width="90">
								<col class="hidden-xs " width="70" >
								<col class="hidden-xs"  width="130">
								<col class="hidden-xs"  >
								<col class="hidden-xs" width="87">
								
								<col   width="115">
							 
								 
							</colgroup>
							<thead>
							
								<tr>
									 
									<th class="hidden-xs  ">序号</th>
									<th class="hidden-xs  ">调拨单</th>
									<th >创建时间</th>
									<th class="hidden-xs">调拨仓库</th>
									<th>出单人</th>
									<th class="hidden-xs">物流信息</th>
									<th>详细调拨信息</th>
								 
									 
								</tr>
							</thead>
							<tbody>
							<c:forEach var="AllWarehouseOt" varStatus="varStatus" items="${AllWarehouseOtList}">
								<tr>
								  
									<td class="hidden-xs ">${varStatus.index+1}</td>
									<td class="hidden-xs ">${AllWarehouseOt.otid}</td>
									<td ><fmt:formatDate value="${AllWarehouseOt.otStartTime}" pattern="yyyy-MM-dd"/></td>
									<td class="hidden-xs">${AllWarehouseOt.fromWarehouse.warehouseName} 调拨到  ${AllWarehouseOt.toWarehouse.warehouseName}</td>
								<td>${AllWarehouseOt.employeeId}</td>
							        <td><a href="${pageContext.request.contextPath}/logisticsInformation?logisticsId=${AllWarehouseOt.logisticsId}">物流信息</a></td>
									 
									<td class="hidden-xs"><a href="${pageContext.request.contextPath}/allWarehouseOttrade?id=${AllWarehouseOt.id}" >详细调拨信息</a></td>
							 
										   
								 
 
								</tr>
								</c:forEach> 

							</tbody>
						</table>
					  
					</div>
				</div>
		</div>
		
		<div id="fenye"> <!-- 分页 -->
		
								<nav aria-label="Page navigation" id="asd">
									  <ul class="pagination">
										    <li>
										      <a href="${pageContext.request.contextPath}/warehouseList?pageNo=${prev}" aria-label="Previous">
										        <span aria-hidden="true">&laquo;</span>
										      </a>
										    </li>
										    
										    <c:forEach begin="1" var="i" end="${allPage}">
										    <li><a href="${pageContext.request.contextPath}/warehouseList?pageNo=${i}">${i}</a></li>
										    </c:forEach>
										    <li>
										      <a href="${pageContext.request.contextPath}/warehouseList?pageNo=${next}" aria-label="Next">
										        <span aria-hidden="true">&raquo;</span>
										      </a>
										    </li>
									  </ul>
								</nav>
                            </div>
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
