package com.gys.service.impl;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.gys.dao.CitiesMapper;
import com.gys.entity.Cities;
import com.gys.service.CitiesService;
/**
 * CitiesService实现类
 * @author wzg
 *
 */
@Service
@Transactional
public class CitiesServiceImpl implements CitiesService {



	@Autowired
	CitiesMapper citiesMapper;

	@Override
	public List<Cities> selectCities() {
		return this.citiesMapper.selectCities();
	}

	@Override
	public List<Cities> selectCitiesListByProvinces(String warehouseProvince) {
		return this.citiesMapper.selectCitiesListByProvinces(warehouseProvince);
	} 

	 

	
}
