<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
	    <%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib prefix="shiro" uri="http://shiro.apache.org/tags" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<title>提交订单</title>
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<meta http-equiv="Expires" content="0">
<meta http-equiv="Cache-Control" content="no-cache">
<meta http-equiv="Pragma" content="no-cache">
<meta name="keywords">
<meta name="description">
<meta name="viewport" content="width=device-width">
 

<script
	src="${pageContext.request.contextPath}/gsfiles/gsacc/jquery-1.10.2.min.js"></script>
<link
	href="${pageContext.request.contextPath}/dist/css/bootstrap.min.css"
	rel="stylesheet">
	<script src="${pageContext.request.contextPath}/dist/js/bootstrap.js"></script>
	
	<link
	href="${pageContext.request.contextPath}/gsfiles/gsacc/Ecshop.Hint.css"
	rel="stylesheet">
<link
	href="${pageContext.request.contextPath}/gsfiles/gsacc/cartshop.css"
	rel="stylesheet">
	<script
	src="${pageContext.request.contextPath}/gsfiles/gsacc/ecshop.tool.js"></script>
	<script
	src="${pageContext.request.contextPath}/js/address.js"></script>
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
        $(function(){
        	 $('#pay').click(function(){
             	alert("支付成功");
             	$('#subtijiao').removeAttr("disabled");
             });
        });
       
        
    </script>
    <style>
.shoukuoKuang {
	width: 500px;
	height: 55px;
	border: 1px double #D0DFEF;
}

.shoukuoKuang input {
	margin-left: 10px;
	margin-top: 10px;
}
</style>
</head>
<body style="">

            
<!-- 模态框 -->


<!-- Modal -->
<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="myModalLabel">添加收货地址</h4>
      </div>
      <div class="modal-body">
           <form action="${pageContext.request.contextPath}/userAddAddress.action" >
						<div class="form-group">
							<label ><span style="color:red">*</span>收货人名</label> <input
								type="text" class="form-control" id="name" name="name"
								 >
						</div>
						<div class="form-group">
							<label ><span style="color:red">*</span>手机号码</label> <input
								type="text" class="form-control" id="phone" name="phone"
								 >
						</div>
						<div class="form-group">
							<label > 电话</label> <input
								type="text" class="form-control" id="tel" name="tel"
								 >
						</div>
						<div class="form-group">
							<label ><span style="color:red">*</span>省 市：</label> 
							 <select
							 class=" "  id="province" size=1 style="width:150px;height:35px" onchange="getCity()"   name="province"
								 >
								   <option>---选择省---</option>
								 <option value="北京市" >北京市</option>
							    <option value= "上海市">上海市</option>
							    <option value= "天津市" >天津市</option>
							    <option value= "重庆市" >重庆市</option>
							    <option value= "河北省" >河北省</option>
							    <option value= "山西省" >山西省</option>
							    <option value= "内蒙古自治区" >内蒙古自治区</option>
							    <option value= "辽宁省" >辽宁省</option>
							    <option value= "吉林省" >吉林省</option>
							    <option value= "黑龙江省" >黑龙江省</option>
							    <option value= "江苏省" >江苏省</option>
							    <option value= "浙江省" >浙江省</option>
							    <option value= "安徽省" >安徽省</option>
							    <option value= "福建省" >福建省</option>
							    <option value= "江西省" >江西省</option>
							    <option value= "山东省" >山东省</option>
							    <option value= "河南省" >河南省</option>
							    <option value= "湖北省" >湖北省</option>
							    <option value= "湖南省" >湖南省</option>
							    <option value= "广东省" >广东省</option>
							    <option value= "广西壮族自治区" >广西壮族自治区</option>
							    <option value= "海南省" >海南省</option>
							    <option value= "四川省" >四川省</option>
							    <option value= "贵州省" >贵州省</option>
							    <option value= "云南省" >云南省</option>
							    <option value= "西藏自治区" >西藏自治区</option>
							    <option value= "陕西省" >陕西省</option>
							    <option value= "甘肃省" >甘肃省</option>
							    <option value= "宁夏回族自治区" >宁夏回族自治区</option>
							    <option value= "青海省" >青海省</option>
							    <option value= "新疆维吾尔自治区" >新疆维吾尔自治区</option>
							    <option value= "香港特别行政区" >香港特别行政区</option>
							    <option value= "澳门特别行政区" >澳门特别行政区</option>
							    <option value= "台湾省" >台湾省</option>
								</select>
						 
							 
							 <select
							 class="  "id="city"   style="width:150px;height:35px" name="city"
								 >
								 <option>---选择市---</option>
								</select>
						</div>
						<div class="form-group">
							<label ><span style="color:red">*</span> 详细地址：</label> <textarea
								  class="form-control" id="alladdress" name="alladdress"
								 ></textarea>
						</div>
						<div class="form-group">
							<label  >邮政编码：</label> <input
							class="form-control" style="width:150px;"	type="text" id="postalCode" name="postalCode">
						</div>
						  
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">返回</button>
         
        <button type="submit" class="btn btn-primary" >保存</button>
       
      </div>
       </form>
    </div>
  </div>
