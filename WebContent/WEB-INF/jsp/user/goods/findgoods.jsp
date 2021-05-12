<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "${pageContext.request.contextPath}://www.w3.org/TR/html4/loose.dtd">
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib prefix="shiro" uri="http://shiro.apache.org/tags" %>
<html>
 
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <link rel="SHORTCUT ICON" href="http://${pageContext.request.contextPath}/favicon.ico" type="image/x-icon">

    <meta name="generator" content="366EC">
    <title>搜索商品</title>
    
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
    <link href="${pageContext.request.contextPath}/gsfiles/gsfile1/public_r.min.css" rel="stylesheet" type="text/css">
    <link href="${pageContext.request.contextPath}/gsfiles/gsfile1/index.min.css" type="text/css" rel="stylesheet">

    <link href="${pageContext.request.contextPath}/gsfiles/gsfile1/jqzoom.min.css" rel="stylesheet" type="text/css">
    <link href="${pageContext.request.contextPath}/gsfiles/gsfile1/smallslider.min.css" rel="stylesheet" type="text/css">
    <script src="${pageContext.request.contextPath}/gsfiles/gsfile1/jquery-public.min.js" type="text/javascript"></script>
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <script type="text/javascript" src="${pageContext.request.contextPath}/gsfiles/gsfile1/api"></script>
    <script type="text/javascript" src="${pageContext.request.contextPath}/gsfiles/gsfile1/getscript"></script>
    <script type="text/javascript" src="${pageContext.request.contextPath}/gsfiles/gsfile1/must_template.js"></script>
    <link href="${pageContext.request.contextPath}/gsfiles/gsfile1/Ecshop.Hint.min.css" rel="stylesheet">
    <!--[if (gte IE 6)&(lte IE 8)]>
    <script type='text/javascript' src='/common_script/selectivizr-min.js'></script>
    <![endif]-->
    <script type="text/javascript">
        var __global_Order_Goods_Qty_Must_Int = 0;
        var __golobal_img_server = '';
    </script>
    <script type="text/javascript" src="${pageContext.request.contextPath}/gsfiles/gsfile1/img_server_handle.js"></script>

    <script src="${pageContext.request.contextPath}/gsfiles/gsfile1/jquery.smallslider.min.js" type="text/javascript"></script>
    <script src="${pageContext.request.contextPath}/gsfiles/gsfile1/jquery.scrollLoading.min.js" type="text/javascript"></script>
    <script type="text/javascript" src="${pageContext.request.contextPath}/gsfiles/gsfile1/jquery.scrollstop.min.js"></script>
    <script src="${pageContext.request.contextPath}/gsfiles/gsfile1/main.min.js"></script>
    <script src="${pageContext.request.contextPath}/gsfiles/gsfile1/jquery.lazyload.min.js" type="text/javascript"></script>
    <script src="${pageContext.request.contextPath}/gsfiles/gsfile1/ProductPage.min.js" type="text/javascript"></script>
    <script src="${pageContext.request.contextPath}/gsfiles/gsfile1/ProductDetail.js" type="text/javascript"></script>
    <script src="${pageContext.request.contextPath}/gsfiles/gsfile1/ProductCompare.min.js" type="text/javascript"></script>
    <style type="text/css">
        .delayload {
            background: url(/images/Default.gif) no-repeat 50% 50%;
        }
    </style>
</head>
<body style="background:#FFFFFF url(none) left bottom repeat-y" class="" onload="loadCompareBox()">
<div class="" style="display: none; position: absolute;">
    <div class="aui_outer">
        <table class="aui_border">
            <tbody>
            <tr>
                <td class="aui_nw"></td>
                <td class="aui_n"></td>
                <td class="aui_ne"></td>
            </tr>
            <tr>
                <td class="aui_w"></td>
                <td class="aui_c">
                    <div class="aui_inner">
                        <table class="aui_dialog">
                            <tbody>
                            <tr>
                                <td colspan="2" class="aui_header">
                                    <div class="aui_titleBar">
                                        <div class="aui_title" style="cursor: move;"></div>
                                        <a class="aui_close" href="javascript:/*artDialog*/;">×</a></div>
                                </td>
                            </tr>
                            <tr>
                                <td class="aui_icon" style="display: none;">
                                    <div class="aui_iconBg" style="background: none;"></div>
                                </td>
                                <td class="aui_main" style="width: auto; height: auto;">
                                    <div class="aui_content" style="padding: 20px 25px;"></div>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="2" class="aui_footer">
                                    <div class="aui_buttons" style="display: none;"></div>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </td>
                <td class="aui_e"></td>
            </tr>
            <tr>
                <td class="aui_sw"></td>
                <td class="aui_s"></td>
                <td class="aui_se" style="cursor: se-resize;"></td>
            </tr>
            </tbody>
        </table>
    </div>
