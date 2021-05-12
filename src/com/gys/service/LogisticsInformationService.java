package com.gys.service;

import java.util.List;

import com.gys.entity.Logistics;
import com.gys.entity.LogisticsInformation;

/**
 * 这个是LogisticsInformation的service接口
 * 
 * @author wzg
 *
 */
public interface LogisticsInformationService {

	List<LogisticsInformation> selectlogisticsInformationBylogisticsId(Integer logisticsId);

	void insertSelective(LogisticsInformation logisticsInformation);

	void changeThings(Logistics logistics);

	 

 

}
