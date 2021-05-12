package com.gys.entity;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class AllWarehouseOtExample {
    protected String orderByClause;

    protected boolean distinct;

    protected List<Criteria> oredCriteria;

    public AllWarehouseOtExample() {
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

        public Criteria andOtStartTimeIsNull() {
            addCriterion("ot_start_time is null");
            return (Criteria) this;
        }

        public Criteria andOtStartTimeIsNotNull() {
            addCriterion("ot_start_time is not null");
            return (Criteria) this;
        }

        public Criteria andOtStartTimeEqualTo(Date value) {
            addCriterion("ot_start_time =", value, "otStartTime");
            return (Criteria) this;
        }

        public Criteria andOtStartTimeNotEqualTo(Date value) {
            addCriterion("ot_start_time <>", value, "otStartTime");
            return (Criteria) this;
        }

        public Criteria andOtStartTimeGreaterThan(Date value) {
            addCriterion("ot_start_time >", value, "otStartTime");
            return (Criteria) this;
        }

        public Criteria andOtStartTimeGreaterThanOrEqualTo(Date value) {
            addCriterion("ot_start_time >=", value, "otStartTime");
            return (Criteria) this;
        }

        public Criteria andOtStartTimeLessThan(Date value) {
            addCriterion("ot_start_time <", value, "otStartTime");
            return (Criteria) this;
        }

        public Criteria andOtStartTimeLessThanOrEqualTo(Date value) {
            addCriterion("ot_start_time <=", value, "otStartTime");
            return (Criteria) this;
        }

        public Criteria andOtStartTimeIn(List<Date> values) {
            addCriterion("ot_start_time in", values, "otStartTime");
            return (Criteria) this;
        }

        public Criteria andOtStartTimeNotIn(List<Date> values) {
            addCriterion("ot_start_time not in", values, "otStartTime");
            return (Criteria) this;
        }

        public Criteria andOtStartTimeBetween(Date value1, Date value2) {
            addCriterion("ot_start_time between", value1, value2, "otStartTime");
            return (Criteria) this;
        }

        public Criteria andOtStartTimeNotBetween(Date value1, Date value2) {
            addCriterion("ot_start_time not between", value1, value2, "otStartTime");
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

        public Criteria andJlIdIsNull() {
            addCriterion("jl_id is null");
            return (Criteria) this;
        }

        public Criteria andJlIdIsNotNull() {
            addCriterion("jl_id is not null");
            return (Criteria) this;
        }

        public Criteria andJlIdEqualTo(Integer value) {
            addCriterion("jl_id =", value, "jlId");
            return (Criteria) this;
        }

        public Criteria andJlIdNotEqualTo(Integer value) {
            addCriterion("jl_id <>", value, "jlId");
            return (Criteria) this;
        }

        public Criteria andJlIdGreaterThan(Integer value) {
            addCriterion("jl_id >", value, "jlId");
            return (Criteria) this;
        }

        public Criteria andJlIdGreaterThanOrEqualTo(Integer value) {
            addCriterion("jl_id >=", value, "jlId");
            return (Criteria) this;
        }

        public Criteria andJlIdLessThan(Integer value) {
            addCriterion("jl_id <", value, "jlId");
            return (Criteria) this;
        }

        public Criteria andJlIdLessThanOrEqualTo(Integer value) {
            addCriterion("jl_id <=", value, "jlId");
            return (Criteria) this;
        }

        public Criteria andJlIdIn(List<Integer> values) {
            addCriterion("jl_id in", values, "jlId");
            return (Criteria) this;
        }

        public Criteria andJlIdNotIn(List<Integer> values) {
            addCriterion("jl_id not in", values, "jlId");
            return (Criteria) this;
        }

        public Criteria andJlIdBetween(Integer value1, Integer value2) {
            addCriterion("jl_id between", value1, value2, "jlId");
            return (Criteria) this;
        }

        public Criteria andJlIdNotBetween(Integer value1, Integer value2) {
            addCriterion("jl_id not between", value1, value2, "jlId");
            return (Criteria) this;
        }

        public Criteria andEmployeeIdIsNull() {
            addCriterion("employee_id is null");
            return (Criteria) this;
        }

        public Criteria andEmployeeIdIsNotNull() {
            addCriterion("employee_id is not null");
            return (Criteria) this;
        }

        public Criteria andEmployeeIdEqualTo(String value) {
            addCriterion("employee_id =", value, "employeeId");
            return (Criteria) this;
        }

        public Criteria andEmployeeIdNotEqualTo(String value) {
            addCriterion("employee_id <>", value, "employeeId");
            return (Criteria) this;
        }

        public Criteria andEmployeeIdGreaterThan(String value) {
            addCriterion("employee_id >", value, "employeeId");
            return (Criteria) this;
        }

        public Criteria andEmployeeIdGreaterThanOrEqualTo(String value) {
            addCriterion("employee_id >=", value, "employeeId");
            return (Criteria) this;
        }

        public Criteria andEmployeeIdLessThan(String value) {
            addCriterion("employee_id <", value, "employeeId");
            return (Criteria) this;
        }

        public Criteria andEmployeeIdLessThanOrEqualTo(String value) {
            addCriterion("employee_id <=", value, "employeeId");
            return (Criteria) this;
        }

        public Criteria andEmployeeIdLike(String value) {
            addCriterion("employee_id like", value, "employeeId");
            return (Criteria) this;
        }

        public Criteria andEmployeeIdNotLike(String value) {
            addCriterion("employee_id not like", value, "employeeId");
            return (Criteria) this;
        }

        public Criteria andEmployeeIdIn(List<String> values) {
            addCriterion("employee_id in", values, "employeeId");
            return (Criteria) this;
        }

        public Criteria andEmployeeIdNotIn(List<String> values) {
            addCriterion("employee_id not in", values, "employeeId");
            return (Criteria) this;
        }

        public Criteria andEmployeeIdBetween(String value1, String value2) {
            addCriterion("employee_id between", value1, value2, "employeeId");
            return (Criteria) this;
        }

        public Criteria andEmployeeIdNotBetween(String value1, String value2) {
            addCriterion("employee_id not between", value1, value2, "employeeId");
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