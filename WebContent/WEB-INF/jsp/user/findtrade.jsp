<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>登录页面</title>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<!-- 上述3个meta标签*必须*放在最前面，任何其他内容都*必须*跟随其后！ -->
<link href="${pageContext.request.contextPath}/css/bootstrap.min.css"
	rel="stylesheet">
<link
	href="${pageContext.request.contextPath}/css/bootstrap-datetimepicker.min.css"
	rel="stylesheet">

</head>
<body>

	<form action="${pageContext.request.contextPath}/user/findTrade.action"
		method="post" onsubmit="return check()">

		<!-- 用户名：<input type="text" id="userId" name="userId" /><br>  -->
		商品名：<input
			type="text" id="goodsName" name="goodsName" /><br>
		商品类型：<input
			type="text" id="goodsTypeName" name="goodsTypeName" /><br> 
		日期：<input
			type="date" name="TradeOrderGoods.orderStartDate" /><br>
		<!-- <input type="text"
			id="birthday" name="birthdayIn" value="2012-06-15" readonly class="form_datetime"/> <br>  -->

		<input type="submit" value="登录" />
	</form>

</body>
<script src="${pageContext.request.contextPath}/js/jquery-3.1.1.min.js"></script>
<script src="${pageContext.request.contextPath}/js/bootstrap.js"></script>
<script
	src="${pageContext.request.contextPath}/js/bootstrap-datetimepicker.min.js"></script>
<script type="text/javascript">
	$(".form_datetime").datetimepicker({
		format : 'yyyy-mm-dd',
		minView : "month"
	});
</script>
</html>