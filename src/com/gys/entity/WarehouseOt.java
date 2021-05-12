package com.gys.entity;

public class WarehouseOt {
    private Integer id;

    private Integer fromWarehouseId;

    private Integer toWarehouseId;

    private Integer goodsId;
    
    private Goods goods;

    private Integer warehouseGoodsQuantity;

    private Integer logisticsName;

    private String otid;

    private String description;

    private String other;
    

    public Goods getGoods() {
		return goods;
	}

	public void setGoods(Goods goods) {
		this.goods = goods;
	}

	public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getFromWarehouseId() {
        return fromWarehouseId;
    }

    public void setFromWarehouseId(Integer fromWarehouseId) {
        this.fromWarehouseId = fromWarehouseId;
    }

    public Integer getToWarehouseId() {
        return toWarehouseId;
    }

    public void setToWarehouseId(Integer toWarehouseId) {
        this.toWarehouseId = toWarehouseId;
    }

    public Integer getGoodsId() {
        return goodsId;
    }

    public void setGoodsId(Integer goodsId) {
        this.goodsId = goodsId;
    }

    public Integer getWarehouseGoodsQuantity() {
        return warehouseGoodsQuantity;
    }

    public void setWarehouseGoodsQuantity(Integer warehouseGoodsQuantity) {
        this.warehouseGoodsQuantity = warehouseGoodsQuantity;
    }

    public Integer getLogisticsName() {
        return logisticsName;
    }

    public void setLogisticsName(Integer logisticsName) {
        this.logisticsName = logisticsName;
    }

    public String getOtid() {
        return otid;
    }

    public void setOtid(String otid) {
        this.otid = otid == null ? null : otid.trim();
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description == null ? null : description.trim();
    }

    public String getOther() {
        return other;
    }

    public void setOther(String other) {
        this.other = other == null ? null : other.trim();
    }

	@Override
	public String toString() {
		return "WarehouseOt [id=" + id + ", fromWarehouseId=" + fromWarehouseId + ", toWarehouseId=" + toWarehouseId
				+ ", goodsId=" + goodsId + ", goods=" + goods + ", warehouseGoodsQuantity=" + warehouseGoodsQuantity
				+ ", logisticsName=" + logisticsName + ", otid=" + otid + ", description=" + description + ", other="
				+ other + "]";
	}


}