</div>
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
								style="display: none;"><a href="${pageContext.request.contextPath}/purindex" style="text-decoration:none;">返回首页</a></li>
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
    <div class="ecs_1190_w ecs_rel top_menu_outer" id="template_menu">
        <div class="nav top_menu">
            <div class="top_categorys ecs_abs cssEdit" id="top_categorys">
                <div class="cssEdit" id="temp_searchECS360" dialog="840" type="productCate" del="no"
                     dialogname="366productCategory_t.htm" mainid="menu">
                    <div class="mt"><a href="#">全部商品分类</a></div>
                    <div class="mc" style="display: none;">
                    
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
                    </div><!--top_categorys mc-->
                    </div>
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
            </div><!--top_categorys-->
            <div class="menu">
                <ul class="clearfix">
						<li  ><a class="main"
							href="${pageContext.request.contextPath}/purindex" title="首页" target="_blank">首页</a></li>
						 
						<li><a class="main" href="${pageContext.request.contextPath}/settings.action"
							title="个人中心" target="_blank">个人中心</a></li>
						<li><a class="main" href="${pageContext.request.contextPath}/toMessage"
							title="客户留言" target="_blank">客户留言</a></li>
					</ul>
            </div><!--menu--></div><!--nav--></div>
</div>
<!--header end-->
<div class="ecs_1190_w ecs_full clearfix ecs_mgt10">
    <div class="clear"></div>
