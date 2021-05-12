<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    	<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
    	<%@taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<title>个人中心</title>
<meta name="viewport" content="width=device-width">
<link rel="stylesheet" href="${pageContext.request.contextPath}/gsfiles/gsSetting/Ecshop.Hint.css">
<script src="${pageContext.request.contextPath}/gsfiles/gsSetting/jquery-1.7.1.min.js" type="text/javascript"></script>
<script src="${pageContext.request.contextPath}/gsfiles/gsSetting/Ecshop.Tool.js" type="text/javascript"></script>
<script src="${pageContext.request.contextPath}/gsfiles/gsSetting/jcarouse.custom.js" type="text/javascript"></script>
<script src="${pageContext.request.contextPath}/gsfiles/gsSetting/user.js" type="text/javascript"></script>
<link rel="stylesheet" href="${pageContext.request.contextPath}/gsfiles/gsSetting/calendar.css">
<script type="text/javascript" src="${pageContext.request.contextPath}/gsfiles/gsSetting/calendar.js"></script>
<link href="${pageContext.request.contextPath}/gsfiles/gsSetting/center.css" rel="stylesheet">

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
		    	name: "required",
		    	allAddress: "required",
		    	phone:{
		    		isPhone:"isPhone",
		    		required:true
		    	}
		    },
		    messages: {
		    	name: "请输入收货人名字",
		    	allAddress: "请输入详细地址",
		    	phone: "输入正确的电话号码"
		     
		    
		    }
		});
	});

jQuery.validator.addMethod("isPhone", function(value, element) {
          var length = value.length;
          var mobile = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/;
          return this.optional(element) || (length == 11 && mobile.test(value));
         }, "请填写正确的手机号码");//可以自定义默认提示信
 
	</script>
	<style>
	 .error{
	color:red;
	}
	</style>

<script type="text/javascript">

$(function(){
	$('#city').change(function(){
		 $("#allAddress").val("");
	});

	  $('#province').change(function(){
		  $("#allAddress").val("");
  		var url= "warehouseAjax.action";
  		 
  		var params = {
  				warehouseProvince:$('#province').val()
  		};
  		
  		  $.getJSON(url,params,function(CityList){//响应回来的json数组
  			  
  			   $('#city').empty();
  			  $.each(CityList,function(i,City){//jquery遍历数组函数
  				  //先构建<option>节点
  				  var opt = $("<option value='"+City.city+"'>"+City.city+"</option>");
  				  $('#city').append($(opt));
  			  });  
  		});  
	});  
});

 
   

   
</script>
<!--[if IE9]>
<script type="text/javascript" src="/user/js/html5.js"></script>
<![endif]-->

