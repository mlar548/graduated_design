package com.gys.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.gys.dao.LogisticsMapper;
import com.gys.dao.OrdersMapper;
import com.gys.dao.WarehouseGoodsMapper;
import com.gys.entity.Logistics;
import com.gys.entity.Orders;
import com.gys.entity.OrdersExample;
import com.gys.entity.Trade;
import com.gys.service.OrdersService;
/**
 * OrdersService实现类
 * @author wzg
 *
 */
@Service
@Transactional
public class OrdersServiceImpl implements OrdersService {



	@Autowired
	OrdersMapper ordersmapper;
	
	@Autowired
	LogisticsMapper logisticsMapper;
	
	@Autowired
	WarehouseGoodsMapper warehouseGoodsMapper;

	@Override
	public List<Orders> selectOrders() {
		// TODO Auto-generated method stub
		return this.ordersmapper.selectOrders();
	}

	@Override
	public List<Orders> selectOrdersPending() {
		return this.ordersmapper.selectOrdersPending();
	}

	@Override
	public void updateByPrimaryKeySelective(Orders orders) {
		this.ordersmapper.updateByPrimaryKeySelective(orders);
	}

	@Override
	public List<Orders> selectOrdersBylogisticsIdis0(Integer pageNo, Integer pageSize) {
		pageNo = (pageNo - 1) * pageSize;
		return this.ordersmapper.selectOrdersBylogisticsIdis0(  pageNo,   pageSize);
	}

	@Override
	public void updateByPrimaryKeySelectiveTime(Orders orders) {
		this.ordersmapper.updateByPrimaryKeySelectiveTime(orders);		
	}

	@Override
	public Orders selectByPrimaryKey(Integer orderId) {
		return ordersmapper.selectByPrimaryKey(orderId);
	}

	@Override
	public int getAllCount() {
		return this.ordersmapper.getAllCount();
	}
	@Override
	public int getAllCountPend() {
		return this.ordersmapper.getAllCountPend();
	}

	@Override
	public List<Orders> selectOrdersPage(Integer pageNo, Integer pageSize) {
		pageNo = (pageNo - 1) * pageSize;
		return  this.ordersmapper.selectOrdersPage(  pageNo,   pageSize);
	}

	@Override
	public List<Orders> selectByExample(OrdersExample example) {
		return ordersmapper.selectByExample( example);
	}

	@Override
	public int passOrderAndLog(Orders order) {
	        
		System.out.println("仓库商品数量改变");
		  
 
		  order.setZt("已完成");
		  ordersmapper.updateByPrimaryKeySelective(order);
		// 仓库添加商品
		 
		 Integer warehouseId = order.getWarehouse().getWarehouseId();
		 

		  List<Trade> tradeList = order.getTradeList();
		  
		for (Trade trade  : tradeList) {//遍历采购明细表
			System.out.println("OrderSercvice遍历");
			
			Integer goodsId = trade.getGoods().getGoodsId();
			System.out.println("goodsId"+goodsId);
			Integer quantity = trade.getTradeQuantity();
			System.out.println("quantity"+quantity);
			 
		 System.out.println("OrderSercvice该仓库有");
		 warehouseGoodsMapper.updateFromWarehouseGoods(warehouseId, goodsId, quantity);
			 
		}
		
		
		
		
		//生成物流信息
				Logistics logistics = new Logistics();
//				String logisticsName = purchase.getSupplier().getLogisticsCompany().getLogisticsName();
 				logistics.setLogisticsName("顺丰快递");
 				logistics.setType(1);
 				logistics.setStatus(0);
 				 
  				logistics.setOrderId(order.getOrderId());
 				logisticsMapper.insertSelective(logistics);
 			
 				//修改order的状态，将生成的logisticsId插到order中
 				order.setZt("已确认");
 				order.setLogisticsId(logistics.getLogisticsId());
 				int result = ordersmapper.updateByPrimaryKeySelective(order);
//				 
//		
		return result;
	}

	 
}
