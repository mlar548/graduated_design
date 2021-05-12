package com.gys.entity;

import java.math.BigDecimal;

public class Purchasetrade {
    private Integer ptid;

    private String purchasetradeId;

    private Goods goods;
    
    private Integer goodsId;

    private Integer quantity;

    private String purchaseId;

    private String zt;

    private String description;

    private BigDecimal onePrice;

    private BigDecimal allPrice;
    
    

    public Integer getGoodsId() {
		return goodsId;
	}

	public void setGoodsId(Integer goodsId) {
		this.goodsId = goodsId;
	}

	public Integer getPtid() {
        return ptid;
    }

    public void setPtid(Integer ptid) {
        this.ptid = ptid;
    }

    public String getPurchasetradeId() {
        return purchasetradeId;
    }

    public void setPurchasetradeId(String purchasetradeId) {
        this.purchasetradeId = purchasetradeId == null ? null : purchasetradeId.trim();
    }

  

    public Goods getGoods() {
		return goods;
	}

	public void setGoods(Goods goods) {
		this.goods = goods;
	}

	public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public String getPurchaseId() {
        return purchaseId;
    }

    public void setPurchaseId(String purchaseId) {
        this.purchaseId = purchaseId == null ? null : purchaseId.trim();
    }

    public String getZt() {
        return zt;
    }

    public void setZt(String zt) {
        this.zt = zt == null ? null : zt.trim();
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description == null ? null : description.trim();
    }

    public BigDecimal getOnePrice() {
        return onePrice;
    }

    public void setOnePrice(BigDecimal onePrice) {
        this.onePrice = onePrice;
    }

    public BigDecimal getAllPrice() {
        return allPrice;
    }

    public void setAllPrice(BigDecimal allPrice) {
        this.allPrice = allPrice;
    }

	@Override
	public String toString() {
		return "Purchasetrade [ptid=" + ptid + ", purchasetradeId=" + purchasetradeId + ", goods=" + goods
				+ ", goodsId=" + goodsId + ", quantity=" + quantity + ", purchaseId=" + purchaseId + ", zt=" + zt
				+ ", description=" + description + ", onePrice=" + onePrice + ", allPrice=" + allPrice + "]";
	}

	
    
}