</div>


<!-- Modal -->
 <form action="${pageContext.request.contextPath}/pay.action" >
<div class="modal fade" id="myModal2" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="myModalLabel">支付方式  </h4>
      </div>
      <div class="modal-body">
           <div class=" ">
						<h1>请选择一种支付方式：</h1>
						<div class=" " id="pay-box">
							<!-- <a data-code="1" class="cur_poin" ck="1"
								style="background: url(&quot;/images/cart/background1.jpg&quot;);">在线支付</a> -->
								<img   alt="" src="/goods/weixin.jpg" width="200px" >&nbsp;&nbsp;
								 <img alt="" src="/goods/alpay.jpg" width="200px">  
								 <br>
								 
						</div>
					</div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">返回</button>
        <button type="submit" class="btn btn-warning">支付</button>
      </div>
    </div>
  </div>
</div>

	 
		<div class="aspNetHidden">
			<input type="hidden" name="__EVENTTARGET" id="__EVENTTARGET" value="">
			<input type="hidden" name="__EVENTARGUMENT" id="__EVENTARGUMENT"
				value=""> <input type="hidden" name="__VIEWSTATE"
				id="__VIEWSTATE"
				value="/wEPDwUKMjAzOTc3OTA0NmRknUNv+yhlhQJ86Jz6waG6rizOcla2SQKn0ZS4A05tbsA=">
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

			<input type="hidden" name="__VIEWSTATEGENERATOR"
				id="__VIEWSTATEGENERATOR" value="3B9DACD8"> <input
				type="hidden" name="__EVENTVALIDATION" id="__EVENTVALIDATION"
				value="/wEdAALQjYbXp7bU+cghp58JlTfvQvB7ioycWj4PcKFmMO9NPgtqa2TyEI4hLcurPdReX22vipSXmnRVAEuX/PWHDOHT">
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
							<td class="head-logo-lef tl" width="40%"><a
								href="${pageContext.request.contextPath}/purindex"><img
									src="/goods/logo.jpg"
									alt=""></a></td>
							<td class="head-logo-rig tr"><ul>
									<li class="fore1 bg-f46444"><span>1</span>
									<p>我的购物车</p></li>
									<li class="fore2 bg-f46444"><span>2</span>
									<p>核对订单信息</p></li>
									<li class="fore3"><span>3</span>
									<p>成功提交订单</p></li>
									<div class="cb"></div>
								</ul></td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>

		<!--头部logo-->


		<div class="shop_content">

			<div class="shopCard">
				<div class="wid980">
					<!--收货人信息开始-->

					<div class="checkOrder-content">
						<h1>收货人信息</h1>
						<div class="checkOrder-content-address">
							<div id="useradrs"></div>
							<div class="cb"></div>
							<c:forEach var="address" varStatus="varStatus" items="${thisAddressList}">
							
							<div class="shoukuoKuang">
							<div class="form-group" >
							
							
							    <input type="radio" class="form-group" name="addressId"
							    <c:if test="${varStatus.index==0}">
							     checked="checked" </c:if>
							     value="${address.addressId}">&nbsp;&nbsp;${address.province}${address.city}&nbsp;${address.alladdress}
							                                 <br>   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    收货人：${address.name}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      联系电话：${address.phone}
							    
							    </div>
							    </div>
							    <br>
							</c:forEach>
							<button type="button" class="btn btn-info btn-xs" data-toggle="modal" data-target="#myModal">
  + 使用新地址
