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
<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/static/admin/layui/css/layui.css"/>
<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/static/admin/layui/css/modules/myicon/iconfont.css"/>
		
<title>管理供应商</title>
<script src="${pageContext.request.contextPath}/js/jquery.validate.min.js"></script>
<script src="${pageContext.request.contextPath}/js/messages_zh.js"></script>

<script type="text/javascript">
$.validator.setDefaults({
    submitHandler: function() {
      alert("添加成功");
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
</head>
<style>
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
<body>
<br>
<!-- window.history.back(-1); -->
 


<form class="form-inline" id="signupForm" action="${pageContext.request.contextPath}/supplierAdd.action"
		method="post" onsubmit="return check()">
		<center><h1>基本信息</h1></center>
		<div class="tianjia">
		<br>
		 <a     class="fanhuiA " style=" text-decoration:none;"  href="javascript:history.go(-1);"  >
							<i class="iconfont "  > &#xe606;</i>
						</a> 
<div class="form-group">
    <label ><span style="color:red;">*</span>供应商名称:</label>
    <input type="text"  class="form-control" style="width: 200px"  id="supplierName" name="supplierName" placeholder="请输入供应商名称" onkeyup="value=value.replace(/[^\w\u4E00-\u9FA5]/g, '')">
   </div> 
<div class="form-group">  
    <label ">英&nbsp;&nbsp;&nbsp;文&nbsp;&nbsp;&nbsp;名&nbsp;:</label>
    <input type="text" class="form-control" style="width: 150px" name="englishName" onkeyup="this.value=this.value.replace(/[^a-zA-Z]/g,'')"  placeholder="请输入英文名">
  </div> 
<div class="form-group">  
    <label "><span style="color:red;">*</span>简&nbsp;&nbsp;&nbsp;&nbsp;称&nbsp;&nbsp;:</label>
    <input type="text" class="form-control" style="width: 130px" name="smallName" onkeyup="value=value.replace(/[^\w\u4E00-\u9FA5]/g, '')"   placeholder="请输入简称">
  </div> 
  
  
   <br>
<div class="form-group">
    <label for="exampleInputName2">品牌归属地:</label>
    <select name="brandLand" style="width: 200px" class="form-control">
 
       <option  value="中国大陆">中国大陆</option> 
       <option  value="中国香港">中国香港</option> 
       <option  value="中国台湾">中国台湾</option> 
       <option  value="中国澳门">中国澳门</option> 
       <option  value="美国">美国</option> 
       <option  value="日本">日本</option> 
       <option  value="韩国">韩国</option> 
       <option  value="欧洲">欧洲</option> 
       <option  value=" ">其他</option> 
      
</select>
  </div><br>
<div class="form-group">
    <label for="exampleInputName2">&nbsp;成立时间&nbsp;:</label>
    <input type="text" style="width: 150px"  onkeyup="this.value=this.value.replace(/\D/g,'')"   style="width: 200px" placeholder="请输入一个年份" name="foundingDate" id="foundingDate" class="form-control">
  </div> 
<div class="form-group">
    <label for="exampleInputName2">&nbsp;合作时间&nbsp;:</label>
    <input type="date"    value="2000-01-01" style="width: 200px"  name="partnerDate" class="form-control">
  </div> <br>
   </div>
    <br>
  <center> <hr ></center><br>
  <center><h1>联系方式</h1></center>
  <div class="tianjia">
  
<div class="form-group">
    <label for="exampleInputName2"><span style="color:red;">*</span>电话号码:</label>
    <input type="text" style="width: 180px" maxlength="11"  placeholder="请输入电话或手机号码" onkeyup="this.value=this.value.replace(/[^\d-]*/g,'')" name="supplierPhone" id="supplierPhone" class="form-control">
  </div> 
<div class="form-group">
    <label for="exampleInputName2">&nbsp;电子邮箱&nbsp;:</label>
    <input type="email" style="width: 300px"   placeholder="输入电子邮箱" name="supplierEmail" class="form-control">
  </div> <br>
<div class="form-group">
    <label >&nbsp;厂家地址&nbsp;:</label>
    <input type="text" style="width: 400px"    placeholder="厂家具体地址" name="address" id="address" class="form-control">
  </div><br>

 
<div class="form-group">
状态: 
<select name="state" class="form-control" style="width: 200px">
       <option  value="合作中"  > 合作中</option> 
       <option  value="已过期"  > 已过期</option> 
</select><br> 
</div><br>

</div>

 <center>
<input type="submit"  class="btn btn-success" value="提交" >&nbsp;&nbsp;&nbsp;
<input type="reset"  class="btn btn-info" value="重置" >
 </center>
</form> 

</body>
</html>
