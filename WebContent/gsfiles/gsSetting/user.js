window.Ecshop = window.Ecshop || {};
function ChangetrType(type) {
    if (type == 1) {
        $('.trCards').show();
        $('.trother').hide();

    }
    if (type == 0) {
        $('.trother').show();
        $('.trCards').hide();
    }

}

function check_urename() {
    var Msg = document.getElementById("msg_urename");
    var chk = true;
    var re = /^[\u0391-\uFFE5\w]+$/;
    var urename = document.getElementById("urename").value;

    if (urename.replace(/(\s*$)/g, "") == "") {
        Msg.className = "d_err";
        Msg.innerHTML = "<b></b>请输入用户真实姓名！";
        chk = false;
    } else if (!re.test(urename)) {
        Msg.className = "d_err";
        Msg.innerHTML = "<b></b>真实姓名只能包括中文字、英文字母、数字和下划线！";
        chk = false;
    } else if (urename.length < 2 || urename.length > 20) {
        Msg.className = "d_err";
        Msg.innerHTML = "<b></b>真实姓名至少2个最多20个字符！";
        chk = false;
    } else {
        Msg.className = "d_ok";
        Msg.innerHTML = "<b></b>通过！";
        chk = true;
    }
    return chk;
}

function check_utel() {
    var Msg = document.getElementById("msg_utel");
    var chk = true;

    var re = /^((0\d{2,3})([-]|[—])?)?([1-9][0-9]{6,7})(([-]|[—])\d{1,4})?$/;
    var utel = document.getElementById("reg_utel").value;
    if (utel == null || $.trim(utel) == "") {
        Msg.className = "d_err";
        Msg.innerHTML = "<b></b>请输入座机号码！";
        chk = false;
    } else if (!re.test(utel)) {
        Msg.className = "d_err";
        Msg.innerHTML = "<b></b>座机格式不正确,如010-87654321！";
        chk = false;
    } else {
        Msg.className = "d_ok";
        Msg.innerHTML = "<b></b>通过！";
        chk = true;
    }
    return chk;
}
function check_umob(_userid) {
    var Msg = document.getElementById("msg_umob");
    var chk = true;
    var re = /^0?(1)[0-9]{10}$/;
    if (document.getElementById("umob").value.replace(/(\s*$)/g, "") == "") {
        Msg.className = "d_err";
        Msg.innerHTML = "<b></b>请输入手机号码！";
        chk = false;
    } else if (document.getElementById("umob").value.search(re) == -1) {
        Msg.className = "d_err";
        Msg.innerHTML = "<b></b>手机号码格式不正确！";
        chk = false;
    } else {
        $.ajax({
            url: '/admin/controls/userdo.ashx',
            async: false,
            type: 'POST',
            data: { type: "check_umob", mob: document.getElementById("umob").value, userid: _userid },
            dataType: 'html',
            error: function () { Ecshop.Tool.Hint.Warn({ info: '出现未知错误，请稍后重试。' }); },
            success: function (data) {
                if (data == "0") {
                    Msg.className = "d_ok";
                    Msg.innerHTML = "<b></b>通过！";
                    chk = true;
                }
                else {
                    Msg.className = "d_err";
                    Msg.innerHTML = "<b></b>抱歉，该手机已经被使用";
                    chk = false;
                }
            }
        });

    }
    return chk;
}
function check_uadd() {
    var Msg = document.getElementById("msg_uadd");
    var chk = true;
    var re = /^[\u0391-\uFFE5\w]+$/;
    var uadd = document.getElementById("uadd").value;

    if (uadd.replace(/(\s*$)/g, "") == "") {
        Msg.className = "d_err";
        Msg.innerHTML = "<b></b>请输入详细地址！";
        chk = false;
    }





    else if (uadd.length < 2 || uadd.length > 200) {
        Msg.className = "d_err";
        Msg.innerHTML = "<b></b>详细地址至少2个最多200个字符！";
        chk = false;
    } else {
        Msg.className = "d_ok";
        Msg.innerHTML = "<b></b>通过！";
        chk = true;
    }
    return chk;
}

function check_UserTbaoAccount() {

    if (document.getElementById("txtTaobaoName").value == "") {
        Ecshop.Tool.Hint.Warn({ info: '店铺名称不能为空！' });
        return false;
    }

    if (document.getElementById("txtTbaoAccount").value == "") {
        Ecshop.Tool.Hint.Warn({ info: '淘宝帐号不能为空！' });
        return false;
    }
    if (document.getElementById("txtAppKey").value == "") {
        Ecshop.Tool.Hint.Ok({ info: 'AppKey不能为空！' });
        return false;
    }
    if (document.getElementById("txtAppSecret").value == "") {
        Ecshop.Tool.Hint.Ok({ info: 'AppSecret不能为空！' });
        return false;
    }
    return true;

}
function check_upost() {
    var Msg = document.getElementById("msg_upost");
    var chk = true;
    var re = /^[0-9][0-9]{5}$/;
    if (document.getElementById("upost").value.replace(/(\s*$)/g, "") == "") {
        Msg.className = "d_err";
        Msg.innerHTML = "<b></b>请输入邮政编码！";
        chk = false;
    } else if (document.getElementById("upost").value.search(re) == -1) {
        Msg.className = "d_err";
        Msg.innerHTML = "<b></b>邮政编码格式不正确！";
        chk = false;
    } else {
        Msg.className = "d_ok";
        Msg.innerHTML = "<b></b>通过！";
        chk = true;
    }
    return chk;
}

//检查注册电子邮箱
function check_email_offer(userid) {

    var Msg = document.getElementById("msg_uemail");
    var chk = true;
    //    var re = /^([A-Za-z0-9])(\w)+@(\w)+(\.)(com|com\.cn|net|cn|net\.cn|org|vip|qq|qq\.com|biz|info|gov|gov\.cn|edu|edu\.cn|163|163\.com)/;
    var re = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (document.getElementById("uemail").value == "") {
        Msg.className = "d_err";
        Msg.innerHTML = "请输入电子邮箱地址！";
        chk = false;
    } else if (document.getElementById("uemail").value.search(re) == -1) {
        Msg.className = "d_err";
        Msg.innerHTML = "电子邮箱格式不正确,如xxx@163.com！";
        chk = false;
    } else {
        Msg.className = "d_ok";
        Msg.innerHTML = "填写正确！";
        chk = true;
    }
    if (chk) {
        $.ajax({
            url: '/user/controls/userdo.ashx',
            async: false,
            type: 'POST',
            data: { type: "check_reg_email_edit", email: $("#uemail").val(), userid: userid },
            dataType: 'html', //返回的数据是否支持html格式
            error: function () { Ecshop.Tool.Hint.Warn({ info: '出现未知错误，请稍后重试。' }); },
            success: function (data) {
                if (data == "0") {
                    Msg.className = "d_ok";
                    Msg.innerHTML = "恭喜，可以使用";
                    chk = true;
                }
                else {
                    Msg.className = "d_err";
                    Msg.innerHTML = "抱歉，该邮箱已经被注册";
                    chk = false;
                }
            }
        });
    }
    return chk;
}
function check_email_offer2(userid) {

    var Msg = document.getElementById("msg_uemail");
    var chk = true;
    //    var re = /^([A-Za-z0-9])(\w)+@(\w)+(\.)(com|com\.cn|net|cn|net\.cn|org|vip|qq|qq\.com|biz|info|gov|gov\.cn|edu|edu\.cn|163|163\.com)/;
    var re = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (document.getElementById("uemail").value == "") {
        Msg.className = "d_err";
        Msg.innerHTML = "必须输入E-Mail地址！";
        chk = false;
    } else if (document.getElementById("uemail").value.search(re) == -1) {
        Msg.className = "d_err";
        Msg.innerHTML = "电子邮箱格式不正确,如xxx@163.com！";
        chk = false;
    } else {
        Msg.className = "d_ok";
        Msg.innerHTML = "填写正确！";
        chk = true;
    }
    return chk;
}
function chk_updatebseinfo() {
    var _userid = $("#useridhid").val();
    var chk = true
    if (!check_urename()) { chk = false; }

    if ($("#reg_utel").val() != "") {
        if (!check_utel()) { chk = false; }
    }

    if ($("#uemail").val() != "") {
        if (!check_email_offer2(_userid)) { chk = false; }
    }
    if (!check_email_offer(_userid)) {
        chk = false;
    }
    if (!check_umob(_userid)) { chk = false; }
    if (!check_uadd()) { chk = false; }
    //if (!check_upost()) { chk = false; }
    
    var _sId = $("#txtserverid").val();

    if (_sId == null || _sId.length < 0) {
        if (!check_serverid()) { chk = false; }
    }

    if (!check_UCId()) { chk = false; }

    var yyzzstr = $("#hideFiles").val();
    var sfzstr = $("#hideFiles1").val();

    var rmark = $("#txtRemark").val();

    //======================仓库地址信息
    var _Txt_Lxr_N = $("#txtLxr_N").val();
    var _Txt_Area_N = $("#Select6").val();
    var _Txt_Address_N = $("#txtAddress_N").val();
    var _Txt_Phone_N = $("#txtPhone_N").val();
    var _Txt_Comany_N = $("#txtComany_N").val();
    var _Txt_Remarks_N = $("#txtRemarks_N").val();
    _Txt_Remarks_N = $.trim(_Txt_Remarks_N);
    if (_Txt_Remarks_N.length > 200)
    {
        Ecshop.Tool.Hint.Warn({ info: '最多输入200个字符!' });
        return;
    }
    //======================仓库地址信息
    if (rmark.length > 50) {
        Ecshop.Tool.Hint.Warn({ info: '备注长度超过限制。' });
        return;
    }

    if (chk) {
        var isck = 1;

        $.ajax({
            url: '/user/controls/userdo.ashx',
            type: 'POST',
            data: {
                type: "chk_updatebseinfo", urename: $("#urename").val(), utel: $("#reg_utel").val(), umob: $("#umob").val(), ufax: $("#ufax").val(),
                uadd: $("#uadd").val(), upost: $("#upost").val(), isck: isck, userid: _userid, uemail: $("#uemail").val(), ubirthday: $("#ubirthday").val(),
                companyname: $("#companyname").val(), qq: $("#qq").val(), serverid: $("#txtserverid").val(),
                ucId: $("#txtUCId").val(), remark: rmark, province: $("#Select1").val(), city: $("#Select2").val(), area: $("#Select3").val(),
                companyno: $("#txtcompanyno").val(), yyzz: yyzzstr, sfz: sfzstr,
                Lxr_N: _Txt_Lxr_N, Area_N: _Txt_Area_N, Address_N: _Txt_Address_N, Phone_N: _Txt_Phone_N, Comany_N: _Txt_Comany_N, Remarks_N: _Txt_Remarks_N
            },
            dataType: 'html',
            timeout: 1000,
            error: function () { Ecshop.Tool.Hint.Warn({ info: '出现未知错误，请稍后重试。' }); },
            success: function (data) {
                if (data == "1") {

                    Ecshop.Tool.Hint.Ok({ info: "修改成功", second: 1, fn: function () { window.location.href = window.location.href; } });
                }
                else {
                    Ecshop.Tool.Hint.Warn({ info: "操作失败！" });
                }
            }
        });
        return (true);
    }
    return (false);
}


function check_UCId() {
    var ucId = $("#txtUCId").val();
    if (ucId != "") {
        var Msg = $("#MsgUcId");


        var CId = /^[\d]{6}((19[\d]{2})|(200[0-8]))((0[1-9])|(1[0-2]))((0[1-9])|([12][\d])|(3[01]))[\d]{3}[0-9xX]$/;
        if (ucId.length != "" && !CId.test(ucId)) {
            $(Msg).removeAttr("class").addClass("d_err");
            $(Msg).html("请输入正确的身份证号码！");

            return false;
        } else {
            $(Msg).removeAttr("class").addClass("d_ok");
            $(Msg).html("<b></b>通过！");
        }
        return true;
    } else {
        return true;
    }
}

function check_oldpwd() {
    var Msg = document.getElementById("msg_oldpwd");
    var chk = true;

    if (document.getElementById("oldpwd").value.replace(/(\s*$)/g, "") == "") {
        Msg.className = "inline-tip error";
        Msg.innerHTML = "<b></b>旧密码必须填写！";
        chk = false;
    } else {
        //Msg.className = "inline-tip success";
        //Msg.innerHTML = "<b></b>通过！";
        chk = true;
    }
    if (chk) {
        $.ajax({
            url: '/user/controls/userdo.ashx',
            async: false,
            type: 'POST',
            data: { type: "check_oldpwd", oldpwd: $("#oldpwd").val(), userid: $("#useridhid").val() },
            dataType: 'html',
            error: function () { Ecshop.Tool.Hint.Warn({ info: '出现未知错误，请稍后重试。' }); },
            success: function (data) {
                if (data == "0") {
                    Msg.className = "inline-tip error";
                    Msg.innerHTML = "<b></b>旧密码不正确";
                    chk = false;
                }
                else {
                    Msg.className = "inline-tip success";
                    Msg.innerHTML = "<b></b>填写正确";
                    chk = true;
                }
            }
        });
    }
    return chk;
}

function check_newpwd() {
    var Msg = document.getElementById("msg_newpwd");
    var chk = true;


    if (document.getElementById("newpwd").value.replace(/(\s*$)/g, "") == "") {
        Msg.className = "inline-tip error";
        Msg.innerHTML = "<b></b>必须输入新密码！";
        chk = false;
    }

    else if ($("#newpwd").val().length < 6 || $("#newpwd").val().length > 20) {
        Msg.className = "inline-tip error";
        Msg.innerHTML = "<b></b>密码为6-20位字母/数字/其他符号的组合！";
        chk = false;
    } else {
        Msg.className = "inline-tip success";
        Msg.innerHTML = "<b></b>通过！";
        chk = true;
    }

    return chk;
}

