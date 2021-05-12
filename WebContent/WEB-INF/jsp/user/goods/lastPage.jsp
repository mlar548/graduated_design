<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>

        我的购物车-支付中心

    </title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta http-equiv="Expires" content="0">
    <meta http-equiv="Cache-Control" content="no-cache">
    <meta http-equiv="Pragma" content="no-cache">
    <meta name="keywords">
    <meta name="description">
    <meta name="viewport" content="width=device-width">
    <link href="${pageContext.request.contextPath}/gsfiles/paySuccsee/Ecshop.Hint.css" rel="stylesheet">
    <link href="${pageContext.request.contextPath}/gsfiles/paySuccsee/cartshop.css" rel="stylesheet">
    <script src="${pageContext.request.contextPath}/gsfiles/paySuccsee/jquery-1.10.2.min.js"></script>
    <script src="${pageContext.request.contextPath}/gsfiles/paySuccsee/ecshop.tool.js"></script>
    <style>
        .backtop {
            display: none !important;
        }
    </style>
    <!--[if IE 6]>
    <script src="../common_script/DD_belatedPNG.js?t=201510271516"></script>
    <script>DD_belatedPNG.fix('.png_bg');</script>
    <![endif]-->

    <script type="text/javascript">
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

        function GoToIndex() {
            //if (window.top == window) {
            //    window.location.href = "/index.html";
            //}
            //else {
            window.location.href = "/userCenter/index.aspx";
            //}
        }

        function GoToUserCenter() {
            if (window.top == window) {
                window.location.href = "/user/index.aspx";
            }
            else {
                window.location.href = "/userCenter/Main.aspx";
            }
        }
    </script>
</head>
<body style="">
<form method="post"  "
      id="form1">
    

    <script type="text/javascript">
        
     /*    var theForm = document.forms['form1'];
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
     */
    </script>


    <div class="aspNetHidden">

        <input type="hidden" name="__VIEWSTATEGENERATOR" id="__VIEWSTATEGENERATOR" value="E187BA4A">
        <input type="hidden" name="__EVENTVALIDATION" id="__EVENTVALIDATION"
               value="/wEdAAK9yitho+JI3Eig210lXp0zQvB7ioycWj4PcKFmMO9NPpL00O9AaD/l3nHZfdVtMv1kDvDZ01l3xB6cpKtmYisb">
    </div>

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
		<!--判断是否显示菜单结束-->


    <div class="head-logo">
        <div class="head-logo-box">
            <table>
                <tbody>
                <tr>
                    <td class="head-logo-lef tl" width="40%">
                        <a href="${pageContext.request.contextPath}/purindex"><img src="/goods/logo.jpg"
                                                          alt=""></a>
                    </td>
                    <td class="head-logo-rig tr">
                        <ul>
                            <li class="fore1 bg-f46444"><span>1</span>
                                <p>我的购物车</p></li>
                            <li class="fore2 bg-f46444"><span>2</span>
                                <p>核对订单信息</p></li>
                            <li class="fore3 bg-f46444"><span>3</span>
                                <p>成功提交订单</p></li>
                            <div class="cb"></div>
                        </ul>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>

    <!--头部logo-->
<script type="text/javascript"> 
onload=function(){ 
setInterval(go, 1000); 
}; 
var x=10; //利用了全局变量来执行 
function go(){ 
x--; 
if(x>0){ 
document.getElementById("spNum").innerHTML=x; //每次设置的x的值都不一样了。 
}else{ 
location.href='${pageContext.request.contextPath}/purindex'; 
} 
} 
</script> 

    <div class="shop_content">


        <div class="all-box">
            <div class="shopCard">
                <div class="wid980 pay-wid980">
                    <div class="payOnline">
                        <!--头部提示部分-->
                        <div class="payOnline-title" id="pay_title"><img src="${pageContext.request.contextPath}/gsfiles/paySuccsee/gou.png" alt="">
                            <div class="payOnline-title-test"><h1>付款成功，我们会尽快为你安排发货！！</h1>
                                <p></p></div>
                        </div>
                        <div id="pay_orderinfo">
                            <div class="sure-pay">
                                 <span id="spNum">10</span>秒后自动返回主页面...<p> </p></div>
                        </div>
                        <%-- <div id="payBox">
                            <!--支付方式开始-->
                            <h1>请选择付款方式 </h1>

                            <div class="cb"></div>
                            <div id="pay_list">
                                <div class="payOnline-way"><input type="checkbox" id="choose-pay" name="choose-pay"
                                                                  disabled="disabled"><span>使用预存款<i>(您的账户当前可用预存款 <b>￥0</b>)</i></span><span>余额不足 ！ <a
                                        href=" "><b class="c-ff5454">请充值</b></a></span><br><input
                                        type="radio" id="choose-pay-credit" name="choose-pay" disabled="disabled"><span>使用授信支付<i>(您的账户当前可用授信余额 <b>￥0</b>)</i></span>
                                    <div class="payOnline-way-show cur_poin">
                                        <div class="payOnline-way-box cur_poin">
                                            <div class="payOnline-way-box-img" data-index="0" data-code="15"
                                                 data-event="1"
                                                 style="background: url(&quot;/images/choose-bg.png&quot;) -150% 0px / 300% 100% repeat-x;">
                                                <img src="${pageContext.request.contextPath}/gsfiles/paySuccsee/pay_alipay.gif" alt="15"></div>
                                            <p>支付宝</p></div>
                                        <div class="payOnline-way-box cur_poin">
                                            <div class="payOnline-way-box-img a1 selected" data-index="1" data-code="24"
                                                 data-event="0"
                                                 style="background: url(&quot;/images/choose-bg.png&quot;) center center no-repeat;">
                                                <img src="${pageContext.request.contextPath}/gsfiles/paySuccsee/wepay.png" alt="24"></div>
                                            <p>微信扫码支付</p></div>
                                        <div class="cb"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="cb"></div>
                            <!--按钮开始-->
                            <div class="paymentPassword none" id="upayment">您未设置支付密码，为保障您的账户资金安全，请先【<a
                                    href=" " style="color: red;">设置支付密码</a>】
                                再进行支付
                                <div class="cb"></div>
                            </div>

                            <a id="xlink" target="_blank"></a>

                        </div> --%>
                    </div>
                </div>
            </div>
        </div>
        <script src="${pageContext.request.contextPath}/gsfiles/paySuccsee/base64.js"></script>
        <script src="${pageContext.request.contextPath}/gsfiles/paySuccsee/cart.shop.js"></script>
        <script src="${pageContext.request.contextPath}/gsfiles/paySuccsee/cart.action.js"></script>
        <script src="${pageContext.request.contextPath}/gsfiles/paySuccsee/checkOrder.js"></script>

    </div>

    <script src="${pageContext.request.contextPath}/gsfiles/paySuccsee/template-plugin.js"></script>
    <link href="${pageContext.request.contextPath}/gsfiles/paySuccsee/ecs_os_v1.min.css" rel="Stylesheet" type="text/css">
     

</form>

<form  class="u_pay_from"  >

    <div class="buypay">
        <a class="cur_poin" id="btnbuypay" onclick="location.href='${pageContext.request.contextPath}/purindex'">立即返回</a>
    </div>


</form>

 

</body>
</html>