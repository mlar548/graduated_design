$(document).ready(function () {
    //    $(".ptab ul li").last().css("border-right", "none");
    //    var ptablength = $(".ptab ul li").length;
    //    $(".ptab ul li").hover(
    //		function () {
    //		    var index = $(this).index();
    //		    $(".ptab ul li").removeClass("ptab_hover");
    //		    $(this).addClass("ptab_hover");
    //		    if (index == ptablength - 1) {
    //		        $(".ptab_outer .ptab").css("background", "#fff");
    //		    }
    //		    else {
    //		        $(".ptab_outer .ptab").css("background", "url(/images/ptabbg.png) repeat-x");
    //		    }
    //		    $(".phold").hide();
    //		    $($(".phold").get(index)).show();
    //		}
    //	);
});
var pageIndex = 0;     //页面索引初始值
var pageSize = 10;     //每页显示条数初始化，修改显示条数，修改这里即可
//$(document).ready(function () {
//    InitTransactionData(pageIndex);
//    InitAskData(pageIndex);
//    InitDataComm(pageIndex);
//商品销售记录
//分页，PageCount是总条目数，这是必选参数，其它参数都是可选
$("#Pagination").pagination(100, {
    callback: TransactionCallback,
    prev_text: '上一页',       //上一页按钮里text
    next_text: '下一页',       //下一页按钮里text
    items_per_page: pageSize,  //显示条数
    num_display_entries: 5,    //连续分页主体部分分页条目数
    current_page: pageIndex,   //当前页索引
    num_edge_entries: 1,        //两侧首尾分页条目数
    backUrlName: '#tb-list'     //URL地址返回开头
});
//商品销售记录翻页调用
function TransactionCallback(index, jq) {
    if ($(jq).html() != "<span class=\"current prev\">上一页</span><a class=\"next\" href=\"javascript:void(0)\">下一页</a>" && index != "-1") {
        InitTransactionData(index);
    }
}
//商品销售记录请求数据
function InitTransactionData(pageIndex) {
    var unk = (typeof ($(".tb-list").attr("n")) == "undefined") ? 0 : $(".tb-list").attr("n");
    $.ajax({
        type: "POST",
        dataType: "text",
        url: '/controls/PagerHandler.ashx',      //提交到一般处理程序请求数据
        data: "type=pagexs&pageIndex=" + (Math.floor(pageIndex) + 1) + "&pageSize=" + pageSize + "&pid=" + $(".productinfopanel").attr("pid"), //提交两个参数：pageIndex(页面索引)，pageSize(显示条数)                
        success: function (data) {
            var dataArray = new Array();
            dataArray = data.split("@");
            $(".tb-list tr:gt(0)").remove();        //移除Id为Result的表格里的行，从第二行开始（这里根据页面布局不同页变）
            $(".tb-list").append(dataArray[0]);             //将返回的数据追加到表格
            if (dataArray.length == 3) {
                if (unk != dataArray[1] && typeof (dataArray[1]) != "undefined") {
                    pageIndex = dataArray[2]
                    $(".tb-list").attr("n", dataArray[1]);
                    Re_edit("#Pagination", dataArray[1], TransactionCallback, dataArray[2]);
                }
            }
        }
    });
}
//商品咨询分页
//分页，PageCount是总条目数，这是必选参数，其它参数都是可选
$(".pageConsulting").pagination(100, {
    callback: AskCallback,
    prev_text: '上一页',       //上一页按钮里text
    next_text: '下一页',       //下一页按钮里text
    items_per_page: pageSize,  //显示条数
    num_display_entries: 5,    //连续分页主体部分分页条目数
    current_page: pageIndex,   //当前页索引
    num_edge_entries: 1,        //两侧首尾分页条目数
    backUrlName: '#item_list_Consulting'     //URL地址返回开头
});
//商品咨询翻页调用
function AskCallback(index, jq) {
    if ($(jq).html() != "<span class=\"current prev\">上一页</span><a class=\"next\" href=\"javascript:void(0)\">下一页</a>" && index != "-1") {
        InitAskData(index);
    }
}
//商品咨询请求数据
function InitAskData(pageIndex) {
    var unk = (typeof ($("#item_list_Consulting").attr("n")) == "undefined") ? 0 : $("#item_list_Consulting").attr("n");
    var isv4 = $("#hidden_isv4").val();
    var _postType = isv4 == "isv4" ? "msgs_v4" : "msgs";


    var key = "";
    if ($(".asking .search_form_text").val() != undefined) {
        key = $(".asking .search_form_text").val();
    }

    $("#item_list_Consulting").html("<div style='width:150px; height:16px;margin:20px auto;'>" +
        "<img src='/images/Default.gif' alt='' style='float: left;'/><span style='color: #CC0000;" +
        "display: block;float: left;margin-left: 10px;'>数据加载中。。。</span></div>");
    $.ajax({
        type: "POST",
        dataType: "text",
        url: '/controls/PagerHandler.ashx',      //提交到一般处理程序请求数据
        data: "type=" + _postType + "&pageIndex=" + (Math.floor(pageIndex) + 1) + "&pageSize=" + pageSize + "&pid=" + $(".productinfopanel").attr("pid") + "&keyword=" + key, //提交两个参数：pageIndex(页面索引)，pageSize(显示条数)                
        success: function (data) {
            //var dataArray = new Array();
            //dataArray = data.split("@");
            var mainEntity = $($.parseXML(data)).find("Root");
            if (mainEntity.length < 1) {
                $("#item_list_Consulting").html("暂没找到相应的数据！");
                return;
            }
            var content = $(mainEntity[0]).children("Content").text();
            if (content.length < 1) {
                $("#item_list_Consulting").html("暂没找到相应的数据！");
                return;
            }
            var TotalRow = $(mainEntity[0]).children("TotalRow").text();
            var PageIndex = $(mainEntity[0]).children("PageIndex").text();
            //$("#item_list_Consulting tr:gt(0)").remove();        //移除Id为Result的表格里的行，从第二行开始（这里根据页面布局不同页变）
            $("#item_list_Consulting").html(content);             //将返回的数据追加到表格 
          
                if (unk != TotalRow && typeof (TotalRow) != "undefined") {
                    pageIndex = PageIndex;
                    $("#item_list_Consulting").attr("n", TotalRow);
                    Re_edit(".pageConsulting", TotalRow, AskCallback, PageIndex);
                }
            
        }
    });
}



