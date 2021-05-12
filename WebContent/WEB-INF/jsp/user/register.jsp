<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
 
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>
        会员注册
    </title>

    <link rel="stylesheet" href="${pageContext.request.contextPath}/gsfiles/gsfileresister/register.css">
    <link rel="stylesheet" href="${pageContext.request.contextPath}/gsfiles/gsfileresister/tipstyle.css">
    <link type="text/css" rel="stylesheet" href="${pageContext.request.contextPath}/gsfiles/gsfileresister/calendar.css">
    <script src="${pageContext.request.contextPath}/gsfiles/gsfileresister/jquery.min.js" type="text/javascript"></script>
    <script type="text/javascript" src="${pageContext.request.contextPath}/gsfiles/gsfileresister/calendar.js"></script>
    <script src="${pageContext.request.contextPath}/gsfiles/gsfileresister/jquery.form.js" type="text/javascript"></script>
    <script src="${pageContext.request.contextPath}/gsfiles/gsfileresister/template-plugin.js"></script>
    <script src="${pageContext.request.contextPath}/gsfiles/gsfileresister/tipstyle.js" type="text/javascript"></script>
    <script src="${pageContext.request.contextPath}/gsfiles/gsfileresister/emailAutoComplete.js" type="text/javascript"></script>

    <script type="text/javascript" src="${pageContext.request.contextPath}/gsfiles/gsfileresister/Ecshop.Tool.js"></script>
    <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/gsfiles/gsfileresister/Ecshop.Hint.css">
    <script
	src="${pageContext.request.contextPath}/js/jquery.validate.min.js"></script>
<script src="${pageContext.request.contextPath}/js/messages_zh.js"></script>
    
    <!--[if IE 6]>
    <script src="js/DD_belatedPNG.js"></script>
    <script>DD_belatedPNG.fix('.png_bg');</script>
    <![endif]-->
    
    <style type="text/css">
     .error {
	color: red;
}
    </style>
    <script type="text/javascript">
  
    
      /* ajax */
     function  cherk(){
    	 var a=$('#msgusername').html();
    	 var name=$('#reg_name').val();
    	 var pwd=$('#reg_pwd').val();
    	 var phone=$('#umob').val();
    	if(a!="用户名已存在"){
    		 
    		location.href="${pageContext.request.contextPath}/doRegister?username="+name+"&password="+
    		  pwd+"&userPhone="+phone;
    	}else{
    		return false;
    	}
    	
    }
     
	$(function() {
		  
		$('#reg_name').blur(function(){
			 
			 	var url= "checkAJAX";
				 
		    		var params = {
		    				name:$('#reg_name').val()
				};
			
			      		  $.getJSON(url,params,function(result){//响应回来的json数组
			      			  if(result==1){
			      				$('#msgusername').html("用户名已存在");
			      				
			      			  }else{
			      				$('#msgusername').html("通过！");
			      				
			      			  }
			      			 
			      			 
			              });    
		});  
	});    
    </script>
    <script type="text/javascript">
        $(document).ready(function () {
            $(document).keydown(function (event) {
                if (event.keyCode == 13) {
                    return false;
                }
            });

            PlaceholderTips.PlaceholderFocus({
                selector: document.getElementById("DialogForm"),
                className: "inline-tip default",
                hidclassName: "inline-tip hidden"
            });
            defaults = {
                s1: 'Select1',
                s2: 'Select2',
                s3: 'Select3',
                v1: $("#hidP").val(),
                v2: $("#hidC").val(),
                v3: $("#hidA").val()
            };
            threeSelect(defaults);
            new EmailAutoComplete({callback: check_reg_email});
        });
        function threeSelect(config) {
            var threeSelectData = "";
            var $s1 = $("#" + config.s1);
            var $s2 = $("#" + config.s2);
            var $s3 = $("#" + config.s3);
            var v1 = config.v1 ? config.v1 : null;
            var v2 = config.v2 ? config.v2 : null;
            var v3 = config.v3 ? config.v3 : null;

            $.ajax({
                type: 'POST',
                dataType: "json",
                url: '/controls/CartOrderHandler.ashx',
                data: {type: "get_address"},
                async: false,
                success: function (json) {
                    if (json != null) {
                        threeSelectData = json;
                    }
                }
            });

            $.each(threeSelectData, function (k, v) {
                appendOptionTo($s1, v.Name, v.Code, v1);
            });

            $s1.change(function () {
                $s2.html("");
                $s3.html("");
                if (this.selectedIndex == -1) return;
                var s1_curr_val = this.options[this.selectedIndex].value;
                $.each(threeSelectData, function (k, v) {
                    if (s1_curr_val == v.Code) {
                        if (v.items) {
                            $.each(v.items, function (k, v) {
                                appendOptionTo($s2, v.Name, v.Code, v2);
                            });
                        }
                    }
                });
                if ($s2[0].options.length == 0) {
                    appendOptionTo($s2, "...", "", v2);
                }
                $s2.change();
            }).change();
            $s2.change(function () {
                $s3.html("");
                var s1_curr_val = $s1[0].options[$s1[0].selectedIndex].value;
                if (this.selectedIndex == -1) return;
                var s2_curr_val = this.options[this.selectedIndex].value;
                $.each(threeSelectData, function (k, v) {
                    if (s1_curr_val == v.Code) {
                        if (v.items) {
                            $.each(v.items, function (k, v) {
                                if (s2_curr_val == v.Code) {
                                    $.each(v.items, function (k, v) {
                                        appendOptionTo($s3, v.Name, v.Code, v3);
                                    });
                                }
                            });
                            if ($s3[0].options.length == 0) {
                                appendOptionTo($s3, "...", "", v3);
                            }
                        }
                    }
                });
                //var areaValue = $("#Select3").val();
                //if (areaValue == "" || areaValue == "...") {
                //    $("#msg_reg_Area").show();
                //}
                //else {
                //    $("#msg_reg_Area").hide();
                //}
            }).change();
            function appendOptionTo($o, k, v, d) {
                var $opt = $("<option>").text(k).val(v);
                if (v == d) {
                    $opt.attr("selected", "selected")
                }
                $opt.appendTo($o);
            }
        }
    </script>
