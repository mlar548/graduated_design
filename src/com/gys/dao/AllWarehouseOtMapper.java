package com.gys.dao;

import com.gys.entity.AllWarehouseOt;
import com.gys.entity.AllWarehouseOtExample;
import java.util.List;

public interface AllWarehouseOtMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(AllWarehouseOt record);

    int insertSelective(AllWarehouseOt record);

    List<AllWarehouseOt> selectByExample(AllWarehouseOtExample example);

    AllWarehouseOt selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(AllWarehouseOt record);

    int updateByPrimaryKey(AllWarehouseOt record);
}