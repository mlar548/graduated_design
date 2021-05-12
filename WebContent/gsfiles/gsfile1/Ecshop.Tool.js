
/*! http://mths.be/placeholder v2.0.6 by @mathias */
; (
    function (g, i, d) {
        var a = 'placeholder' in i.createElement('input'), e = 'placeholder' in i.createElement('textarea'), j = d.fn, c = d.valHooks, l, k;
        if (a && e) {
            k = j.placeholder = function () { return this }; k.input = k.textarea = true
        } else {
            k = j.placeholder = function () {
                var m = this;
                m.filter((a ? 'textarea' : ':input') + '[placeholder]').not('.placeholder').bind({ 'focus.placeholder': b, 'blur.placeholder': f }).data('placeholder-enabled', true).trigger('blur.placeholder');
                return m
            };
            k.input = a;
            k.textarea = e;
            l = {
                get: function (n) {
                    var m = d(n); return m.data('placeholder-enabled') && m.hasClass('placeholder') ? '' : n.value
                },
                set: function (n, o) {
                    var m = d(n);
                    if (!m.data('placeholder-enabled')) {
                        return n.value = o
                    } if (o == '') {
                        n.value = o; if (n != i.activeElement) { f.call(n) }
                    } else {
                        if (m.hasClass('placeholder')) {
                            b.call(n, true, o) || (n.value = o)
                        } else { n.value = o }
                    } return m
                }
            };
            if (a != null && a != undefined && c != null && c != undefined)
                c.input = l;
            if (e != null && e != undefined && c != null && c != undefined)
                c.textarea = l;
            d(function () {
                d(i).delegate('form', 'submit.placeholder', function () {
                    var m = d('.placeholder', this).each(b);
                    setTimeout(function () { m.each(f) }, 10);
                })
            });
            d(g).bind('beforeunload.placeholder', function () {
                d('.placeholder').each(function () {
                    this.value = '';
                })
            })
        }
        function h(n) {
            var m = {}, o = /^jQuery\d+$/;
            d.each(n.attributes, function (q, p) {
                if (p.specified && !o.test(p.name)) {
                    m[p.name] = p.value;
                }
            });
            return m
        }
        function b(o, p) {
            var n = this, q = d(n), m;
            if (n.value == q.attr('placeholder') && q.hasClass('placeholder')) {
                m = n == i.activeElement;
                if (q.data('placeholder-password')) {
                    q = q.hide().next().show().attr('id', q.removeAttr('id').data('placeholder-id'));
                    if (o === true) {
                        return q[0].value = p;
                    }
                    q.focus();
                } else {
                    n.value = '';
                    q.removeClass('placeholder');
                }
                m && n.select();
            }
        } function f() {
            var r, m = this, q = d(m), n = q, p = this.id;
            if (m.value == '') {
                if (m.type == 'password') {
                    if (!q.data('placeholder-textinput')) {
                        try { r = q.clone().attr({ type: 'text' }) }
                        catch (o) {
                            r = d('<input>').attr(d.extend(h(this), { type: 'text' }))
                        }
                        r.removeAttr('name').data({ 'placeholder-password': true, 'placeholder-id': p }).bind('focus.placeholder', b);
                        q.data({ 'placeholder-textinput': r, 'placeholder-id': p }).before(r)
                    }
                    q = q.removeAttr('id').hide().prev().attr('id', p).show()
                }
                q.addClass('placeholder');
                q[0].value = q.attr('placeholder')
            } else { q.removeClass('placeholder') }
        }
    }(this, document, jQuery));

