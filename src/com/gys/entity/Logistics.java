package com.gys.entity;

import java.util.Date;

public class Logistics {
    private Integer logisticsId;

    private String logisticsName;

    private Date logisticsTime;

    private String orderId;

    private String purchaseId;

    private Integer fromWarehouseId;

    private Integer toWarehouseId;

    private Integer status;
    
    private Integer type;
    

    private String otid;
  //多表查询
    private String goodsName;
    private Integer purchaseQuantity;
    private Integer userId;

   
    
    public Integer getType() {
		return type;
	}

	public void setType(Integer type) {
		this.type = type;
	}

	public String getOtid() {
		return otid;
	}

	public void setOtid(String otid) {
		this.otid = otid;
	}

	public String getGoodsName() {
		return goodsName;
	}

	public void setGoodsName(String goodsName) {
		this.goodsName = goodsName;
	}

	public Integer getPurchaseQuantity() {
		return purchaseQuantity;
	}

	public void setPurchaseQuantity(Integer purchaseQuantity) {
		this.purchaseQuantity = purchaseQuantity;
	}

	public Integer getUserId() {
		return userId;
	}

	public void setUserId(Integer userId) {
		this.userId = userId;
	}

	public Integer getLogisticsId() {
        return logisticsId;
    }

    public void setLogisticsId(Integer logisticsId) {
        this.logisticsId = logisticsId;
    }

    public String getLogisticsName() {
        return logisticsName;
    }

    public void setLogisticsName(String logisticsName) {
        this.logisticsName = logisticsName == null ? null : logisticsName.trim();
    }

    public Date getLogisticsTime() {
        return logisticsTime;
    }

    public void setLogisticsTime(Date logisticsTime) {
        this.logisticsTime = logisticsTime;
    }

  

   

    public String getOrderId() {
		return orderId;
	}

	public void setOrderId(String orderId) {
		this.orderId = orderId;
	}

	public String getPurchaseId() {
		return purchaseId;
	}

	public void setPurchaseId(String purchaseId) {
		this.purchaseId = purchaseId;
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

    public Integer getStatus() {
        return status;
    }

    public void setStatus(Integer status) {
        this.status = status;
    }

	@Override
	public String toString() {
		return "Logistics [logisticsId=" + logisticsId + ", logisticsName=" + logisticsName + ", logisticsTime="
				+ logisticsTime + ", orderId=" + orderId + ", purchaseId=" + purchaseId + ", fromWarehouseId="
				+ fromWarehouseId + ", toWarehouseId=" + toWarehouseId + ", status=" + status + ", type=" + type
				+ ", otid=" + otid + ", goodsName=" + goodsName + ", purchaseQuantity=" + purchaseQuantity + ", userId="
				+ userId + "]";
	}
 
	 
}