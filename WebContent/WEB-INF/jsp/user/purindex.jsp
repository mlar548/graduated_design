<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
	<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib prefix="shiro" uri="http://shiro.apache.org/tags" %>
<%@taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<link rel="SHORTCUT ICON" href="${pageContext.request.contextPath}/purindex"
	type="image/x-icon">

<meta name="generator" content="366EC">
<meta name="keywords" content="电脑配件采购网">
<meta name="description"
	content="电脑配件采购网,批发采购 ">

<script type="text/javascript">
if (window.screen.width < 1280) {
document.writeln('<link href="/common_css/public_r_990.min.css" type="text/css" rel="stylesheet"  />');
document.writeln('<link href="/template/30/style/index_1024.min.css" type="text/css" rel="stylesheet"  />');
}
else {
document.writeln("<link href='/common_css/public_r.min.css' rel='stylesheet' type='text/css' />");
document.writeln('<link href="/template/30/style/index.min.css" type="text/css" rel="stylesheet"  />');
}
</script>
<link href="${pageContext.request.contextPath}/gsfiles/public_r.min.css"
	rel="stylesheet" type="text/css">
<link href="${pageContext.request.contextPath}/gsfiles/index.min.css"
	type="text/css" rel="stylesheet">

<link
	href="${pageContext.request.contextPath}/gsfiles/smallslider.min.css"
	rel="stylesheet" type="text/css">
<script
	src="${pageContext.request.contextPath}/gsfiles/jquery-public.min.js"
	type="text/javascript"></script>
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<script type="text/javascript"
	src="${pageContext.request.contextPath}/gsfiles/api"></script>
<script type="text/javascript"
	src="${pageContext.request.contextPath}/gsfiles/getscript"></script>
<script type="text/javascript"
	src="${pageContext.request.contextPath}/gsfiles/must_template.js"></script>
<link
	href="${pageContext.request.contextPath}/gsfiles/Ecshop.Hint.min.css"
	rel="stylesheet">
<!--[if (gte IE 6)&(lte IE 8)]>
                                <script type='text/javascript' src='/common_script/selectivizr-min.js'></script>
                                <![endif]-->
<script type="text/javascript">
                                var __global_Order_Goods_Qty_Must_Int=0;
                                var __golobal_img_server='';
                                </script>
<script type="text/javascript"
	src="${pageContext.request.contextPath}/gsfiles/img_server_handle.js"></script>

<script
	src="${pageContext.request.contextPath}/gsfiles/jquery.smallslider.min.js"
	type="text/javascript"></script>
<script
	src="${pageContext.request.contextPath}/gsfiles/jquery.scrollLoading.min.js"
	type="text/javascript"></script>
<script src="${pageContext.request.contextPath}/gsfiles/main.min.js"></script>
<script
	src="${pageContext.request.contextPath}/gsfiles/jquery.lazyload.min.js"
	type="text/javascript"></script>
<style type="text/css">
.delayload {
	background: url(/images/Default.gif) no-repeat 50% 50%;
}
</style>
<title>电脑配件采购网</title>
<link href="${pageContext.request.contextPath}/gsfiles/custom.min.css"
	rel="stylesheet">
