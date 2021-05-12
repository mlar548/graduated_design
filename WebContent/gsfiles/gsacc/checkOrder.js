/**
 * Created by Administrator on 2015/11/27.
 */



function boxserClick(isinit) {

    $("[data-role='checkOrder-content-address-box']").each(function () {
        $(this).find(".checkOrder-box-top-lef-box").eq(0).show();
        $(this).find(".checkOrder-box-top-lef-box-post").eq(0).show();
        //$(this).find(".checkOrder-box-top-lef-box a").eq(0).css({
        //    "background":"url('images/background1.jpg')",
        //    "background-size":"100% 100%"
        //})
        //$(this).find(".checkOrder-box-top-rig-box").eq(0).css({
        //    "border":"none"
        //})
    })
    isinit = isinit == undefined || isinit == true ? true : false;
    if (isinit) {
        $(".checkOrder-box-top-lef li .bq-img").each(function () {
            $(this).click(function () {
                var url = $(this).attr("src");
                if (url === "/images/cart/jia.png") {
                    $(this).attr({
                        src: "/images/cart/jian.png"
                    })
                }
                if (url === "/images/cart/jian.png") {
                    $(this).attr({
                        src: "/images/cart/jia.png"
                    })
                }
                $(this).parent().find(".checkOrder-box-top-lef-box").slideToggle("slow");
            })
        })
    }
    $(".checkOrder-box-top-lef-box-post .boxser").each(function () {
        var self = $(this).attr("self");
        if (self == 0) {
            $(this).click(function () {
                $(".pick-up").addClass("none");
            })
        }
        $(this).click(function () {
            $(this).parent().find(".boxser").css({
                "background": "url('/images/cart/background2.jpg')",
                "background-size": "100% 100%"
            })
            $(this).css({
                "background": "url('/images/cart/background1.jpg')",
                "background-size": "100% 100%"
            });
            //配送大于1的时候才能切换
            //if ($(this).parent().find(".boxser").length > 1)
            //    cbuy.changePost(this);
            cbuy.changePost(this);
        })
    })
}
function longth() {
    var longth = $("#useradrs").find("[data-role='checkOrder-content-address-box']").length;
    if (longth == 1) {
        $(".checkOrder-content-address-show").addClass("token");
    }
}

function resetSelectaddress(id) {
    var first = '', isselect = false;
    $(".checkOrder-content-address-show").each(function (i, item) {
        item = $(item);
        if (i == 0) {
            first = item;
        }
        var cid = item.attr("id");
        if (cid == "myadr_" + id) {
            item.addClass("token");
            isselect = true;
        } else {
            item.removeClass("token");
            item.find("[data-role='checkOrder-content-address-box']").css({ "background": "none" });
            $(this).css({ "background-position": "295px 0" });
        }
    });
    if (!isselect) {
        first.addClass("token");

    }

}

function address() {
    $("[data-role='checkOrder-content-address-box']").parent().unbind();
    $("[data-role='checkOrder-content-address-box']").unbind();
    var mouseover = function () {
        $(this).css({
            "background-position": "0 0"
        })
        $(this).find("[data-role='checkOrder-content-address-box']").css({
            "background": "none"
        })
    };
    var mouseover2 = function () {
        $(this).find(".checkOrder-content-address-show-but").show();
    }
    var mouseout2 = function () {
        $(this).find(".checkOrder-content-address-show-but").hide()
    }
    var mouseout = function () {
        $(this).css({
            "background-position": "295px 0"
        })
    }

    var click = function () {
        $(this).parent().siblings().find("[data-role='checkOrder-content-address-box']").css({
            "background-position": "295px 0"
        });
        $(this).parent().siblings().bind("mouseover", mouseover2);
        $(this).parent().siblings().bind("mouseout", mouseout2);
        $(this).parent().siblings().bind("mouseover", mouseover);
        $(this).parent().siblings().bind("mouseout", mouseout);
        $(this).css({
            "background": "url('/images/cart/address-bg.png') 200% 0 repeat-x",
            "background-size": "300% 100%"
        })
        $(this).parent().addClass("token");
        $(this).parent().siblings().removeClass("token");
        $(this).parent().find(".checkOrder-content-address-show-but").hide();
        $(this).parent().unbind("mouseover", mouseover);
        $(this).parent().unbind("mouseout", mouseout);
        cbuy.changeAddress($(this));
    }


    //hover��click�¼�
    $("[data-role='checkOrder-content-address-box']").each(function () {
        var length = $("[data-role='checkOrder-content-address-box']").length;
        $(this).parent().bind("mouseover", mouseover);
        $(this).parent().bind("mouseout", mouseout);
        $(this).parent().bind("mouseover", mouseover2);
        $(this).parent().bind("mouseout", mouseout2);
        $(this).bind("click", click);

    });

    ////Ĭ��ѡ��   .hover之前注释移除  .css({ "background": "none" })
    $(".checkOrder-content-address-show").each(function () {
        if ($(this).hasClass("token")) {
            $(this).find("[data-role='checkOrder-content-address-box']").css({
                "background": "url('/images/cart/address-bg.png') 200% 0 repeat-x",
                "background-size": "300% 100%"
            }).parent().unbind("mouseover", mouseover).unbind("mouseout", mouseout)
        .hover(function () {
            $(this).css({
                "background": "url('/images/cart/address-bg.png')200% 0 repeat-x",
                "background-size": "300% 100% "
            })
        });
        }
    })


};


