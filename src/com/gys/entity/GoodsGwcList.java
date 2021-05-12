package com.gys.entity;

import java.math.BigDecimal;
import java.util.List;

public class GoodsGwcList {
        List<GoodsGwc> goodsGwcList;
        BigDecimal zongjiaPrice;
  
        
        
		public BigDecimal getZongjiaPrice() {
			return zongjiaPrice;
		}

		public void setZongjiaPrice(BigDecimal zongjiaPrice) {
			this.zongjiaPrice = zongjiaPrice;
		}

		public List<GoodsGwc> getGoodsGwcList() {
			return goodsGwcList;
		}

		public void setGoodsGwcList(List<GoodsGwc> goodsGwcList) {
			this.goodsGwcList = goodsGwcList;
		}

		@Override
		public String toString() {
			return "GoodsGwcList [goodsGwcList=" + goodsGwcList + ", zongjiaPrice=" + zongjiaPrice + "]";
		}

		
		 
}
