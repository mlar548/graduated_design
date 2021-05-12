package com.gys.entity;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class LogisticsExample {
    protected String orderByClause;

    protected boolean distinct;

    protected List<Criteria> oredCriteria;

    public LogisticsExample() {
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

        public Criteria andLogisticsIdIsNull() {
            addCriterion("logistics_id is null");
            return (Criteria) this;
        }

        public Criteria andLogisticsIdIsNotNull() {
            addCriterion("logistics_id is not null");
            return (Criteria) this;
        }

        public Criteria andLogisticsIdEqualTo(Integer value) {
            addCriterion("logistics_id =", value, "logisticsId");
            return (Criteria) this;
        }

        public Criteria andLogisticsIdNotEqualTo(Integer value) {
            addCriterion("logistics_id <>", value, "logisticsId");
            return (Criteria) this;
        }

        public Criteria andLogisticsIdGreaterThan(Integer value) {
            addCriterion("logistics_id >", value, "logisticsId");
            return (Criteria) this;
        }

        public Criteria andLogisticsIdGreaterThanOrEqualTo(Integer value) {
            addCriterion("logistics_id >=", value, "logisticsId");
            return (Criteria) this;
        }

        public Criteria andLogisticsIdLessThan(Integer value) {
            addCriterion("logistics_id <", value, "logisticsId");
            return (Criteria) this;
        }

        public Criteria andLogisticsIdLessThanOrEqualTo(Integer value) {
            addCriterion("logistics_id <=", value, "logisticsId");
            return (Criteria) this;
        }

        public Criteria andLogisticsIdIn(List<Integer> values) {
            addCriterion("logistics_id in", values, "logisticsId");
            return (Criteria) this;
        }

        public Criteria andLogisticsIdNotIn(List<Integer> values) {
            addCriterion("logistics_id not in", values, "logisticsId");
            return (Criteria) this;
        }

        public Criteria andLogisticsIdBetween(Integer value1, Integer value2) {
            addCriterion("logistics_id between", value1, value2, "logisticsId");
            return (Criteria) this;
        }

        public Criteria andLogisticsIdNotBetween(Integer value1, Integer value2) {
            addCriterion("logistics_id not between", value1, value2, "logisticsId");
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

        public Criteria andLogisticsNameEqualTo(String value) {
            addCriterion("logistics_name =", value, "logisticsName");
            return (Criteria) this;
        }

        public Criteria andLogisticsNameNotEqualTo(String value) {
            addCriterion("logistics_name <>", value, "logisticsName");
            return (Criteria) this;
        }

        public Criteria andLogisticsNameGreaterThan(String value) {
            addCriterion("logistics_name >", value, "logisticsName");
            return (Criteria) this;
        }

        public Criteria andLogisticsNameGreaterThanOrEqualTo(String value) {
            addCriterion("logistics_name >=", value, "logisticsName");
            return (Criteria) this;
        }

        public Criteria andLogisticsNameLessThan(String value) {
            addCriterion("logistics_name <", value, "logisticsName");
            return (Criteria) this;
        }

        public Criteria andLogisticsNameLessThanOrEqualTo(String value) {
            addCriterion("logistics_name <=", value, "logisticsName");
            return (Criteria) this;
        }

        public Criteria andLogisticsNameLike(String value) {
            addCriterion("logistics_name like", value, "logisticsName");
            return (Criteria) this;
        }

        public Criteria andLogisticsNameNotLike(String value) {
            addCriterion("logistics_name not like", value, "logisticsName");
            return (Criteria) this;
        }

        public Criteria andLogisticsNameIn(List<String> values) {
            addCriterion("logistics_name in", values, "logisticsName");
            return (Criteria) this;
        }

        public Criteria andLogisticsNameNotIn(List<String> values) {
            addCriterion("logistics_name not in", values, "logisticsName");
            return (Criteria) this;
        }

        public Criteria andLogisticsNameBetween(String value1, String value2) {
            addCriterion("logistics_name between", value1, value2, "logisticsName");
            return (Criteria) this;
        }

        public Criteria andLogisticsNameNotBetween(String value1, String value2) {
            addCriterion("logistics_name not between", value1, value2, "logisticsName");
            return (Criteria) this;
        }

        public Criteria andLogisticsTimeIsNull() {
            addCriterion("logistics_time is null");
            return (Criteria) this;
        }

        public Criteria andLogisticsTimeIsNotNull() {
            addCriterion("logistics_time is not null");
            return (Criteria) this;
        }

        public Criteria andLogisticsTimeEqualTo(Date value) {
            addCriterion("logistics_time =", value, "logisticsTime");
            return (Criteria) this;
        }

        public Criteria andLogisticsTimeNotEqualTo(Date value) {
            addCriterion("logistics_time <>", value, "logisticsTime");
            return (Criteria) this;
        }

        public Criteria andLogisticsTimeGreaterThan(Date value) {
            addCriterion("logistics_time >", value, "logisticsTime");
            return (Criteria) this;
        }

        public Criteria andLogisticsTimeGreaterThanOrEqualTo(Date value) {
            addCriterion("logistics_time >=", value, "logisticsTime");
            return (Criteria) this;
        }

        public Criteria andLogisticsTimeLessThan(Date value) {
            addCriterion("logistics_time <", value, "logisticsTime");
            return (Criteria) this;
        }

        public Criteria andLogisticsTimeLessThanOrEqualTo(Date value) {
            addCriterion("logistics_time <=", value, "logisticsTime");
            return (Criteria) this;
        }

        public Criteria andLogisticsTimeIn(List<Date> values) {
            addCriterion("logistics_time in", values, "logisticsTime");
            return (Criteria) this;
        }

        public Criteria andLogisticsTimeNotIn(List<Date> values) {
            addCriterion("logistics_time not in", values, "logisticsTime");
            return (Criteria) this;
        }

        public Criteria andLogisticsTimeBetween(Date value1, Date value2) {
            addCriterion("logistics_time between", value1, value2, "logisticsTime");
            return (Criteria) this;
        }

        public Criteria andLogisticsTimeNotBetween(Date value1, Date value2) {
            addCriterion("logistics_time not between", value1, value2, "logisticsTime");
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

        public Criteria andPurchaseIdIsNull() {
            addCriterion("purchase_id is null");
            return (Criteria) this;
        }

        public Criteria andPurchaseIdIsNotNull() {
            addCriterion("purchase_id is not null");
            return (Criteria) this;
        }

        public Criteria andPurchaseIdEqualTo(String value) {
            addCriterion("purchase_id =", value, "purchaseId");
            return (Criteria) this;
        }

        public Criteria andPurchaseIdNotEqualTo(String value) {
            addCriterion("purchase_id <>", value, "purchaseId");
            return (Criteria) this;
        }

        public Criteria andPurchaseIdGreaterThan(String value) {
            addCriterion("purchase_id >", value, "purchaseId");
            return (Criteria) this;
        }

        public Criteria andPurchaseIdGreaterThanOrEqualTo(String value) {
            addCriterion("purchase_id >=", value, "purchaseId");
            return (Criteria) this;
        }

        public Criteria andPurchaseIdLessThan(String value) {
            addCriterion("purchase_id <", value, "purchaseId");
            return (Criteria) this;
        }

        public Criteria andPurchaseIdLessThanOrEqualTo(String value) {
            addCriterion("purchase_id <=", value, "purchaseId");
            return (Criteria) this;
        }

        public Criteria andPurchaseIdLike(String value) {
            addCriterion("purchase_id like", value, "purchaseId");
            return (Criteria) this;
        }

        public Criteria andPurchaseIdNotLike(String value) {
            addCriterion("purchase_id not like", value, "purchaseId");
            return (Criteria) this;
        }

        public Criteria andPurchaseIdIn(List<String> values) {
            addCriterion("purchase_id in", values, "purchaseId");
            return (Criteria) this;
        }

        public Criteria andPurchaseIdNotIn(List<String> values) {
            addCriterion("purchase_id not in", values, "purchaseId");
            return (Criteria) this;
        }

        public Criteria andPurchaseIdBetween(String value1, String value2) {
            addCriterion("purchase_id between", value1, value2, "purchaseId");
            return (Criteria) this;
        }

        public Criteria andPurchaseIdNotBetween(String value1, String value2) {
            addCriterion("purchase_id not between", value1, value2, "purchaseId");
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

        public Criteria andStatusIsNull() {
            addCriterion("status is null");
            return (Criteria) this;
        }

        public Criteria andStatusIsNotNull() {
            addCriterion("status is not null");
            return (Criteria) this;
        }

        public Criteria andStatusEqualTo(Integer value) {
            addCriterion("status =", value, "status");
            return (Criteria) this;
        }

        public Criteria andStatusNotEqualTo(Integer value) {
            addCriterion("status <>", value, "status");
            return (Criteria) this;
        }

        public Criteria andStatusGreaterThan(Integer value) {
            addCriterion("status >", value, "status");
            return (Criteria) this;
        }

        public Criteria andStatusGreaterThanOrEqualTo(Integer value) {
            addCriterion("status >=", value, "status");
            return (Criteria) this;
        }

        public Criteria andStatusLessThan(Integer value) {
            addCriterion("status <", value, "status");
            return (Criteria) this;
        }

        public Criteria andStatusLessThanOrEqualTo(Integer value) {
            addCriterion("status <=", value, "status");
            return (Criteria) this;
        }

        public Criteria andStatusIn(List<Integer> values) {
            addCriterion("status in", values, "status");
            return (Criteria) this;
        }

        public Criteria andStatusNotIn(List<Integer> values) {
            addCriterion("status not in", values, "status");
            return (Criteria) this;
        }

        public Criteria andStatusBetween(Integer value1, Integer value2) {
            addCriterion("status between", value1, value2, "status");
            return (Criteria) this;
        }

        public Criteria andStatusNotBetween(Integer value1, Integer value2) {
            addCriterion("status not between", value1, value2, "status");
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

        public Criteria andTypeIsNull() {
            addCriterion("type is null");
            return (Criteria) this;
        }

        public Criteria andTypeIsNotNull() {
            addCriterion("type is not null");
            return (Criteria) this;
        }

        public Criteria andTypeEqualTo(Integer value) {
            addCriterion("type =", value, "type");
            return (Criteria) this;
        }

        public Criteria andTypeNotEqualTo(Integer value) {
            addCriterion("type <>", value, "type");
            return (Criteria) this;
        }

        public Criteria andTypeGreaterThan(Integer value) {
            addCriterion("type >", value, "type");
            return (Criteria) this;
        }

        public Criteria andTypeGreaterThanOrEqualTo(Integer value) {
            addCriterion("type >=", value, "type");
            return (Criteria) this;
        }

        public Criteria andTypeLessThan(Integer value) {
            addCriterion("type <", value, "type");
            return (Criteria) this;
        }

        public Criteria andTypeLessThanOrEqualTo(Integer value) {
            addCriterion("type <=", value, "type");
            return (Criteria) this;
        }

        public Criteria andTypeIn(List<Integer> values) {
            addCriterion("type in", values, "type");
            return (Criteria) this;
        }

        public Criteria andTypeNotIn(List<Integer> values) {
            addCriterion("type not in", values, "type");
            return (Criteria) this;
        }

        public Criteria andTypeBetween(Integer value1, Integer value2) {
            addCriterion("type between", value1, value2, "type");
            return (Criteria) this;
        }

        public Criteria andTypeNotBetween(Integer value1, Integer value2) {
            addCriterion("type not between", value1, value2, "type");
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