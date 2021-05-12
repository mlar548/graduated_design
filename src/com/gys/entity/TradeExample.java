package com.gys.entity;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

public class TradeExample {
    protected String orderByClause;

    protected boolean distinct;

    protected List<Criteria> oredCriteria;

    public TradeExample() {
        oredCriteria = new ArrayList<Criteria>();
    }

    public void setOrderByClause(String orderByClause) {
        this.orderByClause = orderByClause;
    }

    public String getOrderByClause() {
        return orderByClause;
    }

    public void setDistinct(boolean distinct) {
        this.distinct = distinct;
    }

    public boolean isDistinct() {
        return distinct;
    }

    public List<Criteria> getOredCriteria() {
        return oredCriteria;
    }

    public void or(Criteria criteria) {
        oredCriteria.add(criteria);
    }

    public Criteria or() {
        Criteria criteria = createCriteriaInternal();
        oredCriteria.add(criteria);
        return criteria;
    }

    public Criteria createCriteria() {
        Criteria criteria = createCriteriaInternal();
        if (oredCriteria.size() == 0) {
            oredCriteria.add(criteria);
        }
        return criteria;
    }

    protected Criteria createCriteriaInternal() {
        Criteria criteria = new Criteria();
        return criteria;
    }

    public void clear() {
        oredCriteria.clear();
        orderByClause = null;
        distinct = false;
    }

    protected abstract static class GeneratedCriteria {
        protected List<Criterion> criteria;

        protected GeneratedCriteria() {
            super();
            criteria = new ArrayList<Criterion>();
        }

        public boolean isValid() {
            return criteria.size() > 0;
        }

        public List<Criterion> getAllCriteria() {
            return criteria;
        }

        public List<Criterion> getCriteria() {
            return criteria;
        }

        protected void addCriterion(String condition) {
            if (condition == null) {
                throw new RuntimeException("Value for condition cannot be null");
            }
            criteria.add(new Criterion(condition));
        }

        protected void addCriterion(String condition, Object value, String property) {
            if (value == null) {
                throw new RuntimeException("Value for " + property + " cannot be null");
            }
            criteria.add(new Criterion(condition, value));
        }

        protected void addCriterion(String condition, Object value1, Object value2, String property) {
            if (value1 == null || value2 == null) {
                throw new RuntimeException("Between values for " + property + " cannot be null");
            }
            criteria.add(new Criterion(condition, value1, value2));
        }

        public Criteria andTradeIdIsNull() {
            addCriterion("trade_id is null");
            return (Criteria) this;
        }

        public Criteria andTradeIdIsNotNull() {
            addCriterion("trade_id is not null");
            return (Criteria) this;
        }

        public Criteria andTradeIdEqualTo(Integer value) {
            addCriterion("trade_id =", value, "tradeId");
            return (Criteria) this;
        }

        public Criteria andTradeIdNotEqualTo(Integer value) {
            addCriterion("trade_id <>", value, "tradeId");
            return (Criteria) this;
        }

        public Criteria andTradeIdGreaterThan(Integer value) {
            addCriterion("trade_id >", value, "tradeId");
            return (Criteria) this;
        }

        public Criteria andTradeIdGreaterThanOrEqualTo(Integer value) {
            addCriterion("trade_id >=", value, "tradeId");
            return (Criteria) this;
        }

        public Criteria andTradeIdLessThan(Integer value) {
            addCriterion("trade_id <", value, "tradeId");
            return (Criteria) this;
        }

        public Criteria andTradeIdLessThanOrEqualTo(Integer value) {
            addCriterion("trade_id <=", value, "tradeId");
            return (Criteria) this;
        }

        public Criteria andTradeIdIn(List<Integer> values) {
            addCriterion("trade_id in", values, "tradeId");
            return (Criteria) this;
        }

        public Criteria andTradeIdNotIn(List<Integer> values) {
            addCriterion("trade_id not in", values, "tradeId");
            return (Criteria) this;
        }

        public Criteria andTradeIdBetween(Integer value1, Integer value2) {
            addCriterion("trade_id between", value1, value2, "tradeId");
            return (Criteria) this;
        }