function initPayload() {
    //$(".pay-box a").eq(0).css({
    //    "background":"url('/images/cart/background1.jpg')"
    //});
    $(".pay-box a").each(function () {
        var ck = $(this).attr("ck");
        ck = ck != undefined && ck == '1';
        if (ck) {
            $(this).css({
                "background": "url('/images/cart/background1.jpg')"
            });
        }
        $(this).click(function () {
            $(this).siblings().css({
                "background": "url('/images/cart/background2.jpg')"
            });
            $(this).css({
                "background": "url('/images/cart/background1.jpg')"
            })
            var haszero = $(this).hasClass('c_payment');
            if (haszero)
                cbuy.payNotice($(this));
            cbuy.changePayType($(this));
        })
    })

    $(".price-box p .price-box-ord").each(function () {
        $(this).hover(function () {
            $(this).addClass("price-box-click1")
        }, function () {
            $(this).removeClass("price-box-click1")
        })
    })
    $(".price-box p .price-box-ret").each(function () {
        $(this).hover(function () {
            $(this).addClass("price-box-click2")
        }, function () {
            $(this).removeClass("price-box-click2")
        })
    })
};
function promotional() {
    $(".table-box-list-promotional").each(function () {
        $(this).hover(function () {
            $(this).find("i").addClass("border-f").css({
                "z-index": "1111"
            }).removeClass("table-box-list-promotional-i").addClass("table-box-list-promotional_i");
            $(this).find(".table-box-list-promotional-box").stop().show();
        }, function () {

            $(this).find(".table-box-list-promotional-box").stop().hide();
            $(".table-box-list-promotional").find("i").removeClass("border-f").css({
                "z-index": "10"
            }).removeClass("table-box-list-promotional_i").addClass("table-box-list-promotional-i");
        })
    })


    $(".table-box-dt-promotional").each(function () {
        $(this).hover(function () {
            $(this).find("i").addClass("border-f").css({
                "z-index": "1111"
            }).removeClass("table-box-list-promotional-i").addClass("table-box-list-promotional_i");
            $(this).find(".table-box-dt-promotional-box").stop().show();
        }, function () {

            $(this).find(".table-box-dt-promotional-box").stop().hide();
            $(".table-box-dt-promotional").find("i").removeClass("border-f").css({
                "z-index": "10"
            }).removeClass("table-box-list-promotional_i").addClass("table-box-list-promotional-i");
        })
    })
}




