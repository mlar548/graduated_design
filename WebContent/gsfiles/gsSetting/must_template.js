/*!
 * jQuery Cookie Plugin v1.4.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2006, 2014 Klaus Hartl
 * Released under the MIT license
 */
(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD (Register as an anonymous module)
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        // Node/CommonJS
        module.exports = factory(require('jquery'));
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
                t.setMilliseconds(t.getMilliseconds() + days * 864e+5);
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

        var result = key ? undefined : {},
			// To prevent the for loop in the first place assign an empty array
			// in case there are no cookies at all. Also prevents odd result when
			// calling $.cookie().
			cookies = document.cookie ? document.cookie.split('; ') : [],
			i = 0,
			l = cookies.length;

        for (; i < l; i++) {
            var parts = cookies[i].split('='),
				name = decode(parts.shift()),
				cookie = parts.join('=');

            if (key === name) {
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
        // Must not alter options, thus extending a fresh object...
        $.cookie(key, '', $.extend({}, options, { expires: -1 }));
        return !$.cookie(key);
    };

}));

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
        effect: 'fade',
        period: 5000,
        duration: 400,
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
//提示框
var ecsHint = {
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
        loadcss: (function () {
            var head = document.head || document.getElementsByTagName("head")[0],
                isHaveCss = false;
            $(head).find('link').each(function () {
                var $this = $(this);
                if ($this.attr('href') != '' && $this.attr('href').indexOf('Ecshop.Hint') > -1) {
                    isHaveCss = true;
                    return;
                }
            });
            if (!isHaveCss) {
                var css = document.createElement('link');
                css.href = '/Public/Style/Ecshop.Hint.min.css';
                css.setAttribute('rel', 'stylesheet');
                head.appendChild(css);
            }
        })()
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

var StopEvent = function (e) {
    e = e || window.event;
    if (e.stopPropagation)
        e.stopPropagation();
    else e.cancelBubble = true;
    if (e.preventDefault)
        e.preventDefault();
    else e.returnValue = false;
};
/*商品搜索方法提取*/
var ProductSearch = {
    search: function (obj) {
        var keywords = $("#search_box").val();
        ProductSearch.linksearch(keywords);
    },
    linksearch: function (keywords) {
        if (keywords == null || keywords == undefined) return;
        var len = 0, sumlen = 50;
        if (keywords.length > sumlen) {
            for (var i = 0; i < keywords.length; i++) {
                if (keywords.charCodeAt(i) > 0 && keywords.charCodeAt(i) < 128)
                    len++;
                else
                    len += 2;
                if (len > sumlen * 2) {
                    keywords = keywords.substring(0, i);
                    break;
                }
            }
        }
        templateListBox.addSearchRecord(keywords);
        window.location.href = "/productlist/" + Base32.encode(keywords) + "-0-0-0-0-0-1-4-1-0-0.html";
    },
    linksearch_extend: function (event, keywords) {
        ProductSearch.linksearch(keywords);
        StopEvent(event);
    },
    key13: function (e) {
        var curKey = e.which;
        if (curKey == 13) {
            ProductSearch.search();
        }
    },
    searchProduct: function () {
        ProductSearch.linksearch($("#search_box").val());
    },
    searchProductByArea: function () {
        window.location.href = $("#hidAreaLinkStr").val();
    },
    searchStoreProduct: function () {
        window.location.href = $("#hidurl").val() + "&ProductName=" + Base32.encode($("#search_box").val());
    },
    searchStore: function () {
        window.location.href = "/storelist.aspx?storeName=" + Base32.encode($("#search_box").val());
    }
};
var StoreListSearch = {
    search: function () {
        window.location.href = "/storelist.aspx?storeName=" + Base32.encode($("#search_box").val());

    }
}
var template_getValidCode = function (obj) {
    var numkey = Math.random();
    var html = "";
    $(obj).each(function () {
        numkey = Math.round(numkey * 10000);
        html = "<img height='20' style='vertical-align:middle;' src='/controls/verify.aspx?k=" + numkey + "' onclick='this.src+=" + numkey + "' />";
        $(this).append(html);
    });
}
var tempalte_storeInfoPosition = function () {
    var _height = "";
    if ($(".product_t").length > 0) {
        _height = $(".product_t").height() + 3;
    }
    else if ($(".product_intro .name").length > 0) {
        _height = $(".product_intro .name").height() + 3;
    }
    $("#brand-bar-pop").css("top", _height + "px");
}

var template_instanceSearch = function () {
    this.isReload = true;
    var current = this;
    //search dropdown div
    var searchobj = $("#shelper");
    //text input
    var txtinputobj = $("#search_box");
    var searchBoxHtml = "";
    var itemHoverIndex = 0;
    //li obj
    var item = null;
    var hoverTimer = null;
    var rswordObj = $("#rsword");
    // 避免在按键过快造成的重复提交
    var asyncGetSuggestTimeHandler = null;
    // 按键后暂停1秒后传到服务器搜索
    var asyncTimeTrigger = 1000;
    var containerUserHistory = [];
    //focus on input show searchresult
    txtinputobj.focus(function (event) {
        if (rswordObj.length > 0) {
            if ($.trim(rswordObj.val()) == $.trim(txtinputobj.val()) && isMainPage()) { //seted default keyword
                txtinputobj.val("");
            }

            if ($.cookie("ecs_s_s_un_ll") != undefined && txtinputobj.val() == "") { //logined
                searchRecord();
                hoverEvent();
            }
            else if (txtinputobj.val() != "") {
                //nologin
                if (asyncGetSuggestTimeHandler)
                    clearTimeout(asyncGetSuggestTimeHandler);
                asyncGetSuggestTimeHandler = setTimeout(function () { searchResult(); hoverEvent(); }, asyncTimeTrigger);
            }

        };
        StopEvent(event);
    }).blur(function () {
        if ($.trim(txtinputobj.val()) == "") {
            txtinputobj.val(rswordObj.val());
        }
    });
    //text input stopPropagation
    $(txtinputobj).bind("click", function (event) {
        StopEvent(event);
    });
    txtinputobj.keyup(function (e) {
        evt = e || window.event;
        var code = parseInt(e.keyCode || e.which || 10);
        if (code == 38) {//up
            if (itemHoverIndex == 0) {
                itemHoverIndex = item.length;
            }
            itemHoverIndex--;
            item.removeClass("curr").eq(itemHoverIndex).addClass("curr");
            txtinputobj.val(item.eq(itemHoverIndex).find(".search-item").text());
        }
        else if (code == 40) {//down

            if (itemHoverIndex >= item.length) {
                itemHoverIndex = 0;
            }
            item.removeClass("curr").eq(itemHoverIndex).addClass("curr");
            txtinputobj.val(item.eq(itemHoverIndex).find(".search-item").text());
            itemHoverIndex++;
        }
            //keyCode在48到105之间为字母和数字以及回退键和删除键,避免中英切换的时候，都去请求
        else if (code == 8 || code == 46 || (code >= 48 && code <= 105)) {

            if (asyncGetSuggestTimeHandler)
                clearTimeout(asyncGetSuggestTimeHandler);
            asyncGetSuggestTimeHandler = setTimeout(function () { searchResult(); hoverEvent(); }, asyncTimeTrigger);
        }
    });
    var isMainPage = function () {
        var f = false;
        f = $("#root,#root61").length ? true : false;
        return f;
    }
    //li hover event
    var hoverEvent = function () {
        var that = null;
        item.live("mouseover", function () {
            clearTimeout(hoverTimer);
            that = $(this);
            //itemHoverIndex = that.index();
            that.addClass("hover");
            searchobj.show();
        }).live("mouseout", function () {
            clearTimeout(hoverTimer);
            that = $(this);
            that.removeClass("hover");
        });
        searchobj.live("mouseout", function () {
            clearTimeout(hoverTimer);
            hoverTimer = setTimeout(function () {
                searchobj.hide();
            }, 500);
        });
    };
    //searchResult
    var searchResult = function () {
        $.ajax({
            url: '/controls/SearchHandler.ashx',
            async: false,
            type: 'POST',
            data: { type: "GetSearchKeyword", Keyword: txtinputobj.val().trim() },
            dataType: 'json',
            success: function (data) {
                searchBoxHtml = "<ul>";
                if (data != null && !$.isPlainObject(data)) {
                    $.each(data, function (key, val) {
                        if (val.IsUseHistory == 1) {
                            searchBoxHtml += "<li class='clearfix' lang='li-history' onclick='ProductSearch.linksearch(\"" + val.KeyWord + "\");'>";
                            searchBoxHtml += "<div class='search-item'>" + val.KeyWord + "</div>";
                            searchBoxHtml += "<div class='search-count'><span>搜索历史</span><a href='javascript:;' onclick='return templateListBox.deleteSearchRecord(event,this);'>删除</a></div>";
                            searchBoxHtml += "</li>";
                        } else {
                            searchBoxHtml += "<li class='clearfix' onclick='ProductSearch.linksearch(\"" + val.KeyWord + "\");'>";
                            searchBoxHtml += "<div class='search-item'>" + val.KeyWord + "</div>";
                            searchBoxHtml += "</li>";
                        }

                    });
                }
                else {
                    searchBoxHtml = "<p>暂无该关键词的商品信息！</p>";
                }
                item = searchobj.find("li");
                searchBoxHtml += "</ul>";
                searchobj.html(searchBoxHtml).show();
            }
        });
    };
    //searchRecord
    var searchRecord = function () {
        if (containerUserHistory["containerUserHistory"] != undefined && !current.isReload) {
            searchobj.html(containerUserHistory["containerUserHistory"]).show();
            return;
        }
        $.ajax({
            url: '/controls/SearchHandler.ashx',
            async: false,
            type: 'POST',
            data: { type: "GetUserSearchHistory" },
            dataType: 'json',
            success: function (data) {
                searchBoxHtml = "<ul class='search-record'>";
                if (data != null && !$.isPlainObject(data)) {
                    $.each(data, function (key, val) {
                        searchBoxHtml += "<li class='clearfix' lang='li-history' onclick='ProductSearch.linksearch(\"" + val.KeyWord + "\");'>";
                        searchBoxHtml += "<div class='search-item'>" + val.KeyWord + "</div>";
                        searchBoxHtml += "<div class='search-count'><span>搜索历史</span><a href='javascript:;' onclick='return templateListBox.deleteSearchRecord(event,this);'>删除</a></div>";
                        searchBoxHtml += "</li>";
                    });
                    item = searchobj.find("li");
                }
                searchBoxHtml += "</ul>";
                searchobj.html(searchBoxHtml).show();
                containerUserHistory["containerUserHistory"] = searchBoxHtml;
                current.isReload = false;
            }
        });
    };
}
var templateListBox = {
    temp: null,
    init: function () {
        this.temp = new template_instanceSearch();
    },
    deleteSearchRecord: function (event, obj) {
        obj = $(obj).parent().parent();
        var key = obj.find(".search-item").text().trim();
        $.ajax({
            url: '/controls/SearchHandler.ashx',
            async: false,
            type: 'POST',
            data: { type: "RemoveUserSearchKeyword", Keyword: key },
            dataType: 'json',
            success: function (data) {
                if ($.isPlainObject(data)) {
                    $(obj).remove();
                    templateListBox.temp.isReload = true;
                    //console.log(templateListBox.temp.isReload);
                }
            }
        });
        StopEvent(event);
    },
    addSearchRecord: function (key) {
        $.ajax({
            url: '/controls/SearchHandler.ashx',
            async: false,
            type: 'POST',
            data: { type: "AddSearchRecord", Keyword: key },
            dataType: 'json',
            success: function (data) {
                if ($.isPlainObject(data)) {
                    //console.log(data);
                }
            }
        });
    }
}


var template_infiniteBuyTab = function (obj) {
    var timer = null;
    obj = $(obj);
    var _s = obj.attr("attribute");
    var ishowprice = obj.attr("ishowprice");
    var ishowvipprice = obj.attr("isshowvipprice");
    var _eid = obj.attr("eid");
    var curr = 0;
    var _tabindex = 0;
    var html = "";
    var $t = null;
    var liobj = obj.find(".itab li");
    liobj.bind("mouseover", function () {
        $t = $(this);
        _tabindex = $t.attr("tabindex");
        curr = $t.index();
        clearTimeout(timer);
        timer = setTimeout(function () {
            liobj.removeClass("curr");
            $t.addClass("curr");
            if (obj.find(".mc .smc").eq(curr).length > 0) {
                obj.find(".mc .smc").hide().eq(curr).show();
            }
            else {
                $.ajax({
                    url: '/controls/controls_data_load.ashx',
                    async: false,
                    type: 'post',
                    data: { type: "infinitebuytab", s: _s, tabindex: _tabindex, eid: _eid },
                    dataType: 'json',
                    success: function (data) {
                        if (data != "" && data != undefined && data != null) {
                            html = "";
                            html += "<div class='smc'>";
                            html += "<ul class='clearfix'>";
                            $.each(data, function (i, item) {
                                html += "<li>";
                                html += "<div class='p-img'><a href='/productinfo/" + item.productid + ".html' title='" + item.title + " target='_blank'><img src='" + item.productpic + "'/></a></div>";//p-img
                                html += "<div class='p-info'><a class='p-name ecs-c333' href='/productinfo/" + item.productid + ".html'>" + item.productname + "</a>";
                                if (ishowprice) {
                                    if (ishowvipprice) {
                                        html += "<div class='p-price ecs-mb15'><span class='p-price-curr'>&yen;<b class='ecs-fs20'>" + item.uprice + "</b></span><span class='p-price-past ecs-fs14 ecs-c999 ecs-pl20'>&yen;" + item.price + "</span></div>";//price
                                    }
                                    else {
                                        html += "<div class='p-price ecs-mb15'><span class='p-price-curr'>&yen;<b class='ecs-fs20'>" + item.price + "</b></span><span class='p-price-past ecs-fs14 ecs-c999 ecs-pl20'>&yen;" + item.mktprice + "</span></div>";//price
                                    }
                                }
                                html += "<span class='buycount ecs-fs14 ecs-c999'><b>" + item.buycount + "</b>人已买</span>";//buycount
                                html + "</div>";//p-info
                                html += "</li>";//end li
                            });
                            html += "</ul>";//end ul
                            html += "</div>";//end smc
                            obj.find(".mc").append(html);
                            obj.find(".mc .smc").hide().eq(curr).show();
                        }
                        else {
                            obj.find(".mc").append("<div class='smc ecs-fs17'>暂无商品数据</div>");
                            obj.find(".mc .smc").hide().eq(curr).show();
                        }
                    }
                });
            }
            obj.find(".iarrow").css("width", $t.outerWidth(true) + "px").stop(true, true).animate({
                left: $t.outerWidth(true) * curr + "px"
            }, "fast");
        }, 300);
    });
}
; (function ($) {
    var Coupon = function (obj, opt) {
        this.$obj = $(obj);
        this.id = this.$obj.attr("data-couponid") == undefined ? "" : this.$obj.attr("data-couponid");
        this.defaults = {
            afterCallBack: function () { },
            parent: Object
        }
        this.options = $.extend({}, this.defaults, opt || {});
        this.getCoupon();
    };
    Coupon.prototype.getCoupon = function () {
        var self = this;
        //var isLoad = this.isLoad;
        this.$obj.on('click.getcoupon', function () {
            var $this = $(this);
            if ($.cookie != undefined && $.cookie('ecs_s_s_un_ll') != undefined) {
                $.ajax({
                    async: false,
                    type: "post",
                    url: '/Coupon/Controller/CouponReceiveHandler.ashx',
                    data: { couponId: self.id, type: 'ReceiveCoupon' },
                    dataType: 'json',
                    success: function (data) {;
                        if (data.Id != undefined) {
                            if (console != undefined) {
                                //console.log(data.IsContinueReceiveCoupon);
                            }
                            if (data.IsContinueReceiveCoupon == false) {
                                $this.off('click.getcoupon').css('cursor', 'default').text('已领取').parent().parent().addClass('pc-card-gray');
                            }
                            //alert("领取成功！")
                            ecsHint.Ok({ info: '领取成功' });
                            if (typeof self.options.afterCallBack == 'function') {
                                self.options.afterCallBack(data);
                            }
                        }
                        else {
                            alert(data.Errors.ErrorItems[0].ErrorMessage);
                            if (data.Errors.ErrorItems[0].CustomState == 'out') {
                                $this.off('click.getcoupon').css('cursor', 'default').text('已领光').parent().parent().addClass('pc-card-gray');
                            }
                        }
                    }
                })
            } else {
                if ($.dialog != undefined) {
                    $.dialog.open('/LoginDialog.aspx?btnid=&resulturi=' + encodeURI(window.location.href), {
                        width: '400px', height: '540px', title: false, lock: true, fixed: true, init: function () {
                            $(window).scrollTop(1000);
                        }
                    });
                }
                else {
                    alert('请登录后再领取！');
                }
            }
        });
    };

    $.fn.coupon = function (options) {
        return this.each(function () {
            if (!$.data(this, 'coupon')) {
                $.data(this, 'coupon', new Coupon(this, options));
            }
        });
    }
})(jQuery);

var couponInit = function () {
    if ($('[coupon=cp]').length) {
        var isLoad = false;
        //var getscript = function (source, dtd) {
        //    $.getScript(source, function () {
        //        dtd.resolve();
        //    });
        //    return dtd
        //},
        //loadArtDialogJs = function () { getscript('/Public/Javascript/artdialog/jquery.artDialog.js?skin=custom', $.Deferred()) },
        //loadIframeTools = function () { getscript('/Public/Javascript/artdialog/plugins/iframeTools.js', $.Deferred()) };
        //$.when(loadArtDialogJs(), loadIframeTools())
        //.done(function () {
        //    isLoad = true;
        //    if (console != undefined) {
        //        console.log('true');
        //    }
        //    $('[coupon=cp]').coupon();
        //})
        //.fail(function () {
        //    isLoad = false;
        //    if (console != undefined) {
        //        console.log('false');
        //    }
        //});
        var ArtDialogJs = '/Public/Javascript/artdialog/jquery.artDialog.js?skin=custom',
            IframeTools = '/Public/Javascript/artdialog/plugins/iframeTools.js'
        $.getScript(ArtDialogJs, function () {
            $.getScript(IframeTools, function () {
                isLoad = true;
                setTimeout(function () {
                    $('[coupon=cp]').coupon();
                }, 0);
            });
        })
        return isLoad;
    }
};
var addArtDialogCss = function () {
    var links = document.getElementsByTagName('link');
    var docHead = document.head || document.getElementsByTagName("head")[0];
    var isHaveCustomCss = false;
    for (var i = 0 ; i < links.length - 1; i++) {
        if (links[i].href && links[i].href.indexOf('custom.css') > -1) {
            isHaveCustomCss = true;
            break;
        }
        else {
            isHaveCustomCss = false;
        }
    }
    if (!isHaveCustomCss) {
        var linkCustom = document.createElement('link');
        linkCustom.href = '/Public/Javascript/artdialog/skins/custom.min.css';
        linkCustom.rel = 'stylesheet';
        docHead.appendChild(linkCustom);
    }
}
function wholeSaleCountDown(listobj, callback) {
    var $listObj = $(listobj),
        $objTitle = $listObj.find('.wscd-titleshow'),
        $objDay = $listObj.find('.wscd-dayshow'),
        $objHour = $listObj.find('.wscd-hourshow'),
        $objMin = $listObj.find('.wscd-minshow'),
        $objSec = $listObj.find('.wscd-secshow'),
        thisDate = new Date(),
		nowTime = thisDate.getTime(),
		startDate = new Date($listObj.data('sdate') == undefined ? new Date().getTime() : $listObj.data('sdate')).getTime(),
		endDate = new Date($listObj.data('edate') == undefined ? new Date().getTime() : $listObj.data('edate')).getTime(),
		timeOfRemain = (startDate - nowTime) / 1000,
		timeOfOver = (endDate - nowTime) / 1000,
		intDiff = null,
        leftTime = 0,
		stutas = 'over',
        o = {
            obj: $listObj,
            pid: $listObj.data('pid'),
            gid: $listObj.data('gid')
        } || {},
    _callback = {
        beforeStart: function (o) { },
        afterOver: function (o) { }
    };
    callback = $.extend({}, _callback, callback || {});
    var countDown = function (_stutas) {
        var day = 0,
			hour = 0,
			minute = 0,
			second = 0;//时间默认值
        day = Math.floor(intDiff / (60 * 60 * 24));
        hour = Math.floor(intDiff / (60 * 60)) - (day * 24);
        minute = Math.floor(intDiff / 60) - (day * 24 * 60) - (hour * 60);
        second = Math.floor(intDiff) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60);
        if (minute <= 9) minute = '0' + minute;
        if (second <= 9) second = '0' + second;
        if (_stutas == 'noton') {
            $objTitle.html('距活动开始');
            $objDay.html('<span><i>' + day + '</i><em>天</em></span>');
            $objHour.html('<span><i>' + hour + '</i><em>时</em></span>');
            $objMin.html('<span><i>' + minute + '</i><em>分</em></span>');
            $objSec.html('<span><i>' + second + '</i><em>秒</em></span>');
        } else if (_stutas == 'on') {
            $objTitle.html('距活动结束');
            $objDay.html('<span><i>' + day + '</i><em>天</em></span>');
            $objHour.html('<span><i>' + hour + '</i><em>时</em></span>');
            $objMin.html('<span><i>' + minute + '</i><em>分</em></span>');
            $objSec.html('<span><i>' + second + '</i><em>秒</em></span>');
        } else {
            clearInterval(timer);
        }
    }
    var timer = window.setInterval(function () {
        if (timeOfOver > 0) {
            if (timeOfRemain > 0) {//未开始 倒计时
                if (leftTime == 0) {
                    leftTime = timeOfRemain;
                }
                intDiff = timeOfRemain;
                stutas = 'noton'
                countDown(stutas);
                if (typeof callback == 'object' && intDiff > 0 && intDiff < 1) {
                    if (typeof callback.beforeStart == 'function') {
                        callback.beforeStart(o);
                    }
                }
                intDiff = timeOfRemain--;
            } else {//开始了 剩余多久结束
                intDiff = timeOfOver;
                stutas = 'on';
                if (leftTime == 0) {
                    intDiff = timeOfOver--;
                } else {
                    timeOfOver = timeOfOver - leftTime;
                    intDiff = timeOfOver--;
                }
                countDown(stutas);
                leftTime = 0;
            }
        } else {//结束
            stutas = 'over';
            countDown(stutas);
            if (typeof callback == 'object' && typeof callback.afterOver == 'function') {
                callback.afterOver(o);
            }
        }
    }, 1000);
}
$.eclog = function (loginfo) {
    if (console != undefined) {
        console.log(loginfo)
    } else {
        if (document.getElementById('eclog') == null) {
            var eclog = document.createElement('div');
            eclog.setAttribute('id', 'eclog');
            eclog.style.cssText = 'background:rgba(0,0,0,.1);border:1px solid #ccc;font-size:12px;color:#1796AB;padding:10px;position:fixed;right:0;bottom:0;z-index:999;max-height:300px;width:max-width:200px;overflow:auto;overflow-x:hidden;'
            document.body.appendChild(eclog);
        }
        var eclog = document.getElementById('eclog'),
            title = document.getElementById('eclog-title');
        if (title != null) {
            eclog.removeChild(title);
        }
        eclog.innerHTML = '<div id="eclog-title" style="color:#333;">调试信息，程序猿忘记删了^ - ^</div>' + eclog.innerHTML + loginfo + '<br>';
        eclog.scrollTop = eclog.scrollHeight + 10;
    }
}

