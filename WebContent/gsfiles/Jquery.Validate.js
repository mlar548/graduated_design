/*
验证：整体验证，个别验证，
验证提示：消失、不消失
*/
!function ($, window) {
    var defaults = {			//forms默认配置	
        selector: null, 		//选择器
        context: null,
        tags: 'input[type="text"],input[type="password"],input[type="hidden"],input[type="radio"],input[type="checkbox"],select,textarea,var,img' //需要处理的表单元素
    },

	singleValid = function (types, o) {	//单一对象的正确性验证
	    var vtype = "", val = o.value, isEditor = false, istimer = false;
	    istimer = $(o).attr("istimer") == "true" ? true : false;
	    for (var i = 0; i < types.length; i++) { //根据类型进行数据的正确性判断
	        vtype = types[i];
	        if (vtype !== "") {
	            vtype = vtype.toLowerCase();

	            var c = {
	                element: o,
	                info: '此项不能为空！',
	                clsName: 'red_box',
	                istimer: istimer
	            };

	            if (isEditor) {
	                o.parentNode.id = "Tip_TD";
	                c.element = o.parentNode;
	                c.isEditor = true;
	            }

	            if ($.trim(val) == "") { //如果值为空时再处理
	                if (vtype == "isnull") {
	                    if (o) {
	                        o.focus();
	                    }
	                    tips.show(c);
	                    return false;
	                }
	            }
	            else {	//当值不为空时处理
	                if (regexEnum[vtype] != null) {

	                    var pattern = regexEnum[vtype];
	                    var ret = pattern.test(val);
	                    if (!ret) {
	                        c.info = $(o).attr("error") || '数据格式不正确';
	                        o.focus();
	                        //o.select();
	                        tips.show(c);
	                    }
	                    return ret;
	                }

	                //验证length属性
	                var len = $(o).attr("length");

	                if (len && o.tagName !== "SELECT") {
	                    var valText = $(o).val();
	                    var slen = 0
	                    if (typeof (valText) == "string") {
	                        slen = valText.length;
	                    }

	                    var minLen = len.toString().split('-')[0];
	                    var maxLen = len.toString().split('-')[1];
	                    maxLen = maxLen || 0;
	                    if (slen > maxLen || slen < minLen) {
	                        c.info = $(o).attr("error") || '输入超过限定长度';
	                        o.focus();
	                        tips.show(c);
	                        return false;
	                    }
	                }
	            }
	        }
	    }
	    return true;
	},

     /*对单独的文本框进行验证*/
    validateInput = function (el) {
        var ret = true;
        var $el = $(el),
            valid = $el.attr("validate"),
            visible = el ? (!(el.offsetWidth == 0 && el.offsetHeight == 0)) : false,//对元素的可见性进行判断
            isEditor = $el.attr("editor") == "true";
        if (valid && (isEditor || visible)) {
            var valied = singleValid(valid.split('|'), el);
            if (!valied) {
                ret = false;
                return false;
            }
        }
        return ret;
    },

    /*验证所需匹配的正则*/
	regexEnum = {
	    integer: /^(([1-9][0-9]*)|(0))$/,//正数包括0
	    decimal4: /^[0-9]+\.[0-9]+$/, //浮点数
	    decimal6: /^((0\.[0-9]*[1-9][0-9]*)|([1-9][0-9]{0,15}\.[0-9]+)|([1-9][0-9]{0,15}))/, //正浮点数整数位小于16
	    decimal7: /^((0\.[0-9]*[1-9][0-9]*)|([1-9][0-9]{0,15}\.[0-9]+)|([1-9][0-9]{0,15})|(0)|(0\.0+))$/, //正浮点数整数位小于16（包括0）
	    decimal2_: /^((0\.[0-9]*[1-9][0-9]*)|([1-9][0-9]{0,1}\.[0-9]+)|([1-9][0-9]{0,1})|(100\.0+)|(100))$/, //小数100的正浮点数
	    decimal2: /^((0\.[0-9]*[1-9][0-9]*)|([1-9][0-9]{0,1}\.[0-9]+)|([1-9][0-9]{0,1})|(100)|(100\.0+)|(0)|(0\.0+))$/, //小数100的正浮点数（包括0）
	    email: /^([a-zA-Z0-9]+[-_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,4}$/,
	    mobile: /^0?(13[0-9]|15[012356789]|18[0-9]|14[57])[0-9]{8}$/,
	    tel: /^((0\d{2,3})([-]|[—])?)?([1-9][0-9]{6,7})(([-]|[—])\d{1,4})?$/,
	    qq: /^([0-9]{0,15})$/,
	    url: /^((http(s)?|ftp|telnet|news|rtsp|mms):\/\/)(((\w(\-*\w)*\.)+[a-zA-Z]{2,4})|(((1\d\d|2([0-4]\d|5[0-5])|[1-9]\d|\d).){3}(1\d\d|2([0-4]\d|5[0-5])|[1-9]\d|\d).?))(:\d{0,5})?(\/+.*)*$/
	},

     tips = {	//所有提示信息配置

         timer: null,
         /*
         element:要验证的输入框
         istimer:是否启用setTimeout，默认为启用
         info：提示信息
         clsName：样式类（green_box 正确提示、red_gox 错误提示）
         */
         show: function (config) {	//显示提示信息
             var c = config || {},
                 el = $(c.element),
                 id = el.attr("id"),
                 istimer = false,
                 info = c.info;
             if (c.istimer != null && c.istimer != undefined) {
                 istimer = c.istimer;
             }
             if (info != null) {	//如果提示信息不这空
                 var tip = document.getElementById(id + "_tips");
                 if (!tip) tip = document.createElement("div")
                 sl = tip.style,
                     lc = el.offset();
                 tip.id = id + "_tips";
                 tip.innerHTML = '<!-- 皮层 -->\
			<div class="cover_box_skin">\
				<div class="confirm_box">\
					<!-- 图标 -->\
					<div class="cover_box_icon cover_BG"></div>\
					<!-- 提示信息 -->\
					<div class="cover_box_info">' + info + '</div>\
				</div>\
			</div><!-- //皮层 -->\
			<!-- 箭头指示(上) -->\
			<div class="cover_left cover_BG"></div>';
                 sl.position = "absolute";
                 sl.width = "auto";
                 sl.height = "auto";
                 sl.left = (lc.left + el.width() + 2) + "px";
                 sl.top = (lc.top - 5) + "px";
                 sl.display = "";
                 sl.zIndex = '99999';
                 tip.className = c.clsName;
                 console.log(id);
                 document.getElementsByTagName('body')[0].appendChild(tip);
                 if (istimer) {
                     tips.timer = setTimeout(function () {
                         tips.hide(el[0], true);
                     }, 1000);
                 }
             }
         },

         hide: function (el, tm) {	//隐藏提示信息
             var $el = $(el),
                 val = $el.val();
             if (typeof (val) == "string" && $.trim(val) == "" && typeof (tm) == "undefined") return; //当值为空时返回

             var id = $el.attr("id");

             //隐藏弹出的提示
             $('#' + id + "_tips").hide();
             $el.unbind('onblur', null); //解除对象的upkeyup事件

         }
     };

    extend = function (target, src) {	//对配置对象进行扩展处理
        for (var _ in src) {
            if (target[_] == undefined)
                target[_] = src[_];
        }
        return target;
    },

	ecvalidate = $.validateform = function (config) {	//创建Forms函数

	    var my = this; //简化附值

	    my._ = my.config = extend(config, defaults); //根据传入值和默认配置进行替换扩展

	    var dom = my._.context || document;	//设置从什么对象中选择一部分为表单

	    my.contexts = $(my._.selector, dom);

	    if (my.contexts.length < 1) return this; //如果没有找到指定需要选择的对象

	    my.context = my.contexts[0];

	    return my;

	};
    //只有实例化的才能取到,不能写成$.validateform(config).validate();因为以类的方式进行访问时，而prototype要以对象的形式进行访问
    ecvalidate.prototype = {

        validate: function () {	//验证表单,在此为表单元素绑定onchange事件来判断值是否需要验证以及错误等提示信息

            var c = this.config,
				ret = true;

            $(c.tags, this.context).each(function (el) {

                var el = this;

                if (!validateInput(el)) {

                    ret = false;//必须添加,因为return 在each只是中断循环。

                    return false;
                }
            });
            return ret;
        }
    };

    $.extend(ecvalidate, {		//对ecvalidate进行扩展

        defaults: defaults, //默认配置信息

        validateInput: validateInput,

        regexEnum: regexEnum,

        tips: tips

    });

}($, window);
