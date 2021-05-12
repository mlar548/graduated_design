JiaThis = {
    SetJiaThisConfig: function (data_track_clickback, url, summary, title, pic, shortUrl, hideMore) {
        jiathis_config.data_track_clickback = (data_track_clickback == undefined ? "" : data_track_clickback);
        jiathis_config.url = (url == undefined ? "" : url);
        jiathis_config.summary = (summary == undefined ? "" : summary);
        jiathis_config.title = (title == undefined ? "" : title);
        jiathis_config.pic = (pic == undefined ? "" : pic);
        jiathis_config.shortUrl = (shortUrl == undefined ? false : shortUrl);
        jiathis_config.hideMore = (hideMore == undefined ? false : hideMore);
    },
    SetJiaThisHtml: function () {
        $(".divShare").each(function () {
            var divObj = $(this);
            var iconSize = divObj.attr("IconSize");
            var shareUrl = divObj.attr("ShareUrl");
            var summary = divObj.attr("Summary");
            var title = divObj.attr("Title");
            var sharPictureUrl = divObj.attr("SharePictureUrl");

            $.ajax({
                url: '/controls/GetUserControlHtml.ashx',
                async: false,
                type: 'POST',
                data: {
                    Control: "JiaThisShare",
                    IconSize: iconSize,
                    ShareUrl: shareUrl,
                    ShowVisitCount: "false",
                    Summary: summary,
                    Title: title,
                    SharePictureUrl: sharPictureUrl
                },
                dataType: 'html',
                success: function (data) {
                    divObj.append(data);
                }
            });
        });
    }
}

var jiathis_config = {
    data_track_clickback: true,
    url: "",
    summary: "",
    title: "",
    pic: "",
    shortUrl: false,
    hideMore: false
};