function check_newpwd1() {
    var Msg = document.getElementById("msg_newpwd1");
    var chk = true;

    if (document.getElementById("cnewpwd").value.replace(/(\s*$)/g, "") == "") {
        Msg.className = "inline-tip error";
        Msg.innerHTML = "<b></b>请输入确认密码！";
        chk = false;
    } else if (document.getElementById("cnewpwd").value != document.getElementById("newpwd").value) {
        Msg.className = "inline-tip error";
        Msg.innerHTML = "<b></b>两次密码不一致！";
        chk = false;
    }
    else {
        Msg.className = "inline-tip success";
        Msg.innerHTML = "<b></b>通过！";
        chk = true;
    }
    return chk;
}

function chk_changepwd() {
    var chk = true
    if (!check_oldpwd()) { chk = false; }
    if (!check_newpwd()) { chk = false; }
    if (!check_newpwd1()) { chk = false; }

    if (chk) {
        $.ajax({
            url: '/user/controls/userdo.ashx',
            type: 'POST',
            data: {
                type: "chk_changepwd",
                oldpwd: $("#oldpwd").val(),
                newpwd: $("#newpwd").val(),
                userid: $("#useridhid").val()
            },
            dataType: 'json',
            timeout: 1000,
            error: function () {
                Ecshop.Tool.Hint.Warn({ info: '出现未知错误，请稍后重试。' });
            },
            success: function (data) {
                if (data.IsSuccess) {
                    Ecshop.Tool.Hint.Ok({
                        info: "修改成功,请重新登录",
                        fn: function () {
                            top.window.location.href = "/logout.aspx";
                        }
                    });
                } else {
                    Ecshop.Tool.Hint.Warn({ info: data.Message });
                }
            }
        });
        return (true);
    }
    return (false);
}


function del_fav_shop_class(id) {
    Ecshop.Tool.Hint.Confirm({
        title: '确认删除该分类吗？', info: '', showshade: true, fn: function (istrue) {
            if (istrue) {
                $.ajax({
                    url: '/user/controls/userdo.ashx',
                    async: false,
                    type: 'POST',
                    data: { type: "del_fav_shop_class", id: id },
                    dataType: 'html',
                    error: function () { Ecshop.Tool.Hint.Warn({ info: '出现未知错误，请稍后重试。' }); },
                    success: function (data) {
                        if (data == "1") {
                            Ecshop.Tool.Hint.Ok({ info: "删除成功", fn: function () { location.href = 'favclass.aspx'; } });

                        }
                        else {
                            Ecshop.Tool.Hint.Warn({ info: "删除失败" });
                        }
                    }
                });
            }
        }
    });
}

function del_UserTabaoAccount(id) {
    Ecshop.Tool.Hint.Confirm({
        title: '确认删除该帐号吗？', info: '', showshade: true, fn: function (istrue) {
            if (istrue) {
                $.ajax({
                    url: '/user/controls/userdo.ashx',
                    async: false,
                    type: 'POST',
                    data: { type: "del_UserTabaoAccount", id: id },
                    dataType: 'html',
                    error: function () { Ecshop.Tool.Hint.Warn({ info: '出现未知错误，请稍后重试。' }); },
                    success: function (data) {
                        if (data == "1") {
                            Ecshop.Tool.Hint.Ok({ info: "删除成功", fn: function () { location.href = '/usercenter/taobaoList.aspx'; } });;

                        }
                        else {
                            Ecshop.Tool.Hint.Warn({ info: "删除失败" });
                        }
                    }
                });
            }
        }
    });
}

function del_shopclass_p() {
    Ecshop.Tool.Hint.Confirm({
        title: '确认要删除当前选择的分类吗?\r\r删除后不能恢复！', info: '', showshade: true, fn:
            function (istrue) {
                if (istrue) {
                    var ids = "";
                    var idsobj = document.getElementsByName("piliangid");

                    for (var i = 0; i < idsobj.length; i++) {
                        if (idsobj[i].type == "checkbox" && idsobj[i].checked) {
                            ids += idsobj[i].value + ",";

                        }
                    }
                    $.ajax({
                        url: '/user/controls/userdo.ashx',
                        type: 'POST',
                        data: { type: "del_shopclass_p", ids: ids },
                        dataType: 'html',
                        timeout: 1000,
                        error: function () { Ecshop.Tool.Hint.Warn({ info: '出现未知错误，请稍后重试。' }); },
                        success: function (data) {
                            if (data == "none") {
                                Ecshop.Tool.Hint.Warn({ info: "请选择需要删除的数据" });

                            } else {
                                if (data == "1") {
                                    Ecshop.Tool.Hint.Ok({ info: "删除成功", fn: function () { location.href = 'favclass.aspx'; } });
                                }
                                else {
                                    Ecshop.Tool.Hint.Warn({ info: "操作失败，请重试！" });
                                }
                            }
                        }
                    });
                }
            }
    });
}

function addfavclass() {
    $(function () {
        cgjg.dialog.popup.init({
            width: 300,
            height: 150,
            title: "添加供货商分类",
            style: 'popup_grey',
            url: '/member/addfavclass.aspx'
        });
    });
}


function del_favproduct(pid, userid) {
    Ecshop.Tool.Hint.Confirm({
        title: '确认删除该收藏的商品吗？', info: '', showshade: true, fn: function (istrue) {
            if (istrue) {
                $.ajax({
                    url: '/user/controls/userdo.ashx',
                    async: false,
                    type: 'POST',
                    data: { type: "del_favproduct", pid: pid, userid: userid },
                    dataType: 'html',
                    error: function () { Ecshop.Tool.Hint.Warn({ info: '出现未知错误，请稍后重试。' }); },
                    success: function (data) {
                        if (data == "1") {
                            Ecshop.Tool.Hint.Ok({ info: "删除成功", fn: function () { location.href = 'myfavproducts.aspx'; } });
                        }
                        else {
                            Ecshop.Tool.Hint.Warn({ info: "删除失败" });
                        }
                    }
                });
            }
        }
    });
}

function del_favinfo_p() {
    Ecshop.Tool.Hint.Confirm({
        title: '确认要删除当前选择的信息吗?\r\r删除后不能恢复！', info: '', showshade: true, fn:
            function (istrue) {
                if (istrue) {
                    var ids = "";
                    var idsobj = document.getElementsByName("piliangid");

                    for (var i = 0; i < idsobj.length; i++) {
                        if (idsobj[i].type == "checkbox" && idsobj[i].checked) {
                            ids += idsobj[i].value + ",";

                        }
                    }
                    $.ajax({
                        url: '/user/controls/userdo.ashx',
                        type: 'POST',
                        data: { type: "del_favinfo_p", ids: ids },
                        dataType: 'html',
                        timeout: 1000,
                        error: function () { Ecshop.Tool.Hint.Warn({ info: '出现未知错误，请稍后重试。' }); },
                        success: function (data) {
                            if (data == "none") {
                                Ecshop.Tool.Hint.Warn({ info: "请选择需要删除的数据" });
                            } else {
                                if (data == "1") {
                                    Ecshop.Tool.Hint.Ok({ info: "删除成功", fn: function () { location.href = 'myfavcompany.aspx'; } });;

                                }
                                else {
                                    Ecshop.Tool.Hint.Warn({ info: "操作失败，请重试！" });
                                }
                            }
                        }
                    });
                }
            }
    });
}

function del_favp_p() {
    var ids = "";
    var idsobj = document.getElementsByName("piliangid");
    for (var i = 0; i < idsobj.length; i++) {
        if (idsobj[i].type == "checkbox" && idsobj[i].checked) {
            ids += idsobj[i].value + ",";
        }
    }
    if (ids == "" || ids == "-1,") {
        Ecshop.Tool.Hint.Warn({ info: "请选择需要删除的数据" });
        return false;
    }
    Ecshop.Tool.Hint.Confirm({
        title: '确认要删除当前选择的信息吗?\r\r删除后不能恢复！', info: '', showshade: true, fn: function (istrue) {
            if (istrue) {
                $.ajax({
                    url: '/user/controls/userdo.ashx',
                    type: 'POST',
                    data: { type: "del_favp_p", ids: ids },
                    dataType: 'html',
                    timeout: 1000,
                    error: function () { Ecshop.Tool.Hint.Warn({ info: '出现未知错误，请稍后重试。' }); },
                    success: function (data) {
                        if (data == "none") {
                            Ecshop.Tool.Hint.Warn({ info: "请选择需要删除的数据" });
                        } else {
                            if (data == "1") {
                                Ecshop.Tool.Hint.Ok({ info: "删除成功", fn: function () { location.href = 'myfavproducts.aspx'; } });

                            }
                            else {
                                Ecshop.Tool.Hint.Warn({ info: "操作失败，请重试！" });
                            }
                        }
                    }
                });
            }
        }
    });
}

function del_msg(id) {
    Ecshop.Tool.Hint.Confirm({
        title: '确认删除该信息吗？', info: '', showshade: true, fn: function (istrue) {
            if (istrue) {
                $.ajax({
                    url: '/user/controls/userdo.ashx',
                    async: false,
                    type: 'POST',
                    data: { type: "del_msg", id: id },
                    dataType: 'html',
                    error: function () { Ecshop.Tool.Hint.Warn({ info: '出现未知错误，请稍后重试。' }); },
                    success: function (data) {
                        if (data == "1") {
                            Ecshop.Tool.Hint.Ok({ info: "删除成功", fn: function () { location.href = 'message.aspx'; } });
                            var getcount = 0;
                            $.ajax({
                                url: '/user/controls/userdo.ashx',
                                type: 'POST',
                                data: { type: "get_msgcount" },
                                dataType: 'html',
                                async: false,
                                success: function (data) {
                                    getcount = data;
                                }
                            });
                            if (getcount > -1)
                                $(window.parent.document.body).find("#msgcount").html(getcount);
                            else
                                $(window.parent.document.body).find("#msgcount").html("0");
                        }
                        else if (data == "-1") {
                            Ecshop.Tool.Hint.Warn({ info: "该信息已被置为保留状态，不能删除" });
                        } else {
                            Ecshop.Tool.Hint.Warn({ info: "删除失败" });
                        }
                    }
                });
            }
        }
    });
}

function del_address(id) {
    Ecshop.Tool.Hint.Confirm({
        title: '确认删除该信息吗？', info: '', showshade: true, fn: function (istrue) {
            if (istrue) {
                $.ajax({
                    url: '/user/controls/userdo.ashx',
                    async: false,
                    type: 'POST',
                    data: { type: "del_address", id: id },
                    dataType: 'html',

                    success: function (data) {

                        if (data == "1") {
                            Ecshop.Tool.Hint.Ok({ info: "删除成功", fn: function () { location.href = 'addressmanager.aspx'; } });
                        }
                        else {
                            Ecshop.Tool.Hint.Warn({ info: "删除失败" });
                        }
                    }
                });
            }
        }
    });
}

function set_baoliu(id) {
    Ecshop.Tool.Hint.Confirm({
        title: '确认保留该信息吗？', info: '', showshade: true, fn: function (istrue) {
            if (istrue) {
                $.ajax({
                    url: '/user/controls/userdo.ashx',
                    async: false,
                    type: 'POST',
                    data: { type: "set_baoliu", id: id },
                    dataType: 'html',

                    success: function (data) {
                        if (data == "1") {
                            Ecshop.Tool.Hint.Ok({ info: "操作成功", fn: function () { location.href = 'message.aspx'; } });

                        }
                        else {
                            Ecshop.Tool.Hint.Warn({ info: "删除失败" });
                        }
                    }
                });
            }
        }
    });
}

function unset_baoliu(id) {
    Ecshop.Tool.Hint.Confirm({
        title: '确认取消保留该信息吗？', info: '', showshade: true, fn: function (istrue) {
            if (istrue) {
                $.ajax({
                    url: '/user/controls/userdo.ashx',
                    async: false,
                    type: 'POST',
                    data: { type: "unset_baoliu", id: id },
                    dataType: 'html',

                    success: function (data) {
                        if (data == "1") {
                            Ecshop.Tool.Hint.Ok({ info: "操作成功", fn: function () { location.href = 'message.aspx'; } });
                        }
                        else {
                            Ecshop.Tool.Hint.Warn({ info: "删除失败" });
                        }
                    }
                });
            }
        }
    });
}

function baoliu_p() {
    Ecshop.Tool.Hint.Confirm({
        title: '确认要操作当前选择的信息吗?', info: '', showshade: true, fn: function (istrue) {
            if (istrue) {
                var ids = "";
                var idsobj = document.getElementsByName("piliangid");

                for (var i = 0; i < idsobj.length; i++) {
                    if (idsobj[i].type == "checkbox" && idsobj[i].checked) {
                        ids += idsobj[i].value + ",";

                    }
                }
                $.ajax({
                    url: '/user/controls/userdo.ashx',
                    type: 'POST',
                    data: { type: "baoliu_p", ids: ids },
                    dataType: 'html',
                    timeout: 1000,

                    success: function (data) {
                        if (data == "none") {
                            Ecshop.Tool.Hint.Warn({ info: "请选择需要删除的数据" });
                        } else {
                            if (data == "1") {
                                Ecshop.Tool.Hint.Ok({ info: "操作成功", fn: function () { location.href = 'message.aspx'; } });
                            }
                            else {
                                Ecshop.Tool.Hint.Warn({ info: "操作失败，请重试！" });
                            }
                        }
                    }
                });
            }
        }
    });
}

