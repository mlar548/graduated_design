package com.gys.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.gys.dao.OtnoticeMapper;
import com.gys.entity.Otnotice;
import com.gys.entity.OtnoticeExample;
import com.gys.service.OtnoticeService;
@Service
@Transactional
public class OtnoticeServiceImpl implements OtnoticeService {
    @Autowired
	private OtnoticeMapper otnoticeService;
	
	@Override
	public List<Otnotice> selectByExample(OtnoticeExample example) {
		return otnoticeService.selectByExample(example);
	}

	@Override
	public int updateByPrimaryKeySelective(Otnotice record) {
		return otnoticeService.updateByPrimaryKeySelective(record);
	}

}
