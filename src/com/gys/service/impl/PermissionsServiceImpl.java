package com.gys.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.gys.dao.PermissionsMapper;
import com.gys.entity.Permissions;
import com.gys.entity.RolesPermissions;
import com.gys.service.PermissionsService;

@Service
@Transactional
public class PermissionsServiceImpl implements PermissionsService {

	@Autowired
	PermissionsMapper permissionsMapper;

	@Override
	public List<Permissions> findPermissionsByUserId(Integer UserId) {
		return this.permissionsMapper.findPermissionsByUserId(UserId);
	}

	@Override
	public List<Permissions> selectPermissionsByRoleId(Integer roleId) {
		return this.permissionsMapper.selectPermissionsByRoleId(roleId);
	}

	@Override
	public List<Permissions> selectNoPermissionsByRoleId(String roleId) {
		return  this.permissionsMapper.selectNoPermissionsByRoleId(roleId);
	}

	 
}
