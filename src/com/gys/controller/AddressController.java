package com.gys.controller;

import java.util.List;

import javax.servlet.http.HttpSession; 

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.gys.entity.Address;
import com.gys.entity.Users;
import com.gys.service.AddressService;
import com.gys.util.UserConstants;

@Controller
public class AddressController {
	@Autowired
	private AddressService addressService;

	// 页面跳转：到管理地址页 且把该用户所有地址放到该页
	
	@RequestMapping("/user/address/address")
	public String address(HttpSession session, Model model) {
		// 获取session的Userid
		Users userSe = (Users) session.getAttribute(UserConstants.USER_SESSION);
		// address.setUserId(userSe.getUserId());

		List<Address> addresslist = addressService.selectAddressByUserId(userSe.getUserId());
		
		model.addAttribute("addressList", addresslist);
		return "/user/address/address";
	}

	// 页面跳转：到地址增加页
	@RequestMapping("/user/address/addressAdd")
	public String addressAdd() {

		return "/user/address/addressAdd";
	}

	// 页面跳转：到地址删除页
	@RequestMapping("/user/address/addressDelete")
	public String addressDelete() {

		return "/user/address/addressDelete";
	}

	// 页面跳转：到地址修改页
	@RequestMapping("/user/address/addressUpdate")
	public String addressUpdate() {

		return "/user/address/addressUpdate";
	}

	// 添加收货地址
	@RequestMapping("/user/address/addressAdd.action")
	public String addressAdd(Address address, HttpSession session) {
		// 获取session的Userid
		Users userSe = (Users) session.getAttribute(UserConstants.USER_SESSION);
		address.setUserId(userSe.getUserId());
		addressService.addAddress(address);
		return "/user/address/address"; 
	}

	// 删除收货地址
	@RequestMapping("/user/address/addressDelete.action")
	public String addressDelete(Integer addressId, HttpSession session) {

		addressService.deleteByPrimaryKey(addressId);
		return "/user/address/address";
	}

	// 修改收货地址
	@RequestMapping("/user/address/addressUpdate.action")
	public String addressUpdate(Address address, HttpSession session) {

		addressService.updateAddress(address);
		return "/user/address/address";
	}

}
