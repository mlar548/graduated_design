package com.gys.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.gys.entity.Supplier;
import com.gys.entity.SupplierExample;

public interface SupplierMapper {
	int deleteByPrimaryKey(Integer supplierId);

	// 添加供应商
	int insert(Supplier supplier);

	int insertSelective(Supplier record);

	List<Supplier> selectByExample(SupplierExample example);

	
	Supplier selectByPrimaryKey(Integer supplierId);

	int updateByPrimaryKeySelective(Supplier supplier);

	int updateByPrimaryKey(Supplier record);

	// 查询所有Supplier
	List<Supplier> selectSupplier();

	List<Supplier> selectSupplierPage(@Param("pageNo")Integer pageNo, @Param("pageSize")Integer pageSize);

	int getAllCount();

}