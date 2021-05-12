package com.gys.dao;

import java.util.List;

import com.gys.entity.Goods;
import com.gys.entity.GoodsType;
import com.gys.entity.GoodsTypeExample;

public interface GoodsTypeMapper {
    int deleteByPrimaryKey(Integer goodsTypeId);

    int insert(GoodsType record);

    List<Goods> findGoodsList(Integer goodsTypeId);
    
    int insertSelective(GoodsType record);
    
    List<GoodsType> selectByExample(GoodsTypeExample example);

    GoodsType selectByPrimaryKey(Integer goodsTypeId);

    int updateByPrimaryKeySelective(GoodsType record);

    int updateByPrimaryKey(GoodsType record);

	List<GoodsType> selectGoodsType();
}