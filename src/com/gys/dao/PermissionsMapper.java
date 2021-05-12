package com.gys.dao;

import java.util.List;

import com.gys.entity.Permissions;

public interface PermissionsMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(Permissions record);

    int insertSelective(Permissions record);

    Permissions selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(Permissions record);

    int updateByPrimaryKey(Permissions record);
    
    List<Permissions> findPermissionsByUserId(Integer UserId);

	List<Permissions> selectPermissionsByRoleId(Integer roleId);

	List<Permissions> selectNoPermissionsByRoleId(String roleId);
}