<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib prefix="shiro" uri="http://shiro.apache.org/tags" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
   
    <meta name="generator" content="366EC">
    <title>${goods.goodsName}</title>
    

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
    <link href="${pageContext.request.contextPath}/gsfiles/gsfile2/public_r.min.css" rel="stylesheet" type="text/css">
    <link href="${pageContext.request.contextPath}/gsfiles/gsfile2/index.min.css" type="text/css" rel="stylesheet">

    <link href="${pageContext.request.contextPath}/gsfiles/gsfile2/jqzoom.min.css" type="text/css" rel="stylesheet">
    <link href="${pageContext.request.contextPath}/gsfiles/gsfile2/smallslider.min.css" rel="stylesheet" type="text/css">
    <script src="${pageContext.request.contextPath}/gsfiles/gsfile2/jquery-public.min.js" type="text/javascript"></script>
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <script type="text/javascript" src="${pageContext.request.contextPath}/gsfiles/gsfile2/api"></script>
    <script type="text/javascript" src="${pageContext.request.contextPath}/gsfiles/gsfile2/getscript"></script>
    <script type="text/javascript" src="${pageContext.request.contextPath}/gsfiles/gsfile2/must_template.js"></script>
    <link href="${pageContext.request.contextPath}/gsfiles/gsfile2/Ecshop.Hint.min.css" rel="stylesheet">
    <!--[if (gte IE 6)&(lte IE 8)]>
    <script type='text/javascript' src='/common_script/selectivizr-min.js'></script>
    <![endif]-->
    <script type="text/javascript">
        var __global_Order_Goods_Qty_Must_Int = 0;
        var __golobal_img_server = '';
    </script>
    <script type="text/javascript" src="${pageContext.request.contextPath}/gsfiles/gsfile2/img_server_handle.js"></script>

    <script src="${pageContext.request.contextPath}/gsfiles/gsfile2/jquery.smallslider.min.js" type="text/javascript"></script>
    <script src="${pageContext.request.contextPath}/gsfiles/gsfile2/jquery.scrollLoading.min.js" type="text/javascript"></script>
    <script src="${pageContext.request.contextPath}/gsfiles/gsfile2/main.min.js"></script>
    <script src="${pageContext.request.contextPath}/gsfiles/gsfile2/jqzoom.pack.1.0.1.min.js" type="text/javascript"></script>
    <script src="${pageContext.request.contextPath}/gsfiles/gsfile2/ProductPage.min.js" type="text/javascript"></script>
    <script src="${pageContext.request.contextPath}/gsfiles/gsfile2/jquery.pagination.js" type="text/javascript"></script>
    <script src="${pageContext.request.contextPath}/gsfiles/gsfile2/buytab.js" type="text/javascript"></script>
    <script src="${pageContext.request.contextPath}/gsfiles/gsfile2/jquery.lazyload.min.js" type="text/javascript"></script>
    <script src="${pageContext.request.contextPath}/gsfiles/gsfile2/productvideo.min.js" type="text/javascript"></script>
    <style type="text/css">
        .delayload {
            background: url(/images/Default.gif) no-repeat 50% 50%;
        }
    </style>
    <script src="${pageContext.request.contextPath}/gsfiles/gsfile2/share.js"></script>
    <script src="${pageContext.request.contextPath}/gsfiles/gsfile2/share.js"></script>
    <script type="text/javascript">
    $(function(){
    
       	 $('#gwc').click(function(){
       		
	      		var url= "addshop.action";
	      		 
		      		var params = {
		      				 goodsId:$('#goodsId').val(),
		      				goodsnum:$('#goodsnum').val()
	      		};
		      	  $.getJSON(url,params,function(result){//响应回来的json数组
		      		 
		       		alert("添加成功");
		              });
			 }); 
       	 
       	 /* 
         var onePriceThis=$('#onePriceThis').val(); 
         	
	       $("#aClick").click(function(){
	            	var goodsnum=$('#goodsnum').val(); 
	            	 
	        	 
	            	var zongjia=onePriceThis*goodsnum; 
        		 
        		 
        		$('#zongjia').html(zongjia);
        		
        	});
            $("#aClick2").click(function(){
            	
             	var goodsnum=$('#goodsnum').val();
             	 
             	var zongjia=onePriceThis*goodsnum; 
            	 
       		 
        		$('#zongjia').html(zongjia);        		
        	});   */
       	/* 
       	$("#aClick").click(function(){
       		var goodsnum=$('#goodsnum').val(); 
       		
          	 if(goodsnum<leastNum){
          		  alert(goodsnum);
          		  alert(leastNum); 
          		$('#goodsnum').val("3");
          	 }
       	});
       		 */
       	 
       
 	});  
 	  
        
    
    
    
    
    </script>
    <style type="text/css">.BMap_mask {
        background: transparent url(http://api0.map.bdimg.com/images/blank.gif);
    }

    .BMap_noscreen {
        display: none;
    }

    .BMap_button {
        cursor: pointer;
    }

    .BMap_zoomer {
        background-image: url(http://api0.map.bdimg.com/images/mapctrls1d3.gif);
        background-repeat: no-repeat;
        overflow: hidden;
        font-size: 1px;
        position: absolute;
        width: 7px;
        height: 7px;
    }

    .BMap_stdMpCtrl div {
        position: absolute;
    }

.mya:hover {
  
 color: #FFFFFF;
 text-decoration: underline;
}

    .BMap_stdMpPan {
        width: 44px;
        height: 44px;
        overflow: hidden;
        background: url(http://api0.map.bdimg.com/images/mapctrls2d0.png) no-repeat;
    }

    .BMap_ie6 .BMap_stdMpPan {
        background: none;
    }

    .BMap_ie6 .BMap_smcbg {
        left: 0;
        width: 44px;
        height: 464px;
        filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src="http://api0.map.bdimg.com/images/mapctrls2d0.png");
    }

    .BMap_ie6 .BMap_stdMpPanBg {
        z-index: -1;
    }

    .BMap_stdMpPan .BMap_button {
        height: 15px;
        width: 15px;
    }

    .BMap_panN, .BMap_panW, .BMap_panE, .BMap_panS {
        overflow: hidden;
    }

    .BMap_panN {
        left: 14px;
        top: 0;
    }

    .BMap_panW {
        left: 1px;
        top: 12px;
    }

    .BMap_panE {
        left: 27px;
        top: 12px;
    }

    .BMap_panS {
        left: 14px;
        top: 25px;
    }

    .BMap_stdMpZoom {
        top: 45px;
        overflow: hidden;
    }

    .BMap_stdMpZoom .BMap_button {
        width: 22px;
        height: 21px;
        left: 12px;
        overflow: hidden;
        background-image: url(http://api0.map.bdimg.com/images/mapctrls2d0.png);
        background-repeat: no-repeat;
        z-index: 10;
    }

    .BMap_ie6 .BMap_stdMpZoom .BMap_button {
        background: none;
    }

    .BMap_stdMpZoomIn {
        background-position: 0 -221px;
    }

    .BMap_stdMpZoomOut {
        background-position: 0 -265px;
    }

    .BMap_ie6 .BMap_stdMpZoomIn div {
        left: 0;
        top: -221px;
    }

    .BMap_ie6 .BMap_stdMpZoomOut div {
        left: 0;
        top: -265px;
    }

    .BMap_stdMpType4 .BMap_stdMpZoom .BMap_button {
        left: 0;
        overflow: hidden;
        background: -webkit-gradient(linear, 50% 0, 50% 100%, from(rgba(255, 255, 255, 0.85)), to(rgba(217, 217, 217, 0.85)));
        z-index: 10;
        -webkit-border-radius: 22px;
        width: 34px;
        height: 34px;
        border: 1px solid rgba(255, 255, 255, 0.5);
        -webkit-box-shadow: 0 2px 3.6px #CCC;
        display: -webkit-box;
        -webkit-box-align: center;
        -webkit-box-pack: center;
        -webkit-box-sizing: border-box;
    }

    .BMap_stdMpType4 .BMap_smcbg {
        position: static;
        background: url(http://api0.map.bdimg.com/images/mapctrls2d0_mb.png) 0 0 no-repeat;
        -webkit-background-size: 24px 32px;
    }

    .BMap_stdMpType4 .BMap_stdMpZoomIn {
        background-position: 0 0;
    }

    .BMap_stdMpType4 .BMap_stdMpZoomIn .BMap_smcbg {
        width: 24px;
        height: 24px;
        background-position: 0 0;
    }

    .BMap_stdMpType4 .BMap_stdMpZoomOut {
        background-position: 0 0;
    }

    .BMap_stdMpType4 .BMap_stdMpZoomOut .BMap_smcbg {
        width: 24px;
        height: 6px;
        background-position: 0 -25px;
    }

    .BMap_stdMpSlider {
        width: 37px;
        top: 18px;
    }

    .BMap_stdMpSliderBgTop {
        left: 18px;
        width: 10px;
        overflow: hidden;
        background: url(http://api0.map.bdimg.com/images/mapctrls2d0.png) no-repeat -23px -226px;
    }

    .BMap_stdMpSliderBgBot {
        left: 19px;
        height: 8px;
        width: 10px;
        top: 124px;
        overflow: hidden;
        background: url(http://api0.map.bdimg.com/images/mapctrls2d0.png) no-repeat -33px bottom;
    }

    .BMap_ie6 .BMap_stdMpSliderBgTop, .BMap_ie6 .BMap_stdMpSliderBgBot {
        background: none;
    }

    .BMap_ie6 .BMap_stdMpSliderBgTop div {
        left: -23px;
        top: -226px;
    }

    .BMap_ie6 .BMap_stdMpSliderBgBot div {
        left: -33px;
        bottom: 0;
    }

    .BMap_stdMpSliderMask {
        height: 100%;
        width: 24px;
        left: 10px;
        cursor: pointer;
    }

    .BMap_stdMpSliderBar {
        height: 11px;
        width: 19px;
        left: 13px;
        top: 80px;
        overflow: hidden;
        background: url(http://api0.map.bdimg.com/images/mapctrls2d0.png) no-repeat 0 -309px;
    }

    .BMap_stdMpSliderBar.h {
        background: url(http://api0.map.bdimg.com/images/mapctrls2d0.png) no-repeat 0 -320px;
    }

    .BMap_ie6 .BMap_stdMpSliderBar, .BMap_ie6 .BMap_stdMpSliderBar.h {
        background: none;
    }

    .BMap_ie6 .BMap_stdMpSliderBar div {
        top: -309px;
    }

    .BMap_ie6 .BMap_stdMpSliderBar.h div {
        top: -320px;
    }

    .BMap_zlSt, .BMap_zlCity, .BMap_zlProv, .BMap_zlCountry {
        position: absolute;
        left: 34px;
        height: 21px;
        width: 28px;
        background-image: url(http://api0.map.bdimg.com/images/mapctrls2d0.png);
        background-repeat: no-repeat;
        font-size: 0;
        cursor: pointer;
    }

    .BMap_ie6 .BMap_zlSt, .BMap_ie6 .BMap_zlCity, .BMap_ie6 .BMap_zlProv, .BMap_ie6 .BMap_zlCountry {
        background: none;
        overflow: hidden;
    }

    .BMap_zlHolder {
        display: none;
        position: absolute;
        top: 0;
    }

    .BMap_zlHolder.hvr {
        display: block;
    }

    .BMap_zlSt {
        background-position: 0 -380px;
        top: 21px;
    }

    .BMap_zlCity {
        background-position: 0 -401px;
        top: 52px;
    }

    .BMap_zlProv {
        background-position: 0 -422px;
        top: 76px;
    }

    .BMap_zlCountry {
        background-position: 0 -443px;
        top: 100px;
    }

    .BMap_ie6 .BMap_zlSt div {
        top: -380px;
    }

    .BMap_ie6 .BMap_zlCity div {
        top: -401px;
    }

    .BMap_ie6 .BMap_zlProv div {
        top: -422px;
    }

    .BMap_ie6 .BMap_zlCountry div {
        top: -443px;
    }

    .BMap_stdMpType1 .BMap_stdMpSlider, .BMap_stdMpType2 .BMap_stdMpSlider, .BMap_stdMpType3 .BMap_stdMpSlider, .BMap_stdMpType4 .BMap_stdMpSlider, .BMap_stdMpType2 .BMap_stdMpZoom, .BMap_stdMpType3 .BMap_stdMpPan, .BMap_stdMpType4 .BMap_stdMpPan {
        display: none;
    }

    .BMap_stdMpType3 .BMap_stdMpZoom {
        top: 0;
    }

    .BMap_stdMpType4 .BMap_stdMpZoom {
        top: 0;
    }

    .BMap_cpyCtrl a {
        font-size: 11px;
        color: #7979CC;
    }

    .BMap_scaleCtrl {
        height: 23px;
        overflow: hidden;
    }

    .BMap_scaleCtrl div.BMap_scaleTxt {
        font-size: 11px;
        font-family: Arial, sans-serif;
    }

    .BMap_scaleCtrl div {
        position: absolute;
        overflow: hidden;
    }

    .BMap_scaleHBar img, .BMap_scaleLBar img, .BMap_scaleRBar img {
        position: absolute;
        width: 37px;
        height: 442px;
        left: 0;
    }

    .BMap_scaleHBar {
        width: 100%;
        height: 5px;
        font-size: 0;
        bottom: 0;
    }

    .BMap_scaleHBar img {
        top: -437px;
        width: 100%;
    }

    .BMap_scaleLBar, .BMap_scaleRBar {
        width: 3px;
        height: 9px;
        bottom: 0;
        font-size: 0;
        z-index: 1;
    }

    .BMap_scaleLBar img {
        top: -427px;
        left: 0;
    }

    .BMap_scaleRBar img {
        top: -427px;
        left: -5px;
    }

    .BMap_scaleLBar {
        left: 0;
    }

    .BMap_scaleRBar {
        right: 0;
    }

    .BMap_scaleTxt {
        text-align: center;
        width: 100%;
        cursor: default;
        line-height: 18px;
    }

    .BMap_omCtrl {
        background-color: #fff;
        overflow: hidden;
    }

    .BMap_omOutFrame {
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
    }

    .BMap_omInnFrame {
        position: absolute;
        border: 1px solid #999;
        background-color: #ccc;
        overflow: hidden;
    }

    .BMap_omMapContainer {
        position: absolute;
        overflow: hidden;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
    }

    .BMap_omViewMv {
        border-width: 1px;
        border-style: solid;
        border-left-color: #84b0df;
        border-top-color: #adcff4;
        border-right-color: #274b8b;
        border-bottom-color: #274b8b;
        position: absolute;
        z-index: 600;
    }

    .BMap_omViewInnFrame {
        border: 1px solid #3e6bb8;
    }

    .BMap_omViewMask {
        width: 1000px;
        height: 1000px;
        position: absolute;
        left: 0;
        top: 0;
        background-color: #68c;
        opacity: .2;
        filter: progid:DXImageTransform.Microsoft.Alpha(opacity=20);
    }

    .BMap_omBtn {
        height: 13px;
        width: 13px;
        position: absolute;
        cursor: pointer;
        overflow: hidden;
        background: url(http://api0.map.bdimg.com/images/mapctrls1d3.gif) no-repeat;
        z-index: 1210;
    }

    .anchorBR .BMap_omOutFrame {
        border-top: 1px solid #999;
        border-left: 1px solid #999;
    }

    .quad4 .BMap_omBtn {
        background-position: -26px -27px;
    }

    .quad4 .BMap_omBtn.hover {
        background-position: 0 -27px;
    }

    .quad4 .BMap_omBtn.BMap_omBtnClosed {
        background-position: -39px -27px;
    }

    .quad4 .BMap_omBtn.BMap_omBtnClosed.hover {
        background-position: -13px -27px;
    }

    .anchorTR .BMap_omOutFrame {
        border-bottom: 1px solid #999;
        border-left: 1px solid #999;
    }

    .quad1 .BMap_omBtn {
        background-position: -39px -41px;
    }

    .quad1 .BMap_omBtn.hover {
        background-position: -13px -41px;
    }

    .quad1 .BMap_omBtn.BMap_omBtnClosed {
        background-position: -26px -41px;
    }

    .quad1 .BMap_omBtn.BMap_omBtnClosed.hover {
        background-position: 0 -41px;
    }

    .anchorBL .BMap_omOutFrame {
        border-top: 1px solid #999;
        border-right: 1px solid #999;
    }

    .quad3 .BMap_omBtn {
        background-position: -27px -40px;
    }

    .quad3 .BMap_omBtn.hover {
        background-position: -1px -40px;
    }

    .quad3 .BMap_omBtn.BMap_omBtnClosed {
        background-position: -40px -40px;
    }

    .quad3 .BMap_omBtn.BMap_omBtnClosed.hover {
        background-position: -14px -40px;
    }

    .anchorTL .BMap_omOutFrame {
        border-bottom: 1px solid #999;
        border-right: 1px solid #999;
    }

    .quad2 .BMap_omBtn {
        background-position: -40px -28px;
    }

    .quad2 .BMap_omBtn.hover {
        background-position: -14px -28px;
    }

    .quad2 .BMap_omBtn.BMap_omBtnClosed {
        background-position: -27px -28px;
    }

    .quad2 .BMap_omBtn.BMap_omBtnClosed.hover {
        background-position: -1px -28px;
    }

    .anchorR .BMap_omOutFrame {
        border-bottom: 1px solid #999;
        border-left: 1px solid #999;
        border-top: 1px solid #999;
    }

    .anchorL .BMap_omOutFrame {
        border-bottom: 1px solid #999;
        border-right: 1px solid #999;
        border-top: 1px solid #999;
    }

    .anchorB .BMap_omOutFrame {
        border-top: 1px solid #999;
        border-left: 1px solid #999;
        border-right: 1px solid #999;
    }

    .anchorT .BMap_omOutFrame {
        border-bottom: 1px solid #999;
        border-right: 1px solid #999;
        border-left: 1px solid #999;
    }

    .anchorNon .BMap_omOutFrame, .withOffset .BMap_omOutFrame {
        border: 1px solid #999;
    }

    .BMap_zoomMask0, .BMap_zoomMask1 {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: transparent url(http://api0.map.bdimg.com/images/blank.gif);
        z-index: 1000;
    }

    .BMap_contextMenu {
        position: absolute;
        border-top: 1px solid #adbfe4;
        border-left: 1px solid #adbfe4;
        border-right: 1px solid #8ba4d8;
        border-bottom: 1px solid #8ba4d8;
        padding: 0;
        margin: 0;
        width: auto;
        visibility: hidden;
        background: #fff;
        z-index: 10000000;
    }

    .BMap_cmShadow {
        position: absolute;
        background: #000;
        opacity: .3;
        filter: alpha(opacity=30);
        visibility: hidden;
        z-index: 9000000;
    }

    div.BMap_cmDivider {
        border-bottom: 1px solid #adbfe4;
        font-size: 0;
        padding: 1px;
        margin: 0 6px;
    }

    div.BMap_cmFstItem {
        margin-top: 2px;
    }

    div.BMap_cmLstItem {
        margin-bottom: 2px;
    }

    .BMap_shadow img {
        border: 0 none;
        margin: 0;
        padding: 0;
        height: 370px;
        width: 1144px;
    }

    .BMap_pop .BMap_top {
        border-top: 1px solid #ababab;
        background-color: #fff;
    }

    .BMap_pop .BMap_center {
        border-left: 1px solid #ababab;
        border-right: 1px solid #ababab;
        background-color: #fff;
    }

    .BMap_pop .BMap_bottom {
        border-bottom: 1px solid #ababab;
        background-color: #fff;
    }

    .BMap_shadow, .BMap_shadow img, .BMap_shadow div {
        -moz-user-select: none;
        -webkit-user-select: none;
    }

    .BMap_checkbox {
        background: url(http://api0.map.bdimg.com/images/mapctrls1d3.gif);
        vertical-align: middle;
        display: inline-block;
        width: 11px;
        height: 11px;
        margin-right: 4px;
        background-position: -14px 90px;
    }

    .BMap_checkbox.checked {
        background-position: -2px 90px;
    }

    .BMap_pop .BMap_top img, .BMap_pop .BMap_center img, .BMap_pop .BMap_bottom img {
        display: none;
    }

    @media print {
        .BMap_noprint {
            display: none;
        }

        .BMap_noscreen {
            display: block;
        }

        .BMap_mask {
            background: none;
        }

        .BMap_pop .BMap_top img, .BMap_pop .BMap_center img, .BMap_pop .BMap_bottom img {
            display: block;
        }
    }

    .BMap_vectex {
        cursor: pointer;
        width: 11px;
        height: 11px;
        position: absolute;
        background-repeat: no-repeat;
        background-position: 0 0;
    }

    .BMap_vectex_nodeT {
        background-image: url(http://api0.map.bdimg.com/images/nodeT.gif);
    }

    .BMap_vectex_node {
        background-image: url(http://api0.map.bdimg.com/images/node.gif);
    }

    .iw {
        width: 100%;
        -webkit-box-sizing: border-box;
        border: .3em solid transparent;
        -webkit-background-clip: padding;
    }

    .iw_rt {
        position: relative;
        height: 46px;
        width: 195px;
        -webkit-box-sizing: border-box;
        display: -webkit-box;
        -webkit-box-align: center;
        margin: 2px 5px 0 2px;
        background-color: rgba(0, 0, 0, 0.8);
        -webkit-box-shadow: 2px 2px 7px rgba(0, 0, 0, 0.3);
        -webkit-border-radius: 2px;
        color: #fff;
    }

    .iw_rt:after {
        content: "";
        position: absolute;
        left: 50%;
        bottom: -8px;
        width: 0;
        height: 0;
        border-left: 5px solid transparent;
        border-top: 8px solid rgba(0, 0, 0, 0.8);
        border-right: 5px solid transparent;
        margin: 0 0 0 -6px;
    }

    .iw_s {
        text-align: center;
        vertical-align: middle;
        height: 100%;
        -webkit-box-sizing: border-box;
    }

    .iw_rt .iw_s1 {
        color: #cbcbcb;
    }

    .iw_rt b {
        color: #fff;
        font-weight: bold;
    }

    .iw_rt_gr {
        margin-left: -4px;
    }

    .iw_busline {
        margin: 32px 0 0 -3px;
    }

    .iw_busline .iw_cc {
        text-align: center;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        padding: 0 6px;
    }

    .iw_r {
        -webkit-box-ordinal-group: 3;
    }

    .iw_r, .iw_l {
        height: 100%;
        font-size: 4.5em;
        text-align: center;
        color: #747474;
        border: none;
        -webkit-box-sizing: border-box;
        -webkit-border-radius: 0;
        line-height: .7em;
        border: 1px solid rgba(255, 255, 255, 0.2);
        width: 41px;
    }

    .iw_r {
        border-style: none none none solid;
    }

    .iw_l {
        border-style: none solid none none;
    }

    .iw_search, .iw_l {
        background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAlCAYAAAAuqZsAAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJ bWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdp bj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6 eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEz NDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJo dHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlw dGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAv IiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RS ZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpD cmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBNYWNpbnRvc2giIHhtcE1NOkluc3RhbmNl SUQ9InhtcC5paWQ6QjA3NjMyREJDNzQ2MTFFMTlBQUM5QzlCRDZGODZCQkYiIHhtcE1NOkRvY3Vt ZW50SUQ9InhtcC5kaWQ6QjA3NjMyRENDNzQ2MTFFMTlBQUM5QzlCRDZGODZCQkYiPiA8eG1wTU06 RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpCMDc2MzJEOUM3NDYxMUUxOUFB QzlDOUJENkY4NkJCRiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpCMDc2MzJEQUM3NDYxMUUx OUFBQzlDOUJENkY4NkJCRiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1w bWV0YT4gPD94cGFja2V0IGVuZD0iciI/PllB9T8AAAKuSURBVHjaxFjRcdpAEAX+mVEqiFxB5AoQ HZAKElcArsBWBSgVQCoAVwCuwEoFlivwGQpI7jKrzGXn7ep0EsPO7BjLp/O73bdv9xifTqdRpCXW c+sz65n1lNy3mvzZemX9aN34C6bTKdx8HAHMgVlaX0QeaGv9J4EcBJgD9EA/hzAH7N4Cq/oAW1tf KX+vKEXP7PlMSLFvhQX32BWY49GBOIRO7FKy57wBlnoUQHu5yJX+g4mymdvgFWzkAM3JtwGgmiJw a2/pvQoEYBQCLKNI8RfuaeNjT245gAUdqgHdmkqUPiOctLdJVYkithkAVO/K5cC+M30KAZVSxboo /ybnn1eIR5r5qUyI7P4GX6nqJHskbQsxQ7wqu6aSn2qrgHLrXjqAat5ZC0WlRuzVE0J3uhtBCjRt a3qjX92JIMiOIqYtYgumzpo+7RRtu/E0zvknokMF5GgdQv4Ze/5DWL8CFVe2aNuedGsLCi1vS+WL F4WKNkL2Dnh414FnO1b1R5vKuRaxjKUF2YKBqjuCGtF6nyL5+XxOJWCcL2/CpjzdRYRuGpDShQQs ARUj9U/OnRh7Yr9/CW1JXU4fYxXoHIMCu+iB+gBLIt/LgShDYCYktGCDfCBgvyRgVQgZwTy/jIzy EnQNMZV1QCT4bJ+3XFCkS81/WijdkiYAdSak04BWtabWEmIbsNZYgU00YE+gjyErQeo31GpShVMH Yc+/dwsEzh97/D6ojT2ZMlM1XwN8WP9Ma7NAbZvbtBoEjE+jBT2TusCu5SIbI7z/wLWN1rdKi0o6 cqwTuAmYyTm5NQW/82atWvlnBbo7apxD98qDJxl7mkC76JQ2Qm0CI1xKF95Gb4oLXHJDwJlxjy/u LgruGtNFM8lqnNtfK2JqN3CVeW1gzWj9jThd0xd59R8BBgAAiefGO1Bt1gAAAABJRU5ErkJggg==") no-repeat 50% 50%;
        -webkit-background-size: 19px 19px;
    }

    .iw_line_s, .iw_r {
        background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAmCAYAAABDClKtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJ bWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdp bj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6 eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEz NDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJo dHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlw dGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAv IiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RS ZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpD cmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBNYWNpbnRvc2giIHhtcE1NOkluc3RhbmNl SUQ9InhtcC5paWQ6QjA3NjMyREZDNzQ2MTFFMTlBQUM5QzlCRDZGODZCQkYiIHhtcE1NOkRvY3Vt ZW50SUQ9InhtcC5kaWQ6QjA3NjMyRTBDNzQ2MTFFMTlBQUM5QzlCRDZGODZCQkYiPiA8eG1wTU06 RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpCMDc2MzJEREM3NDYxMUUxOUFB QzlDOUJENkY4NkJCRiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpCMDc2MzJERUM3NDYxMUUx OUFBQzlDOUJENkY4NkJCRiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1w bWV0YT4gPD94cGFja2V0IGVuZD0iciI/PqheQ+MAAAEtSURBVHja7JftDYIwEIbB8JeEUXACZQPd oGygE+gGxAnQEZzAOgEdwREIDKBXUgjBIqW5Npj0kvcHpG0erveFX1WVZ8l2oBhEhRoLw/BroW8J KgeR3vMVlI5BrSwAHQZAnngmYxtMe4oIL41ZAp6iNqF4/BQTa0oBxmxAcaAHKFJY+wKtAaw0CRUJ oHjGHiY8VpqCKmYCdRkJUKmJ7Ms1gZqkqOs6w/bUGXRCOGePCcXjaItwDsW8PoZ0zhM70IeeyiZi jH/Isf+CF9MAOdCppDj+LJ6yim6j9802B6VqQa818BFjY6AHakHp9Crj15ctCaiFIi7Q/wCKLRHq vjSoVNKWunH4rTBDv5Cv7NKeKfvvU2nINzHAuexzUA7KQTkoB6UxDicKvc+qfQQYABaiUBxugCsr AAAAAElFTkSuQmCC") no-repeat 50% 50%;
        -webkit-background-size: 19px 19px;
    }

    .iw_line {
        height: 64px;
        width: 228px;
        padding: 0 11px;
        line-height: 20px;
    }

    .iw_bustrans .iw_cc {
        text-align: center;
    }

    .iw_c {
        color: #FFFFFF;
        text-decoration: none;
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-align: center;
        -webkit-box-flex: 1;
    }

    .iw_cc {
        -webkit-box-sizing: border-box;
        width: 100%;
        border: none;
    }

    .gray_background {
        filter: alpha(opacity=50);
        -moz-opacity: 0.5;
        -khtml-opacity: 0.5;
        opacity: 0.5
    }

    .light_gray_background {
        filter: alpha(opacity=70);
        -moz-opacity: 0.7;
        -khtml-opacity: 0.7;
        opacity: 0.7
    }

    .panoInfoBox {
        cursor: pointer;
    }

    .panoInfoBox {
        position: relative;
        width: 323px;
        height: 101px;
        margin-bottom: 4px;
        cursor: pointer;
    }

    .panoInfoBox .panoInfoBoxTitleBg {
        width: 323px;
        height: 19px;
        position: absolute;
        left: 0;
        bottom: 0;
        z-index: 2;
        background-color: #000;
        opacity: .7;
    }

    .panoInfoBox .panoInfoBoxTitleContent {
        font-size: 12px;
        color: #fff;
        position: absolute;
        bottom: 2px;
        left: 5px;
        z-index: 3;
        text-decoration: none;
    }

    .RouteAddressOuterBkg {
        position: relative;
        padding: 32px 4px 4px 3px;
        background-color: #ffdd99;
    }

    .RouteAddressInnerBkg {
        padding: 3px 5px 8px 8px;
        background-color: #ffffff;
    }

    #RouteAddress_DIV1 {
        margin-top: 5px;
    }

    .RouteAddressTip {
        position: absolute;
        width: 100%;
        top: 0px;
        text-align: center;
        height: 30px;
        line-height: 30px;
        color: #994c00;
    }

    .route_tip_con {
        position: absolute;
        top: 145px;
    }

    .route_tip_con .route_tip {
        position: absolute;
        width: 233px;
        height: 29px;
        color: #803300;
        text-align: center;
        line-height: 29px;
        border: #cc967a solid 1px;
        background: #fff2b2;
        z-index: 100000;
    }

    .route_tip_con .route_tip span {
        position: absolute;
        top: 0;
        right: 0;
        _right: -1px;
        width: 14px;
        height: 13px;
        background: url(http://api0.map.bdimg.com/images/addrPage.png?v=20121107) no-repeat 0 -121px;
        cursor: pointer;
    }

    .route_tip_con .route_tip_shadow {
        width: 233px;
        height: 29px;
        position: absolute;
        left: 1px;
        top: 1px;
        background: #505050;
        border: 1px solid #505050;
        opacity: 0.2;
        filter: alpha(opacity=20)
    }

    .sel_body_body_page {
        margin: 5px 0
    }

    .sel_n {
        margin-top: 5px;
        overflow: hidden;
    }

    .sel_n .sel_top {
        background: url(http://api0.map.bdimg.com/images/bgs.gif) no-repeat 0 -418px;
        height: 4px;
        font-size: 0px;
    }

    .sel_n .sel_body_top {
        height: 32px;
        width: 100%;
        background: url(http://api0.map.bdimg.com/images/addrPage.png?v=20121107) no-repeat 0 -41px;
    }

    .sel_n .sel_body_title {
        float: left;
        width: 100%;
        height: 31px;
    }

    .sel_n .sel_body_sign {
        margin-top: 1px;
        width: 30px;
        height: 31px;
        float: left;
        background: url(http://api0.map.bdimg.com/images/bgs.gif) no-repeat -79px -387px;
    }

    .sel_n .sel_body_name {
        height: 10px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin: 0 20px 0 30px;
        padding: 8px 7px 7px;
        font-size: 14px;
        color: #FA8722;
    }

    .sel_n .sel_body_button {
        float: left;
        width: 55px;
        margin-left: -55px;
        padding-top: 8px;
    }

    .sel_n .sel_body_button a {
    }

    .sel_n .sel_bottom {
        background: url(http://api0.map.bdimg.com/images/bgs.gif) no-repeat 0 -415px;
        height: 4px;
        font-size: 0px;
    }

    .sel_n .sel_body_body {
        padding: 3px 0 0 0
    }

    .sel_n1 {
        margin-top: 5px;
        width: 329px;
        overflow: hidden;
    }

    .sel_n1 .sel_top {
        background: url(http://api0.map.bdimg.com/images/bgs.gif) no-repeat 0 -418px;
        height: 4px;
        font-size: 0px;
    }

    .sel_n1 .sel_body_top {
        height: 31px;
        width: 100%;
        background: url(http://api0.map.bdimg.com/images/sel_body_n_top.gif) repeat-x;
    }

    .sel_n1 .sel_body_top {
        height: 32px;
        width: 100%;
        background: url(http://api0.map.bdimg.com/images/addrPage.png?v=20121107) no-repeat 0 -41px
    }

    .sel_n1 .sel_body_title {
        float: left;
        width: 100%;
        height: 31px;
        cursor: pointer;
    }

    .sel_n1 .sel_body_sign {
        margin-top: 1px;
        width: 30px;
        height: 31px;
        float: left;
        background: url(http://api0.map.bdimg.com/images/bgs.gif) no-repeat -79px -387px;
    }

    .sel_n1 .sel_body_name {
        margin: 0 20px 0 30px;
        padding: 8px 7px 7px;
        font-size: 14px;
        color: #FA8722;
    }

    .sel_n1 .sel_body_button {
        float: left;
        width: 20px;
        height: 31px;
        margin-left: -23px;
        background: url(http://api0.map.bdimg.com/images/bgs.gif) no-repeat -253px -382px;
        overflow: hidden;
        zoom: 1;
        cursor: pointer;
    }

    .sel_n1 .sel_body_button a {
        display: none;
    }

    .sel_n1 .sel_body_body {
        display: none
    }

    .sel_n1 .sel_bottom {
        background: url(http://api0.map.bdimg.com/images/bgs.gif) no-repeat 0 -415px;
        height: 4px;
        font-size: 0px;
    }

    .sel_y {
        margin-top: 5px;
        overflow: hidden;
    }

    .sel_y .sel_top {
        background: url(http://api0.map.bdimg.com/images/bgs.gif) no-repeat 0 -439px;
        height: 4px;
        zoom: 1;
        font-size: 0px;
    }

    .sel_y .sel_body_top {
        height: 32px;
        width: 100%;
        background: url(http://api0.map.bdimg.com/images/addrPage.png?v=20121107) no-repeat 0 0
    }

    .sel_y .sel_body_title {
        float: left;
        width: 100%;
        height: 31px;
        cursor: pointer;
    }

    .sel_y .sel_body_sign {
        margin-top: 1px;
        width: 30px;
        height: 31px;
        float: left;
        background: url(http://api0.map.bdimg.com/images/bgs.gif) no-repeat -167px -384px;
    }

    .sel_y .sel_body_name {
        margin: 0 20px 0 30px;
        padding: 8px 7px 7px;
        font-size: 14px;
        color: #5B7BCB;
    }

    .sel_y .sel_body_button {
        float: left;
        width: 20px;
        height: 31px;
        margin-left: -20px;
        background: url(http://api0.map.bdimg.com/images/bgs.gif) no-repeat -269px -297px;
        cursor: pointer;
    }

    .sel_y .sel_body_button a {
        display: none;
    }

    .sel_y .sel_body_body {
        display: none;
        height: 0px
    }

    .sel_y .sel_body_body_div {
    }

    .sel_y .sel_bottom {
        background: url(http://api0.map.bdimg.com/images/bgs.gif) no-repeat 0 -436px;
        height: 4px;
        font-size: 0px;
    }

    .sel_y .sel_body_body_page {
        display: none;
        height: 0px;
    }

    .sel_x {
        margin-top: 5px;
        width: 329px;
        overflow: hidden;
    }

    .sel_x .sel_top {
        background: url(http://api0.map.bdimg.com/images/bgs.gif) no-repeat 0 -418px;
        height: 4px;
        font-size: 0px;
    }

    .sel_x .sel_body_top {
        height: 32px;
        width: 100%;
        background: url(http://api0.map.bdimg.com/images/addrPage.png?v=20121107) no-repeat 0 -41px;
    }

    .sel_x .sel_body_title {
        float: left;
        width: 100%;
        height: 31px;
    }

    .sel_x .sel_body_sign {
        margin-top: 1px;
        width: 30px;
        height: 31px;
        float: left;
        background: url(http://api0.map.bdimg.com/images/bgs.gif) no-repeat -122px -384px;
    }

    .sel_x .sel_body_name {
        margin: 0 20px 0 30px;
        padding: 8px 7px 7px;
        font-size: 14px;
        color: #FA8722;
    }

    .sel_x .sel_body_button {
        float: left;
        width: 55px;
        margin-left: -55px;
        padding-top: 8px;
    }

    .sel_x .sel_body_button a {
    }

    .sel_x .sel_body_body {
    }

    .sel_x .sel_body_body_div {
        padding: 5px 5px 0 5px;
    }

    .sel_x .sel_bottom {
        background: url(http://api0.map.bdimg.com/images/bgs.gif) no-repeat 0 -415px;
        height: 4px;
        font-size: 0px;
    }

    .sel_x1 {
        margin-top: 5px;
        width: 329px;
        overflow: hidden;
    }

    .sel_x1 .sel_top {
        background: url(http://api0.map.bdimg.com/images/bgs.gif) no-repeat 0 -418px;
        height: 4px;
        font-size: 0px;
    }

    .sel_x1 .sel_body_top {
        height: 32px;
        width: 100%;
        background: url(http://api0.map.bdimg.com/images/addrPage.png?v=20121107) no-repeat 0 -41px
    }

    .sel_x1 .sel_body_title {
        float: left;
        width: 100%;
        height: 31px;
        cursor: pointer;
    }

    .sel_x1 .sel_body_sign {
        margin-top: 1px;
        width: 30px;
        height: 31px;
        float: left;
        background: url(http://api0.map.bdimg.com/images/bgs.gif) no-repeat -122px -384px;
    }

    .sel_x1 .sel_body_name {
        margin: 0 20px 0 30px;
        padding: 8px 7px 7px;
        font-size: 14px;
        color: #FA8722;
    }

    .sel_x1 .sel_body_button {
        float: left;
        width: 55px;
        height: 31px;
        margin-left: -55px;
    }

    .sel_x1 .sel_body_button a {
        display: none;
    }

    .sel_x1 .sel_body_body {
        display: none;
        height: 0px;
    }

    .sel_x1 .sel_body_body_div {
        padding: 5px 5px 0 5px;
    }

    .sel_x1 .sel_bottom {
        background: url(http://api0.map.bdimg.com/images/bgs.gif) no-repeat 0 -415px;
        height: 4px;
        font-size: 0px;
    }

    .sel_body_citylist {
        height: 100px;
        padding: 0 0 0 5px
    }

    .sel_body_resitem {
        table-layout: fixed;
        overflow-x: hidden;
        overflow-y: hidden;
    }

    .sel_body_resitem table {
        margin-right: 5px;
    }

    .sel_body_resitem tr {
        cursor: pointer;
    }

    .sel_body_resitem th {
        padding-top: 5px;
        padding-left: 5px;
        text-align: left;
        vertical-align: top;
        width: 22px;
    }

    .sel_body_resitem th div.iconbg {
        background: url(http://api0.map.bdimg.com/images/markers_new_ie6.png) no-repeat scroll 0 0;
        height: 29px;
        width: 24px;
    }

    .sel_body_resitem th div.icon {
        cursor: pointer
    }

    .sel_body_resitem th div#no_0_1, .sel_body_resitem th div#no_1_1 {
        background-position: 0 -64px
    }

    .sel_body_resitem th div#no_0_2, .sel_body_resitem th div#no_1_2 {
        background-position: -24px -64px
    }

    .sel_body_resitem th div#no_0_3, .sel_body_resitem th div#no_1_3 {
        background-position: -48px -64px
    }

    .sel_body_resitem th div#no_0_4, .sel_body_resitem th div#no_1_4 {
        background-position: -72px -64px
    }

    .sel_body_resitem th div#no_0_5, .sel_body_resitem th div#no_1_5 {
        background-position: -96px -64px
    }

    .sel_body_resitem th div#no_0_6, .sel_body_resitem th div#no_1_6 {
        background-position: -120px -64px
    }

    .sel_body_resitem th div#no_0_7, .sel_body_resitem th div#no_1_7 {
        background-position: -144px -64px
    }

    .sel_body_resitem th div#no_0_8, .sel_body_resitem th div#no_1_8 {
        background-position: -168px -64px
    }

    .sel_body_resitem th div#no_0_9, .sel_body_resitem th div#no_1_9 {
        background-position: -192px -64px
    }

    .sel_body_resitem th div#no_0_10, .sel_body_resitem th div#no_1_10 {
        background-position: -216px -64px
    }

    .sel_body_resitem td {
        line-height: 160%;
        padding: 3px 0 3px 3px;
        vertical-align: top;
    }

    .sel_body_resitem div.ra_td_title {
        float: left;
        margin-right: 40px;
    }

    .sel_body_resitem div.ra_td_button {
        float: right;
        width: 40px;
    }

    .sel_body_resitem div.ra_td_button input {
        height: 18px;
        font-size: 12px;
        width: 40px;
    }

    .sel_body_resitem div.clear {
        clear: both;
        height: 0px;
        width: 100%;
    }

    .sel_body_resitem td .selBtn {
        width: 70px;
        height: 29px;
        background: url(http://api0.map.bdimg.com/images/addrPage.png?v=20121107) no-repeat -21px -81px;
        text-align: center;
        line-height: 29px;
        visibility: hidden;
        color: #b35900;
        display: inline-block;
        *display: inline;
        *zoom: 1;
    }

    .sel_body_resitem td .list_street_view_poi {
        display: inline-block;
        float: none;
        margin-right: 6px;
        position: static;
        *vertical-align: -3px;
        _vertical-align: -5px;
        *display: inline;
        *zoom: 1;
    }

    .selInfoWndBtn {
        width: 70px;
        height: 29px;
        background: url(http://api0.map.bdimg.com/images/addrPage.png?v=20121107) no-repeat -21px -81px;
        text-align: center;
        line-height: 29px;
        margin: 0 auto;
        cursor: pointer;
        color: #b35900
    }

    .sel_body_body td a {
        text-decoration: none;
        cursor: auto;
    }

    .sel_body_body td a:hover, .sel_body_body td a:focus {
        text-decoration: underline;
    }

    .panoInfoBox {
        cursor: pointer
    }

    .panoInfoBox {
        position: relative;
        width: 323px;
        height: 101px;
        margin-bottom: 4px;
        cursor: pointer
    }

    .panoInfoBox .panoInfoBoxTitleBg {
        width: 323px;
        height: 19px;
        position: absolute;
        left: 0;
        bottom: 0;
        z-index: 2;
        background-color: #000;
        opacity: .7
    }

    .panoInfoBox .panoInfoBoxTitleContent {
        font-size: 12px;
        color: #fff;
        position: absolute;
        bottom: 2px;
        left: 5px;
        z-index: 3;
        text-decoration: none
    }

    .pano_switch_left, .pano_switch_right {
        position: absolute;
        width: 28px;
        height: 38px;
        cursor: pointer;
        background-color: #252525;
        background-color: rgba(37, 37, 37, .9)
    }

    .pano_switch_left {
        background: url(http://api0.map.bdimg.com/images/panorama/zuojiantou.png) no-repeat;
        -webkit-background-size: 100% 100%;
        background-size: 100% 100%
    }

    .pano_switch_right {
        background: url(http://api0.map.bdimg.com/images/panorama/youjiantou.png) no-repeat;
        -webkit-background-size: 100% 100%;
        background-size: 100% 100%
    }

    .pano_switch_left:hover {
        background: url(http://api0.map.bdimg.com/images/panorama/zuojiantou_hover.png) no-repeat;
        -webkit-background-size: 100% 100%;
        background-size: 100% 100%
    }

    .pano_switch_right:hover {
        background: url(http://api0.map.bdimg.com/images/panorama/youjiantou_hover.png) no-repeat;
        -webkit-background-size: 100% 100%;
        background-size: 100% 100%
    }

    .pano_switch_left.pano_switch_disable, .pano_switch_right.pano_switch_disable {
        background: 0 0;
        border: none
    }

    .pano_poi_1, .pano_poi_2, .pano_poi_4 {
        display: inline-block;
        width: 16px;
        height: 16px;
        vertical-align: middle;
        background: url(http://webmap0.map.bdimg.com/newmap/static/common/images/pano_whole/guide_icons_4b871b2.png) no-repeat;
        background-position: 0 0
    }

    .pano_photo_arrow_l, .pano_photo_arrow_r {
        position: absolute;
        top: 0;
        width: 20px;
        height: 100%;
        background: #f3eeee
    }

    .pano_photo_arrow_l {
        left: 0
    }

    .pano_photo_arrow_r {
        right: 0
    }

    .pano_arrow_l, .pano_arrow_r {
        display: inline-block;
        width: 18px;
        height: 18px;
        background: url(http://webmap0.map.bdimg.com/newmap/static/common/images/pano_whole/pano-icons_223a291.png) no-repeat
    }

    .pano_catlogLi {
        cursor: pointer;
        position: relative;
        line-height: 10px;
        font-size: 10px;
        text-align: center;
        color: #abb0b2;
        border: 1px solid #53565c;
        padding: 3px 0;
        margin-top: 3px;
        margin-left: 2px;
        width: 90%
    }

    .pano_catlogLi:hover {
        color: #3DAAFC;
        border: 1px solid #3DAAFC
    }

    .pano_catlogLiActive {
        color: #3DAAFC;
        border: 1px solid #3DAAFC
    }

    .pano_arrow_l {
        background-position: 0 -36px
    }

    .pano_arrow_r {
        background-position: -54px -36px
    }

    .pano_photo_arrow_l:hover .pano_arrow_l {
        background-position: -18px -36px
    }

    .pano_photo_arrow_r:hover .pano_arrow_r {
        background-position: -72px -36px
    }

    .pano_photo_arrow_l.pano_arrow_disable .pano_arrow_l {
        background-position: -36px -36px
    }

    .pano_photo_arrow_r.pano_arrow_disable .pano_arrow_r {
        background-position: -90px -36px
    }

    .pano_photo_item {
        position: relative;
        float: left;
        line-height: 0;
        padding-left: 8px
    }

    .pano_photo_decs {
        position: absolute;
        bottom: 1px;
        left: 0;
        padding: 2px 0;
        text-indent: 5px;
        margin-left: 8px;
        display: inline-block;
        color: #fff;
        background: #000;
        opacity: .5;
        filter: alpha(opacity=50) 9;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap
    }

    .pano_photo_item img {
        display: inline-block;
        border: solid 1px #252525
    }

    .pano_photo_item:hover img {
        border-color: #005efc
    }

    .pano_photo_item_seleted {
        position: absolute;
        top: 0;
        left: -100000px;
        border: 3px solid #097df3
    }

    .pano_close {
        position: absolute;
        right: 10px;
        top: 10px;
        width: 40px;
        cursor: pointer;
        height: 40px;
        line-height: 40px;
        border-radius: 3px;
        background-color: rgba(37, 37, 37, .9);
        background-image: url(http://api0.map.bdimg.com/images/panorama/close.png);
        background-repeat: no-repeat;
        background-position: center center;
        background-size: 90%
    }

    .pano_close:hover {
        background-image: url(http://api0.map.bdimg.com/images/panorama/close_hover.png)
    }

    .pano_pc_indoor_exit {
        position: absolute;
        right: 60px;
        top: 10px;
        width: 89px;
        cursor: pointer;
        height: 40px;
        line-height: 40px;
        color: #ebedf0;
        border-radius: 3px;
        background-color: #252525;
        background-color: rgba(37, 37, 37, .9);
        background-image: url(http://api0.map.bdimg.com/images/panorama/indoor_exit.png);
        background-repeat: no-repeat;
        background-position: 15px 12px
    }

    .pano_pc_indoor_exit:hover {
        background-image: url(http://api0.map.bdimg.com/images/panorama/indoor_exit_hover.png);
        color: #2495ff
    }

    .pano_m_indoor_exit {
        font-size: 16px;
        position: absolute;
        right: 30px;
        top: 10px;
        width: 89px;
        cursor: pointer;
        height: 40px;
        line-height: 40px;
        color: #ebedf0;
        border-radius: 3px;
        background-color: #252525;
        background-color: rgba(37, 37, 37, .9);
        background-image: url(http://api0.map.bdimg.com/images/panorama/indoor_exit.png);
        background-repeat: no-repeat;
        background-position: 15px 12px
    }

    .navtrans-table tr {
        color: #666
    }

    .navtrans-table tr:hover {
        color: #333
    }

    .navtrans-navlist-icon {
        float: left;
        width: 18px;
        height: 16px;
        background: url(http://webmap0.map.bdimg.com/wolfman/static/common/images/nav-icon_b5c3223.png) no-repeat 0px 0px;
        _background: url(http://webmap0.map.bdimg.com/wolfman/static/common/images/nav-icon_ie6_134841b.png) no-repeat 0px 0px;
        margin-top: 2px;
        margin-right: 5px
    }

    .navtrans-navlist-icon.s-1 {
        background-position: 0px 0px
    }

    .navtrans-navlist-icon.s-2 {
        background-position: -18px 0px
    }

    .navtrans-navlist-icon.s-3 {
        background-position: -36px 0px
    }

    .navtrans-navlist-icon.s-4 {
        background-position: -54px 0px
    }

    .navtrans-navlist-icon.s-5 {
        background-position: -72px 0px
    }

    .navtrans-navlist-icon.s-6 {
        background-position: -90px 0px
    }

    .navtrans-navlist-icon.s-7 {
        background-position: 0px -16px
    }

    .navtrans-navlist-icon.s-8 {
        background-position: -18px -16px
    }

    .navtrans-navlist-icon.s-9 {
        background-position: -36px -16px
    }

    .navtrans-navlist-icon.s-10 {
        background-position: -54px -16px
    }

    .navtrans-navlist-icon.s-11 {
        background-position: -72px -16px
    }

    .navtrans-navlist-icon.s-12 {
        background-position: -90px -16px
    }

    .navtrans-navlist-icon.s-13 {
        background-position: 0px -32px
    }

    .navtrans-navlist-icon.s-14 {
        background-position: -18px -32px
    }

    .navtrans-navlist-icon.s-18 {
        background-position: -36px -32px
    }

    .navtrans-navlist-icon.s-19 {
        background-position: -54px -32px
    }

    .navtrans-navlist-icon.s-20 {
        background-position: -72px -32px
    }

    .navtrans-navlist-icon.s-21 {
        background-position: -90px -32px
    }

    .navtrans-navlist-icon.nav-st, .navtrans-navlist-icon.nav-through {
        background-position: -16px -70px
    }

    .navtrans-navlist-icon.nav-ed {
        background-position: 0px -70px
    }

    .navtrans-view {
        border-top: 1px solid #e4e6e7;
        border-left: 1px solid #e4e6e7;
        border-right: 1px solid #e4e6e7
    }

    .navtrans-view:hover {
        cursor: pointer
    }

    .navtrans-view .navtrans-arrow {
        position: absolute;
        top: 8px;
        right: 5px;
        width: 7px;
        height: 4px;
        background-image: url(http://webmap0.map.bdimg.com/wolfman/static/common/images/nav-icon_b5c3223.png);
        background-repeat: no-repeat;
        background-position: -40px -70px;
        margin-top: 3px;
        margin-right: 3px;
        _background-image: url(http://webmap0.map.bdimg.com/wolfman/static/common/images/nav-icon_ie6_134841b.png)
    }

    .navtrans-view.expand:hover .navtrans-arrow {
        background-position: -61px -70px
    }

    .navtrans-view.expand .navtrans-arrow {
        background-position: -54px -70px
    }

    .navtrans-view:hover .navtrans-arrow {
        background-position: -47px -70px
    }

    .navtrans-navlist-content {
        overflow: hidden
    }

    .navtrans-res {
        border-bottom: 1px solid #E4E6E7;
        border-left: 1px solid #E4E6E7;
        border-right: 1px solid #E4E6E7
    }

    .navtrans-bus-icon {
        display: inline-block;
        float: left;
        background-image: url(http://webmap0.map.bdimg.com/wolfman/static/common/images/ui3/mo_banner_e1aa2e6.png);
        background-repeat: no-repeat
    }

    .navtrans-bus-icon.bus {
        width: 13px;
        height: 16px;
        background-position: -1px -192px;
        position: relative;
        top: 4px
    }

    .navtrans-bus-icon.walk {
        width: 16px;
        height: 18px;
        background-position: -63px -189px;
        position: relative;
        top: 2px;
        left: -2px
    }

    .navtrans-bus-desc {
        line-height: 24px;
        margin-left: 20px
    }

    .navtrans-busstation {
        color: #36c;
        font-weight: 600
    }

    .tranroute-plan-list.expand .trans-title {
        border-bottom: 1px solid #e4e6e7;
        background-color: #ebf1fb
    }

    .trans-plan-content tr td:hover .bus {
        background-position: -15px -192px
    }

    .trans-plan-content tr td:hover .walk {
        background-position: -82px -189px
    }

    .suggest-plan {
        position: absolute;
        background-color: #0C88E8;
        padding: 0px 15px;
        line-height: 20px;
        color: #fff;
        left: 0px;
        top: 0px
    }

    .suggest-plan-des {
        text-align: left;
        padding: 29px 0px 0px 25px;
        font-size: 13px;
        color: #000
    }

    .bmap-clearfix {
        *+height: 1%
    }

    .bmap-clearfix:after {
        content: ".";
        display: block;
        height: 0px;
        clear: both;
        visibility: hidden
    }

    .BMap_CityListCtrl {
        font-size: 12px
    }

    .BMap_CityListCtrl a {
        text-decoration: none !important
    }

    .BMap_CityListCtrl a:hover {
        text-decoration: underline !important
    }

    .BMap_CityListCtrl .citylist_popup_main {
        border: 1px solid #cdcdcd;
        z-index: 2;
        position: relative;
        width: 100%;
        height: 100%;
        background: #fafafa;
        overflow: hidden;
        box-shadow: 1px 1px 1px rgba(0, 0, 0, .1)
    }

    .ui_city_change_top .ui_city_change_inner, .ui_city_change_bottom .ui_city_change_inner {
        display: inline-block;
        height: 24px;
        line-height: 24px;
        border: 1px solid #c4c7cc;
        background-color: #fff;
        padding: 0 10px 0 10px;
        color: #000
    }

    .ui_city_change_top .ui_city_change_inner i, .ui_city_change_bottom .ui_city_change_inner i {
        width: 8px;
        height: 6px;
        display: inline-block;
        position: relative;
        top: 9px;
        left: 5px;
        -webkit-transition: all ease-in-out .15s;
        transition: all ease-in-out .15s;
        display: none9
    }

    .ui_city_change_click .ui_city_change_inner i, .ui_city_change_click_close .ui_city_change_inner i {
        -webkit-transform: rotate(180deg);
        -moz-transform: rotate(180deg);
        -o-transform: rotate(180deg);
        transform: rotate(180deg)
    }

    .ui_city_change_top .ui_city_change_inner:hover em {
        border-top-color: #0C88E8
    }

    .ui_city_change_top .ui_city_change_inner em {
        width: 0;
        height: 0;
        border-color: rgba(255, 255, 255, 0);
        border-top-color: #D0D4DA;
        border-style: solid;
        border-width: 4px
    }

    .ui_city_change_top .ui_city_change_inner:hover, .ui_city_change_bottom .ui_city_change_inner:hover {
        text-decoration: none !important;
        color: #3d6dcc
    }

    .ui_city_change_bottom .ui_city_change_inner:hover em {
        border-bottom-color: #0C88E8
    }

    .ui_city_change_bottom .ui_city_change_inner em {
        width: 0;
        height: 0;
        border-color: rgba(255, 255, 255, 0);
        border-bottom-color: #D0D4DA;
        border-style: solid;
        border-width: 4px;
        position: relative;
        top: -18px
    }

    .citylist_popup_main .citylist_ctr_title {
        background: #f9f9f9;
        border-bottom: 1px solid #dadada;
        height: 25px;
        line-height: 25px;
        font-size: 12px;
        color: #4c4c4c;
        padding-left: 7px
    }

    .citylist_popup_main .city_content_top {
        position: relative;
        height: 30px;
        padding: 15px 10px 0px 10px;
        border-bottom: 1px solid #CCC;
        margin: 0px 10px
    }

    .citylist_popup_main .city_content_top .cur_city_info {
        display: inline-block;
        margin: 0;
        padding: 0;
    }

    #city_ctrl_form {
        position: absolute;
        right: 12px;
        top: 10px
    }

    #selCityWd {
        border: 1px solid #ccc;
        height: 20px;
        width: 121px;
        line-height: 20px;
        text-indent: 4px;
        outline: none
    }

    #selCitySubmit:hover {
        background-position: -355px -98px
    }

    #selCitySubmit {
        float: right;
        background: url(http://webmap0.map.bdimg.com/wolfman/static/common/images/index_a2f1ac4.png) no-repeat scroll -302px -98px;
        height: 24px;
        line-height: 24px;
        width: 48px;
        cursor: pointer;
        margin-left: 5px;
        text-align: center
    }

    #sel_city_letter_list {
        padding-top: 10px
    }

    #sel_city_letter_list a {
        white-space: nowrap;
        margin-right: 11px;
        line-height: 18px;
        font-size: 13px;
        font-family: Arial, Helvetica, SimSun, sans-serif
    }

    .city_content_medium {
        padding: 10px 10px 10px 10px;
        border-bottom: 1px solid #CCC;
        margin: 0px 10px
    }

    .city_content_bottom {
        padding: 10px 10px 10px 8px;
        margin: 9px 5px 5px 5px;
        height: 218px;
        overflow-y: auto
    }

    #city_detail_table tr td {
        vertical-align: top
    }

    .sel_city_hotcity a {
        color: #3d6dcc
    }

    .sel_city_letter {
        padding: 0 14px 0 3px
    }

    .sel_city_letter div {
        font-size: 24px;
        line-height: 24px;
        font-weight: 700;
        color: #ccc;
        padding: 0;
        margin: 0;
        font-family: Arial, Helvetica, SimSun, sans-serif
    }

    .sel_city_sf {
        padding-right: 8px;
        font-weight: 700
    }

    .sel_city_sf a {
        white-space: nowrap;
        line-height: 18px;
        color: #3d6dcc
    }

    .city_names_wrap {
        margin-bottom: 9px
    }

    .sel_city_name {
        color: #3d6dcc;
        white-space: nowrap;
        margin-right: 9px;
        line-height: 18px;
        float: left
    }

    #popup_close {
        outline: none;
        position: absolute;
        z-index: 50;
        top: 7px;
        right: 6px;
        width: 12px;
        height: 12px;
        background: url(http://webmap0.map.bdimg.com/wolfman/static/common/images/popup_close_15d2283.gif) no-repeat;
        border: 0;
        cursor: pointer
    }</style>
    <link rel="stylesheet" href="${pageContext.request.contextPath}/gsfiles/gsfile2/share_style0_16.css">
    <link rel="stylesheet" href="${pageContext.request.contextPath}/gsfiles/gsfile2/imgshare.css">
</head>
<body style="background:#FFFFFF url(none) left bottom repeat-y" class="">
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
<div class="ecs_1190_w ecs_full clearfix" style="margin-bottom:10px;">
    <div class="clear"></div>
</div><!--topbanner end-->
<div class="ecs_1190_w clearfix">
    <div class="ecs_1190_w_right ecs_fr" id="product_detail">

        <div id="divQRCode" style="display:none;" onclick="HideQRCode();" onmouseover="ShowQRCode();"
             onmouseout="HideQRCode();">
            
            <div class="divQRCode-close" onclick="HideQRCode();">x</div>
            <div class="divQRCode-arrow"></div>
           
        </div>
        <div class="ecs_rel clearfix ecs-bgfff">
            <div class="product_preview ecs_fl">
                <div class="bigpic">
                    <table cellpadding="0" cellspacing="0">
                        <tbody>
                        <tr style=" position: relative; *position: static">
                            <td class="jqzoom" href="#">
                                <img class="zoomimg"
                                     src="/goods/${goods.goodsPhoto}"
                                     jqimg="/uploads/products/20170418/678b3971ea564053baefca3e697f20b1.jpg"
                                     data-bd-imgshare-binded="1" alt="">
                                <div class="jqZoomPup" style="display: none;">&nbsp;</div>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div class="ScrCont clearfix">
                    <div id="List1">
                        <div class="pic clickboder">
                            <table cellpadding="0" cellspacing="0">
                                <tbody>
                                <tr>
                                    <td><img src="/goods/${goods.goodsPhoto}"
                                             data-bd-imgshare-binded="1"></td>
                                </tr>
                                </tbody>
                            </table>
                            <s></s></div>
                        <!-- <div class="pic">
                            <table cellpadding="0" cellspacing="0">
                                <tbody>
                                <tr>
                                    <td><img src="/goods/2.jpg"
                                             data-bd-imgshare-binded="1"></td>
                                </tr>
                                </tbody>
                            </table>
                            <s></s></div> -->
                        
                    </div>
                </div>
                 
            </div><!--product_preview-->
            
            
            
            
            
            <div class="product_intro product_body_right ecs_fl">
                <div class="name"><h2 id="productName" class="productName pname-prime" style="color:#000000">
                   ${goods.goodsName}</h2></div><!--商品价格-->
                <div class="product_attr product_price" id="productinfo_priceshow">
                    <div class="product_price_inner clearfix">
                        <div class="left">
                            <!--<s class='yuan qian'>&yen;</s>-->
                            
                               
                            <span class="currentprice"  >¥ ${goods.price} </span> 
                            <input type="hidden" value="${goods.price}" id="onePriceThis" />
                            <s class="yuan">元</s>
                            
                        </div>
                        <div id="tbuytitle" style="display: none;"></div>

                        <div class="right">

                            
                            
                        </div>

                    </div>
                </div>
                <!--阶梯价格-->
                <div class="ladder-price" style="display: none"></div><!--销售总记录后台设置不显示则为空-->
                <div class="moreattr clearfix payway">
                    <ul>
                        <li style="width: auto; float: none">商品名字：<span id="huohao"> ${goods.goodsName}</span></li>
                        <!--商品条码-->
                        <li style="width: auto; float: none;display:none;">商品条码：<span class="barcode"
                                                                                      id="barcode"></span></li>
                        <li style="width: auto; float: none;">最低起批数量：<strong class="salecount"><span  
                                                                                      id="leastNum">${goods.leastNum}</span></strong></li>
                        <li style="width: auto; float: none;">单&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;位：<strong class="salecount">${goods.unit}</strong></li>
                    </ul>
                    <span id="goodsid" style="display: none;">0</span><span id="minqty" style="display: none;">0</span>
                </div>
                <div class="product_attr">
                    评&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;价：5分 &nbsp;(<a class="rate" href="javascript:;"
                                                                        onclick=" ">已有0人评论</a>)
                </div>
                
                 
                 
                <div class="moreattr clearfix payway">
                    <ul><!--促销信息-->
                        <li class="summary-gifts-clear clear"></li>
                        <li class="summary-gifts-clear clear"></li>
                        <li class="saletab clearfix" id="li_promo" style="display:none">
                            <div class="dt"><span id="saletypeico"></span></div>
                            <div class="dd">
                                <div class="ddin"><span id="promotitle"></span><i id="i_promoinfo">详情&gt;&gt;</i></div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="productchoose">
                    <div class="moreattr clearfix payway select_colorszie"><!--规格:如颜色,尺码等--><!--b2c显货号列表 b2b不会显示-->
                        <div id="select_colorszie" style=" display: none;">规格列表</div><!--非B2B显示-->
                        <div id="select_colorszie_child"
                             style="background: #FFF; display: none; position: absolute;"></div>
                    </div><!--moreattr end-->
                    <div class="productnum clearfix"><span id="nssu">数量：</span>
                        <div class="wrap-input Numinputs"><a href="javascript:;" class="btn-reduce" id="aClick" >-</a><a
                                href="javascript:;" id="aClick2" class="btn-add">+</a><input type="text" class="buynuminput text"
                                                                            readonly="readonly"   maxcount="${goods.thirdNum}"  
                                                                                value="${goods.leastNum}" mincount="${goods.leastNum}" id="goodsnum">
                        </div>
                        
                         <%--               &nbsp; &nbsp;   &nbsp;  小计：<span id="zongjia" style="color:red;" > ¥ ${goods.price}  </span> 元
                             --%>
                        
                        <span class="kucun"></span>
                        <div class="clear"></div>
                        <div>
                            <span class="kucun"></span>
                        </div>
                        <div id="select_colorszie_list"><!--批发规则按钮及查看订购模式按钮 b2b专用--></div>
                    </div>
                </div><!--productchoose-->
                <div id="ServerProviderHtml"></div>
                <div class="addshoppingcart" vid="3757"><!--到货通知按钮--><input type="button" value="到货通知"
                                                                            class="prodinfo-btn prodinfo-btn-styleone prodinfo-btn-notice"
                                                                            lang="3757" id="notice"
                                                                            style="display:none;">
                                                                            <!--购买按钮-->
                        <!--添加到购物车按钮-->
                        <input type="hidden" id="goodsId" value="${goods.goodsId}">
                        <button type="button"
                                                                                                   value="加入购物车"
                                                                                                   class="  prodinfo-btn prodinfo-btn-styletwo prodinfo-btn-addcart"
                                                                                                    id="gwc"
                                                                                                   >加入购物车</button>
 
                </div>
            </div>
            <div id="showwholesale"><!--批发规则--></div>
            <div class="clear"></div>
        </div>
        <!--商品详细初始化脚本-->
        <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/gsfiles/gsfile2/Ecshop.Hint.css">
        <link rel="stylesheet" href="${pageContext.request.contextPath}/gsfiles/gsfile2/custom.css">
        <script type="text/javascript" src="${pageContext.request.contextPath}/gsfiles/gsfile2/jquery.artDialog.js"></script>
        <script type="text/javascript" src="${pageContext.request.contextPath}/gsfiles/gsfile2/iframeTools.js"></script>
        <script type="text/javascript" src="${pageContext.request.contextPath}/gsfiles/gsfile2/Ecshop.Tool.js"></script>
        <script type="text/javascript" src="${pageContext.request.contextPath}/gsfiles/gsfile2/tooltip.js"></script>
        <script type="text/javascript" src="${pageContext.request.contextPath}/gsfiles/gsfile2/JiaThis.js"></script>
        <script src="${pageContext.request.contextPath}/gsfiles/gsfile2/hottembuy.min.js" type="text/javascript"></script>
        <script type="text/javascript" src="${pageContext.request.contextPath}/gsfiles/gsfile2/CombinationSales.js"></script>
        <script type="text/javascript" src="${pageContext.request.contextPath}/gsfiles/gsfile2/AreaData.js"></script>
        <script src="${pageContext.request.contextPath}/gsfiles/gsfile2/BMapLbs.js"></script>
        <script type="text/javascript" src="${pageContext.request.contextPath}/gsfiles/gsfile2/api"></script>
        <script type="text/javascript" src="${pageContext.request.contextPath}/gsfiles/gsfile2/getscript"></script>
        <script type="text/javascript" src="${pageContext.request.contextPath}/gsfiles/gsfile2/SearchInfoWindow_min.js"></script>
        <link rel="stylesheet" href="${pageContext.request.contextPath}/gsfiles/gsfile2/SearchInfoWindow_min.css">
        <script type="text/javascript">var ecstempleStoreid = 1;
        $(document).ready(function () {
            Ecs.ProductInfo.initMain({
                "IsShowShareBtn": true,
                "GoodJson": [{
                    "goodsid": "8274",
                    "productname": "恒厨纯正菜籽油5L/15L",
                    "productid": "3757",
                    "minqty": "1",
                    "maxcount": "0",
                    "mktprice": "55.00",
                    "price": "50.00",
                    "cost": "0.00",
                    "stockamount": "0",
                    "virtualstockamount": "21.00",
                    "realstockamount": "11.00",
                    "props": "",
                    "pdtdesc": "",
                    "weight": "0",
                    "weightunit": "1",
                    "productno": "20170418105059",
                    "intergral": "0.0000",
                    "unit": "",
                    "pictureurl": "",
                    "isselect": "true"
                }],
                "DefaultAreaJson": '{"ProvinceId":440000,"CityId":440100,"AreaId":440104}',
                "IsShowInventory": "1",
                "StorageOneSetting": false,
                "IsShowInNumber": false,
                "XsAsk": true,
                "XsComment": true,
                "isRede": false,
                "IsZeroStorePay": false,
                "IsStoreProduct": 1,
                "WholeSale": {"IsWholeSaleProduct": 1},
                "isopentieredprice": "False",
                "TieredPrice": [],
                "Unit": "",
                "BitUnit": "",
                "UnitRate": 0,
                "BitUnit2": "",
                "UnitRate2": 0,
                "BitUnit3": "",
                "UnitRate3": 0,
                "IsOuterUrl": false
            });
            Ecs.Tool.Base64.option._keyStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
        })</script>
        
        <script type="text/javascript">
           /*  $(document).ready(function () {
                var html = "";
                html += "<div class='product-qrcode-wrap clearfix'>";

                html += "  <img class='div-qrcode-img' src='/admin/product/QRCodeImages/3757/3757-V29Fb2V2WjRyUkE9.jpg' atl=''>";

                html += "  <div class='div-qrcode-cont'>";
                html += "      扫描二维码<br>";
                html += "      <span>手机浏览更方便</span>";
                html += "  </div>";
                html += "</div>";
                $('.addshoppingcart').append(html);
            }); */
        </script>

        <!--product_baseinfo end--><input type="hidden" value="isv4" id="hidden_isv4"><!--优惠套装-->
        <div id="PreferentialSuit"></div><!--推荐套装-->
        <div id="RecommendedSuit"></div>
        <div class="product_tab clearfix" id="product_tab">
            <ul>
                <li class="selected"><a href="javascript:;">商品详情</a></li><!--扩展标签内容--><!--商品销售记录-->
            <!--     <li type="transaction"><a href="javascript:;">最近成交记录</a></li>商品评论记录
                <li type="comment"><a href="javascript:;">商品评价</a></li>商品咨询记录
                <li type="ask"><a href="javascript:;">商品咨询</a></li> -->
            </ul>
        </div>
        <div id="test" name="test"></div><!--product_tab end-->
        <div class="productinfopanel ecs_mgb10 clearfix" pid="3757">
            <div class="panel" style="display: block;">
                <div class="productioninfo">
                    <div class="productioninfotable ecs_mgb10">
                    暂无详情
                    <%-- <img
                            src="${pageContext.request.contextPath}/gsfiles/gsfile2/ABUIABAEGAAghbWTuAUonKfPwAYw4wI4vwY.png"
                            data-bd-imgshare-binded="1"><img
                            src="${pageContext.request.contextPath}/gsfiles/gsfile2/ABUIABAEGAAgh7WTuAUoho7vNTCbAzjWBg.png"
                            data-bd-imgshare-binded="1"><img
                            src="${pageContext.request.contextPath}/gsfiles/gsfile2/ABUIABAEGAAgirWTuAUohoihsQQwrQM42QY.png"
                            data-bd-imgshare-binded="1"><img
                            src="${pageContext.request.contextPath}/gsfiles/gsfile2/ABUIABAEGAAgjbWTuAUo_bWjjgEwkwM42wY.png"
                            data-bd-imgshare-binded="1"> --%></div>
                </div><!--productioninfo end--></div><!--扩展标签内容--><!--商品销售记录-->
            <div class="panel" style="display: none;">
                <div class="dealrecord">
                    <table id="tb-list" vid="3757" summary="买家出价记录" class="tb-list">
                        <tbody>
                        <tr>
                            <th class="tb-buyer">买家</th>
                            <th class="tb-price">拍下价格</th>
                            <th class="tb-amount">数量</th>
                            <th class="tb-time">下单时间</th>
                            <th class="tb-sku">名称和规格</th>
                        </tr>
                        </tbody>
                    </table>

                    <div class="pages">
                        <div id="Pagination" class="pagination pager_v4"></div>
                    </div>
                </div>
            </div>
            <!--商品评论记录-->
      <!--       <div class="panel" style="display: none;">
                <div class="Commentpanel" n="0" vid="">
                    <h3 class="ecs_rel">客户评价<s class="ecs_abs sprite"></s></h3>
                    <div id="i-comment" class="clearfix">
                        <div class="rate">
                            <strong>100%</strong>
                            <br>
                            好评度
                        </div>
                        <div class="percent">
                            <dl>
                                <dt>好评</dt>
                                <dd class="d1">
                                    <div style="width: 150px;">
                                    </div>
                                </dd>
                                <dd class="d2">
                                    100%
                                </dd>
                            </dl>
                            <dl>
                                <dt>中评</dt>
                                <dd class="d1">
                                    <div style="width: 0px;">
                                    </div>
                                </dd>
                                <dd class="d2">
                                    0%
                                </dd>
                            </dl>
                            <dl>
                                <dt>差评</dt>
                                <dd class="d1">
                                    <div style="width: 0px;">
                                    </div>
                                </dd>
                                <dd class="d2">
                                    0%
                                </dd>
                            </dl>
                        </div>
                        <div class="actor">
                        </div>
                    </div>
                    <div class="Comment sprite">
                        <ul class="clearfix">
                            <input type="radio" name="rpl" id="rad_allcoment" value="0" checked="checked">
                            <input type="radio" name="rpl" id="rad_haocoment" value="0">
                            <input type="radio" name="rpl" id="rad_zhongcoment" value="0">
                            <input type="radio" name="rpl" id="rad_chacoment" value="0">
                            <li class="curr" onclick="switchComment(this,0)"><label>全部评论<span>(0)</span></label></li>
                            <li onclick="switchComment(this,1)"><label>好评<span>(0)</span></label></li>
                            <li onclick="switchComment(this,2)"><label>中评<span>(0)</span></label></li>
                            <li onclick="switchComment(this,3)"><label>差评<span>(0)</span></label></li>
                        </ul>
                    </div>

                    <div class="cdiv" id="all">
                    </div>
                    <div class="cdiv" id="allscale" style="display:none;">
                    </div>
                    <div class="cdiv" id="allscalein" style="display:none;">
                    </div>
                    <div class="cdiv" id="allscalediff" style="display:none;">
                    </div>
                </div>
                rate end
                <div class="pager_v4 pagec"></div>
            </div> -->
            <!--商品咨询记录-->
           <%--  <div class="panel" style="display: none;">
                <div class="asking">
                    <div class="top">
                        <h3 class="ecs_rel">购买咨询<s class="ecs_abs"></s></h3>
                        <div class="mc clearfix ecs_rel">
                            <div class="search ecs_fl"><span>咨询前请先搜索，方便又快捷：</span>
							<span class="search_form clearfix">
								<input type="text" class="search_form_text ecs_fl"><input type="button"
                                                                                          class="search_form_btn ecs_fl"
                                                                                          onclick="InitAskData(0);">
							</span>
                                <span class="notes"><span class="fontDE0000">温馨提示</span>：因每位咨询者购买情况、提问时间等不同，为此以下回复仅对提问者3天内有效，其他网友仅供参考！若由此带来不便请多谅解，谢谢！</span>
                            </div><!--search-->
                            <div class="ihaveask ecs_abs"><a
                                    href="http://${pageContext.request.contextPath}/user/Product_Inquiry.aspx?p=3757&amp;type=0&amp;g=0"><img
                                    src="${pageContext.request.contextPath}/gsfiles/gsfile2/iwannask.png" data-bd-imgshare-binded="1"></a>
                                <p></p>
                            </div><!--ihaveask-->
                            <div class="pic ecs_abs"></div>
                        </div><!--mc-->
                    </div><!--top-->
                    <div id="item_list_Consulting">
                    </div>
                    <div class="pages pager_v4">
                        <div class="pagination pageConsulting">
                        </div>
                    </div>
                </div><!--panel--->
            </div> --%><!--asking--->
            <!--history end-->
            <!--pannel end--><!--panel end--></div>
        <!--productinfopanel end-->
        <script type="text/javascript">$(".item_list:odd").css({
            background: function () {
                return "#F4F9FF"
            }, border: function () {
                return "1px solid #EDF0F1"
            }, borderRadius: function () {
                return "10px 10px 10px 10px"
            }
        });</script>
        <div class="m sale_m teambuy ecs_mgb10 clearfix" id="temp_4324dd6f10124c609f4265fdf89415a4" dialog="840"
             type="r_hottembuy">
            <div class="mt ecs_rel"><s class="ecs_abs sprite"></s>
                <h2>到底啦</h2>
               <div class="more"><a href="${pageContext.request.contextPath}/purindex" title="回到主页">回到主页&gt;&gt;</a></div>
            </div><!--mt end-->
        </div>
        <script type="text/javascript">$("#temp_4324dd6f10124c609f4265fdf89415a4 img.lazy").each(function () {
            if (typeof ($(this).attr("data-original")) != "undefined") {
                $(this).attr("src", $(this).attr("data-original"));
            }
        })</script>
    </div><!--content_left end-->
    <div class="ecs_1190_w_left ecs_fl">
          
                
              
                
                
        <div class="m hotrank ecs_mgb10 cssEdit" id="temp_6953ad8d99b344848b20f21187564143" dialog="840"
             type="hotbuy_rank">
            <div class="mt clearfix"><h2>热卖排行榜</h2></div><!--list_top end-->
            <div class="mc">
                <ul>
                
                 <c:forEach var="goods" items="${goodsList2}" begin="1" end="7">
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
            
              <div class="ecs-m storeinfo-qrcode">
                            <div class="storeinfo-mt">联系我们</div>
                            <div class="storeinfo-smc storeinfo-qrcode-smc"><img src="/goods/20190425213227.jpg"
                                                                                width="200px" height=""></div>
                        </div>
        <script type="text/javascript">_v30._hotRank($("#temp_6953ad8d99b344848b20f21187564143 ul li"), 200);</script>
        <!--m end-->
        <div class="m cssEdit ecs_mgb10 clearfix" id="temp_b3f67565d0344508972806065d6432d0" dialog="840" type="img">
            <div class="mc delayload ecs-oh clearfix">
                <a href="javascript:void(0)" target="_blank">
                    <img src="${pageContext.request.contextPath}/gsfiles/gsfile1/TB1usakGXXXXXcbaXXXsoa8_VXX-240-360.jpg"
                         style="height: 360px">
                </a>
                <!--topslider end--></div><!--mc--></div>
    
    
    
    
    
    
    </div>
</div><!--ecs_1190_w end-->
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
<link href="${pageContext.request.contextPath}/gsfiles/gsfile2/ecs_os_v1.css" rel="stylesheet" type="text/css">
 
<span style="display:"></span><span style="display:none"><script src="${pageContext.request.contextPath}/gsfiles/gsfile2/z_stat.php"
                                                                 language="JavaScript"></script><script
        src="${pageContext.request.contextPath}/gsfiles/gsfile2/core.php" charset="utf-8" type="text/javascript"></script><a
        href="https://www.cnzz.com/stat/website.php?web_id=1275154176" target="_blank" title="站长统计">站长统计</a></span>
<script src="${pageContext.request.contextPath}/gsfiles/gsfile2/Jquery.Validate.js" type="text/javascript"></script>
<link href="${pageContext.request.contextPath}/gsfiles/gsfile2/tipstyle.css" rel="stylesheet" type="text/css">

<!--footer end-->


 
<div style="display: none; position: fixed; left: 0px; top: 0px; width: 100%; height: 100%; cursor: move; opacity: 0; background: rgb(255, 255, 255);"></div>
<div class="tooltip">
    <div class="tooltip-title" style="display: none;">{title}</div>
    <div class="tooltip-content"></div>
</div>
 
 
<div style="display:none;" class="jqPreload0">sdsdssdsd<img
        src="${pageContext.request.contextPath}/gsfiles/gsfile2/678b3971ea564053baefca3e697f20b1.jpg" data-bd-imgshare-binded="1"></div>
<iframe frameborder="0" id="bdSharePopup_selectshare1555147902325bg" class="bdselect_share_bg" style="display:none;"
        src="${pageContext.request.contextPath}/gsfiles/gsfile2/saved_resource.html"></iframe>
 
 
</body>
</html>