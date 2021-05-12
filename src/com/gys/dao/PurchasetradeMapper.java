package com.gys.dao;

import com.gys.entity.Purchasetrade;

public interface PurchasetradeMapper {
    int deleteByPrimaryKey(Integer ptid);

    int insert(Purchasetrade record);

    int insertSelective(Purchasetrade record);

    Purchasetrade selectByPrimaryKey(Integer ptid);

    int updateByPrimaryKeySelective(Purchasetrade record);

    int updateByPrimaryKey(Purchasetrade record);
    
    int selectPurchasetradeByPurchaseId(String PurchaseId);
}