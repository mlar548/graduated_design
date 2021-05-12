package com.gys.test;

import java.math.BigDecimal;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar;
import java.util.Random;
import java.util.UUID;

import org.apache.shiro.crypto.hash.Md5Hash;
import org.apache.shiro.crypto.hash.SimpleHash;
import org.apache.shiro.web.filter.authc.FormAuthenticationFilter;
import org.apache.shiro.web.filter.authc.LogoutFilter;
import org.apache.shiro.web.mgt.CookieRememberMeManager;
import org.apache.shiro.web.servlet.SimpleCookie;
import org.junit.Test;



public class MyTest {
public static void main(String[] args) {
	

//	 
//	org.apache.shiro.realm.jdbc.JdbcRealm
// 	org.apache.shiro.spring.security.interceptor.AuthorizationAttributeSourceAdvisor
// 	LifecycleBeanPostProcessor
//	org.apache.shiro.authc.credential.HashedCredentialsMatcher
//	UnauthorizedException
//	DefaultWebSessionManager a=new DefaultWebSessionManager();
//	a.deleteInvalidSessions()
//	cachemanagerConf
//	org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory
//	FormAuthenticationFilter
//	CookieRememberMeManager
//	SimpleCookie
//	LogoutFilter
}
@Test
public void test(){
	//MD5加密
	String password = new Md5Hash("123").toString();
	System.out.println("加密后："+password);
	//加盐  salt  默认一次散列
	String password_salt=new Md5Hash("123", "gys").toString();
	System.out.println("加盐后："+password_salt);
	//散列2次
	String password_salt_2 = new Md5Hash("123", "gys", 2).toString();
	System.out.println("散列2次："+password_salt_2);
/*	//使用SimpleHash
	SimpleHash hash = new SimpleHash("MD5", "123", "gys", 2);
	System.out.println("simpleHash:"+hash.toString());
	
	  String s = "1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";  
      char[] c = s.toCharArray();  
      Random random = new Random(); 
      String password_salt1="";
      System.out.println(c);
      for( int i = 0; i < 4; i ++) { 
    	    
      char a= c[random.nextInt(c.length)] ;
       char b[]= {a,a,a,a};
       
          String a2=a+"";
      }  */
	 
    UUID randomUUID = UUID.randomUUID();
    String salt=randomUUID.toString().replaceAll("-", "").substring(4, 8);
     
	System.out.println("salt+"+ salt); 
}
@Test
public void test4(){
   
      Random random = new Random(); 
     
    	    
  int nextInt = random.nextInt(5) ;
  int nextInt2 = random.nextInt(5) ;
  int nextInt3 = random.nextInt(5) ;
       System.out.println(nextInt+1);
       System.out.println(nextInt2+1);
       System.out.println(nextInt3+1);
}
@Test
public void test2() {
Date date =new Date();
 
SimpleDateFormat formatt= new SimpleDateFormat("yyyyMMddHHmmss") ;


String time = formatt.format(date);
System.out.println(time);
Random ra =new Random();
System.out.println(ra.nextInt(10));
System.out.println(ra.nextInt(10));
String id=time+ra.nextInt(10)+ra.nextInt(10);
System.out.println(id);
}
@Test
public void test3() {
	BigDecimal onePrice = BigDecimal.valueOf(111.22);
	System.out.println(onePrice);
	Integer quantity = 2;
	BigDecimal b = new BigDecimal(quantity);
	System.out.println(b);
	BigDecimal multiply = onePrice.multiply(b);
	System.out.println(multiply);
	  
}
@Test
public void test5() {
 	
	   Date nowDate = new Date();
	  /* Calendar.getInstance(); // String birth = formatter.format(cl.getTime());
	  SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");
	   
	   // System.out.println(birth); // 从0开始parse ParsePosition pos = new
	   ParsePosition(0); // 按照"yyyy-MM-dd"格式赋值给datetime Date date =
	   formatter.parse(birthdayIn, pos); // System.out.println(datetime);
	   user.setBirthday(date);*/
	   System.out.println(nowDate);
	   
	   Calendar calendar = new GregorianCalendar(); 
	   calendar.setTime(nowDate);
	   calendar.set(Calendar.DATE, calendar.get(Calendar.DATE) - 7);
	   System.out.println(calendar.getTime());
	   SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");
	   String time = formatter.format(calendar.getTime());
	   System.out.println(time);
	
}
@Test
public void test6() {
 	 Date nowDate = new Date();
//	 Calendar calendar = new GregorianCalendar(); 
//	    System.out.println(Calendar.DATE);
//	   calendar.set(Calendar.DATE, calendar.get(Calendar.DATE) - 5);
//	   SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");
//	   String time = formatter.format(calendar.getTime());
//	   System.out.println(time);
	System.out.println(nowDate);
}
}
