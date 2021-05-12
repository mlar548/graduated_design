package com.gys.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.gys.entity.Logistics;
import com.gys.entity.LogisticsExample;

public interface LogisticsMapper {
	int deleteByPrimaryKey(Integer logisticsId);

	int insert(Logistics record);

	int insertSelective(Logistics record);

	Logistics selectByPrimaryKey(Integer logisticsId);
	
    List<Logistics> selectByExample(LogisticsExample example);


	int updateByPrimaryKeySelective(Logistics record);

	int updateByPrimaryKey(Logistics record);

	Logistics selectLogisticsByPurchaseId(Integer purchaseId);

	Logistics selectLogisticsByOrderId(Integer orderId);

	List<Logistics> selectLogisticsForPurchase();

	List<Logistics> selectLogisticsForOt();

	List<Logistics> selectLogisticsForOrders();


	int getLogPurchaseAllCount();

	List<Logistics> selectLogisticsForPurchasePage(@Param("pageNo") Integer pageNo,
			@Param("pageSize") Integer pageSize);

	int getLogOrdersAllCount();

	List<Logistics> selectLogisticsForOrdersPage(@Param("pageNo") Integer pageNo,
			@Param("pageSize") Integer pageSize);
	
	int getLogOtAllCount();
	
	List<Logistics> selectLogisticsForOtPage(@Param("pageNo") Integer pageNo,
			@Param("pageSize") Integer pageSize);

}