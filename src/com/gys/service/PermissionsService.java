package com.gys.service;

import java.util.List;

import com.gys.entity.Permissions;
import com.gys.entity.RolesPermissions;

public interface PermissionsService {
    
  public  List<Permissions> findPermissionsByUserId(Integer UserId);

public List<Permissions> selectPermissionsByRoleId(Integer roleId);

public List<Permissions> selectNoPermissionsByRoleId(String roleId);

}