function ubaoliu_p() {
    Ecshop.Tool.Hint.Confirm({
        title: '确认要操作当前选择的信息吗?', info: '', showshade: true, fn: function (istrue) {
            if (istrue) {
                var ids = "";
                var idsobj = document.getElementsByName("piliangid");

                for (var i = 0; i < idsobj.length; i++) {
                    if (idsobj[i].type == "checkbox" && idsobj[i].checked) {
                        ids += idsobj[i].value + ",";

                    }
                }
                $.ajax({
                    url: '/user/controls/userdo.ashx',
                    type: 'POST',
                    data: { type: "ubaoliu_p", ids: ids },
                    dataType: 'html',
                    timeout: 1000,
                    error: function () { Ecshop.Tool.Hint.Warn({ info: '出现未知错误，请稍后重试。' }); },
                    success: function (data) {
                        if (data == "none") {
                            Ecshop.Tool.Hint.Warn({ info: "请选择需要删除的数据" });
                        } else {
                            if (data == "1") {
                                Ecshop.Tool.Hint.Ok({ info: "操作成功", fn: function () { location.href = 'message.aspx'; } });;
                            }
                            else {
                                Ecshop.Tool.Hint.Warn({ info: "操作失败，请重试！" });
                            }
                        }
                    }
                });
            }
        }
    });
}

function del_msg_us_p() {
    var ids = "";
    var idsobj = document.getElementsByName("piliangid");
    for (var i = 0; i < idsobj.length; i++) {
        if (idsobj[i].type == "checkbox" && idsobj[i].checked) {
            ids += idsobj[i].value + ",";
        }
    }
    if (ids != "" && ids != "-1,") {
        Ecshop.Tool.Hint.Confirm({
            title: '确认要删除当前选择的信息吗?\r\r保留的信息不会被删除！', info: '', showshade: true, fn: function (istrue) {
                if (istrue) {
                    $.ajax({
                        url: '/user/controls/userdo.ashx',
                        type: 'POST',
                        data: { type: "del_msg_us_p", ids: ids },
                        dataType: 'html',
                        timeout: 1000,
                        error: function () { Ecshop.Tool.Hint.Warn({ info: '出现未知错误，请稍后重试。' }); },
                        success: function (data) {
                            if (data == "none") {
                                Ecshop.Tool.Hint.Warn({ info: "请选择需要删除的数据" });
                            } else {
                                if (data == "1") {
                                    Ecshop.Tool.Hint.Ok({ info: "操作成功", fn: function () { location.href = 'message.aspx'; } });
                                }
                                else {
                                    Ecshop.Tool.Hint.Warn({ info: "操作失败，请重试！" });
                                }
                            }
                        }
                    });
                }
            }
        });
    }
    else
        Ecshop.Tool.Hint.Warn({ info: "请选择需要删除的数据" });
}


function check_login_username() {
    var Msg = document.getElementById("msg_login_username");
    var chk = true;

    if (document.getElementById("usercontent_username").value.replace(/(\s*$)/g, "") == "") {
        Msg.className = "d_err";
        Msg.innerHTML = "<b></b>请输入登陆用户名！";
        chk = false;
    } else {
        Msg.className = "d_ok";
        Msg.innerHTML = "<b></b>通过！";
        chk = true;
    }
    return chk;
}


function check_login_pwd() {
    var Msg = document.getElementById("msg_login_pwd");
    var chk = true;

    if (document.getElementById("usercontent_pwd").value.replace(/(\s*$)/g, "") == "") {
        Msg.className = "d_err";
        Msg.innerHTML = "<b></b>请输入密码！";
        chk = false;
    } else {
        Msg.className = "d_ok";
        Msg.innerHTML = "<b></b>通过！";
        chk = true;
    }
    return chk;
}


function check_login_code() {
    var Msg = document.getElementById("msg_login_code");
    var chk = true;
    if (document.getElementById("usercode").value.replace(/(\s*$)/g, "") == "") {
        Msg.className = "d_err";
        Msg.innerHTML = "<b></b>请输入验证码！";
        chk = false;
    } else {
        Msg.className = "d_ok";
        Msg.innerHTML = "<b></b>通过！";
        chk = true;
    }
    return chk;
}


function user_login() {
    var chk = true
    if (!check_login_username()) { chk = false; }
    if (!check_login_pwd()) { chk = false; }
    if (!check_login_code()) { chk = false; }
    if (chk) {
        var chkRememberUsernames = 0;
        if (document.getElementById("chkRememberUsername").checked) {
            chkRememberUsernames = 1;
        }


        $.ajax({
            url: '/user/controls/userdo.ashx',
            type: 'POST',
            data: { type: "user_login", username: $("#usercontent_username").val(), pwd: $("#usercontent_pwd").val(), remberme: chkRememberUsernames, code: $("#usercode").val() },
            dataType: 'html',

            error: function () { Ecshop.Tool.Hint.Warn({ info: '出现未知错误，请稍后重试。' }); },
            success: function (data) {
                if (data == "none") {
                    Ecshop.Tool.Hint.Warn({ info: "请选择需要删除的数据" });
                } else {
                    if (data == "1") {
                        if ($.trim($(".ctl00_usercontent_resulturi").val()).length == 0) {
                            location.href = 'index.aspx';
                        }
                        else {
                            location.href = $(".ctl00_usercontent_resulturi").val();
                        }
                    }
                    else if (data == "-1") {
                        Ecshop.Tool.Hint.Warn({ info: "验证码输入错误！" });
                    }
                    else if (data == "2") {
                        Ecshop.Tool.Hint.Warn({ info: "用户名或密码错误，请重新登陆！" });
                    } else if (data == "3") {
                        $("#msg_login_code").attr("class", "d_err");
                        $("#msg_login_code").html("验证码错误！");
                    } else if (data == "4") {

                        location.href = '/admin/main.aspx';
                    } else if (data == "5") {
                        $("#msg_login_code").attr("class", "d_err");
                        $("#msg_login_code").html("用户被禁用！");
                    }
                    else {
                        Ecshop.Tool.Hint.Warn({ info: '出现未知错误，请重试。' });
                    }
                }
            }
        });
    } else {
        return;
    }
}

function user_b2blogin() {

    $.ajax({
        url: '/user/controls/userdo.ashx',
        type: 'POST',
        data: { type: "user_login", username: $("#username").val(), pwd: $("#pwd").val(), remberme: 0 },
        dataType: 'html',

        error: function () { Ecshop.Tool.Hint.Warn({ info: '出现未知错误，请稍后重试。' }); },
        success: function (data) {
            Ecshop.Tool.Hint.Warn({ info: data });
            if (data == "none") {
                Ecshop.Tool.Hint.Warn({ info: "请选择需要删除的数据" });
            } else {
                if (data == "1") {






                }
                else if (data == "-1") {
                    Ecshop.Tool.Hint.Warn({ info: "验证码输入错误！" });
                }
                else if (data == "2") {
                    Ecshop.Tool.Hint.Warn({ info: "用户名或密码错误，请重新登陆！" });
                } else {
                    Ecshop.Tool.Hint.Warn({ info: '出现未知错误，请重试。' });
                }
            }
        }
    });

}


function check_reg_name() {
    var Msg = document.getElementById("msg_reg_name");
    var chk = true;

    var re = /^[\u4e00-\u9fa5a-zA-Z0-9_]{2,50}$/;


    if (document.getElementById("reg_name").value.replace(/(\s*$)/g, "") == "") {
        Msg.className = "d_err";
        Msg.innerHTML = "<b></b>中文/英文/数字/下滑线，长度2-50";
        chk = false;
    }
    else if (document.getElementById("reg_name").value.length < 2) {
        Msg.className = "d_err";
        Msg.innerHTML = "<b></b>中文/英文/数字/下滑线，长度2-50";
        chk = false;
    } else if (document.getElementById("reg_name").value.search(re) == -1) {
        Msg.className = "d_err";
        Msg.innerHTML = "<b></b>中文/英文/数字/下滑线，长度2-50";
        chk = false;
    } else {
        Msg.className = "d_ok";
        Msg.innerHTML = "<b></b>通过！";
        chk = true;
    }
    if (chk) {
        $.ajax({
            url: '/user/controls/userdo.ashx',
            type: 'POST',
            data: { type: "check_reg_name", username: $("#reg_name").val(), id: "0" },
            dataType: 'html',
            async: false,
            success: function (data) {
                if (data == "0") {
                    Msg.className = "d_ok";
                    Msg.innerHTML = "<b></b>恭喜，可以使用";
                    chk = true;
                }
                else {
                    Msg.className = "d_err";
                    Msg.innerHTML = "<b></b>抱歉，该用户名已经被注册";
                    chk = false;
                }
            }
        });
    }
    return chk;
}

function check_reg_safepwd() {
    var Msg = document.getElementById("msg_reg_safepwd");
    var chk = true;

    var Password = document.getElementById("reg_safepwd").value;
    if (Password.replace(/(\s*$)/g, "") == "") {
        Msg.className = "d_err";
        Msg.innerHTML = "<b></b>必须输入支付安全密码！";
        chk = false;
    }

    else if (Password.length < 6 || Password.length > 20) {
        Msg.className = "d_err";
        Msg.innerHTML = "<b></b>安全密码为6-20位字母/数字/其他符号的组合！";
        chk = false;
    } else {


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

function check_reg_safepwdagion() {
    var Msg = document.getElementById("msg_reg_safepwdagion");
    var chk = true;
    var re = /^(\w){6,20}$/;

    if (document.getElementById("reg_safepwdagion").value.replace(/(\s*$)/g, "") == "") {
        Msg.className = "d_err";
        Msg.innerHTML = "<b></b>必须输入确认安全码密码！";
        chk = false;
    } else if (document.getElementById("reg_safepwdagion").value != document.getElementById("reg_safepwd").value) {
        Msg.className = "d_err";
        Msg.innerHTML = "<b></b>两次安全码密码不一致！";
        chk = false;
    } else {
        Msg.className = "d_ok";
        Msg.innerHTML = "<b></b>通过！";
        chk = true;
    }
    return chk;
}


function check_reg_pwd() {
    var Msg = document.getElementById("msg_reg_pwd");
    var chk = true;

    var Password = document.getElementById("reg_pwd").value;
    if (Password.replace(/(\s*$)/g, "") == "") {
        Msg.className = "d_err";
        Msg.innerHTML = "<b></b>必须输入注册密码！";
        chk = false;
    }

    else if (Password.length < 6 || Password.length > 20) {
        Msg.className = "d_err";
        Msg.innerHTML = "<b></b>密码为6-20位字母/数字/其他符号的组合！";
        chk = false;
    } else {


        if ($("#pwdmsg").html() != null) {
            Msg = document.getElementById("pwdmsg");
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


function check_reg_pwdagain() {
    var Msg = document.getElementById("msg_reg_pwdagain");
    var chk = true;
    var re = /^(\w){6,20}$/;

    if (document.getElementById("reg_pwdagion").value.replace(/(\s*$)/g, "") == "") {
        Msg.className = "d_err";
        Msg.innerHTML = "<b></b>必须输入确认密码！";
        chk = false;
    } else if (document.getElementById("reg_pwdagion").value != document.getElementById("reg_pwd").value) {
        Msg.className = "d_err";
        Msg.innerHTML = "<b></b>两次密码不一致！";
        chk = false;
    } else {
        Msg.className = "d_ok";
        Msg.innerHTML = "<b></b>通过！";
        chk = true;
    }
    return chk;
}


function check_reg_email() {
    var Msg = document.getElementById("msg_reg_email");
    var chk = true;

    var re = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (document.getElementById("reg_email").value.replace(/(\s*$)/g, "") == "") {
        Msg.className = "d_err";
        Msg.innerHTML = "<b></b>必须输入E-Mail地址！";
        chk = false;
    } else if (document.getElementById("reg_email").value.search(re) == -1) {
        Msg.className = "d_err";
        Msg.innerHTML = "<b></b>电子邮箱格式不正确！";
        chk = false;
    } else {
        Msg.className = "d_ok";
        Msg.innerHTML = "<b></b>通过！";
        chk = true;
    }
    if (chk) {
        $.ajax({
            url: '/user/controls/userdo.ashx',
            async: false,
            type: 'POST',
            data: { type: "check_reg_email", email: $("#reg_email").val() },
            dataType: 'html',
            error: function () { Ecshop.Tool.Hint.Warn({ info: '出现未知错误，请稍后重试。' }); },
            success: function (data) {
                if (data == "0") {
                    Msg.className = "d_ok";
                    Msg.innerHTML = "<b></b>恭喜，可以使用";
                    chk = true;
                }
                else {
                    Msg.className = "d_err";
                    Msg.innerHTML = "<b></b>抱歉，该邮箱已经被注册";
                    chk = false;
                }
            }
        });
    }
    return chk;
}


function check_reg_code() {
    var Msg = document.getElementById("msg_reg_code");
    var chk = true;

    if (document.getElementById("reg_code").value.replace(/(\s*$)/g, "") == "") {
        Msg.className = "d_err";
        Msg.innerHTML = "<b></b>请输入验证码！";
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
                    Msg.className = "d_err";
                    Msg.innerHTML = "<b></b>验证码不正确";

                    chk = false;
                }
                else {
                    Msg.className = "d_ok";
                    Msg.innerHTML = "<b></b>填写正确";
                    chk = true;
                }
            }
        });
    }
    return chk;
}
function check_reg_code_m() {
    var Msg = document.getElementById("msg_umob");
    var chk = true;

    if (document.getElementById("reg_code_m").value.replace(/(\s*$)/g, "") == "") {
        Msg.className = "d_err";
        Msg.innerHTML = "<b></b>请输入验证码！";
        chk = false;
    } else {
        $.ajax({
            url: '/user/controls/userdo.ashx',
            type: 'POST',
            data: { type: "check_reg_code", cod: document.getElementById("reg_code_m").value },
            dataType: 'html',
            async: false,
            success: function (data) {
                if (data != "1") {
                    Msg.className = "d_err";
                    Msg.innerHTML = "<b></b>验证码不正确";

                    chk = false;
                }
                else {
                    Msg.className = "d_ok";
                    Msg.innerHTML = "<b></b>填写正确";
                    chk = true;
                }
            }
        });
    }
    return chk;
}

function check_reg_cname() {
    var Msg = document.getElementById("msg_reg_cname");
    var chk = true;

    if (document.getElementById("reg_cname").value.replace(/(\s*$)/g, "") == "") {
        Msg.className = "d_err";
        Msg.innerHTML = "<b></b>请输入公司名称！";
        chk = false;
    } else {
        Msg.className = "d_ok";
        Msg.innerHTML = "<b></b>通过！";
        chk = true;
    }
    return chk;
}


function check_reg_rname() {
    var Msg = document.getElementById("msg_reg_rname");
    var chk = true;

    if (document.getElementById("reg_rname").value.replace(/(\s*$)/g, "") == "") {
        Msg.className = "d_err";
        Msg.innerHTML = "<b></b>请输入姓名！";
        chk = false;
    } else {
        Msg.className = "d_ok";
        Msg.innerHTML = "<b></b>通过！";
        chk = true;
    }
    return chk;
}

function check_jgdm() {
    var Msg = document.getElementById("msg_jgdm");
    var chk = true;

    if (document.getElementById("jgdm").value.replace(/(\s*$)/g, "") == "") {
        Msg.className = "d_err";
        Msg.innerHTML = "<b></b>请输入机构代码！";
        chk = false;
    } else {
        Msg.className = "d_ok";
        Msg.innerHTML = "<b></b>通过！";
        chk = true;
    }
    return chk;
}


function check_reg_rucid() {
    var Msg = document.getElementById("msg_reg_rucid");
    var chk = true;

    if (document.getElementById("reg_rucid").value.replace(/(\s*$)/g, "") == "") {
        Msg.className = "d_err";
        Msg.innerHTML = "<b></b>请输入身份证号！";
        chk = false;
    } else {
        var CId = /^[\d]{6}((19[\d]{2})|(200[0-8]))((0[1-9])|(1[0-2]))((0[1-9])|([12][\d])|(3[01]))[\d]{3}[0-9xX]$/;

        if (document.getElementById("reg_rucid").value.replace(/(\s*$)/g, "").length != "" && !CId.test(document.getElementById("reg_rucid").value.replace(/(\s*$)/g, ""))) {
            Msg.className = "d_err";
            Msg.innerHTML = "<b></b>请输入正确的身份证号！";
            chk = false;
        }
        else {
            Msg.className = "d_ok";
            Msg.innerHTML = "<b></b>通过！";
            chk = true;
        }
    }
    return chk;
}


function check_fax() {
    var Msg = document.getElementById("msg_reg_fax");
    var chk = true;

    if (document.getElementById("fax").value.replace(/(\s*$)/g, "") == "") {
        Msg.className = "d_err";
        Msg.innerHTML = "<b></b>请输入传真号码！";
        chk = false;
    } else {
        Msg.className = "d_ok";
        Msg.innerHTML = "<b></b>通过！";
        chk = true;
    }
    return chk;
}

function check_qq() {
    var Msg = document.getElementById("msg_reg_qq");
    var chk = true;

    if (document.getElementById("qq").value.replace(/(\s*$)/g, "") == "") {
        Msg.className = "d_err";
        Msg.innerHTML = "<b></b>请输入QQ号码！";
        chk = false;
    } else {
        Msg.className = "d_ok";
        Msg.innerHTML = "<b></b>通过！";
        chk = true;
    }
    return chk;
}

function check_address() {
    var Msg = document.getElementById("msg_reg_address");
    var chk = true;

    if (document.getElementById("address").value.replace(/(\s*$)/g, "") == "") {
        Msg.className = "<b></b>d_err";
        Msg.innerHTML = "请输入联系地址！";
        chk = false;
    } else {
        Msg.className = "d_ok";
        Msg.innerHTML = "<b></b>通过！";
        chk = true;
    }
    return chk;
}

function check_reg_birth() {
    var Msg = document.getElementById("msg_reg_birth");
    var chk = true;

    if (document.getElementById("birth").value.replace(/(\s*$)/g, "") == "") {
        Msg.className = "d_err";
        Msg.innerHTML = "<b></b>请选择出生日期！";
        chk = false;
    } else {
        Msg.className = "d_ok";
        Msg.innerHTML = "<b></b>通过！";
        chk = true;
    }
    return chk;
}


function check_serverid() {
    var chk = true;
    var Msg = document.getElementById("msg_txtserverid");
    var operserverid = $("#txtserverid").val();
    var msCon = "销售专员编号";


    var IsZJj = $("#txtIsZjj").val();
    if (IsZJj == "True" || IsZJj == "1") {
        msCon = "易购码";
    }

    if (document.getElementById("txtserverid").value.replace(/(\s*$)/g, "") == "") {
        Msg.className = "d_err";
        Msg.innerHTML = "<b></b>请输入" + msCon + "！";
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
                    Msg.className = "d_err";
                    Msg.innerHTML = "<b></b>" + msCon + "不存在！";

                    chk = false;
                }
                else {
                    Msg.className = "d_ok";
                    Msg.innerHTML = "<b></b>填写正确！";

                    chk = true;
                }
            }
        });
    }
    return chk;
}

