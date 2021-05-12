package com.gys.dao;

import java.util.List;

import com.gys.entity.LogisticsInformation;

public interface LogisticsInformationMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(LogisticsInformation record);

    int insertSelective(LogisticsInformation record);

    LogisticsInformation selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(LogisticsInformation record);

    int updateByPrimaryKey(LogisticsInformation record);

	List<LogisticsInformation> selectlogisticsInformationBylogisticsId(Integer logisticsId);
}