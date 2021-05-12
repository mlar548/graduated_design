package com.gys.dao;

import java.util.List;

import com.gys.entity.Address;
import com.gys.entity.AddressExample;

public interface AddressMapper {
	int deleteByPrimaryKey(Integer addressId);

	int insert(Address record);

	int insertSelective(Address record);

	List<Address> selectByExample(AddressExample example);

	Address selectByPrimaryKey(Integer addressId);

	int updateByPrimaryKeySelective(Address record);

	int updateByPrimaryKey(Address record);

	int selectByUserId(Integer userId);

	// 添加收货地址
	public void addAddress(Address address);

	// 查询该用户所有地址
	public List<Address> selectAddressByUserId(Integer userId);

	public void updateAddress(Address address);
}