package com.gys.dao;

import java.util.List;

import com.gys.entity.Provinces;
import com.gys.entity.ProvincesExample;

public interface ProvincesMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(Provinces record);

    int insertSelective(Provinces record);

    Provinces selectByPrimaryKey(Integer id);
    
    List<Provinces> selectByExample(ProvincesExample example);

    int updateByPrimaryKeySelective(Provinces record);

    int updateByPrimaryKey(Provinces record);

	List<Provinces> selectProvinces();
}