function check_zfb() {
    var chk = true;
    var Msg = document.getElementById("msg_txtzfb");
    var operserverid = $("#txtzfb").val();
    var msCon = "支付宝帐号";



    if (document.getElementById("txtzfb").value.replace(/(\s*$)/g, "") == "") {
        Msg.className = "d_err";
        Msg.innerHTML = "<b></b>请输入" + msCon + "！";
        chk = false;
    }
    else {
        Msg.className = "d_ok";
        Msg.innerHTML = "<b></b>填写正确！";

        chk = true;
    }

    return chk;
}

function check_areaa() {

    var chk = true;
    var Msg = document.getElementById("msg_reg_Area");
    if ($("#Select3").val() == "") {
        Msg.className = "d_err";
        Msg.innerHTML = "<b></b>请选择所在地区！";
        chk = false;
    }
    else {
        Msg.className = "d_ok";
        Msg.innerHTML = "<b></b>填写正确！";

        chk = true;
    }
    return chk;

}


function check_umob_reg() {
    var Msg = document.getElementById("msg_umob");
    var chk = true;
    var re = /^0?(1)[0-9]{10}$/;
    if (document.getElementById("umob").value.replace(/(\s*$)/g, "") == "") {
        Msg.className = "d_err";
        Msg.innerHTML = "请输入手机号码！";
        chk = false;
    } else if (document.getElementById("umob").value.search(re) == -1) {
        Msg.className = "d_err";
        Msg.innerHTML = "请输入正确的11位手机号码！";
        chk = false;
    } else {
        $.ajax({
            url: '/admin/controls/userdo.ashx',
            async: false,
            type: 'POST',
            data: { type: "check_umob_userreg", mob: $("#umob").val() },
            dataType: 'html',
            error: function () { Ecshop.Tool.Hint.Warn({ info: '出现未知错误，请稍后重试。' }); },
            success: function (data) {
                if (data == "0") {
                    Msg.className = "d_ok";
                    Msg.innerHTML = "通过！";
                    chk = true;
                }
                else {
                    Msg.className = "d_err";
                    Msg.innerHTML = "抱歉，该手机已经被使用";
                    chk = false;
                }
            }
        });
    }
    return chk;
}


function ChecksfzData() {
    var chk = true;
    var Msg = document.getElementById("msg_cardpic");
    var pic = $("#hideFiles1").val();

    if (pic == null || pic == "") {


        Msg.className = "d_err";
        Msg.innerHTML = "请上传身份证照图片文件!";
        chk = false;
    }



    else {
        Msg.className = "d_ok";
        Msg.innerHTML = "通过！";
        chk = true;
    }
    return chk;
}

function CheckyyzzData() {
    var chk = true;
    var Msg = document.getElementById("msg_yyzz");
    var pic = $("#hideFiles").val();

    if (pic == null || pic == "") {






        Msg.className = "d_err";
        Msg.innerHTML = "请上传营业执照图片文件!";
        chk = false;
    }



    else {
        Msg.className = "d_ok";
        Msg.innerHTML = "通过！";
        chk = true;
    }
    return chk;
}


