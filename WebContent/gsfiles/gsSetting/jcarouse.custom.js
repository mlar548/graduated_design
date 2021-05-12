/*
*这是修改自jcarousellite
*不要用以前的覆盖了
*增加每个独立默认按钮，增加可以滚动任意内容
*edit by guo
*/
(function ($) {
    $.fn.jcarousel = function (o) {
        o = $.extend({
            btnPrev: null,
            btnNext: null,
            btnGo: null,
            mouseWheel: false,
            wrapperClass: 'jcarouse-wrap',
            auto: null,
            showControl: true,
            onMouse: true,
            speed: 200,
            slideDiv: null,
            slideItem: null,
            easing: null,
            vertical: false,
            circular: false,
            visible: 1,
            start: 0,
            scroll: 1,
            beforeStart: null,
            afterEnd: null
        }, o || {});
        return this.each(function () {
            var running = false,
				animCss = o.vertical ? "top" : "left",
				sizeCss = o.vertical ? "height" : "width";
            var div = $(this), ul, tLi;
            if (o.slideDiv) {
                ul = $('>' + o.slideDiv, div);
            } else {
                ul = $(">ul", div);
            }
            if (o.slideItem) {
                tLi = $('>' + o.slideItem, ul);
            } else {
                tLi = $(">li", ul);
            }
            var tl = tLi.size();
            var v = o.visible;
            var btnPrev = [], btnNext = [];
            if (o.showControl) {
                var wrapper = $('<div class="' + o.wrapperClass + '"></div>');
                var controlStr = '<a class="jcarouse-prev">&lt;</a><a class="jcarouse-next">&gt;</a>';
                div.wrap(wrapper);
                wrapper = div.closest('.' + o.wrapperClass).css('position', 'relative');
                wrapper.append(controlStr);
                btnPrev = wrapper.find('.jcarouse-prev');
                btnNext = wrapper.find('.jcarouse-next');
                if (!o.circular) {
                    btnPrev.addClass('disabled');
                }
                if (o.visible >= tl) {
                    btnPrev.addClass('disabled');
                    btnNext.addClass('disabled');
                }
            }

            if (o.circular) {
                ul.prepend(tLi.slice(tl - v - 1 + 1).clone()).append(tLi.slice(0, v).clone());
                o.start += v;
            }
            var li;
            if (o.slideItem) {
                li = $('>' + o.slideItem, ul);
            } else {
                li = $(">li", ul);
            }
            var itemLength = li.size(),
				curr = o.start;
            div.css("visibility", "visible");
            li.css({
                overflow: "hidden",
                float: o.vertical ? "none" : "left"
            });
            ul.css({
                margin: "0",
                padding: "0",
                position: "relative",
                "list-style-type": "none",
                "z-index": "0"
            });
            div.css({
                overflow: "hidden",
                position: "relative",
                "z-index": "0",
                left: "0px",
                float: "none",
                top: "0"
            });
            var liSize = o.vertical ? li.outerHeight(true) : li.outerWidth(true);
            var ulSize = liSize * itemLength;
            var divSize = liSize * v;
            li.css({
                width: li.width(),
                height: liSize
            });
            ul.css(sizeCss, ulSize + "px").css(animCss, -(curr * liSize));
            div.css(sizeCss, divSize + "px");

            if (!o.circular) {
                $(o.btnPrev).addClass('disabled');
            }

            if (o.btnPrev)
                $(o.btnPrev).click(function () {
                    return go(curr - o.scroll);
                });
            if (o.btnNext)
                $(o.btnNext).click(function () {
                    return go(curr + o.scroll);
                });
            if (btnPrev.length)
                btnPrev.click(function () {
                    return go(curr - o.scroll);
                });
            if (btnNext.length)
                btnNext.click(function () {
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
            if (o.auto)
                setInterval(function () {
                    go(curr + o.scroll);
                }, o.auto + o.speed);
            if (o.onMouse) {
                li.bind("mouseover", function () {
                    if (o.auto) {
                        running = true;
                    }
                })
                li.bind("mouseout", function () {
                    if (o.auto) {
                        running = false;
                    }
                })
            }

            function vis() {
                return li.slice(curr).slice(0, v);
            };

            function go(to) {
                if (!running) {
                    if (o.beforeStart)
                        o.beforeStart.call(this, vis());
                    if (o.circular) {
                        if (to <= o.start - v - 1) {
                            ul.css(animCss, -((itemLength - (v * 2)) * liSize) + "px");
                            curr = to == o.start - v - 1 ? itemLength - (v * 2) - 1 : itemLength - (v * 2) - o.scroll;
                        } else if (to >= itemLength - v + 1) {
                            ul.css(animCss, -((v) * liSize) + "px");
                            curr = to == itemLength - v + 1 ? v + 1 : v + o.scroll;
                        } else curr = to;
                    } else {
                        if (to < 0 || to > itemLength - v) return;
                        else curr = to;
                    }
                    running = true;
                    ul.animate(animCss == "left" ? {
                        left: -(curr * liSize)
                    } : {
                        top: -(curr * liSize)
                    }, o.speed, o.easing, function () {
                        if (o.afterEnd)
                            o.afterEnd.call(this, vis());
                        running = false;
                    });
                    if (!o.circular) {
                        $(o.btnPrev + "," + o.btnNext).removeClass("disabled");
                        $(btnPrev).removeClass("disabled");
                        $(btnNext).removeClass("disabled");
                        $((curr - o.scroll < 0 && o.btnPrev) || (curr + o.scroll > itemLength - v && o.btnNext) || []).addClass("disabled");
                        if (curr - o.scroll < 0 && btnPrev.length) {
                            btnPrev.addClass("disabled");
                        }
                        if (curr + o.scroll > itemLength - v && btnNext.length) {
                            btnNext.addClass("disabled");
                        }
                    }
                }
                return false;
            };
        });
    };

})(jQuery);