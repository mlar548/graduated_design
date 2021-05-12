package com.gys.controller;

import java.util.Date;
import java.util.List;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authc.AuthenticationException;
import org.apache.shiro.authc.ExcessiveAttemptsException;
import org.apache.shiro.authc.IncorrectCredentialsException;
import org.apache.shiro.authc.LockedAccountException;
import org.apache.shiro.authc.UnknownAccountException;
import org.apache.shiro.authc.UsernamePasswordToken;
import org.apache.shiro.authz.annotation.RequiresPermissions;
import org.apache.shiro.subject.Subject;
import org.apache.shiro.web.util.SavedRequest;
import org.apache.shiro.web.util.WebUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.gys.entity.Goods;
import com.gys.entity.GoodsExample;
import com.gys.entity.GoodsType;
import com.gys.entity.GoodsTypeExample;
import com.gys.entity.Otnotice;
import com.gys.entity.OtnoticeExample;
import com.gys.entity.OtnoticeExample.Criteria;
import com.gys.entity.Supplier;
import com.gys.entity.SupplierExample;
import com.gys.entity.UserRoles;
import com.gys.entity.Users;
import com.gys.service.GoodsService;
import com.gys.service.GoodsTypeService;
import com.gys.service.OtnoticeService;
import com.gys.service.SupplierService;
import com.gys.service.UserRolesService;
import com.gys.service.UsersService;

//http://localhost:8080/GysManagerSystem/user/index
//http://localhost:8080/GysManagerSystem/user/test?a=0

@Controller
public class RealmController {
	
	@Autowired
	private  UserRolesService userRolesService;
	@Autowired
	private  OtnoticeService OtnoticeService;
	@Autowired
	private   GoodsService  goodsService;
	@Autowired
	private   SupplierService  supplierService;
	@Autowired
	private   GoodsTypeService  goodsTypeService;
	@Autowired
	private   UsersService  usersService;
 
	// 首页跳转：到主页面
	@RequestMapping(value= {"/","/admin/index"})
	@RequiresPermissions("role:index")
	public String index( Model model) {
		
		
		OtnoticeExample otnoticeExample = new OtnoticeExample();
		Criteria criteria = otnoticeExample.createCriteria();
		criteria.andZtEqualTo("未读");
		List<Otnotice> selectByExample = OtnoticeService.selectByExample(otnoticeExample);
		int size = selectByExample.size();
		if(size!=0) {
			model.addAttribute("noticeNum", size);
		}
		return "admin/index";
	}

	// 首页跳转：到登录页面
	@RequestMapping("/admin/login")
	public String login() {
		
		System.out.println("----denglu");
		
		return "admin/login";
	}
	
	// 首页跳转：到登录页面
	@RequestMapping("/purindex")
	public String purindex(Model model) {
		
	System.out.println("前台登录");
	 GoodsExample goodsExample = new GoodsExample();
	List<Goods> goodsList = goodsService.selectByExample(goodsExample);
	SupplierExample supplierExample  = new SupplierExample();
	List<Supplier> supplierList = supplierService.selectByExample(supplierExample);
	GoodsTypeExample goodsTypeExample = new GoodsTypeExample();
	List<GoodsType> goodsTypeList = goodsTypeService.selectByExample(goodsTypeExample);
	
	 
	model.addAttribute("goodsTypeList", goodsTypeList);
	 
	model.addAttribute("goodsList", goodsList);
	model.addAttribute("supplierList", supplierList);
		return "user/purindex";
	}

	// 无权访问页
	@RequestMapping("/refuse")
	public String refuse() {
		System.out.println("-----refuse");
		return "refuse";
	}

