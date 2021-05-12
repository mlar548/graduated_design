package com.gys.dao;

import java.util.List;

import com.gys.entity.Trade;
import com.gys.entity.TradeExample;

public interface TradeMapper {
    int deleteByPrimaryKey(Integer tradeId);

    int insert(Trade record);

    int insertSelective(Trade record);

    Trade selectByPrimaryKey(Integer tradeId);
    
    Trade selectByoid(String orderId);
    
    List<Trade> selectByExample(TradeExample example);

    int updateByPrimaryKeySelective(Trade record);

    int updateByPrimaryKey(Trade record);

	List<Trade> selectTradeByOrderId(Integer orderId);
}