</button>
						</div>
					</div>

					<div class="checkOrder-content">
						<h1>商品及配送信息</h1>
						<div id="cart_buylist" style="display: block;">
							<div class="checkOrder-content-box">
								<div class="checkOrder-list">
									&nbsp;
									
									<div>
										<div class="checkOrder-box">
											<div class="checkOrder-box-top"  >
												 
												<div class="checkOrder-box-top-rig" style=" width: 1000px;border: 0px; ">
													<div class="checkOrder-box-top-rig-show"
														style="height: auto;width: 1000px;border: 0px; ">
														<div class="group-gift" >
															<div class="checkOrder-box-top-rig-box" style=" width: 900px; ">
																<div style=" border: 0px;">
																	<table>
																		<tbody>
																		<c:forEach var="goodsGwc" items="${goodsGwcList}">
																			<tr>
																				<td width="20%"><img
																					src="/goods/${goodsGwc.goods.goodsPhoto}"
																					alt="" class="cur_poin"></td>
																				<td width="50%" class="tl"><h2 class=""
																						 >${goodsGwc.goods.title}</h2>
																					<p></p></td>
																				<td width="15%"><div class="pro-num"
																						offerid="undefined">
																						<div class="bomb-box none" id="box_1_8246_11_0"></div>
																						<span id="lsgc_1_8246_11_0">${goodsGwc.num}</span>&nbsp;${goodsGwc.goods.unit}
																					</div>
																					 </td>
																				<td width="15%"><span>¥${goodsGwc.allPrice}</span></td>
																			
																			</tr>
																				 
																			</c:forEach>
																				 
																		</tbody>
																	</table>
																</div>
															</div>
														</div>
													</div>
												</div>
												
												<div class="cb"></div>
											</div>
											 
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<!--自提点开始-->
					<div class="checkOrder-content" id="divSince"
						style="display: none;">
						<h1>自提点信息</h1>
						<div class="checkOrder-content-address">
							<div id="sinceaddress"></div>
							<div class="cb"></div>

						</div>
					</div>
					<!--支付方式开始-->
					
					<!--总价开始-->
					<div class="checkOrder-content">
						<div class="price-box">
							<div id="cartbuytotal">
								 <span> 应付总金额：<b>¥${zongjia}</b></span>
							</div>
							<p>
								<a href="${pageContext.request.contextPath}/shopCar.action"
									class="btn btn-default ">返回购物车</a>
									 
									 
									 <input    
									class="btn btn-success btn-lg"  data-toggle="modal" data-target="#myModal2"  type="button" value="确认提交" > 
									<!--id="subtijiao" disabled="disabled" -->
							</p>
							</form>
						</div>
					</div>
				</div>

			</div>
			<script
				src="${pageContext.request.contextPath}/gsfiles/gsacc/jquery-1.10.2.min.js"></script>
			<script
				src="${pageContext.request.contextPath}/gsfiles/gsacc/cart.shop.js"></script>
			<script
				src="${pageContext.request.contextPath}/gsfiles/gsacc/cart.action.js"></script>
			<script
				src="${pageContext.request.contextPath}/gsfiles/gsacc/checkOrder.js"></script>


			<script
				src="${pageContext.request.contextPath}/gsfiles/gsacc/jquery-1.7.1.min.js"></script>

			<link rel="stylesheet"
				href="${pageContext.request.contextPath}/gsfiles/gsacc/calendar.css">
			<script
				src="${pageContext.request.contextPath}/gsfiles/gsacc/calendar.js"></script>
			<script
				src="${pageContext.request.contextPath}/gsfiles/gsacc/ECF.min.js"></script>
			<script
				src="${pageContext.request.contextPath}/gsfiles/gsacc/ECF.Dialog.min.js"></script>
			<style>
.cxSpan, .cx-span {
	padding: 2px 8px;
}

.checkOrder-box-top-rig-box .gift {
	position: relative;
	margin: 10px 10px 0 20%;
	padding: 10px 50px 10px 60px;
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	box-sizing: border-box;
	background: #eee;
	border: 1px solid #ddd;
}

.checkOrder-box-top-rig-box .gift .cxSpan {
	position: absolute;
	left: 10px;
	top: 8px;
}

.checkOrder-box-top-rig-box .gift p {
	width: 100%;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	font-size: 13px;
	color: #666;
}

.checkOrder-box-top-rig-box .gift em {
	position: absolute;
	right: 10px;
	top: 10px;
	font-style: normal;
	font-size: 12px;
	color: #666;
}

.group-gift .shopCart-product-top-test {
	position: relative;
	padding-left: 50px;
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	box-sizing: border-box;
}

.group-gift .shopCart-product-top-test .cx-span {
	position: absolute;
	left: 10px;
	top: 10px;
}

.group-gift .shopCart-product-top-test>dl {
	position: relative;
	padding-right: 20px;
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	box-sizing: border-box;
}

.group-gift .shopCart-product-top-test>dl dt {
	width: 100%;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	line-height: 44px;
}

.group-gift .shopCart-product-top-test>dl dd {
	position: absolute;
	right: 0;
	top: 0;
	width: 20px;
}

.group-gift .checkOrder-box-top-rig-box {
	padding: 0 0 0 35px;
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	box-sizing: border-box;
	border: 0;
}

