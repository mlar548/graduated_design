package com.gys.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.gys.dao.AddressMapper;
import com.gys.entity.Address;
import com.gys.entity.AddressExample;
import com.gys.service.AddressService;

@Service
@Transactional
public class AddressServiceImpl implements AddressService {

	@Autowired
	private AddressMapper addressMapper;

	@Override
	public void addAddress(Address address) {
		this.addressMapper.addAddress(address);
	}

	@Override
	public List<Address> selectAddressByUserId(Integer userId) {
		// TODO Auto-generated method stub
		return this.addressMapper.selectAddressByUserId(userId);
	}

	@Override
	public void deleteByPrimaryKey(Integer addressId) {
		this.addressMapper.deleteByPrimaryKey(addressId);
	}

	@Override
	public void updateAddress(Address address) {
		// TODO Auto-generated method stub
		this.addressMapper.updateAddress(address);
		
	}

	@Override
	public Address selectByPrimaryKey(Integer addressId) {
		return addressMapper.selectByPrimaryKey(addressId);
	} 
	@Override
	public int updateByPrimaryKey(Address record) {
		return addressMapper.updateByPrimaryKey(record);
	}

	@Override
	public int insertSelective(Address record) {
		return addressMapper.insertSelective(record);
	}

	@Override
	public List<Address> selectByExample(AddressExample example) {
		return  addressMapper.selectByExample(example);
	}

	@Override
	public int updateByPrimaryKeySelective(Address record) {
		return addressMapper.updateByPrimaryKeySelective(record);
	} 

	 

}
