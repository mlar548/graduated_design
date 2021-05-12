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

var arrayGoodsids = "";
var templock = 0;
function ShowDetail(pid, retail,selfProduct) {
    if (retail == "1") {
        Ecs.Tool.addLayerWoring(this, "您没有该商品的代理权限,请联系客服。");
        return false;
    }
    else if (selfProduct && selfProduct.toLowerCase() == "true") {
        Ecs.Tool.addLayerWoring(this, "您不能购买自己的商品。");
        return false;
    }
    else {
        if (templock == 1)
            return false;

        templock = 1;
        $("#divdetail").remove();
        arrayGoodsids = "";
        var strData = "";
        $.ajax({
            url: "/controls/productinfo.ashx",
            type: "POST",
            data: "type=GetGoodsspec&pid=" + pid + "&areaid=" + areaObj.AreaId,
            dataType: "json",
            success: function (data) {
                //console.log(data);
                ProductGoodsJson = data;
                var title = "";
                var firstprice = data.Product.LowerPrice;
                var productname = data.Product.Productname;
                var units = "";
                var baseunits = data.Product.Unit;
                var sumcounttitle = "<td>库存</td>";
                if (data.Product.IsShowInvNunber == 0) {
                    sumcounttitle = "";
                }
                $.each(data.Goods, function (j, item) {
                    arrayGoodsids += this.GoodsId + ",";
                    strData += "<tr>";
                    if (item.Props.length > 0) {
                        $.each(item.Props, function (i, prop) {
                            if (j == 0) {
                                title += "<td>" + prop.Key + "</td>";
                            }
                            strData += "<td>" + prop.Value + "</td>";

                        });
                    }

                    if (sumcounttitle != ""){
                        strData += "<td>" + item.StockShow + "</td>";
                    }
                    console.log(item);
                    var wholetype = "";
                    if (this.WholesaleType == WholesaleType.ScareBuy)
                        wholetype = "<span style='text-align:left;color:red'>抢</span>";
                    else if (this.WholesaleType == WholesaleType.GroupBuy)
                        wholetype = "<span style='text-align:left;color:red'>团</span>";
                    var pricestr = this.Price;
                    if (this.IsOpenTieredPrice) {
                         pricestr = '<div class="LadPrice">' +
                      '<table>' +
                      '<tbody>';
                         $.each(item.TieredPrice, function (t, tieredPrice) {
                            if (tieredPrice.QuantityTo != 2147483647) {
                                pricestr += '<tr>' +
                                    ' <td width="40%"><span>￥' + tieredPrice.Price + '</span></td>' +
                                    '<td width="60%">' + tieredPrice.QuantityFrom + '~' + tieredPrice.QuantityTo + data.Product.Unit + '</td>' +
                                    ' </tr>';
                            } else {
                                pricestr += '<tr>' +
                                    ' <td width="40%"><span>￥' + tieredPrice.Price + '</span></td>' +
                                    '<td width="60%">≥' + tieredPrice.QuantityFrom + data.Product.Unit + '</td>' +
                                    ' </tr>';
                            }
                        });
                        pricestr += '          </tbody>' +
                            ' </table>' +
                            ' <span class="triangle-down"></span>' +
                            '</div>';
                    }
                    strData += "<td><font id='ft" + this.GoodsId + "'>" + pricestr + "</font>" + wholetype + "</td>";
                    

                    var strunit = "";
                    if (data.Product.IsOpenTieredPrice) {
                        strunit = "<span>" + data.Product.Unit + "</span>";
                    } else {
                        if (data.Product.Unit != "") {
                            strunit += "<option value='1'>" + data.Product.Unit + "</option>";
                            if (j == 0)
                                baseunits = data.Product.Unit;
                        }
                        if (data.Product.BigUnit != "") {
                            strunit += "<option value='" + data.Product.UnitRate + "'>" + data.Product.BigUnit + "</option>";
                            if (j == 0) {
                                units += data.Product.UnitRate.ToFormatDecimalMaxTwoPlace() + data.Product.Unit + "=1" + data.Product.BigUnit + "&nbsp;&nbsp;";
                            }
                        }
                        if (data.Product.BigUnit2 != "") {
                            strunit += "<option value='" + data.Product.UnitRate2 + "'>" + data.Product.BigUnit2 + "</option>";
                            if (j == 0) {
                                units += data.Product.UnitRate2.ToFormatDecimalMaxTwoPlace() + data.Product.Unit + "=1" + data.Product.BigUnit2 + "&nbsp;&nbsp;";
                            }
                        }
                        if (data.Product.BigUnit3 != "") {
                            strunit += "<option value='" + data.Product.UnitRate3 + "'>" + data.Product.BigUnit3 + "</option>";
                            if (j == 0) {
                                units += data.Product.UnitRate3.ToFormatDecimalMaxTwoPlace() + data.Product.Unit + "=1" + data.Product.BigUnit3 + "&nbsp;&nbsp;";
                            }
                        }

                        if (strunit != "") {
                            strunit = "<select onchange='SelectChange(" + this.GoodsId + ")'  style='vertical-align: middle;'  name='rdo" + this.GoodsId + "' class='rdo" + this.GoodsId + "'>" + strunit + "</select>";
                        }
                    }
                    var stockNum = this.StockNum;

                    //var numtext = "<input type='text' class=\"units_num\" wholetype=\"" + this.WholesaleType + "\" refstate=\"" + stockNum + "\" maxlength='10' value='" + (stockNum>0?1:0) + "' id='txtnum" + this.GoodsId + "' goodsId='" + this.GoodsId + "' />";
                    var numtext = "<input type='text' class=\"units_num\" wholetype=\"" + this.WholesaleType + "\" refstate=\"" + stockNum + "\" maxlength='10' value='0' id='txtnum" + this.GoodsId + "' goodsId='" + this.GoodsId + "' />";
                    numtext = "<a href='javascript:;' class='opt-btn btn-reduce'>-</a>" + numtext + "<a href='javascript:;' class='opt-btn btn-add'>+</a>";
                    if (strunit != "") {
                        strData += "<td style='text-align:left;width:76px;'>" + numtext;
                        strData += "</td><td style='text-align:left; vertical-align: middle;'>" + strunit;
                    }
                    else {
                        strData += "<td colspan='2'  style='text-align:left;'>" + numtext;
                    }
                    strData += "</td></tr>";

                });

                title = "<tr>" + title + sumcounttitle + "<td>" + (data.Product.IsOpenTieredPrice ? "批发价" : "单价") + "</td><td colspan='2' style='text-align:left;'>数量</td></tr>";
                if (arrayGoodsids != "")
                    arrayGoodsids = arrayGoodsids.substr(0, arrayGoodsids.length - 1);

                if (units != "") {
                    units = "<div class=\"unit\">单位换算：" + units + "</div>";
                }
                var styles = "	left:" + (document.documentElement.scrollLeft + document.documentElement.clientWidth / 2) + "px;top:" + (document.documentElement.scrollTop + document.documentElement.clientHeight / 3) + "px;z-index:9999;";
                var str = "";
                str += "<div class='popfor_prodlist_window' style=" + styles + " id='divdetail'>";
                str += "    <div class='order_prod'>";
                str += "        <h2>" + productname + "</h2>";
                str += "        <div class='unit-price clearfix'>";
                str += "            <div class=\"price\">单价：<b>&yen;" + firstprice + "</b></div>";
                str += units;
                str += "        </div>";
                str += "        <div class=\"order_prod_list\">";
                str += "	        <table cellpadding=\"0\" cellspacing=\"0\">";
                str += title + strData;
                str += "            </table>";
                str += "        </div>";
                str += "        <div class='ordertotal'>合计：<b id='bsumprice' baseunit='" + baseunits + "'>0</b>元    <font id='fcount'>0</font>" + baseunits + "</div>";
                str += "        <div class='order-btn'>";
                str += "            <a class='prodinfo-btn prodinfo-btn-styleone prodinfo-btn-buy prodinfo-btn-batch' style='padding:0 50px;' btntype='addcart'  onclick='AddCart(\"" + pid + "\",\"" + arrayGoodsids + "\",this)' title='加入购物车'>加入购物车</a>";
                str += "            <a class='pop_close' onclick='$(\"#divdetail\").remove();' title='点击关闭'>";
                str += "                <img src='/images/closepop.png' />";
                str += "            </a>";
                str += "        </div>";
                str += "    </div>";
                str += "</div>";
                $("body").append(str);
                $("#divdetail").css("width", $("#divdetail").width());
                $("#divdetail").css({ "left": "50%", "margin-left": $("#divdetail").width() / 2 * -1 + "px", top: "50%", "margin-top": $("#divdetail").height() / 2 * -1 + $(document).scrollTop() + "px" });
                $(".units_num").bind({
                    blur: function () {
                        var val = $(this).val();
                        if (!isNaN(val)) {
                            AdjustBuyCount(val, this);
                            CalculateData();
                            //如果未输入值，则继续让该输入框为空
                            if (val == undefined || val == 0) {
                                $(this).val("");
                            }
                        } else
                            //如果未输入值，则继续让该输入框为空
                            $(this).val("");
                    },
                    change: function () {
                        var val = $(this).val();
                        if (!isNaN(val)) {
                            AdjustBuyCount(val, this);
                            CalculateData();
                            //如果未输入值，则继续让该输入框为空
                            if (val == undefined || val == 0) {
                                $(this).val("");
                            }
                        } else
                            //如果未输入值，则继续让该输入框为空
                            $(this).val("");
                    }
                });
                //增加购买量按钮绑定事件
                    $("#divdetail .btn-add").bind({
                        "click": function () {
                            var numobj = $(this).parent().find("input");
                            var num = parseFloat(numobj.val());
                            if (isNaN(num)) {
                                num = 0;
                            }
                            num += 1;
                            
                            if (AdjustBuyCount(num, numobj[0])) {
                                numobj.val(num);
                                CalculateData();
                            }
                            
                        }
                    });
                //减少购买量按钮绑定事件
                    $("#divdetail .btn-reduce").bind({
                        "click": function () {
                            var numobj = $(this).parent().find("input");
                            var num = parseFloat(numobj.val());
                            if (isNaN(num)) {
                                num = 0;
                            }
                            if (num > 0) {
                                num -= 1;
                            }
                            if (AdjustBuyCount(num, numobj[0])) {
                                numobj.val(num);
                                CalculateData();
                            }
                        }
                    });
                    //$(".units_num").mouseenter(function () {
                    //    $(this).focus().select();
                    //});
                    $(".units_num").click(function () {
                        $(this).focus().select();
                    });
                
                    templock = 0;
            }, error: function () {
                templock = 0;
            }
        });
    }
}

