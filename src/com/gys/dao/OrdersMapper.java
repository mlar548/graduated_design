package com.gys.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.gys.entity.Orders;
import com.gys.entity.OrdersExample;
import com.gys.entity.Purchase;

public interface OrdersMapper {
    int deleteByPrimaryKey(Integer orderId);

    int insert(Orders record);

    int insertSelective(Orders record);

    Orders selectByPrimaryKey(Integer orderId);
    
    List<Orders> selectByExample(OrdersExample example);

    int updateByPrimaryKeySelective(Orders record);

    int updateByPrimaryKey(Orders record);

	List<Orders> selectOrders();

	List<Orders> selectOrdersPending();

	List<Orders> selectOrdersBylogisticsIdis0(@Param("pageNo")Integer pageNo,@Param("pageSize") Integer pageSize);

	void updateByPrimaryKeySelectiveTime(Orders orders); 

	List<Orders> selectOrdersPage(@Param("pageNo")Integer pageNo,@Param("pageSize") Integer pageSize);

	int getAllCount(); 
	
	int getAllCountPend(); 
}