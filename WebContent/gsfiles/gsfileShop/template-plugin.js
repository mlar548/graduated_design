/*****************第三方JS插件开始***********/

/*
 * jQuery Cookie Plugin v1.3.1
 */
(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        // CommonJS
        factory(require('jquery'));
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function ($) {

    var pluses = /\+/g;

    function encode(s) {
        return config.raw ? s : encodeURIComponent(s);
    }

    function decode(s) {
        return config.raw ? s : decodeURIComponent(s);
    }

    function stringifyCookieValue(value) {
        return encode(config.json ? JSON.stringify(value) : String(value));
    }

    function parseCookieValue(s) {
        if (s.indexOf('"') === 0) {
            // This is a quoted cookie as according to RFC2068, unescape...
            s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
        }

        try {
            // Replace server-side written pluses with spaces.
            // If we can't decode the cookie, ignore it, it's unusable.
            // If we can't parse the cookie, ignore it, it's unusable.
            s = decodeURIComponent(s.replace(pluses, ' '));
            return config.json ? JSON.parse(s) : s;
        } catch (e) { }
    }

    function read(s, converter) {
        var value = config.raw ? s : parseCookieValue(s);
        return $.isFunction(converter) ? converter(value) : value;
    }

    var config = $.cookie = function (key, value, options) {

        // Write

        if (arguments.length > 1 && !$.isFunction(value)) {
            options = $.extend({}, config.defaults, options);

            if (typeof options.expires === 'number') {
                var days = options.expires, t = options.expires = new Date();
                t.setTime(+t + days * 864e+5);
            }

            return (document.cookie = [
				encode(key), '=', stringifyCookieValue(value),
				options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
				options.path ? '; path=' + options.path : '',
				options.domain ? '; domain=' + options.domain : '',
				options.secure ? '; secure' : ''
            ].join(''));
        }

        // Read

        var result = key ? undefined : {};

        // To prevent the for loop in the first place assign an empty array
        // in case there are no cookies at all. Also prevents odd result when
        // calling $.cookie().
        var cookies = document.cookie ? document.cookie.split('; ') : [];

        for (var i = 0, l = cookies.length; i < l; i++) {
            var parts = cookies[i].split('=');
            var name = decode(parts.shift());
            var cookie = parts.join('=');

            if (key && key === name) {
                // If second argument (value) is a function it's a converter...
                result = read(cookie, value);
                break;
            }

            // Prevent storing a cookie that we couldn't decode.
            if (!key && (cookie = read(cookie)) !== undefined) {
                result[name] = cookie;
            }
        }

        return result;
    };

    config.defaults = {};

    $.removeCookie = function (key, options) {
        if ($.cookie(key) === undefined) {
            return false;
        }

        // Must not alter options, thus extending a fresh object...
        $.cookie(key, '', $.extend({}, options, { expires: -1 }));
        return !$.cookie(key);
    };

}));

/*
 * jQuery jCarouselLite
 */
(function ($) {                                          // Compliant with jquery.noConflict()
    $.fn.jCarouselLite = function (o, visb) {
        o = $.extend({
            btnPrev: null,
            btnNext: null,
            btnGo: null,
            mouseWheel: false,
            auto: null,

            speed: 200,
            easing: null,

            vertical: false,
            circular: true,
            visible: 3,
            start: 0,
            scroll: 1,

            beforeStart: null,
            afterEnd: null,
            isResize: false
        }, o || {});

        return this.each(function () {                           // Returns the element collection. Chainable.

            var running = false, animCss = o.vertical ? "top" : "left", sizeCss = o.vertical ? "height" : "width";
            var div = $(this), ul = $("ul", div), tLi = $("li", ul), tl = tLi.size(), v = visb;

            if (o.circular) {
                ul.prepend(tLi.slice(tl - v - 1 + 1).clone())
              .append(tLi.slice(0, v).clone());
                o.start += v;
            }

            var li = $("li", ul), itemLength = li.size(), curr = o.start;
            div.css("visibility", "visible");

            li.css({ overflow: "hidden", float: o.vertical ? "none" : "left" });
            ul.css({ margin: "0", padding: "0", position: "relative", "list-style-type": "none", "z-index": "1" });
            div.css({ overflow: "hidden", position: "relative", "z-index": "2", left: "0px" });

            var liSize = o.vertical ? height(li) : width(li);   // Full li size(incl margin)-Used for animation
            var ulSize = liSize * itemLength;                   // size of full ul(total length, not just for the visible items)
            var divSize = liSize * v;                           // size of entire div(total length for just the visible items)
            li.css({ width: li.width(), height: li.height() });
            ul.css(sizeCss, ulSize + "px").css(animCss, -(curr * liSize));

            //div.css(sizeCss, divSize + "px");                     // Width of the DIV. length of visible images

            if (o.btnPrev)
                $(o.btnPrev).click(function () {
                    return go(curr - o.scroll);
                });

            if (o.btnNext)
                $(o.btnNext).click(function () {
                    return go(curr + o.scroll);
                });

            if (o.btnGo)
                $.each(o.btnGo, function (i, val) {
                    $(val).click(function () {
                        return go(o.circular ? o.visible + i : i);
                    });
                });

            if (o.mouseWheel && div.mousewheel)
                div.mousewheel(function (e, d) {
                    return d > 0 ? go(curr - o.scroll) : go(curr + o.scroll);
                });

            var timer = null;
            if (o.auto) {
                clearInterval(timer);
                timer = setInterval(function () {
                    if (template_plugin.public._jasonSilder._isResize) {
                        v = div.attr("visb");
                        //console.log(v + "-" + template_plugin.public._jasonSilder._isResize);
                        li.css({ width: li.width(), height: li.height() });
                        ul.css(sizeCss, ulSize + "px").css(animCss, -(curr * liSize));
                    }

                    go(curr + o.scroll);
                }, o.auto + o.speed);
            }

            function vis() {
                return li.slice(curr).slice(0, v);
            };

            function go(to) {

                if (!running) {

                    if (o.beforeStart)
                        o.beforeStart.call(this, vis());

                    if (o.circular) {            // If circular we are in first or last, then goto the other end
                        if (to <= o.start - v - 1) {           // If first, then goto last
                            ul.css(animCss, -((itemLength - (v * 2)) * liSize) + "px");
                            // If "scroll" > 1, then the "to" might not be equal to the condition; it can be lesser depending on the number of elements.
                            curr = to == o.start - v - 1 ? itemLength - (v * 2) - 1 : itemLength - (v * 2) - o.scroll;
                        } else if (to >= itemLength - v + 1) { // If last, then goto first
                            ul.css(animCss, -((v) * liSize) + "px");
                            // If "scroll" > 1, then the "to" might not be equal to the condition; it can be greater depending on the number of elements.
                            curr = to == itemLength - v + 1 ? v + 1 : v + o.scroll;
                        } else curr = to;
                    } else {                    // If non-circular and to points to first or last, we just return.
                        //if (to < 0 || to > itemLength - v) return;
                        if (to < 0 || to > itemLength - v) curr = 0;
                        else curr = to;
                    }                           // If neither overrides it, the curr will still be "to" and we can proceed.

                    running = true;

                    ul.animate(
                    animCss == "left" ? { left: -(curr * liSize) } : { top: -(curr * liSize) }, o.speed, o.easing,
                    function () {
                        if (o.afterEnd)
                            o.afterEnd.call(this, vis());
                        running = false;
                    }
                );
                    // Disable buttons when the carousel reaches the last/first, and enable when not
                    if (!o.circular) {
                        // $(o.btnPrev + "," + o.btnNext).removeClass("disabled");这样写要报错，所以用下面一行的写法
                        o.btnPrev.removeClass("disabled");
                        o.btnNext.removeClass("disabled");
                        $((curr - o.scroll < 0 && o.btnPrev)
                        ||
                       (curr + o.scroll > itemLength - v && o.btnNext)
                        ||
                       []
                     ).addClass("disabled");
                    }

                }
                return false;
            };
        });
    };

    function css(el, prop) {
        return parseInt($.css(el[0], prop)) || 0;
    };
    function width(el) {
        return $(el[0]).width() + css(el, 'marginLeft') + css(el, 'marginRight');
    };
    function height(el) {
        return $(el[0]).height() + css(el, 'marginTop') + css(el, 'marginBottom');
    };

})(jQuery);

/*
 * jQuery 无缝滚动小插件bY ztj
 */
(function ($) {
    $.fn.jasonMarquee = function (options) {
        var defaults = {
            direction: 'x',
            speed: 10
        };
        var options = $.extend(defaults, options);
        return this.each(function () {
            var $marquee = $(this)
            var $marquee_scroll = $marquee.children('ul');
            var $marquee_li = $marquee_scroll.find('li');
            if (options.direction == "x") {
                if ($marquee_li.outerWidth(true) * $marquee_li.length < $marquee.width()) {
                    return;
                }
            }
            if (options.direction == "y") {
                if ($marquee_li.outerHeight(true) * $marquee_li.length < $marquee.height()) {
                    return;
                }
            }

            $marquee_scroll.append($marquee_scroll.find('li').clone());
            if (options.direction == "x") {
                var x = 0;
                $marquee_scroll.css('width', '1000%');
                var _width = $marquee_li.outerWidth(true) * $marquee_li.length;
                function Marquee_x() {
                    $marquee.scrollLeft(++x);
                    if (x == _width) { x = 0 };
                };
                var MyMar = setInterval(Marquee_x, options.speed);
                $marquee.hover(function () {
                    clearInterval(MyMar);
                }, function () {
                    MyMar = setInterval(Marquee_x, options.speed);
                });
            }
            if (options.direction == "y") {
                var y = 0;
                $marquee_scroll.css('height', '1000%');
                var _height = $marquee_li.outerHeight(true) * $marquee_li.length;
                function Marquee_y() {
                    $marquee.scrollTop(++y);
                    if (y == _height) { y = 0 };
                };
                var MyMar = setInterval(Marquee_y, options.speed);
                $marquee.hover(function () {
                    clearInterval(MyMar);
                }, function () {
                    MyMar = setInterval(Marquee_y, options.speed);
                });
            }
        });
    };
})(jQuery);

/*
 * jQuery smallslider
 */
