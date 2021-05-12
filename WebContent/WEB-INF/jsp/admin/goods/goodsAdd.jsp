<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib prefix="shiro" uri="http://shiro.apache.org/tags"%>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type"
	content="multipart/form-data;charset=utf-8" />
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
<link rel="stylesheet" type="text/css"
	href="${pageContext.request.contextPath}/css/mycss2.css">
	<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/static/admin/layui/css/modules/myicon/iconfont.css"/>
		
<title>管理供应商</title>

<script
	src="${pageContext.request.contextPath}/js/jquery.validate.min.js"></script>
<script src="${pageContext.request.contextPath}/js/messages_zh.js"></script>

<script type="text/javascript">
	$.validator.setDefaults({
		submitHandler : function() {
			alert("添加成功");
			return true;
		}
	});
	$().ready(function() {
		var date = new Date;
		var year = date.getFullYear();
		// 在键盘按下并释放及提交后验证提交表单
		$("#signupForm").validate({
			rules : {
				goodsName : "required",
				title : "required",
				price : "required",
				goodsCapacity : "required",
				unit : "required"

			},
			messages : {
				goodsName : "请输入商品名称",
				title : "请输入标题",
				price : "请输入商品价格",
				goodsCapacity : "请输入商品单位大小",
				unit : "请输入单位"
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
</script>
<style type="text/css">
hr {
	width: 80%;
	background-color: #EBEBEB;
	height: 2px;
}

.error {
	color: red;
}
.fanhuiA{
    position: absolute;
    
    left: 20px;
    top: 20px;
    }
.fanhuiA i{
    color:#05C697;
    font-size: 30px;
    }
</style>
</head>
<body>

	<form class="form-inline" id="signupForm"
		action="${pageContext.request.contextPath}/goodsAdd.action"
		method="post" onsubmit="return check()" enctype="multipart/form-data">
		<center>
			<h2>添加商品</h2>
		</center>
		<center>
			<hr>
		</center>
		<div class="tianjia">
		 <a     class="fanhuiA " style=" text-decoration:none;"  href="javascript:history.go(-1);"  >
							<i class="iconfont "  > &#xe606;</i>
						</a> 
			<div class="form-group">
				<label>*商品名称:</label> <input type="text" class="form-control"
					style="width: 250px" name="goodsName" id="goodsName"
					placeholder="输入该商品名称" />
			</div>
			<br>
			<div class="form-group">
				<label>*商品类型:</label> <select class="form-control"
					style="width: 100px" name="goodsTypeId">
					<c:forEach var="goodsType" items="${goodsTypeList}">
						<option value="${goodsType.goodsTypeId}">
							${goodsType.goodsTypeName}</option>
					</c:forEach>
				</select>
			</div>
			&nbsp; &nbsp;
			<div class="form-group">
				<label>*供应商编号:</label> <select class="form-control"
					style="width: 150px" name="supplierId">
					<c:forEach var="supplier" items="${supplierList}">
						<option value="${supplier.supplierId}">
							${supplier.supplierName}</option>
					</c:forEach>
				</select>
			</div>
			<br>
			<div class="form-group">
				<label>*标题:</label> <textarea type="text" name="title" id="title"
					class="form-control" style="width: 600px" rows="3" placeholder="前台商品标题..." ></textarea>
			</div>
			<br>
			<div class="form-group">
				<label>*图片:</label> <input type="File" id="goodsPhotoFile"
					accept=".jpeg,.jpg,.png" name="goodsPhotoFile" />

			</div>
			<br>
			<div class="form-group">
			    <label>*价格:</label> <input type="text" name="price" id="price"
					class="form-control" style="width: 80px" onblur="check(this)"
					onkeyup="this.value=this.value.replace(/[^0-9.]/g,'')"
					placeholder="售价" /> <label>￥</label>
			</div>

			&nbsp;&nbsp;
			<div class="form-group">
				<label>建议采购价:</label> <input type="text" name="beforeprice"
					placeholder="建议采购价" onblur="check(this)"
					onkeyup="this.value=this.value.replace(/[^0-9.]/g,'')"
					class="form-control" style="width: 80px" /> <label>￥</label>
			</div>
			&nbsp;&nbsp;
			<div class="form-group">
				<label>*单位:</label> <input type="text" name="unit" id="unit"
					class="form-control" placeholder="单位" style="width: 80px" />
			</div>
			<br>
			 
			<div class="form-group">
				<label>最小购买数:</label> <input type="text" name="leastNum"
					placeholder="输入整数" onblur="check(this)"
					onkeyup="this.value=this.value.replace(/[^0-9.]/g,'')"
					class="form-control" style="width: 80px" /> 
			</div>
			&nbsp; &nbsp;
			<div class="form-group">
				<label>最大购买数:</label> <input type="text" name="thirdNum"
					placeholder="输入整数" onblur="check(this)"
					onkeyup="this.value=this.value.replace(/[^0-9.]/g,'')"
					class="form-control" style="width: 80px" />  
			</div>
			
			<div class="form-group">
				<label>*商品单位大小:</label> <input type="text" name="goodsCapacity"
					id="goodsCapacity"
					onkeyup="this.value=this.value.replace(/\D/g,'')"
					class="form-control" placeholder="输入单位大小" style="width: 200px" />
			</div>
			<br>

			<!-- 库存:<input type="text" name="remain" /><br> -->
			<div class="form-group">
				<label>介绍:</label>
				<textarea type="text" name="introduce" style="width: 600px" rows="3"
					class="form-control"></textarea>
				<br>
			</div>
		</div>
		<br>
		<center>
			<input type="submit" class="btn btn-success" value="提交">&nbsp;&nbsp;&nbsp;
		</center>
	</form>
</body>
</html>