.group-gift .checkOrder-box-top-rig-box>div {
	position: relative;
	padding: 10px 0;
	border-left: 1px dashed #ddd;
	border-bottom: 1px solid #e4e4e4;
}

.group-gift .checkOrder-box-top-rig-box .circle {
	position: absolute;
	left: -7px;
	top: 50%;
	width: 15px;
	height: 15px;
	margin-top: -5px;
	background: #dddddd;
	-webkit-border-radius: 999px;
	-moz-border-radius: 999px;
	border-radius: 999px;
}
</style>


			<script>
        $(".input_radio").change(function () {
            if ($(this).attr("data-code") == 3) {
                $("#tr_InvoiceNo").show();
            } else {
                $("#tr_InvoiceNo").hide();
            }
        });
        var DatePicker = function () {

            $("#txtDlyTime").val('2019-04-13');
            $("#txtDlyTime").datepicker({
                inline: true,
                showButtonPanel: true,
                changeMonth: true,
                changeYear: true,
                //timeFormat: 'hh:mm',
                dateFormat: 'yy-mm-dd',
                numberOfMonths: 1,
                minDate: '2019-04-13',
                initVal: '2019-04-13',
                hourMin: 0,
                minuteMin: 0,
                hourMax: 23,
                minuteMax: 59,
                fn: function () {


                }
            });

            showdlyTime($(".sbgc").attr("isr") == 'true', $(".sbgc").attr("rs"), $(".sbgc").attr("re"));
        };

        //setTimeout(DatePicker, 2000);

       /*  function showdlyTime(isReservation, start, end) {


            if (isReservation) {
                var intStart = parseInt(start);
                var intEnd = parseInt(end);
                var selhour = '';
                for (var i = intStart; i <= intEnd; i++) {
                    selhour += "<option value='" + i + ":29'>" + i + ":01-29分</option>";
                    selhour += "<option value='" + i + ":59'>" + i + ":30-59分</option>";
                }
                $("#selHour").html(selhour);
                $("#pdlytime").show();
                $("#fdlytimemsg").html("(请选择两个小时以后的时间，我们将尽快为您配送！)");
            }
            else
                $("#pdlytime").hide();
        } */


        function ChangeDate() {

            //var dlytime = $("#txtDlyTime").val();
            //var dlyDate = new Date(dlytime.replace(/-/g, '/'));
            //var freight = $(".boxser[did=" + db.data[0]["dly"] + "]");

            //if (dlyDate.getHours() < parseInt(freight.attr("rs"))) {
            //    dlytime = dlytime.split(" ")[0] + " " + (parseInt(freight.attr("rs")) >= 10 ? freight.attr("rs") : "0" + freight.attr("rs")) + ":00";
            //} else if (dlyDate.getHours() > parseInt(freight.attr("re"))) {
            //    dlytime = dlytime.split(" ")[0] + " " + (parseInt(freight.attr("re")) >= 10 ? freight.attr("re") : "0" + freight.attr("re")) + ":00";
            //} else {
            //    dlyDate = new Date(dlytime.replace(/-/g, '/'));
            //    if (dlyDate.getMinutes() > 0 && dlyDate.getMinutes() < 30) {
            //        if (dlyDate.getHours() >= parseInt(freight.attr("re"))) {
            //            dlytime = dlytime.split(" ")[0] + " " + (parseInt(freight.attr("re")) >= 10 ? freight.attr("re") : "0" + freight.attr("re")) + ":00";
            //        } else {
            //            dlytime = dlytime.split(" ")[0] + " " + dlytime.split(" ")[1].split(":")[0] + ":30";
            //        }
            //    } else if (dlyDate.getMinutes() > 0 && dlyDate.getMinutes() > 30) {

            //        if (dlyDate.getHours() >= parseInt(freight.attr("re"))) {
            //            dlytime = dlytime.split(" ")[0] + " " + (parseInt(freight.attr("re")) >= 10 ? freight.attr("re") : "0" + freight.attr("re")) + ":00";
            //        } else {
            //            dlytime = dlytime.split(" ")[0] + " " + (dlyDate.getHours() + 1) + ":00";
            //        }
            //    }
            //}



            //$("#txtDlyTime").val(dlytime);
        }

    </script>

		</div>

		<script
			src="${pageContext.request.contextPath}/gsfiles/gsacc/template-plugin.js"></script>
		<link
			href="${pageContext.request.contextPath}/gsfiles/gsacc/ecs_os_v1.min.css"
			rel="Stylesheet" type="text/css">
		 

	 

 
	
	
	<div id="ui-datepicker-div"
		class="ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>
</body>

</html>