(function ($) {

    $.smallslider = function (elm, options) {

        // this 为当前的smallslider对象，为了区别，使用 _this 替换
        var _this = this;
        _this.elm = elm;     // elm 为当前的 DOM对象 ，即使用class="smallslider" 的那个div对象。
        _this.$elm = $(elm);  // $elm 为elm对象的jquery形式 
        _this.opts = $.extend({}, $.smallslider.defaults, options);
        _this.sliderTimer = null;

        // 初始化对象
        _this.init = function () {
            _this.$ul = _this.$elm.find('>ul');  // 为子元素ul
            _this.$lis = _this.$elm.find('li');  // 为所有ul下子元素li 数组
            _this.$ims = _this.$elm.find('img');  // 为所有li下子元素img 数组
            _this.itemNums = _this.$lis.length;
            _this.width = _this.$elm.width();
            _this.height = _this.$elm.height();
            _this.current = 0; 		// 当前的index索引
            if (_this.itemNums > 1) {
                if (_this.opts.switchEffect == 'ease') {
                    _this.$ul.css({
                        position: 'absolute',
                        left: 0,
                        top: 0
                    });
                    if (_this.opts.switchPath == 'left') {
                        var width = _this.itemNums * _this.width;
                        _this.$lis.css({
                            'float': 'left',
                            'width': _this.width
                        });
                        _this.$ul.css({
                            'width': width
                        });
                    }
                    else if (_this.opts.switchPath == 'up') {
                        var height = _this.itemNums * _this.height;
                        _this.$ul.css({
                            'height': height
                        });
                    }
                }
                else if (_this.opts.switchEffect == 'fadeOut') {
                    _this.$ul.css({
                        position: 'relative'
                    });
                    _this.$lis.css({
                        position: 'absolute',
                        zIndex: 1
                    }).eq(0).css({
                        zIndex: 2
                    });
                }
                if (_this.opts.showButtons) {
                    _this.createButtons(); // 创建按钮。
                }
                if (_this.opts.showText) {
                    _this.createText(); // 创建文字显示。
                }
                if (_this.opts.autoStart) {
                    _this.startSlider(1);
                }
                if (_this.opts.onImageStop) {
                    _this.onImage();
                }
            }
        };
        _this.createButtons = function () {
            var buttons = '';
            for (var i = 1; i <= _this.itemNums; i++) {
                buttons += '<span>' + i + '</span>';
            }
            buttons = '<div class="smallslider-btns">' + buttons + '</div>';
            var left = 0, right = 0, top = 0, bottom = 0;
            var style_btns = {};
            switch (_this.opts.buttonPosition) {
                case 'leftTop':
                    left = _this.opts.buttonOffsetX;
                    top = _this.opts.buttonOffsetY;
                    style_btns = { left: left + 'px', top: top + 'px' };
                    break;
                case 'rightTop':
                    right = _this.opts.buttonOffsetX;
                    top = _this.opts.buttonOffsetY;
                    style_btns = { right: right + 'px', top: top + 'px' };
                    break;
                case 'rightBottom':
                    right = _this.opts.buttonOffsetX;
                    bottom = _this.opts.buttonOffsetY;
                    style_btns = { right: right + 'px', bottom: bottom + 'px' };
                    break;
                case 'leftBottom':
                    left = _this.opts.buttonOffsetX;
                    bottom = _this.opts.buttonOffsetY;
                    style_btns = { left: left + 'px', bottom: bottom + 'px' };
                    break;
            }
            $(buttons).css(style_btns).appendTo(_this.$elm);
            _this.$btns = _this.$elm.find('span');
            _this.$elm.find('span:not(:first)').css({ marginLeft: _this.opts.buttonSpace + 'px' });
            _this.$btns.removeClass('current-btn');
            _this.$btns.eq(0).addClass('current-btn');
            if (_this.opts.switchMode == 'click') {
                _this.$btns.click(function () {
                    var ix = _this.$btns.index($(this));
                    _this.slideTo(ix); // 表示需要切换到哪一张
                });
            } else if (_this.opts.switchMode == 'hover') {
                _this.$btns.hover(function () {
                    var ix = _this.$btns.index($(this));
                    _this.slideTo(ix);
                    _this.stopSlider(); //应客户要求，当鼠标移动到导航1,2,3..上面时，停止滚动. modified time:2013-3-7. by ztj
                });
            }
        };

        // 创建标题标签
        _this.createText = function () {
            var style_tex = {};
            switch (_this.opts.buttonPosition) {
                case 'leftTop':
                    style_tex = { left: 0, top: 0, textAlign: 'right' };
                    _this.textPosition = 'top';
                    break;
                case 'rightTop':
                    style_tex = { left: 0, top: 0, textAlign: 'left' };
                    _this.textPosition = 'top';
                    break;
                case 'rightBottom':
                    style_tex = { left: 0, bottom: 0, textAlign: 'left' };
                    _this.textPosition = 'bottom';
                    break;
                case 'leftBottom':
                    style_tex = { left: 0, bottom: 0, textAlign: 'right' };
                    _this.textPosition = 'bottom';
                    break;
            }
            if (_this.opts.textPosition) {
                switch (_this.opts.textPosition) {
                    case 'top':
                        style_tex.left = 0; style_tex.top = 0;
                        break;
                    case 'bottom':
                        style_tex.left = 0; style_tex.bottom = 0;
                        break;
                }
                _this.textPosition = _this.opts.textPosition;
            }
            if (_this.opts.textAlign) {
                style_tex.textAlign = _this.opts.textAlign;
            }
            $('<div class="smallslider-tex smallslider-lay"></div>').css(style_tex).css({
                opacity: 0.39
            }).appendTo(_this.$elm);

            var tex0 = _this.$ims.eq(0).attr('alt');
            if (_this.opts.textLink) {
                tex0 = '<a href="' + _this.$ims.eq(0).parent('a').attr('href') + '">' + tex0 + '</a>';
            }
            $('<h3 class="smallslider-tex"></h3>').css(style_tex).html(tex0).appendTo(_this.$elm);
            _this.$h3 = _this.$elm.find('h3');
            _this.$lay = _this.$elm.find('div.smallslider-lay');
            _this.$tex = _this.$elm.find('.smallslider-tex');
        };
        _this.onImage = function () {
            _this.$elm.hover(function () {
                _this.stopSlider();
            }, function () {
                //_this.slideTo(_this.current + 1);
                _this.startSlider(_this.current + 1);
            });
        };

        _this.slideTo = function (index) {
            _this.stopSlider(); // 先清掉以前的setTimeout;
            if (index > _this.itemNums - 1) index = 0;
            if (index < 0) index = _this.itemNums - 1;
            // 切换表示当前元素
            _this.$lis.removeClass('current-li').eq(index).addClass('current-li');
            if (_this.opts.showButtons) {
                _this.$btns.removeClass('current-btn');
                _this.$btns.eq(index).addClass('current-btn');
            }
            _this.slideText(index);
            var chAttr = '';
            var iC = 0;
            switch (_this.opts.switchPath) {
                case 'left':
                    chAttr = 'left';
                    iC = _this.width;
                    break;
                case 'up':
                default:
                    chAttr = 'top';
                    iC = _this.height;
                    break;
            }
            var iCx = -1 * index * iC; // Top或Left 变化量
            var switchEase = _this.opts.switchEase;
            switch (_this.opts.switchEffect) {
                case 'fadeOut':
                    _this.$lis.stop(true, false);
                    _this.$lis.css({ zIndex: 1, opacity: 1 }).hide();
                    _this.$lis.eq(_this.current).css({ zIndex: 3 }).show();
                    _this.$lis.eq(index).css({ zIndex: 2 }).show();
                    if (_this.current != index) {
                        _this.$lis.eq(_this.current).fadeOut(_this.opts.switchTime, function () {
                            _this.$lis.css({ zIndex: 1 });
                            _this.$lis.eq(index).css({ zIndex: 3, opacity: 1 }).show();
                        });
                    }
                    break;
                case 'ease':
                    _this.$ul.stop(true, false);
                    if (chAttr == 'top')
                        _this.$ul.animate({ top: iCx }, {
                            duration: _this.opts.switchTime, easing: switchEase, complete: function () {
                            }
                        });
                    else if (chAttr == 'left')
                        _this.$ul.animate({ left: iCx }, {
                            duration: _this.opts.switchTime, easing: switchEase, complete: function () {
                            }
                        });
                    break;
                case 'none':
                default:
                    _this.$lis.eq(_this.current).hide();
                    _this.$lis.eq(index).show();
                    break;
            }
            _this.current = index;
            _this.startSlider(index + 1);
        };

        // 切换文字
        _this.slideText = function (index) {
            if (_this.opts.showText) {
                var tex = _this.$ims.eq(index).attr('alt');
                if (_this.opts.textLink) {
                    tex = '<a href="' + _this.$ims.eq(index).parent('a').attr('href') + '">' + tex + '</a>';
                }
                _this.$h3.html(tex);
                if (_this.opts.textSwitch > 0) {
                    var t_path = _this.$h3.height();
                    var t_ani1 = {}, t_ani2 = {};
                    if (_this.textPosition == 'top') {
                        t_ani1 = { top: -1 * t_path };
                        t_ani2 = { top: 0 };
                    }
                    else if (_this.textPosition == 'bottom') {
                        t_ani1 = { bottom: -1 * t_path };
                        t_ani2 = { bottom: 0 };
                    }
                    if (_this.opts.textSwitch == 1) {
                        _this.$h3.stop(true, false).animate(t_ani1, { duration: 200, easing: 'easeOutQuad' }).animate(t_ani2, { duration: 200, easing: 'easeOutQuad' });
                    } else if (_this.opts.textSwitch == 2) {
                        _this.$tex.stop(true, false).animate(t_ani1, { duration: 200, easing: 'easeOutQuad' }).animate(t_ani2, { duration: 200, easing: 'easeOutQuad' });
                        //_this.$lay.animate(t_ani1, {duration: 200, easing: 'easeOutQuad'}).animate(t_ani2, {duration: 200, easing: 'easeOutQuad'});
                    }
                }
            }
        };

        // 开始切换
        _this.startSlider = function (index) {
            // 由第几个序号开始 初始为1
            var st = setTimeout(function () {
                _this.slideTo(index);
            }, _this.opts.time);
            _this.sliderTimer = st;
        };
        // 停止切换
        _this.stopSlider = function () {
            //if(_this.opts.switchEffect=='fadeOut') _this.$lis.stop();
            //  else if(_this.opts.switchEffect=='ease') _this.$ul.stop();
            if (_this.sliderTimer) {
                clearTimeout(_this.sliderTimer);
            }
            _this.sliderTimer = null;
        };

        _this.init();
    };

    $.smallslider.defaults = {
        time: 4000,              // 切换时间间隔，单位毫秒，1秒=1000毫秒
        autoStart: true,         // 是否自动开始播放
        onImageStop: false, // 鼠标放在图片上时，是否停止播放
        switchMode: 'hover',     // 图片切换的方式，click为单击切换，hover为鼠标移动到按钮上时切换
        switchEffect: 'fadeOut', // 切换特效,fadeOut, ease, none,
        switchPath: 'left', // 切换的方向，可选值为：up ， left ，即向上，向左
        switchEase: 'easeOutQuart', // 可选值列表如下
        switchTime: 600,         // 切换时间，单位毫秒，1秒=1000毫秒
        buttonPosition: 'rightBottom', // 按钮位置表示，共有四个值：leftTop，leftBottom, rightTop, rightBottom
        buttonOffsetX: 10,             // 水平方向上的按钮偏移位置，指向中心部移动多少，这里是数值，不加px
        buttonOffsetY: 4,              // 竖直方向上的按钮偏移位置，指向中心部移动多少，这里是数值，不加px
        buttonSpace: 4,           // 按钮之间的间隔 单位为像素，但不要加px
        showText: true,          // 是否显示标题，如果不显示，则只显示按钮
        showButtons: true,     // 是否显示按钮，默认显示
        textLink: true,          // 是否给显示的标题加上链接，如果为false，则，只显示标题，标题不可单击，链接的地址自动和当前播放到的图片地址一致
        textSwitch: 0, // 标题是否运动显示，如果为0则不动，1 标题动，2 标题和背景一起动。
        textPosition: '', 	// 标题栏的位置，默认为空，即和按钮的位置一致，取值 top ,  bottom
        textAlign: ''		// 如果留空，则会默认和按钮位置的相反方向排列，取值：left, center, right
    };

    $.fn.smallslider = function (options) {
        // 遍历由$.smallslider类创建生成的smallslider对象。
        return this.each(function (i) {
            (new $.smallslider(this, options));
        });
    };

})(jQuery);
$.smallslider.switchEases = ["easeInQuad", "easeOutQuad", "easeInOutQuad", "easeInCubic", "easeOutCubic",
 "easeInOutCubic", "easeInQuart", "easeOutQuart", "easeInOutQuart", "easeInQuint", "easeOutQuint", "easeInOutQuint",
 "easeInSine", "easeOutSine", "easeInOutSine", "easeInExpo", "easeOutExpo", "easeInOutExpo", "easeInCirc", "easeOutCirc", "easeInOutCirc", "easeInElastic",
 "easeOutElastic", "easeInOutElastic", "easeInBack", "easeOutBack", "easeInOutBack",
 "easeInBounce", "easeOutBounce", "easeInOutBounce"];

/*
 * jQuery Easing
 */
// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend(jQuery.easing,
{
    def: 'easeOutQuad',
    swing: function (x, t, b, c, d) {
        //alert(jQuery.easing.default);
        return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
    },
    easeInQuad: function (x, t, b, c, d) {
        return c * (t /= d) * t + b;
    },
    easeOutQuad: function (x, t, b, c, d) {
        return -c * (t /= d) * (t - 2) + b;
    },
    easeInOutQuad: function (x, t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t + b;
        return -c / 2 * ((--t) * (t - 2) - 1) + b;
    },
    easeInCubic: function (x, t, b, c, d) {
        return c * (t /= d) * t * t + b;
    },
    easeOutCubic: function (x, t, b, c, d) {
        return c * ((t = t / d - 1) * t * t + 1) + b;
    },
    easeInOutCubic: function (x, t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
        return c / 2 * ((t -= 2) * t * t + 2) + b;
    },
    easeInQuart: function (x, t, b, c, d) {
        return c * (t /= d) * t * t * t + b;
    },
    easeOutQuart: function (x, t, b, c, d) {
        return -c * ((t = t / d - 1) * t * t * t - 1) + b;
    },
    easeInOutQuart: function (x, t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
        return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
    },
    easeInQuint: function (x, t, b, c, d) {
        return c * (t /= d) * t * t * t * t + b;
    },
    easeOutQuint: function (x, t, b, c, d) {
        return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
    },
    easeInOutQuint: function (x, t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b;
        return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
    },
    easeInSine: function (x, t, b, c, d) {
        return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
    },
    easeOutSine: function (x, t, b, c, d) {
        return c * Math.sin(t / d * (Math.PI / 2)) + b;
    },
    easeInOutSine: function (x, t, b, c, d) {
        return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
    },
    easeInExpo: function (x, t, b, c, d) {
        return (t == 0) ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
    },
    easeOutExpo: function (x, t, b, c, d) {
        return (t == d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
    },
    easeInOutExpo: function (x, t, b, c, d) {
        if (t == 0) return b;
        if (t == d) return b + c;
        if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
        return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
    },
    easeInCirc: function (x, t, b, c, d) {
        return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
    },
    easeOutCirc: function (x, t, b, c, d) {
        return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
    },
    easeInOutCirc: function (x, t, b, c, d) {
        if ((t /= d / 2) < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
        return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
    },
    easeInElastic: function (x, t, b, c, d) {
        var s = 1.70158; var p = 0; var a = c;
        if (t == 0) return b; if ((t /= d) == 1) return b + c; if (!p) p = d * .3;
        if (a < Math.abs(c)) { a = c; s = p / 4; }
        else s = p / (2 * Math.PI) * Math.asin(c / a);
        return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
    },
    easeOutElastic: function (x, t, b, c, d) {
        var s = 1.70158; var p = 0; var a = c;
        if (t == 0) return b; if ((t /= d) == 1) return b + c; if (!p) p = d * .3;
        if (a < Math.abs(c)) { a = c; s = p / 4; }
        else s = p / (2 * Math.PI) * Math.asin(c / a);
        return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
    },
    easeInOutElastic: function (x, t, b, c, d) {
        var s = 1.70158; var p = 0; var a = c;
        if (t == 0) return b; if ((t /= d / 2) == 2) return b + c; if (!p) p = d * (.3 * 1.5);
        if (a < Math.abs(c)) { a = c; s = p / 4; }
        else s = p / (2 * Math.PI) * Math.asin(c / a);
        if (t < 1) return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
        return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b;
    },
    easeInBack: function (x, t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        return c * (t /= d) * t * ((s + 1) * t - s) + b;
    },
    easeOutBack: function (x, t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
    },
    easeInOutBack: function (x, t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        if ((t /= d / 2) < 1) return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b;
        return c / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b;
    },
    easeInBounce: function (x, t, b, c, d) {
        return c - jQuery.easing.easeOutBounce(x, d - t, 0, c, d) + b;
    },
    easeOutBounce: function (x, t, b, c, d) {
        if ((t /= d) < (1 / 2.75)) {
            return c * (7.5625 * t * t) + b;
        } else if (t < (2 / 2.75)) {
            return c * (7.5625 * (t -= (1.5 / 2.75)) * t + .75) + b;
        } else if (t < (2.5 / 2.75)) {
            return c * (7.5625 * (t -= (2.25 / 2.75)) * t + .9375) + b;
        } else {
            return c * (7.5625 * (t -= (2.625 / 2.75)) * t + .984375) + b;
        }
    },
    easeInOutBounce: function (x, t, b, c, d) {
        if (t < d / 2) return jQuery.easing.easeInBounce(x, t * 2, 0, c, d) * .5 + b;
        return jQuery.easing.easeOutBounce(x, t * 2 - d, 0, c, d) * .5 + c * .5 + b;
    }
});

/*
 * jQuery jQZoom
 */
(function ($) {
    //    $(".product_body_left .jqzoom .zoomimg").css("width", "auto");
    //    $(".product_body_left .jqzoom .zoomimg").css("height", "auto");
    //    $(".product_body_left .jqzoom .zoomimg").attr("width", "auto");
    //    $(".product_body_left .jqzoom .zoomimg").attr("height", "auto");
    $.fn.jqueryzoom = function (options) {
        var settings = {
            xzoom: 500, 	//zoomed width default width
            yzoom: 500, 	//zoomed div default width
            offset: 10, 	//zoomed div default offset
            position: "right", //zoomed div default position,offset position is to the right of the image
            lens: 1, //zooming lens over the image,by default is 1;
            preload: 1

        };
        if (options) {
            $.extend(settings, options);
        }
        var noalt = '';
        $(this).hover(function () {
            var imageLeft = $(this).offset().left;
            var imageTop = $(this).offset().top;
            var imageWidth = $(this).get(0).offsetWidth;
            var imageHeight = $(this).get(0).offsetHeight;
            noalt = $(this).children("img").attr("alt");
            var bigimage = $(this).children("img").attr("jqimg")
            //var idx = bigimage.lastIndexOf("_");
            //bigimage = bigimage.substring(0, idx).indexOf(".jpg") > -1 ? bigimage.substring(0, idx) : bigimage;
            $(this).children("img").attr("alt", noalt);
            if ($("div.zoomdiv").get().length == 0) {
                $("body").append("<div class='zoomdiv'><img class='bigimg' src='" + bigimage + "'/></div>");
                $("div.jqZoomPup").show();
                //                $(this).append("<div class='jqZoomPup'>&nbsp;</div>");
            }
            if (settings.position == "right") {
                if (imageLeft + imageWidth + settings.offset + settings.xzoom > screen.width) {
                    leftpos = imageLeft - settings.offset - settings.xzoom;
                } else {
                    leftpos = imageLeft + imageWidth + settings.offset;
                }
            } else {
                leftpos = imageLeft - settings.xzoom - settings.offset;
                if (leftpos < 0) {
                    leftpos = imageLeft + imageWidth + settings.offset;
                }
            }
            $("div.zoomdiv").css({ top: imageTop, left: leftpos });
            $("div.zoomdiv").width(settings.xzoom);
            $("div.zoomdiv").height(settings.yzoom);
            $("div.zoomdiv").show();
            if (!settings.lens) {
                $(this).css('cursor', 'crosshair');
            }
            $(document.body).mousemove(function (e) {
                mouse = new JqMouseEvent(e);
                var bigwidth = $(".zoomdiv").find("img").get(0).offsetWidth;
                var bigheight = $(".zoomdiv").find("img").get(0).offsetHeight;
                var scaley = 'x';
                var scalex = 'y';
                if (isNaN(scalex) | isNaN(scaley)) {
                    var scalex = (bigwidth / imageWidth);
                    var scaley = (bigheight / imageHeight);
                    $("div.jqZoomPup").width((settings.xzoom) / scalex);
                    $("div.jqZoomPup").height((settings.yzoom) / scaley);
                    if (settings.lens) {
                        $("div.jqZoomPup").css('visibility', 'visible');
                    }
                }
                xpos = mouse.x - $("div.jqZoomPup").width() / 2 - imageLeft;
                ypos = mouse.y - $("div.jqZoomPup").height() / 2 - imageTop;
                if (settings.lens) {
                    xpos = (mouse.x - $("div.jqZoomPup").width() / 2 < imageLeft) ? 0 : (mouse.x + $("div.jqZoomPup").width() / 2 > imageWidth + imageLeft) ? (imageWidth - $("div.jqZoomPup").width() - 2) : xpos;
                    ypos = (mouse.y - $("div.jqZoomPup").height() / 2 < imageTop) ? 0 : (mouse.y + $("div.jqZoomPup").height() / 2 > imageHeight + imageTop) ? (imageHeight - $("div.jqZoomPup").height() - 2) : ypos;
                }
                if (settings.lens) {
                    $("div.jqZoomPup").css({ top: ypos, left: xpos });
                }
                scrolly = ypos;
                $("div.zoomdiv").get(0).scrollTop = scrolly * scaley;
                scrollx = xpos;
                $("div.zoomdiv").get(0).scrollLeft = (scrollx) * scalex;
            });
        }
        , function () {
            $(this).children("img").attr("alt", noalt);
            $(document.body).unbind("mousemove");
            if (settings.lens) {
                $("div.jqZoomPup").hide();
            }
            $("div.zoomdiv").remove();
        }
        );
        count = 0;
        if (settings.preload) {
            $('body').append("<div style='display:none;' class='jqPreload" + count + "'>sdsdssdsd</div>");
            $(this).each(function () {
                var imagetopreload = $(this).children("img").attr("jqimg");
                var content = jQuery('div.jqPreload' + count + '').html();
                jQuery('div.jqPreload' + count + '').html(content + '<img src=\"' + imagetopreload + '\">');

            });
        }
    }
})(jQuery);
function JqMouseEvent(e) {
    this.x = e.pageX;
    this.y = e.pageY;
}

/*! echo.js v1.7.0 | (c) 2015 @toddmotto | https://github.com/toddmotto/echo */
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(function () {
            return factory(root);
        });
    } else if (typeof exports === 'object') {
        module.exports = factory;
    } else {
        root.echo = factory(root);
    }
})(this, function (root) {

    'use strict';

    var echo = {};

    var callback = function () { };

    var offset, poll, delay, useDebounce, unload;

    var isHidden = function (element) {
        return (element.offsetParent === null);
    };

    if (!document.querySelectorAll) {
        document.querySelectorAll = function (selectors) {
            var style = document.createElement('style'), elements = [], element;
            document.documentElement.firstChild.appendChild(style);
            document._qsa = [];

            style.styleSheet.cssText = selectors + '{x-qsa:expression(document._qsa && document._qsa.push(this))}';
            window.scrollBy(0, 0);
            style.parentNode.removeChild(style);

            while (document._qsa.length) {
                element = document._qsa.shift();
                element.style.removeAttribute('x-qsa');
                elements.push(element);
            }
            document._qsa = null;
            return elements;
        };
    }

    var inView = function (element, view) {
        if (isHidden(element)) {
            return false;
        }

        var box = element.getBoundingClientRect();
        return (box.right >= view.l && box.bottom >= view.t && box.left <= view.r && box.top <= view.b);
    };

    var debounceOrThrottle = function () {
        if (!useDebounce && !!poll) {
            return;
        }
        clearTimeout(poll);
        poll = setTimeout(function () {
            echo.render();
            poll = null;
        }, delay);
    };

    echo.init = function (opts) {
        opts = opts || {};
        var offsetAll = opts.offset || 0;
        var offsetVertical = opts.offsetVertical || offsetAll;
        var offsetHorizontal = opts.offsetHorizontal || offsetAll;
        var optionToInt = function (opt, fallback) {
            return parseInt(opt || fallback, 10);
        };
        offset = {
            t: optionToInt(opts.offsetTop, offsetVertical),
            b: optionToInt(opts.offsetBottom, offsetVertical),
            l: optionToInt(opts.offsetLeft, offsetHorizontal),
            r: optionToInt(opts.offsetRight, offsetHorizontal)
        };
        delay = optionToInt(opts.throttle, 250);
        useDebounce = opts.debounce !== false;
        unload = !!opts.unload;
        callback = opts.callback || callback;
        echo.render();
        if (document.addEventListener) {
            root.addEventListener('scroll', debounceOrThrottle, false);
            root.addEventListener('load', debounceOrThrottle, false);
        } else {
            root.attachEvent('onscroll', debounceOrThrottle);
            root.attachEvent('onload', debounceOrThrottle);
        }
    };

    echo.render = function () {
        var nodes = document.querySelectorAll('img[data-original], [data-original-background]');
        var length = nodes.length;
        var src, elem;
        var view = {
            l: 0 - offset.l,
            t: 0 - offset.t,
            b: (root.innerHeight || document.documentElement.clientHeight) + offset.b,
            r: (root.innerWidth || document.documentElement.clientWidth) + offset.r
        };
        for (var i = 0; i < length; i++) {
            elem = nodes[i];
            if (inView(elem, view)) {
                if (unload) {
                    elem.setAttribute('data-original-placeholder', elem.src);
                }

                if (elem.getAttribute('data-original-background') !== null) {
                    elem.style.backgroundImage = "url(" + elem.getAttribute('data-original-background') + ")";
                }
                else {
                    $(elem).hide().fadeIn();
                    elem.src = elem.getAttribute('data-original');
                }

                if (!unload) {
                    elem.removeAttribute('data-original');
                    elem.removeAttribute('data-original-background');
                }

                callback(elem, 'load');
            }
            else if (unload && !!(src = elem.getAttribute('data-original-placeholder'))) {

                if (elem.getAttribute('data-original-background') !== null) {
                    elem.style.backgroundImage = "url(" + src + ")";
                }
                else {
                    elem.src = src;
                }

                elem.removeAttribute('data-original-placeholder');
                callback(elem, 'unload');
            }
        }
        if (!length) {
            echo.detach();
        }
    };

    echo.detach = function () {
        if (document.removeEventListener) {
            root.removeEventListener('scroll', debounceOrThrottle);
        } else {
            root.detachEvent('onscroll', debounceOrThrottle);
        }
        clearTimeout(poll);
    };

    return echo;

});

/**
 * lazy loading
 */
(function ($, window) {
    $window = $(window);
    $.fn.lazyload = function (options) {
        var elements = this;
        var settings = {
            threshold: 0,
            failure_limit: 0,
            event: "scroll",
            effect: "show",
            container: window,
            data_attribute: "original",
            skip_invisible: true,
            appear: null,
            load: null
        };
        function update() {
            var counter = 0;
            elements.each(function () {
                var $this = $(this);
                if ($.abovethetop(this, settings) ||
                    $.leftofbegin(this, settings)) {
                    $this.trigger("appear");
                    /*什么也没有。*/
                } else if (!$.belowthefold(this, settings) &&
                    !$.rightoffold(this, settings)) {
                    $this.trigger("appear");
                } else {
                    if (++counter > settings.failure_limit) {
                    }
                }
            });
        }
        if (options) {
            /*保持BC的一对夫妇的版本。*/
            if (undefined !== options.failurelimit) {
                options.failure_limit = options.failurelimit;
                delete options.failurelimit;
            }
            if (undefined !== options.effectspeed) {
                options.effect_speed = options.effectspeed;
                delete options.effectspeed;
            }
            $.extend(settings, options);
        }
        /* jQuery作为对象的缓存容器。*/
        $container = (settings.container === undefined ||
        settings.container === window) ? $window : $(settings.container);
        /*防火每滚动一个滚动事件。没有一个滚动事件，每幅图像。 */
        //        if (0 === settings.event.indexOf("scroll")) {
        $container.bind(settings.event, function (event) {
            update();
        });
        //        }
        this.each(function () {
            var self = this;
            var $self = $(self);
            self.loaded = false;
            /*当出现被触发负载的原始图像。 */

            $self.one("appear", function () {
                if (!this.loaded) {
                    if (settings.appear) {
                        var elements_left = elements.length;
                        settings.appear.call(self, elements_left, settings);
                    }
                    $("<img />")
                        .bind("load", function () {

                            if ($self.attr("src").indexOf("/images/") == -1) {
                                return;
                            }
                            $self
                            .hide().attr("src", (typeof ($self.data(settings.data_attribute)) == "undefined" ||
                            $self.data(settings.data_attribute).indexOf("/") < 0) ? "/images/_07.png" : $self.data(settings.data_attribute))
                            [settings.effect](settings.effect_speed);
                            self.loaded = true;
                            /*从数组中删除图像，所以它是不循环的时间。 */
                            var temp = $.grep(elements, function (element) {
                                return !element.loaded;
                            });
                            elements = $(temp);
                            if (settings.load) {
                                var elements_left = elements.length;
                                settings.load.call(self, elements_left, settings);
                            }
                        })
                        .attr("src", (typeof ($self.data(settings.data_attribute)) == "undefined" ||
                        $self.data(settings.data_attribute).indexOf("/") < 0) ? "/images/_07.png" : $self.data(settings.data_attribute));
                    //删除图片上层的背景图片
                    var _this = $(this);
                    setTimeout(function () {
                        _this.parents(".delayload").removeClass("delayload");
                        if (_this.attr("src").indexOf("/images/Default.gif") != -1) {
                            _this.attr("src", _this.attr("data-original"));
                        }
                    }, 300);
                }
            });
            /*当想要的事件被触发负载原始图像*/
            /*触发出现。 */
            if (0 !== settings.event.indexOf("scroll")) {
                $self.bind(settings.event, function (event) {
                    if (!self.loaded) {
                        $self.trigger("appear");
                    }
                });
            }
        });
        /*检查，如果某样东西时，会出现窗口的大小。 */
        $window.bind("resize", function (event) {
            update();
        });
        $window.bind("load", function (event) {
            update();
        });
        /*力初步检查，如果图像出现。*/
        update();
        return this;
    };
    /*便利jQuery命名空间中的方法。 */
    /*使用美元。belowthefold（元素，阈值：100，集装箱：窗口}）*/
    $.belowthefold = function (element, settings) {
        var fold;
        if (settings.container === undefined || settings.container === window) {
            fold = $window.height() + $window.scrollTop();
        } else {
            fold = $container.offset().top + $container.height();
        }
        //        alert(fold<= $(element).offset().top - settings.threshold)
        return fold <= $(element).offset().top - settings.threshold;
    };
    $.rightoffold = function (element, settings) {
        var fold;
        if (settings.container === undefined || settings.container === window) {
            fold = $window.width() + $window.scrollLeft();
        } else {
            fold = $container.offset().left + $container.width();
        }
        //        alert("rightoffold:" + fold + ":" + $(element).offset().left + ":" + settings.threshold)
        return fold <= $(element).offset().left - settings.threshold;
    };
    $.abovethetop = function (element, settings) {
        var fold;
        if (settings.container === undefined || settings.container === window) {
            fold = $window.scrollTop();
        } else {
            fold = $container.offset().top;
        }
        return fold >= $(element).offset().top + settings.threshold + $(element).height();
    };
    $.leftofbegin = function (element, settings) {
        var fold;
        if (settings.container === undefined || settings.container === window) {
            fold = $window.scrollLeft();
        } else {
            fold = $container.offset().left;
        }
        return fold >= $(element).offset().left + settings.threshold + $(element).width();
    };
    $.inviewport = function (element, settings) {
        return !$.rightofscreen(element, settings) && !$.leftofscreen(element, settings) &&
    !$.belowthefold(element, settings) && !$.abovethetop(element, settings);
    };
    /*为了方便您的自定义选择。 */
    /*使用$（“IMG：下面倍”）。东西（）*/
    $.extend($.expr[':'], {
        "below-the-fold": function (a) { return $.belowthefold(a, { threshold: 0, container: window }); },
        "above-the-top": function (a) { return !$.belowthefold(a, { threshold: 0, container: window }); },
        "right-of-screen": function (a) { return $.rightoffold(a, { threshold: 0, container: window }); },
        "left-of-screen": function (a) { return !$.rightoffold(a, { threshold: 0, container: window }); },
        "in-viewport": function (a) { return !$.inviewport(a, { threshold: 0, container: window }); },
        /*保持BC几个版本。*/
        "above-the-fold": function (a) { return !$.belowthefold(a, { threshold: 0, container: window }); },
        "right-of-fold": function (a) { return $.rightoffold(a, { threshold: 0, container: window }); },
        "left-of-fold": function (a) { return !$.rightoffold(a, { threshold: 0, container: window }); }
    });
})(jQuery, window);

