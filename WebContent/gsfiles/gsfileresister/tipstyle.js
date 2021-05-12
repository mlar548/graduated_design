/*所有提示信息配置*/
var PlaceholderTips = {
    telPlaceholder: function (config) {
        var tags = 'input[type="text"][placeholderinfo^=],input[type="password"][placeholderinfo^=]' //需要处理的表单元素
        var dom = config.context || document;
        var context = $(config.selector, dom);
        $(tags, context).each(function () {
            var el = this,
             id = this.id || this.name;
            var message = $(el).attr("placeholderinfo");
            var tip = document.getElementById(id + "_lb");

            if (!tip)
                tip = document.createElement("label")
            tip.id = id + "_lb";
            tip.className = config.className;

            var sl = el.style, lc = $(el).offset();
            var w = $(el).width(), h = $(el).height();
            var t = (lc.top + h / 2);
            //tip.style.height = $(el).height() / 2;
            tip.style.width = w + "px";
            tip.style.display = "none";
            tip.style.top = t + "px";
            tip.innerHTML = message;

            $(el).before(tip);
            $(tip).bind("click", function () {
                $(this).hide();
                $(el).focus();
            });

            if (el.value.length < 1) {
                $(tip).show();
            }
            $(el).bind("keydown", function () {
                $(tip).hide();
            });

            $(el).bind("blur", function () {
                var inputvalue = $(this).val();                if (inputvalue.replace(/(\s*$)/g, "").length < 1) {
                    $(tip).show();
                }
            });

        });
    },
    /*当文本框被选中时出现*/
    PlaceholderFocus: function (config) {
        var tags = 'input[type="text"][placeholderinfo^=],input[type="password"][placeholderinfo^=]' //需要处理的表单元素
        var dom = config.context || document;
        var context = $(config.selector, dom);
        $(tags, context).each(function () {
            var el = this,
             id = this.id || this.name;
            var message = $(el).attr("placeholderinfo");
            var tip = document.getElementById("msg_" + id);

            if (!tip) {
                tip = document.createElement("span");
                $(el).before(tip);
            }
            tip.id = "msg_" + id;

            $(el).bind("focus", function () {

                var inputvalue = $(this).val();
                if (inputvalue.replace(/(\s*$)/g, "").length < 1) {
                    tip.innerHTML = message;
                    tip.className = config.className;
                }

            }).bind("blur", function () {
                var inputvalue = $(this).val();                if (inputvalue.replace(/(\s*$)/g, "").length < 1 || tip.className == config.className) {
                    tip.className = config.hidclassName;
                }
            });;

        });
    }
};