<link href="${pageContext.request.contextPath}/gsfiles/gsSetting/custom.min.css" rel="stylesheet"></head>
<body>
 
  
     


    

    <!-- top -->
    <div class="top">
        <div class="container clearfix">
            <div class="ecshop-top-menu">
                <!--头部连接部分-->
                <div class="ecs-w clearfix">
                    <div class="login-info ecs-fl">
                        <div class="login-link ecs-fl">
 
						 <c:if test="${myuser.username==null}">
						 <span class="say-hi ecs-fl">
						Hi,欢迎来到电脑配件采购网！
						</span>
						<div class="login-link ecs-fl">
							<a href="${pageContext.request.contextPath}/register">注册</a><span class="ecs-rel">|</span><a
								class="cr" href="${pageContext.request.contextPath}/admin/login">登录</a>
						</div>
						</c:if>
						<c:if test="${myuser.username!=null}">
						<span class="say-hi ecs-fl">
						Hi,欢迎您&nbsp; ${myuser.username}!
						
						</span>
						 
						</c:if>
					 
						 
                        </div>
                    </div>
                    <div class="sys-menu ecs-fr ecs-inline">
                        <ul class="clearfix">
                            <li class="item nav-return-home" id="nav-return-home" style=""><a href="${pageContext.request.contextPath}/purindex">返回首页</a>
                            </li>

                            

                            <li class="item q-shoppingcart">
                                <div class="menu-hd ecs-rel"><s class="ui"></s><a
                                        href="${pageContext.request.contextPath}/shopCar">购物车</a><span
                                        id="shopping_numbermark"></span></div>
                            </li>

 <c:if test="${myuser.username!=null}">
					 
						 <li class="item q-shoppingcart"><div class="menu-hd ecs-rel">
									<s class="ui"></s> <a href="${pageContext.request.contextPath}/logout"   >退出登录</a></span>
								</div></li>
						
						</c:if>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- /top -->


    <script type="text/javascript" src="${pageContext.request.contextPath}/gsfiles/gsSetting/must_template.js"></script>

    


    <!-- layout -->
    <div class="layout">

        <div class="w170 fl sidebar">
            <h2 class="bar-title"><a href="#">会员中心</a></h2>
            <div id="my360buy" class="bg-white">

                <dl tag="1" class="bar-nav-item">
                    <dt tag="1">订单信息</dt>
                    <dd>
                        <div id="div303"><a href="${pageContext.request.contextPath}/settings.action" tag="303">我的订单</a></div>
                        <div id="div314"><a href="${pageContext.request.contextPath}/shopCar" tag="314">我的购物车</a></div>
                       
                    </dd>
                </dl>
                <dl tag="2" class="bar-nav-item">
                    <dt tag="2">账户管理</dt>
                    <dd>
                        <div id="div322"><a href="${pageContext.request.contextPath}/updateInf" tag="322">修改个人信息</a></div>
                        <div id="div326"><a href="${pageContext.request.contextPath}/updatePwd" tag="326">修改密码</a></div>
                        <div id="div322"><a href="${pageContext.request.contextPath}/manageAddress" tag="326">管理收货地址</a></div>
                        <div id="div322"><a href="${pageContext.request.contextPath}/userMessage" tag="326">客户留言</a></div>
                        <div id="div322">&nbsp;</div>
                        <div id="div322">&nbsp;</div>
                        <div id="div322">&nbsp;</div>
                        <div id="div322">&nbsp;</div>
                        <div id="div322">&nbsp;</div>
                        <div id="div322">&nbsp;</div>
                        <div id="div322">&nbsp;</div>
                        <div id="div322">&nbsp;</div>
                        <div id="div322">&nbsp;</div>
                        <div id="div322">&nbsp;</div>
                        <div id="div322">&nbsp;</div>
                        <div id="div322">&nbsp;</div>
                        <div id="div322">&nbsp;</div>
                        <div id="div322">&nbsp;</div>
                        <div id="div322">&nbsp;</div>
                        <div id="div322">&nbsp;</div>
                    
                    </dd>
                </dl>
                

            </div>
        </div>

  <div class="w790 fr main-content">

            <div class="bg-white min-height400 p1015">
                <div class="hd-a clearfix">
                    <h2>修改收货地址</h2>
                </div>
                 
                <ul class="tab clearfix mt20" id="div_status">
                    <li class="curr">
                        <a href="#"
                           data-status="ALL">收货地址&nbsp;<span class="color-red" id="spAllNum"></span>
                        </a>
                    </li>
                    
                </ul>
                <div class="" style="z-index: 0;">
               
                      <form action=" ${pageContext.request.contextPath}/updateAddress.action" id="signupForm" method="post">
                    <table class="table table-big">
                    <tbody><tr>
                        <th colspan="2" style="text-align: left;">
                            <h2>&nbsp;</h2>
                        </th>
                        <!-- 隐藏域 -->
                        <input type="hidden"  name="addressId" value="${address.addressId}" />
                        <input type="hidden"  name="userId" value="${myuser.userId}" />
                        
                    </tr>
            
                    
                    <tr>
                        <th class="tdleft">收货人：
                        </th>
                        <td class="tdright">
                           <input type="text" onKeypress="if ((event.keyCode > 32 && event.keyCode < 48) || (event.keyCode > 57 && event.keyCode < 65) || (event.keyCode > 90 && event.keyCode < 97)) event.returnValue = false;"  class="input-text w70" style="width:90px" name="name" value="${address.name}"/>
                           
                            
                                                       
                        </td>
                    </tr>
                    <tr>
                        <th class="tdleft">地址：
                        </th>
                        <td class="tdright">
                           
                           
                           <select name="province"
					id="province" class="form-control" style="width: 100px">
					<c:forEach var="thisProvince" items="${provinceList}">
						<option value="${thisProvince.province}"
						<c:if test="${address.province==thisProvince.province}">selected="selected"</c:if>>${thisProvince.province}</option>
					</c:forEach>
			</select>
                             
			<select name="city"
					id="city" class="form-control" style="width: 100px">
					<c:forEach var="thisCity" items="${cityList}">
						<option value="${thisCity.city}"
						<c:if test="${address.city==thisCity.city}">selected="selected"</c:if>>${thisCity.city}</option>
					</c:forEach>
			</select>

										</td>
                    </tr>
                    <tr>
                        <th class="tdleft"> 
                        详细地址：
                        </th>
                        <td class="tdright">
                      <textarea id="allAddress" style="width: 300px; height: 80px; margin: 5px 0; border: 1px solid #ccc;" name="alladdress" value="">${address.alladdress}</textarea>
                                                     
                        </td>
                    </tr>
                    <tr>
                        <th class="tdleft">电话：
                        </th>
                        <td class="tdright">
                           <input type="text" onkeyup="this.value=this.value.replace(/\D/g,'')"  class="input-text w70" name="tel" value="${address.tel}"/>
                                                       
                        </td>
                    </tr>
                    <tr>
                        <th class="tdleft">手机：
                        </th>
                        <td class="tdright">
                           <input type="text"  onkeyup="this.value=this.value.replace(/\D/g,'')" class="input-text w70" name="phone" value="${address.phone}"/>
                                                       
                        </td>
                    </tr>
                    <tr>
                        <th class="tdleft">邮编：
                        </th>
                        <td class="tdright">
                           <input type="text" onkeyup="this.value=this.value.replace(/\D/g,'')" class="input-text w70"   maxlength="6"  name="postalCode" value="${address.postalCode}"/>
                                                       
                        </td>
                    </tr>
                   
                     
                  
                    
                    <tr>
                        <th class="tdleft"></th>
                        <td class="tdright">
                            <div>
                            
                                <input type="submit" id="sub" class="btn-primary mr10 "   value="保存修改">
                                
                            </div>
                        </td>
                    </tr>
                    
                </tbody></table>
                </form>
                     
                     
                     
                     
                     
                    
                </div>
            </div>

        </div>

    </div>
    <!-- /layout -->

    <script type="text/javascript">

    </script>

    <div style="margin:30px 0px 10px; text-align:center">
    <pre>有任何购物问题请联系我们在线客服 | 电话：15625584773（微信）
	         工作时间：周一至周五 8:00－18:00 
	   谢谢您的支持，你们的支持是我们最大的动力!!!
        

     </pre>
    </div>
 
 


</body></html>