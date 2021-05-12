package com.gys.service;

import java.util.List;

import com.gys.entity.UserRoles;
import com.gys.entity.UserRolesExample;

public interface UserRolesService {
	List<UserRoles> selectUserRolesByUserId(Integer UserId);
	

}
