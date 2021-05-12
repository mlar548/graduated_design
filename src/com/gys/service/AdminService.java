package com.gys.service;

import com.gys.entity.Admin;

public interface AdminService {

	//登录：
	Admin login(Integer adminId, String adminPassword); 

}
