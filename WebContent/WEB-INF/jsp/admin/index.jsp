<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<%@ taglib prefix="shiro" uri="http://shiro.apache.org/tags" %>
  <%--   <jsp:forward page="/WEB-INF/jsp/user/login.jsp"/> --%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta charset="UTF-8">
		<meta name="renderer" content="webkit">
  		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
		<meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
		<title>电脑配件供应链管理系统</title>
 <script type="text/javascript"
	src="${pageContext.request.contextPath}/esayUI/eui/jquery.min.js"></script>
		<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/static/admin/layui/css/modules/myicon/iconfont.css"/>
		<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/static/admin/layui/css/layui.css"/>
		<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/static/admin/css/admin.css"/>
		<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/static/admin/layui/font/iconfont.css"/>
		<script src="${pageContext.request.contextPath}/static/admin/layui/font/iconfont.js" type="text/javascript" charset="utf-8"></script>
		<script src="${pageContext.request.contextPath}/static/admin/layui/layui.js" type="text/javascript" charset="utf-8"></script>
	<script type="text/javascript">
	      $(function(){
	    	  
	    	    
	    	  $("#tongzhiA").click(function(){
	    		  $("#tongzhi").html("");
	    	  });
	      });
	
	
	</script>	
<style type="text/css">
 
<style>
 
.layui-nav-tree .layui-nav-item {
 display: block;
	width: 100%;
	line-height: 45px 
} 
  .layui-nav-tree .layui-nav-item a:hover {
	  /*  background-color: #555555   */ 
}  
.layui-nav .layui-nav-item #span1 {
	display: block;
	padding: 0 20px;
	 
  	color: #c2c2c2;  
	transition: all .3s;
	-webkit-transition: all .3s
}
.layui-nav .layui-nav-item a {
    text-decoration:none 
}

</style>


</head>

