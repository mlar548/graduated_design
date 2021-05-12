package com.gys.entity;

import java.util.List;

public class Warehouse {
	private Integer warehouseId;

	private String warehouseName;

	private String warehouseProvince;

	private String warehouseCity;

	private String warehouseAddress;
	
	
	List<WarehouseGoods> warehouseGoodsList;

	private Integer allCapacity;
	//已用空间
	private Integer usedCapacity;
	//剩余空间
	private Integer lastCapacity;
//	存放多表查询的数据
	private Integer warehouseGoodsQuantity;
 
	
	
	public List<WarehouseGoods> getWarehouseGoodsList() {
		return warehouseGoodsList;
	}

	public void setWarehouseGoodsList(List<WarehouseGoods> warehouseGoodsList) {
		this.warehouseGoodsList = warehouseGoodsList;
	}

	public Integer getWarehouseGoodsQuantity() {
		return warehouseGoodsQuantity;
	}

	public void setWarehouseGoodsQuantity(Integer warehouseGoodsQuantity) {
		this.warehouseGoodsQuantity = warehouseGoodsQuantity;
	}

	public Integer getUsedCapacity() {
		return usedCapacity;
	}

	public void setUsedCapacity(Integer usedCapacity) {
		this.usedCapacity = usedCapacity;
	}

	public Integer getLastCapacity() {
		return lastCapacity;
	}

	public void setLastCapacity(Integer lastCapacity) {
		this.lastCapacity = lastCapacity;
	}

	public Integer getWarehouseId() {
		return warehouseId;
	}

	public void setWarehouseId(Integer warehouseId) {
		this.warehouseId = warehouseId;
	}

	public String getWarehouseName() {
		return warehouseName;
	}

	public void setWarehouseName(String warehouseName) {
		this.warehouseName = warehouseName == null ? null : warehouseName.trim();
	}

	public String getWarehouseProvince() {
		return warehouseProvince;
	}

	public void setWarehouseProvince(String warehouseProvince) {
		this.warehouseProvince = warehouseProvince == null ? null : warehouseProvince.trim();
	}

	public String getWarehouseCity() {
		return warehouseCity;
	}

	public void setWarehouseCity(String warehouseCity) {
		this.warehouseCity = warehouseCity == null ? null : warehouseCity.trim();
	}

	public String getWarehouseAddress() {
		return warehouseAddress;
	}

	public void setWarehouseAddress(String warehouseAddress) {
		this.warehouseAddress = warehouseAddress == null ? null : warehouseAddress.trim();
	}

	public Integer getAllCapacity() {
		return allCapacity;
	}

	public void setAllCapacity(Integer allCapacity) {
		this.allCapacity = allCapacity;
	}

	@Override
	public String toString() {
		return "Warehouse [warehouseId=" + warehouseId + ", warehouseName=" + warehouseName + ", warehouseProvince="
				+ warehouseProvince + ", warehouseCity=" + warehouseCity + ", warehouseAddress=" + warehouseAddress
				+ ", warehouseGoodsList=" + warehouseGoodsList + ", allCapacity=" + allCapacity + ", usedCapacity="
				+ usedCapacity + ", lastCapacity=" + lastCapacity + ", warehouseGoodsQuantity=" + warehouseGoodsQuantity
				+ "]";
	}
	
}