        public Criteria andTradeIdNotBetween(Integer value1, Integer value2) {
            addCriterion("trade_id not between", value1, value2, "tradeId");
            return (Criteria) this;
        }

        public Criteria andOrderIdIsNull() {
            addCriterion("order_id is null");
            return (Criteria) this;
        }

        public Criteria andOrderIdIsNotNull() {
            addCriterion("order_id is not null");
            return (Criteria) this;
        }

        public Criteria andOrderIdEqualTo(String value) {
            addCriterion("order_id =", value, "orderId");
            return (Criteria) this;
        }

        public Criteria andOrderIdNotEqualTo(String value) {
            addCriterion("order_id <>", value, "orderId");
            return (Criteria) this;
        }

        public Criteria andOrderIdGreaterThan(String value) {
            addCriterion("order_id >", value, "orderId");
            return (Criteria) this;
        }

        public Criteria andOrderIdGreaterThanOrEqualTo(String value) {
            addCriterion("order_id >=", value, "orderId");
            return (Criteria) this;
        }

        public Criteria andOrderIdLessThan(String value) {
            addCriterion("order_id <", value, "orderId");
            return (Criteria) this;
        }

        public Criteria andOrderIdLessThanOrEqualTo(String value) {
            addCriterion("order_id <=", value, "orderId");
            return (Criteria) this;
        }

        public Criteria andOrderIdLike(String value) {
            addCriterion("order_id like", value, "orderId");
            return (Criteria) this;
        }

        public Criteria andOrderIdNotLike(String value) {
            addCriterion("order_id not like", value, "orderId");
            return (Criteria) this;
        }

        public Criteria andOrderIdIn(List<String> values) {
            addCriterion("order_id in", values, "orderId");
            return (Criteria) this;
        }

        public Criteria andOrderIdNotIn(List<String> values) {
            addCriterion("order_id not in", values, "orderId");
            return (Criteria) this;
        }

        public Criteria andOrderIdBetween(String value1, String value2) {
            addCriterion("order_id between", value1, value2, "orderId");
            return (Criteria) this;
        }

        public Criteria andOrderIdNotBetween(String value1, String value2) {
            addCriterion("order_id not between", value1, value2, "orderId");
            return (Criteria) this;
        }

        public Criteria andGoodsIdIsNull() {
            addCriterion("goods_id is null");
            return (Criteria) this;
        }

        public Criteria andGoodsIdIsNotNull() {
            addCriterion("goods_id is not null");
            return (Criteria) this;
        }

        public Criteria andGoodsIdEqualTo(Integer value) {
            addCriterion("goods_id =", value, "goodsId");
            return (Criteria) this;
        }

        public Criteria andGoodsIdNotEqualTo(Integer value) {
            addCriterion("goods_id <>", value, "goodsId");
            return (Criteria) this;
        }

        public Criteria andGoodsIdGreaterThan(Integer value) {
            addCriterion("goods_id >", value, "goodsId");
            return (Criteria) this;
        }

        public Criteria andGoodsIdGreaterThanOrEqualTo(Integer value) {
            addCriterion("goods_id >=", value, "goodsId");
            return (Criteria) this;
        }

        public Criteria andGoodsIdLessThan(Integer value) {
            addCriterion("goods_id <", value, "goodsId");
            return (Criteria) this;
        }

        public Criteria andGoodsIdLessThanOrEqualTo(Integer value) {
            addCriterion("goods_id <=", value, "goodsId");
            return (Criteria) this;
        }

        public Criteria andGoodsIdIn(List<Integer> values) {
            addCriterion("goods_id in", values, "goodsId");
            return (Criteria) this;
        }

        public Criteria andGoodsIdNotIn(List<Integer> values) {
            addCriterion("goods_id not in", values, "goodsId");
            return (Criteria) this;
        }

        public Criteria andGoodsIdBetween(Integer value1, Integer value2) {
            addCriterion("goods_id between", value1, value2, "goodsId");
            return (Criteria) this;
        }

