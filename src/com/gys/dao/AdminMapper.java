package com.gys.dao;

import org.apache.ibatis.annotations.Param;

import com.gys.entity.Admin;

public interface AdminMapper {
    int deleteByPrimaryKey(Integer adminId);

    int insert(Admin record);

    int insertSelective(Admin record);

    Admin selectByPrimaryKey(Integer adminId);

    int updateByPrimaryKeySelective(Admin record);

    int updateByPrimaryKey(Admin record);

	Admin login(@Param("adminId")Integer adminId, @Param("adminPassword")String adminPassword);
}