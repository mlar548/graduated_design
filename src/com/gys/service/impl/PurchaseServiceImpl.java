package com.gys.service.impl;

import java.math.BigDecimal;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.gys.dao.LogisticsMapper;
import com.gys.dao.PurchaseMapper;
import com.gys.dao.PurchasetradeMapper;
import com.gys.entity.Logistics;
import com.gys.entity.Purchase;
import com.gys.entity.PurchaseExample;
import com.gys.entity.Purchasetrade;
import com.gys.service.PurchaseService;

/**
 * PurchaseService实现类
 * 
 * @author wzg
 *
 */
@Service
@Transactional
public class PurchaseServiceImpl implements PurchaseService {

	@Autowired
	PurchaseMapper purchaseMapper;
	
	@Autowired
	PurchasetradeMapper purchasetradeMapper;
	
	@Autowired
	LogisticsMapper logisticsMapper;

	@Override
	public List<Purchase> selectPurchase() {
		 
		return this.purchaseMapper.selectPurchase();
	}

	@Override
	public void insertSelective(Purchase purchase) {
		this.purchaseMapper.insertSelective(purchase);
	}

	@Override
	public List<Purchase> selectPurchasePending(Integer pageNo, Integer pageSize) {
		pageNo = (pageNo - 1) * pageSize;
		return purchaseMapper.selectPurchasePending(pageNo, pageSize);
	}

	@Override
	public Purchase selectByPrimaryKey(Integer purchaseId) {
		return purchaseMapper.selectByPrimaryKey(purchaseId);
	}

	@Override
	public void updateByPrimaryKeySelective(Purchase purchase) {
		this.purchaseMapper.updateByPrimaryKeySelective(purchase);
	}

	@Override
	public void deleteByPrimaryKey(Integer purchaseId) {
		this.purchaseMapper.deleteByPrimaryKey(purchaseId);
	}

	@Override
	public void insertPurchase(Purchase purchase) {
		this.purchaseMapper.insertPurchase(purchase);
	}

	@Override
	public List<Purchase> selectPurchasePage(Integer pageNo, Integer pageSize) {
		pageNo = (pageNo - 1) * pageSize;
		return this.purchaseMapper.selectPurchasePage(pageNo, pageSize);
	}

	@Override
	public int getAllCount() {
		return this.purchaseMapper.getAllCount();
	}

	@Override
	public int getAllCountPeng() {
		return this.purchaseMapper.getAllCountPeng();
	}
////插入采购信息到purchase和purchasetrade中
	@Override
	public int createPurchase(Purchase purchase) {
		purchase.setStatus("待审核");
		
		 
			List<Purchasetrade> purchasetradeList = purchase.getPurchasetrade();
			BigDecimal num=new  BigDecimal(0);
			for (Purchasetrade purchasetrade : purchasetradeList) {
				
				BigDecimal onePrice = purchasetrade.getOnePrice();
				
				Integer quantity = purchasetrade.getQuantity();
				BigDecimal b = new BigDecimal(quantity);
				BigDecimal multiply = onePrice.multiply(b);
				num=num.add(multiply);
		 
				
				purchasetrade.setAllPrice(multiply); 
				
				purchasetradeMapper.insertSelective(purchasetrade);
				 
			}
			purchase.setPurchasePrice(num);
			int result = purchaseMapper.insertSelective(purchase);
	
		if(result!=0) {
			return 1;
		}
		return 0;
	}
//审核通过
	@Override
	public int passPurchaseAndLog(Purchase purchase) {
		
		//生成物流信息
		Logistics logistics = new Logistics();
		 
		logistics.setLogisticsName("顺丰快递");
		logistics.setType(3);
		logistics.setStatus(0);
		logistics.setPurchaseId(purchase.getPurchaseId());
		 logisticsMapper.insertSelective(logistics);
		
		//修改purchase的状态，将生成的logisticsId插到purchase中
		purchase.setStatus("已审核");
		purchase.setLogisticsId(logistics.getLogisticsId());
		if(purchase.getDescription().equals("")||purchase.getDescription()==null) {
			purchase.setDescription("无");
		}
		int result = purchaseMapper.updateByPrimaryKeySelective(purchase);
		 
		return result;
	}

	@Override
	public int notPassPurchaseAndLog(Purchase purchase) {
		purchase.setStatus("不通过");
		int result =purchaseMapper.updateByPrimaryKeySelective(purchase);
		return result;
	}

	@Override
	public List<Purchase> selectByExample(PurchaseExample example) {
		 
		return this.purchaseMapper.selectByExample(example);
	}

	@Override
	public void updatePurchaseAndTradeByPrimaryKeySelective(Purchase purchase) {
		
		 List<Purchasetrade> purchasetradeList = purchase.getPurchasetrade();
		 BigDecimal num=new  BigDecimal(0);
		 for (Purchasetrade purchasetrade : purchasetradeList) {
			    BigDecimal onePrice = purchasetrade.getOnePrice();
				
				Integer quantity = purchasetrade.getQuantity();
				BigDecimal b = new BigDecimal(quantity);
				BigDecimal multiply = onePrice.multiply(b);
				num=num.add(multiply);
		 
				purchasetrade.setAllPrice(multiply); 
				purchasetrade.setPurchaseId(purchase.getPurchaseId()); 
				purchasetradeMapper.updateByPrimaryKey(purchasetrade);
				 
			}
		 purchase.setPurchasePrice(num);
		 purchase.setStatus("待审核");
		 purchase.setOther("");
		 purchaseMapper.updateByPrimaryKeySelective(purchase);
	}

}
