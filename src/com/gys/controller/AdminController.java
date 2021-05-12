package com.gys.controller;


import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar;
import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.gys.entity.Orders;
import com.gys.entity.OrdersExample;
import com.gys.entity.OrdersExample.Criteria;
import com.gys.entity.Trade;
import com.gys.entity.TradeExample;
import com.gys.entity.UserMessage;
import com.gys.entity.UserMessageExample;
import com.gys.entity.Users;
import com.gys.entity.UsersExample;
import com.gys.service.OrdersService;
import com.gys.service.TradeService;
import com.gys.service.UserMessageService;
import com.gys.service.UsersService;
 

@Controller
public class AdminController {
	
	@Autowired
	private UsersService usersService;
	@Autowired
	private OrdersService ordersService;
	@Autowired
	private UserMessageService userMessageService;
//     跳到欢迎页
	@RequestMapping("/welcome")
	public String welcome( Model model) {
		  List<Integer> ordersNumList = findOrderBetween7();
		  model.addAttribute("ordersNumList",ordersNumList);
		  List<Integer> userMessageNumList = findUsersMessageBetween7();
		  model.addAttribute("userMessageNumList",userMessageNumList);
		     
		  
		  List<Integer> usersNumList = findUsersBetween7();
		     model.addAttribute("usersAdd", usersNumList.get(6));
		     model.addAttribute("usersNumList",usersNumList);
		      int customSize = usersService.selectUsersByRoleId(2).size();
		      int adminSize1 = usersService.selectUsersByRoleId(3).size();
		      int adminSize2 = usersService.selectUsersByRoleId(4).size();
		      int adminSize3 = usersService.selectUsersByRoleId(5).size();
		      int adminSize4 = usersService.selectUsersByRoleId(6).size();
		      int adminSize =adminSize1+adminSize2+adminSize3+adminSize4;
		      model.addAttribute("customSize", customSize);
		      model.addAttribute("adminSize", adminSize);
		      
		 UserMessageExample userMessageExample = new UserMessageExample();
		 userMessageExample.setOrderByClause("user_message_id desc");
		 List<UserMessage> selectByExample = userMessageService.selectByExample(userMessageExample);
		 int userMessageSize = selectByExample.size();
		 
		
		  
		 model.addAttribute("userMessageSize", userMessageSize);
		 model.addAttribute("userMessageList", selectByExample);
		return "admin/welcome";
	}


	@RequestMapping("/updatePsw")
	public String updatePsw() {
		return "admin/updatePsw";
	}

	@RequestMapping("/adminUpdatePwd")
	public String adminUpdatePwd(Model model,HttpSession session) {
		Users user = (Users) session.getAttribute("myuser");
		if(user!=null) {
			 UsersExample usersExample = new UsersExample();
			   com.gys.entity.UsersExample.Criteria criteria = usersExample.createCriteria();
			 criteria.andUserIdEqualTo(user.getUserId());
			 List<Users> userList = usersService.selectByExample(usersExample);
			 user= userList.get(0);
			 model.addAttribute("userInf",user);
		}
		return "redirect:/updatePsw";
	}
	
	
public List<Integer> findUsersBetween7() {
	UsersExample usersExample = new UsersExample();
	   com.gys.entity.UsersExample.Criteria criteria = usersExample.createCriteria();
		 Date now= new Date();
		   int size=0;
		   int count=0;
		   int dayNum=0;
		   List<Integer> numList=new ArrayList<>();
		   for(int i=8;i>=1;i--) {
			   Calendar calendar = chooseTimeToNow(i);
			   criteria.andCreateTimeBetween(calendar.getTime(), now);
			   
			     List<Users> selectByExample = usersService.selectByExample(usersExample);
			   count = size;
			    size = selectByExample.size();
			    dayNum=count-size;
			    if(i==8||i==7) {
			    }
			     else {
			    	numList.add(dayNum);
			    }
		   }
		    	numList.add(size);
		    	return numList;
}
public List<Integer> findUsersMessageBetween7() {
	UserMessageExample userMessageExample = new UserMessageExample();
	 UserMessageExample.Criteria criteria = userMessageExample.createCriteria();
	Date now= new Date();
	int size=0;
	int count=0;
	int dayNum=0;
	List<Integer> numList=new ArrayList<>();
	for(int i=8;i>=1;i--) {
		Calendar calendar = chooseTimeToNow(i);
		criteria.andTimeBetween(calendar.getTime(), now);
		
		List<UserMessage> selectByExample = userMessageService.selectByExample(userMessageExample);
		count = size;
		size = selectByExample.size();
		dayNum=count-size;
		if(i==8||i==7) {
		}
		else {
			numList.add(dayNum);
		}
	}
	numList.add(size);
	return numList;
}




public List<Integer> findOrderBetween7() {
	OrdersExample ordersExample = new OrdersExample();
	  Criteria criteria = ordersExample.createCriteria();
	 Date now= new Date();
	   int size=0;
	   int count=0;
	   int dayNum=0;
	   List<Integer> numList=new ArrayList<>();
	   for(int i=8;i>=1;i--) {
		   Calendar calendar = chooseTimeToNow(i);
		   criteria.andOrderStartDateBetween(calendar.getTime(), now);
		   List<Orders> selectByExample = ordersService.selectByExample(ordersExample);
		   count = size;
		    size = selectByExample.size();
		    dayNum=count-size;
		    if(i==8||i==7) {
		    }
		     else {
		    	numList.add(dayNum);
		    }
	   }
	    	numList.add(size);
	return numList;
}
	
	
	
	
public Calendar chooseTimeToNow(int i) {
	Calendar calendar = new GregorianCalendar(); 
	   calendar.set(Calendar.DATE, calendar.get(Calendar.DATE) - i);
	   SimpleDateFormat yearS = new SimpleDateFormat("yyyy");
	   String year = yearS.format(calendar.getTime());
	   
	   SimpleDateFormat monthS = new SimpleDateFormat("MM");
	   String month = monthS.format(calendar.getTime());
	   SimpleDateFormat dayS = new SimpleDateFormat("dd");
	   String day = dayS.format(calendar.getTime());
	   calendar.set( Integer.parseInt(year), Integer.parseInt(month)-1, Integer.parseInt(day),0,0,0);
	return calendar;
}




 
}
