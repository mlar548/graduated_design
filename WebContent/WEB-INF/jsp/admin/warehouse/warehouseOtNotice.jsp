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

<title>仓库管理页</title>
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
					
					<form class="form-inline">
							 <div class="form-group">
				 
				  <label>状态:</label>
					 <select  class="form-control" name="states" onchange="location.href=this.value;">
								 
 				<option value="${pageContext.request.contextPath}/warehouseOtNotice?chooseZt=0"> 所有</option> 
									<option value="${pageContext.request.contextPath}/warehouseOtNotice?chooseZt=1" 
									    <c:if test="${chooseZt==1}">selected="selected"</c:if>  
									> 已读</option>
									<option value="${pageContext.request.contextPath}/warehouseOtNotice?chooseZt=2" 
									<c:if test="${chooseZt==2}">selected="selected"</c:if> 
									> 未读</option>
									 
									 
								</select>
								</div> 
						</form> 
						
					<div class="layui-form" id="table-list">
						<table class="layui-table" lay-even lay-skin="nob">
							<colgroup>
								<%-- <col  class="hidden-xs" width="60"> --%>
								<col class="hidden-xs " width="60">
								<col  >
								<col class="hidden-xs"  >
								<col class="hidden-xs" width="70">
								
								<col   width="150">
								<col width="150" >
								<col class="hidden-xs" width="80">
								<col class="hidden-xs" width="120">
								 
							</colgroup>
							<thead>
							
								<tr>
									<!-- <th  class="hidden-xs"><input type="checkbox" name="" lay-skin="primary" lay-filter="allChoose"></th> -->
									<th class="hidden-xs">序号</th>
									 
									<th >仓库</th>
									<th class="hidden-xs">需调商品</th>
									<th class="hidden-xs">数量</th>
									<th  >此仓库该商品余量</th>
									<th  class="hidden-xs">该商品剩余量</th>
									<th  class="hidden-xs">状态</th>
									<th  class="hidden-xs">操作</th>
									 
								</tr>
							</thead>
							<tbody>
							<c:forEach var="otnotice" varStatus="varStatus" items="${otnoticeList}">
								<tr>
								 
								
									<%-- <td><input type="checkbox" name="" lay-skin="primary" data-id="${warehouse.warehouseId}"></td> --%>
									<td class="hidden-xs ">${varStatus.index+1}</td>
									<td >${otnotice.warehouse.warehouseName}</td>
									<td class="hidden-xs">${otnotice.trade.goods.goodsName}</td>
									<td >${otnotice.trade.tradeQuantity}</td>
									<td > ${otnotice.warehouseLastNum} </td>
										<td class="hidden-xs">
										<c:if test="${otnotice.trade.goods.remain-otnotice.trade.tradeQuantity<0}">
											${otnotice.trade.goods.remain}&nbsp; &nbsp; 
											<span style="color:red;">
											总余量不足
											</span>
										</c:if>
										<c:if test="${otnotice.trade.goods.remain-otnotice.trade.tradeQuantity>=0}">   
										${otnotice.trade.goods.remain} 
										</c:if>
										</td>
										<td > ${otnotice.zt} </td>
										<td>
										  <shiro:hasPermission name="role:warehouseUpdate">
										<div class="layui-inline">
										  
											<%-- <button class="layui-btn layui-btn-small layui-btn-normal myBtn" 
											data-url="${pageContext.request.contextPath}/warehouseUpdate?warehouseId=${warehouse.warehouseId}">
											<i class="layui-icon">&#xe642;</i></button>  --%>
											
											<c:if test="${otnotice.zt!='已读'}">
                                           <a href="${pageContext.request.contextPath}/otnoticeYidu?id=${otnotice.id}" >已读</a>
                                           
                                           <br>
                                           </c:if>
                                           <a href="${pageContext.request.contextPath}/otnoticeYiChu?id=${otnotice.id}" >移除</a>
                                            
				      
				         
										</div>
										</shiro:hasPermission>
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
										      <a href="${pageContext.request.contextPath}/warehouseOtNotice?pageNo=${prev}&chooseZt=${chooseZt}" aria-label="Previous">
										        <span aria-hidden="true">&laquo;</span>
										      </a>
										    </li>
										    
										    <c:forEach begin="1" var="i" end="${allPage}">
										    <li><a href="${pageContext.request.contextPath}/warehouseOtNotice?pageNo=${i}&chooseZt=${chooseZt}">${i}</a></li>
										    </c:forEach>
										    <li>
										      <a href="${pageContext.request.contextPath}/warehouseOtNotice?pageNo=${next}&chooseZt=${chooseZt}" aria-label="Next">
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
