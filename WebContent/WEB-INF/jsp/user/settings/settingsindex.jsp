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
<script type="text/javascript">
    function replaceLicitStr(e) { //判断是否是汉字、字母、数字组成
        //var code;
        var character = $(e).val();  // String.fromCharCode(code);
        var txt = new RegExp("[\\`,\\~,\\!,\\@,\#,\\$,\\%,\\^,\\*,\\&,\\\\,\\/,\\?,\\|,\\:,\\<,\\>,\\{,\\},\\(,\\),\\',\\;,\"]");
        //特殊字符正则表达式
        if (txt.test(character)) {
            //        alert("User Name can not contain SPACES or any of these special characters:\n , ` ~ ! @ # $ % ^ + & * \\ / ? | : . < > {} () [] \" ");
            if (document.all) {
                $(e).val(replaceAll(character, ""));
                window.event.returnValue = false;
            }
            else {
                $(e).val(replaceAll(character, ""));
                arguments.callee.caller.arguments[0].preventDefault();
            }
        }
    }
    function replaceAll(s, sp) {
        var str = s.replace(/ /g, sp).replace(/\`/g, sp).replace(/\s/g, sp);   //       `   \s 
        str = str.replace(/\~/g, sp).replace(/\!/g, sp).replace(/\@/g, sp);   //   ~  !   @
        str = str.replace(/\#/g, sp).replace(/\$/g, sp).replace(/\%/g, sp);   //   ~   @   # 
        str = str.replace(/\^/g, sp).replace(/\&/g, sp).replace(/\*/g, sp);   //   ~   @   # 
        str = str.replace(/\(/g, sp).replace(/\)/g, sp);   //   ~   @   # 
        str = str.replace(/\|/g, sp);   //   ~   @   #
        str = str.replace(/\}/g, sp).replace(/\{/g, sp).replace(/\]/g, sp);    //   ~   @   #
        str = str.replace(/\[/g, sp).replace(/\:/g, sp).replace(/\;/g, sp);    //   ~   @   # 
        str = str.replace(/\'/g, sp).replace(/\./g, sp).replace(/\?/g, sp);    //   ~   @   # 
        str = str.replace(/\</g, sp).replace(/\>/g, sp).replace(/\\/g, sp);    //   ~   @   # 
        //    var str = s.replace(/%/g, "%25 ").replace(/\+/g, "%2B ").replace(/\s/g, "+ ");   //   %   +   \s 
        //    str = str.replace(/-/g, "%2D ").replace(/\*/g, "%2A ").replace(/\//g, "%2F ");   //   -   *   / 
        //    str = str.replace(/\&/g, "%26 ").replace(/!/g, "%21 ").replace(/\=/g, "%3D ");   //   &   !   = 
        //    str = str.replace(/\?/g, "%3F ").replace(/:/g, "%3A ").replace(/\|/g, "%7C ");   //   ?   :   | 
        //    str = str.replace(/\,/g, "%2C ").replace(/\./g, "%2E ").replace(/#/g, "%23 ");   //   ,   .   # 
        return str;
    }

    function AddFavorite(sURL, sTitle) {
        try {
            window.external.addFavorite(sURL, sTitle);
        }
        catch (e) {
            try {
                window.sidebar.addPanel(sTitle, sURL, "");
            }
            catch (e) {
                alert("加入收藏失败，请使用Ctrl+D进行添加");
            }
        }
    }
</script>
<!--[if IE9]>
<script type="text/javascript" src="/user/js/html5.js"></script>
<![endif]-->

<link href="${pageContext.request.contextPath}/gsfiles/gsSetting/custom.min.css" rel="stylesheet"></head>
<body>
<form method="post" action="http://gsw818.com/user/myfavproducts.aspx" id="form1">
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
                    <h2>我的订单</h2>
                </div>
                 
                <ul class="tab clearfix mt20" id="div_status">
                    <li class="curr">
                        <a href="#"
                           data-status="ALL">全部订单&nbsp;<span class="color-red" id="spAllNum"></span>
                        </a>
                    </li>
                    
                </ul>
                <div class="" style="z-index: 0;">
                    <table class="table-default" id="BindDataSource">
                        <thead>
                        <tr>
                            <th style="border: 1px solid #E5E5E5; padding: 2px;">订单信息</th>
                            <th style="border: 1px solid #E5E5E5; padding: 2px;">收货人</th>
                            <th style="border: 1px solid #E5E5E5; padding: 2px;">订单金额</th>
                            <th style="border: 1px solid #E5E5E5; padding: 2px;">下单时间</th>
                            <th style="border: 1px solid #E5E5E5; padding: 2px;">
                               状态
                            </th>
                            <th style="border: 1px solid #E5E5E5; padding: 2px;">操作</th>
                        </tr>
                        </thead>
                        <tbody>
                                 <c:forEach var="order" items="${ordersList}">
                                
                                 
                          <tr>
                            <td style="text-align: center;">
                                 
                                ${order.orderId}
                                
                            </td>
                            <td style="text-align: center;">
                                ${order.userId}
                            </td>
                            <td style="text-align: center;">¥${order.orderPrice}<br>
                                
                            </td>
                            <td style="text-align: center;">
                                <span class="color-gray">
                                <fmt:formatDate value="${order.orderStartDate}" pattern="yyyy-MM-dd HH:mm:ss"/>
                                   
                                </span>
                            </td>
                            <td style="text-align: center;">
                                <span class="color-gray">
                                  <c:if test="${order.zt=='已确认'}">
                                                                                                    订单正在进行 
                             </c:if>
                                  <c:if test="${order.zt=='已完成'}">
                                                                                                     订单完成
                             </c:if>
                              <c:if test="${order.zt=='订单生成'}">
                            订单真正进行 
                             </c:if>
                                </span>
                                <br>
                                <span class="color-gray">
                                    
                                </span>
                                
                            </td>
                            <td>
                            <c:if test="${order.zt=='订单生成'||order.zt=='已确认'}">
                                  <a href="${pageContext.request.contextPath}/logisticsInformation?logisticsId=${order.logisticsId}" target="_blank">  查看物流信息</a>   
                            </c:if>
										</td>
										
									</tr>
                        </c:forEach>
                  

                        </tbody>
                    </table>
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
 
</form>


</body></html>