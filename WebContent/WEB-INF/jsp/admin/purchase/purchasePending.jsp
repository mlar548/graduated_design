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
<title>待处理采购信息</title>
</head>
<body>

<div class="wrap-container clearfix">

				<div class="column-content-detail">
					<form class="form-inline">
							 <div class="form-group">
				  <label>排序:</label>
					 <select  class="form-control" name="states" onchange="location.href=this.value;">
								 
 				<option value="${pageContext.request.contextPath}/purchasePending?chooseType=0&chooseZt=${chooseZt}"> 采购时间升序</option> 
									<option value="${pageContext.request.contextPath}/purchasePending?chooseType=1&chooseZt=${chooseZt}" 
									    <c:if test="${chooseType==1}">selected="selected"</c:if>  
									> 采购时间倒序 </option>
									<option value="${pageContext.request.contextPath}/purchasePending?chooseType=2&chooseZt=${chooseZt}" 
									<c:if test="${chooseType==2}">selected="selected"</c:if> 
									> 采购状态 </option>
									<option value="${pageContext.request.contextPath}/purchasePending?chooseType=3&chooseZt=${chooseZt}" 
									<c:if test="${chooseType==3}">selected="selected"</c:if> 
									>出单人 </option>
								</select>
								</div>
								
								<div class="form-group">
				  <label>状态:</label>
					 <select  class="form-control" name="states" onchange="location.href=this.value;">
								 
 				<option value="${pageContext.request.contextPath}/purchasePending?chooseType=${chooseType}"> 所有</option> 
									<option value="${pageContext.request.contextPath}/purchasePending?chooseZt=1&chooseType=${chooseType}" 
									    <c:if test="${chooseZt==1}">selected="selected"</c:if>  
									> 待审核</option>
									<option value="${pageContext.request.contextPath}/purchasePending?chooseZt=2&chooseType=${chooseType}" 
									<c:if test="${chooseZt==2}">selected="selected"</c:if> 
									> 未通过 </option>
									<option value="${pageContext.request.contextPath}/purchasePending?chooseZt=3&chooseType=${chooseType}" 
									<c:if test="${chooseZt==3}">selected="selected"</c:if> 
									> 已完成采购 </option>
									 
								</select>
								</div> 
						</form>
					<div class="layui-form" id="table-list">
						<table class="layui-table" lay-even lay-skin="nob">
							<colgroup>
								  <col class="hidden-xs" width="60">  
								<col class="hidden-xs" width="120">
								<col class="hidden-xs hidden-sm " >
								 
								
								<col class="hidden-xs" >
								
								<col class="hidden-xs" width="80">
								<col class="hidden-xs  " width="120">
								<col class="hidden-xs" width="70">
								
								<col class="hidden-xs" width="150">
							</colgroup>
							<thead>
							
								<tr>
									<!-- <th class="hidden-xs"><input type="checkbox" name="" lay-skin="primary" lay-filter="allChoose"></th> -->
									<th class="hidden-xs">序号</th>
									<th class="hidden-xs">采购编号</th>
									<th class="hidden-xs hidden-sm">供应商</th>
								 
									<th class="hidden-xs ">产生时间</th>
									
									<th class="hidden-xs" >出单人</th>
									<th class="hidden-xs ">状态</th>
									<th class="hidden-xs ">审核</th> 
									<th class="hidden-xs">操作</th>
								</tr>
							</thead>
							<tbody>
							<c:forEach var="purchase" varStatus="varStatus" items="${purchaseList}">
								<tr>
								 
								
								<%-- 	<td class="hidden-xs"><input type="checkbox" name="" lay-skin="primary" data-id="${good.goodsId}"></td> --%>
									<td  class="hidden-xs">${varStatus.index+1}</td>
									<td  class="hidden-xs">${purchase.purchaseId}</td>
									<td  class="hidden-xs hidden-sm">${purchase.supplier.supplierName}</td>
									 
									<td class="hidden-xs "><fmt:formatDate value="${purchase.purchaseDate}" pattern="yyyy-MM-dd"/></td>
									
									<%-- <td class="hidden-xs">${good.beforeprice}</td> --%>
									<td class="hidden-xs">${purchase.employeeId}</td>
									<td class="hidden-xs">
									
									
									${purchase.status}
									
									</td>
									<td class="hidden-xs">
									<c:if test="${purchase.status!='已完成采购'}">
									<button class="layui-btn layui-btn-small layui-btn-normal myBtn" data-url="${pageContext.request.contextPath}/purchaseLog?id=${purchase.id}"><i class="layui-icon">&#xe63c;</i></button>
									</c:if>
									</td>
									<td class="hidden-xs">
									<c:if test="${purchase.status!='已完成采购'}">
										<div class="layui-inline">
										
										 	<shiro:hasPermission name="role:purchaseUpdate">
											<button class="layui-btn layui-btn-small layui-btn-normal myBtn" data-url="${pageContext.request.contextPath}/purchaseUpdate?id=${purchase.id}"><i class="layui-icon">&#xe642;</i></button>
											</shiro:hasPermission>
										<%-- <shiro:hasPermission name="role:purchaseDelete.action">
											<button class="layui-btn layui-btn-small layui-btn-danger del-btn"  data-url="${pageContext.request.contextPath}/purchaseDelete.action?purchaseId=${purchase.purchaseId}"><i class="layui-icon">&#xe640;</i></button>
											</shiro:hasPermission> --%>
										</div>
										</c:if>
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
										      <a href="${pageContext.request.contextPath}/purchasePending?pageNo=${prev}" aria-label="Previous">
										        <span aria-hidden="true">&laquo;</span>
										      </a>
										    </li>
										    
										    <c:forEach begin="1" var="i" end="${allPage}">
										    <li><a href="${pageContext.request.contextPath}/purchasePending?pageNo=${i}">${i}</a></li>
										    </c:forEach>
										    <li>
										      <a href="${pageContext.request.contextPath}/purchasePending?pageNo=${next}" aria-label="Next">
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