function fullGift() {
    $(".fullCut").each(function () {
        var fullCutLong = $(this).find("input[type='checkbox']:checked").length;
        if (fullCutLong > 0) {
            $(this).find(".bgc-title").removeClass("fullCutDtClcik")
        } else {
            $(this).find(".bgc-title").addClass("fullCutDtClcik")
        }
        $(this).find("ul").eq(0).find(".xian").css({
            "height": "50px",
            "top": "-7px"
        })
        var length = $(this).find("ul").length;
        $(this).find("ul").eq(length - 1).find(".gifts .xians").hide();
        $(this).find("ul").eq(length - 1).css({
            "border-bottom": "none"
        })
        $(this).find(".checkbox").click(function () {
            $(".fullCut").each(function () {
                var bgLength = $(this).find("input[type='checkbox']:checked").length;
                if (bgLength > 0) {
                    $(this).find(".bgc-title").removeClass("fullCutDtClcik");
                } else {
                    $(this).find(".bgc-title").addClass("fullCutDtClcik");
                }
            })

        })

    })

    //$(".table-box").each(function(){
    //    $(this).find(".table-box-list").eq(0).css({
    //        "border":"none"
    //    })
    //})

    //$(".package-box").each(function(){
    //    $(this).find("ul").eq(1).find(".xian").css({
    //        "top":"-15px",
    //        "height":"70px"
    //    })
    //    var length=$(this).find("ul").length;
    //    $(this).find("ul").eq(length - 1).find(".gifts .xian").hide
    //    $(this).find("ul").eq(length - 1).css({
    //        "border-bottom":"none"
    //    })
    //})

    //$(".sendGifts").each(function(){
    //    $(this).find("ul").eq(0).find(".gifts .xian").css({
    //        "height":"65px",
    //        "top":"-20px"
    //    })
    //    var length = $(this).find("ul").length;
    //    $(this).find("ul").eq(length - 1).find(".gifts .xian").hide();
    //    $(this).find("ul").eq(length - 1).css({
    //        "border-bottom": "none"
    //    })
    //})



    //���͵�ַ���ĵĲ���
    $(".dispatching-box dt span").each(function () {
        $(this).click(function () {
            $(this).addClass("dispatching-box-click");
            $(this).siblings().removeClass("dispatching-box-click");
            var index = $(this).index();
            $(".dispatching-box dd").hide();
            $(".dispatching-box dd").eq(index).show();

        })
    })
    $(".dispatching-box dt span:first-child").addClass("dispatching-box-click");
    $(".dispatching").hover(function () {
        $(".dispatching-box").show();
        $(this).find(".dispatching-i").addClass("bb-fff");
    }, function () {
        $(".dispatching-box").hide();
        $(this).find(".dispatching-i").removeClass("bb-fff");
    })
    var mouseOver = function () {
        $(this).addClass("bg-f2");
    }
    var mouseOut = function () {
        $(this).removeClass("bg-f2");
    }
    var cli = function () {
        $(this).parent().siblings().find("span").removeClass("bg-f2");
        $(this).addClass("bg-f2");
        $(this).unbind("mouseover", mouseOver);
        $(this).unbind("mouseout", mouseOut);
        $(this).parent().siblings().find("span").bind("mouseover", mouseOver);
        $(this).parent().siblings().find("span").bind("mouseout", mouseOut);
    }
    $(".dispatching-box dd span").each(function () {
        $(this).bind("mouseover", mouseOver);
        $(this).bind("mouseout", mouseOut);
        $(this).bind("click", cli);
        //����ĵ���¼�
        $(this).click(function () {
            var text = $(this).text();
            var data_num = parseInt($(this).parent().parent().attr("data-num"));
            $(".dispatching-box dt span").eq(data_num).find("b").text(text);
            $(".dispatching-box dd").eq(data_num + 1).show();
            $(".dispatching-box dd").eq(data_num).hide();
            $(".dispatching-box dt span").eq(data_num).removeClass("dispatching-box-click");
            $(".dispatching-box dt span").eq(data_num + 1).addClass("dispatching-box-click");
            if (data_num == 0) {
                $(".dispatching-box dt span").eq(2).hide();
            }
            if (data_num == 1) {
                $(".dispatching-box dt span").eq(2).show();
            }
            if (data_num == 2) {
                $(".dispatching-box").hide();
                $(".dispatching-i").addClass("bb-fff");
                var date = "";
                $(".dispatching-box dt span").each(function () {
                    date += $(this).find("b").text() + " ";
                })
                $(".dispatching-i b").text(date);
                $(".dispatching-box dd").eq(0).show();
                $(".dispatching-box dt span").eq(0).addClass("dispatching-box-click");
            }
        })
    })
    $(".dispatching-box dd").eq(0).show();
}

//�������
function initOpening() {
    //$(".checkOrder-box").eq(0).find(".checkOrder-box-top-rig-show").css({
    //    "height":"auto"
    //})
    $(".checkOrder-box").each(function () {
        var length = $(this).find(".checkOrder-box-top-rig-show").find(".checkOrder-box-top-rig-box").length;
        if (length < 3) {
            $(this).find(".checkOrder-box-top-rig-show").css({
                "height": "auto"
            })
        } else {
            $(this).find(".checkOrder-box-top-rig-arrow").click(function () {
                var height = parseInt($(this).siblings().css("height"));
                if (height == 291) {
                    $(this).siblings().css({
                        "height": "auto",
                    });
                } else {
                    $(this).siblings().css({
                        "height": "291",
                    });
                }
                $(this).find(".packUp").toggleClass("none");
                $(this).find(".opening").toggleClass("none");

            })
        }
    })

}