function user_register(cname, rname, checkemail, birth, tel, phone, fax, qq, address, postcode, serverid, IsMobileVerify, safepwd, areaa, istype, rucid, jgdmCheck, yyzzCheck, cardpicCheck) {
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

    var rucidstr = "";
    var jgdmstr = "";
    var yyzzstr = "";

    var radiotype = 0;
    var safepwdstr = "";

    if ($.trim(rname) == "1") {
        if (!check_reg_name()) {
            chk = false;
        }
    }

    if ($.trim(areaa) == "1") {
        if (!check_areaa()) { chk = false; }
    }

    if (!check_reg_pwd()) { chk = false; }
    if (!check_reg_pwdagain()) { chk = false; }

    serveridstr_safe = $("#reg_safepwd").val();
    if ($.trim(safepwd) == "1") {
        if (!check_reg_safepwd()) { chk = false; }
        if (!check_reg_safepwdagion()) { chk = false; }
    }
    email = $("#reg_email").val();
    if ($.trim(checkemail) == "1") {
        if (!check_reg_email()) { chk = false; }
    }
    cnamestr = $("#reg_cname").val();
    if ($.trim(cname) == "1") {
        if (!check_reg_cname()) { chk = false; }
    }
    rnamestr = $("#reg_rname").val();
    if ($.trim(rname) == "1") {
        if (!check_reg_rname()) { chk = false; }
    }
    birthstr = $("#birth").val();
    if ($.trim(birth) == "1") {
        if (!check_reg_birth()) { chk = false; }
    }

    telstr = $("#reg_utel").val();
    if ($.trim(tel) == "1") {
        if (!check_utel()) { chk = false; }
    }

    phonestr = $("#umob").val();
    var isphone = (phonestr != "" && phonestr != undefined && phonestr != "undefined");
    if ($.trim(phone) == "1" || isphone) {
        if (!check_umob_reg()) { chk = false; }
    }
    faxstr = $("#fax").val();
    if ($.trim(fax) == "1") {
        if (!check_fax()) { chk = false; }
    }
    qqstr = $("#qq").val();
    if ($.trim(qq) == "1") {
        if (!check_qq()) { chk = false; }
    }
    rucidstr = $("#reg_rucid").val();
    if ($.trim(rucid) == "1") {
        if (!check_reg_rucid()) { chk = false; }
    }

    addressstr = $("#address").val();
    if ($.trim(address) == "1") {
        if (!check_address()) { chk = false; }
    }
    postcodestr = $("#upost").val();
    if ($.trim(postcode) == "1") {
        if (!check_upost()) { chk = false; }
    }

    serveridstr = $("#txtserverid").val();
    if (serverid.trim() == "1") {
        if (!check_serverid()) { chk = false; }
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
    if ($.trim(jgdmCheck) == "1") {
        if (!check_jgdm()) { chk = false; }
    }

    if (!check_reg_code()) { chk = false; }







    var _sId = $("#txtserverid").val();
    if (_sId != null && _sId.length > 0) {
        if (!check_serverid()) { chk = false; }
    }

    if (IsMobileVerify) {
        if ($.trim($("#txt_mobileverify_send").val()) != "1") {
            Ecshop.Tool.Hint.Warn({ info: "手机校验码还未发送！" });
            return;
        }
        if ($.trim($("#txt_mobileverify").val()).length == 0) {
            Ecshop.Tool.Hint.Warn({ info: "手机校验码不能为空！" });
            return;
        }
    }
    if (chk) {

        $.ajax({
            url: '/user/controls/userdo.ashx',
            type: 'POST',
            data: {
                type: "user_register", regtype: 0, email: email, name: $("#reg_name").val(), pwd: $("#reg_pwd").val(),
                code: $("#reg_code").val(), cname: cnamestr, rname: rnamestr, birth: birthstr, tel: telstr, phone: phonestr, fax: faxstr,
                qq: qqstr, address: addressstr, postcode: postcodestr, serverid: $("#txtserverid").val(), safepwd: serveridstr_safe, IsMobileVerify: IsMobileVerify, MobileVerify: $.trim($("#txt_mobileverify").val()), province: $("#Select1").val(), city: $("#Select2").val(), area: $("#Select3").val(), istype: istype, rucid: rucidstr, jgdm: jgdmstr, yyzz: yyzzstr, sfzstr: sfzstr
                , QR: $("#QR").val()
            },
            dataType: 'html',


            success: function (data) {
                if (data == "1") {

                    $("#regcontent").append("<div id='regsuccess' class='regsuccess'></div>");
                    timer = setTimeout(function () {
                        location.href = '/';
                    }, 500);
                }
                else if (data == "-999") {

                    timer = setTimeout(function () {
                        location.href = 'user/SendQR.aspx' + location.search;
                    }, 500);

                }
                else if (data == "-1") {
                    Ecshop.Tool.Hint.Warn({ info: "验证码输入错误！" });
                }
                else if (data == "-2") {
                    Ecshop.Tool.Hint.Warn({ info: "手机校验码输入不正确！" });
                }
                else if (data == "-3") {

                    Ecshop.Tool.Hint.Warn({ info: "抱歉，该用户名已经被注册！" });
                }
                else if (data == "-4") {


                    Ecshop.Tool.Hint.Warn({ info: "抱歉，该邮箱已经被注册！" });
                }
                else if (data == "-5") {


                    Ecshop.Tool.Hint.Warn({ info: "抱歉，该手机号已经被注册!" });
                }
                else {
                    Ecshop.Tool.Hint.Warn({ info: "注册失败，请检查帐号密码！" });
                }
            }
        });
        return (true);
    }
    return (false);
}


function h5reg() {

}


function server_register() {

    var chk = true;
    if (!check_reg_name()) { chk = false; }
    if (!check_reg_pwd()) { chk = false; }
    if (!check_reg_pwdagain()) { chk = false; }
    if (!check_reg_email()) { chk = false; }
    if (!check_reg_rname()) { chk = false; }
    if (!check_umob_reg()) { chk = false; }
    if (!check_reg_code()) { chk = false; }
    if (!check_zfb()) { chk = false; }
    if (chk) {

        $.ajax({
            url: '/user/controls/userdo.ashx',
            type: 'POST',
            data: {
                type: "server_register", user: $("#reg_name").val(), pwd: $("#reg_pwd").val(), alipay: $("#txtzfb").val(), rname: $("#reg_rname").val(),
                umob: $("#umob").val(), email: $("#reg_email").val(), userimg: $("#userimg").attr("src"), sPtype: $("#selRtpye").val(), remarks: $("#txtRemarks").val()
            },
            dataType: 'html',


            success: function (data) {
                if (data == "1") {

                    $("#regcontent").append("<div id='regsuccess' class='regsuccess'></div>");
                    timer = setTimeout(function () {
                        Ecshop.Tool.Hint.Warn({ info: "注册成功，您的帐号需要通过管理员审核，请耐心等待，我们将通过发送电子邮件的方式告知您审核结果。" });
                        location.href = 'index.aspx';
                    }, 1000);
                }
                else if (data == "-1") {
                    Ecshop.Tool.Hint.Warn({ info: "验证码输入错误！" });
                }

                else if (data == "1") {

                    Ecshop.Tool.Hint.Warn({ info: "抱歉，该用户名已经被注册！" });
                }
                else if (data == "2") {


                    Ecshop.Tool.Hint.Warn({ info: "抱歉，该邮箱已经被注册！" });
                }
                else if (data == "3") {


                    Ecshop.Tool.Hint.Warn({ info: "抱歉，该手机号已经被注册!" });
                }
                else {
                    Ecshop.Tool.Hint.Warn({ info: "注册失败，请检查帐号密码！" });
                }
            }
        });
        return (true);
    }
    return (false);
}


function showmesg(str) {
    var isIE = navigator.userAgent.toLowerCase().indexOf("msie") != -1;
    if (!isIE) {
        Ecshop.Tool.Hint.Warn({ info: str });
    } else {
        if (document.readyState == "complete") {
            Ecshop.Tool.Hint.Warn({ info: str });
        }
        else {
            document.onreadystatechange = function () {
                if (document.readyState == "complete") {
                    Ecshop.Tool.Hint.Warn({ info: str });
                }
            }
        }
    }
}

function del_commnet_us_p() {
    Ecshop.Tool.Hint.Confirm({
        title: '确认要删除当前选择的信息吗?\r\r保留的信息不会被删除！', info: '', showshade: true, fn: function (istrue) {
            if (istrue) {
                var ids = "";
                var idsobj = document.getElementsByName("piliangid");

                for (var i = 0; i < idsobj.length; i++) {
                    if (idsobj[i].type == "checkbox" && idsobj[i].checked) {
                        ids += idsobj[i].value + ",";

                    }
                }
                $.ajax({
                    url: '/user/controls/userdo.ashx',
                    type: 'POST',
                    data: { type: "del_commnet_us_p", ids: ids },
                    dataType: 'html',
                    timeout: 1000,
                    error: function () { Ecshop.Tool.Hint.Warn({ info: '出现未知错误，请稍后重试。' }); },
                    success: function (data) {
                        if (data == "none") {
                            Ecshop.Tool.Hint.Warn({ info: "请选择需要删除的数据" });
                        } else {
                            if (data == "1") {
                                Ecshop.Tool.Hint.Warn({ info: "操作完成！" });
                                location.href = 'p_comment.aspx';
                            }
                            else {
                                Ecshop.Tool.Hint.Warn({ info: "操作失败，请重试！" });
                            }
                        }
                    }
                });
            }
        }
    });
}

function del_bance_us_p() {
    Ecshop.Tool.Hint.Confirm({
        title: '确认要删除当前选择的信息吗?\r\r保留的信息不会被删除！', info: '', showshade: true, fn: function (istrue) {
            if (istrue) {
                var ids = "";
                var idsobj = document.getElementsByName("piliangid");

                for (var i = 0; i < idsobj.length; i++) {
                    if (idsobj[i].type == "checkbox" && idsobj[i].checked) {
                        ids += idsobj[i].value + ",";

                    }
                }
                $.ajax({
                    url: '/user/controls/userdo.ashx',
                    type: 'POST',
                    data: { type: "del_bance_us_p", ids: ids },
                    dataType: 'html',
                    timeout: 1000,
                    error: function () { Ecshop.Tool.Hint.Warn({ info: '出现未知错误，请稍后重试。' }); },
                    success: function (data) {
                        if (data == "none") {
                            Ecshop.Tool.Hint.Warn({ info: "请选择需要删除的数据" });
                        } else {
                            if (data == "1") {
                                Ecshop.Tool.Hint.Warn({ info: "操作完成！" });
                                location.href = 'myblance.aspx';
                            }
                            else {
                                Ecshop.Tool.Hint.Warn({ info: "操作失败，请重试！" });
                            }
                        }
                    }
                });
            }
        }
    });
}

function pices(o) {
    var pice = o.value.replace(/^[0-9]+\.?[0-9]{0,2}$/, '');
    if (pice.length > 0) {
        o.value = "";
    }
}

function chk_charge(url) {
    var userid = $("#useridhid").val();
    var chargenums = parseFloat($("#chargenum").val());
    if (isNaN(chargenums)) {
        chargenums = 0;
    }
    var paytype = $("input[name='paytype']:checked").val();

    if (paytype == null || paytype == ""){
        Ecshop.Tool.Hint.Warn({ info: "请选择支付方式" });
        return;
    }
    
    if (paytype == "9918") {
        var cardNo0 = $("#txtCardsNO").val();
        var cardNo1 = $("#txtCardsNO1").val();
        var cardNo2 = $("#txtCardsNO2").val();
        var cardNo3 = $("#txtCardsNO3").val();
        var cardPwd = $("#txtCardsPwd").val();

        if (cardNo0 == "" || cardNo1 == "" || cardNo1 == "" || cardNo1 == "" || cardPwd == ""){
            Ecshop.Tool.Hint.Warn({ info: "充值卡卡号和密码不能为空！" });
            return;
        }

        Ecshop.Tool.Hint.Confirm({
            title: '确认要用充值卡充值吗？',
            info: '',
            showshade: true,
            fn: function (istrue) {
                if (istrue) {
                    $.ajax({
                        url: '/user/controls/userdo.ashx',
                        type: 'POST',
                        data: {
                            type: "chk_charge",
                            chargenums: chargenums,
                            paytype: paytype,
                            userid: userid,
                            CarNo: cardNo0 + cardNo1 + cardNo2 + cardNo3,
                            CarPwd: cardPwd
                        },
                        dataType: 'html',
                        success: function (data) {
                            if (data != "0") {
                                if (data.indexOf('/') != -1) {
                                    location.href = data;
                                }
                                else if (data.indexOf("充值成功") != -1) {
                                    Ecshop.Tool.Hint.Ok({
                                        info: data,
                                        fn: function () {
                                            location.href = url;
                                        }
                                    });
                                }
                                else {
                                    Ecshop.Tool.Hint.Warn({ info: data });
                                }
                            } else {
                                Ecshop.Tool.Hint.Warn({ info: '异常' });
                            }
                        }
                    });
                }
            }
        });
    } else {
        if (chargenums <= 0) {
            Ecshop.Tool.Hint.Warn({ info: "请填写大于0的充值金额" });
            return;
        }

        chk_payEvent();
    }
}

function chk_charge2(url) {
    var userid = $("#useridhid").val();
    var chargenums = $("#chargenum").val();
    var paytype = $("input[name='paytype']:checked").val();
    if (($("#txtCardsNO").val() == "" || $("#txtCardsPwd").val() == "") && paytype == "9918") {
        Ecshop.Tool.Hint.Warn({ info: "充值卡卡号和密码不能为空！" });
    }
    else if ((chargenums == null || chargenums == "" || chargenums == "0") && paytype != "9918") {
        Ecshop.Tool.Hint.Warn({ info: "请填写大于0的充值金额" });
    }
    else if (paytype == null || paytype == "") {

        Ecshop.Tool.Hint.Warn({ info: "请选择支付方式" });
    } else {
        if (paytype == "9918") {
            Ecshop.Tool.Hint.Confirm({
                title: '确认要用充值卡充值吗？', info: '', showshade: true, fn: function (istrue) {
                    if (istrue) {
                        chk_payEvent(url);
                    }
                    else {
                        return;
                    }
                }
            });
        }
        else {
            chk_payEvent(url);
        }

    }
}

function chk_payEvent(url) {
    var userid = $("#useridhid").val();
    var chargenums = $("#chargenum").val();
    var paytype = $("input[name='paytype']:checked").val();

    $.ajax({
        url: '/user/controls/userdo.ashx',
        type: 'POST',
        data: {
            type: "chk_charge",
            chargenums: chargenums,
            paytype: paytype,
            userid: userid,
            CarNo: $("#txtCardsNO").val() + $("#txtCardsNO1").val() + $("#txtCardsNO2").val() + $("#txtCardsNO3").val(),
            CarPwd: $("#txtCardsPwd").val()
        },
        dataType: 'html',
        success: function (data) {
            if (data != "0") {
                if (data.indexOf('/') != -1) {
                    //$("#simulation").attr("href", data);
                    //document.getElementById("simulation").click();
                    top.window.location.href = data;

                }
                else if (data.indexOf("充值成功") != -1) {
                    Ecshop.Tool.Hint.Ok({
                        info: data,
                        fn: function () {
                            location.href = url;
                        }
                    });
                }
                else {
                    Ecshop.Tool.Hint.Warn({
                        info: data,
                        fn: function () {
                            location.href = "myblance.aspx";
                        }
                    });

                }
            } else {
                Ecshop.Tool.Hint.Warn({ info: '充值失败：数据异常！' });
            }
        }
    });
}
function change_backway() {
    var backway = $("#backway").val();
    if (backway == '1') {
        $("#remark").show();
    } else {
        $("#remark").hide();
    }
}

function backbill_ok2(orderid, goodsid, t) {
    Ecshop.Tool.Hint.Confirm({
        title: '确认进行退货申请吗？', info: '', showshade: true, fn: function (istrue) {
            if (istrue) {
                var backway = $("#backway").val();
                var buyermemos = $("#buyermemo").val();
                var count = $("#txtcount").val();
                if (parseInt(count) > 0) {
                    if (check_buyermemo() && check_count($("#txtcount"))) {
                        $.ajax({
                            url: '/user/controls/userdo.ashx',
                            async: false,
                            type: 'POST',
                            data: { type: "request_back_bill2", orderid: orderid, backway: backway, buyermemo: buyermemos, g: goodsid, c: count },
                            dataType: 'html',
                            error: function () { Ecshop.Tool.Hint.Warn({ info: '出现未知错误，请稍后重试。' }); },
                            success: function (data) {
                                if (data == "1") {
                                    Ecshop.Tool.Hint.Warn({ info: "申请提交成功" });
                                    var d = new Date().getTime();
                                    if (t == "0")
                                        parent.location.href = "/pay/confirmgoods.aspx?o=" + orderid + "&__d=" + d + "#datainfo";
                                    else if (t == "1") {
                                        var url = "/usercenter/orderquery.aspx?o=" + orderid + "&__d=" + d + "#datainfo";

                                        parent.location.href = url;
                                    }
                                }
                                else {
                                    Ecshop.Tool.Hint.Warn({ info: "申请提交失败" });
                                }
                            }
                        });
                    }
                }
            }
        }
    });
}

function membersendgoods(id, t, _t) {
    var dlycorp = $("#txtdlycorp").val();
    var dlyno = $("#txtdlyno").val();
    $.ajax({
        url: '/user/controls/userdo.ashx',
        async: false,
        type: 'POST',
        data: { type: "membersendgoods", id: id, dlycorp: dlycorp, dlyno: dlyno, st: t },
        dataType: 'html',
        error: function () { Ecshop.Tool.Hint.Warn({ info: '出现未知错误，请稍后重试。' }); },
        success: function (data) {
            if (data == "1") {
                Ecshop.Tool.Hint.Warn({ info: "提交成功" });

                var d = new Date().getTime();
                if (_t == "0") {
                    if (t == 1)
                        parent.location.href = "/user/requestbackgoods.aspx?__d=" + d;
                    else if (t == 2)
                        parent.location.href = "/user/requestchangegoods.aspx?__d=" + d;
                }
                else if (_t == "1") {
                    if (t == 1)
                        parent.location.href = "/userCenter/requestbackgoods.aspx?__d=" + d;
                    else if (t == 2)
                        parent.location.href = "/userCenter/requestchangegoods.aspx?__d=" + d;
                }
            }
            else {
                Ecshop.Tool.Hint.Warn({ info: "提交失败" });
            }
        }
    });
}


function changegoods_ok2(orderid, goodsid, t) {
    Ecshop.Tool.Hint.Confirm({
        title: '确认进行换货申请吗？', info: '', showshade: true, fn: function (istrue) {
            if (istrue) {
                var buyermemo = $("#buyermemo").val();
                var count = $(".clQty").val();
                if (parseInt(count) > 0) {
                    if (check_buyermemo() && check_count($("#txtcount"))) {
                        $.ajax({
                            url: '/user/controls/userdo.ashx',
                            async: false,
                            type: 'POST',
                            data: { type: "change_goods2", orderid: orderid, buyermemo: buyermemo, g: goodsid, c: count },
                            dataType: 'html',
                            error: function () { Ecshop.Tool.Hint.Warn({ info: '出现未知错误，请稍后重试。' }); },
                            success: function (data) {
                                if (data == "1") {
                                    Ecshop.Tool.Hint.Warn({ info: "申请提交成功" });
                                    var d = new Date().getTime();
                                    if (t == "0")
                                        parent.location.href = "/pay/confirmgoods.aspx?o=" + orderid + "&__d=" + d + "#datainfo";
                                    else if (t == "1") {
                                        var url = "/usercenter/orderquery.aspx?o=" + orderid + "&__d=" + d + "#datainfo";

                                        parent.location.href = url;
                                    }
                                }
                                else {
                                    Ecshop.Tool.Hint.Warn({ info: "申请提交失败" });
                                }
                            }
                        });
                    }
                }
            }
        }
    });
}

function check_stuantime() {
    var chk;
    var Msg = $("#msg_ubirthday");
    var obj = $("#ubirthday");
    if (obj.val() == "") {
        Msg.className = "d_err";
        Msg.innerHTML = "";
        chk = false;
    } else {
        Msg.className = "d_ok";
        Msg.innerHTML = "通过！";
        chk = true;
    }
    return chk;
}


function delete_orderuploadfile(orderid, file) {
    Ecshop.Tool.Hint.Confirm({
        title: '确认删除该附件吗？', info: '', showshade: true, fn: function (istrue) {
            if (istrue) {
                $.ajax({
                    url: '/user/controls/userdo.ashx',
                    async: false,
                    type: 'POST',
                    data: { type: "delete_orderuploadfile", orderid: orderid, f: file },
                    dataType: 'html',
                    error: function () { Ecshop.Tool.Hint.Warn({ info: '出现未知错误，请稍后重试。' }); },
                    success: function (data) {
                        if (data == "1") {
                            Ecshop.Tool.Hint.Warn({ info: "删除成功！" });
                        }
                        else {
                            Ecshop.Tool.Hint.Warn({ info: "删除失败" });
                        }
                        location.href = 'wait_buyer_pay.aspx';
                    }
                });
            }
        }
    });
}

function selectproductAll(e) {
    if (e.attr("checked")) {
        $(".productcheck").attr("checked", true);
    }
    else {
        $(".productcheck").removeAttr("checked");
    }
}

function selectAll(f, mode) {
    if (mode == true) {
        for (i = 0; i < f.length; i++) {
            if (f.elements[i].type == "checkbox") {
                f.elements[i].checked = true;
            }
        }
    }
    else {
        for (i = 0; i < f.length; i++) {
            if (f.elements[i].type == "checkbox") {
                f.elements[i].checked = false;
            }
        }
    }
}
function CheckIntByOrder(obj, fn) {

    var re = /^([0-9]{0,5})$/;
    if (!re.test(obj.value)) {
        if (typeof (fn) == 'function') {
            fn(obj);
        }
        return false;
    }
    if (Number($(obj).val()) > Number($(obj).attr("maxcount"))) {
        $(obj).val($(obj).attr("maxcount"));
        Ecshop.Tool.Hint.Error({ info: "库存不足，当前库存：" + ($.trim($(obj).attr("maxcount")).length == 0 || $(obj).attr("maxcount") == undefined ? "0" : $(obj).attr("maxcount")) + "" });

    }
    return true;
}

function SetSelectCookie(t, isquote) {
    var url = isquote ? "/cart/list.aspx?quote=quote" : "/cart/list.aspx";
    if ($("input[name='productcheck']:checked").length == 0) {
        if (t == 0) {
            Ecshop.Tool.Hint.Error({ info: "未选择任何数据" });
            return;
        }
        else {
            if ($("#quoteNum").text() != "0") {
                top.window.location.href = url;
                return false;
            }
            else {
                Ecshop.Tool.Hint.Error({ info: "未选择任何数据" });
                return;
            }
        }
    }
    var counts = "";
    var pkey = "";
    var gkey = "";
    var ismsg = false;
    $("input[name='productcheck']:checked").each(function () {
        var pid = $(this).attr("id").replace("productcheck_", "");
        var pcount = 0;
        $(".productnum_" + pid).each(function (i, e) {
            var goodid = $(e).attr("goodsid");
            var count = $(e).val();

            var UnitType = $(".radio_" + goodid + ":checked").val();
            if (UnitType == 1) {
                var conver = Math.floor($("#hidden_" + goodid).val());

                count += Math.floor(count) * conver;
            }
            if (count != "" && count != undefined && count != "0") {
                if (counts.length == 0) {
                    counts += count;
                    pkey += pid;
                    gkey += goodid;
                }
                else {
                    counts += "," + count;
                    pkey += "," + pid;
                    gkey += "," + goodid;
                }
                pcount = pcount + 1;
            }
        });
        if (pcount == 0) {
            ismsg = true;
            return;
        }
    });
    if (counts.length == 0 || ismsg) {
        if (t == 0) {
            Ecshop.Tool.Hint.Error({ info: "请输入您购买商品的数量" });

            return;
        }
        else {
            if ($("#quoteNum").text() != "0") {
                top.window.location.href = url;
                return false;
            }
            else {
                Ecshop.Tool.Hint.Error({ info: "请输入您购买商品的数量" });
                return;
            }
        }
    }
    var dataCache = '';
    if (isquote)
        dataCache = "c=" + counts + "&p=" + pkey + "&g=" + gkey + "&type=addcart&u=1";
    else
        dataCache = "c=" + counts + "&p=" + pkey + "&g=" + gkey + "&type=addcart&u=0";
    $.ajax({
        type: "POST",
        url: "/controls/CartOrderHandler.ashx",
        data: dataCache,
        dataType: "json",
        success: function (data) {
            if (t == 0) {

                if (data.iCookie == 0) {
                    $("#quoteNum").html(data.ct);
                    Ecshop.Tool.Hint.Error({ info: "添加失败!" });
                }
                else if (data.iCookie == 1) {
                    $("#quoteNum").html(data.ct);
                    $(top.window.document).find("#quoteNum").html(data.ct);
                    Ecshop.Tool.Hint.Ok({ info: "加入成功!" });
                }
            }
            else {

                if (data.iCookie == 0) {
                    $("#quoteNum").html(data.ct); $(top.window.document).find("#quoteNum").html(data.ct);
                    Ecshop.Tool.Hint.Error({ info: "操作失败，请稍后重试!" });
                }
                else if (data.iCookie == 1) {
                    var url = isquote ? "/cart/list.aspx?quote=quote" : "/cart/list.aspx"
                    $("#quoteNum").html(data.ct); $(top.window.document).find("#quoteNum").html(data.ct);
                    Ecshop.Tool.Hint.Ok({ info: "操作成功!", second: 1, fn: function () { top.window.location.href = url; } });
                }
            }
        }
    });
}
function buildingorder(orderid) {
    Ecshop.Tool.Hint.Confirm({
        title: '确认将该报价单转换成订单吗！', info: '', showshade: true, fn: function (istrue) {
            if (istrue) {
                $.ajax({
                    type: "POST",
                    url: "/controls/proudct.ashx",
                    data: "orderid=" + orderid + "&type=buildingorder",
                    dataType: "json",
                    success: function (data) {
                        if (data.success) {
                            top.window.location.href = data.url;
                        }
                        else
                            Ecshop.Tool.Hint.Error({ info: data.msg });
                    }
                });
            }
        }
    });
}
function buildingorder2(orderid) {
    Ecshop.Tool.Hint.Confirm({
        title: '确认将该报价单转换成订单吗！', info: '', showshade: true, fn: function (istrue) {
            if (istrue) {
                $.ajax({
                    type: "POST",
                    url: "/controls/proudct.ashx",
                    data: "orderid=" + orderid + "&type=buildingorder",
                    dataType: "json",
                    success: function (data) {
                        if (data.success) {
                            window.location.href = "/userCenter/myorder.aspx?status=WAIT_BUYER_PAY";
                        }
                        else
                            Ecshop.Tool.Hint.Error({ info: data.msg });
                    }
                });
            }
        }
    });
}
function deletequote(orderid) {
    Ecshop.Tool.Hint.Confirm({
        title: '确认取消该报价单吗？\r\r取消后该报价单将不存在！', info: '', showshade: true, fn: function (istrue) {
            if (istrue) {
                $.ajax({
                    type: "POST",
                    url: "/user/controls/UserQuote.ashx",
                    data: "orderid=" + orderid + "&type=deletequote",
                    dataType: "json",
                    success: function (data) {
                        if (data.success) {
                            top.window.location.href = top.window.location.href;
                        }
                        else
                            Ecshop.Tool.Hint.Error({ info: data.msg });

                    }
                });
            }
        }
    });
}
function deletequote2(orderid) {
    Ecshop.Tool.Hint.Confirm({
        title: '确认取消该报价单吗？\r\r取消后该报价单将不存在！', info: '', showshade: true, fn: function (istrue) {
            if (istrue) {
                $.ajax({
                    type: "POST",
                    url: "/user/controls/UserQuote.ashx",
                    data: "orderid=" + orderid + "&type=deletequote",
                    dataType: "json",
                    success: function (data) {
                        if (data.success) {
                            window.location.href = window.location.href;
                        }
                        else
                            Ecshop.Tool.Hint.Error({ info: data.msg });
                    }
                });
            }
        }
    });
}
function exportQuote(type, orderid) {
    $("#downloadfile").attr("src", "/user/exportquote.aspx?type=" + type + "&orderid=" + orderid);
}

function nonoticeCk(userid) {
    $.ajax({
        url: '/user/controls/userdo.ashx',
        async: false,
        type: 'POST',
        data: { type: "nonoticeCk", userid: userid },
        dataType: 'html',

        success: function (data) {
            if (data == "1") {

            }
            else {
                Ecshop.Tool.Hint.Warn({ info: "失败" });
            }
        }
    });
}




function check_oldsafepwd() {
    var Msg = document.getElementById("msg_oldsafepwd");
    $.ajax({
        url: '/user/controls/userdo.ashx',
        async: false,
        type: 'POST',
        data: { type: "check_oldsafepwd", oldpwd: $("#oldsafepwd").val(), userid: $("#Hidden1").val() },
        dataType: 'html',
        error: function () { Ecshop.Tool.Hint.Warn({ info: '出现未知错误，请稍后重试。' }); },
        success: function (data) {
            if (data == "0") {
                Msg.className = "inline-tip error";
                Msg.innerHTML = "旧安全码不正确";
                chk = false;
            }
            else {
                Msg.className = "inline-tip success";
                Msg.innerHTML = "填写正确";
                chk = true;
            }
        }
    });
    return chk;
}
function check_newsafepwd() {
    var Msg = document.getElementById("msg_newsafepwd");
    var chk = true;


    if (document.getElementById("newsafepwd").value.replace(/(\s*$)/g, "") == "") {
        Msg.className = "inline-tip error";
        Msg.innerHTML = "必须输入新支付密码！";
        chk = false;
    }

    else if ($("#newsafepwd").val().length < 6 || $("#newsafepwd").val().length > 20) {
        Msg.className = "inline-tip error";
        Msg.innerHTML = "安全码为6-20位字母/数字/其他符号的组合！";
        chk = false;
    } else {
        Msg.className = "inline-tip success";
        Msg.innerHTML = "通过！";
        chk = true;
    }


    return chk;
}
function check_newsafepwd1() {
    var Msg = document.getElementById("msg_newsafepwd1");
    var chk = true;

    if (document.getElementById("newsafepwd1").value.replace(/(\s*$)/g, "") == "") {
        Msg.className = "inline-tip error";
        Msg.innerHTML = "请输入确认支付密码！";
        chk = false;
    } else if (document.getElementById("newsafepwd1").value != document.getElementById("newsafepwd").value) {
        Msg.className = "inline-tip error";
        Msg.innerHTML = "两次支付密码不一致！";
        chk = false;
    }
    else {
        Msg.className = "inline-tip success";
        Msg.innerHTML = "通过！";
        chk = true;
    }
    return chk;
}

function chk_changesafepwd() {
    var chk = true
    if (!check_oldsafepwd()) { chk = false; }
    if (!check_newsafepwd()) { chk = false; }
    if (!check_newsafepwd1()) { chk = false; }

    if (chk) {
        chk = false;
        $.ajax({
            url: '/user/controls/userdo.ashx',
            type: 'POST',
            data: { type: "chk_changesafepwd", newpwd: $("#newsafepwd").val(), userid: $("#Hidden1").val() },
            dataType: 'html',
            timeout: 1000,
            error: function () { Ecshop.Tool.Hint.Warn({ info: '出现未知错误，请稍后重试。' }); },
            success: function (data) {
                if (data == "1") {

                    Ecshop.Tool.Hint.Ok({ info: "修改成功", fn: function () { location.href = location.href; } });;
                }
                else {
                    Ecshop.Tool.Hint.Warn({ info: "操作失败！" });
                }
            }
        });
        return (true);
    }
    return (false);
}
function del_blance(delid) {
    Ecshop.Tool.Hint.Confirm({
        title: '是否确认删除！', info: '', showshade: true, fn: function (istrue) {
            if (istrue) {
                $.ajax({
                    url: '/user/controls/userdo.ashx',
                    type: 'POST',
                    data: { type: "del_blance", id: delid },
                    dataType: 'html',
                    timeout: 1000,
                    success: function (data) {
                        if (data == "1") {
                            Ecshop.Tool.Hint.Warn({ info: "删除成功！" });
                            window.location.href = window.location.href;
                        }
                        else {
                            Ecshop.Tool.Hint.Warn({ info: "删除失败！" });
                        }
                    }
                });
            }
        }
    });
}

function check_buyermemo() {
    var chk = true;
    var buyermemo = $("#buyermemo").val().replace(/(^\s*)|(\s*$)/g, "");

    if (buyermemo.length > 100) {
        Ecshop.Tool.Hint.Warn({ info: "备注信息不能超过100个字符！" });
        chk = false;
    }
    return chk;
}

function check_count(obj) {
    var tv = $(obj).attr("tv");
    var v = $(obj).val();
    var p = $(obj).attr("p");
    var oldtotalprice = $(obj).attr("t");

    if (CheckNumber(v)) {
        $(obj).select();
        Ecshop.Tool.Hint.Warn({ info: "数量只能输入正整数！" });
        $("#total_price").html(oldtotalprice);
        return false;
    } else if (parseInt(v) > parseInt(tv)) {
        Ecshop.Tool.Hint.Warn({ info: "操作的数量不能大于已发货的数量！" });
        $(obj).select();
        $("#total_price").html(oldtotalprice);
        return false;
    } else if (parseInt(v) < 1) {
        Ecshop.Tool.Hint.Warn({ info: "操作的数量不能小于1！" });
        $(obj).val(1);
        $("#total_price").html(oldtotalprice);
        return false;
    }
    else {
        var totalprice = parseFloat(p) * parseInt(v);
        $("#total_price").html(totalprice.toFixed(2));
        return true;
    }
}

function CheckNumber(obj) {
    var re = /^[1-9]*[1-9][0-9]*$/;
    return !re.test(obj);
}

Ecshop.Quantity = {

    CheckIntByOrder: function (_this) {
        var Value = $(_this);

        var ProductId = Value.attr("pid");

        var IsInt = /^[0-9]*[0-9][0-9]*$/;

        if (Value.val() != "") {
            if (!IsInt.test(Value.val())) {
                Ecshop.Tool.Hint.Warn({ info: "只能输入正整数！" });
                $(_this).val("0");
            }
            else {
                if (Math.floor(Value.val()) < 0) {
                    Ecshop.Tool.Hint.Warn({ info: '最小只能输入0！' });
                    Value.val("0");
                }
            }
        }
        var GoodsId = Value.attr("goodsid");
        if (Value.val() == "0")
            $(".TotalPrice_" + GoodsId).html("0.00");
        else {
            var offerid = Value.attr("offerid");
            if (parseInt(offerid) > 0) {
                $("#productcheck_" + ProductId).attr("checked", true);
            } else {
                $.ajax({
                    url: '/controls/CartOrderHandler.ashx',
                    type: 'POST',
                    dataType: 'json',
                    data: { type: 'checkproduct', p: ProductId, g: GoodsId, c: Value.val() },
                    success: function (data) {
                        if (data.iCookie != 1) {
                            Ecshop.Tool.Hint.Error({ info: "当前商品的库存为" + data.ct + ",不能购买！" });

                            $(_this).val("0");
                            $("#productcheck_" + ProductId).attr("checked", false);
                        } else {
                            $("#productcheck_" + ProductId).attr("checked", true);
                        }
                    }
                });
            }
        }
    },
    CalculationUnit: function (ProductId, _Input, GoodsId) {
        var unitId = "#unit_" + GoodsId;
        var hiddenId = "#hidden_" + GoodsId;
        var UnitType = $(".radio_" + GoodsId + ":checked").val();
        if (UnitType != 0 && UnitType != 1) {
            hiddenId += "_" + UnitType;
        }

        var value = $(_Input).val();
        if (typeof ($(hiddenId).val()) != "undefined" && $(hiddenId).val() != "" && $(hiddenId).val() != "0") {
            var dy = "1";
            var dyString = "";

            var dy1 = "0";
            var dy1String = "";

            var dy2 = "0";
            var dy2String = "";

            var dy3 = "0";
            var dy3String = "";

            if ($("#hidden_" + GoodsId) != undefined) {
                dy1 = $("#hidden_" + GoodsId).val();
                dy1String = $("#hidden_" + GoodsId).attr("bigunit");
            }
            if ($("#hidden_" + GoodsId + "_2") != undefined) {
                dy2 = $("#hidden_" + GoodsId + "_2").val();
                dy2String = $("#hidden_" + GoodsId + "_2").attr("bigunit");
            }
            if ($("#hidden_" + GoodsId + "_3") != undefined) {
                dy3 = $("#hidden_" + GoodsId + "_3").val();
                dy3String = $("#hidden_" + GoodsId + "_3").attr("bigunit");
            }


            var unit = $(hiddenId).attr("unit");
            dyString = unit;


            var conver = $(hiddenId).val();
            var kconver = 0;
            if (Math.floor(value) == 0) {
                value = 1;
            }
            if (Math.floor(value) >= Math.floor(conver) || (UnitType == 1 || UnitType == 2 || UnitType == 3)) {

                if (UnitType == 1) {
                    value = Math.floor(Math.floor(value) * Math.floor(dy1));
                    $(unitId).html(dy1String);
                }
                if (UnitType == 2) {
                    value = Math.floor(Math.floor(value) * Math.floor(dy2));
                    $(unitId).html(dy2String);
                }
                if (UnitType == 3) {
                    value = Math.floor(Math.floor(value) * Math.floor(dy3));
                    $(unitId).html(dy3String);
                }
                var bigunit = $(hiddenId).attr("bigunit");

                var dy3val = "0";
                if (Math.floor(dy3) != 0) {
                    dy3val = Math.floor(Math.floor(value) / Math.floor(dy3));
                    value = Math.floor(Math.floor(value) % Math.floor(dy3));
                }

                var dy2val = "0";
                if (Math.floor(dy2) != 0) {
                    dy2val = Math.floor(Math.floor(value) / Math.floor(dy2));
                    value = Math.floor(Math.floor(value) % Math.floor(dy2));
                }

                var dy1val = "0";
                if (Math.floor(dy1) != 0) {
                    dy1val = Math.floor(Math.floor(value) / Math.floor(dy1));
                    value = Math.floor(Math.floor(value) % Math.floor(dy1));
                }

                var dyval = "0";
                if (Math.floor(dy) != 0) {
                    dyval = Math.floor(Math.floor(value) / Math.floor(dy));
                }
            }
            else {
                $(unitId).html(dyString);
            }
        }
        Ecshop.Quantity.UnitPrice(GoodsId);
    },
    SetSelectCookie: function (n, isquote) {
        var ProductId = "";
        var Count = "";
        var GoodsId = "";
        $(".productcheck").each(function (i, _e) {
            if ($(_e).attr("checked")) {

                var PId = $(this).val();
                $(".productnum_" + PId).each(function (i, _this) {
                    var Value = $(_this);
                    if (Value.val() != 0) {
                        ProductId += PId + ",";
                        var gid = Value.attr("goodsid");

                        GoodsId += gid + ",";

                        var hiddenId = "#hidden_" + gid;

                        var UnitType = $(".radio_" + gid + ":checked").val();
                        if (UnitType != 0 && UnitType != 1) {
                            hiddenId += "_" + UnitType;
                        }
                        if (UnitType == 1 || UnitType == 2 || UnitType == 3) {
                            var conver = Math.floor($(hiddenId).val());

                            Count += Math.floor(Value.val()) * conver + ",";
                        } else {

                            Count += Value.val() + ",";
                        }
                    }
                });
            }
        });

        if (GoodsId != "") {
            $.ajax({
                url: '/controls/CartOrderHandler.ashx',
                type: 'POST',
                dataType: 'json',
                data: { type: 'addCart', p: ProductId, g: GoodsId, c: Count, u: isquote == false ? 0 : 1 },
                success: function (data) {
                    if (isquote == false) {
                        if (data.iCookie == 1) {
                            Ecshop.Tool.Hint.Ok({ info: "加入购物车成功！", fn: function () { } });
                        }
                        else {
                            Ecshop.Tool.Hint.Error({ info: '加入购物车失败！' });
                        }
                    }
                    else {
                        if (data.iCookie == 1) {
                            Ecshop.Tool.Hint.Ok({ info: "加入报价单成功！" });
                        }
                        else {
                            Ecshop.Tool.Hint.Error({ info: '加入报价单失败！' });
                        }
                    }
                }
            });
        }
        else {
            if (isquote == false) {
                Ecshop.Tool.Hint.Error({ info: '请勾选加入购物车的商品，且数量不能为0！' });
            }
            else {
                Ecshop.Tool.Hint.Error({ info: '请勾选加入报价单的商品，且数量不能为0！' });
            }
        }
    },


    AddOrderToCookie: function (orderid) {
        var ProductId = "";
        var Count = "";
        var GoodsId = "";
        var flag = false;
        $.ajax({
            url: '/controls/CartOrderHandler.ashx',
            type: 'POST',
            dataType: 'json',
            async: false,
            data: { type: 'getorderitems', OrderId: orderid },
            success: function (data) {
                if (data.Status == 1) {
                    ProductId = data.ProductIds;
                    GoodsId = data.GoodsId;
                    Count = data.Qty;
                    flag = true;
                }
            }
        });

        if (flag) {
            $.ajax({
                url: '/controls/CartOrderHandler.ashx',
                type: 'POST',
                dataType: 'json',
                async: false,
                data: { type: 'addCart', p: ProductId, g: GoodsId, c: Count, u: 0 },
                success: function (data) {
                    if (data.iCookie == 1) {
                        location.href = '/cart/list.aspx?group=nogp';
                    }
                    else {
                        Ecshop.Tool.Hint.Error({ info: '加入购物车失败！' });
                    }

                }
            });
        }
        else {
            Ecshop.Tool.Hint.Error({ info: '未知错误！' });

        }
    },

    UnitPrice: function (GoodsId) {

        var hiddenId = "#hidden_" + GoodsId;
        if (typeof ($(hiddenId).val()) != "undefined") {

            var UnitType = $(".radio_" + GoodsId + ":checked").val();
            if (UnitType != 0 && UnitType != 1) {
                hiddenId += "_" + UnitType;
            }

            var conver = Math.floor($(hiddenId).val());

            if (UnitType == 1 || UnitType == 2 || UnitType == 3) {
                Ecshop.Quantity.BigUnitPrice(GoodsId, conver);
            }

            else {
                Ecshop.Quantity.MallUnitPrice(GoodsId, conver);
            }
        }
        else {
            Ecshop.Quantity.MallUnitPrice(GoodsId, 1);
        }
    },

    BigUnitPrice: function (GoodsId, conver) {
        var promotionsprice = 0;
        var Price = 0;
        var radio_ = ".radio_" + GoodsId + ":checked";

        var TotalsCount = Math.floor($("#productnum_" + GoodsId).val());
        if (Math.floor($("#productnum_" + GoodsId).val()) == 0) {
            TotalsCount = 1;
        }

        Price = $(radio_).attr("tax");
        var Countconver = 1;
        var dy = 1;
        var proID = $(radio_).attr("pid");
        $.ajax({
            url: '/user/controls/UserQuote.ashx',
            type: 'POST',
            async: false,
            dataType: 'json',
            data: { type: 'GetPrice', pId: proID, pCount: Math.floor(Price) * TotalsCount, gId: GoodsId },
            success: function (data) {
                if (data != null && data != undefined && data.promotionsprice != null && data.promotionsprice != undefined) {

                    promotionsprice = data.promotionsprice;
                    if (parseFloat(promotionsprice) != 0) {
                        Price = promotionsprice;
                    }
                    else
                        Price = $("#productnum_" + GoodsId).attr("price");
                } else
                    Price = $("#productnum_" + GoodsId).attr("price");
            }
        });
        dy = Math.floor($(radio_).attr("price"));
        $(".UnitPrice_" + GoodsId).html(parseFloat(Price).toFixed(2));


        TotalsCount = Math.floor($("#productnum_" + GoodsId).val()) * dy;
        Price = parseFloat(Price) * 100;
        Ecshop.Quantity.Wholesale(Price, TotalsCount, GoodsId, 1, promotionsprice);
    },

    MallUnitPrice: function (GoodsId, conver) {
        var promotionsprice = 0;
        var Price = 0;
        var radio_ = ".radio_" + GoodsId + ":checked";
        var TotalsCount = Math.floor($("#productnum_" + GoodsId).val());
        if (Math.floor($("#productnum_" + GoodsId).val()) == 0) {
            TotalsCount = 1;
        }
        var Countconver = 1;
        var proID = $(radio_).attr("pid");
        $.ajax({
            url: '/user/controls/UserQuote.ashx',
            type: 'POST',
            async: false,
            dataType: 'json',
            data: { type: 'GetPrice', pId: proID, pCount: TotalsCount, gId: GoodsId },
            success: function (data) {
                if (data != null && data != undefined && data.promotionsprice != null && data.promotionsprice != undefined) {

                    promotionsprice = data.promotionsprice;
                    if (parseFloat(promotionsprice) != 0) {
                        Price = promotionsprice;
                    }
                    else
                        Price = $("#productnum_" + GoodsId).attr("price");
                } else
                    Price = $("#productnum_" + GoodsId).attr("price");
            }
        });


        $(".UnitPrice_" + GoodsId).html(parseFloat(Price).toFixed(2));
        $(".sUnitPrice_" + GoodsId).html(Price);
        Price = parseFloat(Price) * 100;
        Ecshop.Quantity.Wholesale(Price, $("#productnum_" + GoodsId).val(), GoodsId, 1, promotionsprice);
    },
    Wholesale: function (Price, TotalsCount, GoodsId, n, promotionsprice) {
        if (Math.floor(TotalsCount) > 0) {
            var BrandId = $("#productnum_" + GoodsId).attr("b");
            var ClassId = $("#productnum_" + GoodsId).attr("c");
            var usablerange = $("#productnum_" + GoodsId).attr("usablerange");
            var wsid = $("#productnum_" + GoodsId).attr("wsid");

            var infos = "";
            if (usablerange == "1") {
                $(".productnum").each(function (i, _this) {
                    var info = "";
                    var Value = $(_this);
                    var this_wsid = Value.attr("wsid");
                    if (this_wsid == wsid && Value.val() != 0) {
                        var gid = Value.attr("goodsid");
                        info += gid + ":";
                        info += $(".UnitPrice_" + gid).attr("price") + ":";
                        var hiddenId = "#hidden_" + gid;

                        var UnitType = $(".radio_" + gid + ":checked").val();
                        if (UnitType != 0 && UnitType != 1) {
                            hiddenId += "_" + UnitType;
                        }
                        if (UnitType == 1 || UnitType == 2 || UnitType == 3) {
                            var conver = Math.floor($(hiddenId).val());

                            info += Math.floor(Value.val()) * conver + "$";
                        }
                        else {

                            info += Value.val() + "$";
                        }
                    }
                    infos += info;
                });
            }

            $.ajax({
                url: '/user/controls/UserQuote.ashx',
                type: 'POST',
                async: false,
                dataType: 'html',
                data: { type: 'wholesale', price: Price, goodsid: GoodsId, count: TotalsCount, brandid: BrandId, classid: ClassId, promotionsprice: promotionsprice, usablerange: usablerange, infos: infos },
                success: function (r) {

                    var d = eval(r);
                    if (usablerange == "1") {
                        $.each(d, function (i, n) {
                            $(".UnitPrice_" + n.gid).html(n.price);
                            if (n == 0) {
                                $(".sTotalPrice_" + n.gid).html(n.totalpirce);
                            }
                            else {
                                $(".TotalPrice_" + n.gid).html(n.totalpirce);
                            }
                        });
                    } else {
                        if (d != null && d.length > 0) {
                            var data = d[0];
                            $(".UnitPrice_" + GoodsId).html(data.prices);
                            if (n == 0) {
                                $(".sTotalPrice_" + GoodsId).html(data.totalprices);
                            }
                            else {
                                $(".TotalPrice_" + GoodsId).html(data.totalprices);
                            }
                        }
                    }
                }
            });
        }
    }
}


function sendMobileVerify(type, fn, mobile, isreg) {
    isreg = isreg == undefined ? true : isreg;
    if (isreg) {
        if (!check_umob_reg()) {
            Ecshop.Tool.Hint.Warn({ info: "手机号不正确或该手机号码已经被注册。" });
            return;
        }
        if (!check_reg_code_m()) {
            Ecshop.Tool.Hint.Warn({ info: "验证码必须填写。" });
            return;
        }
    } else {
        if (mobile == "") {
            Ecshop.Tool.Hint.Warn({ info: "请先到个人中心填写手机号！" });
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
                Ecshop.Tool.Hint.Warn({ info: "手机号码错误请与管理员联系修改手机号码。" });
            }
            else {
                Ecshop.Tool.Hint.Warn({ info: "发送校验码错误请与管理员联系。" });
            }

        }
    });
}