/**
*Jiathis
*/
JiaThis = { SetJiaThisConfig: function (n, t, i, r, u, f, e) { jiathis_config.data_track_clickback = n == undefined ? "" : n; jiathis_config.url = t == undefined ? "" : t; jiathis_config.summary = i == undefined ? "" : i; jiathis_config.title = r == undefined ? "" : r; jiathis_config.pic = u == undefined ? "" : u; jiathis_config.shortUrl = f == undefined ? !1 : f; jiathis_config.hideMore = e == undefined ? !1 : e }, SetJiaThisHtml: function () { $(".divShare").each(function () { var n = $(this), t = n.attr("IconSize"), i = n.attr("ShareUrl"), r = n.attr("Summary"), u = n.attr("Title"), f = n.attr("SharePictureUrl"); $.ajax({ url: "/controls/GetUserControlHtml.ashx", async: !1, type: "POST", data: { Control: "JiaThisShare", IconSize: t, ShareUrl: i, ShowVisitCount: "false", Summary: r, Title: u, SharePictureUrl: f }, dataType: "html", success: function (t) { n.append(t) } }) }) } }; var jiathis_config = { data_track_clickback: !0, url: "", summary: "", title: "", pic: "", shortUrl: !1, hideMore: !1 };

/**/
// 图片轮播插件

(function () {

    // 构造函数
    var Carousel = function (element, options) {
        this.$element = $(element);
        this.options = $.extend({}, Carousel.DEFAULTS, options);
        this._slides = {};
        this._currentIndex = 0;
        this._interval = 0;
        this._outPosition = 0;
        this.init();
    }

    Carousel.DEFAULTS = {
        auto: true,
        // 有些效果难得写了
        // Switch, Fade, Slide, SlideSlow, SlideUpDown, SlideUpDownSlow, SlideDown, SlideUp, SlideLeft, SlideRight
        effect: 'fade', //大写，兼容后台~~~
        period: 3000,
        duration: 500,
        hoverStop: true,
        controls: true,
        pager: true,
        width: 'auto',
        height: null,
        slide: 'ul>li',
        navClassName: 'controls'
    }

    Carousel.prototype = {

        // 初始化
        init: function () {

            var that = this,
			element = carousel = this.$element;

            if (carousel.attr('data-effect') != undefined) {
                this.options.effect = carousel.attr('data-effect');
            }
            if (carousel.attr('data-height') != undefined) {
                this.options.height = carousel.attr('data-height');
            }
            if (carousel.attr('data-width') != undefined) {
                this.options.width = carousel.attr('data-width');
            }

            // 滚动的项目
            this._slides = carousel.find(this.options.slide);

            // 没设置高宽度就取一个自然高宽度
            var carouselHeight, carouselWidth;
            if (!this.options.height) {
                // debugger;
                carouselHeight = carousel.outerHeight() | 0;
                this._slides.each(function (index) {
                    var me = $(this),
					height = me.outerHeight(),
					width = me.outerWidth();
                    if (height > carouselHeight) carouselHeight = height;
                    if (width > carouselWidth) carouselWidth = width;
                });
            } else {
                carouselHeight = this.options.height;
                carouselWidth = this.options.width;
            }
            carousel.css({
                // pager,contronl外面显示被隐藏~~
                'width': carouselWidth,
                'height': carouselHeight,
                'position': 'relative',
            }).find("ul").css({
                'overflow': 'hidden',
                'position': 'relative',
                'width': carouselWidth,
                'height': carouselHeight
            });

            if (this._slides.length <= 1) return;

            // 老浏览器强行显示第一个
            this._slides.eq(0).show();

            if (this.options.pager !== false && this._slides.length > 1) {
                this._dots(that);
            }

            if (this.options.controls && this._slides.length > 1) {
                this._controls();
            }

            // 鼠标划上去停止?
            if (this.options.hoverStop) {
                carousel
				.on('mouseenter', function () {
				    clearInterval(that._interval);
				})
				.on('mouseleave', function () {
				    if (that.options.auto) that._autoStart(), that.options.period;
				})
            }

            // 自动播放？
            if (this.options.auto) {
                this._autoStart();
            }

        },

        //自动运行
        _autoStart: function () {
            var that = this;
            this._interval = setInterval(function () {
                // console.log(this._interval);		
                that.slideTo('next');
            }, this.options.period);
        },

        // 左右控制
        _controls: function () {
            var that = this, prev, next;
            prev = $('<div class="prev">prev</div>').addClass(this.options.navClassName);
            next = $('<div class="next">next</div>').addClass(this.options.navClassName);

            prev.on('click', function () {
                that.slideTo('prev');
            });
            next.on('click', function () {
                that.slideTo('next');
            });

            this.$element.append(prev).append(next);
        },

        // 创建分页按钮
        _dots: function (that) {
            var dots, li, i;

            dots = $('<ol class="dots"></ol>');

            for (i = 0; i < this._slides.length; i++) {
                li = $('<li data-num="' + i + '">' + (i + 1) + '</li>');
                if (i === 0) {
                    li.addClass('active');
                }
                li.appendTo(dots);
            }

            dots.find('li').on('click', function () {
                var $this = $(this),
				index = $this.data('num');

                dots.find('li').removeClass('active');
                $this.addClass('active');

                if (index == that._currentIndex) {
                    return true;
                }

                that.slideToIndex(index);
                return true;
            });

            dots.appendTo(this.$element);

        },

        // 前一张，后一张
        slideTo: function (direction) {
            var currentSlide = this._slides[this._currentIndex],
			nextSlide;

            if (direction == undefined) direction = 'next';

            if (direction === 'prev') {
                this._currentIndex -= 1;
                if (this._currentIndex < 0) this._currentIndex = this._slides.length - 1;

                this._outPosition = this.$element.width();

            } else if (direction === 'next') {
                this._currentIndex += 1;
                if (this._currentIndex >= this._slides.length) this._currentIndex = 0;

                this._outPosition = -this.$element.width();

            }

            nextSlide = this._slides[this._currentIndex];

            switch (this.options.effect) {
                case 'switch': this._effectSwitch(currentSlide, nextSlide); break;
                case 'slide': this._effectSlide(currentSlide, nextSlide, this.options.duration); break;
                case 'slideslow': this._effectSlideSlow(currentSlide, nextSlide, this.options.duration); break;
                case 'slideupdown': this._effectSlideUpDown(currentSlide, nextSlide, this.options.duration); break;
                case 'slideupdownslow': this._effectSlideUpDownSlow(currentSlide, nextSlide, this.options.duration); break;
                    // case 'SlideUp': this._effectSlideUp(currentSlide, nextSlide, this.options.duration); break;
                    // case 'SlideRight': this._effectSlideRight(currentSlide, nextSlide, this.options.duration); break;
                    // case 'SlideDown': this._effectSlowdown(currentSlide, nextSlide, this.options.duration); break;
                    // case 'SlideLeft': this._effectSlideLeft(currentSlide, nextSlide, this.options.duration); break;				
                default: this._effectFade(currentSlide, nextSlide, this.options.duration);
            }

            var carousel = this.$element, that = this;
            carousel.find('.dots li').each(function () {
                var index = $(this).data('num');
                if (index === that._currentIndex) {
                    $(this).addClass('active');
                } else {
                    $(this).removeClass('active');
                }
            });
        },

        slideToIndex: function (slideIndex) {
            var
			currentSlide = this._slides[this._currentIndex],
			nextSlide = this._slides[slideIndex];

            if (slideIndex > this._currentIndex) {
                this._outPosition = -this.$element.width();
            } else {
                this._outPosition = this.$element.width();
            }

            switch (this.options.effect) {
                case 'switch': this._effectSwitch(currentSlide, nextSlide); break;
                case 'slide': this._effectSlide(currentSlide, nextSlide, this.options.duration); break;
                case 'slideslow': this._effectSlideSlow(currentSlide, nextSlide, this.options.duration); break;
                case 'slideupdown': this._effectSlideUpDown(currentSlide, nextSlide, this.options.duration); break;
                case 'slideupdownslow': this._effectSlideUpDownSlow(currentSlide, nextSlide, this.options.duration); break;
                    // case 'SlideUp': this._effectSlideUp(currentSlide, nextSlide, this.options.duration); break;
                    // case 'SlideRight': this._effectSlideRight(currentSlide, nextSlide, this.options.duration); break;
                    // case 'SlideDown': this._effectSlowdown(currentSlide, nextSlide, this.options.duration); break;
                    // case 'SlideLeft': this._effectSlideLeft(currentSlide, nextSlide, this.options.duration); break;				
                default: this._effectFade(currentSlide, nextSlide, this.options.duration);
            }

            this._currentIndex = slideIndex;
        },

        // 快速切换
        _effectSwitch: function (currentSlide, nextSlide) {
            $(currentSlide)
			.hide();
            $(nextSlide)
			.css({ left: 0, top: 0 })
			.show();
        },

        // 渐隐渐显
        _effectFade: function (currentSlide, nextSlide, duration) {
            $(currentSlide)
			.fadeOut(duration);
            $(nextSlide)
			.css({ left: 0, top: 0 })
			.fadeIn(duration);
        },

        // 滚动左右
        _effectSlide: function (currentSlide, nextSlide, duration) {
            $(currentSlide)
			.animate({ left: this._outPosition }, duration);
            $(nextSlide)
			.css({ left: this._outPosition * -1, top: 0 })
			.show()
			.animate({ left: 0 }, duration);
        },

        // 滚动左右缓动
        _effectSlideSlow: function (currentSlide, nextSlide, duration) {
            var options = {
                'duration': duration,
                'easing': 'doubleSqrt'
            };
            $.easing.doubleSqrt = function (t) {
                return Math.sqrt(Math.sqrt(t));
            };

            $(currentSlide)
			.animate({ left: this._outPosition }, options);
            $(nextSlide)
			.css({ left: this._outPosition * -1, top: 0 })
			.show()
			.animate({ left: 0 }, options);
        },

        // 滚动上下
        _effectSlideUpDown: function (currentSlide, nextSlide, duration) {
            var slideIndex = $(nextSlide).index();
            if (slideIndex > this._currentIndex) {
                this._outPosition = -this.$element.height();
            } else {
                this._outPosition = this.$element.height();
            }
            $(currentSlide)
			.animate({ top: this._outPosition }, duration);
            $(nextSlide)
			.css({ 'top': this._outPosition * -1, left: 0 })
			.show()
			.animate({ top: 0 }, duration);
        },

        // 滚动上下缓动
        _effectSlideUpDownSlow: function (currentSlide, nextSlide, duration) {
            var slideIndex = $(nextSlide).index();
            if (slideIndex > this._currentIndex) {
                this._outPosition = -this.$element.height();
            } else {
                this._outPosition = this.$element.height();
            }

            var options = {
                'duration': duration,
                'easing': 'doubleSqrt'
            };
            $.easing.doubleSqrt = function (t) {
                return Math.sqrt(Math.sqrt(t));
            };

            $(currentSlide)
			.animate({ top: this._outPosition }, options);
            $(nextSlide)
			.css({ 'top': this._outPosition * -1, left: 0 })
			.show()
			.animate({ top: 0 }, options);
        },

        // 这么多不想写了

        // 从下到上
        _effectSlideUp: function (currentSlide, nextSlide, duration) {

        },

        // 从右到左
        _effectSlideRight: function (currentSlide, nextSlide, duration) {

        },

        // 从上到下
        _effectSlideDown: function (currentSlide, nextSlide, duration) {

        },

        // 从左到右
        _effectSlideLeft: function (currentSlide, nextSlide, duration) {

        }

    }

    // 插件机制
    $.fn.emoudleSlider = function (options) {
        return this.each(function () {
            var $this = $(this);
            var data = $this.data('ui.carousel');
            if (!data) {
                $this.data('ui.carousel', (data = new Carousel(this, options)));
            }

        });
    }

})(jQuery);

/*****************内部公共JS开始***********/