<body>

		<div class="main-layout" id='main-layout'>
			<!--侧边栏-->
			<div class="main-layout-side">
				<div class="m-logo">
				</div>
				
				<ul class="layui-nav layui-nav-tree" lay-filter="leftNav">
				 <shiro:hasPermission name="role:purchaseListmeue">
				    
				  <li class="layui-nav-item">
				    <a href="javascript:;"   ><i class="iconfont icon-caigou"></i>采购管理</a>
				      <dl class="layui-nav-child">
				      
				        <dd><a href="javascript:;" data-url="${pageContext.request.contextPath}/purchaseAdd" data-id='采购' data-text="采购"><span class="l-line"></span>采购</a></dd>  
				     
				      <dd><a href="javascript:;" data-url="${pageContext.request.contextPath}/purchaseList" data-id='采购信息' data-text="采购信息"><span class="l-line"></span>采购信息</a></dd>
				     
				     <shiro:hasPermission name="role:purchasePending">
				      <dd><a href="javascript:;" data-url="${pageContext.request.contextPath}/purchasePending" data-id='采购审核' data-text="采购审核"><span class="l-line"></span>采购审核</a></dd>
				      </shiro:hasPermission>
				    </dl>  
				  </li>
				  </shiro:hasPermission>
				
				  <shiro:hasPermission name="role:supplier">
				  <li class="layui-nav-item layui-nav-itemed">
				    <a href="javascript:;" data-url="${pageContext.request.contextPath}/supplier?pageNo=1" data-id='供应商管理' data-text="供应商管理"><i class="iconfont">&#xe623;</i>供应商管理</a>
				    
				  </li>
				   </shiro:hasPermission>
				   <shiro:hasPermission name="role:goodsList">
				  <li class="layui-nav-item">
				    <a href="javascript:;"  data-url="${pageContext.request.contextPath}/goodsList?pageNo=1" data-id='查看所有商品' data-text="商品管理"><i class="iconfont icon-shangpin"></i>商品管理</a>
				    
				  </li>
				   </shiro:hasPermission>
				  
				  <shiro:hasPermission name="role:ordersMeue">
				  
				 
				  <li class="layui-nav-item">
				    <a href="javascript:; " ><i class="iconfont icon-order_icon"></i>订单管理</a>
				     <dl class="layui-nav-child">
				     <shiro:hasPermission name="role:ordersPending">
				      <dd><a href="javascript:;" data-url="${pageContext.request.contextPath}/ordersPending" data-id='待处理订单' data-text="待处理订单"><span class="l-line"></span>待处理订单</a></dd>
				      </shiro:hasPermission>
				      <shiro:hasPermission name="role:ordersList">
				        <dd><a href="javascript:;" data-url="${pageContext.request.contextPath}/ordersList" data-id='订单信息' data-text="订单信息"><span class="l-line"></span>订单信息</a></dd>  
				        </shiro:hasPermission>
				    </dl> 
				  </li>
				  </shiro:hasPermission>
				  <shiro:hasPermission name="role:warehouseMeue">
				  <li class="layui-nav-item">
				    <a href="javascript:;" ><i class="iconfont icon-cangku"></i>仓库管理</a>
				    <dl class="layui-nav-child">
				    
				  <shiro:hasPermission name="role:warehouseList">
				   <dd><a href="javascript:;" data-url="${pageContext.request.contextPath}/warehouseList" data-id='仓库信息' data-text="仓库信息"><span class="l-line"></span>仓库信息</a></dd>
				   </shiro:hasPermission>
				  <shiro:hasPermission name="role:warehouseAllot">
				        <dd><a href="javascript:;" data-url="${pageContext.request.contextPath}/warehouseAllot" data-id='仓库调拨' data-text="仓库调拨"><span class="l-line"></span>仓库调拨</a></dd>  
					</shiro:hasPermission>				        
				  <shiro:hasPermission name="role:warehouseAllot">
				        <dd><a href="javascript:;" data-url="${pageContext.request.contextPath}/warehouseOtList" data-id='调拨信息' data-text="调拨信息"><span class="l-line"></span>调拨信息</a></dd>  
				</shiro:hasPermission>				        
				  <shiro:hasPermission name="role:warehouseAllot">
				        <dd><a href="javascript:;" data-url="${pageContext.request.contextPath}/warehouseOtNotice" data-id='调拨请求' data-text="调拨请求"><span class="l-line"></span>调拨请求</a></dd>  
				</shiro:hasPermission>				        
				    </dl> 
				  </li>
				 </shiro:hasPermission>
				 <shiro:hasPermission name="role:logMeue">
				 
				 
				  <li class="layui-nav-item">
				    <a href="javascript:;"  ><i class="iconfont icon-wuliu"></i>物流管理</a>
				     <dl class="layui-nav-child">
				       <shiro:hasPermission name="role:logisticsList">
				      <dd><a href="javascript:;" data-url="${pageContext.request.contextPath}/logisticsList" data-id='物流信息' data-text="物流信息"><span class="l-line"></span>物流信息</a></dd>
				      </shiro:hasPermission>
 
				        <dd><a href="javascript:;" data-url="${pageContext.request.contextPath}/logisticsInformationAna" data-id='物流模拟' data-text="物流模拟"><span class="l-line"></span>物流模拟</a></dd>  
				    </dl> 
				  </li>
				  </shiro:hasPermission>
				  <shiro:hasPermission name="role:UsersMeue">
				  <li class="layui-nav-item">
				    <a href="javascript:;" data-url="${pageContext.request.contextPath}/usersList" data-id='客户信息' data-text="客户信息"><i class="iconfont">&#xe606;</i>客户信息</a>
				  </li>
				  </shiro:hasPermission>
				  <shiro:hasPermission name="role:permissionsMeue">
				  
				  <li class="layui-nav-item">
				   <a href="javascript:;"  ><i class="iconfont">&#xe60a;</i>系统管理</a>
				    <dl class="layui-nav-child">
				  	<dd><a href="javascript:;" data-url="${pageContext.request.contextPath}/permissionsList" data-id='权限管理' data-text="权限管理"><span class="l-line"></span>权限管理</a></dd>
				  	<dd><a href="javascript:;" data-url="${pageContext.request.contextPath}/adminAdd" data-id='添加管理员' data-text="添加管理员"><span class="l-line"></span>添加管理员</a></dd>
				  	</dl>
				  </li>
				  
				  </shiro:hasPermission>
				</ul>
			</div>
			<!--右侧内容-->
			<div class="main-layout-container">
				<!--头部-->
				<div class="main-layout-header">
					<div class="menu-btn" id="hideBtn">
						<a href="javascript:;">
							<span class="iconfont">&#xe60e;</span>
							
						</a>
						
					</div>
					 
					<ul class="layui-nav" lay-filter="rightNav">
					<shiro:hasPermission name="role:warehouseAllot">
				
					 <li class="layui-nav-item"> <a href="javascript:;" data-url="${pageContext.request.contextPath}/warehouseOtNotice" data-id='4' data-text="调拨请求" id="tongzhiA"><i class="iconfont">&#xe603;</i> 
					 <span id="tongzhi" style="color:red;">${noticeNum}</span>
					 </a></li>
					 </shiro:hasPermission>
					  <li class="layui-nav-item"><a href="javascript:;" data-url="${pageContext.request.contextPath}/updatePsw" data-id='4' data-text="修改密码"><i class="iconfont">&#xe60b;</i></a></li>
					  <li class="layui-nav-item">
					    <li class="layui-nav-item"><span id="span1">欢迎&nbsp;${myuser.username}&nbsp;管理员</span></li>
					  </li>

					  <li class="layui-nav-item"><a href="${pageContext.request.contextPath}/logout"  >注销</a></li>
					
					</ul>
				</div>
				<!--主体内容-->
				<div class="main-layout-body">
				
					<!--tab 切换-->
					<div class="layui-tab layui-tab-brief main-layout-tab" lay-filter="tab" lay-allowClose="true">
					   
						 
					      
					    
					  
					  <ul class="layui-tab-title">
					     
					    <li class="layui-this welcome">后台主页</li>
					  </ul>
					  <div class="layui-tab-content">
					    <div class="layui-tab-item layui-show" style="background: #f5f5f5;">
					    	<!--1-->
					    	<iframe src="${pageContext.request.contextPath}/welcome" width="100%" height="100%" name="iframe" scrolling="auto" class="iframe" framborder="0"></iframe>
					    	<!--1end-->
					    </div> 
					  </div>
					</div>
				</div>
			</div>
			<!--遮罩-->
			<div class="main-mask">
				
			</div>
		</div>
		<script type="text/javascript">
			var scope={
				link:'${pageContext.request.contextPath}/supplier?pageNo=1'
			}
		</script>
	
		
		
	</body>
	<script type="text/javascript">
	layui.config({
		base: '${pageContext.request.contextPath}/static/admin/js/module/'
	}).extend({
		dialog: 'dialog',
	});
	</script>
		<script src="${pageContext.request.contextPath}/static/admin/js/common.js" type="text/javascript" charset="utf-8"></script>
		<script src="${pageContext.request.contextPath}/static/admin/js/main.js" type="text/javascript" charset="utf-8"></script>
</html>