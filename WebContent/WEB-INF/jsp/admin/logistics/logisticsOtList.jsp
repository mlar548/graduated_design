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

<title>订单管理页</title>
</head>
<body>
<div class="wrap-container clearfix">

				<div class="column-content-detail">
					<form class="layui-form" action="">
						<div class="layui-form-item">
							<div class="layui-inline tool-btn">
							   <a class="btn btn-info" role="button" href="${pageContext.request.contextPath}/logisticsList">商品采购物流</a>
<a class="btn btn-danger" role="button" href="${pageContext.request.contextPath}/logisticsOrdersList">客户订单物流</a>
<a class="btn btn-info" role="button" href="${pageContext.request.contextPath}/logisticsOtList">仓库调拨物流</a>
							
								<%-- <button class="layui-btn layui-btn-small layui-btn-normal addSupplierBtn" data-msg="添加采购" data-url="${pageContext.request.contextPath}/warehouseList"><i class="layui-icon">&#xe654;</i></button> --%>
							</div>
							<div class="layui-inline"  ">
								<input type="text" name="title" required lay-verify="required" style="width: 100px" placeholder="请输入标题" autocomplete="off" class="layui-input">
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
					</form>
					<div class="layui-form" id="table-list">
						<table class="layui-table" lay-even lay-skin="nob">
							<colgroup>
								 
								<col class="hidden-xs  " width="100">
								<col class="hidden-xs" width="200">
								<col class="hidden-xs" >
								<col   >
								 
								<col  width="130" > 
								 
							</colgroup>
							<thead>
							
								<tr>
									<th class="hidden-xs" >物流编号</th>
									<th class="hidden-xs">快递单生成时间</th>
									<th class="hidden-xs">物流公司</th>
									<th  >调拨仓库</th>
									<th  >物流信息</th>
									 
									
									 
								</tr>
							</thead>
							<tbody>
							<c:forEach var="logistics" items="${logisticsList}">
								<tr>
			<td class="hidden-xs">${logistics.logisticsId}</td>
			<td class="hidden-xs"><fmt:formatDate value="${logistics.logisticsTime}" pattern="yyyy-MM-dd HH:mm:ss"/>
			<td class="hidden-xs">${logistics.logisticsName}</td>
			
			</td>
			<td>从《${logistics.fromWarehouseId}》 调拨到《${logistics.toWarehouseId}》</td>
			<td><a href="${pageContext.request.contextPath}/logisticsInformation?logisticsId=${logistics.logisticsId}">查看物流信息</a></td>
			   
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
										      <a href="${pageContext.request.contextPath}/logisticsOtList?pageNo=${prev}" aria-label="Previous">
										        <span aria-hidden="true">&laquo;</span>
										      </a>
										    </li>
										    
										    <c:forEach begin="1" var="i" end="${allPage}">
										    <li><a href="${pageContext.request.contextPath}/logisticsOtList?pageNo=${i}">${i}</a></li>
										    </c:forEach>
										    <li>
										      <a href="${pageContext.request.contextPath}/logisticsOtList?pageNo=${next}" aria-label="Next">
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