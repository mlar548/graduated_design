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
			alert("修改成功");
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
				purchaseQuantity : "请输入采购数量",
				purchasePrice : "请输入采购价格",
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
</style>
<script type="text/javascript">
	/* ajax */
	$(function() {

		/* 点击仓库，地址响应 */
		$('#supplierId').change(
				function() {
					var url = "supplierAjaxForpurchase.action";

					var params = {
						supplierId : $('#supplierId').val()
					};

					$.getJSON(url, params, function(goodsList) {//响应回来的json数组
						$('.goodselect').empty();
						$.each(goodsList, function(i, Goods) {//jquery遍历数组函数
							//先构建<option>节点
							var opt = $("<option value='"+Goods.goodsId+"'>"
									+ Goods.goodsName + "</option>");
							$('.goodselect').append($(opt));
						});
					});
				});
	});

	/* 删除一行 */
	function removeElementtr(obj) {

		$("#" + obj).remove();
		var temp = document.getElementById("thisthead");
		var trnumbe = temp.getElementsByTagName("tr").length;

		var td5 = document.getElementById("del" + trnumbe);

		var a1 = document.createElement("a");
		a1.setAttribute("href", "javascript:;");
		a1.setAttribute("onclick", "removeElementtr('tr" + trnumbe + "')");
		a1.innerHTML = "删除";
		td5.appendChild(a1);
	}

	/* 增加一行 */
	function addElementtr(obj) {
		var temp = document.getElementById(obj);
		var trnumbe = temp.getElementsByTagName("tr").length;
		var trnum = trnumbe + 1;

		var thisthead = document.getElementById(obj);

		var tr = document.createElement("tr");

		tr.setAttribute("id", "tr" + trnum);

		var td = document.createElement("td");
		var td2 = document.createElement("td");
		var td3 = document.createElement("td");
		var td4 = document.createElement("td");
		var td6 = document.createElement("td");
		
		var td5 = document.createElement("td");
		td5.setAttribute("id", "del" + trnum);
		td.innerHTML = trnum;

		var td2select = document.createElement("select");

		td2select.setAttribute("id", "td2select" + trnum);
		td2select.setAttribute("name", "purchasetrade["+trnumbe+"].goodsId");
		td2select.setAttribute("style", "width:240px");
		td2select.setAttribute("class", "form-control goodselect");

		/* td3.innerHTML = ""; */
/* <td><input type="text" name="purchasetrade[0].onePrice" value="" id=""
								style="width: 70px" class="form-control" /></td>
							<td><input type="text" name="purchasetrade[0].quantity" value="30" id=""
								style="width: 60px" class="form-control" /></td>
								<td><input type="text" name="purchasetrade[0].description" value="" id=""
								style="width: 110px" class="form-control" /></td> */
		
								var td3input = document.createElement("input");
								 td3input.setAttribute("value", "");
								 td3input.setAttribute("name", "purchasetrade["+trnumbe+"].onePrice");
								 td3input.setAttribute("style", "width: 70px");
								 td3input.setAttribute("class", "form-control");	
		
						
								
								
		var td4input = document.createElement("input");

		/*td4input.setAttribute("name", "30");  */
		td4input.setAttribute("value", "30");
		td4input.setAttribute("name", "purchasetrade["+trnumbe+"].quantity");
		td4input.setAttribute("style", "width: 60px");
		td4input.setAttribute("class", "form-control");

		var td6input = document.createElement("input");
		 td6input.setAttribute("value", "");
		 td6input.setAttribute("name", "purchasetrade["+trnumbe+"].description");
		 td6input.setAttribute("style", "width: 110px");
		 td6input.setAttribute("class", "form-control");	
		
		var a1 = document.createElement("a");
		a1.setAttribute("href", "javascript:;");
		a1.setAttribute("onclick", "removeElementtr('tr" + trnum + "')");
		a1.innerHTML = "删除";

		tr.appendChild(td);

		tr.appendChild(td2);
		td2.appendChild(td2select);

		/* 	td2select.appendChild(selectOp); */
		tr.appendChild(td3);
		   td3.appendChild(td3input);
		tr.appendChild(td4);
		   td4.appendChild(td4input);
		tr.appendChild(td6);
		   td6.appendChild(td6input);
		tr.appendChild(td5);
		   td5.appendChild(a1);
		var hiddenPurId = document.createElement("input");
		hiddenPurId.setAttribute("type", "hidden");
		hiddenPurId.setAttribute("name", "purchasetrade["+trnumbe+"].purchaseId");
		hiddenPurId.setAttribute("value", "${purchaseId}");
		 tr.appendChild(hiddenPurId);
		thisthead.appendChild(tr);

		$(function() {
			var goodsId = 123;
			var goodsName = 1;

			<c:forEach var="goods" items="${goodsList}">

			$("#td2select" + trnum)
					.append(
							"<option value='${goods.goodsId}' >${goods.goodsName}</option>");

			</c:forEach>

			/* 移除上一个删除 */
			$("#del" + trnumbe).empty();
		});

	}
</script>
<title>采购</title>
</head>
<body>
	<form class="form-inline" id="signupForm"
		action="${pageContext.request.contextPath}/purchaseUpdate.action"
		method="post" onsubmit="return check()">

		<div class="tianjia">
			<br>
			<center>
				<h1>修改采购信息</h1>
			</center>
			<center>
				<hr>
			</center>
			<br>

