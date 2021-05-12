package com.gys.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.gys.dao.UserMessageMapper;
import com.gys.entity.UserMessage;
import com.gys.entity.UserMessageExample;
import com.gys.service.UserMessageService;

@Service
@Transactional
public class UserMessageServiceImpl implements UserMessageService {
    @Autowired
	private UserMessageMapper userMessageMapper;
	
	@Override
	public List<UserMessage> selectByExample(UserMessageExample example) {
		return userMessageMapper.selectByExample(example);
	}

	@Override
	public int insertSelective(UserMessage record) {
		return userMessageMapper.insertSelective(record);
	}

	 

}
