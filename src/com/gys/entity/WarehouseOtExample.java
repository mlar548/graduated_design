package com.gys.entity;

import java.util.ArrayList;
import java.util.List;

public class WarehouseOtExample {
    protected String orderByClause;

    protected boolean distinct;

    protected List<Criteria> oredCriteria;

    public WarehouseOtExample() {
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

        public Criteria andIdIsNull() {
            addCriterion("id is null");
            return (Criteria) this;
        }

        public Criteria andIdIsNotNull() {
            addCriterion("id is not null");
            return (Criteria) this;
        }

        public Criteria andIdEqualTo(Integer value) {
            addCriterion("id =", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdNotEqualTo(Integer value) {
            addCriterion("id <>", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdGreaterThan(Integer value) {
            addCriterion("id >", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdGreaterThanOrEqualTo(Integer value) {
            addCriterion("id >=", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdLessThan(Integer value) {
            addCriterion("id <", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdLessThanOrEqualTo(Integer value) {
            addCriterion("id <=", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdIn(List<Integer> values) {
            addCriterion("id in", values, "id");
            return (Criteria) this;
        }

        public Criteria andIdNotIn(List<Integer> values) {
            addCriterion("id not in", values, "id");
            return (Criteria) this;
        }

        public Criteria andIdBetween(Integer value1, Integer value2) {
            addCriterion("id between", value1, value2, "id");
            return (Criteria) this;
        }

        public Criteria andIdNotBetween(Integer value1, Integer value2) {
            addCriterion("id not between", value1, value2, "id");
            return (Criteria) this;
        }

        public Criteria andFromWarehouseIdIsNull() {
            addCriterion("from_warehouse_id is null");
            return (Criteria) this;
        }

        public Criteria andFromWarehouseIdIsNotNull() {
            addCriterion("from_warehouse_id is not null");
            return (Criteria) this;
        }

        public Criteria andFromWarehouseIdEqualTo(Integer value) {
            addCriterion("from_warehouse_id =", value, "fromWarehouseId");
            return (Criteria) this;
        }

        public Criteria andFromWarehouseIdNotEqualTo(Integer value) {
            addCriterion("from_warehouse_id <>", value, "fromWarehouseId");
            return (Criteria) this;
        }

        public Criteria andFromWarehouseIdGreaterThan(Integer value) {
            addCriterion("from_warehouse_id >", value, "fromWarehouseId");
            return (Criteria) this;
        }

        public Criteria andFromWarehouseIdGreaterThanOrEqualTo(Integer value) {
            addCriterion("from_warehouse_id >=", value, "fromWarehouseId");
            return (Criteria) this;
        }

        public Criteria andFromWarehouseIdLessThan(Integer value) {
            addCriterion("from_warehouse_id <", value, "fromWarehouseId");
            return (Criteria) this;
        }

        public Criteria andFromWarehouseIdLessThanOrEqualTo(Integer value) {
            addCriterion("from_warehouse_id <=", value, "fromWarehouseId");
            return (Criteria) this;
        }

        public Criteria andFromWarehouseIdIn(List<Integer> values) {
            addCriterion("from_warehouse_id in", values, "fromWarehouseId");
            return (Criteria) this;
        }

        public Criteria andFromWarehouseIdNotIn(List<Integer> values) {
            addCriterion("from_warehouse_id not in", values, "fromWarehouseId");
            return (Criteria) this;
        }

        public Criteria andFromWarehouseIdBetween(Integer value1, Integer value2) {
            addCriterion("from_warehouse_id between", value1, value2, "fromWarehouseId");
            return (Criteria) this;
        }

        public Criteria andFromWarehouseIdNotBetween(Integer value1, Integer value2) {
            addCriterion("from_warehouse_id not between", value1, value2, "fromWarehouseId");
            return (Criteria) this;
        }

        public Criteria andToWarehouseIdIsNull() {
            addCriterion("to_warehouse_id is null");
            return (Criteria) this;
        }

        public Criteria andToWarehouseIdIsNotNull() {
            addCriterion("to_warehouse_id is not null");
            return (Criteria) this;
        }

        public Criteria andToWarehouseIdEqualTo(Integer value) {
            addCriterion("to_warehouse_id =", value, "toWarehouseId");
            return (Criteria) this;
        }

        public Criteria andToWarehouseIdNotEqualTo(Integer value) {
            addCriterion("to_warehouse_id <>", value, "toWarehouseId");
            return (Criteria) this;
        }

        public Criteria andToWarehouseIdGreaterThan(Integer value) {
            addCriterion("to_warehouse_id >", value, "toWarehouseId");
            return (Criteria) this;
        }

        public Criteria andToWarehouseIdGreaterThanOrEqualTo(Integer value) {
            addCriterion("to_warehouse_id >=", value, "toWarehouseId");
            return (Criteria) this;
        }

        public Criteria andToWarehouseIdLessThan(Integer value) {
            addCriterion("to_warehouse_id <", value, "toWarehouseId");
            return (Criteria) this;
        }

        public Criteria andToWarehouseIdLessThanOrEqualTo(Integer value) {
            addCriterion("to_warehouse_id <=", value, "toWarehouseId");
            return (Criteria) this;
        }

        public Criteria andToWarehouseIdIn(List<Integer> values) {
            addCriterion("to_warehouse_id in", values, "toWarehouseId");
            return (Criteria) this;
        }

        public Criteria andToWarehouseIdNotIn(List<Integer> values) {
            addCriterion("to_warehouse_id not in", values, "toWarehouseId");
            return (Criteria) this;
        }

        public Criteria andToWarehouseIdBetween(Integer value1, Integer value2) {
            addCriterion("to_warehouse_id between", value1, value2, "toWarehouseId");
            return (Criteria) this;
        }

        public Criteria andToWarehouseIdNotBetween(Integer value1, Integer value2) {
            addCriterion("to_warehouse_id not between", value1, value2, "toWarehouseId");
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

        public Criteria andLogisticsNameIsNull() {
            addCriterion("logistics_name is null");
            return (Criteria) this;
        }

        public Criteria andLogisticsNameIsNotNull() {
            addCriterion("logistics_name is not null");
            return (Criteria) this;
        }

        public Criteria andLogisticsNameEqualTo(Integer value) {
            addCriterion("logistics_name =", value, "logisticsName");
            return (Criteria) this;
        }

        public Criteria andLogisticsNameNotEqualTo(Integer value) {
            addCriterion("logistics_name <>", value, "logisticsName");
            return (Criteria) this;
        }

        public Criteria andLogisticsNameGreaterThan(Integer value) {
            addCriterion("logistics_name >", value, "logisticsName");
            return (Criteria) this;
        }

        public Criteria andLogisticsNameGreaterThanOrEqualTo(Integer value) {
            addCriterion("logistics_name >=", value, "logisticsName");
            return (Criteria) this;
        }

        public Criteria andLogisticsNameLessThan(Integer value) {
            addCriterion("logistics_name <", value, "logisticsName");
            return (Criteria) this;
        }

        public Criteria andLogisticsNameLessThanOrEqualTo(Integer value) {
            addCriterion("logistics_name <=", value, "logisticsName");
            return (Criteria) this;
        }

        public Criteria andLogisticsNameIn(List<Integer> values) {
            addCriterion("logistics_name in", values, "logisticsName");
            return (Criteria) this;
        }

        public Criteria andLogisticsNameNotIn(List<Integer> values) {
            addCriterion("logistics_name not in", values, "logisticsName");
            return (Criteria) this;
        }

        public Criteria andLogisticsNameBetween(Integer value1, Integer value2) {
            addCriterion("logistics_name between", value1, value2, "logisticsName");
            return (Criteria) this;
        }

        public Criteria andLogisticsNameNotBetween(Integer value1, Integer value2) {
            addCriterion("logistics_name not between", value1, value2, "logisticsName");
            return (Criteria) this;
        }

        public Criteria andOtidIsNull() {
            addCriterion("otid is null");
            return (Criteria) this;
        }

        public Criteria andOtidIsNotNull() {
            addCriterion("otid is not null");
            return (Criteria) this;
        }

        public Criteria andOtidEqualTo(String value) {
            addCriterion("otid =", value, "otid");
            return (Criteria) this;
        }

        public Criteria andOtidNotEqualTo(String value) {
            addCriterion("otid <>", value, "otid");
            return (Criteria) this;
        }

        public Criteria andOtidGreaterThan(String value) {
            addCriterion("otid >", value, "otid");
            return (Criteria) this;
        }

        public Criteria andOtidGreaterThanOrEqualTo(String value) {
            addCriterion("otid >=", value, "otid");
            return (Criteria) this;
        }

        public Criteria andOtidLessThan(String value) {
            addCriterion("otid <", value, "otid");
            return (Criteria) this;
        }

        public Criteria andOtidLessThanOrEqualTo(String value) {
            addCriterion("otid <=", value, "otid");
            return (Criteria) this;
        }

        public Criteria andOtidLike(String value) {
            addCriterion("otid like", value, "otid");
            return (Criteria) this;
        }

        public Criteria andOtidNotLike(String value) {
            addCriterion("otid not like", value, "otid");
            return (Criteria) this;
        }

        public Criteria andOtidIn(List<String> values) {
            addCriterion("otid in", values, "otid");
            return (Criteria) this;
        }

        public Criteria andOtidNotIn(List<String> values) {
            addCriterion("otid not in", values, "otid");
            return (Criteria) this;
        }

        public Criteria andOtidBetween(String value1, String value2) {
            addCriterion("otid between", value1, value2, "otid");
            return (Criteria) this;
        }

        public Criteria andOtidNotBetween(String value1, String value2) {
            addCriterion("otid not between", value1, value2, "otid");
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