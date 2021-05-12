package com.gys.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.gys.entity.WarehouseGoods;
import com.gys.entity.WarehouseGoodsExample;

public interface WarehouseGoodsMapper {
	int deleteByPrimaryKey(Integer warehouseGoodsId);

	int insert(WarehouseGoods record);

	int insertSelective(WarehouseGoods record);

	WarehouseGoods selectByPrimaryKey(Integer warehouseGoodsId);

	List<WarehouseGoods> selectByExample(WarehouseGoodsExample example);

	int updateByPrimaryKeySelective(WarehouseGoods record);

	int updateByPrimaryKey(WarehouseGoods record);

	WarehouseGoods selectWarehouseGoodsByGoodsIdWarehouseId(@Param("goodsId") Integer goodsId,
			@Param("warehouseId") Integer warehouseId);

	void insertNew(@Param("goodsId") Integer goodsId, @Param("warehouseId") Integer warehouseId);

	List<WarehouseGoods> selectWarehouseGoods(Integer warehouseId);

	List<WarehouseGoods> selectByWarehouseId(Integer warehouseId);

	List<WarehouseGoods> selectGoodNameByWarehouseId(Integer warehouseId);

	int updateFromWarehouseGoods(@Param("warehouseId") Integer fromWarehouseId, @Param("goodsId") Integer goodsId,
			@Param("warehouseGoodsQuantity") Integer warehouseGoodsQuantity);

	int updateUpWarehouseGoods(@Param("warehouseId") Integer WarehouseId, @Param("goodsId") Integer goodsId,
			@Param("warehouseGoodsQuantity") Integer warehouseGoodsQuantity);

	Integer selectQuantityByWarehouseIdGoodsId(@Param("goodsId") Integer goodsId,
			@Param("warehouseId") Integer warehouseId);

	List<WarehouseGoods> selectWarehouseGoodsPage(@Param("pageNo") Integer pageNo, @Param("pageSize") Integer pageSize,
			@Param("warehouseId") Integer warehouseId);

	int getAllCount(Integer warehouseId);
}