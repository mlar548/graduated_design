package com.gys.service;

import java.util.List;

import com.gys.entity.UserMessage;
import com.gys.entity.UserMessageExample;

public interface UserMessageService {
	List<UserMessage> selectByExample(UserMessageExample example);

    

	 int insertSelective(UserMessage record);
}
