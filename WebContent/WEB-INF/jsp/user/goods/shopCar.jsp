<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib prefix="shiro" uri="http://shiro.apache.org/tags" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
 
 
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>

        我的购物车

    </title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta http-equiv="Expires" content="0">
    <meta http-equiv="Cache-Control" content="no-cache">
    <meta http-equiv="Pragma" content="no-cache">
    <meta name="keywords">
    <meta name="description">
    <meta name="viewport" content="width=device-width">
        
    <link href="gsfiles/gsfileShop/Ecshop.Hint.css" rel="stylesheet">
    <link href="gsfiles/gsfileShop/cartshop.css" rel="stylesheet">
    <script src="gsfiles/gsfileShop/jquery-1.10.2.min.js"></script>
    <script src="gsfiles/gsfileShop/ecshop.tool.js"></script>
    <style>
        .backtop {
            display: none !important;
        }
        .mya:hover {
  
 color: #FFFFFF;
 text-decoration: underline;
}
    </style>
    <!--[if IE 6]>
    <script src="../common_script/DD_belatedPNG.js?t=201510271516"></script>
    <script>DD_belatedPNG.fix('.png_bg');</script>
    <![endif]-->
     <script type="text/javascript">
  
 	   
    
    </script>
    <script type="text/javascript">
        

        function jian(e) {
             $(function() {
				var a=$("#trade"+e).val();
				var b=a; 
					if(a!=1){
						a=a-1;
						$("#trade"+e).val(a);
					}
				
				var num=$("#trade"+e).val();
				var price=$("#myprice"+e).html();
				/* var allPrice=document.getElementById("allPrice"+e).innerHTML; */
				 
				 
				 $("#allPrice"+e).html(num*price);
				
				 //ajax
				      
		      		var url= "addshop.action";
		      		 if(num!=b){
			      		var params = {
			      				 goodsId:e,
			      				goodsnum:num
		      		};
			      	  $.getJSON(url,params,function(result){//响应回来的json数组
			      	 	 
			      		$("#zongjia").html("¥"+result+"元");  
			              });
				    
		      		 }
		      		/*  var price=$("#onePrice"+e).val();
		      		 var secondPrice=$("#secondPrice"+e).val();
		      		 var thirdPrice=$("#thirdPrice"+e).val();
		      		 var secondNum=$("#secondNum"+e).val();
		      		 var thirdNum=$("#thirdNum"+e).val();
		      		 
		      		 if(num>secondNum&&num<thirdNum){
		      			 alert("2");
		      			 $("#myprice"+e).html(secondPrice);
		      			 $("#allPrice"+e).html(num*secondPrice);
		      		 }
		      		 if(num<thirdNum){
		      			 alert("3");
		      			 $("#myprice"+e).html(thirdPrice);
		      			 $("#allPrice"+e).html(num*thirdPrice);
		      		 }
		      		if(num<secondNum){
		      			 alert("1");
		      			 $("#myprice"+e).html(price);
		      			 $("#allPrice"+e).html(num*price);
		      		 } */
		      	
		      		 
			});
        }
        function jia(e) {
        	
             $(function() {
				var a=$("#trade"+e).val();
					a=a-1+2;
					$("#trade"+e).val(a);
				 
			
             var num=$("#trade"+e).val();
				var price=$("#myprice"+e).html();
				/* var allPrice=document.getElementById("allPrice"+e).innerHTML; */
				 
				 
				 $("#allPrice"+e).html(num*price);
				
				 //ajax
				    
		       	   
		       		
		      		var url= "addshop.action";
		      		 
			      		var params = {
			      				 goodsId:e,
			      				goodsnum:num
		      		};
			      	  $.getJSON(url,params,function(result){//响应回来的json数组
			      		
		        		$("#zongjia").html("¥"+result+"元"); 
			              });
			       
             });
		      		
             
        }
        function keyup(e) {
           
             var num=$("#trade"+e).val();
				var price=$("#myprice"+e).html();
				/* var allPrice=document.getElementById("allPrice"+e).innerHTML; */
				 
				 
				 $("#allPrice"+e).html(num*price);
				
				 var url= "addshop.action";
	      		 
		      		var params = {
		      				 goodsId:e,
		      				goodsnum:num
	      		};
		      	  $.getJSON(url,params,function(result){//响应回来的json数组
		      		   
		        		$("#zongjia").html("¥"+result+"元");  
		              });
        }
    </script>
