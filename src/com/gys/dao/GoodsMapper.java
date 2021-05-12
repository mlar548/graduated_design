package com.gys.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.gys.entity.Goods;
import com.gys.entity.GoodsExample;

public interface GoodsMapper {
    int deleteByPrimaryKey(Integer goodsId);

    int insert(Goods record);

    int insertSelective(Goods record);

    Goods selectByPrimaryKey(Integer goodsId);
    
    List<Goods> selectByExample(GoodsExample example);
    
    List<Goods> selectGoods( );

    int updateByPrimaryKeySelective(Goods record);

    int updateByPrimaryKey(Goods record);

	List<Goods> selectGoodsPage(@Param("pageNo")Integer pageNo, @Param("pageSize")Integer pageSize);

	int getAllCount();

	List<Goods> selectGoodsBySupplierId(Integer supplierId);
}