        public Criteria andGoodsIdNotBetween(Integer value1, Integer value2) {
            addCriterion("goods_id not between", value1, value2, "goodsId");
            return (Criteria) this;
        }

        public Criteria andWarehouseIdIsNull() {
            addCriterion("warehouse_id is null");
            return (Criteria) this;
        }

        public Criteria andWarehouseIdIsNotNull() {
            addCriterion("warehouse_id is not null");
            return (Criteria) this;
        }

        public Criteria andWarehouseIdEqualTo(Integer value) {
            addCriterion("warehouse_id =", value, "warehouseId");
            return (Criteria) this;
        }

        public Criteria andWarehouseIdNotEqualTo(Integer value) {
            addCriterion("warehouse_id <>", value, "warehouseId");
            return (Criteria) this;
        }

        public Criteria andWarehouseIdGreaterThan(Integer value) {
            addCriterion("warehouse_id >", value, "warehouseId");
            return (Criteria) this;
        }

        public Criteria andWarehouseIdGreaterThanOrEqualTo(Integer value) {
            addCriterion("warehouse_id >=", value, "warehouseId");
            return (Criteria) this;
        }

        public Criteria andWarehouseIdLessThan(Integer value) {
            addCriterion("warehouse_id <", value, "warehouseId");
            return (Criteria) this;
        }

        public Criteria andWarehouseIdLessThanOrEqualTo(Integer value) {
            addCriterion("warehouse_id <=", value, "warehouseId");
            return (Criteria) this;
        }

        public Criteria andWarehouseIdIn(List<Integer> values) {
            addCriterion("warehouse_id in", values, "warehouseId");
            return (Criteria) this;
        }

        public Criteria andWarehouseIdNotIn(List<Integer> values) {
            addCriterion("warehouse_id not in", values, "warehouseId");
            return (Criteria) this;
        }

        public Criteria andWarehouseIdBetween(Integer value1, Integer value2) {
            addCriterion("warehouse_id between", value1, value2, "warehouseId");
            return (Criteria) this;
        }

        public Criteria andWarehouseIdNotBetween(Integer value1, Integer value2) {
            addCriterion("warehouse_id not between", value1, value2, "warehouseId");
            return (Criteria) this;
        }

        public Criteria andTradeQuantityIsNull() {
            addCriterion("trade_quantity is null");
            return (Criteria) this;
        }

        public Criteria andTradeQuantityIsNotNull() {
            addCriterion("trade_quantity is not null");
            return (Criteria) this;
        }

        public Criteria andTradeQuantityEqualTo(Integer value) {
            addCriterion("trade_quantity =", value, "tradeQuantity");
            return (Criteria) this;
        }

        public Criteria andTradeQuantityNotEqualTo(Integer value) {
            addCriterion("trade_quantity <>", value, "tradeQuantity");
            return (Criteria) this;
        }

        public Criteria andTradeQuantityGreaterThan(Integer value) {
            addCriterion("trade_quantity >", value, "tradeQuantity");
            return (Criteria) this;
        }

        public Criteria andTradeQuantityGreaterThanOrEqualTo(Integer value) {
            addCriterion("trade_quantity >=", value, "tradeQuantity");
            return (Criteria) this;
        }

        public Criteria andTradeQuantityLessThan(Integer value) {
            addCriterion("trade_quantity <", value, "tradeQuantity");
            return (Criteria) this;
        }

        public Criteria andTradeQuantityLessThanOrEqualTo(Integer value) {
            addCriterion("trade_quantity <=", value, "tradeQuantity");
            return (Criteria) this;
        }

        public Criteria andTradeQuantityIn(List<Integer> values) {
            addCriterion("trade_quantity in", values, "tradeQuantity");
            return (Criteria) this;
        }

        public Criteria andTradeQuantityNotIn(List<Integer> values) {
            addCriterion("trade_quantity not in", values, "tradeQuantity");
            return (Criteria) this;
        }

        public Criteria andTradeQuantityBetween(Integer value1, Integer value2) {
            addCriterion("trade_quantity between", value1, value2, "tradeQuantity");
            return (Criteria) this;
        }