//ȫѡ
function initChecked() {
    //当商铺下面没个商品都选中则店铺选中
    $("#cart_datalist dl").each(function () {
        var abc = $(this);
        $(this).find("dd .check").click(function () {
            var checkState = abc.find("dd input[type='checkbox']:checked").length;
            var checkstate = abc.find("dd input[type='checkbox']").length;
            if (checkState != checkstate) {
                abc.find("dt ._checkAll").prop("checked", false)
            } else {
                abc.find("dt ._checkAll").prop("checked", true)
            }
        })
    })
    //购物车里面的商品都选中了则店铺选中

    $("#cart_datalist").each(function () {
        var cba = $(this);
        $(this).find(".checkbox").click(function () {
            var checkState2 = cba.find("input[type='checkbox']:checked").length;
            var checkstate2 = cba.find("input[type='checkbox']").length;
            if (checkState2 != checkstate2) {
                $(".checkAll ").prop("checked", false)
            } else {
                $(".checkAll ").prop("checked", true)
            }
        })

        var nba = $(this);
        $(this).find("._checkAll").click(function () {

            var checkState5 = nba.find("._checkAll:checked").length;
            var checkstate5 = nba.find("._checkAll").length;
            if (checkState5 != checkstate5) {
                $(".checkAll ").prop("checked", false)
            } else {
                $(".checkAll ").prop("checked", true)
            }
        })
    })



    $(".checked").each(function () {
        var ck = $(this).attr("ck");
        if (ck == "1") {
            $(this).prop("checked", true);
        }
    });


    //init全选和商铺全选
    //$("#cart_datalist dl").each(function () {
    //        var checkState4 = $(this).find("dd input[type='checkbox']:checked").length;
    //        var checkstate4 = $(this).find("dd input[type='checkbox']").length;
    //        if (checkState4 != checkstate4) {
    //            $(this).find("dt ._checkAll").prop("checked", false)
    //        } else {
    //            $(this).find("dt ._checkAll").prop("checked", true)
    //        }
    //})


    //$("#cart_datalist").each(function () {
    //    var checkState3 = $(this).find("input[type='checkbox']:checked").length;
    //    var checkstate3 = $(this).find("input[type='checkbox']").length;
    //    if (checkState3 != checkstate3) {
    //        $(".checkAll ").prop("checked", false)
    //    } else {
    //        $(".checkAll ").prop("checked", true)
    //    }
    //})

    $(".checkAll").click(function () {
        var check = $(this).prop("checked");
        if (check == true) {
            $(".checked").prop("checked", true)
        } else {
            $(".checked").prop("checked", false)
        }
        cal.checkeds(check == true);
    })
    $("._checkAll").click(function () {
        var checked = $(this).prop("checked");
        if (checked == true) {
            $(this).parent().siblings().find(".checked").prop("checked", true)
        } else {
            $(this).parent().siblings().find(".checked").prop("checked", false)
        }

    })

    $(".checkBox").click(function () {
        var checkedBox = $(this).prop("checked");
        if (checkedBox == true) {
            $(this).parent().parent().parent().find(".checked").prop("checked", true)
        } else {
            $(this).parent().parent().parent().find(".checked").prop("checked", false)
        }
    })
}

function controlChecks() {
    $("._checkAll").each(function () {
        var ck = $(this).attr("ck");
        if (ck == "1") {
            $(this).prop("checked", true);
        } else $(this).prop("checked", false);
    });
    $(".checkAll").each(function () {
        var ck = $(this).attr("ck");
        if (ck == "1") {
            $(this).prop("checked", true);
        } else $(this).prop("checked", false);
    });
}

