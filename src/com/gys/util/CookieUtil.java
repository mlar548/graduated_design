package com.gys.util;

import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.net.URLEncoder;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class CookieUtil {
	public static final int COOKIE_MAX_AGE = 7 * 24 * 3600;
    public static final int COOKIE_HALF_HOUR = 30 * 60;
    
    
	 public static void setCookie(HttpServletResponse response, String name, 
	            String value, int maxValue) throws UnsupportedEncodingException {
		 
		 value = URLEncoder.encode(value,"UTF-8");
		 Cookie cookie = new Cookie(name,value);
			//设置Cookie的生命周期
			cookie.setMaxAge(maxValue);
			//保存Cookie
			response.addCookie(cookie); 
	     
	 }
	 public static void setCookie(HttpServletResponse response, String name, 
			 String value) throws UnsupportedEncodingException {
		  System.out.println("保存cookies");
		  System.out.println(name);
		  System.out.println(value);
		  
		 value = URLEncoder.encode(value, "UTF-8");
		 
		 Cookie cookie = new Cookie(name,value);
		 //设置Cookie的生命周期
		 cookie.setMaxAge(60 * 60 * 24*7);
		 //保存Cookie
		 response.addCookie(cookie); 
		 
	 }
	 public static String getCookie(HttpServletRequest request, String name 
			 ) throws UnsupportedEncodingException { 
		 Cookie[] cookies= request.getCookies();
		 
			String value = null;
			if(cookies!=null){
			 
				for(int i=0;i<cookies.length;i++){
					 
					if(cookies[i].getName().equals(name)){
						
					 	 value = URLDecoder.decode(cookies[i].getValue(), "UTF-8");
					 	 System.out.println("value:"+value);
					 	return value;
						 
					}
				}
				
			}
			return null;
	 }
	 
	 
}
