package com.gys.dao;

import org.apache.ibatis.annotations.Param;

import com.gys.entity.RolesPermissions;

public interface RolesPermissionsMapper {
	int deleteByPrimaryKey(Integer id);

	int insert(RolesPermissions record);

	int insertSelective(RolesPermissions record);

	RolesPermissions selectByPrimaryKey(Integer id);

	int updateByPrimaryKeySelective(RolesPermissions record);

	int updateByPrimaryKey(RolesPermissions record);

	int deletePermissionsByRoleIdPermissionId(@Param("roleId") String roleId,
			@Param("permissionId") String permissionId);

	int insertPermissionsByRoleIdPermissionId(@Param("roleId") String roleId,
			@Param("permissionId") String permissionId);
}