	// 登陆登录：
	@RequestMapping(value = "/admin/login.action", method = RequestMethod.POST) 
	public String login(HttpServletResponse response, HttpServletRequest request, HttpSession session,String username, String password, Model model ) throws Exception{
		System.out.println(username+"==="+password);
		UsernamePasswordToken token = new UsernamePasswordToken(username, password);
		token.setRememberMe(true); 
		
		Subject currentUser = SecurityUtils.getSubject();
		if(username!=null) {
			System.out.println(username);
			Cookie cookie = new Cookie("username",username);
			//设置Cookie的生命周期
			cookie.setMaxAge(60 * 60 * 24);
			//保存Cookie
			response.addCookie(cookie);
		}
		
		String url = "/";
		try {
			currentUser.login(token);
			Users user=(Users) currentUser.getPrincipal();
			 
			user.setLastLoginTime(new Date());
			
			usersService.updateByPrimaryKeySelective(user);
			List<UserRoles> userRoles = userRolesService.selectUserRolesByUserId(user.getUserId());

             SecurityUtils.getSubject().getSession().getAttribute("shiroSavedRequest");
               SavedRequest savedRequest  = WebUtils.getSavedRequest(request);
               if(savedRequest!=null) {
            	   String requestURI = savedRequest.getRequestURI();
            	   System.out.println("更新前的网址"+requestURI);
            	   String contextPath = request.getContextPath();
            	  
            	   String ReplaceRequestURI4=requestURI.replaceAll("/&","/purindex");
            	   String ReplaceRequestURI3=ReplaceRequestURI4.replaceAll("/none","/purindex");
            	   String ReplaceRequestURI2=ReplaceRequestURI3.replaceAll("/images/uielement.png","/purindex");
            	   
            	   String ReplaceRequestURI=ReplaceRequestURI2.replaceAll(contextPath, "");
            	    
            	   System.out.println("上次请求的网址"+ReplaceRequestURI);
            	   url =ReplaceRequestURI;
            	   System.out.println("请求一");
               }else {
            	   if(userRoles.get(0).getRoleId().equals("2")) {
            		   System.out.println("请求二");
            		   /*String requestURI = savedRequest.getRequestURI();
            		   String contextPath = request.getContextPath();
            		   String ReplaceRequestURI=requestURI.replaceAll(contextPath, "");
            		   System.out.println("上次请求的网址111"+ReplaceRequestURI);*/
       				url = "/purindex";
       			}
               }
             
//               System.out.println("______________>>contextPath:"+contextPath);
               System.out.println("______________>>user:"+user);
			
			System.out.println("______________>>roleId:"+userRoles.get(0).getRoleId());
			session.setAttribute("myuser", user);
		} catch (UnknownAccountException uae) {
			model.addAttribute("msg", "用户名或密码错误");
			return "admin/login";
		} catch (IncorrectCredentialsException ice) {
			model.addAttribute("msg", "用户名或密码错误");
			return "admin/login"; 
		} catch (LockedAccountException lae) {
			model.addAttribute("msg", "用户名或密码错误");
			return "admin/login";
		} catch (ExcessiveAttemptsException eae) {
			model.addAttribute("msg", "用户名或密码错误");
			return "admin/login";
		} catch (AuthenticationException ae) {
			model.addAttribute("msg", "用户名或密码错误");
			return "admin/login";
		}

		return "redirect:"+url;
	}
	
	@RequestMapping("/logout")
	public String logout(HttpSession session) {
		
		SecurityUtils.getSubject().logout();
		return "redirect:/admin/login";
		
	}
	@RequestMapping("/logout2")
	public String logout2(HttpSession session) {
		
		SecurityUtils.getSubject().logout();
		return "redirect:/purindex";
		
	}
	
	// // 登陆登录：
	// @RequestMapping(value = "/admin/login.action", method = RequestMethod.POST)
	// public String login(HttpServletRequest request, HttpSession session, Model
	// model) {
	// String classname =(String)request.getAttribute("shiroLoginFailure");
	// Users user=(Users) SecurityUtils.getSubject().getPrincipal();
	// System.out.println(user.getSex());
	// System.out.println("======错误信息=======");
	// System.out.println(classname);
	// if(UnknownAccountException.class.getName().equals(classname)) {
	// model.addAttribute("msg","账号或密码错误！");
	// }
	//
	// return "/admin/index";
	// }

}
