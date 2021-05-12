package com.gys.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.gys.dao.AllWarehouseOtMapper;
import com.gys.entity.AllWarehouseOt;
import com.gys.entity.AllWarehouseOtExample;
import com.gys.service.AllWarehouseOtService;
@Service
@Transactional
public class AllWarehouseOtServiceImpl implements AllWarehouseOtService {

	@Autowired
	AllWarehouseOtMapper allWarehouseOtMapper;
	
	@Override
	public List<AllWarehouseOt> selectByExample(AllWarehouseOtExample example) {
		return allWarehouseOtMapper.selectByExample(example);
	}

	@Override
	public AllWarehouseOt selectByPrimaryKey(Integer id) {
		return  allWarehouseOtMapper.selectByPrimaryKey(id);
	}

}