window.Ecshop = window.Ecshop || {};
window.Ecshop.Tool = window.Ecshop.Tool || {};
//提示框
window.Ecshop.Tool.Hint = {
    Option: {
        type: "ok",     //提示信息框类型,调用时也无需设置,confirm无该属性 
        title: "",      //confirm提示标题
        info: "",       //提示信息框或confirm提示内容 
        second: 1,      //提示信息框自动消失时间 ,单位为秒 confirm无该属性
        fn: null,       //回调函数 当为confirm 返回第一个参数为是否继续响应操作(true 或 false)
        showShade: true,//是否显示遮罩层 confirm专有属性 提示信息框无用
        width: 400,     //宽度 confirm专有属性 提示信息框无用
        height: 210,    //高度 confirm专有属性 提示信息框无用
        left: 0,        //左边距离 confirm专有属性 提示信息框无用
        top: 0,         //顶部距离 confirm专有属性 提示信息框无用
        style: 'default', //样式confirm专有属性 提示信息框无用 可选值 "default","blue","green","gray"
        curpage: false,  //是否在当前页面,
        prompt:"",
        button: {
            sort: false,//是否交换按钮顺序
            btnConfirm: '确定',
            btnCancle: '取消',
            isPara: false,
            paraType: 0,
            paraObj: '',
            callbackConfirm: function () { },
            callbackbtnCancle: function () { }

        },
        tit: "",
        beforeShow: function () { }

    },
    Ok: function (option) {
        option = option || {};
        option.type = "ok";
        this.hintshow(option);
    },
    Warn: function (option) {
        option = option || {};
        option.type = "warn";
        this.hintshow(option);
    },
    Error: function (option) {
        option = option || {};
        option.type = "error";
        this.hintshow(option);
    },
    LoadMask: function (option) {
        option = option || {};
        option.type = "load";
        option.info = option.info == undefined ? "数据加载中,请稍后..." : option.info;
        option.second = option.second == undefined || option.second == 0 ? 9999999 : option.second;
        this.hintshow(option);
    },
    hintshow: function (option) {
        $("a").blur(function () { });
        //$("a").focusout();
        var self = this;
        var Option = self.Option;
        var opts = $.extend({}, Option, option);
        var _$ = opts.curpage ? $(document) : $(window.top.document);
        opts.width = opts.width == 0 || opts.width > 250 ? 300 : opts.width;
        if (_$.find("#ecshop_hint").length > 0) {
            _$.find("#ecshop_hint").attr("class", "ecshop_hint ecshop_hint_style_" + opts.type + "");
            _$.find("#ecshop_hint").find("#ecshop_hint_content_body").html("<i class='ecshop_hint_ico'></i>" +
                opts.info + "</div>");
            _$.find("#ecshop_hint").show();
        }
        else {
            var showhtml = "<div id='ecshop_hint' class='ecshop_hint ecshop_hint_style_" + opts.type + "' style='width:auto;'>" +
            "<div class='ecshop_hint_content'>" +
            "<div class='content_wrapper'>" +
            "<div class='content_body' id='ecshop_hint_content_body'><i class='ecshop_hint_ico'></i>" +
            opts.info + "</div>" +
            "</div>" +
            "</div>" +
            "<div class='ecshop_hint_bottom'>" +
            "</div>" +
            "</div>";
            _$.find("body").append($(showhtml));
        }
        var hidetime = 0;
        if (typeof (opts.second) == "number") {
            hidetime = opts.second * 1000;
        }
        else
            hidetime = 3000;

        var _hint = _$.find("#ecshop_hint");
        var width = _$.find("body").get(0).clientWidth;
        width = width > _$.find("body").outerWidth(true) ? width : _$.find("body").outerWidth(true);
        //var height = Math.max(_$.find("body").get(0).scrollHeight, _$.find("body").get(0).offsetHeight, _$.height())
        //height = height > _$.find("body").outerHeight(true) ? height : _$.find("body").outerHeight(true);
        opts.left = opts.left == 0 ? width / 2 - _hint.outerWidth(true) / 2 : opts.left;
        //opts.top = opts.top == 0 ? (offsetHeight / 2 + _$.scrollTop()) - opts.height / 2 : opts.top;
        setTimeout(function () {
            _$.find("#ecshop_hint").remove();
            if (typeof (opts.fn) == "function") {
                opts.fn();
            }
        }, hidetime);
        var _width = (_hint.width() / 2);
        _hint.css({
            "display": "block",
            "left": opts.left,
            "z-index": 999999 // 冲突kindediter z-index811213
        });
    },
    Confirm: function (option) {
        var _thisScript = "";
        var _jspath = (function (script, i, me) {
            for (i in script) {
                // 如果通过第三方脚本加载器加载本文件，请保证文件名含有"artDialog"字符
                if (script[i].src && script[i].src.toLowerCase().indexOf('ecshop.tool.js') !== -1) me = script[i];
            };

            _thisScript = me || script[script.length - 1];
            me = _thisScript.src.replace(/\\/g, '/');
            return me.lastIndexOf('/') < 0 ? '.' : me.substring(0, me.lastIndexOf('/'));
        }(document.getElementsByTagName('script')));
        var _skins = _thisScript.src.toLowerCase().split('skin=');
        var _skin = "";
        if (_skins.length > 1) {
            _skin = _skins[1].split("&")[0];
        }
        $("a").blur(function () { });
        document.activeElement.blur();
        //document.styleSheets[0].deleteRule(0);
        var opts = $(this).Option = $.extend({}, this.Option, option), self = this;
        var _$ = opts.curpage ? $(document) : $(window.top.document);// $(window.top.document);
        var _client = $(window);
        var offsetHeight = opts.curpage ? window.document.body.offsetHeight : top.window.document.body.offsetHeight;
        var screenHeight = opts.curpage ? window.screen.height : top.window.screen.height;
        offsetHeight = offsetHeight > screenHeight ? screenHeight : offsetHeight;
        //opts.width = 250
        opts.left = opts.left == 0 ? _$.width() / 2 - opts.width / 2 : opts.left;
        opts.top = opts.top == 0 ? (offsetHeight / 2 + _$.scrollTop()) - opts.height / 2 : opts.top;
        if (_skin.length > 0) {
            opts.style = _skin;
        }
        showhtml = "" +
        "<div id='dialog_confirm' class='dialog_confirm dialog_confirm_" + opts.style + "' style='display:none;'>" +
        "<iframe width='99%' height='99%' style='position: absolute;-moz-opacity:0;filter:alpha(opacity=0);z-index: -1; border:0px;'></iframe><div class='dialog-outer'> " +
        "<div class='dialog-inner'>" +
        "<div class='dialog-toolbar clearfix'> " +
        "<a class='dialog-close' href='javascript:void(0);' title='关闭'>关闭</a> " +
        "<h3 class='dialog-title' style=''>温馨提示</h3> " +
        "</div> " +
        "<div class='dialog-ask'><i class='dialog-ask-ico'></i><font>" + opts.title + "</font></div><div class='clear'></div>" +
        "<div class='dialog-content'>" + opts.info + "</div>" +
        "</div> " +
        "</div> " +
        "<div class='dialog_bottom'>" +//<table style='width: 100%;' cellspacing='0' cellpadding='0'><tr><td align='center'>        
        "<a href='javascript:void(0);' class='confirm_btn btn-cancel' id='btnRemoveConfirmCancel' style=''><span class='btn-text'>取消</span></a> " +
        "<a href='javascript:void(0);' class='confirm_btn btn-ok' id='btnRemoveConfirm' style=''><span class='btn-text'>确定</span></a> " +
        "</div>" +//</td></tr></table>
        "</div>";
        if (opts.showShade) {
            var divShade = "<div id='divShade'><iframe width='99%' height='99%' style='position: absolute;-moz-opacity:0;filter:alpha(opacity=0);z-index: -1;border:0px;'></iframe></div>";
            var width = _$.find("body").get(0).clientWidth;
            //Math.max(_$.find("body").get(0).scrollHeight, _$.find("body").get(0).offsetHeight, _$.height())
            width = width > _$.find("body").outerWidth(true) ? width : _$.find("body").outerWidth(true);
            var height = Math.max(_$.find("body").get(0).scrollHeight, _$.find("body").get(0).offsetHeight, _$.height())
            //height = height > _$.find("body").outerHeight(true) ? height : _$.find("body").outerHeight(true);

            _$.find("body").append($(divShade));
            _$.find("#divShade").css({
                "left": "0",
                "top": "0",
                "bottom": "0",
                "right": "0",
                "background-color": "black",
                "opacity": "0.4",
                "z-index": 2998,
                "position": "fixed",
                "display": "block"
            });
        }
        _$.find("body").append($(showhtml));
        _$.find("#btnRemoveConfirm").click(function () {
            self.Hide();
            if (typeof (opts.fn) == "function")
                opts.fn(true);
        });
        _$.find(".dialog-close").click(function () {
            self.Hide();
            if (typeof (opts.fn) == "function")
                opts.fn(false);
        });
        _$.find("#btnRemoveConfirmCancel").click(function () {
            self.Hide();
            if (typeof (opts.fn) == "function")
                opts.fn(false);
        });
        _$.find("#dialog_confirm").css({
            "display": "block",
            "width": opts.width,
            "min-height": opts.height,
            "left": opts.left,
            "top": opts.top,
            "z-index": 999999 // 冲突kindediter z-index811213
        });
        _$.find(".dialog-outer").css("min-height", opts.height - $(".dialog_bottom").outerHeight(true) + "px");
        //$(".dialog-content").css("margin-top", ($(".dialog-inner").height() - $(".dialog-toolbar").height()) / 2 - 8);
        //$(".dialog_bottom").css("padding-left", $(".dialog_bottom").width() / 2 - 50);
        var _move = false;//移动标记  
        var _x, _y;//鼠标离控件左上角的相对位置  
        _$.find(".dialog-toolbar").bind("selectstart", function () { return false; });
        _$.find(".dialog-toolbar").bind("select", function () { return false; });
        _$.find(".dialog-toolbar").mousedown(function (e) {
            _move = true;
            _x = e.pageX - parseInt(_$.find(".dialog_confirm").css("left"));
            _y = e.pageY - parseInt(_$.find(".dialog_confirm").css("top"));
            //_$.find(".dialog_confirm").fadeTo(20, 0.5);//点击后开始拖动并透明显示  
        });
        $(document).mousemove(function (e) {
            if (_move) {
                var x = e.pageX - _x;//移动时根据鼠标位置计算控件左上角的绝对位置  
                var y = e.pageY - _y;
                _$.find(".dialog_confirm").css({ top: y, left: x });//控件新位置  
            }
        }).mouseup(function () {
            _move = false;
            //_$.find(".dialog_confirm").fadeTo("fast", 1);//松开鼠标后停止移动并恢复成不透明  
        });
        //_$.find(".dialog-toolbar").mousedown(function (event) {
        //    var offset = $(this).offset();
        //    _x = event.clientX - offset.left;
        //    _y = event.clientY - offset.top;
        //    _$.find(".dialog-toolbar").css("cursor", "move");
        //    _$.find(".dialog_confirm").mousemove(function (event) {
        //        _xx = event.clientX - _x;
        //        _yy = event.clientY - _y;
        //        this.style.left = _xx + "px";
        //        this.style.top = _yy + "px";
        //        return false;
        //    });
        //    return false;
        //});
        //_$.find(".dialog_confirm").mouseup(function () {
        //    _$.find(".dialog-toolbar").css("cursor", "auto");
        //    _$.find(this).unbind("mousemove");
        //    return false;
        //});
    },
    newConfirm: function (option) {
        var _thisScript = "";
        var _jspath = (function (script, i, me) {
            for (i in script) {
                // 如果通过第三方脚本加载器加载本文件，请保证文件名含有"artDialog"字符
                if (script[i].src && script[i].src.toLowerCase().indexOf('ecshop.tool.js') !== -1) me = script[i];
            };

            _thisScript = me || script[script.length - 1];
            me = _thisScript.src.replace(/\\/g, '/');
            return me.lastIndexOf('/') < 0 ? '.' : me.substring(0, me.lastIndexOf('/'));
        }(document.getElementsByTagName('script')));
        var _skins = _thisScript.src.toLowerCase().split('skin=');
        var _skin = "";
        if (_skins.length > 1) {
            _skin = _skins[1].split("&")[0];
        }
        $("a").blur(function () { });
        document.activeElement.blur();
        //document.styleSheets[0].deleteRule(0);
        var opts = $(this).Option = $.extend({}, this.Option, option), self = this;
        var _$ = opts.curpage ? $(document) : $(window.top.document);// $(window.top.document);
        var _client = $(window);
        var offsetHeight = opts.curpage ? window.document.body.offsetHeight : top.window.document.body.offsetHeight;
        var screenHeight = opts.curpage ? window.screen.height : top.window.screen.height;
        offsetHeight = offsetHeight > screenHeight ? screenHeight : offsetHeight;
        //opts.width = 250
        opts.left = opts.left == 0 ? _$.width() / 2 - opts.width / 2 : opts.left;
        opts.top = opts.top == 0 ? (offsetHeight / 2 + _$.scrollTop()) - opts.height / 2 : opts.top;
        if (_skin.length > 0) {
            opts.style = _skin;
        }
        var opbtn = {
            iscancle: false,

            isconfirm: false,

            confirmText: '',

            cancleText: '',

            confirmHtml: '',

            cancleHtml: '',

            issort: false
        };
        opbtn.issort = (opts.button == undefined || opts.button.sort == false) ? false : true;
        opbtn.iscancle = opts.button != undefined && opts.button.btnCancle != undefined && opts.button.btnCancle != '';
        opbtn.isconfirm = opts.button != undefined && opts.button.btnConfirm != undefined && opts.button.btnConfirm != '';
        opbtn.confirmText = opts.button.btnConfirm;
        opbtn.cancleText = opts.button.btnCancle;
        showhtml = "" +
        "<div id='dialog_confirm' class='dialog_confirm dialog_confirm_" + opts.style + "' style='display:none;'>" +
        "<iframe width='99%' height='99%' style='position: absolute;-moz-opacity:0;filter:alpha(opacity=0);z-index: -1; border:0px;'></iframe><div class='dialog-outer'> " +
        "<div class='dialog-inner'>" +
        "<div class='dialog-toolbars dialog-toolbar clearfix'> " +
        "<a class='dialog-closes' href='javascript:void(0);' title='关闭'>关闭</a> " +
        "<h3 class='dialog-title' style=''>" + opts.tit + "</h3> " +
        "</div> " +
        //"<div class='dialog-ask'><i class='dialog-ask-ico'></i><font>" + opts.title + "</font></div><div class='clear'></div>" +
        //"<div class='dialog-content'>" + opts.info + "</div>" +
        opts.info
        "</div> " +
        "</div> " +
        "<div class='dialog_bottom'>";//<table style='width: 100%;' cellspacing='0' cellpadding='0'><tr><td align='center'>    
        //    btnConfirm: '确定',
        //btnCancle: '取消',
        //callbackConfirm: function () { },
        //callbackbtnCancle: function () { }
        if (opbtn.iscancle) {
            opbtn.cancleHtml = "<a href='javascript:void(0);' class='confirm_btn btn-cancel' id='btnRemoveConfirmCancel' style=''><span class='btn-text'>" + opbtn.cancleText + "</span></a> ";
        }
        if (opbtn.isconfirm) {
            opbtn.confirmHtml = "<a href='javascript:void(0);' class='confirm_btn btn-ok' id='btnRemoveConfirm' style=''><span class='btn-text'>" + opbtn.confirmText + "</span></a> ";

        }
        if (opbtn.issort) {
            showhtml += "<p style='text-align:center' class='p-tab'>" + opbtn.confirmHtml;
            showhtml += opbtn.cancleHtml + "</p>";
        } else {
            showhtml += "<p style='text-align:center' class='p-tab'>" + opbtn.cancleHtml;
            showhtml += opbtn.confirmHtml + "</p>";

        }
        if (opts.prompt != "") {
            showhtml +="<p style='font-size:12px;padding:0 10px 10px 10px;color:red'> "+ opts.prompt +"</p>";
        } 
        "</div>" +//</td></tr></table>
       "</div>";
        if (opts.showShade) {
            var divShade = "<div id='divShade'><iframe width='99%' height='99%' style='position: absolute;-moz-opacity:0;filter:alpha(opacity=0);z-index: -1;border:0px;'></iframe></div>";
            var width = _$.find("body").get(0).clientWidth;
            //Math.max(_$.find("body").get(0).scrollHeight, _$.find("body").get(0).offsetHeight, _$.height())
            width = width > _$.find("body").outerWidth(true) ? width : _$.find("body").outerWidth(true);
            var height = Math.max(_$.find("body").get(0).scrollHeight, _$.find("body").get(0).offsetHeight, _$.height())
            //height = height > _$.find("body").outerHeight(true) ? height : _$.find("body").outerHeight(true);

            _$.find("body").append($(divShade));
            _$.find("#divShade").css({
                "left": "0",
                "top": "0",
                "bottom": "0",
                "right": "0",
                "background-color": "black",
                "opacity": "0.4",
                "z-index": 2998,
                "position": "fixed",
                "display": "block"
            });
        }
        _$.find("body").append($(showhtml));
        if (opbtn.isconfirm) {
            _$.find("#btnRemoveConfirm").click(function () {
                if (typeof (opts.button.callbackConfirm) == "function") {
                    if (opts.button.isPara) {
                        if (opts.button.callbackConfirm(opts.button.paraObj, opts.button.paraType)) {
                            self.Hide();
                        }
                    } else
                        if (opts.button.callbackConfirm())
                            self.Hide();

                } else self.Hide();
            });

        }
        if (opbtn.iscancle) {
            _$.find("#btnRemoveConfirmCancel").click(function () {
               
                if (typeof (opts.button.callbackbtnCancle) == "function") {
                    if (opts.button.callbackbtnCancle()) {
                        self.Hide();
                    } else self.Hide();
                } else self.Hide();
            });
        }
        _$.find(".dialog-closes").click(function () {
            self.Hide();
            if (typeof (opts.fn) == "function")
                opts.fn(false);
        });
        _$.find(".closeHide").click(function () {
            self.Hide();
            if (typeof (opts.fn) == "function")
                opts.fn(false);
        });
        _$.find("#dialog_confirm").css({
            "display": "block",
            "width": opts.width,
            "min-height": opts.height,
            "left": opts.left,
            "top": opts.top,
            "z-index": 999999 // 冲突kindediter z-index811213
        });
        _$.find(".dialog-outer").css("min-height", opts.height - $(".dialog_bottom").outerHeight(true) + "px");
        //$(".dialog-content").css("margin-top", ($(".dialog-inner").height() - $(".dialog-toolbar").height()) / 2 - 8);
        //$(".dialog_bottom").css("padding-left", $(".dialog_bottom").width() / 2 - 50);
        var _move = false;//移动标记  
        var _x, _y;//鼠标离控件左上角的相对位置  
        _$.find(".dialog-toolbar").bind("selectstart", function () { return false; });
        _$.find(".dialog-toolbar").bind("select", function () { return false; });
        _$.find(".dialog-toolbar").mousedown(function (e) {
            _move = true;
            _x = e.pageX - parseInt(_$.find(".dialog_confirm").css("left"));
            _y = e.pageY - parseInt(_$.find(".dialog_confirm").css("top"));
            //_$.find(".dialog_confirm").fadeTo(20, 0.5);//点击后开始拖动并透明显示  
        });
        $(document).mousemove(function (e) {
            if (_move) {
                var x = e.pageX - _x;//移动时根据鼠标位置计算控件左上角的绝对位置  
                var y = e.pageY - _y;
                _$.find(".dialog_confirm").css({ top: y, left: x });//控件新位置  
            }
        }).mouseup(function () {
            _move = false;
            //_$.find(".dialog_confirm").fadeTo("fast", 1);//松开鼠标后停止移动并恢复成不透明  
        });
        //_$.find(".dialog-toolbar").mousedown(function (event) {
        //    var offset = $(this).offset();
        //    _x = event.clientX - offset.left;
        //    _y = event.clientY - offset.top;
        //    _$.find(".dialog-toolbar").css("cursor", "move");
        //    _$.find(".dialog_confirm").mousemove(function (event) {
        //        _xx = event.clientX - _x;
        //        _yy = event.clientY - _y;
        //        this.style.left = _xx + "px";
        //        this.style.top = _yy + "px";
        //        return false;
        //    });
        //    return false;
        //});
        //_$.find(".dialog_confirm").mouseup(function () {
        //    _$.find(".dialog-toolbar").css("cursor", "auto");
        //    _$.find(this).unbind("mousemove");
        //    return false;
        //});
        if (opts != "" && opts != undefined) {
            if (typeof opts.beforeShow === 'function') {
                opts.beforeShow.call(this);
            };
        };
    },
    Hide: function () {
        var _$ = $(window.top.document);
        var _this = $(document);
        _$.find("#ecshop_hint").remove();
        _$.find("#dialog_confirm").remove();
        _$.find("#divShade").remove();
        _this.find("#ecshop_hint").remove();
        _this.find("#dialog_confirm").remove();
        _this.find("#divShade").remove();
    }
};


