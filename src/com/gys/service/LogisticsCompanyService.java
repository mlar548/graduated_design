package com.gys.service;

import java.util.List;

import com.gys.entity.LogisticsCompany;

/**
 * 这个是LogisticsCompany的service接口
 * 
 * @author wzg
 *
 */
public interface LogisticsCompanyService {

	public List<LogisticsCompany> selectLogisticsCompany();

	LogisticsCompany selectByPrimaryKey(Integer id);

	void updateByPrimaryKeySelective(LogisticsCompany logisticsCompany);

	public int getLogisticsCompanyAllCount();

	public List<LogisticsCompany> selectLogisticsCompanyPage(Integer pageNo, Integer pageSize);
 
 

}
