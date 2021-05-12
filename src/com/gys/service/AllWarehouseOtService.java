package com.gys.service;

import java.util.List;

import com.gys.entity.AllWarehouseOt;
import com.gys.entity.AllWarehouseOtExample;

public interface AllWarehouseOtService {

	 List<AllWarehouseOt> selectByExample(AllWarehouseOtExample example);

	 AllWarehouseOt selectByPrimaryKey(Integer id);
 

}
