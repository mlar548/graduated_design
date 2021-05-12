package com.gys.service;

import java.util.List;

import com.gys.entity.GoodsType;
import com.gys.entity.GoodsTypeExample;

/**
 * 这个是Goods的service接口
 * 
 * @author wzg
 *
 */
public interface GoodsTypeService {

	public List<GoodsType> selectGoodsType();
 
	List<GoodsType> selectByExample(GoodsTypeExample example);
}
