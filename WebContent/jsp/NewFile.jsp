<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title></title>
</head>
<body>
	<div class="top_ad" del="no" id="temp_searchECS361" dialog="840"
		mainid="search" attribute="s1" dialogname="top_adimg.htm"
		picsize="@100">
		<div id="top_adimg" class="ecs_rel cssEdit" showtime="2" delay="5"
			style="height: 70px;">
			<div>
				<a
					href="http://gsw818.com/StoreIndex.aspx?storeId=172&amp;IsEdit=1#b"
					style="background: url(&amp;#39;/uploads/template/20180621/3603e387616b42589455e7a2f45d18ad.jpg&amp;#39;) center no-repeat;"><img
					src="${pageContext.request.contextPath}/gsfiles/3603e387616b42589455e7a2f45d18ad.jpg"
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
						<span class="say-hi ecs-fl"> <c:if
								test="${myuser.username==null}">
						Hi,欢迎来到电脑配件采购网！
						
						</c:if> <c:if test="${myuser.username!=null}">
						Hi,欢迎你,${myuser.username}</c:if>
						</span>
						<div class="login-link ecs-fl">
							<a href="${pageContext.request.contextPath}/register">注册</a><span
								class="ecs-rel">|</span><a class="cr"
								href="${pageContext.request.contextPath}/admin/login">登录</a>
						</div>
					</div>
					<div class="sys-menu ecs-fr ecs-inline">
						<ul>
							<li class="item nav-return-home" id="nav-return-home"
								style="display: none;"><a href="#">返回首页</a></li>
							<li class="item multi"><a href="">订单信息</a><i
								class="ui arrow"></i>
								<div class="submenu">
									<dl>
										<dd>
											<a
												href="http://gsw818.com/user/myorder.aspx?status=WAIT_BUYER_PAY">待付款</a>
										</dd>
										<dd>
											<a
												href="http://gsw818.com/user/myorder.aspx?page=1&amp;pagesize=10&amp;os=&amp;oe=&amp;pt=&amp;status=WAIT_SELLER_SEND_GOODS">待发货</a>
										</dd>
									</dl>
								</div></li>
							<li class="item q-shoppingcart"><div class="menu-hd ecs-rel">
									<s class="ui"></s><a href="http://gsw818.com/cart/list.aspx">购物车</a><span
										id="shopping_numbermark">0</span>
								</div></li>
							<li class="item q-favorite multi"><s class="ui"></s><a
								href="http://gsw818.com/">收藏夹</a><i class="ui arrow"></i>
								<div class="submenu">
									<dl>
										<dd>
											<a href="http://gsw818.com/user/myfavproducts.aspx">收藏的商品</a>
										</dd>
										<dd>
											<a href="http://gsw818.com/user/myfavstores.aspx">收藏的店铺</a>
										</dd>
									</dl>
								</div></li>
							<li class="item"><s class="ui"></s><a
								href="http://gsw818.com/buyhelp.aspx">帮助中心</a></li>
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
						<a href="http://gsw818.com/" title="电脑配件采购网"> <img
							src="/goods/di.jpg"></a>
					</h1>
				</div>
				<div class="seachbox ecs_fl">
					<div class="i-search ld ecs-rel" id="i-search">
						<div class="form">
							<form
								action="${pageContext.request.contextPath}/findgoods.action"
								method="post">
								<input type="text" class="text" name="goodsname"> <input
									type="submit" class="button" value="搜索商品">
							</form>

						</div>
						<div class="shelper" id="shelper"></div>
					</div>
					<div id="hotwords">
						<strong>热门搜索：</strong> <a
							href="javascript:ProductSearch.linksearch(&quot;女装&quot;)"
							title="女装">女装</a> <a
							href="javascript:ProductSearch.linksearch(&quot;女鞋&quot;)"
							title="女鞋">女鞋</a> <a
							href="javascript:ProductSearch.linksearch(&quot;男装&quot;)"
							title="男装">男装</a> <a
							href="javascript:ProductSearch.linksearch(&quot;外套&quot;)"
							title="外套">外套</a> <a
							href="javascript:ProductSearch.linksearch(&quot;秋衣&quot;)"
							title="秋衣">秋衣</a> <a
							href="javascript:ProductSearch.linksearch(&quot;男鞋&quot;)"
							title="男鞋">男鞋</a> <a
							href="javascript:ProductSearch.linksearch(&quot;电器&quot;)"
							title="电器">电器</a> <a
							href="javascript:ProductSearch.linksearch(&quot;特产&quot;)"
							title="特产">特产</a>
					</div>
				</div>
				<!--seachbox-->
				<div id="settleup" class="settleup">
					<dl>
						<dt class="ld">
							<s class="sprite"></s><span class="shopping sprite"><span
								class="sprite" id="shopping_numbermark">0</span></span><a
								href="http://gsw818.com/cart/list.aspx" id="settleup-url">去购物车结算</a>
							<b></b>
						</dt>
					</dl>
				</div>
				<!--settleup-->
				<div class="mycenter" id="my366buy">
					<dl>
						<dt class="ld">
							<s class="sprite"></s><a href="http://gsw818.com/">我的账户</a><b></b>
						</dt>
						<dd style="display: none;">
							<div class="prompt">
								您好，<a href="http://gsw818.com/login.aspx" title="请登录">请登录</a>
							</div>
							<div class="uclist">
								<ul class="fore1 ecs_fl">
									<li><a target="_blank"
										href="http://gsw818.com/user/myfavproducts.aspx">我的收藏<span
											id="num-unfinishedorder"></span></a></li>
									<li><a target="_blank"
										href="http://gsw818.com/user/IntegralManger.aspx">我的积分<span
											id="Span1"></span></a></li>
									<li><a target="_blank"
										href="http://gsw818.com/user/myblance.aspx">我的预存款<span
											id="Span2"></span></a></li>
									<li><a target="_blank"
										href="http://gsw818.com/user/message.aspx">我的消息<span
											id="Span3"></span></a></li>
								</ul>
								<ul class="fore2 ecs_fl">
									<li><a target="_blank"
										href="http://gsw818.com/user/myorder.aspx">待处理订单<span
											id="Span4"></span></a></li>
									<li><a target="_blank"
										href="http://gsw818.com/user/quehuo.aspx">缺货登记<span
											id="Span5"></span></a></li>
									<li><a target="_blank"
										href="http://gsw818.com/user/hdaccount.aspx">活动公告<span
											id="Span6"></span></a></li>
									<li><a target="_blank"
										href="http://gsw818.com/user/p_comment.aspx">我的评价<span
											id="Span8"></span></a></li>
								</ul>
							</div>
							<div class="viewlist">
								<div class="smt">
									<h4>最近浏览的商品：</h4>
								</div>
								<div style="clear: both;"></div>
								<div class="smc" id="jduc-viewlist overflow">暂时没有历史浏览记录</div>
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
							<a href="http://gsw818.com/brandshow.html">全部商品分类</a>
						</div>
						<div class="mc">
							<div class="item" onmouseenter="_v30._categories._over(this)"
								onmouseleave="_v30._categories._out(this)">
								<span><h3 class="">
										<a
											href="http://gsw818.com/productlist/0-0-0-255-0-0-1-4-1.html"
											title="鼠标">鼠标</a>
									</h3> <i></i><s class="sprite"></s></span>
								<div class="i-mc">
									<!--<div class="i_mcclose" onclick="$(this).parent().parent().removeClass('hover');">X</div>-->
									<div class="subitem">
										<dl class="fore">
											<dt class="foreflag" flag="1">
												<a
													href="http://gsw818.com/productlist/0-0-0-299-0-0-1-4-1.html"
													title="粮油速食">粮油速食</a>
											</dt>
											<dd class="clearfix">
												<em><a
													href="http://gsw818.com/productlist/0-0-0-484-0-0-1-4-1.html"
													title="油">油</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-485-0-0-1-4-1.html"
													title="大米">大米</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-486-0-0-1-4-1.html"
													title="面粉">面粉</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-487-0-0-1-4-1.html"
													title="面">面</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-488-0-0-1-4-1.html"
													title="调味品">调味品</a></em>
											</dd>
										</dl>
										<dl class="fore">
											<dt class="foreflag" flag="1">
												<a
													href="http://gsw818.com/productlist/0-0-0-301-0-0-1-4-1.html"
													title="休闲零食">休闲零食</a>
											</dt>
											<dd class="clearfix">
												<em><a
													href="http://gsw818.com/productlist/0-0-0-489-0-0-1-4-1.html"
													title="零食">零食</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-490-0-0-1-4-1.html"
													title="坚果">坚果</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-491-0-0-1-4-1.html"
													title="饼干">饼干</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-492-0-0-1-4-1.html"
													title="蛋糕">蛋糕</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-493-0-0-1-4-1.html"
													title="红枣">红枣</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-494-0-0-1-4-1.html"
													title="巧克力">巧克力</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-495-0-0-1-4-1.html"
													title="膨化食品">膨化食品</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-496-0-0-1-4-1.html"
													title="鸭脖">鸭脖</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-497-0-0-1-4-1.html"
													title="糖果">糖果</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-498-0-0-1-4-1.html"
													title="豆干">豆干</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-499-0-0-1-4-1.html"
													title="曲奇">曲奇</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-500-0-0-1-4-1.html"
													title="肉松饼">肉松饼</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-502-0-0-1-4-1.html"
													title="糕点">糕点</a></em>
											</dd>
										</dl>
										<dl class="fore">
											<dt class="foreflag" flag="1">
												<a
													href="http://gsw818.com/productlist/0-0-0-302-0-0-1-4-1.html"
													title="酒类">酒类</a>
											</dt>
											<dd class="clearfix">
												<em><a
													href="http://gsw818.com/productlist/0-0-0-503-0-0-1-4-1.html"
													title="白酒">白酒</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-504-0-0-1-4-1.html"
													title="红酒">红酒</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-505-0-0-1-4-1.html"
													title="洋酒">洋酒</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-506-0-0-1-4-1.html"
													title="啤酒">啤酒</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-507-0-0-1-4-1.html"
													title="黄酒">黄酒</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-508-0-0-1-4-1.html"
													title="保健酒">保健酒</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-509-0-0-1-4-1.html"
													title="葡萄酒">葡萄酒</a></em>
											</dd>
										</dl>
										<dl class="fore">
											<dt class="foreflag" flag="1">
												<a
													href="http://gsw818.com/productlist/0-0-0-303-0-0-1-4-1.html"
													title="茶叶">茶叶</a>
											</dt>
											<dd class="clearfix">
												<em><a
													href="http://gsw818.com/productlist/0-0-0-510-0-0-1-4-1.html"
													title="绿茶">绿茶</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-511-0-0-1-4-1.html"
													title="西湖龙井">西湖龙井</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-512-0-0-1-4-1.html"
													title="白茶">白茶</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-513-0-0-1-4-1.html"
													title="大红袍">大红袍</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-514-0-0-1-4-1.html"
													title="铁观音">铁观音</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-515-0-0-1-4-1.html"
													title="普洱茶">普洱茶</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-516-0-0-1-4-1.html"
													title="花茶">花茶</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-517-0-0-1-4-1.html"
													title="红茶">红茶</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-855-0-0-1-4-1.html"
													title="茶具">茶具</a></em>
											</dd>
										</dl>
										<dl class="fore">
											<dt class="foreflag" flag="1">
												<a
													href="http://gsw818.com/productlist/0-0-0-304-0-0-1-4-1.html"
													title="乳品冲饮">乳品冲饮</a>
											</dt>
											<dd class="clearfix">
												<em><a
													href="http://gsw818.com/productlist/0-0-0-518-0-0-1-4-1.html"
													title="牛奶">牛奶</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-519-0-0-1-4-1.html"
													title="酸奶">酸奶</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-520-0-0-1-4-1.html"
													title="成人奶粉">成人奶粉</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-521-0-0-1-4-1.html"
													title="儿童奶">儿童奶</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-522-0-0-1-4-1.html"
													title="咖啡">咖啡</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-523-0-0-1-4-1.html"
													title="麦片">麦片</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-524-0-0-1-4-1.html"
													title="奶茶">奶茶</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-525-0-0-1-4-1.html"
													title="果汁">果汁</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-526-0-0-1-4-1.html"
													title="汽水">汽水</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-527-0-0-1-4-1.html"
													title="功能饮料">功能饮料</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-528-0-0-1-4-1.html"
													title="饮用水">饮用水</a></em>
											</dd>
										</dl>
										<dl class="fore">
											<dt class="foreflag" flag="1">
												<a
													href="http://gsw818.com/productlist/0-0-0-305-0-0-1-4-1.html"
													title="生鲜">生鲜</a>
											</dt>
											<dd class="clearfix">
												<em><a
													href="http://gsw818.com/productlist/0-0-0-529-0-0-1-4-1.html"
													title="新鲜蔬菜">新鲜蔬菜</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-530-0-0-1-4-1.html"
													title="蛋类">蛋类</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-531-0-0-1-4-1.html"
													title="肉类">肉类</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-532-0-0-1-4-1.html"
													title="海鲜水产">海鲜水产</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-533-0-0-1-4-1.html"
													title="新鲜水果">新鲜水果</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-534-0-0-1-4-1.html"
													title="精选干货">精选干货</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-764-0-0-1-4-1.html"
													title="冻货">冻货</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-765-0-0-1-4-1.html"
													title="调味品">调味品</a></em>
											</dd>
										</dl>
										<dl class="fore">
											<dt class="foreflag" flag="1">
												<a
													href="http://gsw818.com/productlist/0-0-0-786-0-0-1-4-1.html"
													title="餐饮">餐饮</a>
											</dt>
											<dd class="clearfix">
												<em><a
													href="http://gsw818.com/productlist/0-0-0-839-0-0-1-4-1.html"
													title="小吃快餐">小吃快餐</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-840-0-0-1-4-1.html"
													title="烧烤">烧烤</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-841-0-0-1-4-1.html"
													title="火锅">火锅</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-842-0-0-1-4-1.html"
													title="炒菜">炒菜</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-843-0-0-1-4-1.html"
													title="汤菜">汤菜</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-844-0-0-1-4-1.html"
													title="西餐">西餐</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-845-0-0-1-4-1.html"
													title="聚餐宴请">聚餐宴请</a></em>
											</dd>
										</dl>
										<dl class="fore">
											<dt class="foreflag" flag="1">
												<a
													href="http://gsw818.com/productlist/0-0-0-741-0-0-1-4-1.html"
													title="特产">特产</a>
											</dt>
											<dd class="clearfix"></dd>
										</dl>
										<dl class="fore">
											<dt class="foreflag" flag="1">
												<a
													href="http://gsw818.com/productlist/0-0-0-1024-0-0-1-4-1.html"
													title="医药">医药</a>
											</dt>
											<dd class="clearfix"></dd>
										</dl>
										<dl class="fore">
											<dt class="foreflag" flag="1">
												<a
													href="http://gsw818.com/productlist/0-0-0-787-0-0-1-4-1.html"
													title="其他类">其他类</a>
											</dt>
											<dd class="clearfix"></dd>
										</dl>
									</div>
									<!--subitem-->
									<div class="cat-right-con fr ecs_fr">
										<dl class="categorys-brands">
											<dt>推荐品牌</dt>
											<dd>
												<ul>
													<li><a title="海尔"
														href="http://gsw818.com/productlist/0-0-0-255-69-0-1-4-1.html">海尔</a>
													</li>
													<li><a title="TCL"
														href="http://gsw818.com/productlist/0-0-0-255-71-0-1-4-1.html">TCL</a>
													</li>
													<li><a title="美的"
														href="http://gsw818.com/productlist/0-0-0-255-77-0-1-4-1.html">美的</a>
													</li>
													<li><a title="康佳"
														href="http://gsw818.com/productlist/0-0-0-255-99-0-1-4-1.html">康佳</a>
													</li>
													<li><a title="安吉尔"
														href="http://gsw818.com/productlist/0-0-0-255-100-0-1-4-1.html">安吉尔</a>
													</li>
													<li><a title="苏泊尔"
														href="http://gsw818.com/productlist/0-0-0-255-102-0-1-4-1.html">苏泊尔</a>
													</li>
													<li><a title="九阳"
														href="http://gsw818.com/productlist/0-0-0-255-103-0-1-4-1.html">九阳</a>
													</li>
													<li><a title="松下"
														href="http://gsw818.com/productlist/0-0-0-255-104-0-1-4-1.html">松下</a>
													</li>
													<li><a title="小天鹅"
														href="http://gsw818.com/productlist/0-0-0-255-105-0-1-4-1.html">小天鹅</a>
													</li>
													<li><a title="舒比奇"
														href="http://gsw818.com/productlist/0-0-0-255-116-0-1-4-1.html">舒比奇</a>
													</li>
													<li><a title="邦仔"
														href="http://gsw818.com/productlist/0-0-0-255-117-0-1-4-1.html">邦仔</a>
													</li>
													<li><a title="帮宝适"
														href="http://gsw818.com/productlist/0-0-0-255-118-0-1-4-1.html">帮宝适</a>
													</li>
												</ul>
											</dd>
										</dl>
									</div>
									<!--fr-->
								</div>
								<!--i_mc-->
							</div>
							<!--category item-->
							<div class="item" onmouseenter="_v30._categories._over(this)"
								onmouseleave="_v30._categories._out(this)">
								<span><h3 class="">
										<a
											href="http://gsw818.com/productlist/0-0-0-183-0-0-1-4-1.html"
											title="内存">内存</a>
									</h3> <i></i><s class="sprite"></s></span>
								<div class="i-mc">
									<!--<div class="i_mcclose" onclick="$(this).parent().parent().removeClass('hover');">X</div>-->
									<div class="subitem">
										<dl class="fore">
											<dt class="foreflag" flag="1">
												<a
													href="http://gsw818.com/productlist/0-0-0-212-0-0-1-4-1.html"
													title="电视">电视</a>
											</dt>
											<dd class="clearfix">
												<em><a
													href="http://gsw818.com/productlist/0-0-0-314-0-0-1-4-1.html"
													title="4K高清">4K高清</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-215-0-0-1-4-1.html"
													title="4K电视">4K电视</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-216-0-0-1-4-1.html"
													title="智能">智能</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-315-0-0-1-4-1.html"
													title="智能电视">智能电视</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-316-0-0-1-4-1.html"
													title="普通网络">普通网络</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-317-0-0-1-4-1.html"
													title="非网络">非网络</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-318-0-0-1-4-1.html"
													title="网络">网络</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-319-0-0-1-4-1.html"
													title="普通机">普通机</a></em>
											</dd>
										</dl>
										<dl class="fore">
											<dt class="foreflag" flag="1">
												<a
													href="http://gsw818.com/productlist/0-0-0-213-0-0-1-4-1.html"
													title="冰箱">冰箱</a>
											</dt>
											<dd class="clearfix">
												<em><a
													href="http://gsw818.com/productlist/0-0-0-323-0-0-1-4-1.html"
													title="三开门">三开门</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-320-0-0-1-4-1.html"
													title="对开门">对开门</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-321-0-0-1-4-1.html"
													title="多门冰箱">多门冰箱</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-322-0-0-1-4-1.html"
													title="双开门">双开门</a></em>
											</dd>
										</dl>
										<dl class="fore">
											<dt class="foreflag" flag="1">
												<a
													href="http://gsw818.com/productlist/0-0-0-214-0-0-1-4-1.html"
													title="洗衣机">洗衣机</a>
											</dt>
											<dd class="clearfix">
												<em><a
													href="http://gsw818.com/productlist/0-0-0-324-0-0-1-4-1.html"
													title="滚筒洗">滚筒洗</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-325-0-0-1-4-1.html"
													title="波轮洗">波轮洗</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-327-0-0-1-4-1.html"
													title="洗烘一体">洗烘一体</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-326-0-0-1-4-1.html"
													title="双桶">双桶</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-328-0-0-1-4-1.html"
													title="迷你">迷你</a></em>
											</dd>
										</dl>
										<dl class="fore">
											<dt class="foreflag" flag="1">
												<a
													href="http://gsw818.com/productlist/0-0-0-230-0-0-1-4-1.html"
													title="空调">空调</a>
											</dt>
											<dd class="clearfix">
												<em><a
													href="http://gsw818.com/productlist/0-0-0-329-0-0-1-4-1.html"
													title="变频">变频</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-330-0-0-1-4-1.html"
													title="挂机">挂机</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-331-0-0-1-4-1.html"
													title="柜机">柜机</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-332-0-0-1-4-1.html"
													title="中央空调">中央空调</a></em>
											</dd>
										</dl>
										<dl class="fore">
											<dt class="foreflag" flag="1">
												<a
													href="http://gsw818.com/productlist/0-0-0-748-0-0-1-4-1.html"
													title="电暖炉">电暖炉</a>
											</dt>
											<dd class="clearfix"></dd>
										</dl>
										<dl class="fore">
											<dt class="foreflag" flag="1">
												<a
													href="http://gsw818.com/productlist/0-0-0-231-0-0-1-4-1.html"
													title="热水器">热水器</a>
											</dt>
											<dd class="clearfix">
												<em><a
													href="http://gsw818.com/productlist/0-0-0-333-0-0-1-4-1.html"
													title="电热水器">电热水器</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-334-0-0-1-4-1.html"
													title="燃气热水器">燃气热水器</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-335-0-0-1-4-1.html"
													title="小厨宝">小厨宝</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-336-0-0-1-4-1.html"
													title="太阳能">太阳能</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-337-0-0-1-4-1.html"
													title="即热式">即热式</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-338-0-0-1-4-1.html"
													title="空气能">空气能</a></em>
											</dd>
										</dl>
										<dl class="fore">
											<dt class="foreflag" flag="1">
												<a
													href="http://gsw818.com/productlist/0-0-0-232-0-0-1-4-1.html"
													title="厨房大电">厨房大电</a>
											</dt>
											<dd class="clearfix">
												<em><a
													href="http://gsw818.com/productlist/0-0-0-306-0-0-1-4-1.html"
													title="油烟机">油烟机</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-307-0-0-1-4-1.html"
													title="灶">灶</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-308-0-0-1-4-1.html"
													title="消毒柜">消毒柜</a></em>
											</dd>
										</dl>
										<dl class="fore">
											<dt class="foreflag" flag="1">
												<a
													href="http://gsw818.com/productlist/0-0-0-309-0-0-1-4-1.html"
													title="中式厨电">中式厨电</a>
											</dt>
											<dd class="clearfix">
												<em><a
													href="http://gsw818.com/productlist/0-0-0-740-0-0-1-4-1.html"
													title="饮水机">饮水机</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-339-0-0-1-4-1.html"
													title="净水器">净水器</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-340-0-0-1-4-1.html"
													title="电饭煲">电饭煲</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-341-0-0-1-4-1.html"
													title="豆浆机">豆浆机</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-342-0-0-1-4-1.html"
													title="电压力锅">电压力锅</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-343-0-0-1-4-1.html"
													title="电磁炉">电磁炉</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-344-0-0-1-4-1.html"
													title="电热水壶">电热水壶</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-345-0-0-1-4-1.html"
													title="养生壶">养生壶</a></em>
											</dd>
										</dl>
										<dl class="fore">
											<dt class="foreflag" flag="1">
												<a
													href="http://gsw818.com/productlist/0-0-0-310-0-0-1-4-1.html"
													title="西式厨电">西式厨电</a>
											</dt>
											<dd class="clearfix">
												<em><a
													href="http://gsw818.com/productlist/0-0-0-346-0-0-1-4-1.html"
													title="微波炉">微波炉</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-347-0-0-1-4-1.html"
													title="烤箱">烤箱</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-348-0-0-1-4-1.html"
													title="榨汁机">榨汁机</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-349-0-0-1-4-1.html"
													title="原汁机">原汁机</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-350-0-0-1-4-1.html"
													title="电炸锅">电炸锅</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-351-0-0-1-4-1.html"
													title="料理机">料理机</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-352-0-0-1-4-1.html"
													title="面包机">面包机</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-353-0-0-1-4-1.html"
													title="咖啡机">咖啡机</a></em>
											</dd>
										</dl>
										<dl class="fore">
											<dt class="foreflag" flag="1">
												<a
													href="http://gsw818.com/productlist/0-0-0-311-0-0-1-4-1.html"
													title="生活电器">生活电器</a>
											</dt>
											<dd class="clearfix">
												<em><a
													href="http://gsw818.com/productlist/0-0-0-354-0-0-1-4-1.html"
													title="电风扇">电风扇</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-355-0-0-1-4-1.html"
													title="挂烫机">挂烫机</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-356-0-0-1-4-1.html"
													title="扫地机器人">扫地机器人</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-357-0-0-1-4-1.html"
													title="空气净化器">空气净化器</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-358-0-0-1-4-1.html"
													title="吸尘器">吸尘器</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-359-0-0-1-4-1.html"
													title="除湿机">除湿机</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-360-0-0-1-4-1.html"
													title="干衣机">干衣机</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-829-0-0-1-4-1.html"
													title="影音设备">影音设备</a></em>
											</dd>
										</dl>
										<dl class="fore">
											<dt class="foreflag" flag="1">
												<a
													href="http://gsw818.com/productlist/0-0-0-312-0-0-1-4-1.html"
													title="个护健康">个护健康</a>
											</dt>
											<dd class="clearfix">
												<em><a
													href="http://gsw818.com/productlist/0-0-0-361-0-0-1-4-1.html"
													title="剃须刀">剃须刀</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-362-0-0-1-4-1.html"
													title="吹风机">吹风机</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-363-0-0-1-4-1.html"
													title="电动牙刷">电动牙刷</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-364-0-0-1-4-1.html"
													title="体重秤">体重秤</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-365-0-0-1-4-1.html"
													title="理发器">理发器</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-366-0-0-1-4-1.html"
													title="足浴器">足浴器</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-367-0-0-1-4-1.html"
													title="按摩椅">按摩椅</a></em>
											</dd>
										</dl>
										<dl class="fore">
											<dt class="foreflag" flag="1">
												<a
													href="http://gsw818.com/productlist/0-0-0-313-0-0-1-4-1.html"
													title="精品推荐">精品推荐</a>
											</dt>
											<dd class="clearfix">
												<em><a
													href="http://gsw818.com/productlist/0-0-0-368-0-0-1-4-1.html"
													title="脱毛器">脱毛器</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-369-0-0-1-4-1.html"
													title="吊扇">吊扇</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-370-0-0-1-4-1.html"
													title="冰淇淋机">冰淇淋机</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-371-0-0-1-4-1.html"
													title="碎冰机">碎冰机</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-372-0-0-1-4-1.html"
													title="空调扇">空调扇</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-373-0-0-1-4-1.html"
													title="廋身带">廋身带</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-374-0-0-1-4-1.html"
													title="冷饮机">冷饮机</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-375-0-0-1-4-1.html"
													title="炒冰机">炒冰机</a></em>
											</dd>
										</dl>
									</div>
									<!--subitem-->
									<div class="cat-right-con fr ecs_fr">
										<dl class="categorys-brands">
											<dt>推荐品牌</dt>
											<dd>
												<ul>
													<li><a title="海尔"
														href="http://gsw818.com/productlist/0-0-0-183-69-0-1-4-1.html">海尔</a>
													</li>
													<li><a title="TCL"
														href="http://gsw818.com/productlist/0-0-0-183-71-0-1-4-1.html">TCL</a>
													</li>
													<li><a title="美的"
														href="http://gsw818.com/productlist/0-0-0-183-77-0-1-4-1.html">美的</a>
													</li>
													<li><a title="ZIPPO"
														href="http://gsw818.com/productlist/0-0-0-183-79-0-1-4-1.html">ZIPPO</a>
													</li>
													<li><a title="飞科"
														href="http://gsw818.com/productlist/0-0-0-183-92-0-1-4-1.html">飞科</a>
													</li>
													<li><a title="海信"
														href="http://gsw818.com/productlist/0-0-0-183-93-0-1-4-1.html">海信</a>
													</li>
													<li><a title="飞利浦"
														href="http://gsw818.com/productlist/0-0-0-183-94-0-1-4-1.html">飞利浦</a>
													</li>
													<li><a title="老板电器"
														href="http://gsw818.com/productlist/0-0-0-183-95-0-1-4-1.html">老板电器</a>
													</li>
													<li><a title="长虹"
														href="http://gsw818.com/productlist/0-0-0-183-98-0-1-4-1.html">长虹</a>
													</li>
													<li><a title="康佳"
														href="http://gsw818.com/productlist/0-0-0-183-99-0-1-4-1.html">康佳</a>
													</li>
													<li><a title="安吉尔"
														href="http://gsw818.com/productlist/0-0-0-183-100-0-1-4-1.html">安吉尔</a>
													</li>
													<li><a title="索奇"
														href="http://gsw818.com/productlist/0-0-0-183-101-0-1-4-1.html">索奇</a>
													</li>
												</ul>
											</dd>
										</dl>
									</div>
									<!--fr-->
								</div>
								<!--i_mc-->
							</div>
							<!--category item-->
							<div class="item" onmouseenter="_v30._categories._over(this)"
								onmouseleave="_v30._categories._out(this)">
								<span><h3 class="">
										<a
											href="http://gsw818.com/productlist/0-0-0-184-0-0-1-4-1.html"
											title="数码/办公">数码/办公</a>
									</h3> <i></i><s class="sprite"></s></span>
								<div class="i-mc">
									<!--<div class="i_mcclose" onclick="$(this).parent().parent().removeClass('hover');">X</div>-->
									<div class="subitem">
										<dl class="fore">
											<dt class="foreflag" flag="1">
												<a
													href="http://gsw818.com/productlist/0-0-0-185-0-0-1-4-1.html"
													title="手机">手机</a>
											</dt>
											<dd class="clearfix">
												<em><a
													href="http://gsw818.com/productlist/0-0-0-535-0-0-1-4-1.html"
													title="小米">小米</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-536-0-0-1-4-1.html"
													title="iPhone">iPhone</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-743-0-0-1-4-1.html"
													title="金立">金立</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-537-0-0-1-4-1.html"
													title="魅族">魅族</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-538-0-0-1-4-1.html"
													title="荣耀">荣耀</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-539-0-0-1-4-1.html"
													title="乐视">乐视</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-540-0-0-1-4-1.html"
													title="OPPO">OPPO</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-541-0-0-1-4-1.html"
													title="vivo">vivo</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-542-0-0-1-4-1.html"
													title="三星">三星</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-543-0-0-1-4-1.html"
													title="华为">华为</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-544-0-0-1-4-1.html"
													title="移动">移动</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-545-0-0-1-4-1.html"
													title="联通">联通</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-546-0-0-1-4-1.html"
													title="电信">电信</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-547-0-0-1-4-1.html"
													title="合约机">合约机</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-548-0-0-1-4-1.html"
													title="电话手表">电话手表</a></em>
											</dd>
										</dl>
										<dl class="fore">
											<dt class="foreflag" flag="1">
												<a
													href="http://gsw818.com/productlist/0-0-0-186-0-0-1-4-1.html"
													title="手机配件">手机配件</a>
											</dt>
											<dd class="clearfix">
												<em><a
													href="http://gsw818.com/productlist/0-0-0-190-0-0-1-4-1.html"
													title="内存卡">内存卡</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-191-0-0-1-4-1.html"
													title="电池">电池</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-192-0-0-1-4-1.html"
													title="耳机">耳机</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-193-0-0-1-4-1.html"
													title="数据线">数据线</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-194-0-0-1-4-1.html"
													title="贴膜">贴膜</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-195-0-0-1-4-1.html"
													title="保护套/壳">保护套/壳</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-196-0-0-1-4-1.html"
													title="充电器">充电器</a></em>
											</dd>
										</dl>
										<dl class="fore">
											<dt class="foreflag" flag="1">
												<a
													href="http://gsw818.com/productlist/0-0-0-549-0-0-1-4-1.html"
													title="电脑整机">电脑整机</a>
											</dt>
											<dd class="clearfix">
												<em><a
													href="http://gsw818.com/productlist/0-0-0-896-0-0-1-4-1.html"
													title="组装电脑">组装电脑</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-550-0-0-1-4-1.html"
													title="笔记本">笔记本</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-551-0-0-1-4-1.html"
													title="平板电脑">平板电脑</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-552-0-0-1-4-1.html"
													title="台式机">台式机</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-553-0-0-1-4-1.html"
													title="一体机">一体机</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-554-0-0-1-4-1.html"
													title="DIY">DIY</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-555-0-0-1-4-1.html"
													title="游戏本">游戏本</a></em>
											</dd>
										</dl>
										<dl class="fore">
											<dt class="foreflag" flag="1">
												<a
													href="http://gsw818.com/productlist/0-0-0-187-0-0-1-4-1.html"
													title="电脑配件">电脑配件</a>
											</dt>
											<dd class="clearfix">
												<em><a
													href="http://gsw818.com/productlist/0-0-0-889-0-0-1-4-1.html"
													title="内存">内存</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-890-0-0-1-4-1.html"
													title="机箱">机箱</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-891-0-0-1-4-1.html"
													title="电源">电源</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-892-0-0-1-4-1.html"
													title="散热器">散热器</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-893-0-0-1-4-1.html"
													title="刻录机/光驱">刻录机/光驱</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-894-0-0-1-4-1.html"
													title="声卡/扩展卡">声卡/扩展卡</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-895-0-0-1-4-1.html"
													title="装机配件">装机配件</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-897-0-0-1-4-1.html"
													title="鼠标">鼠标</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-898-0-0-1-4-1.html"
													title="键盘">键盘</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-899-0-0-1-4-1.html"
													title="U盘">U盘</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-900-0-0-1-4-1.html"
													title="摄像头">摄像头</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-901-0-0-1-4-1.html"
													title="鼠标垫">鼠标垫</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-902-0-0-1-4-1.html"
													title="手写板">手写板</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-903-0-0-1-4-1.html"
													title="电脑工具">电脑工具</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-904-0-0-1-4-1.html"
													title="电脑清洁">电脑清洁</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-905-0-0-1-4-1.html"
													title="硬盘盒">硬盘盒</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-906-0-0-1-4-1.html"
													title="插座">插座</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-907-0-0-1-4-1.html"
													title="网络仪表仪器">网络仪表仪器</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-197-0-0-1-4-1.html"
													title="显示器">显示器</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-198-0-0-1-4-1.html"
													title="CPU">CPU</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-199-0-0-1-4-1.html"
													title="主板">主板</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-200-0-0-1-4-1.html"
													title="显卡">显卡</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-750-0-0-1-4-1.html"
													title="硬盘">硬盘</a></em>
											</dd>
										</dl>
										<dl class="fore">
											<dt class="foreflag" flag="1">
												<a
													href="http://gsw818.com/productlist/0-0-0-188-0-0-1-4-1.html"
													title="数码/配件">数码/配件</a>
											</dt>
											<dd class="clearfix">
												<em><a
													href="http://gsw818.com/productlist/0-0-0-914-0-0-1-4-1.html"
													title="耳机/耳麦">耳机/耳麦</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-915-0-0-1-4-1.html"
													title="MP3/MP4">MP3/MP4</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-916-0-0-1-4-1.html"
													title="录音笔">录音笔</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-917-0-0-1-4-1.html"
													title="音箱/音响">音箱/音响</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-909-0-0-1-4-1.html"
													title="数码相机">数码相机</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-913-0-0-1-4-1.html"
													title="数码相框">数码相框</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-912-0-0-1-4-1.html"
													title="运动相机">运动相机</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-911-0-0-1-4-1.html"
													title="单反相机">单反相机</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-910-0-0-1-4-1.html"
													title="单电/微单相机">单电/微单相机</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-202-0-0-1-4-1.html"
													title="读卡器">读卡器</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-203-0-0-1-4-1.html"
													title="电池">电池</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-204-0-0-1-4-1.html"
													title="贴膜">贴膜</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-205-0-0-1-4-1.html"
													title="滤镜">滤镜</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-206-0-0-1-4-1.html"
													title="闪光灯/手柄">闪光灯/手柄</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-207-0-0-1-4-1.html"
													title="三脚架/云台">三脚架/云台</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-201-0-0-1-4-1.html"
													title="存储卡">存储卡</a></em>
											</dd>
										</dl>
										<dl class="fore">
											<dt class="foreflag" flag="1">
												<a
													href="http://gsw818.com/productlist/0-0-0-189-0-0-1-4-1.html"
													title="网络产品">网络产品</a>
											</dt>
											<dd class="clearfix">
												<em><a
													href="http://gsw818.com/productlist/0-0-0-918-0-0-1-4-1.html"
													title="路由器">路由器</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-919-0-0-1-4-1.html"
													title="网络机顶盒">网络机顶盒</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-920-0-0-1-4-1.html"
													title="交换机">交换机</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-921-0-0-1-4-1.html"
													title="网络存储">网络存储</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-922-0-0-1-4-1.html"
													title="网卡">网卡</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-923-0-0-1-4-1.html"
													title="4G/3G上网">4G/3G上网</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-924-0-0-1-4-1.html"
													title="网络配件">网络配件</a></em>
											</dd>
										</dl>
										<dl class="fore">
											<dt class="foreflag" flag="1">
												<a
													href="http://gsw818.com/productlist/0-0-0-556-0-0-1-4-1.html"
													title="办公设备">办公设备</a>
											</dt>
											<dd class="clearfix">
												<em><a
													href="http://gsw818.com/productlist/0-0-0-1019-0-0-1-4-1.html"
													title="称">称</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-888-0-0-1-4-1.html"
													title="收银机/台">收银机/台</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-760-0-0-1-4-1.html"
													title="碎纸机">碎纸机</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-763-0-0-1-4-1.html"
													title="考勤机">考勤机</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-560-0-0-1-4-1.html"
													title="打印机">打印机</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-561-0-0-1-4-1.html"
													title="保险箱">保险箱</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-562-0-0-1-4-1.html"
													title="智能投影">智能投影</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-563-0-0-1-4-1.html"
													title="纸类">纸类</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-564-0-0-1-4-1.html"
													title="墨粉类">墨粉类</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-565-0-0-1-4-1.html"
													title="验钞机">验钞机</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-925-0-0-1-4-1.html"
													title="白板">白板</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-1015-0-0-1-4-1.html"
													title="扫码设备">扫码设备</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-926-0-0-1-4-1.html"
													title="其他">其他</a></em>
											</dd>
										</dl>
										<dl class="fore">
											<dt class="foreflag" flag="1">
												<a
													href="http://gsw818.com/productlist/0-0-0-751-0-0-1-4-1.html"
													title="电信运营商">电信运营商</a>
											</dt>
											<dd class="clearfix">
												<em><a
													href="http://gsw818.com/productlist/0-0-0-927-0-0-1-4-1.html"
													title="电信">电信</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-928-0-0-1-4-1.html"
													title="移动">移动</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-929-0-0-1-4-1.html"
													title="联通">联通</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-930-0-0-1-4-1.html"
													title="固定宽带">固定宽带</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-931-0-0-1-4-1.html"
													title="充话费/流量">充话费/流量</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-932-0-0-1-4-1.html"
													title="办套餐">办套餐</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-933-0-0-1-4-1.html"
													title="选号码">选号码</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-934-0-0-1-4-1.html"
													title="合约机">合约机</a></em>
											</dd>
										</dl>
										<dl class="fore">
											<dt class="foreflag" flag="1">
												<a
													href="http://gsw818.com/productlist/0-0-0-908-0-0-1-4-1.html"
													title="游戏设备">游戏设备</a>
											</dt>
											<dd class="clearfix"></dd>
										</dl>
										<dl class="fore">
											<dt class="foreflag" flag="1">
												<a
													href="http://gsw818.com/productlist/0-0-0-935-0-0-1-4-1.html"
													title="服务产品">服务产品</a>
											</dt>
											<dd class="clearfix">
												<em><a
													href="http://gsw818.com/productlist/0-0-0-936-0-0-1-4-1.html"
													title="延保服务">延保服务</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-937-0-0-1-4-1.html"
													title="上门安装">上门安装</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-938-0-0-1-4-1.html"
													title="维修保养">维修保养</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-939-0-0-1-4-1.html"
													title="电脑软件">电脑软件</a></em>
											</dd>
										</dl>
									</div>
									<!--subitem-->
									<div class="cat-right-con fr ecs_fr">
										<dl class="categorys-brands">
											<dt>推荐品牌</dt>
											<dd>
												<ul>
													<li><a title="海尔"
														href="http://gsw818.com/productlist/0-0-0-184-69-0-1-4-1.html">海尔</a>
													</li>
													<li><a title="TCL"
														href="http://gsw818.com/productlist/0-0-0-184-71-0-1-4-1.html">TCL</a>
													</li>
													<li><a title="美的"
														href="http://gsw818.com/productlist/0-0-0-184-77-0-1-4-1.html">美的</a>
													</li>
													<li><a title="康佳"
														href="http://gsw818.com/productlist/0-0-0-184-99-0-1-4-1.html">康佳</a>
													</li>
													<li><a title="安吉尔"
														href="http://gsw818.com/productlist/0-0-0-184-100-0-1-4-1.html">安吉尔</a>
													</li>
													<li><a title="苏泊尔"
														href="http://gsw818.com/productlist/0-0-0-184-102-0-1-4-1.html">苏泊尔</a>
													</li>
													<li><a title="九阳"
														href="http://gsw818.com/productlist/0-0-0-184-103-0-1-4-1.html">九阳</a>
													</li>
													<li><a title="松下"
														href="http://gsw818.com/productlist/0-0-0-184-104-0-1-4-1.html">松下</a>
													</li>
													<li><a title="小天鹅"
														href="http://gsw818.com/productlist/0-0-0-184-105-0-1-4-1.html">小天鹅</a>
													</li>
													<li><a title="OPP0"
														href="http://gsw818.com/productlist/0-0-0-184-111-0-1-4-1.html">OPP0</a>
													</li>
													<li><a title="舒比奇"
														href="http://gsw818.com/productlist/0-0-0-184-116-0-1-4-1.html">舒比奇</a>
													</li>
													<li><a title="邦仔"
														href="http://gsw818.com/productlist/0-0-0-184-117-0-1-4-1.html">邦仔</a>
													</li>
												</ul>
											</dd>
										</dl>
									</div>
									<!--fr-->
								</div>
								<!--i_mc-->
							</div>
							<!--category item-->
							<div class="item" onmouseenter="_v30._categories._over(this)"
								onmouseleave="_v30._categories._out(this)">
								<span><h3 class="">
										<a
											href="http://gsw818.com/productlist/0-0-0-138-0-0-1-4-1.html"
											title="男装/女装">男装/女装</a>
									</h3> <i></i><s class="sprite"></s></span>
								<div class="i-mc">
									<!--<div class="i_mcclose" onclick="$(this).parent().parent().removeClass('hover');">X</div>-->
									<div class="subitem">
										<dl class="fore">
											<dt class="foreflag" flag="1">
												<a
													href="http://gsw818.com/productlist/0-0-0-144-0-0-1-4-1.html"
													title="女装">女装</a>
											</dt>
											<dd class="clearfix">
												<em><a
													href="http://gsw818.com/productlist/0-0-0-150-0-0-1-4-1.html"
													title="上衣">上衣</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-384-0-0-1-4-1.html"
													title="裙装">裙装</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-381-0-0-1-4-1.html"
													title="裤子">裤子</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-153-0-0-1-4-1.html"
													title="套装">套装</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-377-0-0-1-4-1.html"
													title="风衣">风衣</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-379-0-0-1-4-1.html"
													title="羽绒服">羽绒服</a></em>
											</dd>
										</dl>
										<dl class="fore">
											<dt class="foreflag" flag="1">
												<a
													href="http://gsw818.com/productlist/0-0-0-145-0-0-1-4-1.html"
													title="男装">男装</a>
											</dt>
											<dd class="clearfix">
												<em><a
													href="http://gsw818.com/productlist/0-0-0-385-0-0-1-4-1.html"
													title="衬衫">衬衫</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-154-0-0-1-4-1.html"
													title="长袖T恤">长袖T恤</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-155-0-0-1-4-1.html"
													title="短袖T恤">短袖T恤</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-386-0-0-1-4-1.html"
													title="长袖体恤">长袖体恤</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-387-0-0-1-4-1.html"
													title="卫衣">卫衣</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-388-0-0-1-4-1.html"
													title="针织衫/毛衣">针织衫/毛衣</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-389-0-0-1-4-1.html"
													title="背心">背心</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-391-0-0-1-4-1.html"
													title="POLO衫">POLO衫</a></em>
											</dd>
										</dl>
										<dl class="fore">
											<dt class="foreflag" flag="1">
												<a
													href="http://gsw818.com/productlist/0-0-0-146-0-0-1-4-1.html"
													title="男鞋">男鞋</a>
											</dt>
											<dd class="clearfix">
												<em><a
													href="http://gsw818.com/productlist/0-0-0-392-0-0-1-4-1.html"
													title="休闲鞋">休闲鞋</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-393-0-0-1-4-1.html"
													title="正装皮鞋">正装皮鞋</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-394-0-0-1-4-1.html"
													title="休闲皮鞋">休闲皮鞋</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-395-0-0-1-4-1.html"
													title="板鞋">板鞋</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-396-0-0-1-4-1.html"
													title="户外休闲">户外休闲</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-397-0-0-1-4-1.html"
													title="帆布鞋">帆布鞋</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-398-0-0-1-4-1.html"
													title="运动休闲">运动休闲</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-399-0-0-1-4-1.html"
													title="乐福鞋">乐福鞋</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-400-0-0-1-4-1.html"
													title="豆豆鞋">豆豆鞋</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-401-0-0-1-4-1.html"
													title="布鞋">布鞋</a></em>
											</dd>
										</dl>
										<dl class="fore">
											<dt class="foreflag" flag="1">
												<a
													href="http://gsw818.com/productlist/0-0-0-148-0-0-1-4-1.html"
													title="女鞋">女鞋</a>
											</dt>
											<dd class="clearfix">
												<em><a
													href="http://gsw818.com/productlist/0-0-0-156-0-0-1-4-1.html"
													title="平底鞋">平底鞋</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-157-0-0-1-4-1.html"
													title="高跟鞋">高跟鞋</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-808-0-0-1-4-1.html"
													title="靴子">靴子</a></em>
											</dd>
										</dl>
										<dl class="fore">
											<dt class="foreflag" flag="1">
												<a
													href="http://gsw818.com/productlist/0-0-0-147-0-0-1-4-1.html"
													title="内衣">内衣</a>
											</dt>
											<dd class="clearfix"></dd>
										</dl>
										<dl class="fore">
											<dt class="foreflag" flag="1">
												<a
													href="http://gsw818.com/productlist/0-0-0-940-0-0-1-4-1.html"
													title="配饰">配饰</a>
											</dt>
											<dd class="clearfix"></dd>
										</dl>
									</div>
									<!--subitem-->
									<div class="cat-right-con fr ecs_fr">
										<dl class="categorys-brands">
											<dt>推荐品牌</dt>
											<dd>
												<ul>
													<li><a title="海尔"
														href="http://gsw818.com/productlist/0-0-0-138-69-0-1-4-1.html">海尔</a>
													</li>
													<li><a title="TCL"
														href="http://gsw818.com/productlist/0-0-0-138-71-0-1-4-1.html">TCL</a>
													</li>
													<li><a title="美的"
														href="http://gsw818.com/productlist/0-0-0-138-77-0-1-4-1.html">美的</a>
													</li>
													<li><a title="COACH"
														href="http://gsw818.com/productlist/0-0-0-138-80-0-1-4-1.html">COACH</a>
													</li>
													<li><a title="美邦"
														href="http://gsw818.com/productlist/0-0-0-138-81-0-1-4-1.html">美邦</a>
													</li>
													<li><a title="爱慕"
														href="http://gsw818.com/productlist/0-0-0-138-82-0-1-4-1.html">爱慕</a>
													</li>
													<li><a title="ochirly"
														href="http://gsw818.com/productlist/0-0-0-138-83-0-1-4-1.html">ochirly</a>
													</li>
													<li><a title="SEMIR"
														href="http://gsw818.com/productlist/0-0-0-138-96-0-1-4-1.html">SEMIR</a>
													</li>
													<li><a title="康佳"
														href="http://gsw818.com/productlist/0-0-0-138-99-0-1-4-1.html">康佳</a>
													</li>
													<li><a title="安吉尔"
														href="http://gsw818.com/productlist/0-0-0-138-100-0-1-4-1.html">安吉尔</a>
													</li>
													<li><a title="苏泊尔"
														href="http://gsw818.com/productlist/0-0-0-138-102-0-1-4-1.html">苏泊尔</a>
													</li>
													<li><a title="九阳"
														href="http://gsw818.com/productlist/0-0-0-138-103-0-1-4-1.html">九阳</a>
													</li>
												</ul>
											</dd>
										</dl>
									</div>
									<!--fr-->
								</div>
								<!--i_mc-->
							</div>


							<!--category item-->
							<div class="item" onmouseenter="_v30._categories._over(this)"
								onmouseleave="_v30._categories._out(this)">
								<span><h3 class="">
										<a
											href="http://gsw818.com/productlist/0-0-0-297-0-0-1-4-1.html"
											title="酒店/娱乐">酒店/娱乐</a>
									</h3> <i></i><s class="sprite"></s></span>
								<div class="i-mc">
									<!--<div class="i_mcclose" onclick="$(this).parent().parent().removeClass('hover');">X</div>-->
									<div class="subitem">
										<dl class="fore">
											<dt class="foreflag" flag="1">
												<a
													href="http://gsw818.com/productlist/0-0-0-752-0-0-1-4-1.html"
													title="酒店">酒店</a>
											</dt>
											<dd class="clearfix">
												<em><a
													href="http://gsw818.com/productlist/0-0-0-856-0-0-1-4-1.html"
													title="公寓式/宾馆">公寓式/宾馆</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-857-0-0-1-4-1.html"
													title="经济型酒店">经济型酒店</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-858-0-0-1-4-1.html"
													title="商务酒店">商务酒店</a></em>
											</dd>
										</dl>
										<dl class="fore">
											<dt class="foreflag" flag="1">
												<a
													href="http://gsw818.com/productlist/0-0-0-775-0-0-1-4-1.html"
													title="旅游">旅游</a>
											</dt>
											<dd class="clearfix">
												<em><a
													href="http://gsw818.com/productlist/0-0-0-859-0-0-1-4-1.html"
													title="省内游">省内游</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-802-0-0-1-4-1.html"
													title="国内旅游">国内旅游</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-803-0-0-1-4-1.html"
													title="国际旅游">国际旅游</a></em>
											</dd>
										</dl>
										<dl class="fore">
											<dt class="foreflag" flag="1">
												<a
													href="http://gsw818.com/productlist/0-0-0-878-0-0-1-4-1.html"
													title="休闲娱乐">休闲娱乐</a>
											</dt>
											<dd class="clearfix">
												<em><a
													href="http://gsw818.com/productlist/0-0-0-879-0-0-1-4-1.html"
													title="KTV">KTV</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-880-0-0-1-4-1.html"
													title="电影">电影</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-881-0-0-1-4-1.html"
													title="足疗按摩">足疗按摩</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-882-0-0-1-4-1.html"
													title="洗浴/汗蒸">洗浴/汗蒸</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-883-0-0-1-4-1.html"
													title="酒吧">酒吧</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-884-0-0-1-4-1.html"
													title="网吧网咖">网吧网咖</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-885-0-0-1-4-1.html"
													title="茶馆">茶馆</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-886-0-0-1-4-1.html"
													title="运动健身">运动健身</a></em>
											</dd>
										</dl>
										<dl class="fore">
											<dt class="foreflag" flag="1">
												<a
													href="http://gsw818.com/productlist/0-0-0-754-0-0-1-4-1.html"
													title="机票">机票</a>
											</dt>
											<dd class="clearfix"></dd>
										</dl>
										<dl class="fore">
											<dt class="foreflag" flag="1">
												<a
													href="http://gsw818.com/productlist/0-0-0-798-0-0-1-4-1.html"
													title="房地产">房地产</a>
											</dt>
											<dd class="clearfix">
												<em><a
													href="http://gsw818.com/productlist/0-0-0-799-0-0-1-4-1.html"
													title="二手房">二手房</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-800-0-0-1-4-1.html"
													title="新房">新房</a></em> <em><a
													href="http://gsw818.com/productlist/0-0-0-801-0-0-1-4-1.html"
													title="房屋租赁">房屋租赁</a></em>
											</dd>
										</dl>
										<dl class="fore">
											<dt class="foreflag" flag="1">
												<a
													href="http://gsw818.com/productlist/0-0-0-887-0-0-1-4-1.html"
													title="保险/金融">保险/金融</a>
											</dt>
											<dd class="clearfix"></dd>
										</dl>
									</div>
									<!--subitem-->
									<div class="cat-right-con fr ecs_fr">
										<dl class="categorys-brands">
											<dt>推荐品牌</dt>
											<dd>
												<ul>
													<li><a title="海尔"
														href="http://gsw818.com/productlist/0-0-0-297-69-0-1-4-1.html">海尔</a>
													</li>
													<li><a title="TCL"
														href="http://gsw818.com/productlist/0-0-0-297-71-0-1-4-1.html">TCL</a>
													</li>
													<li><a title="美的"
														href="http://gsw818.com/productlist/0-0-0-297-77-0-1-4-1.html">美的</a>
													</li>
													<li><a title="康佳"
														href="http://gsw818.com/productlist/0-0-0-297-99-0-1-4-1.html">康佳</a>
													</li>
													<li><a title="安吉尔"
														href="http://gsw818.com/productlist/0-0-0-297-100-0-1-4-1.html">安吉尔</a>
													</li>
													<li><a title="苏泊尔"
														href="http://gsw818.com/productlist/0-0-0-297-102-0-1-4-1.html">苏泊尔</a>
													</li>
													<li><a title="九阳"
														href="http://gsw818.com/productlist/0-0-0-297-103-0-1-4-1.html">九阳</a>
													</li>
													<li><a title="松下"
														href="http://gsw818.com/productlist/0-0-0-297-104-0-1-4-1.html">松下</a>
													</li>
													<li><a title="小天鹅"
														href="http://gsw818.com/productlist/0-0-0-297-105-0-1-4-1.html">小天鹅</a>
													</li>
													<li><a title="舒比奇"
														href="http://gsw818.com/productlist/0-0-0-297-116-0-1-4-1.html">舒比奇</a>
													</li>
													<li><a title="邦仔"
														href="http://gsw818.com/productlist/0-0-0-297-117-0-1-4-1.html">邦仔</a>
													</li>
													<li><a title="帮宝适"
														href="http://gsw818.com/productlist/0-0-0-297-118-0-1-4-1.html">帮宝适</a>
													</li>
												</ul>
											</dd>
										</dl>
									</div>
									<!--fr-->
								</div>
								<!--i_mc-->
							</div>
							<!--category item-->
						</div>
						<!--top_categorys mc-->
					</div>
				</div>
				<!--top_categorys-->
				<div class="menu">
					<ul class="clearfix">
						<li class="curr"><a class="main"
							href="http://gsw818.com/index.html" title="首页" target="_blank">首页</a></li>
						<li><a class="main"
							href="http://www.gsw818.com/store/index.aspx" title="商家入驻"
							target="_blank">商家入驻</a></li>
						<li><a class="main" href="http://gsw818.com/custom1.html"
							title="供货入驻" target="_blank">供货入驻</a></li>
						<li><a class="main" href="http://gsw818.com/buyinglist.html"
							title="抢购" target="_blank">抢购</a></li>
						<li><a class="main"
							href="http://sj.qq.com/myapp/detail.htm?apkName=com.github.wcds"
							title="APP" target="_blank">APP</a></li>
						<li><a class="main" href="http://gsw818.com/message.html"
							title="客户留言" target="_blank">客户留言</a></li>
					</ul>
				</div>
				<!--menu-->
			</div>
			<!--nav-->
		</div>
	</div>
	<!--header end-->
</body>
</html>