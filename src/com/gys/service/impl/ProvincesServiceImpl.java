package com.gys.service.impl;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.gys.dao.ProvincesMapper;
import com.gys.entity.Provinces;
import com.gys.service.ProvincesService;
/**
 * ProvincesService实现类
 * @author wzg
 *
 */
@Service
@Transactional
public class ProvincesServiceImpl implements ProvincesService {



	@Autowired
	ProvincesMapper provincesMapper;

	@Override
	public List<Provinces> selectProvinces() {
		return this.provincesMapper.selectProvinces(); 
	}

	 

	
}
