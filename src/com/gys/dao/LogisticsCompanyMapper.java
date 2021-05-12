package com.gys.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.gys.entity.LogisticsCompany;

public interface LogisticsCompanyMapper {
	int deleteByPrimaryKey(Integer id);

	int insert(LogisticsCompany record);

	int insertSelective(LogisticsCompany record);

	LogisticsCompany selectByPrimaryKey(Integer id);

	int updateByPrimaryKeySelective(LogisticsCompany record);

	int updateByPrimaryKey(LogisticsCompany record);

	List<LogisticsCompany> selectLogisticsCompany();

	List<LogisticsCompany> selectLogisticsCompanyPage(@Param("pageNo") Integer pageNo,
			@Param("pageSize") Integer pageSize);

	int getLogisticsCompanyAllCount();
}