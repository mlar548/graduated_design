package com.gys.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.gys.entity.Purchase;
import com.gys.entity.PurchaseExample;

public interface PurchaseMapper {
    int deleteByPrimaryKey(Integer purchaseId);

    int insert(Purchase record);

    int insertSelective(Purchase record);

    Purchase selectByPrimaryKey(Integer purchaseId);

    int updateByPrimaryKeySelective(Purchase record);
    
    List<Purchase> selectByExample(PurchaseExample example);

    int updateByPrimaryKey(Purchase record);
  //查询所有采购信息
	List<Purchase> selectPurchase();

	List<Purchase> selectPurchasePending(@Param("pageNo")Integer pageNo, @Param("pageSize")Integer pageSize);

	void insertPurchase(Purchase purchase);

	List<Purchase> selectPurchasePage(@Param("pageNo")Integer pageNo, @Param("pageSize")Integer pageSize);

	int getAllCount();
	
	int getAllCountPeng();
	
	 
}