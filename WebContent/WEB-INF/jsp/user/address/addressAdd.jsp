<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>添加收货地址</title>
</head>
<body>
<form action="${pageContext.request.contextPath}/user/address/addressAdd.action" method="post" onsubmit="return check()">
province:<input type="text" name= "province"><br>
city:<input type="text" name= "city"><br>
alladdress:<input type="text" name= "alladdress"><br>
<input type="submit" value="确认">
</form>



</body>
</html>