package com.gys.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.gys.dao.AllWarehouseOtMapper;
import com.gys.dao.LogisticsInformationMapper;
import com.gys.dao.LogisticsMapper;
import com.gys.dao.OrdersMapper;
import com.gys.dao.PurchaseMapper;
import com.gys.dao.WarehouseGoodsMapper;
import com.gys.entity.AllWarehouseOt;
import com.gys.entity.AllWarehouseOtExample;
import com.gys.entity.Logistics;
import com.gys.entity.LogisticsInformation;
import com.gys.entity.Orders;
import com.gys.entity.OrdersExample;
import com.gys.entity.Purchase;
import com.gys.entity.PurchaseExample;
import com.gys.entity.PurchaseExample.Criteria;
import com.gys.entity.Purchasetrade;
import com.gys.entity.Warehouse;
import com.gys.entity.WarehouseGoods;
import com.gys.entity.WarehouseGoodsExample;
import com.gys.entity.WarehouseOt;
import com.gys.service.LogisticsInformationService;

@Service
@Transactional
public class LogisticsInformationServiceImpl implements LogisticsInformationService {
	@Autowired
	private LogisticsInformationMapper logisticsInformationMapper;
	@Autowired
	private LogisticsMapper logisticsMapper;
	@Autowired
	private PurchaseMapper purchaseMapper;
	@Autowired
	private WarehouseGoodsMapper warehouseGoodsMapper;
	@Autowired
	private AllWarehouseOtMapper allWarehouseOtMapper;
	@Autowired
	private OrdersMapper ordersMapper;

	@Override
	public List<LogisticsInformation> selectlogisticsInformationBylogisticsId(Integer logisticsId) {
		return this.logisticsInformationMapper.selectlogisticsInformationBylogisticsId(logisticsId);
	}

