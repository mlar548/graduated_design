package com.gys.entity;

import java.util.List;

public class GoodsType {
	private Integer goodsTypeId;

	private String goodsTypeName;

	private List<Goods> gtGoodsList;
	
	

	public List<Goods> getGtGoodsList() {
		return gtGoodsList;
	}

	public void setGtGoodsList(List<Goods> gtGoodsList) {
		this.gtGoodsList = gtGoodsList;
	}

	public Integer getGoodsTypeId() {
		return goodsTypeId;
	}

	public void setGoodsTypeId(Integer goodsTypeId) {
		this.goodsTypeId = goodsTypeId;
	}

	public String getGoodsTypeName() {
		return goodsTypeName;
	}

	public void setGoodsTypeName(String goodsTypeName) {
		this.goodsTypeName = goodsTypeName == null ? null : goodsTypeName.trim();
	}

	@Override
	public String toString() {
		return "GoodsType [goodsTypeId=" + goodsTypeId + ", goodsTypeName=" + goodsTypeName + ", gtGoodsList="
				+ gtGoodsList + "]";
	}

	 

}