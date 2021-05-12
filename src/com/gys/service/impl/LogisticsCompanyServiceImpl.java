package com.gys.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.gys.dao.LogisticsCompanyMapper;
import com.gys.entity.LogisticsCompany;
import com.gys.service.LogisticsCompanyService;
@Service
@Transactional
public class LogisticsCompanyServiceImpl implements LogisticsCompanyService {
	@Autowired
	private LogisticsCompanyMapper logisticsCompanyMapper;

	@Override
	public List<LogisticsCompany> selectLogisticsCompany() {
		return this.logisticsCompanyMapper.selectLogisticsCompany();
	}

	@Override
	public LogisticsCompany selectByPrimaryKey(Integer id) {
		return this.logisticsCompanyMapper.selectByPrimaryKey(id);
	}

	@Override
	public void updateByPrimaryKeySelective(LogisticsCompany logisticsCompany) {
		this.logisticsCompanyMapper.updateByPrimaryKeySelective(logisticsCompany);
	}

	@Override
	public int getLogisticsCompanyAllCount() {
		return this.logisticsCompanyMapper.getLogisticsCompanyAllCount();
	}

	@Override
	public List<LogisticsCompany> selectLogisticsCompanyPage(Integer pageNo, Integer pageSize) {
		pageNo = (pageNo - 1) * pageSize;
		return this.logisticsCompanyMapper.selectLogisticsCompanyPage( pageNo,  pageSize);
	}

 
 
}
