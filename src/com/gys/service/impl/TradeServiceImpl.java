package com.gys.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.gys.dao.TradeMapper;
import com.gys.entity.Trade;
import com.gys.entity.TradeExample;
import com.gys.service.TradeService;
@Service
@Transactional
public class TradeServiceImpl implements TradeService {
	@Autowired
	private TradeMapper tradeMapper;

	@Override
	public List<Trade> selectTradeByOrderId(Integer orderId) {
		// TODO Auto-generated method stub
		return this.tradeMapper.selectTradeByOrderId(orderId);
	}

	@Override
	public List<Trade> selectByExample(TradeExample example) {
		return this.tradeMapper.selectByExample(example);
	}

 

	 
}