//��Ʒ�ֲ����ֿ�ʼ
//$(function(){
//   $(".shopCard-food-box-banner-box").each(function(){
//        var length = $(this).find("li").length;
//       $(this).css({
//           "width":815*length+"px"
//       })
//       var marin_lef=0;
//       //����߻���
//       $(this).parent().parent().find(".left-but").click(function(){
//           if(marin_lef<0){
//               marin_lef+=815;
//           }
//           var _marinLeft =parseInt( $(this).parent().find(".shopCard-food-box-banner-box").css("margin-left"));
//           if(_marinLeft<0){
//               $(this).parent().find(".shopCard-food-box-banner-box").stop().animate({
//                   "margin-left":marin_lef+"px"
//               },1000)
//           }
//       })
//       //�ұ߻���
//       $(this).parent().parent().find(".rig-but").click(function(){
//           if(marin_lef>-(815*length-815)){
//               marin_lef-=815;
//           }
//           var _marinLeft =parseInt( $(this).parent().find(".shopCard-food-box-banner-box").css("margin-left"));
//           if(_marinLeft<=815*length-815){
//               $(this).parent().find(".shopCard-food-box-banner-box").stop().animate({
//                   "margin-left":marin_lef+"px"
//               },1000)
//           }
//       })
//    })
//})
function initAdviceBox() {
    $(".shopCard-food-box-banner-box").each(function () {
        var length = $(this).find("li").length;
        var width = $(this).parent().width();
        $(this).css({
            "width": width * length + "px"
        }).find('li').css({ "width": width + "px" });
        var marin_lef = 0;
        //����߻���
        $(this).parent().parent().find(".left-but,.lef-arrow").click(function () {
            if (marin_lef < 0) {
                marin_lef += width;
            }
            var _marinLeft = parseInt($(this).parent().find(".shopCard-food-box-banner-box").css("margin-left"));
            if (_marinLeft < 0) {
                $(this).parent().find(".shopCard-food-box-banner-box").stop().animate({
                    "margin-left": marin_lef + "px"
                }, 1000)
            }
        })
        //�ұ߻���
        $(this).parent().parent().find(".rig-but,.right-arrow").click(function () {
            if (marin_lef > -(width * length - width)) {
                marin_lef -= width;
            }
            var _marinLeft = parseInt($(this).parent().find(".shopCard-food-box-banner-box").css("margin-left"));
            if (_marinLeft <= width * length - width) {
                $(this).parent().find(".shopCard-food-box-banner-box").stop().animate({
                    "margin-left": marin_lef + "px"
                }, 1000)
            }
        })
    })
}

;


//������navѡ��
$(function () {
    $(".shopCard-food-box dd:first").show();
    $(".shopCard-food-box dt span").each(function () {
        $(this).hover(function () {
            $(this).addClass("shopCard-food-span-click");
            $(this).siblings().removeClass("shopCard-food-span-click");
            var _index = $(this).index();
            $(".shopCard-food-box dd").hide();
            $(".shopCard-food-box dd").eq(_index).show();
        })
    })
    $(".shopCard-food-box dt span:first").css({
        "border-left": "none"
    })
})

//弹框

$(function () {
    //    $(".checkOrder-box-top-lef-box").each(function () {
    //        $(this).find(".usemen").click(function () {
    //            var html = "";
    //            html += "<div class='Bomb-coupon'><div class='Bomb-coupon-title'><ul><li class='Bomb-coupon-title-li Bomb-coupon-title-click' data-bomb='0'>";
    //            html += "     选择可用优惠券</li>";
    //            html += "<li class='' data-bomb='1'> 直接输入优惠券号码  </li>";
    //            html += "<div class='cb'></div>";
    //            html += "</ul>";
    //            html += "</div>";
    //            html += "       <div class='Bomb-coupon-content'>";
    //            html += "           <div class='Bomb-coupon-content-box'>";
    //            html += "               <select name='' id=''>";
    //            html += "<option value='1'>18-21</option>";
    //            html += "<option value='2'>22-25</option>";
    //            html += "<option value='3'>26-29</option>";
    //            html += "<option value='4'>30-35</option>";
    //            html += "<option value='5'>Over35</option>";
    //            html += "</select>";
    //            html += "               <a class='dialog-clo'>确认使用本优惠卷</a>";
    //            html += "</div>";
    //            html += "<div class='Bomb-coupon-content-box none mt-mb30'> ";
    //            html += "               <form name=card action='' method=post>";
    //            html += "                   <input language=javascript type='text' class='Bomb-coupon-content-box-text T1' id='txt' onkeyup='return T1_onkeyup()' name=T1 />";
    //            html += "                   <input language=javascript type='text' class='Bomb-coupon-content-box-text T2' onkeyup='return T2_onkeyup()' name=T2 />";
    //            html += "                   <input language=javascript type='text' class='Bomb-coupon-content-box-text T3' onkeyup='return T3_onkeyup()' size=4 name=T3 />";
    //            html += "                   <input type='text' class='Bomb-coupon-content-box-text T4' size=4 name=T4 maxlength='4' />";
    //            html += "                   <input type='button' class='Bomb-coupon-content-box-but dialog-clo' value='使用'/>";
    //            html += "</form>";
    //            html += "</div>";
    //            html += "</div>";
    //            html += "</div>";

    //            window.Ecshop.Tool.Hint.newConfirm({
    //                info: html,
    //                tit: "选择使用优惠券",
    //                width: 550,     //宽度 confirm专有属性 提示信息框无用
    //                height: 340,
    //                style: 'gray',
    //                button: {
    //                    sort: false,//是否交换按钮顺序
    //                    btnConfirm: '',
    //                    btnCancle: '',
    //                    callbackConfirm: function () { },
    //                    callbackbtnCancle: function () { }
    //                },
    //            });
    //        });
    //    });



    $(document).on('click', '.Bomb-coupon-title li', function () {
        $(this).addClass("Bomb-coupon-title-click");
        $(this).siblings().removeClass("Bomb-coupon-title-click");
        var date = $(this).attr("data-bomb");
        $(".Bomb-coupon-content-box").eq(date).show();
        $(".Bomb-coupon-content-box").eq(date).siblings().hide();
    })
});

