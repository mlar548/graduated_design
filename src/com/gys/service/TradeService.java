package com.gys.service;

import java.util.List;

import com.gys.entity.Trade;
import com.gys.entity.TradeExample;

/**
 * 这个是Trade 的service接口
 * 
 * @author wzg
 *
 */
public interface TradeService {

	List<Trade> selectTradeByOrderId(Integer orderId);

	List<Trade> selectByExample(TradeExample example);
 

}
