
/**
*切换到图片服务器
*/
(function () {
   
    function imgHandle() {
        if (typeof (__golobal_img_server) == "undefined") {
            return;
        }


        $("img[src='/uploads/']").each(function () {

        });
    }
    imgHandle();

})();

