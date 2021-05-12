package com.gys.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.gys.entity.Users;
import com.gys.entity.UsersExample;

public interface UsersMapper {
	// 查找user信息
	Users selectByPrimaryKey(Integer userId);

	Users selectUserByUserName(String username);

	// 登录(过时)
	Users login(@Param("username") String username, @Param("password") String password);

	// 添加user
	int insertSelective(Users user);

	// 用户修改信息
	void updateByPrimaryKey(Users user);
	
	int updateByPrimaryKeySelective(Users user);

	List<Users> selectUsersByRoleId(Integer roleId);
	
	List<Users> selectByExample(UsersExample example);


	List<Users> selectUsersByRoleIdPage(@Param("pageNo") Integer pageNo, @Param("pageSize") Integer pageSize,
			@Param("roleId") Integer roleId);

	int getUserByRoleIdis2AllCount(Integer roleId);

}