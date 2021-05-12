function GetRequest() {
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
}

/*-------提示类-begin--------*/
var tip_notice = "inline-tip notice";

var tip_error = "inline-tip error";

var tip_ok = "inline-tip success";

var tip_default = "inline-tip default";

/*-------提示类-end--------*/
var confim_title = "确认提示框";

var user = {
    //检查注册用户名
    check_reg_name: function () {
        var obj = document.getElementById("reg_name");
        var Msg = document.getElementById("msg_" + obj.id);
        var chk = true;
        var re = /^[\u4e00-\u9fa5a-zA-Z0-9_]{2,50}$/;

        if (obj.value.replace(/(\s*$)/g, "") == "") {
            Msg.className = tip_notice;
            Msg.innerHTML = $(obj).attr("placeholderinfo");
            chk = false;
        }
        else if (obj.value.length < 2) {
            Msg.className = tip_error;
            Msg.innerHTML = "中文/英文/数字/下滑线，长度2-50";
            chk = false;
        } else if (obj.value.search(re) == -1) {
            Msg.className = tip_error;
            Msg.innerHTML = "中文/英文/数字/下滑线，长度2-50";
            chk = false;
        } else {
            Msg.className = tip_ok;
            Msg.innerHTML = "通过！"; // "填写正确！";
            chk = true;
        }
        if (chk) {
            chk = check_username(obj.value, Msg);
        }
        return chk;
    }
};

/*验证用户名是否存在*/
function check_username(username, Msg) {
    var chk = false;
    $.ajax({
        url: '/user/controls/userdo.ashx',
        type: 'POST',
        data: { type: "check_reg_name", username: username, id: "0" },
        dataType: 'html',
        async: false,
        success: function (data) {
            if (data == "0") {
                Msg.className = tip_ok;
                Msg.innerHTML = "恭喜，可以使用";
                chk = true;
            }
            else {
                Msg.className = tip_error;
                Msg.innerHTML = "抱歉，该用户名已经被注册,<a href='b2blogin.aspx' class='color-blue'>直接登录</a>";
                chk = false;
            }
        }
    });
    return chk;
}

//检查密码
function check_reg_pwd() {
    var obj = document.getElementById("reg_pwd");
    var Msg = document.getElementById("msg_" + obj.id);
    var chk = true;
    // var re = /^(\w){6,20}$/;
    var Password = obj.value;
    if (obj.value.replace(/(\s*$)/g, "") == "") {
        Msg.className = tip_notice;
        Msg.innerHTML = $(obj).attr("placeholderinfo");
        chk = false;
    }
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
                Msg.innerHTML = '<span style=\"display:inline-block;vertical-align: middle;margin-left:3px;\">' +
                                '<table cellpadding="0" cellspacing="0" border="0">' +
                                    '<tr>' +
                                        MsgHTML +
                                    '</tr>' +
                                '</table></span>';
            }
        });
        chk = true;
    }
    return chk;
}

//确认密码
function check_reg_pwdagain() {
    var obj = document.getElementById("reg_pwdagion");
    var Msg = document.getElementById("msg_" + obj.id);
    var chk = true;
    var re = /^(\w){6,20}$/;

    if (obj.value.replace(/(\s*$)/g, "") == "") {
        Msg.className = tip_notice;
        Msg.innerHTML = $(obj).attr("placeholderinfo");
        chk = false;
    } else if (obj.value != document.getElementById("reg_pwd").value) {
        Msg.className = tip_error;
        Msg.innerHTML = "两次密码不一致！";
        chk = false;
    } else {
        Msg.className = tip_ok;
        Msg.innerHTML = "<b></b>通过！"; //  "填写正确！";
        chk = true;
    }
    return chk;
}