$(document).ready(function () { $("body").append("<style type=\"text/css\">.order_prod{}.order_prod h2{font-size:16px;color:#000;line-height:22px;margin-top:10px;}.order_prod .unit-price{padding:10px 0;}.order_prod .price{color:#818181;font-size:12px;float:left;}.order_prod .price b{font-size:24px;color:#ff2900}.order_prod .unit{color:#2676c7;font-size:12px;margin-top:7px;float:right;}.order_prod .order_prod_list{font-size:12px;}.order_prod .order_prod_list{max-height: 300px;overflow: auto;overflow-x:hidden;}.order_prod .order_prod_list table{border-collapse:collapse;width:100%;}.order_prod .order_prod_list th{color:#000;font-size:12px;font-weight:normal;padding:5px 5px;text-align:center;background:#e5eff8;}.order_prod .order_prod_list td{font-size:12px;padding:6px 5px;color:#666;border-bottom:1px solid #ccc;text-align:center;}.order_prod .order_prod_list td.units input{width:50px;height:20px;line-height:20px;border:1px solid #ccc;}.order_prod .order_prod_list td.units a{color:#999;padding:0 5px;position:relative;text-decoration:none;}.order_prod .order_prod_list td.units a s{position:absolute;font-size:0px;height:0px;width:0px;border-style:solid dashed dashed dashed;border-color:#999 transparent transparent transparent;border-width:3px;right:-2px;top:3px;}.order-btn{text-align:center;}.order-btn a.prodinfo-btn{margin:20px 10px 0px 0px;cursor:pointer;color:#fff;height:36px;line-height:36px;font-size:16px;text-decoration:none;float:none;display:inline-block;}ordertotal{padding:5px;background:#fffae6;color:#666;font-size:14px;border:1px solid #f9e4be;margin-top:10px;text-align:right}.ordertotal b{font-size:18px;color:#ee6303;}.popfor_prodlist_window{min-width:650px;position:absolute;left:200px;top:100px;border:1px solid #ccc;background:#fff;z-index:1000;padding:20px;box-shadow:0 0 10px #ccc;}.pop_close{font-size:14px;position:absolute;right:10px;top:10px;color:#d6d6d6;font-family:Arial, Helvetica, sans-serif;font-weight:bold;cursor:pointer;}.units_num{border:1px solid #ccc;width:3em;height:20px;line-height:20px;text-align:center;margin-bottom:1px;}.popfor_prodlist_window a.opt-btn{display:inline-block;height:20px;line-height:18px;width:15px;text-align:center;background:#ddd;border:1px solid #ccc;text-decoration:none;}a.opt-btn:hover{background:#f58f2c;color:#fff;border-color:#f58f2c;}</style>"); });