</head>
<body style="">
<form method="post" action="http://gsw818.com/cart/list.aspx" id="form1">
    <div class="aspNetHidden">
        <input type="hidden" name="__EVENTTARGET" id="__EVENTTARGET" value="">
        <input type="hidden" name="__EVENTARGUMENT" id="__EVENTARGUMENT" value="">
        <input type="hidden" name="__VIEWSTATE" id="__VIEWSTATE"
               value="/wEPDwUKLTg0OTQ5Njg5OGRkDBskVzQqqL0YoGsT3l6AY9yQ3XfzOw9bFDZNccGlk2Q=">
    </div>

     


    <script type="text/javascript">var __global_Order_Goods_Qty_Must_Int = 0;</script>
    <div class="aspNetHidden">

        <input type="hidden" name="__VIEWSTATEGENERATOR" id="__VIEWSTATEGENERATOR" value="A0F160A1">
        <input type="hidden" name="__EVENTVALIDATION" id="__EVENTVALIDATION"
               value="/wEdAAI3S06N93mySY3HdS0pJkpbQvB7ioycWj4PcKFmMO9NPjdijU4vUVJP0He9sFVpGl0VUcfFlgsk8nSCuRM5K6uh">
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
                            <li class="fore2"><span>2</span>
                                <p>核对订单信息</p></li>
                            <li class="fore3"><span>3</span>
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


    <div class="shop_content">


        <div>
            <input type="hidden" id="actionInit" value="1">
        </div>
        <div class="all-box">
            <div class="shopCard">
                <!--头部内容开始-->
                <div class="shopCard-box">
                    <!--头部内容开始-->
                    <div class="shopCard-title" style="height: 35px;">
                    <span>
                        <img src="gsfiles/gsfileShop/Cart.png" alt="">
                        <span id="cartmark">购物车</span>
                    </span>
                        
                        <a href="${pageContext.request.contextPath}/purindex" class="" id="goindex">继续购物&gt;</a>


                    </div>

                    <!--表单部分开始 onclick='cal.checkeds(this);'-->
                    <div class="table-top">
                        <ul>
                            <li class="w10">
                               
                                                           序号
                            </li>
                            <li class="w40 tcenter">商品信息</li>
                            <li class="w10">单价（元）</li>
                            <li class="w117">数量</li>
                            <li class="w77">单位</li>
                            <li class="w10"><span>小计（元）</span></li>
                            <li class="w10">操作</li>
                            <div class="cb"></div>
                        </ul>
                    </div>


                    <div class="table-box" id="cart_datalist">
                        <dl>
                        ${msg}
                         
                             <c:forEach var="goodsGwc" varStatus="varStatus" items="${goodsGwcList}">
                              
                            <dd>
                            <input type="hidden" id="onePrice${goodsGwc.goods.goodsId}" value="${goodsGwc.goods.price}" />
                            <input type="hidden" id="secondPrice${goodsGwc.goods.goodsId}" value="${goodsGwc.goods.secondPrice}" />
                            <input type="hidden" id="thirdPrice${goodsGwc.goods.goodsId}" value="${goodsGwc.goods.thirdPrice}" />
                            <input type="hidden" id="thirdNum${goodsGwc.goods.goodsId}" value="${goodsGwc.goods.thirdNum}" />
                            <input type="hidden" id="secondNum${goodsGwc.goods.goodsId}" value="${goodsGwc.goods.secondNum}" />
                                <div class="table-box-list">
                                    <div class="table-box-list-bg bg-fa" id="cbgp_1_8246_11_0">
                                        <ul id="item_1_8246_11_0">
                                            <li class="w10 pro-price m28">${varStatus.index+1}</li>
                                            <li class="w40 tl m10"><img
                                                    src="/goods/${goodsGwc.goods.goodsPhoto}"
                                                    alt="" class="pro-img cur_poin" onclick="cart.visit(3734);">
                                                <div class="pro-test"><h1 class="cur_poin" onclick="cart.visit(3734);">
                                                   ${goodsGwc.goods.title}</h1>
                                                    <p></p></div>
                                                <div class="cb"></div>
                                            </li>
                                            <li class="w10  m28"><span id="source_1_8246_11_0"></span>
                                                <p id="price_1_8246_11_0"></p>¥<span id="myprice${goodsGwc.goods.goodsId}">
                                           
                                                ${goodsGwc.goods.price}
                                                
                                                </span></li>
                                            <li class="w117 m30 tc" >
                                                <div class="pro-num" offerid="undefined" >
                                                    <div class="bomb-box none" id="box_1_8246_11_0"></div>
                                                    <a class="num-down mya" style="text-decoration:none;" onclick="jian('${goodsGwc.goods.goodsId}');">-</a><input
                                                        type="text"   class="num-checked" onkeyup="keyup('${goodsGwc.goods.goodsId}');this.value=this.value.replace(/\D/g,'')" 
                                                         id="trade${goodsGwc.goods.goodsId}"
                                                        cid="3438" value="${goodsGwc.num}" mc="0" nc="1"><a class="num-up mya"
                                                                                             style="text-decoration:none;"   onclick="jia('${goodsGwc.goods.goodsId}');">+</a>
                                                    <div class="cb"></div>
                                                </div>
                                                <p class="table-box-list-li-p" id="tip_1_8246_11_0"> </p></li>
                                            <li class="w77 m30">${goodsGwc.goods.unit}</li>
                                            <li class="w10 m30 color-ff4e4e" id="lsgt_1_8246_11_0">¥<span id="allPrice${goodsGwc.goods.goodsId}">${goodsGwc.allPrice}</span></li>
                                            <li class="w10 m30" aid="11_3438_8246_1" offerid="0"> <a class="cur_poin "  href="${pageContext.request.contextPath}/removeShopCar?goodsId=${goodsGwc.goods.goodsId}">移除</a><br><a
                                                    class="noticed cur_poin c-0581ea none"
                                                    id="noticed_1_8246_11_0">到货通知</a></li>
                                            <div class="cb"></div>
                                        </ul>
                                        <div class="none"><input type="hidden" id="note_1_8246_11_0" value="3438"></div>
                                    </div>
                                </div>
                            </dd>
                            <input type="hidden" id = "allmoney" value=""> 
                            
                           </c:forEach> 
                        </dl>
                    </div>
                </div>
                <div class="cart_bot_inner"></div>
                <div class="cart_bott_inner" id="cartgobuy">
                    <div class="cart_bott_inner_box">
                        <div id="cart_total">
                            <div class="table-bottom-box">
                                <div class="table-bottom-lef"> 
                                </div>
                                <div class="table-bottom-rig">
                                    <div class="table-bottom-rig-test"><p>合计：<span id="zongjia">¥${zongjia} 元</span>
                                    </p>
                                        <p id="cltcheap">共节省：¥0 元（返现:0）</p></div>
                                    <a href="${pageContext.request.contextPath}/accounts.action" class="cur_poin " >去结算</a></div>
                                <div class="cb"></div>
                            </div>
                        </div>
                        <span id="triangle-bottomleft"></span>
                        <span id="triangle-bottomright"></span>
                    </div>
                </div>
                <div class="shopCard-nopro none">
                    <div class="shopCard-nopro-title">
                        <dl>
                            <dt>
                                <img src="gsfiles/gsfileShop/kongshopcard.png" alt="">
                            </dt>
                            <dd>
                                <h1>您的<span id="nocartmark">购物车</span>还没有商品</h1>
                                <p>购物车可以暂存您的商品，并且显示商品的最新价格</p>
                            </dd>
                        </dl>
                    </div>
                    <div class="shopCard-nopro-content">
                        <p>
                            去<a href="http://gsw818.com/">首页</a>挑选喜欢的商品 &gt;&gt;
                        </p>
                    </div>
                </div>
                

                 

                <input type="hidden" id="cartation" value="0">
            </div>
        </div>
        <style>
            .Bomb-coupon-content-box-text {
                border: 1px solid #999999
            }
        </style>
       
        <link href="gsfiles/gsfileShop/public_r.css" rel="stylesheet">
        <script type="text/javascript">
            $("#keybarcode").keydown(function (event) {
                if (event.keyCode == 13) { //绑定回车
                    $('#cartbar').click();
                }
            });

        </script>

    </div>

    <script src="gsfiles/gsfileShop/template-plugin.js"></script>
    <link href="gsfiles/gsfileShop/ecs_os_v1.min.css" rel="Stylesheet" type="text/css">
    


</form>


<a href="javascript:;" id="backtotop" class="backtop" style="display: inline;">回顶部</a>
 
    
 
</div>
 
</body>
</html>