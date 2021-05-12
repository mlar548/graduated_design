
$(document).ready(function () {
    ca.init();
});

var ca = {
    url: '/controls/CartOrderHandler.ashx',
    type: 0,
    init: function () {
        ca.initType();
        switch (cart.type) {
            case 1:
            case "1":
                cal.init();
                break;
            case 2:
            case "2":
                cab.init();
                break;
            case 3:
            case "3":
                // cap.init();
                break;
        }
    },
    initType: function () {
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
        }
        cart.para = cart.GetRequest();
        cart.initpara();
    },
    request: function (data) {
        var result = { Status: -1, Code: -1 };
        $.ajax({
            type: 'POST',
            dataType: "json",
            url: cart.url,
            data: data,
            async: false,
            error: function (request, textStatus, errorThrown) {
                result.Status = 2;
                result.Code = "999";
            },
            success: function (json) {
                result = json;
            }
        });
        return result;
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
    toDefault: function (v, d) {
        return (v == undefined || v == '') ? d : v;
    },
    toDecimalAuto: function (v, l, ft) {
        if (v === undefined || v == '') return 0;
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
    getType: function (obj) {
        var type = (Object.prototype.toString.call(obj));
        type = type.replace("[object ", "").replace("]", "").toLowerCase();
        type = type == "htmlinputelement" ? obj.type : type;
        type = type == "object" ? obj[0].type : type;
        return type.toLowerCase();
    },
    compareType: function (obj, type) {
        return ca.getType(obj) == type.toLowerCase();
    },
    hideDialog: function () {
        var shade = ca.getObject("divShade");
        var ele = ca.getObject("dialog_confirm");
        if (shade != undefined)
            shade.parentNode.removeChild(shade);
        if (ele != undefined)
            ele.parentNode.removeChild(ele);
    }
};

var cal = {
    init: function () {
        // cal.setActions([1, 3, 5, 6, 7, 9, 10, 11, 12], true);
    },
    loadinit: function () {
        cal.setActions([1, 3, 5, 6, 7, 9, 10, 11, 12], true);
        cwin.onload();
        promotional();
        initChecked();
        initmain();
        fullGift();
    },
    initrealorder: function () {
        initPayload();
        cal.bindcouponload();
    },
    bindcouponload: function () {
        cab.setAction(6, true);
    },
    add: function (gid, type) {
        clist.addcart(gid, type);
    },
    tobuy: function () {
        cal.setAction(1, false);
        clist.gobuy(cal.setAction(1, true));
    },
    gocoupon: function () {
        clist.getonline($(this));
    },
    gorounding: function (t) {
        clist.getadvice($(t));
    },
    removeItem: function () {
        clist.remove($(this));
    },
    favoriteItem: function () {
        clist.favorite($(this));
    },
    noticedItem: function () {
        var t = $(this);
        var parent = $(t).parent();
        var pid = parent.attr("aid");
        if (pid == undefined || pid == '') return true;
        var box = pid.split('_');
        var gid = box[2];
        var price = $("#" + $(t).attr("id").replace("noticed", "price")).html();
        var num = $("#" + $(t).attr("id").replace("noticed", "lsgc")).val();
        var pname = $(parent).parent().find(".pro-test h1").html();
        var html = "";
        html += " <div class='NoticeOfArrival'>";
        html += "  <dl>";
        html += "     <dt>商品名称 :</dt>";
        html += "     <dd style='max-height:50px;overflow:hidden'>" + pname + "</dd>";
        html += "       <div class='cb'></div>";
        html += "    </dl>";
        html += "   <dl>";
        html += "     <dt>商品售价 :</dt>";
        html += "       <dd>" + price + "</dd>";
        html += "        <div class='cb'></div>";
        html += "    </dl>";
        html += "   <dl>";
        html += "     <dt>商品数量 :</dt>";
        html += "       <dd>" + num + "</dd>";
        html += "        <div class='cb'></div>";
        html += "    </dl>";
        html += "    <dl>";
        html += "        <dt><i>*</i>手机号码 :</dt>";
        html += "       <dd><input id='notice_mobile' type='text' /></dd>";
        html += "        <div class='cb'></div>";
        html += "    </dl>";
        html += "    <dl>";
        html += "       <dt><i>*</i>电子邮箱 :</dt>";
        html += "        <dd><input id='notice_mail' type='text' /></dd>";
        html += "        <div class='cb'></div>";
        html += "    </dl>";
        html += "</div>";
        html += "<div style='font-size:9px;color:red;margin-left:50px;'>注:点击确定，窗口若隐藏，则表示信息提交成功！</div>";


        window.Ecshop.Tool.Hint.newConfirm({
            info: html,
            tit: "到货通知",
            width: 400,     //宽度 confirm专有属性 提示信息框无用
            height: 240,
            style: 'gray',
            curpage: true,
            button: {
                sort: false,//是否交换按钮顺序
                btnConfirm: '确定',
                btnCancle: '取消',
                isPara: true,
                paraType: gid,
                paraObj: $(t),
                callbackConfirm: clist.noticed,
                callbackbtnCancle: function () { }
            },
        });



        // clist.noticed($(this));
    },


    arrivalNotice: function () {
        var noticeMobile = $("#notice_mobile").val();
        var noticeEmail = $("#notice_mail").val();
        var mobile = /^0?(13[0-9]|15[012356789]|18[0-9]|14[57])[0-9]{8}$/;
        var Email = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
        var isValidated = false;
        if (mobile.test(noticeMobile)) {
            isValidated = true;
        }
        else {
            cart.Message("联系号码有误", null, false);
            return false;
        }
        if (Email.test(noticeEmail)) {
            isValidated = true;
        }
        else {
            cart.Message("电子邮箱有误", null, false);
            isValidated = false;
        }
        return isValidated;
    },


    checkeds: function (t, sid) {
        clist.checkeds(t, sid);
    },
    removes: function () {
        clist.removes($(this));
    },
    favorites: function () {
        clist.favorites($(this));
    },
    setActions: function (types, isbind, action) {
        if (!ca.compareType(types, "array")) return;
        for (var i = 0, len = types.length; i < len; i++) {
            cal.setAction(types[i], isbind, action);
        }
    },
    appendbar: function () {
        clist.appendcode();
    },
    realbuy: function () {
        cab.setAction(12, false);
        clist.inorder();
        cab.setAction(12, true);
    },
    setAction: function (type, isbind, action) {
        type = ca.toDefault(type, -1);
        var ele = { name: '', func: '' };
        ele.name = cal.getName(type);
        if (type == -1 || ele.name == '') return;
        switch (type) {
            case 1:
                ele.func = cal.tobuy;
                break;
            case 2:
                ele.func = cal.tobuy;
                break;
            case 3:
                ele.func = cal.gocoupon;
                break;
            case 4:
                ele.func = cal.gorounding;
                break;
            case 5:
                ele.func = cal.removeItem;
                break;
            case 6:
                ele.func = cal.favoriteItem;
                break;
            case 7:
                ele.func = cal.noticedItem;
                break;
            case 8:
                ele.func = cal.checkeds;
                break;
            case 9:
                ele.func = cal.removes;
                break;
            case 10:
                ele.func = cal.favorites;
                break;
            case 11:
                ele.func = cal.appendbar;
                break;
            case 12:
                ele.func = cal.realbuy;
                break;
        }
        action = ca.toDefault(action, "click");
        cal.bindButton(ele.name, isbind, action, ele.func);
    },
    getName: function (type) {
        switch (type) {
            case 1:
                return ".button-action";
            case 2:
                return "#choose-pay";
            case 3:
                return ".go-coupon";
            case 4:
                return ".rounding";
            case 5:
                return ".a-remove";
            case 6:
                return ".favorite";
            case 7:
                return ".noticed";
            case 8:
                return ".checkAll";
            case 9:
                return ".a-removes";
            case 10:
                return ".favorites";
            case 11:
                return "#cartbar";
            case 12:
                return "#real_order";
            default:
                return '';
        }

    },
    bindButton: function (el, isbind, action, func) {
        el = $(el);
        if (isbind)
            el.bind(action, func);
        else
            el.unbind(action, func);
    },
    //rload: function () {
    //    var heiTop = parseInt($(".cart_bot_inner").offset().top);
    //    var height = window.screen.height;
    //    var scTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
    //    if (scTop < heiTop - height + 70) {
    //        $(".cart_bott_inner").addClass("fixed");
    //    } else {
    //        $(".cart_bott_inner").removeClass("fixed");
    //    }
    //    $(window).scroll(function () {
    //        var scTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
    //       // console.log('scTop:' + scTop + '----heiTop：' + heiTop);
    //        if (scTop < heiTop - height + 70) {
    //            $(".cart_bott_inner").addClass("fixed");

    //        } else {
    //            $(".cart_bott_inner").removeClass("fixed");
    //            //$(".cart_bott_inner")[0].className = 'cart_bott_inner';
    //        }

    //    })
    //}

};

var cab = {
    init: function () {
        cab.setAction(1, true, "onblur");
        //cab.setActions([2, 3, 4, 5, 6, 7], true);
    },
    loadinit: function () {
        cab.setAction(1, true, "onblur");
        cab.setActions([2, 3, 4, 5, 6, 7], true);
        boxserClick(true);
        initPayload();
        initOpening();
        initblock();

    },
    tobuy: function () {
        if (cbuy.aid == undefined || cbuy.aid == 0) {
            cart.Warn("900");
            return;
        }
        var sr = cbuy.checkPostByStore();
        if (sr.id != -1) {
            cart.Message("请选择[" + sr.name + "]店铺的配送方式！", null, false);
            return;
        }
        if (sr.sfid != -1) {
            cart.Message("请选择[" + sr.name + "]店铺的上门自提点！", null, false);
            return;
        }
        cab.setAction(2, false);
        cbuy.goorder();

    },
    savebill: function () {
        var type = $("*[name='radio']:checked").attr("data-code");
        if (type != 2 && type != 3) {
            cart.Message("获取数据异常!请刷新页面重试...", null, false);
            return;
        }
        var data = { bill_type: type, type: '', bill_header: '', bill_content: '', data: '', invoiceno: '' };
        data.bill_header = $("#gbt_header").val();
        data.bill_content = $("#gbt_content").val();
        data.invoiceno = $("#txtInvoiceNo").val();
        if (cbuy.saveBill(data)) {
            $(".bill-write").css("display", "none");
            $(".bill-box").css("display", "block");
        }
    },
    saveupbill: function () {
        var data = { bill_type: 4, data: '', type: '', bill_header: '', bill_content: '', zz_dw: '', zz_num: '', zz_r_address: '', zz_tel: '', zz_bank: '', zz_banknum: '', zz_address: '' };
        data.zz_dw = $("#ubt_company").val();
        data.zz_num = $("#ubt_card").val();
        data.zz_r_address = $("#ubt_address").val();
        data.zz_tel = $("#ubt_mobile").val();
        data.zz_bank = $("#ubt_bankname").val();
        data.zz_banknum = $("#ubt_bankcard").val();
        data.zz_address = $("#ubt_received").val();
        if (cbuy.saveBill(data)) {
            $(".bill-write").css("display", "none");
            $(".bill-box").css("display", "block");
        }
    },
    action: function (t, obj) {
        switch (t) {
            case 1:
                cab.getVaildateCode(obj);
                break;
            case 2:
                cab.useCouponCode(obj);
                break;
        }
    },
    showSpace: function (t) {
        $(".pick-up").removeClass("none");
        cbuy.showSelfCollectSpace(t);
    },
    editSpace: function (sid) {
        var ele = $("#myspace_" + sid);
        var idx = ele.attr("sfid");
        $(".pick-up").removeClass("none");
        cbuy.showSelfCollectSpace(sid, true, idx);
    },
    selfCollect: function (t) {
        $(".since-content-box dt").removeClass("pickUpBack");
        t = $(t);
        t.addClass("pickUpBack");
        var sfname = t.html();
        var sid = t.attr("sid");
        var sfid = t.attr("sfid");
        var ele = $("#myspace_" + sid);
        ele.attr("sfid", sfid);
        ele.attr("sfname", sfname);
        db.changeSelf(sid, sfid);
        ele.html("自提点：{0} <span onclick='cab.editSpace({1});'>修改</span>".toFormat(sfname, sid));
    },
    getUserCoupon: function () {
        var sid = $(this).attr("data-code");
        var list = db.getCheapByStore(sid);
        var html = "";
        html += "<div class='Bomb-coupon' ><div class='Bomb-coupon-title'><ul><li class='Bomb-coupon-title-li Bomb-coupon-title-click' data-bomb='0'>";
        html += "     选择可用优惠券</li>";
        html += "<li class='' data-bomb='1'> 直接输入优惠券号码  </li>";
        html += "<div class='cb'></div>";
        html += "</ul>";
        html += "</div>";
        html += " <div class='Bomb-coupon-content'>";
        html += "  <div class='Bomb-coupon-content-box'>";
        html += "   <select name='' id='selcoipon_" + sid + "'>";
        html += "<option value='-1'>请选择优惠券</option>";
        if (list != null && list.length > 0) {
            for (var i = 0, len = list.length; i < len; i++) {
                var c = list[i];
                html += "<option value='{0}'>{1}(￥{2})</option>".toFormat(c.CouponId, c.CouponName, cart.toDecimalAuto(c.Amount == undefined ? c.FaceValue : c.Amount));
            }
        }
        html += "</select>";
        html += "   <a onclick='cab.action(2,this);' data-code='" + sid + "'>确认使用本优惠劵</a>";
        html += "</div>";
        html += "<div class='Bomb-coupon-content-box none mt-mb30'> ";
        html += "  <form name=card action='' method=post>";
        html += "   <input language=javascript type='text' class='Bomb-coupon-content-box-text T1' id='txt' onkeyup='return T1_onkeyup(event)' name=T1  maxlength='19'/>";
        html += "   <input language=javascript type='text' class='Bomb-coupon-content-box-text T2' onkeyup='return T2_onkeyup()' name=T2   maxlength='4'/>";
        html += "   <input language=javascript type='text' class='Bomb-coupon-content-box-text T3' onkeyup='return T3_onkeyup()' size=4 name=T3   maxlength='4'/>";
        html += "   <input type='text' class='Bomb-coupon-content-box-text T4' size=4 name=T4 maxlength='4' />";
        html += "  <input type='button' class='Bomb-coupon-content-box-but' data-code='" + sid + "' value='使用' onclick='cab.action(1,this);' />";
        html += "</form>";
        html += "</div>";
        html += "</div>";
        html += "</div>";

        window.Ecshop.Tool.Hint.newConfirm({
            info: html,
            tit: "选择使用优惠券",
            width: 550,     //宽度 confirm专有属性 提示信息框无用
            height: 340,
            style: 'gray',
            curpage: true,
            button: {
                sort: false,//是否交换按钮顺序
                btnConfirm: '',
                btnCancle: '',
                callbackConfirm: function () { },
                callbackbtnCancle: function () { }
            },
        });
    },
    getVaildateCode: function (t) {
        var xs = $(".Bomb-coupon-content-box-text");
        var v1 = document.card.T1.value;
        var v2 = document.card.T2.value;
        var v3 = document.card.T3.value;
        var v4 = document.card.T4.value;
        var code = (v1 + "-" + v2 + "-" + v3 + "-" + v4);

        var sid = $(t).attr("data-code");
        if (code.length != 19) {
            cart.Message("输入的优惠码格式不正确!请重新输入", null, false);
            return;
        } else {
            cbuy.getcouponbycode(sid, code);
        }

    },
    useCouponCode: function (t) {
        var sid = $(t).attr("data-code");
        var x = $("#selcoipon_" + sid + " :checked");
        var v = x.val();
        if (v == -1) {
            cart.Warn("请选择优惠劵!", null, false);
            return;
        } else {
            cbuy.cartselectcoupon(sid, v);
        }
    },
    removeCoupon: function (t) {
        cbuy.cartcanelcoupon(t);
    },
    adrchange: function (t) {
        t = t == undefined ? $(this) : t;
        cbuy.updateAddressShow(t);
    },
    adrremove: function (t) {
        t = t == undefined ? $(this) : t;
        cbuy.deleteAddress(t);
    },

    bindbilltext: function (data) {
        var d = {};
        try {
            d = JSON.parse(data);
        } catch (e) {
            alert(e.message);
            return;
        }
        if (d == undefined || d.type == undefined)
            return;
        if (d.state == 0 || d.state == "0")
            return;
        var rabs = $("*[name='radio']");
        if (d.type == 3) {
            rabs.eq(0).removeAttr("checked");
            rabs.eq(1).attr("checked", "checked");
            $("#tr_InvoiceNo").show();
            $("#txtInvoiceNo").val(d.invoiceNo);
        } else {
            rabs.eq(0).attr("checked", "checked");
            rabs.eq(1).removeAttr("checked");
        }
        $("#gbt_rate").html(d.taxrate + "%");
        $("#ubt_rate").html(d.uprate + "%");
        $("#gbt_header").val(d.header);
        if (d.type != 4 || d.type != "4") {
            $("#gbt_content").val(d.content);
        } else {
            $("#ubt_company").val(d.zz_dw);
            $("#ubt_card").val(d.zz_num);
            $("#ubt_address").val(d.zz_r_address);
            $("#ubt_mobile").val(d.zz_tel);
            $("#ubt_bankname").val(d.zz_bank);
            $("#ubt_bankcard").val(d.zz_banknum);
            $("#ubt_received").val(d.zz_address);
        }
    },
    savenobill: function () {
        var data = { bill_type: 0, type: '', bill_header: '', bill_content: '', data: '' };
        if (cbuy.saveBill(data)) {
            $(".bill-write").css("display", "none");
            $(".bill-box").css("display", "block");
        }
    },
    changeMark: function () {
        cbuy.inputBuyer($(this));

    },
    setActions: function (types, isbind, action) {
        if (!ca.compareType(types, "array")) return;
        for (var i = 0, len = types.length; i < len; i++) {
            cab.setAction(types[i], isbind, action);
        }
    },
    setAction: function (type, isbind, action) {
        type = ca.toDefault(type, -1);
        var ele = { name: '', func: '' };
        ele.name = cab.getName(type);
        if (type == -1 || ele.name == '') return;
        switch (type) {
            case 1:
                ele.func = cab.changeMark;
                break;
            case 2:
                ele.func = cab.tobuy;
                break;
            case 3:
                ele.func = cab.saveupbill;
                break;
            case 4:
                ele.func = cab.savebill;
                break;
            case 5:
                ele.func = cab.savenobill;
                break;
            case 6:
                ele.func = cab.getUserCoupon;
                break;
            case 7:
                ele.func = cab.getVaildateCode;
                break;
            case 8:
                ele.func = cab.adrchange;
                break;
            case 9:
                ele.func = cab.adrremove;
                break;

                break;
        }
        action = ca.toDefault(action, "click");
        cab.bindButton(ele.name, isbind, action, ele.func);
    },
    getName: function (type) {
        switch (type) {
            case 1:
                return ".c_mark_input";
            case 2:
                return "#sumbit_order";
            case 3:
                return ".input_sub.save_up";
            case 4:
                return ".input_sub.save_bill";
            case 5:
                return ".input_a.save_none";
            case 6:
                return ".usemen";
            case 7:
                return ".Bomb-coupon-content-box-but";
            case 8:
                return ".a-change";
            case 9:
                return ".a-delete";

            default:
                return '';
        }
    },
    bindButton: function (el, isbind, action, func) {
        el = $(el);
        if (isbind) {
            switch (action) {
                case 'onblur':
                    el.removeAttr('onblur').on('blur', func);
                    break;
                default:
                    el.bind(action, func);
                    break;
            }

        } else {
            switch (action) {
                case 'onblur':
                    el.removeAttr('onblur');
                    break;
                default: el.unbind(action, func); break;
            }
        }
    }
};
var cap = {
    init: function () {
        cap.payment = cpay.total.Payment;
        cap.setActions([1, 2, 3, 4], true);
        cap.load();
    },
    success: function () {
        if (cpay.utype == 1) {
            window.location.href = '/usercenter/?urip=WAIT_SELLER_SEND_GOODS';
        } else
            window.location.href = '/user/myorder.aspx?status=WAIT_SELLER_SEND_GOODS';
    },
    hinder: function () {
        if (cpay.utype == 1) {
            window.location.href = '/usercenter/?urip=WAIT_BUYER_PAY';
        } else
            window.location.href = '/user/myorder.aspx?status=WAIT_BUYER_PAY';
    },
    change: function () {
        $(".paymentBomb").remove();
    },
    load: function () {
        $(".payOnline-box").each(function () {
            $(this).find("li").eq(0).css({
                "border": "none"
            });
        });
        cap.initpage();
    },
    initpage: function () {
        var bbtn = $(cap.getName(2));
        if (bbtn.length > 0) {
            cap.isChecked = ca.compareType(bbtn, "checkbox");
            cap.payselected(0);
        } else {
            cap.wayselected(0);
        }
    },
    mouseover: function () {
        $(this).css({
            "background-position": "-200% 0 "
        });
    },
    mouseout: function () {
        $(this).css({
            "background-position": "-150% 0 "
        });
    },
    isChecked: false,
    payment: 0,
    clear: {
        background: "url('/images/choose-bg.png')-150% 0  repeat-x ",
        background_size: "300% 100%",
        background_selected: "url('/images/choose-bg.png') no-repeat center",
    },
    payselected: function (idx, checked) {
        var clear = cap.clear;
        if (idx > -1) {
            $(cap.getName(4)).attr("checked", false);
        }
        $(".payOnline-way").find(".payOnline-way-box-img").each(function (i, ele) {
            var current = $(ele);
            var event = $(this).attr("data-event");
            if (event == undefined) {
                current.bind("click", cap.paychanged);
                if (idx == 0) {
                    current.attr("data-event", 0);
                }
            }
            event = ca.toDefault(event, 0);
            if (i == idx) {
                if (event == 1) {
                    current.unbind("mouseover", cap.mouseover);
                    current.unbind("mouseout", cap.mouseout);
                    current.attr("data-event", 0);
                }
                if (current.hasClass("a1") && event == 0) {
                    current.removeClass("a1").removeClass("selected");
                    current.css({ "background": clear.background, "background-size": clear.background_size });
                    //alert(i + 'checked');
                } else {
                    current.addClass("a1").addClass("selected");
                    current.css({ "background": clear.background_selected });
                    // alert(i + 'check');
                }
            } else {
                if (event == 0) {
                    current.removeClass("a1").removeClass("selected");
                    current.css({ "background": clear.background, "background-size": clear.background_size });
                    current.bind("mouseover", cap.mouseover);
                    current.bind("mouseout", cap.mouseout);
                    current.attr("data-event", 1);
                    // alert(i + 'ubind');
                }
            }
        });
    },
    gopay: function () {
        cap.selected();
    },
    paychanged: function () {
        var index = $(this).attr("data-index");
        if (index > -1 && !cap.isChecked) {
            var ele = $(cap.getName(2));
            ele.attr("checked", false);
            ele = $(cap.getName(4));
            ele.attr("checked", false);

            cap.showPayBox(false);
        } else if ($(cap.getName(4)).attr("checked") == true) {
            $(cap.getName(4)).attr("checked", false);
            cap.showPayBox(false);
        }
        cap.payselected(index);

    },
    wayselected: function (idx, checked) {
        var clear = cap.clear;
        $(".linePaymen").find(".payOnline-way-box-img").each(function (i, ele) {
            var current = $(ele);
            var event = $(this).attr("data-event");
            if (event == undefined) {
                current.bind("click", cap.waychanged);
                if (idx == 0) {
                    current.attr("data-event", 0);
                }
            }
            event = ca.toDefault(event, 0);
            if (i == idx) {
                if (event == 1) {
                    current.unbind("mouseover", cap.mouseover);
                    current.unbind("mouseout", cap.mouseout);
                    current.attr("data-event", 0);
                    //alert(i + 'check');
                }

                $("#linePaymen_box_" + i).removeClass("none");
                current.addClass("selected");
                current.css({ "background": clear.background_selected });
                // alert(i + 'checked');
            } else {
                $("#linePaymen_box_" + i).addClass("none");
                if (event == 0) {
                    current.removeClass("selected");
                    current.css({ "background": clear.background, "background-size": clear.background_size });
                    current.bind("mouseover", cap.mouseover);
                    current.bind("mouseout", cap.mouseout);
                    current.attr("data-event", 1);
                    // alert(i + 'ubind');
                }
            }
        });
    },
    showPayBox: function (ck) {
        ck = ck == undefined || ck == false ? false : true;
        var box = $("#upayment");
        if (ck) {
            box.removeClass("none");
        } else {
            box.addClass("none");
        }
    },
    waychanged: function () {
        var index = $(this).attr("data-index");
        cap.wayselected(index);
    },
    balanced: function () {
        var el = $(this);
        if (this.checked && !cap.isChecked) {
            cap.payselected(-1);
        }
        cap.showPayBox(this.checked);
        if (this.checked) {
            if ("#" + el.attr("id") == cap.getName(2)) {
                $(cap.getName(4)).attr("checked", false);
            } else {
                $(cap.getName(2)).attr("checked", false);
                cap.payselected(-1);
            }
        }
    },
    selected: function () {
        var r = cap.checked();
        if (r.status) {
            return cpay.paytest(r);
        } else {
            //if (result.isempty)
            //    cart.Success(r.code, function () {
            //        location.href = '/user/myorder.aspx';
            //    });
            //else
            cart.Warn(r.code);
            return false;
        }

    },
    getVaildateCode: function () {
        cpay.sendCode();
    },
    checked: function () {
        var result = {
            status: false, code: 1004, index: -1, type: 0, checked: false, isempty: false, issxpayChecked: false,
        };
        cap.payment = cpay.payment;
        if ($(cap.getName(4))[0] != undefined) {
            result.issxpayChecked = $(cap.getName(4))[0].checked;
        } else {
            result.issxpayChecked = false;
        }
        var list = '';
        if (cap.payment == 2 || cap.payment == 3) {
            list = $(".payOnline-way-box-img.selected");
            result.status = (list.length == 1);
            result.code += cap.payment;
            result.isempty = (list.length < 1);
            if (result.isempty) {
                result.code = cap.payment == 3 ? 8002 : 8001;
            }
        } else {
            list = $(".payOnline-way-box-img.a1.selected");
            result.checked = $(cap.getName(2))[0].checked;
            if (!result.checked && $(cap.getName(4)) != undefined && $(cap.getName(4)).length >0) {
                result.checked = $(cap.getName(4))[0].checked;
            }
            //result.checked != true ? result.checked = $(cap.getName(4))[0].checked : result.checked;//如果未选中“预存款”检查是否选中了“授权支付”
            result.status = (cap.isChecked ? list.length == 1 : (result.checked || list.length == 1));
            if (result.issxpayChecked) {
                result.status = true;
            }
            result.code += cap.payment;
        }
        result.index = list.length > 0 ? $(list[0]).attr("data-code") : -1;
        return result;
    },
    setActions: function (types, isbind, action) {
        if (!ca.compareType(types, "array")) return;
        for (var i = 0, len = types.length; i < len; i++) {
            cap.setAction(types[i], isbind, action);
        }
    },
    setAction: function (type, isbind, action) {
        type = ca.toDefault(type, -1);
        var ele = { name: '', func: '' };
        ele.name = cap.getName(type);
        if (type == -1 || ele.name == '') return;
        switch (type) {
            case 1:
                ele.func = cap.selected;
                break;
            case 2:
                ele.func = cap.balanced;
                break;
            case 3:
                ele.func = cap.getVaildateCode;
                break;
            case 4:
                ele.func = cap.balanced;
                break;
        }
        action = ca.toDefault(action, "click");
        cap.bindButton(ele.name, isbind, action, ele.func);
    },
    getName: function (type) {
        switch (type) {
            case 1:
                return ".pay-but";
            case 2:
                return "#choose-pay";
            case 3:
                return "#sendmobile";
            case 4:
                return "#choose-pay-credit";
            default:
                return '';
        }

    },
    bindButton: function (el, isbind, action, func) {
        el = $(el);
        if (isbind)
            el.bind(action, func);
        else
            el.unbind(action, func);
    }
};


function HashMap() {
    var length = 0;
    var obj = new Object();
    this.isEmpty = function () {
        return length == 0;
    };
    this.exist = function (key) {
        return (key in obj);
    };
    this.containexistsValue = function (value) {
        for (var key in obj) {
            if (obj[key] == value) {
                return true;
            }
        }
        return false;
    };
    this.append = function (key, value) {
        if (!this.exist(key)) {
            length++;
        }
        obj[key] = value;
    };
    this.get = function (key) {
        return this.exist(key) ? obj[key] : null;
    };
    this.remove = function (key) {
        if (this.exist(key) && (delete obj[key])) {
            length--;
        }
    };
    this.values = function () {
        var _values = new Array();
        for (var key in obj) {
            _values.push(obj[key]);
        }
        return _values;
    };

    this.keys = function () {
        var _keys = new Array();
        for (var key in obj) {
            _keys.push(key);
        }
        return _keys;
    };
    this.toValue = function () {
        return this.values().toString();
    };
    this.size = function () {
        return length;
    };
    this.clear = function () {
        length = 0;
        obj = new Object();
    };
}

var cwin = {
    onload: function () {
        var heiTop = parseInt($(".cart_bot_inner").offset().top);
        var heiTops = parseInt($(".table-top").offset().top);
        var height = window.screen.height;
        var scTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
        if (scTop < heiTop - height + 70) {
            $(".cart_bott_inner").addClass("fixed");
        } else {
            $(".cart_bott_inner").removeClass("fixed");
        }
        $(window).scroll(function () {
            var scTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
            if (scTop < heiTop - height + 70) {
                $(".cart_bott_inner").addClass("fixed");
            } else {
                $(".cart_bott_inner").removeClass("fixed");
            }
            //var scTops = $("body").scrollTop();
            if (scTop > heiTops) {
                $(".table-top").addClass("fixed2");
                $('.shopCard-title').addClass('shopCard-title-mb41');
            } else {
                $(".table-top").removeClass("fixed2");
                $('.shopCard-title').removeClass('shopCard-title-mb41');
            }
        })
    }
};
//尾部

