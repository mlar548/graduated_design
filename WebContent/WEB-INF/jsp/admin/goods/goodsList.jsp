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
	<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/static/admin/layui/css/layui.css" />
		<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/static/admin/css/admin.css" />
<title>管理供应商</title>
</head>
<body>

<div class="wrap-container clearfix">

				<div class="column-content-detail">
					<form class="layui-form" action="">
						<div class="layui-form-item">
							<div class="layui-inline tool-btn">
								<button class="layui-btn layui-btn-small layui-btn-normal addSupplierBtn" data-msg="添加商品" data-url="${pageContext.request.contextPath}/GoodsAdd"><i class="layui-icon">&#xe654;</i></button>
							</div>
							<div class="layui-inline"  ">
								<input type="text" name="findGoodsName"  placeholder="请输入商品名" autocomplete="off" class="layui-input">
							</div>
							<!--   <div class="layui-inline">
								<select name="states" lay-filter="status">
									<option value="">选择类型</option>
									<option value="010">正常</option>
									<option value="021">停止</option>
									<option value="0571">删除</option>
								</select>
							</div>   -->
							<button class="layui-btn layui-btn-normal" lay-submit="search">搜索</button>
						</div>
					</form>
					<div class="layui-form" id="table-list">
						<table class="layui-table" lay-even lay-skin="nob">
							<colgroup>
								<%-- <col width="50"> --%>
								<col class="hidden-xs " width="60">
								<col  >
								<col class="hidden-xs " width="100">
								
								<col class="hidden-xs hidden-sm" >
								<col  width="100">
								<col  width="80">
								<col class="hidden-xs hidden-sm" width="80">
								
								<col width="150">
							</colgroup>
							<thead>
							
								<tr>
									<!--< th><input type="checkbox" name="" lay-skin="primary" lay-filter="allChoose"></th> -->
									<th class="hidden-xs ">序号</th>
									<th >商品名称</th>
									<th class="hidden-xs ">商品类型</th>
									<th class="hidden-xs hidden-sm">供应商名称</th>
									<th >价格</th>
									<th >库存</th>
									<th class="hidden-xs hidden-sm">单位</th>
									
									 
									<th>操作</th>
								</tr>
							</thead>
							<tbody>
							<c:forEach var="good" varStatus="varStatus" items="${goodsList}">
								<tr>
								 
								
									<%-- <td><input type="checkbox" name="" lay-skin="primary" data-id="${good.goodsId}"></td> --%>
									<td class="hidden-xs ">${varStatus.index+1}</td>
									<td >${good.goodsName}</td>
									<td class="hidden-xs ">${good.goodsType.goodsTypeName}</td>
									<td class="hidden-xs hidden-sm">${good.supplier.supplierName}</td>
									<td >${good.price}</td>
									<%-- <td class="hidden-xs hidden-sm">${good.beforeprice}</td> --%>
									<td >${good.remain}</td>
									<td class="hidden-xs hidden-sm">${good.unit}</td>
									<td>
										<div class="layui-inline">
										 	<shiro:hasPermission name="role:goodsUpdate">
											<button class="layui-btn layui-btn-small layui-btn-normal myBtn" data-url="${pageContext.request.contextPath}/goodsUpdate?goodsId=${good.goodsId}"><i class="layui-icon">&#xe642;</i></button>
											</shiro:hasPermission>
										<%-- <shiro:hasPermission name="role:goodsDelete">
											<button class="layui-btn layui-btn-small layui-btn-danger del-btn"  data-url="${pageContext.request.contextPath}/goodsDelete.action?goodsId=${good.goodsId}"><i class="layui-icon">&#xe640;</i></button>
											</shiro:hasPermission> --%>
										</div>
									</td>
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
										      <a href="${pageContext.request.contextPath}/goodsList?pageNo=${prev}" aria-label="Previous">
										        <span aria-hidden="true">&laquo;</span>
										      </a>
										    </li>
										    
										    <c:forEach begin="1" var="i" end="${allPage}">
										    <li><a href="${pageContext.request.contextPath}/goodsList?pageNo=${i}">${i}</a></li>
										    </c:forEach>
										    <li>
										      <a href="${pageContext.request.contextPath}/goodsList?pageNo=${next}" aria-label="Next">
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