/*登录控件*/
function EnterEvent(e, event) {
    var keyCode = event.keyCode ? event.keyCode : event.which ? event.which : event.charCode;
    if (keyCode == 13) {
        if (e.attr("id") == "txtname") {
            $("#txtpwd").focus();
            event.keyCode = 0;
            return false;
        }
        if (e.attr("id") == "txtpwd") {
            $("#txtcode").click();
            $("#txtcode").focus();
            event.keyCode = 0;
            return false;
        }
        if (e.attr("id") == "txtcode") {
            $("#butLogin").click();
            event.keyCode = 0;
            return false;
        }
    }
}
function GetCode() {
    var numkey = Math.random();
    numkey = Math.round(numkey * 10000);
    if ($("#Code").html() == "点击获取") {
        $("#txtcode").val("");
        document.getElementById("Code").innerHTML = "<img id='safeode' src=\"/controls/verify.aspx?k=" + numkey + "\" width=\"55\" height=\"23\" hspace=\"4\" onclick=\"this.src+=" + numkey + "\" >";
    }
}
function userLogin() {
    var IsSuccess = true;
    if (IsSuccess && $("#txtname").val() == "") {
        IsSuccess = false;
        alert('用户名不能为空！');
    }
    if (IsSuccess && $("#txtpwd").val() == "") {
        IsSuccess = false;
        alert('密码不能为空！');
    }
    if (IsSuccess && $("#txtcode").val() == "") {
        IsSuccess = false;
        alert('验证码不能为空！');
    }
    if (IsSuccess) {
        $.ajax({
            url: '/user/controls/userdo.ashx',
            type: 'POST',
            dataType: 'html',
            data: { type: 'modulelogin', u: $("#txtname").val(), p: $("#txtpwd").val(), c: $("#txtcode").val() },
            success: function (data) {
                if (data == 0) {
                    alert("登录失败，用户名或密码错误！");
                } else if (data == 3) {
                    $(".ModuleLogin").hide();
                    window.location.href = window.location.href;
                } else if (data == 2) {
                    alert("验证码错误！");
                    document.getElementById("safeode").click();
                } else {
                    window.open(data);
                    var myTime = window.setTimeout(function () {
                        window.clearTimeout(myTime);
                        window.location.href = window.location.href;
                    }, 500);
                }
            }
        });
    }
}

/*批发规则页面JS*/
var wholesalerules = {
    _mouseEvent: function (obj, subobj) {
        var _timer = null;
        obj.mouseover(function () {
            var $this = $(this);
            clearTimeout(_timer);
            _timer = setTimeout(function () {
                $($this).find(subobj).show("fast");
            }, 300);
        }).mouseout(function () {
            var $this = $(this);
            clearTimeout(_timer);
            _timer = setTimeout(function () {
                $($this).find(subobj).hide();
            }, 300);
        });

        subobj.mouseover(function () {
            var $this = $(this);
            clearTimeout(_timer);
            _timer = setTimeout(function () {
                subobj.show("fast");
            }, 300);
        }).mouseout(function () {
            var $this = $(this);
            clearTimeout(_timer);
            _timer = setTimeout(function () {
                subobj.hide();
            }, 300);
        });
    },
    _run: function () {
        $(".view_wholesalerules").each(function () {
            wholesalerules._mouseEvent($(this), $(this).find(".detail"));
        });
    }
}

/*base32位编码*/
var Base32 = {

    BASE32CHAR: "12345678abcdefghijklmnpqrstuvwxy",

    UTF16ToUTF8: function (str) {

        var res = [], len = str.length;

        for (var i = 0; i < len; i++) {

            var code = str.charCodeAt(i);

            if (code > 0x0000 && code <= 0x007F) {

                // 单字节，这里并不考虑0x0000，因为它是空字节

                // U+00000000 – U+0000007F  0xxxxxxx

                res.push(str.charAt(i));

            } else if (code >= 0x0080 && code <= 0x07FF) {

                // 双字节

                // U+00000080 – U+000007FF  110xxxxx 10xxxxxx

                // 110xxxxx

                var byte1 = 0xC0 | ((code >> 6) & 0x1F);

                // 10xxxxxx

                var byte2 = 0x80 | (code & 0x3F);

                res.push(

                    String.fromCharCode(byte1),

                    String.fromCharCode(byte2)

                );

            } else if (code >= 0x0800 && code <= 0xFFFF) {

                // 三字节

                // U+00000800 – U+0000FFFF  1110xxxx 10xxxxxx 10xxxxxx

                // 1110xxxx

                var byte1 = 0xE0 | ((code >> 12) & 0x0F);

                // 10xxxxxx

                var byte2 = 0x80 | ((code >> 6) & 0x3F);

                // 10xxxxxx

                var byte3 = 0x80 | (code & 0x3F);

                res.push(

                    String.fromCharCode(byte1),

                    String.fromCharCode(byte2),

                    String.fromCharCode(byte3)

                );

            } else if (code >= 0x00010000 && code <= 0x001FFFFF) {

                // 四字节

                // U+00010000 – U+001FFFFF  11110xxx 10xxxxxx 10xxxxxx 10xxxxxx

            } else if (code >= 0x00200000 && code <= 0x03FFFFFF) {

                // 五字节

                // U+00200000 – U+03FFFFFF  111110xx 10xxxxxx 10xxxxxx 10xxxxxx 10xxxxxx

            } else /** if (code >= 0x04000000 && code <= 0x7FFFFFFF)*/ {

                // 六字节

                // U+04000000 – U+7FFFFFFF  1111110x 10xxxxxx 10xxxxxx 10xxxxxx 10xxxxxx 10xxxxxx

            }

        }



        return res.join('');

    },

    UTF8ToUTF16: function (str) {

        var res = [], len = str.length;

        var i = 0;

        for (var i = 0; i < len; i++) {

            var code = str.charCodeAt(i);

            // 对第一个字节进行判断

            if (((code >> 7) & 0xFF) == 0x0) {

                // 单字节

                // 0xxxxxxx

                res.push(str.charAt(i));

            } else if (((code >> 5) & 0xFF) == 0x6) {

                // 双字节

                // 110xxxxx 10xxxxxx

                var code2 = str.charCodeAt(++i);

                var byte1 = (code & 0x1F) << 6;

                var byte2 = code2 & 0x3F;

                var utf16 = byte1 | byte2;

                res.push(Sting.fromCharCode(utf16));

            } else if (((code >> 4) & 0xFF) == 0xE) {

                // 三字节

                // 1110xxxx 10xxxxxx 10xxxxxx

                var code2 = str.charCodeAt(++i);

                var code3 = str.charCodeAt(++i);

                var byte1 = (code << 4) | ((code2 >> 2) & 0x0F);

                var byte2 = ((code2 & 0x03) << 6) | (code3 & 0x3F);

                var utf16 = ((byte1 & 0x00FF) << 8) | byte2

                res.push(String.fromCharCode(utf16));

            } else if (((code >> 3) & 0xFF) == 0x1E) {

                // 四字节

                // 11110xxx 10xxxxxx 10xxxxxx 10xxxxxx

            } else if (((code >> 2) & 0xFF) == 0x3E) {

                // 五字节

                // 111110xx 10xxxxxx 10xxxxxx 10xxxxxx 10xxxxxx

            } else /** if (((code >> 1) & 0xFF) == 0x7E)*/ {

                // 六字节

                // 1111110x 10xxxxxx 10xxxxxx 10xxxxxx 10xxxxxx 10xxxxxx

            }

        }



        return res.join('');

    },

    encode: function (srcString) {
        var i = 0;
        var index = 0;
        var digit = 0;
        var currByte;
        var nextByte;
        var retrunString = '';
        srcString = Base32.UTF16ToUTF8(srcString);
        for (var i = 0; i < srcString.length;) {
            //var          index    = 0;  
            currByte = (srcString.charCodeAt(i) >= 0) ? srcString.charCodeAt(i)
                                       : (srcString.charCodeAt(i) + 256);

            if (index > 3) {
                if ((i + 1) < srcString.length) {
                    nextByte = (srcString.charCodeAt(i + 1) >= 0)
                                              ? srcString.charCodeAt(i + 1)
                                               : (srcString.charCodeAt(i + 1) + 256);
                } else {
                    nextByte = 0;
                }

                digit = currByte & (0xFF >> index);
                index = (index + 5) % 8;
                digit <<= index;
                digit |= (nextByte >> (8 - index));
                i++;
            } else {
                digit = (currByte >> (8 - (index + 5))) & 0x1F;
                index = (index + 5) % 8;

                if (index == 0) {
                    i++;
                }
            }

            retrunString = retrunString + Base32.BASE32CHAR.charAt(digit);
        }
        return retrunString.toLowerCase();
    }
};

/*商品搜索方法提取*/
var ProductSearch = {
    search: function () {
        //window.location.href ="/productlist.aspx?searchword="+encodeURI($("#search_box").val())+"&pricefrom=0&priceto=0&classid=0&brangid=0&tagid=0&l=1&s=4&PageIndex=1";
        //window.location.href = "/productlist.aspx?searchword=" + encodeURI(Base64.encode($("#search_box").val()));
        window.location.href = "/productlist/" + Base32.encode($("#search_box").val()) + "-0-0-0-0-0-1-4-1.html";

    },
    linksearch: function (keywords) {
        window.location.href = "/productlist/" + Base32.encode(keywords) + "-0-0-0-0-0-1-4-1.html";
    },
    key13: function (e) {
        var curKey = e.which;
        if (curKey == 13) {
            ProductSearch.search();
        }
    },
    searchProduct: function () {
        window.location.href = "/productlist/" + Base32.encode($("#search_box").val()) + "-0-0-0-0-0-1-4-1.html";
    },
    searchStoreProduct: function () {
        window.location.href = $("#hidurl").val() + "&ProductName=" + Base32.encode($("#search_box").val());
    },
    searchStore: function () {
        window.location.href = "/storelist.aspx?storeName=" + Base32.encode($("#search_box").val());
    }
};

/*店铺搜索*/
var StoreListSearch = {
    search: function () {
        window.location.href = "/storelist.aspx?storeName=" + Base32.encode($("#search_box").val());

    }
};



/*通用在线客服*/
var onlineService = {
    option: {
        style: "ocs_yellow",
        title: "在线客服",
        content: "",
        onlineside: "left",
        onlineside_width: 400,
        top: 100,
        oday_from: "周一",
        oday_to: "周五",
        otime_from: "09:00",
        otime_to: "17:30",
        hotline: "028-85950000-8878",
        isexpand: "1"
    },
    init: function (opt) {
        //opt = onlineService.option;
        // onlineService.option = opt;
        $.extend(onlineService.option, opt);
        var ecs_os_isshow = "";
        var ecs_os_tkisshow = "";
        if (onlineService.option.isexpand == "1") {
            ecs_os_isshow = "block";
            ecs_os_tkisshow = "none";
        } else {
            ecs_os_isshow = "none";
            ecs_os_tkisshow = "block";
        }
        var showhtml = "";
        if (onlineService.option.onlineside != "right" && onlineService.option.onlineside != "left") {
            showhtml =
                "<div id='ecs_os' class='ecs_os  os_style_" + onlineService.option.style + "' style='position:absolute;left:" + onlineService.option.onlineside_width + "px;top:" + onlineService.option.top + "px;display:" + ecs_os_isshow + ";'>" +
                    "<div class='ecs_os_header'>" +
                    "<div class='ecs_os_header_t'><a href='javascript:;' id='ecs_os_tclose' class='close ecs_os_tclose'  title='关闭' >关闭</a></div>" +
                    "<div class='online_time'><h3>在线时间</h3>" +
                    "<div class='oday'><span class='oday_from'>" + onlineService.option.oday_from + "</span>至<span class='oday_to'>" + onlineService.option.oday_to + "</span></div>" +
                    "<div class='otime'><span class='otime_from'>" + onlineService.option.otime_from + "</span>-<span class='otime_to'>" + onlineService.option.otime_to + "</span></div>" +
                    "</div>" + //online_time end
                    "</div>" + //ecs_os_header end
                    "<div class='ecs_os_body'>" + onlineService.option.content + "</div>" + //ecs_os_body end
                    "<div class='ecs_os_footer'>" +
                    "<div class='footer_hotline'><span>" + onlineService.option.hotline + "</span></div>" +
                    "<div class='footer_close ecs_os_bclose' id='ecs_os_bclose'>关闭在线客服</div>" +
                    "</div>" + //ecs_os_footer end
                    "</div>" + //ecs_os
                    "<div title='点击弹出在线客服' id='ecs_os_tingkao' class='ecs_os_tingkao ecs_os_style_" + onlineService.option.style + "_tk' style='position:absolute;right:" + onlineService.option.onlineside_width + "px;top:" + onlineService.option.top + "px;display:" + ecs_os_tkisshow + "'></div>";
            showhtml +=
                "<div id='ecs_os1' class='ecs_os  os_style_" + onlineService.option.style + "' style='position:absolute;" + onlineService.option.onlineside + ":" + onlineService.option.onlineside_width + "px;top:" + onlineService.option.top + "px;display:" + ecs_os_isshow + ";'>" +
                    "<div class='ecs_os_header'>" +
                    "<div class='ecs_os_header_t'><a href='javascript:;' id='ecs_os_tclose' class='close ecs_os_bclose'  title='关闭' >关闭</a></div>" +
                    "<div class='online_time'><h3>在线时间</h3>" +
                    "<div class='oday'><span class='oday_from'>" + onlineService.option.oday_from + "</span>至<span class='oday_to'>" + onlineService.option.oday_to + "</span></div>" +
                    "<div class='otime'><span class='otime_from'>" + onlineService.option.otime_from + "</span>-<span class='otime_to'>" + onlineService.option.otime_to + "</span></div>" +
                    "</div>" + //online_time end
                    "</div>" + //ecs_os_header end
                    "<div class='ecs_os_body'>" + onlineService.option.content + "</div>" + //ecs_os_body end
                    "<div class='ecs_os_footer'>" +
                    "<div class='footer_hotline'><span>" + onlineService.option.hotline + "</span></div>" +
                    "<div class='footer_close ecs_os_bclose' id='ecs_os_bclose'>关闭在线客服</div>" +
                    "</div>" + //ecs_os_footer end
                    "</div>" + //ecs_os
                    "<div title='点击弹出在线客服' id='ecs_os_tingkao' class='ecs_os_tingkao ecs_os_style_" + onlineService.option.style + "_tk' style='position:absolute;" + onlineService.option.onlineside + ":" + onlineService.option.onlineside_width + "px;top:" + onlineService.option.top + "px;display:" + ecs_os_tkisshow + "'></div>";
        } else {
            showhtml =
                "<div id='ecs_os' class='ecs_os  os_style_" + onlineService.option.style + "' style='position:absolute;" + onlineService.option.onlineside + ":" + onlineService.option.onlineside_width + "px;top:" + onlineService.option.top + "px;display:" + ecs_os_isshow + ";'>" +
                    "<div class='ecs_os_header'>" +
                    "<div class='ecs_os_header_t'><a href='javascript:;' id='ecs_os_tclose' class='ecs_os_tclose close'  title='关闭' >关闭</a></div>" +
                    "<div class='online_time'><h3>在线时间</h3>" +
                    "<div class='oday'><span class='oday_from'>" + onlineService.option.oday_from + "</span>至<span class='oday_to'>" + onlineService.option.oday_to + "</span></div>" +
                    "<div class='otime'><span class='otime_from'>" + onlineService.option.otime_from + "</span>-<span class='otime_to'>" + onlineService.option.otime_to + "</span></div>" +
                    "</div>" + //online_time end
                    "</div>" + //ecs_os_header end
                    "<div class='ecs_os_body'>" + onlineService.option.content + "</div>" + //ecs_os_body end
                    "<div class='ecs_os_footer'>" +
                    "<div class='footer_hotline'><span>" + onlineService.option.hotline + "</span></div>" +
                    "<div class='footer_close ecs_os_bclose' id='ecs_os_bclose'>关闭在线客服</div>" +
                    "</div>" + //ecs_os_footer end
                    "</div>" + //ecs_os
                    "<div title='点击弹出在线客服' id='ecs_os_tingkao' class='ecs_os_tingkao ecs_os_style_" + onlineService.option.style + "_tk' style='position:absolute;" + onlineService.option.onlineside + ":" + onlineService.option.onlineside_width + "px;top:" + onlineService.option.top + "px;display:" + ecs_os_tkisshow + "'></div>";

        }

        $("body").append(showhtml);
        var ecs_os = $(".ecs_os");
        var ecs_os_tingkao = $(".ecs_os_tingkao");
        var ecs_os_close = $(".ecs_os_tclose,.ecs_os_bclose");

        $(window).scroll(function () {
            var win = window;
            if (ecs_os != "undefined" && ecs_os_tingkao != "undefined") {
                ecs_os.stop().animate({
                    top: (parseInt($(win).scrollTop()) + parseInt(onlineService.option.top)) + "px"
                }, 800);
                ecs_os_tingkao.stop().animate({
                    top: (parseInt($(win).scrollTop()) + parseInt(onlineService.option.top)) + "px"
                }, 800);
            }
        });
        if (ecs_os != "undefined" && ecs_os_tingkao != "undefined" && ecs_os_close != "undefined") {
            //ecs_os_tingkao.live("click", function () {
            //    ecs_os_tingkao.hide();
            //    ecs_os.show();
            //}); //显示
            //ecs_os_close.live("click", function () {
            //    ecs_os_tingkao.show();
            //    ecs_os.hide();
            //}); //关闭

            template_plugin.tools._bingEvent('.ecs_os_tingkao', 'click', function () {
                ecs_os_tingkao.hide();
                ecs_os.show();
            });//显示
            template_plugin.tools._bingEvent('.ecs_os_tclose,.ecs_os_bclose', 'click', function () {
                ecs_os_tingkao.show();
                ecs_os.hide();
            });//关闭
        }
    }
};
//模板交互JS

