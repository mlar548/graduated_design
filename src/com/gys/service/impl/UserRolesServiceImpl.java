package com.gys.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.gys.dao.UserRolesMapper;
 
import com.gys.entity.UserRoles;
import com.gys.entity.UserRolesExample;
import com.gys.entity.UserRolesExample.Criteria;
import com.gys.service.UserRolesService;
@Service
@Transactional
public class UserRolesServiceImpl implements UserRolesService {

	@Autowired
	private UserRolesMapper userRolesMapper;
	@Override
	public List<UserRoles> selectUserRolesByUserId(Integer UserId) {
		 
		UserRolesExample example = new UserRolesExample();
		Criteria c1=example.createCriteria();
		c1.andUserIdEqualTo(UserId);
		
		return userRolesMapper.selectByExample(example);
	}

	
	
}
