package com.gys.service;

import java.util.List;

import com.gys.entity.Orders;
import com.gys.entity.OrdersExample;
import com.gys.entity.Purchase;

/**
 * 这个是Orders的service接口
 * 
 * @author wzg
 *
 */
public interface OrdersService {

	List<Orders> selectOrders();

	List<Orders> selectOrdersPending();

	void updateByPrimaryKeySelective(Orders orders);

	 

	List<Orders> selectOrdersBylogisticsIdis0(Integer pageNo, Integer pageSize);

	void updateByPrimaryKeySelectiveTime(Orders orders);

	Orders selectByPrimaryKey(Integer orderId);

	List<Orders> selectOrdersPage(Integer pageNo, Integer pageSize);

	int getAllCount();

	int getAllCountPend();

	List<Orders> selectByExample(OrdersExample example);

	int passOrderAndLog(Orders order);
 

}