        public Criteria andTradeQuantityNotBetween(Integer value1, Integer value2) {
            addCriterion("trade_quantity not between", value1, value2, "tradeQuantity");
            return (Criteria) this;
        }

        public Criteria andTradeOnePriceIsNull() {
            addCriterion("trade_one_price is null");
            return (Criteria) this;
        }

        public Criteria andTradeOnePriceIsNotNull() {
            addCriterion("trade_one_price is not null");
            return (Criteria) this;
        }

        public Criteria andTradeOnePriceEqualTo(BigDecimal value) {
            addCriterion("trade_one_price =", value, "tradeOnePrice");
            return (Criteria) this;
        }

        public Criteria andTradeOnePriceNotEqualTo(BigDecimal value) {
            addCriterion("trade_one_price <>", value, "tradeOnePrice");
            return (Criteria) this;
        }

        public Criteria andTradeOnePriceGreaterThan(BigDecimal value) {
            addCriterion("trade_one_price >", value, "tradeOnePrice");
            return (Criteria) this;
        }

        public Criteria andTradeOnePriceGreaterThanOrEqualTo(BigDecimal value) {
            addCriterion("trade_one_price >=", value, "tradeOnePrice");
            return (Criteria) this;
        }

        public Criteria andTradeOnePriceLessThan(BigDecimal value) {
            addCriterion("trade_one_price <", value, "tradeOnePrice");
            return (Criteria) this;
        }

        public Criteria andTradeOnePriceLessThanOrEqualTo(BigDecimal value) {
            addCriterion("trade_one_price <=", value, "tradeOnePrice");
            return (Criteria) this;
        }

        public Criteria andTradeOnePriceIn(List<BigDecimal> values) {
            addCriterion("trade_one_price in", values, "tradeOnePrice");
            return (Criteria) this;
        }

        public Criteria andTradeOnePriceNotIn(List<BigDecimal> values) {
            addCriterion("trade_one_price not in", values, "tradeOnePrice");
            return (Criteria) this;
        }

        public Criteria andTradeOnePriceBetween(BigDecimal value1, BigDecimal value2) {
            addCriterion("trade_one_price between", value1, value2, "tradeOnePrice");
            return (Criteria) this;
        }

        public Criteria andTradeOnePriceNotBetween(BigDecimal value1, BigDecimal value2) {
            addCriterion("trade_one_price not between", value1, value2, "tradeOnePrice");
            return (Criteria) this;
        }

        public Criteria andTradeAllPriceIsNull() {
            addCriterion("trade_all_price is null");
            return (Criteria) this;
        }

        public Criteria andTradeAllPriceIsNotNull() {
            addCriterion("trade_all_price is not null");
            return (Criteria) this;
        }

        public Criteria andTradeAllPriceEqualTo(BigDecimal value) {
            addCriterion("trade_all_price =", value, "tradeAllPrice");
            return (Criteria) this;
        }

        public Criteria andTradeAllPriceNotEqualTo(BigDecimal value) {
            addCriterion("trade_all_price <>", value, "tradeAllPrice");
            return (Criteria) this;
        }

        public Criteria andTradeAllPriceGreaterThan(BigDecimal value) {
            addCriterion("trade_all_price >", value, "tradeAllPrice");
            return (Criteria) this;
        }

        public Criteria andTradeAllPriceGreaterThanOrEqualTo(BigDecimal value) {
            addCriterion("trade_all_price >=", value, "tradeAllPrice");
            return (Criteria) this;
        }

        public Criteria andTradeAllPriceLessThan(BigDecimal value) {
            addCriterion("trade_all_price <", value, "tradeAllPrice");
            return (Criteria) this;
        }

        public Criteria andTradeAllPriceLessThanOrEqualTo(BigDecimal value) {
            addCriterion("trade_all_price <=", value, "tradeAllPrice");
            return (Criteria) this;
        }

        public Criteria andTradeAllPriceIn(List<BigDecimal> values) {
            addCriterion("trade_all_price in", values, "tradeAllPrice");
            return (Criteria) this;
        }

