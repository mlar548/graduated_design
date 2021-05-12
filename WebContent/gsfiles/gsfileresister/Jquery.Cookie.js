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

//ʹ�÷��� 
//jQuery����cookie�Ĳ��,��ŵ�ʹ�÷������� 
//$.cookie('the_cookie'); //��ȡCookieֵ 
//$.cookie('the_cookie', 'the_value'); //����cookie��ֵ 
//$.cookie('the_cookie', 'the_value', {expires: 7, path: '/', domain: 'jquery.com', secure: true});//�½�һ��cookie ������Ч�� ·�� ������ 
//$.cookie('the_cookie', 'the_value'); //�½�cookie 
//$.cookie('the_cookie', null); //ɾ��һ��cookie 
//����һ������Ϊblog��ֵΪcss9.net��cookie: 
//$.cookie("blog", "css9.net"); 
//����һ������Ϊblog��ֵΪcss9.net��cookie��ͬʱ���ù���ʱ�䣨expires���ԣ�Ϊ7�죺 
//$.cookie("blog", "css9.net", { expires: 7 }); 
//����һ������Ϊblog��ֵΪcss9.net��cookie�����ù���ʱ�䣨expires���ԣ�Ϊ7�죬ͬʱ����cookie��path����Ϊ��/admin�� 
//$.cookie("blog", "css9.net", { path: '/admin', expires: 7 }); 
//��ȡCookie�� 
//��ȡ����Ϊblog��cookieֵ�� 
//alert( $.cookie("blog") ); 
//ɾ��cookie�� 
//$.cookie("example", null);

//ʹ�÷�������:
//����cookie�ļ�ֵ��
//$.cookie(��name��, ��value��);
//����cookie�ļ�ֵ�ԣ���Ч�ڣ�·�����򣬰�ȫ
//$.cookie(��name��, ��value��, {expires: 7, path: ��/��, domain: ��jquery.com��, secure: true});
//�½�һ��cookie ������Ч�� ·�� ������
//��ȡcookie��ֵ
//var account= $.cookie(��name��);
//ɾ��һ��cookie
//example $.cookie(��name��, null);  