window.template_plugin = window.template_plugin || {};

template_plugin.tools = {
    //判断浏览器内核以及使用设备
    browser: {
        versions: function () {
            var u = navigator.userAgent,
            app = navigator.appVersion;
            return {
                trident: u.indexOf('Trident') > -1,
                presto: u.indexOf('Presto') > -1,
                webKit: u.indexOf('AppleWebKit') > -1,
                gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1,
                mobile: !!u.match(/AppleWebKit.*Mobile.*/) || !!u.match(/AppleWebKit/) && u.indexOf('QIHU') && u.indexOf('Chrome') < 0,
                ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
                android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1,
                iPhone: u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1,
                iPad: u.indexOf('iPad') > -1,
                webApp: u.indexOf('Safari') == -1,
                ua: u,
                weixin: u.match(/MicroMessenger/i) == "micromessenger"
            };
        }(),
        language: (navigator.browserLanguage || navigator.language).toLowerCase()
    },
    //验证元素是否存在
    _validElement: function (obj) {
        var _obj = $(obj)[0];
        if (!_obj || typeof (_obj) == 'string' || typeof (_obj) == 'undefined' || typeof (_obj) == 'unmber' || _obj.nodeType != 1) {
            return false;
        }
        else {
            return true;
        }
    },
    //如果是IE6就显示
    _killIe6: function () {
        var ie6 = !-[1, ] && !window.XMLHttpRequest
        if (ie6) {
            (function () {

                LetsKillIE6 = function () {

                    this.config = null;

                    this.cache = {
                        dialog: null,
                        showThread: null,
                        hideThread: null,
                        triggerThread: null,
                        isDispose: false,
                        opacity: 0,
                        dialogHeight: 0
                    };
                };

                LetsKillIE6.prototype = {

                    init: function (config) {
                        this.config = config || this.config;
                        var _self = this;

                        if (_self._getCookie(_self.config.targetId) != _self.config.targetId) {
                            var pageUrl = window.location.href;
                            var protocol = pageUrl.replace(/\/\/.*$/, '');

                            _self._loadCss(protocol + _self.config.cssUrl, _self, function () {
                                var dialog = document.createElement('div');
                                dialog.id = _self.config.targetId;
                                dialog.innerHTML = _self.config.html;
                                document.body.appendChild(dialog);

                                _self.cache.dialog = dialog;
                                _self._show({ _self: _self });

                                window.onscroll = function () {
                                    if (!_self.cache.isDispose) {
                                        _self._reset({ _self: _self });
                                    }
                                };

                                var closeButton = document.getElementById('letskillie6-close');
                                closeButton.onclick = function () {
                                    _self.cache.isDispose = true;
                                    _self._hide({ _self: _self });
                                    _self._setCookie(_self.config.targetId, _self.config.targetId, _self.config.delay);
                                    return false;
                                };

                                var links = dialog.getElementsByTagName('a');
                                for (var i = 0, len = links.length; i < len; i++) {
                                    var link = links[i];
                                    if (links[i].id != 'letskillie6-close') {
                                        link.onclick = function (ev) {
                                            _self._popup(this);
                                            return false;
                                        };
                                    }
                                }
                            });
                        }
                    },

                    _popup: function (link) {
                        window.open(link.href);
                    },

                    _reset: function (args) {
                        var _self = args._self;

                        _self.cache.dialog.style.display = 'none';

                        clearTimeout(_self.cache.triggerThread);
                        _self.cache.triggerThread = setTimeout(function () {
                            clearTimeout(_self.cache.triggerThread);
                            _self._show({ _self: _self });
                        }, 400);
                    },

                    _show: function (args) {
                        var _self = args._self;
                        var dialog = _self.cache.dialog;

                        if (_self.cache.dialogHeight == 0) {
                            _self.cache.dialogHeight = dialog.offsetHeight;
                        }
                        var height = _self._getScrollY() + document.documentElement.clientHeight - _self.cache.dialogHeight - 10;

                        _self.cache.opacity = 0;
                        _self._setOpacity({ _self: _self, element: dialog, opacity: _self.cache.opacity });
                        dialog.style.top = height + 'px';
                        dialog.style.visibility = 'visible';
                        dialog.style.display = 'inline';

                        _self.cache.showThread = setInterval(function () { _self._fadeIn({ _self: _self }); }, 40);
                    },

                    _hide: function (args) {
                        var _self = args._self;
                        var dialog = _self.cache.dialog;
                        _self.cache.hideThread = setInterval(function () { _self._fadeOut({ _self: _self }); }, 40);
                    },

                    _fadeIn: function (args) {
                        var _self = args._self;
                        var dialog = _self.cache.dialog;

                        _self.cache.opacity += 5;
                        if (_self.cache.opacity >= 100) {
                            clearTimeout(_self.cache.showThread);
                            _self.cache.opacity = 100;
                        }
                        _self._setOpacity({ _self: _self, element: dialog, opacity: _self.cache.opacity });
                    },

                    _fadeOut: function (args) {
                        var _self = args._self;
                        var dialog = _self.cache.dialog;

                        _self.cache.opacity -= 10;
                        if (_self.cache.opacity <= 0) {
                            clearTimeout(_self.cache.hideThread);
                            _self.cache.opacity = 0;
                            dialog.style.display = 'none';
                        }
                        _self._setOpacity({ _self: _self, element: dialog, opacity: _self.cache.opacity });
                    },

                    _loadCss: function (url, _self, fn) {
                        var head = document.getElementsByTagName('head')[0];
                        var node = document.createElement('link');
                        node.type = 'text/css';
                        node.rel = 'stylesheet';
                        node.href = url;
                        node.media = 'screen';

                        _self._styleOnload({ node: node, callback: fn, _self: _self });

                        head.appendChild(node);
                    },

                    _setOpacity: function (args) {
                        var _self = args._self;
                        var element = args.element;
                        var opacity = args.opacity;

                        if (/MSIE 6/i.test(navigator.userAgent)) {
                            element.style.filter = 'alpha(opacity=' + _self.cache.opacity + ')';
                        } else {
                            element.style.opacity = _self.cache.opacity / 100;
                        }
                    },

                    _setCookie: function (name, value, day) {
                        if (typeof LETSKILLIE6_DELAY != 'undefined' && LETSKILLIE6_DELAY != null) {
                            day = LETSKILLIE6_DELAY;
                        }
                        if (value === null) {
                            value = '';
                        }
                        var expires = '';

                        date = new Date();
                        date.setTime(date.getTime() + (day * 86400000));
                        expires = '; expires=' + date.toUTCString();

                        var path = '';
                        var domain = '';
                        var secure = '';
                        document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');
                    },

                    _getCookie: function (name) {
                        var cookieValue = null;
                        if (document.cookie && document.cookie != '') {
                            var cookies = document.cookie.split(';');
                            for (var i = 0; i < cookies.length; i++) {
                                var cookie = cookies[i];
                                while (cookie.charAt(0) == ' ') {
                                    cookie = cookie.substring(1, cookie.length);
                                }
                                if (cookie.substring(0, name.length + 1) == (name + '=')) {
                                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                                    break;
                                }
                            }
                        }
                        return cookieValue;
                    },

                    _getScrollY: function () {
                        if (typeof window.pageYOffset != 'undefined') {
                            return window.pageYOffset;
                        }

                        if (typeof document.compatMode != 'undefined' && document.compatMode != 'BackCompat') {
                            return document.documentElement.scrollTop;
                        }

                        return document.body.scrollTop;
                    },

                    _styleOnload: function (args) {
                        var _self = args._self;
                        var node = args.node;
                        var callback = args.callback;

                        if (node.attachEvent) {
                            node.attachEvent('onload', callback);
                        } else {
                            setTimeout(function () {
                                _self._poll({ node: node, callback: callback, _self: _self });
                            }, 0);
                        }
                    },

                    _poll: function (args) {
                        var _self = args._self;
                        var node = args.node;
                        var callback = args.callback;

                        if (callback.isCalled) {
                            return;
                        }

                        var isLoaded = false;

                        if (/webkit/i.test(navigator.userAgent)) {
                            if (node['sheet']) {
                                isLoaded = true;
                            }
                        } else if (node['sheet']) {
                            try {
                                if (node['sheet'].cssRules) {
                                    isLoaded = true;
                                }
                            } catch (ex) {
                                if (ex.code === 1000) {
                                    isLoaded = true;
                                }
                            }
                        }

                        if (isLoaded) {
                            setTimeout(function () {
                                callback();
                            }, 1);
                        } else {
                            setTimeout(function () {
                                _self._poll({ node: node, callback: callback, _self: _self });
                            }, 1);
                        }
                    }

                };

                (new LetsKillIE6()).init({
                    delay: 0,
                    targetId: 'letskillie6',
                    cssUrl: '/common_css/isie6.css',
                    html: '<div class="letskillie6-r4"></div><div class="letskillie6-r2"></div><div class="letskillie6-r1"></div><div class="letskillie6-r1"></div><div class="letskillie6-content"><a rel="nofollow" id="letskillie6-close" href="javascript:;"></a><span class="letskillie6-pic"></span><div class="letskillie6-desc">' +
                                '您正在使用 Internet Explorer 6 浏览网页，如果您 <strong>升级到 Internet Explorer 8</strong> 或 <strong>转换到另一款浏览器</strong>，可以获得更好的网站浏览体验。' +
                                '</div><div style="clear:both;"></div><div class="letskillie6-browsers"><a rel="nofollow" class="letskillie6-ie8" href="http://www.microsoft.com/windows/internet-explorer/">IE 8</a><a rel="nofollow" class="letskillie6-firefox" href="http://www.mozilla.com/">Firefox</a><a rel="nofollow" class="letskillie6-chrome" href="http://www.google.com/chrome/">Chrome</a><a rel="nofollow" class="letskillie6-opera" href="http://www.opera.com/">Opera</a><div style="clear:both;"></div></div></div><div class="letskillie6-r1"></div><div class="letskillie6-r1"></div><div class="letskillie6-r2"></div><div class="letskillie6-r4"></div>'
                });

            })();
        }
    },
    _validPlaceholder: function () {
        return 'placeholder' in document.createElement('input');
    },
    _addLayer: function (tid, msg) {
        var mspn = document.createElement("span");
        mspn.style.margin = "4px 2px 4px 34px";
        mspn.style.display = "block";
        mspn.style.fontSize = "12px"
        mspn.style.color = "#3D882D";
        mspn.style.overflow = "hidden";
        mspn.innerHTML = msg;
        var Layer = document.createElement("div");
        Layer.style.background = "url(/images/24h_a006.png) no-repeat 5px center #E8F8E7";
        Layer.style.border = "1px solid #3D882D";
        Layer.style.position = "absolute";
        Layer.style.zIndex = "9999";
        Layer.style.overflow = "hidden";
        Layer.style.height = "auto";
        Layer.id = "LayerMsg";
        Layer.appendChild(mspn);
        if ($(tid).html() == null) {
            Layer.style.top = ($(document).scrollTop() + window.screen.height / 2) - 150 + "px";
            Layer.style.left = window.screen.availWidth / 2 + "px";
            document.body.appendChild(Layer);
        }
        else {
            Layer.style.top = $(tid).offset().top - 50 + "px";
            Layer.style.left = $(tid).width() + $(tid).offset().left - 120 + "px";
            document.body.appendChild(Layer);
        }
        var creatediv = window.setInterval(function () {
            try {
                document.body.removeChild(document.getElementById("LayerMsg"));
            }
            catch (Erorr) { }
            window.clearInterval(creatediv);
        }, 2000);
        return false;
    },
    //错误
    _addLayerWoring: function (tid, msg) {
        var mspn = document.createElement("span");
        mspn.style.margin = "4px 2px 4px 34px";
        mspn.style.display = "block";
        mspn.style.fontSize = "12px"
        mspn.style.color = "#C00";
        mspn.style.overflow = "hidden";
        mspn.innerHTML = msg;
        var Layer = document.createElement("div");
        Layer.style.background = "url(/images/24h_a002.png) no-repeat  5px center #FBE2E2";
        Layer.style.border = "1px solid #C66161 ";
        Layer.style.position = "absolute";
        Layer.style.zIndex = "9999";
        Layer.style.overflow = "hidden";
        Layer.style.height = "auto";
        Layer.id = "LayerMsg";
        Layer.appendChild(mspn);
        if ($(tid).html() == null) {
            Layer.style.top = ($(document).scrollTop() + window.screen.height / 2) - 150 + "px";
            Layer.style.left = window.screen.availWidth / 2 + "px";
            document.body.appendChild(Layer);
        }
        else {
            Layer.style.top = $(tid).offset().top - 40 + "px";
            Layer.style.left = $(tid).width() + $(tid).offset().left - 120 + "px";
            document.body.appendChild(Layer);
        }
        var creatediv = window.setInterval(function () {
            try {
                document.body.removeChild(document.getElementById("LayerMsg"));
            }
            catch (Erorr) { }
            window.clearInterval(creatediv);
        }, 2000);
        return false;
    },
    _bingEvent: function (obj, eventType, fun) {
        eventType = typeof eventType == 'string' ? eventType : 'click';
        if ($(obj).length) {
            if ($(obj).live == undefined || $(obj).live == 'undefined') {
                $(document).on(eventType, obj, function () {
                    fun.call();
                })
            } else {
                $(obj).live(eventType, function () {
                    fun.call();
                })
            }
        } else {
            return;
        }
    },
    _ieVersion: function () {
        var ieMode = document.documentMode;
        var isIE = !!window.ActiveXObject;
        var ieVersion = false;
        //var isIE6 = isIE && !window.XMLHttpRequest;
        //var isIE7 = isIE && !isIE6 && !ieMode || ieMode == 7;
        //var isIE8 = isIE && ieMode == 8;
        //var isIE9 = isIE && ieMode == 9;
        if (isIE) {
            if (!window.XMLHttpRequest) {
                ieVersion = "6";
            } else if (!isIE6 && !ieMode || ieMode == 7) {
                ieVersion = "7";
            } else if (ieMode == 8) {
                ieVersion = "8";
            } else if (ieMode == 9) {
                ieVersion = "9";
            } else if (ieMode == 10) {
                ieVersion = "10";
            } else if (ieMode == 11) {
                ieVersion = "11";
            }
        }
        return ieVersion;
    }
};