function T1_onkeyup(e) {
    var value1 = document.card.T1.value;
    if (value1.length > 4) {
        var reg = new RegExp("-", "g"); //创建正则RegExp对象 
        var v = value1.replace(reg, "");
        if (v.length > 4) {
            var x = Math.ceil(v.length / 4);
            for (var i = 1; i < 5; i++) {
                var vs = v.substring(4 * (i - 1), 4 * i);
                document.getElementsByClassName("T" + i)[0].value = vs;
            }

        }

    };
    if (document.card.T1.value.length == 4) {
        document.card.T2.focus();
    };
};

function T2_onkeyup() {
    var value2 = document.card.T2.value;
    if (document.card.T2.value.length == 4) {
        document.card.T3.focus();
    };
};

function T3_onkeyup() {
    var value3 = document.card.T3.value;
    if (document.card.T3.value.length == 4) {
        document.card.T4.focus();
    };
};

//购物车hover
$(function () {
    $(".table-box-list-bg").each(function () {
        $(this).find("li").children("a").each(function () {
            $(this).hover(function () {
                $(this).addClass("p-c-r")
            }, function () {
                $(this).removeClass("p-c-r")
            })
        })
        $(this).find("h1").each(function () {
            $(this).hover(function () {
                $(this).addClass("p-c-r")
            }, function () {
                $(this).removeClass("p-c-r")
            })
        })
    })
    $(".table-bottom-lef a").each(function () {
        $(this).hover(function () {
            $(this).addClass("p-c-r")
        }, function () {
            $(this).removeClass("p-c-r")
        })
    })
    $(".shopCard-food-box-banner-box-li").each(function () {
        $(this).find("a").each(function () {
            $(this).hover(function () {
                $(this).addClass("p-c-r")
            }, function () {
                $(this).removeClass("p-c-r")
            })
        })
        $(this).find("p").each(function () {
            $(this).hover(function () {
                $(this).addClass("p-c-r")
            }, function () {
                $(this).removeClass("p-c-r")
            })
        })
    })
    $(".checkOrder-box-top-rig-box").each(function () {
        $(this).find("h1").each(function () {
            $(this).hover(function () {
                $(this).addClass("p-c-r")
            }, function () {
                $(this).removeClass("p-c-r")
            })
        })
    })
})
//收货人信息
$(function () {
    $(".new-address a").click(function () {
        cbuy.addAddressShow($(this));
    });
});

