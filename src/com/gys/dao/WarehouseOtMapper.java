package com.gys.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.gys.entity.Trade;
import com.gys.entity.TradeExample;
import com.gys.entity.WarehouseOt;

public interface WarehouseOtMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(WarehouseOt record);

    int insertSelective(WarehouseOt record);

    WarehouseOt selectByPrimaryKey(Integer id);
    
    List<Trade> selectByExample(TradeExample example);
    
    List<Trade> selectByOtid(String otid);

    int updateByPrimaryKeySelective(WarehouseOt record);

    int updateByPrimaryKey(WarehouseOt record);

	WarehouseOt selectwarehouseOtByFromWarehouseIdToWarehouseId(@Param("fromWarehouseId")Integer fromWarehouseId, @Param("toWarehouseId")Integer toWarehouseId);
}