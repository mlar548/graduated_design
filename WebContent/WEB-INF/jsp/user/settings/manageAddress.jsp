<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    	<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
    	<%@taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<title>个人中心</title>
<script
	src="${pageContext.request.contextPath}/gsfiles/gsacc/jquery-1.10.2.min.js"></script>

	
<meta name="viewport" content="width=device-width">
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
<body>
                 
<!-- 模态框 -->

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
           <form action="${pageContext.request.contextPath}/userAddAddress2.action" >
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
        <button type="button" class="btn btn-default btn-lg" data-dismiss="modal">返回</button>
         
        <button type="submit" class="btn btn-success btn-lg" >保存</button>
       
      </div>
       </form>
       
    </div>
  </div>
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
                    <h2>我的收货地址</h2>
                </div>
                 	<button type="button" class="btn btn-info btn-xs" data-toggle="modal" data-target="#myModal">
  + 使用新地址
</button>
                <ul class="tab clearfix mt20" id="div_status">
                    <li class="curr">
                        <a href="#"
                           data-status="ALL">收货地址&nbsp;<span class="color-red" id="spAllNum"></span>
                        </a>
                    </li>
                    
                </ul>
                <div class="" style="z-index: 0;">
                     <table class="table-default">
                    <thead>
                    <tr>
                        <th width="15%">收货人
                        </th>
                        <th width="30%">地址
                        </th>
                        <th width="10%">电话
                        </th>
                        <th width="10%">手机
                        </th>
                        <th width="10%">邮编
                        </th>

                        <th width="10%">操作
                        </th>
                    </tr>
                    </thead>
                    <tbody>
<c:forEach var="address" items="${userInf.addressList}">
           <c:if test="${address.zt==0}">
                    <tr>
                        <td class="text-center" style="word-break: break-all;">
                            ${address.name} 
                        </td>
                        <td style="word-break: break-all;">
                           ${address.province} ${address.city} ${address.alladdress} 
                        </td>
                        <td class="text-center">
${address.tel}
                        </td>
                        <td class="text-center">
                           ${address.phone}
                      
                        </td>
                        <td class="text-center">
                               ${address.postalCode}
                        </td>

                        <td class="text-center">
                            <a href="${pageContext.request.contextPath}/updateAddress?addressId=${address.addressId}"
                               class="dialog color-blue" title="修改收货地址">修改</a>|
                            <a href="${pageContext.request.contextPath}/userDeleteAddress.action?addressId=${address.addressId}"
                             class="color-blue"  >删除</a>
                        </td>
                    </tr>
                    </c:if>
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

    <div  style="margin:30px 0px 10px;  text-align:center">
    <pre>有任何购物问题请联系我们在线客服 | 电话：15625584773（微信）
	         工作时间：周一至周五 8:00－18:00 
	   谢谢您的支持，你们的支持是我们最大的动力!!!
        

     </pre>
    </div>
 
 


</body></html>