//$(function () {
//    $(".Payment-combination").click(function () {
//        html = ""
//        //<!--商家支付方式列表-->
//        html+="<div class='merchantPayMethod'>                            ";
//        //支持到付  
//        html+="    <div class='cashOnDelivery'>                                      ";
//        html+="        <dl>                                                          ";
//        html+="            <dt>以下商家<span>支持货到付款</span></dt>                  ";
//        html+="            <dd>                                                      ";
//        html+="                <div class='cashOnDelivery-list'>                      ";
//        html+="                    <img src='images/shop-img1.jpg' alt=''/>          ";
//        html+="                    <h1>sikkibaby旗舰店</h1>                           ";
//        html+="                </div>                                                ";
//        html+="                <div class='cashOnDelivery-list'>                      ";
//        html+="                    <img src='images/shop-img1.jpg' alt=''/>          ";
//        html+="                    <h1>sikkibaby旗舰店</h1>                           ";
//        html+="                </div>                                                ";
//        html+="                <div class='cashOnDelivery-list'>                      ";
//        html+="                    <img src='images/shop-img1.jpg' alt=''/>          ";
//        html+="                    <h1>sikkibaby旗舰店</h1>                           ";
//        html+="                </div>                                                ";
//        html+="                <div class='cashOnDelivery-list'>                      ";
//        html+="                    <img src='images/shop-img1.jpg' alt=''/>          ";
//        html+="                    <h1>sikkibaby旗舰店</h1>                           ";
//        html+="                </div>                                                ";
//        html+="                <div class='cashOnDelivery-list'>                      ";
//        html+="                    <img src='images/shop-img2.jpg' alt=''/>          ";
//        html+="                    <h1>sikkibaby旗舰店</h1>                           ";
//        html+="                </div>                                                ";
//        html+="                <div class='cashOnDelivery-list'>                      ";
//        html+="                    <img src='images/shop-img3.jpg' alt=''/>          ";
//        html+="                    <h1>sikkibaby旗舰店</h1>                           ";
//        html+="                </div>                                                ";
//        html+="                <div class='cashOnDelivery-list'>                      ";
//        html+="                    <img src='images/shop-img4.jpg' alt=''/>          ";
//        html+="                    <h1>sikkibaby旗舰店</h1>                           ";
//        html+="                </div>                                                ";
//        html+="                <div class='cb'></div>                                ";
//        html+="            </dd>                                                      ";
//        html+="        </dl>                                                          ";
//        html+="    </div>                                                            ";
//       //;<!--不支持到付-->    
//        html+="    <div class='onlinePay'>                                            ";
//        html+="        <dl>                                                          ";
//        html+="            <dt>以下商家<span>不支持货到付款,将使用在线支付</span></dt>  ";
//        html+="            <dd>                                                      ";
//        html+="                <div class='cashOnDelivery-list'>                      ";
//        html+="                    <img src='images/shop-img1.jpg' alt=''/>          ";
//        html+="                    <h1>sikkibaby旗舰店</h1>                           ";
//        html+="                </div>                                                ";
//        html+="                <div class='cashOnDelivery-list'>                      ";
//        html+="                    <img src='images/shop-img1.jpg' alt=''/>          ";
//        html+="                    <h1>sikkibaby旗舰店</h1>                           ";
//        html+="                </div>                                                ";
//        html+="                <div class='cashOnDelivery-list'>                      ";
//        html+="                    <img src='images/shop-img1.jpg' alt=''/>          ";
//        html+="                    <h1>sikkibaby旗舰店</h1>                           ";
//        html+="                </div>                                                ";
//        html+="                <div class='cashOnDelivery-list'>                      ";
//        html+="                    <img src='images/shop-img1.jpg' alt=''/>          ";
//        html+="                    <h1>sikkibaby旗舰店</h1>                           ";
//        html+="                </div>                                                ";
//        html+="                <div class='cashOnDelivery-list'>                      ";
//        html+="                    <img src='images/shop-img2.jpg' alt=''/>          ";
//        html+="                    <h1>sikkibaby旗舰店</h1>                           ";
//        html+="                </div>                                                ";
//        html+="                <div class='cb'></div>                                ";
//        html+="            </dd>                                                      ";
//        html+="        </dl>                                                          ";
//        html+="    </div>                                                            ";
//        html += "</div>                                                                ";

//        window.Ecshop.Tool.Hint.newConfirm({
//            info: html,
//            tit: "请确认支付方式",
//            width: 750,     //宽度 confirm专有属性 提示信息框无用
//            height: 350,
//            style: 'gray',
//            button: {
//                sort: false,//是否交换按钮顺序
//                btnConfirm: '确定',
//                btnCancle: '取消',
//                callbackConfirm: function () { },
//                callbackbtnCancle: function () { }
//            },
//        });
//    })
//})

