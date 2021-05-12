package com.gys.entity;

import java.math.BigDecimal;

public class Trade {
	  private Integer tradeId;

	    private String orderId;

	    private Integer goodsId;

	    private Integer warehouseId;

	    private Integer tradeQuantity;

	    private BigDecimal tradeOnePrice;

	    private BigDecimal tradeAllPrice;

	    private String zt;

	    private String description;

	    private String other;

	    private BigDecimal oldOnePrice;

	    private BigDecimal oldAllPrice;
	    
	    private Goods goods;
	    
	    private Integer lastQuantity;
	    
	    

		public Integer getLastQuantity() {
			return lastQuantity;
		}

		public void setLastQuantity(Integer lastQuantity) {
			this.lastQuantity = lastQuantity;
		}

		public Goods getGoods() {
			return goods;
		}

		public void setGoods(Goods goods) {
			this.goods = goods;
		}

		public Integer getTradeId() {
			return tradeId;
		}

		public void setTradeId(Integer tradeId) {
			this.tradeId = tradeId;
		}

		public String getOrderId() {
			return orderId;
		}

		public void setOrderId(String orderId) {
			this.orderId = orderId;
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

		public Integer getTradeQuantity() {
			return tradeQuantity;
		}

		public void setTradeQuantity(Integer tradeQuantity) {
			this.tradeQuantity = tradeQuantity;
		}

		public BigDecimal getTradeOnePrice() {
			return tradeOnePrice;
		}

		public void setTradeOnePrice(BigDecimal tradeOnePrice) {
			this.tradeOnePrice = tradeOnePrice;
		}

		public BigDecimal getTradeAllPrice() {
			return tradeAllPrice;
		}

		public void setTradeAllPrice(BigDecimal tradeAllPrice) {
			this.tradeAllPrice = tradeAllPrice;
		}

		public String getZt() {
			return zt;
		}

		public void setZt(String zt) {
			this.zt = zt;
		}

		public String getDescription() {
			return description;
		}

		public void setDescription(String description) {
			this.description = description;
		}

		public String getOther() {
			return other;
		}

		public void setOther(String other) {
			this.other = other;
		}

		public BigDecimal getOldOnePrice() {
			return oldOnePrice;
		}

		public void setOldOnePrice(BigDecimal oldOnePrice) {
			this.oldOnePrice = oldOnePrice;
		}

		public BigDecimal getOldAllPrice() {
			return oldAllPrice;
		}

		public void setOldAllPrice(BigDecimal oldAllPrice) {
			this.oldAllPrice = oldAllPrice;
		}

		@Override
		public String toString() {
			return "Trade [tradeId=" + tradeId + ", orderId=" + orderId + ", goodsId=" + goodsId + ", warehouseId="
					+ warehouseId + ", tradeQuantity=" + tradeQuantity + ", tradeOnePrice=" + tradeOnePrice
					+ ", tradeAllPrice=" + tradeAllPrice + ", zt=" + zt + ", description=" + description + ", other="
					+ other + ", oldOnePrice=" + oldOnePrice + ", oldAllPrice=" + oldAllPrice + ", goods=" + goods
					+ "]";
		}



    
   
}