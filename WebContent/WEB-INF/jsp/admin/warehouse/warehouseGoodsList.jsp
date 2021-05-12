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
 <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/static/admin/layui/css/modules/myicon/iconfont.css"/>
<style>
	.fanhuiA{
    position: absolute;
    
    left: 20px;
    top: 8px;
    }
.fanhuiA i{
    color:#05C697;
    font-size: 30px;
    }
</style>
<title>仓品信息页</title>
</head>
<body>
  <a     class="fanhuiA " style=" text-decoration:none;"  href="javascript:history.go(-1);"  >
							<i class="iconfont "  > &#xe606;</i>
						</a> 
<br>
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
								<col width="60">
								<%-- <col class="hidden-xs " width="80">--%>
								<col  >
								<col  width="200">
								<col class="hidden-xs" width="130">
							 
								 
							</colgroup>
							<thead>
							
								<tr>
									<%--<th><input type="checkbox" name="" lay-skin="primary" lay-filter="allChoose"></th>--%>
									<th  >编号</th>
									<th >商品名</th>
									<th >数量</th>
									<th  class="hidden-xs">所占空间</th>
									 
									 
								</tr>
							</thead>
							<tbody>
							<c:forEach var="warehouseGoods" varStatus="varStatus" items="${warehouseGoodsList}">
								<tr> 
									 <%--<td><input type="checkbox" name="" lay-skin="primary" data-id="${warehouse.warehouseId}"></td>--%>
									
									<td >${varStatus.index+1}</td>
									 <%--<td class="hidden-xs">${warehouseGoods.warehouseGoodsId}</td>--%>
									<td>${warehouseGoods.goodsName} </td>
									<td>${warehouseGoods.warehouseGoodsQuantity}</td>
									<td class="hidden-xs">${warehouseGoods.usedCapacity}</td>
								</tr>
								</c:forEach> 

							</tbody>
						</table>
					  
					</div>
				</div>
		</div>
		
		<div id="fenye" > <!-- 分页 -->
		
								<nav aria-label="Page navigation" id="asd">
									  <ul class="pagination">
										    <li>
										      <a href="${pageContext.request.contextPath}/warehouseGoodsList?pageNo=${prev}&hid=${hid}" aria-label="Previous">
										        <span aria-hidden="true">&laquo;</span>
										      </a>
										    </li>
										    
										    <c:forEach begin="1" var="i" end="${allPage}">
										    <li><a href="${pageContext.request.contextPath}/warehouseGoodsList?pageNo=${i}&hid=${hid}">${i}</a></li>
										    </c:forEach>
										    <li>
										      <a href="${pageContext.request.contextPath}/warehouseGoodsList?pageNo=${next}&hid=${hid}" aria-label="Next">
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