/*************************
最后修改：hcc
修改日期：2018-4-13
代码内容：购物车相关操作
主要方法：
cart.init 初始化购物车
cart.open 
cart.visit
cart.changeprice 修改价格
cart.changeCartMark 修改购物车标签
cart.bindRealTotal 绑定订单总金额
cart.request 后台数据操作
cart.requestFn 后台数据操作，回调前端函数
cart.actionChange 商品数量变更
cart.bindActionChanged 绑定商品变更内容
cart.actionCommand 动作完成后操作
cart.actionError 动作错误后操作
*************************/

$(document).ready(function () {
    cart.init();
});

var cart = {
    url: '/controls/CartOrderHandler.ashx',
    type: 0,
    isPayJump: true,
    init: function () {
        cart.getType();
        switch (cart.type) {
            case 1:
            case "1":
                cart.changeCartMark();
                clist.init();
                break;
            case 2:
            case "2":
                cbuy.init();
                break;
            case 3:
            case "3":
                cpay.init();
                break;
        }
    },
    open: function (url) {
        var a = $("<a href='{0}' target='_blank'>target</a>".toFormat(url)).get(0);
        a.click();
    },
    visit: function (pid) {
        var url = "/productinfo/{0}.html".toFormat(pid);
        cart.open(url);
    },
    cartMark: "购物车",
    getType: function () {
        var t = cart.getObject("actionInit");
        if (t != undefined)
            cart.type = t.value;
        if (cart.type == undefined || cart.type == 0) {
            var path = location.pathname;
            if (path.indexOf("/list.aspx") > 0) {
                cart.type = 1;
            }
            if (path.indexOf("/buy.aspx") > 0) {
                cart.type = 2;
            }
            if (path.indexOf("/Pay.aspx") > 0) {
                cart.type = 3;
            }
            if (path.indexOf("/action.aspx") > 0) {
                cart.type = 3;
                cart.isPayer = true;
            }
        }
        db.type = cart.type;
        cart.para = cart.GetRequest();
        cart.initpara();
    },
    request: function (data, async) {
        async = async != undefined && async == true ? true : false;
        var result = { Status: -1, Code: -1 };
        $.ajax({
            type: 'POST',
            dataType: "json",
            url: cart.url,
            data: data,
            async: async,
            error: function (request, textStatus, errorThrown) {
                result.Status = 2;
                result.Code = "999";
            },
            success: function (json) {
                result = json;
                $("#loading").hide();
            }
        });
        return result;
    },

    requestFn: function (data, async, para) {
        async = async != undefined && async == true ? true : false;
        if (para != undefined && (typeof para.init == "function"))
            para.init();

        var url = (para != undefined && para.url != undefined ? para.url : cart.url);

        $.ajax({
            type: 'POST',
            dataType: "json",
            url: url,
            data: data,
            async: async,
            error: function (request, textStatus, errorThrown) {
                var result = { Status: -1, Code: -1 };
                cart.Warn("999");
            },
            success: function (json) {
                var result = json;
                if (para == undefined)
                    return;

                if (result.Status == 1) {
                    if (typeof para.func == "function")
                        para.func(result, para.fpara);
                    if (typeof para.success == "function")
                        para.success();

                } else if (result.Status == 3) {
                    cart.actionErrors(result);
                    if (typeof para.error == "function")
                        para.error();
                } else {
                    if (result.Status == 2 || result.Status == 0) {
                        if (result.Code == "3004") {
                           
                            var message = "提交订单失败！订单金额小于您当前等级最小下单金额&yen;" + result.Message + "。";
                            if (cart.isquote) {
                                message = message.replace("购物车", "报价篮");
                                message = message.replace("订单", "报价单");
                            }
                            Ecshop.Tool.Hint.Warn({ info: message,second:3 });
                            
                        } else {
                            cart.Warn(result.Code, para.error, true);
                            cart.actionCommand(result);
                        }
                    }
                }
            }
        });
    },
    actionCommand: function (r) {
        var action = r.Action;
        switch (action) {
            case 5:
                window.location.href = window.location.href;
                break;
            case 7:
                location.href = "/login.aspx";
                break;
            case 9:
                var url = '/cart/list.aspx{0}'.toFormat(cart.ecs == undefined || cart.ecs < 1 ? "" : "?ecs=" + cart.ecs);
                if (cart.isquote)
                    url = '/cart/list.aspx?quote=quote';
                if (cart.isquote || cart.ecs > 0) {
                    url = url + "{0}".toFormat(cart.uid == undefined || cart.uid < 1 ? "" : "&=" + cart.ecs);
                }
                location.href = url;
                break;
        }
    },
    actionErrors: function (r) {
        var currObj = null;
        for (var i = 0, len = r.Result.length; i < len; i++) {
            var data = r.Result[i];
            currObj = 'lsgc_' + r.Result[i].Result;
            if (data.Action == 3 && data.Message == "-1") {
                cart.Error(data.Message, null, false);
                continue;
            }
            if (data.Action == 5) {
                $("#tip_" + data.Result).html(data.Message);
            }
            $('#' + currObj).carttips('toggle', data.Action == 5 ? "此商品" + data.Message : data.Message);
        }
    },
    moid: '',
    uid: '',
    ecs: '',
    isReal: false,
    isReplace: false,
    isBatch: false,
    isPayer: false,
    isquote: false,
    initpara: function () {
        cart.moid = cart.get('moid');
        cart.ecs = cart.get('ecs');
        cart.uid = cart.get('uid');
        cart.isquote = cart.get('quote') == "quote";
        cart.cartMark = cart.isquote ? "报价篮" : "购物车";
        cart.isReplace = cart.ecs == 2;
        cart.isBatch = cart.ecs == 3;
        cart.isReal = cart.ecs == 1;
    },
    para: [],
    get: function (id) {
        return cart.para[id];
    },
    changeCartMark: function () {
        $("#cartmark").html(cart.cartMark);
        $("#nocartmark").html(cart.cartMark);
    },
    GetRequest: function () {
        var url = location.search; //获取url中"?"符后的字串
        var theRequest = new Object();
        if (url.indexOf("?") != -1) {
            var str = url.substr(1);
            var strs = str.split("&");
            for (var i = 0; i < strs.length; i++) {
                theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
            }
        }
        return theRequest;
    },
    getObject: function (el) {
        if (typeof el == "object") {
            return el;
        } else return document.getElementById(el);
    },
    getNoEmpty: function (v) {
        if (v == undefined || v == '') return "--";
        return v;
    },
    getInitImage: function (path) {
        if (path == undefined || path == " " || path == '')
            return '/images/_07.png';
        else return path;
    },
    toDefault: function (v, d) {
        return (v == undefined || v == '') ? d : v;
    },
    toDecimalAuto: function (v, l, ft, dv) {
        dv = (dv == undefined || dv == '' ? 0 : dv);
        if (v == undefined || v == '') return dv;
        var re = /^-?[1-9]+(\.\d+)?$|^-?0(\.\d+)?$|^-?[1-9]+[0-9]*(\.\d+)?$/;
        v = (!re.test(v) ? dv : v);
        var a = parseFloat(v);
        var isfix = true;
        switch (l) {
            case 0:
                a = a.toFixed(0);
                break;
            case 1:
                a = a.toFixed(1);
                break;
            case 2:
                a = a.toFixed(2);
                break;
            case 4:
                a = a.toFixed(4);
                break;
            default:
                isfix = false;
                a = a.toFixed(4);
                break;
        }
        if (isfix) return a;
        var n = a.split('.');
        var str = n[1];

        if (str.length < 2) return a;
        if (str.substring(2, 4) != "00") {
            return a;
        } else if (str.substring(0, 2) != "00") {
            return parseFloat(a).toFixed(2);
        } else {
            if (ft == false || ft == undefined)//ft four-two 非4即2
                return parseFloat(a).toFixed(0);
            else return parseFloat(a).toFixed(2);
        }
    },
    toDecimal: function (v, l, ft, dv) {
        var r = cart.toDecimalAuto(v, l, ft, dv);
        return parseFloat(r);
    },
    bindData: function (el, val, type, dval) {
        el = cart.getObject(el);
        if (el == undefined) return;
        var bval = val == undefined || val == '' || val == 'undefined' ? (dval == undefined || dval == 'undefined' ? '--' : dval) : val;
        type = type == undefined ? 0 : type;
        switch (type) {
            case 1:
                el.innerHTML = bval;
                break;
            case 2:
                el.innerText = bval;
                break;
            case 3:
                el.src = bval;
                break;
            case 5:
                el.href = bval;
                break;
            default:
                el.value = bval;
                break;
        }
    },
    tip: function (fix, html) {
        var ele = $("#box_" + fix);
        ele.html(html);
        ele.removeClass("none");
        ele.addClass("cshow");
    },
    autotip: function (fix, html, t) {
        cart.tip(fix, html);
        cart.showtip(t);
    },
    showtip: function (t) {
        t = t == undefined || t < 3000 ? 3000 : t;
        $(".bomb-box.cshow").fadeIn();
        setTimeout(function () {
            $(".bomb-box.cshow").fadeOut("slow");
            $(".bomb-box.cshow").removeClass("cshow");
        }, t);
    },
    toJson: function (obj) {
        //var json = '';
        //if ($.browser.msie == null || $.browser.msie == undefined) {
        //    json = JSON.stringify(obj);
        //} else {
        //    if ($.browser.version == "7.0" || $.browser.version == "6.0") {
        //        json = jQuery.parseJSON(obj);
        //    } else {
        //        json = JSON.stringify(obj);
        //    }
        //}
        return JSON.stringify(obj);;
    },

    toJsonx: function (str) {
        return JSON.parse(str);
    },

    isInteger: function (o) {
        var pice = o.replace(/^([0-9]{0,8})$/, '');
        if (pice.length > 0) {
            return false;
        } else
            return true;
    },
    checkParam: function (v, callback, calltype) {
        var r = (v == undefined || v == '');
        r = !r;
        calltype = (calltype == undefined || calltype == '') ? false : calltype;
        if (r == calltype && $.isFunction(callback)) {
            callback();
        }
        return r;
    },
    createAlertInfo: function (type, message) {
        var img = "/images/cart/alert.png";
        switch (type) {
            case 1:
                img = "/images/cart/alert.png";
                break;
            case 2:
                img = "/images/cart/alert.png";
                break;
            default:
                img = "/images/cart/alert.png";
                break;
        }
        return "<div class='addFavorites'><img src='{0}' alt=''/><div class='addFavorites-box'>{1}</div></div>".toFormat(img, message);
    },
    getGoodStatus: function (t) {
        t = parseInt(t);
        switch (t) {
            case 1:
                return "商品已删";
            case 2:
                return "货品已删";
            case 3:
                return "商品已下架";
            case 4:
                return "库存不足";
            case 5:
                return "无货";
            case 6:
                return "有货";
            case -6:
                return "活动结束";
            default:
                return "";
        }
    },
    autoFoucs: function (id) {
        document.getElementById(id).scrollIntoView();
    },
    Success: function (message, callback, iscode) {
        cart._showAlert(1, message, callback, iscode);
        return true;
    },
    Warn: function (message, callback, iscode) {
        cart._showAlert(2, message, callback, iscode);
    },
    Message: function (message, callback, iscode) {
        cart._showAlert(0, message, callback, iscode);
    },
    Error: function (message, callback, iscode) {
        cart._showAlert(3, message, callback, iscode);
    },
    _showAlert: function (type, message, callback, iscode) {
        iscode = (iscode == true || iscode == undefined);
        message = iscode ? syscode.getMessage(message) : message;
        if (cart.isquote) {
            message = message.replace("购物车", "报价篮");
            message = message.replace("订单", "报价单");
        }
        switch (type) {
            case 1:
                Ecshop.Tool.Hint.Ok({ info: message, fn: callback });
                break;
            case 2:
                Ecshop.Tool.Hint.Warn({ info: message, fn: callback });
                break;
            case 3:
                Ecshop.Tool.Hint.Error({ info: message, fn: callback });
                break;
            default:
                Ecshop.Tool.Hint.Warn({ info: message, fn: callback });
                break;
        }
        return true;
    },
    alert: function (message, callback, iscode) {
        return;
        iscode = (iscode == true || iscode == undefined);
        message = iscode ? syscode.getMessage(message) : message;
        alert(message);
        if ($.isFunction(callback)) {
            callback();
        }
    }
};
var db = {
    type: 0,
    data: [],
    changeRemark: function (sid, mark) {
        db.command(sid, 2, mark);
    },
    changeFeight: function (sid, dly, self) {
        db.command(sid, 3, '', dly, self);
    },
    changeSelf: function (sid, selfid) {
        db.command(sid, 5, '', selfid);
    },
    AddStore: function (sid, name) {
        db.command(sid, 1, name, 0, 0);
    },
    getStore: function (sid) {
        return db.command(sid, 4);
    },
    getedata: function () {
        var list = [];
        for (var i = 0, len = db.data.length; i < len; i++) {
            var d = db.data[i];
            list.push({ id: d.id, remark: d.remark, dly: d.dly, selfid: d.selfid, self: d.self });
        }
        return list;
    },
    getStores: function () {
        return db.data;
    },
    command: function (sid, type, mark, dly, self) {
        var isnew = true;
        for (var i = 0, len = db.data.length; i < len; i++) {
            var dd = db.data[i];
            if (sid != dd.id) continue;
            if (type == 1) {
                dd.remark = mark;
                dd.dly = dly;
                isnew = false;
            } else if (type == 2) {
                dd.remark = mark;
            } else if (type == 3) {
                dd.dly = dly;
                dd.self = self;
            } else if (type == 4) {
                return dd; //db.data.splice(i, 1);
            }
            else if (type == 5) {
                dd.selfid = dly == undefined ? 0 : dly;
            }
        }
        if (isnew && type == 1) {
            var ndata = { id: sid, name: mark, remark: '', dly: dly, selfid: 0, self: 0 };
            db.data.push(ndata);
        }
    },
    all: function () {
        return db.data;
    },
    pay: [],
    getStorePay: function (storeid) {
        for (var i = 0, len = db.pay.length; i < len; i++) {
            var data = db.pay[i];
            if (data.Id != storeid)
                continue;
            return data;
        }
    },
    initPay: function (data) {
        db.pay = eval("(" + data + ")");
    },
    changePay: function (id, pay) {
        for (var i = 0, len = db.pay.length; i < len; i++) {
            var p = db.pay[i];
            if (p.sid != id) continue;
            p.ispay = pay;
        }
    },
    getStoreName: function (id) {
        for (var i = 0, len = db.pay.length; i < len; i++) {
            var p = db.pay[i];
            if (p.sid != id) continue;
            return p.sname;
        }
        return '';
    },
    cheap: [],
    appendCoupons: function (sid, list) {
        db.cheap.push({ sid: sid, list: list });
    },
    appendCoupon: function (sid, data) {
        for (var i = 0, len = db.cheap.length; i < len; i++) {
            var c = db.cheap[i];
            if (c.sid != sid) continue;
            c.list.push(data);
        }
    },
    getCheapByStore: function (sid) {
        for (var i = 0, len = db.cheap.length; i < len; i++) {
            var c = db.cheap[i];
            if (c.sid != sid) continue;
            return c.list;
        }
        return null;
    },
    area: [],
    gifts: [],
    appendGiftByGoods: function (sid, goods) {
        if (goods.Type != 4 && goods.Type != 3)
            return;
        for (var i = 0, len = goods.SendGood.length; i < len; i++) {
            db.appendGift(sid, goods.SendGood[i], goods);
        }
    },
    appendGift: function (sid, gift, goods) {
        db._giftCommand(1, '', sid, gift, goods);
    },
    changeGift: function (key, giftid, status, count) {
        return db._giftCommand(7, key, status, giftid, count);
    },
    removeGift: function (key) {
        db._giftCommand(2, key);
    },
    getGift: function (key) {
        return db._giftCommand(3, key);
    },
    existGift: function (key, giftid) {
        return db._giftCommand(5, key, 0, giftid);
    },
    getGiftById: function (key, giftid) {
        return db._giftCommand(6, key, 0, giftid);
    },
    _giftCommand: function (type, key, sid, gift, goods) {
        var isadd = true;
        var tk = key;
        if (type == 1)
            tk = "{0}_{1}_{2}".toFormat(sid, goods.Type, cart.toDefault(goods.WhoseId, "0"));
        var rbox = [];
        for (var i = 0, len = db.gifts.length; i < len; i++) {
            var g = db.gifts[i];
            if (g == null || g.key != tk)
                continue;
            if (type == 1) {
                g.count = g.count + gift.Count; //cart.toDecimalAuto(g.count) +cart.toDecimalAuto(gift.Count);
                isadd = false;
            } else if (type == 2) {
                if (g.key == key)
                    db.data.splice(i, 1);
            } else if (type == 3) {
                rbox.push(g);
            } else if (type == 4) {
                g.count = g.count - gift.Count;
            } else if (type == 5) {
                if (g.gid == gift)
                    return true;
            }
            else if (type == 6) {
                if (g.gid == gift)
                    return g;
            }
            else if (type == 7) {
                if (sid == true)
                    g.count = g.count + goods;
                else
                    g.count = g.count - goods;
            }
        }
        if (isadd && type == 1) {
            var gdata = { key: tk, sid: sid, wid: cart.toDefault(goods.WhoseId, "0"), pid: gift.ParentId, ptype: goods.Type, gid: gift.GoodsId, name: gift.Name, img: gift.Image, unit: gift.Unit, count: 0, spec: gift.Spec, status: 0 };
            gdata.count = gift.Count;
            db.gifts.push(gdata);
        }
        if (type == 3)
            return rbox;
        else if (type == 5)
            return false;
        else if (type == 6)
            return null;
    }
};
String.prototype.asString = function () {
    if (arguments.length == 0) return this;
    var v = this;
    return (v == undefined || v == '') ? arguments[0] : v;
};
String.prototype.toFormat = function () {
    if (arguments.length == 0) return this;
    for (var s = this, i = 0; i < arguments.length; i++)
        s = s.replace(new RegExp("\\{" + i + "\\}", "g"), arguments[i]);
    return s;
};
String.prototype.toTranscode = function () {
    if (this == undefined || this == '') return this;
    var str = this;
    if (!ePrint.isIe())
        str = escape(str);
    return str;
};



$("#keybarcode").keydown(function (event) {
    if (event.keyCode == 13) {
        $("#cartbar").click();
        return false;
    }
});