	@Override
	public void insertSelective(LogisticsInformation logisticsInformation) {
		this.logisticsInformationMapper.insertSelective(logisticsInformation);
	}
//已到达的事件处理
	@Override
	public void changeThings(Logistics logistics) {
		// 物流状态改为1
		// Logistics logistics = logisticsService.selectByPrimaryKey(ltId);
		// Logistics logistics2 = new Logistics();
		// logistics2.setLogisticsId(ltId);
		  logistics.setStatus(1);
		logisticsMapper.updateByPrimaryKeySelective(logistics);
		// // --
		// // 判断是什么物流类型，做什么类型的处理
	 
		Integer type = logistics.getType();

		if (type == 1) {// 客户物流
			System.out.println("客户");
			// 修改purchase状态
			String orderId = logistics.getOrderId();
			OrdersExample example = new OrdersExample();
			  com.gys.entity.OrdersExample.Criteria criteria = example.createCriteria();
			criteria.andOrderIdEqualTo(orderId);
			List<Orders> selectByExample = ordersMapper.selectByExample(example);
			Orders order = selectByExample.get(0);
			order.setZt("订单已完成");
			ordersMapper.updateByPrimaryKeySelective(order);
		} else if (type == 2) {// 调拨
			System.out.println("调拨");
			  
			 
			    String otid = logistics.getOtid();
			    AllWarehouseOtExample example = new AllWarehouseOtExample();
				 
				com.gys.entity.AllWarehouseOtExample.Criteria criteria = example.createCriteria();
				criteria.andOtidEqualTo(otid);
				
				List<AllWarehouseOt> selectByExample = allWarehouseOtMapper.selectByExample(example);
				 AllWarehouseOt allWarehouseOt = selectByExample.get(0);
				 allWarehouseOt.setZt("已完成调拨");
				 allWarehouseOtMapper.updateByPrimaryKeySelective(allWarehouseOt);
				// 仓库添加商品
				 
				 Integer warehouseId = allWarehouseOt.getToWarehouse().getWarehouseId();
				 

				  List<WarehouseOt> warehouseOtList = allWarehouseOt.getWarehouseOtList();
				  
				for (WarehouseOt warehouseOt  : warehouseOtList) {//遍历采购明细表
					System.out.println("LogService遍历");
					
					Integer goodsId = warehouseOt.getGoods().getGoodsId();
					System.out.println("goodsId"+goodsId);
					Integer quantity = warehouseOt.getWarehouseGoodsQuantity();
					System.out.println("quantity"+quantity);
					//查询该仓库是否有该商品
					WarehouseGoodsExample example2 = new WarehouseGoodsExample();
					com.gys.entity.WarehouseGoodsExample.Criteria criteria2 = example2.createCriteria();
					criteria2.andGoodsIdEqualTo(goodsId);
					criteria2.andWarehouseIdEqualTo(warehouseId); 
					List<WarehouseGoods> selectByExample2 = warehouseGoodsMapper.selectByExample(example2);
					if (selectByExample2.isEmpty() || selectByExample2 == null) {// 该仓库没有
						System.out.println("LogService该仓库没有");
						WarehouseGoods warehouseGoods = new WarehouseGoods();
						warehouseGoods.setGoodsId(goodsId);
						warehouseGoods.setWarehouseGoodsQuantity(quantity);
						warehouseGoods.setWarehouseId(warehouseId);
						warehouseGoodsMapper.insertSelective(warehouseGoods);
					} else {// 该仓库有
						System.out.println("LogService该仓库有");
						warehouseGoodsMapper.updateUpWarehouseGoods(warehouseId, goodsId, quantity);
					}
				}
			
			
		} else if (type == 3) {// 采购
			System.out.println("采购");
			// 修改purchase状态
			String purchaseId = logistics.getPurchaseId();
			PurchaseExample example = new PurchaseExample();
			Criteria criteria = example.createCriteria();
			criteria.andPurchaseIdEqualTo(purchaseId);
			List<Purchase> selectByExample = purchaseMapper.selectByExample(example);
			Purchase purchase = selectByExample.get(0);
			purchase.setStatus("已完成采购");
			purchaseMapper.updateByPrimaryKeySelective(purchase);
			// 仓库添加商品
			Warehouse warehouse = purchase.getWarehouse();

			List<Purchasetrade> purchasetradeList = purchase.getPurchasetrade();
			for (Purchasetrade purchasetrade : purchasetradeList) {//遍历采购明细表
				System.out.println("LogService遍历");
				
				Integer goodsId = purchasetrade.getGoods().getGoodsId();
				System.out.println("goodsId"+goodsId);
				Integer quantity = purchasetrade.getQuantity();
				System.out.println("quantity"+quantity);
				//查询该仓库是否有该商品
				WarehouseGoodsExample example2 = new WarehouseGoodsExample();
				com.gys.entity.WarehouseGoodsExample.Criteria criteria2 = example2.createCriteria();
				criteria2.andGoodsIdEqualTo(goodsId);
				criteria2.andWarehouseIdEqualTo(warehouse.getWarehouseId()); 
				List<WarehouseGoods> selectByExample2 = warehouseGoodsMapper.selectByExample(example2);
				if (selectByExample2.isEmpty() || selectByExample2 == null) {// 该仓库没有
					System.out.println("LogService该仓库没有");
					WarehouseGoods warehouseGoods = new WarehouseGoods();
					warehouseGoods.setGoodsId(goodsId);
					warehouseGoods.setWarehouseGoodsQuantity(quantity);
					warehouseGoods.setWarehouseId(warehouse.getWarehouseId());
					warehouseGoodsMapper.insertSelective(warehouseGoods);
				} else {// 该仓库有
					System.out.println("LogService该仓库有");
					warehouseGoodsMapper.updateUpWarehouseGoods(warehouse.getWarehouseId(), goodsId, quantity);
				}
			}

		}
		// Integer fromWarehouseId = logistics.getFromWarehouseId();
		// Integer toWarehouseId = logistics.getToWarehouseId();
		// // 此处修改过 System.out.println("----->purchaseId:" + purchaseId);
		// System.out.println("----->fromWarehouseId:" + fromWarehouseId);
		// System.out.println("----->toWarehouseId:" + toWarehouseId);
		// 此处修改过 if (purchaseId != null) {
		// 此处修改过 System.out.println("purchaseId!=null");
		// 此处修改过 Purchase purchase = purchaseService.selectByPrimaryKey(purchaseId);
		/*
		 * 此处修改
		 */
		/*
		 * warehouseGoodsService.updateUpWarehouseGoods(purchase.getWarehouseId(),
		 * purchase.getGoodsId(), purchase.getPurchaseQuantity());
		 */
		// 此处修改过 }
		// 此处修改过 if (fromWarehouseId != null && toWarehouseId != null) {
		// 此处修改过 WarehouseOt warehouseOt = warehouseOtService
		// 此处修改过 .selectwarehouseOtByFromWarehouseIdToWarehouseId(fromWarehouseId,
		// toWarehouseId);

		// 此处修改过
		// warehouseGoodsService.updateUpWarehouseGoods(warehouseOt.getToWarehouseId(),
		// warehouseOt.getGoodsId(),
		// 此处修改过 warehouseOt.getWarehouseGoodsQuantity());
		// 此处修改过 System.out.println("fromWarehouseId!=null&&toWarehouseId!=null");
		// 此处修改过 }
		// --

	}

}