</div><!--topbanner end-->
<div class="ecs_1190_w clearfix page-prodlist">
    <div class="ecs_1190_w_right ecs_fr">
        <div class="cate_select">
            <div class="mt">商品列表</div><!--已选择目录HTML代码 选择单个目录有效-->
             
            <div class="catebox">
                <div class="cateboxbody clearfix">
                    <div class="catebox_title"><h2>商品分类：</h2></div>
                    <div class="catebox_t">
                       <ul> <li <c:if test="${goodsname2=='001a'}"> 
                         class="current"
                         </c:if>
                          ><a
                                    href="${pageContext.request.contextPath}/findgoods.action?goodsname=">全部</a></li>
                            
                       <c:forEach var="goodsType" items="${goodsTypeList}"> 
                          <li  
                            <c:if test="${goodsname==goodsType.goodsTypeName}">
                            class="current"
                            </c:if>
                            ><a
                                    href="${pageContext.request.contextPath}/findgoods.action?goodsname=${goodsType.goodsTypeName}">${goodsType.goodsTypeName}</a></li>
                             
                             </c:forEach>
                        </ul>
                    </div>
                </div><!--cateboxbody end---></div>
            <!--catebox end---></div><!--rightcatebox end-->
        <div class="b_product_sort sprite clearfix" id="temp_bf2be49f-068c-49b7-8b62-45d16f5e76fb">
            <div class="fliter ecs_fl">
                
                
                <div class="resultcount ecs_fr">总共找到<span>${findGoodsSize}</span>个商品</div>
            </div>
        </div><!--product_list_secondstyle 为行数据productlist_170-->
        
        <div class="m_productlist productlist_170 clearfix">
            <div class="ecs_1190_productlist productlist_210x210">
                <ul class="clearfix">
                <c:forEach var="goods" items="${goodsList}">
                    <li class="clearfix">
                        <div class="itemwarp">
                            <div class="pic"><!--商品图片HTML串-->
                                <table cellpadding="0" cellspacing="0">
                                    <tbody>
                                    <tr>
                                        <td><a href="${pageContext.request.contextPath}/goodsDetail?goodsId=${goods.goodsId}"
                                               title="${goods.title}" target="_blank" class="">

                                            <img class="lazy"
                                                 src="/goods/${goods.goodsPhoto}"
                                                 data-secondimg="/uploads/products/20170418/e62c8b00a6a14a99bead2c09c9063854.jpg_300x300.jpg">
                                        </a></td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="info">
                                <div class="infoin clearfix">
                                    <div class="name">
                                        <div class="shopn">电脑配件采购网</div>
                                        <!--商品名称HTML串-->
                                        <div><a href="${pageContext.request.contextPath}/goodsDetail?goodsId=${goods.goodsId}"
                                                title="${goods.title}" target="_blank">${goods.title}</a></div>
                                    </div>
                                    <div class="price clearfix"><!--商品价格HTML串-->
                                        <div class="price1 clearfix">
                                            <span class="pword">售价：</span><s class="yuan">¥</s><em>${goods.price}</em>
                                            <table style="display:inline-block;margin:0 0 -5px 4px;">
                                                <tbody>
                                                <tr></tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div class="price2 clearfix">
                                            <span class="pword">销售价：</span><s class="yuan">¥</s><em>${goods.price+10}</em>
                                        </div>
                                    </div><!--订购数量HTML 通过后台设置是否显示--><!--销售记录HTML 通过后台设置是否显示-->
                                    <div class="product_soldcount clearfix">
                                         <span> (0人评论)</span>
                                    </div><!--之前这个地方加了仅b2b使用，现取消，让b2c一样-->
                                    <div class="pl_button clearfix"><!--购买/搜藏/查看大图按钮--> 
                                        <a class="a_prview" title="购买"
                                           
                                           href="${pageContext.request.contextPath}/goodsDetail?goodsId=${goods.goodsId}">购买</a>
                                        
                                </div>
                                <div class="bottominfo">
                                    <div class="shopname dealer">${goods.goodsName}</div>
                                    <div class="option"><a class="fore1"
                                                           href="${pageContext.request.contextPath}/goodsDetail?goodsId=${goods.goodsId}">查看详情</a><a
                                            class="fore2" href="#"
                                             ></a></div>
                                </div>
                            </div>
                        </div>
                    </li>
                    
                  </c:forEach>   
                </ul>
            </div>
        </div>
        <br><br>
        <br>
        <!-- <span class="prev-disabled">上一页<b></b></span> -->
        <div class="pager_v4">
         <a href="${pageContext.request.contextPath}/findgoods.action?pageNo=${prev}&goodsname=${goodsname}"   class=" "
         >上一页<b></b></a>
          <c:forEach begin="1" var="i" end="${allPage}">
        <a href="${pageContext.request.contextPath}/findgoods.action?pageNo=${i}&goodsname=${goodsname}" 
              <c:if test="${pageNum==i}">
        class="current"
        </c:if>
        >${i}</a>
            </c:forEach>
            
            <a href="${pageContext.request.contextPath}/findgoods.action?pageNo=${next}&goodsname=${goodsname}" class="">下一页<b></b></a>
        </div><!--pagin end-->
        
        
        <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/gsfiles/gsfile1/Ecshop.Hint.css">
        <script type="text/javascript" src="${pageContext.request.contextPath}/gsfiles/gsfile1/Ecshop.Tool.js"></script>
        <link rel="stylesheet" href="${pageContext.request.contextPath}/gsfiles/gsfile1/custom.css">
        <script type="text/javascript" src="${pageContext.request.contextPath}/gsfiles/gsfile1/jquery.artDialog.js"></script>
        <script src="${pageContext.request.contextPath}/gsfiles/gsfile1/iframeTools.js"></script>
        <div class="m sale_m teambuy ecs_mgb10 clearfix" id="temp_1afed592a6d24dd2b6255cd2acbaeaab" dialog="840"
             type="r_hottembuy">
            <div class="mt ecs_rel"><s class="ecs_abs sprite"></s>
                <h2>已到底啦</h2>
                <div class="more"><a href="${pageContext.request.contextPath}/purindex" title="更多">回到首页&gt;&gt;</a></div>
            </div><!--mt end-->
        </div>
        <script type="text/javascript">$("#temp_1afed592a6d24dd2b6255cd2acbaeaab img.lazy").each(function () {
            if (typeof ($(this).attr("data-original")) != "undefined") {
                $(this).attr("src", $(this).attr("data-original"));
            }
        })</script>
    </div><!--content_left end-->
    <div class="ecs_1190_w_left ecs_fl">
        <!--elementID-->
  <div class="m cssEdit ecs_mgb10 clearfix" id="temp_b3f67565d0344508972806065d6432d0" dialog="840" type="img">
            <div class="mc delayload ecs-oh clearfix">
                <a href="javascript:void(0)" target="_blank">
                    <img src="${pageContext.request.contextPath}/gsfiles/gsfile1/TB1usakGXXXXXcbaXXXsoa8_VXX-240-360.jpg"
                         style="height: 360px">
                </a>
                <!--topslider end--></div><!--mc--></div>
        <div class="m hotrank ecs_mgb10 cssEdit" id="temp_6953ad8d99b344848b20f21187564143" dialog="840"
             type="hotbuy_rank">
            <div class="mt clearfix"><h2>热卖排行榜</h2></div><!--list_top end-->
            <div class="mc">
                <ul>
                
                 <c:forEach var="goods" items="${goodsList}" begin="1" end="7">
                    <li class="clearfix hover">
                        <div class="title clearfix"><s class="sprite">1</s><a
                                href="${pageContext.request.contextPath}/goodsDetail?goodsId=${goods.goodsId}">${goods.goodsName}</a>
                            <span>¥${goods.price}</span>
                        </div>
                        <div class="item clearfix">
                            <div class="pic"><img
                                    src="/goods/${goods.goodsPhoto}">
                                <table cellpadding="0" cellspacing="0">
                                    <tbody>
                                    <tr>
                                        <td></td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </li>
                     </c:forEach>
                </ul>
                <div class="clear"></div>
            </div><!--mc end--></div>
        <script type="text/javascript">_v30._hotRank($("#temp_6953ad8d99b344848b20f21187564143 ul li"), 200);</script>
        <!--m end-->
        <div class="m cssEdit ecs_mgb10 clearfix" id="temp_b3f67565d0344508972806065d6432d0" dialog="840" type="img">
            <div class="mc delayload ecs-oh clearfix">
                <a href="javascript:void(0)" target="_blank">
                    <img src="${pageContext.request.contextPath}/gsfiles/gsfile1/TB1usakGXXXXXcbaXXXsoa8_VXX-240-360.jpg"
                         style="height: 360px">
                </a>
                <!--topslider end--></div><!--mc--></div>
        <script type="text/javascript">function ddtemp_b3f67565d0344508972806065d6432d0() {
            $('#stemp_b3f67565d0344508972806065d6432d0').smallslider({
                onImageStop: true,
                switchEffect: 'ease',
                switchEase: 'easeOutBounce',
                switchPath: 'up',
                switchMode: 'hover',
                textSwitch: 2,
                textPosition: 'top',
                textAlign: 'center',
                showText: false
            });
        }
        setTimeout("ddtemp_b3f67565d0344508972806065d6432d0()", 2000);</script>
        <script type="text/javascript">$(".smallslider").css("background", "url(/images/Default2.gif) no-repeat 50% 50%");</script>
        <div class="m ecs_mgb10 cssEdit" id="temp_a9137998e6c54e5ca357d4fab4f85155" dialog="840" type="historyPro">
            <div class="mt"><h2>已浏览过的商品</h2></div><!--mt end-->
            <div class="mc history ">
                <div class="color_orange" style="text-align: center; height: 80px;line-height:80px;">暂时没有历史浏览记录</div>
            </div>
        </div>
    </div>
