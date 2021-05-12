package com.gys.dao;

import com.gys.entity.UserMessage;
import com.gys.entity.UserMessageExample;
import java.util.List;

public interface UserMessageMapper {
    int deleteByPrimaryKey(Integer userMessageId);

    int insert(UserMessage record);

    int insertSelective(UserMessage record);

    List<UserMessage> selectByExample(UserMessageExample example);

    UserMessage selectByPrimaryKey(Integer userMessageId);

    int updateByPrimaryKeySelective(UserMessage record);

    int updateByPrimaryKey(UserMessage record);
}