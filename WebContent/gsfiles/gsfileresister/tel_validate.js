//注册时检测手机是否被注册过
var tip_notice = "inline-tip notice";

var tip_error = "inline-tip error";

var tip_ok = "inline-tip success";

var tip_default = "inline-tip default";

var MaxCount = 5;

var Interval = 60;

/*注册*/
var reg_tel =
{
    /*发送验证码*/
    sendMobileVerify: function (type, fn, mobile, isreg, code) {
        isreg = isreg == undefined ? true : isreg;
        var Msg = document.getElementById("msg_txt_mobileverify");
        Msg.className = tip_error;
        if (isreg) {
            if (!reg_tel.check_umob_reg()) {
                return;
            }
        } else {
            if (mobile == "") {
                Msg.innerHTML = "请先到个人中心填写手机号";
                return;
            }
        }
        if (code == "" || code.length != 4) {
            Msg.innerHTML = "请输入验证码！";

            $("#sendMobileCode").addClass("disabled");
            reg_tel.validatefail();
            return;
        }
        var d = new Date();
        var date = new Date(d.getFullYear(), d.getMonth() + 1, d.getDay());
        var sendmobile = $.cookie("sendmobile");
        if (sendmobile != null && sendmobile != undefined) {
            sendmobile = parseInt(sendmobile) + 1;
        } else {
            sendmobile = 1;
        }
        if (sendmobile > MaxCount) {
            $("#sendMobileCode").addClass("disabled");
            document.getElementById("sendMobileCode").onclick = function () {
                Ecshop.Tool.Hint.Warn({ info: "一天只能发送五次" });
                return false;
            };
            Ecshop.Tool.Hint.Warn({ info: "一天只能发送五次" });
            return;
        }
        $.cookie("sendmobile", sendmobile, { expires: date.toUTCString() });
        $.ajax({
            url: '/user/controls/userdo.ashx',
            type: 'POST',
            dataType: 'html',
            data: {
                type: 'sendMobileVerify',
                pagetype: type,
                verifycode: $("#reg_code").val(),
                mobile: isreg ? mobile : ''
            },
            success: function (data) {
                if (data == "1") {
                    $("#txt_mobileverify_send").val("1");
                    if (typeof (fn) == "function") {
                        fn();
                    }
                } else {
                    if (data == "-1") {
                        Msg.innerHTML = "手机号码错误请与管理员联系修改手机号码";
                    } else if (data == "-100") {
                        Msg.innerHTML = "你已经超过最大IP访问量";
                    } else if (data == "-101") {
                        Msg.innerHTML = "一天之内你已经超发送限制";
                    } else if (data == "-102") {
                        Msg.innerHTML = "你已经发送,请稍后!!";
                    } else {
                        Msg.innerHTML = data;
                    }
                    reg_tel.failCall();
                }
            }
        });
    },

    /*失败回调*/
    failCall: function () {
        document.getElementById("sendMobileCode").onclick = function () {
            Ecshop.Tool.Hint.Warn({ info: "发送太频繁了，请稍等！" });
            ;
            return false;
        };
        $("#sendMobileCode").addClass("disabled");
        setTimeout(function () { reg_tel.failWait(Interval); }, 1000);
    },
    failWait: function (time) {
        if (time > 0) {
            time = time - 1;
            setTimeout(function () { reg_tel.failWait(time); }, 1000);
        } else {

            document.getElementById("sendMobileCode").onclick = function () { reg_tel.sendMobileVerify('Register', function () { reg_tel.successCall(); }, $('#umob').val(), true, $("#reg_code").val()); };
            $("#sendMobileCode").removeClass("disabled").html("免费获取验证码");
        }
    },

    /*验证失败*/
    validatefail: function () {
        $("#sendMobileCode").addClass("disabled");
        document.getElementById("sendMobileCode").onclick = function () { return false; };
    },

    /*成功回调*/
    successCall: function () {
        $("#sendMobileCode").addClass("disabled");
        var Msg = document.getElementById("msg_txt_mobileverify");
        Msg.className = tip_ok;
        Msg.innerHTML = "校验码发送成功，<font color='red'>60</font>后可以重新获取。";
        document.getElementById("sendMobileCode").onclick = function () { return false; };
        setTimeout(function () { reg_tel.successWait(Interval); }, 1000);
    },
    successWait: function (time) {
        var Msg = document.getElementById("msg_txt_mobileverify");
        if (time > 0) {
            time = time - 1;
            Msg.innerHTML = "校验码发送成功，<font color='red'>"+time+"</font>后可以重新获取。";
            setTimeout(function () { reg_tel.successWait(time); }, 1000);
        } else {
            document.getElementById("sendMobileCode").onclick = function () { reg_tel.sendMobileVerify('Register', function () { reg_tel.successCall(); }, $('#umob').val(), true, $("#reg_code").val()); };
            $("#sendMobileCode").removeClass("disabled").addClass("active");
            Msg.className = tip_notice;
            Msg.innerHTML = "";
        }
    },

    /*检查手机号*/
    check_umob_reg: function (IsMobileVerify) {
        var obj = document.getElementById("umob");
        var Msg = document.getElementById("msg_" + obj.id);
        var chk = true;
        var re = Ecshop.Tool.CheckMobile($(obj)); //0236789
        if (reg_tel.inputIsNull(obj)) {
            Msg.className = tip_notice;
            Msg.innerHTML = "请输入手机号码！";
            chk = false;
        } else if (!re) {
            Msg.className = tip_error;
            Msg.innerHTML = "请输入正确的11位手机号码！";

            chk = false;
        } else {
            $.ajax({
                url: '/user/controls/userdo.ashx',
                type: 'POST',
                data: { type: "check_reg_name", username: $(obj).val(), id: "0" },
                dataType: 'html',
                async: false,
                success: function (data) {
                    if (data == "0") {
                        Msg.className = tip_ok;
                        Msg.innerHTML = "恭喜，可以使用";
                        chk = true;
                    } else {
                        Msg.className = tip_error;
                        Msg.innerHTML = "抱歉，该手机号已经被注册";
                        chk = false;
                    }
                }
            });

        }
        if (!chk) {
            if (IsMobileVerify) {
                reg_tel.validatefail();
            }
        }
        return chk;
    },

    /*是否为空*/
    inputIsNull: function (obj) {
        if (obj.value.replace(/(\s*$)/g, "") == "") {
            return true;
        }
    },

    /*如果为空，将提示抛出*/
    inputIsNullNotice: function (obj) {
        if (obj.value.replace(/(\s*$)/g, "") == "") {
            var Msg = document.getElementById("msg_" + obj.id);
            Msg.className = tip_notice;
            Msg.innerHTML = $(obj).attr("placeholderinfo");
            return true;
        }
    },

    /*验证码*/
    check_reg_code_m: function () {
        var obj = document.getElementById("reg_code");
        var Msg = document.getElementById("msg_" + obj.id);
        var chk = true;

        if (reg_tel.inputIsNull(obj)) {
            Msg.className = tip_notice;
            Msg.innerHTML = "请输入验证码！";
            reg_tel.validatefail();
            chk = false;
        } else {
            $.ajax({
                url: '/user/controls/userdo.ashx',
                type: 'POST',
                data: { type: "check_reg_code", cod: document.getElementById("reg_code").value },
                dataType: 'html',
                async: false,
                success: function (data) {
                    if (data != "1") {
                        Msg.className = tip_error;
                        Msg.innerHTML = "验证码不正确";
                        reg_tel.validatefail();
                        chk = false;
                    } else {
                        Msg.className = tip_ok;
                        Msg.innerHTML = "填写正确";
                        reg_tel.failWait(-1);
                        chk = true;
                    }
                }
            });
        }
        return chk;
    },

    /*保存*/
    _post: function (objbut, IsMobileVerify, IsDialog, isServerRequeied) {
        var chk = true;
        //if (!$("#IsAgree").attr("checked")) {
        //    Ecshop.Tool.Hint.Warn({ info: "请接受服务条款" });
        //    return;
        //}
        //是否勾选
        if (!agreeonProtocol()) { chk = false; }

        $(objbut).val("正在提交中，请等待");
        $(objbut).attr("disabled", true);
        $(objbut).addClass("disabled");
        var mobileverify = $("#txt_mobileverify").val();
       
        if (!reg_tel.check_umob_reg(IsMobileVerify)) { chk = false; }
        if (IsMobileVerify) {

            //验证码
            if (!reg_tel.check_reg_code_m()) { chk = false; }

            //手机验证码
            if (reg_tel.inputIsNullNotice(document.getElementById("txt_mobileverify"))) { chk = false; }
            if (chk) {
                var send_mobileverify = $("#txt_mobileverify_send").val();
                if ($.trim(send_mobileverify) != "1") {
                    Ecshop.Tool.Hint.Warn({ info: "手机校验码还未发送" });
                    chk = false;
                }
            }
        }
        if (!reg_tel.check_reg_pwd2()) { chk = false; }
        if (!reg_tel.check_reg_pwdagain($("#reg_pwd").val(), $("#reg_pwdagion").val())) { chk = false; }
        //recommendName
        if (!check_recommendName(document.getElementById("recommendName"))) { chk = false; }

        var serverObj = $("#txtserverid");
        var serverId = serverObj.length > 0 ? serverObj.val().trim() : "";
        if (serverId != "" || isServerRequeied) {
            if (!check_serverid()) { chk = false; }
        }

        if (chk) {
            var reg_name = $("#umob").val();
            $.ajax({
                async: false,
                url: "/user/controls/userdo.ashx",
                type: "POST",
                dataType: "json",
                data: {
                    type: "tel_register",
                    username: reg_name,
                    userpwd: $("#reg_pwd").val(),
                    MobileVerify: mobileverify,
                    IsMobileVerify: IsMobileVerify,
                    QR: $("#QR").val(),
                    isforum: (getQueryString("isforum") == "true"),
                    serverid: serverId
                },
                success: function (data) {
                    if (data.IsSuccess) {
                        Ecshop.Tool.Hint.Ok({
                            info: data.Message,
                            fn: function () {
                                if (IsDialog == 1) {
                                    parent.location.reload();
                                }
                                else {
                                    if (data.RedirectUrl != undefined && data.RedirectUrl != "") {
                                        top.location.href = data.RedirectUrl;
                                    }
                                    else {
                                        top.location.href = "/";
                                    }
                                }
                            }
                        });
                    }
                    else {
                        Ecshop.Tool.Hint.Error({ info: data.Message });
                    }
                }
            });

        }
        $(objbut).attr("disabled", false);
        $(objbut).val("立 即 注 册");
        $(objbut).removeClass("disabled");
    },
    freshPage: function (IsDialog) {
        if (IsDialog == 1) {
            parent.location.reload();
        }
        else {
            timer = setTimeout(function () {
                location.href = 'user/SendQR.aspx' + location.search;
            }, 500);
        }
    },
    //显示明文
    showpwd: function (o) {
        var obj = $("#reg_pwd");
        var pwd = obj.css("display");
        if (pwd.indexOf("block") != -1) {
            $("#reuserpwd").show();
            $("#reg_pwd").hide();
            $(o).html("隐藏密码");
        } else {
            $("#reuserpwd").hide();
            $("#reg_pwd").show();
            $(o).html("显示密码");
        }
    },

    /*检查密码强度*/
    check_reg_pwd2: function () {
        var obj = document.getElementById("reg_pwd");
        var Msg = document.getElementById("msg_" + obj.id);
        var chk = true;
        var Password = obj.value;
        if (reg_tel.inputIsNullNotice(obj)) { chk = false; }
        else if (Password.length < 6 || Password.length > 20) {
            Msg.className = tip_error;
            Msg.innerHTML = "密码为6-20位字母/数字/其他符号的组合！";
            chk = false;
        } else {
            Msg.className = tip_ok;
            Msg.innerHTML = "通过！"; // "填写正确！";
            $.ajax({
                url: '/user/controls/userdo.ashx',
                data: { pwd: Password, type: 'pwdauth' },
                dataType: 'html',
                type: 'POST',
                success: function (data) {
                    var MsgHTML = '';
                    for (var i = 0; i < 3; i++) {
                        var Msgtitle = '';
                        switch (i) {
                            case 0: { Msgtitle = '弱'; }; break;
                            case 1: { Msgtitle = '中'; }; break;
                            case 2: { Msgtitle = '强'; }; break;
                        }
                        var borderRightColor = '#F8EDAA';
                        if (i == 2) {
                            borderRightColor = '#C3C3C3';
                        }
                        if (i <= data) {
                            MsgHTML += '<td align="center" style="width: 30px; height: 11px; line-height:11px; background: #F58B0C; ' +
                        'color: #FFF;border-right: 1px solid ' + borderRightColor + ';">' + Msgtitle + '</td>';
                        }
                        else {
                            MsgHTML += '<td align="center" style="width: 30px; height: 11px; line-height:11px; background: #C3C3C3; ' +
                        'color: #FFF;border-right: 1px solid ' + borderRightColor + ';">' + Msgtitle + '</td>';
                        }
                    }
                    Msg.innerHTML = '<span style="float: left;">密码强度：</span>' +
                                    '<table cellpadding="0" cellspacing="0" border="0" style="float: left;">' +
                                        '<tr>' +
                                            MsgHTML +
                                        '</tr>' +
                                    '</table>';
                }
            });
            chk = true;
        }
        return chk;
    },

    /*输入密码触发*/
    check_reg_pwd: function (o1, o2) {
        reg_tel.check_reg_pwd2();
        o2.val(o1.value);
    },
    //验证确认密码
    check_reg_pwdagain: function (pwd, pwdagain) {
        var msgObj = $("#msg_reg_pwdagion");
        if (pwdagain == "") {
            msgObj.attr("class", tip_notice);
            msgObj.html("请输入确认密码！");
            return false;
        }
        if (pwd != pwdagain) {
            msgObj.attr("class", tip_error);
            msgObj.html("两次输入密码不一致！");
            return false;
        }

        msgObj.attr("class", tip_ok);
        msgObj.html("&nbsp;&nbsp;");
        return true;
    }
};

function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
}