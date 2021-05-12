package com.gys.entity;

import java.util.ArrayList;
import java.util.List;

public class WarehouseGoodsExample {
    protected String orderByClause;

    protected boolean distinct;

    protected List<Criteria> oredCriteria;

    public WarehouseGoodsExample() {
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

        public Criteria andWarehouseGoodsIdIsNull() {
            addCriterion("warehouse_goods_id is null");
            return (Criteria) this;
        }

        public Criteria andWarehouseGoodsIdIsNotNull() {
            addCriterion("warehouse_goods_id is not null");
            return (Criteria) this;
        }

        public Criteria andWarehouseGoodsIdEqualTo(Integer value) {
            addCriterion("warehouse_goods_id =", value, "warehouseGoodsId");
            return (Criteria) this;
        }

        public Criteria andWarehouseGoodsIdNotEqualTo(Integer value) {
            addCriterion("warehouse_goods_id <>", value, "warehouseGoodsId");
            return (Criteria) this;
        }

        public Criteria andWarehouseGoodsIdGreaterThan(Integer value) {
            addCriterion("warehouse_goods_id >", value, "warehouseGoodsId");
            return (Criteria) this;
        }

        public Criteria andWarehouseGoodsIdGreaterThanOrEqualTo(Integer value) {
            addCriterion("warehouse_goods_id >=", value, "warehouseGoodsId");
            return (Criteria) this;
        }

        public Criteria andWarehouseGoodsIdLessThan(Integer value) {
            addCriterion("warehouse_goods_id <", value, "warehouseGoodsId");
            return (Criteria) this;
        }

        public Criteria andWarehouseGoodsIdLessThanOrEqualTo(Integer value) {
            addCriterion("warehouse_goods_id <=", value, "warehouseGoodsId");
            return (Criteria) this;
        }

        public Criteria andWarehouseGoodsIdIn(List<Integer> values) {
            addCriterion("warehouse_goods_id in", values, "warehouseGoodsId");
            return (Criteria) this;
        }

        public Criteria andWarehouseGoodsIdNotIn(List<Integer> values) {
            addCriterion("warehouse_goods_id not in", values, "warehouseGoodsId");
            return (Criteria) this;
        }

        public Criteria andWarehouseGoodsIdBetween(Integer value1, Integer value2) {
            addCriterion("warehouse_goods_id between", value1, value2, "warehouseGoodsId");
            return (Criteria) this;
        }

        public Criteria andWarehouseGoodsIdNotBetween(Integer value1, Integer value2) {
            addCriterion("warehouse_goods_id not between", value1, value2, "warehouseGoodsId");
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

        public Criteria andWarehouseGoodsQuantityIsNull() {
            addCriterion("warehouse_goods_quantity is null");
            return (Criteria) this;
        }

        public Criteria andWarehouseGoodsQuantityIsNotNull() {
            addCriterion("warehouse_goods_quantity is not null");
            return (Criteria) this;
        }

        public Criteria andWarehouseGoodsQuantityEqualTo(Integer value) {
            addCriterion("warehouse_goods_quantity =", value, "warehouseGoodsQuantity");
            return (Criteria) this;
        }

        public Criteria andWarehouseGoodsQuantityNotEqualTo(Integer value) {
            addCriterion("warehouse_goods_quantity <>", value, "warehouseGoodsQuantity");
            return (Criteria) this;
        }

        public Criteria andWarehouseGoodsQuantityGreaterThan(Integer value) {
            addCriterion("warehouse_goods_quantity >", value, "warehouseGoodsQuantity");
            return (Criteria) this;
        }

        public Criteria andWarehouseGoodsQuantityGreaterThanOrEqualTo(Integer value) {
            addCriterion("warehouse_goods_quantity >=", value, "warehouseGoodsQuantity");
            return (Criteria) this;
        }

        public Criteria andWarehouseGoodsQuantityLessThan(Integer value) {
            addCriterion("warehouse_goods_quantity <", value, "warehouseGoodsQuantity");
            return (Criteria) this;
        }

        public Criteria andWarehouseGoodsQuantityLessThanOrEqualTo(Integer value) {
            addCriterion("warehouse_goods_quantity <=", value, "warehouseGoodsQuantity");
            return (Criteria) this;
        }

        public Criteria andWarehouseGoodsQuantityIn(List<Integer> values) {
            addCriterion("warehouse_goods_quantity in", values, "warehouseGoodsQuantity");
            return (Criteria) this;
        }

        public Criteria andWarehouseGoodsQuantityNotIn(List<Integer> values) {
            addCriterion("warehouse_goods_quantity not in", values, "warehouseGoodsQuantity");
            return (Criteria) this;
        }

        public Criteria andWarehouseGoodsQuantityBetween(Integer value1, Integer value2) {
            addCriterion("warehouse_goods_quantity between", value1, value2, "warehouseGoodsQuantity");
            return (Criteria) this;
        }

        public Criteria andWarehouseGoodsQuantityNotBetween(Integer value1, Integer value2) {
            addCriterion("warehouse_goods_quantity not between", value1, value2, "warehouseGoodsQuantity");
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