//扩展弹出框插件
(function ($, ECS) {

    //默认参数
    var defaults = {
        title: '我是标题',//标题
        index: 5000, //层级
        opacity: 0.5, //背景透明度   
        width: 'auto', //宽度
        height: 'auto', //高度
        showHeader: true, //显示标题栏
        showBg: true, //显示背景
        showCloseBtn: true, //显示关闭按钮
        closeBtnStr: '×',
        isFixed: true, //固定
        clickBgClose: true, //点击背景关闭
        canDrage: true, //是否可以拖动
        delay: null, //自动消失
        padding: '10px',
        onShow: $.noop(), // 加载时回调
        onHide: $.noop() // 隐藏时回调
    };

    //用到的变量 
    var setting, dialog, dialogHeader, dialogTitle, dialogBody, dialogClose, dialogBg, dialogFooter;

    ECS.Dialog = $.Dialog = function (element, options) {

        if (!element) return;
        //加载jq对象
        if (typeof (element) === "object") {
            // 如果是a标签
            if (element.is('a')) {
                var _href = element.attr('href');
                // 以a加载锚点element
                if (/^#/.test(_href)) {
                    element = $(_href);
                } else {
                    //加ajax加加载页面
                }
            }
            element.show();
        } else {
            element = $(element);
        }

        //弹框模板
        var template = '<div id="ecsDialogBg" onselectstart="return false;"></div>' +
        '<div class="ecs-dialog-outer" id="ecsDialog">' +
        '<div class="ecs-dialog-inner">' +
        '<a href="javascript:" class="ecs-dialog-close" title="关闭"></a>' +
        '<div class="ecs-dialog-header" onselectstart="return false;">' +
        '<h3 class="ecs-dialog-title"></h3>' +
        '</div>' +
        '<div class="ecs-dialog-body"></div>' +
        '<div class="ecs-dialog-footer"></div>' +
        '</div>' +
        '</div>';

        $('body').append(template);

        //一些变量
        setting = $.extend(defaults, options || {});
        dialog = $('#ecsDialog');
        dialogBg = $('#ecsDialogBg');
        dialogHeader = dialog.find('.ecs-dialog-header');
        dialogTitle = dialog.find('.ecs-dialog-title');
        dialogBody = dialog.find('.ecs-dialog-body');
        dialogClose = dialog.find('.ecs-dialog-close');
        dialogFooter = dialog.find('.ecs-dialog-footer');

        setting.title && dialogTitle.html(setting.title);
        dialogClose.html(setting.closeBtnStr);
        dialogBody.css('padding', setting.padding).empty().html(element);

        if ($.isFunction(setting.onShow)) {
            setting.onShow();
        }
        //初始化
        $.Dialog.setSize();
        $.Dialog.setPosition();

        setting.isFixed && $.Dialog.setFixed();

        if (!setting.showBg) {
            dialogBg.hide();
        }
        if (!setting.showHeader) {
            dialogHeader.hide();
        }
        //点击背景关闭
        if (setting.clickBgClose) {
            dialogBg.click(function () {
                $.Dialog.hide();
            });
        }
        //是否显示关闭按钮
        if (!setting.showCloseBtn) {
            dialogClose.hide();
        } else {
            dialogClose.click(function () {
                $.Dialog.hide();
                return false;
            });
        }
        //是否可以拖动
        if (setting.canDrage) {
            $.Dialog.drag();
        }
        //自动消失
        if (setting.delay != null && setting.delay > 0) {
            setTimeout($.Dialog.hide, setting.delay * 1000);
        }
        $(window).resize(function () {
            $.Dialog.setPosition();
        });

    }

    //公共方法
    $.extend($.Dialog, {
        //设定大小
        setSize: function () {
            dialog.css({
                width: setting.width,
                height: setting.height
            });
        },
        //设置位置
        setPosition: function () {
            var ww = $(window).width(), wh = $(window).height(), st = $(window).scrollTop(), ph = $("body").outerHeight();
            if (ph < wh) {
                ph = wh;
            }
            if (!window.XMLHttpRequest) {
                dialogBg.width(ww).height(ph);
            } else {
                dialogBg.width(ww).height(wh).css("opacity", setting.opacity);
            }
            var dh = dialog.outerHeight(), dw = dialog.outerWidth();
            var top = st + (wh - dh) / 2, left = (ww - dw) / 2;
            if (setting.isFixed && window.XMLHttpRequest) {
                top = (wh - dh) / 2;
            }
            dialog.css({
                top: top,
                left: left,
                zIndex: setting.index
            });
        },
        //固定
        setFixed: function () {
            if (window.XMLHttpRequest) {
                $.Dialog.setPosition();
                dialog.css({
                    position: 'fixed'
                });
            } else {
                $(window).scroll(function () {
                    $.Dialog.setPosition();
                });
            }
        },
        //隐藏
        hide: function () {
            dialog.remove();
            dialogBg.remove();
            if ($.isFunction(setting.onHide)) {
                onHide();
            }
        },
        //拖拽
        drag: function () {
            if (!dialog.size() || !dialogHeader.size()) {
                $(document).unbind("mouseover").unbind("mouseup");
                return;
            }
            var drag = false;
            var currentX = 0, currentY = 0, posX = dialog.css("left"), posY = dialog.css("top");
            dialogHeader.mousedown(function (e) {
                drag = true;
                currentX = e.pageX;
                currentY = e.pageY;
            }).css("cursor", "move");
            $(document).mousemove(function (e) {
                if (drag) {
                    var nowX = e.pageX, nowY = e.pageY;
                    var disX = nowX - currentX, disY = nowY - currentY;
                    dialog.css("left", parseInt(posX) + disX).css("top", parseInt(posY) + disY);
                }
            });
            $(document).mouseup(function () {
                drag = false;
                posX = dialog.css("left");
                posY = dialog.css("top");
            });
        }
    });

}(jQuery, Ecshop.Tool));

