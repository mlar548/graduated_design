package com.gys.entity;

import java.math.BigDecimal;

public class Goods {
    private Integer goodsId;

    private String goodsName;

    private Integer goodsTypeId;
    
    private GoodsType goodsType;

    private Integer supplierId;
    
    private Supplier supplier;

    private String title;

    private String goodsPhoto;

    private BigDecimal price;

    private BigDecimal beforeprice;

    private String unit;

    private Integer remain;

    private String introduce;

    private Integer goodsCapacity;

    private Integer leastNum;

    private Integer secondNum;

    private BigDecimal secondPrice;

    private Integer thirdNum;

    private BigDecimal thirdPrice;
    
//    多表查询
    
    private String supplierName;
    
    public Integer getLeastNum() {
		return leastNum;
	}

	public void setLeastNum(Integer leastNum) {
		this.leastNum = leastNum;
	}

	public Integer getSecondNum() {
		return secondNum;
	}

	public void setSecondNum(Integer secondNum) {
		this.secondNum = secondNum;
	}

	public BigDecimal getSecondPrice() {
		return secondPrice;
	}

	public void setSecondPrice(BigDecimal secondPrice) {
		this.secondPrice = secondPrice;
	}

	public Integer getThirdNum() {
		return thirdNum;
	}

	public void setThirdNum(Integer thirdNum) {
		this.thirdNum = thirdNum;
	}
	
	

	public GoodsType getGoodsType() {
		return goodsType;
	}

	public void setGoodsType(GoodsType goodsType) {
		this.goodsType = goodsType;
	}

	public Supplier getSupplier() {
		return supplier;
	}

	public void setSupplier(Supplier supplier) {
		this.supplier = supplier;
	}

	public BigDecimal getThirdPrice() {
		return thirdPrice;
	}

	public void setThirdPrice(BigDecimal thirdPrice) {
		this.thirdPrice = thirdPrice;
	}

	private String goodsTypeName;
    
    
    
    
    public String getSupplierName() {
		return supplierName;
	}

	public void setSupplierName(String supplierName) {
		this.supplierName = supplierName;
	}

	public String getGoodsTypeName() {
		return goodsTypeName;
	}

	public void setGoodsTypeName(String goodsTypeName) {
		this.goodsTypeName = goodsTypeName;
	}

	public Integer getGoodsId() {
        return goodsId;
    }

    public void setGoodsId(Integer goodsId) {
        this.goodsId = goodsId;
    }

    public String getGoodsName() {
        return goodsName;
    }

    public void setGoodsName(String goodsName) {
        this.goodsName = goodsName == null ? null : goodsName.trim();
    }

    public Integer getGoodsTypeId() {
        return goodsTypeId;
    }

    public void setGoodsTypeId(Integer goodsTypeId) {
        this.goodsTypeId = goodsTypeId;
    }

    public Integer getSupplierId() {
        return supplierId;
    }

    public void setSupplierId(Integer supplierId) {
        this.supplierId = supplierId;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title == null ? null : title.trim();
    }

    public String getGoodsPhoto() {
        return goodsPhoto;
    }

    public void setGoodsPhoto(String goodsPhoto) {
        this.goodsPhoto = goodsPhoto == null ? null : goodsPhoto.trim();
    }

    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }

    public BigDecimal getBeforeprice() {
        return beforeprice;
    }

    public void setBeforeprice(BigDecimal beforeprice) {
        this.beforeprice = beforeprice;
    }

    public String getUnit() {
        return unit;
    }

    public void setUnit(String unit) {
        this.unit = unit == null ? null : unit.trim();
    }

    public Integer getRemain() {
        return remain;
    }

    public void setRemain(Integer remain) {
        this.remain = remain;
    }

    public String getIntroduce() {
        return introduce;
    }

    public void setIntroduce(String introduce) {
        this.introduce = introduce == null ? null : introduce.trim();
    }

    public Integer getGoodsCapacity() {
        return goodsCapacity;
    }

    public void setGoodsCapacity(Integer goodsCapacity) {
        this.goodsCapacity = goodsCapacity;
    }

	@Override
	public String toString() {
		return "Goods [goodsId=" + goodsId + ", goodsName=" + goodsName + ", goodsTypeId=" + goodsTypeId
				+ ", supplierId=" + supplierId + ", title=" + title + ", goodsPhoto=" + goodsPhoto + ", price=" + price
				+ ", beforeprice=" + beforeprice + ", unit=" + unit + ", remain=" + remain + ", introduce=" + introduce
				+ ", goodsCapacity=" + goodsCapacity + ", leastNum=" + leastNum + ", secondNum=" + secondNum
				+ ", secondPrice=" + secondPrice + ", thirdNum=" + thirdNum + ", thirdPrice=" + thirdPrice
				+ ", supplierName=" + supplierName + ", goodsTypeName=" + goodsTypeName + "]";
	}
    
}