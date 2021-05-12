package com.gys.service;

import java.util.List;

import com.gys.entity.Purchase;
import com.gys.entity.PurchaseExample;

/**
 * 这个是Purchase接口
 * @author wzg
 *
 */
public interface PurchaseService {
//查询所有采购信息
	List<Purchase> selectPurchase();

	void insertSelective(Purchase purchase);
	//查询待处理采购信息
	List<Purchase> selectPurchasePending(Integer pageNo,Integer pageSize);
	//通过purchaseId查询待处理采购信息
	Purchase selectByPrimaryKey(Integer purchaseId);

	void updateByPrimaryKeySelective(Purchase purchase);

	void deleteByPrimaryKey(Integer purchaseId);

	void insertPurchase(Purchase purchase);

	List<Purchase> selectPurchasePage(Integer pageNo, Integer pageSize);

	  List<Purchase> selectByExample(PurchaseExample example);
	
	int getAllCount();

	int getAllCountPeng();
//插入采购信息到purchase和purchasetrade中
	int createPurchase(Purchase purchase);

	int passPurchaseAndLog(Purchase purchase);

	int notPassPurchaseAndLog(Purchase purchase);

	void updatePurchaseAndTradeByPrimaryKeySelective(Purchase purchase);
}