template_plugin.public = {
    //热卖排行榜
    _hotRank: function (obj, delay) {
        obj = $(obj).find("[hotrank-item]");
        delay = delay || 300;
        var fun = function () {
            var timer = null;
            obj.on("mouseover", function () {
                var $t = $(this);
                clearTimeout(timer);
                timer = setTimeout(function () {
                    obj.parent().find("[hotrank-item]").removeClass("curr");
                    $t.addClass("curr");
                }, delay);
            });
        }
        obj.each(function () {
            fun(obj);
        });
    },
    //轮播小组件，可选择使用
    _jasonSilder: {
        _isResize: false,
        _gSlider: function (obj, eventType, effect, isauto, delay, isshowdir, isfull, isshowctrltitle) {
            obj = $(obj);

            var isOver = false;
            var _index = 0;
            var subobj = obj.find("ul");
            var subobj_li = subobj.find("li");
            var _width = subobj_li.width();
            var _height = subobj_li.height();
            var current = 0;

            isfull = isfull || false;
            var _timer = null;
            var _length = subobj_li.length;
            var prv = obj.find(".prv");
            var next = obj.find(".next");
            if (isfull) {
                _width = $(document.body).width();
            }
            var _init = function () {
                if (_length > 1) {
                    if (isauto) {
                        clearInterval(_timer);
                        autoStep();
                    }
                    showCtrl();
                    initCss();
                    _event();
                    _mousehover();
                } //如果数量>1自动轮播
            }
            var initCss = function () {
                _width = subobj_li.width();
                _height = subobj_li.height();
                if (isfull) {
                    _width = $(document.body).width();
                }
                obj.css("overflow", "hidden");
                if (obj.find(".gsctrl").length == 0) {
                    obj.parent().find(".gsctrl a").eq(0).addClass("curr");
                } else {
                    obj.find(".gsctrl a").eq(0).addClass("curr");
                }
                subobj_li.css("display", "block");
                if (effect == "slider") {
                    obj.css({ width: _width + "px" });
                    if (isfull) {
                        subobj_li.css({ width: _width + 'px' });
                        if ($(document.body).width() > 1190) {
                            obj.css({ "margin-left": -1 * _width / 2 + "px", left: "50%" });
                        }
                        else {
                            obj.css({ "margin-left": "0", left: "0", });
                        }
                    }
                    subobj.css({ width: _length * _width + "px", "-webkit-transition": "all .5s ease-in-out", "-moz-transition": "all .5s ease-in-out", "-ms-transition": "all .5s ease-in-out" });
                    //obj_li.removeClass("curr").eq(current).addClass("curr");
                    subobj_li.css({ display: "block", float: "left" });
                } else if (effect = "top") {
                    subobj.css({ height: _length * _height + "px", "-webkit-transition": "all .5s ease-in-out", "-moz-transition": "all .5s ease-in-out", "-ms-transition": "all .5s ease-in-out" });
                } else {
                    return;
                }
            }
            var showCtrl = function () {
                if (_length <= 1) {
                    return;
                } else {
                    var ctrlHtml = "";
                    if (isshowctrltitle == undefined || isshowctrltitle == "" || isshowctrltitle == false) {
                        for (var i = 1; i <= _length; i++) {

                            ctrlHtml += "<a class='ele' href='javascript:;'>" + i + "</a>";
                        }
                    }
                    else {
                        subobj_li.each(function () {
                            ctrlHtml += "<a class='ele' href='javascript:;'>" + $(this).attr("title") + "</a>";
                        });
                    }
                    if (obj.find(".gsctrl").length == 0) {
                        obj.parent().find(".gsctrl").append(ctrlHtml);
                    } else {
                        obj.find(".gsctrl").append(ctrlHtml);
                    }
                }
            }
            var autoStep = function () {
                _timer = setInterval(function () {
                    if (template_plugin.public._jasonSilder._isResize) {
                        initCss();
                    }
                    if (!isOver) {
                        if (current + 1 >= _length)
                            current = 0;
                        else
                            current++;
                        _slider();
                    }
                }, delay);
            }
            var _slider = function () {
                if (obj.find(".gsctrl").length == 0) {
                    obj.parent().find(".gsctrl a").removeClass("curr").eq(current).addClass("curr");
                } else {
                    obj.find(".gsctrl a").removeClass("curr").eq(current).addClass("curr");
                }
                if (effect == "no") {
                    //obj_li.removeClass("curr").eq(current).addClass("curr");
                    subobj_li.hide().eq(current).show();
                }
                else if (effect == "slider") {
                    if (template_plugin.tools.browser.versions.webKit || template_plugin.tools.browser.versions.gecko || $.browser.version == "11.0") {
                        if (isfull) {
                            subobj.css({ "-webkit-transform": "translate(" + (-1 * _width * current) + "px,0)", "-moz-transform": "translate(" + (-1 * _width * current) + "px,0)", "-ms-transform": "translate(" + (-1 * _width * current) + "px,0)" });
                        } else {
                            subobj.css({ "-webkit-transform": "translate(" + (-1 * _width * current) + "px,0)", "-moz-transform": "translate(" + (-1 * _width * current) + "px,0)", "-ms-transform": "translate(" + (-1 * _width * current) + "px,0)" });
                        }
                    } else {
                        if (isfull) {
                            subobj.stop(false, true).animate({
                                marginLeft: -1 * _width * current + "px"
                            }, 500);
                        } else {
                            subobj.stop(false, true).animate({
                                marginLeft: -1 * _width * current + "px"
                            }, 500);
                        }
                    }
                }
                else if (effect == "top") {
                    if (template_plugin.tools.browser.versions.webKit || template_plugin.tools.browser.versions.gecko || $.browser.version == "11.0") {
                        subobj.css({ "-webkit-transform": "translate(0," + (-1 * _height * current) + "px)", "-moz-transform": "translate(0," + (-1 * _height * current) + "px,0)", "-ms-transform": "translate(" + (-1 * _height * current) + "px)" });
                    } else {
                        subobj.stop(true, true).animate({
                            marginTop: -1 * _height * current + "px"
                        }, 500);
                    }
                }
                else if (effect == "fade") {
                    //obj_li.removeClass("curr").eq(current).addClass("curr");
                    subobj_li.css({ "position": "absolute", "display": "block" }).stop(true, true).animate({
                        opacity: 0, zIndex: 1
                    }, 800);
                    subobj_li.eq(current).stop(true, true).animate({
                        opacity: 1, zIndex: 2
                    }, 800);
                }
            }
            var _event = function () {
                prv.bind(eventType, function () {
                    clearInterval(_timer)
                    if (current == 0)
                        current = _length - 1;
                    else
                        current--;
                    _slider();
                    autoStep();
                });
                next.bind(eventType, function () {
                    clearInterval(_timer)
                    if (current >= _length - 1)
                        current = 0;
                    else
                        current++;
                    _slider();
                    autoStep();
                });
                var ctrlObj = null;
                if (obj.find(".gsctrl").length == 0) {
                    ctrlObj = obj.parent().find(".gsctrl a");
                } else {
                    ctrlObj = obj.find(".gsctrl a");
                }
                if (ctrlObj.length > 0) {
                    ctrlObj.bind(eventType, function () {
                        clearInterval(_timer)
                        current = $(this).index();
                        _slider();
                        autoStep();
                    });
                }
            }
            var _mousehover = function () {
                obj.hover(
                    function () {
                        if (isshowdir) { obj.find(".controler").stop(true, true).animate({ opacity: 1 }, "fast"); }
                        isOver = true;
                    },
                    function () {
                        if (isshowdir) { obj.find(".controler").stop(true, true).animate({ opacity: 0 }, "fast"); }
                        isOver = false;
                    }
                );
            }
            _init();
        }, //gslider end
        _run: function (obj, parm) {
            if (template_plugin.tools._validElement(obj)) {
                parm = {
                    eventType: "click",
                    effect: "slider",
                    isauto: true,
                    delay: 3000,
                    isshowdir: false,
                    isfull: false
                }
                var eventType = "click";
                var effect = "slider";
                var isauto = true;
                var delay = 3000;
                var isshowdir = false;
                var isfull = false;
                var isshowctrltitle = false;
                $(obj).each(function () {
                    var $this = $(this);
                    eventType = $this.attr("eventType") || "click";
                    effect = $this.attr("effect") || "slider";
                    isauto = $this.attr("isauto") || true;
                    delay = $this.attr("delay") || 5000;
                    isshowdir = $this.attr("isshowdir") || false;
                    isfull = $this.attr("isfull") || false;
                    isshowctrltitle = $this.attr("isshowctrltitle") || false;
                    template_plugin.public._jasonSilder._gSlider($this, eventType, effect, isauto, delay, isshowdir, isfull, isshowctrltitle);
                });
            }
        }
    },
    //分享功能
    _shareTo: function (webName) {
        var url = "";
        var title = $(".product_t").find("font").html(); //商品标题
        var content = title; //推广内容
        var productUrl = window.location.href; //网站访问地址
        var img = $(".zoomimg").attr("src");  //商品图片地址
        switch (webName) {
            case "tsina":
                url = "http://v.t.sina.com.cn/share/share.php?url=" + productUrl + "&title=" + content;
                break;
            case "kaixin001":
                url = "http://www.kaixin001.com/repaste/share.php?" + "rtitle=" + content + "&rcontent=" + title + productUrl + "&rurl=" + productUrl;
                break;
            case "gmail":
                url = "https://mail.google.com/mail/?view=cm&fs=1&tf=1&ui=2&shva=1&to&su=" + title + "&body=" + productUrl;
                break;
            case "renren":
                url = "http://share.renren.com/share/buttonshare.do?link=" + productUrl + "&title=" + title;
                break;
            case "qq":
                url = "http://shuqian.qq.com/post?from=3&title=" + encodeURIComponent(title) + "&uri=" + productUrl + "&jumpback=2&noui=1"
                break;
            case "qqblog":
                url = "http://v.t.qq.com/share/share.php?site=" + productUrl + "&title=" + encodeURIComponent(title) + "&pic=" + img + "&url=" + productUrl
                break;
            case "qzone":
                var url = "http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=" + encodeURIComponent(productUrl)
                break;
            case "baidu":
                url = "http://cang.baidu.com/do/add?it=" + encodeURIComponent(title) + "&iu=" + encodeURIComponent(productUrl) + "&fr=ien#nw=1";
                break;
            case "douban":
                //url="http://www.douban.com/recommend/?title="+title+"&comment="+content+"&url="+productUrl;
                url = 'http://www.douban.com/recommend/?url=' + productUrl + '&title=' + encodeURIComponent(title);
                break;
            case "google":
                //url="http://www.google.com/reader/link?url='"+productUrl+"'&title='"+title+"'&srcURL="+img+"'";
                url = "http://www.google.com/bookmarks/mark?op=edit&hl=zh-CN&output=popup&bkmk=" + productUrl + "&title=" + title;
                break;
            case "taojianghu":
                url = "http://share.jianghu.taobao.com/share/addShare.htm?url=" + productUrl + "&title=" + title;
                break;
            case "vivi":
                url = "http://vivi.sina.com.cn/collect/icollect.php?title=" + escape(title) + "&url=" + escape(productUrl) + "&desc=" + escape(content);
                break;
            case "51":
                url = "http://share.51.com/share/share.php?type=8&title=" + encodeURIComponent(title) + "&vaddr=" + encodeURIComponent(productUrl);
                break;
            case "yahoo":
                url = "http://myweb.cn.yahoo.com/popadd.html?url=" + encodeURIComponent(productUrl) + "&title=" + encodeURIComponent(title);
                break;
            case "bai":
                url = "http://bai.sohu.com/appLogin.jsp?bru=/app/share/blank/add.do?link=" + productUrl + "&title=" + title;
                break;
            case "msn":
                url = "http://profile.live.com/badge/?url=" + encodeURIComponent(productUrl) + "&title=" + encodeURIComponent(title) + "&description=" + encodeURIComponent(content) + "&screenshot=" + img;
                break;
            default:
                break;
        }
        window.open(url, "_blank");
    },
    //收藏夹 IE内核
    _addToFavorite: function (title) {
        url = "http://" + document.location.host + "/";
        //var c = "加入收藏夹";
        //c = $("title").text();
        try {
            window.external.AddFavorite(url, title);
        } catch (e) {
            try {
                window.sidebar.addPanel(title, url, "");
            } catch (e) {
                alert("对不起，您的浏览器不支持此操作!\n请您使用菜单栏或Ctrl+D收藏本站。");
            }
        }
    },
    //设为主页支持老浏览器
    _setMainPage: function (obj, vrl) {
        try {
            obj.style.behavior = 'url(#default#homepage)'; obj.setHomePage(vrl);
        }
        catch (e) {
            if (window.netscape) {
                try {
                    netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
                }
                catch (e) {
                    alert("此操作被浏览器拒绝！\n请在浏览器地址栏输入“about:config”并回车\n然后将 [signed.applets.codebase_principal_support]的值设置为'true',双击即可。");
                }
                var prefs = Components.classes['@mozilla.org/preferences-service;1'].getService(Components.interfaces.nsIPrefBranch);
                prefs.setCharPref('browser.startup.homepage', vrl);
            }
        }
    },
    //_jCarouselLite从新封装了下
    _jCarousellite: function (_obj, _speed, _auto, _visible, _vertical) {
        if (template_plugin.tools._validElement(_obj) && $(_obj).find("li").length >= _visible) {
            //_obj.find(".ctrl").show();
            //_obj.parent().find(".next").show();
            //_obj.parent().find(".prv").show();
            _obj = $(_obj);
            _obj.jCarouselLite({
                btnNext: _obj.parent().find(".next"),
                btnPrev: _obj.parent().find(".prv"),
                speed: _speed,
                auto: _auto,
                //visible: _visible,
                vertical: _vertical || false,
                circular: false
            }, _visible);
        }
    },
    //文章滚动组件
    _articleSlider: function (obj, _speed, _auto) {
        var t = null;
        var num = 5;
        if ($("[jcslide]").length > 0) {
            $("[jcslide]").each(function () {
                t = $(this);
                var _width = t.width();
                if (_width > 1000) {
                    num = 5;
                }
                else if (_width > 800 && _width < 1000) {
                    num = 4;
                }
                else if (_width > 600 && _width < 800) {
                    num = 3;
                }
                else {
                    num = 2;
                }
                template_plugin.public._jCarousellite(t, _speed, _auto, num);
            });
        }
    },
    //不间断滚动从新封装
    _jasonMarquee: function (_speed) {
        if (template_plugin.tools._validElement("[jm]")) {
            var t = null;
            var dir = "y";
            $("[jm]").each(function () {
                t = $(this);
                dir = dir || t.attr("jm-dir");
                $(t).jasonMarquee({ direction: dir, speed: _speed });
            });
        }
    },
    //抓钱框
    _zqk: {
        CusInfID: "",
        add_customer: function (obj) {
            //var CusInfID = "";
            debugger;
            var obj = $(obj);
            var name = obj.find("#cusName").val();
            var tel = obj.find("#cusMobile").val();
            var Company = obj.find("#cusCompany").val();
            var email = obj.find("#cusEmail").val();
            name = $.trim(name);
            tel = $.trim(tel);
            Company = $.trim(Company);
            email = $.trim(email);
            var telreg = /^0?(1)[0-9]{10}$/;
            var emailreg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
            var isvalid = false;

            var textObj = obj.find("#cusName");
            if (textObj.length > 0) {
                if (name == "") {
                    alert("姓名不能为空！");
                    textObj.focus();
                    isvalid = false;
                    return false;
                }
                else {
                    isvalid = true;
                }
            };
            var tellObj = obj.find("#cusMobile");
            if (tellObj.length > 0) {
                if (tel == "" || !telreg.test(tel)) {
                    alert("手机不正确！");
                    tellObj.focus();
                    isvalid = false;
                    return false;
                }
                else {
                    isvalid = true;
                }
            };

            var emailObj = obj.find("#cusEmail");
            if (emailObj.length > 0) {
                if (email == "" || !emailreg.test(email)) {
                    alert("邮箱不正确！");
                    emailObj.focus();
                    isvalid = false;
                    return false;
                }
                else {
                    isvalid = true;
                }
            };

            var comObj = obj.find("#cusCompany");
            if (comObj.length > 0) {
                if (Company == "") {
                    alert("公司不能为空！");
                    comObj.focus();
                    isvalid = false;
                    return false;
                }
                else {
                    isvalid = true;
                }
            };

            if (isvalid) {
                $.ajax({
                    url: '/admin/controls/trade.ashx',
                    type: 'POST',
                    data: { type: "add_customerdata", name: name, tel: tel, address: Company, email: email },
                    dataType: 'html',
                    success: function (data) {
                        template_plugin.public._zqk.CusInfID = data;
                        emailObj.val(""); comObj.val(""); tellObj.val(""); textObj.val("");
                        if (data != "") {
                            alert("恭喜，您的信息已经递交成功，请等待我们的回复。");
                            if (obj.find("input[class='m-btn']").attr("issub") == "True") {
                                obj.find(".s-frame").show();
                            }
                        }
                        else {
                            alert("很抱歉，服务器网络出现一点小状况，请稍后再试！。");
                            return false;
                        }
                    }
                });
            }
        },
        update_customer: function (obj) {
            var message = "";
            $(obj).find(".txt_subzqset").each(function () {
                message += $(this).attr("cn") + ":" + $(this).val() + ";";
            });
            $.ajax({
                url: '/admin/controls/trade.ashx',
                type: 'POST',
                data: { type: "update_customermessage", id: template_plugin.public._zqk.CusInfID, message: message },
                dataType: 'html',
                success: function (data) {
                    if (template_plugin.public._zqk.CusInfID != "") {
                        alert("恭喜，您的信息已经递交成功，请等待我们的回复。");
                        $(obj).find(".s-frame").hide();
                    }
                }
            });
        },
        _close: function (obj) {
            $(obj).find(".s-frame").hide();
        },
        _focus: function (obj, txt) {
            if ($("#indexhidden").length > 0) {
                if (obj.value == txt) {
                    obj.value = '';
                }
            }
            $(obj).addClass("curr");
        },
        _blur: function (obj, txt) {
            if ($("#indexhidden").length > 0) {
                if (obj.value == "" || obj.value == txt) {
                    obj.value = txt;
                }
            }
            $(obj).removeClass("curr");
        }
    },
    _valid_message: function (obj) {
        var form = $("." + obj);
        var name = form.find(".txtName").val();
        var tel = form.find(".txtTel").val();
        var email = form.find(".email").val();
        var address = form.find(".txtAddress").val();
        var flag = false;
        if (name != "") {
            if (tel != "") {
                if (email != "") {
                    if (address != "") {
                        flag = true;
                    }
                    else {
                        alert("主题不能为空！");
                        flag = false;
                    }
                }
                else {
                    alert("邮件地址不能为空！");
                    flag = false;
                }
            }
            else {
                alert("电话不能为空！");
                flag = false;
            }
        }
        else {
            alert("姓名不能为空！");
            flag = false;
        }
        return flag;
    },
    _logIn: function () {

        var IsSuccess = true;
        if (IsSuccess && $("#txtname").val() == "") {
            IsSuccess = false;
            alert('用户名不能为空！');
        }
        if (IsSuccess && $("#txtpwd").val() == "") {
            IsSuccess = false;
            alert('密码不能为空！');
        }
        if (IsSuccess && $("#txtcode").val() == "") {
            IsSuccess = false;
            alert('验证码不能为空！');
        }
        if (IsSuccess) {
            $.ajax({
                url: '/user/controls/userdo.ashx',
                type: 'POST',
                dataType: 'html',
                data: { type: 'modulelogin', u: $("#txtname").val(), p: $("#txtpwd").val(), c: $("#txtcode").val() },
                success: function (data) {
                    if (data == 0) {
                        alert("登录失败，用户名或密码错误！");
                    } else if (data == 3) {
                        $(".ModuleLogin").hide();
                        window.location.href = window.location.href;
                    } else if (data == 2) {
                        alert("验证码错误！");
                        $("#safeode").click();
                    } else {
                        document.location.reload(true);
                    }
                }
            });
        }
    },
    //退出登录
    _logOut: function () {
        $.ajax({
            url: '/logout.aspx?ajax=0',
            dataType: 'html',
            type: 'POST',
            success: function (data) {
                window.location.href = "/index.html";
            }
        });
    },
    _getValidCode: function (obj) {
        var numkey = Math.random();
        numkey = Math.round(numkey * 10000);
        $(obj).attr("src", "/controls/verify.aspx?k=" + numkey).css("display", "block");
    },
    //支持IE7-IE9的placeholder
    _placeholder: function () {
        if ($('[placeholder]').length > 0 && !template_plugin.tools._validPlaceholder()) {
            $('[placeholder]').focus(function () {
                var input = $(this);
                if (input.val() == input.attr('placeholder')) {
                    input.val('');
                    input.removeClass('placeholder');
                }
            }).blur(function () {
                var input = $(this);
                if (input.attr("type") != "password" && (input.val() == '' || input.val() == input.attr('placeholder'))) {
                    input.addClass('placeholder');
                    input.val(input.attr('placeholder'));
                }
            }).blur();
        }
    },
    //顶部导航菜单当前选中效果
    _currMenu: function (obj) {
        var getPageName = function (href) {
            var b = href.split("/");
            var c = b.slice(b.length - 1, b.length).toString(String).split(".");
            return c.slice(0, 1);
        }
        var thisPageName = "";
        var urlPageName = getPageName(location.href);
        $(obj).each(function () {
            thisPageName = $(this).find("a").attr("href");
            thisPageName = getPageName(thisPageName);
            if (thisPageName[0] == (urlPageName[0] = urlPageName[0] == "" ? "index" : urlPageName[0]) && $(this).find("a").attr("href").indexOf("store") < 0 && $(this).find("a").attr("href").indexOf("user") < 0) {
                $(this).addClass("curr");
            }
        });
    },
    _gotoTop: function (topborder, speed) {
        var _scroll = function () {
            $("html,body").stop(true, true).animate({
                scrollTop: 0
            }, speed);
        }
        var creatBacktopBtn = function () {
            $("body").append("<a href='javascript:;' id='backtotop' class='backtop'>回顶部</a>");
            $(window).scroll(function () {
                if ($(window).scrollTop() >= topborder) {
                    $("#backtotop").fadeIn("fast");
                }
                else {
                    $("#backtotop").fadeOut("fast");
                }
            });
        }
        creatBacktopBtn();
        template_plugin.tools._bingEvent('#backtotop', 'click', _scroll);
        //if ($('#backtotop').live('click', function () { }) != undefined) {
        //    $('#backtotop').live('click', function () {
        //        _scroll();
        //    })
        //} else {
        //    $(document).on("click", '#backtotop', function () {
        //        _scroll();
        //    });
        //}
    },
    _synEcsFaSliderHeight: function (obj) {
        if (template_plugin.tools._validElement(obj)) {
            obj = $(obj);
            var sliderObj = null;
            var zqkObj = null;
            obj.each(function () {
                sliderobj = $(this).find(".ecs-fa-slider");
                zqkObj = $(this).find(".ecs-zqk");
                sliderobj.height(zqkObj.height());
            });
        }
    }
};