//商品评论分页
$(".pagec").pagination(100, {
    callback: InitCallbackComm,
    prev_text: '上一页',       //上一页按钮里text
    next_text: '下一页',       //下一页按钮里text
    items_per_page: pageSize,  //显示条数
    num_display_entries: 5,    //连续分页主体部分分页条目数
    current_page: pageIndex,   //当前页索引
    num_edge_entries: 1,        //两侧首尾分页条目数
    backUrlName: '#all'     //URL地址返回开头
});

var InitCallbackCommIndex = 0;
//商品评论翻页调用
function InitCallbackComm(index, jq) {
  
    if ($(jq).html() != "<span class=\"current prev\">上一页</span><a class=\"next\" href=\"javascript:void(0)\">下一页</a>" && index != "-1") {
        if (InitCallbackCommIndex != index) {
            InitDataComm(index);
       
        }
        InitCallbackCommIndex = index;
       
    }
}
//商品评论请求数据
function InitDataComm(pageIndex) {

    var isv4 = $("#hidden_isv4").val();
    var _postType = isv4 == "isv4" ? "Comment_v4" : "Comment";
    var msg = "";
    var chk = document.getElementsByName("rpl");
    for (var i = 0; i < chk.length; i++) {
        if (chk[i].checked) {
            msg = i;
        }
    }
        switch (msg.toString()) {
        case "0": { msg = "all"; }; break;
        case "1": { msg = "allscale"; }; break;
        case "2": { msg = "allscalein"; }; break;
        case "3": { msg = "allscalediff"; }; break;
    }
    $(".cdiv").css("display", "none");
    $("#" + msg).css("display", "block");
    $("#" + msg).html("<div style='width:150px; height:16px;margin:20px auto;'>" +
        "<img src='/images/Default.gif' alt='' style='float: left;'/><span style='color: #CC0000;" +
        "display: block;float: left;margin-left: 10px;'>数据加载中。。。</span></div>");
    var unk = (typeof ($(".Commentpanel").attr("n")) == "undefined") ? 0 : $(".Commentpanel").attr("n");
    $.ajax({
        type: "POST",
        dataType: "text",
        asys: false,
        url: '/controls/PagerHandler.ashx',      //提交到一般处理程序请求数据
        data: "type=" + _postType + "&pageIndex=" + (Math.floor(pageIndex) + 1) + "&pageSize=" + pageSize +
            "&pid=" + $(".productinfopanel").attr("pid") + "&msg=" + msg, //提交参数：pageIndex(页面索引)，pageSize(显示条数)                
        success: function (data) {
            var dataArray = new Array();
            dataArray = data.split("@");
            msg = "#" + msg;
            $(msg).html(dataArray[0]);             //将返回的数据追加到表格
         
            if (dataArray.length == 3) {
                if ( typeof (dataArray[1]) != "undefined") {

                    pageIndex = dataArray[2]
                    $(".Commentpanel").attr("n", dataArray[1]);
                 
                    Re_edit(".pagec", dataArray[1], InitCallbackComm, dataArray[2]);
                }
            }
        }
    });
}
//重新设置分页按钮
function Re_edit(selfID, Totals, Callback, pIndex) {

   
    if (typeof (pIndex) != "undefined") {
        $(selfID).pagination(Totals, {
            callback: Callback,
            prev_text: '上一页',       //上一页按钮里text
            next_text: '下一页',       //下一页按钮里text
            items_per_page: pageSize,  //显示条数
            num_display_entries: 5,    //连续分页主体部分分页条目数
            current_page:Number(pIndex),   //当前页索引
            num_edge_entries: 1        //两侧首尾分页条目数
        });
    }
}
function switchComment(obj, pageIndex) {
    obj = $(obj);
    var msg = "";
    $(".Comment ul li").removeClass("curr");
    obj.addClass("curr");
    msg = obj.index(".Comment ul li");
    switch (msg.toString()) {
        case "0": { msg = "all"; }; break;
        case "1": { msg = "allscale"; }; break;
        case "2": { msg = "allscalein"; }; break;
        case "3": { msg = "allscalediff"; }; break;
    }
    $(".cdiv").hide();
    $("#" + msg).show();
    $("#" + msg).html("<div style='width:150px; height:16px;margin:20px auto;'>" +
        "<img src='/images/Default.gif' alt='' style='float: left;'/><span style='color: #CC0000;" +
        "display: block;float: left;margin-left: 10px;'>数据加载中。。。</span></div>");
    var unk = (typeof ($(".Commentpanel").attr("n")) == "undefined") ? 0 : $(".Commentpanel").attr("n");
    $.ajax({
        type: "POST",
        dataType: "text",
        asys: false,
        url: '/controls/PagerHandler.ashx',      //提交到一般处理程序请求数据
        data: "type=Comment_v4&pageIndex=" + (Math.floor(pageIndex) + 1) + "&pageSize=" + pageSize+
            "&pid=" + $(".productinfopanel").attr("pid") + "&msg=" + msg, //提交参数：pageIndex(页面索引)，pageSize(显示条数)                
        success: function (data) {
            var dataArray = new Array();
            dataArray = data.split("@");
            msg = "#" + msg;
            $(msg).html(dataArray[0]);             //将返回的数据追加到表格
            if (dataArray.length == 3) {
                //if (unk != dataArray[1] && typeof (dataArray[1]) != "undefined") {
                    pageIndex = dataArray[2]
                    $(".Commentpanel").attr("n", dataArray[1]);
                    Re_edit(".pagec", dataArray[1], InitCallbackComm, dataArray[2]);
                //}
            }
        }
    });
}
//});
