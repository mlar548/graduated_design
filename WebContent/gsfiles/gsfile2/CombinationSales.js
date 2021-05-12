var errorUrl = "/images/_07.png";
var PreferentialSuit = {
    headerTemplate: '<a href="javascript:;" rel="gp_{#cpId}" class="">套餐{#no}</a>',
    mainPicTemplate: '<div class="pic gp_{#cpId}" style="display:none">\
                        <table cellspacing="0" cellpadding="0">\
                            <tbody>\
                                <tr>\
                                    <td>\
                                        <img src="{#productPic}" onerror="this.src=\'' + errorUrl + '\'">\
                                    </td>\
                                </tr>\
                            </tbody>\
                        </table>\
                    </div>',
    mainGoodTemplate: '<div class="gpp gp_{#cpId}" style="display:none">\
                        <h4 pid="{#productId}" gid="{#goodsId}" yj="{#prePrice1}" xj="{#price1}">{#goodsName}</h4>\
                        <div class="price" style="float: left; display: ">¥{#price}</div>\
                        <div class="qty" style="color: red; font-weight: bold; font-size: 14px; display: ">&nbsp;&nbsp;x&nbsp;&nbsp;<span class="combineqty">{#qty}</span></div>\
                    </div>',
    childGoodTemplate: '<li class="gp_{#cpId}" yj="{#prePrice1}" xj="{#price1}" style="display: none;">\
                                <div class="pic">\
                                    <table cellspacing="0" cellpadding="0">\
                                        <tbody>\
                                            <tr>\
                                                <td>\
                                                    <a href="/productinfo/{#productId}-{#goodsId}.html" target="_blank">\
                                                        <img src="{#productPic}" class="err-product" onerror="this.src=\'' + errorUrl + '\'">\
                                                    </a>\
                                                </td>\
                                            </tr>\
                                        </tbody>\
                                    </table>\
                                </div>\
                                <h4><a href="/productinfo/{#productId}-{#goodsId}.html" target="_blank" title="{#goodsName}">{#goodsName}</a></h4>\
                                <label style="display: ">¥<span>{#price}</span><span style="color: red;">&nbsp;&nbsp;x&nbsp;&nbsp;</span><span style="color: red;" class="combineqty">{#qty}</span></label>\
                            </li>',
    containerTemplate: '<div class="grouprod">\
     <div class="grouprod_mt"><i class="grouprod-bg"></i><span>优惠套装</span></div>\
     <div class="grouprod_mc grouprod_mc_1" id="grouprod_mc_1">\
         <div class="smt clearfix">{#headerTemplate}</div>\
         <div class="smc clearfix" style="display: block;">\
             <div class="baseprod">\
                        {#mainPicTemplate}{#mainGoodTemplate}\
                    <i class="grouprod-bg"></i>\
                </div>\
                <div class="oprodlist_warp">\
                    <div class="slider">\
                        <ul class="clearfix" style="width: 966px; position: relative; left: 0px;">\
                            {#childGoodTemplate}\
                        </ul>\
                    </div>\
                    <a class="prv ctrl grouprod-bg" href="javascript:;" style="display: inline;"></a><a class="next ctrl grouprod-bg" href="javascript:;" style="display: inline;"></a>\
                </div>\
            </div>\
            <div class="bookout clearfix">\
                <div class="btn">\
                    <input type="button" class="prodinfo-btn prodinfo-btn-styleone prodinfo-btn-buy" id="btnCollocationPackage" value="立即购买" style="line-height: 35px; height: 35px;"><input type="button" class="prodinfo-btn prodinfo-btn-styletwo prodinfo-btn-addcart" id="btnAddCollocationPackage" value="加入购物车" style="line-height: 35px; height: 35px;">\
                </div>\
                <div style="float: right; margin: 6px 16px 0 0;">套</div>\
                <div class="wrap-input Numinputs" style="float: right; margin: 6px 6px 0 0;"><a class="btn-reduce" href="javascript:;">-</a><a class="btn-add" href="javascript:;">+</a><input type="text" value="1" class="combineqty text"></div>\
                <div class="bookinfo">\
                    <p style="display: ">套餐价格：<em>¥<span id="newtp">{#sumPrice}</span></em><span>原总价：<i>¥<span id="oldtp">{#preSumPrice}</span></i></span></p>\
                </div>\
                <s class="grouprod-bg"></s>\
            </div>\
        </div>\
    </div>',
    render: function (json, goodsId) {
        var obj = this;
        if (json == null || json == undefined || json.length == 0) {
            $("#PreferentialSuit").html("");
            return;
        }
        var mainArray = [];
        $.each(json, function (i, item) {
            if (item.goodsid == goodsId && item.pdismaingoods == "1") {
                if (!mainArray["cpid" + item.cpid]) {
                    mainArray["cpid" + item.cpid] = item;
                    mainArray.push(item.cpid);
                }
            }
        });
        var headerstr = "";
        var mainstr = "";
        var mainpic = "";
        var childstr = "";
        var prePrice = 0, price = 0;
        for (var m = 0; m < mainArray.length; m++) {
            var cpid = mainArray[m];
            var mainItem = mainArray["cpid" + cpid];
            headerstr += obj.headerTemplate
                .replaceAll("{#cpId}", cpid)
                .replaceAll("{#no}", m + 1);
            if (m != mainArray.length - 1) {
                headerstr += "<em>|</em>";
            }
            if (m == 0) {
                mainpic = obj.mainPicTemplate
                    .replaceAll("{#cpId}", mainItem.cpid)
                 .replaceAll("{#productPic}", mainItem.aproductpic);
            }
            mainstr += obj.mainGoodTemplate
                .replaceAll("{#cpId}", mainItem.cpid)
                        .replaceAll("{#prePrice}", parseFloat(mainItem.price).toFixed(2))
                            .replaceAll("{#prePrice1}", parseFloat((parseFloat(mainItem.pdprice).toFixed(2) == -1 ? 0 : parseFloat(mainItem.price).toFixed(2))))
                        .replaceAll("{#price}", parseFloat(mainItem.pdprice).toFixed(2) == -1 ? "<a class='login-showprice' href='/login.aspx'>登录后显示价格</a>" : parseFloat(mainItem.pdprice).toFixed(2))
                        .replaceAll("{#price1}", parseFloat(mainItem.pdprice).toFixed(2) == -1 ? 0 : parseFloat(mainItem.pdprice).toFixed(2))
                        .replaceAll("{#productId}", mainItem.productid)
                        .replaceAll("{#goodsId}", mainItem.Goodsid)
                        .replaceAll("{#productPic}", mainItem.aproductpic)
                        .replaceAll("{#goodsName}", mainItem.productname)
                        .replaceAll("{#qty}", parseFloat(mainItem.combineqty).toFixed())
            ;
            for (var i = 0; i < json.length; i++) {
                var item = json[i];
                if (item.cpid == cpid) {
                    if (item.goodsid != mainItem.goodsid) {
                        childstr += PreferentialSuit.childGoodTemplate
                            .replaceAll("{#cpId}", item.cpid)
                            .replaceAll("{#prePrice}", parseFloat(item.price).toFixed(2))
                            .replaceAll("{#prePrice1}", parseFloat((parseFloat(item.pdprice).toFixed(2) == -1 ? 0 : parseFloat(item.price).toFixed(2))))
                            .replaceAll("{#price}", parseFloat(item.pdprice).toFixed(2) == -1 ? "<a class='login-showprice' href='/login.aspx'>登录后显示价格</a>" : parseFloat(item.pdprice).toFixed(2))
                        .replaceAll("{#price1}", parseFloat(item.pdprice).toFixed(2) == -1 ? 0 : parseFloat(item.pdprice).toFixed(2))
                            .replaceAll("{#productId}", item.productid)
                            .replaceAll("{#goodsId}", item.goodsid)
                            .replaceAll("{#productPic}", item.aproductpic)
                            .replaceAll("{#goodsName}", item.productname)
                            .replaceAll("{#qty}", parseFloat(item.combineqty).toFixed());
                    }
                    if (m == 0) {
                        prePrice += parseFloat((parseFloat(item.pdprice).toFixed(2) == -1 ? 0 : parseFloat(item.price).toFixed(2)));
                        price += parseFloat((parseFloat(item.pdprice).toFixed(2) == -1 ? 0 : parseFloat(item.pdprice).toFixed(2)));
                    }
                } else {
                    continue;
                }
            }
        };
        var containerstr = obj.containerTemplate
            .replaceAll("{#headerTemplate}", headerstr)
            .replaceAll("{#mainPicTemplate}", mainpic)
            .replaceAll("{#mainGoodTemplate}", mainstr)
             .replaceAll("{#childGoodTemplate}", childstr)
            .replaceAll("{#preSumPrice}", prePrice.toFixed(2))
            .replaceAll("{#sumPrice}", price.toFixed(2))
        ;
        $("#PreferentialSuit").html(containerstr);
    }
}
var RecommendedSuit = {
    headerTemplate: '<a href="javascript:;" rel="gp_{#cpId}" class="">{#no}</a>',
    mainPicTemplate: '<div class="pic gp_{#cpId}">\
                        <table cellspacing="0" cellpadding="0">\
                            <tbody>\
                                <tr>\
                                    <td>\
                                        <img src="{#productPic}" onerror="this.src=\'' + errorUrl + '\'">\
                                    </td>\
                                </tr>\
                            </tbody>\
                        </table>\
                    </div>',
    mainGoodTemplate: '\
                        <h4 pid="{#productId}" gid="{#goodsId}" yj="{#prePrice}" xj="{#price1}">{#goodsName}</h4>\
                        <div class="price" style="float: left; display: ">¥{#price}</div>\
                    ',
    childGoodTemplate: '<li class="{#classname}" yj="{#prePrice}" xj="{#price1}">\
                                <div class="pic">\
                                    <table cellspacing="0" cellpadding="0">\
                                        <tbody>\
                                            <tr>\
                                                <td>\
                                                    <a href="/productinfo/{#productId}-{#goodsId}.html" target="_blank">\
                                                        <img src="{#productPic}" class="err-product" onerror="this.src=\'' + errorUrl + '\'">\
                                                    </a>\
                                                </td>\
                                            </tr>\
                                        </tbody>\
                                    </table>\
                                </div>\
                                <h4><a href="/productinfo/{#productId}-{#goodsId}.html" target="_blank" title="{#goodsName}">{#goodsName}</a></h4>\
                                <label style="display: "><input type="checkbox" pid="{#productId}" gid="{#goodsId}" yj="{#prePrice}" xj="{#price1}">¥<span style="display: ">{#price}</span></label>\
                            </li>',
    containerTemplate: '<div class="grouprod">\
     <div class="grouprod_mt"><i class="grouprod-bg"></i><span>推荐搭配</span></div>\
     <div class="grouprod_mc grouprod_mc_1" id="grouprod_mc_2">\
         <div class="smt clearfix">{#headerTemplate}</div>\
         <div class="smc clearfix" style="display: block;">\
             <div class="baseprod">\
                        {#mainPicTemplate}{#mainGoodTemplate}\
                    <i class="grouprod-bg"></i>\
                </div>\
                <div class="oprodlist_warp">\
                    <div class="slider">\
                        <ul class="clearfix" style="width: 966px; position: relative; left: 0px;">\
                            {#childGoodTemplate}\
                        </ul>\
                    </div>\
                    <a class="prv ctrl grouprod-bg" href="javascript:;" style="display: inline;"></a><a class="next ctrl grouprod-bg" href="javascript:;" style="display: inline;"></a>\
                </div>\
            </div>\
            <div class="bookout clearfix">\
                <div class="btn">\
                    <input type="button" class="prodinfo-btn prodinfo-btn-styletwo prodinfo-btn-addcart" style="line-height: 35px; height: 35px;" value="加入购物车">\
                </div>\
                <div class="bookinfo">\
                    <p>已选购配件：<i id="tcount">0</i>个</p>\
                    <p style="display: ">套餐价格：<em>¥<span id="newtp">{#sumPrice}</span></em><span>原总价：<i>¥<span id="oldtp">{#preSumPrice}</span></i></span></p>\
                </div>\
                <s class="grouprod-bg"></s>\
            </div>\
        </div>\
    </div>',
    render: function (json, goodsId) {
        var obj = this;
        if (json == null || json == undefined || json.length == 0) {
            $("#RecommendedSuit").html("");
            return;
        }
        var mainArray = [];
        var childArray = [];
        $.each(json, function (i, item) {
            var classname = " gp_" + item.agid;

            if (!mainArray["cpid" + item.agid]) {
                mainArray["cpid" + item.agid] = item;
                mainArray.push(item.agid);
            }
            if (item.maingoods == "0") {
                if (!childArray["child" + item.goodsid]) {
                    childArray["child" + item.goodsid] = { classname: classname, data: item }
                    childArray.push(item.goodsid);
                } else {
                    var temp = childArray["child" + item.goodsid];
                    temp.classname = temp.classname + classname;
                    childArray["child" + item.goodsid] = temp;
                }
            }

        });
        var headerstr = '<a rel="0" class="curr" href="javascript:;">全部</a>';;
        var mainstr = "";
        var mainpic = "";
        var childstr = "";
        var prePrice = 0, price = 0;
        for (var m = 0; m < mainArray.length; m++) {
            var cpid = mainArray[m];
            var mainItem = mainArray["cpid" + cpid];
            if (mainItem.maingoods == "0") {
                headerstr += "<em>|</em>";
                headerstr += obj.headerTemplate
                    .replaceAll("{#cpId}", cpid)
                    .replaceAll("{#no}", mainItem.agname);
            }
            else {
                mainpic = obj.mainPicTemplate
                    .replaceAll("{#cpId}", mainItem.agid)
                    .replaceAll("{#productPic}", (mainItem.productpic.length == 0 ? errorUrl : mainItem.productpic));

                mainstr = obj.mainGoodTemplate
                    .replaceAll("{#cpId}", mainItem.agid)
                    .replaceAll("{#prePrice}", parseFloat(mainItem.mktprice).toFixed(2))
                    .replaceAll("{#price}", parseFloat(mainItem.productprice).toFixed(2) == -1 ? "<a class='login-showprice' href='/login.aspx'>登录后显示价格</a>" : parseFloat(mainItem.productprice).toFixed(2))
                    .replaceAll("{#price1}", parseFloat(mainItem.productprice).toFixed(2) == -1 ? 0 : parseFloat(mainItem.productprice).toFixed(2))
                    .replaceAll("{#productId}", mainItem.productid)
                    .replaceAll("{#goodsId}", mainItem.goodsid)
                    .replaceAll("{#productPic}", mainItem.productpic.length == 0 ? errorUrl : mainItem.productpic)
                    .replaceAll("{#goodsName}", mainItem.productname);
                prePrice = parseFloat(parseFloat(mainItem.productprice).toFixed(2) == -1 ? 0 : mainItem.mktprice);
                price = parseFloat(parseFloat(mainItem.productprice).toFixed(2) == -1 ? 0 : mainItem.productprice);
            }
        };
        for (var m = 0; m < childArray.length; m++) {
            var childItem = childArray["child" + childArray[m]];
            var item = childItem.data;
            childstr += obj.childGoodTemplate
                    .replaceAll("{#cpId}", item.agid)
                    .replaceAll("{#classname}", childItem.classname)
                    .replaceAll("{#prePrice}", parseFloat(item.mktprice).toFixed(2))
                    .replaceAll("{#price}", parseFloat(item.productprice).toFixed(2) == -1 ? "<a class='login-showprice' href='/login.aspx'>登录后显示价格</a>" : parseFloat(item.productprice).toFixed(2))
                    .replaceAll("{#price1}", parseFloat(item.productprice).toFixed(2) == -1 ? 0 : parseFloat(item.productprice).toFixed(2))
                    .replaceAll("{#productId}", item.productid)
                    .replaceAll("{#goodsId}", item.goodsid)
                    .replaceAll("{#productPic}", item.productpic.length == 0 ? errorUrl : item.productpic)
                    .replaceAll("{#goodsName}", item.productname)
            ;
        };
        var containerstr = obj.containerTemplate
            .replaceAll("{#headerTemplate}", headerstr)
            .replaceAll("{#mainPicTemplate}", mainpic)
            .replaceAll("{#mainGoodTemplate}", mainstr)
             .replaceAll("{#childGoodTemplate}", childstr)
            .replaceAll("{#preSumPrice}", prePrice.toFixed(2))
            .replaceAll("{#sumPrice}", price.toFixed(2))
        ;
        $("#RecommendedSuit").html(containerstr);
    }
}

String.prototype.replaceAll = function (stringToFind, stringToReplace) {

    var origin = this;
    var lastIndex = origin.indexOf(stringToFind);

    while (lastIndex != -1) {

        origin = origin.replace(stringToFind, stringToReplace);
        lastIndex = origin.indexOf(stringToFind);
    }

    return origin;
};