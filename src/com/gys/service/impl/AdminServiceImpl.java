package com.gys.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.gys.dao.AdminMapper;
import com.gys.entity.Admin;
import com.gys.service.AdminService;
@Service
@Transactional
public class AdminServiceImpl implements AdminService {
	@Autowired
	private AdminMapper adminMapper;

	@Override
	public Admin login(Integer adminId, String adminPassword) {
		// TODO Auto-generated method stub
		return this.adminMapper.login( adminId, adminPassword);
	}
	
	
}