</div>
 
<!--对比栏end--><!--ecs_1190_w end-->
<div class="footer_service">
    <div class="ecs_1190_w">
        <div class="footer_service_box clearfix">
             
        </div><!--footer_service_box--></div><!--w--></div>
<div class="bottom ecs_1190_w">
     		<!--flink-->
		<div class="bottom_info ecs_mgb10 cssEdit" id="bottom_info_div"
			isedit="true" dialog="640" type="help">
			 <div style="text-align: center;">
			<a href="#"> 电脑配件采购网</a>
			
			 </div>
			 
			<div>本站的顾客个人信息将决不会泄漏给其他任何机构和个人&nbsp;</div>
			<p>有任何购物问题请联系我们在线客服 | 电话：15625584773（微信）
				 | 工作时间：周一至周五 8:00－18:00</p>
			<p>
				 
					 
					  谢谢您的支持，你们的支持是我们最大的动力!
			</p>
			<p>
				<br>
			</p>
			
			 
		</div>
</div><!--bottom-->
<link href="${pageContext.request.contextPath}/gsfiles/gsfile1/ecs_os_v1.css" rel="stylesheet" type="text/css">
 
<span style="display:"></span><span style="display:none"><script src="${pageContext.request.contextPath}/gsfiles/gsfile1/z_stat.php"
                                                                 language="JavaScript"></script><script
        src="${pageContext.request.contextPath}/gsfiles/gsfile1/core.php" charset="utf-8" type="text/javascript"></script><a
        href="https://www.cnzz.com/stat/website.php?web_id=1275154176" target="_blank" title="站长统计">站长统计</a></span>
