package com.gys.service;

import com.gys.entity.AllWarehouseOt;
import com.gys.entity.WarehouseOt;

/**
 * 这个是WarehouseOt的service接口
 * 
 * @author wzg
 *
 */
public interface WarehouseOtService {
 
	public int insert(WarehouseOt warehouseOt);

	public WarehouseOt selectwarehouseOtByFromWarehouseIdToWarehouseId(Integer fromWarehouseId, Integer toWarehouseId);

	public int createAllWarehouseOt(AllWarehouseOt allWarehouseOt);

}