        public Criteria andTradeAllPriceNotIn(List<BigDecimal> values) {
            addCriterion("trade_all_price not in", values, "tradeAllPrice");
            return (Criteria) this;
        }

        public Criteria andTradeAllPriceBetween(BigDecimal value1, BigDecimal value2) {
            addCriterion("trade_all_price between", value1, value2, "tradeAllPrice");
            return (Criteria) this;
        }

        public Criteria andTradeAllPriceNotBetween(BigDecimal value1, BigDecimal value2) {
            addCriterion("trade_all_price not between", value1, value2, "tradeAllPrice");
            return (Criteria) this;
        }

        public Criteria andZtIsNull() {
            addCriterion("zt is null");
            return (Criteria) this;
        }

        public Criteria andZtIsNotNull() {
            addCriterion("zt is not null");
            return (Criteria) this;
        }

        public Criteria andZtEqualTo(String value) {
            addCriterion("zt =", value, "zt");
            return (Criteria) this;
        }

        public Criteria andZtNotEqualTo(String value) {
            addCriterion("zt <>", value, "zt");
            return (Criteria) this;
        }

        public Criteria andZtGreaterThan(String value) {
            addCriterion("zt >", value, "zt");
            return (Criteria) this;
        }

        public Criteria andZtGreaterThanOrEqualTo(String value) {
            addCriterion("zt >=", value, "zt");
            return (Criteria) this;
        }

        public Criteria andZtLessThan(String value) {
            addCriterion("zt <", value, "zt");
            return (Criteria) this;
        }

        public Criteria andZtLessThanOrEqualTo(String value) {
            addCriterion("zt <=", value, "zt");
            return (Criteria) this;
        }

        public Criteria andZtLike(String value) {
            addCriterion("zt like", value, "zt");
            return (Criteria) this;
        }

        public Criteria andZtNotLike(String value) {
            addCriterion("zt not like", value, "zt");
            return (Criteria) this;
        }

        public Criteria andZtIn(List<String> values) {
            addCriterion("zt in", values, "zt");
            return (Criteria) this;
        }

        public Criteria andZtNotIn(List<String> values) {
            addCriterion("zt not in", values, "zt");
            return (Criteria) this;
        }

        public Criteria andZtBetween(String value1, String value2) {
            addCriterion("zt between", value1, value2, "zt");
            return (Criteria) this;
        }

        public Criteria andZtNotBetween(String value1, String value2) {
            addCriterion("zt not between", value1, value2, "zt");
            return (Criteria) this;
        }

        public Criteria andDescriptionIsNull() {
            addCriterion("description is null");
            return (Criteria) this;
        }

        public Criteria andDescriptionIsNotNull() {
            addCriterion("description is not null");
            return (Criteria) this;
        }

        public Criteria andDescriptionEqualTo(String value) {
            addCriterion("description =", value, "description");
            return (Criteria) this;
        }

        public Criteria andDescriptionNotEqualTo(String value) {
            addCriterion("description <>", value, "description");
            return (Criteria) this;
        }

        public Criteria andDescriptionGreaterThan(String value) {
            addCriterion("description >", value, "description");
            return (Criteria) this;
        }

        public Criteria andDescriptionGreaterThanOrEqualTo(String value) {
            addCriterion("description >=", value, "description");
            return (Criteria) this;
        }

        public Criteria andDescriptionLessThan(String value) {
            addCriterion("description <", value, "description");
            return (Criteria) this;
        }

        public Criteria andDescriptionLessThanOrEqualTo(String value) {
            addCriterion("description <=", value, "description");
            return (Criteria) this;
        }

        public Criteria andDescriptionLike(String value) {
            addCriterion("description like", value, "description");
            return (Criteria) this;
        }

        public Criteria andDescriptionNotLike(String value) {
            addCriterion("description not like", value, "description");
            return (Criteria) this;
        }

        public Criteria andDescriptionIn(List<String> values) {
            addCriterion("description in", values, "description");
            return (Criteria) this;
        }

        public Criteria andDescriptionNotIn(List<String> values) {
            addCriterion("description not in", values, "description");
            return (Criteria) this;
        }

