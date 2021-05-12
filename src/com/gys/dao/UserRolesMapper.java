package com.gys.dao;

import com.gys.entity.UserRoles;
import com.gys.entity.UserRolesExample;
import java.util.List;

public interface UserRolesMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(UserRoles record);

    int insertSelective(UserRoles record);

    List<UserRoles> selectByExample(UserRolesExample example);

    UserRoles selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(UserRoles record);

    int updateByPrimaryKey(UserRoles record);
}