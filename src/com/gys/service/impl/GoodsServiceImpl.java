package com.gys.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.gys.dao.GoodsMapper;
import com.gys.entity.Goods;
import com.gys.entity.GoodsExample;
import com.gys.entity.GoodsExample.Criteria;
import com.gys.service.GoodsService;

/**
 * GoodsService实现类
 * 
 * @author wzg
 *
 */
@Service
@Transactional
public class GoodsServiceImpl implements GoodsService {

	@Autowired
	GoodsMapper goodsMapper;

	@Override
	public List<Goods> selectGoods() {
		return this.goodsMapper.selectGoods();
	}

	@Override
	public void insert(Goods good) {
		this.goodsMapper.insert(good);
	}

	@Override
	public Goods selectByPrimaryKey(Integer goodsId) {
		return this.goodsMapper.selectByPrimaryKey(goodsId);
	}

	@Override
	public void updateByPrimaryKeySelective(Goods good) {
		this.goodsMapper.updateByPrimaryKeySelective(good);
	}

	@Override
	public void deleteByPrimaryKey(Integer goodsId) {
		this.goodsMapper.deleteByPrimaryKey(goodsId);
	}

	@Override
	public List<Goods> selectGoodsPage(Integer pageNo, Integer pageSize) {
		pageNo = (pageNo-1)*pageSize;
		return this.goodsMapper.selectGoodsPage(pageNo, pageSize);
	}

	@Override
	public int getAllCount() {
		// TODO Auto-generated method stub
		return this.goodsMapper.getAllCount();
	}

	@Override
	public List<Goods> selectGoodsBySupplierId(Integer supplierId) {
		return this.goodsMapper.selectGoodsBySupplierId( supplierId);
	}

	
	/*
	 *按商品名查询商品
	 */
	@Override
	public List<Goods> findGoodsList(String goodsname) {
		GoodsExample example = new GoodsExample();
		Criteria c1 = example.createCriteria();
		c1.andTitleLike("%"+goodsname+"%");
//		c1.andGoodsNameLike("%"+goodsname+"%");
		return goodsMapper.selectByExample(example);
	}

	@Override
	public List<Goods> selectByExample(GoodsExample goodsExample) {
		return goodsMapper.selectByExample(goodsExample);
	}
}