        public Criteria andDescriptionBetween(String value1, String value2) {
            addCriterion("description between", value1, value2, "description");
            return (Criteria) this;
        }

        public Criteria andDescriptionNotBetween(String value1, String value2) {
            addCriterion("description not between", value1, value2, "description");
            return (Criteria) this;
        }

        public Criteria andOtherIsNull() {
            addCriterion("other is null");
            return (Criteria) this;
        }

        public Criteria andOtherIsNotNull() {
            addCriterion("other is not null");
            return (Criteria) this;
        }

        public Criteria andOtherEqualTo(String value) {
            addCriterion("other =", value, "other");
            return (Criteria) this;
        }

        public Criteria andOtherNotEqualTo(String value) {
            addCriterion("other <>", value, "other");
            return (Criteria) this;
        }

        public Criteria andOtherGreaterThan(String value) {
            addCriterion("other >", value, "other");
            return (Criteria) this;
        }

        public Criteria andOtherGreaterThanOrEqualTo(String value) {
            addCriterion("other >=", value, "other");
            return (Criteria) this;
        }

        public Criteria andOtherLessThan(String value) {
            addCriterion("other <", value, "other");
            return (Criteria) this;
        }

        public Criteria andOtherLessThanOrEqualTo(String value) {
            addCriterion("other <=", value, "other");
            return (Criteria) this;
        }

        public Criteria andOtherLike(String value) {
            addCriterion("other like", value, "other");
            return (Criteria) this;
        }

        public Criteria andOtherNotLike(String value) {
            addCriterion("other not like", value, "other");
            return (Criteria) this;
        }

        public Criteria andOtherIn(List<String> values) {
            addCriterion("other in", values, "other");
            return (Criteria) this;
        }

        public Criteria andOtherNotIn(List<String> values) {
            addCriterion("other not in", values, "other");
            return (Criteria) this;
        }

        public Criteria andOtherBetween(String value1, String value2) {
            addCriterion("other between", value1, value2, "other");
            return (Criteria) this;
        }

        public Criteria andOtherNotBetween(String value1, String value2) {
            addCriterion("other not between", value1, value2, "other");
            return (Criteria) this;
        }

        public Criteria andOldOnePriceIsNull() {
            addCriterion("old_one_price is null");
            return (Criteria) this;
        }

        public Criteria andOldOnePriceIsNotNull() {
            addCriterion("old_one_price is not null");
            return (Criteria) this;
        }

        public Criteria andOldOnePriceEqualTo(BigDecimal value) {
            addCriterion("old_one_price =", value, "oldOnePrice");
            return (Criteria) this;
        }

        public Criteria andOldOnePriceNotEqualTo(BigDecimal value) {
            addCriterion("old_one_price <>", value, "oldOnePrice");
            return (Criteria) this;
        }

        public Criteria andOldOnePriceGreaterThan(BigDecimal value) {
            addCriterion("old_one_price >", value, "oldOnePrice");
            return (Criteria) this;
        }

        public Criteria andOldOnePriceGreaterThanOrEqualTo(BigDecimal value) {
            addCriterion("old_one_price >=", value, "oldOnePrice");
            return (Criteria) this;
        }

        public Criteria andOldOnePriceLessThan(BigDecimal value) {
            addCriterion("old_one_price <", value, "oldOnePrice");
            return (Criteria) this;
        }

        public Criteria andOldOnePriceLessThanOrEqualTo(BigDecimal value) {
            addCriterion("old_one_price <=", value, "oldOnePrice");
            return (Criteria) this;
        }

        public Criteria andOldOnePriceIn(List<BigDecimal> values) {
            addCriterion("old_one_price in", values, "oldOnePrice");
            return (Criteria) this;
        }

        public Criteria andOldOnePriceNotIn(List<BigDecimal> values) {
            addCriterion("old_one_price not in", values, "oldOnePrice");
            return (Criteria) this;
        }

        public Criteria andOldOnePriceBetween(BigDecimal value1, BigDecimal value2) {
            addCriterion("old_one_price between", value1, value2, "oldOnePrice");
            return (Criteria) this;
        }

