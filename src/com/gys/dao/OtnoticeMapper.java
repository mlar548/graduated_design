package com.gys.dao;

import com.gys.entity.Otnotice;
import com.gys.entity.OtnoticeExample;
import java.util.List;

public interface OtnoticeMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(Otnotice record);

    int insertSelective(Otnotice record);

    List<Otnotice> selectByExample(OtnoticeExample example);

    Otnotice selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(Otnotice record);

    int updateByPrimaryKey(Otnotice record);
}