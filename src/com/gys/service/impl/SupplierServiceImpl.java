package com.gys.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.gys.dao.SupplierMapper;
import com.gys.entity.Supplier;
import com.gys.entity.SupplierExample;
import com.gys.service.SupplierService;
@Service
@Transactional
public class SupplierServiceImpl implements SupplierService {

@Autowired
SupplierMapper supplierMapper;
	
	@Override
	public List<Supplier> selectSupplier() {
		// TODO Auto-generated method stub
		return this.supplierMapper.selectSupplier();
	}

	@Override
	public void deleteByPrimaryKey(Integer supplierId) {
		this.supplierMapper.deleteByPrimaryKey(supplierId); 
	}

	@Override
	public void insert(Supplier supplier) {
		this.supplierMapper.insert(supplier); 
	}

	@Override
	public Supplier selectByPrimaryKey(Integer supplierId) {
		return this.supplierMapper.selectByPrimaryKey(supplierId);
	}

	@Override
	public int updateByPrimaryKeySelective(Supplier supplier) {
		return this.supplierMapper.updateByPrimaryKeySelective(supplier); 
	}

	@Override
	public List<Supplier> selectSupplierPage(Integer pageNo, Integer pageSize) {
		pageNo = (pageNo-1)*pageSize;
		return this.supplierMapper.selectSupplierPage(  pageNo,   pageSize);
	}

	@Override
	public int getAllCount() {
		return this.supplierMapper.getAllCount();
	}

	@Override
	public List<Supplier> selectByExample(SupplierExample example) {
		return this.supplierMapper.selectByExample(example);
	}

}