</head>
<body id="root"
	style="background: #FFFFFF url(none) left bottom repeat-y" class="">
	<div class="top_ad" del="no" id="temp_searchECS361" dialog="840"
		mainid="search" attribute="s1" dialogname="top_adimg.htm"
		picsize="@100">
		<div id="top_adimg" class="ecs_rel cssEdit" showtime="2" delay="5"
			style="height: 70px;">
			<div>
				<a
					href="${pageContext.request.contextPath}/purindex"
					style="background: url(&amp;#39;/uploads/template/20180621/3603e387616b42589455e7a2f45d18ad.jpg&amp;#39;) center no-repeat;"><img
					src="/goods/tou.jpg"
					style="position: relative; z-index: -1;"></a>
			</div>
			<i class="ecs_abs" onclick="$(this).parent().hide()"
				style="display: inline;">X</i>
		</div>
	</div>
	<div id="store_search"></div>
	<div class="store_search_html"></div>
	<div class="store_search_html">
		<div id="store_menu">
			<div class="ecshop-top-menu">
				<div class="ecs-w clearfix">
					<div class="login-info ecs-fl">
						 
						 <c:if test="${myuser.username==null}">
						 <span class="say-hi ecs-fl">
						Hi,欢迎来到电脑配件采购网！
						</span>
						<div class="login-link ecs-fl">
							<a href="${pageContext.request.contextPath}/register">注册</a><span class="ecs-rel">|</span><a
								 href="${pageContext.request.contextPath}/admin/login">登录</a>
						</div>
						</c:if>
						
					 
						
						<c:if test="${myuser.username!=null}">
						<span class="say-hi ecs-fl">
						Hi,欢迎您&nbsp; <a href="${pageContext.request.contextPath}/updateInf"  style="text-decoration:none;" >${myuser.username}</a>&nbsp;&nbsp;  | &nbsp;&nbsp; <a href="${pageContext.request.contextPath}/logout2"  style="text-decoration:none;" >退出</a>
						
						</span>
						 
						</c:if>
					</div>
					<div class="sys-menu ecs-fr ecs-inline">
						<ul>
							<li class="item nav-return-home" id="nav-return-home"
								style="display: none;"><a href="#" style="text-decoration:none;">返回首页</a></li>
							<li class="item multi"><a
								href="${pageContext.request.contextPath}/settings.action" style="text-decoration:none;">订单信息</a> </li>
							<li class="item q-shoppingcart"><div class="menu-hd ecs-rel">
									<s class="ui"></s><a href="${pageContext.request.contextPath}/shopCar" style="text-decoration:none;">购物车</a><span
										id="shopping_numbermark"></span>
								</div></li>
								<c:if test="${myuser.username!=null}">
					 
						 <li class="item q-shoppingcart"><div class="menu-hd ecs-rel">
									<s class="ui"></s> <a href="${pageContext.request.contextPath}/logout"  style="text-decoration:none;" >切换账号</a></span>
								</div></li>
						
						</c:if>
							 
						</ul>
					</div>
					<!--sys-menu-->
				</div>
			</div>
			<!--topmenu-->
			<div class="ecs_1190_w siteheader clearfix">
				<div class="logo ecs_fl cssEdit" id="t_logo_imgdiv" isedit="true"
					dialog="840" type="logo">
					<h1 class="logo">
						<a href="${pageContext.request.contextPath}/purindex" title="电脑配件采购网"> <img
							src="/goods/logo.jpg"></a>
					</h1>
				</div>
				<div class="seachbox ecs_fl">
					<div class="i-search ld ecs-rel" id="i-search">
						<div class="form" >
						<form action="${pageContext.request.contextPath}/findgoods.action" method="post"> 
							<input type="text" class="text" name="goodsname" > 
							 
								<input  type="submit" class="button" value="搜索商品"> 
						</form>

						</div>
						<div class="shelper" id="shelper"></div>
					</div>
					<div id="hotwords">
						<strong>热门搜索：</strong><a
							href="${pageContext.request.contextPath}/findgoods.action?goodsname=小米"
							title="小米">小米</a> <a
							href="${pageContext.request.contextPath}/findgoods.action?goodsname=键盘"
							title="键盘">键盘</a> <a
							href="${pageContext.request.contextPath}/findgoods.action?goodsname=显示器"
							title="显示器">显示器</a> <a
							href="${pageContext.request.contextPath}/findgoods.action?goodsname=笔记本"
							title="笔记本">笔记本</a> <a
							href="${pageContext.request.contextPath}/findgoods.action?goodsname=三星"
							title="三星">三星</a> <a
							href="${pageContext.request.contextPath}/findgoods.action?goodsname=硬盘"
							title="硬盘">硬盘</a> <a
							href="${pageContext.request.contextPath}/findgoods.action?goodsname=鼠标"
							title="鼠标">鼠标</a> 

					</div>
				</div>
				<!--seachbox-->
				<div id="settleup" class="settleup">
					<dl>
						<dt class="ld">
							<s class="sprite"></s><span class="shopping sprite"><span
								class="sprite" id="shopping_numbermark"> </span></span><a
								href="${pageContext.request.contextPath}/shopCar" id="settleup-url">去结算</a>
							<b></b>
						</dt>
					</dl>
				</div>
				<!--settleup-->
				<div class="mycenter" id="my366buy">
					<dl>
						<dt class="ld">
							<s class="sprite"></s><a href="${pageContext.request.contextPath}/settings.action">个人</a><b></b>
						</dt>
						<dd style="display: none;">
							<div class="prompt">
								
							 <c:if test="${myuser.username==null}">
						您好，
								<a href="${pageContext.request.contextPath}/admin/login" title="请登录">请登录</a>
								
						
						</c:if>
						<c:if test="${myuser.username!=null}">
						您好，${myuser.username}</c:if>
							</div>
							<div class="uclist">
								<ul class="fore1 ecs_fl">
									<li><a target="_blank"
										href="${pageContext.request.contextPath}/settings.action">我的订单<span
											id="num-unfinishedorder"></span></a></li>
									<li><a target="_blank"
										href="${pageContext.request.contextPath}/shopCar">我的购物车<span
											id="Span1"></span></a></li>
									 <li><a target="_blank"
										href="${pageContext.request.contextPath}/updateInf">个人信息<span
											id="Span2"></span></a></li> 
						 
								</ul>
								  <ul class="fore2 ecs_fl">
								  	<li><a target="_blank"
										href="${pageContext.request.contextPath}/manageAddress">管理收货地址<span
											id="Span4"></span></a></li>  
												<li><a target="_blank"
										href="${pageContext.request.contextPath}/updatePwd">修改密码<span
											 ></span></a></li>
									 
								</ul> 
							</div>
							<div class="viewlist">
								<div class="smt">
									<h4>登录时间：</h4>
								</div>
								<div style="clear: both;"></div>
								<div class="smc" id="jduc-viewlist overflow"><fmt:formatDate value="${myuser.lastLoginTime}" pattern="yyyy-MM-dd HH:mm:ss"/></div>
							</div>
						</dd>
					</dl>
				</div>
				<!--mycenter-->
			</div>
		</div>
		<!--header-->
		<div class="ecs_1190_w ecs_rel top_menu_outer" id="template_menu">
			<div class="nav top_menu">
				<div class="top_categorys ecs_abs cssEdit" id="top_categorys">
					<div class="cssEdit" id="temp_searchECS360" dialog="840"
						type="productCate" del="no" dialogname="366productCategory_t.htm"
						mainid="menu">
						<div class="mt">
							<a  href="${pageContext.request.contextPath}/findgoods.action"  style="text-decoration:none;">全部商品分类</a>
						</div>
						<div class="mc">
