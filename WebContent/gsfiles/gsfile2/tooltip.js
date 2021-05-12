// 信息提示插件
// by guo
;
(function ($) {

    function tooltip(elem, options) {

        var self = this;
        var elem = $(elem);
        var tooltip = $('<div class="' + options.theClass + '"><div class="tooltip-title">{title}</div><div class="tooltip-content">{content}</div></div>');

        //<ie7三角
        if ($.browser.msie && $.browser.version <= 7.0) {
            tooltip.append('<div class="after"></div>');
        }

        var containter = options.containter ? $(options.containter) : $('body');

        var tempPosition = containter.css('position');
       
        // 是否一直存在
        if (options.exist) {
            tooltip.appendTo(containter);
        }
        // padding值
        if (options.padding && typeof options.padding == "number") {
            tooltip.find('.tooltip-content').css('padding', options.padding + 'px');
        }
        //以data-title
        var title = elem.attr('data-title') || options.title;
        if (title) {
            tooltip.find('.tooltip-title').html(title);
        } else {
            tooltip.find('.tooltip-title').hide();
        }

        //以data-content
        var content = elem.attr('data-content') || options.content;

        // 传入id或者class的形式
        if (/^[\.|#].+$/.test(content)) {
            content = $(content);
        }
        // 传入一个对象时
        if (typeof content == 'object') {
            tooltip.find('.tooltip-content').empty().append(content.show());
        } else {
            tooltip.find('.tooltip-content').html(content);
        }

        //默认为鼠标划过
        if (options.type == 'hover') {
            elem.hover(function (e) {

                self.show(e);
            }, function () {
                self.hide();
            });

            if (!options.fixed) {
                elem.mousemove(function (e) {
                    if (tooltip.css('display') !== 'none') self.updatePostion(e);
                });
            }

        } else if (options.type == 'click') {
            elem.click(function (e) {
                if (e.target === elem.get(0)) {
                    if (tooltip.css('display') !== 'none')
                        self.hide();
                    else
                        self.show(e);
                }
                ;
            });
            
            $(window).mousedown(function (e) {
                if (tooltip.css('display') !== 'none') {
                    // 高不高效不考虑~~
                    var check = (options.focus) ? $(e.target).parents('.tooltip').andSelf().filter(function () { return this === tooltip.get(0) }).length : 0;
                    if (check === 0) self.hide();
                }
                ;
            });
        } else {
            alert('调用事情类型出错！');
        }
        $.extend(self, {
            //更新位置
            setPosition: function (posX, posY) {
                var elemPos = elem.offset();

                if (typeof posX == 'string') posX = parseInt(posX) + elemPos.left;
                if (typeof posY == 'string') posY = parseInt(posY) + elemPos.top;

                tooltip.css({ position: 'absolute', left: posX, top: posY, zIndex: 999 });

                return self;
            },
            // 最大宽度
            setWidth: function () {
                var width = tooltip.outerWidth(true);
                if (width >= options.maxWidth) {
                    tooltip.css('width', options.maxWidth + 'px');
                }
                return self;
            },
            //最大高度
            setHeight: function () {
                var height = tooltip.outerHeight(true);
                if (height>=options.maxHeight) {
                    tooltip.css({ "height": options.maxHeight + "px", "overflow": "auto" });
                }
            },
            //显示
            show: function (e) {
                if (!options.exist) {
                    tooltip.appendTo(containter);
                }
                if (!containter.is('body') && tempPosition == 'static') {
                    containter.css('position', 'relative');
                }

                self.setWidth();
                self.setHeight();
                self.updatePostion((options.fixed) ? null : e);
                tooltip.show();
                return self;
            },

            hide: function () {
                tooltip.hide();
                if (!options.exist) {
                    tooltip.remove();
                }
                //if(typeof content == 'object'){
                //    $('body').append(content);
                //}
                if (!containter.is('body') && tempPosition == 'static') {
                    containter.css('position', tempPosition);
                }
                return self;
            },
            // 更新内容
            updateContent: function (content) {
                tooltip.find('.tooltip-content').html(content);
                options.content = content;
                return self;
            },

            load: function (uri, data) {
                tooltip.load(uri, data);
                return self;
            },

            //检查边界 这个函数待完善
            boundryCheck: function (posX, posY) {
                var newX = posX + tooltip.outerWidth();
                var newY = posY + tooltip.outerHeight();
                var windowWidth = $(window).width() + $(window).scrollLeft();
                var windowHeight = $(window).height() + $(window).scrollTop();
                return [(newX >= windowWidth), (newY >= windowHeight)];
            },
            // 更新位置
            updatePostion: function (e) {
                //debugger;
                var tooltipWidth = tooltip.outerWidth(true),
                tooltipHeight = tooltip.outerHeight(true),
                posX = 0,
                posY = 0;

                if (options.attachTo) {
                    elem = $(options.attachTo);
                }

                if (!e && options.fixed) {

                    var elemPos = containter.is('body') ? elem.offset() : { left: 0, top: 0 };
                    var elemWidth = elem.outerWidth(true);
                    //console.log(elemWidth);
                    var elemHeight = elem.outerHeight(true);

                    // 显示位置
                    switch (options.position) {
                        case 'top':
                            posX = elemPos.left - (tooltipWidth / 2) + (elemWidth / 2);
                            posY = elemPos.top - tooltipHeight;
                            if (options.showArrow) {
                                tooltip.addClass('arrow-top');
                                posY -= 10;
                            }
                            break;
                        case 'bottom':
                            posX = elemPos.left - (tooltipWidth / 2) + (elemWidth / 2);
                            posY = elemPos.top + elemHeight;
                            if (options.showArrow) {
                                tooltip.addClass('arrow-bottom');
                                posY += 10;
                            }
                            break;
                        case 'left':
                            posX = elemPos.left - tooltipWidth;
                            posY = elemPos.top - (tooltipHeight / 2) + (elemHeight / 2);
                            if (options.showArrow) {
                                tooltip.addClass('arrow-left');
                                posX -= 10;
                            }
                            break;
                        case 'right':
                            posX = elemPos.left + elemWidth;
                            posY = elemPos.top - (tooltipHeight / 2) + (elemHeight / 2);
                            if (options.showArrow) {
                                tooltip.addClass('arrow-right');
                                posX += 10;
                            }
                            break;
                        default:
                        case 'default':
                            posX = elemPos.left - (tooltipWidth / 2) + (elemWidth / 2);
                            posY = elemPos.top - tooltipHeight;
                            if (options.showArrow) {
                                tooltip.addClass('arrow-default');
                                posY -= 10;
                            }
                            break;
                    }
                    ;
                } else {
                    posX = e.pageX;
                    posY = e.pageY;
                }
                // 偏移位置
                posX += options.offset[0];
                posY += options.offset[1];
                //console.log(posX + "-" + posY);
                if (options.boundryCheck) {
                    var overflow = self.boundryCheck(posX, posY);
                    if (overflow[0]) posX = posX - (tooltipWidth / 2);
                    if (overflow[1]) posY = posY - (tooltipHeight / 2);
                }

                self.setPosition(posX, posY);
                return self;
            }
        });
    }

    $.fn.tooltip = function (options) {

        var defaults = {
            containter: 'body', // 当鼠标划过又想操作里面内容的时候使用，没想到更好的方法，鼠标延时|fixed？
            content: '我是提示内容',
            type: 'hover',
            padding: 10,
            exist: true,	//是否一直存在  
            position: 'default',
            focus: false, //点击自身是否消失
            maxWidth: 300, //最大宽度
            boundryCheck: true, //检查边界
            fixed: true, //是否静止不动
            showArrow: true, //显示三角
            theClass: 'tooltip',
            title: null, //标题 
            attachTo: null, // 依附在哪个身上
            time: null,//显示时间，
            offset: [0, 0],// 偏移位置
            maxHeight:300
        };
        $.extend(defaults, options || {});
        // 插件
        return this.each(function () {
            var el = new tooltip($(this), defaults);
            $(this).data("tooltip", el);
        });
    };

})(jQuery);
$(function () {
    $("[data-tooltip='hover']").tooltip({
        type: 'hover',
        position: 'bottom',
        focus: true //点击自身是否消失
    });
    $("[data-tooltip='click']").tooltip({
        type: 'click',
        position: 'bottom',
        focus: true //点击自身是否消失
    });

})