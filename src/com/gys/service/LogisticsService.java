package com.gys.service;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.gys.entity.Logistics;
import com.gys.entity.LogisticsExample;

/**
 * 这个是Logistics的service接口
 * 
 * @author wzg
 *
 */
public interface LogisticsService {

	void insertSelective(Logistics logistics);

	int updateByPrimaryKeySelective(Logistics logistics);

	Logistics selectLogisticsByPurchaseId(Integer purchaseId);
	
	 List<Logistics> selectByExample(LogisticsExample example);

	Logistics selectLogisticsByOrderId(Integer orderId);

	List<Logistics> selectLogisticsForPurchase();

	List<Logistics> selectLogisticsForOrders();

	List<Logistics> selectLogisticsForOt();

	Logistics selectByPrimaryKey(Integer logisticsId);

	// 分页

	int getLogPurchaseAllCount();

	List<Logistics> selectLogisticsForPurchasePage(Integer pageNo, Integer pageSize);

	List<Logistics> selectLogisticsForOrdersPage(Integer pageNo, Integer pageSize);

	int getLogOrdersAllCount();

	int getLogOtAllCount();

	List<Logistics> selectLogisticsForOtPage(Integer pageNo, Integer pageSize);

	// end分页

}
