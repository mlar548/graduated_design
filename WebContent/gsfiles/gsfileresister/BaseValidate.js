/*基础验证*/
/*-------提示类-begin--------*/
var tip_notice = "inline-tip notice";

var tip_error = "inline-tip error";

var tip_ok = "inline-tip success";

var tip_default = "inline-tip default";

var tip_hidden = "inline-tip hidden";
/*-------提示类-end--------*/
//验证身份证
function check_reg_rucid() {
    var obj = document.getElementById("reg_rucid");
    var Msg = document.getElementById("msg_" + obj.id);
    var chk = true;

    if (obj.value.replace(/(\s*$)/g, "") == "") {
        Msg.className = tip_notice;
        Msg.innerHTML = $(obj).attr("placeholderinfo");
        chk = false;
    } else {
        var CId = /^[\d]{6}((19[\d]{2})|(200[0-8]))((0[1-9])|(1[0-2]))((0[1-9])|([12][\d])|(3[01]))[\d]{3}[0-9xX]$/;
        //alert(CId.test(ucId));
        if (document.getElementById("reg_rucid").value.replace(/(\s*$)/g, "").length != "" && !CId.test(document.getElementById("reg_rucid").value.replace(/(\s*$)/g, ""))) {
            Msg.className = tip_error;
            Msg.innerHTML = "请输入正确的身份证号！";
            chk = false;
        }
        else {
            Msg.className = tip_ok;
            Msg.innerHTML = "通过！"; //  "输入正确！";
            chk = true;
        }
    }
    return chk;
}

//验证传真
function check_fax() {
    var obj = document.getElementById("fax");
    var Msg = document.getElementById("msg_" + obj.id);
    var chk = true;

    if (obj.value.replace(/(\s*$)/g, "") == "") {
        Msg.className = tip_notice;
        Msg.innerHTML = $(obj).attr("placeholderinfo");
        chk = false;
    } else {
        Msg.className = tip_ok;
        Msg.innerHTML = "通过！"; //  "输入正确！";
        chk = true;
    }
    return chk;
}

/*qq*/
function check_qq() {
    var obj = document.getElementById("qq");
    var Msg = document.getElementById("msg_" + obj.id);
    var chk = true;

    if (obj.value.replace(/(\s*$)/g, "") == "") {
        Msg.className = tip_notice;
        Msg.innerHTML = $(obj).attr("placeholderinfo");
        chk = false;
    } else {
        Msg.className = tip_ok;
        Msg.innerHTML = "通过！"; //  "输入正确！";
        chk = true;
    }
    return chk;
}

/*地址*/
function check_address() {
    var obj = document.getElementById("address");
    var Msg = document.getElementById("msg_" + obj.id);
    var chk = true;

    if (obj.value.replace(/(\s*$)/g, "") == "") {
        Msg.className = tip_notice;
        Msg.innerHTML = $(obj).attr("placeholderinfo");
        chk = false;
    } else {
        Msg.className = tip_ok;
        Msg.innerHTML = "通过！"; //  "输入正确！";
        chk = true;
    }
    return chk;
}

/*生日*/
function check_reg_birth() {
    var obj = document.getElementById("birth");
    var Msg = document.getElementById("msg_" + obj.id);
    var chk = true;
    var regDate = new RegExp(/^\d{4}(\-|\/|.)\d{1,2}\1\d{1,2}$/);
    if (obj.value.replace(/(\s*$)/g, "") == "") {
        Msg.className = tip_notice;
        Msg.innerHTML = $(obj).attr("placeholderinfo");
        chk = false;
    }
    else if (!regDate.test(obj.value)) {
        Msg.className = tip_notice;
        Msg.innerHTML = "格式不正确！";
        chk = false;
    } else {
        Msg.className = tip_ok;
        Msg.innerHTML = "通过！"; //  "输入正确！";
        chk = true;
    }
    return chk;
}

//验证公司名称
function check_reg_cname() {
    var obj = document.getElementById("reg_cname");
    var Msg = document.getElementById("msg_" + obj.id);
    var chk = true;

    if (obj.value.replace(/(\s*$)/g, "") == "") {
        Msg.className = tip_notice;
        Msg.innerHTML = $(obj).attr("placeholderinfo");
        chk = false;
    } else {
        Msg.className = tip_ok;
        Msg.innerHTML = "通过！"; //"输入正确！";
        chk = true;
    }
    return chk;
}

//验证真实姓名
function check_reg_rname() {
    var obj = document.getElementById("reg_rname");
    var Msg = document.getElementById("msg_" + obj.id);
    var chk = true;
    var re = /^[\u0391-\uFFE5\w]+$/;
    if (obj.value.replace(/(\s*$)/g, "") == "") {
        Msg.className = tip_notice;
        Msg.innerHTML = $(obj).attr("placeholderinfo");
        chk = false;
    } else if (obj.value.length < 2 || obj.value.length > 20) {
        Msg.className = tip_error;
        Msg.innerHTML = "姓名至少2个最多20个字符！";
        chk = false;
    } else {
        Msg.className = tip_ok;
        Msg.innerHTML = "通过！"; //  "输入正确！";
        chk = true;
    }
    return chk;
}