var clist = {
    state: false,
    whoses: '',
    init: function () {
        clist.initarea();
        clist.initadvices();
        var result = cart.requestFn({ type: 'cartorderlist' }, true, {
            func: function (r, para) {
               
                clist.whoses = new Object();
                var list = r.Result;
                clist.isReality = (r.Action == 8 ? true : false);
                clist.bindRealPay(r.Other);
                clist.bindRealCoupon(r);
                clist.bindinit(list);
                cal.loadinit();
                cwin.onload();
            }
        });
        clist.state = true;
    },
    bindinit: function (list) {
        var stores = new Array();
        var total = '';
        for (var i = 0, len = list.length; i < len; i++) {
            var data = list[i];
            if (data.Id == -1) { //绑定订单金额
                total = data;
                clist.bindTotal(total, true,true);
                continue;
            }
            db.AddStore(data.Id, data.Name);
            var store = "<dl><dt><input type='checkbox' id='lgcb_{0}_{0}_{0}_1' onclick='cal.checkeds(this,{0});' ck='{3}' class='checkbox _checkAll checked' offerId='{4}' />&nbsp;{1}{2}".toFormat(data.Id, cart.toDefault(data.Name, "未定义商家名称"), data.Id == 0 ? " 自营" : "", data.Checked, data.OfferId);
            if (data.Coupons != undefined && data.Coupons.length > 0) {
                store += "<div class='table-box-dt-promotional'>";
                store += "  <i class='table-box-list-promotional-i cur_poin '><img src='/images/cart/yhj_03.png' alt=''/> 领取优惠券</i>";
                store += "  <div class='table-box-dt-promotional-box none'>";
                store += "      <dl>";
                store += clist.bindCoupon(data.Coupons, data.CouponCount);
                store += "     </dl>";
                store += "   </div>";
                store += " </div>";
            }
            store += "</dt>";
            store = store + "<dd>";
            var result = clist.bindProduct(data.Products, data.Id);
            store += result.html;
            store += "</dd>";
            store += "</dl>";
            stores.push(store);
        } 
        if (list.length > 1) {
            $(".shopCard-box").removeClass("none");
            $(".cart_bott_inner_box").removeClass("none");
            $(".shopCard-nopro").addClass("none");
            cart.bindData("cart_datalist", stores.join(''), 1);
            clist.initControls();
        } else {
            $(".shopCard-nopro").removeClass("none");
            $(".shopCard-box").addClass("none");
            $(".cart_bott_inner_box").addClass("none");
            if (clist.isReality) {
                $(".shopCard-box").removeClass("none");
                $("#cart_datalist").addClass("none");
                $(".shopCard-nopro").addClass("none");
                clist.initControls();
            }
        }
        $("#keybarcode").focus();
    },
    initControls: function () {
        if (clist.isReality) {
            $("#goindex").remove();
            $("#goodSearch").removeClass("none");
            $(".head-logo").hide();
            $(".shopCard-title label").hide();
            $(".shopCard-title span").hide();
            $(".shopCard-title .dispatching").hide();
            $("#keybarcode").focus();
        } else {
            $("#goodSearch").remove();
            $("#goindex").removeClass("none");
        }

    },
    initadvices: function () {
        cart.requestFn({ type: 'initadvices' }, true, {
            func: function (res, para) {
                var gres = res.Result;
                var lres = res.Other;
                var hres = res.User;
                var isShowPRice = res.Code == "0";
                
                var ghtml = clist.getadviceformat(gres.Result, gres.Action, 1, isShowPRice);
                $("#guessUser").html(ghtml);
                var lhtml = clist.getadviceformat(lres.Result, lres.Action, 2, isShowPRice);
                $("#likeUser").html(lhtml);
                var hhtml = clist.getadviceformat(hres.Result, hres.Action, 0, isShowPRice);
                $("#histroyUser").html(hhtml);
                initAdviceBox();

            }
        });
    },
    getadviceformat: function (list, at, idx,isShowPrice) {
        idx = idx == undefined ? 1 : idx;
        var html = "";
        if (idx == 2 && at == 1) {
            html = "<div class='hint'><a href='/login.aspx'>登录</a>后将显示您收藏的商品</div>";
            return html;
        } else {
            var len = list == undefined ? 0 : list.length;
            if (len == 0) {
                if (idx == 2)
                    return "<div class='hint'>您还未收藏宝贝哦，快去<a href='/'>首页</a>看看吧~</div>";
                return "<div class='hint'>{0}</div>".toFormat(idx == 0 ? "您暂未浏览宝贝哟~~" : "搜索君正在使劲的猜测中...");
            } else {
                html += "<div class='shopCard-food-box-banner-box'>".toFormat(idx != 1 ? "none" : "");
                html += " <ul>";

                for (var i = 0, k = len / 5; i < k; i++) {
                    html += "<li>";
                    for (var j = 0; j < 5; j++) {
                        var jdx = 5 * i + j;
                        if (jdx >= len)
                            continue;
                        var d = list[jdx];
                        html += "<div class='shopCard-food-box-banner-box-li'>";
                        var imgurl = cart.getInitImage(d.Image);
                        var isimg = (d.Image == undefined || d.Image == " " || d.Image == '');
                        html += "<table><tr><td>";
                        html += "<img src='{0}' alt='' onclick='cart.visit({1});' class='cur_poin' />".toFormat(isimg ? imgurl : imgurl + "_180X180.jpg", d.ProductId);
                        html += "</table></tr></td>";

                        html += "<p onclick='cart.visit({1});' class='cur_poin'>{0}</p>".toFormat(d.Name, d.ProductId);
                        if (isShowPrice) {
                            html += "<h1><span>￥{0}</span></h1>".toFormat(cart.toDecimalAuto(d.Price, -1, true), cart.toDecimalAuto(d.Source, -1, true)); //<i>￥{1}</i>
                        } else {
                            html += '<div class="price clearfix"><!--商品价格HTML串--><a class="login-showprice" style="border: 1px solid red;" href="/login.aspx"><i>¥</i>登录后显示价格</a></div>';
                        }
                        html += "</div>";
                    }
                    html += "</li>";
                    //html += "<div class='cb'></div></li>";
                }
            }
            return html;
        }
    },
    isReality: false,
    exist: function (key) {
        return (key in clist.whoses);
    },
    contains: function (value) {
        for (var key in obj) {
            if (clist.whoses[key] == value) {
                return true;
            }
        }
        return false;
    },
    appendWhose: function (key, value) {
        if (!clist.exist(key)) {
        }
        clist.whoses[key] = value;
    },
    getWhose: function (key) {
        return clist.exist(key) ? clist.whoses[key] : null;
    },
    bindPay: function () {
        cart.bindData("pay-box", clist.createPay(), 1);
    },
    createPay: function () {
        var ecs = '';
        var ect = '';
        var pay = { isallcash: true, isinline: true, isonline: false, isoffline: false, text: '', data: ['', '', '', ''] };
        for (var i = 0, len = db.pay.length; i < len; i++) {
            var p = db.pay[i];
            if (p.Id == -1) {
                ect = p;
                continue;
            } else if (p.Id == 0) {
                ecs = p;
            }
            if (pay.isallcash) {
                pay.isallcash = (p.Inline == 1);
            }
        }

        if (!pay.isallcash)
            pay.text += " <a data-code='4' class='cur_poin c_payment'>{0}</a>".toFormat(cbuy.getPayName(0));
        if (ecs.Online == 1) {
            pay.data[ect.Online] = "<a data-code='{0}' class='cur_poin' >{1}</a>".toFormat(1, cbuy.getPayName(1));
        }
        if (ecs.Inline == 1 && pay.isallcash) {
            pay.data[ect.Inline] = "<a data-code='{0}' class='cur_poin'>{1}</a>".toFormat(3, cbuy.getPayName(3));
        }
        if (ecs.Online == 1) {
            pay.data[ect.Offline] = "<a data-code='{0}' class='cur_poin'>{1}</a>".toFormat(2, cbuy.getPayName(2));
        }
        if (pay.data.length > 0)
            pay.text += pay.data.join('');
        return pay.text;
    },
    lastareaid: 0,
    area: [],
    appendcode: function () {
        var code = $("#keybarcode").val();
        if (code == undefined || code == '') {
            cart.Warn('1016');
            return;
        }
        var result = cart.request({ type: 'cartbarcode', code: code });
        if (result.Status == 2 || result.Status == 0) {
            cart.Warn(result.Code);
        }
        if (result.Status == 1) {
            //cart.Warn(result.Code);
            if (result.Action == 5) {
                location.reload();
            }

        }
    },
    addcart: function (gid, type) {
        var result = cart.request({ type: 'cartlistadd', gid: gid, quote: cart.isquote ? 1 : 0 });
        if (result.Status == 2 || result.Status == 0) {
            cart.Warn(result.Code);
        }
        if (result.Status == 1) {
            cart.Success(result.Code);
            if (type == 1)
                clist.isadvice = true;
        }
    },
    inorder: function () {
        cbuy.goorder();
    },
    initarea: function () {
        var result = cart.requestFn({ type: 'getareas' }, true, {
            func: function (r, para) {
                clist.area = eval("(" + r.Result + ")");
                clist.lastareaid = r.Other;
                cbuy.lastareaid = clist.lastareaid;
                clist.bindareabyid();
            }
        });
        //if (result.Status == 2 || result.Status == 0) {
        //    cart.Warn(result.Code);
        //}
        //if (result.Status == 1) {
        //    clist.area = eval("(" + result.Result + ")");
        //    clist.lastareaid = result.Other;
        //    clist.bindareabyid();
        //}
    },
    changearea: function (t) {
        var pid = $(t).attr("aid");
        var type = parseInt($(t).attr("atype"));
        var data_num = parseInt($(t).parent().parent().attr("data-num"));
        var text = $(t).text();
        var tspan = $(".dispatching-box dt span").eq(data_num).find("b");
        tspan.text(text);
        tspan.attr("aid", pid);
        $(".dispatching-box dd").eq(data_num + 1).show();
        $(".dispatching-box dd").eq(data_num).hide();
        $(".dispatching-box dt span").eq(data_num).removeClass("dispatching-box-click");
        $(".dispatching-box dt span").eq(data_num + 1).addClass("dispatching-box-click");
        if (data_num == 0) {
            $(".dispatching-box dt span").eq(2).hide();
        }
        if (data_num == 1) {
            $(".dispatching-box dt span").eq(2).show();
        }
        if (data_num == 2) {
            $(".dispatching-box").hide();
            $(".dispatching-i").addClass("bb-fff");
            var data = { text: '', code: '' };
            $(".dispatching-box dt span").each(function () {
                data.text += $(this).find("b").text() + " ";
                data.code += $(this).find("b").attr('aid') + ",";
            });
            $(".dispatching-i b").text(data.text);
            $(".dispatching-i b").attr("aid", pid);
            $(".dispatching-i b").attr("code", data.code);
            $(".dispatching-box dd").eq(0).show();
            $(".dispatching-box dt span").eq(0).addClass("dispatching-box-click");
            clist.changeAddress(pid);
        }
        clist.bindarea(pid, type);
    },

    bindareabyid: function () {
        var careaid = GetLastArea();//clist.lastareaid;
        if (careaid == null || careaid == "" || careaid.length <= 0 || careaid == 0 || careaid == "0")
            careaid = clist.lastareaid;

        var area = { s: '', c: '', x: '' };
        var data = null;
        for (var j = 3; j > 0; j--) {
            for (var i = 0, len = clist.area.length; i < len; i++) {
                data = clist.area[i];
                //console.log((data.id != careaid && careaid != '0'));
                //if (data.id != careaid || (data.parentid == 0 && j != 1)) continue;
                if (data.id != careaid || (data.parentid == 0 && j != 1)) continue;

                //console.log(data);
                careaid = data.parentid;
                clist.bindarea(careaid, j - 1);
                area.x = (j == 3 ? data.areaname : area.x);
                area.c = (j == 2 ? data.areaname : area.c);
                area.s = (j == 1 ? data.areaname : area.s);
                $("#sarea_" + (j - 1)).html(data.areaname);
            }
            //console.log(clist.area);
        }
        $("#selarea").html("{0} {1} {2}".toFormat(area.s, area.c, area.x));
    },
    bindarea: function (pid, type) {
        type = type == undefined || type == '' ? 0 : type;
        //var selcode = $(".dispatching-i b").attr("code");
        //var current = { s: '', c: '', x: '', type: type + 1, isfind: false, frist: '', ftext: '' };
        //var t = selcode.split(',');
        //current.s = t[0];
        //current.c = t[1];
        //current.x = t[2];
        var html = [];
        var currClass = '';
        for (var i = 0, len = clist.area.length; i < len; i++) {
            var data = clist.area[i];
            if (data.parentid != pid) continue;
            //if (current.isfind == false) {
            //    current.frist = data.id;
            //    current.ftext = data.areaname;
            //    current.isfind = true;
            //}
            var txt = "<li class=" + currClass + "><span aid='{0}' atype='{2}' onclick='clist.changearea(this);'>{1}</span></li>".toFormat(data.id,
                data.areaname, type + 1);
            html.push(txt);
        }
        //var tspan = $(".dispatching-box dt span").eq(type).find("b");
        //tspan.text(current.ftext);
        //tspan.attr("aid", current.ftext);
        cart.bindData("area_" + type, html.join(''), 1);
    },

    bindTotal: function (data, isinit, flag) {
        var x = { total: cart.toDecimalAuto(data.Data.Price, -1, true), money: 0, cash: cart.toDecimalAuto(data.Data.Cash, -1, true), points: cart.toDecimalAuto(data.Data.Intergral, -1, true), cheap: cart.toDecimalAuto(data.Data.Cheap, -1, true), init: (isinit != undefined && isinit == true) };
        x.money = cart.toDecimalAuto(parseFloat(x.cheap) + parseFloat(x.cash), -1, true);
        if (clist.isReality) {
            $("#cartgobuy").hide();
            clist.bindRealTotal(data, flag);
        } else {
            if (x.init) {
                var html = "<div class='table-bottom-box'>";
                html += "<div class='table-bottom-lef'><a><input type='checkbox' class='checkbox checkAll checked' '/> 全选</a><a class='cur_poin a-removes'>删除</a><a class='cur_poin favorites'>移入收藏夹</a></div>";
                html += "<div class='table-bottom-rig'><div class='table-bottom-rig-test'>";
                html += "<p>合计（不含运费）：<span id='cltotal'>¥{0} 元</span></p>".toFormat(x.total);
                html += "<p id='cltcheap'>共节省：¥{0} 元（返现:{1}）</p>".toFormat(x.money, x.cash);
                html += "</div><a class='cur_poin button-action'>去结算</a></div>";
                html += "<div class='cb'></div></div>";
                //clist.lastareaid = parseInt(data.Code);
                cart.bindData('cart_total', html, 1);
            } else {
                cart.bindData('cltotal', "¥{0} 元".toFormat(x.total), 1);
                cart.bindData('cltcheap', "共节省：¥{0} 元（返现:{1}）".toFormat(x.money, x.cash), 1);
            }
        }
        $(".checkAll").each(function () {
            $(this).attr("ck", data.Checked);
        });
    },
    bindRealPay: function (data) {
        if (!clist.isReality) return;
        initRealPayList();
        var pays = [];
        for (var i = 0, len = data.length; i < len; i++) {
            var d = data[i];
            pays.push("<a data-code='{0}' class='cur_poin' ck='{2}'>{1}</a>".toFormat(d.PayId, d.Name, i == 0 ? 1 : 0));
        }
        cart.bindData('pay-box', pays.join(''), 1);
        cal.initrealorder();
    },
    bindRealCoupon: function (r) {
        if (!clist.isReality) return;
        var sid = -1;
        var data = r.User;
        for (var i = 0, len = r.Result.length; i < len; i++) {
            var s = r.Result[i];
            if (s.Id == -1)
                continue;
            sid = s.Id;
        }
        if (sid < 0 || data == undefined) return;
        var text = "<p class='none' id='coupon_use{0}'>共使用了1张优惠券 可优惠 <i>0.00</i> 元 <a href=''>取消使用</a></p>".toFormat(sid);
        if (data.length > 0) {
            db.appendCoupons(sid, data);
            text += "<p id='coupon_tip{1}'>可用 <i><b>{0}</b></i> 张优惠券! &nbsp;&nbsp;<a class='usemen' data-code='{1}'>立即使用</a></p>".toFormat(data.length, sid);
        } else {
            text += "<p id='coupon_tip{0}'><a class='usemen' data-code='{0}'>使用优惠券</a></p>".toFormat(sid);//未找到可使用的优惠券!
        }
        $("#realcouponbox").html(text);
        cal.bindcouponload();
    },

    //计算应付总金额 flag：true 按数量计算  false 按小计计算
    bindRealTotal: function (data, flag) {
        //debugger
        var totalprice = 0;
        //小计价格累加
        $("span[name='minsum']").each(function () {
            var item = $(this).html();
            if (item == "") item = 0;
            if ($(this).parent().parent().find("input[type='checkbox']:checked").length == 0) {
                item = 0;
            }
            totalprice += parseFloat(item);
        });
        if (flag) {
            //totalprice = data.Data.Reltotal;//定制功能，显示实际总金额 2018-4-20
            totalprice = data.Data.Price;
        } else if (data.Data.Coupon>0) {
            totalprice -= data.Data.Coupon;
        }

        //修改订单总价
        var total = "";
        total += "<span>  赠送积分：<i>{0}分</i> </span>".toFormat(cart.toDecimalAuto(data.Data.Integral));
        total += "<span> 优惠券：<i>¥{0}</i> </span><span> 返现：<i>¥{1}</i></span>".toFormat(cart.toDecimalAuto(data.Data.Coupon), cart.toDecimalAuto(data.Data.Cash, -1, true));
        total += "<span> 应付总金额：<{1} id='totalprice' cup='{2}'>¥{0}</{1}></span>".toFormat(cart.toDecimalAuto(totalprice + data.Data.Freight, -1, true), "b",data.Data.Coupon);
        cart.bindData('cartbuytotal', total, 1);
    },
    bindCoupon: function (list, count) {
        var html = { text: '<dt>{0}</dt><dd><table>{1}</table></dd>', title: "已领取 <span id='coupon_count'>{0}</span> 张优惠券，有新优惠券可领取", table: '', count: 0 };
        for (var i = 0, len = list.length; i < len; i++) {
            var data = list[i];
            html.table += "<tr>";
            html.table += "<td width='20%' class='tc'><div class='discount-img back-{1}'>￥{0}</div></td>".toFormat(cart.toDecimalAuto(data.Amount), (i + 1) % 3 + 1);
            html.table += "<td width='65% ' class='tl'><div class='discount-test'><h1>{0}</h1><p>{1}</p></div></td>".toFormat(data.CouponName, data.Tip, data.Status);
            html.table += "<td width='15%' class='tc'> <div class='discount-but'><a aid='{2}' class='{1}'>{0}</a></div></td>".toFormat(data.Status == 1 ? '领取' : '已领取', data.Status == 1 ? 'go-coupon' : 'discount-but-a-click', data.CouponId);
            html.table += "</tr>";
        }
        count = count == undefined ? 0 : count;
        html.title = html.title.toFormat(count);
        html.text = html.text.toFormat(html.title, html.table);
        return html.text;
    },
    //商品加载
    bindProduct: function (list, sid) {
        var pros = new Array();
        var result = { html: '', list: [] };
        for (var i = 0, len = list.length; i < len; i++) {
            var data = list[i];
            // result.list.push({ id: data.GoodsId, auth: data.Auth, sign: data.Sign, type: data.Type });
            if ((data.Type == 3 || data.Type == 4) && data.SendGood.length > 0) {
                //db.appendGiftByGoods(sid, data);
                for (var j = 0, jlen = data.SendGood.length; j < jlen; j++) {
                    var gift = data.SendGood[j];
                    result.list.push({ id: gift.GoodsId, auth: gift.Auth, sign: gift.Sign, type: gift.Type });
                }
            }
            pros.push(clist.parseCenter(data, sid, list));
        }
        result.html = pros.join('');
        return result;
    },
    //商品加载
    parseCenter: function (data, sid, list) {
        var html = '';
        var type = data.Type;
        //console.log(1111111111);
        //console.log(data);
        
        //if (data.WhoseContent.indexOf("分享") > 0) {
        //    type = 5;
        //}
        switch (type) {
            case 1:
                html = clist.parseProductReduce(data, list, sid);
                break;
            case 2:
                html = clist.parseProductReduce(data, list, sid);
                break;
            case 3:
                html = clist.parseProductSendGoods(data, list, sid);
                break;
            case 4:
                html = clist.parseProductGift(data, sid);
                break;
            case 5:
                html = clist.parseProduct(data, sid);
                break;
            case 6:
                html = clist.parseGroupSpeed(data, sid);
                break;
            case 7:
                html = clist.parseGroupSpeed(data, sid);
                break;
            case 8:
                html = clist.parseProductPackage(data, list, sid);
                break;
            case 11:
                html = clist.parseProductGift(data, sid);
                break;
            default:
                html = clist.parseProduct(data, sid);
                break;
        }
        return html;
    },
    
    parseProduct: function (data, storeId) {
        console.log(111);
        var pro = "<div class='table-box-list'>";
        var fix = "{0}_{1}_{2}_{3}".toFormat(storeId, data.GoodsId, data.Type, data.WhoseId);
        pro += "  <div class='table-box-list-bg {1}' id='cbgp_{0}'>".toFormat(fix, data.Checked == 1 ? "bg-fa" : "");
        pro += "<ul id='item_{0}'><li class='w70'><input type='checkbox' class='checkbox check checked' onclick='clist.oncheck(this);' ck='{1}' id='lgcb_{0}' offerId='{2}'/></li>".toFormat(fix, data.Checked, data.OfferId);
        pro += "<li class='w40 tl m10'><img src='{0}' alt='' class='pro-img cur_poin' onclick='cart.visit({3});' />".toFormat(cart.getInitImage(data.Image)); //data.Image);
        pro += "<div class='pro-test'><h1 class='cur_poin' onclick='cart.visit({2});'>{0}</h1><p>{1}</p></div></li>".toFormat(data.Name, cart.toDefault(data.Spec, ''), data.ProductId);
        pro += "<li class='w10 pro-price m28'><span id='source_{2}'>{0}</span><p id='price_{2}'>¥{1}</p></li>".toFormat((data.Source > data.Price ? "¥{0}".toFormat(cart.toDecimalAuto(data.Source, -1, true)) : ""), cart.toDecimalAuto(data.Price, -1, true), fix);
        pro += "<li class='w117 m30 tc'><div class='pro-num' offerId='{7}'><div class='bomb-box none' id='box_{0}'></div><a class='num-down' onclick='clist.reduce(this);'>-</a><input type='text'  onblur='clist.checkNumber(this);clist.change(this);' class='num-checked' onclick='$(this).focus().select()' id='lsgc_{0}' cid='{2}'value='{1}' mc='{5}' nc='{6}' /><a class='num-up' onclick='clist.append(this);'>+</a><div class='cb'></div></div><p class='table-box-list-li-p {3}' id='tip_{0}'>{4}</p></li>".toFormat(fix, data.Count, data.CartId, data.Status == 6 ? "" : "p-c-r", cart.getGoodStatus(data.Status), data.MaxCount, data.MinCount, data.OfferId);
        pro += "<li class='w77 m40'>{0}</li>".toFormat(cart.toDefault(data.Unit, '--'));
        pro += "<li class='w10 m40 color-ff4e4e' id='lsgt_{1}' pname='{2}' style='height:55px;margin-top:0px;cursor: pointer;padding-top:40px;' fix='li" + fix + "'  onclick=\"changeprice($('[fix={1}]'));\"><span name='minsou'>¥</span><span id='total_{1}' sid='{3}' name='minsum' fix='{1}' onclick='changeprice(this);' pname='{2}' prices='{0}'>{0}</span></li>".toFormat(cart.toDecimalAuto( data.Price * data.Count, -1, true), fix, data.Name, storeId);
        pro += "<li class='w10 m30' aid='{0}_{1}_{2}_{3}' offerid='{4}'><a class='cur_poin  favorite'>移入收藏夹</a><br/>".toFormat(data.Type, data.CartId, data.GoodsId, storeId, data.OfferId);
        pro += "<a class='cur_poin a-remove'>删除</a><br/>";
        pro += "<a class='noticed cur_poin c-0581ea {1}'  id='noticed_{0}'>到货通知</a></li>".toFormat(fix, (data.Status == 5 || data.Status == 4) ? "" : "none");
        pro += "<div class='cb'></div></ul>";
        pro += "<div class='none'><input type='hidden' id='note_{0}' value='{1}'/></div>".toFormat(fix, data.CartId);
        pro += "</div><input type='hidden' id='txt_" + fix + "' name='txthide' sid='" + storeId + "' /></div>";
        return pro;
    },
    parseGroupSpeed: function (data, storeId) {
        console.log(222);
        var pro = "<div class='table-box-list'>";
        var fix = "{0}_{1}_{2}_{3}".toFormat(storeId, data.GoodsId, data.Type, data.WhoseId);
        pro += "  <div class='table-box-list-bg {1}' id='cbgp_{0}'>".toFormat(fix, data.Checked == 1 ? "bg-fa" : "");
        pro += "<ul id='item_{0}'><li class='w70'><input type='checkbox' class='checkbox check checked' onclick='clist.oncheck(this);' ck='{1}' id='lgcb_{0}' offerId='{2}'/></li>".toFormat(fix, data.Checked, data.OfferId);
        pro += "<li class='w40 tl m10'><img src='{0}' alt='' class='pro-img cur_poin' onclick='cart.visit({3});' />".toFormat(cart.getInitImage(data.Image)); //data.Image);
        pro += "<div class='pro-test'><h1 class='cur_poin' onclick='cart.visit({3});'><a class='_zp-box'>{2}</a>{0}</h1><p>{1}</p></div></li>".toFormat(data.Name, cart.toDefault(data.Spec, ''), data.Type == 6 ? "团购" : "抢购", data.ProductId);
        pro += "<li class='w10 pro-price m28'><span id='source_{2}'>{0}</span><p id='price_{2}'>¥{1}</p></li>".toFormat((data.Source > data.Price ? "¥{0}".toFormat(cart.toDecimalAuto(data.Source, -1, true)) : ""), cart.toDecimalAuto(data.Price, -1, true), fix);
        pro += "<li class='w117 m30 tc'><div class='pro-num' offerId='{7}'><div class='bomb-box none' id='box_{0}'></div><a class='num-down' onclick='clist.reduce(this);'>-</a><input type='text'  onblur='clist.change(this);' class='num-checked' onclick='$(this).focus().select()' id='lsgc_{0}' cid='{1}' value='{2}' mc='{5}' nc='{6}' /><a class='num-up' onclick='clist.append(this);'>+</a><div class='cb'></div></div><p class='{3} table-box-list-li-p' id='tip_{0}'>{4}</p></li>".toFormat(fix, data.CartId, data.Count, data.Status == 6 ? "" : "p-c-r", cart.getGoodStatus(data.Status), data.MaxCount, data.MinCount, data.offerId);
        pro += "<li class='w77 m40'>{0}</li>".toFormat(cart.toDefault(data.Unit, '--'));
        pro += "<li class='w10 m40 color-ff4e4e' id='lsgt_{1}'> ¥{0}</li>".toFormat(cart.toDecimalAuto(data.Price * data.Count, -1, true), fix);
        pro += "<li class='w10 m30' aid='{0}_{1}_{2}_{3}' offerid='{4}'><a class='cur_poin favorite'>移入收藏夹</a><br/><a class='cur_poin a-remove'>删除</a></br>".toFormat(data.Type, data.CartId, data.GoodsId, storeId, data.OfferId);
        pro += "<a class='noticed cur_poin c-0581ea {1}'  id='noticed_{0}'>到货通知</a></li>".toFormat(fix, (data.Status == 5 || data.Status == 4) ? "" : "none");
        pro += "<div class='cb'></div></ul>";
        pro += "<div class='none'><input type='hidden' id='note_{0}' value='{1}'/></div>".toFormat(fix, data.CartId);
        pro += "</div></div>";
        return pro;
    },
    parseProductGift: function (data, storeId) {
        console.log(333);
        var html = "<div class='table-box-list'>";
        var fix = "{0}_{1}_{2}_{3}".toFormat(storeId, data.GoodsId, data.Type, data.WhoseId);
        html += "  <div class='table-box-list-bg {1}' id='cbgp_{0}'>".toFormat(fix, data.Checked == 1 ? "bg-fa" : "");
        html += "<ul id='item_{0}'><li class='w70'><input type='checkbox' class='checkbox check checked' ck='{1}' onclick='clist.oncheck(this);' id='lgcb_{0}' offerId='{2}'/></li>".toFormat(fix, data.Checked, data.OfferId);
        html += "<li class='w40 tl m10'><img src='{0}' alt='' class='pro-img cur_poin' onclick='cart.visit({3});'/><div class='pro-test'><h1 class='cur_poin' onclick='cart.visit({3});'>{1}</h1><p>{2}</p></div>".toFormat(cart.getInitImage(data.Image), data.Name, cart.toDefault(data.Spec, ''), data.ProductId);
        html += "<div class='cb'></div>";
        if (data.SendGood.length > 0) {
            html += "<div class='gifts'><dl><dt><a>赠品</a></dt>";
            for (var i = 0, len = data.SendGood.length; i < len; i++) {
                var good = data.SendGood[i];
                html += "<dd><p>{0}</p><span>x{1}</span> </dd>".toFormat(good.Name, good.Count);
            }
            html += " <div class='cb'></div></dl></div>";
        }
        html += "</li>";
        html += "<li class='w10 pro-price m28'><span id='source_{2}'>{0}</span><p id='price_{2}'>¥{1}</p></li>".toFormat((data.Source > data.Price ? "¥{0}".toFormat(cart.toDecimalAuto(data.Source, -1, true)) : ""), cart.toDecimalAuto(data.Price, -1, true), fix);
        html += "<li class='w117 m30 tc'><div class='pro-num' offerId='{7}'><div class='bomb-box none' id='box_{0}'></div><a class='num-down' onclick='clist.reduce(this);'>-</a><input type='text'  onblur='clist.change(this);' class='num-checked' onclick='$(this).focus().select()' id='lsgc_{0}' cid='{2}' value='{1}' mc='{5}' nc='{6}' /><a class='num-up' onclick='clist.append(this);'>+</a><div class='cb'></div></div><p class='{3} table-box-list-li-p' id='tip_{0}'>{4}</p></li>".toFormat(fix, data.Count, data.CartId, data.Status == 6 ? "" : "p-c-r", cart.getGoodStatus(data.Status), data.MaxCount, data.MinCount, data.offerId);
        html += "<li class='w77 m40'>{0}</li>".toFormat(cart.toDefault(data.Unit, '--'));
        html += "<li class='w10 m40 color-ff4e4e' id='lsgt_{1}'> ¥{0}</li>".toFormat(cart.toDecimalAuto(data.Price * data.Count, -1, true), fix);
        html += "<li class='w10 m30' aid='{0}_{1}_{2}_{3}' offerid='{4}'><a class='cur_poin favorite'>移入收藏夹</a><br/>".toFormat(data.Type, data.CartId, data.GoodsId, storeId, data.OfferId);
        html += "<a class='cur_poin a-remove'>删除</a><br/>";
        html += "<a class='noticed cur_poin c-0581ea {1}'  id='noticed_{0}'>到货通知</a></li>".toFormat(fix, (data.Status == 5 || data.Status == 4) ? "" : "none");
        html += "<div class='cb'></div></ul>";
        html += "<div class='none'><input type='hidden' id='note_{0}' value='{1}'/></div>".toFormat(fix, data.CartId);
        html += "</div></div>";
        return html;
    },
    parseProductPackage: function (data, list, sid) {
        console.log(444);
        var whoseKey = data.Type + "_" + data.WhoseId;
        if (data.RuleType == "1")
            whoseKey += "_" + data.GoodsId;
        
        if (clist.exist(whoseKey)) return '';
        clist.appendWhose(whoseKey, 1);

        var total = { price: 0, source: 0, total: 0, itemHtml: '' };
        for (var i = 0, len = list.length; i < len; i++) {
            var d = list[i];
            if (d.WhoseId != data.WhoseId || d.Type != 8) continue;
            var lix = "{0}_{1}_{2}_{3}".toFormat(sid, d.GoodsId, d.Type, d.WhoseId);
            var ncount = d.Count * d.WhoseCount;
            total.itemHtml += "  <div class='table-box-list-bg {2} pgk8_{1}' id='cbgp_{0}' wid='{1}'>".toFormat(lix, d.WhoseId, d.Checked == 1 ? "bg-fa" : "");
            total.itemHtml += "<ul class='bb' id='item_{0}'><div class='xian'></div><div class='line'></div>".toFormat(lix);
            total.itemHtml += "<li class='w40 tl m10'><img src='{0}' alt='' class='pro-img cur_poin' onclick='cart.visit({3});'/><div class='pro-test'><h1 class='cur_poin' onclick='cart.visit({3});'>{1}</h1><p>{2}</p></div></li>".toFormat(cart.getInitImage(d.Image), d.Name, cart.toDefault(d.Spec, ''), d.ProductId);
            total.itemHtml += "<li class='w10 pro-price m30'>{0}<p>¥{1}</p></li>".toFormat((d.Source > d.Price ? "<span>¥{0}</span>".toFormat(cart.toDecimalAuto(d.Source, -1, true)) : ""), cart.toDecimalAuto(d.Price, -1, true));
            total.itemHtml += "<li class='w117 m40 tc'><div class='pro-num' offerId='{6}'><div class='bomb-box none' id='box_{1}'></div><p id='lsgc_{1}'>{0} </p></div><p class='{4} table-box-list-li-p' id='tip_{1}'>{5}</p></li>".toFormat(cart.toDecimalAuto(ncount), lix, d.WhoseId, d.CartId, d.Status == 6 ? "" : "p-c-r", cart.getGoodStatus(d.Status), data.offerId);
            total.itemHtml += "<li class='w77 m40'>{0}</li>".toFormat(cart.toDefault(d.Unit, '--'));
            //total.itemHtml += "<li class='w10 m40 color-ff4e4e'> ¥{0}</li>".toFormat(cart.toDecimalAuto(d.Price * d.Count, -1, true));
            total.itemHtml += "<li class='w10 m40 color-ff4e4e' id='lsgt_{1}'> ¥{0}</li>".toFormat(cart.toDecimalAuto(d.Price * ncount, -1, true), lix);
            total.itemHtml += "<li class='w10 m30'></li><div class='cb'></div></ul>";
            total.itemHtml += "<div class='none'><input type='hidden' id='note_{0}' value='{1}'/></div>".toFormat(lix, d.CartId);
            total.itemHtml += "</div>";
            total.price += d.Price;
            total.source += d.Source;
            total.total += d.Price * ncount;
        }
        var mfix = "{0}_{1}_{2}_{3}".toFormat(sid, data.GoodsId, data.Type, data.WhoseId);
        var html = "<div class='package-box' id='g_{0}_{1}'> <ul class='bb' id='gname_{0}_{1}'>".toFormat(data.Type, data.WhoseId);
        html += "<input type='checkbox' onclick='clist.oncheck(this);'  id='lgcb_{0}' ck='{1}' class='checkbox checked' offerId='{2}' />".toFormat(mfix, data.Checked, data.OfferId);
        html += "<li class='w40 tl m10'><div class='package-box-pop'><span class='bgc-title'>优惠套装</span></div><div class='pro-test'>{0}</div></li>".toFormat(data.WhoseName);
        //html += "<li class='w10 pro-price m10'>{0}<p>¥{1}</p></li>".toFormat((total.source > total.price ? "<span>¥{0}</span>".toFormat(cart.toDecimalAuto(total.source, -1, true)) : ""), cart.toDecimalAuto(total.price, -1, true));
        html += "<li class='w10 pro-price m10'><p>&nbsp;</p></li>";
        html += "<li class='m5 w117'><div class='pro-num' offerId='{7}'><a class='num-down' onclick='clist.reduce(this);'>-</a><input type='text'   onblur='clist.change(this);' class='num-checked' onclick='$(this).focus().select()' id='lsgcp_{0}' cid='{3}' value='{2}' mc='{5}' nc='{6}'/><a  class='num-up' onclick='clist.append(this);'>+</a><div class='cb'></div></div></li>".toFormat(mfix, data.WhoseId, cart.toDecimalAuto(data.Count), data.CartId, data.MaxCount, data.MinCount, data.offerId);
        html += "<li class='w77 m10'>{0}</li>".toFormat('套');
        html += "<li class='w10 m10 color-ff4e4e' id='lsgt_{1}_{2}_{3}_{2}'> ¥{0}</li>".toFormat(cart.toDecimalAuto(total.total, -1, true), sid, data.WhoseId, data.Type);
        html += "<li class='w10 m10' aid='{0}_{1}_{2}_{3}'><a class='cur_poin a-remove' offerid='{4}'>删除</a></li>".toFormat(data.Type, data.CartId, data.GoodsId, sid, data.OfferId);

        html += "<div class='cb'></div></ul>";

        html += total.itemHtml;
        html += "</div>";

        return html;
    },
    parseProductSendGoods: function (data, list, sid) {
        console.log(555);
        var whoseKey = data.Type + "_" + data.WhoseId + "_" + data.OfferId;
        //if (data.RuleType == "1")
        //    whoseKey += "_" + data.GoodsId;
        if (clist.exist(whoseKey)) return '';
            clist.appendWhose(whoseKey, 1);
        
        var html = "<div class='fullCut sendGifts' id='gift_{0}_{1}'><dl><dt class='w70 tc p15'><span class='bgc-title'>送赠品</span></dt>".toFormat(data.WhoseId,sid);
        html += "<dd class='bb p15'>{0}</dd><div class='cb'></div></dl>".toFormat(data.WhoseName);
        var wsend = [];
        for (var i = 0, len = list.length; i < len; i++) {
            var d = list[i];
            if (d.WhoseId != data.WhoseId) continue;
            var fix = "{0}_{1}_{2}_{3}".toFormat(sid, d.GoodsId, d.Type, d.WhoseId);
            html += "  <div class='table-box-list-bg {1}' id='cbgp_{0}'>".toFormat(fix, d.Checked == 1 ? "bg-fa" : "");
            html += "<ul class='bb' id='item_{0}'><div class='xian t25'></div><input type='checkbox' onclick='clist.oncheck(this);'  id='lgcb_{0}' ck='{1}' class='checkbox check checked' offerId='{2}'/>".toFormat(fix, d.Checked, d.OfferId);
            ;
            html += "<li class='w40 tl m10'><img src='{0}' alt='' class='pro-img cur_poin' onclick='cart.visit({3});'/><div class='pro-test'><h1 class='cur_poin' onclick='cart.visit({3});'>{1}</h1><p>{2}</p></div>".toFormat(cart.getInitImage(d.Image), d.Name, cart.toDefault(d.Spec, ''), d.ProductId);
            html += "<div class='cb'></div>";
            if (d.SendGood.length > 0) {//d.Checked == 1 &&
                var self = "";
                self += "<div class='gifts'><div class='xians'></div>";
                self += "<div class='gifts-all'><div class='gifts-lef'><a>赠品</a></div><div class='gifts-rig'>";
                var isself = false;
                for (var k = 0, ken = d.SendGood.length; k < ken; k++) {
                    var gift = d.SendGood[k];
                    if (gift.WhoseRecord != "1") {
                        wsend.push(gift);
                        continue;
                    }
                    isself = true;
                    self += "<div><p>{0}</p><i>x{1}</i></div>".toFormat(gift.Name, gift.Count);
                }
                self += " </div><div class='cb'></div></div></div>";
                if (isself)
                    html += self;
            }
            html += " </li>";
            html += "<li class='w10 pro-price m10'><span id='source_{2}'>{0}</span><p id='price_{2}'>¥{1}</p>".toFormat((d.Source > d.Price ? "¥{0}".toFormat(cart.toDecimalAuto(d.Source, -1, true)) : ""), cart.toDecimalAuto(d.Price, -1, true), fix);
            html += "<div class='table-box-list-promotional'><i class='table-box-list-promotional-i'>促销优惠</i><div class='table-box-list-promotional-box none'>";
            html += clist.parseWhoseContent(data.WhoseContent);
            html += "</div></div></li>";
            html += "<li class='w117 m30 tc'><div class='pro-num' offerId='{7}'><div class='bomb-box none' id='box_{0}'></div><a  class='num-down' onclick='clist.reduce(this);'>-</a><input type='text'  onblur='clist.change(this);' class='num-checked' onclick='$(this).focus().select()' id='lsgc_{0}' cid='{2}' value='{1}' mc='{5}' nc='{6}'/><a  class='num-up' onclick='clist.append(this);'>+</a><div class='cb'></div></div><p class='{3} table-box-list-li-p' id='tip_{0}'>{4}</p></li>".toFormat(fix, d.Count, d.CartId, d.Status == 6 ? "" : "p-c-r", cart.getGoodStatus(d.Status), d.MaxCount, d.MinCount, d.offerId);
            html += "<li class='w77 m40'>{0}</li>".toFormat(cart.toDefault(d.Unit, '--'));
            html += "<li class='w10 m40 color-ff4e4e' id='lsgt_{1}'> ¥{0}</li>".toFormat(cart.toDecimalAuto(d.Price * d.Count, -1, true), fix);
            html += "<li class='w10 m30' aid='{0}_{1}_{2}_{3}'><a class='cur_poin favorite'>移入收藏夹</a><br/><a class='cur_poin a-remove' offerid='{4}'>删除</a></br>".toFormat(d.Type, d.CartId, d.GoodsId, sid, d.OfferId);
            html += "<a class='noticed cur_poin c-0581ea {1}'  id='noticed_{0}'>到货通知</a></li>".toFormat(fix, (d.Status == 5 || d.Status == 4) ? "" : "none");
            html += "<div class='cb'></div></ul>".toFormat(d.Type, d.CartId, d.GoodsId, sid);
            html += "<div class='none'><input type='hidden' id='note_{0}' value='{1}'/></div>".toFormat(fix, d.CartId);

            html += "</div>";
        }

        if (wsend != null && wsend.length > 0) {
            var haswsend = [];
            for (var j = 0, jlen = wsend.length; j < jlen; j++) {
                var sd = wsend[j];
                var gfix = "{0}_{1}_10_{2}".toFormat(sid, sd.GoodsId, sd.WhoseId);
                if (haswsend.indexOf(gfix) > -1 || sd.WhoseRecord != "0")
                    continue;
                haswsend.push(gfix);
                html += "  <div class='table-box-list-bg bg-fa' id='cbgp_{0}'>".toFormat(gfix);
                html += "<ul class='bb' id='item_{0}'><div class='xian t25'></div><input type='checkbox' disabled='disabled' id='lgcb_{0}' class='checkbox check'/>".toFormat(gfix);
                html += "<li class='w40 tl m10'><img src='{0}' alt='' class='pro-img cur_poin' onclick='cart.visit({3});'/><div class='pro-test' ><h1 onclick='cart.visit({3});'><a class='_zp-box'>赠品</a>{1}</h1><p>{2}</p></div></li>".toFormat(cart.getInitImage(sd.Image), sd.Name, cart.toDefault(sd.Spec, ''), sd.ProductId);
                html += "<li class='w10 pro-price m40'>{0}</li>".toFormat(0);
                html += "<li class='w117 m40 tc' id='lgtc_{1}'>{0}</li>".toFormat(sd.Count, gfix);
                html += "<li class='w77 m40'>{0}</li>".toFormat(cart.toDefault(sd.Unit, '--'));
                html += "<li class='w10 m40 color-ff4e4e'> ¥{0}</li>".toFormat(0);
                html += "<li class='w10 m30'>&nbsp;</li><div class='cb'></div></ul>";
                html += "<div class='none'><input type='hidden' id='note_{0}' value='{1}'/></div>".toFormat(gfix, sd.CartId);
                //html += "<li class='w10 m30' aid='{0}_{1}_{2}_{3}'><a class='a-remove'>删除</a></li><div class='cb'></div></ul>".toFormat(sd.Type, sd.CartId, sd.WhoseId, sid);
                html += "</div>";
            }
        }

        html += "</div>";
        return html;
    },
    //促销 商品加载
    parseProductReduce: function (data, list, sid) {
        
        var whoseKey = data.Type + "_" + data.WhoseId;
        //if (data.RuleType == "1")
        //    whoseKey += "_" + data.GoodsId;
        
        var _ClickChangePrice = "";

        if (clist.exist(whoseKey)) return '';
        clist.appendWhose(whoseKey, 1);
        var html = "<div class='fullCut sendGifts' id='g_{3}_{2}'><dl><dt class='w70 p15'><span class='bgc-title' >{0}</span></dt><dd id='gname_{3}_{2}' class='p15'>{1}<a  id='ground_{2}_{3}' onclick='cal.gorounding(this);' wid='{2}'>&nbsp;立即凑单></a></dd><div class='cb'></div></dl>".toFormat(data.Type == 1 ? "打折" : "满减", data.WhoseName, data.WhoseId, data.Type);
        for (var i = 0, len = list.length; i < len; i++) {            
            var d = list[i];
            if (d.WhoseId != data.WhoseId) continue;
            var fix = "{0}_{1}_{2}_{3}".toFormat(sid, d.GoodsId, d.Type, d.WhoseId);

            //点击小计修改价格
            if (cart.isReal) {
                console.log(fix);
                _ClickChangePrice = "<span name='minsou'>¥</span><span name='minsum' sid='{2}' fix='{1}' onclick='changeprice(this)' pname='{3}' prices='{0}'>{0}</span>".toFormat(cart.toDecimalAuto(d.Price * d.Count, -1, true), fix, sid, $("#lsgt_{0}".toFormat(fix)).attr("pname"));
            }

            html += "  <div class='table-box-list-bg {1}' id='cbgp_{0}'>".toFormat(fix, d.Checked == 1 ? "bg-fa" : "");
            html += "<ul class='bb' id='item_{0}'><div class='xian t25'></div><input type='checkbox' onclick='clist.oncheck(this);'  id='lgcb_{0}' ck='{1}' class='checkbox check checked'  offerId='{2}' />".toFormat(fix, d.Checked,d.OfferId);
            html += "<li class='w40 tl m10'><img src='{0}' alt='' class='pro-img cur_poin' onclick='cart.visit({3});'/><div class='pro-test cur_poin'><h1  onclick='cart.visit({3});'>{1}</h1><p>{2}</p></div>".toFormat(cart.getInitImage(d.Image), d.Name, cart.toDefault(d.Spec, ''), d.ProductId);
            html += "<div class='cb'></div>";

            if (d.SendGood.length > 0) {
                var self = "";
                //if (i != len - 1)
                self += "<div class='gifts'><div class='xians'></div>";
                self += "<div class='gifts-all'><div class='gifts-lef'><a>赠品</a></div><div class='gifts-rig'>";
                var isself = false;
                for (var k = 0, ken = d.SendGood.length; k < ken; k++) {
                    var gift = d.SendGood[k];
                    if (gift.WhoseRecord != "1") {
                        continue;
                    }
                    isself = true;
                    self += "<div><p>{0}</p><i>x{1}</i></div>".toFormat(gift.Name, gift.Count);
                }
                self += " </div><div class='cb'></div></div></div>";
                if (isself)
                    html += self;
            }
            html += "</li>";
            html += "<li class='w10 pro-price m10'><span id='source_{2}'>{0}</span><p id='price_{2}'>¥{1}</p>".toFormat((d.Source > d.Price ? "¥{0}".toFormat(cart.toDecimalAuto(d.Source, -1, true)) : ""), cart.toDecimalAuto(d.Price, -1, true), fix);
            html += "<div class='table-box-list-promotional'><i class='table-box-list-promotional-i'>促销优惠</i><div class='table-box-list-promotional-box none'>";
            html += clist.parseWhoseContent(data.WhoseContent);
            html += "</div></div></li>";
            html += "<li class='w117 m30 tc'><div class='pro-num' offerId='{7}'><div class='bomb-box none' id='box_{0}'></div><a  class='num-down' onclick='clist.reduce(this);'>-</a><input type='text'  onblur='clist.change(this);' class='num-checked'  onclick='$(this).focus().select()' id='lsgc_{0}' cid='{2}' value='{1}' mc='{5}' nc='{6}'/><a  class='num-up' onclick='clist.append(this);'>+</a><div class='cb'></div></div><p class='{3} table-box-list-li-p' id='tip_{0}'>{4}</p></li>".toFormat(fix, d.Count, d.CartId, d.Status == 6 ? "" : "p-c-r", cart.getGoodStatus(d.Status), d.MaxCount, d.MinCount, d.offerId);
            html += "<li class='w77 m40'>{0}</li>".toFormat(cart.toDefault(d.Unit, '--'));

            if(!cart.isReal)
                html += "<li class='w10 m40 color-ff4e4e' id='lsgt_{1}'> ¥{0}</li>".toFormat(cart.toDecimalAuto(d.Price * d.Count, -1, true), fix);
            else
                html += "<li class='w10 m40 color-ff4e4e' id='lsgt_{0}'>{1}</li>".toFormat(fix, _ClickChangePrice);

            html += "<li class='w10 m30' aid='{0}_{1}_{2}_{3}'><a class='cur_poin favorite'>移入收藏夹</a><br/><a class='cur_poin a-remove' offerid='{4}'>删除</a></br>".toFormat(d.Type, d.CartId, d.GoodsId, sid, d.OfferId);
            html += "<a class='noticed cur_poin c-0581ea {1}'  id='noticed_{0}'>到货通知</a></li>".toFormat(fix, (d.Status == 5 || d.Status == 4) ? "" : "none");
            html += "</li><div class='cb'></div></ul>";
            html += "<div class='none'><input type='hidden' id='note_{0}' value='{1}'/></div>".toFormat(fix, d.CartId);
            html += "</div>";
        }
        html += "</div>";

        return html;
    },
    getonline: function (t) {
        var cid = $(t).attr("aid");
        var result = cart.request({ type: "cartonlinecoupon", cid: cid });
        if (result.Status == 1) {
            //if (result.Action == 0) {
            //    $(t).removeClass("go-coupon").addClass("discount-but-a-click");
            //    $(t).html("已领取");
            //    $(t).unbind("click", cal.gocoupon);
            //}
            Ecshop.Tool.Hint.Ok({ info: "领取成功!" });
        } else {
            if (result.Status == 2 || result.Status == 0) {
                cart.Error(result.Code);
                // Ecshop.Tool.Hint.Error({ info: result.Message });
            }
        }
        if (result.Action == 0) {
            $(t).removeClass("go-coupon").addClass("discount-but-a-click");
            $(t).html("已领取");
            $(t).unbind("click", cal.gocoupon);
        }
        if (result.Code != 1001 && result.Status != 0)
            $("#coupon_count").html(result.Code);

    },
    isadvice: false,
    getadvice: function (t) {
        var wid = $(t).attr("wid");
        var html = "";
        html += "<div class='singleChip' id='singleChip' wid='{0}' pid='0' tpid='0'>".toFormat(wid);
        html += "              <div class='lef-arrow'>                              ";
        html += "                  <img src='/images/cart/left111.png' alt=''/>          ";
        html += "              </div>                                               ";
        html += "              <div class='singleChip-test shopCard-food-box-banner' id='singleChip_content'> ";
        html += clist.getadvicebypage(0, wid);
        html += "      <div class='cb'></div>                                       ";
        html += "      </div>                                                       ";
        html += "      <div class='right-arrow'>                                    ";
        html += "          <img src='/images/cart/right111.png' alt=''/>           ";
        html += "      </div>                                                       ";
        html += "      </div>                                                       ";

        window.Ecshop.Tool.Hint.newConfirm({
            info: html,
            tit: "凑单",
            width: 950,     //宽度 confirm专有属性 提示信息框无用
            height: 250,
            style: 'gray',
            curpage: true,
            fn: clist.isreloadbyadvice,
            button: {
                sort: false,//是否交换按钮顺序
                btnConfirm: '',
                btnCancle: '',
                callbackConfirm: function () { },
                callbackbtnCancle: function () { }

            },
            beforeShow: function (e) {
                var length = $(".singleChip-test-list").length;
                var long = Math.ceil(length / 6);
                var width = long * 840;
                $(".singleChip-showBox").css({
                    width: width + "px"
                })
                var left = parseInt($(".singleChip-showBox").css("left"));
                $(".right-arrow img").click(function () {
                    if (left < width - 840) {
                        left += 840;
                        $(".singleChip-showBox").stop().animate({
                            "margin-left": -left + "px"
                        }, 500);
                    }
                })
                $(".lef-arrow img").click(function () {
                    if (left > 0 && left < width) {
                        left -= 840;
                        $(".singleChip-showBox").stop().animate({
                            "margin-left": -left + "px"
                        }, 500);
                    }
                });
                initAdviceBox();
            }
        });
    },
    isreloadbyadvice: function () {
        if (clist.isadvice != undefined && clist.isadvice == true)
            location.reload();
    },
    getadvicebypage: function (pid, wid) {
        var current = $("#singleChip");
        wid = wid != undefined ? wid : current.attr("wid");
        var tpid = current.attr("tpid");
        pid = pid < 0 ? 0 : pid > tpid ? tpid : pid;

        var result = cart.request({ type: "whoseadvice", wid: wid, pid: pid });
        var html = [];

        if (result.Status == 1) {
            current.attr("tpid", result.Other);
            current.attr("pid", pid);
            var len = Math.ceil(result.Result.length / 6);
            for (var i = 0; i < len; i++) {
                var count = result.Result.length - (6 * i);
                count = count >= 6 ? 6 : count;
                var txt = "<li>";
                for (var j = 0; j < count; j++) {
                    var data = result.Result[6 * i + j];
                    txt += "<div class='singleChip-test-list'><img src='{0}' class='cur_poin' onclick='cart.visit({1});' alt=''/>".toFormat(data.Image, data.ProductId);
                    txt += "<div class='singleChip-test-list-box'> <h1 onclick='cart.visit({3});' class='cur_poin'>{0}{1}</h1><p>¥{2}</p> <a  class='cur_poin' onclick='cal.add({4},1);'> 加入{5} </a> </div></div>".toFormat(data.Name, data.Spec, cart.toDecimalAuto(data.Price, -1, true), data.ProductId, data.GoodsId, cart.cartMark);
                }
                txt += "</li>";
                html.push(txt);
            }
        }
        return ("<div class='shopCard-food-box-banner-box'><ul>" + html.join('') + "</ul></div>");
    },
    parseWhoseContent: function (str) {
        if (str == undefined || str == '') return '';
        var ws = str.split(',');
        var txt = [];
        for (var i = 0; i < ws.length; i++) {
            var tws = ws[i];
            if (tws == '' || tws == " ") continue;
            var data = tws.split('：');
            txt.push("<p><a>{0}</a>{1}</p>".toFormat(data[0], data[1]));
        }
        return txt.join('');
    },
    //商品数量增加
    append: function (t) {
        if (cart.type != 1) return;
        clist.actionChange(t, 1);
    },
    reduce: function (t) {
        if (cart.type != 1) return;
        clist.actionChange(t, 0);
    },
    change: function (t) {
        if (cart.type != 1) return;
        clist.actionChange(t, 2);
    },
    //数量检查
    checkNumber: function (obj) {
        /*检查是否允许录入小数 alan 2016.09.23*/
        if (typeof (__global_Order_Goods_Qty_Must_Int) != 'undefined') {
            if (__global_Order_Goods_Qty_Must_Int == 1) {
                var pice = obj.value.replace(/^([0-9]{0,5})$/, '');
                if (pice.length > 0) {
                    /*Ecs.Tool.addLayerWoring(input, "不允许录入小数");*/
                    obj.value = "0";
                    return false;
                }
            }
        }
        /*检查是否允许录入小数 alan 2016.09.23*/
    },
    remove: function (t) {
        var html = "";
        html += "<div class='addFavorites'>";
        html += "      <img src='/images/cart/alert.png' alt=''/>    ";
        html += "      <div class='addFavorites-box'>          ";
        html += "          <p>                                 ";
        html += "              确定要将此商品移除购物车吗。          ";
        html += "          </p>                                ";
        html += "      </div>                                  ";
        html += "  </div>                                      ";
        window.Ecshop.Tool.Hint.newConfirm({
            info: html,
            tit: "删除购物车商品",
            width: 400,     //宽度 confirm专有属性 提示信息框无用
            height: 200,
            style: 'gray',
            curpage: true,
            button: {
                sort: false,//是否交换按钮顺序
                btnConfirm: '确定',
                btnCancle: '取消',
                isPara: true,
                paraType: 1,
                paraObj: $(t),
                callbackConfirm: clist.actionClick,
                callbackbtnCancle: function () { return true; }
            },
        });
    },
    favorite: function (t) {
        var html = "";
        html += "<div class='addFavorites'>";
        html += "      <img src='/images/cart/alert.png' alt=''/>    ";
        html += "      <div class='addFavorites-box'>          ";
        html += "          <p>                                 ";
        html += "              移入收藏夹后，                   ";
        html += "          </p>                                ";
        html += "          <p>                                 ";
        html += "              商品将不在购物车中显示。          ";
        html += "          </p>                                ";
        html += "      </div>                                  ";
        html += "  </div>                                      ";

        window.Ecshop.Tool.Hint.newConfirm({
            info: html,
            tit: "移入收藏夹",
            width: 400,     //宽度 confirm专有属性 提示信息框无用
            height: 200,
            style: 'gray',
            curpage: true,
            button: {
                sort: false,//是否交换按钮顺序
                btnConfirm: '确定',
                btnCancle: '取消',
                isPara: true,
                paraType: 2,
                paraObj: $(t),
                callbackConfirm: clist.actionClick,
                callbackbtnCancle: function () { return true; }
            },
        });

    },
    noticed: function (t) {
        var parent = $(t).parent();
        var pid = parent.attr("aid");
        if (pid == undefined || pid == '') return true;
        var box = pid.split('_');
        var gid = box[2];
        if (cal.arrivalNotice() == false)
            return false;

        var mb = $("#notice_mobile").val();
        var mi = $("#notice_mail").val();

        cart.requestFn({ type: 'cartlistnoticed', gid: gid, mobile: mb, mail: mi, aid: clist.lastareaid }, false, {
            func: function (res, para) {
                cart.Success("1403");
            }
        });
        return true;
    },

    removes: function (t) {
        if (cart.type != 1) return;

        var html = "  ";
        html += "<div class='addFavorites'>";
        html += "      <img src='/images/cart/alert.png' alt=''/>    ";
        html += "    <div class='addFavorites-box'>          ";
        html += "          <p>                                 ";
        html += "              确定要将当前选中的所有商品移除购物车吗？";
        html += "          </p>                                ";
        html += "      </div>                                  ";
        html += "      </div>                                  ";
        window.Ecshop.Tool.Hint.newConfirm({
            info: html,
            tit: "删除购物车商品",
            width: 400,     //宽度 confirm专有属性 提示信息框无用
            height: 200,
            style: 'gray',
            curpage: true,
            button: {
                sort: false,//是否交换按钮顺序
                btnConfirm: '确定',
                btnCancle: '取消',
                isPara: true,
                paraType: 2,
                paraObj: $(t),
                callbackConfirm: clist.actionMoreClick,
                callbackbtnCancle: function () { return true; }
            },
        });
    },
    favorites: function (t) {
        if (cart.type != 1) return;
        var html = "";
        html += "<div class='addFavorites'>";
        html += "      <img src='/images/cart/alert.png' alt=''/>    ";
        html += "      <div class='addFavorites-box'>          ";
        html += "          <p>                                 ";
        html += "              移入收藏夹后，                   ";
        html += "          </p>                                ";
        html += "          <p>                                 ";
        html += "              商品将不在购物车中显示。          ";
        html += "          </p>                                ";
        html += "      </div>                                  ";
        html += "  </div>                                      ";

        window.Ecshop.Tool.Hint.newConfirm({
            info: html,
            tit: "移入收藏夹",
            width: 400,     //宽度 confirm专有属性 提示信息框无用
            height: 200,
            style: 'gray',
            curpage: true,
            button: {
                sort: false,//是否交换按钮顺序
                btnConfirm: '确定',
                btnCancle: '取消',
                isPara: true,
                paraType: 3,
                paraObj: $(t),
                callbackConfirm: clist.actionMoreClick,
                callbackbtnCancle: function () { return true; }
            },
        });

    },
    checkeds: function (t, sid) {
        if (cart.type != 1) return;
        clist.actionMoreClick(t, 1, sid);
    },
    //购物车 删除事件
    actionClick: function (t, type) {
        var parent = $(t).parent();
        var pid = parent.attr("aid");
        if (pid == undefined || pid == '' || type == undefined) return true;
        type = (type == 3 ? 'cartlistnoticed' : type == 1 ? 'cartlistremove' : 'cartlistfavorite');
        var box = pid.split('_');
        var gtype = box[0];
        var cartid = box[1];
        var gid = box[2];
        var sid = box[3];
        cart.requestFn({ type: type, sid: sid, cid: cartid, gcheck: 1, OfferId: $(t).parent().attr("offerid") }, true, { func: clist.bindcheckChange, fpara: { type: t }, success: cwin.onload });
        //var result = cart.request({ type: type, sid: sid, cid: cartid, gcheck: 1 });
        //if (result.Status == 1) {
        //    clist.bindcheckChange(1, result.Result, result.Action);
        //    cal.rload();
        //    cart.Message("删除成功!");
        //} else {
        //    if (result.Status == 2 || result.Status == 0) {
        //        cart.Warn(result.Code);
        //    }
        //}
        return true;
    },
    actionAllCheckStyle: function (sid, state) {
        $(".table-box-list-bg").each(function () {
            var isstyle = false;
            if (sid == -1) {
                isstyle = true;
            } else {
                var xid = $(this).attr("id");
                var arrx = xid.split('_');
                var osid = arrx[1];
                isstyle = (osid == sid);
            }
            if (isstyle) {
                if (state == true) {
                    $(this).addClass("bg-fa");
                    $(this).parent().find(".bgc-title").removeClass("fullCutDtClcik")
                } else {
                    $(this).removeClass("bg-fa");
                    $(this).parent().find(".bgc-title").addClass("fullCutDtClcik")
                }
            }
        });
    },
    actionMoreClick: function (t, type, sid) {
        type = (type == 1 ? 'cartallchecked' : type == 2 ? 'cartallremove' : 'cartallfavorite');
        sid = sid == undefined || sid < 0 ? -1 : sid;
        var state = false;
        if (type == 'cartallchecked') {
            state = t.checked;
            state = state == undefined ? t : state;
            clist.actionAllCheckStyle(sid, state);
        }
        if ($("#canclecoup").html() != undefined && $("#cartation").val() == 1) {
            cab.removeCoupon($("#canclecoup"));
        }
        cart.requestFn({ type: type, gcheck: state ? 1 : 0, sid: sid, OfferId: $(t).attr("offerId") }, true, { func: clist.bindcheckChange, success: cwin.onload, fpara: { type: t } });
        return true;
    },
    //商品数量变更 
    actionChange: function (t, type) {
        var current = $(t).parent().find(".num-checked"); //拿到勾选的商品项
        var ele = $(current);
        var val = cart.toDecimalAuto(ele.val()); //获取当前数量
        if (val < 1 && type == 0) return;
        else if (type == 2 && val < 1)
            val = 1;
        var cid = ele.attr("cid");
        var mc = ele.attr("mc");
        mc = cart.toDecimal(mc);
        var nc = ele.attr("nc");
        nc = cart.toDecimal(nc);
        var fix = (ele.attr("id").replace("lsgc_", ""));
        if (nc > 0 && ((type == 0 && nc == val) || (type != 1 && nc > val))) {
            cart.autotip(fix, "此商品最少购买数量为{0}！".toFormat(nc));
        } else if (nc > 0 && nc > val) {
            cart.autotip(fix, "此商品最少购买数量为{0}！".toFormat(nc));
        }
        if (mc > 0 && ((type == 1 && mc == val) || (type != 0 && mc < val))) {
            cart.autotip(fix, "此商品最多购买数量为{0}！".toFormat(mc));
        }
        type = (type == 0 ? 'cartlistreduce' : type == 1 ? 'cartlistappend' : 'cartlistchange');
        
        var result = cart.request({ type: type, cid: cid, gcount: val, OfferId: $(t).parent().attr("OfferId") });



        if (result.Status == 1) {
            clist.bindActionChanged(current, result.Result, result.Action);
            var lsgc = $("#lsgc_" + fix).val();//数量
            var price = $("#price_" + fix).html().replace("¥", "");//单价
            var total = cart.toDecimalAuto(lsgc * price, -1, true)
            $("#total_" + fix).html(total);//小计价格变更
            bindTotalchange(cid, $("#total_" + fix).html());
            cwin.onload();
        } else {
            if (result.Status == 2 || result.Status == 0) {
                cart.Warn(result.Code);
            }
        }
    },
    bindGiftsByGoods: function (sid, gifts) {
        var hasfix = [];
        gifts.sort(compare("Action"));
        for (var i = 0, len = gifts.length; i < len; i++) {
            var gift = gifts[i];
            var gfix = "{0}_{1}_10_{2}".toFormat(sid, gift.GoodsId, cart.toDefault(gift.WhoseId, "0"));
            var gkey = gfix + "_" + gift.Action;
            if (hasfix.indexOf(gkey) > -1)
                continue;
            hasfix.push(gkey);
            var nohas = document.getElementById("cbgp_" + gfix) == undefined;
            if (gift.Action == "-1") {
                $("#cbgp_" + gfix).remove();
            } else if (gift.Action == "1") {
                if (nohas)
                    clist.appendGiftsByAction(sid, gift);
                else
                    $("#lgtc_" + gfix).html(cart.toDecimalAuto(gift.Count));
            } else {
                if (nohas)
                    clist.appendGiftsByAction(sid, gift);
                else
                    $("#lgtc_" + gfix).html(cart.toDecimalAuto(gift.Count));
            }
        }
    },
    appendGiftsByAction: function (sid, sd) {
        var html = "";
        var gfix = "{0}_{1}_10_{2}".toFormat(sid, sd.GoodsId, sd.WhoseId);
        html += "  <div class='table-box-list-bg bg-fa' id='cbgp_{0}'>".toFormat(gfix);
        html += "<ul class='bb' id='item_{0}'><div class='xian t25'></div><input type='checkbox' disabled='disabled'  id='lgcb_{0}' class='checkbox check'/>".toFormat(gfix);
        html += "<li class='w40 tl m10'><img src='{0}' alt='' class='pro-img cur_poin' onclick='cart.visit({3});'/><div class='pro-test'><h1><a class='_zp-box'>赠品</a>{1}</h1><p>{2}</p></div></li>".toFormat(cart.getInitImage(sd.Image), sd.Name, cart.toDefault(sd.Spec, ''));
        html += "<li class='w10 pro-price m40'>{0}</li>".toFormat(0);
        html += "<li class='w117 m40 tc' id='lgtc_{1}'>{0}</li>".toFormat(sd.Count, gfix);
        html += "<li class='w77 m40'>{0}</li>".toFormat(cart.toDefault(sd.Unit, '--'));
        html += "<li class='w10 m40 color-ff4e4e'> ¥{0}</li>".toFormat(0);
        html += "<li class='w10 m30'>&nbsp;</li><div class='cb'></div></ul>";
        html += "<div class='none'><input type='hidden' id='note_{0}' value='{1}'/></div>".toFormat(gfix, sd.CartId);
        //html += "<li class='w10 m30' aid='{0}_{1}_{2}_{3}'><a class='a-remove'>删除</a></li><div class='cb'></div></ul>".toFormat(sd.Type, sd.CartId, sd.WhoseId, sid);
        html += "</div>";
        $("#gift_" + sd.WhoseId + "_" + sid).append(html);
    },
    bindActionChanged: function (current, result, action) {
        for (var i = 0, len = result.length; i < len; i++) {
            var data = result[i];
            if (data.Id == -1) {
                clist.bindTotal(data, false,true);
                continue;
            }
            var total = { price: 0, source: 0, total: 0, whoseId: '', type: '' };
            var hasGoods = [];
            for (var j = 0, jen = data.Products.length; j < jen; j++) {
                var g = data.Products[j];
                var fix = "{0}_{1}_{2}_{3}".toFormat(data.Id, g.GoodsId, g.Type, g.WhoseId);
                if (g.Type == 1 || g.Type == 2 || g.Type == 3 || g.Type == 11) {
                    $("#price_{0}".toFormat(fix)).html("¥" + cart.toDecimalAuto(g.Price, -1, true));
                    if (g.Source > g.Price)
                        $("#source_{0}".toFormat(fix)).html("¥" + cart.toDecimalAuto(g.Source, -1, true));
                }
                var tip = $("#tip_{0}".toFormat(fix));
                tip.html(cart.getGoodStatus(g.Status));
                tip.removeClass("p-c-r");
                if (g.Status != 6) {
                    tip.addClass("p-c-r");
                }
                if (g.Type == 5 || g.Type == 4 || g.Type == 11) {
                    //货到通知
                    var noticed = $("#noticed_{0}".toFormat(fix));
                    if (g.Status == 5 || g.Status == 4) {
                        noticed.removeClass("none");
                    } else noticed.addClass("none");
                }
                //$("#tip_{0}".toFormat(fix)).html(cart.getGoodStatus(g.Status));
                if (action != "8") {
                    $("#lsgc_{0}".toFormat(fix)).val(cart.toDecimalAuto(g.Count));
                    if ($("#cartation").val() == 1) {
                        $("#txt_{0}".toFormat(fix)).val("");
                        currobj = null;
                        cart.bindData("lsgt_{0}".toFormat(fix), "<span name='minsou'>¥</span>" + "<span  name='minsum' sid='" + data.Id + "' fix='" + fix + "' onclick='changeprice(this);' pname='" + $("#lsgt_{0}".toFormat(fix)).attr("pname") + "' prices='" + cart.toDecimalAuto(g.Count * g.Price, -1, true) + "'>" + cart.toDecimalAuto(g.Count * g.Price, -1, true) + "</span>", 1);
                    } else {
                        cart.bindData("lsgt_{0}".toFormat(fix), "¥" + cart.toDecimalAuto(g.Count * g.Price, -1, true), 1);
                    }
                }
                if (action == "8") {
                    var cpbgt = $("#lsgcp_{0}".toFormat(fix));
                    var ncount = g.Count * g.WhoseCount;
                    cart.bindData("lsgt_{0}".toFormat(fix), "¥" + cart.toDecimalAuto(ncount * g.Price, -1, true), 1);
                    if (cpbgt.attr("cid") != undefined && cpbgt.attr("cid") == g.CartId)
                        $("#lsgcp_{0}".toFormat(fix)).val(cart.toDecimalAuto(g.Count));
                    cart.bindData("lsgc_{0}".toFormat(fix), cart.toDecimalAuto(ncount), 1);
                    total.price += g.Price;
                    total.source += g.Source;
                    total.type = g.Type;
                    total.whoseId = g.WhoseId;
                    total.total += g.Price * ncount;
                }
                if (g.SendGood != undefined && g.SendGood.length > 0) {
                    for (var k = 0, ken = g.SendGood.length; k < ken; k++) {
                        hasGoods.push(g.SendGood[k]);
                    }
                }
            }
            if (hasGoods != undefined && hasGoods.length > 0)
                clist.bindGiftsByGoods(data.Id, hasGoods);
            if (action == "8" || action == 8) {
                var ctotal = "lsgt_{0}_{1}_{2}_{1}".toFormat(data.Id, total.whoseId, total.type);
                cart.bindData(ctotal, "¥" + cart.toDecimalAuto(total.total, -1, true), 1);
            }
        }
    },
    oncheck: function (t) {
        if (cart.type != 1) return;
        clist.checkChange(t, 0);      
    },
    //购物车 单个选中
    checkChange: function (t, type) {
        var state = t.checked;
        var xid = $(t).attr('id');
        var arr = xid.split('_');
        if (type == 0 && arr.length != 5) return;
        var sid = arr[1];
        var gid = arr[2];
        var gtype = arr[3];
        type = (type == 0 ? 'cartlistchecked' : type == 1 ? 'cartlistchecked' : 'cartlistchecked');
        //var result = cart.request({ type: type, gtype: gtype, sid: sid, gid: gid, data: cart.toJson(data), gcount: state ? 1 : 0 });
        var fix = xid.replace("lgcb_", "");//"{0}_{1}_{2}_{3}".toFormat(sid, gid, gtype);
        var cartid = $("#note_" + fix).val();
        var currrent = $("#cbgp_{0}".toFormat(fix));
        if (state) {
            currrent.addClass("bg-fa");
            if (gtype == 8) {
                var wid = currrent.attr('wid');
                $(".pgk8_" + wid).addClass("bg-fa");;
            }
        } else {
            currrent.removeClass("bg-fa");
            if (gtype == 8) {
                var widx = currrent.attr('wid');
                $(".pgk8_" + widx).removeClass("bg-fa");;
            }
        }
        if ($("#canclecoup").html() != undefined && $("#cartation").val() == 1) {
            cab.removeCoupon($("#canclecoup"));
        }
        cart.requestFn({ type: type, sid: sid, cid: cartid, offerId:$(t).attr("offerId"), gcheck: state ? 1 : 0 }, true, { func: clist.bindcheckChange, fpara: { type: t } });

    },
    //（选中/取消后） 回调事件
    bindcheckChange: function (result, para) {
        var action = result.Action;
        var rlist = result.Result;
        for (var i = 0, len = rlist.length; i < len; i++) {
            var data = rlist[i];
            if (data.Id == -1) {
                clist.bindTotal(data, false,false);
                continue;
            }

            //$("#lgcb_{0}_{0}_{0}_1".toFormat(data.Id)).attr("ck", data.Checked);
            $("[id='lgcb_{0}_{0}_{0}_1']".toFormat(data.Id)).each(function () {
                if($(this).attr("OfferId") == data.OfferId)
                    $(this).attr("ck", data.Checked);
            });

            var total = { price: 0, source: 0, total: 0, whoseId: '', type: '' };
            var hasGoods = [];
            for (var j = 0, jen = data.Products.length; j < jen; j++) {
                var g = data.Products[j];
                var fix = "{0}_{1}_{2}_{3}".toFormat(data.Id, g.GoodsId, g.Type, g.WhoseId);
                var old = $("#price_{0}".toFormat(fix)).html();
                if (action == 1) {
                    if (g.Checked == 1 || (g.Checked == 0 && (g.RuleType == 2 || g.RuleType == 1))) {
                        clist.bindWhoseTitle(g);
                        $("#price_{0}".toFormat(fix)).html("¥" + cart.toDecimalAuto(g.Price, -1, true));
                        //cart.bindData("lsgt_{0}".toFormat(fix), "¥" + cart.toDecimalAuto(g.Count * g.Price, -1, true), 1);
                        if ($("#cartation").val() == 1) {
                            $("#txt_{0}".toFormat(fix)).val("");
                            currobj = null;
                            cart.bindData("lsgt_{0}".toFormat(fix), "<span name='minsou'>¥</span>" + "<span  name='minsum' sid='" + data.Id + "' fix='" + fix + "' onclick='changeprice(this);' pname='" + $("#lsgt_{0}".toFormat(fix)).attr("pname") + "' prices='" + cart.toDecimalAuto(g.Count * g.Price, -1, true) + "'>" + cart.toDecimalAuto(g.Count * g.Price, -1, true) + "</span>", 1);
                        } else {
                            cart.bindData("lsgt_{0}".toFormat(fix), "¥" + cart.toDecimalAuto(g.Count * g.Price, -1, true), 1);
                        }
                    } 
                }
                if ((action == 3 || action == 4) && (g.Status == -1 || g.Status == -2)) {
                    $("#cbgp_{0}".toFormat(fix)).remove();
                    if (g.Status == -2) {
                        $("#g_{0}_{1}".toFormat(g.Type, g.WhoseId)).remove();//移除活动
                    }
                }
                else if ((action == 3 || action == 4)) {
                    $("#price_{0}".toFormat(fix)).html("¥" + cart.toDecimalAuto(g.Price, -1, true));
                    cart.bindData("lsgt_{0}".toFormat(fix), "¥" + cart.toDecimalAuto(g.Count * g.Price, -1, true), 1);
                }
                if (action == "8") {
                    var cpbgt = $("#lsgcp_{0}".toFormat(fix));
                    var ncount = g.Count * g.WhoseCount;
                    cart.bindData("lsgt_{0}".toFormat(fix), "¥" + cart.toDecimalAuto(ncount * g.Price, -1, true), 1);
                    
                    if (cpbgt.attr("cid") != undefined && cpbgt.attr("cid") == g.CartId)
                        $("#lsgcp_{0}".toFormat(fix)).val(cart.toDecimalAuto(cart.toDecimalAuto(g.Count)));
                    
                  
                    cart.bindData("lsgt_{0}_8".toFormat(fix), cart.toDecimalAuto(ncount), 1);
                    total.price += g.Price;
                    total.source += g.Source;
                    total.type = g.Type;
                    total.whoseId = g.WhoseId;
                    total.total += g.Price * ncount;
                }

                if (g.SendGood != undefined && g.SendGood.length > 0) {
                    for (var k = 0, ken = g.SendGood.length; k < ken; k++) {
                        hasGoods.push(g.SendGood[k]);
                    }
                }
            }
            if (hasGoods != undefined && hasGoods.length > 0)
                clist.bindGiftsByGoods(data.Id, hasGoods);
            if (action == "8" || action == 8) {
                var ctotal = "lsgt_{0}_{1}_{2}_{1}".toFormat(data.Id, total.whoseId, total.type);
                cart.bindData(ctotal, "¥" + cart.toDecimalAuto(total.total, -1, true), 1);
            }
        }
        controlChecks();
        //if ($("#canclecoup").html() != undefined && $("#cartation").val()==1) {
        //    cab.removeCoupon($("#canclecoup"));
        //}
    },
    bindWhoseTitle: function (data) {
        if (data == null || !(data.Type == 2 || data.Type == 1)) return;
        var id = "#gname_{1}_{0}".toFormat(data.WhoseId, data.Type);
        var current = $(id);
        if (current == undefined)
            return;
        var html = data.WhoseName;
        if (data.WhoseStatus == 0)
            html += "<a onclick='cal.gorounding(this);' wid='{0}'>&nbsp;立即凑单&gt;</a>".toFormat(data.WhoseId);//还差6元，
        $(id).html(html);
    },
    removeItemByFix: function (itemid) {

        var boss = $("#cart_datalist");

    },
    gobuy: function (callback, successcall, failcall) {
        var result = cart.requestFn({ type: 'carttobuy', otype: 'auth', aid: clist.lastareaid }, false, {
            func: function (r, p) {
                if ($.isFunction(callback)) {
                    callback();
                }
                var url = '/cart/buy.aspx{0}'.toFormat(cart.ecs == undefined || cart.ecs < 1 ? "" : "?ecs=" + cart.ecs);
                if (cart.isquote)
                    url = '/cart/buy.aspx?quote=quote';
                window.location.href = url;
            }
        });
    },
    changeAddress: function (code) {
        var acode = code;
        if (clist.lastareaid != acode) {
            clist.lastareaid = acode;
            cbuy.lastareaid = clist.lastareaid;
            var isload = (clist.lastareaid != acode);
            var result = cart.requestFn({ type: 'cartaddresschanged', up: isload, aid: clist.lastareaid, did: -1 }, true, {
                func: function (r, para) {
                    clist.changeStoreByAddress(r.Result);
                }
            });
        }
    },
    changeStoreByAddress: function (list, ispostage) {
        ispostage = ispostage == undefined || ispostage == false ? false : true;
        for (var i = 0, len = list.length; i < len; i++) {
            var data = list[i];
            if (data.Id == -1) continue;
            if (data.Products != null && data.Products.length > 0) {
                for (var j = 0, jen = data.Products.length; j < jen; j++) {
                    var g = data.Products[j];
                    var lix = "{0}_{1}_{2}_{3}".toFormat(data.Id, g.GoodsId, g.Type, g.WhoseId);
                    var tip = $("#tip_" + lix);
                    var noticed = $("#noticed_{0}".toFormat(lix));
                    tip.html(cart.getGoodStatus(g.Status));
                    if (g.Status != 6) {
                        tip.addClass("p-c-r");
                        if (g.Status == 5 || g.Status == 4) {
                            noticed.removeClass("none");
                        } else noticed.addClass("none");
                    } else {
                        tip.removeClass("p-c-r").addClass("");
                        noticed.addClass("none");
                    }
                }
            }
        }
    },
};
var cbuy = {
    adrs: [],
    state: false,
    init: function () {
        cbuy.initarea();
        var result = cart.requestFn({ type: 'cartbuyorder' }, true, {
            func: function (res, para) {
                cbuy.bindinit(res);
                cab.loadinit();
                address();
            }
        });
        cbuy.state = true;
        // cbuy.initchange();
    },
    initchange: function () {
        $(document).on('change', '#sel_adr_sf', function () {
            cbuy.adrchanged(this);
        });
        $(document).on('change', '#sel_adr_cs', function () {
            cbuy.adrchanged(this);
        });
    },
    initarea: function () {
        var result = cart.requestFn({ type: 'getareas' }, true, {
            func: function (res, para) {
                db.area = eval("(" + res.Result + ")");
            }
        });
    },
    bindareatoaddress: function (pid, ckaid) {
        ckaid = ckaid == undefined ? -1 : ckaid;
        var html = [];
        for (var i = 0, len = db.area.length; i < len; i++) {
            var data = db.area[i];
            if (data.parentid != pid) continue;
            var txt = "<option value='{0}' {2}>{1}</option>".toFormat(data.id, data.areaname, data.id == ckaid ? "checked='checked'" : "");
            html.push(txt);
        }
        return html.join('');
    },
    appendAddress: function (id, data) {
        cbuy._toolAddress(id, data, 1);
    },
    removeAddress: function (id) {
        cbuy._toolAddress(id, null, 2);
    },
    getAdr: function (id) {
        return cbuy._toolAddress(id, null, 3);
    },
    _toolAddress: function (id, data, type) {
        type = type == undefined ? -1 : type;
        var isnew = true;
        for (var i = 0, len = cbuy.adrs.length; i < len; i++) {
            var dd = cbuy.adrs[i];
            if (dd == undefined || dd.AddressId != id) continue;
            if (type == 1) {
                isnew = false;
                cbuy.adrs[i] = data;
            } else if (type == 2) {
                cbuy.adrs.splice(i, 1);
            } else if (type == 3) {
                return dd;
            }
        }
        if (isnew && type == 1) {
            cbuy.adrs.push(data);
        }
    },
    total: '',
    lastareaid: 0,
    aid: 0,
    isRede: false,
    bindinit: function (result) {
        var list = result.Result;
        cbuy.isRede = result.Action == undefined || result.Action != 9 ? false : true;
        cbuy.bindChat(result.User);
        cbuy.userAddress(result.Other);
        cbuy.userTaxBill(result.Other);
        cbuy.bindstore(list);
        cbuy.bindPay();
    },
    bindChat: function (t) {
        if (t == 1) {
            window.Ecshop.Tool.Hint.newConfirm({
                info: "<div style='height:150px;width:360px;margin:20px auto;'>&nbsp;&nbsp;在您下单之前，可以绑定已有的商城账号，以便您享受更多优惠，并实现账号登录及管理更便捷！</div>",
                tit: "温馨提示",
                width: 400,     //宽度 confirm专有属性 提示信息框无用
                height: 240,
                style: 'gray',
                curpage: true,
                button: {
                    sort: false,//是否交换按钮顺序
                    btnConfirm: '确定',
                    btnCancle: '取消',
                    callbackConfirm: function () { location.href = '/user/BindShopAccount.aspx'; },
                    callbackbtnCancle: function () { }
                },
            });
        }
    },
    bindstore: function (list) {
        var stores = new Array();
        var total = '';
        for (var i = 0, len = list.length; i < len; i++) {
            var data = list[i];
            if (data.Id == -1) {
                total = data;
                cbuy.lastareaid = parseInt(data.Code);
                cbuy.total = total.Data;
                continue;
            }
            var sname = cart.toDefault(data.Name, "未定义商家名称") + (data.Id == 0 ? "  自营" : "");
            db.AddStore(data.Id, sname);
            var store = "<div class='checkOrder-content-box'>";
            store += "<div class='checkOrder-list'>&nbsp;<h1><b>{0}</b></h1><div>".toFormat(sname);

            store += "<div class='checkOrder-box'>";

            store += "<div class='checkOrder-box-top'>";
            store += "<div class='checkOrder-box-top-lef'><ul>";
            store += "<li><img src='/images/cart/jian.png' alt='' class='bq-img' />选择配送方式 <div class='checkOrder-box-top-lef-box' style='display:block;'>";
            store += "<div  class='checkOrder-box-top-lef-box-post' id='sp_{0}'>".toFormat(data.Id + "_" + data.OfferId);
            store += cbuy.bindPostType(data.Freights, data.Id, data.OfferId);
            store += "</div>";
            store += "<div class='pick-up none' id='myspace_{0}' sid='{0}'></div>".toFormat(data.Id);
            store += " <p id='pdlytime' style='display:none;'>送货时间: <input type='text' id='txtDlyTime' onchange='ChangeDate()' readonly='readonly' size='10'/><select id='selHour'></select><font id='fdlytimemsg' color='red'></font></p>";

            store += " <p>运费: <span id='currnetfreight{0}_{2}'>¥ {1}</span></p>".toFormat(data.Id, cart.toDecimalAuto(data.Data.Freight), data.OfferId);
            store += "</div></li>";
            if (!cbuy.isRede) {
                store += "<li><img src='/images/cart/jia.png' alt='' class='bq-img' />使用优惠券<div class='checkOrder-box-top-lef-box'>";
                store += "<p class='none' id='coupon_use{0}'>共使用了1张优惠券 可优惠 <i>0.00</i> 元 <a href=''>取消使用</a></p>".toFormat(data.Id);
                if (data.Coupons != undefined && data.Coupons.length > 0) {
                    db.appendCoupons(data.Id, data.Coupons);
                    store += "<p id='coupon_tip{1}'>可用 <i><b>{0}</b></i> 张优惠券! &nbsp;&nbsp;<a class='usemen' data-code='{1}'>立即使用</a></p>".toFormat(data.Coupons.length, data.Id);
                } else {
                    store += "<p id='coupon_tip{1}'><a class='usemen' data-code='{0}'>使用优惠券</a></p>".toFormat(data.Id);//未找到可使用的优惠券!
                }
                store += "</div></li>";
            }
            store += " <li><img src='/images/cart/jia.png' alt='' class='bq-img' />添加订单备注<div class='checkOrder-box-top-lef-box'>";
            store += " <textarea name='' class='c_mark_input' sid='{0}'  cols='32' rows='4'></textarea>".toFormat(data.Id);
            store += " </div></li >";
            store += "</ul></div>";
            store += "<div class='checkOrder-box-top-rig'>";
            var result = cbuy.bindProduct(data.Products, data.Id);
            store += result.html;
            store += "</div>";
            store += " <div class='cb'></div>";
            store += "</div>";
            store += "<div class='checkOrder-box-bottom none' id='bst_{0}'  owner='{0}'>".toFormat(data.Id) + cbuy.bindStoreTotal(data.Data) + "</div>";
            store += "</div>";
            store += "</div>";
            stores.push(store);
        }
        db.initPay(total.Remark);
        if (!total.IsReceipt) {
            $("#invoicebill").remove();
        }
        cart.bindData("cart_buylist", stores.join(''), 1);
        cart.bindData("cartbuytotal", cbuy.bindTotal(), 1);
        DatePicker();
    },
    changeStoreByAction: function (list, istotal, istore, fid) {
        if (list == null || list.length == 0) return;
        for (var i = 0, len = list.length; i < len; i++) {
            var data = list[i];
            if (data.Id == -1) {
                cbuy.total = data.Data;
                if (istotal != undefined && istotal == true)
                    cart.bindData("cartbuytotal", cbuy.bindTotal(), 1);
                continue;
            }
            if (fid != undefined)
                if (istore != undefined && istore == true) {
                    var id = "bst_{0}".toFormat(data.Id);
                    cart.bindData(id, cbuy.bindStoreTotal(data.Data), 1);
                }
        }
    },
    inputBuyer: function (t) {
        var sid = $(t).attr("sid");
        var txt = $(t).val();
        db.changeRemark(sid, txt);//留言
    },
    bindPostType: function (list, sid, offerid) {
        var html = "";
        for (var i = 0, len = list.length; i < len; i++) {
            var data = list[i];
            if (data.Checked == 1) {
                db.changeFeight(sid, parseInt(data.Id));
                
                cbuy.getSinceAddress(data.IsSince.toString());
            }
            html += "<a class='boxser {5}' {6} {4} did='{0}' fee='{2}' sid='{3}' offerId='{7}' since='{8}'>{1}</a>".toFormat(data.Id, data.Name, data.Amount, sid, data.IsSelfCollect ? "onclick='cab.showSpace(this);' self=1" : " self=0", data.Checked == 1 ? "sbgc" : "sbgn", "onclick='showdlyTime(" + data.IsReservation + "," + data.ReservationStartTime + "," + data.ReservationEndTime + ");cbuy.getSinceAddress(\"{8}\");' isr=" + data.IsReservation + " rs=" + data.ReservationStartTime + " re=" + data.ReservationEndTime, offerid, data.IsSince);
        }
        return html;
    },
    bindCoupons: function (list, sid) {
        var html = "";
        for (var i = 0, len = list.length; i < len; i++) {
            var data = list[i];

            html += "<a class='boxser' did='{0}' fee='{2}' sid='{3}'>{1}</a>".toFormat(data.Id, data.Name, data.Amount, sid);
        }
        return html;
    },
    showSelfCollectSpacex: function (result, sid, idx) {
        var html = "<div class='since-content' id='spacediv' sfid='{1}' sid='{0}' sfname='{2}'>";
        var self = " <div class='since-content-box'> ";
        idx = idx == undefined ? 0 : idx;
        var spaces = [];
        var csfid = 0;
        var csfname = '';
        var len = result.Result == null ? 0 : result.Result.length;
        if (len == 0) {
            cart.Warn("1052");
            return;
        }
        for (var i = 0 ; i < len; i++) {
            var d = result.Result[i];//<a href=''> [详细地图]</a>
            var isdefalt = (idx == 0 && idx == i) || (idx == d.Id);
            if (isdefalt) {
                csfid = d.Id;
                csfname = d.Name;
                $("#myspace_" + sid).html("自提点：{0} <span onclick='cab.editSpace({1});'>修改</span>".toFormat(csfname, sid));
            }
            var space = "<dl><dt onclick='cab.selfCollect(this);' class='{3}' sid='{5}' sfid='{4}'>{0}</dt>   <dd> <p> 地址：{1} <i>{2}</i></p>  <div class='cb'></div> </dd><div class='cb'></div> </dl>";
            space = space.toFormat(d.Name, "{0}-{1}-{2} {3}".toFormat(d.ProvinceName, d.CityName, d.AreaName, d.Address), d.ContactsTel, isdefalt ? "pickUpBack" : "", d.Id, sid);
            spaces.push(space);
        }
        self += spaces.join('');
        self += "     </div>";
        html = html.toFormat(sid, csfid, csfname);
        html += self;
        html += "     </div> ";
        window.Ecshop.Tool.Hint.newConfirm({
            info: html,
            tit: "选择自提点",
            width: 720,     //宽度 confirm专有属性 提示信息框无用
            height: 300,
            style: 'gray',
            button: {
                sort: true,//是否交换按钮顺序
                btnConfirm: '保存',
                btnCancle: '取消',
                callbackConfirm: cbuy.selfSelected,
                callbackbtnCancle: function () { }
            },
            prompt: "温馨提示 : 系统将根据您的收货地址显示其范围内的自提点，请确保您的收货地址填写正确！",

        });
    },
    selfSelected: function () {
        var ele = $("#spacediv");
        var sfid = ele.attr("sfid");
        sfid = cart.toDecimal(sfid);
        var sid = ele.attr("sid");
        var sfname = ele.attr("sfname");
        if (sfid < 0 || sid == undefined || sid == 'undefined') {
            cart.Message("请选择自提点！", null, false);
            return false;
        }
        db.changeSelf(sid, sfid);
        var espace = $("#myspace_" + sid);
        espace.attr("sfid", sfid);
        espace.attr("sfname", sfname);
        espace.html("自提点：{0} <span onclick='cab.editSpace({1});'>修改</span>".toFormat(sfname, sid));
        return true;
    },
    showSelfCollectSpace: function (t, isid, idx) {
        var sid = isid == undefined || isid == false ? $(t).attr("sid") : t;
        cart.requestFn({ type: 'selfpostage', sid: sid, aid: cbuy.lastareaid }, false, {
            func: function (res, para) {
                cbuy.showSelfCollectSpacex(res, sid, idx);
            }
        });
    },
    changePost: function (t) {
        var did = $(t).attr("did");
        var sid = $(t).attr("sid");
        //if (sid == "-2") return;
        var fee = $(t).attr("fee");
        var self = $(t).attr("self");
        var result = cart.requestFn({ type: 'cartposttypechanged', did: did, sid: sid, aid: cbuy.lastareaid }, true, {
            func: function (r, para) {
                var total = r.Result[0];
                db.initPay(total.Remark);
                var fid = r.Result[1].Data.FreightId;
                db.changeFeight(sid, parseInt(fid), self);
                cbuy.changeStoreByAction(r.Result, true, true, parseInt(fid));
                $("#currnetfreight" + para.sid + "_" + $(t).attr("offerId")).html("￥{0}".toFormat(cart.toDecimalAuto(r.Result[1].Data.Freight)));
                cbuy.bindPay();
                initPayload();
            },
            fpara: { sid: sid }
        });
    },
    checkPostByStore: function () {
        var stores = db.getStores();
        var s = { name: '', id: -1, sfid: -1 };
        for (var i = 0, len = stores.length; i < len; i++) {
            var store = stores[i];
            if (store.id == -1) continue;
            if (store.dly == 0 || store.dly == undefined) {
                s.id = store.id;
                s.name = store.name;
                return s;
            } else {
                if (store.self == 1) {
                    s.sfid = store.selfid;
                    s.name = store.name;
                    s.sfid = s.sfid == undefined || s.sfid == 0 ? 0 : -1;
                }
            }
        }
        return s;
    },
    bindStoreTotal: function (data) {
        var total = "";
        if (cbuy.isRede == false || cbuy.isRede == undefined)
            total += "<span>  赠送积分：<i>{0}分</i> </span>".toFormat(cart.toDecimalAuto(data.Integral));
        total += "<span> 优惠券：<i>¥{0}</i> </span><span> 税费：<i>¥{1}</i></span><span>  返现：<i>¥{2}</i> </span>";
        total = total.toFormat(cart.toDecimalAuto(data.Coupon), cart.toDecimalAuto(data.Tax), cart.toDecimalAuto(data.Cash));
        total += "<span> 商品合计：<{1}>¥{0}</{1}></span>".toFormat(cart.toDecimalAuto(data.Price + data.Cash + data.Coupon, -1, true), (cbuy.isRede == true ? "i" : "b"));
        if (cbuy.isRede == true)
            total += "<span> 换购积分合计：<b>{0}分</b></span>".toFormat(cart.toDecimalAuto(data.Integral));
        cbuy.totalStore(data);
        return total;
    },

    bindTotal: function () {
        var total = "";
        if (cbuy.isRede == false || cbuy.isRede == undefined)
            total += "<span>  赠送积分：<i>{0}分</i> </span>".toFormat(cart.toDecimalAuto(cbuy.total.Integral));
        total += "<span> 优惠券：<i>¥{0}</i> </span><span> 运费：<i>¥{1}</i></span><span> 税费：<i>¥{2}</i></span><span> 返现：<i>¥{3}</i></span>".toFormat(cart.toDecimalAuto(cbuy.total.Coupon), cart.toDecimalAuto(cbuy.total.Freight), cart.toDecimalAuto(cbuy.total.Tax), cart.toDecimalAuto(cbuy.total.Cash, -1, true));
        total += "<span> 应付总金额：<{1}>¥{0}</{1}></span>".toFormat(cart.toDecimalAuto(cbuy.total.Price + cbuy.total.Freight, -1, true), (cbuy.isRede == true ? "i" : "b"));
        if (cbuy.isRede == true)
            total += "<span> 换购积分总计：<b>{0}分</b></span>".toFormat(cart.toDecimalAuto(cbuy.total.Integral));
        return total;
    },

    getSinceAddress: function (since) {
        if (since != 'true') {
            $("#sinceaddress").html("");
            $("#divSince").hide();
            return;
        }
        $.ajax({
            url: '/controls/CartOrderHandler.ashx',
            type: 'POST',
            data: { type: "getsince", areaid: -1 },
            dataType: "JSON",
            async: false,
            success: function (data) {
                $("#divSince").show();
                if (data == null ||data.data == "0") {
                    $("#sinceaddress").html("该地区没有自提点");
                    //$("#divSince").hide();
                    return;
                }
                var html = "<input type='hidden' name='txtsince' id='txtsince'>";
                $.each(data, function() {
                    html += '<div class="checkOrder-content-address-show" data-role="checkOrder-content-address-box0" data-id="' + this.Id + '" id="myadr00_' + this.Id + '" style="background-position: 295px 0px;"><div class="checkOrder-content-address-box" data-code="110101" id="myadrc00_' + this.Id + '" did="' + this.Id + '" style="background: none;"><dl><dt>' + this.CompanyName + '</dt><dd><p>' + this.mobile + '&nbsp;</p></dd><div class="cb"></div></dl><p>' + this.ProviceName + '-' + this.CityName + '-' + this.areaname + '-' + this.address + '</p></div><div class="checkOrder-content-address-show-but" style="display: none;"></div></div>';
                });

                $("#sinceaddress").html(html);
            }
        });
    },
    getAddress: function (data, hasheader, isdefault) {
        var tel = (data.Tel == null || data.Tel == undefined ? "" : data.Tel.split('-'));
        hasheader = hasheader == undefined || hasheader == true ? true : false;
        isdefault = isdefault == undefined || isdefault == false ? false : true;
        var isShow = (tel.length > 1 && tel[1].length > 0);
        cbuy.appendAddress(data.AddressId, data);
        var adr = "";
        if (hasheader) {
            adr += " <div class='checkOrder-content-address-show {1}' id='myadr_{0}' >".toFormat(data.AddressId, isdefault ? "token" : "");
            adr += "<div class='checkOrder-content-address-box'  data-role='checkOrder-content-address-box' data-code='{0}' id='myadrc_{1}' did='{1}'>".toFormat(data.AreaId, data.AddressId);
        } else {
            $("#myadrc_" + data.AddressId).attr('data-code', data.AreaId);

        }
        var tmobile = data.Mobile == null || data.Mobile == "null" ? "" : data.Mobile;
        adr += "<dl><dt>{0}</dt><dd><p>{1}{2}</p></dd><div class='cb'></div></dl>".toFormat(data.Name, tmobile, isShow ? "/" + data.Tel : "&nbsp;");
        adr += "<p>{0}{1}</p>".toFormat(data.ProvincAddress, cart.getNoEmpty(data.PostCode) == "--" ? "" : "（{0}）".toFormat(cart.getNoEmpty(data.PostCode)));
        if (hasheader) {
            adr += "</div>";
            adr += "<div class='checkOrder-content-address-show-but'><a class='a-change' onclick='cab.adrchange(this);' aid='{0}'>修改</a>|<a class='a-delete' onclick='cab.adrremove(this);' aid='{0}'>删除</a></div>".toFormat(data.AddressId);

            adr += "</div>";
        }
        
        //if (isdefault) {
        //    cbuy.getSinceAddress();
        //}
        
        return adr;
    },
    userAddress: function (data) {
        var arr = data.Address;
        if (arr == null || arr.length < 0) {
            return;
        }

        var adrs = new Array();
        for (var i = 0, len = arr.length; i < len; i++) {
            var addr = arr[i];
            cbuy.lastareaid = addr.AreaId;
            if (addr.IsDefault) {
                cbuy.aid = addr.AddressId;
            } else if (i == 0) {
                cbuy.aid = arr[0].AddressId;
            }
            adrs.push(cbuy.getAddress(addr, true, addr.IsDefault));
        }
        var html = adrs.join('');
        cart.bindData("useradrs", html, 1, "");
    },
    changeAddress: function (t) {
        var acode = $(t).attr("data-code");
        var aid = $(t).attr("did");
        if (cbuy.lastareaid != acode || cbuy.aid != aid) {
            cbuy.aid = aid;
            cbuy.lastareaid = acode;
            var isload = (cbuy.lastareaid != acode && cbuy.aid != aid);
            var result = cart.requestFn({ type: 'cartbuyaddresschanged', up: isload, aid: cbuy.lastareaid, did: cbuy.aid }, true, {
                func: function (r, para) {
                    cbuy.changeStoreByAddress(r.Result, true);

                }
            });
        }
    },
    changeStoreByAddress: function (list, ispostage) {
        ispostage = ispostage == undefined || ispostage == false ? false : true;
        for (var i = 0, len = list.length; i < len; i++) {
            var data = list[i];

            if (data.Id == -1) {
                cbuy.total = data.Data;
                cart.bindData("cartbuytotal", cbuy.bindTotal(), 1);
                if (ispostage) {
                    db.initPay(data.Remark);
                    cbuy.bindPay();
                    initPayload();
                }
                continue;
            }
            if (data.Products != null && data.Products.length > 0) {
                for (var j = 0, jen = data.Products.length; j < jen; j++) {
                    var g = data.Products[j];
                    var lix = "{0}_{1}_{2}_{3}".toFormat(data.Id, g.GoodsId, g.Type, g.WhoseId);
                    if (g.Type != 10)
                        $("#tip_" + lix).html(cart.getGoodStatus(g.Status));
                    //var noticed = $("#noticed_{0}".toFormat(lix));
                    if (g.Status != 6) {
                        $("#tip_" + lix).addClass("p-c-r");
                        //if (g.Status == 5 || g.Status == 4) {
                        //    noticed.removeClass("none");
                        //} else noticed.addClass("none");
                    } else {
                        $("#tip_" + lix).removeClass("p-c-r").addClass("");
                        // noticed.removeClass("none");
                    }

                }
            }
            if (ispostage) {
                db.changeFeight(data.Id, 0);
                var html = cbuy.bindPostType(data.Freights, data.Id, data.offerId);
                $("#sp_" + data.Id + "_" + data.OfferId).html(html);
                $("#currnetfreight" + data.Id + "_" + data.OfferId).html("￥{0}".toFormat(cart.toDecimalAuto(data.Data.Freight)));
                //console.log($("#currnetfreight" + data.Id + "_" + data.offerId).html());
                boxserClick(false);
            }
        }
    },
    deleteAddress: function (t) {
        var aid = $(t).attr("aid");
        if (cbuy.aid == aid) {
            cart.Message("当前选中收货地址不可删除！", null, false);
            return;
        }
        var result = cart.requestFn({ type: 'cartremoveaddress', adr_id: aid }, true, {
            func: function (r, p) {
                cart.Success("删除成功！", function () {
                    $("#myadr_" + p.aid).remove();
                    cbuy.removeAddress(p.aid);
                }, false);
            }, fpara: { aid: aid }
        });
    },
    adrchanged: function (t) {
        var pid = $(t).attr("pid");
        var aid = $(t).val();
        var html = cbuy.bindareatoaddress(aid);
        if (pid == "0") {
            html = "<option value='-1'>请选择城市</option>" + html;
            $("#sel_adr_cs").html(html);

        } else if (pid == "1") {
            html = "<option value='-1'>请选择区县</option>" + html;
            $("#sel_adr_qx").html(html);
        }
    },
    addAddressShow: function (t) {
        var html = "";
        html += "<div class='recipient-info'><dl><dt><i>*     </i>收货人姓名:";
        html += "</dt><dd><input type='text' id='adrname' style='width: 200px'/></dd>";
        html += "<div class='cb'></div></dl><dl>";
        html += "<dt>";
        html += "<i>";
        html += "*";
        html += "          </i>                                              ";
        html += "  省市区:                                                   ";
        html += "      </dt>                                                 ";
        html += "      <dd>                                                  ";
        html += "          <select name='' id='sel_adr_sf' pid='0' onchange='cbuy.adrchanged(this);'>      ";
        html += "              <option value='-1'>请选择省份</option>                ";
        html += cbuy.bindareatoaddress(0);
        html += "          </select>                                         ";
        html += "          <select name='' id='sel_adr_cs' pid='1' onchange='cbuy.adrchanged(this);'>       ";
        html += "              <option value='-1'>请选择城市</option>                ";
        html += "          </select>                                         ";
        html += "          <select name='' id='sel_adr_qx' pid='2'>  ";
        html += "              <option value='-1'>请选择区县</option>                ";
        html += "          </select>                                         ";
        html += "      </dd>                                                 ";
        html += "      <div class='cb'></div>                                ";
        html += "  </dl>                                                     ";
        html += "  <dl>                                                      ";
        html += "      <dt>                                                  ";
        html += "          <i>                                               ";
        html += "              *                                             ";
        html += "          </i>                                              ";
        html += "  街道地址:                                                ";
        html += "      </dt>                                                 ";
        html += "      <dd>                                                  ";
        html += "          <input type='text' id='adradr' style='width: 200px'/>         ";
        html += "      </dd>                                                 ";
        html += "      <div class='cb'></div>                                ";
        html += "  </dl>                                                     ";
        html += "  <dl>                                                      ";
        html += "      <dt>                                                  ";
        html += "  邮政编码:                                                  ";
        html += "      </dt>                                                 ";
        html += "      <dd>                                                  ";
        html += "          <input type='text' id='adrzip' style='width: 200px'/>         ";
        html += "      </dd>                                                 ";
        html += "      <div class='cb'></div>                                ";
        html += "  </dl>                                                     ";
        html += "  <dl>";
        html += "           <dt>                                                                                            ";
        html += "               <i>                                                                                         ";
        html += "                   *                                                                                       ";
        html += "               </i>                                                                                        ";
        html += "       手机号码:                                                                                           ";
        html += "           </dt>                                                                                           ";
        html += "           <dd>                                                                                            ";
        html += "               <input type='text' id='adrmobile'  maxlength='15'  style='width: 120px'/>                                                   ";
        html += "               <span>                                                                                      ";
        html += "           固定电话:<input type='text' id='adrtelcode' style='width: 50px'/> - <input type='text' id='adrtel' style='width: 100px'/>   ";
        html += "           两者至少填一个                                                                                   ";
        html += "       </span>                                                                                             ";
        html += "   </dd>                                                                                                   ";
        html += "                                                                                                           ";
        html += "   <div class='cb'></div>                                                                                  ";
        html += "   </dl>                                                                                                   ";
        html += "   </div>  ";
        window.Ecshop.Tool.Hint.newConfirm({
            info: html,
            tit: "添加收货人信息",
            width: 700,     //宽度 confirm专有属性 提示信息框无用
            height: 370,
            style: 'gray',
            curpage: true,
            button: {
                sort: true,//是否交换按钮顺序
                btnConfirm: '保存收货人信息',
                btnCancle: '取消',
                callbackConfirm: cbuy.addAddress,
                callbackbtnCancle: function () { }
            },
        });

    },
    checkAddress: function () {
        var val0 = $("#adrname").val();
        var val1 = $("#sel_adr_sf").val();
        var val2 = $("#sel_adr_cs").val();
        var val3 = $("#sel_adr_qx").val();
        var val4 = $("#adradr").val();
        var val5 = $("#adrmobile").val();
        var val6 = $("#adrtelcode").val();
        var val7 = $("#adrtel").val();
        if (val0 == "") {
            cart.Message("姓名不能为空", null, false);
            return false;
        }
        if (val1 == "") {
            cart.Message("省市不能为空", null, false);
            return false;
        }
        if (val1 == "-1") {
            cart.Message("省市不能为空", null, false);
            return false;
        }
        if (val2 == "-1") {
            cart.Message("城市不能为空", null, false);
            return false;
        }
        if (val3 == "-1") {
            cart.Message("区县不能为空", null, false);
            return false;
        }
        if (val4 == "") {
            cart.Message("街道不能为空", null, false);
            return false;
        }
        if (val5 != "" || (val6 != "" && val7 != "")) {

        } else {
            cart.Message("联系方式必须选填一个", null, false);
            return false;
        }
        var val8 = "({0}){1}".toFormat(val6, val7);
        var rel = /^\([0-9]{3,4}\)[0-9]{7,8}$/;
        var re = /^0?(13[0-9]|15[012356789]|18[0-9]|14[57]|17[0-9])[0-9]{8}$/;

        if (re.test(val5) || rel.test(val8)) {
            return true;
        }
        else {
            cart.Message("联系号码有误", null, false);
            return false;
        }
    },
    addAddress: function (t) {
        if (cbuy.checkAddress() == false)
            return false;
        var data = { type: 'cartappendaddress', adr_id: '', adr_name: '', adr_mobile: '', adr_postcode: '', adr_adr: '', adr_tel: '', adr_aid: '' };
        data.adr_name = $("#adrname").val();
        data.adr_mobile = $("#adrmobile").val();
        data.adr_postcode = $("#adrzip").val();
        data.adr_adr = $("#adradr").val();
        data.adr_tel = $("#adrtel").val();
        data.adr_aid = $("#sel_adr_qx").val();
        data.adr_telcode = $("#adrtelcode").val();
        var result = cart.requestFn(data, true, {
            func: function (r, p) {
                cart.Success("添加收货地址成功!", cbuy.bindAddressbyAdd(r), false);
            }
        });

        return true;
    },
    bindAddressbyAdd: function (r) {
        var adr = r.Result;
        var html = cbuy.getAddress(adr);
        $("#useradrs").append(html);
        if (cbuy.aid == undefined || cbuy.aid == 0)
            cbuy.aid = adr.AddressId;
        //cbuy.changeStoreByAddress(adr, true);
        cbuy.changeStoreByAddress(r.Other, true);
        // longth();
        resetSelectaddress(adr.AddressId);
        address();
        $("#myadrc_" + adr.AddressId).click();
    },
    updateAddressShow: function (t) {
        var aid = $(t).attr("aid");
        var data = cbuy.getAdr(aid);
        var hx = { sf: '', cs: '', qx: '' };
        hx.qx = cbuy.bindareatoaddress(data.CityId, data.AreaId);
        hx.cs = cbuy.bindareatoaddress(data.ProvinceId, data.CityId);
        hx.sf = cbuy.bindareatoaddress(0, data.ProvinceId);
        var tel = '';
        var telcode = '';
        if (data.Tel != undefined) {
            var tels = data.Tel.split('-');
            telcode = tels.length > 1 ? tels[0] : '';
            tel = tels.length > 1 ? tels[1] : tels[0];
        }
        var html = "";
        html += "<div class='recipient-info'><dl><dt><i>*      </i>收货人姓名:";
        html += "</dt><dd><input type='text' id='adrname' value='{0}' did='{1}' aid='{2}' style='width: 200px'/></dd>".toFormat(data.Name, data.AddressId, data.AreaId);
        html += "<div class='cb'></div></dl><dl>";
        html += "<dt>";
        html += "<i>";
        html += "*";
        html += "          </i>                                              ";
        html += "  省市区:                                                   ";
        html += "      </dt>                                                 ";
        html += "      <dd>                                                  ";
        html += "          <select name='' id='sel_adr_sf' pid='0' onchange='cbuy.adrchanged(this);'>      ";
        html += "              <option value='-1'>请选择省份</option>                ";
        html += hx.sf;
        html += "          </select>                                         ";
        html += "          <select name='' id='sel_adr_cs' pid='1' onchange='cbuy.adrchanged(this);'>       ";
        html += "              <option value='-1'>请选择城市</option>                ";
        html += hx.cs;
        html += "          </select>                                         ";
        html += "          <select name='' id='sel_adr_qx' pid='2'>  ";
        html += "              <option value='-1'>请选择区县</option>                ";
        html += hx.qx;
        html += "          </select>                                         ";
        html += "      </dd>                                                 ";
        html += "      <div class='cb'></div>                                ";
        html += "  </dl>                                                     ";
        html += "  <dl>                                                      ";
        html += "      <dt>                                                  ";
        html += "          <i>                                               ";
        html += "              *                                             ";
        html += "          </i>                                              ";
        html += "  街道地址:                                                ";
        html += "      </dt>                                                 ";
        html += "      <dd>                                                  ";
        html += "          <input type='text' id='adradr' value='{0}' style='width: 200px'/>         ".toFormat(data.Address);
        html += "      </dd>                                                 ";
        html += "      <div class='cb'></div>                                ";
        html += "  </dl>                                                     ";
        html += "  <dl>                                                      ";
        html += "      <dt>                                                  ";
        html += "  邮政编码:                                                  ";
        html += "      </dt>                                                 ";
        html += "      <dd>                                                  ";
        html += "          <input type='text' id='adrzip' value='{0}' style='width: 200px'/>         ".toFormat(cart.toDefault(data.PostCode, ''));
        html += "      </dd>                                                 ";
        html += "      <div class='cb'></div>                                ";
        html += "  </dl>                                                     ";
        html += "  <dl>";
        html += "           <dt>                                                                                            ";
        html += "               <i>                                                                                         ";
        html += "                   *                                                                                       ";
        html += "               </i>                                                                                        ";
        html += "       手机号码:                                                                                           ";
        html += "           </dt>                                                                                           ";
        html += "           <dd>                                                                                            ";
        html += "               <input type='text' id='adrmobile' maxlength='15' style='width: 120px' value='{0}'/> ".toFormat(data.Mobile == null || data.Mobile == "null" ? "" : data.Mobile);;
        html += "               <span>                                                                                      ";
        html += "           固定电话:<input type='text' id='adrtelcode' value='{0}' style='width: 50px'/> - <input type='text' id='adrtel' value='{1}' style='width: 100px'/> ".toFormat(cart.toDefault(telcode, ''), cart.toDefault(tel, ''));
        html += "           两者至少填一个                                                                                   ";
        html += "       </span>                                                                                             ";
        html += "   </dd>                                                                                                   ";
        html += "                                                                                                           ";
        html += "   <div class='cb'></div>                                                                                  ";
        html += "   </dl>                                                                                                   ";
        html += "   </div>  ";
        window.Ecshop.Tool.Hint.newConfirm({
            info: html,
            tit: "编辑收货地址",
            width: 700,     //宽度 confirm专有属性 提示信息框无用
            height: 370,
            style: 'gray',
            curpage: true,
            button: {
                sort: true,//是否交换按钮顺序
                btnConfirm: '保存收货人信息',
                btnCancle: '取消',
                callbackConfirm: cbuy.updateAddress,
                callbackbtnCancle: function () { }
            },
        });
        $("#sel_adr_sf").find("option[value='" + data.ProvinceId + "']").attr("selected", true);
        $("#sel_adr_cs").find("option[value='" + data.CityId + "']").attr("selected", true);
        $("#sel_adr_qx").find("option[value='" + data.AreaId + "']").attr("selected", true);
    },
    updateAddress: function (t) {
        var did = $("#adrname").attr("did");
        var aid = $("#adrname").attr("aid");
        //if (cbuy.aid == aid) {
        //    cart.Message("当前选中收货地址不可编辑!");
        //    return;
        //}
        var data = { type: 'cartupdateaddress', adr_id: '', adr_name: '', adr_mobile: '', adr_postcode: '', adr_adr: '', adr_tel: '', adr_aid: '', is_area: 0 };
        data.adr_name = $("#adrname").val();
        data.adr_id = did;
        data.adr_mobile = $("#adrmobile").val();
        data.adr_postcode = $("#adrzip").val();
        data.adr_adr = $("#adradr").val();
        data.adr_tel = $("#adrtel").val();
        data.adr_aid = $("#sel_adr_qx").val();
        data.adr_telcode = $("#adrtelcode").val();
        data.is_area = data.adr_aid == cbuy.lastareaid ? 0 : 1;
        var result = cart.requestFn(data, true, {
            func: function (r, para) {
                cart.Success("修改地址成功!", cbuy.bindAddressUpdate(r, data), false);
            }
        });
        return true;
    },
    bindAddressUpdate: function (r, adr) {

        var ispostage = adr.is_area == undefined || adr.is_area != 1 ? false : true;
        var html = cbuy.getAddress(r.Result, false);
        $("#myadrc_" + adr.adr_id).html(html);
        cbuy.lastareaid = adr.adr_aid;
        if (ispostage) {
            cbuy.changeStoreByAddress(r.Other, true);
        }
    },
    userTaxBill: function (data) {
        if (cbuy.isRede) {
            $("#invoicebill").hide();
            return;
        }
        var iscolse = (data.InvoiceType == "-1" || data.InvoiceType == -1);
        if (!iscolse && data.InvoiceData != null && data.InvoiceData.length > 0) {
            cab.bindbilltext(data.InvoiceData);
        }
        var bill = "<ul>" + data.InvoiceContent;
        if (!iscolse && data.InvoiceType != "0")
            bill += "<li> <p>备注：商品如由第三方寄出，发票内容由卖家决定，发票由卖家开票并寄出</p></li>";
        bill += "</ul>";
        cart.bindData("bill_tax", bill, 1);
    },
    //选择优惠券
    cartselectcoupon: function (sid, cid) {
        var result = cart.request({ type: "cartselectcoupon", cid: cid, sid: sid, aid: cbuy.lastareaid });
        if (result.Status == 1) {
            var current = result.Result[1];
            var id = "bst_{0}".toFormat(current.Id);
            if (cart.isReal) {
                clist.bindRealTotal(result.Result[0]);
            } else {
                cart.bindData(id, cbuy.bindStoreTotal(current.Data), 1);
                cbuy.total = result.Result[0].Data;
                cart.bindData("cartbuytotal", cbuy.bindTotal(), 1);
            }
            var tip = "共使用了1张优惠券 可优惠 <i>{2}</i> 元 <a onclick='cab.removeCoupon(this);' id='canclecoup' aid='{1}' sid='{0}' class='cur_poin'>取消使用</a>".toFormat(current.Id, cid, cart.toDecimalAuto(current.Data.Coupon, -1, true));
            $("#coupon_tip" + current.Id).addClass("none");
            $("#coupon_use" + current.Id).removeClass("none");
            cart.bindData("coupon_use" + current.Id, tip, 1);
            ca.hideDialog();
        } else {
            if (result.Status == 2 || result.Status == 0) {
                cart.Warn(result.Code);
            }
        }
    },
    //取消优惠券
    cartcanelcoupon: function (t) {
        var cid = $(t).attr("aid");
        var sid = $(t).attr("sid");
        var cod = $(t).attr("cod");
        var result = cart.request({ type: "cartcanelcoupon", cid: cid, sid: sid });
        if (result.Status == 1) {
            if (cart.isReal) {
                clist.bindRealTotal(result.Result[0],false);
            } else
                cbuy.changeStoreByAction(result.Result, true, true, 1);
            $("#coupon_use" + sid).addClass("none");
            $("#coupon_tip" + sid).removeClass("none");
            cart.bindData("coupon_use" + sid, "", 1);
        } else {
            if (result.Status == 2 || result.Status == 0) {
                cart.Message(result.Message, null, false);
            }
        }
    },
    //使用优惠券
    getcouponbycode: function (sid, code) {
        var result = cart.request({ type: "cartcodecoupon", coupon: code, sid: sid, aid: cbuy.lastareaid });
        if (result.Status == 1) {
            var current = result.Result[1];
            var id = "bst_{0}".toFormat(current.Id);
            if (cart.isReal) {
                clist.bindRealTotal(result.Result[0],false);
            } else {
                cart.bindData(id, cbuy.bindStoreTotal(current.Data), 1);
                cbuy.total = result.Result[0].Data;
                cart.bindData("cartbuytotal", cbuy.bindTotal(), 1);
            }
            var tip = "共使用了1张优惠券 可优惠 <i>{2}</i> 元 <a onclick='cab.removeCoupon(this);' id='canclecoup' aid='{1}' sid='{0}'  class='cur_poin'>取消使用</a>".toFormat(current.Id, current.Data.CouponId, cart.toDecimalAuto(current.Data.Coupon, -1, true));
            $("#coupon_tip" + current.Id).addClass("none");
            $("#coupon_use" + current.Id).removeClass("none");
            cart.bindData("coupon_use" + current.Id, tip, 1);
            db.appendCoupon(current.Id, result.Other);
            cart.Success("恭喜您，优惠券使用成功！", ca.hideDialog, false);
        } else {
            if (result.Status == 2 || result.Status == 0) {
                cart.Warn(result.Code);
            }
        }
    },
    goorder: function () {
        var rpid = 0;
        if (cart.isReal) {
            var ckid = $("#pay-box a[ck='1']").attr("data-code");
            if (ckid == undefined || parseInt(ckid) < 0) {
                cab.setAction(2, true);
                return cart.Warn('1010');
            }
            rpid = ckid;
        }
        var dlytime = "";
        var isdlytime = 0;

        if ($(".boxser[did=" + db.data[0]["dly"] + "]").attr("isr") == 'true') {
            dlytime = $("#txtDlyTime").val();
            var selhour = $("#selHour").val();
            //var selminute = $("#selMinute").val();
            isdlytime = 1;
            if ($.trim(dlytime) == "") {
                cart.Message("请选择预约配送时间！", null, false);
                cab.setAction(2, true);
                return;
            }
            dlytime = dlytime + " " + selhour;
            var dlyDate = new Date(dlytime);

            var dateNow = new Date().setHours(new Date().getHours() + 2);
            if (Date.parse(dlyDate) < dateNow) {
                cart.Message("预约时间必须是2个小时以后！", null, false);
                cab.setAction(2, true);
                return;
            }
        }
        
        //验证赠品活动
        var sendgoodsstr = "";
        var sendsumcount = new Object();
        
        $(".txtgiftsendcount").each(function () {
            if (parseInt($(this).val()) > 0) {
                sendgoodsstr += $(this).attr("goodsid") + "_" + $(this).attr("key")+ "_" + $(this).val() + ",";
                if (sendsumcount[$(this).attr("key")] == null)
                    sendsumcount[$(this).attr("key")] = parseInt($(this).val());
                else {
                    sendsumcount[$(this).attr("key")] = parseInt($(this).val()) + sendsumcount[$(this).attr("key")];
                }
            }
        });

        var isCommit = true;
        $(".allsumsendcount").each(function () {
            
            if ((sendsumcount[$(this).attr("key")] == null && parseInt($(this).attr("sumvirtualcount")) > 0) || (parseInt($(this).val()) > sendsumcount[$(this).attr("key")] && parseInt($(this).attr("sumvirtualcount")) > sendsumcount[$(this).attr("key")])) {
                
                cart.Message("活动名称【" + $(this).attr("whosename") + "】：可以选择" + $(this).val() + "个赠品，当前只选择了" + (sendsumcount[$(this).attr("key")] == null ? 0 : sendsumcount[$(this).attr("key")]) + "个",null,false);
                cab.setAction(2, true);
                isCommit = false;
                return;
            }
        });

        if (!isCommit)
            return;

        if ($("#divSince").length > 0 && !$("#divSince").is(":hidden") && $('#txtsince').length >0 &&($('#txtsince').val() == null || $('#txtsince').val() == "" || $('#txtsince').val() == "0")) {
            cart.Message("请选择提货点", null, false);
            cab.setAction(2, true);
            return;
        }

        var pt = "";
        if ($("#cartation").val() == 1) {
            $("span[name='minsum']").each(function () {
                var item = $(this).html();
                if (item == "") item = 0;
                if ($(this).parent().parent().find("input[type='checkbox']:checked").length == 0) {
                    return true;
                }
                pt += $(this).attr("sid") + ":" + parseFloat(item) + ";";
            });
            if (pt!="") {
                pt = pt.substring(0, pt.length - 1);
            }
        }

        //var _res = $.trim($("#txtRemarks").val());
        //console.log(_res);
        //return;
        var result = cart.requestFn({ type: 'carttoorder', addid: cbuy.aid, aid: cbuy.lastareaid, edata: cart.toJson(db.getedata()), rpid: rpid, dlytime: dlytime, isdlytime: isdlytime, sinceid: $('#txtsince').val(), sendgoodsstr: sendgoodsstr, pt: pt, res: $.trim($("#txtRemarks").val()) }, false, {
            func: function (r, p) {
                switch (r.Action) {
                    case 4:
                        cart.Success("8102", function () {
                            location.href = '/usercenter/index.aspx?redirection=/userCenter/quotemanager.aspx';
                        });
                        break;
                    case 5:
                        cart.Success("8102", function () {
                            location.href = '/userCenter/quotemanager.aspx';
                        });
                        break;
                    case 6:
                        cart.Success("8100", function () {
                            location.href = '/admin/ordermanger/SelectUser.aspx';
                        });
                        break;
                    case 7:
                        cart.Success("8101", function () {
                            location.href = '/user/myorder.aspx';
                        });
                        break;
                    case 8:
                        location.href = "/Cart{0}".toFormat(r.Result);
                        break;
                    case 9:
                        cart.Success("1600", function () {
                            ChangePriceLog(r.Result);
                            location.href = '/ServerProvider/Order/PrintOrder.aspx?o=' + r.Result + '&tm=' + $("#txtHidIsTm").val();
                        });
                        break;
                    case 10:
                        cart.Success("8100", function () {
                            location.href = '/admin/marketQuery/ServerBymemberList.aspx';
                        });
                        break;
                }
            },
            error: function () {
                cab.setAction(2, true);
            }
        });
    },
    totalStore: function (data) {
        cbuy.total.cheap += data.Cheap;
        cbuy.total.coupon += data.Coupon;
        cbuy.total.count += data.Count;
        cbuy.total.freight += data.Freight;
        cbuy.total.integral += data.Integral;
        cbuy.total.price += data.Price;
        cbuy.total.tax += data.Tax;
    },
    //购物车商品加载
    bindProduct: function (list, sid) {
        console.log(11111111111111);
        var pros = new Array();
        var result = { html: '', list: [], gifts: [] };
        pros.push("<div class='checkOrder-box-top-rig-show'>");
        var pcount = list.length;
        var keys = new Object();
        
        for (var ltemp = 0; ltemp < list.length; ltemp++) {
            var product = list[ltemp];
            if (keys[product.WhoseId] != null) continue;
            keys[product.WhoseId] = 1;
            pros.push("<div class='group-gift'>");
            if (product.WhoseType == "4") {
                pros.push('<div class="shopCart-product-top box" title="' + product.WhoseContent + '"><div class="shopCart-product-top-test box"><span class="cx-span">满赠</span><dl class="box1 box"><dt class="box1">&nbsp;' + product.WhoseName + '(此活动您最多可以选择' + product.SendCount + '个赠品)</dt><dd class="arrow arrow-right activity-arrow"></dd></dl></div></div>');
            } else if (product.Type == 1 || product.Type == 2) {
                var name = product.Type == 1 ? "打折" : "满减";
                pros.push('<div class="shopCart-product-top box" title="' + product.WhoseContent + '"><div class="shopCart-product-top-test box"><span class="cx-span">' + name + '</span><dl class="box1 box"><dt class="box1">&nbsp;' + product.WhoseName + '</dt><dd class="arrow arrow-right activity-arrow"></dd></dl></div></div>');
                 
            }
            pros.push(cbuy.parseProduct(product, sid));
            //if (product.SendGood.length > 0 && product.HasSelfSendGoods) {
            //    $.each(product.SendGood, function () {
            //        if (this.WhoseId == "0") {
            //            pros.push(cbuy.parseProduct(this, sid));
            //        }
            //    });
            //}
            for (var lctemp = ltemp + 1; lctemp < list.length; lctemp++) {
                var tempproduct = list[lctemp];
                if (tempproduct.WhoseId == product.WhoseId) {
                    pros.push(cbuy.parseProduct(tempproduct, sid));

                    //if (tempproduct.SendGood.length > 0 && tempproduct.HasSelfSendGoods) {
                    //    $.each(tempproduct.SendGood, function () {
                    //        if (this.WhoseId == "0") {
                    //            pros.push(cbuy.parseProduct(this, sid));
                    //        }
                    //    });
                    //}
                }
            }

            if (product.SendGood.length > 0) {
                
                var sumVirtualCount = 0;
                for (var stemp = 0; stemp < product.SendGood.length; stemp++) {
                    if (parseInt(product.SendGood[stemp].WhoseId) > 0) {
                        pcount++;
                        pros.push(cbuy.parseProduct(product.SendGood[stemp], sid));
                        
                        if (parseInt(product.SendGood[stemp].Count) > parseInt(product.SendGood[stemp].VirtualCount))
                            sumVirtualCount += parseInt(product.SendGood[stemp].VirtualCount);
                        else 
                            sumVirtualCount += parseInt(product.SendGood[stemp].Count);
                    }
                }
                
                pros.push("<input type='hidden' class='allsumsendcount sumsendcount_" + sid + "_" + product.WhoseId + "' whosename='" + product.WhoseName + "'  key='" + sid + "_" + product.WhoseId + "' value='" + product.SendCount + "' sumvirtualcount='" + sumVirtualCount + "'>");
            }
            pros.push("</div>");
        }

        pros.push("</div>");
        if (pcount > 3) {
            var ext = "<div class='checkOrder-box-top-rig-arrow'><p class='opening'>展开 <img src='/images/cart/downnn.png' alt=''/></p><p class='packUp none'>收起 <img src='/images/cart/uppp.png' alt=''/></p></div>";
            pros.push(ext);
        }
        result.html = pros.join('');
        return result;
    },
    parseProduct: function (data, sid) {
        var ncount = data.Type == 8 ? data.Count * data.WhoseCount : data.Count;
        var pro = "<div class='checkOrder-box-top-rig-box'>";
        pro += "<div>";
        
        if (data.Type == 1 || data.Type == 3 || data.Type == 10 || data.Type == 2) {
            pro += "<input type='checkbox' class='circle' disabled checked />";
        }
        
        var fix = "{0}_{1}_{2}_{3}".toFormat(sid, data.GoodsId, data.Type, data.WhoseId);
        pro += "<table><tr>";
        pro += "<td width='20%'><img src='{0}' alt='' class='cur_poin' onclick='cart.visit({1});' /></td>".toFormat(cart.getInitImage(data.Image), data.ProductId);
        if (data.Type == 1 || data.Type == 3 || data.Type == 2) {
            pro += "<td width='50%' class='tl'><h1 class='cur_poin' onclick='cart.visit({2});'>{0}</h1><p>{1}</p> </td>".toFormat(data.Name, cart.toDefault(data.Spec, ''), data.ProductId);
        } else {
            pro += "<td width='50%' class='tl'><h1 class='cur_poin' onclick='cart.visit({2});'>{3}{0}</h1><p>{1}</p> </td>".toFormat(data.Name, cart.toDefault(data.Spec, ''), data.ProductId, cbuy.getGoodMark(data.Type));
        }
        
        //计算赠品显示数量
        if (data.Type == 10 && data.WhoseId > 0 && data.VirtualCount < ncount) {
            ncount = cart.toDecimalAuto(data.VirtualCount);
        }
        pro += "<td width='15%'><div class='pro-num' offerId='{5}'><div class='bomb-box none' id='box_{2}'></div><span id='lsgc_{2}'>{0}</span>&nbsp;{1}</div><p class='{4}' id='tip_{2}'>{3}</p></td>".toFormat(cart.toDecimalAuto(ncount), cart.toDefault(data.Unit, ' '), fix, data.Type == 10 ? "" : cart.getGoodStatus(data.Status), data.Status == 6 ? "" : "p-c-r", data.offerId);
        if (data.Type == 10 && data.WhoseId >0) {
            pro += "<td width='15%' class='choose-gift' ><label><input type='checkbox' id='chooseGift' onclick='cbuy.isCheck(this)' />选择赠品</label><p class='choose-gift-num'><input type='text' maxlength='5' class='txtgiftsendcount txtgiftsendcount_" + sid + "_" + data.WhoseId + "' key='" + sid + "_" + data.WhoseId + "' whosename='" + data.WhoseName + "' goodsid='" + data.GoodsId + "'  maxcount='" + ncount + "' value='0' onblur='cbuy.checkNum(this)'></p></td>";
        } else {
            if (cbuy.isRede)
                pro += "<td width='15%' ><span class='line-price'>¥{0}</span><div>{1}分</div></td>".toFormat(cart.toDecimalAuto(data.Price, -1, true), cart.toDecimalAuto(data.BuyIntegral, -1, true));
            else
                pro += "<td width='15%' ><span>¥{0}</span></td>".toFormat(cart.toDecimalAuto(data.Price, -1, true));
        }
        pro += " </tr></table>";
        
        //商品自带赠品
        if (data.HasSelfSendGoods&&data.SendGood != null && data.SendGood.length > 0) {
            $.each(data.SendGood, function () {
                if (this.WhoseId == "0") {
                    pro += "<div class='gift'><span class='cxSpan' title=''>赠品</span><p>" + this.Name + "</p><em>×" + (this.Type == 8 ? this.Count * this.WhoseCount : this.Count) + "</em></div>";
                }
            });
        }
        pro +="</div></div>";
        return pro;
    },isCheck:function(obj) {
        if ($(obj).is(':checked')) {
            $(obj).parents('.choose-gift').find('.choose-gift-num').show();
        } else {
            $(obj).parents('.choose-gift').find('.choose-gift-num').hide();
            $(obj).parents('.choose-gift').find('.choose-gift-num').find("input").val(0);
        }
    }
    , checkNum: function(obj) {
        if (isNaN(parseInt($(obj).val()))) {
            $(obj).val(0);
        } else {
            if (parseInt($(obj).val()) < 0)
                $(obj).val(0);

            if (parseInt($(obj).val()) > parseInt($(obj).attr("maxcount")))
                $(obj).val($(obj).attr("maxcount"));

            var key = $(obj).attr("key");
            var maxSendCount = parseInt($(".sumsendcount_" + key).val());
            var newSendCount = 0;
            $(".txtgiftsendcount_" + key).each(function () {
                newSendCount +=parseInt($(this).val());
            });
            if (maxSendCount < newSendCount) {
                if(newSendCount - maxSendCount <= parseInt($(obj).val()))
                    $(obj).val(parseInt($(obj).val()) - (newSendCount - maxSendCount));
                else
                    $(obj).val(0);
            }
            else
                $(obj).val(parseInt($(obj).val()));
        }
    },
    getGoodMark: function (type) {
        type = (type == undefined ? 0 : parseInt(type));
       
        switch (type) {
            case 1:
                return "<span class='cxSpan'>{0}</span>".toFormat("打折");
            case 2:
                return "<span class='cx-span'>{0}</span>".toFormat("满减");
            case 3:
                return "<span class='cx-span'>{0}</span>".toFormat("满赠");
            case 6:
                return "<span class='cx-span'>{0}</span>".toFormat("团购");
            case 7:
                return "<span class='cx-span'>{0}</span>".toFormat("抢购");
            case 8:
                return "<span class='cx-span'>{0}</span>".toFormat("套装");
            case 10:
                return "<span class='cxSpan'>{0}</span>".toFormat("赠品");
            default:
                return "";
        }
    },
    bindPay: function () {
        cart.bindData("pay-box", cbuy.createPay(), 1);
    },
    createPay: function () {
        var ecs = '';
        var ect = '';
        var pay = { isallcash: true, isnocash: true, isinline: true, isonline: false, isoffline: false, count: 0, text: '', data: ['', '', '', ''] };
        for (var i = 0, len = db.pay.length; i < len; i++) {
            var p = db.pay[i];
            if (p.Id == -1) {
                ect = p;
                continue;
            } else if (p.Id == 0) {
                ecs = p;
                if (ecs.IsDefault == -1)
                    continue;
            }
            pay.count = pay.count + 1;
            if (pay.isallcash) {
                pay.isallcash = (p.Inline == 1);
            }
            if (pay.isnocash) {
                pay.isnocash = (p.Inline != 1);
            }
        }
        var dp = cbuy.total.Payment;
        if (!cbuy.isRede && !pay.isallcash && !pay.isnocash && pay.count > 1)
            pay.text += " <a data-code='4' class='cur_poin c_payment' ck='{1}'>{0}</a>".toFormat(cbuy.getPayName(0), dp == 4 ? 1 : 0);
        if (ecs.Online == 1) {
            pay.data[ect.Online] = "<a data-code='{0}' class='cur_poin' ck='{2}'>{1}</a>".toFormat(1, cbuy.getPayName(1), dp == 1 ? 1 : 0);
        }
        if (!cbuy.isRede && pay.isallcash) {
            pay.data[ect.Inline] = "<a data-code='{0}' class='cur_poin' ck='{2}'>{1}</a>".toFormat(3, cbuy.getPayName(3), dp == 3 ? 1 : 0);
        }
        if (!cbuy.isRede && ecs.Offline == 1) {
            pay.data[ect.Offline] = "<a data-code='{0}' class='cur_poin' ck='{2}'>{1}</a>".toFormat(2, cbuy.getPayName(2), dp == 2 ? 1 : 0);
        }
        if (pay.data.length > 0)
            pay.text += pay.data.join('');
        return pay.text;
    },
    payNotice: function (t) {
        var txt = { online: '', cash: '' };

        for (var i = 0, len = db.pay.length; i < len; i++) {
            var p = db.pay[i];
            if (p.Id == -1) {
                continue;
            }
            if (p.Logo == undefined || p.Logo == '') {
                p.Logo = '/images/_07.png';
            }
            if (p.Id == 0 && p.IsDefault == -1)
                continue;
            var s = "<div class='cashOnDelivery-list'> <img src='{1}' alt=''/><h1>{0}</h1></div>".toFormat(cart.toDefault(p.Name, ''), p.Logo);
            if (p.Inline == 1) {
                txt.cash += s;
            } else txt.online += s;
        }
        //for (var i = 0, len = db.pay.length; i < len; i++) {
        //    var p = db.pay[i];
        //    var s = "<div class='cashOnDelivery-list'> <img src='{1}' alt=''/><h1>{0}</h1></div>".toFormat(p.sname, p.logo);
        //    if (p.ispay == 1 || p.ispay == "1") {
        //        txt.cash += s;
        //    } else txt.online += s;
        //}
        var html = "";
        //<!--商家支付方式列表-->
        html += "<div class='merchantPayMethod'>                            ";
        //支持到付  
        if (txt.cash.length > 1) {
            html += "    <div class='cashOnDelivery'>                                      ";
            html += "        <dl>                                                          ";
            html += "            <dt>以下商家<span>支持货到付款</span></dt>                  ";
            html += "            <dd>                                                      ";
            html += txt.cash;
            html += "                <div class='cb'></div>                                ";
            html += "            </dd>                                                      ";
            html += "        </dl>                                                          ";
            html += "    </div>                                                            ";
        }
        //;<!--不支持到付-->    
        if (txt.online.length > 1) {
            html += "    <div class='onlinePay'>                                            ";
            html += "        <dl>                                                          ";
            html += "            <dt>以下商家<span>不支持货到付款，将使用在线支付</span></dt>  ";
            html += "            <dd>                                                      ";
            html += txt.online;
            html += "                <div class='cb'></div>                                ";
            html += "            </dd>                                                      ";
            html += "        </dl>                                                          ";
            html += "    </div>                                                            ";
        }
        html += "</div>                                                                ";

        window.Ecshop.Tool.Hint.newConfirm({
            info: html,
            tit: "请确认支付方式",
            width: 750,     //宽度 confirm专有属性 提示信息框无用
            height: 350,
            style: 'gray',
            curpage: true,
            button: {
                sort: false,//是否交换按钮顺序
                btnConfirm: '确定',
                btnCancle: '取消',
                callbackConfirm: function () { return true; },
                callbackbtnCancle: function () { return true; }
            },
        });
    },
    getPayName: function (i) {
        switch (i) {
            case 0:
                return '货到付款+在线支付';
            case 1:
                return '在线支付';
            case 2:
                return '线下支付';
            case 3:
                return '货到付款';
            default:
                return '在线支付';
        }
    },
    changePayType: function (t) {
        var x = $(t).attr("data-code");
        var result = cart.request({ type: 'cartpaytypechanged', pid: x });
        if (result.Status == 2 || result.Status == 0) {
            cart.Warn(result.Code);
        }
        if (result.Status == 1) {
            for (var i = 0, len = result.Result.length; i < len; i++) {
                var data = result.Result[i];
                if (data.Id == -1) {
                    var total = data;
                    cbuy.total = total.Data;
                    continue;
                }
            }
        }
    },
    saveBill: function (para) {
        return cbuy.changeBillTax(para);
    },
    changeBillTax: function (data) {
        data.type = 'cartbilltaxchanged';
        //data.data = cart.toJson(db.all());
        var result = cart.request(data);
        if (result.Status == 2 || result.Status == 0) {
            cart.Warn(result.Code);
            return false;
        }
        if (result.Status == 1) {
            cart.bindData("bill_tax", cbuy.bindTaxBillByChange(result), 1);
            cbuy.changeStoreByAction(result.Result, true, true, 1);
            return true;
        }
    },
    bindTaxBillByChange: function (data) {
        var bill = "<ul>";
        bill += data.Message;
        if (data.Code != "0")
            bill += "<li> <p>备注：商品如由第三方寄出，发票内容由卖家决定，发票由卖家开票并寄出</p></li>";
        bill += "</ul>";
        return bill;
    },
};
var cpay = {
    state: false,
    init: function () {
        if (!cart.checkParam(cart.moid)) {
            cart.Warn("1004");
            return;
        }
        cpay.config = cpay.getConfig();
        $("#u_pay_from").attr("action", "action.aspx?moid=" + cart.moid);
        var result = cart.requestFn({ type: 'paycartorder', moid: cart.moid }, true, {
            func: function (r, para) {
                cpay.bindinit(r);
                cap.init();
                cpay.state = true;
            }
        });
    },
    total: '',
    payment: 0,
    allpayed: -1,
    bindinit: function (result) {
        var list = result.Result;
        cpay.initOrder(list);
        cpay.bindTitle(result);
        cpay.bindPays(result);
        cpay.createPayBox(result.User);
        cpay.sign = result.Message;
        if (cart.isPayer) {
            caction.init();
        }
    },
    initOrder: function (list) {
        var html = (list.length > 2 ? cpay.bindOrders(list) : cpay.bindOrder(list));
        cart.bindData("pay_orderinfo", html, 1);
    },
    config: {},
    sign: '',
    getConfig: function () {
        var config = {
            okIcon: '/images/cart/gou.png',
            noIcon: '/images/cart/alert.png',
            online: { icon: 1, title: '订单提交成功，请尽快付款！', desc: "请在提交订单后24小时内完成支付，否则订单会被自动取消。" },
            offine: { icon: 1, title: '订单提交成功，请尽快付款！', desc: "请在提交订单后24小时内完成支付，否则订单会被自动取消。" },
            delivery: { icon: 1, title: '订单提交成功！', desc: "请等待商家发货，商家送货上门验收后请付款。" },
            combine: { icon: 1, title: '订单提交成功，部分订单需在线支付，请尽快付款！', desc: "在线支付订单请在提交订单后24小时内完成支付，否则订单会被自动取消。" },
            again: { icon: 0, title: '请及时付款，以便尽快处理订单！', desc: "请在提交订单后24小时内完成支付，否则订单会被自动取消。" }
        };
        return config;
    },

    bindTitle: function (result) {
        var pay = cpay.total.Payment;
        cpay.allpayed = cpay.total.PayStatus;
        var data = {};
        var subname = '';
        switch (pay) {
            case 1:
                data = cpay.config.online;
                cpay.payment = 1;
                break;
            case 2:
                data = cpay.config.offine;
                cpay.payment = 2;
                subname = "确 认";
                break;
            case 3:
                data = cpay.config.delivery;
                cpay.payment = 3;
                subname = "确 认";
                break;
            case 4:
                data = cpay.config.combine;
                cpay.payment = 1;
                break;
        }
        if (subname != '') {
            $("#realbuy").val(subname);
        }
        var html = "<img src='{0}' alt='' />".toFormat(data.icon == 1 ? cpay.config.okIcon : cpay.config.noIcon);
        html += "<div class='payOnline-title-test'><h1>{0}</h1><p>{1}</p></div>".toFormat(data.title, result.OrderMessage == null ? "" : result.OrderMessage);
        cart.bindData("pay_title", html, 1);
    },
    bindOrder: function (list) {
        var data = list[0];
        cpay.total = list[1];
        var html = '';
        html += "<p>订单号：{0}</p><p>应付金额：<span>{1}</span> 元</p>".toFormat(data.OrderId, cart.toDecimalAuto(data.Price, -1, true));
        if (data.Payed > 0 && data.Payed < data.Price) {
            html += "<p>预存款已支付金额：<i>{0}</i> 元</p>".toFormat(cart.toDecimalAuto(data.Payed, -1, true));
            html += "<p>未支付金额：<i>{0}</i> 元</p>".toFormat(cart.toDecimalAuto(data.Price - data.Payed, -1, true));
        }
        html = "<div class='sure-pay'>{0}</div>".toFormat(html);
        return html;
    },
    bindOrders: function (list) {
        var info = { Off: [], On: [], In: [] };
        for (var i = 0, len = list.length; i < len; i++) {
            var data = list[i];
            if (data.OrderId == "-1") {
                cpay.total = data;
                continue;
            }
            var hinfo = "<li><span>订单号：<i>{0}</i></span><span>{1}：<b>{2} 元</b></span>{4} {5}<span>{3}</span></li>".toFormat(data.OrderId, data.PaymentName, cart.toDecimalAuto(data.Price, -1, true), data.Transport, (data.Payed > 0 ? "<span>已支付：<b>{0}元</b></span>".toFormat(cart.toDecimalAuto(data.Payed, -1, true)) : ""), (data.Price - data.Payed > 0 ? " <span>未支付：<b>{0}元</b></span>".toFormat(cart.toDecimalAuto(data.Price - data.Payed, -1, true)) : ""));
            if (data.Payment == 1) {
                info.On.push(hinfo);
            } else if (data.Payment == 2) {
                info.Off.push(hinfo);
            }
            if (data.Payment == 3) {
                info.In.push(hinfo);
            }
        }
        var html = '';
        if (info.Off.length > 0) {
            html += "<div class='payOnline-box'><ul>{0}</ul></div>".toFormat(info.Off.join(''));
        }
        if (info.In.length > 0) {
            html += "<div class='payOnline-box'><ul>{0}</ul></div>".toFormat(info.In.join(''));
        }
        if (info.On.length > 0) {
            if (html.length > 0 && info.In.length > 0) {
                html += "<h1>由于以下订单不支持货到付款，请在线支付订单：</h1>";
            }
            if (html.length > 0 && info.Off.length > 0) {
                html += "<h1>由于以下订单不支持线下支付，请在线支付订单：</h1>";
            }
            html += "<div class='payOnline-box'><ul>{0}</ul></div>".toFormat(info.On.join(''));
        }
        return html;
    },
    bindPays: function (result) {
        var pay = cpay.total.Payment;
        var list = result.Other;
        cpay.utype = result.User.Type;
        var html = "";
        var frist = list[0];
        for (var i = 0, len = list.length; i < len; i++) {
            var data = list[i];
            html += "<div class = 'payOnline-way-box cur_poin' > <div class ='payOnline-way-box-img' data-index='{3}' data-code='{2}'> <img src = '{0}' alt = '{2}' /> </div><p>{1}</p></div>".toFormat(cpay.getlogo(data.PayType), data.Name, data.PayId, i);
        }
        if (pay == 1 || pay == 4) {
            $(".paymentPassword").addClass("none");
            html = "<div class='payOnline-way-show cur_poin'>{0}<div class='cb'></div></div>".toFormat(html);
            html = "<div class='payOnline-way'>{1}{0}</div>".toFormat(html, cpay.bindUser(result.User));
        } else if (pay == 2 || pay == 3) {
            $(".paymentPassword").addClass("none");

            if (pay == 2) {
                html += "<div class='cb'></div>";
                /*
                 线下支付具体的详情
                 modify by liuxu 2016-08-09 解决切换换线下支付方式时对应信息没切换
                */
                for (var i = 0, len = list.length; i < len; i++) {
                    html += "<div class='linePaymen-box none' id='linePaymen_box_{1}'><i class='arrow'></i><div class='linePaymen-box-test'>{0}</div></div>".toFormat(cart.toDefault(list[i].Message, ''), i);
                }
            }

            html = " <div class='linePaymen payOnline-way-show'>{0}</div>".toFormat(html);


        }
        cart.bindData("pay_list", html, 1);
        if (!result.User.IsOpenBalance && list.length == 0) {
            $("#payBox").remove();
            $("#u_pay_from").remove();
        }

        if (pay == 2) {
            $("#linePaymen_box_0").removeClass("none");
        }

        // cart.bindData("pay_sum", cart.toDecimalAuto(cpay.total.Price - cpay.total.Payed), 2, '0.00');
    },
    isOpenMobile: false,
    createPayBox: function (user) {
        var html = "";
        var state = true;
        if (user.IsOpenBalance) {
            if (user.IsPassport)
                html += "<dl class='paymentPassword-password'><dt>支付密码:</dt><dd><input type='password' id='usafepass' /><a href='/user/changepwd.aspx' target='_blank'>忘记密码?</a></dd></dl>";
            else {
                var url = "/user/safevaildate.aspx?st=0";
                if (user.Type == 1) {
                    url = "/usercenter/index.aspx?urip=safevaildate";
                }
                html += "您未设置支付密码，为保障您的账户资金安全，请先【<a href='" + url + "' style='color: red;'>设置支付密码</a>】 再进行支付";
                state = false;
            }
        }
        if (user.IsOpenMobile && user.IsMobileVerify) {
            cpay.isOpenMobile = true;
            if (user.IsValidateMobile) {
                html += "<div class='cb'></div>";
                html += "<dl class='paymentPassword-phone'><dt>手机号码:</dt><dd>{0}</dd><a class='cur_poin' id='sendmobile'>获取手机验证码</a></dl>".toFormat(user.Mobile);
                html += "<dl class='paymentPassword-word'><dt>短信验证码:</dt><dd><input type='text' id='vuphonecode' maxlength='6' /></dd></dl>";
            } else {
                if (state) {
                    html = "";
                    var turl = "/{0}/safevaildate.aspx?st=2".toFormat(user.Type == 1 ? "userCenter" : "user");
                    html += "使用预存款支付须验证手机，请先【<a href='{0}' style='color: red;'>进行手机验证</a>】，验证之后再支付。".toFormat(turl);
                }
            }
        }
        html += "<div class='cb'></div>";
        $("#upayment").html(html);
    },
    getlogo: function (type) {
        var imgUrl = "";
        if (type == 8)//财付通
            imgUrl = "/images/pay/cft.gif";
        if (type == 5)//支付宝
            imgUrl = "/images/pay/pay_alipay.gif";
        if (type == 9)//网银在线
            imgUrl = "/images/pay/chinabank.gif";
        if (type == 10)//快钱
            imgUrl = "/images/pay/bill.gif";
        if (type == 11)//银联在线
            imgUrl = "/images/pay/chinapay.png";
        if (type == 4)//通联支付
            imgUrl = "/images/pay/tl.gif";
        if (type == 14)//交通银行
            imgUrl = "/admin/images/paypng/jiaotong.png";
        if (type == 3)//货到付款
            imgUrl = "/images/pay/hdfk.png";
        if (type == 2)//线下支付
            imgUrl = "/images/pay/pay_offline.gif";
        if (type == 12)//中国农业银行
            imgUrl = "/admin/images/paypng/abcicon2.jpg";
        if (type == 15)//中国银行
            imgUrl = "/admin/images/paypng/boc2013_logo.png";
        if (type == 16)//银联在线
            imgUrl = "/images/pay/upay.png";
        if (type == 19)//中国建设银行B2C
            imgUrl = "/images/pay/CCB_Bank.gif";
        if (type == 20)//宝易互通
            imgUrl = "/admin/images/paypng/baoyihutong.gif";
        if (type == 21)//中国工商银行B2C
            imgUrl = "/images/pay/ICBCBank.gif";
        if (type == 22)
            imgUrl = "/images/pay/liuzhou.jpg";
        if (type == 25)//京东B2C
            imgUrl = "/images/pay/jdpay.png";
        if (type == 23)//京东B2C
            imgUrl = "/images/pay/jdmpay.jpg";
        if (type == 24)//微信B2C
            imgUrl = "/images/pay/wepay.png";
        return imgUrl;
    },

    isUsed: false,
    utype: -1,
    bindUser: function (data) {
        cpay.isUsed = data.IsUsed;
        cpay.utype = data.Type;
        if (!data.IsOpenBalance)
            return "<input type='hidden' id='choose-pay' name='choose-pay' />";
        //var html = "<input type='{0}' id='choose-pay' name='choose-pay' {1} />".toFormat(data.IsUsed ? 'radio' : 'checkbox', (data.UseBalance <= 0 ? "disabled='disabled'" : ""));
        var html = "<input type='{0}' id='choose-pay' name='choose-pay' {1} />".toFormat(data.IsUsed ? 'radio' : 'checkbox', (data.UseBalance <= 0 ? "disabled='disabled'" : ""));
        html += "<span>使用预存款<i>(您的账户当前可用预存款 <b>￥{0}</b>)</i></span>".toFormat(data.UseBalance);
        if (data.IsUsed == false)
            html += "<span>余额不足 ！ <a href='/user/blancecharge.aspx'><b class='c-ff5454'>请充值</b></a></span>";
        if (data.IsOpenCredit) {
            html += "</br><input type='radio' id='choose-pay-credit' name='choose-pay' {0}/><span>使用授信支付<i>(您的账户当前可用授信余额 <b>￥{1}</b>)</i></span>".toFormat(data.IsUsedCredit && data.IsOpenCredit ? "" : "disabled='disabled'", data.CreditBalance);
        } else {
            html += "</br><input type='radio' id='choose-pay-credit' name='choose-pay' {0} style=\"display:none;\"/>".toFormat(data.IsUsedCredit && data.IsOpenCredit ? "" : "disabled='disabled'");
        }
        return html;
    },
    waitTime: 60,
    timeCode: function (el, val) {
        if (cpay.waitTime == 0) {
            el.innerHTML = val;
            el.style.backgroundColor = "#fe4b00";
            cpay.waitTime = 60;
            cap.setAction(3, true);
        } else {
            el.style.backgroundColor = "#CCC";
            el.innerHTML = "(" + cpay.waitTime + ")秒后重新获取";
            cpay.waitTime--;
            setTimeout(function () {
                cpay.timeCode(el, val);
            }, 1000);
        }
    },
    sendCode: function () {
        cap.setAction(3, false);
        var ele = cart.getObject("sendmobile");
        $.ajax({
            url: '/user/controls/safedo.ashx',
            type: 'POST',
            data: { type: "sendcode", sendtype: 'mbv' },
            async: false,
            success: function (data) {
                if (data == "200") {
                    cart.Success(tm.Tip(data), null, false);
                    cpay.timeCode(ele, ele.innerHTML);
                    return true;
                }
                else {
                    cart.Message(tm.Tip(data), null, false);
                    cap.setAction(3, true);
                    return false;
                }
            }
        });
    },
    encode: function (txt) {
        if (txt == undefined || txt == '')
            return '';
        var b = new Base64();
        return b.encode(txt);
    },
    checkCode: function () {
        var el = cart.getObject("vuphonecode");
        var result = false;
        if (el == undefined || el.value.replace(/(\s*$)/g, "") == "") {
            cart.Message("请输入验证码！", null, false);
            result = false;
        }
        $.ajax({
            url: '/user/controls/safedo.ashx',
            type: 'POST',
            data: { type: "vpcode", sendtype: 'mbv', cod: el.value },
            async: false,
            success: function (data) {
                if (data != "200") {
                    cart.Message(tm.Tip(data), null, false);
                    result = false;
                } else result = true;
            }
        });
        return result;
    },
    pay: function (data, uppics) {

        var pwd = $("#usafepass").val();
        if (data.checked && (pwd == undefined || pwd.length < 1)) {
            cart.Message("6014");
            return false;
        }
        var scode = '';
        if (cpay.isOpenMobile) {
            var code = $("#vuphonecode").val();
            if (data.checked && (code == undefined || code.length < 6)) {
                cart.Message("6017");
                return false;
            }

            if (data.checked && !cpay.checkCode()) {
                //cart.Message("请输入验证码！", null, false);
                return false;
            }
            scode = code;
        }
        $("#bid").val(data.checked ? 1 : 0);
        $("#pid").val(data.index);
        $("#safe").val(pwd);
        $("#scode").val(scode);
       
        var hrf = "action.aspx?moid={0}&bid={1}&pid={2}&safe={3}&code={4}&issxpay={5}".toFormat(cart.moid, data.checked ? 1 : 0, data.index, cpay.encode(pwd), scode, data.issxpayChecked);
        // $("#btnbuypay").attr("href", hrf);
        //var id = $("input[name='choose-pay']:checked").attr("id");   
        var result = cart.request({ type: 'pay_check', sign: cpay.sign, scode: scode, safe: pwd, bid: data.checked ? 1 : 0, pid: data.index, issxpay: data.issxpayChecked, uppics: uppics }, false);
        if (result.Status == 1) {
            cpay.paying();
            cpay.fromSubmit(hrf);
            // location.href = hrf;
            return true;
        } else {
            cart.Warn(result.Code, function () {
                return false;
            });
            return false;
        }
    },
    fromSubmit: function (action) {
        if (cart.isPayJump == false)
            location.href = action;
        else {
            document.u_pay_from.action = action;
            document.u_pay_from.submit();
        }
    },
    inpay: function (data) {
        cart.requestFn({ type: 'pay_in', sign: cpay.sign, pid: data.index }, false, {
            func: function (res, para) {
                cart.Success("8001", function () {
                    cpay.autoUrl();
                });
            }
        });
    },
    offpay: function (data) {
        cart.requestFn({ type: 'pay_off', sign: cpay.sign, pid: data.index }, true, {
            func: function (res, para) {
                cart.Success("8002", function () {
                    cpay.autoUrl(1);

                });
            }
        });
    },
    autoUrl: function (type) {
        var url = "/user/myorder.aspx?status=";
        if (type == 1)
            url += "WAIT_BUYER_PAY";
        else
            url += "WAIT_SELLER_SEND_GOODS";

        if (cpay.utype == 1) {
            url = '/usercenter/?urip=';
            if (type == 1)
                url += "WAIT_BUYER_PAY";
            else {
                url += 'WAIT_SELLER_SEND_GOODS';
            }
        }
        location.href = cart.isBatch ? "/userCenter/UserQuoteCenter.aspx?isquote=false" : url;
    },
    paytest: function (data) {
        cap.setAction(1, false);
        var r = false;
        switch (cpay.payment) {
            case 1:
                r = cpay.pay(data);
                break;
            case 2:
                cpay.offpay(data);
                break;
            case 3:
                cpay.inpay(data);
                break;
            default:
                cart.Error("不支付的支付类型！", null, false);
                break;
        }
        cap.setAction(1, true);
        return r;
    },
    paying: function () {
        var html = "";
        html += "<div class='paymentBomb'>";
        html += "    <div class='paymentBombBox'>";
        html += "        <div class='paymentBombTest'>";
        html += "            <h1>请在新打开页面中完成支付。</h1>";
        html += "            <div class='paymentBombTitle'>";
        html += "                <p>支付完成前请不要关闭此窗口。</p>";
        html += "                <p> 完成支付后请点击下面的按钮。</p>";
        html += "            </div>";
        html += "            <div class='paymentBombBut'>";
        html += "                <a onclick='cap.hinder();'>支付遇到问题</a>";
        html += "                <a onclick='cap.success();'>支付完成</a>";
        html += "            </div>";
        html += "            <div class='paymentBombLink cur_poin'>";
        html += "                <a  onclick='cap.change();'>选择其他支付方式</a>";
        html += "            </div>";
        html += "        </div>";
        html += "    </div>";
        html += "</div>";
        $(document.body).append(html);
    }
};
var tm = {
    Tip: function (code) {
        if (code == undefined) return '';
        switch (code) {
            case '001': return "密码修改成功！";
            case '004': return "系统发生异常！请稍后重试或联系管理员进行处理";
            case '007': return "密码修改失败！";
            case '100': return "邮件发送成功！";
            case '101': return "用户未登录！";
            case '102': return "网站未开启邮件发送功能，请联系管理员进行处理.";
            case '103': return "网站邮件配置信息有误！ 请联系管理员进行处理.";
            case '104': return "用户不存在！";
            case '105': return "邮箱地址已验证！请勿重复验证";
            case '106': return "邮箱地址有误！请登录会员中心查看";
            case '107': return "系统邮件服务器繁忙，请稍后重试！";
            case '108': return "邮箱地址未验证！请先验证";
            case '109': return "系统异常(109)！请联系管理员进行处理";
            case '110': return "邮箱地址修改成功！";
            case '111': return "邮箱地址修改失败！请先检查邮箱地址是否正确";
            case '112': return "传递的信息异常！请重试...";

            case '200': return "短信验证发送成功！请注意查收";
            case '202': return "网站未开启短信验证功能，请联系管理员进行处理.";
            case '203': return "网站短信配置信息有误！ 请联系管理员进行处理.";
            case '205': return "手机号码已验证！请勿重复验证";
            case '206': return "手机号码有误！请登录会员中心查看";
            case '207': return "发送失败，系统服务器繁忙，请稍后重试！";
            case '208': return "今日短信数量已达到最大值！";
            case '209': return "发送失败！服务器异常繁忙，请稍后重试";
            case '210': return "手机号码修改成功！";
            case '211': return "手机号码修改失败！请联系管理员进行处理";
            case '212': return "您输入的短信验证码不正确！";

            case '301': return "修改支付密码失败(301)！请联系管理员进行处理.";
            case '400': return "已存在此邮箱.";
            case '401': return "恭喜您，邮箱可用！";
            case '402': return "已存在此手机号码.";
            case '403': return "恭喜您，手机号可用！";

            default: return '';
        }
    },
};
var caction = {
    config: '',
    init: function () {
        caction.config = cpay.getConfig();
        caction.paying();
    },
    tip: function (state, code) {
        state = state == undefined || state == false ? false : true;
        var html = "";
        html += "<img src='{0}' alt=''>".toFormat(state ? caction.config.okIcon : caction.config.noIcon);
        html += "<div class='payOnline-title-test' style='color:red;'>{0}<p>请在提交订单后24小时内完成支付，否则订单会被自动取消。</p></div>".toFormat(syscode.getMessage(code));
        html += "<div class='clear' style='margin-bottom: 15px;'></div>";
        $("#pay_result").html(html);
    },
    bindTipTitle: function () {
        var html = " <img src='/images/cart/gou.png' alt=''><div class='payOnline-title-test'><h1>该订单已经支付成功，请进入<a class='cur_poin' onclick='cap.success();' style='color: red;text-decoration:underline'>订单中心</a>查看。</h1></div>";
        $("#pay_tip").html(html);
    },
    paying: function () {
        var ck = caction.checkdata();
        if (!ck.state) {
            caction.tip(false, ck.code);
        }
        if (cpay.allpayed == 1) {
            caction.bindTipTitle();
            return;
        }
        var result = cart.request({ type: 'pay_order', scode: ck.scode, sign: ck.sign, safe: ck.safe, bid: ck.bid, pid: ck.pid, issxpay: ck.issxpay }, false);
        if (result.Status == 2 || result.Status == 0) {
            caction.tip(false, result.Code);
        }
        if (result.Status == 1) {
            if (result.Action == 2)
                location.href = "/payment.ashx?token=" + result.Message;
            else {
                cart.Success("订单支付成功!", function () {
                    cpay.autoUrl();
                }, false);
            }
        }
    },
    checkdata: function () {
        var data = { state: true, safe: '', bid: -1, pid: -1, sign: '', scode: '', code: '', issxpay: false };
        data.sign = $("#sign").val();
        data.safe = $("#safe").val();
        data.bid = $("#bid").val();
        data.bid = data.bid == undefined ? -1 : parseInt(data.bid);
        data.pid = $("#pid").val();
        data.scode = $("#scode").val();
        data.pid = data.pid == undefined ? -1 : parseInt(data.pid);
        if (data.bid == -1 && data.pid == -1) {
            data.code = '1006';
            data.state = false;
        } else if (data.bid > 0 && (data.safe == undefined || data.safe.length < 1)) {
            data.code = '6014';
            data.state = false;
        }
        if (data.sign == undefined || data.sign == "") {
            data.code = '6022';
            data.state = false;
        }
        data.issxpay = $("#issxpay").val();
        return data;
    }

};
var syscode = {
    getMessage: function (code) {
        var info = syscode.info();
        var str = info[code];
        return str == undefined ? '[' + code + "]！" : str;
    },
    info: function () {
        var codes = new Object();
        codes['110'] = "非法操作，请求响应失败！";
        codes['119'] = "请输入短信验证码！";
        codes['120'] = "服务器忙碌中！请稍后重试或联系管理员处理";
        codes['900'] = "请选择或添加收货地址!";
        codes['999'] = "加载数据失败！请刷新重试...";
        codes['1000'] = "参数传递失效,未传入上下文连接参数！";
        codes['1001'] = "请先登录,再进行此操作！";
        codes['1002'] = "未找到指定数据！";
        codes['1003'] = "数据签名异常！";
        codes['1004'] = "参数异常！未获取到传入的参数信息...";
        codes['1005'] = "请选择在线支付方式!";
        codes['1006'] = "请至少选中一种线下支付方式!";
        codes['1007'] = "请至少选中一种货到付款方式!";
        codes['1008'] = "数据服务异常!请从购物车重新提交";
        codes['1009'] = "购物车信息过期！请从购物车重新提交。";
        codes['1010'] = "请选择支付方式!";
        codes['1011'] = "移除商品失败!";
        codes['1012'] = "购物车信息过期！请刷新页面后重试...";
        codes['1013'] = "未找到符合条码的商品！";
        codes['1014'] = "此条码商品已存在购物车中！";
        codes['1015'] = "添加商品成功！";
        codes['1016'] = "请输入条码信息！";
        codes['1017'] = "请添加或设置收货地址！";
        codes['1020'] = "优惠券使用异常！请刷新页面后重试...";
        codes['1030'] = "商品信息发生变化！请刷新页面";
        codes['1080'] = "加入失败，未找到相应的商品信息!";
        codes['1081'] = "加入购物车成功!";
        codes['1082'] = "加入购物车失败!请稍后重试.";
        codes['1083'] = "加入失败!参数异常";
        codes['1040'] = "活动信息获取失败!";
        codes['1041'] = "获取当前活动商品信息失败!";
        codes['1051'] = "获取上门自提信息失败!请稍后重试";
        codes['1052'] = "未找到相应的门店信息!请切换其他配送方式";
        codes['1091'] = "商品数据异常!请重试";
        codes['1092'] = "未找到相应类型的商品!";
        codes['1093'] = "很抱歉，您不能购买自己的商品！";
        codes['1094'] = "立即购买失败，请刷新后重试";

        codes['1101'] = "未找到相应的优惠码信息！请联系管理员处理。";
        codes['1102'] = "此优惠劵不能在此领取！";
        codes['1103'] = "优惠券已经被领取！";
        codes['1104'] = "不可领取，优惠券状态发生变化！请联系管理员处理";
        codes['1105'] = "不可领取，此优惠券已过期！";
        codes['1106'] = "不可领取,此优惠券不适用于当前店铺！";
        codes['1107'] = "领取失败！";
        codes['1108'] = "使用失败！此优惠券不能使用于当前终端";
        codes['1109'] = "使用失败！此优惠券已被使用";
        codes['1110'] = "使用失败！优惠券领取信息异常，请是刷新后重试";
        codes['1111'] = "使用失败！此优惠券已过期";
        codes['1112'] = "使用失败，当前订单不满足此优惠劵的品牌或目录限制条件！";
        codes['1113'] = "使用失败，当前订单未达到优惠券使用条件！";
        codes['1114'] = "领取失败！此优惠券已作废";
        codes['1115'] = "使用失败！此优惠券已被当前其他店铺使用中";
        codes['1116'] = "此优惠劵不能在PC端领取或使用！";
        codes['1117'] = "此优惠劵不能在移动端领取或使用！！";

        codes['1201'] = "添加到购物车成功!";
        codes['1202'] = "更新数量信息成功!";
        codes['1203'] = "更新购物车信息成功!";
        codes['1204'] = "删除成功!";
        codes['1205'] = "移入收藏夹成功!";
        codes['1206'] = "最少购买数量为";
        codes["1207"] = "最多购买数量为";

        codes['1301'] = "添加到购物车失败!";
        codes['1302'] = "更新数量信息失败!";
        codes['1303'] = "更新购物车信息失败!";
        codes['1304'] = "删除失败!";
        codes['1305'] = "移入收藏夹失败!";
        codes['1400'] = "设置到货通知失败， 填写的通知信息有误！";
        codes['1401'] = "设置到货通知失败， 未找到相应的货品信息！";
        codes['1402'] = "设置到货通知失败！";
        codes['1403'] = "恭喜您，设置到货通知成功！";
        codes['1404'] = "请输入手机号码或邮箱地址！";
        codes['1600'] = "提交订单成功！";
        codes['1601'] = "提交订单失败！请稍后重试";

        codes['3000'] = "您输入的支付密码不正确！请核对后再支付。";
        codes['3001'] = "提交订单失败！订单金额必须大于0。";
        codes['3002'] = "提交订单失败！积分总计必须大于0。";
        codes['3003'] = "提交订单失败！您的积分不足。";
        codes['3004'] = "提交订单失败！订单金额小于您当前等级最小下单金额。";
        codes['3005'] = "购物车商品数量过多！单次提交最多支持400个商品。";

        codes['6000'] = "请先登录,再进行支付！";
        codes['6001'] = "预存款余额不足!";
        codes['6002'] = "支付金额必须大于0!";
        codes['6003'] = "移入收藏夹失败!";
        codes['6004'] = "发起支付失败,未找到相应订单信息！";
        codes['6005'] = "登录用户与订单会员帐号不一致!";
        codes['6006'] = "平台支付信息配置错误！请联系管理员解决或稍后重试.";
        codes['6007'] = "支付失败(pay0007)！";
        codes['6008'] = "支付失败(6008)！请切换其他支付方式或联系管理员处理！";
        codes['6009'] = "支付失败！请稍后重试或切换其他支付方式...";
        codes['6010'] = "支付失败(6010)！未获取到需要支付的订单数据！请联系管理员解决或稍后重试。";
        codes['6011'] = "支付失败(6011)！此订单不属于当前登录账户！请联系管理员解决或稍后重试。";
        codes['6012'] = "您输入的支付密码不正确！请核对后再支付。";
        codes['6013'] = "订单已确认！无需重复确认订单！";
        codes['6014'] = "请输入支付密码！";
        codes['6015'] = "为保障您的账户资金安全，请先设置存款支付密码！";
        codes['6016'] = "用预存款支付需进行手机短信验证，请先验证手机号码后，进行支付！";
        codes['6017'] = "请输入正确的验证码！";
        codes['6018'] = "微信扫码请求失败！请稍后重试";
        codes['6019'] = "支付失败！支付方式发生变化，请重新选择支付方式";
        codes['6020'] = "充值金额必须大于0！";
        codes['6021'] = "当前登录用户与充值用户信息不一致!";
        codes['6022'] = "参数不正确！请切换其他支付方式或稍后重试...";
        codes['6023'] = "不支持当前支付方式！请切换请他支付方式或稍后重试...";
        codes['6024'] = "授信余额不足，支付失败！";
        codes['6025'] = "存在超期账单，支付失败！";
        codes['6026'] = "未开启“授信支付”功能！";
        codes['6060'] = "此订单已支付成功！请勿重复支付。";
        codes['8001'] = "恭喜：当前您选择的是货到付款的方式，商家送货上门验收后请付款。";
        codes['8002'] = "恭喜：当前您选择的是线下支付的方式，请支付后通知商家。";
        codes['8100'] = "恭喜您，代为下单，提交成功！";
        codes['8101'] = "恭喜您，积分换购，提交成功！";
        codes['8102'] = "恭喜您，订单报价，提交成功！";
        codes['1000x'] = "t！";
        return codes;
    }
};
//====================================获取最后一次设置地区
var areaObj = {
    ProvinceId: 0,
    CityId: 0,
    AreaId: 0
};
function GetLastArea() {
    $.ajax({
        url: '/controls/AreaHandler.ashx',
        async: false,
        type: 'POST',
        data: {
            type: "GetUserLastSelectedArea"
        },
        dataType: 'json',
        success: function (data) {
            data = $.isPlainObject(data) ? data : JSON.parse(data);
            if (data) {
                //areaCookie.flag = true;
                areaObj.ProvinceId = data.ProvinceId;
                areaObj.CityId = data.CityId;
                areaObj.AreaId = data.AreaId;
                //areaCookie.setAreaCookie();
            }
        }
    });
    return areaObj.AreaId;
}

