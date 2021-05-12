package com.gys.entity;

import java.math.BigDecimal;

public class GoodsGwc {

	private Goods goods;
	
	private Integer num;
	
	private BigDecimal price;
	
	 private BigDecimal allPrice; 
	 
	 

 	public BigDecimal getPrice() {
		return price;
	}

	public void setPrice(BigDecimal price) {
		this.price = price;
	}

	public BigDecimal getAllPrice() {
		return allPrice;
	}

	public void setAllPrice(BigDecimal allPrice) {
		this.allPrice = allPrice;
	}

	public Goods getGoods() {
		return goods;
	}

	public void setGoods(Goods goods) {
		this.goods = goods;
	}

	public Integer getNum() {
		return num;
	}

	public void setNum(Integer num) {
		this.num = num;
	}

	@Override
	public String toString() {
		return "GoodsGwc [goods=" + goods + ", num=" + num + ", price=" + price + ", allPrice=" + allPrice + "]";
	}

	 
	

	
	
}
