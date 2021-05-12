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
		    	password: "required",
		    	passwordAgain:{
		    		equalTo:"#password",
		    		required:"required"
		    		},
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
		    	password: "请输入新密码",
		    	passwordAgain: "输入不一致",
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
	<style>
	 .error{
	color:red;
	</style>

<link href="${pageContext.request.contextPath}/gsfiles/gsSetting/custom.min.css" rel="stylesheet"></head>
<body>
 
    <div class="aspNetHidden">
        <input type="hidden" name="__EVENTTARGET" id="__EVENTTARGET" value="">
        <input type="hidden" name="__EVENTARGUMENT" id="__EVENTARGUMENT" value="">
        <input type="hidden" name="__LASTFOCUS" id="__LASTFOCUS" value="">
        <input type="hidden" name="__VIEWSTATE" id="__VIEWSTATE"
               value="/wEPDwULLTE0NTQyNjgyNjcPZBYCZg9kFgICAw9kFgQCAg9kFgICAQ8PFgIeBFRleHQFXuaIkeWcqOi/memHjOeci+WunuS9k+W6l+WVhuWTge+8jOmCgOivt+WlveWPi+avj+WkqemDveiDvei1mueCuembtuiKsemSse+8jOS4gOi1t+WKoOWFpeWQpyDvvIFkZAIED2QWAgIDD2QWAmYPZBYCZg8QZGQWAQIBZGRW6nWto6DTMGTIeAY+2LhFSODWhzlZek0Uq/WaNvZB/Q==">
    </div>

    <script type="text/javascript">
        //<![CDATA[
        var theForm = document.forms['form1'];
        if (!theForm) {
            theForm = document.form1;
        }
        function __doPostBack(eventTarget, eventArgument) {
            if (!theForm.onsubmit || (theForm.onsubmit() != false)) {
                theForm.__EVENTTARGET.value = eventTarget;
                theForm.__EVENTARGUMENT.value = eventArgument;
                theForm.submit();
            }
        }
        //]]>
    </script>


    <div class="aspNetHidden">

        <input type="hidden" name="__VIEWSTATEGENERATOR" id="__VIEWSTATEGENERATOR" value="6719EF8B">
        <input type="hidden" name="__EVENTVALIDATION" id="__EVENTVALIDATION"
               value="/wEdAAS2tA4p7sr+yk+qkZvruN7kgysvjaHGAIJ/tJxeYnBedSKIKSjaXfwU9ZJx+clCKB4t7pQM26P2MEXFYcLIxsNumcoClB7u1U9qmLuf4vhtwhli7kXmkyYPvAfJGfxZSCs=">
    </div>

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
                    <h2>修改个人信息</h2>
                </div>
                 
                <ul class="tab clearfix mt20" id="div_status">
                    <li class="curr">
                        <a href="#"
                           data-status="ALL">个人信息&nbsp;<span class="color-red" id="spAllNum"></span>
                        </a>
                    </li>
                    
                </ul>
                <div class="" style="z-index: 0;">
                <form action="${pageContext.request.contextPath}/updateInf.action" method="post" enctype="multipart/form-data">
                    <table class="table table-big">
                    <tbody><tr>
                        <th colspan="2" style="text-align: left;">
                            <h2>基本信息</h2>
                        </th>
                        <!-- 隐藏域 -->
                        <input type="hidden" name="userId" value="${userInf.userId}" />
                    </tr>
                  <tr>
                        <th class="tdleft">头像：
                        </th>
                        <td class="tdright ">
                            <div class="changeHead">
                             <img width="100px" height="" id="imgHead" src="/userImg/${userInf.userPhoto}">
                             <input type="File" id=""
					accept=".jpeg,.jpg,.png" name="usersPhotoFile" />

			</div>
                            </div>

                        </td>
                    </tr> 
                    
                    <tr>
                        <th class="tdleft">用户名：
                        </th>
                        <td class="tdright">
                            <span id="usercontent_uname">${userInf.username}</span>
                                                       
                        </td>
                    </tr>
                   
                    <tr>
                        <th class="tdleft">
                            电子邮箱：
                        </th>
                        <td class="tdright">
                            
                            <div class="emailAutoParent">
                                <input type="text" class="input-text w200 emailAutoComplete"
                                 id="userEmail" 
                                name="userEmail" value="${userInf.userEmail}"  
                                  placeholder="请填写正确邮箱格式 如xxx@163.com"  >&nbsp;&nbsp;
                                 
                            </div>
                            
                        </td>
                    </tr>
                    <tr>
                        <th class="tdleft">
                            <span style="color: red;">*</span>
                            手机号码：
                        </th>
                        <td class="tdright">
                            
                            <input type="text"   name="userPhone" id="userPhone" value="${userInf.userPhone}" >
                             

                             
                            
                        </td>
                    </tr>
                    <tr>
                        <th colspan="2" style="text-align: left;">
                            <h2>个人资料</h2>
                        </th>
                    </tr>
                    <tr>
                        <th class="tdleft">
                            姓名：
                        </th>
                        <td class="tdright">
                            
                            <input type="text" class="input-text w200" id="name" name="name" value="${userInf.name}" placeholder="请填写姓名" maxlength="20" >
                             
                            
                        </td>
                    </tr>
                    <tr>
                        <th class="tdleft">
                        性别：
                        </th>
                        <td class="tdright">
                            
                            <input type="radio"   name="sex" value="男"  <c:if test="${userInf.sex=='男'}">checked="checked"</c:if>>男 &nbsp;
                            <input type="radio"  name="sex"  value="女" <c:if test="${userInf.sex=='女'}">checked="checked"</c:if>>女
                            
                            
                        </td>
                    </tr>
                    <tr>
                        <th class="tdleft">出生日期：
                        </th>
                        <td class="tdright">
                            <input type="date"  value='<fmt:formatDate value="${userInf.birthday}" pattern="yyyy-MM-dd"/>'  name="birthday" id="birthday"   maxlength="20" >
                            &nbsp;&nbsp;<span class="d_default" id="msg_birth"></span>
                        </td>
                    </tr>
                    
                     
                    <tr>
                        <th class="tdleft">联系QQ：
                        </th>
                        <td class="tdright">
                            
                            <input type="text" class="input-text w200" name="userQq" id="userQq" value="${userInf.userQq}" maxlength="20" placeholder="请填写QQ" >
                            &nbsp;&nbsp;<span class="d_default" id="msg_qq"></span>
                            
                        </td>
                    </tr>
                   
                   

                    
                     

                    


                    
                    <tr>
                        <th colspan="2" style="text-align: left;">
                            <h2>其它信息</h2>
                        </th>
                    </tr>
                  
                    <tr>
                        <th class="tdleft">备注：
                        </th>
                        <td class="tdright">
                            
                            <textarea id="txtRemark" style="width: 300px; height: 80px; margin: 5px 0; border: 1px solid #ccc;" name="txtRemark"></textarea>
                            &nbsp;&nbsp;<span class="d_default" id="Span5"></span>
                            
                        </td>
                    </tr>
                    
                    <tr>
                        <th class="tdleft"></th>
                        <td class="tdright">
                            <div>
                                <input type="submit" class="btn-primary mr10" value="保存修改">
                                
                            </div>
                        </td>
                    </tr>
                    
                </tbody></table>
                </form>
                    <div class="ar ftx-03">


                        <div class="pager-center">


                        </div>

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
 
 


</body></html>