//更新最后一次选择地址
function updateUserLastSelectedArea() {

    $.ajax({
        url: '/controls/AreaHandler.ashx',
        async: false,
        type: 'POST',
        data: {
            type: "UpdateUserLastSelectedArea",
            areaId: areaObj.AreaId
        },
        dataType: 'html',
        success: function (data) { }
    });
}


function compare(propertyName) {
    return function (object1, object2) {
        var value1 = object1[propertyName];
        var value2 = object2[propertyName];
        value1 = parseFloat(value1);
        value2 = parseFloat(value2);
        if (value2 < value1) {
            return 1;
        } else if (value2 > value1) {
            return -1;
        } else {
            return 0;
        }
    };
}
(function ($, win, doc) {
    var CartTips = function (ele, settings) {
        this.ele = ele;
        this.$ele = $(this.ele);
        this.settings = $.extend({}, CartTips.DEFAULTS, settings || {});
        this.$tips = $('<div class="cart-tips"><div class="cart-tips-title">tips-title</div><div class="cart-tips-content">' + this.settings.message + '</div><i class="cart-tips-arrow"></i></div>');
        this.init();
        this.active = null;
        return this;
    }
    CartTips.prototype = {
        init: function () {
            var that = this,
                $ele = that.$ele,
                $tips = that.$tips;

            if (that.settings.triggerType == 'hover') {
                $(doc).on('mouseover.carttips', that.ele, function () {
                    that.show();
                }).on('mouseout.carttips', that.ele, function () {
                    that.hide();
                });
            } else if (that.settings.triggerType == 'click') {
                $(doc).on('click.carttips', that.ele, function () {
                    that.toggle();
                });
            }
        },
        show: function (msg) {
            var that = this,
                $ele = that.$ele,
                $tips = that.$tips;
            if (arguments.length > 0 && typeof msg == 'string' && msg != '') {
                $tips.find('.cart-tips-content').html(msg);
            }
            if (!that.settings.isMult) { //只有一个tips
                if (!$('.cart-tips').length) {
                    $tips.appendTo('body');
                    $tips.show();
                    that.setTipsPosition();
                } else {
                    $tips.show();
                    that.setTipsPosition();
                }
            } else {
                $tips.appendTo('body');
                $tips.show();
                that.setTipsPosition();
            }
            if (that.settings.isShowTitle) {
                $tips.find('.cart-tips-title').show();
            }
            setTimeout(function () {
                that.goingTo();
                that.active = true;
            }, 0);
            $tips.trigger('show.carttips');
            return this;
        },
        hide: function () {
            var that = this,
                $tips = that.$tips;
            if (!that.settings.isAlwaysShow) {
                setTimeout(function () {
                    $tips.hide();
                    that.active = false;
                    $tips.trigger('hide.carttips');
                }, that.settings.period);
            }
        },
        goingTo: function () {
            var that = this,
                $ele = that.$ele,
                $tips = that.$tips.first();
            if ($tips) {
                var offset = $tips.offset(),
                    offsetTop = offset.top,
                    top = $tips.get(0).getBoundingClientRect().top,
                    id = 'tips' + new Date().getTime();
                $tips.attr('id', id);
                if (top < 0 || top > $(win).height()) {
                    if (that.settings.isScroll) {
                        $('html,body').stop(true, true).animate({
                            scrollTop: top - 60
                        }, 400);
                    } else {
                        document.location.hash = id;
                    }
                } else {
                    return;
                }
            }
            return this;
        },
        toggle: function (msg) {
            if (!this.active) {
                this.show(msg);
                this.hide();
            }
        },
        setTipsPosition: function () {
            var that = this,
                $tips = that.$tips,
                $arrow = $tips.find('.cart-tips-arrow');
            $ele = that.$ele,
                pos = that.settings.position,
                posLeft = 0,
                posTop = 0,
                dis = that.settings.distance;
            var tips = that.setTipsSize(),
                ele = that.getEleSize();
            switch (pos) {
                case "top":
                    if (that.settings.isShowArrow) {
                        $tips.addClass('cart-tips-top');
                    }
                    posLeft = ele.left + parseInt(ele.width - tips.twidth) / 2;
                    posTop = ele.top - tips.theight - tips.aheight + dis;
                    break;
                case "bottom":
                    if (that.settings.isShowArrow) {
                        $tips.addClass('cart-tips-bottom');
                    }
                    posLeft = ele.left + parseInt(ele.width - tips.twidth) / 2;
                    posTop = ele.top + ele.height + tips.aheight + dis;
                    break;
                case "left":
                    if (that.settings.isShowArrow) {
                        $tips.addClass('cart-tips-left');
                        if (tips.theight > ele.height) {
                            $arrow.css({
                                'top': parseInt((tips.theight - ele.height - tips.aheight) / 2) + 'px',
                                'margin': 0
                            });
                        }
                    }
                    posLeft = ele.left - tips.twidth - tips.awidth - dis;
                    posTop = ele.top;
                    break;
                case "right":
                    if (that.settings.isShowArrow) {
                        $tips.addClass('cart-tips-right');
                        if (tips.theight > ele.height) {
                            $arrow.css({
                                'top': parseInt((tips.theight - ele.height - tips.aheight) / 2) + 'px',
                                'margin': 0
                            });
                        }
                    }
                    posLeft = ele.left + ele.width + tips.awidth + dis;
                    posTop = ele.top;
                    break;
                case "default":
                    break;
            }
            $tips.css({
                left: posLeft + 'px',
                top: posTop + 'px'
            });
        },
        setTipsSize: function () {
            var that = this,
                $tips = that.$tips,
                $arrow = $tips.find('.cart-tips-arrow'),
                $ele = that.$ele,
                tipsWidth = $tips.outerWidth(true),
                tipsHeight = $tips.outerHeight(true),
                tipsZindex = $ele.css('z-index') > that.settings.zIndex ? parseInt(eleZindex + 1) : that.settings.zIndex,
                arrowWidth = $arrow.width(),
                arrowHeight = $arrow.height();
            $tips.css({
                'width': that.settings.maxWidth < tipsWidth ? that.settings.maxWidth + 'px' : '',
                'height': that.settings.maxHeight < tipsHeight ? that.settings.maxHeight + 'px' : '',
                'position': 'absolute',
                'z-index': tipsZindex
            });
            return {
                twidth: $tips.outerWidth(true),
                theight: $tips.outerHeight(true),
                awidth: arrowWidth,
                aheight: arrowHeight
            };
        },
        getEleSize: function () {
            var that = this,
                $ele = that.$ele,
                eleWidth = $ele.innerWidth(),
                eleHeight = $ele.innerHeight(),
                eleOffet = null,
                eleLeft = 0,
                eleTop = 0;
            if ($ele) {
                eleOffet = $ele.offset();
                eleLeft = eleOffet.left;
                eleTop = eleOffet.top;
            }
            return obj = {
                width: eleWidth || 0,
                height: eleHeight || 0,
                left: eleLeft || 0,
                top: eleTop || 0
            };
        }
    }
    CartTips.DEFAULTS = {
        period: 3000,
        isAlwaysShow: false,
        maxWidth: 200,
        maxHeight: 200,
        position: 'top',
        title: '我是标题',
        message: '我是提示内容我是提示内容我是提示内容',
        isAnimation: true,
        isScroll: true,
        isClickHide: true,
        isShowTitle: false,
        isShowArrow: true,
        zIndex: 1113,
        distance: 0,
        isMult: true,
        triggerType: null
    };

    function Plugin(option, msg) {
        return $(this).each(function () {
            var $this = $(this);
            var data = $this.data('carttips');
            var options = $.extend({}, CartTips.DEFAULTS, typeof option == 'object' && option);
            if (!data) {
                $this.data('carttips', (data = new CartTips($this, options)));
            }
            if (typeof option == 'string') {
                data[option] && data[option](msg);
            }
        });
    };
    $.fn.carttips = Plugin;
})(jQuery, window, document);