function LoadCardImage(formName, imgObj, fileload, pictype) {

    $("#" + formName).ajaxSubmit({
        beforeSubmit: function (formData, jqForm, options) {
            $("#" + formName).before("<div id=\"waiting\" ><span style='float:left;'><img src='/Admin/Images/admin_waiting.gif" + "'/></span><span style='float:left;'>正在上传，请稍等...</span></div>");
            var fw = $("#" + formName).width();
            var fh = $("#" + formName).parent().height();

            $("#waiting").attr("style", "background:white;width:180px;height:20px;z-index:999;position:relative;top:" + (fh / 3 + $(window).scrollTop()) + "px;left:" + (fw / 2 - 70) + "px;border:1px solid lightblue;color:red");
        },
        success: function (data) {

            if (data != null) {



                data = data.replace(/<PRE>/i, "").replace(/<\/PRE>/i, "").replace(/<pre>/i, "").replace(/<\/pre>/i, "");
                if (data.indexOf("<pre") != -1) {
                    data = data.replace(data.substr(data.indexOf("<pre"), data.indexOf(">") - data.indexOf("<pre") + 1), "");
                }

            }
            if (data.indexOf("/") == -1) {
                $('#waiting').remove();
                Ecshop.Tool.Hint.Warn({ info: data });
                return;
            }
            var url = data.replace(/<PRE>/i, "").replace(/<\/PRE>/i, "").replace(/<pre>/i, "").replace(/<\/pre>/i, "").split(',')[0];

            var fileName = data.split(',')[1];

            $("#" + imgObj).html("<label>" + fileName + "</label>&nbsp;&nbsp;&nbsp;<a style='cursor:pointer;' onclick=\"dlstItems_Command1('" + imgObj + "','" + url + "','" + fileload + "');\" style='color:blue;' >删除</a><input id=\"hideFiles1\"  name=\"hideFiles1\" type=\"hidden\" value=\"" + data.replace(/<PRE>/i, "").replace(/<\/PRE>/i, "").replace(/<pre>/i, "").replace(/<\/pre>/i, "") + "\">");
            $("#" + fileload).css('display', "none");

            $('#waiting').remove();
        },
        error: function (data, status, e) {

            $('#waiting').remove();

            Ecshop.Tool.Hint.Ok({ info: "上传失败，错误信息：" + e });
        },
        url: "/user/controls/userdo.ashx?type=uploadfile1&fcount=1&pictype=" + (pictype == undefined ? "" : pictype),
        type: "POST",
        dataType: "HTML",
        timeout: 12000000
    });
}


