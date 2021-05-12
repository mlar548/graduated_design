package com.gys.dao;

import java.util.List;

import com.gys.entity.Cities;

public interface CitiesMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(Cities record);

    int insertSelective(Cities record);

    Cities selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(Cities record);

    int updateByPrimaryKey(Cities record); 

	List<Cities> selectCities();

	List<Cities> selectCitiesListByProvinces(String warehouseProvince);
}