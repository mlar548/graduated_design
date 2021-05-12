package com.gys.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.gys.entity.Warehouse;

public interface WarehouseMapper {
	int deleteByPrimaryKey(Integer warehouseId);

	int insert(Warehouse record);

	int insertSelective(Warehouse record);

	Warehouse selectByPrimaryKey(Integer warehouseId);

	int updateByPrimaryKeySelective(Warehouse record);

	int updateByPrimaryKey(Warehouse record);

	List<Warehouse> selectWarehouse();

	List<Warehouse> selectWarehouseAndCapacity();

	List<Warehouse> selectByOrderId(Integer orderId);

	List<Warehouse> selectWarehouseByGoodsId(Integer goodsId);

	int getAllCount();

	List<Warehouse> selectWarehouseAndCapacityPage(@Param("pageNo") Integer pageNo,
			@Param("pageSize") Integer pageSize);
}