var currobj;
var flag = true;

//手动修改小计价格
function changeprice(obj) {
    if ($("#cartation").val() == 1 && flag) {
        var fix = $(obj).attr("fix");
        currobj = obj;
        $(obj).html('<div class="pro-num" offerid="0"><input id="txtChangePrice" type="text" style="border:1px solid #aaa" onblur="ClickPrice(' + $(obj).html() + ',this,\'' + $(obj).attr("pname") + '\',\'' + fix + '\');ChangePriceTime(\'' + fix + '\')" class="num-checked"  style="width:75px;"> </div>');
        $(obj).parent().find("span[name='minsou']").hide();
        $(obj).parent().removeAttr("onclick");
        flag = false;

        $("#txtChangePrice").focus();
    }
}

//小计增加单击事件
function ChangePriceTime(fix) {
    setTimeout(function()
    {
        $('[fix=li'+fix +']').attr("onclick", "changeprice($('[fix=" + fix + "]'));");
    },500);
}

//手动修改小计价格并保存记录
function ClickPrice(oldp, obj, pname, fix) {
    if (isNaN($(obj).val())) {
        $(obj).val(0);
        cart.Warn("请输入正确的金额！");
        return;
    }

    $("#txt_" + fix).val( "商品（" + pname + "）调价前合计" + oldp + "、调价后合计" + $(obj).val());
    $(obj).parent().hide();
    if ($(obj).val() == "") {
        $(currobj).html(oldp);
    } else {
        $(currobj).html($(obj).val());
    }
    var totalprice = 0;
    $("span[name='minsum']").each(function () {
        var item = $(this).html();
        if (item == "") item = 0;
        if ($(this).parent().parent().find("input[type='checkbox']:checked").length==0) {
            item = 0;
        }
        totalprice += parseFloat(item);
    });
    var cup = parseFloat($("#totalprice").attr("cup"))>0?parseFloat($("#totalprice").attr("cup")):0;   
    if (totalprice == 0) {
        $("#totalprice").html(oldp-cup);
    } else {
        $("#totalprice").html(totalprice - cup);
    }
    
    $("span[name='minsou']").show();
    //$('[fix=li'+fix +']').attr("onclick", "changeprice($('[fix=" + fix + "]'));");
    flag = true;

    bindTotalchange($("#lsgc_" + fix).attr("cid"), $(obj).val());
}


//修改商品小计存入数据库
function bindTotalchange(cid, reltotal) {
    var result = cart.request({ type: 'totalchange', cid: cid, reltotal: reltotal });
}

//保存记录信息
function ChangePriceLog(oid) {
    var ctext = "";
    $("input[name='txthide']").each(function () {
        if ($(this).val()!="") {
            ctext += $(this).attr("sid") + ":" + $(this).val() + ";";
        }
    });
    if (ctext!="") {
        ctext = ctext.substring(0, ctext.length-1);
    }
    $.ajax({
        url: '/user/controls/userdo.ashx',
        type: 'POST',
        data: { type: "SaveStoreLog", oid: oid, content: ctext },
        dataType: 'html',
        async: false,
        //timeout: 1000,
        error: function () {
            $.notify("链接超时,请稍候重试。！");
            chk = false;
        },
        success: function (data) {
            if (data == "1") {
                //$.notify("该商品编号已经存在！");
                chk = false;
            } else {
                //$.notify("填写正确！");
                chk = true;
            }
        }
    });
}