$(document).ready(function () {
    //
    //Ecshop.Tool.Hint.LoadMask();
    //移除提示框
    Ecshop.Tool.Hint.Hide();
});
//window.Ecshop.Tool.LoadMask
Ecshop.Tool.DefaultPic = "/images/_07.png";
//输入排序序号验证 onblur="Ecshop.Tool.CheckIntByOrder($(this),function(){})" 袁章洪
Ecshop.Tool.CheckIntByOrder = function (obj, fn) {
    if (obj.val == undefined) obj = $(obj); if (obj.val() == '') {
        obj.val("0");
        return;
    }
    var re = /^(-?[0-9]{0,5})$/;
    if (!re.test(obj.val())) {
        if (typeof (fn) == 'function') {
            fn(obj);
        }
        return false;
    }
    return true;
};
//输入数字验证 onblur="Ecshop.Tool.CheckNumber($(this),function(){})" 袁章洪
Ecshop.Tool.CheckNumber = function (obj, fn) {
    if (obj.val == undefined) obj = $(obj); if (obj.val() == '')
        return;
    var re = /^-?[1-9]+(\.\d+)?$|^-?0(\.\d+)?$|^-?[1-9]+[0-9]*(\.\d+)?$/;
    if (!re.test(obj.val())) {
        if (typeof (fn) == 'function') {
            fn(obj);
        }
        return false;
    }
    return true;
};
//输入英文字符验证(只能包含4－50的a-z.0-9,和下划线) onblur="Ecshop.Tool.CheckEnName($(this),function(){})" 袁章洪
Ecshop.Tool.CheckEnName = function (obj, fn) {
    if (obj.val == undefined) obj = $(obj); if (obj.val() == '')
        return;
    var re = /^[a-zA-Z0-9_]{4,50}$/;
    if (!re.test(obj.val())) {
        if (typeof (fn) == 'function') {
            fn(obj);
        }
        return false;
    }
    return true;
};
//输入中文字符验证(只能包含2－50的a-z.0-9,和下划线及中文字符) onblur="Ecshop.Tool.CheckCnName($(this),function(){})" 袁章洪
Ecshop.Tool.CheckCnName = function (obj, fn) {
    if (obj.val == undefined) obj = $(obj); if (obj.val() == '')
        return;
    var re = /^[\u4e00-\u9fa5a-zA-Z0-9_]{2,50}$/;
    if (!re.test(obj.val())) {
        if (typeof (fn) == 'function') {
            fn(obj);
        }
        return false;
    }
    return true;
};
Ecshop.Tool.CheckCnNameNoStr = function (obj, fn) {
    if (obj.val == undefined) obj = $(obj); if (obj.val() == '')
        return;
    var re = /^[\u4e00-\u9fa5a-zA-Z0-9]{1,50}$/;
    if (!re.test(obj.val())) {
        if (typeof (fn) == 'function') {
            fn(obj);
        }
        return false;
    }
    return true;
};
//输入电话号码验证(兼容格式: 国家代码(2到3位)-区号(2到3位)-电话号码(7到8位)-分机号(4位)) onblur="Ecshop.Tool.CheckTel($(this),function(){})" 袁章洪
Ecshop.Tool.CheckTel = function (obj, fn) {
    if (obj.val == undefined) obj = $(obj); if (obj.val() == '')
        return;
    var re = /^(([0\+]\d{2,3}-)?(0\d{2,3})-)(\d{7,8})(-(\d{4,}))?$/;
    if (!re.test(obj.val())) {
        if (typeof (fn) == 'function') {
            fn(obj);
        }
        return false;
    }
    return true;
};
//输入手机号码验证 onblur="Ecshop.Tool.CheckMobile($(this),function(){})" 袁章洪
Ecshop.Tool.CheckMobile = function (obj, fn) {
    if (obj.val == undefined) obj = $(obj); if (obj.val() == '')
        return;
    var re = /^0?(1)[0-9]{10}$/;
    if (!re.test(obj.val())) {
        if (typeof (fn) == 'function') {
            fn(obj);
        }
        return false;
    }
    return true;
};