<script src="${pageContext.request.contextPath}/gsfiles/gsfile1/Jquery.Validate.js" type="text/javascript"></script>
<link href="${pageContext.request.contextPath}/gsfiles/gsfile1/tipstyle.css" rel="stylesheet" type="text/css">

<!--footer end-->


<a href="javascript:;" id="backtotop" class="backtop" style="display: inline;">回顶部</a>
<style type="text/css">.order_prod {
}

.order_prod h2 {
    font-size: 16px;
    color: #000;
    line-height: 22px;
    margin-top: 10px;
}

.order_prod .unit-price {
    padding: 10px 0;
}

.order_prod .price {
    color: #818181;
    font-size: 12px;
    float: left;
}

.order_prod .price b {
    font-size: 24px;
    color: #ff2900
}

.order_prod .unit {
    color: #2676c7;
    font-size: 12px;
    margin-top: 7px;
    float: right;
}

.order_prod .order_prod_list {
    font-size: 12px;
}

.order_prod .order_prod_list {
    max-height: 300px;
    overflow: auto;
    overflow-x: hidden;
}

.order_prod .order_prod_list table {
    border-collapse: collapse;
    width: 100%;
}

.order_prod .order_prod_list th {
    color: #000;
    font-size: 12px;
    font-weight: normal;
    padding: 5px 5px;
    text-align: center;
    background: #e5eff8;
}

.order_prod .order_prod_list td {
    font-size: 12px;
    padding: 6px 5px;
    color: #666;
    border-bottom: 1px solid #ccc;
    text-align: center;
}

.order_prod .order_prod_list td.units input {
    width: 50px;
    height: 20px;
    line-height: 20px;
    border: 1px solid #ccc;
}

.order_prod .order_prod_list td.units a {
    color: #999;
    padding: 0 5px;
    position: relative;
    text-decoration: none;
}

.order_prod .order_prod_list td.units a s {
    position: absolute;
    font-size: 0px;
    height: 0px;
    width: 0px;
    border-style: solid dashed dashed dashed;
    border-color: #999 transparent transparent transparent;
    border-width: 3px;
    right: -2px;
    top: 3px;
}

.order-btn {
    text-align: center;
}

.order-btn a.prodinfo-btn {
    margin: 20px 10px 0px 0px;
    cursor: pointer;
    color: #fff;
    height: 36px;
    line-height: 36px;
    font-size: 16px;
    text-decoration: none;
    float: none;
    display: inline-block;
}

ordertotal {
    padding: 5px;
    background: #fffae6;
    color: #666;
    font-size: 14px;
    border: 1px solid #f9e4be;
    margin-top: 10px;
    text-align: right
}

