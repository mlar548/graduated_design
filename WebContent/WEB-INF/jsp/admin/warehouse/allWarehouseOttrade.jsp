<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib prefix="shiro" uri="http://shiro.apache.org/tags"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>

<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">


<link
	href="${pageContext.request.contextPath}/dist/css/bootstrap.min.css"
	rel="stylesheet">

<script type="text/javascript"
	src="${pageContext.request.contextPath}/esayUI/eui/jquery.min.js"></script>
<script src="${pageContext.request.contextPath}/dist/js/bootstrap.js"></script>
<link rel="stylesheet" type="text/css"
	href="${pageContext.request.contextPath}/static/admin/layui/css/layui.css" />
<link rel="stylesheet" type="text/css"
	href="${pageContext.request.contextPath}/static/admin/css/admin.css" />
<script
	src="${pageContext.request.contextPath}/js/jquery.validate.min.js"></script>
<script src="${pageContext.request.contextPath}/js/messages_zh.js"></script>
			<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/static/admin/layui/css/modules/myicon/iconfont.css"/>
<script type="text/javascript">
	$.validator.setDefaults({
		submitHandler : function() {
			alert("添加成功");
			return true;
		}
	});
	$().ready(function() {
		// 在键盘按下并释放及提交后验证提交表单
		$("#signupForm").validate({
			rules : {
				purchaseQuantity : "required",
				purchasePrice : "required",

			},
			messages : {
				purchaseQuantity : "请输入调拨数量",
				purchasePrice : "请输入调拨价格",
			}
		});
	});

	function check(e) {
		var re = /^\d+(?=\.{0,1}\d+$|$)/
		var re2 = /^(([1-9]{1}\\d*)|([0]{1}))(\\.(\\d){0,2})?$/

		if (e.value != "") {
			if (!re.test(e.value)) {
				alert("请输入正确的数字");
				e.value = "";
				e.focus();
			}
		}
	}
	function kehu() {
		/* alert("123"); */
		$("#typeChoose").empty();

		var address = document.getElementById("typeChoose");

		var lab = document.createElement("label");
		var ipt = document.createElement("input");
		lab.innerHTML = "请填写客户地址:";
		ipt.setAttribute("class", "form-control");

		address.appendChild(lab);
		address.appendChild(ipt);

	}
	function ruku() {
		/* alert("123"); */
		$("#typeChoose").empty();

		var wt = document.getElementById("typeChoose");

		var lab = document.createElement("label");

		var sel = document.createElement("select");
		lab.innerHTML = "选择仓库:";
		sel.setAttribute("id", "warehouseId");
		sel.setAttribute("name", "warehouseId");
		sel.setAttribute("style", "width:200px");
		sel.setAttribute("class", "form-control");

		wt.appendChild(lab);

		wt.appendChild(sel);

		$(function() {

			<c:forEach var="warehouse" items="${warehouseList}">

			$("#warehouseId")
					.append(
							" <option  value='${warehouse.warehouseId}'> ${warehouse.warehouseName}</option> ");

			</c:forEach>

		});
	}
</script>

<style>
.tianjia {
	/*    width:700px;
    height:800px;
    */
	width: 90%;
	margin: 0 auto;
	
	/* margin-left: 90px ;  */
}
.tianjia2 {
	/*    width:700px;
    height:800px;
    */
	width: 70%;
 
	margin: 0 auto;
	position: relative;
	/* margin-left: 90px ;  */
}
.thismyleft{
position: absolute;
right:140px;
}
.thismyleft2{
position: absolute;
right:0px;
}

hr {
	width: 80%;
	background-color: #EBEBEB;
	height: 2px;
}

#anniu {
	width: 100%;
	text-align: center;
}

.tianjia .form-group {
	margin-top: 10px;
}

.error {
	color: red;
}
.mylabel{
    font-size:15px;
}
.redlabel{
    color: red;
}
.labeltop{
    font-size:20px;
}
.mylabelmid{
    font-size:16px;
}

</style>
<script type="text/javascript">
  
</script>
<title>调拨</title>
</head>
<body>
	<form class="form-inline" id="signupForm"
		action="${pageContext.request.contextPath}/purchaseLog.action"
		method="post" onsubmit="return check()">

		<div class="tianjia">
			<br>
			<center>
				<label class="labeltop">调拨详细信息</label>
			</center>
			<center>
				<hr>
			</center>
			<br>

<div class="tianjia">
			<div class="form-group">
				调拨订单号：<label class="mylabel">${allWarehouseOt.otid}</label> 
			</div> 

			<div class="form-group thismyleft">
				日期：<label class="mylabel"><fmt:formatDate value="${allWarehouseOt.otStartTime}" pattern="yyyy-MM-dd"/></label>

			</div>
 <br>
			<div class="form-group">
				从仓库：<label class="mylabel">${allWarehouseOt.fromWarehouse.warehouseName}  </label> 
				调拨到：<label class="mylabel"> ${allWarehouseOt.toWarehouse.warehouseName} </label> 
			</div>
		 
 
			 
 
 
<br>
<c:if test="${allWarehouseOt.description!=''}">
<div class="form-group thismyleft">
				<label class="mylabel redlabel">备注：${allWarehouseOt.description}</label> 
			</div>
<br><br>
</c:if>
			<div class="form-group thismyleft">
				出单人：<label class="mylabel ">${allWarehouseOt.employeeId}</label class="mylabel"> 
			</div>
			</div>
			</div>
			<center>
				<hr>
			</center>
			<div class="tianjia">
			<br>
			
			<center>
			
				<label class="mylabelmid">调拨明细</label>
			</center>
			<!--  调拨明细表 -->
			<div>
				<table class="layui-table" lay-even lay-skin="nob">
					<colgroup>
						<col width="70">
						<col >
						<col width="140">
						<col width="170">
					 
						
					</colgroup>
					<thead>

						<tr>

							<th>序号</th>
							<th>要调拨的商品名称</th>
							<th>要调拨的数量</th>
							<th>被调拨仓库剩余</th>
							<th>备注</th>
							 
						</tr>
					</thead>
					<tbody id="thisthead">

<c:forEach var="warehouseOt"   items="${allWarehouseOt.warehouseOtList}">
						<tr>

							<td>${warehouseOt.id}</td> 
							<td>${warehouseOt.goods.goodsName}</td>
							<td>${warehouseOt.warehouseGoodsQuantity}</td>
							<th>被调拨仓库剩余</th>
							<td>${warehouseOt.description}</td>
							 
							
							<%-- <input type="hidden" name="purchasetrade.purchaseId" value="${purchasetrade.purchaseId}"> --%>
						</tr>
</c:forEach>
						 
					</tbody>
				</table>
<div class="tianjia">
 
			</div>
</div>
 
		</div>
		<br>
	 
 <center>
 	<a href="javascript:history.go(-1);" type="button"  class="btn btn-info" >返回</a>
		</center>
 
	</form>
	 

</body>

<script
	src="${pageContext.request.contextPath}/static/admin/layui/layui.js"
	type="text/javascript" charset="utf-8"></script>
<script type="text/javascript">
	layui.config({
		base : '${pageContext.request.contextPath}/static/admin/js/module/'
	}).extend({
		dialog : 'dialog',
	});
</script>

<script
	src="${pageContext.request.contextPath}/static/admin/js/common.js"
	type="text/javascript" charset="utf-8"></script>
</html>