/*检查座机号*/
function check_utel() {
    var obj = document.getElementById("reg_utel");
    var Msg = document.getElementById("msg_" + obj.id);
    var chk = true;
    //var re = /^(([0\+]\d{2,3}-)?(0\d{2,3})-)(\d{7,8})(-(\d{4,}))?$/;
    var re = /^((0\d{2,3})([-]|[—])?)?([1-9][0-9]{6,7})(([-]|[—])\d{1,4})?$/;
    var utel = obj.value;
    if (utel == null || $.trim(utel) == "") {
        Msg.className = tip_notice;
        Msg.innerHTML = $(obj).attr("placeholderinfo");
        chk = false;
    } else if (!re.test(utel)) {
        Msg.className = tip_error;
        Msg.innerHTML = "座机格式不正确,如010-87654321！";
        chk = false;
    } else {
        Msg.className = tip_ok;
        Msg.innerHTML = "通过！"; // "填写正确！";
        chk = true;
    }
    return chk;
}

/*手机号码*/
function check_mobile() {
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
    }
    return chk;
}

/*邮政编码*/
function check_upost() {
    var obj = document.getElementById("upost");
    var Msg = document.getElementById("msg_" + obj.id);
    var chk = true;
    var re = /^[0-9][0-9]{5}$/;
    if (obj.value.replace(/(\s*$)/g, "") == "") {
        Msg.className = tip_notice;
        Msg.innerHTML = $(obj).attr("placeholderinfo");
        chk = false;
    } else if (obj.value.search(re) == -1) {
        Msg.className = tip_error;
        Msg.innerHTML = "邮政编码格式不正确！";
        chk = false;
    } else {
        Msg.className = tip_ok;
        Msg.innerHTML = "通过！"; // "填写正确！";
        chk = true;
    }
    return chk;
}

//验证机构代码
function check_jgdm() {
    var obj = document.getElementById("jgdm");
    var Msg = document.getElementById("msg_" + obj.id);
    var chk = true;

    if (obj.value.replace(/(\s*$)/g, "") == "") {
        Msg.className = tip_notice;
        Msg.innerHTML = $(obj).attr("placeholderinfo");
        chk = false;
    } else {
        Msg.className = tip_ok;
        Msg.innerHTML = "通过！"; //  "输入正确！";
        chk = true;
    }
    return chk;
}

function agreeonProtocol() {
    var chk = true;
    //是否勾选
    var isagree = document.getElementById("IsAgree");
    var Msg = document.getElementById("msg_" + isagree.id);
    if (!$(isagree).attr("checked")) {

        Msg.className = tip_notice;
        Msg.innerHTML = $(isagree).attr("placeholderinfo");
        chk = false;
    }
    else {
        Msg.className = tip_hidden;
    }
    return chk;
}

function replaceLicitStr(e) { //判断是否是汉字、字母、数字组成
    //var code;
    var character = $(e).val();  // String.fromCharCode(code);
    var txt = new RegExp("[\\`,\\~,\\!,\\@,\#,\\$,\\%,\\^,\\*,\\&,\\\\,\\/,\\?,\\|,\\:,\\<,\\>,\\{,\\},\\(,\\),\\',\\;,\"]");
    //特殊字符正则表达式
    if (txt.test(character)) {
        //        alert("User Name can not contain SPACES or any of these special characters:\n , ` ~ ! @ # $ % ^ + & * \\ / ? | : . < > {} () [] \" ");
        if (document.all) {
            $(e).val(replaceAll(character, ""));
            window.event.returnValue = false;
        }
        else {
            $(e).val(replaceAll(character, ""));
            arguments.callee.caller.arguments[0].preventDefault();
        }
    }
}
function replaceAll(s, sp) {
    var str = s.replace(/ /g, sp).replace(/\`/g, sp).replace(/\s/g, sp);   //       `   \s 
    str = str.replace(/\~/g, sp).replace(/\!/g, sp).replace(/\@/g, sp);   //   ~  !   @
    str = str.replace(/\#/g, sp).replace(/\$/g, sp).replace(/\%/g, sp);   //   ~   @   # 
    str = str.replace(/\^/g, sp).replace(/\&/g, sp).replace(/\*/g, sp);   //   ~   @   # 
    str = str.replace(/\(/g, sp).replace(/\)/g, sp);   //   ~   @   # 
    str = str.replace(/\|/g, sp);   //   ~   @   #
    str = str.replace(/\}/g, sp).replace(/\{/g, sp).replace(/\]/g, sp);    //   ~   @   #
    str = str.replace(/\[/g, sp).replace(/\:/g, sp).replace(/\;/g, sp);    //   ~   @   # 
    str = str.replace(/\'/g, sp).replace(/\./g, sp).replace(/\?/g, sp);    //   ~   @   # 
    str = str.replace(/\</g, sp).replace(/\>/g, sp).replace(/\\/g, sp);    //   ~   @   # 
    //    var str = s.replace(/%/g, "%25 ").replace(/\+/g, "%2B ").replace(/\s/g, "+ ");   //   %   +   \s 
    //    str = str.replace(/-/g, "%2D ").replace(/\*/g, "%2A ").replace(/\//g, "%2F ");   //   -   *   / 
    //    str = str.replace(/\&/g, "%26 ").replace(/!/g, "%21 ").replace(/\=/g, "%3D ");   //   &   !   = 
    //    str = str.replace(/\?/g, "%3F ").replace(/:/g, "%3A ").replace(/\|/g, "%7C ");   //   ?   :   | 
    //    str = str.replace(/\,/g, "%2C ").replace(/\./g, "%2E ").replace(/#/g, "%23 ");   //   ,   .   # 
    return str;
}