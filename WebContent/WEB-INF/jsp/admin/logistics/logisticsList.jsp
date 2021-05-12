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
				<form class="form-inline">
				 <div class="form-group">
				  <label>选择类型:</label>
					 <select  class="form-control" name="states" onchange="location.href=this.value;">
								 
 				<option value="${pageContext.request.contextPath}/logisticsList?chooseType=0"> 全部物流</option> 
									<option value="${pageContext.request.contextPath}/logisticsList?chooseType=1" 
									    <c:if test="${chooseType==1}">selected="selected"</c:if>  
									> 客户订单物流 </option>
									<option value="${pageContext.request.contextPath}/logisticsList?chooseType=2" 
									<c:if test="${chooseType==2}">selected="selected"</c:if> 
									> 仓库调拨物流 </option>
									<option value="${pageContext.request.contextPath}/logisticsList?chooseType=3" 
									<c:if test="${chooseType==3}">selected="selected"</c:if> 
									>  采购入库物流 </option>
								</select>
								</div>
								
								<div class="form-group">
				  <label>状态:</label>
					 <select  class="form-control" name="states" onchange="location.href=this.value;">
								 
 				<option value="${pageContext.request.contextPath}/logisticsList"> 所有</option> 
									<option value="${pageContext.request.contextPath}/logisticsList?chooseZt=1&chooseType=${chooseType}" 
									    <c:if test="${chooseZt==1}">selected="selected"</c:if>  
									> 已到达</option>
									<option value="${pageContext.request.contextPath}/logisticsList?chooseZt=2&chooseType=${chooseType}" 
									<c:if test="${chooseZt==2}">selected="selected"</c:if> 
									> 未到达 </option>
									 
								</select>
								</div>
								</form>
					<div class="layui-form" id="table-list">
						<table class="layui-table" lay-even lay-skin="nob">
							<colgroup>
								 
								<col class="hidden-xs  " width="60">
								<col class="hidden-xs  " width="100">
								<col class="hidden-xs" width="130">
								<col class="hidden-xs" >
								<col class="hidden-xs" >
								<col >
							 
								 
							</colgroup>
							<thead>
							
								<tr>
									<th class="hidden-xs" >序号</th>
									<th class="hidden-xs" >物流号</th>
									<th class="hidden-xs">快递单生成时间</th>
									<th class="hidden-xs">物流公司</th>
									<th >状态</th>
									<th  >物流信息</th>
									
									 
								</tr>
							</thead>
							<tbody>
							<c:forEach var="logistics" varStatus="varStatus" items="${LogisticsList}">
								<tr>
									
								 <td class="hidden-xs  " > ${varStatus.index+1}</td>
								 <td class="hidden-xs  " > ${logistics.logisticsId}</td>
			<td class="hidden-xs"><fmt:formatDate value="${logistics.logisticsTime}" pattern="yyyy-MM-dd HH:mm:ss"/>
			<td class="hidden-xs">${logistics.logisticsName}</td>
			<td class="hidden-xs">
			<c:if test="${logistics.status==0}">
			未到达
			</c:if>
			<c:if test="${logistics.status==1}">
			已到达
			</c:if>
			
			</td>
			 
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
										      <a href="${pageContext.request.contextPath}/logisticsList?pageNo=${prev}&chooseType=${chooseType}&chooseZt=${chooseZt}" aria-label="Previous">
										        <span aria-hidden="true">&laquo;</span>
										      </a>
										    </li>
										    
										    <c:forEach begin="1" var="i" end="${allPage}">
										    <li><a href="${pageContext.request.contextPath}/logisticsList?pageNo=${i}&chooseType=${chooseType}&chooseZt=${chooseZt}">${i}</a></li>
										    </c:forEach>
										    <li>
										      <a href="${pageContext.request.contextPath}/logisticsList?pageNo=${next}&chooseType=${chooseType}&chooseZt=${chooseZt}" aria-label="Next">
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