        public Criteria andOldOnePriceNotBetween(BigDecimal value1, BigDecimal value2) {
            addCriterion("old_one_price not between", value1, value2, "oldOnePrice");
            return (Criteria) this;
        }

        public Criteria andOldAllPriceIsNull() {
            addCriterion("old_all_price is null");
            return (Criteria) this;
        }

        public Criteria andOldAllPriceIsNotNull() {
            addCriterion("old_all_price is not null");
            return (Criteria) this;
        }

        public Criteria andOldAllPriceEqualTo(BigDecimal value) {
            addCriterion("old_all_price =", value, "oldAllPrice");
            return (Criteria) this;
        }

        public Criteria andOldAllPriceNotEqualTo(BigDecimal value) {
            addCriterion("old_all_price <>", value, "oldAllPrice");
            return (Criteria) this;
        }

        public Criteria andOldAllPriceGreaterThan(BigDecimal value) {
            addCriterion("old_all_price >", value, "oldAllPrice");
            return (Criteria) this;
        }

        public Criteria andOldAllPriceGreaterThanOrEqualTo(BigDecimal value) {
            addCriterion("old_all_price >=", value, "oldAllPrice");
            return (Criteria) this;
        }

        public Criteria andOldAllPriceLessThan(BigDecimal value) {
            addCriterion("old_all_price <", value, "oldAllPrice");
            return (Criteria) this;
        }

        public Criteria andOldAllPriceLessThanOrEqualTo(BigDecimal value) {
            addCriterion("old_all_price <=", value, "oldAllPrice");
            return (Criteria) this;
        }

        public Criteria andOldAllPriceIn(List<BigDecimal> values) {
            addCriterion("old_all_price in", values, "oldAllPrice");
            return (Criteria) this;
        }

        public Criteria andOldAllPriceNotIn(List<BigDecimal> values) {
            addCriterion("old_all_price not in", values, "oldAllPrice");
            return (Criteria) this;
        }

        public Criteria andOldAllPriceBetween(BigDecimal value1, BigDecimal value2) {
            addCriterion("old_all_price between", value1, value2, "oldAllPrice");
            return (Criteria) this;
        }

        public Criteria andOldAllPriceNotBetween(BigDecimal value1, BigDecimal value2) {
            addCriterion("old_all_price not between", value1, value2, "oldAllPrice");
            return (Criteria) this;
        }
    }

    public static class Criteria extends GeneratedCriteria {

        protected Criteria() {
            super();
        }
    }

    public static class Criterion {
        private String condition;

        private Object value;

        private Object secondValue;

        private boolean noValue;

        private boolean singleValue;

        private boolean betweenValue;

        private boolean listValue;

        private String typeHandler;

        public String getCondition() {
            return condition;
        }

        public Object getValue() {
            return value;
        }

        public Object getSecondValue() {
            return secondValue;
        }

        public boolean isNoValue() {
            return noValue;
        }

        public boolean isSingleValue() {
            return singleValue;
        }

        public boolean isBetweenValue() {
            return betweenValue;
        }

        public boolean isListValue() {
            return listValue;
        }

        public String getTypeHandler() {
            return typeHandler;
        }

        protected Criterion(String condition) {
            super();
            this.condition = condition;
            this.typeHandler = null;
            this.noValue = true;
        }

        protected Criterion(String condition, Object value, String typeHandler) {
            super();
            this.condition = condition;
            this.value = value;
            this.typeHandler = typeHandler;
            if (value instanceof List<?>) {
                this.listValue = true;
            } else {
                this.singleValue = true;
            }
        }

        protected Criterion(String condition, Object value) {
            this(condition, value, null);
        }

        protected Criterion(String condition, Object value, Object secondValue, String typeHandler) {
            super();
            this.condition = condition;
            this.value = value;
            this.secondValue = secondValue;
            this.typeHandler = typeHandler;
            this.betweenValue = true;
        }

        protected Criterion(String condition, Object value, Object secondValue) {
            this(condition, value, secondValue, null);
        }
    }
}