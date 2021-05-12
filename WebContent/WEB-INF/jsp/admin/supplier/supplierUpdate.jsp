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
 <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/static/admin/layui/css/modules/myicon/iconfont.css"/>
<title>修改供应商信息</title>
<link rel="stylesheet" type="text/css"
	href="${pageContext.request.contextPath}/css/mycss2.css">
<script src="${pageContext.request.contextPath}/js/jquery.validate.min.js"></script>
<script src="${pageContext.request.contextPath}/js/messages_zh.js"></script>

<script type="text/javascript">
$.validator.setDefaults({
    submitHandler: function() {
      alert("修改成功");
      return true;
    }
});
$().ready(function() {
	var date=new Date;
	var year=date.getFullYear();
	// 在键盘按下并释放及提交后验证提交表单
	  $("#signupForm").validate({
		    rules: {
		    	supplierName: "required",
		    	smallName:"required",
		    	foundingDate:{
		    		 minlength: 4,
		    		 maxlength: 4,
		    		 range:[1800,year]
		    	},
		    	supplierPhone:{
		    		required:true,
		    		
		    	}
		       
		    },
		    messages: {
		    	smallName:"请输入简称(必填)",
		    	supplierName: "请输入供应商名称(必填)",
		    	supplierPhone: "请输入联系电话(必填)",
		    	foundingDate: "请输入正确年份(1800-"+year+")",
		    
		    }
		});
	});

jQuery.validator.addMethod("isPhone", function(value, element) {
          var length = value.length;
          var mobile = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/;
          return this.optional(element) || (length == 11 && mobile.test(value));
         }, "请填写正确的手机号码");//可以自定义默认提示信
 
</script>
<style type="text/css">
body{
 
     
 }
    .tianjia{
 /*    width:700px;
    height:800px;
    */
    width:75%;
    
    margin: 0 auto; 
    /* margin-left: 90px ;  */
    }
    hr{
     
    width:80%;
    background-color:#EBEBEB;
      height:2px;
    }
    
    #anniu{
  width:100%;
  
    text-align: center;
    }
    
    .tianjia .form-group{
    margin-top:10px;
    }
   .error{
	color:red;
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
<form class="form-inline" id="signupForm"  action="${pageContext.request.contextPath}/supplierUpdate.action"
		method="post" onsubmit="return check()">
		
	<center><h1>基本信息</h1></center>
		<div class="tianjia">
		<br>
		<a     class="fanhuiA " style=" text-decoration:none;"  href="javascript:history.go(-1);"  >
							<i class="iconfont "  > &#xe606;</i>
						</a> 
		<input type="hidden" name="supplierId" value="${supplier.supplierId}"/><br>
<div class="form-group">
    <label ><span style="color:red;">*</span>供应商名称:</label>
    <input type="text"  class="form-control" style="width: 200px"  value="${supplier.supplierName}" id="supplierName" name="supplierName" placeholder="请输入供应商名称" onkeyup="value=value.replace(/[^\w\u4E00-\u9FA5]/g, '')">
   </div> 
<div class="form-group">  
    <label >英&nbsp;&nbsp;&nbsp;文&nbsp;&nbsp;&nbsp;名&nbsp;:</label>
    <input type="text" value="${supplier.englishName}" class="form-control" style="width: 200px" name="englishName" onkeyup="this.value=this.value.replace(/[^a-zA-Z]/g,'')"  placeholder="请输入英文名">
  </div>  <br>
<div class="form-group">  
    <label ><span style="color:red;">*</span>&nbsp;&nbsp;简&nbsp;&nbsp;&nbsp;称&nbsp;&nbsp;:</label>
    <input type="text" value="${supplier.smallName}"  class="form-control" style="width: 150px" name="smallName"  onkeyup="value=value.replace(/[^\w\u4E00-\u9FA5]/g, '')"  placeholder="请输入英文名">
  </div>  <br>
<div class="form-group">
    <label for="exampleInputName2">品牌归属地:</label>
    <select name="brandLand"  style="width: 200px" class="form-control">
 
       <option  value="中国大陆" <c:if test="${supplier.brandLand=='中国大陆'}">selected="selected"</c:if>  >中国大陆</option> 
       <option  value="中国香港" <c:if test="${supplier.brandLand=='中国香港'}">selected="selected"</c:if> >中国香港</option> 
       <option  value="中国台湾" <c:if test="${supplier.brandLand=='中国台湾'}">selected="selected"</c:if>>中国台湾</option> 
       <option  value="中国澳门" <c:if test="${supplier.brandLand=='中国澳门'}">selected="selected"</c:if>>中国澳门</option> 
       <option  value="美国" <c:if test="${supplier.brandLand=='美国'}">selected="selected"</c:if>>美国</option> 
       <option  value="日本" <c:if test="${supplier.brandLand=='日本'}">selected="selected"</c:if>>日本</option> 
       <option  value="韩国" <c:if test="${supplier.brandLand=='韩国'}">selected="selected"</c:if>>韩国</option> 
       <option  value="欧洲" <c:if test="${supplier.brandLand=='欧洲'}">selected="selected"</c:if>>欧洲</option> 
       <option  value=" "  <c:if test="${supplier.brandLand==' '}">selected="selected"</c:if>>其他</option> 
      
</select>
  </div><br>
<div class="form-group">
    <label for="exampleInputName2">&nbsp;成立时间&nbsp;:</label>
    <input type="text" style="width: 150px" value="${supplier.foundingDate}" onkeyup="this.value=this.value.replace(/\D/g,'')"   style="width: 200px" placeholder="请输入一个年份" name="foundingDate" id="foundingDate" class="form-control">
  </div> 
<div class="form-group">
    <label for="exampleInputName2">&nbsp;合作时间&nbsp;:</label>
    <input type="date"   value="<fmt:formatDate value="${supplier.partnerDate}" pattern="yyyy-MM-dd"/>"  style="width: 200px"  name="partnerDate" class="form-control">
    
  </div> <br>
   </div>
    <br>
  <center> <hr ></center><br>
  <center><h1>联系方式</h1></center>
  <div class="tianjia">
  
<div class="form-group">
    <label for="exampleInputName2"><span style="color:red;">*</span>电话号码:</label>
    <input type="text" style="width: 180px" value="${supplier.supplierPhone}" onkeyup="this.value=this.value.replace(/[^\d-]*/g,'')"  maxlength="12"  placeholder="请输入电话或手机号码" name="supplierPhone" id="supplierPhone" class="form-control">
  </div> 
<div class="form-group">
    <label for="exampleInputName2">&nbsp;电子邮箱&nbsp;:</label>
    <input type="email" style="width: 300px"  value="${supplier.supplierEmail}"   placeholder="输入电子邮箱" name="supplierEmail" class="form-control">
  </div> <br>
<div class="form-group">
    <label >&nbsp;厂家地址&nbsp;:</label>
    <input type="text" style="width: 400px"  value="${supplier.address}"  placeholder="厂家具体地址" name="address" id="address" class="form-control">
  </div><br>
 
<div class="form-group">
状态: 
<select name="state" class="form-control" style="width: 200px">
       <option  value="合作中"  > 合作中</option> 
       <option  value="已过期" <c:if test="${supplier.state=='已过期'}">selected="selected"</c:if> > 已过期</option> 
</select><br> 
</div><br>

</div>

 <center>
<input type="submit"  class="btn btn-success" value="提交" >&nbsp;&nbsp;&nbsp;
 
 </center>
	 
</form>
</body>
</html>
