package com.gys.service;

import com.gys.entity.RolesPermissions;

public interface RolesPermissionsService {


	int deletePermissionsByRoleIdPermissionId(String roleId, String permissionId);

	int insertPermissionsByRoleIdPermissionId(String roleId, String permissionId);
	
	
}