//输入电话号码和手机号码验证 onblur="Ecshop.Tool.CheckMobileOrTel($(this),function(){})" 袁章洪
Ecshop.Tool.CheckMobileOrTel = function (obj, fn) {
    if (obj.val == undefined) obj = $(obj); if (obj.val() == '')
        return;
    if (!Ecshop.Tool.CheckTel(obj) && !Ecshop.Tool.CheckMobile(obj)) {
        if (typeof (fn) == 'function') {
            fn(obj);
        }
        return false;
    }
    return true;
};

//输入邮件验证 onblur="Ecshop.Tool.CheckEmail($(this),function(){})" 袁章洪
Ecshop.Tool.CheckEmail = function (obj, fn) {
    if (obj.val == undefined) obj = $(obj); if (obj.val() == '')
        return;
    var re = /^([a-zA-Z0-9]+[_|\-|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\-|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
    if (!re.test(obj.val())) {
        if (typeof (fn) == 'function') {
            fn(obj);
        }
        return false;
    }
    return true;
};
//输入日期验证 onblur="Ecshop.Tool.CheckEmail($(this),function(){})" 袁章洪
Ecshop.Tool.CheckDate = function (obj, fn) {
    if (obj.val == undefined) obj = $(obj); if (obj.val() == '')
        return;
    var re = /^((((((0[48])|([13579][26])|([2468][048]))00)|([0-9][0-9]((0[48])|([13579][26])|([2468][048]))))-02-29)|(((000[1-9])|(00[1-9][0-9])|(0[1-9][0-9][0-9])|([1-9][0-9][0-9][0-9]))-((((0[13578])|(1[02]))-31)|(((0[1,3-9])|(1[0-2]))-(29|30))|(((0[1-9])|(1[0-2]))-((0[1-9])|(1[0-9])|(2[0-8]))))))$/;
    if (!re.test(obj.val())) {
        if (typeof (fn) == 'function') {
            fn(obj);
        }
        return false;
    }
    return true;
};

/*获取字符实际长度*/
Ecshop.Tool.CharLength = function (str) {

    var len = 0;
    for (var i = 0; i < str.length; i++) {
        if (str.charCodeAt(i) > 0 && str.charCodeAt(i) < 128)
            len++;
        else
            len += 2;
    }
    return len;
};

/*是否含html*/
Ecshop.Tool.CheckHtml = function (obj, fn) {
    if (obj.val == undefined) obj = $(obj); if (obj.val() == '')
        return;
    var re = /(<\/?[^>]*>)|(<\w)/;
    if (!re.test(obj.val())) {
        if (typeof (fn) == 'function') {
            fn(obj);
        }
        return false;
    }
    return true;
};

/*html标签转换*/
Ecshop.Tool.HtmlEscape = function (text) {
    return text.replace(/[<>"&]/g, function (match, pos, originalText) {
        switch (match) {
            case "<":
                return "&lt";
            case ">":
                return "&gt";
            case "&":
                return "&amp;";
            case "\"":
                return "&quot;";
        }
    });
};

///验证url地址
Ecshop.Tool.CheckLinkUrl = function (obj) {
    if (obj.val == undefined) obj = $(obj); if (obj.val() == '')
        return;
    var re = /^((http(s)?|ftp|telnet|news|rtsp|mms):\/\/)?(((\w(\-*\w)*\.)+[a-zA-Z]{2,4})|(((1\d\d|2([0-4]\d|5[0-5])|[1-9]\d|\d).){3}(1\d\d|2([0-4]\d|5[0-5])|[1-9]\d|\d).?))(:\d{0,5})?(\/+.*)*$/;
    if (!re.test(obj.val())) {
        if (typeof (fn) == 'function') {
            fn(obj);
        }
        return false;
    }
    return true;
}

Ecshop.Tool.CheckRadio = function (name, v) {
    v = v.toLocaleLowerCase();//转换成小写
    $("input[type=radio][name=" + name + "][value=" + v + "]").attr("checked", true);
}

Ecshop.Tool.CheckCheckBox = function (name, v) {
    v = v.toLocaleLowerCase();//转换成小写
    var arr = v.split(',');
    $.each(arr, function (n, value) {
        $("input[type=checkbox][name=" + name + "][value=" + value + "]").attr("checked", true);
    });
}
/*清除缓存*/
Ecshop.Tool.ClearCache = function (action) {
    $.post('/admin/controls/WeiXin/H5ClearCache.ashx', { type: action }).done(function (json) {
        json = $.isPlainObject(json) ? json : JSON.parse(json);
        if (json.code == 1) {
            Ecshop.Tool.Hint.Ok({ info: '清除系统缓存成功！', second: 2 });
        }
        else {
            Ecshop.Tool.Hint.Error({ info: '操作失败，请重试！', second: 0.8 });
        }
    }).fail(function () {
        Ecshop.Tool.Hint.Error({ info: '操作失败，请重试！', second: 0.8 });
    });
}
// 将小数点儿后面的数字（末尾为0的数字）去掉
String.prototype.ToFormattedDecimal = function () {
    var str = parseFloat(this).toFixed(4).toString();
    var arr = str.split(".");
    if (arr.length > 1) {
        var integralNumber = arr[0];
        var oldSmallNumber = arr[1];//小数点儿后面的数字
        var length = oldSmallNumber.length;
        var newSmallNumber = "";
        for (var i = length - 1; i > 1; i--) {
            var j = oldSmallNumber[i];
            if (i == 3) {
                if (parseInt(j) > 0)
                    newSmallNumber = j.toString() + newSmallNumber.toString();
            }
            else if (i == 2) {
                if (newSmallNumber != "" && parseInt(newSmallNumber) > 0) {
                    newSmallNumber = j.toString() + newSmallNumber.toString();
                } else {
                    if (parseInt(j) > 0)
                        newSmallNumber = j.toString() + newSmallNumber.toString();
                }
            }
        }
        newSmallNumber = oldSmallNumber.substring(0, 2) + newSmallNumber;
        str = integralNumber + "." + newSmallNumber;
    }

    return str;
};
Number.prototype.ToFormattedDecimal = function () {
    var str = this.toFixed(4).toString();
    var arr = str.split(".");
    if (arr.length > 1) {
        var integralNumber = arr[0];
        var oldSmallNumber = arr[1];//小数点儿后面的数字
        var length = oldSmallNumber.length;
        var newSmallNumber = "";
        for (var i = length - 1; i > 1; i--) {
            var j = oldSmallNumber[i];
            if (i == 3) {
                if (parseInt(j) > 0)
                    newSmallNumber = j.toString() + newSmallNumber.toString();
            }
            else if (i == 2) {
                if (newSmallNumber != "" && parseInt(newSmallNumber) > 0) {
                    newSmallNumber = j.toString() + newSmallNumber.toString();
                } else {
                    if (parseInt(j) > 0)
                        newSmallNumber = j.toString() + newSmallNumber.toString();
                }
            }
        }
        newSmallNumber = oldSmallNumber.substring(0, 2) + newSmallNumber;
        str = integralNumber + "." + newSmallNumber;
    }

    return str;
};

//格式化小数，最多显示两位
String.prototype.ToFormatDecimalMaxTwoPlace = function () {
    var str = this.toString();
    var arr = str.split(".");
    if (arr.length > 1) {
        var oldSmallNumber = arr[1];//小数点儿后面的数字
        if (parseFloat(oldSmallNumber) > 0)
            str = parseFloat(str).toFixed(2);
        else
            str = parseFloat(str).toFixed(0);
    }

    return str;
};
Number.prototype.ToFormatDecimalMaxTwoPlace = function () {
    var str = this.toString();
    var arr = str.split(".");
    if (arr.length > 1) {
        var oldSmallNumber = arr[1];//小数点儿后面的数字
        if (parseFloat(oldSmallNumber) > 0)
            str = parseFloat(str).toFixed(2);
        else
            str = parseFloat(str).toFixed(0);
    }

    return str;
};

String.prototype.replaceAll = function (stringToFind, stringToReplace) {

    var origin = this;
    var lastIndex = origin.indexOf(stringToFind);

    while (lastIndex != -1) {

        origin = origin.replace(stringToFind, stringToReplace);
        lastIndex = origin.indexOf(stringToFind);
    }

    return origin;
};
