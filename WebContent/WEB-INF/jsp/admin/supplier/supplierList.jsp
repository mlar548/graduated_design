<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib prefix="shiro" uri="http://shiro.apache.org/tags" %>
<%@taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>

<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta name="renderer" content="webkit">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
 
<link rel="stylesheet" type="text/css"
	href="${pageContext.request.contextPath}/css/mycss.css">
<link
	href="${pageContext.request.contextPath}/dist/css/bootstrap.min.css"
	rel="stylesheet">
			<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/static/admin/layui/css/modules/myicon/iconfont.css"/>
<script type="text/javascript"
	src="${pageContext.request.contextPath}/esayUI/eui/jquery.min.js"></script>
	<script src="${pageContext.request.contextPath}/dist/js/bootstrap.js"></script>
	<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/static/admin/layui/css/layui.css" />
		<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/static/admin/css/admin.css" />
<style type="text/css">
/* body{text-align:center} 
#divmyfenye{
width: 100%; 
  height:50px;
  background-color: yellow;
  text-align:center
}  */
#s{
margin-right: 
}
</style>
<title>管理供应商</title>
</head>


<body >

<div class="wrap-container clearfix">

				<div class="column-content-detail">
					<form class="layui-form" action="${pageContext.request.contextPath}/supplier">
						<div class="layui-form-item">
							<div class="layui-inline tool-btn">
								<button class="layui-btn layui-btn-small layui-btn-normal addSupplierBtn" data-msg="供应商添加" data-url="${pageContext.request.contextPath}/supplierAdd"><i class="iconfont">&#xe61e;</i></button>
							</div>
							<div class="layui-inline"  >
								<input type="text" name="findSupplierName"  placeholder="请输入供应商名字" autocomplete="off" class="layui-input">
								<!-- required lay-verify="required" -->
							</div>
							<!-- <div class="layui-inline">
								<select name="states" lay-filter="status">
									<option value="">请选择一个状态</option>
									<option value="010">正常</option>
									<option value="021">停止</option>
									<option value="0571">删除</option>
								</select>
							</div> -->
							<button class="layui-btn layui-btn-normal" lay-submit="search">搜索</button>
						</div>
					</form>
					<div class="layui-form" id="table-list">
						<table class="layui-table" lay-even lay-skin="nob">
							<colgroup>
								<col width="60">
							 
								<col class="hidden-xs" width="250">
								
								<col class="hidden-xs  " width="200">
								<col class="hidden-xs hidden-sm">
								
								<col width="150">
							</colgroup>
							<thead>
							
								<tr>
									<!-- <th><input type="checkbox" name="" lay-skin="primary" lay-filter="allChoose"></th>
									 -->
									<th >编号</th>
									<th class="hidden-xs">供应商名称</th>
									<th class="hidden-xs  ">电话</th>
									<th class="hidden-xs hidden-sm">合作时间</th>
									 
									<th>操作</th>
								</tr>
							</thead>
							<tbody>
							<c:forEach var="supplier" varStatus="varStatus" items="${supplierlist}">
								<tr>
								 
								
								<%-- 	<td><input type="checkbox" name="" lay-skin="primary" data-id="${supplier.supplierId}"></td> --%>
									<td >${varStatus.index+1}</td>
									<td class="hidden-xs">${supplier.supplierName}</td>
									<td class="hidden-xs  "> ${supplier.supplierPhone}</td>
									<td class="hidden-xs hidden-sm"><fmt:formatDate value="${supplier.partnerDate}" pattern="yyyy-MM-dd"/></td>
									<td>
										<div class="layui-inline">
										 
											<button class="layui-btn layui-btn-small layui-btn-normal myBtn" data-url="${pageContext.request.contextPath}/supplierUpdate?supplierId=${supplier.supplierId}"><i class="iconfont icon-xiugai07"></i></button>
											<%-- <button class="layui-btn layui-btn-small layui-btn-danger del-btn"  data-url="${pageContext.request.contextPath}/supplierDelete.action?supplierId=${supplier.supplierId}"><i class="iconfont icon-ziyuan"></i></button> --%>
										</div>
									</td>
								</tr>
								</c:forEach> 

							</tbody>
						</table>
						<!-- <div class="page-wrap">
							<ul class="pagination">
								<li class="disabled"><span>«</span></li>
								<li class="active"><span>1</span></li>
								<li>
									<a href="#">2</a>
								</li>
								<li>
									<a href="#">3</a>
								</li>
								<li>
									<a href="#">4</a>
								</li>
								<li>
									<a href="#">»</a>
								</li>
							</ul>
						</div> -->
						
					</div>
				</div>
		</div>
		
		<div id="fenye"> <!-- 分页 -->
		
								<nav aria-label="Page navigation" id="asd">
									  <ul class="pagination">
										    <li>
										      <a href="${pageContext.request.contextPath}/supplier?pageNo=${prev}" aria-label="Previous">
										        <span aria-hidden="true">&laquo;</span>
										      </a>
										    </li>
										    
										    <c:forEach begin="1" var="i" end="${allPage}">
										    <li><a href="${pageContext.request.contextPath}/supplier?pageNo=${i}">${i}</a></li>
										    </c:forEach>
										    <li>
										      <a href="${pageContext.request.contextPath}/supplier?pageNo=${next}" aria-label="Next">
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
<script type="text/javascript">

</script>
	 
</html>
