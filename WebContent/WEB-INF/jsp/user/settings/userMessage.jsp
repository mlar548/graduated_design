<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<script
	src="${pageContext.request.contextPath}/gsfiles/gsacc/jquery-1.10.2.min.js"></script>

	
<meta name="viewport" content="width=device-width">
<link
	href="${pageContext.request.contextPath}/dist/css/bootstrap.min.css"
	rel="stylesheet">
<link rel="stylesheet" href="${pageContext.request.contextPath}/gsfiles/gsSetting/Ecshop.Hint.css">
<link
	href="${pageContext.request.contextPath}/dist/css/bootstrap.min.css"
	rel="stylesheet">
<script src="${pageContext.request.contextPath}/dist/js/bootstrap.js"></script>
<script src="${pageContext.request.contextPath}/gsfiles/gsSetting/Ecshop.Tool.js" type="text/javascript"></script>
<script src="${pageContext.request.contextPath}/gsfiles/gsSetting/jcarouse.custom.js" type="text/javascript"></script>
<script src="${pageContext.request.contextPath}/gsfiles/gsSetting/user.js" type="text/javascript"></script>
<link rel="stylesheet" href="${pageContext.request.contextPath}/gsfiles/gsSetting/calendar.css">
<script type="text/javascript" src="${pageContext.request.contextPath}/gsfiles/gsSetting/calendar.js"></script>
<link href="${pageContext.request.contextPath}/gsfiles/gsSetting/center.css" rel="stylesheet">

	<script
	src="${pageContext.request.contextPath}/js/address.js"></script>
<!--[if IE9]>
<script type="text/javascript" src="/user/js/html5.js"></script>
<![endif]-->

<link href="${pageContext.request.contextPath}/gsfiles/gsSetting/custom.min.css" rel="stylesheet"></head>
<script src="${pageContext.request.contextPath}/dist/js/bootstrap.js"></script>

<script src="${pageContext.request.contextPath}/js/jquery.validate.min.js"></script>
<script src="${pageContext.request.contextPath}/js/messages_zh.js"></script>
<title>客户留言</title>
</head>
<script type="text/javascript">

$.validator.setDefaults({
    submitHandler: function() {
      alert("发送成功");
      return true;
    }
});
$().ready(function() {
	var date=new Date;
	var year=date.getFullYear();
	// 在键盘按下并释放及提交后验证提交表单
	  $("#signupForm").validate({
		    rules: {
		    	userMessageInformation: "required",
		    	 
		    },
		    messages: {
		    	userMessageInformation: "留言信息不能为空",
		     
		    }
		});
	});
</script>
<style>
	 .error{
	color:red;
	}
</style>
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
<form action="${pageContext.request.contextPath}/userMessage.action" id="signupForm"> 
  <div class="w790 fr main-content">

            <div class="bg-white min-height400 p1015">
                <div class="hd-a clearfix">
                    <h2>客户留言</h2>
                </div>
               <!--   隐藏域 -->
               <input type="hidden" name="userId" value="${myuser.userId}" />
                <ul class="tab clearfix mt20" id="div_status">
                    <li class="curr">
                        <a href="#"
                           data-status="ALL">客户留言&nbsp;<span class="color-red" id="spAllNum"></span>
                        </a>
                    </li>
                    
                </ul>
                <div class="" style="z-index: 0;">
                    
                    <div class="ar ftx-03">
   
                         <br>  <br>
				<div class="form-group">
				<label style="font-size: 15px">留言信息:</label>
				<textarea type="text" name="userMessageInformation" style="width: 600px" rows="4"
					class="form-control" placeholder="输入留言信息" ></textarea>
				<br>
			</div>
			 
                        <center>
  <div class="form-group">
  <input    type="submit" class="a btn btn-info btn-lg"   value="发送"> 
	
  </div>
  </center>
                    </div>
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
 
</form>
</body>
</html>