//检查注册电子邮箱
function check_reg_email() {

    var obj = document.getElementById("reg_email");
    var Msg = document.getElementById("msg_" + obj.id);
    var chk = true;
    //    var re = /^([A-Za-z0-9])(\w)+@(\w)+(\.)(com|com\.cn|net|cn|net\.cn|org|vip|qq|qq\.com|biz|info|gov|gov\.cn|edu|edu\.cn|163|163\.com)/;
    var re = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var reg = new RegExp(/^([a-zA-Z0-9]+[-_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,4}$/);
    if (obj.value.replace(/(\s*$)/g, "") == "") {
        Msg.className = tip_notice;
        Msg.innerHTML = $(obj).attr("placeholderinfo");
        chk = false;
    } else if (!reg.test(obj.value)) {
        Msg.className = tip_error;
        Msg.innerHTML = "电子邮箱格式不正确！";
        chk = false;
    } else {
        Msg.className = tip_ok;
        Msg.innerHTML = "通过！"; // "填写正确！";
        chk = true;
    }
    if (chk) {
        $.ajax({
            url: '/user/controls/userdo.ashx',
            async: false,
            type: 'POST',
            data: { type: "check_reg_email", email: $("#reg_email").val() },
            dataType: 'html', //返回的数据是否支持html格式
            error: function () { alert('出现未知错误，请稍后重试。'); },
            success: function (data) {
                if (data == "0") {
                    Msg.className = tip_ok;
                    Msg.innerHTML = "恭喜，可以使用";
                    chk = true;
                }
                else {
                    Msg.className = tip_error;
                    Msg.innerHTML = "抱歉，该邮箱已经被注册";
                    chk = false;
                }
            }
        });
    }
    return chk;
}

//检查密码
function check_reg_safepwd() {
    var obj = document.getElementById("reg_safepwd");
    var Msg = document.getElementById("msg_" + obj.id);
    var chk = true;
    // var re = /^(\w){6,20}$/;
    var Password = obj.value;
    if (Password.replace(/(\s*$)/g, "") == "") {
        Msg.className = tip_notice;
        Msg.innerHTML = $(obj).attr("placeholderinfo");
        chk = false;
    }
        // else if (document.getElementById("upwd").value.search(re) == -1)
    else if (Password.length < 6 || Password.length > 20) {
        Msg.className = tip_error;
        Msg.innerHTML = $(obj).attr("placeholderinfo");
        chk = false;
    } else {
        Msg.className = tip_ok;
        //        Msg.innerHTML = "通过！"; // "填写正确！";
        if ($("#safepwdmsg").html() != null) {
            Msg = document.getElementById("safepwdmsg");
        }
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
}

//确认密码
function check_reg_safepwdagion() {
    var obj = document.getElementById("reg_safepwdagion");
    var Msg = document.getElementById("msg_" + obj.id);
    var chk = true;
    var re = /^(\w){6,20}$/;

    if (obj.value.replace(/(\s*$)/g, "") == "") {
        Msg.className = tip_notice;
        Msg.innerHTML = $(obj).attr("placeholderinfo");
        chk = false;
    } else if (obj.value != document.getElementById("reg_safepwd").value) {
        Msg.className = tip_error;
        Msg.innerHTML = "两次支付密码不一致！";
        chk = false;
    } else {
        Msg.className = tip_ok;
        Msg.innerHTML = "通过！"; //  "填写正确！";
        chk = true;
    }
    return chk;
}

//注册时检测手机是否被注册过
function check_umob_reg() {
    var obj = document.getElementById("umob");
    var Msg = document.getElementById("msg_umob");
    var chk = true;
    var re = /^0?(1)[0-9]{10}$/;
    if (obj.value.replace(/(\s*$)/g, "") == "") {
        Msg.className = tip_notice;
        Msg.innerHTML = $(obj).attr("placeholderinfo");
        chk = false;
    } else if (obj.value.search(re) == -1) {
        Msg.className = tip_error;
        Msg.innerHTML = "请输入正确的11位手机号码！";
        chk = false;
    } else {
        $.ajax({
            url: '/admin/controls/userdo.ashx',
            async: false,
            type: 'POST',
            data: { type: "check_umob_userreg", mob: $("#umob").val() },
            dataType: 'html', //返回的数据是否支持html格式
            error: function () { alert('出现未知错误，请稍后重试。'); },
            success: function (data) {
                if (data == "0") {
                    Msg.className = tip_ok;
                    Msg.innerHTML = "通过！"; // "填写正确！";
                    chk = true;
                }
                else {
                    Msg.className = tip_error;
                    Msg.innerHTML = "抱歉，该手机已经被使用";
                    chk = false;
                }
            }
        });
    }
    return chk;
}

//验证身份证照
function ChecksfzData() {
    var chk = true;
    var Msg = document.getElementById("msg_FileUpload1");
    var pic = $("#hideFiles1").val();

    if (pic == null || pic == "") {


        Msg.className = tip_notice;
        Msg.innerHTML = "请上传身份证照片，将正反面照片做在一张图片上";
        chk = false;
    }

        //$("#spfile").attr("class", tip_ok);
        //return true;
    else {
        Msg.className = tip_ok;
        Msg.innerHTML = "通过！"; // "填写正确！";
        chk = true;
    }
    return chk;
}

//验证营业执照
function CheckyyzzData() {
    var chk = true;
    var Msg = document.getElementById("msg_FileLoad");
    var pic = $("#hideFiles").val();

    if (pic == null || pic == "") {
        Msg.className = tip_notice;
        Msg.innerHTML = "请上传公司营业执照";
        chk = false;
    }
    else {
        Msg.className = tip_ok;
        Msg.innerHTML = "通过！"; // "填写正确！";
        chk = true;
    }
    return chk;
}

function check_areaa() {
    var chk = true;
    var Msg = document.getElementById("msg_reg_Area");
    var area = $("#Select3").val();
    if (area == "" || area == "...") {
        Msg.className = tip_error;
        Msg.innerHTML = "请选择所在地区";
        chk = false;
    }
    else {
        Msg.className = tip_ok;
        Msg.innerHTML = "填写正确！";

        chk = true;
    }
    return chk;
}

//server 2012-06-26 add by yzh
function check_serverid() {
    var chk = true;
    var obj = document.getElementById("txtserverid");
    var Msg = document.getElementById("msg_" + obj.id);
    var operserverid = $("#txtserverid").val();
    var msCon = "销售专员编号";

    //张家界订制
    var IsZJj = $("#txtIsZjj").val();
    if (IsZJj == "True" || IsZJj == "1") {
        msCon = "易购码";
    }

    if (obj.value.replace(/(\s*$)/g, "") == "") {
        Msg.className = tip_notice
        Msg.innerHTML = $(obj).attr("placeholderinfo");
        chk = false;
    }
    else {
        $.ajax({
            url: '/admin/controls/operserver.ashx',
            type: 'POST',
            data: { type: "check_operserverid_extend", operserverid: operserverid },
            dataType: 'html',
            async: false,
            success: function (data) {
                if (data != "1") {
                    Msg.className = tip_error;
                    Msg.innerHTML = msCon + "不存在！";

                    chk = false;
                }
                else {
                    Msg.className = tip_ok;
                    Msg.innerHTML = "填写正确！";

                    chk = true;
                }
            }
        });
    }
    return chk;
}

function sendMobileVerify(type, fn, mobile, isreg) {
    isreg = isreg == undefined ? true : isreg;
    if (isreg) {
        if (!check_umob_reg()) {
            Ecshop.Tool.Hint.Error({ info: "手机号不正确或该手机号码已经被注册！" });
            return;
        }
        if (!check_reg_code()) {
            Ecshop.Tool.Hint.Error({ info: "验证码必须填写！" });
            return;
        }
    } else {
        if (mobile == "") {
            Ecshop.Tool.Hint.Error({ info: "请先到个人中心填写手机号！" });
            return;
        }
    }

    $.ajax({
        url: '/user/controls/userdo.ashx',
        type: 'POST',
        dataType: 'html',
        data: { type: 'sendMobileVerify', pagetype: type, mobile: isreg ? mobile : '' },
        success: function (data) {
            if (data == "1") {
                $("#txt_mobileverify_send").val("1");
                if (typeof (fn) == "function") {
                    fn();
                }
            }
            else if (data == "-1") {
                Ecshop.Tool.Hint.Error({ info: "手机号码错误请与管理员联系修改手机号码！" });
            }
            else {
                Ecshop.Tool.Hint.Error({ info: "发送校验码错误请与管理员联系！" });
            }

        }
    });
}

//检查注册提交证码
function check_reg_code() {
    var obj = document.getElementById("reg_code_m");
    var Msg = document.getElementById("msg_" + obj.id);
    var chk = true;

    if (obj.value.replace(/(\s*$)/g, "") == "") {
        Msg.className = tip_notice;
        Msg.innerHTML = $(obj).attr("placeholderinfo");
        chk = false;
    } else {
        $.ajax({
            url: '/user/controls/userdo.ashx',
            type: 'POST',
            data: { type: "check_reg_code", cod: obj.value, s: "2" },
            dataType: 'html',
            async: false,
            success: function (data) {
                if (data != "1") {
                    Msg.className = tip_error;
                    Msg.innerHTML = "验证码不正确";

                    chk = false;
                }
                else {
                    Msg.className = tip_ok;
                    Msg.innerHTML = "填写正确";
                    chk = true;
                }
            }
        });
    }
    return chk;
}


/*手机必须先填写验证码能发送短信*/
function check_reg_code_m() {
    var chk = true;
    var obj = document.getElementById("reg_code_m");
    var Msg = document.getElementById("msg_" + obj.id);
    if (obj.value.replace(/(\s*$)/g, "") == "") {
        Msg.className = tip_notice;
        Msg.innerHTML = "请输入验证码！";
        chk = false;
    } else {
        $.ajax({
            url: '/user/controls/userdo.ashx',
            type: 'POST',
            data: { type: "check_reg_code", cod: obj.value, s: 2 },
            dataType: 'html',
            async: false,
            success: function (data) {
                if (data != "1") {
                    Msg.className = tip_error;
                    Msg.innerHTML = "验证码不正确";

                    chk = false;
                }
                else {
                    Msg.className = tip_ok;
                    Msg.innerHTML = "填写正确";
                    chk = true;
                }
            }
        });
    }
    return chk;
}

/*注册*/
//istype:注册类型{0：普通会员，1：经销商，2：供货商}
function user_register(objbut, cname, rname, checkemail, birth, tel, phone, fax, qq, address, postcode, serverid, IsMobileVerify, safepwd, areaa, istype, rucid, jgdmCheck, yyzzCheck, cardpicCheck) {
   
    $(objbut).val("正在提交中，请等待");
    $(objbut).attr("disabled", true);
    $(objbut).addClass("disabled");
    var chk = true;
    var cnamestr = "";
    var email = "";
    var rnamestr = "";
    var birthstr = "";
    var telstr = "";
    var phonestr = "";
    var faxstr = "";
    var qqstr = "";
    var addressstr = "";
    var postcodestr = "";
    var serveridstr = "";
    var serveridstr_safe = "";

    var rucidstr = ""; //身份证
    var jgdmstr = ""; //组织机构代码
    var yyzzstr = ""; //营业执照
    //注册用户类型
    var radiotype = 0;
    var safepwdstr = "";
    //用户名
    if (!user.check_reg_name()) {
        chk = false;
    }
    cnamestr = $("#reg_cname").val();
    /*公司名称*/
    if ($.trim(cname) == "1") {
        if (!check_reg_cname()) {
            chk = false;
        }
    }
    //地区
    if ($.trim(areaa) == "1") {
        if (!check_areaa()) { chk = false; }
    }

    if (!check_reg_pwd()) { chk = false; }
    if (!check_reg_pwdagain()) { chk = false; }

    //recommendName
    if (!check_recommendName(document.getElementById("recommendName"))) { chk = false; }

    //支付密码
    serveridstr_safe = $("#reg_safepwd").val();
    if ($.trim(safepwd) == "1") {
        if (!check_reg_safepwd()) { chk = false; }
        if (!check_reg_safepwdagion()) { chk = false; }
    }
    //eamil
    email = $("#reg_email").val();
    if ($.trim(checkemail) == "1") {
        if (!check_reg_email()) { chk = false; }
    }

    rnamestr = $("#reg_rname").val();
    if ($.trim(rname) == "1") {
        if (!check_reg_rname()) { chk = false; }
    }
    birthstr = $("#birth").val();
    //birth
    if ($.trim(birth) == "True") {
        if (!check_reg_birth()) { chk = false; }
    }

    telstr = $("#reg_utel").val();
    //tel
    if ($.trim(tel) == "1") {
        if (!check_utel()) { chk = false; }
    }

    phonestr = $("#umob").val();
    var isphone = (phonestr != "" && phonestr != undefined && phonestr != "undefined");
    if ($.trim(phone) == "1" || isphone) {
        if (!reg_tel.check_umob_reg(IsMobileVerify)) { chk = false; }
    }
    faxstr = $("#fax").val();
    //fax
    if ($.trim(fax) == "1") {
        if (!check_fax()) { chk = false; }
    }
    qqstr = $("#qq").val();
    //qq
    if ($.trim(qq) == "1") {
        if (!check_qq()) { chk = false; }
    }
    rucidstr = $("#reg_rucid").val();
    //UNO
    if ($.trim(rucid) == "1") {
        if (!check_reg_rucid()) { chk = false; }
    }

    addressstr = $("#address").val();
    //address
    if ($.trim(address) == "1") {
        if (!check_address()) { chk = false; }
    }
    postcodestr = $("#upost").val();
    //postcode
    if ($.trim(postcode) == "1") {
        if (!check_upost()) { chk = false; }
    }

    yyzzstr = $("#hideFiles").val();
    if ($.trim(yyzzCheck) == "1") {
        if (!CheckyyzzData()) { chk = false; }
    }
    var sfzstr = $("#hideFiles1").val();
    if ($.trim(cardpicCheck) == "1") {
        if (!ChecksfzData()) { chk = false; }
    }

    jgdmstr = $("#jgdm").val();
    //companno
    if ($.trim(jgdmCheck) == "1") {
        if (!check_jgdm()) { chk = false; }
    }
    //verify code
    // var trVerifyCode = $("#trVerifyCode");
    if (IsMobileVerify != "1") {
        if (!check_reg_code()) { chk = false; }
    }

    //serverid
    if ($.trim(serverid) == "1") {
        if (!check_serverid()) { chk = false; }
    }

    //是否勾选
    if (!agreeonProtocol()) { chk = false; }

    if (IsMobileVerify) {
        var Msg = document.getElementById("msg_txt_mobileverify");
        if ($.trim($("#txt_mobileverify_send").val()) != "1") {

            Msg.className = tip_notice;
            Msg.innerHTML = "手机校验码还未发送！";
            chk = false;
        }
        if ($.trim($("#txt_mobileverify").val()).length == 0) {
            Msg.className = tip_notice;
            Msg.innerHTML = "手机校验码不能为空！";
            chk = false;
        }
    }

    var request = GetRequest();
    var resultUri = request["resulturi"];
    if (chk) {
        $.ajax({
            url: '/user/controls/userdo.ashx',
            type: 'POST',
            async: false,
            data: {
                type: "user_register",
                regtype: 0,
                email: email,
                name: $("#reg_name").val(),
                pwd: $("#reg_pwd").val(),
                cname: cnamestr,
                rname: rnamestr,
                birth: birthstr,
                tel: telstr,
                phone: phonestr,
                fax: faxstr,
                qq: qqstr,
                address: addressstr,
                postcode: postcodestr,
                serverid: $("#txtserverid").val(),
                safepwd: serveridstr_safe,
                IsMobileVerify: IsMobileVerify,
                MobileVerify: $.trim($("#txt_mobileverify").val()),
                province: $("#Select1").val(),
                city: $("#Select2").val(),
                area: $("#Select3").val(),
                istype: istype,
                rucid: rucidstr,
                jgdm: jgdmstr,
                yyzz: yyzzstr,
                sfzstr: sfzstr,
                QR: $("#QR").val(),
                isforum: (getQueryString("isforum") == "true"),
                resultUri: resultUri
            },
            dataType: 'json',
            success: function (data) {
                if (data.IsSuccess) {
                    $("#regcontent").append("<div id='regsuccess' class='regsuccess'></div>");
                    Ecshop.Tool.Hint.Ok({
                        info: data.Message,
                        second: 3,
                        fn: function () {
                            if (data.RedirectUrl != undefined && data.RedirectUrl != "") {
                                location.href = "/user/reg_warn.aspx?u="+data.RedirectUrl;
                            }
                            else {
                                location.href = "/user/reg_warn.aspx?u='/index.html?t='" + (new Date()).getTime();
                            }
                        }
                    });
                }
                else {
                    Ecshop.Tool.Hint.Error({ info: data.Message, second: 3 });
                }
            }
        });
    }

    $(objbut).attr("disabled", false);
    $(objbut).val("立 即 注 册");
    $(objbut).removeClass("disabled");

}

//删除图片处理方法
function dlstItems_Command(obj, imgurl, fileload,hidid) {
    Ecshop.Tool.Hint.Confirm({
        title: confim_title,
        info: '是否确定要删除此文件，删除后将不能恢复!',
        fn: function(istrue) {
            if (istrue) {
                $.ajax({
                    type: "POST",
                    url: "/Upload.axd",
                    data: { action: "del", filename: Base32.encode(imgurl) },
                    dataType: "html",
                    success: function(data) {
                        if (data == "200") {
                            Ecshop.Tool.Hint.Ok({ info: "删除文件成功" });
                            $("#div_" + fileload).hide();
                            $("#" + fileload).show();
                            $("#" + hidid).val("");
                        } else {
                            Ecshop.Tool.Hint.Error({ info: "删除文件失败" });
                        }
                    },
                    error: function(data, status, e) {
                        Ecshop.Tool.Hint.Error({ info: "删除文件失败:" + e });
                    }
                });
            }
        }
    });
}

function initLoadControl(uploadbtn,img,hid,fn) {
    $('#' + uploadbtn).UploadOneImg({
        action: '/Upload.axd',
        accept: '(png|jpg|jpeg|JPG|JPEG|bmp|gif)$',
        placeholer: img,
        hiddenInput: hid,
        data: { max_file_size: 1000, upload_dir: "uploads/user/", no_thumb: true },
        onComplete: function (response, file) {
            onLoadSuccess(uploadbtn, hid, '/' + response);
            if (typeof (fn) == "function") {
                fn();
            }
        }
    });
}

function onLoadSuccess(id, hidid, response) {
    var uploadbtn = $("#" + id);
    var container = $("#div_" + id);
    container.find(".del").unbind();
    container.find(".del").click(function() {
        dlstItems_Command(this, response, id, hidid);
    });
    container.addClass("hover-box").show();
    uploadbtn.hide();
}

/*更换校验码*/
function update_verify(obj) {
    var numkey1 = Math.random();
    numkey1 = Math.round(numkey1 * 100000);
    obj.src += numkey1;
}

function onInitVerify(obj) {
    var numkey1 = Math.random();
    numkey1 = Math.round(numkey1 * 100000);
    obj.src += numkey1;
}

/*检查推荐人是否存在*/
function check_recommendName(obj) {
    if (obj == null || obj == undefined) {
        return true;
    }
    var recommendName = obj.value;
    var Msg = document.getElementById("msg_" + obj.id);
    var chk = true;

    var re = /^[\u4e00-\u9fa5a-zA-Z0-9_]{2,50}$/;

    if (recommendName.search(re) == -1) {
        var isrequired = obj.attributes["isrequired"].nodeValue;
        if (isrequired == "1" && recommendName.replace(/(\s*$)/g, "") == "") {
            Msg.className = tip_notice;
            Msg.innerHTML = $(obj).attr("placeholderinfo");
            chk = false;
        }
        else if (isrequired == "0" && recommendName.replace(/(\s*$)/g, "") == "") {
            chk = true;
        }
        else {
            Msg.className = tip_error;
            Msg.innerHTML = "中文/英文/数字/下滑线，长度2-50";
            chk = false;
        }

    } else {

        chk = true;
    }
    if (chk && recommendName.length > 0) {
        $.ajax({
            url: '/user/controls/userdo.ashx',
            type: 'POST',
            data: { type: "check_recommendName", username: recommendName },
            dataType: 'html',
            async: false,
            success: function (data) {
                $("#QR").val(data);
                if (data.length > 0) {
                    Msg.className = tip_ok;
                    Msg.innerHTML = "恭喜，可以使用";
                    chk = true;
                }
                else {
                    Msg.className = tip_error;
                    Msg.innerHTML = "抱歉，该用户名不存在";
                    chk = false;
                }
            }
        });
    }
    else {
        $("#QR").val("");
    }
    return chk;
}

function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
}