function dlstItems_Command1(obj, imgurl, fileload) {
    $.ajax({
        url: "/user/controls/userdo.ashx?type=delfile1&path=" + imgurl,
        type: 'POST',
        dataType: 'html',
        timeout: 1000,
        success: function (data) {
            if (data == "1") {
                //Ecshop.Tool.Hint.Warn({ info: "删除文件成功！" });

                $("#" + obj).html("");
                $("#" + fileload).css('display', "block");
            }
            else {
                //Ecshop.Tool.Hint.Warn({ info: "删除文件失败！" });
            }
        }
    });
}



function update_user_cardpic(userid) {
    var yyzzstr = $("#hideFiles1").val();
    if (yyzzstr == "" || yyzzstr == undefined || yyzzstr == "undefined") {
        Ecshop.Tool.Hint.Warn({ info: "请选择身份证照图片进行上传!" });
        return;
    } else {
        $.ajax({
            url: '/user/controls/userdo.ashx',
            async: false,
            type: 'POST',
            data: { type: "update_user_cardpic", userid: userid, yyzz: yyzzstr },
            dataType: 'html',

            success: function (data) {
                if (data == "1") {
                    //parent.location.href = parent.location.href;
                    Ecshop.Tool.Hint.Ok({
                        info: "更新身份证成功",
                        second: 1,
                        fn: function () {
                            var imgUrl = yyzzstr.split(",")[0];
                            var windowParent = $(window.parent.document);
                            windowParent.find("#imgIDCard").attr("src", imgUrl);
                            windowParent.find(".box_title_close").click();
                        }
                    });
                }
                else {
                    Ecshop.Tool.Hint.Warn({ info: "修改失败，请检查上传文件格式是否正确！" });
                }
            }
        });
    }
}


