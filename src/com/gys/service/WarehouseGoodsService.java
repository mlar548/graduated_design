package com.gys.service;


import java.util.List;

import com.gys.entity.WarehouseGoods;
import com.gys.entity.WarehouseGoodsExample;

/**
 * 这个是WarehouseGoods的service接口
 * 
 * @author wzg
 *
 */
public interface WarehouseGoodsService {

	WarehouseGoods selectWarehouseGoodsByGoodsIdWarehouseId(Integer goodsId, Integer warehouseId);

	void insertNew(Integer goodsId, Integer warehouseId);

	List<WarehouseGoods> selectWarehouseGoods(Integer warehouseId);

	List<WarehouseGoods> selectGoodNameByWarehouseId(Integer warehouseId);

	List<WarehouseGoods> selectByExample(WarehouseGoodsExample example);
	
	int updateFromWarehouseGoods(Integer fromWarehouseId, Integer goodsId, Integer warehouseGoodsQuantity);

	int updateUpWarehouseGoods(Integer WarehouseId, Integer goodsId, Integer warehouseGoodsQuantity);
	
	Integer selectQuantityByWarehouseIdGoodsId(Integer goodsId, Integer warehouseId);

	List<WarehouseGoods> selectWarehouseGoodsPage(Integer pageNo, Integer pageSize,Integer warehouseId);

 

	int getAllCount(Integer warehouseId);



 

}
