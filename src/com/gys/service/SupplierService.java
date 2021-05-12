package com.gys.service;

import java.util.List;
 
import com.gys.entity.Supplier;
import com.gys.entity.SupplierExample;

/**
 * 这个是Supplier的service接口
 * 
 * @author wzg
 *
 */
public interface SupplierService {
	// 查询所有Supplier
	public List<Supplier> selectSupplier();

	// 删除供应商
	public void deleteByPrimaryKey(Integer supplierId);

	// 添加供应商
	public void insert(Supplier supplier);
	
	int updateByPrimaryKeySelective(Supplier supplier);
	
	Supplier selectByPrimaryKey(Integer supplierId);

	public List<Supplier> selectSupplierPage(Integer pageNo, Integer pageSize);

	public int getAllCount();

	public List<Supplier> selectByExample(SupplierExample supplierExample);
}