//修改头像
function update_user_hendpic(userid) {
    var headpic = $("#hideFiles1").val();
    if (headpic == "" || headpic == undefined || headpic == "undefined") {
        Ecshop.Tool.Hint.Warn({ info: "请选择图片进行上传!" });
        return;
    } else {
        $.ajax({
            url: '/user/controls/userdo.ashx',
            async: false,
            type: 'POST',
            data: { type: "update_user_hendpic", userid: userid, headpic: headpic },
            dataType: 'html',

            success: function (data) {
                if (data == "1") {
                    //parent.location.href = parent.location.href;
                    Ecshop.Tool.Hint.Ok({
                        info: "更新头像成功",
                        second: 1,
                        fn: function () {
                            var imgUrl = headpic.split(",")[0];
                            var windowParent = $(window.parent.document);
                            windowParent.find("#imgHead").attr("src", imgUrl);
                            windowParent.find(".box_title_close").click();
                        }
                    });
                }
                else {
                    Ecshop.Tool.Hint.Warn({ info: "修改失败，请检查上传文件格式是否正确！" });
                }
            }
        });
    }
}
function canceldilog() {
    var windowParent = $(window.parent.document);
    windowParent.find(".box_title_close").click();
}




function LoadZZImage(formName, imgObj, fileload) {

    $("#" + formName).ajaxSubmit({
        beforeSubmit: function (formData, jqForm, options) {
            $("#" + formName).before("<div id=\"waiting\" ><span style='float:left;'><img src='/Admin/Images/admin_waiting.gif" + "'/></span><span style='float:left;'>正在上传，请稍等...</span></div>");
            var fw = $("#" + formName).width();
            var fh = $("#" + formName).parent().height();

            $("#waiting").attr("style", "background:white;width:180px;height:20px;z-index:999;position:relative;top:" + (fh / 3 + $(window).scrollTop()) + "px;left:" + (fw / 2 - 70) + "px;border:1px solid lightblue;color:red");
        },
        success: function (data) {

            if (data != null) {
                if (data.indexOf("<pre") != -1 || data.indexOf("<PRE") != -1)
                    data = data.substr(data.indexOf("/"));

                data = data.replace(/<PRE>/i, "").replace(/<\/PRE>/i, "");
            }
            if (data.indexOf("/") == -1) {
                $('#waiting').remove();
                Ecshop.Tool.Hint.Warn({ info: data });
                return;
            }
            var url = data.replace(/<PRE>/i, "").replace(/<\/PRE>/i, "").split(',')[0];
            var fileName = data.split(',')[1];

            $("#" + imgObj).html("<label>" + fileName + "</label>&nbsp;&nbsp;&nbsp;<a style='cursor:pointer;' onclick=\"dlstItems_Command('" + imgObj + "','" + url + "','" + fileload + "');\" style='color:blue;' >删除</a><input id=\"hideFiles\"  name=\"hideFiles\" type=\"hidden\" value=\"" + data.replace(/<PRE>/i, "").replace(/<\/PRE>/i, "") + "\">");
            $("#" + fileload).css('display', "none");

            $('#waiting').remove();
        },
        error: function (data, status, e) {

            $('#waiting').remove();
            Ecshop.Tool.Hint.Ok({ info: "上传失败，错误信息：" + e + "@@@" + data + "@@@@" + status });
        },
        url: "/user/controls/userdo.ashx?type=uploadfile&fcount=" + $("#txtfileIndex").val(),
        type: "POST",
        dataType: "JSON",
        timeout: 12000000
    });
}


function dlstItems_Command(obj, imgurl, fileload) {
    $.ajax({
        url: "/user/controls/userdo.ashx?type=delfile&path=" + imgurl,
        type: 'POST',
        dataType: 'html',
        timeout: 1000,
        success: function (data) {
            if (data == "1") {
                //Ecshop.Tool.Hint.Warn({ info: "删除文件成功！" });

                $("#" + obj).html("");
                $("#" + fileload).css('display', "block");
            }
            else {
                //Ecshop.Tool.Hint.Warn({ info: "删除文件失败！" });
            }
        }
    });
}



function update_user_yyzz(userid) {
    var yyzzstr = $("#hideFiles").val();
    if (yyzzstr == "" || yyzzstr == undefined || yyzzstr == "undefined") {
        Ecshop.Tool.Hint.Warn({ info: "请选择营业执照图片进行上传!" });
        return;
    } else {
        $.ajax({
            url: '/user/controls/userdo.ashx',
            async: false,
            type: 'POST',
            data: { type: "update_user_yyzz", userid: userid, yyzz: yyzzstr },
            dataType: 'html',

            success: function (data) {
                if (data == "1") {
                    Ecshop.Tool.Hint.Ok({
                        info: "更新新营业执照成功",
                        second: 1,
                        fn: function () {
                            var imgUrl = yyzzstr.split(",")[0];
                            var windowParent = $(window.parent.document);
                            windowParent.find("#imgBLPic").attr("src", imgUrl);
                            windowParent.find(".box_title_close").click();
                        }
                    });
                }
                else {
                    Ecshop.Tool.Hint.Warn({ info: "修改失败，请检查上传文件格式是否正确！" });
                }
            }
        });
    }
}
//再次购买
function againShoppingbyUser(para) {
    Ecshop.Tool.Hint.Confirm({
        title: '再次购买会将此订单的商品加入购物车，团购、抢购请在团抢购页面购买。确认再次购买？', info: '', showshade: true, fn: function (istrue) {
            if (istrue) {
                $.ajax({
                    url: '/user/controls/userdo.ashx',
                    async: false,
                    type: 'POST',
                    data: { type: "aginshopping", oid: para },
                    dataType: 'html',
                    error: function () { Ecshop.Tool.Hint.Warn({ info: '出现未知错误，请稍后重试。' }); },
                    success: function (data) {
                        if (data == "1") {
                            Ecshop.Tool.Hint.Ok({ info: "再次购买成功！结算，请进入购物车" });
                            location.href = location.href;
                        }
                        else if (data == "2") {
                            Ecshop.Tool.Hint.Ok({ info: "再次购买失败，传递的数据信息有误！" });
                        } else {
                            Ecshop.Tool.Hint.Warn({ info: "再次购买失败！" });
                        }
                    }
                });
            }
        }
    });
}

function ApplyClearingOfferOrder() {
    var idsobj = document.getElementsByName("piliangid");
    var ids = "";

    for (var i = 0; i < idsobj.length; i++) {
        if (idsobj[i].type == "checkbox" && idsobj[i].checked) {
            var _id = idsobj[i].value;
            if (_id > 0)
                ids += _id + ",";
        }
    }


    if (ids.length == 0) {
        Ecshop.Tool.Hint.Warn({ info: "请选择要操作的订单！" });
        return;
    }
    else {
        Ecshop.Tool.Hint.Confirm({
            title: '确认结算当前选中的订单吗？', info: '提交结算申请后操作不可逆!', showshade: true, fn: function (istrue) {
                if (istrue) {
                    $.ajax({
                        url: '/user/controls/userdo.ashx',
                        async: false,
                        type: 'POST',
                        data: { type: "applyclearingofferorder", oids: ids },
                        dataType: 'html',
                        success: function (data) {
                            if (data == "1") {
                                Ecshop.Tool.Hint.Ok({
                                    info: "订单结算申请成功",
                                    second: 2,
                                    fn: function () {
                                        window.location.href = "/offer/order/ordermanager.aspx?type=9";
                                    }
                                });


                            }
                            else {
                                Ecshop.Tool.Hint.Warn({ info: "订单结算申请失败！" });
                            }
                        }
                    });
                }
            }
        });
    }
}