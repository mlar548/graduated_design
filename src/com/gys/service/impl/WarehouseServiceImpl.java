package com.gys.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.gys.dao.OtnoticeMapper;
import com.gys.dao.WarehouseMapper;
import com.gys.entity.Otnotice;
import com.gys.entity.OtnoticeExample;
import com.gys.entity.OtnoticeExample.Criteria;
import com.gys.entity.Warehouse;
import com.gys.service.WarehouseService;

/**
 * WarehouseService实现类
 * 
 * @author wzg
 *
 */
@Service
@Transactional
public class WarehouseServiceImpl implements WarehouseService {

	@Autowired
	WarehouseMapper warehouseMapper;
	 
	
	@Autowired
	private OtnoticeMapper otnoticeMapper;

	@Override
	public List<Warehouse> selectWarehouse() {
		return this.warehouseMapper.selectWarehouse();
	}

	@Override
	public List<Warehouse> selectWarehouseAndCapacity() {
		return this.warehouseMapper.selectWarehouseAndCapacity();
	}

	@Override
	public Warehouse selectByPrimaryKey(Integer warehouseId) {
		return this.warehouseMapper.selectByPrimaryKey(warehouseId);
	}

	@Override
	public void updateByPrimaryKeySelective(Warehouse warehouse) {
		this.warehouseMapper.updateByPrimaryKeySelective(warehouse);
	}

	@Override
	public List<Warehouse> selectByOrderId(Integer orderId) {
		return this.warehouseMapper.selectByOrderId(orderId);
	}

	@Override
	public List<Warehouse> selectWarehouseByGoodsId(Integer goodsId) {
		return this.warehouseMapper.selectWarehouseByGoodsId(goodsId);
	}

	@Override
	public List<Warehouse> selectWarehouseAndCapacityPage(Integer pageNo, Integer pageSize) {
		pageNo = (pageNo - 1) * pageSize;
		return this.warehouseMapper.selectWarehouseAndCapacityPage(pageNo, pageSize);
	}

	@Override
	public int getAllCount() {
		return this.warehouseMapper.getAllCount();
	}

	@Override
	public int readAndInsToOtnotice(Integer tradeId ,Integer userId, Integer warehouseLastNum, Integer warehouseId) {
	
		OtnoticeExample otnoticeExample  =new OtnoticeExample();
		Criteria criteria = otnoticeExample.createCriteria();
		criteria.andTradeIdEqualTo(tradeId);
		List<Otnotice> otnotice = otnoticeMapper.selectByExample(otnoticeExample);
		if(otnotice.isEmpty()) {
			Otnotice otntice= new Otnotice(userId, "未读", null, tradeId, warehouseLastNum, warehouseId);
			int result = otnoticeMapper.insertSelective(otntice);
			return result;
		}
		
		return 0;
	}

}
