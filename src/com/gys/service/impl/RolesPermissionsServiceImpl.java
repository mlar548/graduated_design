package com.gys.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.gys.dao.RolesPermissionsMapper;
import com.gys.entity.RolesPermissions;
import com.gys.service.RolesPermissionsService;

@Service
@Transactional
public class RolesPermissionsServiceImpl implements RolesPermissionsService {

	@Autowired
	RolesPermissionsMapper rolesPermissionsMapper;

	@Override
	public int deletePermissionsByRoleIdPermissionId(String roleId, String permissionId) {
		return this.rolesPermissionsMapper.deletePermissionsByRoleIdPermissionId(roleId, permissionId);
	}

	@Override
	public int insertPermissionsByRoleIdPermissionId(String roleId, String permissionId) {
		return this.rolesPermissionsMapper.insertPermissionsByRoleIdPermissionId(roleId, permissionId);
	}

}
