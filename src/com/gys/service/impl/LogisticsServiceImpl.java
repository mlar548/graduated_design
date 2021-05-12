package com.gys.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.gys.dao.LogisticsMapper;
import com.gys.entity.Logistics;
import com.gys.entity.LogisticsExample;
import com.gys.service.LogisticsService;

@Service
@Transactional
public class LogisticsServiceImpl implements LogisticsService {
	@Autowired
	private LogisticsMapper logisticsMapper;

	@Override
	public void insertSelective(Logistics logistics) {
		this.logisticsMapper.insertSelective(logistics);
	}

	@Override
	public int updateByPrimaryKeySelective(Logistics logistics) {
		return this.logisticsMapper.updateByPrimaryKeySelective(logistics);
	}

	@Override
	public Logistics selectLogisticsByPurchaseId(Integer purchaseId) {
		return this.logisticsMapper.selectLogisticsByPurchaseId(purchaseId);
	}

	@Override
	public Logistics selectLogisticsByOrderId(Integer orderId) {
		return this.logisticsMapper.selectLogisticsByOrderId(orderId);
	}

	@Override
	public List<Logistics> selectLogisticsForPurchase() {
		return this.logisticsMapper.selectLogisticsForPurchase();
	}

	@Override
	public List<Logistics> selectLogisticsForOrders() {
		return this.logisticsMapper.selectLogisticsForOrders();
	}

	@Override
	public List<Logistics> selectLogisticsForOt() {
		return this.logisticsMapper.selectLogisticsForOt();
	}

	@Override
	public Logistics selectByPrimaryKey(Integer logisticsId) {
		return this.logisticsMapper.selectByPrimaryKey(logisticsId);
	}

	@Override
	public int getLogPurchaseAllCount() {
		return this.logisticsMapper.getLogPurchaseAllCount();
	}

	@Override
	public List<Logistics> selectLogisticsForPurchasePage(Integer pageNo, Integer pageSize) {
		pageNo = (pageNo - 1) * pageSize;
		return this.logisticsMapper.selectLogisticsForPurchasePage(pageNo, pageSize);
	}

	@Override
	public List<Logistics> selectLogisticsForOrdersPage(Integer pageNo, Integer pageSize) {
		pageNo = (pageNo - 1) * pageSize;
		return this.logisticsMapper.selectLogisticsForOrdersPage(pageNo, pageSize);
	}

	@Override
	public int getLogOrdersAllCount() {
		return  this.logisticsMapper.getLogOrdersAllCount();
	}

	@Override
	public int getLogOtAllCount() {
		return this.logisticsMapper.getLogOtAllCount();
	}

	@Override
	public List<Logistics> selectLogisticsForOtPage(Integer pageNo, Integer pageSize) {
		pageNo = (pageNo - 1) * pageSize;
		return this.logisticsMapper.selectLogisticsForOtPage(pageNo, pageSize);
	}

	@Override
	public List<Logistics> selectByExample(LogisticsExample example) {
		return this.logisticsMapper.selectByExample(example);
	}
 
}