/*****************内部公共JS结束**********/
var tempalte_public_init = function () {
    $("#search_box").keydown(function (e) {
        ProductSearch.key13(e);
    });

    //轮播图片lazyload模拟效果
    $(".smallslider img").removeClass("lazy");
    setTimeout(function () {
        $(".smallslider img").each(function (e) {
            if (typeof ($(this).attr("data-original")) != "undefined") {
                $(this).attr("src", $(this).attr("data-original"));
            }
        });
    }, 1000);
    //$("img.lazy").css("display", "block").lazyload({ placeholder: "/images/Default.gif", effect: "fadeIn" }).css({ display: "inline" });

    //批发规则页面JS
    wholesalerules._run();

    //全屏轮播组件，文章楼层组件轮播模块
    template_plugin.public._jasonSilder._run("[gslider]");

    //文章滚动组件
    template_plugin.public._articleSlider("[jcslide]", 800, 2000);

    //文章不间断滚动
    template_plugin.public._jasonMarquee(20);

    //IE6的警示
    template_plugin.tools._killIe6();

    //支持IE7-IE9的placeholder
    template_plugin.public._placeholder();

    //返回顶部
    template_plugin.public._gotoTop(100, 200);

    //同步左侧轮播右侧抓浅组件轮播广告的高度
    template_plugin.public._synEcsFaSliderHeight(".ecs-fa-zqk");
    //延迟加载
    echo.init();
};
/*页面resize*/
window.onresize = function () {
    //告诉轮播组件需要重新计算宽度
    template_plugin.public._jasonSilder._isResize = true;

    //从新给文章滚动组件赋值显示的个数
    if (template_plugin.tools._validElement("[jcslide]")) {
        $("[jcslide]").each(function () {
            var t = $(this);
            var _width = t.width();
            if (_width > 1000) {
                t.attr("visb", "5");
            }
            else if (_width > 800 && _width < 1000) {
                t.attr("visb", "4");
            }
            else if (_width > 600 && _width < 800) {
                t.attr("visb", "3");
            }
            else {
                t.attr("visb", "2");
            }
        });
    }
};
/*页面加载完成*/
$(document).ready(function () {
    tempalte_public_init();
});