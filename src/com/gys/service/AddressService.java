package com.gys.service;

import java.util.List;

import com.gys.entity.Address;
import com.gys.entity.AddressExample;
 
public interface AddressService {
	Address selectByPrimaryKey(Integer addressId);
	
	int insertSelective(Address record);
	//添加收货地址
	 public void addAddress(Address address);
	 
	  


	 List<Address> selectByExample(AddressExample example);
//	 查询该用户所有地址 
	public List<Address> selectAddressByUserId(Integer userId);

//	删除收货地址
	public void deleteByPrimaryKey(Integer addressId);

	//修改收货地址 
	public void updateAddress(Address address);
	
	int updateByPrimaryKeySelective(Address record);

	public int updateByPrimaryKey(Address record);
  
	 

}
