package com.gys.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.gys.dao.WarehouseGoodsMapper;
import com.gys.entity.WarehouseGoods;
import com.gys.entity.WarehouseGoodsExample;
import com.gys.service.WarehouseGoodsService;

/**
 * WarehouseGoodsService实现类
 * 
 * @author wzg
 *
 */
@Service
@Transactional
public class WarehouseGoodsServiceImpl implements WarehouseGoodsService {

	@Autowired
	WarehouseGoodsMapper warehouseGoodsMapper;

	@Override
	public WarehouseGoods selectWarehouseGoodsByGoodsIdWarehouseId(Integer goodsId, Integer warehouseId) {
		return this.warehouseGoodsMapper.selectWarehouseGoodsByGoodsIdWarehouseId(goodsId, warehouseId);
	}

	@Override
	public void insertNew(Integer goodsId, Integer warehouseId) {
		this.warehouseGoodsMapper.insertNew(goodsId, warehouseId);
	}

	@Override
	public List<WarehouseGoods> selectWarehouseGoods(Integer warehouseId) {
		return this.warehouseGoodsMapper.selectWarehouseGoods(warehouseId);
	}

	@Override
	public List<WarehouseGoods> selectGoodNameByWarehouseId(Integer warehouseId) {
		return this.warehouseGoodsMapper.selectGoodNameByWarehouseId(warehouseId);
	}

	@Override
	public int updateFromWarehouseGoods(Integer fromWarehouseId, Integer goodsId, Integer warehouseGoodsQuantity) {
		return this.warehouseGoodsMapper.updateFromWarehouseGoods(fromWarehouseId, goodsId, warehouseGoodsQuantity);
	}

	@Override
	public Integer selectQuantityByWarehouseIdGoodsId(Integer goodsId, Integer warehouseId) {
		return this.warehouseGoodsMapper.selectQuantityByWarehouseIdGoodsId(goodsId, warehouseId);
	}

	@Override
	public int updateUpWarehouseGoods(Integer WarehouseId, Integer goodsId, Integer warehouseGoodsQuantity) {
		return this.warehouseGoodsMapper.updateUpWarehouseGoods(WarehouseId, goodsId, warehouseGoodsQuantity);
	}

	@Override
	public List<WarehouseGoods> selectWarehouseGoodsPage(Integer pageNo, Integer pageSize,Integer warehouseId) {
		pageNo = (pageNo - 1) * pageSize;
		return this.warehouseGoodsMapper.selectWarehouseGoodsPage(pageNo, pageSize,warehouseId);
	}

	@Override
	public int getAllCount(Integer warehouseId) {
		return this.warehouseGoodsMapper.getAllCount(warehouseId);
	}

	@Override
	public List<WarehouseGoods> selectByExample(WarehouseGoodsExample example) {
		return  this.warehouseGoodsMapper.selectByExample(example);
	}

}