$(function () {
    $(".collect").each(function () {
        $(this).click(function () {
            html = "";
            html += "<div class='addFavorites'>";
            html += "      <img src='images/alert.png' alt=''/>    ";
            html += "      <div class='addFavorites-box'>          ";
            html += "          <p>                                 ";
            html += "              加入收藏夹后，                   ";
            html += "          </p>                                ";
            html += "          <p>                                 ";
            html += "              商品将不在购物车中显示。          ";
            html += "          </p>                                ";
            html += "      </div>                                  ";
            html += "  </div>                                      ";

            window.Ecshop.Tool.Hint.newConfirm({
                info: html,
                tit: "加入收藏夹",
                width: 400,     //宽度 confirm专有属性 提示信息框无用
                height: 200,
                style: 'gray',
                curpage: true,
                button: {
                    sort: false,//是否交换按钮顺序
                    btnConfirm: '确定',
                    btnCancle: '取消',
                    callbackConfirm: function () { },
                    callbackbtnCancle: function () { }
                },
            });
        })
    })
})


//发票部分
$(function () {
    $(".checkOrder-content .xchange").click(function () {
        $(".bill-box").hide();
        $(".bill-write").show();
    })
    $(".bill-write-top li").each(function () {
        $(this).click(function () {
            $(this).addClass("bill-write-top-click");
            $(this).siblings().removeClass("bill-write-top-click");
            var ind = $(this).index();
            $(".table").hide();
            $(".table").eq(ind).show();
        })
    })
})
//弹框箭头变化部分
$(document).on('mouseover', '.right-arrow', function () {
    $(this).find("img").attr({
        src: "/images/cart/right222.png"
    });
})
$(document).on('mouseout', '.right-arrow', function () {
    $(this).find("img").attr({
        src: "/images/cart/right111.png"
    });
})
$(document).on('mouseover', '.lef-arrow', function () {
    $(this).find("img").attr({
        src: "/images/cart/left222.png"
    });
})
$(document).on('mouseout', '.lef-arrow', function () {
    $(this).find("img").attr({
        src: "/images/cart/left111.png"
    });
})

//底部轮播箭头变化部分
$(document).on('mouseover', '.rig-but', function () {
    $(this).find("img").attr({
        src: "/images/cart/right222.png"
    });
})
$(document).on('mouseout', '.rig-but', function () {
    $(this).find("img").attr({
        src: "/images/cart/right111.png"
    });
})
$(document).on('mouseover', '.left-but', function () {
    $(this).find("img").attr({
        src: "/images/cart/left222.png"
    });
})
$(document).on('mouseout', '.left-but', function () {
    $(this).find("img").attr({
        src: "/images/cart/left111.png"
    });
})

//弹框的加入购物车按钮的颜色变化
$(document).on('mouseover', '.singleChip-test-list a', function () {
    $(this).addClass("addFavorites-click");
})
$(document).on('mouseout', '.singleChip-test-list a', function () {
    $(this).removeClass("addFavorites-click");
})

//送赠品的line高度
function initmain() {
    $(".gifts-all").each(function () {
        var height = parseInt($(this).css("height"));
        $(this).parent().find(".xians").css({
            "height": height + 40 + "px",
            top: "60px"
        })
    });
}

function initRealPayList() {
    $(".stylePay li").each(function () {
        $(this).find("img").click(function () {
            var src = $(this).attr("src");
            if (src == "/images/cart/jia.png") {
                $(this).attr({
                    "src": "/images/cart/jian.png"
                })
            } else {
                $(this).attr({
                    "src": "/images/cart/jia.png"
                })
            }
            $(this).parent().find(".stylePayBox").slideToggle();
        })
    })
};



function initblock() {
    $(".new-address").removeClass("none");
}


;
(function (doc) {
    var obj = '[data-role="checkOrder-content-address-box0"]',
        $obj = $(obj);
    var isCurr = function (obj) {
        return $(obj).is('.checkOrder-content-address-box-curr');
    };
    var event = function (obj) {
        $(doc).on('click.my', obj, function () {
            $this = $(this);
            $this.siblings().removeClass('checkOrder-content-address-box-curr').css('background', 'url(/images/cart/address-bg.png) 295px 0 / 300% 100% repeat-x');
            if (!isCurr(this)) {
                $("#txtsince").val($this.attr("data-id"));
                $this.addClass('checkOrder-content-address-box-curr').css('background', 'url(/images/cart/address-bg.png) 200% 0 / 300% 100% repeat-x');
            } else {
                $("#txtsince").val(0);
                $this.removeClass('checkOrder-content-address-box-curr').css('background', 'url(/images/cart/address-bg.png) 295px 0 / 300% 100% repeat-x');
            }
        });
    };
    event(obj);
})(document);
