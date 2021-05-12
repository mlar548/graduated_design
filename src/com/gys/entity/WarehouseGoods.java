package com.gys.entity;

public class WarehouseGoods {
    private Integer warehouseGoodsId;

    private Integer goodsId;
    
    private String goodsName;

    private Integer warehouseId;
 
	private Integer usedCapacity;;
    
    private Integer warehouseGoodsQuantity;

    
    
    
    public String getGoodsName() {
		return goodsName;
	}

	public void setGoodsName(String goodsName) {
		this.goodsName = goodsName;
	}

	public Integer getUsedCapacity() {
		return usedCapacity;
	}

	public void setUsedCapacity(Integer usedCapacity) {
		this.usedCapacity = usedCapacity;
	}

	public Integer getWarehouseGoodsId() {
        return warehouseGoodsId;
    }

    public void setWarehouseGoodsId(Integer warehouseGoodsId) {
        this.warehouseGoodsId = warehouseGoodsId;
    }

    public Integer getGoodsId() {
        return goodsId;
    }

    public void setGoodsId(Integer goodsId) {
        this.goodsId = goodsId;
    }

    public Integer getWarehouseId() {
        return warehouseId;
    }

    public void setWarehouseId(Integer warehouseId) {
        this.warehouseId = warehouseId;
    }

    public Integer getWarehouseGoodsQuantity() {
        return warehouseGoodsQuantity;
    }

    public void setWarehouseGoodsQuantity(Integer warehouseGoodsQuantity) {
        this.warehouseGoodsQuantity = warehouseGoodsQuantity;
    }

	@Override
	public String toString() {
		return "WarehouseGoods [warehouseGoodsId=" + warehouseGoodsId + ", goodsId=" + goodsId + ", goodsName="
				+ goodsName + ", warehouseId=" + warehouseId + ", usedCapacity=" + usedCapacity
				+ ", warehouseGoodsQuantity=" + warehouseGoodsQuantity + "]";
	}
    
}