.ordertotal b {
    font-size: 18px;
    color: #ee6303;
}

.popfor_prodlist_window {
    min-width: 650px;
    position: absolute;
    left: 200px;
    top: 100px;
    border: 1px solid #ccc;
    background: #fff;
    z-index: 1000;
    padding: 20px;
    box-shadow: 0 0 10px #ccc;
}

.pop_close {
    font-size: 14px;
    position: absolute;
    right: 10px;
    top: 10px;
    color: #d6d6d6;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    cursor: pointer;
}

.units_num {
    border: 1px solid #ccc;
    width: 3em;
    height: 20px;
    line-height: 20px;
    text-align: center;
    margin-bottom: 1px;
}

.popfor_prodlist_window a.opt-btn {
    display: inline-block;
    height: 20px;
    line-height: 18px;
    width: 15px;
    text-align: center;
    background: #ddd;
    border: 1px solid #ccc;
    text-decoration: none;
}

a.opt-btn:hover {
    background: #f58f2c;
    color: #fff;
    border-color: #f58f2c;
}</style>
<div style="display: none; position: fixed; left: 0px; top: 0px; width: 100%; height: 100%; cursor: move; opacity: 0; background: rgb(255, 255, 255);"></div>
<div id="ecs_os" class="ecs_os  os_style_skyblue" style="position: absolute; right: 10px; top: 320px; display: none;">
    <div class="ecs_os_header">
        <div class="ecs_os_header_t"><a href="javascript:;" id="ecs_os_tclose" class="ecs_os_tclose close"
                                        title="关闭">关闭</a></div>
        <div class="online_time"><h3>在线时间</h3>
            <div class="oday"><span class="oday_from">周一</span>至<span class="oday_to">周六</span></div>
            <div class="otime"><span class="otime_from">8：20</span>-<span class="otime_to">17:50</span></div>
        </div>
    </div>
    <div class="ecs_os_body">
        <div class="chat">
            <div class="chat_t">QQ在线客服</div>
            <ul>
                <li><a target="_self"
                       href="tencent://message/?uin=3342099276&amp;Site=%E4%BB%BB%E6%88%91%E8%A1%8C&amp;Menu=yes"><img
                        class="qqno" border="0" src="${pageContext.request.contextPath}/gsfiles/gsfile1/qqonline.png" alt="Q我"
                        align="absmiddle"><span>区域代理咨询</span></a></li>
                <li><a target="_self"
                       href="tencent://message/?uin=3503410199&amp;Site=%E4%BB%BB%E6%88%91%E8%A1%8C&amp;Menu=yes"><img
                        class="qqno" border="0" src="${pageContext.request.contextPath}/gsfiles/gsfile1/qqonline.png" alt="Q我"
                        align="absmiddle"><span>零售商系统</span></a></li>
                <li><a target="_self"
                       href="tencent://message/?uin=2817333633&amp;Site=%E4%BB%BB%E6%88%91%E8%A1%8C&amp;Menu=yes"><img
                        class="qqno" border="0" src="${pageContext.request.contextPath}/gsfiles/gsfile1/qqonline.png" alt="Q我"
                        align="absmiddle"><span>供货商系统</span></a></li>
                <li><a target="_self"
                       href="tencent://message/?uin=781936120&amp;Site=%E4%BB%BB%E6%88%91%E8%A1%8C&amp;Menu=yes"><img
                        class="qqno" border="0" src="${pageContext.request.contextPath}/gsfiles/gsfile1/qqonline.png" alt="Q我"
                        align="absmiddle"><span>投诉</span></a></li>
            </ul>
        </div>
    </div>
    <div class="ecs_os_footer">
        <div class="footer_hotline"><span>0851-25628841</span></div>
        <div class="footer_close ecs_os_bclose">关闭在线客服</div>
    </div>
</div>
<div title="点击弹出在线客服" id="ecs_os_tingkao" class="ecs_os_tingkao ecs_os_style_skyblue_tk"
     style="position: absolute; right: 10px; top: 320px; display: block;"></div>
</body>
</html>