<style>
.line-limit-length {
	max-width: 5em;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}
</style>
						
						<c:forEach var="goodsType" items="${goodsTypeList}">
							<div class="item " onmouseenter="_v30._categories._over(this)"
								onmouseleave="_v30._categories._out(this)">
								<span><h3 class="">
										<a
											href="${pageContext.request.contextPath}/findgoods.action?goodsname=${goodsType.goodsTypeName}"
											title="${goodsType.goodsTypeName}"  style="text-decoration:none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${goodsType.goodsTypeName}</a>
									</h3>
									<i></i><s class="sprite"></s></span>
								<%-- <div class="i-mc">
									<!--<div class="i_mcclose" onclick="$(this).parent().parent().removeClass('hover');">X</div>-->
									<div class="subitem">
									<c:forEach var="good" items="${goodsList}">
									  <c:if test="${good.supplier.supplierId==supplier.supplierId}">
									  <c:forEach var="supplier" items="${supplierList}">
									     
										<dl class="fore">
											<dt class="foreflag " >
												<a
													href="${pageContext.request.contextPath}/findgoods.action?goodsname=${supplier.supplierName}"
													title="${supplier.supplierName}">${supplier.supplierName}</a>
											</dt>
											
											<dd class="clearfix">
										  	<c:forEach var="good" items="${goodsList}">
									  <c:if test="${good.supplier.supplierId==supplier.supplierId}"> 
									   <c:if test="${good.goodsType.goodsTypeId==goodsType.goodsTypeId}"> 
												<em><a
													href="${pageContext.request.contextPath}/goodsDetail?goodsId=${good.goodsId}"
													title="${good.goodsName}"> <p class="line-limit-length">${good.goodsName}</p> </a></em>  
													</c:if>
													  	</c:if>
									</c:forEach>  
											</dd>
										</dl>
										</c:forEach>
										</c:if>
									</c:forEach> 
										 
										 
									</div>
									<!--subitem-->
									
								 
									<!--fr-->
								</div> --%>
								<!--i_mc-->
							</div>
							</c:forEach> 
							<!--category item-->
						</div>	 
						<!--top_categorys mc-->
					</div>
				</div>
				<!--top_categorys-->
				<div class="menu">
					<ul class="clearfix">
						<li class="curr"><a class="main"
							href="${pageContext.request.contextPath}/purindex" title="首页" target="_blank">首页</a></li>
						 
						<li><a class="main" href="${pageContext.request.contextPath}/settings.action"
							title="个人中心" target="_blank">个人中心</a></li>
						<li><a class="main" href="${pageContext.request.contextPath}/userMessage"
							title="客户留言" target="_blank">客户留言</a></li>
					</ul>
				</div>
				<!--menu-->
			</div>
			<!--nav-->
		</div>
	</div>
	<!--header end-->
	<div class="ecs_1190_w ecs_full clearfix topbanner">
		<div class="m cssEdit ecs_mgb10 clearfix"
			id="temp_e32fc0c9c45a4eb1981fa0208f4d0ad4" dialog="840" type="img">
			<div class="mc delayload ecs-oh clearfix">
				<div class="smallslider" id="stemp_e32fc0c9c45a4eb1981fa0208f4d0ad4"
					style="height: 395px; background: url(&quot;/images/Default2.gif&quot;) 50% 50% no-repeat;">
					<ul style="position: absolute; left: 0px; top: 0px; width: 3624px;">
						<li style="float: left; width: 1208px;" class="current-li"><a
							href="javascript:void(0)"><img class=""
								src="/goods/lunbo3.jpg"
								style="height: 450px;width: 90%"></a></li>
						<li style="float: left; width: 1208px;" class=""><a
							href="javascript:void(0)"><img class=""
								src="/goods/lunbo2.jpg"
								style="height: 395px"></a></li>
						<li style="float: left; width: 1208px;" class=""><a
							href="javascript:void(0)"><img class=""
								src="/goods/lunbo1.jpg"
							 
								style="height: 395px"></a></li>
					</ul>
					<div class="smallslider-btns" style="right: 10px; bottom: 4px;">
						<span class="current-btn">1</span><span style="margin-left: 4px;"
							class="">2</span><span style="margin-left: 4px;" class="">3</span>
					</div>
				</div>
				<!--topslider end-->
			</div>
			<!--mc-->
		</div>
		<script type="text/javascript">function ddtemp_e32fc0c9c45a4eb1981fa0208f4d0ad4(){$('#stemp_e32fc0c9c45a4eb1981fa0208f4d0ad4').smallslider({onImageStop:true, switchEffect:'ease',switchEase:'easeOutQuad',switchPath:'left', switchMode: 'hover', textSwitch:2, textPosition: 'top', textAlign:'center',showText:false});}setTimeout("ddtemp_e32fc0c9c45a4eb1981fa0208f4d0ad4()",2000);</script>
		<script type="text/javascript">$(".smallslider").css("background", "url(/images/Default2.gif) no-repeat 50% 50%");</script>
		<div
			class="floor_buytab_firstproduct ecs_mgb10 clearfix temp_6911615c22bf460e8f05fe15044c997c clearfix "
			vid="temp_6911615c22bf460e8f05fe15044c997c">
			<div class="right_buy_tab buytab cssEdit ecs_fl" del="yes"
				mainid="temp_6911615c22bf460e8f05fe15044c997c"
				id="temp_6911615c22bf460e8f05fe15044c997cECS362" dialog="840"
				dialogname="buytab_5tab.htm" imgsize="5">
				<div class="ptab_outer ecs_rel">
					<div class="tab-arrow">
						<b></b>
					</div>
					<div class="ptab clearfix"
						id="temp_6911615c22bf460e8f05fe15044c997cECS462">
						<ul>
							<li class="curr"
								onmouseover="">显示器</li>
						</ul>
					</div>
					<!--ptab-->
					<div class="phold ecs_rel clearfix" style="display: block;"
						id="tab06911615c22bf460e8f05fe15044c997c">
						<div class="hold">
							<ul class="clearfix">
							<c:forEach var="goodsType" items="${goodsTypeList}"  >
							  <c:if test="${goodsType.goodsTypeName=='显示器'}">
							  <c:forEach var="goods" items="${goodsType.gtGoodsList}" begin="0" end="5" >
								<li><div class="pic">
										<table cellspacing="0" cellpadding="0">
											<tbody>
												<tr>
													<td><a href="${pageContext.request.contextPath}/goodsDetail?goodsId=${goods.goodsId}"
														title="${goods.title}" target="_blank"><img
															class="lazy"
															src="/goods/${goods.goodsPhoto}"></a></td>
												</tr>
											</tbody>
										</table>
									</div>
									<div class="pname">
										<a href="${pageContext.request.contextPath}/goodsDetail?goodsId=${goods.goodsId}"
											title="${goods.title}" target="_blank">${goods.title}</a>
									</div>
									<div class="price">
										<span class="currentprice">¥${goods.price}</span>
									</div></li>
									</c:forEach>
									</c:if>
								 </c:forEach>
							</ul>
						</div>
						<!--hode-->
					</div>
					<!--phold-->
				</div>
				<!--ptab_outer-->
			</div>
			<!--right_buy_tab-->
			<div class="firstproduct ecs_fr cssEdit" del="no"
				id="temp_6911615c22bf460e8f05fe15044c997cECS361" dialog="840"
				dialogname="FirstProduct_attr.htm" attribute="s1"
				mainid="temp_6911615c22bf460e8f05fe15044c997c">
				<div class="mt">
					<h2>推荐产品</h2>
				</div>
				<div class="mc">
				<c:forEach var="goodsType" items="${goodsTypeList}"  >
							  <c:if test="${goodsType.goodsTypeName=='显示器'}">
							  <c:forEach var="goods" items="${goodsType.gtGoodsList}" begin="3" end="3" >
					<div class="item fore1">
						<div class="p-img">
							<a href="${pageContext.request.contextPath}/goodsDetail?goodsId=${goods.goodsId}" target="_blank"
								title="${goods.title}"><img
								alt="${goods.title}" class="lazy"
								src="/goods/${goods.goodsPhoto}"></a>
						</div>
						<div class="p-name">
							<a href="${pageContext.request.contextPath}/goodsDetail?goodsId=${goods.goodsId}" target="_blank"
								title="${goods.title}">${goods.title}</a>
						</div>
						<div class="p-detail">${goods.introduce}</div>
					</div>
					</c:forEach>
					 <c:forEach var="goods" items="${goodsType.gtGoodsList}" begin="4" end="4" >
					<div class="item fore2">
						<div class="p-img">
							<a href="${pageContext.request.contextPath}/goodsDetail?goodsId=${goods.goodsId}" target="_blank"
								title="${goods.title}"><img alt="${goods.title}"
								class="lazy"
								src="/goods/${goods.goodsPhoto}"></a>
						</div>
						<div class="p-name">
							<a href="${pageContext.request.contextPath}/goodsDetail?goodsId=${goods.goodsId}" target="_blank"
								title="${goods.title}">${goods.title}</a>
						</div>
						<div class="p-detail">${goods.introduce}</div>
					</div>
					</c:forEach>
									</c:if>
								 </c:forEach>
				</div>
				<!--mc-->
			</div>
			<!--firstproduct-->
		</div>
		<!--floor_buytab_firstproduct-->
		<div class="m cssEdit ecs_mgb10 clearfix"
			id="temp_95a5163fd9e647b5adfb5260566cf464" dialog="840" type="img">
			<div class="mc delayload ecs-oh clearfix">
				<a href="${pageContext.request.contextPath}/purindex"
					target="_blank"> <img
					src="/goods/mid3.jpg"
					style="height: 120px;width: 100%">
				</a>
				<!--topslider end-->
			</div>
			<!--mc-->
		</div>
		
		
		<script type="text/javascript">function ddtemp_95a5163fd9e647b5adfb5260566cf464(){$('#stemp_95a5163fd9e647b5adfb5260566cf464').smallslider({onImageStop:true, switchEffect:'ease',switchEase:'easeOutBounce',switchPath:'left', switchMode: 'hover', textSwitch:2, textPosition: 'top', textAlign:'center',showText:false});}setTimeout("ddtemp_95a5163fd9e647b5adfb5260566cf464()",2000);</script>
		<script type="text/javascript">$(".smallslider").css("background", "url(/images/Default2.gif) no-repeat 50% 50%");</script>
		 <div
			class="floor_buytab_firstproduct ecs_mgb10 clearfix temp_6911615c22bf460e8f05fe15044c997c clearfix "
			vid="temp_6911615c22bf460e8f05fe15044c997c">
			<div class="right_buy_tab buytab cssEdit ecs_fl" del="yes"
				mainid="temp_6911615c22bf460e8f05fe15044c997c"
				id="temp_6911615c22bf460e8f05fe15044c997cECS362" dialog="840"
				dialogname="buytab_5tab.htm" imgsize="5">
				<div class="ptab_outer ecs_rel">
					<div class="tab-arrow">
						<b></b>
					</div>
					<div class="ptab clearfix"
						id="temp_6911615c22bf460e8f05fe15044c997cECS462">
						<ul>
							<li class="curr"
								onmouseover="">键盘</li>
						</ul>
					</div>
					<!--ptab-->
					<div class="phold ecs_rel clearfix" style="display: block;"
						id="tab06911615c22bf460e8f05fe15044c997c">
						<div class="hold">
							<ul class="clearfix">
							<c:forEach var="goodsType" items="${goodsTypeList}"  >
							  <c:if test="${goodsType.goodsTypeName=='键盘'}">
							  <c:forEach var="goods" items="${goodsType.gtGoodsList}" begin="0" end="5" >
								<li><div class="pic">
										<table cellspacing="0" cellpadding="0">
											<tbody>
												<tr>
													<td><a href="${pageContext.request.contextPath}/goodsDetail?goodsId=${goods.goodsId}"
														title="${goods.title}" target="_blank"><img
															class="lazy"
															src="/goods/${goods.goodsPhoto}"></a></td>
												</tr>
											</tbody>
										</table>
									</div>
									<div class="pname">
										<a href="${pageContext.request.contextPath}/goodsDetail?goodsId=${goods.goodsId}"
											title="${goods.title}" target="_blank">${goods.title}</a>
									</div>
									<div class="price">
										<span class="currentprice">¥${goods.price}</span>
									</div></li>
									</c:forEach>
									</c:if>
								 </c:forEach>
							</ul>
						</div>
						<!--hode-->
					</div>
					<!--phold-->
				</div>
				<!--ptab_outer-->
			</div>
			<!--right_buy_tab-->
			<div class="firstproduct ecs_fr cssEdit" del="no"
				id="temp_6911615c22bf460e8f05fe15044c997cECS361" dialog="840"
				dialogname="FirstProduct_attr.htm" attribute="s1"
				mainid="temp_6911615c22bf460e8f05fe15044c997c">
				<div class="mt">
					<h2>推荐产品</h2>
				</div>
				<div class="mc">
				<c:forEach var="goodsType" items="${goodsTypeList}"  >
							  <c:if test="${goodsType.goodsTypeName=='键盘'}">
							  <c:forEach var="goods" items="${goodsType.gtGoodsList}" begin="1" end="1" >
					<div class="item fore1">
						<div class="p-img">
							<a href="${pageContext.request.contextPath}/goodsDetail?goodsId=${goods.goodsId}" target="_blank"
								title="${goods.title}"><img
								alt="${goods.title}" class="lazy"
								src="/goods/${goods.goodsPhoto}"></a>
						</div>
						<div class="p-name">
							<a href="${pageContext.request.contextPath}/goodsDetail?goodsId=${goods.goodsId}" target="_blank"
								title="${goods.title}">${goods.title}</a>
						</div>
						<div class="p-detail">${goods.introduce}</div>
					</div>
					</c:forEach>
					 <c:forEach var="goods" items="${goodsType.gtGoodsList}" begin="2" end="2" >
					<div class="item fore2">
						<div class="p-img">
							<a href="${pageContext.request.contextPath}/goodsDetail?goodsId=${goods.goodsId}" target="_blank"
								title="${goods.title}"><img alt="${goods.title}"
								class="lazy"
								src="/goods/${goods.goodsPhoto}"></a>
						</div>
						<div class="p-name">
							<a href="${pageContext.request.contextPath}/goodsDetail?goodsId=${goods.goodsId}" target="_blank"
								title="${goods.title}">${goods.title}</a>
						</div>
						<div class="p-detail">${goods.introduce}</div>
					</div>
					</c:forEach>
									</c:if>
								 </c:forEach>
				</div>
				<!--mc-->
			</div>
			<!--firstproduct-->
		</div>
		 
		 
		<!--floor_buytab_firstproduct-->
		<div class="m cssEdit ecs_mgb10 clearfix"
			id="temp_ffbeea638aed4969aedf3f90ef953b1c" dialog="840" type="img">
			<div class="mc delayload ecs-oh clearfix">
				<a href="javascript:void(0)" target="_blank"> <img
					src="/goods/mid1.jpg"
					style="height: 100px">
				</a>
				<!--topslider end-->
			</div>
			<!--mc-->
		</div>

		

	
	</div>
	<!--topbanner end-->
	
	<div class="bottom ecs_1190_w">
		 
		<!--flink-->
		<div class="bottom_info ecs_mgb10 cssEdit" id="bottom_info_div"
			isedit="true" dialog="640" type="help">
			 <div style="text-align: center;">
			<a href="#"> 电脑配件采购网</a>
			
			 </div>
			 
			<div>本站的顾客个人信息将决不会泄漏给其他任何机构和个人&nbsp;</div>
			<p>有任何购物问题请联系我们在线客服 | 电话：13160599313（微信）
				 | 工作时间：周一至周五 8:00－18:00</p>
			<p>
				 
					 
					  谢谢您的支持，你们的支持是我们最大的动力!
			</p>
			<p>
				<br>
			</p>
			
			 
		</div>
	</div>
	<!--bottom-->
	<link href="${pageContext.request.contextPath}/gsfiles/ecs_os_v1.css"
		rel="stylesheet" type="text/css">
	<script type="text/javascript">$(document).ready(function () {onlineService.init({style: 'skyblue',onlineside: 'right',onlineside_width: 10,top: "120",title: '在线客服',content: "<div class='chat'><div class='chat_t'>QQ在线客服</div><ul><li><a target='_self'  href='tencent://message/?uin=3342099276&Site=任我行&Menu=yes'><img class='qqno' border=0 SRC='/images/qqonline.png' alt=Q我 align='absmiddle'><span>区域代理咨询</span></a></li><li><a target='_self'  href='tencent://message/?uin=3503410199&Site=任我行&Menu=yes'><img class='qqno' border=0 SRC='/images/qqonline.png' alt=Q我 align='absmiddle'><span>零售商系统</span></a></li><li><a target='_self'  href='tencent://message/?uin=2817333633&Site=任我行&Menu=yes'><img class='qqno' border=0 SRC='/images/qqonline.png' alt=Q我 align='absmiddle'><span>供货商系统</span></a></li><li><a target='_self'  href='tencent://message/?uin=781936120&Site=任我行&Menu=yes'><img class='qqno' border=0 SRC='/images/qqonline.png' alt=Q我 align='absmiddle'><span>投诉</span></a></li></ul></div>",oday_from: "周一",oday_to: "周六",otime_from: "8：20",otime_to: "17:50",hotline: "0851-25628841",isexpand: "2"});});</script>
	<span style="display:"></span>
	<span style="display: none"><script
			src="${pageContext.request.contextPath}/gsfiles/z_stat.php"
			language="JavaScript"></script>
	
	<script
		src="${pageContext.request.contextPath}/gsfiles/Jquery.Validate.js"
		type="text/javascript"></script>
	<link href="${pageContext.request.contextPath}/gsfiles/tipstyle.css"
		rel="stylesheet" type="text/css">

	<!--footer end-->


	 
	<div id="ecs_os" class="ecs_os  os_style_skyblue"
		style="position: absolute; right: 10px; top: 712px; display: none;">
		<div class="ecs_os_header">
			<div class="ecs_os_header_t">
				<a href="javascript:;" id="ecs_os_tclose"
					class="ecs_os_tclose close" title="关闭">关闭</a>
			</div>
			 
		</div>
		 
		 
	</div>
	 
</body>
</html>
