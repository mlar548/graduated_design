package com.gys.service;

import java.util.List;

import com.gys.entity.Otnotice;
import com.gys.entity.OtnoticeExample;

/**
 * 这个是Trade 的service接口
 * 
 * @author wzg
 *
 */
public interface OtnoticeService {

	List<Otnotice> selectByExample(OtnoticeExample example);
 
	int updateByPrimaryKeySelective(Otnotice record);

}