//单位切换时，先调用此函数
function SelectChange(goodsid) {
    var id = "txtnum" + goodsid;
    var txt = $("#" + id);
    AdjustBuyCount(txt.val(), document.getElementById(id));
    CalculateData();
}
function CalculateData() {
    if (arrayGoodsids == "") return;
    var arrayids = arrayGoodsids.split(',');
    var sumcount = 0;
    var sumprice = 0;
    $.each(arrayids, function (i, item) {
        var current = $("#txtnum" + item);
        var txtnum = current.val();
        if (txtnum > 0) {
            var count = txtnum * 1;
            var unit = 0;
            try {
                unit = $('.rdo' + this).val();
            }
            catch (err) { unit = 0; }
            if (unit == undefined)
                unit = 0;

            if (unit > 0)
                count = txtnum * unit;
            var goodsId = parseInt(current.attr("goodsId"));
            sumprice += GetGoodsPrice(goodsId, txtnum) * count;
            sumcount += count;
        }
    });
    $("#bsumprice").html(Math.round(sumprice * 100) / 100);
    $("#fcount").html(sumcount);
}
var ProductGoodsJson = [];
function GetGoodsPrice(goodsId, goodsNum) {
    var price = 0;
    var item = GetGoodsObject(goodsId);
    if (item != null) {
        if (item.IsOpenTieredPrice) {
            $.each(item.TieredPrice, function (j, child) {
                if (child.QuantityTo >= goodsNum && child.QuantityFrom <= goodsNum) {
                    return price = child.Price;
                }
            });
        } else {
            return item.Price;
        }
    }
    return price;
}