</head>
<body>
<form id="signupForm" method="post" action="${pageContext.request.contextPath}/doRegister"  >
    <div class="aspNetHidden">
        <input type="hidden" name="__VIEWSTATE" id="__VIEWSTATE"
               value="/wEPDwULLTEyMTM3OTE4MDUPZBYCZg9kFgICAw9kFgJmDxYCHgRUZXh0BUU8YSBocmVmPSJyZWcuYXNweD90PTAmJnJlc3VsdHVyaT0lMmYiIGNsYXNzPSJhY3RpdmUiPuS8muWRmOazqOWGjDwvYT5kZGL1ttwIi5BH4M0mq7nGbbve/TtaaO4nBa7At9XFXAN/">
    </div>

  
    <div class="user-wrapper">

        <!-- register-header -->
        <div class="register-header">
            <div class="logo-wrap">
                <a href="${pageContext.request.contextPath}/purindex"><img src="/goods/logo.jpg"
                                                  alt="LOGO"></a>
                <span class="verticle-palceholder">让图片垂直居中</span>
            </div>
        </div>
        <!-- /register-header -->

        <!-- register-wrap -->
        <div class="register-wrap">

            <div class="register-title">
                <div class="fl register-title-tab">
                    <a href="http://gsw818.com/reg.aspx?t=0&amp;&amp;resulturi=%2f" class="active">会员注册</a>
                </div>
                    <span class="fr">我已注册，现在就&nbsp;&nbsp;<a href="${pageContext.request.contextPath}/admin/login"
                                                            class="color-orange">登录</a>
                    </span>
            </div>


            <script src="${pageContext.request.contextPath}/gsfiles/gsfileresister/BaseValidate.js" type="text/javascript"></script>
            <script src="${pageContext.request.contextPath}/gsfiles/gsfileresister/RegisterValidate.js" type="text/javascript"></script>
            <script src="${pageContext.request.contextPath}/gsfiles/gsfileresister/tel_validate.js" type="text/javascript"></script>
            <script src="${pageContext.request.contextPath}/gsfiles/gsfileresister/Jquery.Cookie.js" type="text/javascript"></script>
            <script src="${pageContext.request.contextPath}/gsfiles/gsfileresister/ajaxupload.js"></script>
            <script type="text/javascript">
                $(document).ready(function () {
                    $("input[type=file]", document.getElementById("DialogForm")).each(function () {
                        var _this = $(this);
                        _this.val("");
                    });

                });
                function EnterEvent(e, event) {
                    if (event.keyCode == 13) {
                        {
                            if (e.attr("id") == "reg_name") {
                                $("#reg_pwd").focus();
                                event.keyCode = 0;
                                return false;
                            }
                            if (e.attr("id") == "reg_pwd") {
                                $("#reg_pwdagion").focus();
                                event.keyCode = 0;
                                return false;
                            }
                            if (e.attr("id") == "reg_pwdagion") {
                                $("#reg_email").focus();
                                event.keyCode = 0;
                                return false;
                            }
                            if (e.attr("id") == "reg_code") {
                                user_register();
                                event.keyCode = 0;
                                return false;
                            }
                        }
                    }
                }
            </script>

            <div class="register-table" id="DialogForm" style="padding-top: 30px;">
                <table>

                    <tbody>
                    <tr>
                        <th>&nbsp;</th>
                        <td style="font-size: 18px;"> 填写注册信息
                        </td>
                    </tr>


                    <tr>
                        <th><span class="color-red">*</span>用&nbsp;户&nbsp;名</th>
                        <td>
                            <input type="text" id="reg_name" class="user-input-text user-name-r"
                                   placeholderinfo="中文/英文/数字/下滑线，长度2-16位" name="username"  
                                   maxlength="50"  >
                            <span class=" " id="msgusername">中文/英文/数字/下滑线，长度2-16位</span>
                            <!-- <span  id="msgusername">12</span> -->
                        </td>
                    </tr>
                    <tr>
                        <th><span class="color-red">*</span>设置密码</th>
                        <td>
                            <input type="password" class="user-input-text user-pwd-r"
                                   placeholderinfo="密码为6-20位字母/数字/其他符号的组合" id="reg_pwd" name="password"
                                   onblur="check_reg_pwd()" maxlength="20"
                                   onkeydown="javascript:EnterEvent($(this),event);">
                            <span class="inline-tip hidden" id="msg_reg_pwd">密码为6-20位字母/数字/其他符号的组合</span>
                        </td>
                    </tr>
                    <tr>
                        <th><span class="color-red">*</span>确认密码</th>
                        <td>
                            <input type="password" class="user-input-text user-pwd-r"
                                   placeholderinfo="密码为6-20位字母/数字/其他符号的组合" id="reg_pwdagion" name="againpassword"
                                   onblur="check_reg_pwdagain()" maxlength="20"
                                   onkeydown="javascript:EnterEvent($(this),event);">
                            <span class="inline-tip hidden" id="msg_reg_pwdagion">密码为6-20位字母/数字/其他符号的组合</span>
                        </td>
                    </tr>

                     

                    <tr class="clearfix">
                        <th>

                            <span class="color-red">*</span>

                            手机号码
                        </th>
                        <td>
                            <input type="text" id="umob" class="user-input-text user-phone"  
                                   name="userPhone" placeholderinfo="请填写手机号码" maxlength="20">
                            <span class="inline-tip hidden" id="msg_umob">请填写手机号码 </span>
                        </td>
                    </tr>
 
                    <tr>
                   
                        <th></th>
                        <td>
                            <input type="submit" class=""   value="立 即 注 册" >

                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>


        </div>
        

      

      

    </div>
</form>


<a href="javascript:;" id="backtotop" class="backtop" style="display: inline;">回顶部</a></body>
</html>