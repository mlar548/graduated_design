package com.gys.service;

import java.util.List;

import com.gys.entity.Goods;
import com.gys.entity.GoodsExample;

/**
 * 这个是Goods的service接口
 * 
 * @author wzg
 *
 */
public interface GoodsService {
//    查询所有商品
	public List<Goods> selectGoods();

	public void insert(Goods good);

	public Goods selectByPrimaryKey(Integer goodsId);

	public void updateByPrimaryKeySelective(Goods good);

	public void deleteByPrimaryKey(Integer goodsId);

	public List<Goods> selectGoodsPage(Integer pageNo, Integer pageSize);

	public int getAllCount();

	public List<Goods> selectGoodsBySupplierId(Integer supplierId);

	public List<Goods> findGoodsList(String goodsname);

	public List<Goods> selectByExample(GoodsExample goodsExample);

}
