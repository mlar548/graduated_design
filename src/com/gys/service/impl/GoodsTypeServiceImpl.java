package com.gys.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.gys.dao.GoodsTypeMapper;
import com.gys.entity.GoodsType;
import com.gys.entity.GoodsTypeExample;
import com.gys.service.GoodsTypeService;
/**
 * GoodsTypeService实现类
 * @author wzg
 *
 */
@Service
@Transactional
public class GoodsTypeServiceImpl implements GoodsTypeService {
	
	@Autowired
	GoodsTypeMapper goodsTypeMapper;

	@Override
	public List<GoodsType> selectGoodsType() {
		// TODO Auto-generated method stub
		return this.goodsTypeMapper.selectGoodsType();
	}

	@Override
	public List<GoodsType> selectByExample(GoodsTypeExample example) {
		return this.goodsTypeMapper.selectByExample(example);
	}
	
	
}
