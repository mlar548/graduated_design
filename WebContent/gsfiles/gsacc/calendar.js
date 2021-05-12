///*!
//* jQuery UI 1.8.22
//*
//* Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
//* Dual licensed under the MIT or GPL Version 2 licenses.
//* http://jquery.org/license
//*
//* http://docs.jquery.com/UI
//*/
//(function ($, undefined) {

//    // prevent duplicate loading
//    // this is only a problem because we proxy existing functions
//    // and we don't want to double proxy them
//    $.ui = $.ui || {};
//    if ($.ui.version) {
//        return;
//    }

//    $.extend($.ui, {
//        version: "1.8.22",

//        keyCode: {
//            ALT: 18,
//            BACKSPACE: 8,
//            CAPS_LOCK: 20,
//            COMMA: 188,
//            COMMAND: 91,
//            COMMAND_LEFT: 91, // COMMAND
//            COMMAND_RIGHT: 93,
//            CONTROL: 17,
//            DELETE: 46,
//            DOWN: 40,
//            END: 35,
//            ENTER: 13,
//            ESCAPE: 27,
//            HOME: 36,
//            INSERT: 45,
//            LEFT: 37,
//            MENU: 93, // COMMAND_RIGHT
//            NUMPAD_ADD: 107,
//            NUMPAD_DECIMAL: 110,
//            NUMPAD_DIVIDE: 111,
//            NUMPAD_ENTER: 108,
//            NUMPAD_MULTIPLY: 106,
//            NUMPAD_SUBTRACT: 109,
//            PAGE_DOWN: 34,
//            PAGE_UP: 33,
//            PERIOD: 190,
//            RIGHT: 39,
//            SHIFT: 16,
//            SPACE: 32,
//            TAB: 9,
//            UP: 38,
//            WINDOWS: 91 // COMMAND
//        }
//    });

//    // plugins
//    $.fn.extend({
//        propAttr: $.fn.prop || $.fn.attr,

//        _focus: $.fn.focus,
//        focus: function (delay, fn) {
//            return typeof delay === "number" ?
//			this.each(function () {
//			    var elem = this;
//			    setTimeout(function () {
//			        $(elem).focus();
//			        if (fn) {
//			            fn.call(elem);
//			        }
//			    }, delay);
//			}) :
//			this._focus.apply(this, arguments);
//        },

//        scrollParent: function () {
//            var scrollParent;
//            if (($.browser.msie && (/(static|relative)/).test(this.css('position'))) || (/absolute/).test(this.css('position'))) {
//                scrollParent = this.parents().filter(function () {
//                    return (/(relative|absolute|fixed)/).test($.curCSS(this, 'position', 1)) && (/(auto|scroll)/).test($.curCSS(this, 'overflow', 1) + $.curCSS(this, 'overflow-y', 1) + $.curCSS(this, 'overflow-x', 1));
//                }).eq(0);
//            } else {
//                scrollParent = this.parents().filter(function () {
//                    return (/(auto|scroll)/).test($.curCSS(this, 'overflow', 1) + $.curCSS(this, 'overflow-y', 1) + $.curCSS(this, 'overflow-x', 1));
//                }).eq(0);
//            }

//            return (/fixed/).test(this.css('position')) || !scrollParent.length ? $(document) : scrollParent;
//        },

//        zIndex: function (zIndex) {
//            if (zIndex !== undefined) {
//                return this.css("zIndex", zIndex);
//            }

//            if (this.length) {
//                var elem = $(this[0]), position, value;
//                while (elem.length && elem[0] !== document) {
//                    // Ignore z-index if position is set to a value where z-index is ignored by the browser
//                    // This makes behavior of this function consistent across browsers
//                    // WebKit always returns auto if the element is positioned
//                    position = elem.css("position");
//                    if (position === "absolute" || position === "relative" || position === "fixed") {
//                        // IE returns 0 when zIndex is not specified
//                        // other browsers return a string
//                        // we ignore the case of nested elements with an explicit value of 0
//                        // <div style="z-index: -10;"><div style="z-index: 0;"></div></div>
//                        value = parseInt(elem.css("zIndex"), 10);
//                        if (!isNaN(value) && value !== 0) {
//                            return value;
//                        }
//                    }
//                    elem = elem.parent();
//                }
//            }

//            return 0;
//        },

//        disableSelection: function () {
//            return this.bind(($.support.selectstart ? "selectstart" : "mousedown") +
//			".ui-disableSelection", function (event) {
//			    event.preventDefault();
//			});
//        },

//        enableSelection: function () {
//            return this.unbind(".ui-disableSelection");
//        }
//    });

//    // support: jQuery <1.8
//    if (!$("<a>").outerWidth(1).jquery) {
//        $.each(["Width", "Height"], function (i, name) {
//            var side = name === "Width" ? ["Left", "Right"] : ["Top", "Bottom"],
//			type = name.toLowerCase(),
//			orig = {
//			    innerWidth: $.fn.innerWidth,
//			    innerHeight: $.fn.innerHeight,
//			    outerWidth: $.fn.outerWidth,
//			    outerHeight: $.fn.outerHeight
//			};

//            function reduce(elem, size, border, margin) {
//                $.each(side, function () {
//                    size -= parseFloat($.curCSS(elem, "padding" + this, true)) || 0;
//                    if (border) {
//                        size -= parseFloat($.curCSS(elem, "border" + this + "Width", true)) || 0;
//                    }
//                    if (margin) {
//                        size -= parseFloat($.curCSS(elem, "margin" + this, true)) || 0;
//                    }
//                });
//                return size;
//            }

//            $.fn["inner" + name] = function (size) {
//                if (size === undefined) {
//                    return orig["inner" + name].call(this);
//                }

//                return this.each(function () {
//                    $(this).css(type, reduce(this, size) + "px");
//                });
//            };

//            $.fn["outer" + name] = function (size, margin) {
//                if (typeof size !== "number") {
//                    return orig["outer" + name].call(this, size);
//                }

//                return this.each(function () {
//                    $(this).css(type, reduce(this, size, true, margin) + "px");
//                });
//            };
//        });
//    }

//    // selectors
//    function focusable(element, isTabIndexNotNaN) {
//        var nodeName = element.nodeName.toLowerCase();
//        if ("area" === nodeName) {
//            var map = element.parentNode,
//			mapName = map.name,
//			img;
//            if (!element.href || !mapName || map.nodeName.toLowerCase() !== "map") {
//                return false;
//            }
//            img = $("img[usemap=#" + mapName + "]")[0];
//            return !!img && visible(img);
//        }
//        return (/input|select|textarea|button|object/.test(nodeName)
//		? !element.disabled
//		: "a" == nodeName
//			? element.href || isTabIndexNotNaN
//			: isTabIndexNotNaN)
//        // the element and all of its ancestors must be visible
//		&& visible(element);
//    }

//    function visible(element) {
//        return !$(element).parents().andSelf().filter(function () {
//            return $.curCSS(this, "visibility") === "hidden" ||
//			$.expr.filters.hidden(this);
//        }).length;
//    }

//    $.extend($.expr[":"], {
//        data: $.expr.createPseudo ?
//		$.expr.createPseudo(function (dataName) {
//		    return function (elem) {
//		        return !!$.data(elem, dataName);
//		    };
//		}) :
//        // support: jQuery <1.8
//		function (elem, i, match) {
//		    return !!$.data(elem, match[3]);
//		},

//        focusable: function (element) {
//            return focusable(element, !isNaN($.attr(element, "tabindex")));
//        },

//        tabbable: function (element) {
//            var tabIndex = $.attr(element, "tabindex"),
//			isTabIndexNaN = isNaN(tabIndex);
//            return (isTabIndexNaN || tabIndex >= 0) && focusable(element, !isTabIndexNaN);
//        }
//    });

//    // support
//    $(function () {
//        var body = document.body,
//		div = body.appendChild(div = document.createElement("div"));

//        // access offsetHeight before setting the style to prevent a layout bug
//        // in IE 9 which causes the elemnt to continue to take up space even
//        // after it is removed from the DOM (#8026)
//        div.offsetHeight;

//        $.extend(div.style, {
//            minHeight: "100px",
//            height: "auto",
//            padding: 0,
//            borderWidth: 0
//        });

//        $.support.minHeight = div.offsetHeight === 100;
//        $.support.selectstart = "onselectstart" in div;

//        // set display to none to avoid a layout bug in IE
//        // http://dev.jquery.com/ticket/4014
//        body.removeChild(div).style.display = "none";
//    });

//    // jQuery <1.4.3 uses curCSS, in 1.4.3 - 1.7.2 curCSS = css, 1.8+ only has css
//    if (!$.curCSS) {
//        $.curCSS = $.css;
//    }





//    // deprecated
//    $.extend($.ui, {
//        // $.ui.plugin is deprecated.  Use the proxy pattern instead.
//        plugin: {
//            add: function (module, option, set) {
//                var proto = $.ui[module].prototype;
//                for (var i in set) {
//                    proto.plugins[i] = proto.plugins[i] || [];
//                    proto.plugins[i].push([option, set[i]]);
//                }
//            },
//            call: function (instance, name, args) {
//                var set = instance.plugins[name];
//                if (!set || !instance.element[0].parentNode) {
//                    return;
//                }

//                for (var i = 0; i < set.length; i++) {
//                    if (instance.options[set[i][0]]) {
//                        set[i][1].apply(instance.element, args);
//                    }
//                }
//            }
//        },

//        // will be deprecated when we switch to jQuery 1.4 - use jQuery.contains()
//        contains: function (a, b) {
//            return document.compareDocumentPosition ?
//			a.compareDocumentPosition(b) & 16 :
//			a !== b && a.contains(b);
//        },

//        // only used by resizable
//        hasScroll: function (el, a) {

//            //If overflow is hidden, the element might have extra content, but the user wants to hide it
//            if ($(el).css("overflow") === "hidden") {
//                return false;
//            }

//            var scroll = (a && a === "left") ? "scrollLeft" : "scrollTop",
//			has = false;

//            if (el[scroll] > 0) {
//                return true;
//            }

//            // TODO: determine which cases actually cause this to happen
//            // if the element doesn't have the scroll set, see if it's possible to
//            // set the scroll
//            el[scroll] = 1;
//            has = (el[scroll] > 0);
//            el[scroll] = 0;
//            return has;
//        },

//        // these are odd functions, fix the API or move into individual plugins
//        isOverAxis: function (x, reference, size) {
//            //Determines when x coordinate is over "b" element axis
//            return (x > reference) && (x < (reference + size));
//        },
//        isOver: function (y, x, top, left, height, width) {
//            //Determines when x, y coordinates is over "b" element
//            return $.ui.isOverAxis(y, top, height) && $.ui.isOverAxis(x, left, width);
//        }
//    });

//})(jQuery);

///*!
//* jQuery UI Datepicker 1.8.22
//*
//* Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
//* Dual licensed under the MIT or GPL Version 2 licenses.
//* http://jquery.org/license
//*
//* http://docs.jquery.com/UI/Datepicker
//*
//* Depends:
//*	jquery.ui.core.js
//*/
//(function ($, undefined) {

//    $.extend($.ui, { datepicker: { version: "1.8.22"} });

//    var PROP_NAME = 'datepicker';
//    var dpuuid = new Date().getTime();
//    var instActive;

//    /* Date picker manager.
//    Use the singleton instance of this class, $.datepicker, to interact with the date picker.
//    Settings for (groups of) date pickers are maintained in an instance object,
//    allowing multiple different settings on the same page. */

//    function Datepicker() {
//        this.debug = false; // Change this to true to start debugging
//        this._curInst = null; // The current instance in use
//        this._keyEvent = false; // If the last event was a key event
//        this._disabledInputs = []; // List of date picker inputs that have been disabled
//        this._datepickerShowing = false; // True if the popup picker is showing , false if not
//        this._inDialog = false; // True if showing within a "dialog", false if not
//        this._mainDivId = 'ui-datepicker-div'; // The ID of the main datepicker division
//        this._inlineClass = 'ui-datepicker-inline'; // The name of the inline marker class
//        this._appendClass = 'ui-datepicker-append'; // The name of the append marker class
//        this._triggerClass = 'ui-datepicker-trigger'; // The name of the trigger marker class
//        this._dialogClass = 'ui-datepicker-dialog'; // The name of the dialog marker class
//        this._disableClass = 'ui-datepicker-disabled'; // The name of the disabled covering marker class
//        this._unselectableClass = 'ui-datepicker-unselectable'; // The name of the unselectable cell marker class
//        this._currentClass = 'ui-datepicker-current-day'; // The name of the current day marker class
//        this._dayOverClass = 'ui-datepicker-days-cell-over'; // The name of the day hover marker class
//        this.regional = []; // Available regional settings, indexed by language code
//        this.regional[''] = { // Default regional settings
//            fn:null,
//            closeText: 'Done', // Display text for close link
//            prevText: 'Prev', // Display text for previous month link
//            nextText: 'Next', // Display text for next month link
//            currentText: 'Today', // Display text for current month link
//            monthNames: ['January', 'February', 'March', 'April', 'May', 'June',
//			'July', 'August', 'September', 'October', 'November', 'December'], // Names of months for drop-down and formatting
//            monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'], // For formatting
//            dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], // For formatting
//            dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'], // For formatting
//            dayNamesMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'], // Column headings for days starting at Sunday
//            weekHeader: 'Wk', // Column header for week of the year
//            dateFormat: 'mm/dd/yy', // See format options on parseDate
//            firstDay: 0, // The first day of the week, Sun = 0, Mon = 1, ...
//            isRTL: false, // True if right-to-left language, false if left-to-right
//            showMonthAfterYear: false, // True if the year select precedes month, false for month then year
//            yearSuffix: '' // Additional text to append to the year in the month headers
//        };
//        this._defaults = { // Global defaults for all the date picker instances
//            fn:null,
//            showOn: 'focus', // 'focus' for popup on focus,
//            // 'button' for trigger button, or 'both' for either
//            showAnim: 'fadeIn', // Name of jQuery animation for popup
//            showOptions: {}, // Options for enhanced animations
//            defaultDate: null, // Used when field is blank: actual date,
//            // +/-number for offset from today, null for today
//            appendText: '', // Display text following the input box, e.g. showing the format
//            buttonText: '...', // Text for trigger button
//            buttonImage: '', // URL for trigger button image
//            buttonImageOnly: false, // True if the image appears alone, false if it appears on a button
//            hideIfNoPrevNext: false, // True to hide next/previous month links
//            // if not applicable, false to just disable them
//            navigationAsDateFormat: false, // True if date formatting applied to prev/today/next links
//            gotoCurrent: false, // True if today link goes back to current selection instead
//            changeMonth: false, // True if month can be selected directly, false if only prev/next
//            changeYear: false, // True if year can be selected directly, false if only prev/next
//            yearRange: 'c-10:c+10', // Range of years to display in drop-down,
//            // either relative to today's year (-nn:+nn), relative to currently displayed year
//            // (c-nn:c+nn), absolute (nnnn:nnnn), or a combination of the above (nnnn:-n)
//            showOtherMonths: false, // True to show dates in other months, false to leave blank
//            selectOtherMonths: false, // True to allow selection of dates in other months, false for unselectable
//            showWeek: false, // True to show week of the year, false to not show it
//            calculateWeek: this.iso8601Week, // How to calculate the week of the year,
//            // takes a Date and returns the number of the week for it
//            shortYearCutoff: '+10', // Short year values < this are in the current century,
//            // > this are in the previous century,
//            // string value starting with '+' for current year + value
//            minDate: null, // The earliest selectable date, or null for no limit
//            maxDate: null, // The latest selectable date, or null for no limit
//            duration: 'fast', // Duration of display/closure
//            beforeShowDay: null, // Function that takes a date and returns an array with
//            // [0] = true if selectable, false if not, [1] = custom CSS class name(s) or '',
//            // [2] = cell title (optional), e.g. $.datepicker.noWeekends
//            beforeShow: null, // Function that takes an input field and
//            // returns a set of custom settings for the date picker
//            onSelect: null, // Define a callback function when a date is selected
//            onChangeMonthYear: null, // Define a callback function when the month or year is changed
//            onClose: null, // Define a callback function when the datepicker is closed
//            numberOfMonths: 1, // Number of months to show at a time
//            showCurrentAtPos: 0, // The position in multipe months at which to show the current month (starting at 0)
//            stepMonths: 1, // Number of months to step back/forward
//            stepBigMonths: 12, // Number of months to step back/forward for the big links
//            altField: '', // Selector for an alternate field to store selected dates into
//            altFormat: '', // The date format to use for the alternate field
//            constrainInput: true, // The input is constrained by the current date format
//            showButtonPanel: false, // True to show button panel, false to not show it
//            autoSize: false, // True to size the input for the date format, false to leave as is
//            disabled: false // The initial disabled state
//        };
//        $.extend(this._defaults, this.regional['']);
//        this.dpDiv = bindHover($('<div id="' + this._mainDivId + '" class="ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>'));
//    }

//    $.extend(Datepicker.prototype, {
//        /* Class name added to elements to indicate already configured with a date picker. */
//        markerClassName: 'hasDatepicker',

//        //Keep track of the maximum number of rows displayed (see #7043)
//        maxRows: 4,

//        /* Debug logging (if enabled). */
//        log: function () {
//            if (this.debug)
//                console.log.apply('', arguments);
//        },

//        // TODO rename to "widget" when switching to widget factory
//        _widgetDatepicker: function () {
//            return this.dpDiv;
//        },

//        /* Override the default settings for all instances of the date picker.
//        @param  settings  object - the new settings to use as defaults (anonymous object)
//        @return the manager object */
//        setDefaults: function (settings) {
//            extendRemove(this._defaults, settings || {});
//            return this;
//        },

//        /* Attach the date picker to a jQuery selection.
//        @param  target    element - the target input field or division or span
//        @param  settings  object - the new settings to use for this date picker instance (anonymous) */
//        _attachDatepicker: function (target, settings) {
//            // check for settings on the control itself - in namespace 'date:'
//            var inlineSettings = null;
//            for (var attrName in this._defaults) {
//                var attrValue = target.getAttribute('date:' + attrName);
//                if (attrValue) {
//                    inlineSettings = inlineSettings || {};
//                    try {
//                        inlineSettings[attrName] = eval(attrValue);
//                    } catch (err) {
//                        inlineSettings[attrName] = attrValue;
//                    }
//                }
//            }
//            var nodeName = target.nodeName.toLowerCase();
//            var inline = (nodeName == 'div' || nodeName == 'span');
//            if (!target.id) {
//                this.uuid += 1;
//                target.id = 'dp' + this.uuid;
//            }
//            var inst = this._newInst($(target), inline);
//            inst.settings = $.extend({}, settings || {}, inlineSettings || {});
//            if (nodeName == 'input') {
//                this._connectDatepicker(target, inst);
//            } else if (inline) {
//                this._inlineDatepicker(target, inst);
//            }
//        },

//        /* Create a new instance object. */
//        _newInst: function (target, inline) {
//            var id = target[0].id.replace(/([^A-Za-z0-9_-])/g, '\\\\$1'); // escape jQuery meta chars
//            return { id: id, input: target, // associated target
//                selectedDay: 0, selectedMonth: 0, selectedYear: 0, // current selection
//                drawMonth: 0, drawYear: 0, // month being drawn
//                inline: inline, // is datepicker inline or not
//                dpDiv: (!inline ? this.dpDiv : // presentation div
//			bindHover($('<div class="' + this._inlineClass + ' ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>')))
//            };
//        },

//        /* Attach the date picker to an input field. */
//        _connectDatepicker: function (target, inst) {
//            var input = $(target);
//            inst.append = $([]);
//            inst.trigger = $([]);
//            if (input.hasClass(this.markerClassName))
//                return;
//            this._attachments(input, inst);
//            input.addClass(this.markerClassName).keydown(this._doKeyDown).
//			keypress(this._doKeyPress).keyup(this._doKeyUp).
//			bind("setData.datepicker", function (event, key, value) {
//			    inst.settings[key] = value;
//			}).bind("getData.datepicker", function (event, key) {
//			    return this._get(inst, key);
//			});
//            this._autoSize(inst);
//            $.data(target, PROP_NAME, inst);
//            //If disabled option is true, disable the datepicker once it has been attached to the input (see ticket #5665)
//            if (inst.settings.disabled) {
//                this._disableDatepicker(target);
//            }
//        },

//        /* Make attachments based on settings. */
//        _attachments: function (input, inst) {
//            var appendText = this._get(inst, 'appendText');
//            var isRTL = this._get(inst, 'isRTL');
//            if (inst.append)
//                inst.append.remove();
//            if (appendText) {
//                inst.append = $('<span class="' + this._appendClass + '">' + appendText + '</span>');
//                input[isRTL ? 'before' : 'after'](inst.append);
//            }
//            input.unbind('focus', this._showDatepicker);
//            if (inst.trigger)
//                inst.trigger.remove();
//            var showOn = this._get(inst, 'showOn');
//            if (showOn == 'focus' || showOn == 'both') // pop-up date picker when in the marked field
//                input.focus(this._showDatepicker);
//            if (showOn == 'button' || showOn == 'both') { // pop-up date picker when button clicked
//                var buttonText = this._get(inst, 'buttonText');
//                var buttonImage = this._get(inst, 'buttonImage');
//                inst.trigger = $(this._get(inst, 'buttonImageOnly') ?
//				$('<img/>').addClass(this._triggerClass).
//					attr({ src: buttonImage, alt: buttonText, title: buttonText }) :
//				$('<button type="button"></button>').addClass(this._triggerClass).
//					html(buttonImage == '' ? buttonText : $('<img/>').attr(
//					{ src: buttonImage, alt: buttonText, title: buttonText })));
//                input[isRTL ? 'before' : 'after'](inst.trigger);
//                inst.trigger.click(function () {
//                    if ($.datepicker._datepickerShowing && $.datepicker._lastInput == input[0])
//                        $.datepicker._hideDatepicker();
//                    else if ($.datepicker._datepickerShowing && $.datepicker._lastInput != input[0]) {
//                        $.datepicker._hideDatepicker();
//                        $.datepicker._showDatepicker(input[0]);
//                    } else
//                        $.datepicker._showDatepicker(input[0]);
//                    return false;
//                });
//            }
//        },

//        /* Apply the maximum length for the date format. */
//        _autoSize: function (inst) {
//            if (this._get(inst, 'autoSize') && !inst.inline) {
//                var date = new Date(2009, 12 - 1, 20); // Ensure double digits
//                var dateFormat = this._get(inst, 'dateFormat');
//                if (dateFormat.match(/[DM]/)) {
//                    var findMax = function (names) {
//                        var max = 0;
//                        var maxI = 0;
//                        for (var i = 0; i < names.length; i++) {
//                            if (names[i].length > max) {
//                                max = names[i].length;
//                                maxI = i;
//                            }
//                        }
//                        return maxI;
//                    };
//                    date.setMonth(findMax(this._get(inst, (dateFormat.match(/MM/) ?
//					'monthNames' : 'monthNamesShort'))));
//                    date.setDate(findMax(this._get(inst, (dateFormat.match(/DD/) ?
//					'dayNames' : 'dayNamesShort'))) + 20 - date.getDay());
//                }
//                inst.input.attr('size', this._formatDate(inst, date).length);
//            }
//        },

//        /* Attach an inline date picker to a div. */
//        _inlineDatepicker: function (target, inst) {
//            var divSpan = $(target);
//            if (divSpan.hasClass(this.markerClassName))
//                return;
//            divSpan.addClass(this.markerClassName).append(inst.dpDiv).
//			bind("setData.datepicker", function (event, key, value) {
//			    inst.settings[key] = value;
//			}).bind("getData.datepicker", function (event, key) {
//			    return this._get(inst, key);
//			});
//            $.data(target, PROP_NAME, inst);
//            this._setDate(inst, this._getDefaultDate(inst), true);
//            this._updateDatepicker(inst);
//            this._updateAlternate(inst);
//            //If disabled option is true, disable the datepicker before showing it (see ticket #5665)
//            if (inst.settings.disabled) {
//                this._disableDatepicker(target);
//            }
//            // Set display:block in place of inst.dpDiv.show() which won't work on disconnected elements
//            // http://bugs.jqueryui.com/ticket/7552 - A Datepicker created on a detached div has zero height
//            inst.dpDiv.css("display", "block");
//        },

//        /* Pop-up the date picker in a "dialog" box.
//        @param  input     element - ignored
//        @param  date      string or Date - the initial date to display
//        @param  onSelect  function - the function to call when a date is selected
//        @param  settings  object - update the dialog date picker instance's settings (anonymous object)
//        @param  pos       int[2] - coordinates for the dialog's position within the screen or
//        event - with x/y coordinates or
//        leave empty for default (screen centre)
//        @return the manager object */
//        _dialogDatepicker: function (input, date, onSelect, settings, pos) {
//            var inst = this._dialogInst; // internal instance
//            if (!inst) {
//                this.uuid += 1;
//                var id = 'dp' + this.uuid;
//                this._dialogInput = $('<input type="text" id="' + id +
//				'" style="position: absolute; top: -100px; width: 0px;"/>');
//                this._dialogInput.keydown(this._doKeyDown);
//                $('body').append(this._dialogInput);
//                inst = this._dialogInst = this._newInst(this._dialogInput, false);
//                inst.settings = {};
//                $.data(this._dialogInput[0], PROP_NAME, inst);
//            }
//            extendRemove(inst.settings, settings || {});
//            date = (date && date.constructor == Date ? this._formatDate(inst, date) : date);
//            this._dialogInput.val(date);

//            this._pos = (pos ? (pos.length ? pos : [pos.pageX, pos.pageY]) : null);
//            if (!this._pos) {
//                var browserWidth = document.documentElement.clientWidth;
//                var browserHeight = document.documentElement.clientHeight;
//                var scrollX = document.documentElement.scrollLeft || document.body.scrollLeft;
//                var scrollY = document.documentElement.scrollTop || document.body.scrollTop;
//                this._pos = // should use actual width/height below
//				[(browserWidth / 2) - 100 + scrollX, (browserHeight / 2) - 150 + scrollY];
//            }

//            // move input on screen for focus, but hidden behind dialog
//            this._dialogInput.css('left', (this._pos[0] + 20) + 'px').css('top', this._pos[1] + 'px');
//            inst.settings.onSelect = onSelect;
//            this._inDialog = true;
//            this.dpDiv.addClass(this._dialogClass);
//            this._showDatepicker(this._dialogInput[0]);
//            if ($.blockUI)
//                $.blockUI(this.dpDiv);
//            $.data(this._dialogInput[0], PROP_NAME, inst);
//            return this;
//        },

//        /* Detach a datepicker from its control.
//        @param  target    element - the target input field or division or span */
//        _destroyDatepicker: function (target) {
//            var $target = $(target);
//            var inst = $.data(target, PROP_NAME);
//            if (!$target.hasClass(this.markerClassName)) {
//                return;
//            }
//            var nodeName = target.nodeName.toLowerCase();
//            $.removeData(target, PROP_NAME);
//            if (nodeName == 'input') {
//                inst.append.remove();
//                inst.trigger.remove();
//                $target.removeClass(this.markerClassName).
//				unbind('focus', this._showDatepicker).
//				unbind('keydown', this._doKeyDown).
//				unbind('keypress', this._doKeyPress).
//				unbind('keyup', this._doKeyUp);
//            } else if (nodeName == 'div' || nodeName == 'span')
//                $target.removeClass(this.markerClassName).empty();
//        },

//        /* Enable the date picker to a jQuery selection.
//        @param  target    element - the target input field or division or span */
//        _enableDatepicker: function (target) {
//            var $target = $(target);
//            var inst = $.data(target, PROP_NAME);
//            if (!$target.hasClass(this.markerClassName)) {
//                return;
//            }
//            var nodeName = target.nodeName.toLowerCase();
//            if (nodeName == 'input') {
//                target.disabled = false;
//                inst.trigger.filter('button').
//				each(function () { this.disabled = false; }).end().
//				filter('img').css({ opacity: '1.0', cursor: '' });
//            }
//            else if (nodeName == 'div' || nodeName == 'span') {
//                var inline = $target.children('.' + this._inlineClass);
//                inline.children().removeClass('ui-state-disabled');
//                inline.find("select.ui-datepicker-month, select.ui-datepicker-year").
//				removeAttr("disabled");
//            }
//            this._disabledInputs = $.map(this._disabledInputs,
//			function (value) { return (value == target ? null : value); }); // delete entry
//        },

//        /* Disable the date picker to a jQuery selection.
//        @param  target    element - the target input field or division or span */
//        _disableDatepicker: function (target) {
//            var $target = $(target);
//            var inst = $.data(target, PROP_NAME);
//            if (!$target.hasClass(this.markerClassName)) {
//                return;
//            }
//            var nodeName = target.nodeName.toLowerCase();
//            if (nodeName == 'input') {
//                target.disabled = true;
//                inst.trigger.filter('button').
//				each(function () { this.disabled = true; }).end().
//				filter('img').css({ opacity: '0.5', cursor: 'default' });
//            }
//            else if (nodeName == 'div' || nodeName == 'span') {
//                var inline = $target.children('.' + this._inlineClass);
//                inline.children().addClass('ui-state-disabled');
//                inline.find("select.ui-datepicker-month, select.ui-datepicker-year").
//				attr("disabled", "disabled");
//            }
//            this._disabledInputs = $.map(this._disabledInputs,
//			function (value) { return (value == target ? null : value); }); // delete entry
//            this._disabledInputs[this._disabledInputs.length] = target;
//        },

//        /* Is the first field in a jQuery collection disabled as a datepicker?
//        @param  target    element - the target input field or division or span
//        @return boolean - true if disabled, false if enabled */
//        _isDisabledDatepicker: function (target) {
//            if (!target) {
//                return false;
//            }
//            for (var i = 0; i < this._disabledInputs.length; i++) {
//                if (this._disabledInputs[i] == target)
//                    return true;
//            }
//            return false;
//        },

//        /* Retrieve the instance data for the target control.
//        @param  target  element - the target input field or division or span
//        @return  object - the associated instance data
//        @throws  error if a jQuery problem getting data */
//        _getInst: function (target) {
//            try {
//                return $.data(target, PROP_NAME);
//            }
//            catch (err) {
//                throw 'Missing instance data for this datepicker';
//            }
//        },

//        /* ModifyAwardDetailItems or retrieve the settings for a date picker attached to an input field or division.
//        @param  target  element - the target input field or division or span
//        @param  name    object - the new settings to update or
//        string - the name of the setting to change or retrieve,
//        when retrieving also 'all' for all instance settings or
//        'defaults' for all global defaults
//        @param  value   any - the new value for the setting
//        (omit if above is an object or to retrieve a value) */
//        _optionDatepicker: function (target, name, value) {
//            var inst = this._getInst(target);
//            if (arguments.length == 2 && typeof name == 'string') {
//                return (name == 'defaults' ? $.extend({}, $.datepicker._defaults) :
//				(inst ? (name == 'all' ? $.extend({}, inst.settings) :
//				this._get(inst, name)) : null));
//            }
//            var settings = name || {};
//            if (typeof name == 'string') {
//                settings = {};
//                settings[name] = value;
//            }
//            if (inst) {
//                if (this._curInst == inst) {
//                    this._hideDatepicker();
//                }
//                var date = this._getDateDatepicker(target, true);
//                var minDate = this._getMinMaxDate(inst, 'min');
//                var maxDate = this._getMinMaxDate(inst, 'max');
//                extendRemove(inst.settings, settings);
//                // reformat the old minDate/maxDate values if dateFormat changes and a new minDate/maxDate isn't provided
//                if (minDate !== null && settings['dateFormat'] !== undefined && settings['minDate'] === undefined)
//                    inst.settings.minDate = this._formatDate(inst, minDate);
//                if (maxDate !== null && settings['dateFormat'] !== undefined && settings['maxDate'] === undefined)
//                    inst.settings.maxDate = this._formatDate(inst, maxDate);
//                this._attachments($(target), inst);
//                this._autoSize(inst);
//                this._setDate(inst, date);
//                this._updateAlternate(inst);
//                this._updateDatepicker(inst);
//            }
//        },

//        // change method deprecated
//        _changeDatepicker: function (target, name, value) {
//            this._optionDatepicker(target, name, value);
//        },

//        /* Redraw the date picker attached to an input field or division.
//        @param  target  element - the target input field or division or span */
//        _refreshDatepicker: function (target) {
//            var inst = this._getInst(target);
//            if (inst) {
//                this._updateDatepicker(inst);
//            }
//        },

//        /* Set the dates for a jQuery selection.
//        @param  target   element - the target input field or division or span
//        @param  date     Date - the new date */
//        _setDateDatepicker: function (target, date) {
//            var inst = this._getInst(target);
//            if (inst) {
//                this._setDate(inst, date);
//                this._updateDatepicker(inst);
//                this._updateAlternate(inst);
//            }
//        },

//        /* Get the date(s) for the first entry in a jQuery selection.
//        @param  target     element - the target input field or division or span
//        @param  noDefault  boolean - true if no default date is to be used
//        @return Date - the current date */
//        _getDateDatepicker: function (target, noDefault) {
//            var inst = this._getInst(target);
//            if (inst && !inst.inline)
//                this._setDateFromField(inst, noDefault);
//            return (inst ? this._getDate(inst) : null);
//        },

//        /* Handle keystrokes. */
//        _doKeyDown: function (event) {
//            var inst = $.datepicker._getInst(event.target);
//            var handled = true;
//            var isRTL = inst.dpDiv.is('.ui-datepicker-rtl');
//            inst._keyEvent = true;
//            if ($.datepicker._datepickerShowing)
//                switch (event.keyCode) {
//                case 9: $.datepicker._hideDatepicker();
//                    handled = false;
//                    break; // hide on tab out
//                case 13: var sel = $('td.' + $.datepicker._dayOverClass + ':not(.' +
//									$.datepicker._currentClass + ')', inst.dpDiv);
//                    if (sel[0])
//                        $.datepicker._selectDay(event.target, inst.selectedMonth, inst.selectedYear, sel[0]);
//                    var onSelect = $.datepicker._get(inst, 'onSelect');
//                    if (onSelect) {
//                        var dateStr = $.datepicker._formatDate(inst);

//                        // trigger custom callback
//                        onSelect.apply((inst.input ? inst.input[0] : null), [dateStr, inst]);
//                    }
//                    else
//                        $.datepicker._hideDatepicker();
//                    return false; // don't submit the form
//                    break; // select the value on enter
//                case 27: $.datepicker._hideDatepicker();
//                    break; // hide on escape
//                case 33: $.datepicker._adjustDate(event.target, (event.ctrlKey ?
//							-$.datepicker._get(inst, 'stepBigMonths') :
//							-$.datepicker._get(inst, 'stepMonths')), 'M');
//                    break; // previous month/year on page up/+ ctrl
//                case 34: $.datepicker._adjustDate(event.target, (event.ctrlKey ?
//							+$.datepicker._get(inst, 'stepBigMonths') :
//							+$.datepicker._get(inst, 'stepMonths')), 'M');
//                    break; // next month/year on page down/+ ctrl
//                case 35: if (event.ctrlKey || event.metaKey) $.datepicker._clearDate(event.target);
//                    handled = event.ctrlKey || event.metaKey;
//                    break; // clear on ctrl or command +end
//                case 36: if (event.ctrlKey || event.metaKey) $.datepicker._gotoToday(event.target);
//                    handled = event.ctrlKey || event.metaKey;
//                    break; // current on ctrl or command +home
//                case 37: if (event.ctrlKey || event.metaKey) $.datepicker._adjustDate(event.target, (isRTL ? +1 : -1), 'D');
//                    handled = event.ctrlKey || event.metaKey;
//                    // -1 day on ctrl or command +left
//                    if (event.originalEvent.altKey) $.datepicker._adjustDate(event.target, (event.ctrlKey ?
//									-$.datepicker._get(inst, 'stepBigMonths') :
//									-$.datepicker._get(inst, 'stepMonths')), 'M');
//                    // next month/year on alt +left on Mac
//                    break;
//                case 38: if (event.ctrlKey || event.metaKey) $.datepicker._adjustDate(event.target, -7, 'D');
//                    handled = event.ctrlKey || event.metaKey;
//                    break; // -1 week on ctrl or command +up
//                case 39: if (event.ctrlKey || event.metaKey) $.datepicker._adjustDate(event.target, (isRTL ? -1 : +1), 'D');
//                    handled = event.ctrlKey || event.metaKey;
//                    // +1 day on ctrl or command +right
//                    if (event.originalEvent.altKey) $.datepicker._adjustDate(event.target, (event.ctrlKey ?
//									+$.datepicker._get(inst, 'stepBigMonths') :
//									+$.datepicker._get(inst, 'stepMonths')), 'M');
//                    // next month/year on alt +right
//                    break;
//                case 40: if (event.ctrlKey || event.metaKey) $.datepicker._adjustDate(event.target, +7, 'D');
//                    handled = event.ctrlKey || event.metaKey;
//                    break; // +1 week on ctrl or command +down
//                default: handled = false;
//            }
//            else if (event.keyCode == 36 && event.ctrlKey) // display the date picker on ctrl+home
//                $.datepicker._showDatepicker(this);
//            else {
//                handled = false;
//            }
//            if (handled) {
//                event.preventDefault();
//                event.stopPropagation();
//            }
//        },

//        /* Filter entered characters - based on date format. */
//        _doKeyPress: function (event) {
//            var inst = $.datepicker._getInst(event.target);
//            if ($.datepicker._get(inst, 'constrainInput')) {
//                var chars = $.datepicker._possibleChars($.datepicker._get(inst, 'dateFormat'));
//                var chr = String.fromCharCode(event.charCode == undefined ? event.keyCode : event.charCode);
//                return event.ctrlKey || event.metaKey || (chr < ' ' || !chars || chars.indexOf(chr) > -1);
//            }
//        },

//        /* Synchronise manual entry and field/alternate field. */
//        _doKeyUp: function (event) {
//            var inst = $.datepicker._getInst(event.target);
//            if (inst.input.val() != inst.lastVal) {
//                try {
//                    var date = $.datepicker.parseDate($.datepicker._get(inst, 'dateFormat'),
//					(inst.input ? inst.input.val() : null),
//					$.datepicker._getFormatConfig(inst));
//                    if (date) { // only if valid
//                        $.datepicker._setDateFromField(inst);
//                        $.datepicker._updateAlternate(inst);
//                        $.datepicker._updateDatepicker(inst);
//                    }
//                }
//                catch (err) {
//                    $.datepicker.log(err);
//                }
//            }
//            return true;
//        },

//        /* Pop-up the date picker for a given input field.
//        If false returned from beforeShow event handler do not show. 
//        @param  input  element - the input field attached to the date picker or
//        event - if triggered by focus */
//        _showDatepicker: function (input) {
//            input = input.target || input;
//            if (input.nodeName.toLowerCase() != 'input') // find from button/image trigger
//                input = $('input', input.parentNode)[0];
//            if ($.datepicker._isDisabledDatepicker(input) || $.datepicker._lastInput == input) // already here
//                return;
//            var inst = $.datepicker._getInst(input);
//            if ($.datepicker._curInst && $.datepicker._curInst != inst) {
//                $.datepicker._curInst.dpDiv.stop(true, true);
//                if (inst && $.datepicker._datepickerShowing) {
//                    $.datepicker._hideDatepicker($.datepicker._curInst.input[0]);
//                }
//            }
//            var beforeShow = $.datepicker._get(inst, 'beforeShow');
//            var beforeShowSettings = beforeShow ? beforeShow.apply(input, [input, inst]) : {};
//            if (beforeShowSettings === false) {
//                //false
//                return;
//            }
//            extendRemove(inst.settings, beforeShowSettings);
//            inst.lastVal = null;
//            $.datepicker._lastInput = input;
//            $.datepicker._setDateFromField(inst);
//            if ($.datepicker._inDialog) // hide cursor
//                input.value = '';
//            if (!$.datepicker._pos) { // position below input
//                $.datepicker._pos = $.datepicker._findPos(input);
//                $.datepicker._pos[1] += input.offsetHeight; // add the height
//            }
//            var isFixed = false;
//            $(input).parents().each(function () {
//                isFixed |= $(this).css('position') == 'fixed';
//                return !isFixed;
//            });
//            if (isFixed && $.browser.opera) { // correction for Opera when fixed and scrolled
//                $.datepicker._pos[0] -= document.documentElement.scrollLeft;
//                $.datepicker._pos[1] -= document.documentElement.scrollTop;
//            }
//            var offset = { left: $.datepicker._pos[0], top: $.datepicker._pos[1] };
//            $.datepicker._pos = null;
//            //to avoid flashes on Firefox
//            inst.dpDiv.empty();
//            // determine sizing offscreen
//            inst.dpDiv.css({ position: 'absolute', display: 'block', top: '-1000px' });
//            $.datepicker._updateDatepicker(inst);
//            // fix width for dynamic number of date pickers
//            // and adjust position before showing
//            offset = $.datepicker._checkOffset(inst, offset, isFixed);
//            inst.dpDiv.css({ position: ($.datepicker._inDialog && $.blockUI ?
//			'static' : (isFixed ? 'fixed' : 'absolute')), display: 'none',
//                left: offset.left + 'px', top: offset.top + 'px'
//            });
//            if (!inst.inline) {
//                var showAnim = $.datepicker._get(inst, 'showAnim');
//                var duration = $.datepicker._get(inst, 'duration');
//                var postProcess = function () {
//                    var cover = inst.dpDiv.find('iframe.ui-datepicker-cover'); // IE6- only
//                    if (!!cover.length) {
//                        var borders = $.datepicker._getBorders(inst.dpDiv);
//                        cover.css({ left: -borders[0], top: -borders[1],
//                            width: inst.dpDiv.outerWidth(), height: inst.dpDiv.outerHeight()
//                        });
//                    }
//                };
//                inst.dpDiv.zIndex($(input).zIndex() + 1);
//                $.datepicker._datepickerShowing = true;
//                if ($.effects && $.effects[showAnim])
//                    inst.dpDiv.show(showAnim, $.datepicker._get(inst, 'showOptions'), duration, postProcess);
//                else
//                    inst.dpDiv[showAnim || 'show']((showAnim ? duration : null), postProcess);
//                if (!showAnim || !duration)
//                    postProcess();
//                if (inst.input.is(':visible') && !inst.input.is(':disabled'))
//                    inst.input.focus();
//                $.datepicker._curInst = inst;
//            }
//        },

//        /* Generate the date picker content. */
//        _updateDatepicker: function (inst) {
//            var self = this;
//            self.maxRows = 4; //Reset the max number of rows being displayed (see #7043)
//            var borders = $.datepicker._getBorders(inst.dpDiv);
//            instActive = inst; // for delegate hover events
//            inst.dpDiv.empty().append(this._generateHTML(inst));
//            this._attachHandlers(inst);
//            var cover = inst.dpDiv.find('iframe.ui-datepicker-cover'); // IE6- only
//            if (!!cover.length) { //avoid call to outerXXXX() when not in IE6
//                cover.css({ left: -borders[0], top: -borders[1], width: inst.dpDiv.outerWidth(), height: inst.dpDiv.outerHeight() })
//            }
//            inst.dpDiv.find('.' + this._dayOverClass + ' a').mouseover();
//            var numMonths = this._getNumberOfMonths(inst);
//            var cols = numMonths[1];
//            var width = 17;
//            inst.dpDiv.removeClass('ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4').width('');
//            if (cols > 1)
//                inst.dpDiv.addClass('ui-datepicker-multi-' + cols).css('width', (width * cols) + 'em');
//            inst.dpDiv[(numMonths[0] != 1 || numMonths[1] != 1 ? 'add' : 'remove') +
//			'Class']('ui-datepicker-multi');
//            inst.dpDiv[(this._get(inst, 'isRTL') ? 'add' : 'remove') +
//			'Class']('ui-datepicker-rtl');
//            if (inst == $.datepicker._curInst && $.datepicker._datepickerShowing && inst.input &&
//            // #6694 - don't focus the input if it's already focused
//            // this breaks the change event in IE
//				inst.input.is(':visible') && !inst.input.is(':disabled') && inst.input[0] != document.activeElement)
//                inst.input.focus();
//            // deffered render of the years select (to avoid flashes on Firefox) 
//            if (inst.yearshtml) {
//                var origyearshtml = inst.yearshtml;
//                setTimeout(function () {
//                    //assure that inst.yearshtml didn't change.
//                    if (origyearshtml === inst.yearshtml && inst.yearshtml) {
//                        inst.dpDiv.find('select.ui-datepicker-year:first').replaceWith(inst.yearshtml);
//                    }
//                    origyearshtml = inst.yearshtml = null;
//                }, 0);
//            }
//        },

//        /* Retrieve the size of left and top borders for an element.
//        @param  elem  (jQuery object) the element of interest
//        @return  (number[2]) the left and top borders */
//        _getBorders: function (elem) {
//            var convert = function (value) {
//                return { thin: 1, medium: 2, thick: 3}[value] || value;
//            };
//            return [parseFloat(convert(elem.css('border-left-width'))),
//			parseFloat(convert(elem.css('border-top-width')))];
//        },

//        /* Check positioning to remain on screen. */
//        _checkOffset: function (inst, offset, isFixed) {
//            var dpWidth = inst.dpDiv.outerWidth();
//            var dpHeight = inst.dpDiv.outerHeight();
//            var inputWidth = inst.input ? inst.input.outerWidth() : 0;
//            var inputHeight = inst.input ? inst.input.outerHeight() : 0;
//            var viewWidth = document.documentElement.clientWidth + (isFixed ? 0 : $(document).scrollLeft());
//            var viewHeight = document.documentElement.clientHeight + (isFixed ? 0 : $(document).scrollTop());

//            offset.left -= (this._get(inst, 'isRTL') ? (dpWidth - inputWidth) : 0);
//            offset.left -= (isFixed && offset.left == inst.input.offset().left) ? $(document).scrollLeft() : 0;
//            offset.top -= (isFixed && offset.top == (inst.input.offset().top + inputHeight)) ? $(document).scrollTop() : 0;

//            // now check if datepicker is showing outside window viewport - move to a better place if so.
//            offset.left -= Math.min(offset.left, (offset.left + dpWidth > viewWidth && viewWidth > dpWidth) ?
//			Math.abs(offset.left + dpWidth - viewWidth) : 0);
//            offset.top -= Math.min(offset.top, (offset.top + dpHeight > viewHeight && viewHeight > dpHeight) ?
//			Math.abs(dpHeight + inputHeight) : 0);

//            return offset;
//        },

//        /* Find an object's position on the screen. */
//        _findPos: function (obj) {
//            var inst = this._getInst(obj);
//            var isRTL = this._get(inst, 'isRTL');
//            while (obj && (obj.type == 'hidden' || obj.nodeType != 1 || $.expr.filters.hidden(obj))) {
//                obj = obj[isRTL ? 'previousSibling' : 'nextSibling'];
//            }
//            var position = $(obj).offset();
//            return [position.left, position.top];
//        },

//        /* Hide the date picker from view.
//        @param  input  element - the input field attached to the date picker */
//        _hideDatepicker: function (input) {
//            var inst = this._curInst;
//            if (!inst || (input && inst != $.data(input, PROP_NAME)))
//                return;
//            if (this._datepickerShowing) {
//                var showAnim = this._get(inst, 'showAnim');
//                var duration = this._get(inst, 'duration');
//                var postProcess = function () {
//                    $.datepicker._tidyDialog(inst);
//                };
//                if ($.effects && $.effects[showAnim])
//                    inst.dpDiv.hide(showAnim, $.datepicker._get(inst, 'showOptions'), duration, postProcess);
//                else
//                    inst.dpDiv[(showAnim == 'slideDown' ? 'slideUp' :
//					(showAnim == 'fadeIn' ? 'fadeOut' : 'hide'))]((showAnim ? duration : null), postProcess);
//                if (!showAnim)
//                    postProcess();
//                this._datepickerShowing = false;
//                var onClose = this._get(inst, 'onClose');
//                if (onClose)
//                    onClose.apply((inst.input ? inst.input[0] : null),
//					[(inst.input ? inst.input.val() : ''), inst]);
//                this._lastInput = null;
//                if (this._inDialog) {
//                    this._dialogInput.css({ position: 'absolute', left: '0', top: '-100px' });
//                    if ($.blockUI) {
//                        $.unblockUI();
//                        $('body').append(this.dpDiv);
//                    }
//                }
//                this._inDialog = false;
//            }
//        },

//        /* Tidy up after a dialog display. */
//        _tidyDialog: function (inst) {
//            inst.dpDiv.removeClass(this._dialogClass).unbind('.ui-datepicker-calendar');
//        },

//        /* Close date picker if clicked elsewhere. */
//        _checkExternalClick: function (event) {
//            if (!$.datepicker._curInst)
//                return;

//            var $target = $(event.target),
//			inst = $.datepicker._getInst($target[0]);

//            if ((($target[0].id != $.datepicker._mainDivId &&
//				$target.parents('#' + $.datepicker._mainDivId).length == 0 &&
//				!$target.hasClass($.datepicker.markerClassName) &&
//				!$target.closest("." + $.datepicker._triggerClass).length &&
//				$.datepicker._datepickerShowing && !($.datepicker._inDialog && $.blockUI))) ||
//			($target.hasClass($.datepicker.markerClassName) && $.datepicker._curInst != inst))
//                $.datepicker._hideDatepicker();
//        },

//        /* Adjust one of the date sub-fields. */
//        _adjustDate: function (id, offset, period) {
//            var target = $(id);
//            var inst = this._getInst(target[0]);
//            if (this._isDisabledDatepicker(target[0])) {
//                return;
//            }
//            this._adjustInstDate(inst, offset +
//			(period == 'M' ? this._get(inst, 'showCurrentAtPos') : 0), // undo positioning
//			period);
//            this._updateDatepicker(inst);
//        },

//        /* Action for current link. */
//        _gotoToday: function (id) {
//            var target = $(id);
//            var inst = this._getInst(target[0]);
//            if (this._get(inst, 'gotoCurrent') && inst.currentDay) {
//                inst.selectedDay = inst.currentDay;
//                inst.drawMonth = inst.selectedMonth = inst.currentMonth;
//                inst.drawYear = inst.selectedYear = inst.currentYear;
//            }
//            else {
//                var date = new Date();
//                inst.selectedDay = date.getDate();
//                inst.drawMonth = inst.selectedMonth = date.getMonth();
//                inst.drawYear = inst.selectedYear = date.getFullYear();
//            }
//            this._notifyChange(inst);
//            this._adjustDate(target);
//        },

//        /* Action for selecting a new month/year. */
//        _selectMonthYear: function (id, select, period) {
//            var target = $(id);
//            var inst = this._getInst(target[0]);
//            inst['selected' + (period == 'M' ? 'Month' : 'Year')] =
//		inst['draw' + (period == 'M' ? 'Month' : 'Year')] =
//			parseInt(select.options[select.selectedIndex].value, 10);
//            this._notifyChange(inst);
//            this._adjustDate(target);
//        },

//        /* Action for selecting a day. */
//        _selectDay: function (id, month, year, td) {
//            var target = $(id);
//            if ($(td).hasClass(this._unselectableClass) || this._isDisabledDatepicker(target[0])) {
//                return;
//            }
//            var inst = this._getInst(target[0]);
//            inst.selectedDay = inst.currentDay = $('a', td).html();
//            inst.selectedMonth = inst.currentMonth = month;
//            inst.selectedYear = inst.currentYear = year;
//            this._selectDate(id, this._formatDate(inst,
//			inst.currentDay, inst.currentMonth, inst.currentYear));
//        },

//        /* Erase the input field and hide the date picker. */
//        _clearDate: function (id) {
//            var target = $(id);
//            var inst = this._getInst(target[0]);
//            this._selectDate(target, '');
//        },

//        /* ModifyAwardDetailItems the input field with the selected date. */
//        _selectDate: function (id, dateStr) {
//            var target = $(id);
//            var inst = this._getInst(target[0]);
//            dateStr = (dateStr != null ? dateStr : this._formatDate(inst));
//            if (inst.input)
//                inst.input.val(dateStr);
//            this._updateAlternate(inst);
//            var onSelect = this._get(inst, 'onSelect');
//            if (onSelect)
//                onSelect.apply((inst.input ? inst.input[0] : null), [dateStr, inst]);  // trigger custom callback
//            else if (inst.input)
//                inst.input.trigger('change'); // fire the change event
//            if (inst.inline)
//                this._updateDatepicker(inst);
//            else {
//                this._hideDatepicker();
//                this._lastInput = inst.input[0];
//                if (typeof (inst.input[0]) != 'object')
//                    inst.input.focus(); // restore focus
//                this._lastInput = null;
//            }
//            var fn = this._get(inst, 'fn');
//            if(fn!=undefined &&fn!=null && typeof(fn)=="function")
//            {
//                fn();
//            }
//        },

//        /* ModifyAwardDetailItems any alternate field to synchronise with the main field. */
//        _updateAlternate: function (inst) {
//            var altField = this._get(inst, 'altField');
//            if (altField) { // update alternate field too
//                var altFormat = this._get(inst, 'altFormat') || this._get(inst, 'dateFormat');
//                var date = this._getDate(inst);
//                var dateStr = this.formatDate(altFormat, date, this._getFormatConfig(inst));
//                $(altField).each(function () { $(this).val(dateStr); });
//            }
//        },

//        /* Set as beforeShowDay function to prevent selection of weekends.
//        @param  date  Date - the date to customise
//        @return [boolean, string] - is this date selectable?, what is its CSS class? */
//        noWeekends: function (date) {
//            var day = date.getDay();
//            return [(day > 0 && day < 6), ''];
//        },

//        /* Set as calculateWeek to determine the week of the year based on the ISO 8601 definition.
//        @param  date  Date - the date to get the week for
//        @return  number - the number of the week within the year that contains this date */
//        iso8601Week: function (date) {
//            var checkDate = new Date(date.getTime());
//            // Find Thursday of this week starting on Monday
//            checkDate.setDate(checkDate.getDate() + 4 - (checkDate.getDay() || 7));
//            var time = checkDate.getTime();
//            checkDate.setMonth(0); // Compare with Jan 1
//            checkDate.setDate(1);
//            return Math.floor(Math.round((time - checkDate) / 86400000) / 7) + 1;
//        },

//        /* Parse a string value into a date object.
//        See formatDate below for the possible formats.

//        @param  format    string - the expected format of the date
//        @param  value     string - the date in the above format
//        @param  settings  Object - attributes include:
//        shortYearCutoff  number - the cutoff year for determining the century (optional)
//        dayNamesShort    string[7] - abbreviated names of the days from Sunday (optional)
//        dayNames         string[7] - names of the days from Sunday (optional)
//        monthNamesShort  string[12] - abbreviated names of the months (optional)
//        monthNames       string[12] - names of the months (optional)
//        @return  Date - the extracted date value or null if value is blank */
//        parseDate: function (format, value, settings) {
//            if (format == null || value == null)
//                throw 'Invalid arguments';
//            value = (typeof value == 'object' ? value.toString() : value + '');
//            if (value == '')
//                return null;
//            var shortYearCutoff = (settings ? settings.shortYearCutoff : null) || this._defaults.shortYearCutoff;
//            shortYearCutoff = (typeof shortYearCutoff != 'string' ? shortYearCutoff :
//				new Date().getFullYear() % 100 + parseInt(shortYearCutoff, 10));
//            var dayNamesShort = (settings ? settings.dayNamesShort : null) || this._defaults.dayNamesShort;
//            var dayNames = (settings ? settings.dayNames : null) || this._defaults.dayNames;
//            var monthNamesShort = (settings ? settings.monthNamesShort : null) || this._defaults.monthNamesShort;
//            var monthNames = (settings ? settings.monthNames : null) || this._defaults.monthNames;
//            var year = -1;
//            var month = -1;
//            var day = -1;
//            var doy = -1;
//            var literal = false;
//            // Check whether a format character is doubled
//            var lookAhead = function (match) {
//                var matches = (iFormat + 1 < format.length && format.charAt(iFormat + 1) == match);
//                if (matches)
//                    iFormat++;
//                return matches;
//            };
//            // Extract a number from the string value
//            var getNumber = function (match) {
//                var isDoubled = lookAhead(match);
//                var size = (match == '@' ? 14 : (match == '!' ? 20 :
//				(match == 'y' && isDoubled ? 4 : (match == 'o' ? 3 : 2))));
//                var digits = new RegExp('^\\d{1,' + size + '}');
//                var num = value.substring(iValue).match(digits);
//                if (!num)
//                    throw 'Missing number at position ' + iValue;
//                iValue += num[0].length;
//                return parseInt(num[0], 10);
//            };
//            // Extract a name from the string value and convert to an index
//            var getName = function (match, shortNames, longNames) {
//                var names = $.map(lookAhead(match) ? longNames : shortNames, function (v, k) {
//                    return [[k, v]];
//                }).sort(function (a, b) {
//                    return -(a[1].length - b[1].length);
//                });
//                var index = -1;
//                $.each(names, function (i, pair) {
//                    var name = pair[1];
//                    if (value.substr(iValue, name.length).toLowerCase() == name.toLowerCase()) {
//                        index = pair[0];
//                        iValue += name.length;
//                        return false;
//                    }
//                });
//                if (index != -1)
//                    return index + 1;
//                else
//                    throw 'Unknown name at position ' + iValue;
//            };
//            // Confirm that a literal character matches the string value
//            var checkLiteral = function () {
//                if (value.charAt(iValue) != format.charAt(iFormat))
//                    throw 'Unexpected literal at position ' + iValue;
//                iValue++;
//            };
//            var iValue = 0;
//            for (var iFormat = 0; iFormat < format.length; iFormat++) {
//                if (literal)
//                    if (format.charAt(iFormat) == "'" && !lookAhead("'"))
//                        literal = false;
//                    else
//                        checkLiteral();
//                else
//                    switch (format.charAt(iFormat)) {
//                    case 'd':
//                        day = getNumber('d');
//                        break;
//                    case 'D':
//                        getName('D', dayNamesShort, dayNames);
//                        break;
//                    case 'o':
//                        doy = getNumber('o');
//                        break;
//                    case 'm':
//                        month = getNumber('m');
//                        break;
//                    case 'M':
//                        month = getName('M', monthNamesShort, monthNames);
//                        break;
//                    case 'y':
//                        year = getNumber('y');
//                        break;
//                    case '@':
//                        var date = new Date(getNumber('@'));
//                        year = date.getFullYear();
//                        month = date.getMonth() + 1;
//                        day = date.getDate();
//                        break;
//                    case '!':
//                        var date = new Date((getNumber('!') - this._ticksTo1970) / 10000);
//                        year = date.getFullYear();
//                        month = date.getMonth() + 1;
//                        day = date.getDate();
//                        break;
//                    case "'":
//                        if (lookAhead("'"))
//                            checkLiteral();
//                        else
//                            literal = true;
//                        break;
//                    default:
//                        checkLiteral();
//                }
//            }
//            if (iValue < value.length) {
//                throw "Extra/unparsed characters found in date: " + value.substring(iValue);
//            }
//            if (year == -1)
//                year = new Date().getFullYear();
//            else if (year < 100)
//                year += new Date().getFullYear() - new Date().getFullYear() % 100 +
//				(year <= shortYearCutoff ? 0 : -100);
//            if (doy > -1) {
//                month = 1;
//                day = doy;
//                do {
//                    var dim = this._getDaysInMonth(year, month - 1);
//                    if (day <= dim)
//                        break;
//                    month++;
//                    day -= dim;
//                } while (true);
//            }
//            var date = this._daylightSavingAdjust(new Date(year, month - 1, day));
//            if (date.getFullYear() != year || date.getMonth() + 1 != month || date.getDate() != day)
//                throw 'Invalid date'; // E.g. 31/02/00
//            return date;
//        },

//        /* Standard date formats. */
//        ATOM: 'yy-mm-dd', // RFC 3339 (ISO 8601)
//        COOKIE: 'D, dd M yy',
//        ISO_8601: 'yy-mm-dd',
//        RFC_822: 'D, d M y',
//        RFC_850: 'DD, dd-M-y',
//        RFC_1036: 'D, d M y',
//        RFC_1123: 'D, d M yy',
//        RFC_2822: 'D, d M yy',
//        RSS: 'D, d M y', // RFC 822
//        TICKS: '!',
//        TIMESTAMP: '@',
//        W3C: 'yy-mm-dd', // ISO 8601

//        _ticksTo1970: (((1970 - 1) * 365 + Math.floor(1970 / 4) - Math.floor(1970 / 100) +
//		Math.floor(1970 / 400)) * 24 * 60 * 60 * 10000000),

//        /* Format a date object into a string value.
//        The format can be combinations of the following:
//        d  - day of month (no leading zero)
//        dd - day of month (two digit)
//        o  - day of year (no leading zeros)
//        oo - day of year (three digit)
//        D  - day name short
//        DD - day name long
//        m  - month of year (no leading zero)
//        mm - month of year (two digit)
//        M  - month name short
//        MM - month name long
//        y  - year (two digit)
//        yy - year (four digit)
//        @ - Unix timestamp (ms since 01/01/1970)
//        ! - Windows ticks (100ns since 01/01/0001)
//        '...' - literal text
//        '' - single quote

//        @param  format    string - the desired format of the date
//        @param  date      Date - the date value to format
//        @param  settings  Object - attributes include:
//        dayNamesShort    string[7] - abbreviated names of the days from Sunday (optional)
//        dayNames         string[7] - names of the days from Sunday (optional)
//        monthNamesShort  string[12] - abbreviated names of the months (optional)
//        monthNames       string[12] - names of the months (optional)
//        @return  string - the date in the above format */
//        formatDate: function (format, date, settings) {
//            if (!date)
//                return '';
//            var dayNamesShort = (settings ? settings.dayNamesShort : null) || this._defaults.dayNamesShort;
//            var dayNames = (settings ? settings.dayNames : null) || this._defaults.dayNames;
//            var monthNamesShort = (settings ? settings.monthNamesShort : null) || this._defaults.monthNamesShort;
//            var monthNames = (settings ? settings.monthNames : null) || this._defaults.monthNames;
//            // Check whether a format character is doubled
//            var lookAhead = function (match) {
//                var matches = (iFormat + 1 < format.length && format.charAt(iFormat + 1) == match);
//                if (matches)
//                    iFormat++;
//                return matches;
//            };
//            // Format a number, with leading zero if necessary
//            var formatNumber = function (match, value, len) {
//                var num = '' + value;
//                if (lookAhead(match))
//                    while (num.length < len)
//                        num = '0' + num;
//                return num;
//            };
//            // Format a name, short or long as requested
//            var formatName = function (match, value, shortNames, longNames) {
//                return (lookAhead(match) ? longNames[value] : shortNames[value]);
//            };
//            var output = '';
//            var literal = false;
//            if (date)
//                for (var iFormat = 0; iFormat < format.length; iFormat++) {
//                    if (literal)
//                        if (format.charAt(iFormat) == "'" && !lookAhead("'"))
//                            literal = false;
//                        else
//                            output += format.charAt(iFormat);
//                    else
//                        switch (format.charAt(iFormat)) {
//                        case 'd':
//                            output += formatNumber('d', date.getDate(), 2);
//                            break;
//                        case 'D':
//                            output += formatName('D', date.getDay(), dayNamesShort, dayNames);
//                            break;
//                        case 'o':
//                            output += formatNumber('o',
//								Math.round((new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime() - new Date(date.getFullYear(), 0, 0).getTime()) / 86400000), 3);
//                            break;
//                        case 'm':
//                            output += formatNumber('m', date.getMonth() + 1, 2);
//                            break;
//                        case 'M':
//                            output += formatName('M', date.getMonth(), monthNamesShort, monthNames);
//                            break;
//                        case 'y':
//                            output += (lookAhead('y') ? date.getFullYear() :
//								(date.getYear() % 100 < 10 ? '0' : '') + date.getYear() % 100);
//                            break;
//                        case '@':
//                            output += date.getTime();
//                            break;
//                        case '!':
//                            output += date.getTime() * 10000 + this._ticksTo1970;
//                            break;
//                        case "'":
//                            if (lookAhead("'"))
//                                output += "'";
//                            else
//                                literal = true;
//                            break;
//                        default:
//                            output += format.charAt(iFormat);
//                    }
//                }
//            return output;
//        },

//        /* Extract all possible characters from the date format. */
//        _possibleChars: function (format) {
//            var chars = '';
//            var literal = false;
//            // Check whether a format character is doubled
//            var lookAhead = function (match) {
//                var matches = (iFormat + 1 < format.length && format.charAt(iFormat + 1) == match);
//                if (matches)
//                    iFormat++;
//                return matches;
//            };
//            for (var iFormat = 0; iFormat < format.length; iFormat++)
//                if (literal)
//                    if (format.charAt(iFormat) == "'" && !lookAhead("'"))
//                        literal = false;
//                    else
//                        chars += format.charAt(iFormat);
//                else
//                    switch (format.charAt(iFormat)) {
//                    case 'd': case 'm': case 'y': case '@':
//                        chars += '0123456789';
//                        break;
//                    case 'D': case 'M':
//                        return null; // Accept anything
//                    case "'":
//                        if (lookAhead("'"))
//                            chars += "'";
//                        else
//                            literal = true;
//                        break;
//                    default:
//                        chars += format.charAt(iFormat);
//                }
//            return chars;
//        },

//        /* Get a setting value, defaulting if necessary. */
//        _get: function (inst, name) {
//            return inst.settings[name] !== undefined ?
//			inst.settings[name] : this._defaults[name];
//        },

//        /* Parse existing date and initialise date picker. */
//        _setDateFromField: function (inst, noDefault) {
//            if (inst.input.val() == inst.lastVal) {
//                return;
//            }
//            var dateFormat = this._get(inst, 'dateFormat');
//            var dates = inst.lastVal = inst.input ? inst.input.val() : null;
//            var date, defaultDate;
//            date = defaultDate = this._getDefaultDate(inst);
//            var settings = this._getFormatConfig(inst);
//            try {
//                date = this.parseDate(dateFormat, dates, settings) || defaultDate;
//            } catch (event) {
//                this.log(event);
//                dates = (noDefault ? '' : dates);
//            }
//            inst.selectedDay = date.getDate();
//            inst.drawMonth = inst.selectedMonth = date.getMonth();
//            inst.drawYear = inst.selectedYear = date.getFullYear();
//            inst.currentDay = (dates ? date.getDate() : 0);
//            inst.currentMonth = (dates ? date.getMonth() : 0);
//            inst.currentYear = (dates ? date.getFullYear() : 0);
//            this._adjustInstDate(inst);
//        },

//        /* Retrieve the default date shown on opening. */
//        _getDefaultDate: function (inst) {
//            return this._restrictMinMax(inst,
//			this._determineDate(inst, this._get(inst, 'defaultDate'), new Date()));
//        },

//        /* A date may be specified as an exact value or a relative one. */
//        _determineDate: function (inst, date, defaultDate) {
//            var offsetNumeric = function (offset) {
//                var date = new Date();
//                date.setDate(date.getDate() + offset);
//                return date;
//            };
//            var offsetString = function (offset) {
//                try {
//                    return $.datepicker.parseDate($.datepicker._get(inst, 'dateFormat'),
//					offset, $.datepicker._getFormatConfig(inst));
//                }
//                catch (e) {
//                    // Ignore
//                }
//                var date = (offset.toLowerCase().match(/^c/) ?
//				$.datepicker._getDate(inst) : null) || new Date();
//                var year = date.getFullYear();
//                var month = date.getMonth();
//                var day = date.getDate();
//                var pattern = /([+-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g;
//                var matches = pattern.exec(offset);
//                while (matches) {
//                    switch (matches[2] || 'd') {
//                        case 'd': case 'D':
//                            day += parseInt(matches[1], 10); break;
//                        case 'w': case 'W':
//                            day += parseInt(matches[1], 10) * 7; break;
//                        case 'm': case 'M':
//                            month += parseInt(matches[1], 10);
//                            day = Math.min(day, $.datepicker._getDaysInMonth(year, month));
//                            break;
//                        case 'y': case 'Y':
//                            year += parseInt(matches[1], 10);
//                            day = Math.min(day, $.datepicker._getDaysInMonth(year, month));
//                            break;
//                    }
//                    matches = pattern.exec(offset);
//                }
//                return new Date(year, month, day);
//            };
//            var newDate = (date == null || date === '' ? defaultDate : (typeof date == 'string' ? offsetString(date) :
//			(typeof date == 'number' ? (isNaN(date) ? defaultDate : offsetNumeric(date)) : new Date(date.getTime()))));
//            newDate = (newDate && newDate.toString() == 'Invalid Date' ? defaultDate : newDate);
//            if (newDate) {
//                newDate.setHours(0);
//                newDate.setMinutes(0);
//                newDate.setSeconds(0);
//                newDate.setMilliseconds(0);
//            }
//            return this._daylightSavingAdjust(newDate);
//        },

//        /* Handle switch to/from daylight saving.
//        Hours may be non-zero on daylight saving cut-over:
//        > 12 when midnight changeover, but then cannot generate
//        midnight datetime, so jump to 1AM, otherwise reset.
//        @param  date  (Date) the date to check
//        @return  (Date) the corrected date */
//        _daylightSavingAdjust: function (date) {
//            if (!date) return null;
//            date.setHours(date.getHours() > 12 ? date.getHours() + 2 : 0);
//            return date;
//        },

//        /* Set the date(s) directly. */
//        _setDate: function (inst, date, noChange) {
//            var clear = !date;
//            var origMonth = inst.selectedMonth;
//            var origYear = inst.selectedYear;
//            var newDate = this._restrictMinMax(inst, this._determineDate(inst, date, new Date()));
//            inst.selectedDay = inst.currentDay = newDate.getDate();
//            inst.drawMonth = inst.selectedMonth = inst.currentMonth = newDate.getMonth();
//            inst.drawYear = inst.selectedYear = inst.currentYear = newDate.getFullYear();
//            if ((origMonth != inst.selectedMonth || origYear != inst.selectedYear) && !noChange)
//                this._notifyChange(inst);
//            this._adjustInstDate(inst);
//            if (inst.input) {
//                inst.input.val(clear ? '' : this._formatDate(inst));
//            }
//        },

//        /* Retrieve the date(s) directly. */
//        _getDate: function (inst) {
//            var startDate = (!inst.currentYear || (inst.input && inst.input.val() == '') ? null :
//			this._daylightSavingAdjust(new Date(
//			inst.currentYear, inst.currentMonth, inst.currentDay)));
//            return startDate;
//        },

//        /* Attach the onxxx handlers.  These are declared statically so
//        * they work with static code transformers like Caja.
//        */
//        _attachHandlers: function (inst) {
//            var stepMonths = this._get(inst, 'stepMonths');
//            var id = '#' + inst.id;
//            inst.dpDiv.find('[data-handler]').map(function () {
//                var handler = {
//                    prev: function () {
//                        window['DP_jQuery_' + dpuuid].datepicker._adjustDate(id, -stepMonths, 'M');
//                    },
//                    next: function () {
//                        window['DP_jQuery_' + dpuuid].datepicker._adjustDate(id, +stepMonths, 'M');
//                    },
//                    hide: function () {
//                        window['DP_jQuery_' + dpuuid].datepicker._hideDatepicker();
//                    },
//                    today: function () {
//                        window['DP_jQuery_' + dpuuid].datepicker._gotoToday(id);
//                    },
//                    selectDay: function () {
//                        window['DP_jQuery_' + dpuuid].datepicker._selectDay(id, +this.getAttribute('data-month'), +this.getAttribute('data-year'), this);
//                        return false;
//                    },
//                    selectMonth: function () {
//                        window['DP_jQuery_' + dpuuid].datepicker._selectMonthYear(id, this, 'M');
//                        return false;
//                    },
//                    selectYear: function () {
//                        window['DP_jQuery_' + dpuuid].datepicker._selectMonthYear(id, this, 'Y');
//                        return false;
//                    }
//                };
//                $(this).bind(this.getAttribute('data-event'), handler[this.getAttribute('data-handler')]);
//            });
//        },

//        /* Generate the HTML for the current state of the date picker. */
//        _generateHTML: function (inst) {
//            var today = new Date();
//            today = this._daylightSavingAdjust(
//			new Date(today.getFullYear(), today.getMonth(), today.getDate())); // clear time
//            var isRTL = this._get(inst, 'isRTL');
//            var showButtonPanel = this._get(inst, 'showButtonPanel');
//            var hideIfNoPrevNext = this._get(inst, 'hideIfNoPrevNext');
//            var navigationAsDateFormat = this._get(inst, 'navigationAsDateFormat');
//            var numMonths = this._getNumberOfMonths(inst);
//            var showCurrentAtPos = this._get(inst, 'showCurrentAtPos');
//            var stepMonths = this._get(inst, 'stepMonths');
//            var isMultiMonth = (numMonths[0] != 1 || numMonths[1] != 1);
//            var currentDate = this._daylightSavingAdjust((!inst.currentDay ? new Date(9999, 9, 9) :
//			new Date(inst.currentYear, inst.currentMonth, inst.currentDay)));
//            var minDate = this._getMinMaxDate(inst, 'min');
//            var maxDate = this._getMinMaxDate(inst, 'max');
//            var drawMonth = inst.drawMonth - showCurrentAtPos;
//            var drawYear = inst.drawYear;
//            if (drawMonth < 0) {
//                drawMonth += 12;
//                drawYear--;
//            }
//            if (maxDate) {
//                var maxDraw = this._daylightSavingAdjust(new Date(maxDate.getFullYear(),
//				maxDate.getMonth() - (numMonths[0] * numMonths[1]) + 1, maxDate.getDate()));
//                maxDraw = (minDate && maxDraw < minDate ? minDate : maxDraw);
//                while (this._daylightSavingAdjust(new Date(drawYear, drawMonth, 1)) > maxDraw) {
//                    drawMonth--;
//                    if (drawMonth < 0) {
//                        drawMonth = 11;
//                        drawYear--;
//                    }
//                }
//            }
//            inst.drawMonth = drawMonth;
//            inst.drawYear = drawYear;
//            var prevText = this._get(inst, 'prevText');
//            prevText = (!navigationAsDateFormat ? prevText : this.formatDate(prevText,
//			this._daylightSavingAdjust(new Date(drawYear, drawMonth - stepMonths, 1)),
//			this._getFormatConfig(inst)));
//            var prev = (this._canAdjustMonth(inst, -1, drawYear, drawMonth) ?
//			'<a class="ui-datepicker-prev ui-corner-all" data-handler="prev" data-event="click"' +
//			' title="' + prevText + '"><span class="ui-icon ui-icon-circle-triangle-' + (isRTL ? 'e' : 'w') + '">' + prevText + '</span></a>' :
//			(hideIfNoPrevNext ? '' : '<a class="ui-datepicker-prev ui-corner-all ui-state-disabled" title="' + prevText + '"><span class="ui-icon ui-icon-circle-triangle-' + (isRTL ? 'e' : 'w') + '">' + prevText + '</span></a>'));
//            var nextText = this._get(inst, 'nextText');
//            nextText = (!navigationAsDateFormat ? nextText : this.formatDate(nextText,
//			this._daylightSavingAdjust(new Date(drawYear, drawMonth + stepMonths, 1)),
//			this._getFormatConfig(inst)));
//            var next = (this._canAdjustMonth(inst, +1, drawYear, drawMonth) ?
//			'<a class="ui-datepicker-next ui-corner-all" data-handler="next" data-event="click"' +
//			' title="' + nextText + '"><span class="ui-icon ui-icon-circle-triangle-' + (isRTL ? 'w' : 'e') + '">' + nextText + '</span></a>' :
//			(hideIfNoPrevNext ? '' : '<a class="ui-datepicker-next ui-corner-all ui-state-disabled" title="' + nextText + '"><span class="ui-icon ui-icon-circle-triangle-' + (isRTL ? 'w' : 'e') + '">' + nextText + '</span></a>'));
//            var currentText = this._get(inst, 'currentText');
//            var gotoDate = (this._get(inst, 'gotoCurrent') && inst.currentDay ? currentDate : today);
//            currentText = (!navigationAsDateFormat ? currentText :
//			this.formatDate(currentText, gotoDate, this._getFormatConfig(inst)));
//            var controls = (!inst.inline ? '<button type="button" class="ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all" data-handler="hide" data-event="click">' +
//			this._get(inst, 'closeText') + '</button>' : '');
//            var buttonPanel = (showButtonPanel) ? '<div class="ui-datepicker-buttonpane ui-widget-content">' + (isRTL ? controls : '') +
//			(this._isInRange(inst, gotoDate) ? '<button type="button" class="ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all" data-handler="today" data-event="click"' +
//			'>' + currentText + '</button>' : '') + (isRTL ? '' : controls) + '</div>' : '';
//            var firstDay = parseInt(this._get(inst, 'firstDay'), 10);
//            firstDay = (isNaN(firstDay) ? 0 : firstDay);
//            var showWeek = this._get(inst, 'showWeek');
//            var dayNames = this._get(inst, 'dayNames');
//            var dayNamesShort = this._get(inst, 'dayNamesShort');
//            var dayNamesMin = this._get(inst, 'dayNamesMin');
//            var monthNames = this._get(inst, 'monthNames');
//            var monthNamesShort = this._get(inst, 'monthNamesShort');
//            var beforeShowDay = this._get(inst, 'beforeShowDay');
//            var showOtherMonths = this._get(inst, 'showOtherMonths');
//            var selectOtherMonths = this._get(inst, 'selectOtherMonths');
//            var calculateWeek = this._get(inst, 'calculateWeek') || this.iso8601Week;
//            var defaultDate = this._getDefaultDate(inst);
//            var html = '';
//            for (var row = 0; row < numMonths[0]; row++) {
//                var group = '';
//                this.maxRows = 4;
//                for (var col = 0; col < numMonths[1]; col++) {
//                    var selectedDate = this._daylightSavingAdjust(new Date(drawYear, drawMonth, inst.selectedDay));
//                    var cornerClass = ' ui-corner-all';
//                    var calender = '';
//                    if (isMultiMonth) {
//                        calender += '<div class="ui-datepicker-group';
//                        if (numMonths[1] > 1)
//                            switch (col) {
//                            case 0: calender += ' ui-datepicker-group-first';
//                                cornerClass = ' ui-corner-' + (isRTL ? 'right' : 'left'); break;
//                            case numMonths[1] - 1: calender += ' ui-datepicker-group-last';
//                                cornerClass = ' ui-corner-' + (isRTL ? 'left' : 'right'); break;
//                            default: calender += ' ui-datepicker-group-middle'; cornerClass = ''; break;
//                        }
//                        calender += '">';
//                    }
//                    calender += '<div class="ui-datepicker-header ui-widget-header ui-helper-clearfix' + cornerClass + '">' +
//					(/all|left/.test(cornerClass) && row == 0 ? (isRTL ? next : prev) : '') +
//					(/all|right/.test(cornerClass) && row == 0 ? (isRTL ? prev : next) : '') +
//					this._generateMonthYearHeader(inst, drawMonth, drawYear, minDate, maxDate,
//					row > 0 || col > 0, monthNames, monthNamesShort) + // draw month headers
//					'</div><table class="ui-datepicker-calendar"><thead>' +
//					'<tr>';
//                    var thead = (showWeek ? '<th class="ui-datepicker-week-col">' + this._get(inst, 'weekHeader') + '</th>' : '');
//                    for (var dow = 0; dow < 7; dow++) { // days of the week
//                        var day = (dow + firstDay) % 7;
//                        thead += '<th' + ((dow + firstDay + 6) % 7 >= 5 ? ' class="ui-datepicker-week-end"' : '') + '>' +
//						'<span title="' + dayNames[day] + '">' + dayNamesMin[day] + '</span></th>';
//                    }
//                    calender += thead + '</tr></thead><tbody>';
//                    var daysInMonth = this._getDaysInMonth(drawYear, drawMonth);
//                    if (drawYear == inst.selectedYear && drawMonth == inst.selectedMonth)
//                        inst.selectedDay = Math.min(inst.selectedDay, daysInMonth);
//                    var leadDays = (this._getFirstDayOfMonth(drawYear, drawMonth) - firstDay + 7) % 7;
//                    var curRows = Math.ceil((leadDays + daysInMonth) / 7); // calculate the number of rows to generate
//                    var numRows = (isMultiMonth ? this.maxRows > curRows ? this.maxRows : curRows : curRows); //If multiple months, use the higher number of rows (see #7043)
//                    this.maxRows = numRows;
//                    var printDate = this._daylightSavingAdjust(new Date(drawYear, drawMonth, 1 - leadDays));
//                    for (var dRow = 0; dRow < numRows; dRow++) { // create date picker rows
//                        calender += '<tr>';
//                        var tbody = (!showWeek ? '' : '<td class="ui-datepicker-week-col">' +
//						this._get(inst, 'calculateWeek')(printDate) + '</td>');
//                        for (var dow = 0; dow < 7; dow++) { // create date picker days
//                            var daySettings = (beforeShowDay ?
//							beforeShowDay.apply((inst.input ? inst.input[0] : null), [printDate]) : [true, '']);
//                            var otherMonth = (printDate.getMonth() != drawMonth);
//                            var unselectable = (otherMonth && !selectOtherMonths) || !daySettings[0] ||
//							(minDate && printDate < minDate) || (maxDate && printDate > maxDate);
//                            tbody += '<td class="' +
//							((dow + firstDay + 6) % 7 >= 5 ? ' ui-datepicker-week-end' : '') + // highlight weekends
//							(otherMonth ? ' ui-datepicker-other-month' : '') + // highlight days from other months
//							((printDate.getTime() == selectedDate.getTime() && drawMonth == inst.selectedMonth && inst._keyEvent) || // user pressed key
//							(defaultDate.getTime() == printDate.getTime() && defaultDate.getTime() == selectedDate.getTime()) ?
//                            // or defaultDate is current printedDate and defaultDate is selectedDate
//							' ' + this._dayOverClass : '') + // highlight selected day
//							(unselectable ? ' ' + this._unselectableClass + ' ui-state-disabled' : '') +  // highlight unselectable days
//							(otherMonth && !showOtherMonths ? '' : ' ' + daySettings[1] + // highlight custom dates
//							(printDate.getTime() == currentDate.getTime() ? ' ' + this._currentClass : '') + // highlight selected day
//							(printDate.getTime() == today.getTime() ? ' ui-datepicker-today' : '')) + '"' + // highlight today (if different)
//							((!otherMonth || showOtherMonths) && daySettings[2] ? ' title="' + daySettings[2] + '"' : '') + // cell title
//							(unselectable ? '' : ' data-handler="selectDay" data-event="click" data-month="' + printDate.getMonth() + '" data-year="' + printDate.getFullYear() + '"') + '>' + // actions
//							(otherMonth && !showOtherMonths ? '&#xa0;' : // display for other months
//							(unselectable ? '<span class="ui-state-default">' + printDate.getDate() + '</span>' : '<a class="ui-state-default' +
//							(printDate.getTime() == today.getTime() ? ' ui-state-highlight' : '') +
//							(printDate.getTime() == currentDate.getTime() ? ' ui-state-active' : '') + // highlight selected day
//							(otherMonth ? ' ui-priority-secondary' : '') + // distinguish dates from other months
//							'" href="#">' + printDate.getDate() + '</a>')) + '</td>'; // display selectable date
//                            printDate.setDate(printDate.getDate() + 1);
//                            printDate = this._daylightSavingAdjust(printDate);
//                        }
//                        calender += tbody + '</tr>';
//                    }
//                    drawMonth++;
//                    if (drawMonth > 11) {
//                        drawMonth = 0;
//                        drawYear++;
//                    }
//                    calender += '</tbody></table>' + (isMultiMonth ? '</div>' +
//							((numMonths[0] > 0 && col == numMonths[1] - 1) ? '<div class="ui-datepicker-row-break"></div>' : '') : '');
//                    group += calender;
//                }
//                html += group;
//            }
//            html += buttonPanel + ($.browser.msie && parseInt($.browser.version, 10) < 7 && !inst.inline ?
//			'<iframe src="javascript:false;" class="ui-datepicker-cover" frameborder="0"></iframe>' : '');
//            inst._keyEvent = false;
//            return html;
//        },

//        /* Generate the month and year header. */
//        _generateMonthYearHeader: function (inst, drawMonth, drawYear, minDate, maxDate,
//			secondary, monthNames, monthNamesShort) {
//            var changeMonth = this._get(inst, 'changeMonth');
//            var changeYear = this._get(inst, 'changeYear');
//            var showMonthAfterYear = this._get(inst, 'showMonthAfterYear');
//            var html = '<div class="ui-datepicker-title">';
//            var monthHtml = '';
//            // month selection
//            if (secondary || !changeMonth)
//                monthHtml += '<span class="ui-datepicker-month">' + monthNames[drawMonth] + '</span>';
//            else {
//                var inMinYear = (minDate && minDate.getFullYear() == drawYear);
//                var inMaxYear = (maxDate && maxDate.getFullYear() == drawYear);
//                monthHtml += '<select class="ui-datepicker-month" data-handler="selectMonth" data-event="change">';
//                for (var month = 0; month < 12; month++) {
//                    if ((!inMinYear || month >= minDate.getMonth()) &&
//						(!inMaxYear || month <= maxDate.getMonth()))
//                        monthHtml += '<option value="' + month + '"' +
//						(month == drawMonth ? ' selected="selected"' : '') +
//						'>' + monthNamesShort[month] + '</option>';
//                }
//                monthHtml += '</select>';
//            }
//            if (!showMonthAfterYear)
//                html += monthHtml + (secondary || !(changeMonth && changeYear) ? '&#xa0;' : '');
//            // year selection
//            if (!inst.yearshtml) {
//                inst.yearshtml = '';
//                if (secondary || !changeYear)
//                    html += '<span class="ui-datepicker-year">' + drawYear + '</span>';
//                else {
//                    // determine range of years to display
//                    var years = this._get(inst, 'yearRange').split(':');
//                    var thisYear = new Date().getFullYear();
//                    var determineYear = function (value) {
//                        var year = (value.match(/c[+-].*/) ? drawYear + parseInt(value.substring(1), 10) :
//						(value.match(/[+-].*/) ? thisYear + parseInt(value, 10) :
//						parseInt(value, 10)));
//                        return (isNaN(year) ? thisYear : year);
//                    };
//                    var year = determineYear(years[0]);
//                    var endYear = Math.max(year, determineYear(years[1] || ''));
//                    year = (minDate ? Math.max(year, minDate.getFullYear()) : year);
//                    endYear = (maxDate ? Math.min(endYear, maxDate.getFullYear()) : endYear);
//                    inst.yearshtml += '<select class="ui-datepicker-year" data-handler="selectYear" data-event="change">';
//                    for (; year <= endYear; year++) {
//                        inst.yearshtml += '<option value="' + year + '"' +
//						(year == drawYear ? ' selected="selected"' : '') +
//						'>' + year + '</option>';
//                    }
//                    inst.yearshtml += '</select>';

//                    html += inst.yearshtml;
//                    inst.yearshtml = null;
//                }
//            }
//            html += this._get(inst, 'yearSuffix');
//            if (showMonthAfterYear)
//                html += (secondary || !(changeMonth && changeYear) ? '&#xa0;' : '') + monthHtml;
//            html += '</div>'; // Close datepicker_header
//            return html;
//        },

//        /* Adjust one of the date sub-fields. */
//        _adjustInstDate: function (inst, offset, period) {
//            var year = inst.drawYear + (period == 'Y' ? offset : 0);
//            var month = inst.drawMonth + (period == 'M' ? offset : 0);
//            var day = Math.min(inst.selectedDay, this._getDaysInMonth(year, month)) +
//			(period == 'D' ? offset : 0);
//            var date = this._restrictMinMax(inst,
//			this._daylightSavingAdjust(new Date(year, month, day)));
//            inst.selectedDay = date.getDate();
//            inst.drawMonth = inst.selectedMonth = date.getMonth();
//            inst.drawYear = inst.selectedYear = date.getFullYear();
//            if (period == 'M' || period == 'Y')
//                this._notifyChange(inst);
//        },

//        /* Ensure a date is within any min/max bounds. */
//        _restrictMinMax: function (inst, date) {
//            var minDate = this._getMinMaxDate(inst, 'min');
//            var maxDate = this._getMinMaxDate(inst, 'max');
//            var newDate = (minDate && date < minDate ? minDate : date);
//            newDate = (maxDate && newDate > maxDate ? maxDate : newDate);
//            return newDate;
//        },

//        /* Notify change of month/year. */
//        _notifyChange: function (inst) {
//            var onChange = this._get(inst, 'onChangeMonthYear');
//            if (onChange)
//                onChange.apply((inst.input ? inst.input[0] : null),
//				[inst.selectedYear, inst.selectedMonth + 1, inst]);
//        },

//        /* Determine the number of months to show. */
//        _getNumberOfMonths: function (inst) {
//            var numMonths = this._get(inst, 'numberOfMonths');
//            return (numMonths == null ? [1, 1] : (typeof numMonths == 'number' ? [1, numMonths] : numMonths));
//        },

//        /* Determine the current maximum date - ensure no time components are set. */
//        _getMinMaxDate: function (inst, minMax) {
//            return this._determineDate(inst, this._get(inst, minMax + 'Date'), null);
//        },

//        /* Find the number of days in a given month. */
//        _getDaysInMonth: function (year, month) {
//            return 32 - this._daylightSavingAdjust(new Date(year, month, 32)).getDate();
//        },

//        /* Find the day of the week of the first of a month. */
//        _getFirstDayOfMonth: function (year, month) {
//            return new Date(year, month, 1).getDay();
//        },

//        /* Determines if we should allow a "next/prev" month display change. */
//        _canAdjustMonth: function (inst, offset, curYear, curMonth) {
//            var numMonths = this._getNumberOfMonths(inst);
//            var date = this._daylightSavingAdjust(new Date(curYear,
//			curMonth + (offset < 0 ? offset : numMonths[0] * numMonths[1]), 1));
//            if (offset < 0)
//                date.setDate(this._getDaysInMonth(date.getFullYear(), date.getMonth()));
//            return this._isInRange(inst, date);
//        },

//        /* Is the given date in the accepted range? */
//        _isInRange: function (inst, date) {
//            var minDate = this._getMinMaxDate(inst, 'min');
//            var maxDate = this._getMinMaxDate(inst, 'max');
//            return ((!minDate || date.getTime() >= minDate.getTime()) &&
//			(!maxDate || date.getTime() <= maxDate.getTime()));
//        },

//        /* Provide the configuration settings for formatting/parsing. */
//        _getFormatConfig: function (inst) {
//            var shortYearCutoff = this._get(inst, 'shortYearCutoff');
//            shortYearCutoff = (typeof shortYearCutoff != 'string' ? shortYearCutoff :
//			new Date().getFullYear() % 100 + parseInt(shortYearCutoff, 10));
//            return { shortYearCutoff: shortYearCutoff,
//                dayNamesShort: this._get(inst, 'dayNamesShort'), dayNames: this._get(inst, 'dayNames'),
//                monthNamesShort: this._get(inst, 'monthNamesShort'), monthNames: this._get(inst, 'monthNames')
//            };
//        },

//        /* Format the given date for display. */
//        _formatDate: function (inst, day, month, year) {
//            if (!day) {
//                inst.currentDay = inst.selectedDay;
//                inst.currentMonth = inst.selectedMonth;
//                inst.currentYear = inst.selectedYear;
//            }
//            var date = (day ? (typeof day == 'object' ? day :
//			this._daylightSavingAdjust(new Date(year, month, day))) :
//			this._daylightSavingAdjust(new Date(inst.currentYear, inst.currentMonth, inst.currentDay)));
//            return this.formatDate(this._get(inst, 'dateFormat'), date, this._getFormatConfig(inst));
//        }
//    });

//    /*
//    * Bind hover events for datepicker elements.
//    * Done via delegate so the binding only occurs once in the lifetime of the parent div.
//    * Global instActive, set by _updateDatepicker allows the handlers to find their way back to the active picker.
//    */
//    function bindHover(dpDiv) {
//        var selector = 'button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a';
//        return dpDiv.bind('mouseout', function (event) {
//            var elem = $(event.target).closest(selector);
//            if (!elem.length) {
//                return;
//            }
//            elem.removeClass("ui-state-hover ui-datepicker-prev-hover ui-datepicker-next-hover");
//        })
//		.bind('mouseover', function (event) {
//		    var elem = $(event.target).closest(selector);
//		    if ($.datepicker._isDisabledDatepicker(instActive.inline ? dpDiv.parent()[0] : instActive.input[0]) ||
//					!elem.length) {
//		        return;
//		    }
//		    elem.parents('.ui-datepicker-calendar').find('a').removeClass('ui-state-hover');
//		    elem.addClass('ui-state-hover');
//		    if (elem.hasClass('ui-datepicker-prev')) elem.addClass('ui-datepicker-prev-hover');
//		    if (elem.hasClass('ui-datepicker-next')) elem.addClass('ui-datepicker-next-hover');
//		});
//    }

//    /* jQuery extend now ignores nulls! */
//    function extendRemove(target, props) {
//        $.extend(target, props);
//        for (var name in props)
//            if (props[name] == null || props[name] == undefined)
//                target[name] = props[name];
//        return target;
//    };

//    /* Determine whether an object is an array. */
//    function isArray(a) {
//        return (a && (($.browser.safari && typeof a == 'object' && a.length) ||
//		(a.constructor && a.constructor.toString().match(/\Array\(\)/))));
//    };

//    /* Invoke the datepicker functionality.
//    @param  options  string - a command, optionally followed by additional parameters or
//    Object - settings for attaching new datepicker functionality
//    @return  jQuery object */
//    $.fn.datepicker = function (options) {

//        /* Verify an empty collection wasn't passed - Fixes #6976 */
//        if (!this.length) {
//            return this;
//        }

//        /* Initialise the date picker. */
//        if (!$.datepicker.initialized) {
//            $(document).mousedown($.datepicker._checkExternalClick).
//			find('body').append($.datepicker.dpDiv);
//            $.datepicker.initialized = true;
//        }

//        var otherArgs = Array.prototype.slice.call(arguments, 1);
//        if (typeof options == 'string' && (options == 'isDisabled' || options == 'getDate' || options == 'widget'))
//            return $.datepicker['_' + options + 'Datepicker'].
//			apply($.datepicker, [this[0]].concat(otherArgs));
//        if (options == 'option' && arguments.length == 2 && typeof arguments[1] == 'string')
//            return $.datepicker['_' + options + 'Datepicker'].
//			apply($.datepicker, [this[0]].concat(otherArgs));
//        return this.each(function () {
//            typeof options == 'string' ?
//			$.datepicker['_' + options + 'Datepicker'].
//				apply($.datepicker, [this].concat(otherArgs)) :
//			$.datepicker._attachDatepicker(this, options);
//        });
//    };

//    $.datepicker = new Datepicker(); // singleton instance
//    $.datepicker.initialized = false;
//    $.datepicker.uuid = new Date().getTime();
//    $.datepicker.version = "1.8.22";

//    // Workaround for #4055
//    // Add another global to avoid noConflict issues with inline event handlers
//    window['DP_jQuery_' + dpuuid] = $;

//})(jQuery);


///* Chinese initialisation for the jQuery UI date picker plugin. */
///* Written by Cloudream (cloudream@gmail.com). */
//jQuery(function ($) {
//    $.datetimepicker.regional['zh-CN'] = {
//        closeText: '关闭',
//        prevText: '&#x3c;上月',
//        nextText: '下月&#x3e;',
//        currentText: '今天',
//        monthNames: ['一月', '二月', '三月', '四月', '五月', '六月',
//		'七月', '八月', '九月', '十月', '十一月', '十二月'],
//        monthNamesShort: ['一', '二', '三', '四', '五', '六',
//		'七', '八', '九', '十', '十一', '十二'],
//        dayNames: ['日', '一', '二', '三', '四', '五', '六'],
//        dayNamesShort: ['日', '一', '二', '三', '四', '五', '六'],
//        dayNamesMin: ['日', '一', '二', '三', '四', '五', '六'],
//        weekHeader: '周',
//        dateFormat: 'yy-mm-dd',
//        firstDay: 1,
//        isRTL: false,
//        showMonthAfterYear: true,
//        yearSuffix: '年'
//    };
//    $.datetimepicker.setDefaults($.datetimepicker.regional['zh-CN']);
//});
(function (a, g) { var f = "tabindex", d = "Width", e = ".ui-disableSelection", c = "overflow", b = "position"; function h(b, e) { var c = b.nodeName.toLowerCase(); if ("area" === c) { var f = b.parentNode, g = f.name, d; return !b.href || !g || f.nodeName.toLowerCase() !== "map" ? !1 : (d = a("img[usemap=#" + g + "]")[0], !!d && i(d)) } return (/input|select|textarea|button|object/.test(c) ? !b.disabled : "a" == c ? b.href || e : e) && i(b) } function i(b) { return !a(b).parents().andSelf().filter(function () { return a.curCSS(this, "visibility") === "hidden" || a.expr.filters.hidden(this) }).length } a.ui = a.ui || {}; if (a.ui.version) return; a.extend(a.ui, { version: "1.8.21", keyCode: { ALT: 18, BACKSPACE: 8, CAPS_LOCK: 20, COMMA: 188, COMMAND: 91, COMMAND_LEFT: 91, COMMAND_RIGHT: 93, CONTROL: 17, DELETE: 46, DOWN: 40, END: 35, ENTER: 13, ESCAPE: 27, HOME: 36, INSERT: 45, LEFT: 37, MENU: 93, NUMPAD_ADD: 107, NUMPAD_DECIMAL: 110, NUMPAD_DIVIDE: 111, NUMPAD_ENTER: 108, NUMPAD_MULTIPLY: 106, NUMPAD_SUBTRACT: 109, PAGE_DOWN: 34, PAGE_UP: 33, PERIOD: 190, RIGHT: 39, SHIFT: 16, SPACE: 32, TAB: 9, UP: 38, WINDOWS: 91} }), a.fn.extend({ propAttr: a.fn.prop || a.fn.attr, _focus: a.fn.focus, focus: function (b, c) { return typeof b == "number" ? this.each(function () { var d = this; setTimeout(function () { a(d).focus(), c && c.call(d) }, b) }) : this._focus.apply(this, arguments) }, scrollParent: function () { var e = "overflow-x", d = "overflow-y", f = this, g; return a.browser.msie && /(static|relative)/.test(f.css(b)) || /absolute/.test(f.css(b)) ? (g = f.parents().filter(function () { var f = this; return /(relative|absolute|fixed)/.test(a.curCSS(f, b, 1)) && /(auto|scroll)/.test(a.curCSS(f, c, 1) + a.curCSS(f, d, 1) + a.curCSS(f, e, 1)) }).eq(0)) : (g = f.parents().filter(function () { return /(auto|scroll)/.test(a.curCSS(this, c, 1) + a.curCSS(this, d, 1) + a.curCSS(this, e, 1)) }).eq(0)), /fixed/.test(f.css(b)) || !g.length ? a(document) : g }, zIndex: function (f) { if (f !== g) return this.css("zIndex", f); if (this.length) { var c = a(this[0]), d, e; while (c.length && c[0] !== document) { d = c.css(b); if (d === "absolute" || d === "relative" || d === "fixed") { e = parseInt(c.css("zIndex"), 10); if (!isNaN(e) && e !== 0) return e } c = c.parent() } } return 0 }, disableSelection: function () { return this.bind((a.support.selectstart ? "selectstart" : "mousedown") + e, function (a) { a.preventDefault() }) }, enableSelection: function () { return this.unbind(e) } }), a.each([d, "Height"], function (i, b) { function f(c, b, e, f) { return a.each(h, function () { b -= parseFloat(a.curCSS(c, "padding" + this, !0)) || 0, e && (b -= parseFloat(a.curCSS(c, "border" + this + d, !0)) || 0), f && (b -= parseFloat(a.curCSS(c, "margin" + this, !0)) || 0) }), b } var h = b === d ? ["Left", "Right"] : ["Top", "Bottom"], c = b.toLowerCase(), e = { innerWidth: a.fn.innerWidth, innerHeight: a.fn.innerHeight, outerWidth: a.fn.outerWidth, outerHeight: a.fn.outerHeight }; a.fn["inner" + b] = function (d) { return d === g ? e["inner" + b].call(this) : this.each(function () { a(this).css(c, f(this, d) + "px") }) }, a.fn["outer" + b] = function (d, g) { return typeof d != "number" ? e["outer" + b].call(this, d) : this.each(function () { a(this).css(c, f(this, d, !0, g) + "px") }) } }), a.extend(a.expr[":"], { data: function (b, d, c) { return !!a.data(b, c[3]) }, focusable: function (b) { return h(b, !isNaN(a.attr(b, f))) }, tabbable: function (b) { var c = a.attr(b, f), d = isNaN(c); return (d || c >= 0) && h(b, !d) } }), a(function () { var c = document.body, b = c.appendChild(b = document.createElement("div")); b.offsetHeight, a.extend(b.style, { minHeight: "100px", height: "auto", padding: 0, borderWidth: 0 }), a.support.minHeight = b.offsetHeight === 100, a.support.selectstart = "onselectstart" in b, c.removeChild(b).style.display = "none" }), a.extend(a.ui, { plugin: { add: function (e, f, d) { var c = a.ui[e].prototype; for (var b in d) c.plugins[b] = c.plugins[b] || [], c.plugins[b].push([f, d[b]]) }, call: function (a, d, e) { var b = a.plugins[d]; if (!b || !a.element[0].parentNode) return; for (var c = 0; c < b.length; c++) a.options[b[c][0]] && b[c][1].apply(a.element, e) } }, contains: function (a, b) { return document.compareDocumentPosition ? a.compareDocumentPosition(b) & 16 : a !== b && a.contains(b) }, hasScroll: function (b, e) { if (a(b).css(c) === "hidden") return !1; var d = e && e === "left" ? "scrollLeft" : "scrollTop", f = !1; return b[d] > 0 ? !0 : (b[d] = 1, f = b[d] > 0, b[d] = 0, f) }, isOverAxis: function (a, b, c) { return a > b && a < b + c }, isOver: function (b, c, d, e, f, g) { return a.ui.isOverAxis(b, d, f) && a.ui.isOverAxis(c, e, g) } }) })(jQuery), function (a, e) { var b = "disabled", d = "ui-state-disabled", c = "aria-disabled"; if (a.cleanData) { var f = a.cleanData; a.cleanData = function (b) { for (var c = 0, d; (d = b[c]) != null; c++) try { a(d).triggerHandler("remove") } catch (e) { } f(b) } } else { var g = a.fn.remove; a.fn.remove = function (b, c) { return this.each(function () { var d = this; return c || (!b || a.filter(b, [d]).length) && a("*", d).add([d]).each(function () { try { a(this).triggerHandler("remove") } catch (b) { } }), g.call(a(d), b, c) }) } } a.widget = function (b, d, e) { var c = b.split(".")[0], f; b = b.split(".")[1], f = c + "-" + b, e || (e = d, d = a.Widget), a.expr[":"][f] = function (c) { return !!a.data(c, b) }, a[c] = a[c] || {}, a[c][b] = function (a, b) { arguments.length && this._createWidget(a, b) }; var g = new d; g.options = a.extend(!0, {}, g.options), a[c][b].prototype = a.extend(!0, g, { "namespace": c, widgetName: b, widgetEventPrefix: a[c][b].prototype.widgetEventPrefix || b, widgetBaseClass: f }, e), a.widget.bridge(b, a[c][b]) }, a.widget.bridge = function (b, c) { a.fn[b] = function (d) { var f = typeof d == "string", g = Array.prototype.slice.call(arguments, 1), h = this; return d = !f && g.length ? a.extend.apply(null, [!0, d].concat(g)) : d, f && d.charAt(0) === "_" ? h : (f ? this.each(function () { var c = a.data(this, b), f = c && a.isFunction(c[d]) ? c[d].apply(c, g) : c; if (f !== c && f !== e) return h = f, !1 }) : this.each(function () { var e = a.data(this, b); e ? e.option(d || {})._init() : a.data(this, b, new c(d, this)) }), h) } }, a.Widget = function (a, b) { arguments.length && this._createWidget(a, b) }, a.Widget.prototype = { widgetName: "widget", widgetEventPrefix: "", options: { disabled: !1 }, _createWidget: function (d, c) { var b = this; a.data(c, b.widgetName, b), b.element = a(c), b.options = a.extend(!0, {}, b.options, b._getCreateOptions(), d); var e = b; b.element.bind("remove." + b.widgetName, function () { e.destroy() }), b._create(), b._trigger("create"), b._init() }, _getCreateOptions: function () { return a.metadata && a.metadata.get(this.element[0])[this.widgetName] }, _create: function () { }, _init: function () { }, destroy: function () { var a = this; a.element.unbind("." + a.widgetName).removeData(a.widgetName), a.widget().unbind("." + a.widgetName).removeAttr(c).removeClass(a.widgetBaseClass + "-disabled " + d) }, widget: function () { return this.element }, option: function (c, f) { var b = this, d = c; if (arguments.length === 0) return a.extend({}, b.options); if (typeof c == "string") { if (f === e) return b.options[c]; d = {}, d[c] = f } return b._setOptions(d), b }, _setOptions: function (b) { var c = this; return a.each(b, function (a, b) { c._setOption(a, b) }), this }, _setOption: function (f, e) { var a = this; return a.options[f] = e, f === b && a.widget()[e ? "addClass" : "removeClass"](a.widgetBaseClass + "-disabled " + d).attr(c, e), a }, enable: function () { return this._setOption(b, !1) }, disable: function () { return this._setOption(b, !0) }, _trigger: function (d, b, e) { var c = this, f, g, h = c.options[d]; e = e || {}, b = a.Event(b), b.type = (d === c.widgetEventPrefix ? d : c.widgetEventPrefix + d).toLowerCase(), b.target = c.element[0], g = b.originalEvent; if (g) for (f in g) f in b || (b[f] = g[f]); return c.element.trigger(b, e), !(a.isFunction(h) && h.call(c.element[0], b, e) === !1 || b.isDefaultPrevented()) } } } (jQuery), function (b) { var d = "mouseup.", c = "mousemove.", a = ".preventClickEvent", e = !1; b(document).mouseup(function () { e = !1 }), b.widget("ui.mouse", { options: { cancel: ":input,option", distance: 1, delay: 0 }, _mouseInit: function () { var c = this, d = c; c.element.bind("mousedown." + c.widgetName, function (a) { return d._mouseDown(a) }).bind("click." + c.widgetName, function (c) { if (!0 === b.data(c.target, d.widgetName + a)) return b.removeData(c.target, d.widgetName + a), c.stopImmediatePropagation(), !1 }), c.started = !1 }, _mouseDestroy: function () { var a = this; a.element.unbind("." + a.widgetName), b(document).unbind(c + a.widgetName, a._mouseMoveDelegate).unbind(d + a.widgetName, a._mouseUpDelegate) }, _mouseDown: function (g) { var f = this; if (e) return; f._mouseStarted && f._mouseUp(g), f._mouseDownEvent = g; var h = f, i = g.which == 1, j = typeof f.options.cancel == "string" && g.target.nodeName ? b(g.target).closest(f.options.cancel).length : !1; if (!i || j || !f._mouseCapture(g)) return !0; f.mouseDelayMet = !f.options.delay, f.mouseDelayMet || (f._mouseDelayTimer = setTimeout(function () { h.mouseDelayMet = !0 }, f.options.delay)); if (f._mouseDistanceMet(g) && f._mouseDelayMet(g)) { f._mouseStarted = f._mouseStart(g) !== !1; if (!f._mouseStarted) return g.preventDefault(), !0 } return !0 === b.data(g.target, f.widgetName + a) && b.removeData(g.target, f.widgetName + a), f._mouseMoveDelegate = function (a) { return h._mouseMove(a) }, f._mouseUpDelegate = function (a) { return h._mouseUp(a) }, b(document).bind(c + f.widgetName, f._mouseMoveDelegate).bind(d + f.widgetName, f._mouseUpDelegate), g.preventDefault(), e = !0, !0 }, _mouseMove: function (c) { var a = this; return !b.browser.msie || document.documentMode >= 9 || !!c.button ? a._mouseStarted ? (a._mouseDrag(c), c.preventDefault()) : (a._mouseDistanceMet(c) && a._mouseDelayMet(c) && (a._mouseStarted = a._mouseStart(a._mouseDownEvent, c) !== !1, a._mouseStarted ? a._mouseDrag(c) : a._mouseUp(c)), !a._mouseStarted) : a._mouseUp(c) }, _mouseUp: function (f) { var e = this; return b(document).unbind(c + e.widgetName, e._mouseMoveDelegate).unbind(d + e.widgetName, e._mouseUpDelegate), e._mouseStarted && (e._mouseStarted = !1, f.target == e._mouseDownEvent.target && b.data(f.target, e.widgetName + a, !0), e._mouseStop(f)), !1 }, _mouseDistanceMet: function (a) { return Math.max(Math.abs(this._mouseDownEvent.pageX - a.pageX), Math.abs(this._mouseDownEvent.pageY - a.pageY)) >= this.options.distance }, _mouseDelayMet: function () { return this.mouseDelayMet }, _mouseStart: function () { }, _mouseDrag: function () { }, _mouseStop: function () { }, _mouseCapture: function () { return !0 } }) } (jQuery), function (a) { var g = "zIndex", k = "opacity", j = "cursor", f = "fixed", p = "borderLeftWidth", o = "borderTopWidth", b = 10, s = "ui-draggable-dragging", i = "body", e = "absolute", h = "px", c = "draggable", d = "relative", m = "position", l = "original", n = "auto", r = "parent", q = "drag"; a.widget("ui.draggable", a.ui.mouse, { widgetEventPrefix: q, options: { addClasses: !0, appendTo: r, axis: !1, connectToSortable: !1, containment: !1, cursor: n, cursorAt: !1, grid: !1, handle: !1, helper: l, iframeFix: !1, opacity: !1, refreshPositions: !1, revert: !1, revertDuration: 500, scope: "default", scroll: !0, scrollSensitivity: 20, scrollSpeed: 20, snap: !1, snapMode: "both", snapTolerance: 20, stack: !1, zIndex: !1 }, _create: function () { var a = this; a.options.helper == l && !/^(?:r|a|f)/.test(a.element.css(m)) && (a.element[0].style.position = d), a.options.addClasses && a.element.addClass("ui-draggable"), a.options.disabled && a.element.addClass("ui-draggable-disabled"), a._mouseInit() }, destroy: function () { var a = this; return !a.element.data(c) ? void 0 : (a.element.removeData(c).unbind(".draggable").removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"), a._mouseDestroy(), a) }, _mouseCapture: function (d) { var b = this, c = b.options; return b.helper || c.disabled || a(d.target).is(".ui-resizable-handle") ? !1 : (b.handle = b._getHandle(d), b.handle ? (c.iframeFix && a(c.iframeFix === !0 ? "iframe" : c.iframeFix).each(function () { a('<div class="ui-draggable-iframeFix" style="background: #fff;"></div>').css({ width: this.offsetWidth + h, height: this.offsetHeight + h, position: e, opacity: "0.001", zIndex: 1e3 }).css(a(this).offset()).appendTo(i) }), !0) : !1) }, _mouseStart: function (c) { var b = this, d = b.options; return b.helper = b._createHelper(c), b.helper.addClass(s), b._cacheHelperProportions(), a.ui.ddmanager && (a.ui.ddmanager.current = b), b._cacheMargins(), b.cssPosition = b.helper.css(m), b.scrollParent = b.helper.scrollParent(), b.offset = b.positionAbs = b.element.offset(), b.offset = { top: b.offset.top - b.margins.top, left: b.offset.left - b.margins.left }, a.extend(b.offset, { click: { left: c.pageX - b.offset.left, top: c.pageY - b.offset.top }, parent: b._getParentOffset(), relative: b._getRelativeOffset() }), b.originalPosition = b.position = b._generatePosition(c), b.originalPageX = c.pageX, b.originalPageY = c.pageY, d.cursorAt && b._adjustOffsetFromHelper(d.cursorAt), d.containment && b._setContainment(), b._trigger("start", c) === !1 ? (b._clear(), !1) : (b._cacheHelperProportions(), a.ui.ddmanager && !d.dropBehaviour && a.ui.ddmanager.prepareOffsets(b, c), b._mouseDrag(c, !0), a.ui.ddmanager && a.ui.ddmanager.dragStart(b, c), !0) }, _mouseDrag: function (c, f) { var b = this; b.position = b._generatePosition(c), b.positionAbs = b._convertPositionTo(e); if (!f) { var d = b._uiHash(); if (b._trigger(q, c, d) === !1) return b._mouseUp({}), !1; b.position = d.position } if (!b.options.axis || b.options.axis != "y") b.helper[0].style.left = b.position.left + h; if (!b.options.axis || b.options.axis != "x") b.helper[0].style.top = b.position.top + h; return a.ui.ddmanager && a.ui.ddmanager.drag(b, c), !1 }, _mouseStop: function (f) { var c = this, d = !1; a.ui.ddmanager && !c.options.dropBehaviour && (d = a.ui.ddmanager.drop(c, f)), c.dropped && (d = c.dropped, c.dropped = !1); var e = c.element[0], g = !1; while (e && (e = e.parentNode)) e == document && (g = !0); if (!g && c.options.helper === l) return !1; if (c.options.revert == "invalid" && !d || c.options.revert == "valid" && d || c.options.revert === !0 || a.isFunction(c.options.revert) && c.options.revert.call(c.element, d)) { var h = c; a(c.helper).animate(c.originalPosition, parseInt(c.options.revertDuration, b), function () { h._trigger("stop", f) !== !1 && h._clear() }) } else c._trigger("stop", f) !== !1 && c._clear(); return !1 }, _mouseUp: function (b) { return this.options.iframeFix === !0 && a("div.ui-draggable-iframeFix").each(function () { this.parentNode.removeChild(this) }), a.ui.ddmanager && a.ui.ddmanager.dragStop(this, b), a.ui.mouse.prototype._mouseUp.call(this, b) }, cancel: function () { var a = this; return a.helper.is(".ui-draggable-dragging") ? a._mouseUp({}) : a._clear(), a }, _getHandle: function (d) { var b = this, c = !b.options.handle || !a(b.options.handle, b.element).length ? !0 : !1; return a(b.options.handle, b.element).find("*").andSelf().each(function () { this == d.target && (c = !0) }), c }, _createHelper: function (f) { var b = this, d = b.options, c = a.isFunction(d.helper) ? a(d.helper.apply(b.element[0], [f])) : d.helper == "clone" ? b.element.clone().removeAttr("id") : b.element; return c.parents(i).length || c.appendTo(d.appendTo == r ? b.element[0].parentNode : d.appendTo), c[0] != b.element[0] && !/(fixed|absolute)/.test(c.css(m)) && c.css(m, e), c }, _adjustOffsetFromHelper: function (b) { var c = this; typeof b == "string" && (b = b.split(" ")), a.isArray(b) && (b = { left: +b[0], top: +b[1] || 0 }), "left" in b && (c.offset.click.left = b.left + c.margins.left), "right" in b && (c.offset.click.left = c.helperProportions.width - b.right + c.margins.left), "top" in b && (c.offset.click.top = b.top + c.margins.top), "bottom" in b && (c.offset.click.top = c.helperProportions.height - b.bottom + c.margins.top) }, _getParentOffset: function () { var c = this; c.offsetParent = c.helper.offsetParent(); var d = c.offsetParent.offset(); c.cssPosition == e && c.scrollParent[0] != document && a.ui.contains(c.scrollParent[0], c.offsetParent[0]) && (d.left += c.scrollParent.scrollLeft(), d.top += c.scrollParent.scrollTop()); if (c.offsetParent[0] == document.body || c.offsetParent[0].tagName && c.offsetParent[0].tagName.toLowerCase() == "html" && a.browser.msie) d = { top: 0, left: 0 }; return { top: d.top + (parseInt(c.offsetParent.css(o), b) || 0), left: d.left + (parseInt(c.offsetParent.css(p), b) || 0)} }, _getRelativeOffset: function () { var a = this; if (a.cssPosition == d) { var c = a.element.position(); return { top: c.top - (parseInt(a.helper.css("top"), b) || 0) + a.scrollParent.scrollTop(), left: c.left - (parseInt(a.helper.css("left"), b) || 0) + a.scrollParent.scrollLeft()} } return { top: 0, left: 0} }, _cacheMargins: function () { var a = this; a.margins = { left: parseInt(a.element.css("marginLeft"), b) || 0, top: parseInt(a.element.css("marginTop"), b) || 0, right: parseInt(a.element.css("marginRight"), b) || 0, bottom: parseInt(a.element.css("marginBottom"), b) || 0} }, _cacheHelperProportions: function () { this.helperProportions = { width: this.helper.outerWidth(), height: this.helper.outerHeight()} }, _setContainment: function () { var f = "document", c = this, e = c.options; e.containment == r && (e.containment = c.helper[0].parentNode); if (e.containment == f || e.containment == "window") c.containment = [e.containment == f ? 0 : a(window).scrollLeft() - c.offset.relative.left - c.offset.parent.left, e.containment == f ? 0 : a(window).scrollTop() - c.offset.relative.top - c.offset.parent.top, (e.containment == f ? 0 : a(window).scrollLeft()) + a(e.containment == f ? document : window).width() - c.helperProportions.width - c.margins.left, (e.containment == f ? 0 : a(window).scrollTop()) + (a(e.containment == f ? document : window).height() || document.body.parentNode.scrollHeight) - c.helperProportions.height - c.margins.top]; if (!/^(document|window|parent)$/.test(e.containment) && e.containment.constructor != Array) { var g = a(e.containment), d = g[0]; if (!d) return; var i = g.offset(), h = a(d).css("overflow") != "hidden"; c.containment = [(parseInt(a(d).css(p), b) || 0) + (parseInt(a(d).css("paddingLeft"), b) || 0), (parseInt(a(d).css(o), b) || 0) + (parseInt(a(d).css("paddingTop"), b) || 0), (h ? Math.max(d.scrollWidth, d.offsetWidth) : d.offsetWidth) - (parseInt(a(d).css(p), b) || 0) - (parseInt(a(d).css("paddingRight"), b) || 0) - c.helperProportions.width - c.margins.left - c.margins.right, (h ? Math.max(d.scrollHeight, d.offsetHeight) : d.offsetHeight) - (parseInt(a(d).css(o), b) || 0) - (parseInt(a(d).css("paddingBottom"), b) || 0) - c.helperProportions.height - c.margins.top - c.margins.bottom], c.relative_container = g } else e.containment.constructor == Array && (c.containment = e.containment) }, _convertPositionTo: function (i, d) { var b = this; d || (d = b.position); var c = i == e ? 1 : -1, j = b.options, g = b.cssPosition == e && (b.scrollParent[0] == document || !a.ui.contains(b.scrollParent[0], b.offsetParent[0])) ? b.offsetParent : b.scrollParent, h = /(html|body)/i.test(g[0].tagName); return { top: d.top + b.offset.relative.top * c + b.offset.parent.top * c - (a.browser.safari && a.browser.version < 526 && b.cssPosition == f ? 0 : (b.cssPosition == f ? -b.scrollParent.scrollTop() : h ? 0 : g.scrollTop()) * c), left: d.left + b.offset.relative.left * c + b.offset.parent.left * c - (a.browser.safari && a.browser.version < 526 && b.cssPosition == f ? 0 : (b.cssPosition == f ? -b.scrollParent.scrollLeft() : h ? 0 : g.scrollLeft()) * c)} }, _generatePosition: function (i) { var b = this, d = b.options, m = b.cssPosition == e && (b.scrollParent[0] == document || !a.ui.contains(b.scrollParent[0], b.offsetParent[0])) ? b.offsetParent : b.scrollParent, n = /(html|body)/i.test(m[0].tagName), j = i.pageX, k = i.pageY; if (b.originalPosition) { var c; if (b.containment) { if (b.relative_container) { var l = b.relative_container.offset(); c = [b.containment[0] + l.left, b.containment[1] + l.top, b.containment[2] + l.left, b.containment[3] + l.top] } else c = b.containment; i.pageX - b.offset.click.left < c[0] && (j = c[0] + b.offset.click.left), i.pageY - b.offset.click.top < c[1] && (k = c[1] + b.offset.click.top), i.pageX - b.offset.click.left > c[2] && (j = c[2] + b.offset.click.left), i.pageY - b.offset.click.top > c[3] && (k = c[3] + b.offset.click.top) } if (d.grid) { var g = d.grid[1] ? b.originalPageY + Math.round((k - b.originalPageY) / d.grid[1]) * d.grid[1] : b.originalPageY; k = c ? g - b.offset.click.top < c[1] || g - b.offset.click.top > c[3] ? g - b.offset.click.top < c[1] ? g + d.grid[1] : g - d.grid[1] : g : g; var h = d.grid[0] ? b.originalPageX + Math.round((j - b.originalPageX) / d.grid[0]) * d.grid[0] : b.originalPageX; j = c ? h - b.offset.click.left < c[0] || h - b.offset.click.left > c[2] ? h - b.offset.click.left < c[0] ? h + d.grid[0] : h - d.grid[0] : h : h } } return { top: k - b.offset.click.top - b.offset.relative.top - b.offset.parent.top + (a.browser.safari && a.browser.version < 526 && b.cssPosition == f ? 0 : b.cssPosition == f ? -b.scrollParent.scrollTop() : n ? 0 : m.scrollTop()), left: j - b.offset.click.left - b.offset.relative.left - b.offset.parent.left + (a.browser.safari && a.browser.version < 526 && b.cssPosition == f ? 0 : b.cssPosition == f ? -b.scrollParent.scrollLeft() : n ? 0 : m.scrollLeft())} }, _clear: function () { var a = this; a.helper.removeClass(s), a.helper[0] != a.element[0] && !a.cancelHelperRemoval && a.helper.remove(), a.helper = null, a.cancelHelperRemoval = !1 }, _trigger: function (d, f, c) { var b = this; return c = c || b._uiHash(), a.ui.plugin.call(b, d, [f, c]), d == q && (b.positionAbs = b._convertPositionTo(e)), a.Widget.prototype._trigger.call(b, d, f, c) }, plugins: {}, _uiHash: function () { var a = this; return { helper: a.helper, position: a.position, originalPosition: a.originalPosition, offset: a.positionAbs} } }), a.extend(a.ui.draggable, { version: "1.8.21" }), a.ui.plugin.add(c, "connectToSortable", { start: function (d, e) { var b = a(this).data(c), f = b.options, g = a.extend({}, e, { item: b.element }); b.sortables = [], a(f.connectToSortable).each(function () { var c = a.data(this, "sortable"); c && !c.options.disabled && (b.sortables.push({ instance: c, shouldRevert: c.options.revert }), c.refreshPositions(), c._trigger("activate", d, g)) }) }, stop: function (d, e) { var b = a(this).data(c), f = a.extend({}, e, { item: b.element }); a.each(b.sortables, function () { var a = this; a.instance.isOver ? (a.instance.isOver = 0, b.cancelHelperRemoval = !0, a.instance.cancelHelperRemoval = !1, a.shouldRevert && (a.instance.options.revert = !0), a.instance._mouseStop(d), a.instance.options.helper = a.instance.options._helper, b.options.helper == l && a.instance.currentItem.css({ top: n, left: n })) : (a.instance.cancelHelperRemoval = !1, a.instance._trigger("deactivate", d, f)) }) }, drag: function (d, e) { var b = a(this).data(c), f = this, g = function (c) { var b = this, d = b.offset.click.top, e = b.offset.click.left, f = b.positionAbs.top, g = b.positionAbs.left, h = c.height, i = c.width, j = c.top, k = c.left; return a.ui.isOver(f + d, g + e, j, k, h, i) }; a.each(b.sortables, function () { var c = this; c.instance.positionAbs = b.positionAbs, c.instance.helperProportions = b.helperProportions, c.instance.offset.click = b.offset.click, c.instance._intersectsWith(c.instance.containerCache) ? (c.instance.isOver || (c.instance.isOver = 1, c.instance.currentItem = a(f).clone().removeAttr("id").appendTo(c.instance.element).data("sortable-item", !0), c.instance.options._helper = c.instance.options.helper, c.instance.options.helper = function () { return e.helper[0] }, d.target = c.instance.currentItem[0], c.instance._mouseCapture(d, !0), c.instance._mouseStart(d, !0, !0), c.instance.offset.click.top = b.offset.click.top, c.instance.offset.click.left = b.offset.click.left, c.instance.offset.parent.left -= b.offset.parent.left - c.instance.offset.parent.left, c.instance.offset.parent.top -= b.offset.parent.top - c.instance.offset.parent.top, b._trigger("toSortable", d), b.dropped = c.instance.element, b.currentItem = b.element, c.instance.fromOutside = b), c.instance.currentItem && c.instance._mouseDrag(d)) : c.instance.isOver && (c.instance.isOver = 0, c.instance.cancelHelperRemoval = !0, c.instance.options.revert = !1, c.instance._trigger("out", d, c.instance._uiHash(c.instance)), c.instance._mouseStop(d, !0), c.instance.options.helper = c.instance.options._helper, c.instance.currentItem.remove(), c.instance.placeholder && c.instance.placeholder.remove(), b._trigger("fromSortable", d), b.dropped = !1) }) } }), a.ui.plugin.add(c, j, { start: function () { var b = a(i), d = a(this).data(c).options; b.css(j) && (d._cursor = b.css(j)), b.css(j, d.cursor) }, stop: function () { var b = a(this).data(c).options; b._cursor && a(i).css(j, b._cursor) } }), a.ui.plugin.add(c, k, { start: function (f, e) { var b = a(e.helper), d = a(this).data(c).options; b.css(k) && (d._opacity = b.css(k)), b.css(k, d.opacity) }, stop: function (e, d) { var b = a(this).data(c).options; b._opacity && a(d.helper).css(k, b._opacity) } }), a.ui.plugin.add(c, "scroll", { start: function () { var b = a(this).data(c); b.scrollParent[0] != document && b.scrollParent[0].tagName != "HTML" && (b.overflowOffset = b.scrollParent.offset()) }, drag: function (e) { var d = a(this).data(c), b = d.options, f = !1; if (d.scrollParent[0] != document && d.scrollParent[0].tagName != "HTML") { if (!b.axis || b.axis != "x") d.overflowOffset.top + d.scrollParent[0].offsetHeight - e.pageY < b.scrollSensitivity ? (d.scrollParent[0].scrollTop = f = d.scrollParent[0].scrollTop + b.scrollSpeed) : e.pageY - d.overflowOffset.top < b.scrollSensitivity && (d.scrollParent[0].scrollTop = f = d.scrollParent[0].scrollTop - b.scrollSpeed); if (!b.axis || b.axis != "y") d.overflowOffset.left + d.scrollParent[0].offsetWidth - e.pageX < b.scrollSensitivity ? (d.scrollParent[0].scrollLeft = f = d.scrollParent[0].scrollLeft + b.scrollSpeed) : e.pageX - d.overflowOffset.left < b.scrollSensitivity && (d.scrollParent[0].scrollLeft = f = d.scrollParent[0].scrollLeft - b.scrollSpeed) } else { if (!b.axis || b.axis != "x") e.pageY - a(document).scrollTop() < b.scrollSensitivity ? (f = a(document).scrollTop(a(document).scrollTop() - b.scrollSpeed)) : a(window).height() - (e.pageY - a(document).scrollTop()) < b.scrollSensitivity && (f = a(document).scrollTop(a(document).scrollTop() + b.scrollSpeed)); if (!b.axis || b.axis != "y") e.pageX - a(document).scrollLeft() < b.scrollSensitivity ? (f = a(document).scrollLeft(a(document).scrollLeft() - b.scrollSpeed)) : a(window).width() - (e.pageX - a(document).scrollLeft()) < b.scrollSensitivity && (f = a(document).scrollLeft(a(document).scrollLeft() + b.scrollSpeed)) } f !== !1 && a.ui.ddmanager && !b.dropBehaviour && a.ui.ddmanager.prepareOffsets(d, e) } }), a.ui.plugin.add(c, "snap", { start: function () { var b = a(this).data(c), d = b.options; b.snapElements = [], a(d.snap.constructor != String ? d.snap.items || ":data(draggable)" : d.snap).each(function () { var c = a(this), d = c.offset(); this != b.element[0] && b.snapElements.push({ item: this, width: c.outerWidth(), height: c.outerHeight(), top: d.top, left: d.left }) }) }, drag: function (u, g) { for (var b = a(this).data(c), t = b.options, e = t.snapTolerance, l = g.offset.left, n = l + b.helperProportions.width, m = g.offset.top, o = m + b.helperProportions.height, f = b.snapElements.length - 1; f >= 0; f--) { var h = b.snapElements[f].left, j = h + b.snapElements[f].width, i = b.snapElements[f].top, k = i + b.snapElements[f].height; if (!(h - e < l && l < j + e && i - e < m && m < k + e || h - e < l && l < j + e && i - e < o && o < k + e || h - e < n && n < j + e && i - e < m && m < k + e || h - e < n && n < j + e && i - e < o && o < k + e)) { b.snapElements[f].snapping && b.options.snap.release && b.options.snap.release.call(b.element, u, a.extend(b._uiHash(), { snapItem: b.snapElements[f].item })), b.snapElements[f].snapping = !1; continue } if (t.snapMode != "inner") { var p = Math.abs(i - o) <= e, q = Math.abs(k - m) <= e, r = Math.abs(h - n) <= e, s = Math.abs(j - l) <= e; p && (g.position.top = b._convertPositionTo(d, { top: i - b.helperProportions.height, left: 0 }).top - b.margins.top), q && (g.position.top = b._convertPositionTo(d, { top: k, left: 0 }).top - b.margins.top), r && (g.position.left = b._convertPositionTo(d, { top: 0, left: h - b.helperProportions.width }).left - b.margins.left), s && (g.position.left = b._convertPositionTo(d, { top: 0, left: j }).left - b.margins.left) } var v = p || q || r || s; if (t.snapMode != "outer") { var p = Math.abs(i - m) <= e, q = Math.abs(k - o) <= e, r = Math.abs(h - l) <= e, s = Math.abs(j - n) <= e; p && (g.position.top = b._convertPositionTo(d, { top: i, left: 0 }).top - b.margins.top), q && (g.position.top = b._convertPositionTo(d, { top: k - b.helperProportions.height, left: 0 }).top - b.margins.top), r && (g.position.left = b._convertPositionTo(d, { top: 0, left: h }).left - b.margins.left), s && (g.position.left = b._convertPositionTo(d, { top: 0, left: j - b.helperProportions.width }).left - b.margins.left) } !b.snapElements[f].snapping && (p || q || r || s || v) && b.options.snap.snap && b.options.snap.snap.call(b.element, u, a.extend(b._uiHash(), { snapItem: b.snapElements[f].item })), b.snapElements[f].snapping = p || q || r || s || v } } }), a.ui.plugin.add(c, "stack", { start: function () { var f = a(this).data(c).options, d = a.makeArray(a(f.stack)).sort(function (c, d) { return (parseInt(a(c).css(g), b) || 0) - (parseInt(a(d).css(g), b) || 0) }); if (!d.length) return; var e = parseInt(d[0].style.zIndex) || 0; a(d).each(function (a) { this.style.zIndex = e + a }), this[0].style.zIndex = e + d.length } }), a.ui.plugin.add(c, g, { start: function (f, e) { var b = a(e.helper), d = a(this).data(c).options; b.css(g) && (d._zIndex = b.css(g)), b.css(g, d.zIndex) }, stop: function (e, d) { var b = a(this).data(c).options; b._zIndex && a(d.helper).css(g, b._zIndex) } }) } (jQuery), function (a) { var e = "scroll.droppable", d = ":not(body,html)", c = ":data(droppable)", b = "droppable", f = "intersect"; a.widget("ui.droppable", { widgetEventPrefix: "drop", options: { accept: "*", activeClass: !1, addClasses: !0, greedy: !1, hoverClass: !1, scope: "default", tolerance: f }, _create: function () { var b = this, c = b.options, d = c.accept; b.isover = 0, b.isout = 1, b.accept = a.isFunction(d) ? d : function (a) { return a.is(d) }, b.proportions = { width: b.element[0].offsetWidth, height: b.element[0].offsetHeight }, a.ui.ddmanager.droppables[c.scope] = a.ui.ddmanager.droppables[c.scope] || [], a.ui.ddmanager.droppables[c.scope].push(b), c.addClasses && b.element.addClass("ui-droppable") }, destroy: function () { var c = this; for (var e = a.ui.ddmanager.droppables[c.options.scope], d = 0; d < e.length; d++) e[d] == c && e.splice(d, 1); return c.element.removeClass("ui-droppable ui-droppable-disabled").removeData(b).unbind(".droppable"), c }, _setOption: function (c, b) { c == "accept" && (this.accept = a.isFunction(b) ? b : function (a) { return a.is(b) }), a.Widget.prototype._setOption.apply(this, arguments) }, _activate: function (d) { var b = this, c = a.ui.ddmanager.current; b.options.activeClass && b.element.addClass(b.options.activeClass), c && b._trigger("activate", d, b.ui(c)) }, _deactivate: function (d) { var b = this, c = a.ui.ddmanager.current; b.options.activeClass && b.element.removeClass(b.options.activeClass), c && b._trigger("deactivate", d, b.ui(c)) }, _over: function (d) { var b = this, c = a.ui.ddmanager.current; if (!c || (c.currentItem || c.element)[0] == b.element[0]) return; b.accept.call(b.element[0], c.currentItem || c.element) && (b.options.hoverClass && b.element.addClass(b.options.hoverClass), b._trigger("over", d, b.ui(c))) }, _out: function (d) { var b = this, c = a.ui.ddmanager.current; if (!c || (c.currentItem || c.element)[0] == b.element[0]) return; b.accept.call(b.element[0], c.currentItem || c.element) && (b.options.hoverClass && b.element.removeClass(b.options.hoverClass), b._trigger("out", d, b.ui(c))) }, _drop: function (g, h) { var d = this, e = h || a.ui.ddmanager.current; if (!e || (e.currentItem || e.element)[0] == d.element[0]) return !1; var f = !1; return d.element.find(c).not(".ui-draggable-dragging").each(function () { var c = a.data(this, b); if (c.options.greedy && !c.options.disabled && c.options.scope == e.options.scope && c.accept.call(c.element[0], e.currentItem || e.element) && a.ui.intersect(e, a.extend(c, { offset: c.element.offset() }), c.options.tolerance)) return f = !0, !1 }), f ? !1 : d.accept.call(d.element[0], e.currentItem || e.element) ? (d.options.activeClass && d.element.removeClass(d.options.activeClass), d.options.hoverClass && d.element.removeClass(d.options.hoverClass), d._trigger("drop", g, d.ui(e)), d.element) : !1 }, ui: function (a) { return { draggable: a.currentItem || a.element, helper: a.helper, position: a.position, offset: a.positionAbs} } }), a.extend(a.ui.droppable, { version: "1.8.21" }), a.ui.intersect = function (b, c, m) { if (!c.offset) return !1; var g = (b.positionAbs || b.position.absolute).left, i = g + b.helperProportions.width, h = (b.positionAbs || b.position.absolute).top, j = h + b.helperProportions.height, d = c.offset.left, k = d + c.proportions.width, e = c.offset.top, l = e + c.proportions.height; switch (m) { case "fit": return d <= g && i <= k && e <= h && j <= l; case f: return d < g + b.helperProportions.width / 2 && i - b.helperProportions.width / 2 < k && e < h + b.helperProportions.height / 2 && j - b.helperProportions.height / 2 < l; case "pointer": var n = (b.positionAbs || b.position.absolute).left + (b.clickOffset || b.offset.click).left, o = (b.positionAbs || b.position.absolute).top + (b.clickOffset || b.offset.click).top, p = a.ui.isOver(o, n, e, d, c.proportions.height, c.proportions.width); return p; case "touch": return (h >= e && h <= l || j >= e && j <= l || h < e && j > l) && (g >= d && g <= k || i >= d && i <= k || g < d && i > k); default: return !1 } }, a.ui.ddmanager = { current: null, droppables: { "default": [] }, prepareOffsets: function (e, f) { var d = a.ui.ddmanager.droppables[e.options.scope] || [], i = f ? f.type : null, h = (e.currentItem || e.element).find(c).andSelf(); a: for (var b = 0; b < d.length; b++) { if (d[b].options.disabled || e && !d[b].accept.call(d[b].element[0], e.currentItem || e.element)) continue; for (var g = 0; g < h.length; g++) if (h[g] == d[b].element[0]) { d[b].proportions.height = 0; continue a } d[b].visible = d[b].element.css("display") != "none"; if (!d[b].visible) continue; i == "mousedown" && d[b]._activate.call(d[b], f), d[b].offset = d[b].element.offset(), d[b].proportions = { width: d[b].element[0].offsetWidth, height: d[b].element[0].offsetHeight} } }, drop: function (b, d) { var c = !1; return a.each(a.ui.ddmanager.droppables[b.options.scope] || [], function () { var e = this; if (!e.options) return; !e.options.disabled && e.visible && a.ui.intersect(b, e, e.options.tolerance) && (c = e._drop.call(e, d) || c), !e.options.disabled && e.visible && e.accept.call(e.element[0], b.currentItem || b.element) && (e.isout = 1, e.isover = 0, e._deactivate.call(e, d)) }), c }, dragStart: function (b, c) { b.element.parents(d).bind(e, function () { b.options.refreshPositions || a.ui.ddmanager.prepareOffsets(b, c) }) }, drag: function (c, d) { c.options.refreshPositions && a.ui.ddmanager.prepareOffsets(c, d), a.each(a.ui.ddmanager.droppables[c.options.scope] || [], function () { var e = "isover", g = "isout", f = this; if (f.options.disabled || f.greedyChild || !f.visible) return; var j = a.ui.intersect(c, f, f.options.tolerance), i = !j && f.isover == 1 ? g : j && f.isover == 0 ? e : null; if (!i) return; var h; if (f.options.greedy) { var k = f.element.parents(":data(droppable):eq(0)"); k.length && (h = a.data(k[0], b), h.greedyChild = i == e ? 1 : 0) } h && i == e && (h.isover = 0, h.isout = 1, h._out.call(h, d)), f[i] = 1, f[i == g ? e : g] = 0, f[i == e ? "_over" : "_out"].call(f, d), h && i == g && (h.isout = 0, h.isover = 1, h._over.call(h, d)) }) }, dragStop: function (b, c) { b.element.parents(d).unbind(e), b.options.refreshPositions || a.ui.ddmanager.prepareOffsets(b, c) } } } (jQuery), function (a) { var t = "relative", l = "height", k = "width", m = "resizable-alsoresize", j = "px", s = "ui-resizable-resizing", p = "body", o = "cursor", r = "absolute", q = ".ui-resizable-", n = ".ui-resizable-handle", c = "resizable", d = "left", f = "top", h = "position", b = 10, e = null, g = "resize"; a.widget("ui.resizable", a.ui.mouse, { widgetEventPrefix: g, options: { alsoResize: !1, animate: !1, animateDuration: "slow", animateEasing: "swing", aspectRatio: !1, autoHide: !1, containment: !1, ghost: !1, grid: !1, handles: "e,s,se", helper: !1, maxHeight: e, maxWidth: e, minHeight: b, minWidth: b, zIndex: 1e3 }, _create: function () { var j = "ui-resizable-autohide", b = this, k = b, i = b.options; b.element.addClass("ui-resizable"), a.extend(b, { _aspectRatio: !!i.aspectRatio, aspectRatio: i.aspectRatio, originalElement: b.element, _proportionallyResizeElements: [], _helper: i.helper || i.ghost || i.animate ? i.helper || "ui-resizable-helper" : e }), b.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i) && (b.element.wrap(a('<div class="ui-wrapper" style="overflow: hidden;"></div>').css({ position: b.element.css(h), width: b.element.outerWidth(), height: b.element.outerHeight(), top: b.element.css(f), left: b.element.css(d) })), b.element = b.element.parent().data(c, b.element.data(c)), b.elementIsWrapper = !0, b.element.css({ marginLeft: b.originalElement.css("marginLeft"), marginTop: b.originalElement.css("marginTop"), marginRight: b.originalElement.css("marginRight"), marginBottom: b.originalElement.css("marginBottom") }), b.originalElement.css({ marginLeft: 0, marginTop: 0, marginRight: 0, marginBottom: 0 }), b.originalResizeStyle = b.originalElement.css(g), b.originalElement.css(g, "none"), b._proportionallyResizeElements.push(b.originalElement.css({ position: "static", zoom: 1, display: "block" })), b.originalElement.css({ margin: b.originalElement.css("margin") }), b._proportionallyResize()), b.handles = i.handles || (a(n, b.element).length ? { n: ".ui-resizable-n", e: ".ui-resizable-e", s: ".ui-resizable-s", w: ".ui-resizable-w", se: ".ui-resizable-se", sw: ".ui-resizable-sw", ne: ".ui-resizable-ne", nw: ".ui-resizable-nw"} : "e,s,se"); if (b.handles.constructor == String) { b.handles == "all" && (b.handles = "n,e,s,w,se,sw,ne,nw"); var p = b.handles.split(","); b.handles = {}; for (var m = 0; m < p.length; m++) { var l = a.trim(p[m]), r = "ui-resizable-" + l, o = a('<div class="ui-resizable-handle ' + r + '"></div>'); o.css({ zIndex: i.zIndex }), "se" == l && o.addClass("ui-icon ui-icon-gripsmall-diagonal-se"), b.handles[l] = q + l, b.element.append(o) } } b._renderAxis = function (d) { var b = this; d = d || b.element; for (var c in b.handles) { b.handles[c].constructor == String && (b.handles[c] = a(b.handles[c], b.element).show()); if (b.elementIsWrapper && b.originalElement[0].nodeName.match(/textarea|input|select|button/i)) { var e = a(b.handles[c], b.element), f = 0; f = /sw|ne|nw|se|n|s/.test(c) ? e.outerHeight() : e.outerWidth(); var g = ["padding", /ne|nw|n/.test(c) ? "Top" : /se|sw|s/.test(c) ? "Bottom" : /^e$/.test(c) ? "Right" : "Left"].join(""); d.css(g, f), b._proportionallyResize() } if (!a(b.handles[c]).length) continue } }, b._renderAxis(b.element), b._handles = a(n, b.element).disableSelection(), b._handles.mouseover(function () { if (!k.resizing) { if (this.className) var a = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i); k.axis = a && a[1] ? a[1] : "se" } }), i.autoHide && (b._handles.hide(), a(b.element).addClass(j).hover(function () { if (i.disabled) return; a(this).removeClass(j), k._handles.show() }, function () { if (i.disabled) return; k.resizing || (a(this).addClass(j), k._handles.hide()) })), b._mouseInit() }, destroy: function () { var b = this; b._mouseDestroy(); var i = function (b) { a(b).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData(c).unbind(".resizable").find(n).remove() }; if (b.elementIsWrapper) { i(b.element); var e = b.element; e.after(b.originalElement.css({ position: e.css(h), width: e.outerWidth(), height: e.outerHeight(), top: e.css(f), left: e.css(d) })).remove() } return b.originalElement.css(g, b.originalResizeStyle), i(b.originalElement), b }, _mouseCapture: function (c) { var b = !1; for (var d in this.handles) a(this.handles[d])[0] == c.target && (b = !0); return !this.options.disabled && b }, _mouseStart: function (g) { var b = this, e = b.options, k = b.element.position(), c = b.element; b.resizing = !0, b.documentScroll = { top: a(document).scrollTop(), left: a(document).scrollLeft() }, (c.is(".ui-draggable") || /absolute/.test(c.css(h))) && c.css({ position: r, top: k.top, left: k.left }), b._renderProxy(); var i = u(b.helper.css(d)), j = u(b.helper.css(f)); e.containment && (i += a(e.containment).scrollLeft() || 0, j += a(e.containment).scrollTop() || 0), b.offset = b.helper.offset(), b.position = { left: i, top: j }, b.size = b._helper ? { width: c.outerWidth(), height: c.outerHeight()} : { width: c.width(), height: c.height() }, b.originalSize = b._helper ? { width: c.outerWidth(), height: c.outerHeight()} : { width: c.width(), height: c.height() }, b.originalPosition = { left: i, top: j }, b.sizeDiff = { width: c.outerWidth() - c.width(), height: c.outerHeight() - c.height() }, b.originalMousePosition = { left: g.pageX, top: g.pageY }, b.aspectRatio = typeof e.aspectRatio == "number" ? e.aspectRatio : b.originalSize.width / b.originalSize.height || 1; var l = a(q + b.axis).css(o); return a(p).css(o, l == "auto" ? b.axis + "-resize" : l), c.addClass(s), b._propagate("start", g), !0 }, _mouseDrag: function (c) { var b = this, h = b.helper, m = b.options, n = {}, o = b, e = b.originalMousePosition, i = b.axis, k = c.pageX - e.left || 0, l = c.pageY - e.top || 0, f = b._change[i]; if (!f) return !1; var d = f.apply(b, [c, k, l]), p = a.browser.msie && a.browser.version < 7, q = b.sizeDiff; b._updateVirtualBoundaries(c.shiftKey); if (b._aspectRatio || c.shiftKey) d = b._updateRatio(d, c); return d = b._respectSize(d, c), b._propagate(g, c), h.css({ top: b.position.top + j, left: b.position.left + j, width: b.size.width + j, height: b.size.height + j }), !b._helper && b._proportionallyResizeElements.length && b._proportionallyResize(), b._updateCache(d), b._trigger(g, c, b.ui()), !1 }, _mouseStop: function (k) { var g = this; g.resizing = !1; var i = g.options, c = g; if (g._helper) { var h = g._proportionallyResizeElements, j = h.length && /textarea/i.test(h[0].nodeName), l = j && a.ui.hasScroll(h[0], d) ? 0 : c.sizeDiff.height, m = j ? 0 : c.sizeDiff.width, n = { width: c.helper.width() - m, height: c.helper.height() - l }, q = parseInt(c.element.css(d), b) + (c.position.left - c.originalPosition.left) || e, r = parseInt(c.element.css(f), b) + (c.position.top - c.originalPosition.top) || e; i.animate || g.element.css(a.extend(n, { top: r, left: q })), c.helper.height(c.size.height), c.helper.width(c.size.width), g._helper && !i.animate && g._proportionallyResize() } return a(p).css(o, "auto"), g.element.removeClass(s), g._propagate("stop", k), g._helper && g.helper.remove(), !1 }, _updateVirtualBoundaries: function (h) { var c = this, b = c.options, d, e, f, g, a; a = { minWidth: i(b.minWidth) ? b.minWidth : 0, maxWidth: i(b.maxWidth) ? b.maxWidth : Infinity, minHeight: i(b.minHeight) ? b.minHeight : 0, maxHeight: i(b.maxHeight) ? b.maxHeight : Infinity }; if (c._aspectRatio || h) d = a.minHeight * c.aspectRatio, f = a.minWidth / c.aspectRatio, e = a.maxHeight * c.aspectRatio, g = a.maxWidth / c.aspectRatio, d > a.minWidth && (a.minWidth = d), f > a.minHeight && (a.minHeight = f), e < a.maxWidth && (a.maxWidth = e), g < a.maxHeight && (a.maxHeight = g); c._vBoundaries = a }, _updateCache: function (a) { var b = this, c = b.options; b.offset = b.helper.offset(), i(a.left) && (b.position.left = a.left), i(a.top) && (b.position.top = a.top), i(a.height) && (b.size.height = a.height), i(a.width) && (b.size.width = a.width) }, _updateRatio: function (a) { var b = this, h = b.options, c = b.position, d = b.size, f = b.axis; return i(a.height) ? (a.width = a.height * b.aspectRatio) : i(a.width) && (a.height = a.width / b.aspectRatio), f == "sw" && (a.left = c.left + (d.width - a.width), a.top = e), f == "nw" && (a.top = c.top + (d.height - a.height), a.left = c.left + (d.width - a.width)), a }, _respectSize: function (a, p) { var c = this, q = c.helper, b = c._vBoundaries, r = c._aspectRatio || p.shiftKey, d = c.axis, f = i(a.width) && b.maxWidth && b.maxWidth < a.width, g = i(a.height) && b.maxHeight && b.maxHeight < a.height, h = i(a.width) && b.minWidth && b.minWidth > a.width, j = i(a.height) && b.minHeight && b.minHeight > a.height; h && (a.width = b.minWidth), j && (a.height = b.minHeight), f && (a.width = b.maxWidth), g && (a.height = b.maxHeight); var k = c.originalPosition.left + c.originalSize.width, l = c.position.top + c.size.height, m = /sw|nw|w/.test(d), n = /nw|ne|n/.test(d); h && m && (a.left = k - b.minWidth), f && m && (a.left = k - b.maxWidth), j && n && (a.top = l - b.minHeight), g && n && (a.top = l - b.maxHeight); var o = !a.width && !a.height; return o && !a.left && a.top ? (a.top = e) : o && !a.top && a.left && (a.left = e), a }, _proportionallyResize: function () { var c = this, i = c.options; if (!c._proportionallyResizeElements.length) return; for (var e = c.helper || c.element, f = 0; f < c._proportionallyResizeElements.length; f++) { var d = c._proportionallyResizeElements[f]; if (!c.borderDif) { var g = [d.css("borderTopWidth"), d.css("borderRightWidth"), d.css("borderBottomWidth"), d.css("borderLeftWidth")], h = [d.css("paddingTop"), d.css("paddingRight"), d.css("paddingBottom"), d.css("paddingLeft")]; c.borderDif = a.map(g, function (a, c) { var d = parseInt(a, b) || 0, e = parseInt(h[c], b) || 0; return d + e }) } if (!a.browser.msie || !a(e).is(":hidden") && !a(e).parents(":hidden").length) d.css({ height: e.height() - c.borderDif[0] - c.borderDif[2] || 0, width: e.width() - c.borderDif[1] - c.borderDif[3] || 0 }); else continue } }, _renderProxy: function () { var b = this, f = b.element, g = b.options; b.elementOffset = f.offset(); if (b._helper) { b.helper = b.helper || a('<div style="overflow:hidden;"></div>'); var c = a.browser.msie && a.browser.version < 7, d = c ? 1 : 0, e = c ? 2 : -1; b.helper.addClass(b._helper).css({ width: b.element.outerWidth() + e, height: b.element.outerHeight() + e, position: r, left: b.elementOffset.left - d + j, top: b.elementOffset.top - d + j, zIndex: ++g.zIndex }), b.helper.appendTo(p).disableSelection() } else b.helper = b.element }, _change: { e: function (b, a) { return { width: this.originalSize.width + a} }, w: function (d, a) { var f = this.options, b = this.originalSize, c = this.originalPosition; return { left: c.left + a, width: b.width - a} }, n: function (d, e, a) { var f = this.options, b = this.originalSize, c = this.originalPosition; return { top: c.top + a, height: b.height - a} }, s: function (b, c, a) { return { height: this.originalSize.height + a} }, se: function (c, d, e) { var b = this; return a.extend(b._change.s.apply(b, arguments), b._change.e.apply(b, [c, d, e])) }, sw: function (c, d, e) { var b = this; return a.extend(b._change.s.apply(b, arguments), b._change.w.apply(b, [c, d, e])) }, ne: function (c, d, e) { var b = this; return a.extend(b._change.n.apply(b, arguments), b._change.e.apply(b, [c, d, e])) }, nw: function (c, d, e) { var b = this; return a.extend(b._change.n.apply(b, arguments), b._change.w.apply(b, [c, d, e])) } }, _propagate: function (c, d) { var b = this; a.ui.plugin.call(b, c, [d, b.ui()]), c != g && b._trigger(c, d, b.ui()) }, plugins: {}, ui: function () { var a = this; return { originalElement: a.originalElement, element: a.element, helper: a.helper, position: a.position, size: a.size, originalSize: a.originalSize, originalPosition: a.originalPosition} } }), a.extend(a.ui.resizable, { version: "1.8.21" }), a.ui.plugin.add(c, "alsoResize", { start: function () { var h = a(this).data(c), e = h.options, g = function (c) { a(c).each(function () { var c = a(this); c.data(m, { width: parseInt(c.width(), b), height: parseInt(c.height(), b), left: parseInt(c.css(d), b), top: parseInt(c.css(f), b) }) }) }; typeof e.alsoResize == "object" && !e.alsoResize.parentNode ? e.alsoResize.length ? (e.alsoResize = e.alsoResize[0], g(e.alsoResize)) : a.each(e.alsoResize, function (a) { g(a) }) : g(e.alsoResize) }, resize: function (p, n) { var b = a(this).data(c), g = b.options, h = b.originalSize, i = b.originalPosition, o = { height: b.size.height - h.height || 0, width: b.size.width - h.width || 0, top: b.position.top - i.top || 0, left: b.position.left - i.left || 0 }, j = function (c, b) { a(c).each(function () { var c = a(this), h = a(this).data(m), g = {}, i = b && b.length ? b : c.parents(n.originalElement[0]).length ? [k, l] : [k, l, f, d]; a.each(i, function (c, a) { var b = (h[a] || 0) + (o[a] || 0); b && b >= 0 && (g[a] = b || e) }), c.css(g) }) }; typeof g.alsoResize == "object" && !g.alsoResize.nodeType ? a.each(g.alsoResize, function (a, b) { j(a, b) }) : j(g.alsoResize) }, stop: function () { a(this).removeData(m) } }), a.ui.plugin.add(c, "animate", { stop: function (p) { var h = a(this).data(c), j = h.options, i = h._proportionallyResizeElements, m = i.length && /textarea/i.test(i[0].nodeName), q = m && a.ui.hasScroll(i[0], d) ? 0 : h.sizeDiff.height, r = m ? 0 : h.sizeDiff.width, s = { width: h.size.width - r, height: h.size.height - q }, n = parseInt(h.element.css(d), b) + (h.position.left - h.originalPosition.left) || e, o = parseInt(h.element.css(f), b) + (h.position.top - h.originalPosition.top) || e; h.element.animate(a.extend(s, o && n ? { top: o, left: n} : {}), { duration: j.animateDuration, easing: j.animateEasing, step: function () { var c = { width: parseInt(h.element.css(k), b), height: parseInt(h.element.css(l), b), top: parseInt(h.element.css(f), b), left: parseInt(h.element.css(d), b) }; i && i.length && a(i[0]).css({ width: c.width, height: c.height }), h._updateCache(c), h._propagate(g, p) } }) } }), a.ui.plugin.add(c, "containment", { start: function () { var b = a(this).data(c), j = b.options, k = b.element, f = j.containment, e = f instanceof a ? f.get(0) : /parent/.test(f) ? k.parent().get(0) : f; if (!e) return; b.containerElement = a(e); if (/document/.test(f) || f == document) b.containerOffset = { left: 0, top: 0 }, b.containerPosition = { left: 0, top: 0 }, b.parentData = { element: a(document), left: 0, top: 0, width: a(document).width(), height: a(document).height() || document.body.parentNode.scrollHeight }; else { var g = a(e), h = []; a(["Top", "Right", "Left", "Bottom"]).each(function (a, b) { h[a] = u(g.css("padding" + b)) }), b.containerOffset = g.offset(), b.containerPosition = g.position(), b.containerSize = { height: g.innerHeight() - h[3], width: g.innerWidth() - h[1] }; var i = b.containerOffset, l = b.containerSize.height, m = b.containerSize.width, n = a.ui.hasScroll(e, d) ? e.scrollWidth : m, o = a.ui.hasScroll(e) ? e.scrollHeight : l; b.parentData = { element: e, left: i.left, top: i.top, width: n, height: o} } }, resize: function (l) { var b = a(this).data(c), m = b.options, q = b.containerSize, d = b.containerOffset, r = b.size, i = b.position, f = b._aspectRatio || l.shiftKey, e = { top: 0, left: 0 }, j = b.containerElement; j[0] != document && /static/.test(j.css(h)) && (e = d), i.left < (b._helper ? d.left : 0) && (b.size.width = b.size.width + (b._helper ? b.position.left - d.left : b.position.left - e.left), f && (b.size.height = b.size.width / b.aspectRatio), b.position.left = m.helper ? d.left : 0), i.top < (b._helper ? d.top : 0) && (b.size.height = b.size.height + (b._helper ? b.position.top - d.top : b.position.top), f && (b.size.width = b.size.height * b.aspectRatio), b.position.top = b._helper ? d.top : 0), b.offset.left = b.parentData.left + b.position.left, b.offset.top = b.parentData.top + b.position.top; var g = Math.abs((b._helper ? b.offset.left - e.left : b.offset.left - e.left) + b.sizeDiff.width), k = Math.abs((b._helper ? b.offset.top - e.top : b.offset.top - d.top) + b.sizeDiff.height), n = b.containerElement.get(0) == b.element.parent().get(0), o = /relative|absolute/.test(b.containerElement.css(h)); n && o && (g -= b.parentData.left), g + b.size.width >= b.parentData.width && (b.size.width = b.parentData.width - g, f && (b.size.height = b.size.width / b.aspectRatio)), k + b.size.height >= b.parentData.height && (b.size.height = b.parentData.height - k, f && (b.size.width = b.size.height * b.aspectRatio)) }, stop: function () { var b = a(this).data(c), e = b.options, o = b.position, f = b.containerOffset, g = b.containerPosition, i = b.containerElement, d = a(b.helper), j = d.offset(), k = d.outerWidth() - b.sizeDiff.width, l = d.outerHeight() - b.sizeDiff.height; b._helper && !e.animate && /relative/.test(i.css(h)) && a(this).css({ left: j.left - g.left - f.left, width: k, height: l }), b._helper && !e.animate && /static/.test(i.css(h)) && a(this).css({ left: j.left - g.left - f.left, width: k, height: l }) } }), a.ui.plugin.add(c, "ghost", { start: function () { var b = a(this).data(c), d = b.options, e = b.size; b.ghost = b.originalElement.clone(), b.ghost.css({ opacity: .25, display: "block", position: t, height: e.height, width: e.width, margin: 0, left: 0, top: 0 }).addClass("ui-resizable-ghost").addClass(typeof d.ghost == "string" ? d.ghost : ""), b.ghost.appendTo(b.helper) }, resize: function () { var b = a(this).data(c), f = b.options; b.ghost && b.ghost.css({ position: t, height: b.size.height, width: b.size.width }) }, stop: function () { var b = a(this).data(c), f = b.options; b.ghost && b.helper && b.helper.get(0).removeChild(b.ghost.get(0)) } }), a.ui.plugin.add(c, "grid", { resize: function (k) { var b = a(this).data(c), d = b.options, j = b.size, e = b.originalSize, h = b.originalPosition, i = b.axis, m = d._aspectRatio || k.shiftKey; d.grid = typeof d.grid == "number" ? [d.grid, d.grid] : d.grid; var f = Math.round((j.width - e.width) / (d.grid[0] || 1)) * (d.grid[0] || 1), g = Math.round((j.height - e.height) / (d.grid[1] || 1)) * (d.grid[1] || 1); /^(se|s|e)$/.test(i) ? (b.size.width = e.width + f, b.size.height = e.height + g) : /^(ne)$/.test(i) ? (b.size.width = e.width + f, b.size.height = e.height + g, b.position.top = h.top - g) : /^(sw)$/.test(i) ? (b.size.width = e.width + f, b.size.height = e.height + g, b.position.left = h.left - f) : (b.size.width = e.width + f, b.size.height = e.height + g, b.position.top = h.top - g, b.position.left = h.left - f) } }); var u = function (a) { return parseInt(a, b) || 0 }, i = function (a) { return !isNaN(parseInt(a, b)) } } (jQuery), function (e) { var h = "selecting", f = "unselecting", b = "ui-unselecting", d = "ui-selecting", a = "ui-selected", c = "selectable-item", g = "ui-selectee"; e.widget("ui.selectable", e.ui.mouse, { options: { appendTo: "body", autoRefresh: !0, distance: 0, filter: "*", tolerance: "touch" }, _create: function () { var f = this, i = f; f.element.addClass("ui-selectable"), f.dragged = !1; var h; f.refresh = function () { h = e(i.options.filter, i.element[0]), h.addClass(g), h.each(function () { var f = e(this), g = f.offset(); e.data(this, c, { element: this, $element: f, left: g.left, top: g.top, right: g.left + f.outerWidth(), bottom: g.top + f.outerHeight(), startselected: !1, selected: f.hasClass(a), selecting: f.hasClass(d), unselecting: f.hasClass(b) }) }) }, f.refresh(), f.selectees = h.addClass(g), f._mouseInit(), f.helper = e("<div class='ui-selectable-helper'></div>") }, destroy: function () { var a = this; return a.selectees.removeClass(g).removeData(c), a.element.removeClass("ui-selectable ui-selectable-disabled").removeData("selectable").unbind(".selectable"), a._mouseDestroy(), a }, _mouseStart: function (g) { var i = this, j = i; i.opos = [g.pageX, g.pageY]; if (i.options.disabled) return; var k = i.options; i.selectees = e(k.filter, i.element[0]), i._trigger("start", g), e(k.appendTo).append(i.helper), i.helper.css({ left: g.clientX, top: g.clientY, width: 0, height: 0 }), k.autoRefresh && i.refresh(), i.selectees.filter(".ui-selected").each(function () { var d = e.data(this, c); d.startselected = !0, !g.metaKey && !g.ctrlKey && (d.$element.removeClass(a), d.selected = !1, d.$element.addClass(b), d.unselecting = !0, j._trigger(f, g, { unselecting: d.element })) }), e(g.target).parents().andSelf().each(function () { var i = e.data(this, c); if (i) { var k = !g.metaKey && !g.ctrlKey || !i.$element.hasClass(a); return i.$element.removeClass(k ? b : a).addClass(k ? d : b), i.unselecting = !k, i.selecting = k, i.selected = k, k ? j._trigger(h, g, { selecting: i.element }) : j._trigger(f, g, { unselecting: i.element }), !1 } }) }, _mouseDrag: function (g) { var i = this, n = i; i.dragged = !0; if (i.options.disabled) return; var o = i.options, j = i.opos[0], k = i.opos[1], l = g.pageX, m = g.pageY; if (j > l) { var p = l; l = j, j = p } if (k > m) { var p = m; m = k, k = p } return i.helper.css({ left: j, top: k, width: l - j, height: m - k }), i.selectees.each(function () { var i = e.data(this, c); if (!i || i.element == n.element[0]) return; var p = !1; o.tolerance == "touch" ? (p = !(i.left > l || i.right < j || i.top > m || i.bottom < k)) : o.tolerance == "fit" && (p = i.left > j && i.right < l && i.top > k && i.bottom < m), p ? (i.selected && (i.$element.removeClass(a), i.selected = !1), i.unselecting && (i.$element.removeClass(b), i.unselecting = !1), i.selecting || (i.$element.addClass(d), i.selecting = !0, n._trigger(h, g, { selecting: i.element }))) : (i.selecting && ((g.metaKey || g.ctrlKey) && i.startselected ? (i.$element.removeClass(d), i.selecting = !1, i.$element.addClass(a), i.selected = !0) : (i.$element.removeClass(d), i.selecting = !1, i.startselected && (i.$element.addClass(b), i.unselecting = !0), n._trigger(f, g, { unselecting: i.element }))), i.selected && !g.metaKey && !g.ctrlKey && !i.startselected && (i.$element.removeClass(a), i.selected = !1, i.$element.addClass(b), i.unselecting = !0, n._trigger(f, g, { unselecting: i.element }))) }), !1 }, _mouseStop: function (g) { var f = this, h = f; f.dragged = !1; var i = f.options; return e(".ui-unselecting", f.element[0]).each(function () { var a = e.data(this, c); a.$element.removeClass(b), a.unselecting = !1, a.startselected = !1, h._trigger("unselected", g, { unselected: a.element }) }), e(".ui-selecting", f.element[0]).each(function () { var b = e.data(this, c); b.$element.removeClass(d).addClass(a), b.selecting = !1, b.selected = !0, b.startselected = !0, h._trigger("selected", g, { selected: b.element }) }), f._trigger("stop", g), f.helper.remove(), !1 } }), e.extend(e.ui.selectable, { version: "1.8.21" }) } (jQuery), function (a) { var d = "fixed", E = "relative", w = "borderLeftWidth", v = "borderTopWidth", p = "top", D = "paddingRight", C = "paddingLeft", B = "paddingBottom", A = "paddingTop", u = ".ui-sortable-helper", g = "left", o = "right", t = "deactivate", b = 10, s = "change", r = "pointer", n = "up", f = "down", j = "ui-sortable-helper", m = "zIndex", l = "opacity", k = "cursor", h = "body", e = "absolute", q = "position", c = null, i = "-item", z = "original", y = "auto", x = "parent"; a.widget("ui.sortable", a.ui.mouse, { widgetEventPrefix: "sort", ready: !1, options: { appendTo: x, axis: !1, connectWith: !1, containment: !1, cursor: y, cursorAt: !1, dropOnEmpty: !0, forcePlaceholderSize: !1, forceHelperSize: !1, grid: !1, handle: !1, helper: z, items: "> *", opacity: !1, placeholder: !1, revert: !1, scroll: !0, scrollSensitivity: 20, scrollSpeed: 20, scope: "default", tolerance: "intersect", zIndex: 1e3 }, _create: function () { var a = this, b = a.options; a.containerCache = {}, a.element.addClass("ui-sortable"), a.refresh(), a.floating = a.items.length ? b.axis === "x" || /left|right/.test(a.items[0].item.css("float")) || /inline|table-cell/.test(a.items[0].item.css("display")) : !1, a.offset = a.element.offset(), a._mouseInit(), a.ready = !0 }, destroy: function () { var b = this; a.Widget.prototype.destroy.call(b), b.element.removeClass("ui-sortable ui-sortable-disabled"), b._mouseDestroy(); for (var c = b.items.length - 1; c >= 0; c--) b.items[c].item.removeData(b.widgetName + i); return b }, _setOption: function (b, c) { b === "disabled" ? (this.options[b] = c, this.widget()[c ? "addClass" : "removeClass"]("ui-sortable-disabled")) : a.Widget.prototype._setOption.apply(this, arguments) }, _mouseCapture: function (d, j) { var b = this, f = b; if (b.reverting) return !1; if (b.options.disabled || b.options.type == "static") return !1; b._refreshItems(d); var e = c, g = b, k = a(d.target).parents().each(function () { if (a.data(this, f.widgetName + i) == g) return e = a(this), !1 }); a.data(d.target, f.widgetName + i) == g && (e = a(d.target)); if (!e) return !1; if (b.options.handle && !j) { var h = !1; a(b.options.handle, e).find("*").andSelf().each(function () { this == d.target && (h = !0) }); if (!h) return !1 } return b.currentItem = e, b._removeCurrentsFromItems(), !0 }, _mouseStart: function (c, n, g) { var b = this, d = b.options, i = b; b.currentContainer = b, b.refreshPositions(), b.helper = b._createHelper(c), b._cacheHelperProportions(), b._cacheMargins(), b.scrollParent = b.helper.scrollParent(), b.offset = b.currentItem.offset(), b.offset = { top: b.offset.top - b.margins.top, left: b.offset.left - b.margins.left }, a.extend(b.offset, { click: { left: c.pageX - b.offset.left, top: c.pageY - b.offset.top }, parent: b._getParentOffset(), relative: b._getRelativeOffset() }), b.helper.css(q, e), b.cssPosition = b.helper.css(q), b.originalPosition = b._generatePosition(c), b.originalPageX = c.pageX, b.originalPageY = c.pageY, d.cursorAt && b._adjustOffsetFromHelper(d.cursorAt), b.domPosition = { prev: b.currentItem.prev()[0], parent: b.currentItem.parent()[0] }, b.helper[0] != b.currentItem[0] && b.currentItem.hide(), b._createPlaceholder(), d.containment && b._setContainment(), d.cursor && (a(h).css(k) && (b._storedCursor = a(h).css(k)), a(h).css(k, d.cursor)), d.opacity && (b.helper.css(l) && (b._storedOpacity = b.helper.css(l)), b.helper.css(l, d.opacity)), d.zIndex && (b.helper.css(m) && (b._storedZIndex = b.helper.css(m)), b.helper.css(m, d.zIndex)), b.scrollParent[0] != document && b.scrollParent[0].tagName != "HTML" && (b.overflowOffset = b.scrollParent.offset()), b._trigger("start", c, b._uiHash()), b._preserveHelperProportions || b._cacheHelperProportions(); if (!g) for (var f = b.containers.length - 1; f >= 0; f--) b.containers[f]._trigger("activate", c, i._uiHash(b)); return a.ui.ddmanager && (a.ui.ddmanager.current = b), a.ui.ddmanager && !d.dropBehaviour && a.ui.ddmanager.prepareOffsets(b, c), b.dragging = !0, b.helper.addClass(j), b._mouseDrag(c), !0 }, _mouseDrag: function (d) { var b = this; b.position = b._generatePosition(d), b.positionAbs = b._convertPositionTo(e), b.lastPositionAbs || (b.lastPositionAbs = b.positionAbs); if (b.options.scroll) { var c = b.options, g = !1; b.scrollParent[0] != document && b.scrollParent[0].tagName != "HTML" ? (b.overflowOffset.top + b.scrollParent[0].offsetHeight - d.pageY < c.scrollSensitivity ? (b.scrollParent[0].scrollTop = g = b.scrollParent[0].scrollTop + c.scrollSpeed) : d.pageY - b.overflowOffset.top < c.scrollSensitivity && (b.scrollParent[0].scrollTop = g = b.scrollParent[0].scrollTop - c.scrollSpeed), b.overflowOffset.left + b.scrollParent[0].offsetWidth - d.pageX < c.scrollSensitivity ? (b.scrollParent[0].scrollLeft = g = b.scrollParent[0].scrollLeft + c.scrollSpeed) : d.pageX - b.overflowOffset.left < c.scrollSensitivity && (b.scrollParent[0].scrollLeft = g = b.scrollParent[0].scrollLeft - c.scrollSpeed)) : (d.pageY - a(document).scrollTop() < c.scrollSensitivity ? (g = a(document).scrollTop(a(document).scrollTop() - c.scrollSpeed)) : a(window).height() - (d.pageY - a(document).scrollTop()) < c.scrollSensitivity && (g = a(document).scrollTop(a(document).scrollTop() + c.scrollSpeed)), d.pageX - a(document).scrollLeft() < c.scrollSensitivity ? (g = a(document).scrollLeft(a(document).scrollLeft() - c.scrollSpeed)) : a(window).width() - (d.pageX - a(document).scrollLeft()) < c.scrollSensitivity && (g = a(document).scrollLeft(a(document).scrollLeft() + c.scrollSpeed))), g !== !1 && a.ui.ddmanager && !c.dropBehaviour && a.ui.ddmanager.prepareOffsets(b, d) } b.positionAbs = b._convertPositionTo(e); if (!b.options.axis || b.options.axis != "y") b.helper[0].style.left = b.position.left + "px"; if (!b.options.axis || b.options.axis != "x") b.helper[0].style.top = b.position.top + "px"; for (var j = b.items.length - 1; j >= 0; j--) { var h = b.items[j], i = h.item[0], k = b._intersectsWithPointer(h); if (!k) continue; if (i != b.currentItem[0] && b.placeholder[k == 1 ? "next" : "prev"]()[0] != i && !a.ui.contains(b.placeholder[0], i) && (b.options.type == "semi-dynamic" ? !a.ui.contains(b.element[0], i) : !0)) { b.direction = k == 1 ? f : n; if (b.options.tolerance == r || b._intersectsWithSides(h)) b._rearrange(d, h); else break; b._trigger(s, d, b._uiHash()); break } } return b._contactContainers(d), a.ui.ddmanager && a.ui.ddmanager.drag(b, d), b._trigger("sort", d, b._uiHash()), b.lastPositionAbs = b.positionAbs, !1 }, _mouseStop: function (e, g) { var c = this; if (!e) return; a.ui.ddmanager && !c.options.dropBehaviour && a.ui.ddmanager.drop(c, e); if (c.options.revert) { var d = c, f = d.placeholder.offset(); d.reverting = !0, a(c.helper).animate({ left: f.left - c.offset.parent.left - d.margins.left + (c.offsetParent[0] == document.body ? 0 : c.offsetParent[0].scrollLeft), top: f.top - c.offset.parent.top - d.margins.top + (c.offsetParent[0] == document.body ? 0 : c.offsetParent[0].scrollTop) }, parseInt(c.options.revert, b) || 500, function () { d._clear(e) }) } else c._clear(e, g); return !1 }, cancel: function () { var b = this, e = b; if (b.dragging) { b._mouseUp({ target: c }), b.options.helper == z ? b.currentItem.css(b._storedCSS).removeClass(j) : b.currentItem.show(); for (var d = b.containers.length - 1; d >= 0; d--) b.containers[d]._trigger(t, c, e._uiHash(b)), b.containers[d].containerCache.over && (b.containers[d]._trigger("out", c, e._uiHash(b)), b.containers[d].containerCache.over = 0) } return b.placeholder && (b.placeholder[0].parentNode && b.placeholder[0].parentNode.removeChild(b.placeholder[0]), b.options.helper != z && b.helper && b.helper[0].parentNode && b.helper.remove(), a.extend(b, { helper: c, dragging: !1, reverting: !1, _noFinalSort: c }), b.domPosition.prev ? a(b.domPosition.prev).after(b.currentItem) : a(b.domPosition.parent).prepend(b.currentItem)), b }, serialize: function (b) { var d = this._getItemsAsjQuery(b && b.connected), c = []; return b = b || {}, a(d).each(function () { var d = (a(b.item || this).attr(b.attribute || "id") || "").match(b.expression || /(.+)[-=_](.+)/); d && c.push((b.key || d[1] + "[]") + "=" + (b.key && b.expression ? d[1] : d[2])) }), !c.length && b.key && c.push(b.key + "="), c.join("&") }, toArray: function (b) { var d = this._getItemsAsjQuery(b && b.connected), c = []; return b = b || {}, d.each(function () { c.push(a(b.item || this).attr(b.attribute || "id") || "") }), c }, _intersectsWith: function (b) { var a = this, c = a.positionAbs.left, k = c + a.helperProportions.width, d = a.positionAbs.top, l = d + a.helperProportions.height, e = b.left, g = e + b.width, f = b.top, h = f + b.height, i = a.offset.click.top, j = a.offset.click.left, m = d + i > f && d + i < h && c + j > e && c + j < g; return a.options.tolerance == r || a.options.forcePointerForContainers || a.options.tolerance != r && a.helperProportions[a.floating ? "width" : "height"] > b[a.floating ? "width" : "height"] ? m : e < c + a.helperProportions.width / 2 && k - a.helperProportions.width / 2 < g && f < d + a.helperProportions.height / 2 && l - a.helperProportions.height / 2 < h }, _intersectsWithPointer: function (c) { var b = this, g = b.options.axis === "x" || a.ui.isOverAxis(b.positionAbs.top + b.offset.click.top, c.top, c.height), h = b.options.axis === "y" || a.ui.isOverAxis(b.positionAbs.left + b.offset.click.left, c.left, c.width), i = g && h, d = b._getDragVerticalDirection(), e = b._getDragHorizontalDirection(); return i ? b.floating ? e && e == o || d == f ? 2 : 1 : d && (d == f ? 2 : 1) : !1 }, _intersectsWithSides: function (c) { var b = this, h = a.ui.isOverAxis(b.positionAbs.top + b.offset.click.top, c.top + c.height / 2, c.height), i = a.ui.isOverAxis(b.positionAbs.left + b.offset.click.left, c.left + c.width / 2, c.width), d = b._getDragVerticalDirection(), e = b._getDragHorizontalDirection(); return b.floating && e ? e == o && i || e == g && !i : d && (d == f && h || d == n && !h) }, _getDragVerticalDirection: function () { var a = this.positionAbs.top - this.lastPositionAbs.top; return a != 0 && (a > 0 ? f : n) }, _getDragHorizontalDirection: function () { var a = this.positionAbs.left - this.lastPositionAbs.left; return a != 0 && (a > 0 ? o : g) }, refresh: function (a) { return this._refreshItems(a), this.refreshPositions(), this }, _connectWith: function () { var a = this.options; return a.connectWith.constructor == String ? [a.connectWith] : a.connectWith }, _getItemsAsjQuery: function (l) { var f = ".ui-sortable-placeholder", b = this, m = b, j = [], g = [], h = b._connectWith(); if (h && l) for (var e = h.length - 1; e >= 0; e--) for (var k = a(h[e]), i = k.length - 1; i >= 0; i--) { var d = a.data(k[i], b.widgetName); d && d != b && !d.options.disabled && g.push([a.isFunction(d.options.items) ? d.options.items.call(d.element) : a(d.options.items, d.element).not(u).not(f), d]) } g.push([a.isFunction(b.options.items) ? b.options.items.call(b.element, c, { options: b.options, item: b.currentItem }) : a(b.options.items, b.element).not(u).not(f), b]); for (var e = g.length - 1; e >= 0; e--) g[e][0].each(function () { j.push(this) }); return a(j) }, _removeCurrentsFromItems: function () { var a = this; for (var d = a.currentItem.find(":data(" + a.widgetName + "-item)"), b = 0; b < a.items.length; b++) for (var c = 0; c < d.length; c++) d[c] == a.items[b].item[0] && a.items.splice(b, 1) }, _refreshItems: function (h) { var b = this; b.items = [], b.containers = [b]; var n = b.items, p = b, f = [[a.isFunction(b.options.items) ? b.options.items.call(b.element[0], h, { item: b.currentItem }) : a(b.options.items, b.element), b]], g = b._connectWith(); if (g && b.ready) for (var d = g.length - 1; d >= 0; d--) for (var j = a(g[d]), e = j.length - 1; e >= 0; e--) { var c = a.data(j[e], b.widgetName); c && c != b && !c.options.disabled && (f.push([a.isFunction(c.options.items) ? c.options.items.call(c.element[0], h, { item: b.currentItem }) : a(c.options.items, c.element), c]), b.containers.push(c)) } for (var d = f.length - 1; d >= 0; d--) for (var k = f[d][1], l = f[d][0], e = 0, o = l.length; e < o; e++) { var m = a(l[e]); m.data(b.widgetName + i, k), n.push({ item: m, instance: k, width: 0, height: 0, left: 0, top: 0 }) } }, refreshPositions: function (g) { var b = this; b.offsetParent && b.helper && (b.offset.parent = b._getParentOffset()); for (var c = b.items.length - 1; c >= 0; c--) { var d = b.items[c]; if (d.instance != b.currentContainer && b.currentContainer && d.item[0] != b.currentItem[0]) continue; var f = b.options.toleranceElement ? a(b.options.toleranceElement, d.item) : d.item; g || (d.width = f.outerWidth(), d.height = f.outerHeight()); var e = f.offset(); d.left = e.left, d.top = e.top } if (b.options.custom && b.options.custom.refreshContainers) b.options.custom.refreshContainers.call(b); else for (var c = b.containers.length - 1; c >= 0; c--) { var e = b.containers[c].element.offset(); b.containers[c].containerCache.left = e.left, b.containers[c].containerCache.top = e.top, b.containers[c].containerCache.width = b.containers[c].element.outerWidth(), b.containers[c].containerCache.height = b.containers[c].element.outerHeight() } return b }, _createPlaceholder: function (f) { var c = f || this, d = c.options; if (!d.placeholder || d.placeholder.constructor == String) { var e = d.placeholder; d.placeholder = { element: function () { var b = a(document.createElement(c.currentItem[0].nodeName)).addClass(e || c.currentItem[0].className + " ui-sortable-placeholder").removeClass(j)[0]; return e || (b.style.visibility = "hidden"), b }, update: function (f, a) { if (e && !d.forcePlaceholderSize) return; a.height() || a.height(c.currentItem.innerHeight() - parseInt(c.currentItem.css(A) || 0, b) - parseInt(c.currentItem.css(B) || 0, b)), a.width() || a.width(c.currentItem.innerWidth() - parseInt(c.currentItem.css(C) || 0, b) - parseInt(c.currentItem.css(D) || 0, b)) } } } c.placeholder = a(d.placeholder.element.call(c.element, c.currentItem)), c.currentItem.after(c.placeholder), d.placeholder.update(c, c.placeholder) }, _contactContainers: function (h) { var b = this; for (var j = c, d = c, e = b.containers.length - 1; e >= 0; e--) { if (a.ui.contains(b.currentItem[0], b.containers[e].element[0])) continue; if (b._intersectsWith(b.containers[e].containerCache)) { if (j && a.ui.contains(b.containers[e].element[0], j.element[0])) continue; j = b.containers[e], d = e } else b.containers[e].containerCache.over && (b.containers[e]._trigger("out", h, b._uiHash(b)), b.containers[e].containerCache.over = 0) } if (!j) return; if (b.containers.length === 1) b.containers[d]._trigger("over", h, b._uiHash(b)), b.containers[d].containerCache.over = 1; else if (b.currentContainer != b.containers[d]) { for (var o = 1e4, k = c, l = b.positionAbs[b.containers[d].floating ? g : p], i = b.items.length - 1; i >= 0; i--) { if (!a.ui.contains(b.containers[d].element[0], b.items[i].item[0])) continue; var m = b.containers[d].floating ? b.items[i].item.offset().left : b.items[i].item.offset().top; Math.abs(m - l) < o && (o = Math.abs(m - l), k = b.items[i], b.direction = m - l > 0 ? f : n) } if (!k && !b.options.dropOnEmpty) return; b.currentContainer = b.containers[d], k ? b._rearrange(h, k, c, !0) : b._rearrange(h, c, b.containers[d].element, !0), b._trigger(s, h, b._uiHash()), b.containers[d]._trigger(s, h, b._uiHash(b)), b.options.placeholder.update(b.currentContainer, b.placeholder), b.containers[d]._trigger("over", h, b._uiHash(b)), b.containers[d].containerCache.over = 1 } }, _createHelper: function (e) { var b = this, d = b.options, c = a.isFunction(d.helper) ? a(d.helper.apply(b.element[0], [e, b.currentItem])) : d.helper == "clone" ? b.currentItem.clone() : b.currentItem; return c.parents(h).length || a(d.appendTo != x ? d.appendTo : b.currentItem[0].parentNode)[0].appendChild(c[0]), c[0] == b.currentItem[0] && (b._storedCSS = { width: b.currentItem[0].style.width, height: b.currentItem[0].style.height, position: b.currentItem.css(q), top: b.currentItem.css(p), left: b.currentItem.css(g) }), (c[0].style.width == "" || d.forceHelperSize) && c.width(b.currentItem.width()), (c[0].style.height == "" || d.forceHelperSize) && c.height(b.currentItem.height()), c }, _adjustOffsetFromHelper: function (b) { var c = this; typeof b == "string" && (b = b.split(" ")), a.isArray(b) && (b = { left: +b[0], top: +b[1] || 0 }), g in b && (c.offset.click.left = b.left + c.margins.left), o in b && (c.offset.click.left = c.helperProportions.width - b.right + c.margins.left), p in b && (c.offset.click.top = b.top + c.margins.top), "bottom" in b && (c.offset.click.top = c.helperProportions.height - b.bottom + c.margins.top) }, _getParentOffset: function () { var c = this; c.offsetParent = c.helper.offsetParent(); var d = c.offsetParent.offset(); c.cssPosition == e && c.scrollParent[0] != document && a.ui.contains(c.scrollParent[0], c.offsetParent[0]) && (d.left += c.scrollParent.scrollLeft(), d.top += c.scrollParent.scrollTop()); if (c.offsetParent[0] == document.body || c.offsetParent[0].tagName && c.offsetParent[0].tagName.toLowerCase() == "html" && a.browser.msie) d = { top: 0, left: 0 }; return { top: d.top + (parseInt(c.offsetParent.css(v), b) || 0), left: d.left + (parseInt(c.offsetParent.css(w), b) || 0)} }, _getRelativeOffset: function () { var a = this; if (a.cssPosition == E) { var c = a.currentItem.position(); return { top: c.top - (parseInt(a.helper.css(p), b) || 0) + a.scrollParent.scrollTop(), left: c.left - (parseInt(a.helper.css(g), b) || 0) + a.scrollParent.scrollLeft()} } return { top: 0, left: 0} }, _cacheMargins: function () { this.margins = { left: parseInt(this.currentItem.css("marginLeft"), b) || 0, top: parseInt(this.currentItem.css("marginTop"), b) || 0} }, _cacheHelperProportions: function () { this.helperProportions = { width: this.helper.outerWidth(), height: this.helper.outerHeight()} }, _setContainment: function () { var f = "document", c = this, e = c.options; e.containment == x && (e.containment = c.helper[0].parentNode); if (e.containment == f || e.containment == "window") c.containment = [0 - c.offset.relative.left - c.offset.parent.left, 0 - c.offset.relative.top - c.offset.parent.top, a(e.containment == f ? document : window).width() - c.helperProportions.width - c.margins.left, (a(e.containment == f ? document : window).height() || document.body.parentNode.scrollHeight) - c.helperProportions.height - c.margins.top]; if (!/^(document|window|parent)$/.test(e.containment)) { var d = a(e.containment)[0], g = a(e.containment).offset(), h = a(d).css("overflow") != "hidden"; c.containment = [g.left + (parseInt(a(d).css(w), b) || 0) + (parseInt(a(d).css(C), b) || 0) - c.margins.left, g.top + (parseInt(a(d).css(v), b) || 0) + (parseInt(a(d).css(A), b) || 0) - c.margins.top, g.left + (h ? Math.max(d.scrollWidth, d.offsetWidth) : d.offsetWidth) - (parseInt(a(d).css(w), b) || 0) - (parseInt(a(d).css(D), b) || 0) - c.helperProportions.width - c.margins.left, g.top + (h ? Math.max(d.scrollHeight, d.offsetHeight) : d.offsetHeight) - (parseInt(a(d).css(v), b) || 0) - (parseInt(a(d).css(B), b) || 0) - c.helperProportions.height - c.margins.top] } }, _convertPositionTo: function (i, f) { var b = this; f || (f = b.position); var c = i == e ? 1 : -1, j = b.options, g = b.cssPosition == e && (b.scrollParent[0] == document || !a.ui.contains(b.scrollParent[0], b.offsetParent[0])) ? b.offsetParent : b.scrollParent, h = /(html|body)/i.test(g[0].tagName); return { top: f.top + b.offset.relative.top * c + b.offset.parent.top * c - (a.browser.safari && b.cssPosition == d ? 0 : (b.cssPosition == d ? -b.scrollParent.scrollTop() : h ? 0 : g.scrollTop()) * c), left: f.left + b.offset.relative.left * c + b.offset.parent.left * c - (a.browser.safari && b.cssPosition == d ? 0 : (b.cssPosition == d ? -b.scrollParent.scrollLeft() : h ? 0 : g.scrollLeft()) * c)} }, _generatePosition: function (h) { var b = this, c = b.options, k = b.cssPosition == e && (b.scrollParent[0] == document || !a.ui.contains(b.scrollParent[0], b.offsetParent[0])) ? b.offsetParent : b.scrollParent, l = /(html|body)/i.test(k[0].tagName); b.cssPosition == E && (b.scrollParent[0] == document || b.scrollParent[0] == b.offsetParent[0]) && (b.offset.relative = b._getRelativeOffset()); var i = h.pageX, j = h.pageY; if (b.originalPosition) { b.containment && (h.pageX - b.offset.click.left < b.containment[0] && (i = b.containment[0] + b.offset.click.left), h.pageY - b.offset.click.top < b.containment[1] && (j = b.containment[1] + b.offset.click.top), h.pageX - b.offset.click.left > b.containment[2] && (i = b.containment[2] + b.offset.click.left), h.pageY - b.offset.click.top > b.containment[3] && (j = b.containment[3] + b.offset.click.top)); if (c.grid) { var f = b.originalPageY + Math.round((j - b.originalPageY) / c.grid[1]) * c.grid[1]; j = b.containment ? f - b.offset.click.top < b.containment[1] || f - b.offset.click.top > b.containment[3] ? f - b.offset.click.top < b.containment[1] ? f + c.grid[1] : f - c.grid[1] : f : f; var g = b.originalPageX + Math.round((i - b.originalPageX) / c.grid[0]) * c.grid[0]; i = b.containment ? g - b.offset.click.left < b.containment[0] || g - b.offset.click.left > b.containment[2] ? g - b.offset.click.left < b.containment[0] ? g + c.grid[0] : g - c.grid[0] : g : g } } return { top: j - b.offset.click.top - b.offset.relative.top - b.offset.parent.top + (a.browser.safari && b.cssPosition == d ? 0 : b.cssPosition == d ? -b.scrollParent.scrollTop() : l ? 0 : k.scrollTop()), left: i - b.offset.click.left - b.offset.relative.left - b.offset.parent.left + (a.browser.safari && b.cssPosition == d ? 0 : b.cssPosition == d ? -b.scrollParent.scrollLeft() : l ? 0 : k.scrollLeft())} }, _rearrange: function (h, b, c, e) { var a = this; c ? c[0].appendChild(a.placeholder[0]) : b.item[0].parentNode.insertBefore(a.placeholder[0], a.direction == f ? b.item[0] : b.item[0].nextSibling), a.counter = a.counter ? ++a.counter : 1; var d = a, g = a.counter; window.setTimeout(function () { g == d.counter && d.refreshPositions(!e) }, 0) }, _clear: function (g, f) { var i = "beforeStop", b = this; b.reverting = !1; var e = [], n = b; !b._noFinalSort && b.currentItem.parent().length && b.placeholder.before(b.currentItem), b._noFinalSort = c; if (b.helper[0] == b.currentItem[0]) { for (var d in b._storedCSS) if (b._storedCSS[d] == y || b._storedCSS[d] == "static") b._storedCSS[d] = ""; b.currentItem.css(b._storedCSS).removeClass(j) } else b.currentItem.show(); b.fromOutside && !f && e.push(function (a) { this._trigger("receive", a, this._uiHash(this.fromOutside)) }), (b.fromOutside || b.domPosition.prev != b.currentItem.prev().not(u)[0] || b.domPosition.parent != b.currentItem.parent()[0]) && !f && e.push(function (a) { this._trigger("update", a, this._uiHash()) }); if (!a.ui.contains(b.element[0], b.currentItem[0])) { f || e.push(function (a) { this._trigger("remove", a, this._uiHash()) }); for (var d = b.containers.length - 1; d >= 0; d--) a.ui.contains(b.containers[d].element[0], b.currentItem[0]) && !f && (e.push(function (a) { return function (b) { a._trigger("receive", b, this._uiHash(this)) } } .call(b, b.containers[d])), e.push(function (a) { return function (b) { a._trigger("update", b, this._uiHash(this)) } } .call(b, b.containers[d]))) } for (var d = b.containers.length - 1; d >= 0; d--) f || e.push(function (a) { return function (b) { a._trigger(t, b, this._uiHash(this)) } } .call(b, b.containers[d])), b.containers[d].containerCache.over && (e.push(function (a) { return function (b) { a._trigger("out", b, this._uiHash(this)) } } .call(b, b.containers[d])), b.containers[d].containerCache.over = 0); b._storedCursor && a(h).css(k, b._storedCursor), b._storedOpacity && b.helper.css(l, b._storedOpacity), b._storedZIndex && b.helper.css(m, b._storedZIndex == y ? "" : b._storedZIndex), b.dragging = !1; if (b.cancelHelperRemoval) { if (!f) { b._trigger(i, g, b._uiHash()); for (var d = 0; d < e.length; d++) e[d].call(b, g); b._trigger("stop", g, b._uiHash()) } return !1 } f || b._trigger(i, g, b._uiHash()), b.placeholder[0].parentNode.removeChild(b.placeholder[0]), b.helper[0] != b.currentItem[0] && b.helper.remove(), b.helper = c; if (!f) { for (var d = 0; d < e.length; d++) e[d].call(b, g); b._trigger("stop", g, b._uiHash()) } return b.fromOutside = !1, !0 }, _trigger: function () { a.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel() }, _uiHash: function (d) { var b = d || this; return { helper: b.helper, placeholder: b.placeholder || a([]), position: b.position, originalPosition: b.originalPosition, offset: b.positionAbs, item: b.currentItem, sender: d ? d.element : c} } }), a.extend(a.ui.sortable, { version: "1.8.21" }) } (jQuery), jQuery.effects || function (a, n) { var e = 1.70158, m = ".ui-effects-wrapper", l = "ec.storage.", j = "toggle", f = 128, i = 139, b = 255, h = "number", g = "string", d = null, p = "backgroundColor", k = "transparent", c = 10; function r(d) { var b; return d && d.constructor == Array && d.length == 3 ? d : (b = /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(d)) ? [parseInt(b[1], c), parseInt(b[2], c), parseInt(b[3], c)] : (b = /rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(d)) ? [parseFloat(b[1]) * 2.55, parseFloat(b[2]) * 2.55, parseFloat(b[3]) * 2.55] : (b = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(d)) ? [parseInt(b[1], 16), parseInt(b[2], 16), parseInt(b[3], 16)] : (b = /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(d)) ? [parseInt(b[1] + b[1], 16), parseInt(b[2] + b[2], 16), parseInt(b[3] + b[3], 16)] : (b = /rgba\(0, 0, 0, 0\)/.exec(d)) ? s.transparent : s[a.trim(d).toLowerCase()] } function w(b, d) { var c; do { c = a.curCSS(b, d); if (c != "" && c != k || a.nodeName(b, "body")) break; d = p } while (b = b.parentNode); return r(c) } function u() { var a = document.defaultView ? document.defaultView.getComputedStyle(this, d) : this.currentStyle, c = {}, b, e; if (a && a.length && a[0] && a[a[0]]) { var f = a.length; while (f--) b = a[f], typeof a[b] == g && (e = b.replace(/\-(\w)/g, function (b, a) { return a.toUpperCase() }), c[e] = a[b]) } else for (b in a) typeof a[b] == g && (c[b] = a[b]); return c } function v(c) { var b, e; for (b in c) e = c[b], (e == d || a.isFunction(e) || b in x || /scrollbar/.test(b) || !/color/i.test(b) && isNaN(parseFloat(e))) && delete c[b]; return c } function y(d, b) { var c = { _: 0 }, a; for (a in b) d[a] != b[a] && (c[a] = b[a]); return c } function o(f, b, c, e) { typeof f == "object" && (e = b, c = d, b = f, f = b.effect), a.isFunction(b) && (e = b, c = d, b = {}); if (typeof b == h || a.fx.speeds[b]) e = c, c = b, b = {}; return a.isFunction(c) && (e = c, c = d), b = b || {}, c = c || b.duration, c = a.fx.off ? 0 : typeof c == h ? c : c in a.fx.speeds ? a.fx.speeds[c] : a.fx.speeds._default, e = e || b.complete, [f, b, c, e] } function q(b) { return !b || typeof b == h || a.fx.speeds[b] ? !0 : typeof b == g && !a.effects[b] ? !0 : !1 } a.effects = {}, a.each([p, "borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor", "borderColor", "color", "outlineColor"], function (e, d) { a.fx.step[d] = function (a) { a.colorInit || (a.start = w(a.elem, d), a.end = r(a.end), a.colorInit = !0), a.elem.style[d] = "rgb(" + Math.max(Math.min(parseInt(a.pos * (a.end[0] - a.start[0]) + a.start[0], c), b), 0) + "," + Math.max(Math.min(parseInt(a.pos * (a.end[1] - a.start[1]) + a.start[1], c), b), 0) + "," + Math.max(Math.min(parseInt(a.pos * (a.end[2] - a.start[2]) + a.start[2], c), b), 0) + ")" } }); var s = { aqua: [0, b, b], azure: [240, b, b], beige: [245, 245, 220], black: [0, 0, 0], blue: [0, 0, b], brown: [165, 42, 42], cyan: [0, b, b], darkblue: [0, 0, i], darkcyan: [0, i, i], darkgrey: [169, 169, 169], darkgreen: [0, 100, 0], darkkhaki: [189, 183, 107], darkmagenta: [i, 0, i], darkolivegreen: [85, 107, 47], darkorange: [b, 140, 0], darkorchid: [153, 50, 204], darkred: [i, 0, 0], darksalmon: [233, 150, 122], darkviolet: [148, 0, 211], fuchsia: [b, 0, b], gold: [b, 215, 0], green: [0, f, 0], indigo: [75, 0, 130], khaki: [240, 230, 140], lightblue: [173, 216, 230], lightcyan: [224, b, b], lightgreen: [144, 238, 144], lightgrey: [211, 211, 211], lightpink: [b, 182, 193], lightyellow: [b, b, 224], lime: [0, b, 0], magenta: [b, 0, b], maroon: [f, 0, 0], navy: [0, 0, f], olive: [f, f, 0], orange: [b, 165, 0], pink: [b, 192, 203], purple: [f, 0, f], violet: [f, 0, f], red: [b, 0, 0], silver: [192, 192, 192], white: [b, b, b], yellow: [b, b, 0], transparent: [b, b, b] }, t = ["add", "remove", j], x = { border: 1, borderBottom: 1, borderColor: 1, borderLeft: 1, borderRight: 1, borderTop: 1, borderWidth: 1, margin: 1, padding: 1 }; a.effects.animateClass = function (b, f, c, e) { return a.isFunction(c) && (e = c, c = d), this.queue(function () { var d = "style", g = a(this), h = g.attr(d) || " ", j = v(u.call(this)), i, k = g.attr("class") || ""; a.each(t, function (c, a) { b[a] && g[a + "Class"](b[a]) }), i = v(u.call(this)), g.attr("class", k), g.animate(y(j, i), { queue: !1, duration: f, easing: c, complete: function () { a.each(t, function (c, a) { b[a] && g[a + "Class"](b[a]) }), typeof g.attr(d) == "object" ? (g.attr(d).cssText = "", g.attr(d).cssText = h) : g.attr(d, h), e && e.apply(this, arguments), a.dequeue(this) } }) }) }, a.fn.extend({ _addClass: a.fn.addClass, addClass: function (b, c, d, e) { return c ? a.effects.animateClass.apply(this, [{ add: b }, c, d, e]) : this._addClass(b) }, _removeClass: a.fn.removeClass, removeClass: function (b, c, d, e) { return c ? a.effects.animateClass.apply(this, [{ remove: b }, c, d, e]) : this._removeClass(b) }, _toggleClass: a.fn.toggleClass, toggleClass: function (c, b, d, e, f) { return typeof b == "boolean" || b === n ? d ? a.effects.animateClass.apply(this, [b ? { add: c} : { remove: c }, d, e, f]) : this._toggleClass(c, b) : a.effects.animateClass.apply(this, [{ toggle: c }, b, d, e]) }, switchClass: function (b, c, d, e, f) { return a.effects.animateClass.apply(this, [{ add: c, remove: b }, d, e, f]) } }), a.extend(a.effects, { version: "1.8.21", save: function (c, b) { for (var a = 0; a < b.length; a++) b[a] !== d && c.data(l + b[a], c[0].style[b[a]]) }, restore: function (c, b) { for (var a = 0; a < b.length; a++) b[a] !== d && c.css(b[a], c.data(l + b[a])) }, setMode: function (b, a) { return a == j && (a = b.is(":hidden") ? "show" : "hide"), a }, getBaseline: function (c, d) { var a, b; switch (c[0]) { case "top": a = 0; break; case "middle": a = .5; break; case "bottom": a = 1; break; default: a = c[0] / d.height } switch (c[1]) { case "left": b = 0; break; case "center": b = .5; break; case "right": b = 1; break; default: b = c[1] / d.width } return { x: b, y: a} }, createWrapper: function (b) { var d = "auto", e = "relative", h = "position"; if (b.parent().is(m)) return b.parent(); var f = { width: b.outerWidth(!0), height: b.outerHeight(!0), "float": b.css("float") }, i = a("<div></div>").addClass("ui-effects-wrapper").css({ fontSize: "100%", background: k, border: "none", margin: 0, padding: 0 }), g = document.activeElement; try { g.id } catch (j) { g = document.body } return b.wrap(i), (b[0] === g || a.contains(b[0], g)) && a(g).focus(), i = b.parent(), b.css(h) == "static" ? (i.css({ position: e }), b.css({ position: e })) : (a.extend(f, { position: b.css(h), zIndex: b.css("z-index") }), a.each(["top", "left", "bottom", "right"], function (e, a) { f[a] = b.css(a), isNaN(parseInt(f[a], c)) && (f[a] = d) }), b.css({ position: e, top: 0, left: 0, right: d, bottom: d })), i.css(f).show() }, removeWrapper: function (b) { var d, c = document.activeElement; return b.parent().is(m) ? (d = b.parent().replaceWith(b), (b[0] === c || a.contains(b[0], c)) && a(c).focus(), d) : b }, setTransition: function (c, d, e, b) { return b = b || {}, a.each(d, function (f, d) { var a = c.cssUnit(d); a[0] > 0 && (b[d] = a[0] * e + a[1]) }), b } }), a.fn.extend({ effect: function (g) { var c = this, d = o.apply(c, arguments), b = { options: d[1], duration: d[2], callback: d[3] }, e = b.options.mode, f = a.effects[g]; return a.fx.off || !f ? e ? c[e](b.duration, b.callback) : c.each(function () { b.callback && b.callback.call(this) }) : f.call(c, b) }, _show: a.fn.show, show: function (c) { var a = this; if (q(c)) return a._show.apply(a, arguments); var b = o.apply(a, arguments); return b[1].mode = "show", a.effect.apply(a, b) }, _hide: a.fn.hide, hide: function (c) { var a = this; if (q(c)) return a._hide.apply(a, arguments); var b = o.apply(a, arguments); return b[1].mode = "hide", a.effect.apply(a, b) }, __toggle: a.fn.toggle, toggle: function (c) { var b = this; if (q(c) || typeof c == "boolean" || a.isFunction(c)) return b.__toggle.apply(b, arguments); var d = o.apply(b, arguments); return d[1].mode = j, b.effect.apply(b, d) }, cssUnit: function (d) { var b = this.css(d), c = []; return a.each(["em", "px", "%", "pt"], function (d, a) { b.indexOf(a) > 0 && (c = [parseFloat(b), a]) }), c } }), a.easing.jswing = a.easing.swing, a.extend(a.easing, { def: "easeOutQuad", swing: function (b, c, d, e, f) { return a.easing[a.easing.def](b, c, d, e, f) }, easeInQuad: function (e, a, b, c, d) { return c * (a /= d) * a + b }, easeOutQuad: function (e, a, b, c, d) { return -c * (a /= d) * (a - 2) + b }, easeInOutQuad: function (e, a, b, c, d) { return (a /= d / 2) < 1 ? c / 2 * a * a + b : -c / 2 * (--a * (a - 2) - 1) + b }, easeInCubic: function (e, a, b, c, d) { return c * (a /= d) * a * a + b }, easeOutCubic: function (e, a, b, c, d) { return c * ((a = a / d - 1) * a * a + 1) + b }, easeInOutCubic: function (e, a, b, c, d) { return (a /= d / 2) < 1 ? c / 2 * a * a * a + b : c / 2 * ((a -= 2) * a * a + 2) + b }, easeInQuart: function (e, a, b, c, d) { return c * (a /= d) * a * a * a + b }, easeOutQuart: function (e, a, b, c, d) { return -c * ((a = a / d - 1) * a * a * a - 1) + b }, easeInOutQuart: function (e, a, b, c, d) { return (a /= d / 2) < 1 ? c / 2 * a * a * a * a + b : -c / 2 * ((a -= 2) * a * a * a - 2) + b }, easeInQuint: function (e, a, b, c, d) { return c * (a /= d) * a * a * a * a + b }, easeOutQuint: function (e, a, b, c, d) { return c * ((a = a / d - 1) * a * a * a * a + 1) + b }, easeInOutQuint: function (e, a, b, c, d) { return (a /= d / 2) < 1 ? c / 2 * a * a * a * a * a + b : c / 2 * ((a -= 2) * a * a * a * a + 2) + b }, easeInSine: function (e, b, c, a, d) { return -a * Math.cos(b / d * (Math.PI / 2)) + a + c }, easeOutSine: function (e, a, b, c, d) { return c * Math.sin(a / d * (Math.PI / 2)) + b }, easeInOutSine: function (e, a, b, c, d) { return -c / 2 * (Math.cos(Math.PI * a / d) - 1) + b }, easeInExpo: function (f, a, b, d, e) { return a == 0 ? b : d * Math.pow(2, c * (a / e - 1)) + b }, easeOutExpo: function (e, a, b, c, d) { return a == d ? b + c : c * (-Math.pow(2, -10 * a / d) + 1) + b }, easeInOutExpo: function (f, a, b, d, e) { return a == 0 ? b : a == e ? b + d : (a /= e / 2) < 1 ? d / 2 * Math.pow(2, c * (a - 1)) + b : d / 2 * (-Math.pow(2, -10 * --a) + 2) + b }, easeInCirc: function (e, a, b, c, d) { return -c * (Math.sqrt(1 - (a /= d) * a) - 1) + b }, easeOutCirc: function (e, a, b, c, d) { return c * Math.sqrt(1 - (a = a / d - 1) * a) + b }, easeInOutCirc: function (e, a, b, c, d) { return (a /= d / 2) < 1 ? -c / 2 * (Math.sqrt(1 - a * a) - 1) + b : c / 2 * (Math.sqrt(1 - (a -= 2) * a) + 1) + b }, easeInElastic: function (j, d, g, a, h) { var i = e, b = 0, f = a; if (d == 0) return g; if ((d /= h) == 1) return g + a; b || (b = h * .3); if (f < Math.abs(a)) { f = a; var i = b / 4 } else var i = b / (2 * Math.PI) * Math.asin(a / f); return -(f * Math.pow(2, c * (d -= 1)) * Math.sin((d * h - i) * 2 * Math.PI / b)) + g }, easeOutElastic: function (i, c, f, a, g) { var h = e, b = 0, d = a; if (c == 0) return f; if ((c /= g) == 1) return f + a; b || (b = g * .3); if (d < Math.abs(a)) { d = a; var h = b / 4 } else var h = b / (2 * Math.PI) * Math.asin(a / d); return d * Math.pow(2, -10 * c) * Math.sin((c * g - h) * 2 * Math.PI / b) + a + f }, easeInOutElastic: function (j, a, g, b, h) { var i = e, d = 0, f = b; if (a == 0) return g; if ((a /= h / 2) == 2) return g + b; d || (d = h * .3 * 1.5); if (f < Math.abs(b)) { f = b; var i = d / 4 } else var i = d / (2 * Math.PI) * Math.asin(b / f); return a < 1 ? -.5 * f * Math.pow(2, c * (a -= 1)) * Math.sin((a * h - i) * 2 * Math.PI / d) + g : f * Math.pow(2, -10 * (a -= 1)) * Math.sin((a * h - i) * 2 * Math.PI / d) * .5 + b + g }, easeInBack: function (g, b, c, d, f, a) { return a == n && (a = e), d * (b /= f) * b * ((a + 1) * b - a) + c }, easeOutBack: function (g, a, c, d, f, b) { return b == n && (b = e), d * ((a = a / f - 1) * a * ((b + 1) * a + b) + 1) + c }, easeInOutBack: function (g, a, c, d, f, b) { return b == n && (b = e), (a /= f / 2) < 1 ? d / 2 * a * a * (((b *= 1.525) + 1) * a - b) + c : d / 2 * ((a -= 2) * a * (((b *= 1.525) + 1) * a + b) + 2) + c }, easeInBounce: function (d, e, f, b, c) { return b - a.easing.easeOutBounce(d, c - e, 0, b, c) + f }, easeOutBounce: function (g, b, d, e, f) { var c = 7.5625, a = 2.75; return (b /= f) < 1 / a ? e * c * b * b + d : b < 2 / a ? e * (c * (b -= 1.5 / a) * b + .75) + d : b < 2.5 / a ? e * (c * (b -= 2.25 / a) * b + .9375) + d : e * (c * (b -= 2.625 / a) * b + .984375) + d }, easeInOutBounce: function (e, c, f, d, b) { return c < b / 2 ? a.easing.easeInBounce(e, c * 2, 0, d, b) * .5 + f : a.easing.easeOutBounce(e, c * 2 - b, 0, d, b) * .5 + d * .5 + f } }) } (jQuery), function (a) { a.effects.blind = function (b) { return this.queue(function () { var c = "vertical", d = a(this), g = ["position", "top", "bottom", "left", "right"], f = a.effects.setMode(d, b.options.mode || "hide"), h = b.options.direction || c; a.effects.save(d, g), d.show(); var e = a.effects.createWrapper(d).css({ overflow: "hidden" }), i = h == c ? "height" : "width", k = h == c ? e.height() : e.width(); f == "show" && e.css(i, 0); var j = {}; j[i] = f == "show" ? k : 0, e.animate(j, b.duration, b.options.easing, function () { f == "hide" && d.hide(), a.effects.restore(d, g), a.effects.removeWrapper(d), b.callback && b.callback.apply(d[0], arguments), d.dequeue() }) }) } } (jQuery), function (a) { a.effects.bounce = function (b) { return this.queue(function () { var f = "-=", e = "+=", h = "hide", c = "pos", i = "left", d = a(this), n = ["position", "top", "bottom", i, "right"], k = a.effects.setMode(d, b.options.mode || "effect"), o = b.options.direction || "up", g = b.options.distance || 20, p = b.options.times || 5, m = b.duration || 250; /show|hide/.test(k) && n.push("opacity"), a.effects.save(d, n), d.show(), a.effects.createWrapper(d); var j = o == "up" || o == "down" ? "top" : i, l = o == "up" || o == i ? c : "neg", g = b.options.distance || (j == "top" ? d.outerHeight({ margin: !0 }) / 3 : d.outerWidth({ margin: !0 }) / 3); k == "show" && d.css("opacity", 0).css(j, l == c ? -g : g), k == h && (g = g / (p * 2)), k != h && p--; if (k == "show") { var q = { opacity: 1 }; q[j] = (l == c ? e : f) + g, d.animate(q, m / 2, b.options.easing), g = g / 2, p-- } for (var t = 0; t < p; t++) { var r = {}, s = {}; r[j] = (l == c ? f : e) + g, s[j] = (l == c ? e : f) + g, d.animate(r, m / 2, b.options.easing).animate(s, m / 2, b.options.easing), g = k == h ? g * 2 : g / 2 } if (k == h) { var q = { opacity: 0 }; q[j] = (l == c ? f : e) + g, d.animate(q, m / 2, b.options.easing, function () { d.hide(), a.effects.restore(d, n), a.effects.removeWrapper(d), b.callback && b.callback.apply(this, arguments) }) } else { var r = {}, s = {}; r[j] = (l == c ? f : e) + g, s[j] = (l == c ? e : f) + g, d.animate(r, m / 2, b.options.easing).animate(s, m / 2, b.options.easing, function () { a.effects.restore(d, n), a.effects.removeWrapper(d), b.callback && b.callback.apply(this, arguments) }) } d.queue("fx", function () { d.dequeue() }), d.dequeue() }) } } (jQuery), function (a) { a.effects.clip = function (b) { return this.queue(function () { var e = "show", c = "vertical", d = a(this), l = ["position", "top", "bottom", "left", "right", "height", "width"], g = a.effects.setMode(d, b.options.mode || "hide"), i = b.options.direction || c; a.effects.save(d, l), d.show(); var m = a.effects.createWrapper(d).css({ overflow: "hidden" }), f = d[0].tagName == "IMG" ? m : d, h = { size: i == c ? "height" : "width", position: i == c ? "top" : "left" }, j = i == c ? f.height() : f.width(); g == e && (f.css(h.size, 0), f.css(h.position, j / 2)); var k = {}; k[h.size] = g == e ? j : 0, k[h.position] = g == e ? 0 : j / 2, f.animate(k, { queue: !1, duration: b.duration, easing: b.options.easing, complete: function () { g == "hide" && d.hide(), a.effects.restore(d, l), a.effects.removeWrapper(d), b.callback && b.callback.apply(d[0], arguments), d.dequeue() } }) }) } } (jQuery), function (a) { a.effects.drop = function (b) { return this.queue(function () { var f = "show", d = "pos", c = "left", e = a(this), l = ["position", "top", "bottom", c, "right", "opacity"], g = a.effects.setMode(e, b.options.mode || "hide"), h = b.options.direction || c; a.effects.save(e, l), e.show(), a.effects.createWrapper(e); var i = h == "up" || h == "down" ? "top" : c, j = h == "up" || h == c ? d : "neg", k = b.options.distance || (i == "top" ? e.outerHeight({ margin: !0 }) / 2 : e.outerWidth({ margin: !0 }) / 2); g == f && e.css("opacity", 0).css(i, j == d ? -k : k); var m = { opacity: g == f ? 1 : 0 }; m[i] = (g == f ? j == d ? "+=" : "-=" : j == d ? "-=" : "+=") + k, e.animate(m, { queue: !1, duration: b.duration, easing: b.options.easing, complete: function () { g == "hide" && e.hide(), a.effects.restore(e, l), a.effects.removeWrapper(e), b.callback && b.callback.apply(this, arguments), e.dequeue() } }) }) } } (jQuery), function (a) { a.effects.explode = function (b) { return this.queue(function () { var d = "visible", j = "absolute", c = "show", f = b.options.pieces ? Math.round(Math.sqrt(b.options.pieces)) : 3, g = b.options.pieces ? Math.round(Math.sqrt(b.options.pieces)) : 3; b.options.mode = b.options.mode == "toggle" ? a(this).is(":visible") ? "hide" : c : b.options.mode; var e = a(this).show().css("visibility", "hidden"), k = e.offset(); k.top -= parseInt(e.css("marginTop"), 10) || 0, k.left -= parseInt(e.css("marginLeft"), 10) || 0; for (var l = e.outerWidth(!0), m = e.outerHeight(!0), h = 0; h < f; h++) for (var i = 0; i < g; i++) e.clone().appendTo("body").wrap("<div></div>").css({ position: j, visibility: d, left: -i * (l / g), top: -h * (m / f) }).parent().addClass("ui-effects-explode").css({ position: j, overflow: "hidden", width: l / g, height: m / f, left: k.left + i * (l / g) + (b.options.mode == c ? (i - Math.floor(g / 2)) * (l / g) : 0), top: k.top + h * (m / f) + (b.options.mode == c ? (h - Math.floor(f / 2)) * (m / f) : 0), opacity: b.options.mode == c ? 0 : 1 }).animate({ left: k.left + i * (l / g) + (b.options.mode == c ? 0 : (i - Math.floor(g / 2)) * (l / g)), top: k.top + h * (m / f) + (b.options.mode == c ? 0 : (h - Math.floor(f / 2)) * (m / f)), opacity: b.options.mode == c ? 1 : 0 }, b.duration || 500); setTimeout(function () { b.options.mode == c ? e.css({ visibility: d }) : e.css({ visibility: d }).hide(), b.callback && b.callback.apply(e[0]), e.dequeue(), a("div.ui-effects-explode").remove() }, b.duration || 500) }) } } (jQuery), function (a) { a.effects.fade = function (b) { return this.queue(function () { var c = a(this), d = a.effects.setMode(c, b.options.mode || "hide"); c.animate({ opacity: d }, { queue: !1, duration: b.duration, easing: b.options.easing, complete: function () { b.callback && b.callback.apply(this, arguments), c.dequeue() } }) }) } } (jQuery), function (a) { a.effects.fold = function (b) { return this.queue(function () { var c = "show", d = "hide", e = a(this), j = ["position", "top", "bottom", "left", "right"], f = a.effects.setMode(e, b.options.mode || d), h = b.options.size || 15, k = !!b.options.horizFirst, l = b.duration ? b.duration / 2 : a.fx.speeds._default / 2; a.effects.save(e, j), e.show(); var g = a.effects.createWrapper(e).css({ overflow: "hidden" }), m = f == c != k, n = m ? ["width", "height"] : ["height", "width"], i = m ? [g.width(), g.height()] : [g.height(), g.width()], o = /([0-9]+)%/.exec(h); o && (h = parseInt(o[1], 10) / 100 * i[f == d ? 0 : 1]), f == c && g.css(k ? { height: 0, width: h} : { height: h, width: 0 }); var p = {}, q = {}; p[n[0]] = f == c ? i[0] : h, q[n[1]] = f == c ? i[1] : 0, g.animate(p, l, b.options.easing).animate(q, l, b.options.easing, function () { f == d && e.hide(), a.effects.restore(e, j), a.effects.removeWrapper(e), b.callback && b.callback.apply(e[0], arguments), e.dequeue() }) }) } } (jQuery), function (a) { a.effects.highlight = function (b) { return this.queue(function () { var d = "backgroundColor", c = a(this), f = ["backgroundImage", d, "opacity"], e = a.effects.setMode(c, b.options.mode || "show"), g = { backgroundColor: c.css(d) }; e == "hide" && (g.opacity = 0), a.effects.save(c, f), c.show().css({ backgroundImage: "none", backgroundColor: b.options.color || "#ffff99" }).animate(g, { queue: !1, duration: b.duration, easing: b.options.easing, complete: function () { e == "hide" && c.hide(), a.effects.restore(c, f), e == "show" && !a.support.opacity && this.style.removeAttribute("filter"), b.callback && b.callback.apply(this, arguments), c.dequeue() } }) }) } } (jQuery), function (a) { a.effects.pulsate = function (b) { return this.queue(function () { var c = a(this), f = a.effects.setMode(c, b.options.mode || "show"), g = (b.options.times || 5) * 2 - 1, h = b.duration ? b.duration / 2 : a.fx.speeds._default / 2, e = c.is(":visible"), d = 0; e || (c.css("opacity", 0).show(), d = 1), (f == "hide" && e || f == "show" && !e) && g--; for (var i = 0; i < g; i++) c.animate({ opacity: d }, h, b.options.easing), d = (d + 1) % 2; c.animate({ opacity: d }, h, b.options.easing, function () { d == 0 && c.hide(), b.callback && b.callback.apply(this, arguments) }), c.queue("fx", function () { c.dequeue() }).dequeue() }) } } (jQuery), function (a) { var c = "both", d = "effect", b = "hide"; a.effects.puff = function (c) { return this.queue(function () { var d = a(this), e = a.effects.setMode(d, c.options.mode || b), g = parseInt(c.options.percent, 10) || 150, h = g / 100, f = { height: d.height(), width: d.width() }; a.extend(c.options, { fade: !0, mode: e, percent: e == b ? g : 100, from: e == b ? f : { height: f.height * h, width: f.width * h} }), d.effect("scale", c.options, c.duration, c.callback), d.dequeue() }) }, a.effects.scale = function (e) { return this.queue(function () { var f = a(this), g = a.extend(!0, {}, e.options), h = a.effects.setMode(f, e.options.mode || d), j = parseInt(e.options.percent, 10) || (parseInt(e.options.percent, 10) == 0 ? 0 : h == b ? 0 : 100), k = e.options.direction || c, m = e.options.origin; h != d && (g.origin = m || ["middle", "center"], g.restore = !0); var i = { height: f.height(), width: f.width() }; f.from = e.options.from || (h == "show" ? { height: 0, width: 0} : i); var l = { y: k != "horizontal" ? j / 100 : 1, x: k != "vertical" ? j / 100 : 1 }; f.to = { height: i.height * l.y, width: i.width * l.x }, e.options.fade && (h == "show" && (f.from.opacity = 0, f.to.opacity = 1), h == b && (f.from.opacity = 1, f.to.opacity = 0)), g.from = f.from, g.to = f.to, g.mode = h, f.effect("size", g, e.duration, e.callback), f.dequeue() }) }, a.effects.size = function (e) { return this.queue(function () { var j = "opacity", h = "overflow", n = "position", f = a(this), k = [n, "top", "bottom", "left", "right", "width", "height", h, j], t = [n, "top", "bottom", "left", "right", h, j], s = ["width", "height", h], p = ["fontSize"], l = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"], m = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"], v = a.effects.setMode(f, e.options.mode || d), q = e.options.restore || !1, o = e.options.scale || c, u = e.options.origin, i = { height: f.height(), width: f.width() }; f.from = e.options.from || i, f.to = e.options.to || i; if (u) { var r = a.effects.getBaseline(u, i); f.from.top = (i.height - f.from.height) * r.y, f.from.left = (i.width - f.from.width) * r.x, f.to.top = (i.height - f.to.height) * r.y, f.to.left = (i.width - f.to.width) * r.x } var g = { from: { y: f.from.height / i.height, x: f.from.width / i.width }, to: { y: f.to.height / i.height, x: f.to.width / i.width} }; if (o == "box" || o == c) g.from.y != g.to.y && (k = k.concat(l), f.from = a.effects.setTransition(f, l, g.from.y, f.from), f.to = a.effects.setTransition(f, l, g.to.y, f.to)), g.from.x != g.to.x && (k = k.concat(m), f.from = a.effects.setTransition(f, m, g.from.x, f.from), f.to = a.effects.setTransition(f, m, g.to.x, f.to)); (o == "content" || o == c) && g.from.y != g.to.y && (k = k.concat(p), f.from = a.effects.setTransition(f, p, g.from.y, f.from), f.to = a.effects.setTransition(f, p, g.to.y, f.to)), a.effects.save(f, q ? k : t), f.show(), a.effects.createWrapper(f), f.css(h, "hidden").css(f.from); if (o == "content" || o == c) l = l.concat(["marginTop", "marginBottom"]).concat(p), m = m.concat(["marginLeft", "marginRight"]), s = k.concat(l).concat(m), f.find("*[width]").each(function () { var b = a(this); q && a.effects.save(b, s); var c = { height: b.height(), width: b.width() }; b.from = { height: c.height * g.from.y, width: c.width * g.from.x }, b.to = { height: c.height * g.to.y, width: c.width * g.to.x }, g.from.y != g.to.y && (b.from = a.effects.setTransition(b, l, g.from.y, b.from), b.to = a.effects.setTransition(b, l, g.to.y, b.to)), g.from.x != g.to.x && (b.from = a.effects.setTransition(b, m, g.from.x, b.from), b.to = a.effects.setTransition(b, m, g.to.x, b.to)), b.css(b.from), b.animate(b.to, e.duration, e.options.easing, function () { q && a.effects.restore(b, s) }) }); f.animate(f.to, { queue: !1, duration: e.duration, easing: e.options.easing, complete: function () { f.to.opacity === 0 && f.css(j, f.from.opacity), v == b && f.hide(), a.effects.restore(f, q ? k : t), a.effects.removeWrapper(f), e.callback && e.callback.apply(this, arguments), f.dequeue() } }) }) } } (jQuery), function (a) { a.effects.shake = function (b) { return this.queue(function () { var d = "pos", c = "left", e = a(this), m = ["position", "top", "bottom", c, "right"], q = a.effects.setMode(e, b.options.mode || "effect"), g = b.options.direction || c, h = b.options.distance || 20, p = b.options.times || 3, f = b.duration || b.options.duration || 140; a.effects.save(e, m), e.show(), a.effects.createWrapper(e); var i = g == "up" || g == "down" ? "top" : c, j = g == "up" || g == c ? d : "neg", k = {}, l = {}, n = {}; k[i] = (j == d ? "-=" : "+=") + h, l[i] = (j == d ? "+=" : "-=") + h * 2, n[i] = (j == d ? "-=" : "+=") + h * 2, e.animate(k, f, b.options.easing); for (var o = 1; o < p; o++) e.animate(l, f, b.options.easing).animate(n, f, b.options.easing); e.animate(l, f, b.options.easing).animate(k, f / 2, b.options.easing, function () { a.effects.restore(e, m), a.effects.removeWrapper(e), b.callback && b.callback.apply(this, arguments) }), e.queue("fx", function () { e.dequeue() }), e.dequeue() }) } } (jQuery), function (a) { a.effects.slide = function (b) { return this.queue(function () { var d = "pos", f = "show", c = "left", e = a(this), l = ["position", "top", "bottom", c, "right"], i = a.effects.setMode(e, b.options.mode || f), h = b.options.direction || c; a.effects.save(e, l), e.show(), a.effects.createWrapper(e).css({ overflow: "hidden" }); var j = h == "up" || h == "down" ? "top" : c, k = h == "up" || h == c ? d : "neg", g = b.options.distance || (j == "top" ? e.outerHeight({ margin: !0 }) : e.outerWidth({ margin: !0 })); i == f && e.css(j, k == d ? isNaN(g) ? "-" + g : -g : g); var m = {}; m[j] = (i == f ? k == d ? "+=" : "-=" : k == d ? "-=" : "+=") + g, e.animate(m, { queue: !1, duration: b.duration, easing: b.options.easing, complete: function () { i == "hide" && e.hide(), a.effects.restore(e, l), a.effects.removeWrapper(e), b.callback && b.callback.apply(this, arguments), e.dequeue() } }) }) } } (jQuery), function (a) { a.effects.transfer = function (b) { return this.queue(function () { var c = a(this), d = a(b.options.to), e = d.offset(), g = { top: e.top, left: e.left, height: d.innerHeight(), width: d.innerWidth() }, f = c.offset(), h = a('<div class="ui-effects-transfer"></div>').appendTo(document.body).addClass(b.options.className).css({ top: f.top, left: f.left, height: c.innerHeight(), width: c.innerWidth(), position: "absolute" }).animate(g, b.duration, b.options.easing, function () { h.remove(), b.callback && b.callback.apply(c[0], arguments), c.dequeue() }) }) } } (jQuery), function (a) { var f = "overflow", e = "height", l = "ui-accordion-icons", d = ".ui-icon", k = ".accordion", c = "tabIndex", i = "true", h = "false", b = "role", g = "ui-accordion-content-active", j = "ui-accordion ui-widget ui-helper-reset"; a.widget("ui.accordion", { options: { active: 0, animated: "slide", autoHeight: !0, clearStyle: !1, collapsible: !1, event: "click", fillSpace: !1, header: "> li > :first-child,> :not(li):even", icons: { header: "ui-icon-triangle-1-e", headerSelected: "ui-icon-triangle-1-s" }, navigation: !1, navigationFilter: function () { return this.href.toLowerCase() === location.href.toLowerCase() } }, _create: function () { var l = "ui-state-focus", f = "ui-state-hover", d = this, e = d.options; d.running = 0, d.element.addClass(j).children("li").addClass("ui-accordion-li-fix"), d.headers = d.element.find(e.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all").bind("mouseenter.accordion", function () { if (e.disabled) return; a(this).addClass(f) }).bind("mouseleave.accordion", function () { if (e.disabled) return; a(this).removeClass(f) }).bind("focus.accordion", function () { if (e.disabled) return; a(this).addClass(l) }).bind("blur.accordion", function () { if (e.disabled) return; a(this).removeClass(l) }), d.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom"); if (e.navigation) { var m = d.element.find("a").filter(e.navigationFilter).eq(0); if (m.length) { var n = m.closest(".ui-accordion-header"); n.length ? (d.active = n) : (d.active = m.closest(".ui-accordion-content").prev()) } } d.active = d._findActive(d.active || e.active).addClass("ui-state-default ui-state-active").toggleClass("ui-corner-all").toggleClass("ui-corner-top"), d.active.next().addClass(g), d._createIcons(), d.resize(), d.element.attr(b, "tablist"), d.headers.attr(b, "tab").bind("keydown.accordion", function (a) { return d._keydown(a) }).next().attr(b, "tabpanel"), d.headers.not(d.active || "").attr({ "aria-expanded": h, "aria-selected": h, tabIndex: -1 }).next().hide(), d.active.length ? d.active.attr({ "aria-expanded": i, "aria-selected": i, tabIndex: 0 }) : d.headers.eq(0).attr(c, 0), a.browser.safari || d.headers.find("a").attr(c, -1), e.event && d.headers.bind(e.event.split(" ").join(".accordion ") + k, function (a) { d._clickHandler.call(d, a, this), a.preventDefault() }) }, _createIcons: function () { var b = this, c = b.options; c.icons && (a("<span></span>").addClass("ui-icon " + c.icons.header).prependTo(b.headers), b.active.children(d).toggleClass(c.icons.header).toggleClass(c.icons.headerSelected), b.element.addClass(l)) }, _destroyIcons: function () { this.headers.children(d).remove(), this.element.removeClass(l) }, destroy: function () { var d = this, f = d.options; d.element.removeClass(j).removeAttr(b), d.headers.unbind(k).removeClass("ui-accordion-header ui-accordion-disabled ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr(b).removeAttr("aria-expanded").removeAttr("aria-selected").removeAttr(c), d.headers.find("a").removeAttr(c), d._destroyIcons(); var g = d.headers.next().css("display", "").removeAttr(b).removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-accordion-disabled ui-state-disabled"); return (f.autoHeight || f.fillHeight) && g.css(e, ""), a.Widget.prototype.destroy.call(d) }, _setOption: function (c, d) { var b = this; a.Widget.prototype._setOption.apply(b, arguments), c == "active" && b.activate(d), c == "icons" && (b._destroyIcons(), d && b._createIcons()), c == "disabled" && b.headers.add(b.headers.next())[d ? "addClass" : "removeClass"]("ui-accordion-disabled ui-state-disabled") }, _keydown: function (b) { var d = this; if (d.options.disabled || b.altKey || b.ctrlKey) return; var e = a.ui.keyCode, g = d.headers.length, h = d.headers.index(b.target), f = !1; switch (b.keyCode) { case e.RIGHT: case e.DOWN: f = d.headers[(h + 1) % g]; break; case e.LEFT: case e.UP: f = d.headers[(h - 1 + g) % g]; break; case e.SPACE: case e.ENTER: d._clickHandler({ target: b.target }, b.target), b.preventDefault() } return f ? (a(b.target).attr(c, -1), a(f).attr(c, 0), f.focus(), !1) : !0 }, resize: function () { var b = this, d = b.options, c; if (d.fillSpace) { if (a.browser.msie) { var e = b.element.parent().css(f); b.element.parent().css(f, "hidden") } c = b.element.parent().height(), a.browser.msie && b.element.parent().css(f, e), b.headers.each(function () { c -= a(this).outerHeight(!0) }), b.headers.next().each(function () { a(this).height(Math.max(0, c - a(this).innerHeight() + a(this).height())) }).css(f, "auto") } else d.autoHeight && (c = 0, b.headers.next().each(function () { c = Math.max(c, a(this).height("").height()) }).height(c)); return b }, activate: function (b) { var a = this; a.options.active = b; var c = a._findActive(b)[0]; return a._clickHandler({ target: c }, c), a }, _findActive: function (b) { var c = this; return b ? typeof b == "number" ? c.headers.filter(":eq(" + b + ")") : c.headers.not(c.headers.not(b)) : b === !1 ? a([]) : c.headers.filter(":eq(0)") }, _clickHandler: function (l, n) { var i = "ui-state-default ui-corner-all", h = "ui-state-active ui-corner-top", b = this, c = b.options; if (c.disabled) return; if (!l.target) { if (!c.collapsible) return; b.active.removeClass(h).addClass(i).children(d).removeClass(c.icons.headerSelected).addClass(c.icons.header), b.active.next().addClass(g); var j = b.active.next(), m = { options: c, newHeader: a([]), oldHeader: c.active, newContent: a([]), oldContent: j }, k = b.active = a([]); b._toggle(k, j, m); return } var e = a(l.currentTarget || n), f = e[0] === b.active[0]; c.active = c.collapsible && f ? !1 : b.headers.index(e); if (b.running || !c.collapsible && f) return; var o = b.active, k = e.next(), j = b.active.next(), m = { options: c, newHeader: f && c.collapsible ? a([]) : e, oldHeader: b.active, newContent: f && c.collapsible ? a([]) : k, oldContent: j }, p = b.headers.index(b.active[0]) > b.headers.index(e[0]); b.active = f ? a([]) : e, b._toggle(k, j, m, f, p), o.removeClass(h).addClass(i).children(d).removeClass(c.icons.headerSelected).addClass(c.icons.header), f || (e.removeClass(i).addClass(h).children(d).removeClass(c.icons.header).addClass(c.icons.headerSelected), e.next().addClass(g)); return }, _toggle: function (f, e, n, l, m) { var c = this, b = c.options; c.toShow = f, c.toHide = e, c.data = n; var k = function () { return !c ? void 0 : c._completed.apply(c, arguments) }; c._trigger("changestart", null, c.data), c.running = e.size() === 0 ? f.size() : e.size(); if (b.animated) { var g = {}; b.collapsible && l ? (g = { toShow: a([]), toHide: e, complete: k, down: m, autoHeight: b.autoHeight || b.fillSpace }) : (g = { toShow: f, toHide: e, complete: k, down: m, autoHeight: b.autoHeight || b.fillSpace }), b.proxied || (b.proxied = b.animated), b.proxiedDuration || (b.proxiedDuration = b.duration), b.animated = a.isFunction(b.proxied) ? b.proxied(g) : b.proxied, b.duration = a.isFunction(b.proxiedDuration) ? b.proxiedDuration(g) : b.proxiedDuration; var j = a.ui.accordion.animations, o = b.duration, d = b.animated; d && !j[d] && !a.easing[d] && (d = "slide"), j[d] || (j[d] = function (a) { this.slide(a, { easing: d, duration: o || 700 }) }), j[d](g) } else b.collapsible && l ? f.toggle() : (e.hide(), f.show()), k(!0); e.prev().attr({ "aria-expanded": h, "aria-selected": h, tabIndex: -1 }).blur(), f.prev().attr({ "aria-expanded": i, "aria-selected": i, tabIndex: 0 }).focus() }, _completed: function (b) { var a = this; a.running = b ? 0 : --a.running; if (a.running) return; a.options.clearStyle && a.toShow.add(a.toHide).css({ height: "", overflow: "" }), a.toHide.removeClass(g), a.toHide.length && (a.toHide.parent()[0].className = a.toHide.parent()[0].className), a._trigger("change", null, a.data) } }), a.extend(a.ui.accordion, { version: "1.8.21", animations: { slide: function (b, l) { var c = "hide", g = "show"; b = a.extend({ easing: "swing", duration: 300 }, b, l); if (!b.toHide.size()) { b.toShow.animate({ height: g, paddingTop: g, paddingBottom: g }, b); return } if (!b.toShow.size()) { b.toHide.animate({ height: c, paddingTop: c, paddingBottom: c }, b); return } var m = b.toShow.css(f), i = 0, h = {}, j = {}, n = [e, "paddingTop", "paddingBottom"], k, d = b.toShow; k = d[0].style.width, d.width(d.parent().width() - parseFloat(d.css("paddingLeft")) - parseFloat(d.css("paddingRight")) - (parseFloat(d.css("borderLeftWidth")) || 0) - (parseFloat(d.css("borderRightWidth")) || 0)), a.each(n, function (f, d) { j[d] = c; var e = ("" + a.css(b.toShow[0], d)).match(/^([\d+-.]+)(.*)$/); h[d] = { value: e[1], unit: e[2] || "px"} }), b.toShow.css({ height: 0, overflow: "hidden" }).show(), b.toHide.filter(":hidden").each(b.complete).end().filter(":visible").animate(j, { step: function (c, a) { a.prop == e && (i = a.end - a.start === 0 ? 0 : (a.now - a.start) / (a.end - a.start)), b.toShow[0].style[a.prop] = i * h[a.prop].value + h[a.prop].unit }, duration: b.duration, easing: b.easing, complete: function () { b.autoHeight || b.toShow.css(e, ""), b.toShow.css({ width: k, overflow: m }), b.complete() } }) }, bounceslide: function (a) { this.slide(a, { easing: a.down ? "easeOutBounce" : "swing", duration: a.down ? 1e3 : 200 }) } } }) } (jQuery), function (a) { var g = "ui-autocomplete-loading", i = "beforeunload", c = ":visible", d = "item.autocomplete", e = "autocomplete", h = "ui-autocomplete-input", b = null, f = "body", j = 0; a.widget("ui.autocomplete", { options: { appendTo: f, autoFocus: !1, delay: 300, minLength: 1, position: { my: "left top", at: "left bottom", collision: "none" }, source: b }, pending: 0, _create: function () { var j = this, g = j, l = j.element[0].ownerDocument, k; j.isMultiLine = j.element.is("textarea"), j.element.addClass(h).attr(e, "off").attr({ role: "textbox", "aria-autocomplete": "list", "aria-haspopup": "true" }).bind("keydown.autocomplete", function (c) { if (g.options.disabled || g.element.propAttr("readOnly")) return; k = !1; var d = a.ui.keyCode; switch (c.keyCode) { case d.PAGE_UP: g._move("previousPage", c); break; case d.PAGE_DOWN: g._move("nextPage", c); break; case d.UP: g._keyEvent("previous", c); break; case d.DOWN: g._keyEvent("next", c); break; case d.ENTER: case d.NUMPAD_ENTER: g.menu.active && (k = !0, c.preventDefault()); case d.TAB: if (!g.menu.active) return; g.menu.select(c); break; case d.ESCAPE: g.element.val(g.term), g.close(c); break; default: clearTimeout(g.searching), g.searching = setTimeout(function () { g.term != g.element.val() && (g.selectedItem = b, g.search(b, c)) }, g.options.delay) } }).bind("keypress.autocomplete", function (a) { k && (k = !1, a.preventDefault()) }).bind("focus.autocomplete", function () { if (g.options.disabled) return; g.selectedItem = b, g.previous = g.element.val() }).bind("blur.autocomplete", function (a) { if (g.options.disabled) return; clearTimeout(g.searching), g.closing = setTimeout(function () { g.close(a), g._change(a) }, 150) }), j._initSource(), j.menu = a("<ul></ul>").addClass("ui-autocomplete").appendTo(a(j.options.appendTo || f, l)[0]).mousedown(function (c) { var b = g.menu.element[0]; a(c.target).closest(".ui-menu-item").length || setTimeout(function () { a(document).one("mousedown", function (c) { c.target !== g.element[0] && c.target !== b && !a.ui.contains(b, c.target) && g.close() }) }, 1), setTimeout(function () { clearTimeout(g.closing) }, 13) }).menu({ focus: function (a, c) { var b = c.item.data(d); !1 !== g._trigger("focus", a, { item: b }) && /^key/.test(a.originalEvent.type) && g.element.val(b.value) }, selected: function (b, e) { var a = e.item.data(d), c = g.previous; g.element[0] !== l.activeElement && (g.element.focus(), g.previous = c, setTimeout(function () { g.previous = c, g.selectedItem = a }, 1)), !1 !== g._trigger("select", b, { item: a }) && g.element.val(a.value), g.term = g.element.val(), g.close(b), g.selectedItem = a }, blur: function () { g.menu.element.is(c) && g.element.val() !== g.term && g.element.val(g.term) } }).zIndex(j.element.zIndex() + 1).css({ top: 0, left: 0 }).hide().data("menu"), a.fn.bgiframe && j.menu.element.bgiframe(), g.beforeunloadHandler = function () { g.element.removeAttr(e) }, a(window).bind(i, g.beforeunloadHandler) }, destroy: function () { var b = this; b.element.removeClass(h).removeAttr(e).removeAttr("role").removeAttr("aria-autocomplete").removeAttr("aria-haspopup"), b.menu.element.remove(), a(window).unbind(i, b.beforeunloadHandler), a.Widget.prototype.destroy.call(b) }, _setOption: function (c, d) { var b = this; a.Widget.prototype._setOption.apply(b, arguments), c === "source" && b._initSource(), c === "appendTo" && b.menu.element.appendTo(a(d || f, b.element[0].ownerDocument)[0]), c === "disabled" && d && b.xhr && b.xhr.abort() }, _initSource: function () { var b = this, c = b, d, e; a.isArray(b.options.source) ? (d = b.options.source, b.source = function (b, c) { c(a.ui.autocomplete.filter(d, b.term)) }) : typeof b.options.source == "string" ? (e = b.options.source, b.source = function (d, b) { c.xhr && c.xhr.abort(), c.xhr = a.ajax({ url: e, data: d, dataType: "json", success: function (a) { b(a) }, error: function () { b([]) } }) }) : (b.source = b.options.source) }, search: function (c, d) { var a = this; c = c != b ? c : a.element.val(), a.term = a.element.val(); if (c.length < a.options.minLength) return a.close(d); clearTimeout(a.closing); return a._trigger("search", d) === !1 ? void 0 : a._search(c) }, _search: function (b) { var a = this; a.pending++, a.element.addClass(g), a.source({ term: b }, a._response()) }, _response: function () { var a = this, b = ++j; return function (c) { b === j && a.__response(c), a.pending--, a.pending || a.element.removeClass(g) } }, __response: function (b) { var a = this; !a.options.disabled && b && b.length ? (b = a._normalize(b), a._suggest(b), a._trigger("open")) : a.close() }, close: function (b) { var a = this; clearTimeout(a.closing), a.menu.element.is(c) && (a.menu.element.hide(), a.menu.deactivate(), a._trigger("close", b)) }, _change: function (b) { var a = this; a.previous !== a.element.val() && a._trigger("change", b, { item: a.selectedItem }) }, _normalize: function (b) { return b.length && b[0].label && b[0].value ? b : a.map(b, function (b) { return typeof b == "string" ? { label: b, value: b} : a.extend({ label: b.label || b.value, value: b.value || b.label }, b) }) }, _suggest: function (d) { var b = this, c = b.menu.element.empty().zIndex(b.element.zIndex() + 1); b._renderMenu(c, d), b.menu.deactivate(), b.menu.refresh(), c.show(), b._resizeMenu(), c.position(a.extend({ of: b.element }, b.options.position)), b.options.autoFocus && b.menu.next(new a.Event("mouseover")) }, _resizeMenu: function () { var a = this.menu.element; a.outerWidth(Math.max(a.width("").outerWidth() + 1, this.element.outerWidth())) }, _renderMenu: function (b, c) { var d = this; a.each(c, function (c, a) { d._renderItem(b, a) }) }, _renderItem: function (c, b) { return a("<li></li>").data(d, b).append(a("<a></a>").text(b.label)).appendTo(c) }, _move: function (d, e) { var a = this; if (!a.menu.element.is(c)) { a.search(b, e); return } if (a.menu.first() && /^previous/.test(d) || a.menu.last() && /^next/.test(d)) { a.element.val(a.term), a.menu.deactivate(); return } a.menu[d](e) }, widget: function () { return this.menu.element }, _keyEvent: function (b, a) { if (!this.isMultiLine || this.menu.element.is(c)) this._move(b, a), a.preventDefault() } }), a.extend(a.ui.autocomplete, { escapeRegex: function (a) { return a.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&") }, filter: function (b, c) { var d = new RegExp(a.ui.autocomplete.escapeRegex(c), "i"); return a.grep(b, function (a) { return d.test(a.label || a.value || a) }) } }) } (jQuery), function (b) { var a = ".ui-menu-item", d = ".ui-menu-item:last", c = ".ui-menu-item:first", f = "ui-state-hover", e = "ui-active-menuitem"; b.widget("ui.menu", { _create: function () { var a = this; this.element.addClass("ui-menu ui-widget ui-widget-content ui-corner-all").attr({ role: "listbox", "aria-activedescendant": e }).click(function (c) { if (!b(c.target).closest(".ui-menu-item a").length) return; c.preventDefault(), a.select(c) }), this.refresh() }, refresh: function () { var a = this, c = this.element.children("li:not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role", "menuitem"); c.children("a").addClass("ui-corner-all").attr("tabindex", -1).mouseenter(function (c) { a.activate(c, b(this).parent()) }).mouseleave(function () { a.deactivate() }) }, activate: function (h, b) { var a = this; a.deactivate(); if (a.hasScroll()) { var c = b.offset().top - a.element.offset().top, d = a.element.scrollTop(), g = a.element.height(); c < 0 ? a.element.scrollTop(d + c) : c >= g && a.element.scrollTop(d + c - g + b.height()) } a.active = b.eq(0).children("a").addClass(f).attr("id", e).end(), a._trigger("focus", h, { item: b }) }, deactivate: function () { var a = this; if (!a.active) return; a.active.children("a").removeClass(f).removeAttr("id"), a._trigger("blur"), a.active = null }, next: function (a) { this.move("next", c, a) }, previous: function (a) { this.move("prev", d, a) }, first: function () { return this.active && !this.active.prevAll(a).length }, last: function () { return this.active && !this.active.nextAll(a).length }, move: function (f, d, c) { var b = this; if (!b.active) { b.activate(c, b.element.children(d)); return } var e = b.active[f + "All"](a).eq(0); e.length ? b.activate(c, e) : b.activate(c, b.element.children(d)) }, nextPage: function (f) { var e = this; if (e.hasScroll()) { if (!e.active || e.last()) { e.activate(f, e.element.children(c)); return } var h = e.active.offset().top, i = e.element.height(), g = e.element.children(a).filter(function () { var a = b(this).offset().top - h - i + b(this).height(); return a < 10 && a > -10 }); g.length || (g = e.element.children(d)), e.activate(f, g) } else e.activate(f, e.element.children(a).filter(!e.active || e.last() ? ":first" : ":last")) }, previousPage: function (f) { var e = this; if (e.hasScroll()) { if (!e.active || e.first()) { e.activate(f, e.element.children(d)); return } var h = e.active.offset().top, i = e.element.height(), g = e.element.children(a).filter(function () { var a = b(this).offset().top - h + i - b(this).height(); return a < 10 && a > -10 }); g.length || (g = e.element.children(c)), e.activate(f, g) } else e.activate(f, e.element.children(a).filter(!e.active || e.first() ? ":last" : ":first")) }, hasScroll: function () { return this.element.height() < this.element[b.fn.prop ? "prop" : "attr"]("scrollHeight") }, select: function (a) { this._trigger("selected", a, { item: this.active }) } }) } (jQuery), function (b) { var q = "ui-buttonset", k = ":checked", p = "ui-helper-hidden-accessible", n = "input", j = "false", e = "widget", i = "true", c = "aria-pressed", a = "ui-state-active", h = "radio", g = "checkbox", m = "title", d = "disabled", f = null, l = ":ui-button", r, s, t, o, u = "ui-button ui-widget ui-state-default ui-corner-all", x = "ui-state-hover ui-state-active ", v = "ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only", y = function () { var a = b(this).find(l); setTimeout(function () { a.button("refresh") }, 1) }, w = function (a) { var c = a.name, e = a.form, d = b([]); return c && (e ? (d = b(e).find("[name='" + c + "']")) : (d = b("[name='" + c + "']", a.ownerDocument).filter(function () { return !this.form }))), d }; b.widget("ui.button", { options: { disabled: f, text: !0, label: f, icons: { primary: f, secondary: f} }, _create: function () { var z = "mouseup.button", x = "mousedown.button", p = "click.button", q = "ui-state-hover", v = "reset.button", k = this; k.element.closest("form").unbind(v).bind(v, y), typeof k.options.disabled != "boolean" ? (k.options.disabled = !!k.element.propAttr(d)) : k.element.propAttr(d, k.options.disabled), k._determineButtonType(), k.hasTitle = !!k.buttonElement.attr(m); var n = k, l = k.options, A = k.type === g || k.type === h, C = q + (A ? "" : " ui-state-active"), B = "ui-state-focus"; l.label === f && (l.label = k.buttonElement.html()), k.buttonElement.addClass(u).attr("role", "button").bind("mouseenter.button", function () { if (l.disabled) return; b(this).addClass(q), this === r && b(this).addClass(a) }).bind("mouseleave.button", function () { if (l.disabled) return; b(this).removeClass(C) }).bind(p, function (a) { l.disabled && (a.preventDefault(), a.stopImmediatePropagation()) }), k.element.bind("focus.button", function () { n.buttonElement.addClass(B) }).bind("blur.button", function () { n.buttonElement.removeClass(B) }), A && (k.element.bind("change.button", function () { if (o) return; n.refresh() }), k.buttonElement.bind(x, function (a) { if (l.disabled) return; o = !1, s = a.pageX, t = a.pageY }).bind(z, function (a) { if (l.disabled) return; if (s !== a.pageX || t !== a.pageY) o = !0 })), k.type === g ? k.buttonElement.bind(p, function () { if (l.disabled || o) return !1; b(this).toggleClass(a), n.buttonElement.attr(c, n.element[0].checked) }) : k.type === h ? k.buttonElement.bind(p, function () { if (l.disabled || o) return !1; b(this).addClass(a), n.buttonElement.attr(c, i); var d = n.element[0]; w(d).not(d).map(function () { return b(this).button(e)[0] }).removeClass(a).attr(c, j) }) : (k.buttonElement.bind(x, function () { if (l.disabled) return !1; b(this).addClass(a), r = this, b(document).one("mouseup", function () { r = f }) }).bind(z, function () { if (l.disabled) return !1; b(this).removeClass(a) }).bind("keydown.button", function (c) { if (l.disabled) return !1; (c.keyCode == b.ui.keyCode.SPACE || c.keyCode == b.ui.keyCode.ENTER) && b(this).addClass(a) }).bind("keyup.button", function () { b(this).removeClass(a) }), k.buttonElement.is("a") && k.buttonElement.keyup(function (a) { a.keyCode === b.ui.keyCode.SPACE && b(this).click() })), k._setOption(d, l.disabled), k._resetButton() }, _determineButtonType: function () { var b = this; b.element.is(":checkbox") ? (b.type = g) : b.element.is(":radio") ? (b.type = h) : b.element.is(n) ? (b.type = n) : (b.type = "button"); if (b.type === g || b.type === h) { var d = b.element.parents().filter(":last"), e = "label[for='" + b.element.attr("id") + "']"; b.buttonElement = d.find(e), b.buttonElement.length || (d = d.length ? d.siblings() : b.element.siblings(), b.buttonElement = d.filter(e), b.buttonElement.length || (b.buttonElement = d.find(e))), b.element.addClass(p); var f = b.element.is(k); f && b.buttonElement.addClass(a), b.buttonElement.attr(c, f) } else b.buttonElement = b.element }, widget: function () { return this.buttonElement }, destroy: function () { var a = this; a.element.removeClass(p), a.buttonElement.removeClass(u + " " + x + " " + v).removeAttr("role").removeAttr(c).html(a.buttonElement.find(".ui-button-text").html()), a.hasTitle || a.buttonElement.removeAttr(m), b.Widget.prototype.destroy.call(a) }, _setOption: function (c, e) { var a = this; b.Widget.prototype._setOption.apply(a, arguments); if (c === d) { e ? a.element.propAttr(d, !0) : a.element.propAttr(d, !1); return } a._resetButton() }, refresh: function () { var f = this, l = f.element.is(":disabled"); l !== f.options.disabled && f._setOption(d, l), f.type === h ? w(f.element[0]).each(function () { b(this).is(k) ? b(this).button(e).addClass(a).attr(c, i) : b(this).button(e).removeClass(a).attr(c, j) }) : f.type === g && (f.element.is(k) ? f.buttonElement.addClass(a).attr(c, i) : f.buttonElement.removeClass(a).attr(c, j)) }, _resetButton: function () { var e = "'></span>", a = this; if (a.type === n) { a.options.label && a.element.val(a.options.label); return } var d = a.buttonElement.removeClass(v), h = b("<span></span>", a.element[0].ownerDocument).addClass("ui-button-text").html(a.options.label).appendTo(d.empty()).text(), c = a.options.icons, g = c.primary && c.secondary, f = []; c.primary || c.secondary ? (a.options.text && f.push("ui-button-text-icon" + (g ? "s" : c.primary ? "-primary" : "-secondary")), c.primary && d.prepend("<span class='ui-button-icon-primary ui-icon " + c.primary + e), c.secondary && d.append("<span class='ui-button-icon-secondary ui-icon " + c.secondary + e), a.options.text || (f.push(g ? "ui-button-icons-only" : "ui-button-icon-only"), a.hasTitle || d.attr(m, h))) : f.push("ui-button-text-only"), d.addClass(f.join(" ")) } }), b.widget("ui.buttonset", { options: { items: ":button, :submit, :reset, :checkbox, :radio, a, :data(button)" }, _create: function () { this.element.addClass(q) }, _init: function () { this.refresh() }, _setOption: function (a, c) { a === d && this.buttons.button("option", a, c), b.Widget.prototype._setOption.apply(this, arguments) }, refresh: function () { var c = "ui-corner-left", a = "ui-corner-right", d = this, f = d.element.css("direction") === "rtl"; d.buttons = d.element.find(d.options.items).filter(l).button("refresh").end().not(l).button().end().map(function () { return b(this).button(e)[0] }).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(f ? a : c).end().filter(":last").addClass(f ? c : a).end().end() }, destroy: function () { this.element.removeClass(q), this.buttons.map(function () { return b(this).button(e)[0] }).removeClass("ui-corner-left ui-corner-right").end().button("destroy"), b.Widget.prototype.destroy.call(this) } }) } (jQuery), function (a, v) { var Q = "&#xa0;", P = "</div>", o = ">", jb = "D, d M yy", hb = "D, d M y", gb = "yy-mm-dd", p = "m", l = "d", f = "'", k = "y", r = "@", d = 10, O = "function", eb = "gotoCurrent", db = "showCurrentAtPos", cb = ":disabled", bb = ":visible", ab = "showOptions", S = "iframe.ui-datepicker-cover", Z = "duration", Y = "showAnim", N = "absolute", h = "D", g = -1, e = "M", t = "stepMonths", X = "onSelect", D = "max", C = "min", i = "string", M = "disabled", W = "select.ui-datepicker-month, select.ui-datepicker-year", V = "ui-state-disabled", B = "px", L = "left", n = 100, K = "body", J = "dayNamesShort", I = "dayNames", H = "monthNamesShort", G = "monthNames", m = "dateFormat", F = "button", A = "</span>", j = '">', s = "isRTL", U = "getData.datepicker", T = "setData.datepicker", q = "input", z = "span", y = "div", x = "object", R = ".ui-datepicker-calendar", w = "focus", b = "", c = null; function kb() { var d = this; d.debug = !1, d._curInst = c, d._keyEvent = !1, d._disabledInputs = [], d._datepickerShowing = !1, d._inDialog = !1, d._mainDivId = "ui-datepicker-div", d._inlineClass = "ui-datepicker-inline", d._appendClass = "ui-datepicker-append", d._triggerClass = "ui-datepicker-trigger", d._dialogClass = "ui-datepicker-dialog", d._disableClass = "ui-datepicker-disabled", d._unselectableClass = "ui-datepicker-unselectable", d._currentClass = "ui-datepicker-current-day", d._dayOverClass = "ui-datepicker-days-cell-over", d.regional = [], d.regional[b] = { fn: c, closeText: "Done", prevText: "Prev", nextText: "Next", currentText: "Today", monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"], weekHeader: "Wk", dateFormat: "mm/dd/yy", firstDay: 0, isRTL: !1, showMonthAfterYear: !1, yearSuffix: b }, d._defaults = { fn: c, showOn: w, showAnim: "fadeIn", showOptions: {}, defaultDate: c, appendText: b, buttonText: "...", buttonImage: b, buttonImageOnly: !1, hideIfNoPrevNext: !1, navigationAsDateFormat: !1, gotoCurrent: !1, changeMonth: !1, changeYear: !1, yearRange: "c-10:c+10", showOtherMonths: !1, selectOtherMonths: !1, showWeek: !1, calculateWeek: d.iso8601Week, shortYearCutoff: "+10", minDate: c, maxDate: c, duration: "fast", beforeShowDay: c, beforeShow: c, onSelect: c, onChangeMonthYear: c, onClose: c, numberOfMonths: 1, showCurrentAtPos: 0, stepMonths: 1, stepBigMonths: 12, altField: b, altFormat: b, constrainInput: !0, showButtonPanel: !1, autoSize: !1, disabled: !1 }, a.extend(d._defaults, d.regional[b]), d.dpDiv = lb(a('<div id="' + d._mainDivId + '" class="ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>')) } function lb(b) { var c = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a"; return b.bind("mouseout", function (d) { var b = a(d.target).closest(c); if (!b.length) return; b.removeClass("ui-state-hover ui-datepicker-prev-hover ui-datepicker-next-hover") }).bind("mouseover", function (f) { var e = "ui-state-hover", d = a(f.target).closest(c); if (a.datepicker._isDisabledDatepicker(ib.inline ? b.parent()[0] : ib.input[0]) || !d.length) return; d.parents(R).find("a").removeClass(e), d.addClass(e), d.hasClass("ui-datepicker-prev") && d.addClass("ui-datepicker-prev-hover"), d.hasClass("ui-datepicker-next") && d.addClass("ui-datepicker-next-hover") }) } function fb(e, b) { a.extend(e, b); for (var d in b) if (b[d] == c || b[d] == v) e[d] = b[d]; return e } a.extend(a.ui, { datepicker: { version: "1.8.21"} }); var u = "datepicker", E = (new Date).getTime(), ib; a.extend(kb.prototype, { markerClassName: "hasDatepicker", maxRows: 4, log: function () { this.debug && console.log.apply(b, arguments) }, _widgetDatepicker: function () { return this.dpDiv }, setDefaults: function (a) { return fb(this._defaults, a || {}), this }, _attachDatepicker: function (b, k) { var d = this, e = c; for (var g in d._defaults) { var f = b.getAttribute("date:" + g); if (f) { e = e || {}; try { e[g] = eval(f) } catch (l) { e[g] = f } } } var h = b.nodeName.toLowerCase(), j = h == y || h == z; b.id || (d.uuid += 1, b.id = "dp" + d.uuid); var i = d._newInst(a(b), j); i.settings = a.extend({}, k || {}, e || {}), h == q ? d._connectDatepicker(b, i) : j && d._inlineDatepicker(b, i) }, _newInst: function (b, c) { var d = b[0].id.replace(/([^A-Za-z0-9_-])/g, "\\\\$1"); return { id: d, input: b, selectedDay: 0, selectedMonth: 0, selectedYear: 0, drawMonth: 0, drawYear: 0, inline: c, dpDiv: c ? lb(a('<div class="' + this._inlineClass + ' ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>')) : this.dpDiv} }, _connectDatepicker: function (d, c) { var b = this, e = a(d); c.append = a([]), c.trigger = a([]); if (e.hasClass(b.markerClassName)) return; b._attachments(e, c), e.addClass(b.markerClassName).keydown(b._doKeyDown).keypress(b._doKeyPress).keyup(b._doKeyUp).bind(T, function (d, a, b) { c.settings[a] = b }).bind(U, function (b, a) { return this._get(c, a) }), b._autoSize(c), a.data(d, u, c), c.settings.disabled && b._disableDatepicker(d) }, _attachments: function (e, c) { var d = this, i = d._get(c, "appendText"), k = d._get(c, s); c.append && c.append.remove(), i && (c.append = a('<span class="' + d._appendClass + j + i + A), e[k ? "before" : "after"](c.append)), e.unbind(w, d._showDatepicker), c.trigger && c.trigger.remove(); var g = d._get(c, "showOn"); (g == w || g == "both") && e.focus(d._showDatepicker); if (g == F || g == "both") { var f = d._get(c, "buttonText"), h = d._get(c, "buttonImage"); c.trigger = a(d._get(c, "buttonImageOnly") ? a("<img/>").addClass(d._triggerClass).attr({ src: h, alt: f, title: f }) : a('<button type="button"></button>').addClass(d._triggerClass).html(h == b ? f : a("<img/>").attr({ src: h, alt: f, title: f }))), e[k ? "before" : "after"](c.trigger), c.trigger.click(function () { return a.datepicker._datepickerShowing && a.datepicker._lastInput == e[0] ? a.datepicker._hideDatepicker() : a.datepicker._datepickerShowing && a.datepicker._lastInput != e[0] ? (a.datepicker._hideDatepicker(), a.datepicker._showDatepicker(e[0])) : a.datepicker._showDatepicker(e[0]), !1 }) } }, _autoSize: function (a) { var b = this; if (b._get(a, "autoSize") && !a.inline) { var c = new Date(2009, 11, 20), d = b._get(a, m); if (d.match(/[DM]/)) { var e = function (b) { for (var c = 0, d = 0, a = 0; a < b.length; a++) b[a].length > c && (c = b[a].length, d = a); return d }; c.setMonth(e(b._get(a, d.match(/MM/) ? G : H))), c.setDate(e(b._get(a, d.match(/DD/) ? I : J)) + 20 - c.getDay()) } a.input.attr("size", b._formatDate(a, c).length) } }, _inlineDatepicker: function (d, b) { var c = this, e = a(d); if (e.hasClass(c.markerClassName)) return; e.addClass(c.markerClassName).append(b.dpDiv).bind(T, function (d, a, c) { b.settings[a] = c }).bind(U, function (c, a) { return this._get(b, a) }), a.data(d, u, b), c._setDate(b, c._getDefaultDate(b), !0), c._updateDatepicker(b), c._updateAlternate(b), b.settings.disabled && c._disableDatepicker(d), b.dpDiv.css("display", "block") }, _dialogDatepicker: function (o, e, g, h, f) { var b = this, d = b._dialogInst; if (!d) { b.uuid += 1; var i = "dp" + b.uuid; b._dialogInput = a('<input type="text" id="' + i + '" style="position: absolute; top: -100px; width: 0px; z-index: -10;"/>'), b._dialogInput.keydown(b._doKeyDown), a(K).append(b._dialogInput), d = b._dialogInst = b._newInst(b._dialogInput, !1), d.settings = {}, a.data(b._dialogInput[0], u, d) } fb(d.settings, h || {}), e = e && e.constructor == Date ? b._formatDate(d, e) : e, b._dialogInput.val(e), b._pos = f ? f.length ? f : [f.pageX, f.pageY] : c; if (!b._pos) { var j = document.documentElement.clientWidth, k = document.documentElement.clientHeight, l = document.documentElement.scrollLeft || document.body.scrollLeft, m = document.documentElement.scrollTop || document.body.scrollTop; b._pos = [j / 2 - n + l, k / 2 - 150 + m] } return b._dialogInput.css(L, b._pos[0] + 20 + B).css("top", b._pos[1] + B), d.settings.onSelect = g, b._inDialog = !0, b.dpDiv.addClass(b._dialogClass), b._showDatepicker(b._dialogInput[0]), a.blockUI && a.blockUI(b.dpDiv), a.data(b._dialogInput[0], u, d), b }, _destroyDatepicker: function (c) { var b = this, d = a(c), f = a.data(c, u); if (!d.hasClass(b.markerClassName)) return; var e = c.nodeName.toLowerCase(); a.removeData(c, u), e == q ? (f.append.remove(), f.trigger.remove(), d.removeClass(b.markerClassName).unbind(w, b._showDatepicker).unbind("keydown", b._doKeyDown).unbind("keypress", b._doKeyPress).unbind("keyup", b._doKeyUp)) : (e == y || e == z) && d.removeClass(b.markerClassName).empty() }, _enableDatepicker: function (d) { var e = this, g = a(d), i = a.data(d, u); if (!g.hasClass(e.markerClassName)) return; var f = d.nodeName.toLowerCase(); if (f == q) d.disabled = !1, i.trigger.filter(F).each(function () { this.disabled = !1 }).end().filter("img").css({ opacity: "1.0", cursor: b }); else if (f == y || f == z) { var h = g.children("." + e._inlineClass); h.children().removeClass(V), h.find(W).removeAttr(M) } e._disabledInputs = a.map(e._disabledInputs, function (a) { return a == d ? c : a }) }, _disableDatepicker: function (d) { var b = this, f = a(d), h = a.data(d, u); if (!f.hasClass(b.markerClassName)) return; var e = d.nodeName.toLowerCase(); if (e == q) d.disabled = !0, h.trigger.filter(F).each(function () { this.disabled = !0 }).end().filter("img").css({ opacity: "0.5", cursor: "default" }); else if (e == y || e == z) { var g = f.children("." + b._inlineClass); g.children().addClass(V), g.find(W).attr(M, M) } b._disabledInputs = a.map(b._disabledInputs, function (a) { return a == d ? c : a }), b._disabledInputs[b._disabledInputs.length] = d }, _isDisabledDatepicker: function (b) { if (!b) return !1; for (var a = 0; a < this._disabledInputs.length; a++) if (this._disabledInputs[a] == b) return !0; return !1 }, _getInst: function (b) { try { return a.data(b, u) } catch (c) { throw "Missing instance data for this datepicker"; } }, _optionDatepicker: function (g, e, k) { var d = this, b = d._getInst(g); if (arguments.length == 2 && typeof e == i) return e == "defaults" ? a.extend({}, a.datepicker._defaults) : b ? e == "all" ? a.extend({}, b.settings) : d._get(b, e) : c; var f = e || {}; typeof e == i && (f = {}, f[e] = k); if (b) { d._curInst == b && d._hideDatepicker(); var l = d._getDateDatepicker(g, !0), h = d._getMinMaxDate(b, C), j = d._getMinMaxDate(b, D); fb(b.settings, f), h !== c && f.dateFormat !== v && f.minDate === v && (b.settings.minDate = d._formatDate(b, h)), j !== c && f.dateFormat !== v && f.maxDate === v && (b.settings.maxDate = d._formatDate(b, j)), d._attachments(a(g), b), d._autoSize(b), d._setDate(b, l), d._updateAlternate(b), d._updateDatepicker(b) } }, _changeDatepicker: function (a, b, c) { this._optionDatepicker(a, b, c) }, _refreshDatepicker: function (b) { var a = this._getInst(b); a && this._updateDatepicker(a) }, _setDateDatepicker: function (c, d) { var a = this, b = a._getInst(c); b && (a._setDate(b, d), a._updateDatepicker(b), a._updateAlternate(b)) }, _getDateDatepicker: function (b, d) { var a = this._getInst(b); return a && !a.inline && this._setDateFromField(a, d), a ? this._getDate(a) : c }, _doKeyDown: function (b) { var i = "stepBigMonths", d = a.datepicker._getInst(b.target), f = !0, j = d.dpDiv.is(".ui-datepicker-rtl"); d._keyEvent = !0; if (a.datepicker._datepickerShowing) switch (b.keyCode) { case 9: a.datepicker._hideDatepicker(), f = !1; break; case 13: var k = a("td." + a.datepicker._dayOverClass + ":not(." + a.datepicker._currentClass + ")", d.dpDiv); k[0] && a.datepicker._selectDay(b.target, d.selectedMonth, d.selectedYear, k[0]); var l = a.datepicker._get(d, X); if (l) { var m = a.datepicker._formatDate(d); l.apply(d.input ? d.input[0] : c, [m, d]) } else a.datepicker._hideDatepicker(); return !1; case 27: a.datepicker._hideDatepicker(); break; case 33: a.datepicker._adjustDate(b.target, b.ctrlKey ? -a.datepicker._get(d, i) : -a.datepicker._get(d, t), e); break; case 34: a.datepicker._adjustDate(b.target, b.ctrlKey ? +a.datepicker._get(d, i) : +a.datepicker._get(d, t), e); break; case 35: (b.ctrlKey || b.metaKey) && a.datepicker._clearDate(b.target), f = b.ctrlKey || b.metaKey; break; case 36: (b.ctrlKey || b.metaKey) && a.datepicker._gotoToday(b.target), f = b.ctrlKey || b.metaKey; break; case 37: (b.ctrlKey || b.metaKey) && a.datepicker._adjustDate(b.target, j ? 1 : g, h), f = b.ctrlKey || b.metaKey, b.originalEvent.altKey && a.datepicker._adjustDate(b.target, b.ctrlKey ? -a.datepicker._get(d, i) : -a.datepicker._get(d, t), e); break; case 38: (b.ctrlKey || b.metaKey) && a.datepicker._adjustDate(b.target, -7, h), f = b.ctrlKey || b.metaKey; break; case 39: (b.ctrlKey || b.metaKey) && a.datepicker._adjustDate(b.target, j ? g : 1, h), f = b.ctrlKey || b.metaKey, b.originalEvent.altKey && a.datepicker._adjustDate(b.target, b.ctrlKey ? +a.datepicker._get(d, i) : +a.datepicker._get(d, t), e); break; case 40: (b.ctrlKey || b.metaKey) && a.datepicker._adjustDate(b.target, 7, h), f = b.ctrlKey || b.metaKey; break; default: f = !1 } else b.keyCode == 36 && b.ctrlKey ? a.datepicker._showDatepicker(this) : (f = !1); f && (b.preventDefault(), b.stopPropagation()) }, _doKeyPress: function (b) { var c = a.datepicker._getInst(b.target); if (a.datepicker._get(c, "constrainInput")) { var d = a.datepicker._possibleChars(a.datepicker._get(c, m)), e = String.fromCharCode(b.charCode == v ? b.keyCode : b.charCode); return b.ctrlKey || b.metaKey || e < " " || !d || d.indexOf(e) > g } }, _doKeyUp: function (d) { var b = a.datepicker._getInst(d.target); if (b.input.val() != b.lastVal) try { var e = a.datepicker.parseDate(a.datepicker._get(b, m), b.input ? b.input.val() : c, a.datepicker._getFormatConfig(b)); e && (a.datepicker._setDateFromField(b), a.datepicker._updateAlternate(b), a.datepicker._updateDatepicker(b)) } catch (f) { a.datepicker.log(f) } return !0 }, _showDatepicker: function (e) { e = e.target || e, e.nodeName.toLowerCase() != q && (e = a(q, e.parentNode)[0]); if (a.datepicker._isDisabledDatepicker(e) || a.datepicker._lastInput == e) return; var d = a.datepicker._getInst(e); a.datepicker._curInst && a.datepicker._curInst != d && (a.datepicker._curInst.dpDiv.stop(!0, !0), d && a.datepicker._datepickerShowing && a.datepicker._hideDatepicker(a.datepicker._curInst.input[0])); var k = a.datepicker._get(d, "beforeShow"), l = k ? k.apply(e, [e, d]) : {}; if (l === !1) return; fb(d.settings, l), d.lastVal = c, a.datepicker._lastInput = e, a.datepicker._setDateFromField(d), a.datepicker._inDialog && (e.value = b), a.datepicker._pos || (a.datepicker._pos = a.datepicker._findPos(e), a.datepicker._pos[1] += e.offsetHeight); var f = !1; a(e).parents().each(function () { return f |= a(this).css("position") == "fixed", !f }), f && a.browser.opera && (a.datepicker._pos[0] -= document.documentElement.scrollLeft, a.datepicker._pos[1] -= document.documentElement.scrollTop); var h = { left: a.datepicker._pos[0], top: a.datepicker._pos[1] }; a.datepicker._pos = c, d.dpDiv.empty(), d.dpDiv.css({ position: N, display: "block", top: "-1000px" }), a.datepicker._updateDatepicker(d), h = a.datepicker._checkOffset(d, h, f), d.dpDiv.css({ position: a.datepicker._inDialog && a.blockUI ? "static" : f ? "fixed" : N, display: "none", left: h.left + B, top: h.top + B }); if (!d.inline) { var g = a.datepicker._get(d, Y), i = a.datepicker._get(d, Z), j = function () { var b = d.dpDiv.find(S); if (!!b.length) { var c = a.datepicker._getBorders(d.dpDiv); b.css({ left: -c[0], top: -c[1], width: d.dpDiv.outerWidth(), height: d.dpDiv.outerHeight() }) } }; d.dpDiv.zIndex(a(e).zIndex() + 1), a.datepicker._datepickerShowing = !0, a.effects && a.effects[g] ? d.dpDiv.show(g, a.datepicker._get(d, ab), i, j) : d.dpDiv[g || "show"](g ? i : c, j), (!g || !i) && j(), d.input.is(bb) && !d.input.is(cb) && d.input.focus(), a.datepicker._curInst = d } }, _updateDatepicker: function (d) { var e = this, k = e; k.maxRows = 4; var h = a.datepicker._getBorders(d.dpDiv); ib = d, d.dpDiv.empty().append(e._generateHTML(d)); var i = d.dpDiv.find(S); !i.length || i.css({ left: -h[0], top: -h[1], width: d.dpDiv.outerWidth(), height: d.dpDiv.outerHeight() }), d.dpDiv.find("." + e._dayOverClass + " a").mouseover(); var f = e._getNumberOfMonths(d), g = f[1], l = 17; d.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(b), g > 1 && d.dpDiv.addClass("ui-datepicker-multi-" + g).css("width", l * g + "em"), d.dpDiv[(f[0] != 1 || f[1] != 1 ? "add" : "remove") + "Class"]("ui-datepicker-multi"), d.dpDiv[(e._get(d, s) ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), d == a.datepicker._curInst && a.datepicker._datepickerShowing && d.input && d.input.is(bb) && !d.input.is(cb) && d.input[0] != document.activeElement && d.input.focus(); if (d.yearshtml) { var j = d.yearshtml; setTimeout(function () { j === d.yearshtml && d.yearshtml && d.dpDiv.find("select.ui-datepicker-year:first").replaceWith(d.yearshtml), j = d.yearshtml = c }, 0) } }, _getBorders: function (a) { var b = function (a) { return ({ thin: 1, medium: 2, thick: 3 })[a] || a }; return [parseFloat(b(a.css("border-left-width"))), parseFloat(b(a.css("border-top-width")))] }, _checkOffset: function (c, b, g) { var d = c.dpDiv.outerWidth(), e = c.dpDiv.outerHeight(), j = c.input ? c.input.outerWidth() : 0, h = c.input ? c.input.outerHeight() : 0, f = document.documentElement.clientWidth + a(document).scrollLeft(), i = document.documentElement.clientHeight + a(document).scrollTop(); return b.left -= this._get(c, s) ? d - j : 0, b.left -= g && b.left == c.input.offset().left ? a(document).scrollLeft() : 0, b.top -= g && b.top == c.input.offset().top + h ? a(document).scrollTop() : 0, b.left -= Math.min(b.left, b.left + d > f && f > d ? Math.abs(b.left + d - f) : 0), b.top -= Math.min(b.top, b.top + e > i && i > e ? Math.abs(e + h) : 0), b }, _findPos: function (b) { var d = this._getInst(b), e = this._get(d, s); while (b && (b.type == "hidden" || b.nodeType != 1 || a.expr.filters.hidden(b))) b = b[e ? "previousSibling" : "nextSibling"]; var c = a(b).offset(); return [c.left, c.top] }, _hideDatepicker: function (h) { var e = this, d = e._curInst; if (!d || h && d != a.data(h, u)) return; if (e._datepickerShowing) { var f = e._get(d, Y), i = e._get(d, Z), g = function () { a.datepicker._tidyDialog(d) }; a.effects && a.effects[f] ? d.dpDiv.hide(f, a.datepicker._get(d, ab), i, g) : d.dpDiv[f == "slideDown" ? "slideUp" : f == "fadeIn" ? "fadeOut" : "hide"](f ? i : c, g), f || g(), e._datepickerShowing = !1; var j = e._get(d, "onClose"); j && j.apply(d.input ? d.input[0] : c, [d.input ? d.input.val() : b, d]), e._lastInput = c, e._inDialog && (e._dialogInput.css({ position: N, left: "0", top: "-100px" }), a.blockUI && (a.unblockUI(), a(K).append(e.dpDiv))), e._inDialog = !1 } }, _tidyDialog: function (a) { a.dpDiv.removeClass(this._dialogClass).unbind(R) }, _checkExternalClick: function (c) { if (!a.datepicker._curInst) return; var b = a(c.target), d = a.datepicker._getInst(b[0]); (b[0].id != a.datepicker._mainDivId && b.parents("#" + a.datepicker._mainDivId).length == 0 && !b.hasClass(a.datepicker.markerClassName) && !b.closest("." + a.datepicker._triggerClass).length && a.datepicker._datepickerShowing && (!a.datepicker._inDialog || !a.blockUI) || b.hasClass(a.datepicker.markerClassName) && a.datepicker._curInst != d) && a.datepicker._hideDatepicker() }, _adjustDate: function (g, h, d) { var b = this, f = a(g), c = b._getInst(f[0]); if (b._isDisabledDatepicker(f[0])) return; b._adjustInstDate(c, h + (d == e ? b._get(c, db) : 0), d), b._updateDatepicker(c) }, _gotoToday: function (h) { var d = this, g = a(h), b = d._getInst(g[0]); if (d._get(b, eb) && b.currentDay) b.selectedDay = b.currentDay, b.drawMonth = b.selectedMonth = b.currentMonth, b.drawYear = b.selectedYear = b.currentYear; else { var f = new Date; b.selectedDay = f.getDate(), b.drawMonth = b.selectedMonth = f.getMonth(), b.drawYear = b.selectedYear = f.getFullYear() } var e = d._get(b, "fn"); e != v && e != c && typeof e == O && e(); d._notifyChange(b); d._adjustDate(g); d._hideDatepicker(); d._lastInput = c }, _selectMonthYear: function (h, c, f) { var g = a(h), b = this._getInst(g[0]); b["selected" + (f == e ? "Month" : "Year")] = b["draw" + (f == e ? "Month" : "Year")] = parseInt(c.options[c.selectedIndex].value, d), this._notifyChange(b), this._adjustDate(g) }, _selectDay: function (f, i, j, g) { var d = this, h = a(f); if (a(g).hasClass(d._unselectableClass) || d._isDisabledDatepicker(h[0])) return; var b = d._getInst(h[0]); b.selectedDay = b.currentDay = a("a", g).html(), b.selectedMonth = b.currentMonth = i, b.selectedYear = b.currentYear = j, d._selectDate(f, d._formatDate(b, b.currentDay, b.currentMonth, b.currentYear)); var e = d._get(b, "fn"); e != v && e != c && typeof e == O && e() }, _clearDate: function (d) { var c = a(d), e = this._getInst(c[0]); this._selectDate(c, b) }, _selectDate: function (h, e) { var d = this, i = a(h), b = d._getInst(i[0]); e = e != c ? e : d._formatDate(b), b.input && b.input.val(e), d._updateAlternate(b); var g = d._get(b, X); g ? g.apply(b.input ? b.input[0] : c, [e, b]) : b.input && b.input.trigger("change"), b.inline ? d._updateDatepicker(b) : (d._hideDatepicker(), d._lastInput = b.input[0], typeof b.input[0] != x && b.input.focus(), d._lastInput = c); d._lastInput = c; var f = d._get(b, "fn"); f != v && f != c && typeof f == O && f() }, _updateAlternate: function (c) { var b = this, d = b._get(c, "altField"); if (d) { var e = b._get(c, "altFormat") || b._get(c, m), f = b._getDate(c), g = b.formatDate(e, f, b._getFormatConfig(c)); a(d).each(function () { a(this).val(g) }) } }, noWeekends: function (c) { var a = c.getDay(); return [a > 0 && a < 6, b] }, iso8601Week: function (b) { var a = new Date(b.getTime()); a.setDate(a.getDate() + 4 - (a.getDay() || 7)); var c = a.getTime(); return a.setMonth(0), a.setDate(1), Math.floor(Math.round((c - a) / 8.64e7) / 7) + 1 }, parseDate: function (y, j, q) { var u = this; if (y == c || j == c) throw "Invalid arguments"; j = typeof j == x ? j.toString() : j + b; if (j == b) return c; var A = (q ? q.shortYearCutoff : c) || u._defaults.shortYearCutoff; A = typeof A != i ? A : (new Date).getFullYear() % n + parseInt(A, d); for (var H = (q ? q.dayNamesShort : c) || u._defaults.dayNamesShort, I = (q ? q.dayNames : c) || u._defaults.dayNames, J = (q ? q.monthNamesShort : c) || u._defaults.monthNamesShort, K = (q ? q.monthNames : c) || u._defaults.monthNames, m = g, t = g, v = g, C = g, D = !1, B = function (b) { var a = w + 1 < y.length && y.charAt(w + 1) == b; return a && w++, a }, z = function (a) { var c = B(a), e = a == r ? 14 : a == "!" ? 20 : a == k && c ? 4 : a == "o" ? 3 : 2, f = new RegExp("^\\d{1," + e + "}"), b = j.substring(o).match(f); if (!b) throw "Missing number at position " + o; return o += b[0].length, parseInt(b[0], d) }, F = function (c, d, e) { var f = a.map(B(c) ? e : d, function (a, b) { return [[b, a]] }).sort(function (a, b) { return -(a[1].length - b[1].length) }), b = g; a.each(f, function (d, c) { var a = c[1]; if (j.substr(o, a.length).toLowerCase() == a.toLowerCase()) return b = c[0], o += a.length, !1 }); if (b != g) return b + 1; throw "Unknown name at position " + o; }, E = function () { if (j.charAt(o) != y.charAt(w)) throw "Unexpected literal at position " + o; o++ }, o = 0, w = 0; w < y.length; w++) if (D) y.charAt(w) == f && !B(f) ? (D = !1) : E(); else switch (y.charAt(w)) { case l: v = z(l); break; case h: F(h, H, I); break; case "o": C = z("o"); break; case p: t = z(p); break; case e: t = F(e, J, K); break; case k: m = z(k); break; case r: var s = new Date(z(r)); m = s.getFullYear(), t = s.getMonth() + 1, v = s.getDate(); break; case "!": var s = new Date((z("!") - u._ticksTo1970) / 1e4); m = s.getFullYear(), t = s.getMonth() + 1, v = s.getDate(); break; case f: B(f) ? E() : (D = !0); break; default: E() } if (o < j.length) throw "Extra/unparsed characters found in date: " + j.substring(o); m == g ? (m = (new Date).getFullYear()) : m < n && (m += (new Date).getFullYear() - (new Date).getFullYear() % n + (m <= A ? 0 : -100)); if (C > g) { t = 1, v = C; do { var G = u._getDaysInMonth(m, t - 1); if (v <= G) break; t++, v -= G } while (!0) } var s = u._daylightSavingAdjust(new Date(m, t - 1, v)); if (s.getFullYear() != m || s.getMonth() + 1 != t || s.getDate() != v) throw "Invalid date"; return s }, ATOM: gb, COOKIE: "D, dd M yy", ISO_8601: gb, RFC_822: hb, RFC_850: "DD, dd-M-y", RFC_1036: hb, RFC_1123: jb, RFC_2822: jb, RSS: hb, TICKS: "!", TIMESTAMP: r, W3C: gb, _ticksTo1970: (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)) * 24 * 60 * 60 * 1e7, formatDate: function (m, a, j) { var o = this; if (!a) return b; var v = (j ? j.dayNamesShort : c) || o._defaults.dayNamesShort, w = (j ? j.dayNames : c) || o._defaults.dayNames, x = (j ? j.monthNamesShort : c) || o._defaults.monthNamesShort, y = (j ? j.monthNames : c) || o._defaults.monthNames, q = function (b) { var a = i + 1 < m.length && m.charAt(i + 1) == b; return a && i++, a }, s = function (c, d, e) { var a = b + d; if (q(c)) while (a.length < e) a = "0" + a; return a }, u = function (b, a, c, d) { return q(b) ? d[a] : c[a] }, g = b, t = !1; if (a) for (var i = 0; i < m.length; i++) if (t) m.charAt(i) == f && !q(f) ? (t = !1) : (g += m.charAt(i)); else switch (m.charAt(i)) { case l: g += s(l, a.getDate(), 2); break; case h: g += u(h, a.getDay(), v, w); break; case "o": g += s("o", Math.round(((new Date(a.getFullYear(), a.getMonth(), a.getDate())).getTime() - (new Date(a.getFullYear(), 0, 0)).getTime()) / 8.64e7), 3); break; case p: g += s(p, a.getMonth() + 1, 2); break; case e: g += u(e, a.getMonth(), x, y); break; case k: g += q(k) ? a.getFullYear() : (a.getYear() % n < d ? "0" : b) + a.getYear() % n; break; case r: g += a.getTime(); break; case "!": g += a.getTime() * 1e4 + o._ticksTo1970; break; case f: q(f) ? (g += f) : (t = !0); break; default: g += m.charAt(i) } return g }, _possibleChars: function (d) { for (var g = b, i = !1, j = function (c) { var b = a + 1 < d.length && d.charAt(a + 1) == c; return b && a++, b }, a = 0; a < d.length; a++) if (i) d.charAt(a) == f && !j(f) ? (i = !1) : (g += d.charAt(a)); else switch (d.charAt(a)) { case l: case p: case k: case r: g += "0123456789"; break; case h: case e: return c; case f: j(f) ? (g += f) : (i = !0); break; default: g += d.charAt(a) } return g }, _get: function (b, a) { return b.settings[a] !== v ? b.settings[a] : this._defaults[a] }, _setDateFromField: function (a, h) { var e = this; if (a.input.val() == a.lastVal) return; var i = e._get(a, m), f = a.lastVal = a.input ? a.input.val() : c, d, g; d = g = e._getDefaultDate(a); var j = e._getFormatConfig(a); try { d = e.parseDate(i, f, j) || g } catch (k) { e.log(k), f = h ? b : f } a.selectedDay = d.getDate(), a.drawMonth = a.selectedMonth = d.getMonth(), a.drawYear = a.selectedYear = d.getFullYear(), a.currentDay = f ? d.getDate() : 0, a.currentMonth = f ? d.getMonth() : 0, a.currentYear = f ? d.getFullYear() : 0, e._adjustInstDate(a) }, _getDefaultDate: function (a) { return this._restrictMinMax(a, this._determineDate(a, this._get(a, "defaultDate"), new Date)) }, _determineDate: function (j, g, n) { var o = function (b) { var a = new Date; return a.setDate(a.getDate() + b), a }, q = function (g) { try { return a.datepicker.parseDate(a.datepicker._get(j, m), g, a.datepicker._getFormatConfig(j)) } catch (r) { } var o = (g.toLowerCase().match(/^c/) ? a.datepicker._getDate(j) : c) || new Date, i = o.getFullYear(), n = o.getMonth(), b = o.getDate(), q = /([+-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, f = q.exec(g); while (f) { switch (f[2] || l) { case l: case h: b += parseInt(f[1], d); break; case "w": case "W": b += parseInt(f[1], d) * 7; break; case p: case e: n += parseInt(f[1], d), b = Math.min(b, a.datepicker._getDaysInMonth(i, n)); break; case k: case "Y": i += parseInt(f[1], d), b = Math.min(b, a.datepicker._getDaysInMonth(i, n)) } f = q.exec(g) } return new Date(i, n, b) }, f = g == c || g === b ? n : typeof g == i ? q(g) : typeof g == "number" ? isNaN(g) ? n : o(g) : new Date(g.getTime()); return f = f && f.toString() == "Invalid Date" ? n : f, f && (f.setHours(0), f.setMinutes(0), f.setSeconds(0), f.setMilliseconds(0)), this._daylightSavingAdjust(f) }, _daylightSavingAdjust: function (a) { return a ? (a.setHours(a.getHours() > 12 ? a.getHours() + 2 : 0), a) : c }, _setDate: function (a, e, f) { var c = this, g = !e, h = a.selectedMonth, i = a.selectedYear, d = c._restrictMinMax(a, c._determineDate(a, e, new Date)); a.selectedDay = a.currentDay = d.getDate(), a.drawMonth = a.selectedMonth = a.currentMonth = d.getMonth(), a.drawYear = a.selectedYear = a.currentYear = d.getFullYear(), (h != a.selectedMonth || i != a.selectedYear) && !f && c._notifyChange(a), c._adjustInstDate(a), a.input && a.input.val(g ? b : c._formatDate(a)) }, _getDate: function (a) { return !a.currentYear || a.input && a.input.val() == b ? c : this._daylightSavingAdjust(new Date(a.currentYear, a.currentMonth, a.currentDay)) }, _generateHTML: function (e) { var U = " ui-corner-", T = "calculateWeek", S = "</button>", q = "</span></a>", p = '"><span class="ui-icon ui-icon-circle-triangle-', z = ' title="', R = ", 'M');\"", O = ".datepicker._adjustDate('#", f = this, r = new Date; r = f._daylightSavingAdjust(new Date(r.getFullYear(), r.getMonth(), r.getDate())); var m = f._get(e, s), Bb = f._get(e, "showButtonPanel"), ib = f._get(e, "hideIfNoPrevNext"), ab = f._get(e, "navigationAsDateFormat"), n = f._getNumberOfMonths(e), Eb = f._get(e, db), W = f._get(e, t), cb = n[0] != 1 || n[1] != 1, gb = f._daylightSavingAdjust(e.currentDay ? new Date(e.currentYear, e.currentMonth, e.currentDay) : new Date(9999, 9, 9)), F = f._getMinMaxDate(e, C), u = f._getMinMaxDate(e, D), h = e.drawMonth - Eb, k = e.drawYear; h < 0 && (h += 12, k--); if (u) { var X = f._daylightSavingAdjust(new Date(u.getFullYear(), u.getMonth() - n[0] * n[1] + 1, u.getDate())); X = F && X < F ? F : X; while (f._daylightSavingAdjust(new Date(k, h, 1)) > X) h--, h < 0 && (h = 11, k--) } e.drawMonth = h, e.drawYear = k; var v = f._get(e, "prevText"); v = ab ? f.formatDate(v, f._daylightSavingAdjust(new Date(k, h - W, 1)), f._getFormatConfig(e)) : v; var nb = f._canAdjustMonth(e, g, k, h) ? '<a class="ui-datepicker-prev ui-corner-all" onclick="DP_jQuery_' + E + O + e.id + "', -" + W + R + z + v + p + (m ? "e" : "w") + j + v + q : ib ? b : '<a class="ui-datepicker-prev ui-corner-all ui-state-disabled" title="' + v + p + (m ? "e" : "w") + j + v + q, w = f._get(e, "nextText"); w = ab ? f.formatDate(w, f._daylightSavingAdjust(new Date(k, h + W, 1)), f._getFormatConfig(e)) : w; var pb = f._canAdjustMonth(e, 1, k, h) ? '<a class="ui-datepicker-next ui-corner-all" onclick="DP_jQuery_' + E + O + e.id + "', +" + W + R + z + w + p + (m ? "w" : "e") + j + w + q : ib ? b : '<a class="ui-datepicker-next ui-corner-all ui-state-disabled" title="' + w + p + (m ? "w" : "e") + j + w + q, Y = f._get(e, "currentText"), sb = f._get(e, eb) && e.currentDay ? gb : r; Y = ab ? f.formatDate(Y, sb, f._getFormatConfig(e)) : Y; var ub = e.inline ? b : '<button type="button" class="ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all" onclick="DP_jQuery_' + E + '.datepicker._hideDatepicker();">' + f._get(e, "closeText") + S, Gb = Bb ? '<div class="ui-datepicker-buttonpane ui-widget-content">' + (m ? ub : b) + (f._isInRange(e, sb) ? '<button type="button" class="ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all" onclick="DP_jQuery_' + E + ".datepicker._gotoToday('#" + e.id + "');\"" + o + Y + S : b) + (m ? b : ub) + P : b, y = parseInt(f._get(e, "firstDay"), d); y = isNaN(y) ? 0 : y; for (var wb = f._get(e, "showWeek"), zb = f._get(e, I), Hb = f._get(e, J), Ab = f._get(e, "dayNamesMin"), Cb = f._get(e, G), Db = f._get(e, H), jb = f._get(e, "beforeShowDay"), bb = f._get(e, "showOtherMonths"), Fb = f._get(e, "selectOtherMonths"), Ib = f._get(e, T) || f.iso8601Week, kb = f._getDefaultDate(e), fb = b, M = 0; M < n[0]; M++) { var lb = b; f.maxRows = 4; for (var N = 0; N < n[1]; N++) { var mb = f._daylightSavingAdjust(new Date(k, h, e.selectedDay)), K = " ui-corner-all", l = b; if (cb) { l += '<div class="ui-datepicker-group'; if (n[1] > 1) switch (N) { case 0: l += " ui-datepicker-group-first", K = U + (m ? "right" : L); break; case n[1] - 1: l += " ui-datepicker-group-last", K = U + (m ? L : "right"); break; default: l += " ui-datepicker-group-middle", K = b } l += j } l += '<div class="ui-datepicker-header ui-widget-header ui-helper-clearfix' + K + j + (/all|left/.test(K) && M == 0 ? m ? pb : nb : b) + (/all|right/.test(K) && M == 0 ? m ? nb : pb : b) + f._generateMonthYearHeader(e, h, k, F, u, M > 0 || N > 0, Cb, Db) + '</div><table class="ui-datepicker-calendar"><thead><tr>'; for (var ob = wb ? '<th class="ui-datepicker-week-col">' + f._get(e, "weekHeader") + "</th>" : b, x = 0; x < 7; x++) { var qb = (x + y) % 7; ob += "<th" + ((x + y + 6) % 7 >= 5 ? ' class="ui-datepicker-week-end"' : b) + o + '<span title="' + zb[qb] + j + Ab[qb] + "</span></th>" } l += ob + "</tr></thead><tbody>"; var rb = f._getDaysInMonth(k, h); k == e.selectedYear && h == e.selectedMonth && (e.selectedDay = Math.min(e.selectedDay, rb)); var tb = (f._getFirstDayOfMonth(k, h) - y + 7) % 7, hb = Math.ceil((tb + rb) / 7), vb = cb ? f.maxRows > hb ? f.maxRows : hb : hb; f.maxRows = vb; for (var i = f._daylightSavingAdjust(new Date(k, h, 1 - tb)), xb = 0; xb < vb; xb++) { l += "<tr>"; for (var yb = wb ? '<td class="ui-datepicker-week-col">' + f._get(e, T)(i) + "</td>" : b, x = 0; x < 7; x++) { var V = jb ? jb.apply(e.input ? e.input[0] : c, [i]) : [!0, b], B = i.getMonth() != h, Z = B && !Fb || !V[0] || F && i < F || u && i > u; yb += '<td class="' + ((x + y + 6) % 7 >= 5 ? " ui-datepicker-week-end" : b) + (B ? " ui-datepicker-other-month" : b) + (i.getTime() == mb.getTime() && h == e.selectedMonth && e._keyEvent || kb.getTime() == i.getTime() && kb.getTime() == mb.getTime() ? " " + f._dayOverClass : b) + (Z ? " " + f._unselectableClass + " ui-state-disabled" : b) + (B && !bb ? b : " " + V[1] + (i.getTime() == gb.getTime() ? " " + f._currentClass : b) + (i.getTime() == r.getTime() ? " ui-datepicker-today" : b)) + '"' + ((!B || bb) && V[2] ? z + V[2] + '"' : b) + (Z ? b : ' onclick="DP_jQuery_' + E + ".datepicker._selectDay('#" + e.id + "'," + i.getMonth() + "," + i.getFullYear() + ', this);return false;"') + o + (B && !bb ? Q : Z ? '<span class="ui-state-default">' + i.getDate() + A : '<a class="ui-state-default' + (i.getTime() == r.getTime() ? " ui-state-highlight" : b) + (i.getTime() == gb.getTime() ? " ui-state-active" : b) + (B ? " ui-priority-secondary" : b) + '" href="#">' + i.getDate() + "</a>") + "</td>", i.setDate(i.getDate() + 1), i = f._daylightSavingAdjust(i) } l += yb + "</tr>" } h++, h > 11 && (h = 0, k++), l += "</tbody></table>" + (cb ? P + (n[0] > 0 && N == n[1] - 1 ? '<div class="ui-datepicker-row-break"></div>' : b) : b), lb += l } fb += lb } return fb += Gb + (a.browser.msie && parseInt(a.browser.version, d) < 7 && !e.inline ? '<iframe src="javascript:false;" class="ui-datepicker-cover" frameborder="0"></iframe>' : b), e._keyEvent = !1, fb }, _generateMonthYearHeader: function (a, w, j, k, l, s, C, D) { var r = "</select>", q = "</option>", p = ' selected="selected"', n = '<option value="', m = ".datepicker._selectMonthYear('#", i = this, u = i._get(a, "changeMonth"), v = i._get(a, "changeYear"), x = i._get(a, "showMonthAfterYear"), f = '<div class="ui-datepicker-title">', h = b; if (s || !u) h += '<span class="ui-datepicker-month">' + C[w] + A; else { var F = k && k.getFullYear() == j, G = l && l.getFullYear() == j; h += '<select class="ui-datepicker-month" onchange="DP_jQuery_' + E + m + a.id + "', this, 'M');\" " + o; for (var g = 0; g < 12; g++) (!F || g >= k.getMonth()) && (!G || g <= l.getMonth()) && (h += n + g + '"' + (g == w ? p : b) + o + D[g] + q); h += r } x || (f += h + (s || !u || !v ? Q : b)); if (!a.yearshtml) { a.yearshtml = b; if (s || !v) f += '<span class="ui-datepicker-year">' + j + A; else { var y = i._get(a, "yearRange").split(":"), z = (new Date).getFullYear(), B = function (a) { var b = a.match(/c[+-].*/) ? j + parseInt(a.substring(1), d) : a.match(/[+-].*/) ? z + parseInt(a, d) : parseInt(a, d); return isNaN(b) ? z : b }, e = B(y[0]), t = Math.max(e, B(y[1] || b)); e = k ? Math.max(e, k.getFullYear()) : e, t = l ? Math.min(t, l.getFullYear()) : t, a.yearshtml += '<select class="ui-datepicker-year" onchange="DP_jQuery_' + E + m + a.id + "', this, 'Y');\" " + o; for (; e <= t; e++) a.yearshtml += n + e + '"' + (e == j ? p : b) + o + e + q; a.yearshtml += r, f += a.yearshtml, a.yearshtml = c } } return f += i._get(a, "yearSuffix"), x && (f += (s || !u || !v ? Q : b) + h), f += P, f }, _adjustInstDate: function (a, d, b) { var c = this, g = a.drawYear + (b == "Y" ? d : 0), i = a.drawMonth + (b == e ? d : 0), j = Math.min(a.selectedDay, c._getDaysInMonth(g, i)) + (b == h ? d : 0), f = c._restrictMinMax(a, c._daylightSavingAdjust(new Date(g, i, j))); a.selectedDay = f.getDate(), a.drawMonth = a.selectedMonth = f.getMonth(), a.drawYear = a.selectedYear = f.getFullYear(), (b == e || b == "Y") && c._notifyChange(a) }, _restrictMinMax: function (d, e) { var b = this._getMinMaxDate(d, C), c = this._getMinMaxDate(d, D), a = b && e < b ? b : e; return a = c && a > c ? c : a, a }, _notifyChange: function (a) { var b = this._get(a, "onChangeMonthYear"); b && b.apply(a.input ? a.input[0] : c, [a.selectedYear, a.selectedMonth + 1, a]) }, _getNumberOfMonths: function (b) { var a = this._get(b, "numberOfMonths"); return a == c ? [1, 1] : typeof a == "number" ? [1, a] : a }, _getMinMaxDate: function (a, b) { return this._determineDate(a, this._get(a, b + "Date"), c) }, _getDaysInMonth: function (a, b) { return 32 - this._daylightSavingAdjust(new Date(a, b, 32)).getDate() }, _getFirstDayOfMonth: function (a, b) { return (new Date(a, b, 1)).getDay() }, _canAdjustMonth: function (d, c, f, g) { var a = this, e = a._getNumberOfMonths(d), b = a._daylightSavingAdjust(new Date(f, g + (c < 0 ? c : e[0] * e[1]), 1)); return c < 0 && b.setDate(a._getDaysInMonth(b.getFullYear(), b.getMonth())), a._isInRange(d, b) }, _isInRange: function (a, b) { var c = this._getMinMaxDate(a, C), d = this._getMinMaxDate(a, D); return (!c || b.getTime() >= c.getTime()) && (!d || b.getTime() <= d.getTime()) }, _getFormatConfig: function (b) { var a = this, c = a._get(b, "shortYearCutoff"); return c = typeof c != i ? c : (new Date).getFullYear() % n + parseInt(c, d), { shortYearCutoff: c, dayNamesShort: a._get(b, J), dayNames: a._get(b, I), monthNamesShort: a._get(b, H), monthNames: a._get(b, G)} }, _formatDate: function (a, c, d, e) { var b = this; c || (a.currentDay = a.selectedDay, a.currentMonth = a.selectedMonth, a.currentYear = a.selectedYear); var f = c ? typeof c == x ? c : b._daylightSavingAdjust(new Date(e, d, c)) : b._daylightSavingAdjust(new Date(a.currentYear, a.currentMonth, a.currentDay)); return b.formatDate(b._get(a, m), f, b._getFormatConfig(a)) } }), a.fn.datepicker = function (b) { var c = "Datepicker", d = this; if (!d.length) return d; a.datepicker.initialized || (a(document).mousedown(a.datepicker._checkExternalClick).find(K).append(a.datepicker.dpDiv), a.datepicker.initialized = !0); var e = Array.prototype.slice.call(arguments, 1); return typeof b != i || b != "isDisabled" && b != "getDate" && b != "widget" ? b == "option" && arguments.length == 2 && typeof arguments[1] == i ? a.datepicker["_" + b + c].apply(a.datepicker, [d[0]].concat(e)) : d.each(function () { typeof b == i ? a.datepicker["_" + b + c].apply(a.datepicker, [this].concat(e)) : a.datepicker._attachDatepicker(this, b) }) : a.datepicker["_" + b + c].apply(a.datepicker, [d[0]].concat(e)) }, a.datepicker = new kb, a.datepicker.initialized = !1, a.datepicker.uuid = (new Date).getTime(), a.datepicker.version = "1.8.21", window["DP_jQuery_" + E] = a } (jQuery), function (a, s) { var c = "px", q = ".dialog-overlay", l = "option", k = ":data(resizable)", p = ":visible", j = "position", o = "document", e = "z-index", n = "beforeClose", m = "ui-dialog-content ui-widget-content", d = "<div></div>", g = "string", f = "title", b = "auto", i = null, h = "close", r = "ui-dialog ui-widget ui-widget-content ui-corner-all ", t = { buttons: !0, height: !0, maxHeight: !0, maxWidth: !0, minHeight: !0, minWidth: !0, width: !0 }, u = { maxHeight: !0, maxWidth: !0, minHeight: !0, minWidth: !0 }, v = a.attrFn || { val: !0, css: !0, html: !0, text: !0, data: !0, width: !0, height: !0, offset: !0, click: !0 }; a.widget("ui.dialog", { options: { autoOpen: !0, buttons: {}, closeOnEscape: !0, closeText: h, dialogClass: "", draggable: !0, hide: i, height: b, maxHeight: !1, maxWidth: !1, minHeight: 150, minWidth: 150, modal: !1, position: { my: "center", at: "center", collision: "fit", using: function (b) { var c = a(this).css(b).offset().top; c < 0 && a(this).css("top", b.top - c) } }, resizable: !0, show: i, stack: !0, title: "", width: 300, zIndex: 1e3 }, _create: function () { var k = "<span></span>", i = "ui-state-focus", h = "ui-state-hover", e = this; e.originalTitle = e.element.attr(f), typeof e.originalTitle != g && (e.originalTitle = ""), e.options.title = e.options.title || e.originalTitle; var b = e, c = b.options, p = c.title || "&#160;", o = a.ui.dialog.getTitleId(b.element), n = (b.uiDialog = a(d)).appendTo(document.body).hide().addClass(r + c.dialogClass).css({ zIndex: c.zIndex }).attr("tabIndex", -1).css("outline", 0).keydown(function (d) { c.closeOnEscape && !d.isDefaultPrevented() && d.keyCode && d.keyCode === a.ui.keyCode.ESCAPE && (b.close(d), d.preventDefault()) }).attr({ role: "dialog", "aria-labelledby": o }).mousedown(function (a) { b.moveToTop(!1, a) }), q = b.element.show().removeAttr(f).addClass(m).appendTo(n), l = (b.uiDialogTitlebar = a(d)).addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(n), j = a('<a href="#"></a>').addClass("ui-dialog-titlebar-close ui-corner-all").attr("role", "button").hover(function () { j.addClass(h) }, function () { j.removeClass(h) }).focus(function () { j.addClass(i) }).blur(function () { j.removeClass(i) }).click(function (a) { return b.close(a), !1 }).appendTo(l), s = (b.uiDialogTitlebarCloseText = a(k)).addClass("ui-icon ui-icon-closethick").text(c.closeText).appendTo(j), t = a(k).addClass("ui-dialog-title").attr("id", o).html(p).prependTo(l); a.isFunction(c.beforeclose) && !a.isFunction(c.beforeClose) && (c.beforeClose = c.beforeclose), l.find("*").add(l).disableSelection(), c.draggable && a.fn.draggable && b._makeDraggable(), c.resizable && a.fn.resizable && b._makeResizable(), b._createButtons(c.buttons), b._isOpen = !1, a.fn.bgiframe && n.bgiframe() }, _init: function () { this.options.autoOpen && this.open() }, destroy: function () { var a = this; return a.overlay && a.overlay.destroy(), a.uiDialog.hide(), a.element.unbind(".dialog").removeData("dialog").removeClass(m).hide().appendTo("body"), a.uiDialog.remove(), a.originalTitle && a.element.attr(f, a.originalTitle), a }, widget: function () { return this.uiDialog }, close: function (d) { var b = this, c, f; return !1 === b._trigger(n, d) ? void 0 : (b.overlay && b.overlay.destroy(), b.uiDialog.unbind("keypress.ui-dialog"), b._isOpen = !1, b.options.hide ? b.uiDialog.hide(b.options.hide, function () { b._trigger(h, d) }) : (b.uiDialog.hide(), b._trigger(h, d)), a.ui.dialog.overlay.resize(), b.options.modal && (c = 0, a(".ui-dialog").each(function () { this !== b.uiDialog[0] && (f = a(this).css(e), isNaN(f) || (c = Math.max(c, f))) }), a.ui.dialog.maxZ = c), b) }, isOpen: function () { return this._isOpen }, moveToTop: function (g, d) { var b = this, c = b.options, f; return c.modal && !g || !c.stack && !c.modal ? b._trigger("focus", d) : (c.zIndex > a.ui.dialog.maxZ && (a.ui.dialog.maxZ = c.zIndex), b.overlay && (a.ui.dialog.maxZ += 1, b.overlay.$el.css(e, a.ui.dialog.overlay.maxZ = a.ui.dialog.maxZ)), f = { scrollTop: b.element.scrollTop(), scrollLeft: b.element.scrollLeft() }, a.ui.dialog.maxZ += 1, b.uiDialog.css(e, a.ui.dialog.maxZ), b.element.attr(f), b._trigger("focus", d), b) }, open: function () { var c = ":tabbable"; if (this._isOpen) return; var b = this, d = b.options, e = b.uiDialog; return b.overlay = d.modal ? new a.ui.dialog.overlay(b) : i, b._size(), b._position(d.position), e.show(d.show), b.moveToTop(!0), d.modal && e.bind("keydown.ui-dialog", function (b) { if (b.keyCode !== a.ui.keyCode.TAB) return; var d = a(c, this), e = d.filter(":first"), f = d.filter(":last"); return b.target === f[0] && !b.shiftKey ? (e.focus(1), !1) : b.target === e[0] && b.shiftKey ? (f.focus(1), !1) : void 0 }), a(b.element.find(c).get().concat(e.find(".ui-dialog-buttonpane :tabbable").get().concat(e.get()))).eq(0).focus(), b._isOpen = !0, b._trigger("open"), b }, _createButtons: function (b) { var c = this, e = !1, f = a(d).addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"), g = a(d).addClass("ui-dialog-buttonset").appendTo(f); c.uiDialog.find(".ui-dialog-buttonpane").remove(), typeof b == "object" && b !== i && a.each(b, function () { return !(e = !0) }), e && (a.each(b, function (e, b) { b = a.isFunction(b) ? { click: b, text: e} : b; var d = a('<button type="button"></button>').click(function () { b.click.apply(c.element[0], arguments) }).appendTo(g); a.each(b, function (a, b) { if (a === "click") return; a in v ? d[a](b) : d.attr(a, b) }), a.fn.button && d.button() }), f.appendTo(c.uiDialog)) }, _makeDraggable: function () { var c = "ui-dialog-dragging"; function e(a) { return { position: a.position, offset: a.offset} } var d = this, f = d.options, g = a(document), h; d.uiDialog.draggable({ cancel: ".ui-dialog-content, .ui-dialog-titlebar-close", handle: ".ui-dialog-titlebar", containment: o, start: function (g, i) { h = f.height === b ? b : a(this).height(), a(this).height(a(this).height()).addClass(c), d._trigger("dragStart", g, e(i)) }, drag: function (a, b) { d._trigger("drag", a, e(b)) }, stop: function (i, b) { f.position = [b.position.left - g.scrollLeft(), b.position.top - g.scrollTop()], a(this).removeClass(c).height(h), d._trigger("dragStop", i, e(b)), a.ui.dialog.overlay.resize() } }) }, _makeResizable: function (d) { var c = "ui-dialog-resizing"; function f(a) { return { originalPosition: a.originalPosition, originalSize: a.originalSize, position: a.position, size: a.size} } d = d === s ? this.options.resizable : d; var b = this, e = b.options, h = b.uiDialog.css(j), i = typeof d == g ? d : "n,e,s,w,se,sw,ne,nw"; b.uiDialog.resizable({ cancel: ".ui-dialog-content", containment: o, alsoResize: b.element, maxWidth: e.maxWidth, maxHeight: e.maxHeight, minWidth: e.minWidth, minHeight: b._minHeight(), handles: i, start: function (d, e) { a(this).addClass(c), b._trigger("resizeStart", d, f(e)) }, resize: function (a, c) { b._trigger("resize", a, f(c)) }, stop: function (d, g) { a(this).removeClass(c), e.height = a(this).height(), e.width = a(this).width(), b._trigger("resizeStop", d, f(g)), a.ui.dialog.overlay.resize() } }).css(j, h).find(".ui-resizable-se").addClass("ui-icon ui-icon-grip-diagonal-se") }, _minHeight: function () { var a = this.options; return a.height === b ? a.minHeight : Math.min(a.minHeight, a.height) }, _position: function (b) { var d = this, c = [], f = [0, 0], e; if (b) { if (typeof b == g || typeof b == "object" && "0" in b) c = b.split ? b.split(" ") : [b[0], b[1]], c.length === 1 && (c[1] = c[0]), a.each(["left", "top"], function (a, b) { +c[a] === c[a] && (f[a] = c[a], c[a] = b) }), b = { my: c.join(" "), at: c.join(" "), offset: f.join(" ") }; b = a.extend({}, a.ui.dialog.prototype.options.position, b) } else b = a.ui.dialog.prototype.options.position; e = d.uiDialog.is(p), e || d.uiDialog.show(), d.uiDialog.css({ top: 0, left: 0 }).position(a.extend({ of: window }, b)), e || d.uiDialog.hide() }, _setOptions: function (e) { var b = this, f = b, c = {}, d = !1; a.each(e, function (a, b) { f._setOption(a, b), a in t && (d = !0), a in u && (c[a] = b) }), d && b._size(), b.uiDialog.is(k) && b.uiDialog.resizable(l, c) }, _setOption: function (i, b) { var e = "ui-dialog-disabled", c = this, d = c.uiDialog; switch (i) { case "beforeclose": i = n; break; case "buttons": c._createButtons(b); break; case "closeText": c.uiDialogTitlebarCloseText.text("" + b); break; case "dialogClass": d.removeClass(c.options.dialogClass).addClass(r + b); break; case "disabled": b ? d.addClass(e) : d.removeClass(e); break; case "draggable": var m = d.is(":data(draggable)"); m && !b && d.draggable("destroy"), !m && b && c._makeDraggable(); break; case j: c._position(b); break; case "resizable": var h = d.is(k); h && !b && d.resizable("destroy"), h && typeof b == g && d.resizable(l, "handles", b), !h && b !== !1 && c._makeResizable(b); break; case f: a(".ui-dialog-title", c.uiDialogTitlebar).html("" + (b || "&#160;")) } a.Widget.prototype._setOption.apply(c, arguments) }, _size: function () { var c = this, d = c.options, e, f, g = c.uiDialog.is(p); c.element.show().css({ width: b, minHeight: 0, height: 0 }), d.minWidth > d.width && (d.width = d.minWidth), e = c.uiDialog.css({ height: b, width: d.width }).height(), f = Math.max(0, d.minHeight - e); if (d.height === b) if (a.support.minHeight) c.element.css({ minHeight: f, height: b }); else { c.uiDialog.show(); var h = c.element.css("height", b).height(); g || c.uiDialog.hide(), c.element.height(Math.max(h, f)) } else c.element.height(Math.max(d.height - e, 0)); c.uiDialog.is(k) && c.uiDialog.resizable(l, "minHeight", c._minHeight()) } }), a.extend(a.ui.dialog, { version: "1.8.21", uuid: 0, maxZ: 0, getTitleId: function (b) { var a = b.attr("id"); return a || (this.uuid += 1, a = this.uuid), "ui-dialog-title-" + a }, overlay: function (b) { this.$el = a.ui.dialog.overlay.create(b) } }), a.extend(a.ui.dialog.overlay, { instances: [], oldInstances: [], maxZ: 0, events: a.map("focus,mousedown,mouseup,keydown,keypress,click".split(","), function (a) { return a + q }).join(" "), create: function (e) { var b = this; b.instances.length === 0 && (setTimeout(function () { a.ui.dialog.overlay.instances.length && a(document).bind(a.ui.dialog.overlay.events, function (b) { if (a(b.target).zIndex() < a.ui.dialog.overlay.maxZ) return !1 }) }, 1), a(document).bind("keydown.dialog-overlay", function (b) { e.options.closeOnEscape && !b.isDefaultPrevented() && b.keyCode && b.keyCode === a.ui.keyCode.ESCAPE && (e.close(b), b.preventDefault()) }), a(window).bind("resize.dialog-overlay", a.ui.dialog.overlay.resize)); var c = (b.oldInstances.pop() || a(d).addClass("ui-widget-overlay")).appendTo(document.body).css({ width: b.width(), height: b.height() }); return a.fn.bgiframe && c.bgiframe(), b.instances.push(c), c }, destroy: function (d) { var b = this, f = a.inArray(d, b.instances); f != -1 && b.oldInstances.push(b.instances.splice(f, 1)[0]), b.instances.length === 0 && a([document, window]).unbind(q), d.remove(); var c = 0; a.each(b.instances, function () { c = Math.max(c, this.css(e)) }), b.maxZ = c }, height: function () { var b, d; return a.browser.msie && a.browser.version < 7 ? (b = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight), d = Math.max(document.documentElement.offsetHeight, document.body.offsetHeight), b < d ? a(window).height() + c : b + c) : a(document).height() + c }, width: function () { var b, d; return a.browser.msie ? (b = Math.max(document.documentElement.scrollWidth, document.body.scrollWidth), d = Math.max(document.documentElement.offsetWidth, document.body.offsetWidth), b < d ? a(window).width() + c : b + c) : a(document).width() + c }, resize: function () { var b = a([]); a.each(a.ui.dialog.overlay.instances, function () { b = b.add(this) }), b.css({ width: 0, height: 0 }).css({ width: a.ui.dialog.overlay.width(), height: a.ui.dialog.overlay.height() }) } }), a.extend(a.ui.dialog.overlay.prototype, { destroy: function () { a.ui.dialog.overlay.destroy(this.$el) } }) } (jQuery), function (a) { var d = "top", c = "left", f = "bottom", e = "right"; a.ui = a.ui || {}; var g = /left|center|right/, h = /top|center|bottom/, b = "center", i = {}, j = a.fn.position, k = a.fn.offset; a.fn.position = function (k) { if (!k || !k.of) return j.apply(this, arguments); k = a.extend({}, k); var m = a(k.of), r = m[0], q = (k.collision || "flip").split(" "), n = k.offset ? k.offset.split(" ") : [0, 0], o, p, l; return r.nodeType === 9 ? (o = m.width(), p = m.height(), l = { top: 0, left: 0 }) : r.setTimeout ? (o = m.width(), p = m.height(), l = { top: m.scrollTop(), left: m.scrollLeft() }) : r.preventDefault ? (k.at = "left top", o = p = 0, l = { top: k.of.pageY, left: k.of.pageX }) : (o = m.outerWidth(), p = m.outerHeight(), l = m.offset()), a.each(["my", "at"], function () { var a = (k[this] || "").split(" "); a.length === 1 && (a = g.test(a[0]) ? a.concat([b]) : h.test(a[0]) ? [b].concat(a) : [b, b]), a[0] = g.test(a[0]) ? a[0] : b, a[1] = h.test(a[1]) ? a[1] : b, k[this] = a }), q.length === 1 && (q[1] = q[0]), n[0] = parseInt(n[0], 10) || 0, n.length === 1 && (n[1] = n[0]), n[1] = parseInt(n[1], 10) || 0, k.at[0] === e ? (l.left += o) : k.at[0] === b && (l.left += o / 2), k.at[1] === f ? (l.top += p) : k.at[1] === b && (l.top += p / 2), l.left += n[0], l.top += n[1], this.each(function () { var h = this, j = a(h), m = j.outerWidth(), r = j.outerHeight(), s = parseInt(a.curCSS(h, "marginLeft", !0)) || 0, t = parseInt(a.curCSS(h, "marginTop", !0)) || 0, v = m + s + (parseInt(a.curCSS(h, "marginRight", !0)) || 0), w = r + t + (parseInt(a.curCSS(h, "marginBottom", !0)) || 0), g = a.extend({}, l), u; k.my[0] === e ? (g.left -= m) : k.my[0] === b && (g.left -= m / 2), k.my[1] === f ? (g.top -= r) : k.my[1] === b && (g.top -= r / 2), i.fractions || (g.left = Math.round(g.left), g.top = Math.round(g.top)), u = { left: g.left - s, top: g.top - t }, a.each([c, d], function (b, c) { a.ui.position[q[b]] && a.ui.position[q[b]][c](g, { targetWidth: o, targetHeight: p, elemWidth: m, elemHeight: r, collisionPosition: u, collisionWidth: v, collisionHeight: w, offset: n, my: k.my, at: k.at }) }), a.fn.bgiframe && j.bgiframe(), j.offset(a.extend(g, { using: k.using })) }) }, a.ui.position = { fit: { left: function (b, c) { var d = a(window), e = c.collisionPosition.left + c.collisionWidth - d.width() - d.scrollLeft(); b.left = e > 0 ? b.left - e : Math.max(b.left - c.collisionPosition.left, b.left) }, top: function (b, c) { var d = a(window), e = c.collisionPosition.top + c.collisionHeight - d.height() - d.scrollTop(); b.top = e > 0 ? b.top - e : Math.max(b.top - c.collisionPosition.top, b.top) } }, flip: { left: function (j, d) { if (d.at[0] === b) return; var f = a(window), k = d.collisionPosition.left + d.collisionWidth - f.width() - f.scrollLeft(), g = d.my[0] === c ? -d.elemWidth : d.my[0] === e ? d.elemWidth : 0, h = d.at[0] === c ? d.targetWidth : -d.targetWidth, i = -2 * d.offset[0]; j.left += d.collisionPosition.left < 0 ? g + h + i : k > 0 ? g + h + i : 0 }, top: function (j, c) { if (c.at[1] === b) return; var e = a(window), k = c.collisionPosition.top + c.collisionHeight - e.height() - e.scrollTop(), g = c.my[1] === d ? -c.elemHeight : c.my[1] === f ? c.elemHeight : 0, h = c.at[1] === d ? c.targetHeight : -c.targetHeight, i = -2 * c.offset[1]; j.top += c.collisionPosition.top < 0 ? g + h + i : k > 0 ? g + h + i : 0 } } }, a.offset.setOffset || (a.offset.setOffset = function (b, e) { / static /.test(a.curCSS(b, "position")) && (b.style.position = "relative"); var f = a(b), g = f.offset(), i = parseInt(a.curCSS(b, d, !0), 10) || 0, j = parseInt(a.curCSS(b, c, !0), 10) || 0, h = { top: e.top - g.top + i, left: e.left - g.left + j }; "using" in e ? e.using.call(b, h) : f.css(h) }, a.fn.offset = function (c) { var b = this, d = b[0]; return !d || !d.ownerDocument ? null : c ? a.isFunction(c) ? b.each(function (b) { a(this).offset(c.call(this, b, a(this).offset())) }) : b.each(function () { a.offset.setOffset(this, c) }) : k.call(b) }), function () { var c = document.getElementsByTagName("body")[0], f = document.createElement("div"), b, d, e, g, h; b = document.createElement(c ? "div" : "body"), e = { visibility: "hidden", width: 0, height: 0, border: 0, margin: 0, background: "none" }, c && a.extend(e, { position: "absolute", left: "-1000px", top: "-1000px" }); for (var j in e) b.style[j] = e[j]; b.appendChild(f), d = c || document.documentElement, d.insertBefore(b, d.firstChild), f.style.cssText = "position: absolute; left: 10.7432222px; top: 10.432325px; height: 30px; width: 201px;", g = a(f).offset(function (b, a) { return a }).offset(), b.innerHTML = "", d.removeChild(b), h = g.top + g.left + (c ? 2e3 : 0), i.fractions = h > 21 && h < 22 } () } (jQuery), function (a, d) { var c = "aria-valuenow", b = "ui-progressbar ui-widget ui-widget-content ui-corner-all"; a.widget("ui.progressbar", { options: { value: 0, max: 100 }, min: 0, _create: function () { var c = this; c.element.addClass(b).attr({ role: "progressbar", "aria-valuemin": c.min, "aria-valuemax": c.options.max, "aria-valuenow": c._value() }), c.valueDiv = a("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(c.element), c.oldValue = c._value(), c._refreshValue() }, destroy: function () { this.element.removeClass(b).removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr(c), this.valueDiv.remove(), a.Widget.prototype.destroy.apply(this, arguments) }, value: function (a) { return a === d ? this._value() : (this._setOption("value", a), this) }, _setOption: function (c, d) { var b = this; c === "value" && (b.options.value = d, b._refreshValue(), b._value() === b.options.max && b._trigger("complete")), a.Widget.prototype._setOption.apply(b, arguments) }, _value: function () { var a = this.options.value; return typeof a != "number" && (a = 0), Math.min(this.options.max, Math.max(this.min, a)) }, _percentage: function () { return 100 * this._value() / this.options.max }, _refreshValue: function () { var a = this, b = a.value(), d = a._percentage(); a.oldValue !== b && (a.oldValue = b, a._trigger("change")), a.valueDiv.toggle(b > a.min).toggleClass("ui-corner-right", b === a.options.max).width(d.toFixed(0) + "%"), a.element.attr(c, b) } }), a.extend(a.ui.progressbar, { version: "1.8.21" }) } (jQuery), function (a) { var f = "vertical", e = "ui-state-active", d = "ui-state-hover", h = ".ui-slider-handle", c = null, b = "horizontal", g = "slide", i = 5; a.widget("ui.slider", a.ui.mouse, { widgetEventPrefix: g, options: { animate: !1, distance: 0, max: 100, min: 0, orientation: b, range: !1, step: 1, value: 0, values: c }, _create: function () { var k = "index.ui-slider-handle", j = "ui-state-focus", f = this, b = f, g = f.options, l = f.element.find(h).addClass("ui-state-default ui-corner-all"), o = "<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>", p = g.values && g.values.length || 1, m = []; f._keySliding = !1, f._mouseSliding = !1, f._animateOff = !0, f._handleIndex = c, f._detectOrientation(), f._mouseInit(), f.element.addClass("ui-slider ui-slider-" + f.orientation + " ui-widget ui-widget-content ui-corner-all" + (g.disabled ? " ui-slider-disabled ui-disabled" : "")), f.range = a([]), g.range && (g.range === !0 && (g.values || (g.values = [f._valueMin(), f._valueMin()]), g.values.length && g.values.length !== 2 && (g.values = [g.values[0], g.values[0]])), f.range = a("<div></div>").appendTo(f.element).addClass("ui-slider-range ui-widget-header" + (g.range === "min" || g.range === "max" ? " ui-slider-range-" + g.range : ""))); for (var n = l.length; n < p; n += 1) m.push(o); f.handles = l.add(a(m.join("")).appendTo(b.element)), f.handle = f.handles.eq(0), f.handles.add(f.range).filter("a").click(function (a) { a.preventDefault() }).hover(function () { g.disabled || a(this).addClass(d) }, function () { a(this).removeClass(d) }).focus(function () { g.disabled ? a(this).blur() : (a(".ui-slider .ui-state-focus").removeClass(j), a(this).addClass(j)) }).blur(function () { a(this).removeClass(j) }), f.handles.each(function (b) { a(this).data(k, b) }), f.handles.keydown(function (f) { var g = a(this).data(k), j, d, c, h; if (b.options.disabled) return; switch (f.keyCode) { case a.ui.keyCode.HOME: case a.ui.keyCode.END: case a.ui.keyCode.PAGE_UP: case a.ui.keyCode.PAGE_DOWN: case a.ui.keyCode.UP: case a.ui.keyCode.RIGHT: case a.ui.keyCode.DOWN: case a.ui.keyCode.LEFT: f.preventDefault(); if (!b._keySliding) { b._keySliding = !0, a(this).addClass(e), j = b._start(f, g); if (j === !1) return } } h = b.options.step, b.options.values && b.options.values.length ? (d = c = b.values(g)) : (d = c = b.value()); switch (f.keyCode) { case a.ui.keyCode.HOME: c = b._valueMin(); break; case a.ui.keyCode.END: c = b._valueMax(); break; case a.ui.keyCode.PAGE_UP: c = b._trimAlignValue(d + (b._valueMax() - b._valueMin()) / i); break; case a.ui.keyCode.PAGE_DOWN: c = b._trimAlignValue(d - (b._valueMax() - b._valueMin()) / i); break; case a.ui.keyCode.UP: case a.ui.keyCode.RIGHT: if (d === b._valueMax()) return; c = b._trimAlignValue(d + h); break; case a.ui.keyCode.DOWN: case a.ui.keyCode.LEFT: if (d === b._valueMin()) return; c = b._trimAlignValue(d - h) } b._slide(f, g, c) }).keyup(function (c) { var d = a(this).data(k); b._keySliding && (b._keySliding = !1, b._stop(c, d), b._change(c, d), a(this).removeClass(e)) }), f._refreshValue(), f._animateOff = !1 }, destroy: function () { var a = this; return a.handles.remove(), a.range.remove(), a.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-slider-disabled ui-widget ui-widget-content ui-corner-all").removeData("slider").unbind(".slider"), a._mouseDestroy(), a }, _mouseCapture: function (f) { var b = this, i = b.options, n, j, k, c, l, g, o, m, p; return i.disabled ? !1 : (b.elementSize = { width: b.element.outerWidth(), height: b.element.outerHeight() }, b.elementOffset = b.element.offset(), n = { x: f.pageX, y: f.pageY }, j = b._normValueFromMouse(n), k = b._valueMax() - b._valueMin() + 1, l = b, b.handles.each(function (b) { var d = Math.abs(j - l.values(b)); k > d && (k = d, c = a(this), g = b) }), i.range === !0 && b.values(1) === i.min && (g += 1, c = a(b.handles[g])), o = b._start(f, g), o === !1 ? !1 : (b._mouseSliding = !0, l._handleIndex = g, c.addClass(e).focus(), m = c.offset(), p = !a(f.target).parents().andSelf().is(h), b._clickOffset = p ? { left: 0, top: 0} : { left: f.pageX - m.left - c.width() / 2, top: f.pageY - m.top - c.height() / 2 - (parseInt(c.css("borderTopWidth"), 10) || 0) - (parseInt(c.css("borderBottomWidth"), 10) || 0) + (parseInt(c.css("marginTop"), 10) || 0) }, b.handles.hasClass(d) || b._slide(f, g, j), b._animateOff = !0, !0)) }, _mouseStart: function () { return !0 }, _mouseDrag: function (a) { var b = { x: a.pageX, y: a.pageY }, c = this._normValueFromMouse(b); return this._slide(a, this._handleIndex, c), !1 }, _mouseStop: function (b) { var a = this; return a.handles.removeClass(e), a._mouseSliding = !1, a._stop(b, a._handleIndex), a._change(b, a._handleIndex), a._handleIndex = c, a._clickOffset = c, a._animateOff = !1, !1 }, _detectOrientation: function () { this.orientation = this.options.orientation === f ? f : b }, _normValueFromMouse: function (g) { var a = this, d, e, c, h, i; return a.orientation === b ? (d = a.elementSize.width, e = g.x - a.elementOffset.left - (a._clickOffset ? a._clickOffset.left : 0)) : (d = a.elementSize.height, e = g.y - a.elementOffset.top - (a._clickOffset ? a._clickOffset.top : 0)), c = e / d, c > 1 && (c = 1), c < 0 && (c = 0), a.orientation === f && (c = 1 - c), h = a._valueMax() - a._valueMin(), i = a._valueMin() + c * h, a._trimAlignValue(i) }, _start: function (d, c) { var a = this, b = { handle: a.handles[c], value: a.value() }; return a.options.values && a.options.values.length && (b.value = a.values(c), b.values = a.values()), a._trigger("start", d, b) }, _slide: function (h, c, b) { var a = this, d, f, e; a.options.values && a.options.values.length ? (d = a.values(c ? 0 : 1), a.options.values.length === 2 && a.options.range === !0 && (c === 0 && b > d || c === 1 && b < d) && (b = d), b !== a.values(c) && (f = a.values(), f[c] = b, e = a._trigger(g, h, { handle: a.handles[c], value: b, values: f }), d = a.values(c ? 0 : 1), e !== !1 && a.values(c, b, !0))) : b !== a.value() && (e = a._trigger(g, h, { handle: a.handles[c], value: b }), e !== !1 && a.value(b)) }, _stop: function (d, c) { var a = this, b = { handle: a.handles[c], value: a.value() }; a.options.values && a.options.values.length && (b.value = a.values(c), b.values = a.values()), a._trigger("stop", d, b) }, _change: function (d, c) { var a = this; if (!a._keySliding && !a._mouseSliding) { var b = { handle: a.handles[c], value: a.value() }; a.options.values && a.options.values.length && (b.value = a.values(c), b.values = a.values()), a._trigger("change", d, b) } }, value: function (b) { var a = this; if (arguments.length) { a.options.value = a._trimAlignValue(b), a._refreshValue(), a._change(c, 0); return } return a._value() }, values: function (e, h) { var b = this, f, g, d; if (arguments.length > 1) { b.options.values[e] = b._trimAlignValue(h), b._refreshValue(), b._change(c, e); return } if (!arguments.length) return b._values(); if (!a.isArray(arguments[0])) return b.options.values && b.options.values.length ? b._values(e) : b.value(); f = b.options.values, g = arguments[0]; for (d = 0; d < f.length; d += 1) f[d] = b._trimAlignValue(g[d]), b._change(c, d); b._refreshValue() }, _setOption: function (i, j) { var f = "ui-disabled", e = "disabled", b = this, g, h = 0; a.isArray(b.options.values) && (h = b.options.values.length), a.Widget.prototype._setOption.apply(b, arguments); switch (i) { case e: j ? (b.handles.filter(".ui-state-focus").blur(), b.handles.removeClass(d), b.handles.propAttr(e, !0), b.element.addClass(f)) : (b.handles.propAttr(e, !1), b.element.removeClass(f)); break; case "orientation": b._detectOrientation(), b.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + b.orientation), b._refreshValue(); break; case "value": b._animateOff = !0, b._refreshValue(), b._change(c, 0), b._animateOff = !1; break; case "values": b._animateOff = !0, b._refreshValue(); for (g = 0; g < h; g += 1) b._change(c, g); b._animateOff = !1 } }, _value: function () { var a = this.options.value; return a = this._trimAlignValue(a), a }, _values: function (e) { var c = this, d, a, b; if (arguments.length) return d = c.options.values[e], d = c._trimAlignValue(d), d; a = c.options.values.slice(); for (b = 0; b < a.length; b += 1) a[b] = c._trimAlignValue(a[b]); return a }, _trimAlignValue: function (b) { var a = this; if (b <= a._valueMin()) return a._valueMin(); if (b >= a._valueMax()) return a._valueMax(); var c = a.options.step > 0 ? a.options.step : 1, d = (b - a._valueMin()) % c, e = b - d; return Math.abs(d) * 2 >= c && (e += d > 0 ? c : -c), parseFloat(e.toFixed(5)) }, _valueMin: function () { return this.options.min }, _valueMax: function () { return this.options.max }, _refreshValue: function () { var e = "css", d = "animate", c = "%", g = this, l = g.options.range, j = g.options, i = g, k = g._animateOff ? !1 : j.animate, h, m = {}, o, q, n, p; g.options.values && g.options.values.length ? g.handles.each(function (f) { h = (i.values(f) - i._valueMin()) / (i._valueMax() - i._valueMin()) * 100, m[i.orientation === b ? "left" : "bottom"] = h + c, a(this).stop(1, 1)[k ? d : e](m, j.animate), i.options.range === !0 && (i.orientation === b ? (f === 0 && i.range.stop(1, 1)[k ? d : e]({ left: h + c }, j.animate), f === 1 && i.range[k ? d : e]({ width: h - o + c }, { queue: !1, duration: j.animate })) : (f === 0 && i.range.stop(1, 1)[k ? d : e]({ bottom: h + c }, j.animate), f === 1 && i.range[k ? d : e]({ height: h - o + c }, { queue: !1, duration: j.animate }))), o = h }) : (q = g.value(), n = g._valueMin(), p = g._valueMax(), h = p !== n ? (q - n) / (p - n) * 100 : 0, m[i.orientation === b ? "left" : "bottom"] = h + c, g.handle.stop(1, 1)[k ? d : e](m, j.animate), l === "min" && g.orientation === b && g.range.stop(1, 1)[k ? d : e]({ width: h + c }, j.animate), l === "max" && g.orientation === b && g.range[k ? d : e]({ width: 100 - h + c }, { queue: !1, duration: j.animate }), l === "min" && g.orientation === f && g.range.stop(1, 1)[k ? d : e]({ height: h + c }, j.animate), l === "max" && g.orientation === f && g.range[k ? d : e]({ height: 100 - h + c }, { queue: !1, duration: j.animate })) } }), a.extend(a.ui.slider, { version: "1.8.21" }) } (jQuery), function (a, u) { var m = "load", l = "cache.tabs", j = "ui-state-disabled", i = "ui-tabs-selected", d = ".tabs", h = "show", c = "tabs", g = "ui-tabs-selected ui-state-active", e = "ui-tabs-hide", s = "ui-state-default ui-corner-top", r = "ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all", k = "destroy.tabs", p = "load.tabs", q = "href.tabs", f = "#", n = "label.tabs", o = "ui-state-processing", t = "ui-tabs-", b = null; function x() { return ++v } function y() { return ++w } var v = 0, w = 0; a.widget("ui.tabs", { options: { add: b, ajaxOptions: b, cache: !1, cookie: b, collapsible: !1, disable: b, disabled: [], enable: b, event: "click", fx: b, idPrefix: t, load: b, panelTemplate: "<div></div>", remove: b, select: b, show: b, spinner: "<em>Loading&#8230;</em>", tabTemplate: "<li><a href='#{href}'><span>#{label}</span></a></li>" }, _create: function () { this._tabify(!0) }, _setOption: function (c, b) { var a = this; if (c == "selected") { if (a.options.collapsible && b == a.options.selected) return; a.select(b) } else a.options[c] = b, a._tabify() }, _tabId: function (a) { return a.title && a.title.replace(/\s/g, "_").replace(/[^\w\u00c0-\uFFFF-]/g, "") || this.options.idPrefix + x() }, _sanitizeSelector: function (a) { return a.replace(/:/g, "\\:") }, _cookie: function () { var c = this.cookie || (this.cookie = this.options.cookie.name || t + y()); return a.cookie.apply(b, [c].concat(a.makeArray(arguments))) }, _ui: function (a, b) { return { tab: a, panel: b, index: this.anchors.index(a)} }, _cleanup: function () { this.lis.filter(".ui-state-processing").removeClass(o).find("span:data(label.tabs)").each(function () { var b = a(this); b.html(b.data(n)).removeData(n) }) }, _tabify: function (K) { var v = "li", x = "ui-state-", C = "removeClass", B = "addClass", w = ".ui-tabs-selected", A = "ui-tabs-panel ui-widget-content ui-corner-bottom", t = this; function H(b, c) { b.css("display", ""), !a.support.opacity && c.opacity && b[0].style.removeAttribute("filter") } var n = t, m = t.options, L = /^#.+/; t.list = t.element.find("ol,ul").eq(0), t.lis = a(" > li:has(a[href])", t.list), t.anchors = t.lis.map(function () { return a("a", this)[0] }), t.panels = a([]), t.anchors.each(function (h, c) { var b = a(c).attr("href"), e = b.split(f)[0], i; e && (e === location.toString().split(f)[0] || (i = a("base")[0]) && e === i.href) && (b = c.hash, c.href = b); if (L.test(b)) n.panels = n.panels.add(n.element.find(n._sanitizeSelector(b))); else if (b && b !== f) { a.data(c, q, b), a.data(c, p, b.replace(/#.*$/, "")); var g = n._tabId(c); c.href = f + g; var d = n.element.find(f + g); d.length || (d = a(m.panelTemplate).attr("id", g).addClass(A).insertAfter(n.panels[h - 1] || n.list), d.data(k, !0)), n.panels = n.panels.add(d) } else m.disabled.push(h) }), K ? (t.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all"), t.list.addClass(r), t.lis.addClass(s), t.panels.addClass(A), m.selected === u ? (location.hash && t.anchors.each(function (a, b) { if (b.hash == location.hash) return m.selected = a, !1 }), typeof m.selected != "number" && m.cookie && (m.selected = parseInt(n._cookie(), 10)), typeof m.selected != "number" && t.lis.filter(w).length && (m.selected = t.lis.index(t.lis.filter(w))), m.selected = m.selected || (t.lis.length ? 0 : -1)) : m.selected === b && (m.selected = -1), m.selected = m.selected >= 0 && t.anchors[m.selected] || m.selected < 0 ? m.selected : 0, m.disabled = a.unique(m.disabled.concat(a.map(t.lis.filter(".ui-state-disabled"), function (a) { return n.lis.index(a) }))).sort(), a.inArray(m.selected, m.disabled) != -1 && m.disabled.splice(a.inArray(m.selected, m.disabled), 1), t.panels.addClass(e), t.lis.removeClass(g), m.selected >= 0 && t.anchors.length && (n.element.find(n._sanitizeSelector(n.anchors[m.selected].hash)).removeClass(e), t.lis.eq(m.selected).addClass(g), n.element.queue(c, function () { n._trigger(h, b, n._ui(n.anchors[m.selected], n.element.find(n._sanitizeSelector(n.anchors[m.selected].hash))[0])) }), t.load(m.selected)), a(window).bind("unload", function () { n.lis.add(n.anchors).unbind(d), n.lis = n.anchors = n.panels = b })) : (m.selected = t.lis.index(t.lis.filter(w))), t.element[m.collapsible ? B : C]("ui-tabs-collapsible"), m.cookie && t._cookie(m.selected, m.cookie); for (var D = 0, E; E = t.lis[D]; D++) a(E)[a.inArray(D, m.disabled) != -1 && !a(E).hasClass(i) ? B : C](j); m.cache === !1 && t.anchors.removeData(l), t.lis.add(t.anchors).unbind(d); if (m.event !== "mouseover") { var F = function (b, a) { a.is(":not(.ui-state-disabled)") && a.addClass(x + b) }, G = function (a, b) { b.removeClass(x + a) }; t.lis.bind("mouseover.tabs", function () { F("hover", a(this)) }), t.lis.bind("mouseout.tabs", function () { G("hover", a(this)) }), t.anchors.bind("focus.tabs", function () { F("focus", a(this).closest(v)) }), t.anchors.bind("blur.tabs", function () { G("focus", a(this).closest(v)) }) } var y, z; m.fx && (a.isArray(m.fx) ? (y = m.fx[0], z = m.fx[1]) : (y = z = m.fx)); var I = z ? function (d, c) { a(d).closest(v).addClass(g), c.hide().removeClass(e).animate(z, z.duration || "normal", function () { H(c, z), n._trigger(h, b, n._ui(d, c[0])) }) } : function (c, d) { a(c).closest(v).addClass(g), d.removeClass(e), n._trigger(h, b, n._ui(c, d[0])) }, J = y ? function (b, a) { a.animate(y, y.duration || "normal", function () { n.lis.removeClass(g), a.addClass(e), H(a, y), n.element.dequeue(c) }) } : function (b, a) { n.lis.removeClass(g), a.addClass(e), n.element.dequeue(c) }; t.anchors.bind(m.event + d, function () { var d = this, e = d, f = a(e).closest(v), g = n.panels.filter(":not(.ui-tabs-hide)"), h = n.element.find(n._sanitizeSelector(e.hash)); if (f.hasClass(i) && !m.collapsible || f.hasClass(j) || f.hasClass(o) || n.panels.filter(":animated").length || n._trigger("select", b, n._ui(d, h[0])) === !1) return d.blur(), !1; m.selected = n.anchors.index(d), n.abort(); if (m.collapsible) { if (f.hasClass(i)) return m.selected = -1, m.cookie && n._cookie(m.selected, m.cookie), n.element.queue(c, function () { J(e, g) }).dequeue(c), d.blur(), !1; if (!g.length) return m.cookie && n._cookie(m.selected, m.cookie), n.element.queue(c, function () { I(e, h) }), n.load(n.anchors.index(d)), d.blur(), !1 } m.cookie && n._cookie(m.selected, m.cookie); if (h.length) g.length && n.element.queue(c, function () { J(e, g) }), n.element.queue(c, function () { I(e, h) }), n.load(n.anchors.index(d)); else throw "jQuery UI Tabs: Mismatching fragment identifier."; a.browser.msie && d.blur() }), t.anchors.bind("click.tabs", function () { return !1 }) }, _getIndex: function (a) { return typeof a == "string" && (a = this.anchors.index(this.anchors.filter("[href$='" + a + "']"))), a }, destroy: function () { var f = this, g = f.options; return f.abort(), f.element.unbind(d).removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible").removeData(c), f.list.removeClass(r), f.anchors.each(function () { var b = a.data(this, q); b && (this.href = b); var c = a(this).unbind(d); a.each(["href", m, "cache"], function (b, a) { c.removeData(a + d) }) }), f.lis.unbind(d).add(f.panels).each(function () { a.data(this, k) ? a(this).remove() : a(this).removeClass(["ui-state-default", "ui-corner-top", i, "ui-state-active", "ui-state-hover", "ui-state-focus", j, "ui-tabs-panel", "ui-widget-content", "ui-corner-bottom", e].join(" ")) }), g.cookie && f._cookie(b, g.cookie), f }, add: function (o, q, i) { var d = this; i === u && (i = d.anchors.length); var l = d, m = d.options, n = a(m.tabTemplate.replace(/#\{href\}/g, o).replace(/#\{label\}/g, q)), p = o.indexOf(f) ? d._tabId(a("a", n)[0]) : o.replace(f, ""); n.addClass(s).data(k, !0); var j = l.element.find(f + p); return j.length || (j = a(m.panelTemplate).attr("id", p).data(k, !0)), j.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom ui-tabs-hide"), i >= d.lis.length ? (n.appendTo(d.list), j.appendTo(d.list[0].parentNode)) : (n.insertBefore(d.lis[i]), j.insertBefore(d.panels[i])), m.disabled = a.map(m.disabled, function (a) { return a >= i ? ++a : a }), d._tabify(), d.anchors.length == 1 && (m.selected = 0, n.addClass(g), j.removeClass(e), d.element.queue(c, function () { l._trigger(h, b, l._ui(l.anchors[0], l.panels[0])) }), d.load(0)), d._trigger("add", b, d._ui(d.anchors[i], d.panels[i])), d }, remove: function (d) { var c = this; d = c._getIndex(d); var e = c.options, f = c.lis.eq(d).remove(), g = c.panels.eq(d).remove(); return f.hasClass(i) && c.anchors.length > 1 && c.select(d + (d + 1 < c.anchors.length ? 1 : -1)), e.disabled = a.map(a.grep(e.disabled, function (a) { return a != d }), function (a) { return a >= d ? --a : a }), c._tabify(), c._trigger("remove", b, c._ui(f.find("a")[0], g[0])), c }, enable: function (d) { var c = this; d = c._getIndex(d); var e = c.options; return a.inArray(d, e.disabled) == -1 ? void 0 : (c.lis.eq(d).removeClass(j), e.disabled = a.grep(e.disabled, function (a) { return a != d }), c._trigger("enable", b, c._ui(c.anchors[d], c.panels[d])), c) }, disable: function (c) { var a = this; c = a._getIndex(c); var e = a, d = a.options; return c != d.selected && (a.lis.eq(c).addClass(j), d.disabled.push(c), d.disabled.sort(), a._trigger("disable", b, a._ui(a.anchors[c], a.panels[c]))), a }, select: function (b) { var a = this; b = a._getIndex(b); if (b == -1) if (a.options.collapsible && a.options.selected != -1) b = a.options.selected; else return a; return a.anchors.eq(b).trigger(a.options.event + d), a }, load: function (f) { var e = this; f = e._getIndex(f); var d = e, g = e.options, h = e.anchors.eq(f)[0], i = a.data(h, p); e.abort(); if (!i || e.element.queue(c).length !== 0 && a.data(h, l)) { e.element.dequeue(c); return } e.lis.eq(f).addClass(o); if (g.spinner) { var j = a("span", h); j.data(n, j.html()).html(g.spinner) } return e.xhr = a.ajax(a.extend({}, g.ajaxOptions, { url: i, success: function (c, e) { d.element.find(d._sanitizeSelector(h.hash)).html(c), d._cleanup(), g.cache && a.data(h, l, !0), d._trigger(m, b, d._ui(d.anchors[f], d.panels[f])); try { g.ajaxOptions.success(c, e) } catch (i) { } }, error: function (a, c) { d._cleanup(), d._trigger(m, b, d._ui(d.anchors[f], d.panels[f])); try { g.ajaxOptions.error(a, c, f, h) } catch (e) { } } })), d.element.dequeue(c), e }, abort: function () { var a = this; return a.element.queue([]), a.panels.stop(!1, !0), a.element.queue(c, a.element.queue(c).splice(-2, 2)), a.xhr && (a.xhr.abort(), delete a.xhr), a._cleanup(), a }, url: function (a, b) { return this.anchors.eq(a).removeData(l).data(p, b), this }, length: function () { return this.anchors.length } }), a.extend(a.ui.tabs, { version: "1.8.21" }), a.extend(a.ui.tabs.prototype, { rotation: b, rotate: function (h, j) { var e = "tabsshow", c = this, a = c, g = c.options, f = a._rotate || (a._rotate = function (b) { clearTimeout(a.rotation), a.rotation = setTimeout(function () { var b = g.selected; a.select(++b < a.anchors.length ? b : 0) }, h), b && b.stopPropagation() }), i = a._unrotate || (a._unrotate = j ? function () { f() } : function (c) { c.clientX && a.rotate(b) }); return h ? (c.element.bind(e, f), c.anchors.bind(g.event + d, i), f()) : (clearTimeout(a.rotation), c.element.unbind(e, f), c.anchors.unbind(g.event + d, i), delete c._rotate, delete c._unrotate), c } }) } (jQuery);

(function ($) {

    // Prevent "Uncaught RangeError: Maximum call stack size exceeded"
    $.ui.timepicker = $.ui.timepicker || {};
    if ($.ui.timepicker.version) {
        return;
    }

    $.extend($.ui, { timepicker: { version: "1.0.1"} });

    /* Time picker manager.
    Use the singleton instance of this class, $.timepicker, to interact with the time picker.
    Settings for (groups of) time pickers are maintained in an instance object,
    allowing multiple different settings on the same page. */

    function Timepicker() {
        this.regional = []; // Available regional settings, indexed by language code
        this.regional[''] = { // Default regional settings
            currentText: '今天',
            closeText: '关闭',
            ampm: false,
            amNames: ['AM', 'A'],
            pmNames: ['PM', 'P'],
            timeFormat: 'hh:mm',
            timeSuffix: '',
            timeOnlyTitle: 'Choose Time',
            timeText: '时间',
            hourText: '时',
            minuteText: '分',
            secondText: '秒',
            millisecText: '毫秒',
            timezoneText: '时区',
            showSecond: false
        };
        this._defaults = { // Global defaults for all the datetime picker instances
            showButtonPanel: true,
            timeOnly: false,
            showHour: true,
            showMinute: true,
            showSecond: false,
            showMillisec: false,
            showTimezone: false,
            showTime: true,
            stepHour: 1,
            stepMinute: 1,
            stepSecond: 1,
            stepMillisec: 1,
            hour: 0,
            minute: 0,
            second: 0,
            millisec: 0,
            timezone: null,
            useLocalTimezone: false,
            defaultTimezone: "+0000",
            hourMin: 0,
            minuteMin: 0,
            secondMin: 0,
            millisecMin: 0,
            hourMax: 23,
            minuteMax: 59,
            secondMax: 59,
            millisecMax: 999,
            minDateTime: null,
            maxDateTime: null,
            onSelect: null,
            hourGrid: 0,
            minuteGrid: 0,
            secondGrid: 0,
            millisecGrid: 0,
            alwaysSetTime: true,
            separator: ' ',
            altFieldTimeOnly: true,
            showTimepicker: true,
            timezoneIso8601: false,
            timezoneList: null,
            addSliderAccess: false,
            sliderAccessArgs: null
        };
        $.extend(this._defaults, this.regional['']);
    }

    $.extend(Timepicker.prototype, {
        $input: null,
        $altInput: null,
        $timeObj: null,
        inst: null,
        hour_slider: null,
        minute_slider: null,
        second_slider: null,
        millisec_slider: null,
        timezone_select: null,
        hour: 0,
        minute: 0,
        second: 0,
        millisec: 0,
        timezone: null,
        defaultTimezone: "+0000",
        hourMinOriginal: null,
        minuteMinOriginal: null,
        secondMinOriginal: null,
        millisecMinOriginal: null,
        hourMaxOriginal: null,
        minuteMaxOriginal: null,
        secondMaxOriginal: null,
        millisecMaxOriginal: null,
        ampm: '',
        formattedDate: '',
        formattedTime: '',
        formattedDateTime: '',
        timezoneList: null,

        /* Override the default settings for all instances of the time picker.
        @param  settings  object - the new settings to use as defaults (anonymous object)
        @return the manager object */
        setDefaults: function (settings) {
            extendRemove(this._defaults, settings || {});
            return this;
        },

        //########################################################################
        // Create a new Timepicker instance
        //########################################################################
        _newInst: function ($input, o) {
            var tp_inst = new Timepicker(),
			inlineSettings = {};

            for (var attrName in this._defaults) {
                var attrValue = $input.attr('time:' + attrName);
                if (attrValue) {
                    try {
                        inlineSettings[attrName] = eval(attrValue);
                    } catch (err) {
                        inlineSettings[attrName] = attrValue;
                    }
                }
            }
            tp_inst._defaults = $.extend({}, this._defaults, inlineSettings, o, {
                beforeShow: function (input, dp_inst) {
                    if ($.isFunction(o.beforeShow)) {
                        return o.beforeShow(input, dp_inst, tp_inst);
                    }
                },
                onChangeMonthYear: function (year, month, dp_inst) {
                    // ModifyAwardDetailItems the time as well : this prevents the time from disappearing from the $input field.
                    tp_inst._updateDateTime(dp_inst);
                    if ($.isFunction(o.onChangeMonthYear)) {
                        o.onChangeMonthYear.call($input[0], year, month, dp_inst, tp_inst);
                    }
                },
                onClose: function (dateText, dp_inst) {
                    if (tp_inst.timeDefined === true && $input.val() !== '') {
                        tp_inst._updateDateTime(dp_inst);
                    }
                    if ($.isFunction(o.onClose)) {
                        o.onClose.call($input[0], dateText, dp_inst, tp_inst);
                    }
                },
                timepicker: tp_inst // add timepicker as a property of datepicker: $.datepicker._get(dp_inst, 'timepicker');
            });
            tp_inst.amNames = $.map(tp_inst._defaults.amNames, function (val) { return val.toUpperCase(); });
            tp_inst.pmNames = $.map(tp_inst._defaults.pmNames, function (val) { return val.toUpperCase(); });

            if (tp_inst._defaults.timezoneList === null) {
                var timezoneList = [];
                for (var i = -11; i <= 12; i++) {
                    timezoneList.push((i >= 0 ? '+' : '-') + ('0' + Math.abs(i).toString()).slice(-2) + '00');
                }
                if (tp_inst._defaults.timezoneIso8601) {
                    timezoneList = $.map(timezoneList, function (val) {
                        return val == '+0000' ? 'Z' : (val.substring(0, 3) + ':' + val.substring(3));
                    });
                }
                tp_inst._defaults.timezoneList = timezoneList;
            }

            tp_inst.timezone = tp_inst._defaults.timezone;
            tp_inst.hour = tp_inst._defaults.hour;
            tp_inst.minute = tp_inst._defaults.minute;
            tp_inst.second = tp_inst._defaults.second;
            tp_inst.millisec = tp_inst._defaults.millisec;
            tp_inst.ampm = '';
            tp_inst.$input = $input;

            if (o.altField) {
                tp_inst.$altInput = $(o.altField)
				.css({ cursor: 'pointer' })
				.focus(function () { $input.trigger("focus"); });
            }

            if (tp_inst._defaults.minDate === 0 || tp_inst._defaults.minDateTime === 0) {
                tp_inst._defaults.minDate = new Date();
            }
            if (tp_inst._defaults.maxDate === 0 || tp_inst._defaults.maxDateTime === 0) {
                tp_inst._defaults.maxDate = new Date();
            }

            // datepicker needs minDate/maxDate, timepicker needs minDateTime/maxDateTime..
            if (tp_inst._defaults.minDate !== undefined && tp_inst._defaults.minDate instanceof Date) {
                tp_inst._defaults.minDateTime = new Date(tp_inst._defaults.minDate.getTime());
            }
            if (tp_inst._defaults.minDateTime !== undefined && tp_inst._defaults.minDateTime instanceof Date) {
                tp_inst._defaults.minDate = new Date(tp_inst._defaults.minDateTime.getTime());
            }
            if (tp_inst._defaults.maxDate !== undefined && tp_inst._defaults.maxDate instanceof Date) {
                tp_inst._defaults.maxDateTime = new Date(tp_inst._defaults.maxDate.getTime());
            }
            if (tp_inst._defaults.maxDateTime !== undefined && tp_inst._defaults.maxDateTime instanceof Date) {
                tp_inst._defaults.maxDate = new Date(tp_inst._defaults.maxDateTime.getTime());
            }
            return tp_inst;
        },

        //########################################################################
        // add our sliders to the calendar
        //########################################################################
        _addTimePicker: function (dp_inst) {
            var currDT = (this.$altInput && this._defaults.altFieldTimeOnly) ?
				this.$input.val() + ' ' + this.$altInput.val() :
				this.$input.val();

            this.timeDefined = this._parseTime(currDT);
            this._limitMinMaxDateTime(dp_inst, false);
            this._injectTimePicker();
        },

        //########################################################################
        // parse the time string from input value or _setTime
        //########################################################################
        _parseTime: function (timeString, withDate) {
            if (!this.inst) {
                this.inst = $.datepicker._getInst(this.$input[0]);
            }

            if (withDate || !this._defaults.timeOnly) {
                var dp_dateFormat = $.datepicker._get(this.inst, 'dateFormat');
                try {
                    var parseRes = parseDateTimeInternal(dp_dateFormat, this._defaults.timeFormat, timeString, $.datepicker._getFormatConfig(this.inst), this._defaults);
                    if (!parseRes.timeObj) { return false; }
                    $.extend(this, parseRes.timeObj);
                } catch (err) {
                    return false;
                }
                return true;
            }
            else {
                var timeObj = $.datepicker.parseTime(this._defaults.timeFormat, timeString, this._defaults);
                if (!timeObj) { return false; }
                $.extend(this, timeObj);
                return true;
            }
        },

        //########################################################################
        // generate and inject html for timepicker into ui datepicker
        //########################################################################
        _injectTimePicker: function () {
            var $dp = this.inst.dpDiv,
			o = this._defaults,
			tp_inst = this,
            // Added by Peter Medeiros:
            // - Figure out what the hour/minute/second max should be based on the step values.
            // - Example: if stepMinute is 15, then minMax is 45.
			hourMax = parseInt((o.hourMax - ((o.hourMax - o.hourMin) % o.stepHour)), 10),
			minMax = parseInt((o.minuteMax - ((o.minuteMax - o.minuteMin) % o.stepMinute)), 10),
			secMax = parseInt((o.secondMax - ((o.secondMax - o.secondMin) % o.stepSecond)), 10),
			millisecMax = parseInt((o.millisecMax - ((o.millisecMax - o.millisecMin) % o.stepMillisec)), 10),
			dp_id = this.inst.id.toString().replace(/([^A-Za-z0-9_])/g, '');

            // Prevent displaying twice
            //if ($dp.find("div#ui-timepicker-div-"+ dp_id).length === 0) {
            if ($dp.find("div#ui-timepicker-div-" + dp_id).length === 0 && o.showTimepicker) {
                var noDisplay = ' style="display:none;"',
				html = '<div class="ui-timepicker-div" id="ui-timepicker-div-' + dp_id + '"><dl>' +
						'<dt class="ui_tpicker_time_label" id="ui_tpicker_time_label_' + dp_id + '"' +
						((o.showTime) ? '' : noDisplay) + '>' + o.timeText + '</dt>' +
						'<dd class="ui_tpicker_time" id="ui_tpicker_time_' + dp_id + '"' +
						((o.showTime) ? '' : noDisplay) + '></dd>' +
						'<dt class="ui_tpicker_hour_label" id="ui_tpicker_hour_label_' + dp_id + '"' +
						((o.showHour) ? '' : noDisplay) + '>' + o.hourText + '</dt>',
				hourGridSize = 0,
				minuteGridSize = 0,
				secondGridSize = 0,
				millisecGridSize = 0,
				size = null;

                // Hours
                html += '<dd class="ui_tpicker_hour"><div id="ui_tpicker_hour_' + dp_id + '"' +
						((o.showHour) ? '' : noDisplay) + '></div>';
                if (o.showHour && o.hourGrid > 0) {
                    html += '<div style="padding-left: 1px"><table class="ui-tpicker-grid-label"><tr>';

                    for (var h = o.hourMin; h <= hourMax; h += parseInt(o.hourGrid, 10)) {
                        hourGridSize++;
                        var tmph = (o.ampm && h > 12) ? h - 12 : h;
                        if (tmph < 10) { tmph = '0' + tmph; }
                        if (o.ampm) {
                            if (h === 0) {
                                tmph = 12 + 'a';
                            } else {
                                if (h < 12) { tmph += 'a'; }
                                else { tmph += 'p'; }
                            }
                        }
                        html += '<td>' + tmph + '</td>';
                    }

                    html += '</tr></table></div>';
                }
                html += '</dd>';

                // Minutes
                html += '<dt class="ui_tpicker_minute_label" id="ui_tpicker_minute_label_' + dp_id + '"' +
					((o.showMinute) ? '' : noDisplay) + '>' + o.minuteText + '</dt>' +
					'<dd class="ui_tpicker_minute"><div id="ui_tpicker_minute_' + dp_id + '"' +
							((o.showMinute) ? '' : noDisplay) + '></div>';

                if (o.showMinute && o.minuteGrid > 0) {
                    html += '<div style="padding-left: 1px"><table class="ui-tpicker-grid-label"><tr>';

                    for (var m = o.minuteMin; m <= minMax; m += parseInt(o.minuteGrid, 10)) {
                        minuteGridSize++;
                        html += '<td>' + ((m < 10) ? '0' : '') + m + '</td>';
                    }

                    html += '</tr></table></div>';
                }
                html += '</dd>';

                if (o.showSecond)
                // Seconds
                    html += '<dt class="ui_tpicker_second_label" id="ui_tpicker_second_label_' + dp_id + '"' +
					((o.showSecond) ? '' : noDisplay) + '>' + o.secondText + '</dt>' +
					'<dd class="ui_tpicker_second"><div id="ui_tpicker_second_' + dp_id + '"' +
							((o.showSecond) ? '' : noDisplay) + '></div>';

                if (o.showSecond && o.secondGrid > 0) {
                    html += '<div style="padding-left: 1px"><table><tr>';

                    for (var s = o.secondMin; s <= secMax; s += parseInt(o.secondGrid, 10)) {
                        secondGridSize++;
                        html += '<td>' + ((s < 10) ? '0' : '') + s + '</td>';
                    }

                    html += '</tr></table></div>';
                }
                html += '</dd>';

                // Milliseconds
                html += '<dt class="ui_tpicker_millisec_label" id="ui_tpicker_millisec_label_' + dp_id + '"' +
					((o.showMillisec) ? '' : noDisplay) + '>' + o.millisecText + '</dt>' +
					'<dd class="ui_tpicker_millisec"><div id="ui_tpicker_millisec_' + dp_id + '"' +
							((o.showMillisec) ? '' : noDisplay) + '></div>';

                if (o.showMillisec && o.millisecGrid > 0) {
                    html += '<div style="padding-left: 1px"><table><tr>';

                    for (var l = o.millisecMin; l <= millisecMax; l += parseInt(o.millisecGrid, 10)) {
                        millisecGridSize++;
                        html += '<td>' + ((l < 10) ? '0' : '') + l + '</td>';
                    }

                    html += '</tr></table></div>';
                }
                html += '</dd>';

                // Timezone
                html += '<dt class="ui_tpicker_timezone_label" id="ui_tpicker_timezone_label_' + dp_id + '"' +
					((o.showTimezone) ? '' : noDisplay) + '>' + o.timezoneText + '</dt>';
                html += '<dd class="ui_tpicker_timezone" id="ui_tpicker_timezone_' + dp_id + '"' +
							((o.showTimezone) ? '' : noDisplay) + '></dd>';

                html += '</dl></div>';
                var $tp = $(html);

                // if we only want time picker...
                if (o.timeOnly === true) {
                    $tp.prepend(
					'<div class="ui-widget-header ui-helper-clearfix ui-corner-all">' +
						'<div class="ui-datepicker-title">' + o.timeOnlyTitle + '</div>' +
					'</div>');
                    $dp.find('.ui-datepicker-header, .ui-datepicker-calendar').hide();
                }

                this.hour_slider = $tp.find('#ui_tpicker_hour_' + dp_id).slider({
                    orientation: "horizontal",
                    value: this.hour,
                    min: o.hourMin,
                    max: hourMax,
                    step: o.stepHour,
                    slide: function (event, ui) {
                        tp_inst.hour_slider.slider("option", "value", ui.value);
                        tp_inst._onTimeChange();
                    }
                });


                // Updated by Peter Medeiros:
                // - Pass in Event and UI instance into slide function
                this.minute_slider = $tp.find('#ui_tpicker_minute_' + dp_id).slider({
                    orientation: "horizontal",
                    value: this.minute,
                    min: o.minuteMin,
                    max: minMax,
                    step: o.stepMinute,
                    slide: function (event, ui) {
                        tp_inst.minute_slider.slider("option", "value", ui.value);
                        tp_inst._onTimeChange();
                    }
                });

                this.second_slider = $tp.find('#ui_tpicker_second_' + dp_id).slider({
                    orientation: "horizontal",
                    value: this.second,
                    min: o.secondMin,
                    max: secMax,
                    step: o.stepSecond,
                    slide: function (event, ui) {
                        tp_inst.second_slider.slider("option", "value", ui.value);
                        tp_inst._onTimeChange();
                    }
                });

                this.millisec_slider = $tp.find('#ui_tpicker_millisec_' + dp_id).slider({
                    orientation: "horizontal",
                    value: this.millisec,
                    min: o.millisecMin,
                    max: millisecMax,
                    step: o.stepMillisec,
                    slide: function (event, ui) {
                        tp_inst.millisec_slider.slider("option", "value", ui.value);
                        tp_inst._onTimeChange();
                    }
                });

                this.timezone_select = $tp.find('#ui_tpicker_timezone_' + dp_id).append('<select></select>').find("select");
                $.fn.append.apply(this.timezone_select,
				$.map(o.timezoneList, function (val, idx) {
				    return $("<option />")
						.val(typeof val == "object" ? val.value : val)
						.text(typeof val == "object" ? val.label : val);
				})
			);
                if (typeof (this.timezone) != "undefined" && this.timezone !== null && this.timezone !== "") {
                    var local_date = new Date(this.inst.selectedYear, this.inst.selectedMonth, this.inst.selectedDay, 12);
                    var local_timezone = timeZoneString(local_date);
                    if (local_timezone == this.timezone) {
                        selectLocalTimeZone(tp_inst);
                    } else {
                        this.timezone_select.val(this.timezone);
                    }
                } else {
                    if (typeof (this.hour) != "undefined" && this.hour !== null && this.hour !== "") {
                        this.timezone_select.val(o.defaultTimezone);
                    } else {
                        selectLocalTimeZone(tp_inst);
                    }
                }
                this.timezone_select.change(function () {
                    tp_inst._defaults.useLocalTimezone = false;
                    tp_inst._onTimeChange();
                });

                // Add grid functionality
                if (o.showHour && o.hourGrid > 0) {
                    size = 100 * hourGridSize * o.hourGrid / (hourMax - o.hourMin);

                    $tp.find(".ui_tpicker_hour table").css({
                        width: size + "%",
                        marginLeft: (size / (-2 * hourGridSize)) + "%",
                        borderCollapse: 'collapse'
                    }).find("td").each(function (index) {
                        $(this).click(function () {
                            var h = $(this).html();
                            if (o.ampm) {
                                var ap = h.substring(2).toLowerCase(),
								aph = parseInt(h.substring(0, 2), 10);
                                if (ap == 'a') {
                                    if (aph == 12) { h = 0; }
                                    else { h = aph; }
                                } else if (aph == 12) { h = 12; }
                                else { h = aph + 12; }
                            }
                            tp_inst.hour_slider.slider("option", "value", h);
                            tp_inst._onTimeChange();
                            tp_inst._onSelectHandler();
                        }).css({
                            cursor: 'pointer',
                            width: (100 / hourGridSize) + '%',
                            textAlign: 'center',
                            overflow: 'hidden'
                        });
                    });
                }

                if (o.showMinute && o.minuteGrid > 0) {
                    size = 100 * minuteGridSize * o.minuteGrid / (minMax - o.minuteMin);
                    $tp.find(".ui_tpicker_minute table").css({
                        width: size + "%",
                        marginLeft: (size / (-2 * minuteGridSize)) + "%",
                        borderCollapse: 'collapse'
                    }).find("td").each(function (index) {
                        $(this).click(function () {
                            tp_inst.minute_slider.slider("option", "value", $(this).html());
                            tp_inst._onTimeChange();
                            tp_inst._onSelectHandler();
                        }).css({
                            cursor: 'pointer',
                            width: (100 / minuteGridSize) + '%',
                            textAlign: 'center',
                            overflow: 'hidden'
                        });
                    });
                }

                if (o.showSecond && o.secondGrid > 0) {
                    $tp.find(".ui_tpicker_second table").css({
                        width: size + "%",
                        marginLeft: (size / (-2 * secondGridSize)) + "%",
                        borderCollapse: 'collapse'
                    }).find("td").each(function (index) {
                        $(this).click(function () {
                            tp_inst.second_slider.slider("option", "value", $(this).html());
                            tp_inst._onTimeChange();
                            tp_inst._onSelectHandler();
                        }).css({
                            cursor: 'pointer',
                            width: (100 / secondGridSize) + '%',
                            textAlign: 'center',
                            overflow: 'hidden'
                        });
                    });
                }

                if (o.showMillisec && o.millisecGrid > 0) {
                    $tp.find(".ui_tpicker_millisec table").css({
                        width: size + "%",
                        marginLeft: (size / (-2 * millisecGridSize)) + "%",
                        borderCollapse: 'collapse'
                    }).find("td").each(function (index) {
                        $(this).click(function () {
                            tp_inst.millisec_slider.slider("option", "value", $(this).html());
                            tp_inst._onTimeChange();
                            tp_inst._onSelectHandler();
                        }).css({
                            cursor: 'pointer',
                            width: (100 / millisecGridSize) + '%',
                            textAlign: 'center',
                            overflow: 'hidden'
                        });
                    });
                }

                var $buttonPanel = $dp.find('.ui-datepicker-buttonpane');
                if ($buttonPanel.length) { $buttonPanel.before($tp); }
                else { $dp.append($tp); }

                this.$timeObj = $tp.find('#ui_tpicker_time_' + dp_id);

                if (this.inst !== null) {
                    var timeDefined = this.timeDefined;
                    this._onTimeChange();
                    this.timeDefined = timeDefined;
                }

                //Emulate datepicker onSelect behavior. Call on slidestop.
                var onSelectDelegate = function () {
                    tp_inst._onSelectHandler();
                };
                this.hour_slider.bind('slidestop', onSelectDelegate);
                this.minute_slider.bind('slidestop', onSelectDelegate);
                this.second_slider.bind('slidestop', onSelectDelegate);
                this.millisec_slider.bind('slidestop', onSelectDelegate);

                // slideAccess integration: http://trentrichardson.com/2011/11/11/jquery-ui-sliders-and-touch-accessibility/
                if (this._defaults.addSliderAccess) {
                    var sliderAccessArgs = this._defaults.sliderAccessArgs;
                    setTimeout(function () { // fix for inline mode
                        if ($tp.find('.ui-slider-access').length === 0) {
                            $tp.find('.ui-slider:visible').sliderAccess(sliderAccessArgs);

                            // fix any grids since sliders are shorter
                            var sliderAccessWidth = $tp.find('.ui-slider-access:eq(0)').outerWidth(true);
                            if (sliderAccessWidth) {
                                $tp.find('table:visible').each(function () {
                                    var $g = $(this),
									oldWidth = $g.outerWidth(),
									oldMarginLeft = $g.css('marginLeft').toString().replace('%', ''),
									newWidth = oldWidth - sliderAccessWidth,
									newMarginLeft = ((oldMarginLeft * newWidth) / oldWidth) + '%';

                                    $g.css({ width: newWidth, marginLeft: newMarginLeft });
                                });
                            }
                        }
                    }, 0);
                }
                // end slideAccess integration

            }
        },

        //########################################################################
        // This function tries to limit the ability to go outside the
        // min/max date range
        //########################################################################
        _limitMinMaxDateTime: function (dp_inst, adjustSliders) {
            var o = this._defaults,
			dp_date = new Date(dp_inst.selectedYear, dp_inst.selectedMonth, dp_inst.selectedDay);

            if (!this._defaults.showTimepicker) { return; } // No time so nothing to check here

            if ($.datepicker._get(dp_inst, 'minDateTime') !== null && $.datepicker._get(dp_inst, 'minDateTime') !== undefined && dp_date) {
                var minDateTime = $.datepicker._get(dp_inst, 'minDateTime'),
				minDateTimeDate = new Date(minDateTime.getFullYear(), minDateTime.getMonth(), minDateTime.getDate(), 0, 0, 0, 0);

                if (this.hourMinOriginal === null || this.minuteMinOriginal === null || this.secondMinOriginal === null || this.millisecMinOriginal === null) {
                    this.hourMinOriginal = o.hourMin;
                    this.minuteMinOriginal = o.minuteMin;
                    this.secondMinOriginal = o.secondMin;
                    this.millisecMinOriginal = o.millisecMin;
                }

                if (dp_inst.settings.timeOnly || minDateTimeDate.getTime() == dp_date.getTime()) {
                    this._defaults.hourMin = minDateTime.getHours();
                    if (this.hour <= this._defaults.hourMin) {
                        this.hour = this._defaults.hourMin;
                        this._defaults.minuteMin = minDateTime.getMinutes();
                        if (this.minute <= this._defaults.minuteMin) {
                            this.minute = this._defaults.minuteMin;
                            this._defaults.secondMin = minDateTime.getSeconds();
                        } else if (this.second <= this._defaults.secondMin) {
                            this.second = this._defaults.secondMin;
                            this._defaults.millisecMin = minDateTime.getMilliseconds();
                        } else {
                            if (this.millisec < this._defaults.millisecMin) {
                                this.millisec = this._defaults.millisecMin;
                            }
                            this._defaults.millisecMin = this.millisecMinOriginal;
                        }
                    } else {
                        this._defaults.minuteMin = this.minuteMinOriginal;
                        this._defaults.secondMin = this.secondMinOriginal;
                        this._defaults.millisecMin = this.millisecMinOriginal;
                    }
                } else {
                    this._defaults.hourMin = this.hourMinOriginal;
                    this._defaults.minuteMin = this.minuteMinOriginal;
                    this._defaults.secondMin = this.secondMinOriginal;
                    this._defaults.millisecMin = this.millisecMinOriginal;
                }
            }

            if ($.datepicker._get(dp_inst, 'maxDateTime') !== null && $.datepicker._get(dp_inst, 'maxDateTime') !== undefined && dp_date) {
                var maxDateTime = $.datepicker._get(dp_inst, 'maxDateTime'),
				maxDateTimeDate = new Date(maxDateTime.getFullYear(), maxDateTime.getMonth(), maxDateTime.getDate(), 0, 0, 0, 0);

                if (this.hourMaxOriginal === null || this.minuteMaxOriginal === null || this.secondMaxOriginal === null) {
                    this.hourMaxOriginal = o.hourMax;
                    this.minuteMaxOriginal = o.minuteMax;
                    this.secondMaxOriginal = o.secondMax;
                    this.millisecMaxOriginal = o.millisecMax;
                }

                if (dp_inst.settings.timeOnly || maxDateTimeDate.getTime() == dp_date.getTime()) {
                    this._defaults.hourMax = maxDateTime.getHours();
                    if (this.hour >= this._defaults.hourMax) {
                        this.hour = this._defaults.hourMax;
                        this._defaults.minuteMax = maxDateTime.getMinutes();
                        if (this.minute >= this._defaults.minuteMax) {
                            this.minute = this._defaults.minuteMax;
                            this._defaults.secondMax = maxDateTime.getSeconds();
                        } else if (this.second >= this._defaults.secondMax) {
                            this.second = this._defaults.secondMax;
                            this._defaults.millisecMax = maxDateTime.getMilliseconds();
                        } else {
                            if (this.millisec > this._defaults.millisecMax) { this.millisec = this._defaults.millisecMax; }
                            this._defaults.millisecMax = this.millisecMaxOriginal;
                        }
                    } else {
                        this._defaults.minuteMax = this.minuteMaxOriginal;
                        this._defaults.secondMax = this.secondMaxOriginal;
                        this._defaults.millisecMax = this.millisecMaxOriginal;
                    }
                } else {
                    this._defaults.hourMax = this.hourMaxOriginal;
                    this._defaults.minuteMax = this.minuteMaxOriginal;
                    this._defaults.secondMax = this.secondMaxOriginal;
                    this._defaults.millisecMax = this.millisecMaxOriginal;
                }
            }

            if (adjustSliders !== undefined && adjustSliders === true) {
                var hourMax = parseInt((this._defaults.hourMax - ((this._defaults.hourMax - this._defaults.hourMin) % this._defaults.stepHour)), 10),
                minMax = parseInt((this._defaults.minuteMax - ((this._defaults.minuteMax - this._defaults.minuteMin) % this._defaults.stepMinute)), 10),
                secMax = parseInt((this._defaults.secondMax - ((this._defaults.secondMax - this._defaults.secondMin) % this._defaults.stepSecond)), 10),
				millisecMax = parseInt((this._defaults.millisecMax - ((this._defaults.millisecMax - this._defaults.millisecMin) % this._defaults.stepMillisec)), 10);

                if (this.hour_slider) {
                    this.hour_slider.slider("option", { min: this._defaults.hourMin, max: hourMax }).slider('value', this.hour);
                }
                if (this.minute_slider) {
                    this.minute_slider.slider("option", { min: this._defaults.minuteMin, max: minMax }).slider('value', this.minute);
                }
                if (this.second_slider) {
                    this.second_slider.slider("option", { min: this._defaults.secondMin, max: secMax }).slider('value', this.second);
                }
                if (this.millisec_slider) {
                    this.millisec_slider.slider("option", { min: this._defaults.millisecMin, max: millisecMax }).slider('value', this.millisec);
                }
            }

        },


        //########################################################################
        // when a slider moves, set the internal time...
        // on time change is also called when the time is updated in the text field
        //########################################################################
        _onTimeChange: function () {
            var hour = (this.hour_slider) ? this.hour_slider.slider('value') : false,
			minute = (this.minute_slider) ? this.minute_slider.slider('value') : false,
			second = (this.second_slider) ? this.second_slider.slider('value') : false,
			millisec = (this.millisec_slider) ? this.millisec_slider.slider('value') : false,
			timezone = (this.timezone_select) ? this.timezone_select.val() : false,
			o = this._defaults;

            if (typeof (hour) == 'object') { hour = false; }
            if (typeof (minute) == 'object') { minute = false; }
            if (typeof (second) == 'object') { second = false; }
            if (typeof (millisec) == 'object') { millisec = false; }
            if (typeof (timezone) == 'object') { timezone = false; }

            if (hour !== false) { hour = parseInt(hour, 10); }
            if (minute !== false) { minute = parseInt(minute, 10); }
            if (second !== false) { second = parseInt(second, 10); }
            if (millisec !== false) { millisec = parseInt(millisec, 10); }

            var ampm = o[hour < 12 ? 'amNames' : 'pmNames'][0];

            // If the update was done in the input field, the input field should not be updated.
            // If the update was done using the sliders, update the input field.
            var hasChanged = (hour != this.hour || minute != this.minute ||
				second != this.second || millisec != this.millisec ||
				(this.ampm.length > 0 &&
				    (hour < 12) != ($.inArray(this.ampm.toUpperCase(), this.amNames) !== -1)) ||
				timezone != this.timezone);

            if (hasChanged) {

                if (hour !== false) { this.hour = hour; }
                if (minute !== false) { this.minute = minute; }
                if (second !== false) { this.second = second; }
                if (millisec !== false) { this.millisec = millisec; }
                if (timezone !== false) { this.timezone = timezone; }

                if (!this.inst) { this.inst = $.datepicker._getInst(this.$input[0]); }

                this._limitMinMaxDateTime(this.inst, true);
            }
            if (o.ampm) { this.ampm = ampm; }

            //this._formatTime();
            this.formattedTime = $.datepicker.formatTime(this._defaults.timeFormat, this, this._defaults);
            if (this.$timeObj) { this.$timeObj.text(this.formattedTime + o.timeSuffix); }
            this.timeDefined = true;
            if (hasChanged) { this._updateDateTime(); }
        },

        //########################################################################
        // call custom onSelect.
        // bind to sliders slidestop, and grid click.
        //########################################################################
        _onSelectHandler: function () {
            var onSelect = this._defaults.onSelect;
            var inputEl = this.$input ? this.$input[0] : null;
            if (onSelect && inputEl) {
                onSelect.apply(inputEl, [this.formattedDateTime, this]);
            }
        },

        //########################################################################
        // left for any backwards compatibility
        //########################################################################
        _formatTime: function (time, format) {
            time = time || { hour: this.hour, minute: this.minute, second: this.second, millisec: this.millisec, ampm: this.ampm, timezone: this.timezone };
            var tmptime = (format || this._defaults.timeFormat).toString();

            tmptime = $.datepicker.formatTime(tmptime, time, this._defaults);

            if (arguments.length) { return tmptime; }
            else { this.formattedTime = tmptime; }
        },

        //########################################################################
        // update our input with the new date time..
        //########################################################################
        _updateDateTime: function (dp_inst) {
            dp_inst = this.inst || dp_inst;
            var dt = $.datepicker._daylightSavingAdjust(new Date(dp_inst.selectedYear, dp_inst.selectedMonth, dp_inst.selectedDay)),
			dateFmt = $.datepicker._get(dp_inst, 'dateFormat'),
			formatCfg = $.datepicker._getFormatConfig(dp_inst),
			timeAvailable = dt !== null && this.timeDefined;
            this.formattedDate = $.datepicker.formatDate(dateFmt, (dt === null ? new Date() : dt), formatCfg);
            var formattedDateTime = this.formattedDate;
            // remove following lines to force every changes in date picker to change the input value
            // Bug descriptions: when an input field has a default value, and click on the field to pop up the date picker. 
            // If the user manually empty the value in the input field, the date picker will never change selected value.
            //if (dp_inst.lastVal !== undefined && (dp_inst.lastVal.length > 0 && this.$input.val().length === 0)) {
            //	return;
            //}

            if (this._defaults.timeOnly === true) {
                formattedDateTime = this.formattedTime;
            } else if (this._defaults.timeOnly !== true && (this._defaults.alwaysSetTime || timeAvailable)) {
                formattedDateTime += this._defaults.separator + this.formattedTime + this._defaults.timeSuffix;
            }

            this.formattedDateTime = formattedDateTime;

            if (!this._defaults.showTimepicker) {
                this.$input.val(this.formattedDate);
            } else if (this.$altInput && this._defaults.altFieldTimeOnly === true) {
                this.$altInput.val(this.formattedTime);
                this.$input.val(this.formattedDate);
            } else if (this.$altInput) {
                this.$altInput.val(formattedDateTime);
                this.$input.val(formattedDateTime);
            } else {
                this.$input.val(formattedDateTime);
            }

            this.$input.trigger("change");
        }

    });

    $.fn.extend({
        //########################################################################
        // shorthand just to use timepicker..
        //########################################################################
        timepicker: function (o) {
            o = o || {};
            var tmp_args = arguments;

            if (typeof o == 'object') { tmp_args[0] = $.extend(o, { timeOnly: true }); }

            return $(this).each(function () {
                $.fn.datetimepicker.apply($(this), tmp_args);
            });
        },

        //########################################################################
        // extend timepicker to datepicker
        //########################################################################
        datetimepicker: function (o) {
            o = o || {};
            var tmp_args = arguments;

            if (typeof (o) == 'string') {
                if (o == 'getDate') {
                    return $.fn.datepicker.apply($(this[0]), tmp_args);
                }
                else {
                    return this.each(function () {
                        var $t = $(this);
                        $t.datepicker.apply($t, tmp_args);
                    });
                }
            }
            else {
                return this.each(function () {
                    var $t = $(this);
                    $t.datepicker($.timepicker._newInst($t, o)._defaults);
                });
            }
        }
    });

    $.datepicker.parseDateTime = function (dateFormat, timeFormat, dateTimeString, dateSettings, timeSettings) {
        var parseRes = parseDateTimeInternal(dateFormat, timeFormat, dateTimeString, dateSettings, timeSettings);
        if (parseRes.timeObj) {
            var t = parseRes.timeObj;
            parseRes.date.setHours(t.hour, t.minute, t.second, t.millisec);
        }

        return parseRes.date;
    };

    $.datepicker.parseTime = function (timeFormat, timeString, options) {

        //########################################################################
        // pattern for standard and localized AM/PM markers
        //########################################################################
        var getPatternAmpm = function (amNames, pmNames) {
            var markers = [];
            if (amNames) {
                $.merge(markers, amNames);
            }
            if (pmNames) {
                $.merge(markers, pmNames);
            }
            markers = $.map(markers, function (val) { return val.replace(/[.*+?|()\[\]{}\\]/g, '\\$&'); });
            return '(' + markers.join('|') + ')?';
        };

        //########################################################################
        // figure out position of time elements.. cause js cant do named captures
        //########################################################################
        var getFormatPositions = function (timeFormat) {
            var finds = timeFormat.toLowerCase().match(/(h{1,2}|m{1,2}|s{1,2}|l{1}|t{1,2}|z)/g),
			orders = { h: -1, m: -1, s: -1, l: -1, t: -1, z: -1 };

            if (finds) {
                for (var i = 0; i < finds.length; i++) {
                    if (orders[finds[i].toString().charAt(0)] == -1) {
                        orders[finds[i].toString().charAt(0)] = i + 1;
                    }
                }
            }
            return orders;
        };

        var o = extendRemove(extendRemove({}, $.timepicker._defaults), options || {});

        var regstr = '^' + timeFormat.toString()
			.replace(/h{1,2}/ig, '(\\d?\\d)')
			.replace(/m{1,2}/ig, '(\\d?\\d)')
			.replace(/s{1,2}/ig, '(\\d?\\d)')
			.replace(/l{1}/ig, '(\\d?\\d?\\d)')
			.replace(/t{1,2}/ig, getPatternAmpm(o.amNames, o.pmNames))
			.replace(/z{1}/ig, '(z|[-+]\\d\\d:?\\d\\d)?')
			.replace(/\s/g, '\\s?') + o.timeSuffix + '$',
		order = getFormatPositions(timeFormat),
		ampm = '',
		treg;

        treg = timeString.match(new RegExp(regstr, 'i'));

        var resTime = { hour: 0, minute: 0, second: 0, millisec: 0 };

        if (treg) {
            if (order.t !== -1) {
                if (treg[order.t] === undefined || treg[order.t].length === 0) {
                    ampm = '';
                    resTime.ampm = '';
                } else {
                    ampm = $.inArray(treg[order.t], o.amNames) !== -1 ? 'AM' : 'PM';
                    resTime.ampm = o[ampm == 'AM' ? 'amNames' : 'pmNames'][0];
                }
            }

            if (order.h !== -1) {
                if (ampm == 'AM' && treg[order.h] == '12') {
                    resTime.hour = 0; // 12am = 0 hour
                } else {
                    if (ampm == 'PM' && treg[order.h] != '12') {
                        resTime.hour = parseInt(treg[order.h], 10) + 12; // 12pm = 12 hour, any other pm = hour + 12
                    }
                    else { resTime.hour = Number(treg[order.h]); }
                }
            }

            if (order.m !== -1) { resTime.minute = Number(treg[order.m]); }
            if (order.s !== -1) { resTime.second = Number(treg[order.s]); }
            if (order.l !== -1) { resTime.millisec = Number(treg[order.l]); }
            if (order.z !== -1 && treg[order.z] !== undefined) {
                var tz = treg[order.z].toUpperCase();
                switch (tz.length) {
                    case 1: // Z
                        tz = o.timezoneIso8601 ? 'Z' : '+0000';
                        break;
                    case 5: // +hhmm
                        if (o.timezoneIso8601) {
                            tz = tz.substring(1) == '0000' ?
							'Z' :
							tz.substring(0, 3) + ':' + tz.substring(3);
                        }
                        break;
                    case 6: // +hh:mm
                        if (!o.timezoneIso8601) {
                            tz = tz == 'Z' || tz.substring(1) == '00:00' ?
							'+0000' :
							tz.replace(/:/, '');
                        } else {
                            if (tz.substring(1) == '00:00') {
                                tz = 'Z';
                            }
                        }
                        break;
                }
                resTime.timezone = tz;
            }


            return resTime;
        }

        return false;
    };

    //########################################################################
    // format the time all pretty...
    // format = string format of the time
    // time = a {}, not a Date() for timezones
    // options = essentially the regional[].. amNames, pmNames, ampm
    //########################################################################
    $.datepicker.formatTime = function (format, time, options) {
        options = options || {};
        options = $.extend($.timepicker._defaults, options);
        time = $.extend({ hour: 0, minute: 0, second: 0, millisec: 0, timezone: '+0000' }, time);

        var tmptime = format;
        var ampmName = options.amNames[0];

        var hour = parseInt(time.hour, 10);
        if (options.ampm) {
            if (hour > 11) {
                ampmName = options.pmNames[0];
                if (hour > 12) {
                    hour = hour % 12;
                }
            }
            if (hour === 0) {
                hour = 12;
            }
        }
        tmptime = tmptime.replace(/(?:hh?|mm?|ss?|[tT]{1,2}|[lz])/g, function (match) {
            switch (match.toLowerCase()) {
                case 'hh': return ('0' + hour).slice(-2);
                case 'h': return hour;
                case 'mm': return ('0' + time.minute).slice(-2);
                case 'm': return time.minute;
                case 'ss': return ('0' + time.second).slice(-2);
                case 's': return time.second;
                case 'l': return ('00' + time.millisec).slice(-3);
                case 'z': return time.timezone;
                case 't': case 'tt':
                    if (options.ampm) {
                        if (match.length == 1) {
                            ampmName = ampmName.charAt(0);
                        }
                        return match.charAt(0) == 'T' ? ampmName.toUpperCase() : ampmName.toLowerCase();
                    }
                    return '';
            }
        });

        tmptime = $.trim(tmptime);
        return tmptime;
    };

    //########################################################################
    // the bad hack :/ override datepicker so it doesnt close on select
    // inspired: http://stackoverflow.com/questions/1252512/jquery-datepicker-prevent-closing-picker-when-clicking-a-date/1762378#1762378
    //########################################################################
    $.datepicker._base_selectDate = $.datepicker._selectDate;
    $.datepicker._selectDate = function (id, dateStr) {
        this._base_selectDate(id, dateStr);
        //       
        //        var inst = this._getInst($(id)[0]),
        //		tp_inst = this._get(inst, 'timepicker');

        //        if (tp_inst) {
        //            tp_inst._limitMinMaxDateTime(inst, true);
        //            inst.inline = inst.stay_open = true;
        //            //This way the onSelect handler called from calendarpicker get the full dateTime
        //            this._base_selectDate(id, dateStr);
        //            inst.inline = inst.stay_open = false;
        //            this._notifyChange(inst);
        //            this._updateDatepicker(inst);
        //        }
        //        else { this._base_selectDate(id, dateStr); }
    };

    //#############################################################################################
    // second bad hack :/ override datepicker so it triggers an event when changing the input field
    // and does not redraw the datepicker on every selectDate event
    //#############################################################################################
    $.datepicker._base_updateDatepicker = $.datepicker._updateDatepicker;
    $.datepicker._updateDatepicker = function (inst) {

        // don't popup the datepicker if there is another instance already opened
        var input = inst.input[0];
        if ($.datepicker._curInst &&
	   $.datepicker._curInst != inst &&
	   $.datepicker._datepickerShowing &&
	   $.datepicker._lastInput != input) {
            return;
        }

        if (typeof (inst.stay_open) !== 'boolean' || inst.stay_open === false) {

            this._base_updateDatepicker(inst);

            // Reload the time control when changing something in the input text field.
            var tp_inst = this._get(inst, 'timepicker');
            if (tp_inst) {
                tp_inst._addTimePicker(inst);

                if (tp_inst._defaults.useLocalTimezone) { //checks daylight saving with the new date.
                    var date = new Date(inst.selectedYear, inst.selectedMonth, inst.selectedDay, 12);
                    selectLocalTimeZone(tp_inst, date);
                    tp_inst._onTimeChange();
                }
            }
        }
    };

    //#######################################################################################
    // third bad hack :/ override datepicker so it allows spaces and colon in the input field
    //#######################################################################################
    $.datepicker._base_doKeyPress = $.datepicker._doKeyPress;
    $.datepicker._doKeyPress = function (event) {
        var inst = $.datepicker._getInst(event.target),
		tp_inst = $.datepicker._get(inst, 'timepicker');

        if (tp_inst) {
            if ($.datepicker._get(inst, 'constrainInput')) {
                var ampm = tp_inst._defaults.ampm,
				dateChars = $.datepicker._possibleChars($.datepicker._get(inst, 'dateFormat')),
				datetimeChars = tp_inst._defaults.timeFormat.toString()
								.replace(/[hms]/g, '')
								.replace(/TT/g, ampm ? 'APM' : '')
								.replace(/Tt/g, ampm ? 'AaPpMm' : '')
								.replace(/tT/g, ampm ? 'AaPpMm' : '')
								.replace(/T/g, ampm ? 'AP' : '')
								.replace(/tt/g, ampm ? 'apm' : '')
								.replace(/t/g, ampm ? 'ap' : '') +
								" " +
								tp_inst._defaults.separator +
								tp_inst._defaults.timeSuffix +
								(tp_inst._defaults.showTimezone ? tp_inst._defaults.timezoneList.join('') : '') +
								(tp_inst._defaults.amNames.join('')) +
								(tp_inst._defaults.pmNames.join('')) +
								dateChars,
				chr = String.fromCharCode(event.charCode === undefined ? event.keyCode : event.charCode);
                return event.ctrlKey || (chr < ' ' || !dateChars || datetimeChars.indexOf(chr) > -1);
            }
        }

        return $.datepicker._base_doKeyPress(event);
    };

    //#######################################################################################
    // Override key up event to sync manual input changes.
    //#######################################################################################
    $.datepicker._base_doKeyUp = $.datepicker._doKeyUp;
    $.datepicker._doKeyUp = function (event) {
        var inst = $.datepicker._getInst(event.target),
		tp_inst = $.datepicker._get(inst, 'timepicker');

        if (tp_inst) {
            if (tp_inst._defaults.timeOnly && (inst.input.val() != inst.lastVal)) {
                try {
                    $.datepicker._updateDatepicker(inst);
                }
                catch (err) {
                    $.datepicker.log(err);
                }
            }
        }

        return $.datepicker._base_doKeyUp(event);
    };

    //#######################################################################################
    // override "Today" button to also grab the time.
    //#######################################################################################
    $.datepicker._base_gotoToday = $.datepicker._gotoToday;
    $.datepicker._gotoToday = function (id) {
        var inst = this._getInst($(id)[0]),
		$dp = inst.dpDiv;
        var tp_inst = this._get(inst, 'timepicker');
        selectLocalTimeZone(tp_inst);
        var now = new Date();
        this._setTime(inst, now);
        $('.ui-datepicker-today', $dp).click();
        this._base_gotoToday(id);
    };

    //#######################################################################################
    // Disable & enable the Time in the datetimepicker
    //#######################################################################################
    $.datepicker._disableTimepickerDatepicker = function (target) {
        var inst = this._getInst(target);
        if (!inst) { return; }

        var tp_inst = this._get(inst, 'timepicker');
        $(target).datepicker('getDate'); // Init selected[Year|Month|Day]
        if (tp_inst) {
            tp_inst._defaults.showTimepicker = false;
            tp_inst._updateDateTime(inst);
        }
    };

    $.datepicker._enableTimepickerDatepicker = function (target) {
        var inst = this._getInst(target);
        if (!inst) { return; }

        var tp_inst = this._get(inst, 'timepicker');
        $(target).datepicker('getDate'); // Init selected[Year|Month|Day]
        if (tp_inst) {
            tp_inst._defaults.showTimepicker = true;
            tp_inst._addTimePicker(inst); // Could be disabled on page load
            tp_inst._updateDateTime(inst);
        }
    };

    //#######################################################################################
    // Create our own set time function
    //#######################################################################################
    $.datepicker._setTime = function (inst, date) {
        var tp_inst = this._get(inst, 'timepicker');
        if (tp_inst) {
            var defaults = tp_inst._defaults,
            // calling _setTime with no date sets time to defaults
			hour = date ? date.getHours() : defaults.hour,
			minute = date ? date.getMinutes() : defaults.minute,
			second = date ? date.getSeconds() : defaults.second,
			millisec = date ? date.getMilliseconds() : defaults.millisec;
            //check if within min/max times..
            // correct check if within min/max times. 	
            // Rewritten by Scott A. Woodward
            var hourEq = hour === defaults.hourMin,
			minuteEq = minute === defaults.minuteMin,
			secondEq = second === defaults.secondMin;
            var reset = false;
            if (hour < defaults.hourMin || hour > defaults.hourMax)
                reset = true;
            else if ((minute < defaults.minuteMin || minute > defaults.minuteMax) && hourEq)
                reset = true;
            else if ((second < defaults.secondMin || second > defaults.secondMax) && hourEq && minuteEq)
                reset = true;
            else if ((millisec < defaults.millisecMin || millisec > defaults.millisecMax) && hourEq && minuteEq && secondEq)
                reset = true;
            if (reset) {
                hour = defaults.hourMin;
                minute = defaults.minuteMin;
                second = defaults.secondMin;
                millisec = defaults.millisecMin;
            }
            tp_inst.hour = hour;
            tp_inst.minute = minute;
            tp_inst.second = second;
            tp_inst.millisec = millisec;
            if (tp_inst.hour_slider) tp_inst.hour_slider.slider('value', hour);
            if (tp_inst.minute_slider) tp_inst.minute_slider.slider('value', minute);
            if (tp_inst.second_slider) tp_inst.second_slider.slider('value', second);
            if (tp_inst.millisec_slider) tp_inst.millisec_slider.slider('value', millisec);

            tp_inst._onTimeChange();
            tp_inst._updateDateTime(inst);
        }
    };

    //#######################################################################################
    // Create new public method to set only time, callable as $().datepicker('setTime', date)
    //#######################################################################################
    $.datepicker._setTimeDatepicker = function (target, date, withDate) {
        var inst = this._getInst(target);
        if (!inst) { return; }

        var tp_inst = this._get(inst, 'timepicker');

        if (tp_inst) {
            this._setDateFromField(inst);
            var tp_date;
            if (date) {
                if (typeof date == "string") {
                    tp_inst._parseTime(date, withDate);
                    tp_date = new Date();
                    tp_date.setHours(tp_inst.hour, tp_inst.minute, tp_inst.second, tp_inst.millisec);
                }
                else { tp_date = new Date(date.getTime()); }
                if (tp_date.toString() == 'Invalid Date') { tp_date = undefined; }
                this._setTime(inst, tp_date);
            }
        }

    };

    //#######################################################################################
    // override setDate() to allow setting time too within Date object
    //#######################################################################################
    $.datepicker._base_setDateDatepicker = $.datepicker._setDateDatepicker;
    $.datepicker._setDateDatepicker = function (target, date) {
        var inst = this._getInst(target);
        if (!inst) { return; }

        var tp_date = (date instanceof Date) ? new Date(date.getTime()) : date;

        this._updateDatepicker(inst);
        this._base_setDateDatepicker.apply(this, arguments);
        this._setTimeDatepicker(target, tp_date, true);
    };

    //#######################################################################################
    // override getDate() to allow getting time too within Date object
    //#######################################################################################
    $.datepicker._base_getDateDatepicker = $.datepicker._getDateDatepicker;
    $.datepicker._getDateDatepicker = function (target, noDefault) {
        var inst = this._getInst(target);
        if (!inst) { return; }

        var tp_inst = this._get(inst, 'timepicker');

        if (tp_inst) {
            this._setDateFromField(inst, noDefault);
            var date = this._getDate(inst);
            if (date && tp_inst._parseTime($(target).val(), tp_inst.timeOnly)) { date.setHours(tp_inst.hour, tp_inst.minute, tp_inst.second, tp_inst.millisec); }
            return date;
        }
        return this._base_getDateDatepicker(target, noDefault);
    };

    //#######################################################################################
    // override parseDate() because UI 1.8.14 throws an error about "Extra characters"
    // An option in datapicker to ignore extra format characters would be nicer.
    //#######################################################################################
    $.datepicker._base_parseDate = $.datepicker.parseDate;
    $.datepicker.parseDate = function (format, value, settings) {
        var splitRes = splitDateTime(format, value, settings);
        return $.datepicker._base_parseDate(format, splitRes[0], settings);
    };

    //#######################################################################################
    // override formatDate to set date with time to the input
    //#######################################################################################
    $.datepicker._base_formatDate = $.datepicker._formatDate;
    $.datepicker._formatDate = function (inst, day, month, year) {
        var tp_inst = this._get(inst, 'timepicker');
        if (tp_inst) {
            tp_inst._updateDateTime(inst);
            return tp_inst.$input.val();
        }
        return this._base_formatDate(inst);
    };

    //#######################################################################################
    // override options setter to add time to maxDate(Time) and minDate(Time). MaxDate
    //#######################################################################################
    $.datepicker._base_optionDatepicker = $.datepicker._optionDatepicker;
    $.datepicker._optionDatepicker = function (target, name, value) {
        var inst = this._getInst(target);
        if (!inst) { return null; }

        var tp_inst = this._get(inst, 'timepicker');
        if (tp_inst) {
            var min = null, max = null, onselect = null;
            if (typeof name == 'string') { // if min/max was set with the string
                if (name === 'minDate' || name === 'minDateTime') {
                    min = value;
                }
                else {
                    if (name === 'maxDate' || name === 'maxDateTime') {
                        max = value;
                    }
                    else {
                        if (name === 'onSelect') {
                            onselect = value;
                        }
                    }
                }
            } else {
                if (typeof name == 'object') { //if min/max was set with the JSON
                    if (name.minDate) {
                        min = name.minDate;
                    } else {
                        if (name.minDateTime) {
                            min = name.minDateTime;
                        } else {
                            if (name.maxDate) {
                                max = name.maxDate;
                            } else {
                                if (name.maxDateTime) {
                                    max = name.maxDateTime;
                                }
                            }
                        }
                    }
                }
            }
            if (min) { //if min was set
                if (min === 0) {
                    min = new Date();
                } else {
                    min = new Date(min);
                }

                tp_inst._defaults.minDate = min;
                tp_inst._defaults.minDateTime = min;
            } else if (max) { //if max was set
                if (max === 0) {
                    max = new Date();
                } else {
                    max = new Date(max);
                }
                tp_inst._defaults.maxDate = max;
                tp_inst._defaults.maxDateTime = max;
            } else if (onselect) {
                tp_inst._defaults.onSelect = onselect;
            }
        }
        if (value === undefined) {
            return this._base_optionDatepicker(target, name);
        }
        return this._base_optionDatepicker(target, name, value);
    };

    //#######################################################################################
    // jQuery extend now ignores nulls!
    //#######################################################################################
    function extendRemove(target, props) {
        $.extend(target, props);
        for (var name in props) {
            if (props[name] === null || props[name] === undefined) {
                target[name] = props[name];
            }
        }
        return target;
    }

    //#######################################################################################
    // Splits datetime string into date ans time substrings.
    // Throws exception when date can't be parsed
    // If only date is present, time substring eill be '' 
    //#######################################################################################
    var splitDateTime = function (dateFormat, dateTimeString, dateSettings) {
        try {
            var date = $.datepicker._base_parseDate(dateFormat, dateTimeString, dateSettings);
        } catch (err) {
            if (err.indexOf(":") >= 0) {
                // Hack!  The error message ends with a colon, a space, and
                // the "extra" characters.  We rely on that instead of
                // attempting to perfectly reproduce the parsing algorithm.
                var dateStringLength = dateTimeString.length - (err.length - err.indexOf(':') - 2);
                var timeString = dateTimeString.substring(dateStringLength);

                return [dateTimeString.substring(0, dateStringLength), dateTimeString.substring(dateStringLength)];

            } else {
                throw err;
            }
        }
        return [dateTimeString, ''];
    };

    //#######################################################################################
    // Internal function to parse datetime interval
    // Returns: {date: Date, timeObj: Object}, where
    //   date - parsed date without time (type Date)
    //   timeObj = {hour: , minute: , second: , millisec: } - parsed time. Optional
    //#######################################################################################
    var parseDateTimeInternal = function (dateFormat, timeFormat, dateTimeString, dateSettings, timeSettings) {
        var date;
        var splitRes = splitDateTime(dateFormat, dateTimeString, dateSettings);
        date = $.datepicker._base_parseDate(dateFormat, splitRes[0], dateSettings);
        if (splitRes[1] !== '') {
            var timeString = splitRes[1];
            var separator = timeSettings && timeSettings.separator ? timeSettings.separator : $.timepicker._defaults.separator;
            if (timeString.indexOf(separator) !== 0) {
                throw 'Missing time separator';
            }
            timeString = timeString.substring(separator.length);
            var parsedTime = $.datepicker.parseTime(timeFormat, timeString, timeSettings);
            if (parsedTime === null) {
                throw 'Wrong time format';
            }
            return { date: date, timeObj: parsedTime };
        } else {
            return { date: date };
        }
    };

    //#######################################################################################
    // Internal function to set timezone_select to the local timezone
    //#######################################################################################
    var selectLocalTimeZone = function (tp_inst, date) {
        if (tp_inst && tp_inst.timezone_select) {
            tp_inst._defaults.useLocalTimezone = true;
            var now = typeof date !== 'undefined' ? date : new Date();
            var tzoffset = timeZoneString(now);
            if (tp_inst._defaults.timezoneIso8601) {
                tzoffset = tzoffset.substring(0, 3) + ':' + tzoffset.substring(3);
            }
            tp_inst.timezone_select.val(tzoffset);
        }
    };

    // Input: Date Object
    // Output: String with timezone offset, e.g. '+0100'
    var timeZoneString = function (date) {
        var off = date.getTimezoneOffset() * -10100 / 60;
        var timezone = (off >= 0 ? '+' : '-') + Math.abs(off).toString().substr(1);
        return timezone;
    };

    $.timepicker = new Timepicker(); // singleton instance
    $.timepicker.version = "1.0.1";

})(jQuery);
(function ($) {

    $.fn.extend({
        sliderAccess: function (options) {
            options = options || {};
            options.touchonly = options.touchonly !== undefined ? options.touchonly : true; // by default only show it if touch device

            if (options.touchonly === true && !("ontouchend" in document))
                return $(this);

            return $(this).each(function (i, obj) {
                var $t = $(this),
							o = $.extend({}, {
							    where: 'after',
							    step: $t.slider('option', 'step'),
							    upIcon: 'ui-icon-plus',
							    downIcon: 'ui-icon-minus',
							    text: false,
							    upText: '+',
							    downText: '-',
							    buttonset: true,
							    buttonsetTag: 'span'
							}, options),
							$buttons = $('<' + o.buttonsetTag + ' class="ui-slider-access">' +
											'<button data-icon="' + o.downIcon + '" data-step="-' + o.step + '">' + o.downText + '</button>' +
											'<button data-icon="' + o.upIcon + '" data-step="' + o.step + '">' + o.upText + '</button>' +
										'</' + o.buttonsetTag + '>');

                $buttons.children('button').each(function (j, jobj) {
                    var $jt = $(this);
                    $jt.button({
                        text: o.text,
                        icons: { primary: $jt.data('icon') }
                    })
								.click(function (e) {
								    var step = $jt.data('step'),
												curr = $t.slider('value'),
												newval = curr += step * 1,
												minval = $t.slider('option', 'min'),
												maxval = $t.slider('option', 'max');

								    e.preventDefault();

								    if (newval < minval || newval > maxval)
								        return;

								    $t.slider('value', newval);

								    $t.slider("option", "slide").call($t, null, { value: newval });
								});
                });

                // before or after					
                $t[o.where]($buttons);

                if (o.buttonset) {
                    $buttons.removeClass('ui-corner-right').removeClass('ui-corner-left').buttonset();
                    $buttons.eq(0).addClass('ui-corner-left');
                    $buttons.eq(1).addClass('ui-corner-right');
                }

                // adjust the width so we don't break the original layout
                var bOuterWidth = $buttons.css({
                    marginLeft: (o.where == 'after' ? 10 : 0),
                    marginRight: (o.where == 'before' ? 10 : 0)
                }).outerWidth(true) + 5;
                var tOuterWidth = $t.outerWidth(true);
                $t.css('display', 'inline-block').width(tOuterWidth - bOuterWidth);
            });
        }
    });

})(jQuery);

/* Chinese initialisation for the jQuery UI date picker plugin. */
/* Written by Cloudream (cloudream@gmail.com). */
jQuery(function ($) {
    $.datepicker.regional['zh-CN'] = {
        closeText: '关闭',
        prevText: '&#x3c;上月',
        nextText: '下月&#x3e;',
        currentText: '今天',
        monthNames: ['一月', '二月', '三月', '四月', '五月', '六月',
		'七月', '八月', '九月', '十月', '十一月', '十二月'],
        monthNamesShort: ['一', '二', '三', '四', '五', '六',
		'七', '八', '九', '十', '十一', '十二'],
        dayNames: ['日', '一', '二', '三', '四', '五', '六'],
        dayNamesShort: ['日', '一', '二', '三', '四', '五', '六'],
        dayNamesMin: ['日', '一', '二', '三', '四', '五', '六'],
        weekHeader: '周',
        dateFormat: 'yy-mm-dd',
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: true,
        yearSuffix: '年'
    };
    $.datepicker.setDefaults($.datepicker.regional['zh-CN']);
});
