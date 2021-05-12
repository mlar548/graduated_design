package com.gys.service;

import java.util.List;

import com.gys.entity.Cities;

/**
 * 这个是Cities的service接口
 * 
 * @author wzg
 *
 */
public interface CitiesService {

	public List<Cities> selectCities();

	public List<Cities> selectCitiesListByProvinces(String warehouseProvince);

 

}
