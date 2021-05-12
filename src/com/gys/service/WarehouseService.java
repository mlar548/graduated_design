package com.gys.service;

import java.util.List;

import com.gys.entity.Warehouse;

/**
 * 这个是Warehouse的service接口
 * 
 * @author wzg
 *
 */
public interface WarehouseService {

//  查询所有仓库
	public List<Warehouse> selectWarehouse();

	public List<Warehouse> selectWarehouseAndCapacity();

	public Warehouse selectByPrimaryKey(Integer warehouseId);

	public void updateByPrimaryKeySelective(Warehouse warehouse);

	public List<Warehouse> selectByOrderId(Integer orderId);

	public List<Warehouse> selectWarehouseByGoodsId(Integer goodsId);

	public List<Warehouse> selectWarehouseAndCapacityPage(Integer pageNo, Integer pageSize);

	public int getAllCount();

	public int readAndInsToOtnotice(Integer tradeId,Integer userId, Integer warehouseLastNum, Integer warehouseId);

 

}