function GetGoodsObject(goodsId) {
    var goods = null;
    $.each(ProductGoodsJson.Goods, function (i, item) {
        if (item.GoodsId == goodsId) {
            return goods = item;
        }
    });
    return goods;
}
/*判断购买数量是否大于最多，最少购买数量*/
function AdjustBuyCount(number, e, obj) {
    var input = $(e);

    /*检查是否允许录入小数 alan 2016.09.23*/
    if (typeof (__global_Order_Goods_Qty_Must_Int) != 'undefined') {
        if (__global_Order_Goods_Qty_Must_Int == 1) {
            var pice = input.val().replace(/^([0-9]{0,5})$/, '');
            if (pice.length > 0) {
                Ecs.Tool.addLayerWoring(input, "不允许录入小数");
                input.val(0);
                return false;
            }
        }
    }
    /*检查是否允许录入小数 alan 2016.09.23*/

    var goodsId = parseInt(input.attr("goodsId"));
    var item = GetGoodsObject(goodsId);
    number = parseFloat(number);
    var id = e.id.replace("txtnum", "");
    var select = $(".rdo" + id);
    var baseunit = "件";
    var convertunit = "";
    var s_count = item.StockNum;
    var maxbuy = item.Maxcount;
    var minbuy = item.Mincount;
    if (item.IsOpenTieredPrice) {
        minbuy = item.TieredPrice[0].QuantityFrom;
        item.Mincount = minbuy;
    }
    var wholetype = item.WholesaleType;

    if (select.length > 0) {
        var rate = parseFloat(select.val());
        if (rate > 0) {
            maxbuy = maxbuy / rate;
            minbuy = minbuy / rate;
            s_count = s_count / rate;
            baseunit = select.find('option:first').text();
            convertunit = "(" + select.val() + baseunit + "= 1" + select.find('option:selected').text() + ")";
        }
    }

    if (number > 0) {
        if (s_count < number) {
            Ecs.Tool.addLayerWoring(input, "超过商品的库存数量");
            input.val(Math.floor(s_count));
            return false;

        }
        else if (wholetype == WholesaleType.GroupBuy || wholetype == WholesaleType.ScareBuy) {
            if ($(obj).attr("btntype") == "addcart") {
                var wholecount = 0;
                $("input[wholetype=" + wholetype + "]").each(function () {
                    wholecount += parseFloat($(this).val());
                });
                number = wholecount;
                if (number > maxbuy && maxbuy > 0) {
                    Ecs.Tool.addLayerWoring($("#btnAddCart"), "该活动商品最多允许购买" + item.Maxcount + baseunit + convertunit);
                    return false;
                } else if (number < minbuy) {
                    Ecs.Tool.addLayerWoring($("#btnAddCart"), "该活动商品最少购买" + item.Mincount + baseunit + convertunit);
                    return false;
                }
            }
        } else {
            if (number > maxbuy && maxbuy > 0) {
                Ecs.Tool.addLayerWoring(input, "该规格商品最多允许购买" + item.Maxcount + baseunit + convertunit);
                input.val(maxbuy);
                CalculateData();
                return false;
            } else if (number < minbuy) {
                Ecs.Tool.addLayerWoring(input, "该规格商品最少购买" + item.Mincount + baseunit + convertunit);
                input.val(minbuy);
                CalculateData();
                return false;
            }
        }
    }
    else if (input.val() != "") {
        input.val(number);
    }
        
    return true;
}
function AddCart(pid, goodsids, obj) {
    if (pid > 0 && goodsids != "") {
        var strgoods = "";
        var arrayids = goodsids.split(',');
        var buyState = true;
        var hasZeroPrice = false;
        $.each(arrayids, function () {
            var txtnum = parseFloat($("#txtnum" + this).val());
            if (isNaN(txtnum)) {
                txtnum = 0;
            }

            if (txtnum > 0) {
                var price = parseFloat($("#ft" + this).html());
                if (price == undefined) {
                    price = 0;
                }
                if (price <= 0) {
                    hasZeroPrice = true;
                }

                var unit = $('.rdo' + this).val();
                var sumcount = txtnum;
                var wholetype = $("#txtnum" + this).attr("wholetype");
                if (unit > 0)
                    sumcount = txtnum * unit;
                strgoods += this + "," + sumcount + "," + wholetype + ";";
            }
            //判断购买数量
            if (!AdjustBuyCount(txtnum, document.getElementById("txtnum" + this), obj)) {
                buyState = false;
                return false;
            }
        });
        if (!buyState) {
            return;
        }

        if (hasZeroPrice) {
            Ecs.Tool.addLayerWoring($("[btntype='addcart']"), "价格为0的商品不能加入购物车！");
            return;
        }

        if (strgoods == "") {
            Ecs.Tool.addLayerWoring($("[btntype='addcart']"), "请添加商品数量！");
            return;
        }

        strgoods = strgoods.substr(0, strgoods.length - 1);
        $.ajax({
            url: "/controls/productinfo.ashx",
            type: "POST",
            data: "type=addcart&pid=" + pid + "&strgoods=" + strgoods,
            dataType: "html",
            success: function (data) {
                if (data != null && data != "") {
                    if (data.split(',')[0] == "0") {
                        Ecs.Tool.addLayerWoring($("[btntype='addcart']"), "加入购物车失败!");
                    } else {
                        Ecs.Tool.addLayer($("[btntype='addcart']"), "加入购物车成功!", function () {
                            $("#divdetail").remove();
                            $("#shopping_numbermark,.shopping_numbermark").html(data.split(',')[1]);
                        });
                    }
                }
            }
        });
    }
}