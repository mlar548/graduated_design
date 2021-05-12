<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
  <%--   <jsp:forward page="/WEB-INF/jsp/user/login.jsp"/> --%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>电脑配件供应链管理系统</title>
    <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/esayUI/eui/themes/default/easyui.css">
    <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/esayUI/eui/themes/icon.css">
    <link href="${pageContext.request.contextPath}/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/css/mycss.css">
    <script type="text/javascript" src="${pageContext.request.contextPath}/esayUI/eui/jquery.min.js"></script>
    <script src="${pageContext.request.contextPath}/dist/js/bootstrap.js"></script>
    <script type="text/javascript" src="${pageContext.request.contextPath}/esayUI/eui/jquery.easyui.min.js"></script>
</head>

<body class="easyui-layout">
<div data-options="region:'north'" style="height: 50px">


    <!--导航栏-->
    <nav class="navbar navbar-default navbar-fixed-top navbar-inverse">

        <div class="container ">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header">
               
                <a class="navbar-brand" href="#" id="indextitle">电脑配件供应链管理系统</a>
            </div>

            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav">
                    <li class="active"><a href="#">配置<span class="sr-only">(current)</span></a></li>
                    <!--<li><a href="#">Link</a></li>-->
                    <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                           aria-expanded="false">选择 <span class="caret"></span></a>
                        <ul class="dropdown-menu">
                            <li><a href="#">选择</a></li>
                            <li><a href="#"> 选择</a></li>
                            <li><a href="#">选择</a></li>
                            <li role="separator" class="divider"></li>
                            <li><a href="#">选择 link</a></li>
                            <li role="separator" class="divider"></li>
                            <li><a href="#">选择</a></li>
                        </ul>
                    </li>
                </ul>
                <!--<form class="navbar-form navbar-left">-->
                    <!--<div class="form-group">-->
                        <!--<input type="text" class="form-control" placeholder="Search">-->
                    <!--</div>-->
                    <!--<button type="submit" class="btn btn-default">Submit</button>-->
                <!--</form>-->
                <ul class="nav navbar-nav navbar-right">
                    <li><a href="#">注销</a></li>
                    <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown"
                           role="button" aria-haspopup="true"
                           aria-expanded="false">设置 <span class="caret"></span></a>
                        <ul class="dropdown-menu">
                            <li><a href="#">设置1</a></li>
                            <li><a href="#">设置2</a></li>
                            <li><a href="#">设置3</a></li>
                            <li role="separator" class="divider"></li>
                            <li><a href="#">设置4</a></li>
                        </ul>
                    </li>
                </ul>
            </div><!-- /.navbar-collapse -->
        </div><!-- /.container-fluid -->
    </nav>


</div>
<!--<div data-options="region:'south'" style="height: 30px">南部分</div>-->
<div data-options="region:'west',collapsible:false" class="westbackgroundcolor" style="width: 230px"
     >
    <!--fit:true:填充整个父控件-->
    <div class="easyui-accordion westbackgroundcolor"   data-options="fit:true">
        <div class="westbackgroundcolor" id="divwest" title="供应商管理  "   data-options="iconCls:'icon-add',border:false" style="width:200px">
            <button class="west-1 btn btn-danger" id="insert" style="width:170px">添加供应商</button>
            <button class="west-1 btn btn-danger" id="update" style="width:170px">修改供应商信息</button>
            <button class="west-1 btn btn-danger" id="delete" style="width:170px">删除供应商</button>
        </div>
        <div class="westbackgroundcolor" title="商品管理" data-options="iconCls:'icon-edit'">
            <button class="west-1 btn btn-danger" id="insert2" style="width:170px">商品</button>
            <button class="west-1 btn btn-danger" id="update2" style="width:170px">修改商品</button>
            <button class="west-1 btn btn-danger" id="delete2" style="width:170px">删除商品</button>
        </div>
        <div class="westbackgroundcolor" title="采购管理" data-options="iconCls:'icon-search'">
            <button class="west-1 btn btn-danger" id="insert3" style="width:170px">添加内容</button>
            <button class="west-1 btn btn-danger" id="update3" style="width:170px">修改内容</button>
            <button class="west-1 btn btn-danger" id="delete3" style="width:170px">删除内容</button></div>

        <div class="westbackgroundcolor" title="订单管理" data-options="iconCls:'icon-remove'">
            <button class="west-1 btn btn-danger" id="insert4" style="width:170px">查询</button>
            <button class="west-1 btn btn-danger" id="update4" style="width:170px">修改内容</button>
            <button class="west-1 btn btn-danger" id="delete4" style="width:170px">删除内容</button></div>

        <div class="westbackgroundcolor" title="仓库管理" data-options="iconCls:'icon-search'">
            仓库管理</div>
        <div class="westbackgroundcolor" title="权限管理" data-options="iconCls:'icon-search'">
            <button class="west-1 btn btn-danger" id="insert6" style="width:170px">角色权限</button>
            <button class="west-1 btn btn-danger" id="update6" style="width:170px">用户管理</button>
           </div>

    </div>

</div>
<!--<div data-options="region:'east'" style="width: 100px" title="关于软件">东部分</div>-->

<div data-options="region:'center' " style="background-color:#ffffff" >
    <div class="easyui-tabs" id="mytab">
        <div title="添加供应商" data-options="iconCls:'icon-edit',closable:true"><iframe src='${pageContext.request.contextPath}/supplier' style='width: 100%;height:500px'></iframe></div>

    </div>

</div>




<%-- 
  <a href="${pageContext.request.contextPath}/user/login">登录</a>  
  <a href="${pageContext.request.contextPath}/user/register">注册</a>
  <a href="${pageContext.request.contextPath}/user/findTrade">查询订单</a>
  <a href="${pageContext.request.contextPath}/user/updateUser">修改个人信息</a>
  <a href="${pageContext.request.contextPath}/user/address/address">管理我的收货地址</a> 
   --%>
</body>
<script>
    $(document).ready(function () {
        $("#insert").click(function () {

            var res = $("#mytab").tabs("exists", "添加供应商");
            if (res) {
                $("#mytab").tabs("select", "添加供应商");
            } else {
                $("#mytab").tabs("add", {
                    "title": "添加供应商",
                    "iconCls": "icon-edit",
                    "closable": "true",
                    "content": "<iframe src='${pageContext.request.contextPath}/supplier' style='width: 100%;height:500px'></iframe>"
                });
            }
        });
        $("#update").click(function () {
            var res = $("#mytab").tabs("exists", "修改供应商信息");
            if (res) {
                $("#mytab").tabs("select", "修改供应商信息");
            } else {
                $("#mytab").tabs("add", {
                    "title": "修改供应商信息",
                    "iconCls": "icon-edit",
                    "closable": "true"
                });
            }
        });
        $("#delete").click(function () {
            var res = $("#mytab").tabs("exists", "删除供应商");
            if (res) {
                $("#mytab").tabs("select", "删除供应商");
            } else {
                $("#mytab").tabs("add", {
                    "title": "删除供应商",
                    "iconCls": "icon-edit",
                    "closable": "true"

                });
            }
        });
    })

</script>
</html>