<input type="hidden" name="id" value="${purchase.id}"/>
			<div class="form-group">
			
				<label>采购订单号：</label> <input type="text" name="purchaseId"
					value="${purchase.purchaseId}" readonly="readonly" id=""
					style="width: 170px" class="form-control" /><br>
			</div>

			<div class="form-group">
				<label>日期：</label> <input type="text" name="purchaseDate"
					value="<fmt:formatDate value="${purchase.purchaseDate}" pattern="yyyy-MM-dd"/>"
					readonly="readonly" id="" style="width: 110px" class="form-control" /><br>

			</div>
	
			<div class="form-group">
				<label>供应商：</label> 
				  <input type="hidden" name="supplierId" value="${purchase.supplier.supplierId}"  />
				  <input type="text" name="" value="${purchase.supplier.supplierName}"
					readonly="readonly"   style="width: 80px" class="form-control" />
				
				 
			</div>
		
			<div class="form-group">
				<label>类型</label> 
				<input type="text" name="type" value="${purchase.type}"
					readonly="readonly"   style="width: 80px" class="form-control" />
				
			</div>



			<div class="form-group" id="typeChoose">
				<label>选择仓库:</label> <select name="warehouseId" id="warehouseId"
					style="width: 200px" class="form-control">
					<c:forEach var="warehouse" items="${warehouseList}">
						<option value="${warehouse.warehouseId}" <c:if test="${purchase.warehouse.warehouseId==warehouse.warehouseId}">selected="selected"</c:if> >
							${warehouse.warehouseName}</option>
					</c:forEach>
				</select>
			</div>

			<div class="form-group">
				<label>付款期限:</label> <input type="text" name="payTime" value="${purchase.payTime}" id=""
					style="width: 80px" class="form-control" /> <label>天</label>
			</div>




			<div class="form-group">
				<label>付款方式:</label> <select name="payType" style="width: 200px"
					class="form-control">

					<option value="支付宝" <c:if test="${purchase.payType=='支付宝'}">selected="selected"</c:if>>支付宝</option>
					<option value="银联" <c:if test="${purchase.payType=='银联'}">selected="selected"</c:if>>银联</option>
					<option value="现金" <c:if test="${purchase.payType=='现金'}">selected="selected"</c:if>>现金</option>
					<option value="其他" <c:if test="${purchase.payType=='其他'}">selected="selected"</c:if>>其他</option>

				</select>

			</div>
			<div class="form-group">
				<label>出单人：</label> <input type="text" name="" value="${purchase.employeeId}"
					readonly="readonly"   style="width: 80px" class="form-control" /><br>

			</div>


			<div class="form-group">
				<label>选择审核人：</label>
				<input type="text" name="" value="${purchase.jl.name}"
					readonly="readonly"   style="width: 80px" class="form-control" /><br>
				  
			</div>
			<br>
			<br>
			<center>
				<h1>采购明细</h1>
			</center>
			<!--  采购明细表 -->
			<div>
				<table class="layui-table" lay-even lay-skin="nob">
					<colgroup>
						<col width="70">
						<col width="200">
						<col>
						<col width="60">
						<col width="100">
						<col width="80">
					</colgroup>
					<thead>

						<tr>

							<th>序号</th>
							<th> 商品名称</th>
							<th>单价(元)</th>
							<th>数量</th>
							<th>备注</th>
							<th><a href="javascript:;" style="text-decoration:none;"
								onclick="addElementtr('thisthead')"><i class="iconfont">&#xe61e;</i></a></th>

						</tr>
					</thead>
					<tbody id="thisthead">
 
						
 <% int i=0; %>
<c:forEach var="purchasetrade"    items="${purchase.purchasetrade}" >

             <tr>
							<td><%=i+1%></td>
							<td><select name='purchasetrade[<%=i%>].goodsId' style="width: 240px"
								class="form-control goodselect">
									<c:forEach var="goods" items="${goodsList}">
										<option value="${goods.goodsId}"  <c:if test="${purchasetrade.goods.goodsId==goods.goodsId}">selected="selected"</c:if>>
											${goods.goodsName}</option>
									</c:forEach>
							</select></td>
							<td><input type="text" name="purchasetrade[<%=i %>].onePrice" value="${purchasetrade.onePrice}" id=""
								style="width: 70px" class="form-control" /></td>
							<td><input type="text" name="purchasetrade[<%=i %>].quantity" value="${purchasetrade.quantity}" id=""
								style="width: 60px" class="form-control" /></td>
								<td><input type="text" name="purchasetrade[<%=i %>].description" value="${purchasetrade.description}" id=""
								style="width: 110px" class="form-control" /></td>
							<td></td>
		 	<input type="hidden" name="purchasetrade[<%=i %>].ptid" value="${purchasetrade.ptid}">  
						</tr>
						
 <%   i=i+1; %>
</c:forEach>
						 


					</tbody>
				</table>

			</div>


			<div class="form-group">
				<label>备注:</label>
				<textarea type="text" name="description" style="width: 600px" rows="3"
					class="form-control"></textarea>
				<br>
			</div>


		</div>
		<br>
 


		<center>
			<input type="submit" class="btn btn-success" value="提交修改">&nbsp;&nbsp;&nbsp;

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