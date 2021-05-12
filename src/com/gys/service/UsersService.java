package com.gys.service;

import java.util.List;

import com.gys.entity.GoodsGwcList;
import com.gys.entity.Users;
import com.gys.entity.UsersExample;

public interface UsersService {
	// 输入一个userId 返回他的user对象
	public Users selectByPrimaryKey(Integer userId);
	
	// 输入一个username 返回他的user对象
	public Users selectUserByUserName(String username);

	// 用户登录
	public Users login(String username, String password);

	// 添加user
	public void insertSelective(Users user);
	
	List<Users> selectByExample(UsersExample example);
 
	//用户修改信息
	public void updateByPrimaryKey(Users user);
	
	int updateByPrimaryKeySelective(Users user);

	public List<Users> selectUsersByRoleId(Integer roleId);

	public List<Users> selectUsersByRoleIdPage(Integer pageNo, Integer pageSize,Integer roleId);

	public int getUserByRoleIdis2AllCount(Integer roleId);

	public int createOrder(GoodsGwcList goodsGwcList, Integer addressId, Users user);

	public int addUser(Users user, String roleId);

}
