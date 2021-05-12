<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib prefix="shiro" uri="http://shiro.apache.org/tags" %>
<%@taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
	<head>
		<meta charset="UTF-8">
		<meta name="renderer" content="webkit">
  		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
		<meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
		<title>网站后台管理模版</title>
		<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/static/admin/layui/css/layui.css"/>
		<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/static/admin/css/admin.css"/>
	</head>
	<body>
		<div class="wrap-container welcome-container">
			<div class="row">
				<div class="welcome-left-container col-lg-9">
					<div class="data-show">
						<ul class="clearfix">
							<li class="col-sm-12 col-md-4 col-xs-12">
								<a href="javascript:;" class="clearfix">
									<div class="icon-bg bg-org f-l">
										<span class="iconfont">&#xe606;</span>
									</div>
									<div class="right-text-con">
										<p class="name">客户数</p>
										<p><span class="color-org">${customSize}</span>数据
										    <c:if test="${usersAdd>0}">
										    <span class="iconfont">&#xe628;</span>
										    </c:if>
										    <c:if test="${usersAdd==0}">
										    <span class="iconfont">-</span>
										    </c:if>
										</p>
									</div>
								</a>
							</li>
							<li class="col-sm-12 col-md-4 col-xs-12">
								<a href="javascript:;" class="clearfix">
									<div class="icon-bg bg-blue f-l">
										<span class="iconfont">&#xe602;</span>
									</div>
									<div class="right-text-con">
										<p class="name">管理员数</p>
										<p><span class="color-blue">${adminSize} </p>
									</div>
								</a>
							</li>
							<li class="col-sm-12 col-md-4 col-xs-12">
								<a href="javascript:;" class="clearfix">
									<div class="icon-bg bg-green f-l">
										<span class="iconfont">&#xe605;</span>
									</div>
									<div class="right-text-con">
										<p class="name">留言数</p>
										<p><span class="color-green">${userMessageSize}</span>数据<span class="iconfont">&#xe628;</span></p>
										<!-- &#xe60f; -->
									</div>
								</a>
							</li>
						</ul>
					</div>
					<!--图表-->
					<div class="chart-panel panel panel-default">
						<div class="panel-body" id="chart" style="height: 376px;">
						</div>
					</div>
					<!--服务器信息-->
					 
				</div>
				<div class="welcome-edge col-lg-3">
					<!--最新留言-->
					<div class="panel panel-default comment-panel">
						<div class="panel-header">最新留言</div>
						<div class="panel-body">
							<div class="commentbox">
								<ul class="commentList">
								  <c:forEach var="userMessage" items="${userMessageList}" begin="0" end="4" varStatus="vs">
								  <li class="item cl"> <a href="#"><i class="avatar size-L radius"><img alt="" src="/userImg/${userMessage.user.userPhoto}"></i></a>
								    <div class="comment-main">
								      <header class="comment-header">
								        <div class="comment-meta"><a class="comment-author" href="#">${userMessage.user.name}</a> 评论于
								          <time ><fmt:formatDate value="${userMessage.time}" pattern="yyyy-MM-dd HH:mm:ss"/></time>
								        </div>
								      </header>
								      <div class="comment-body">
								        <p> ${userMessage.userMessageInformation}</p>
								      </div>
								    </div>
								  </li>
								  </c:forEach>  
								</ul>
							</div>
							<div id="pagesbox" style="text-align: center;padding-top: 5px;">
								
							</div>
						</div>
					</div>
					<!--联系-->
					<div class="panel panel-default contact-panel">
						<div class="panel-header">联系方式</div>
						<div class="panel-body">
							<p>QQ：584063792</p>
							<p>E-mail:584063792@qq.com</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		<script src="${pageContext.request.contextPath}/static/admin/layui/layui.js" type="text/javascript" charset="utf-8"></script>
		<script src="${pageContext.request.contextPath}/static/admin/lib/echarts/echarts.js"></script>
		<script type="text/javascript">
		var day1order=${ordersNumList[0]};
		var day2order=${ordersNumList[1]};
		var day3order=${ordersNumList[2]};
		var day4order=${ordersNumList[3]};
		var day5order=${ordersNumList[4]};
		var day6order=${ordersNumList[5]};
		var day7order=${ordersNumList[6]};
		
		var day1user=${usersNumList[0]};
		var day2user=${usersNumList[1]};
		var day3user=${usersNumList[2]};
		var day4user=${usersNumList[3]};
		var day5user=${usersNumList[4]};
		var day6user=${usersNumList[5]};
		var day7user=${usersNumList[6]};
		
		var day1userMessage=${userMessageNumList[0]};
		var day2userMessage=${userMessageNumList[1]};
		var day3userMessage=${userMessageNumList[2]};
		var day4userMessage=${userMessageNumList[3]};
		var day5userMessage=${userMessageNumList[4]};
		var day6userMessage=${userMessageNumList[5]};
		var day7userMessage=${userMessageNumList[6]};
		 
			layui.use(['layer','jquery'], function(){
				var layer 	= layui.layer;
				var $=layui.jquery;
				//图表
				var myChart;
				require.config({
				    paths: {
				        echarts: '${pageContext.request.contextPath}/static/admin/lib/echarts'
				    }
				});
				require(
				    [
				        'echarts',
				        'echarts/chart/bar',
				        'echarts/chart/line',
				        'echarts/chart/map'
				    ],
				    function (ec) {
				        //--- 折柱 ---
				        myChart = ec.init(document.getElementById('chart'));
				        myChart.setOption(
				        	{
						     title: {
						        text: "数据统计",
						        textStyle: {
						            color: "rgb(85, 85, 85)",
						            fontSize: 18,
						            fontStyle: "normal",
						            fontWeight: "normal"
						        }
						    },
						    tooltip: {
						        trigger: "axis"
						    },
						    legend: {
						        data: ["订单", "新增客户", "留言"],
						        selectedMode: false,
						    },
						    toolbox: {
						        show: true,
						        feature: {
						            dataView: {
						                show: false,
						                readOnly: true
						            },
						            magicType: {
						                show: false,
						                type: ["line", "bar", "stack", "tiled"]
						            },
						            restore: {
						                show: true
						            },
						            saveAsImage: {
						                show: true
						            },
						            mark: {
						                show: false
						            }
						        }
						    },
						    calculable: false,
						    xAxis: [
						        {
						            type: "category",
						            boundaryGap: false,
						            data: ["前7天", "前6天", "前5天", "前4天", "前3天", "前2天", "前1天"]
						        }
						    ],
						    yAxis: [
						        {
						            type: "value"
						        }
						    ],
						     grid: {
						        x2: 30,
						        x: 50
						    },
						    series: [
						        {
						            name: "订单",
						            type: "line",
						            smooth: true,
						            itemStyle: {
						                normal: {
						                    areaStyle: {
						                        type: "default"
						                    }
						                }
						            },
						            data: [day1order, day2order, day3order, day4order, day5order, day6order, day7order]
						        },
						        {
						            name: "新增客户",
						            type: "line",
						            smooth: true,
						            itemStyle: {
						                normal: {
						                    areaStyle: {
						                        type: "default"
						                    }
						                }
						            },
						            data: [day1user, day2user, day3user, day4user, day5user, day6user, day7user]
						        },
						        {
						            name: "留言",
						            type: "line",
						            smooth: true,
						            itemStyle: {
						                normal: {
						                    areaStyle: {
						                        type: "default"
						                    },
						                    color: "rgb(110, 211, 199)"
						                }
						            },
						            data:  [day1userMessage, day2userMessage, day3userMessage, day4userMessage, day5userMessage, day6userMessage, day7userMessage]
						        }
			]
}
);
}
);
$(window).resize(function(){
myChart.resize();
})
});
</script>
</body>
</html>