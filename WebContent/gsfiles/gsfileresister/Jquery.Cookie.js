jQuery.cookie = function (name, value, options) {
    if (typeof value != 'undefined') { // name and value given, set cookie  
        options = options || {};
        if (value === null) {
            value = '';
            options.expires = -1;
        }
        var expires = '';
        if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
            var date;
            if (typeof options.expires == 'number') {
                date = new Date();
                date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
            } else {
                date = options.expires;
            }
            expires = '; expires=' + date.toUTCString();
        }
        var path = options.path ? '; path=' + (options.path) : '';
        var domain = options.domain ? '; domain=' + (options.domain) : '';
        var secure = options.secure ? '; secure' : '';
        document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');
    } else {
        var cookieValue = null;
        if (document.cookie && document.cookie != '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = jQuery.trim(cookies[i]);
                if (cookie.substring(0, name.length + 1) == (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
};

//使用方法 
//jQuery操作cookie的插件,大概的使用方法如下 
//$.cookie('the_cookie'); //读取Cookie值 
//$.cookie('the_cookie', 'the_value'); //设置cookie的值 
//$.cookie('the_cookie', 'the_value', {expires: 7, path: '/', domain: 'jquery.com', secure: true});//新建一个cookie 包括有效期 路径 域名等 
//$.cookie('the_cookie', 'the_value'); //新建cookie 
//$.cookie('the_cookie', null); //删除一个cookie 
//设置一个名称为blog，值为css9.net的cookie: 
//$.cookie("blog", "css9.net"); 
//设置一个名称为blog，值为css9.net的cookie，同时设置过期时间（expires属性）为7天： 
//$.cookie("blog", "css9.net", { expires: 7 }); 
//设置一个名称为blog，值为css9.net的cookie，设置过期时间（expires属性）为7天，同时设置cookie的path属性为”/admin” 
//$.cookie("blog", "css9.net", { path: '/admin', expires: 7 }); 
//读取Cookie： 
//读取名称为blog的cookie值： 
//alert( $.cookie("blog") ); 
//删除cookie： 
//$.cookie("example", null);

//使用方法如下:
//设置cookie的键值对
//$.cookie(’name’, ‘value’);
//设置cookie的键值对，有效期，路径，域，安全
//$.cookie(’name’, ‘value’, {expires: 7, path: ‘/’, domain: ‘jquery.com’, secure: true});
//新建一个cookie 包括有效期 路径 域名等
//读取cookie的值
//var account= $.cookie(’name’);
//删除一个cookie
//example $.cookie(’name’, null);  