var areaObj = {
    ProvinceId: 0,
    CityId: 0,
    AreaId: 0
};
var areaCookie = {
    flag: false,
    cookieName: "areaCookie",
    init: function () {
        areaCookie.flag = false;
        if ($.cookie(areaCookie.cookieName)) {
            var area = $.cookie(areaCookie.cookieName).split("&");
            if (area.length == 3) {
                areaObj.ProvinceId = area[0];
                areaObj.CityId = area[1];
                areaObj.AreaId = area[2];
                return;
            }
        }
        //判断是否登录，获取用户已选择地区
        if (!areaCookie.flag) {
            this.getUserLastSelectedArea();
        }

        //api 定位
        if (!areaCookie.flag && typeof (BMap) != 'undefined') {
            var geolocation = new BMap.Geolocation();  //实例化浏览器定位对象。
            //下面是getCurrentPosition方法。调用该对象的getCurrentPosition()，与HTML5不同的是，这个方法原型是getCurrentPosition(callback:function[, options: PositionOptions])，也就是说无论成功与否都执行回调函数1，第二个参数是关于位置的选项。 因此能否定位成功需要在回调函数1中自己判断。
            geolocation.getCurrentPosition(function (r) { //定位结果对象会传递给r变量
                if (this.getStatus() == BMAP_STATUS_SUCCESS) { //通过Geolocation类的getStatus()可以判断是否成功定位。

                    var gc = new BMap.Geocoder();

                    gc.getLocation(r.point, function (rs) {

                        var addComp = rs.addressComponents;
                        //console.log(addComp.district);
                        areaCookie.getAreaIdByAreaName(addComp);
                    });


                } else {
                    alert('failed' + this.getStatus());
                }
            }, { enableHighAccuracy: true });
        }
        if (!areaCookie.flag) {
            areaCookie.getDefaultArea();
        }

    },
    /*获得上次地区*/
    getUserLastSelectedArea: function () {
        if ($.cookie("ecs_s_s_un_ll") != undefined) {
            $.ajax({
                url: '/controls/AreaHandler.ashx',
                async: false,
                type: 'POST',
                data: {
                    type: "GetUserLastSelectedArea"
                },
                dataType: 'json',
                success: function (data) {
                    if (data) {
                        areaCookie.flag = true;
                        areaObj.ProvinceId = data.ProvinceId;
                        areaObj.CityId = data.CityId;
                        areaObj.AreaId = data.AreaId;
                        areaCookie.setAreaCookie();
                        return;

                    }
                }
            });
        }
    },
    /*反查地区id*/
    getAreaIdByAreaName: function (addressComponents) {

        $.ajax({
            url: '/controls/AreaHandler.ashx',
            async: false,
            type: 'POST',
            data: {
                type: "GetAreaIdByAreaName",
                ProvinceName: addressComponents.province,
                CityName: addressComponents.city,
                AreaName: addressComponents.district
            },
            dataType: 'json',
            success: function (data) {
                data = $.isPlainObject(data) ? data : JSON.parse(data);
                if (data) {
                    areaCookie.flag = true;
                    areaObj.ProvinceId = data.ProvinceId;
                    areaObj.CityId = data.CityId;
                    areaObj.AreaId = data.AreaId;
                    areaCookie.setAreaCookie();
                }
            }
        });
    },
    /*查询默认地区*/
    getDefaultArea: function () {
        $.ajax({
            url: '/controls/AreaHandler.ashx',
            async: false,
            type: 'POST',
            data: {
                type: "GetDefaultArea"
            },
            dataType: 'json',
            success: function (data) {
                data = $.isPlainObject(data) ? data : JSON.parse(data);
                if (data) {
                    areaCookie.flag = true;
                    areaObj.ProvinceId = data.ProvinceId;
                    areaObj.CityId = data.CityId;
                    areaObj.AreaId = data.AreaId;
                    //$.cookie(areaCookie.cookieName, areaObj.ProvinceId + "&" + areaObj.CityId + "&" + areaObj.AreaId, { expires: 1, path: '/' });
                }
            }
        });
    },

    getAreaName: function () {
        var addr = "";
        $.ajax({
            url: '/controls/AreaHandler.ashx',
            async: false,
            type: 'POST',
            data: {
                type: "GetAreaByAreaId"
            },
            dataType: 'json',
            success: function (data) {
                data = $.isPlainObject(data) ? data : JSON.parse(data);
                if (data) {

                    addr += data.ProvinceName;
                    addr += data.CityName;
                    addr += data.AreaName;

                }
            }
        });
        return addr;
    },
    //更新用户上次选择的地区
    updateUserLastSelectedArea: function () {
        areaCookie.setAreaCookie();
        if ($.cookie("ecs_s_s_un_ll") != undefined) {
            return;
        }
        $.ajax({
            url: "/controls/productinfo.ashx",
            async: false,
            type: 'POST',
            data: {
                type: "setuserlastareaid",
                areaId: areaObj.AreaId
            },
            dataType: 'html',
            success: function (data) {
            }
        });
    },
    setAreaCookie: function () {
        $.cookie(areaCookie.cookieName, areaObj.ProvinceId + "&" + areaObj.CityId + "&" + areaObj.AreaId, { expires: 1, path: '/' });

    }

}
var prodListStoreSelecter = function () {
    this.$wrapEle = $('#store-selector');
    this.$title =
    this.$tab =
    this.$tabItem =
    this.$mc = null;
    this.areaJson = this.$wrapEle.data('area');
    this.areaData = null;
    this.currTabIndex = 0;
    this.tplTimer = null;
    this.clicked = false;
    this.areaId = {
        pid: 0,
        cid: 0,
        tid: 0
    };
} || {};
prodListStoreSelecter.prototype = {
    _init: function () {
        if (document.location.href.indexOf('Design_My_Template') > -1 || !$('.delivery-panel').length) {
            return;
        } else {
            var _this = this;
            this._initTempHtml();
            this._showSelecter();
            this._tabClickEvent();
            this._areaClickEvent(function () {
                $.eclog('已经是最后一级！！');
                areaObj.ProvinceId = _this.areaId.pid;
                areaObj.CityId = _this.areaId.cid;
                areaObj.AreaId = _this.areaId.tid;
                areaCookie.setAreaCookie();
                window.location.href = $("#hidAreaLinkStr").val();

            });
        }
    },
    _showSelecter: function () {
        var _this = this,
            $ele = this.$wrapEle;
        $ele.on('mouseenter', function (e) {
            var timer = null,
                $this = $(this);
            clearTimeout(timer);
            timer = setTimeout(function () {
                $this.addClass('active');
            }, 200)
        }).on('mouseleave', function () {
            var timer = null,
                $this = $(this);
            if (_this.clicked) {
                return;
            } else {
                clearTimeout(timer);
                timer = setTimeout(function () {
                    $this.removeClass('active');
                }, 800);
            }
        });
    },
    _initTempHtml: function () {
        var _this = this,
            $wrapEle = this.$wrapEle,
            tplHtml = '';
        if (!_this.$wrapEle.children().length) {
            tplHtml = '\<div class="text" id="text"></div>\
                <div class="content" id="area-content">\
                    <div class="mt">\
                        <ul class="tab" id="tab">\
                        </ul>\
                    </div>\
                    <div class="mc" data-index="0" data-mc="province">\
                    </div>\
                    <div class="mc" data-index="1" data-mc="city">\
                    </div>\
                    <div class="mc" data-index="2" data-mc="town">\
                    </div>\
                </div>\
                <div class="close" onclick="$(\'#store-selector\').removeClass(\'active\')"></div>\
                ';
            $wrapEle.append(tplHtml);
            this.$title = $wrapEle.find('#text');
            this.$tab = $wrapEle.find('#tab');
            this.$mc = $wrapEle.find('.content .mc');
            var _initAreaListHtml = function (pid, cid, tid) {
                var html = _this._getAreaById(pid, cid, tid);
                _this.$tab.append('<li data-mt="province" data-index="0"><a href="javascript:;"title="' + html.currProvince + '"><em>' + html.currProvince + '</em><i></i></a></li>');
                _this.$tab.append('<li data-mt="city" data-index="1"><a href="javascript:;"title="' + html.currCity + '"><em>' + html.currCity + '</em><i></i></a></li>');
                _this.$tab.append('<li data-mt="town" data-index="2" class="curr"><a href="javascript:;"title="' + html.currTown + '"><em>' + html.currTown + '</em><i></i></a></li>');
                _this.$mc.hide();
                $wrapEle.find('.content .mc[data-mc="province"]').append(html.provinceStr);
                $wrapEle.find('.content .mc[data-mc="city"]').append(html.cityStr);
                $wrapEle.find('.content .mc[data-mc="town"]').append(html.townStr).show();
                _this.$tabItem = _this.$tab.find('li[data-mt]');
            }
            _this._getAreaData(function () {
                //console.log(JSON.stringify(_this.areaData));
                if (typeof areaObj == 'object' && areaObj.ProvinceId != undefined && areaObj.ProvinceId != '') {
                    _this.$title.append(areaCookie.getAreaName() + '<b></b>');
                    _initAreaListHtml(areaObj.ProvinceId, areaObj.CityId, areaObj.AreaId);
                    _this.areaId.pid = areaObj.ProvinceId;
                    _this.areaId.cid = areaObj.CityId;
                    _this.areaId.tid = areaObj.AreaId;

                } else {
                    _this.$title.append('北京北京市朝阳区<b></b>');
                    _initAreaListHtml(110000, 110100, 110105);
                    _this.areaId.pid = 110000;
                    _this.areaId.cid = 110100;
                    _this.areaId.tid = 110105;
                }
            });
            this.currTabIndex = _this.$tab.find('li[data-mt].curr').data('index');
        }
    },
    _getAreaData: function (callback) {
        var _this = this;
        $.ajax({
            type: 'POST',
            dataType: "json",
            url: '/controls/AreaHandler.ashx',
            data: { type: 'GetAllAreas' },
            async: true,
            error: function (request, textStatus, errorThrown) {
                //result.Status = 2;
                //result.Code = "999";
            },
            success: function (json) {
                //result = json;
                _this.areaData = json;
                if ($.isFunction(callback)) {
                    callback.call(_this);
                }
            }
        });
    },
    _getAreaById: function (pid, cid, tid) {
        var _this = this, data = null,
            htmlStr = {
                provinceStr: '',
                cityStr: '',
                townStr: '',
                currProvince: '',
                currCity: '',
                currTown: ''
            },
            data = eval(_this.areaData);
        if (data != undefined && data != null) {
            var url = $("#hidAreaLinkStr").val();
            $.each(data, function (i, item) {
                if (item.parentid == 0) {
                    htmlStr.provinceStr += '<li><a href="javascript:;" data-townindex="0" data-id="' + item.id + '">' + item.areaname + '</a></li>';
                }
                if (pid != -1 && item.parentid == pid) {
                    htmlStr.cityStr += '<li><a href="javascript:;" data-townindex="1" data-id="' + item.id + '">' + item.areaname + '</a></li>';
                }
                if (cid != -1 && item.parentid == cid) {
                    htmlStr.townStr += '<li><a href="javascript:;" data-townindex="2" data-id="' + item.id + '">' + item.areaname + '</li>';
                }
                if (item.id == pid) {
                    htmlStr.currProvince = item.areaname;
                } else if (item.id == cid) {
                    htmlStr.currCity = item.areaname;
                } else if (item.id == tid) {
                    htmlStr.currTown = item.areaname;
                }
            });
            htmlStr.provinceStr = '<ul class="area-list clearfix">' + htmlStr.provinceStr + '</ul>';
            htmlStr.cityStr = '<ul class="area-list clearfix">' + htmlStr.cityStr + '</ul>';
            htmlStr.townStr = '<ul class="area-list clearfix">' + htmlStr.townStr + '</ul>';
        }
        return htmlStr;
    },
    _tabClickEvent: function () {
        var _this = this;
        $(document).on('click', '#tab li[data-mt]', function () {
            var $this = $(this),
                liIndex = $this.data('index');
            if ($this.hasClass('curr')) {
                return;
            } else {
                _this.$tabItem.removeClass('curr');
                $(this).addClass('curr').nextAll().hide();
                _this.$mc.each(function () {
                    var $this = $(this),
                        mcIndex = $(this).data('index');
                    if (mcIndex == liIndex) {
                        $this.show();
                    } else {
                        $this.hide();
                    }
                });
            }
            _this.currTabIndex = liIndex;
            $.eclog('currtabindex:' + _this.currTabIndex);
        });
    },
    _areaClickEvent: function (callback) {
        var _this = this;
        $(document).on('click', '#area-content .area-list li a[data-id]', function () {
            var $this = $(this),
                id = $this.data('id'),
                text = $this.text(),
                //index = $this.data('townindex'),
                index = _this.currTabIndex,
                html = '';
            if (index == 0) {
                _this.areaId.pid = id;
            } else if (index == 1) {
                _this.areaId.cid = id;
            } else {
                _this.areaId.tid = id;
            }
            $.each(eval(_this.areaData), function (i, item) {
                if (item.parentid == id) {
                    html += '<li><a href="javascript:;" data-id="' + item.id + '">' + item.areaname + '</a></li>';
                }
            });
            if (html.length < 1) {
                callback.call(_this);
                return;
            } else {
                clearTimeout(_this.tplTimer);
                _this.clicked = true;
                _this.tplTimer = setTimeout(function () {
                    _this.clicked = false;
                }, 800);
                _this.$mc.hide();
                _this.$tabItem.removeClass('curr');
                //change mc list
                _this.$mc.filter('[data-index=' + (_this.currTabIndex) + ']').next('[data-mc]').html('<ul class="area-list clearfix">' + html + '</ul>').show();
                //change tab title
                _this.$tab.find('li[data-index=' + _this.currTabIndex + ']')
                    .html('<a href="javascript:;"title="' + text + '"><em>' + text + '</em><i></i></a>')
                    .next('[data-mt]')
                    .addClass('curr')
                    .html('<a href="javascript:;"title="请选择"><em>请选择</em><i></i></a>').show();
                _this.currTabIndex = _this.currTabIndex + 1;
            }
        });
    }
}
var currMenu = function (obj) {
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
}
$(document).ready(function () {
    $("#search_box").keydown(function (e) {
        ProductSearch.key13(e);
    });
    template_getValidCode(".code");
    tempalte_storeInfoPosition();
    templateListBox.init();
    $(".emodule-floor-eight").each(function () {
        template_infiniteBuyTab($(this).find(".mmc"));
    });
    $(".emodule-floor-nine .gslider").emoudleSlider();
    $("body").bind("click", function () {
        $("#shelper").hide();
    });
    //var isLoad = loadJsCss();
    //if (isLoad) {
    //    $('[coupon=cp]').coupon();
    //}
    addArtDialogCss();
    couponInit();
    $('#ecs-wholesales-content li .wscd-part').length && $('#ecs-wholesales-content li').each(function () {
        var $this = $(this);
        wholeSaleCountDown(this,
           {
               beforeStart: function () {
                   $this.removeClass('start panicBuying out').addClass('panicBuying');
                   $this.find('.ws-buy-btn').text('立刻购买');
               }
           }
        );
    });
    $('#ecs-wholesales-article-box-right #wscd-part').length
    && wholeSaleCountDown('#ecs-wholesales-article-box-right', {
        beforeStart: function (o) {
            var btnStr = document.location.href.indexOf('buyinginfo') > -1 ? '立即抢购' : '立即团购';
            o.obj.find("#ecs-wholesales-article-buttom").removeClass('noton over out').addClass('on');
            o.obj.find('#ws-buy-btn').html('<b pid="' + o.pid + '" gid="' + o.gid + '" id="buy">' + btnStr + '</b>');
        },
        afterOver: function (o) {
            o.obj.find("#ecs-wholesales-article-buttom").removeClass('noton over out').addClass('over');
            o.obj.find("#wscd-part").remove();
            o.obj.find('#ws-buy-btn').html('<b>已结束</b>');
        }
    });
    areaCookie.init();
    var pless = new prodListStoreSelecter();
    pless._init();
    !$("#root").length && $("#nav-return-home").show();
});
