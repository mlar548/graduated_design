package com.gys.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.gys.dao.AllWarehouseOtMapper;
import com.gys.dao.LogisticsMapper;
import com.gys.dao.WarehouseGoodsMapper;
import com.gys.dao.WarehouseOtMapper;
import com.gys.entity.AllWarehouseOt;
import com.gys.entity.Logistics;
import com.gys.entity.WarehouseOt;
import com.gys.service.WarehouseOtService;

/**
 * WarehouseService实现类
 * 
 * @author wzg
 *
 */
@Service
@Transactional
public class WarehouseOtServiceImpl implements WarehouseOtService {

	@Autowired
	WarehouseOtMapper warehouseOtMapper;
	@Autowired
	AllWarehouseOtMapper allWarehouseOtMapper;
	@Autowired
	LogisticsMapper logisticsMapper;
	@Autowired
	WarehouseGoodsMapper warehouseGoodsMapper;

	@Override
	public int insert(WarehouseOt warehouseOt) {
		return this.warehouseOtMapper.insert(warehouseOt);
	}

	@Override
	public WarehouseOt selectwarehouseOtByFromWarehouseIdToWarehouseId(Integer fromWarehouseId, Integer toWarehouseId) {
		return this.warehouseOtMapper.selectwarehouseOtByFromWarehouseIdToWarehouseId(fromWarehouseId, toWarehouseId);
	}

	@Override
	public int createAllWarehouseOt(AllWarehouseOt allWarehouseOt) {
		/*allWarehouseOt.setZt("待审核");*/
		String otid = allWarehouseOt.getOtid();
		
		//被调拨仓库减少  
		 allWarehouseOt.setZt("调拨中");
		 allWarehouseOtMapper.updateByPrimaryKeySelective(allWarehouseOt);
		// 仓库添加商品
		 
		 Integer warehouseId = allWarehouseOt.getFromWarehouseId();
		 

		  List<WarehouseOt> warehouseOtList2 = allWarehouseOt.getWarehouseOtList();
		  
		for (WarehouseOt warehouseOt  : warehouseOtList2) {//遍历采购明细表
			System.out.println("LogService遍历");
			
			Integer goodsId = warehouseOt.getGoodsId();
			System.out.println("goodsId"+goodsId);
			Integer quantity = warehouseOt.getWarehouseGoodsQuantity();
			System.out.println("quantity"+quantity);
			//查询该仓库是否有该商品
		
			System.out.println("LogService该仓库有");
			warehouseGoodsMapper.updateFromWarehouseGoods (warehouseId, goodsId, quantity);
			 
		}
		//-------------
		
		//生成物流信息
				Logistics logistics = new Logistics();
				 
				logistics.setLogisticsName("顺丰快递");
				logistics.setType(2);
				logistics.setStatus(0);
				logistics.setOtid(otid);
				logisticsMapper.insertSelective(logistics);
				
				//  将生成的logisticsId插到purchase中
				 
				allWarehouseOt.setLogisticsId(logistics.getLogisticsId());
				 
				  allWarehouseOtMapper.updateByPrimaryKeySelective(allWarehouseOt);
		
		
		 List<WarehouseOt> warehouseOtList = allWarehouseOt.getWarehouseOtList();
		for (WarehouseOt warehouseOt : warehouseOtList) {
			
			warehouseOtMapper.insertSelective(warehouseOt);
			 
		}
	 
		int result = allWarehouseOtMapper.insertSelective(allWarehouseOt);

	 
	return result;
	}

	

}
