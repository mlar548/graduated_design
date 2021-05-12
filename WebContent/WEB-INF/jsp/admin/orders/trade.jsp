<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib prefix="shiro" uri="http://shiro.apache.org/tags" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
 
 
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title> 详细商品</title>
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
    <link
	href="${pageContext.request.contextPath}/dist/css/bootstrap.min.css"
	rel="stylesheet">
    <script src="${pageContext.request.contextPath}/dist/js/bootstrap.js"></script>
    
    
   <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/static/admin/layui/css/modules/myicon/iconfont.css"/>
		<script type="text/javascript">
		function onclickA(){
			alert("通知成功");
		}
		
		</script>
    <style>
        .backtop {
            display: none !important;
        }
        .mya:hover {
  
 color: #FFFFFF;
 text-decoration: underline;
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

.a1{
	display:none;
	}
	.a{
display:inline;
	}
    </style>
    <!--[if IE 6]>
    <script src="../common_script/DD_belatedPNG.js?t=201510271516"></script>
    <script>DD_belatedPNG.fix('.png_bg');</script>
    <![endif]-->
  <style>
  
  </style>         
</head>

<body style="transform: scale(0.9) translate(-10px, 0px);">
 <!-- <a     class="fanhuiA " style=" text-decoration:none;"  href="javascript:history.go(-1);"  >
							<i class="iconfont "  > &#xe606;</i>
						</a>  -->
<form method="post" action="http://gsw818.com/cart/list.aspx" id="form1">
    

    <script type="text/javascript">var __global_Order_Goods_Qty_Must_Int = 0;</script>
   
 
    <div class="shop_content"  >


        
        <div class="all-box "  >
            <div class="shopCard">
                <!--头部内容开始-->
                <div class="shopCard-box">
                  

                    <!--表单部分开始 onclick='cal.checkeds(this);'-->
                    <div class="table-top">
                        <ul>
                            <li class="w10">
                               
                                                           序号
                            </li>
                            <li class="w40 tcenter">商品信息</li>
                            <li class="w10">单价（元）</li>
                            <li class="w77">数量</li>
                            <c:if test="${order.zt=='订单生成'}">
                            <li class="w117">该仓库剩余</li>
                            </c:if>
                            <li class="w10"><span>小计（元）</span></li>
                            <div class="cb"></div>
                             
                        </ul>
                    </div>


                    <div class="table-box" id="cart_datalist">
                        <dl>
                  
                        
                             <c:forEach var="trade" varStatus="varStatus" items="${order.tradeList}">
                            <dd>
                                <div class="table-box-list">
                                    <div class="table-box-list-bg bg-fa" id="cbgp_1_8246_11_0">
                                        <ul id="item_1_8246_11_0">
                                            <li class="w10 pro-price m28"> ${varStatus.index+1}</li>
                                            <li class="w40 tl m10"><img
                                                    src="/goods/${trade.goods.goodsPhoto}"
                                                    alt="" class="pro-img cur_poin" onclick="cart.visit(3734);">
                                                <div class="pro-test"><h1 class="cur_poin" onclick="cart.visit(3734);">
                                                 <span style="font-size: 15px">  ${trade.goods.title}</span></h1>
                                                    <p></p></div>
                                                <div class="cb"></div>
                                            </li>
                                            <li class="w10  m28"><span id="source_1_8246_11_0"></span>
                                                <p id="price_1_8246_11_0"></p>¥<span style="font-size: 16px" id="myprice${trade.goods.goodsId}">
                                           
                                                ${trade.goods.price}
                                                 
                                                </span></li>
                                            <li class="w77 m30 tc" >
                                         <span style="font-size: 16px"> ${trade.tradeQuantity}</span>
                                            
                                             </li>
                                             <c:if
												test="${order.zt=='订单生成'}">
													 
														
													<li class="w117 m28">
													<c:if
															test="${trade.lastQuantity-trade.tradeQuantity<0}">
															<span style="color: red;font-size: 16px"> ${trade.lastQuantity}</span>
														</c:if> 
														<c:if test="${trade.lastQuantity-trade.tradeQuantity>=0}">
                                           <span style=" font-size: 16px">  ${trade.lastQuantity}</span>
                                            </c:if> <input type="hidden"
														value="${trade.lastQuantity-trade.tradeQuantity}" /> 
														<script
															type="text/javascript">
															$(function() {
																var a = ${trade.lastQuantity- trade.tradeQuantity};
																
																if (a < 0) {
																	$("#subA").removeClass("a");
																	$("#subA").addClass("a1");
																	 
																}
																

															});
														</script> <br> 
														<c:if
															test="${trade.lastQuantity-trade.tradeQuantity<0}">
															<a onclick="onclickA()"
																href="${pageContext.request.contextPath}/noticeOt.action?tradeId=${trade.tradeId}&id=${order.id}&warehouseId=${order.warehouse.warehouseId}&warehouseLastNum=${trade.lastQuantity}"
																class="clickDiaobo">通知调拨</a>
														</c:if></li>
														
														</c:if> 
													<li class="w10 m30 color-ff4e4e" id="lsgt_1_8246_11_0">¥<span style=" font-size: 16px" id="allPrice${trade.goods.goodsId}">${trade.tradeAllPrice}</span></li>
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
                 
                 

                 

                
            </div>
        </div>
         
        <div class="form-group">
				
				  <span style="font-size: 17px"> 订单号：<label style="font-size: 17px"> ${order.orderId}  </label>  </span>
			</div>
        <div class="form-group">
				<label style="font-size: 17px">   </label>  
				  <span style="font-size: 17px"> 收货地址：${order.address.province}${order.address.city}${order.address.alladdress}</span>
			</div>
        
     
        
  <br>
    <div class="form-group">
  <label style="font-size: 17px">             </label>
   <span style="font-size: 17px">  发货仓库: ${order.warehouse.warehouseName}</span>
  </div>
  <br>
  <c:if test="${order.zt=='订单生成'}">
  <center>
  <div class="form-group">
  <a id="subA" role="button" class="a btn btn-info btn-lg" href="${pageContext.request.contextPath}/confirmOrder?id=${order.id}" >确认</a>
  <a href="javascript:history.go(-1);" type="button"  class="btn btn-success btn-lg" >返回</a>
	
  </div>
  </center>
  </c:if>
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

 
 
    
 
</div>
 
</body>
</html>