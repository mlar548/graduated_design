function BMapLbs(defaultconfig) {
    this.defaultconfig = {
        zoom: 19,
        isShowInfoWindow: false,
        windowContent: '',
        windowTitle: ''
    };
    $.extend(this.defaultconfig, defaultconfig);
    this.map = new BMap.Map(this.defaultconfig.container);
    this.geocoder = new BMap.Geocoder();
    this.defaultAddress = this.defaultconfig.defaultAddress;
    this.locationPoint = this.defaultconfig.locationPoint.split(',');
}

BMapLbs.prototype.searchInfoWindow= function() {
   return new BMapLib.SearchInfoWindow(this.map, this.defaultconfig.windowContent, {
       title: this.defaultconfig.windowTitle, //标题
        width: 290, //宽度
        height: 105, //高度
        panel: "panel", //检索结果面板
        enableAutoPan: true, //自动平移
        searchTypes: [
            BMAPLIB_TAB_SEARCH, //周边检索
            BMAPLIB_TAB_TO_HERE, //到这里去
            BMAPLIB_TAB_FROM_HERE //从这里出发
        ]
    });
}

BMapLbs.prototype.setLabelByPoint = function (point) {
    var obj = this;
    if (point) {
        var marker = new BMap.Marker(point);
        obj.map.centerAndZoom(point, obj.defaultconfig.zoom);
        obj.map.addOverlay(marker);
        obj.cancelLable();
        $("#hdLocation").val(point.lng + "," + point.lat);
        obj.geocoder.getLocation(point, function (rs) {
            var addComp = rs.addressComponents;
            var lb = new BMap.Label("" + addComp.city + addComp.district + addComp.street + addComp.streetNumber, { offset: new BMap.Size(20, -10) });
            lb.setTitle("店铺位置");
            marker.setLabel(lb);
        });
    } else {
        new BMap.LocalCity().get(function (result) {
            var cityName = result.name;
            obj.map.centerAndZoom(cityName, 11);
        });
    }
}

BMapLbs.prototype.cancelLable = function () {
    var allOverlay = this.map.getOverlays();
    for (var i = 0; i < allOverlay.length ; i++) {
        try {
            if (allOverlay[i].getLabel().getTitle() == "店铺位置") {
                this.map.removeOverlay(allOverlay[i]);
            }
        } catch (e) {
        }
    }
}

function initBMap(defaultAddress, locationPoint) {
    var defaultconfig = { container: 'allmap', defaultAddress: defaultAddress, locationPoint: locationPoint};
    var lbs = loadBMap(defaultconfig);
    lbs.map.addControl(new BMap.NavigationControl());
    lbs.map.addControl(new BMap.ScaleControl());
    lbs.map.addControl(new BMap.OverviewMapControl());
    lbs.map.addControl(new BMap.MapTypeControl());
    lbs.map.enableScrollWheelZoom();//启用滚轮放大缩小
    //添加事件
    lbs.map.addEventListener("dblclick", function (e) {
        lbs.setLabelByPoint(e.point);
    });
    $("#btnSearch").click(function () {
        var local = new BMap.LocalSearch(lbs.map, {
            renderOptions: {
                map: lbs.map,
                autoViewport: true,
                selectFirstResult: false
            },
            pageCapacity: 40
        });
        if (document.getElementById("cityName").value != "") {
            local.search(document.getElementById("cityName").value);
        }
    });

}

function loadBMap(defaultconfig) {
    var lbs = new BMapLbs(defaultconfig);
    lbs.map.addControl(new BMap.NavigationControl());
    lbs.map.addControl(new BMap.ScaleControl());
    lbs.map.addControl(new BMap.OverviewMapControl());
    lbs.map.addControl(new BMap.MapTypeControl());
    lbs.map.enableScrollWheelZoom();//启用滚轮放大缩小
    if (lbs.locationPoint.length == 2) {
        var point = new BMap.Point(lbs.locationPoint[0], lbs.locationPoint[1]);
        lbs.setLabelByPoint(point);
        if (lbs.defaultconfig.isShowInfoWindow) {
            lbs.searchInfoWindow().open(point);
        }
    } else {
        lbs.geocoder.getPoint(lbs.defaultAddress, function (point) {
            lbs.setLabelByPoint(point);
            if (lbs.defaultconfig.isShowInfoWindow) {
                lbs.searchInfoWindow().open(point);
            }
        });
    }
    return lbs;
}

function loadStoreMap(defaultAddress, locationPoint) {
    if ($("#allmap").css("display") == "none") {
        $("#allmap").show();
        var defaultconfig = { container: 'allmap', defaultAddress: defaultAddress, locationPoint: locationPoint };
        loadBMap(defaultconfig);
    }
}

function loadServerProviderMap(defaultAddress, locationPoint, mobile, companyName) {
    if ($("#map-content").css("display") == "none") {
        $("#map-content").show();
        var content = '<div style="margin:0;line-height:20px;padding:2px;">' +
            '地址：' + defaultAddress + '<br/>电话：' + mobile +
            '</div>';
        var defaultconfig = { container: 'allmap', defaultAddress: defaultAddress, locationPoint: locationPoint, isShowInfoWindow: true, windowContent: content, windowTitle: companyName };
        loadBMap(defaultconfig);
    }
}
function savaLocation(fnName) {
    if (fnName != "" && fnName != "undefined" && fnName != "null") {
        parent.window[$.trim(fnName)](document.getElementById("hdLocation").value);
    }
    // cgjg.dialog.close(); //关闭层
    if (typeof (ecDialog) == "object") {
        ecDialog.close();
    }
    else if (typeof (window.parent.topDialog) == "object") {
        window.parent.topDialog.close();
    }
}
function EnterEvent(e, event) {
    var keyCode = event.keyCode ? event.keyCode : event.which ? event.which : event.charCode;
    if (keyCode == 13) {
        return false;
    }
}
