package com.gys.entity;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class OrdersExample {
    protected String orderByClause;

    protected boolean distinct;

    protected List<Criteria> oredCriteria;

    public OrdersExample() {
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

        public Criteria andOrderStartDateIsNull() {
            addCriterion("order_start_date is null");
            return (Criteria) this;
        }

        public Criteria andOrderStartDateIsNotNull() {
            addCriterion("order_start_date is not null");
            return (Criteria) this;
        }

        public Criteria andOrderStartDateEqualTo(Date value) {
            addCriterion("order_start_date =", value, "orderStartDate");
            return (Criteria) this;
        }

        public Criteria andOrderStartDateNotEqualTo(Date value) {
            addCriterion("order_start_date <>", value, "orderStartDate");
            return (Criteria) this;
        }

        public Criteria andOrderStartDateGreaterThan(Date value) {
            addCriterion("order_start_date >", value, "orderStartDate");
            return (Criteria) this;
        }

        public Criteria andOrderStartDateGreaterThanOrEqualTo(Date value) {
            addCriterion("order_start_date >=", value, "orderStartDate");
            return (Criteria) this;
        }

        public Criteria andOrderStartDateLessThan(Date value) {
            addCriterion("order_start_date <", value, "orderStartDate");
            return (Criteria) this;
        }

        public Criteria andOrderStartDateLessThanOrEqualTo(Date value) {
            addCriterion("order_start_date <=", value, "orderStartDate");
            return (Criteria) this;
        }

        public Criteria andOrderStartDateIn(List<Date> values) {
            addCriterion("order_start_date in", values, "orderStartDate");
            return (Criteria) this;
        }

        public Criteria andOrderStartDateNotIn(List<Date> values) {
            addCriterion("order_start_date not in", values, "orderStartDate");
            return (Criteria) this;
        }

        public Criteria andOrderStartDateBetween(Date value1, Date value2) {
            addCriterion("order_start_date between", value1, value2, "orderStartDate");
            return (Criteria) this;
        }

        public Criteria andOrderStartDateNotBetween(Date value1, Date value2) {
            addCriterion("order_start_date not between", value1, value2, "orderStartDate");
            return (Criteria) this;
        }

        public Criteria andOrderFindTimeIsNull() {
            addCriterion("order_find_time is null");
            return (Criteria) this;
        }

        public Criteria andOrderFindTimeIsNotNull() {
            addCriterion("order_find_time is not null");
            return (Criteria) this;
        }

        public Criteria andOrderFindTimeEqualTo(Date value) {
            addCriterion("order_find_time =", value, "orderFindTime");
            return (Criteria) this;
        }

        public Criteria andOrderFindTimeNotEqualTo(Date value) {
            addCriterion("order_find_time <>", value, "orderFindTime");
            return (Criteria) this;
        }

        public Criteria andOrderFindTimeGreaterThan(Date value) {
            addCriterion("order_find_time >", value, "orderFindTime");
            return (Criteria) this;
        }

        public Criteria andOrderFindTimeGreaterThanOrEqualTo(Date value) {
            addCriterion("order_find_time >=", value, "orderFindTime");
            return (Criteria) this;
        }

        public Criteria andOrderFindTimeLessThan(Date value) {
            addCriterion("order_find_time <", value, "orderFindTime");
            return (Criteria) this;
        }

        public Criteria andOrderFindTimeLessThanOrEqualTo(Date value) {
            addCriterion("order_find_time <=", value, "orderFindTime");
            return (Criteria) this;
        }

        public Criteria andOrderFindTimeIn(List<Date> values) {
            addCriterion("order_find_time in", values, "orderFindTime");
            return (Criteria) this;
        }

        public Criteria andOrderFindTimeNotIn(List<Date> values) {
            addCriterion("order_find_time not in", values, "orderFindTime");
            return (Criteria) this;
        }

        public Criteria andOrderFindTimeBetween(Date value1, Date value2) {
            addCriterion("order_find_time between", value1, value2, "orderFindTime");
            return (Criteria) this;
        }

        public Criteria andOrderFindTimeNotBetween(Date value1, Date value2) {
            addCriterion("order_find_time not between", value1, value2, "orderFindTime");
            return (Criteria) this;
        }

        public Criteria andOrderAnsTimeIsNull() {
            addCriterion("order_ans_time is null");
            return (Criteria) this;
        }

        public Criteria andOrderAnsTimeIsNotNull() {
            addCriterion("order_ans_time is not null");
            return (Criteria) this;
        }

        public Criteria andOrderAnsTimeEqualTo(Date value) {
            addCriterion("order_ans_time =", value, "orderAnsTime");
            return (Criteria) this;
        }

        public Criteria andOrderAnsTimeNotEqualTo(Date value) {
            addCriterion("order_ans_time <>", value, "orderAnsTime");
            return (Criteria) this;
        }

        public Criteria andOrderAnsTimeGreaterThan(Date value) {
            addCriterion("order_ans_time >", value, "orderAnsTime");
            return (Criteria) this;
        }

        public Criteria andOrderAnsTimeGreaterThanOrEqualTo(Date value) {
            addCriterion("order_ans_time >=", value, "orderAnsTime");
            return (Criteria) this;
        }

        public Criteria andOrderAnsTimeLessThan(Date value) {
            addCriterion("order_ans_time <", value, "orderAnsTime");
            return (Criteria) this;
        }

        public Criteria andOrderAnsTimeLessThanOrEqualTo(Date value) {
            addCriterion("order_ans_time <=", value, "orderAnsTime");
            return (Criteria) this;
        }

        public Criteria andOrderAnsTimeIn(List<Date> values) {
            addCriterion("order_ans_time in", values, "orderAnsTime");
            return (Criteria) this;
        }

        public Criteria andOrderAnsTimeNotIn(List<Date> values) {
            addCriterion("order_ans_time not in", values, "orderAnsTime");
            return (Criteria) this;
        }

        public Criteria andOrderAnsTimeBetween(Date value1, Date value2) {
            addCriterion("order_ans_time between", value1, value2, "orderAnsTime");
            return (Criteria) this;
        }

        public Criteria andOrderAnsTimeNotBetween(Date value1, Date value2) {
            addCriterion("order_ans_time not between", value1, value2, "orderAnsTime");
            return (Criteria) this;
        }

        public Criteria andOrderSendDateIsNull() {
            addCriterion("order_send_date is null");
            return (Criteria) this;
        }

        public Criteria andOrderSendDateIsNotNull() {
            addCriterion("order_send_date is not null");
            return (Criteria) this;
        }

        public Criteria andOrderSendDateEqualTo(Date value) {
            addCriterion("order_send_date =", value, "orderSendDate");
            return (Criteria) this;
        }

        public Criteria andOrderSendDateNotEqualTo(Date value) {
            addCriterion("order_send_date <>", value, "orderSendDate");
            return (Criteria) this;
        }

        public Criteria andOrderSendDateGreaterThan(Date value) {
            addCriterion("order_send_date >", value, "orderSendDate");
            return (Criteria) this;
        }

        public Criteria andOrderSendDateGreaterThanOrEqualTo(Date value) {
            addCriterion("order_send_date >=", value, "orderSendDate");
            return (Criteria) this;
        }

        public Criteria andOrderSendDateLessThan(Date value) {
            addCriterion("order_send_date <", value, "orderSendDate");
            return (Criteria) this;
        }

        public Criteria andOrderSendDateLessThanOrEqualTo(Date value) {
            addCriterion("order_send_date <=", value, "orderSendDate");
            return (Criteria) this;
        }

        public Criteria andOrderSendDateIn(List<Date> values) {
            addCriterion("order_send_date in", values, "orderSendDate");
            return (Criteria) this;
        }

        public Criteria andOrderSendDateNotIn(List<Date> values) {
            addCriterion("order_send_date not in", values, "orderSendDate");
            return (Criteria) this;
        }

        public Criteria andOrderSendDateBetween(Date value1, Date value2) {
            addCriterion("order_send_date between", value1, value2, "orderSendDate");
            return (Criteria) this;
        }

        public Criteria andOrderSendDateNotBetween(Date value1, Date value2) {
            addCriterion("order_send_date not between", value1, value2, "orderSendDate");
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

        public Criteria andOrderPriceIsNull() {
            addCriterion("order_price is null");
            return (Criteria) this;
        }

        public Criteria andOrderPriceIsNotNull() {
            addCriterion("order_price is not null");
            return (Criteria) this;
        }

        public Criteria andOrderPriceEqualTo(BigDecimal value) {
            addCriterion("order_price =", value, "orderPrice");
            return (Criteria) this;
        }

        public Criteria andOrderPriceNotEqualTo(BigDecimal value) {
            addCriterion("order_price <>", value, "orderPrice");
            return (Criteria) this;
        }

        public Criteria andOrderPriceGreaterThan(BigDecimal value) {
            addCriterion("order_price >", value, "orderPrice");
            return (Criteria) this;
        }

        public Criteria andOrderPriceGreaterThanOrEqualTo(BigDecimal value) {
            addCriterion("order_price >=", value, "orderPrice");
            return (Criteria) this;
        }

        public Criteria andOrderPriceLessThan(BigDecimal value) {
            addCriterion("order_price <", value, "orderPrice");
            return (Criteria) this;
        }

        public Criteria andOrderPriceLessThanOrEqualTo(BigDecimal value) {
            addCriterion("order_price <=", value, "orderPrice");
            return (Criteria) this;
        }

        public Criteria andOrderPriceIn(List<BigDecimal> values) {
            addCriterion("order_price in", values, "orderPrice");
            return (Criteria) this;
        }

        public Criteria andOrderPriceNotIn(List<BigDecimal> values) {
            addCriterion("order_price not in", values, "orderPrice");
            return (Criteria) this;
        }

        public Criteria andOrderPriceBetween(BigDecimal value1, BigDecimal value2) {
            addCriterion("order_price between", value1, value2, "orderPrice");
            return (Criteria) this;
        }

        public Criteria andOrderPriceNotBetween(BigDecimal value1, BigDecimal value2) {
            addCriterion("order_price not between", value1, value2, "orderPrice");
            return (Criteria) this;
        }

        public Criteria andAddressIdIsNull() {
            addCriterion("address_id is null");
            return (Criteria) this;
        }

        public Criteria andAddressIdIsNotNull() {
            addCriterion("address_id is not null");
            return (Criteria) this;
        }

        public Criteria andAddressIdEqualTo(Integer value) {
            addCriterion("address_id =", value, "addressId");
            return (Criteria) this;
        }

        public Criteria andAddressIdNotEqualTo(Integer value) {
            addCriterion("address_id <>", value, "addressId");
            return (Criteria) this;
        }

        public Criteria andAddressIdGreaterThan(Integer value) {
            addCriterion("address_id >", value, "addressId");
            return (Criteria) this;
        }

        public Criteria andAddressIdGreaterThanOrEqualTo(Integer value) {
            addCriterion("address_id >=", value, "addressId");
            return (Criteria) this;
        }

        public Criteria andAddressIdLessThan(Integer value) {
            addCriterion("address_id <", value, "addressId");
            return (Criteria) this;
        }

        public Criteria andAddressIdLessThanOrEqualTo(Integer value) {
            addCriterion("address_id <=", value, "addressId");
            return (Criteria) this;
        }

        public Criteria andAddressIdIn(List<Integer> values) {
            addCriterion("address_id in", values, "addressId");
            return (Criteria) this;
        }

        public Criteria andAddressIdNotIn(List<Integer> values) {
            addCriterion("address_id not in", values, "addressId");
            return (Criteria) this;
        }

        public Criteria andAddressIdBetween(Integer value1, Integer value2) {
            addCriterion("address_id between", value1, value2, "addressId");
            return (Criteria) this;
        }

        public Criteria andAddressIdNotBetween(Integer value1, Integer value2) {
            addCriterion("address_id not between", value1, value2, "addressId");
            return (Criteria) this;
        }

        public Criteria andPayStateIsNull() {
            addCriterion("pay_state is null");
            return (Criteria) this;
        }

        public Criteria andPayStateIsNotNull() {
            addCriterion("pay_state is not null");
            return (Criteria) this;
        }

        public Criteria andPayStateEqualTo(String value) {
            addCriterion("pay_state =", value, "payState");
            return (Criteria) this;
        }

        public Criteria andPayStateNotEqualTo(String value) {
            addCriterion("pay_state <>", value, "payState");
            return (Criteria) this;
        }

        public Criteria andPayStateGreaterThan(String value) {
            addCriterion("pay_state >", value, "payState");
            return (Criteria) this;
        }

        public Criteria andPayStateGreaterThanOrEqualTo(String value) {
            addCriterion("pay_state >=", value, "payState");
            return (Criteria) this;
        }

        public Criteria andPayStateLessThan(String value) {
            addCriterion("pay_state <", value, "payState");
            return (Criteria) this;
        }

        public Criteria andPayStateLessThanOrEqualTo(String value) {
            addCriterion("pay_state <=", value, "payState");
            return (Criteria) this;
        }

        public Criteria andPayStateLike(String value) {
            addCriterion("pay_state like", value, "payState");
            return (Criteria) this;
        }

        public Criteria andPayStateNotLike(String value) {
            addCriterion("pay_state not like", value, "payState");
            return (Criteria) this;
        }

        public Criteria andPayStateIn(List<String> values) {
            addCriterion("pay_state in", values, "payState");
            return (Criteria) this;
        }

        public Criteria andPayStateNotIn(List<String> values) {
            addCriterion("pay_state not in", values, "payState");
            return (Criteria) this;
        }

        public Criteria andPayStateBetween(String value1, String value2) {
            addCriterion("pay_state between", value1, value2, "payState");
            return (Criteria) this;
        }

        public Criteria andPayStateNotBetween(String value1, String value2) {
            addCriterion("pay_state not between", value1, value2, "payState");
            return (Criteria) this;
        }

        public Criteria andOrderPayDateIsNull() {
            addCriterion("order_pay_date is null");
            return (Criteria) this;
        }

        public Criteria andOrderPayDateIsNotNull() {
            addCriterion("order_pay_date is not null");
            return (Criteria) this;
        }

        public Criteria andOrderPayDateEqualTo(String value) {
            addCriterion("order_pay_date =", value, "orderPayDate");
            return (Criteria) this;
        }

        public Criteria andOrderPayDateNotEqualTo(String value) {
            addCriterion("order_pay_date <>", value, "orderPayDate");
            return (Criteria) this;
        }

        public Criteria andOrderPayDateGreaterThan(String value) {
            addCriterion("order_pay_date >", value, "orderPayDate");
            return (Criteria) this;
        }

        public Criteria andOrderPayDateGreaterThanOrEqualTo(String value) {
            addCriterion("order_pay_date >=", value, "orderPayDate");
            return (Criteria) this;
        }

        public Criteria andOrderPayDateLessThan(String value) {
            addCriterion("order_pay_date <", value, "orderPayDate");
            return (Criteria) this;
        }

        public Criteria andOrderPayDateLessThanOrEqualTo(String value) {
            addCriterion("order_pay_date <=", value, "orderPayDate");
            return (Criteria) this;
        }

        public Criteria andOrderPayDateLike(String value) {
            addCriterion("order_pay_date like", value, "orderPayDate");
            return (Criteria) this;
        }

        public Criteria andOrderPayDateNotLike(String value) {
            addCriterion("order_pay_date not like", value, "orderPayDate");
            return (Criteria) this;
        }

        public Criteria andOrderPayDateIn(List<String> values) {
            addCriterion("order_pay_date in", values, "orderPayDate");
            return (Criteria) this;
        }

        public Criteria andOrderPayDateNotIn(List<String> values) {
            addCriterion("order_pay_date not in", values, "orderPayDate");
            return (Criteria) this;
        }

        public Criteria andOrderPayDateBetween(String value1, String value2) {
            addCriterion("order_pay_date between", value1, value2, "orderPayDate");
            return (Criteria) this;
        }

        public Criteria andOrderPayDateNotBetween(String value1, String value2) {
            addCriterion("order_pay_date not between", value1, value2, "orderPayDate");
            return (Criteria) this;
        }

        public Criteria andOrderPayTypeIsNull() {
            addCriterion("order_pay_type is null");
            return (Criteria) this;
        }

        public Criteria andOrderPayTypeIsNotNull() {
            addCriterion("order_pay_type is not null");
            return (Criteria) this;
        }

        public Criteria andOrderPayTypeEqualTo(String value) {
            addCriterion("order_pay_type =", value, "orderPayType");
            return (Criteria) this;
        }

        public Criteria andOrderPayTypeNotEqualTo(String value) {
            addCriterion("order_pay_type <>", value, "orderPayType");
            return (Criteria) this;
        }

        public Criteria andOrderPayTypeGreaterThan(String value) {
            addCriterion("order_pay_type >", value, "orderPayType");
            return (Criteria) this;
        }

        public Criteria andOrderPayTypeGreaterThanOrEqualTo(String value) {
            addCriterion("order_pay_type >=", value, "orderPayType");
            return (Criteria) this;
        }

        public Criteria andOrderPayTypeLessThan(String value) {
            addCriterion("order_pay_type <", value, "orderPayType");
            return (Criteria) this;
        }

        public Criteria andOrderPayTypeLessThanOrEqualTo(String value) {
            addCriterion("order_pay_type <=", value, "orderPayType");
            return (Criteria) this;
        }

        public Criteria andOrderPayTypeLike(String value) {
            addCriterion("order_pay_type like", value, "orderPayType");
            return (Criteria) this;
        }

        public Criteria andOrderPayTypeNotLike(String value) {
            addCriterion("order_pay_type not like", value, "orderPayType");
            return (Criteria) this;
        }

        public Criteria andOrderPayTypeIn(List<String> values) {
            addCriterion("order_pay_type in", values, "orderPayType");
            return (Criteria) this;
        }

        public Criteria andOrderPayTypeNotIn(List<String> values) {
            addCriterion("order_pay_type not in", values, "orderPayType");
            return (Criteria) this;
        }

        public Criteria andOrderPayTypeBetween(String value1, String value2) {
            addCriterion("order_pay_type between", value1, value2, "orderPayType");
            return (Criteria) this;
        }

        public Criteria andOrderPayTypeNotBetween(String value1, String value2) {
            addCriterion("order_pay_type not between", value1, value2, "orderPayType");
            return (Criteria) this;
        }

        public Criteria andTouserDatelongIsNull() {
            addCriterion("touser_datelong is null");
            return (Criteria) this;
        }

        public Criteria andTouserDatelongIsNotNull() {
            addCriterion("touser_datelong is not null");
            return (Criteria) this;
        }

        public Criteria andTouserDatelongEqualTo(String value) {
            addCriterion("touser_datelong =", value, "touserDatelong");
            return (Criteria) this;
        }

        public Criteria andTouserDatelongNotEqualTo(String value) {
            addCriterion("touser_datelong <>", value, "touserDatelong");
            return (Criteria) this;
        }

        public Criteria andTouserDatelongGreaterThan(String value) {
            addCriterion("touser_datelong >", value, "touserDatelong");
            return (Criteria) this;
        }

        public Criteria andTouserDatelongGreaterThanOrEqualTo(String value) {
            addCriterion("touser_datelong >=", value, "touserDatelong");
            return (Criteria) this;
        }

        public Criteria andTouserDatelongLessThan(String value) {
            addCriterion("touser_datelong <", value, "touserDatelong");
            return (Criteria) this;
        }

        public Criteria andTouserDatelongLessThanOrEqualTo(String value) {
            addCriterion("touser_datelong <=", value, "touserDatelong");
            return (Criteria) this;
        }

        public Criteria andTouserDatelongLike(String value) {
            addCriterion("touser_datelong like", value, "touserDatelong");
            return (Criteria) this;
        }

        public Criteria andTouserDatelongNotLike(String value) {
            addCriterion("touser_datelong not like", value, "touserDatelong");
            return (Criteria) this;
        }

        public Criteria andTouserDatelongIn(List<String> values) {
            addCriterion("touser_datelong in", values, "touserDatelong");
            return (Criteria) this;
        }

        public Criteria andTouserDatelongNotIn(List<String> values) {
            addCriterion("touser_datelong not in", values, "touserDatelong");
            return (Criteria) this;
        }

        public Criteria andTouserDatelongBetween(String value1, String value2) {
            addCriterion("touser_datelong between", value1, value2, "touserDatelong");
            return (Criteria) this;
        }

        public Criteria andTouserDatelongNotBetween(String value1, String value2) {
            addCriterion("touser_datelong not between", value1, value2, "touserDatelong");
            return (Criteria) this;
        }

        public Criteria andUserIdIsNull() {
            addCriterion("user_id is null");
            return (Criteria) this;
        }

        public Criteria andUserIdIsNotNull() {
            addCriterion("user_id is not null");
            return (Criteria) this;
        }

        public Criteria andUserIdEqualTo(Integer value) {
            addCriterion("user_id =", value, "userId");
            return (Criteria) this;
        }

        public Criteria andUserIdNotEqualTo(Integer value) {
            addCriterion("user_id <>", value, "userId");
            return (Criteria) this;
        }

        public Criteria andUserIdGreaterThan(Integer value) {
            addCriterion("user_id >", value, "userId");
            return (Criteria) this;
        }

        public Criteria andUserIdGreaterThanOrEqualTo(Integer value) {
            addCriterion("user_id >=", value, "userId");
            return (Criteria) this;
        }

        public Criteria andUserIdLessThan(Integer value) {
            addCriterion("user_id <", value, "userId");
            return (Criteria) this;
        }

        public Criteria andUserIdLessThanOrEqualTo(Integer value) {
            addCriterion("user_id <=", value, "userId");
            return (Criteria) this;
        }

        public Criteria andUserIdIn(List<Integer> values) {
            addCriterion("user_id in", values, "userId");
            return (Criteria) this;
        }

        public Criteria andUserIdNotIn(List<Integer> values) {
            addCriterion("user_id not in", values, "userId");
            return (Criteria) this;
        }

        public Criteria andUserIdBetween(Integer value1, Integer value2) {
            addCriterion("user_id between", value1, value2, "userId");
            return (Criteria) this;
        }

        public Criteria andUserIdNotBetween(Integer value1, Integer value2) {
            addCriterion("user_id not between", value1, value2, "userId");
            return (Criteria) this;
        }

        public Criteria andCpEmployeeIdIsNull() {
            addCriterion("cp_employee_id is null");
            return (Criteria) this;
        }

        public Criteria andCpEmployeeIdIsNotNull() {
            addCriterion("cp_employee_id is not null");
            return (Criteria) this;
        }

        public Criteria andCpEmployeeIdEqualTo(String value) {
            addCriterion("cp_employee_id =", value, "cpEmployeeId");
            return (Criteria) this;
        }

        public Criteria andCpEmployeeIdNotEqualTo(String value) {
            addCriterion("cp_employee_id <>", value, "cpEmployeeId");
            return (Criteria) this;
        }

        public Criteria andCpEmployeeIdGreaterThan(String value) {
            addCriterion("cp_employee_id >", value, "cpEmployeeId");
            return (Criteria) this;
        }

        public Criteria andCpEmployeeIdGreaterThanOrEqualTo(String value) {
            addCriterion("cp_employee_id >=", value, "cpEmployeeId");
            return (Criteria) this;
        }

        public Criteria andCpEmployeeIdLessThan(String value) {
            addCriterion("cp_employee_id <", value, "cpEmployeeId");
            return (Criteria) this;
        }

        public Criteria andCpEmployeeIdLessThanOrEqualTo(String value) {
            addCriterion("cp_employee_id <=", value, "cpEmployeeId");
            return (Criteria) this;
        }

        public Criteria andCpEmployeeIdLike(String value) {
            addCriterion("cp_employee_id like", value, "cpEmployeeId");
            return (Criteria) this;
        }

        public Criteria andCpEmployeeIdNotLike(String value) {
            addCriterion("cp_employee_id not like", value, "cpEmployeeId");
            return (Criteria) this;
        }

        public Criteria andCpEmployeeIdIn(List<String> values) {
            addCriterion("cp_employee_id in", values, "cpEmployeeId");
            return (Criteria) this;
        }

        public Criteria andCpEmployeeIdNotIn(List<String> values) {
            addCriterion("cp_employee_id not in", values, "cpEmployeeId");
            return (Criteria) this;
        }

        public Criteria andCpEmployeeIdBetween(String value1, String value2) {
            addCriterion("cp_employee_id between", value1, value2, "cpEmployeeId");
            return (Criteria) this;
        }

        public Criteria andCpEmployeeIdNotBetween(String value1, String value2) {
            addCriterion("cp_employee_id not between", value1, value2, "cpEmployeeId");
            return (Criteria) this;
        }

        public Criteria andAnsEmployeeIdIsNull() {
            addCriterion("ans_employee_id is null");
            return (Criteria) this;
        }

        public Criteria andAnsEmployeeIdIsNotNull() {
            addCriterion("ans_employee_id is not null");
            return (Criteria) this;
        }

        public Criteria andAnsEmployeeIdEqualTo(String value) {
            addCriterion("ans_employee_id =", value, "ansEmployeeId");
            return (Criteria) this;
        }

        public Criteria andAnsEmployeeIdNotEqualTo(String value) {
            addCriterion("ans_employee_id <>", value, "ansEmployeeId");
            return (Criteria) this;
        }

        public Criteria andAnsEmployeeIdGreaterThan(String value) {
            addCriterion("ans_employee_id >", value, "ansEmployeeId");
            return (Criteria) this;
        }

        public Criteria andAnsEmployeeIdGreaterThanOrEqualTo(String value) {
            addCriterion("ans_employee_id >=", value, "ansEmployeeId");
            return (Criteria) this;
        }

        public Criteria andAnsEmployeeIdLessThan(String value) {
            addCriterion("ans_employee_id <", value, "ansEmployeeId");
            return (Criteria) this;
        }

        public Criteria andAnsEmployeeIdLessThanOrEqualTo(String value) {
            addCriterion("ans_employee_id <=", value, "ansEmployeeId");
            return (Criteria) this;
        }

        public Criteria andAnsEmployeeIdLike(String value) {
            addCriterion("ans_employee_id like", value, "ansEmployeeId");
            return (Criteria) this;
        }

        public Criteria andAnsEmployeeIdNotLike(String value) {
            addCriterion("ans_employee_id not like", value, "ansEmployeeId");
            return (Criteria) this;
        }

        public Criteria andAnsEmployeeIdIn(List<String> values) {
            addCriterion("ans_employee_id in", values, "ansEmployeeId");
            return (Criteria) this;
        }

        public Criteria andAnsEmployeeIdNotIn(List<String> values) {
            addCriterion("ans_employee_id not in", values, "ansEmployeeId");
            return (Criteria) this;
        }

        public Criteria andAnsEmployeeIdBetween(String value1, String value2) {
            addCriterion("ans_employee_id between", value1, value2, "ansEmployeeId");
            return (Criteria) this;
        }

        public Criteria andAnsEmployeeIdNotBetween(String value1, String value2) {
            addCriterion("ans_employee_id not between", value1, value2, "ansEmployeeId");
            return (Criteria) this;
        }

        public Criteria andMsgIsNull() {
            addCriterion("msg is null");
            return (Criteria) this;
        }

        public Criteria andMsgIsNotNull() {
            addCriterion("msg is not null");
            return (Criteria) this;
        }

        public Criteria andMsgEqualTo(String value) {
            addCriterion("msg =", value, "msg");
            return (Criteria) this;
        }

        public Criteria andMsgNotEqualTo(String value) {
            addCriterion("msg <>", value, "msg");
            return (Criteria) this;
        }

        public Criteria andMsgGreaterThan(String value) {
            addCriterion("msg >", value, "msg");
            return (Criteria) this;
        }

        public Criteria andMsgGreaterThanOrEqualTo(String value) {
            addCriterion("msg >=", value, "msg");
            return (Criteria) this;
        }

        public Criteria andMsgLessThan(String value) {
            addCriterion("msg <", value, "msg");
            return (Criteria) this;
        }

        public Criteria andMsgLessThanOrEqualTo(String value) {
            addCriterion("msg <=", value, "msg");
            return (Criteria) this;
        }

        public Criteria andMsgLike(String value) {
            addCriterion("msg like", value, "msg");
            return (Criteria) this;
        }

        public Criteria andMsgNotLike(String value) {
            addCriterion("msg not like", value, "msg");
            return (Criteria) this;
        }

        public Criteria andMsgIn(List<String> values) {
            addCriterion("msg in", values, "msg");
            return (Criteria) this;
        }

        public Criteria andMsgNotIn(List<String> values) {
            addCriterion("msg not in", values, "msg");
            return (Criteria) this;
        }

        public Criteria andMsgBetween(String value1, String value2) {
            addCriterion("msg between", value1, value2, "msg");
            return (Criteria) this;
        }

        public Criteria andMsgNotBetween(String value1, String value2) {
            addCriterion("msg not between", value1, value2, "msg");
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

        public Criteria andJlIdIsNull() {
            addCriterion("jl_id is null");
            return (Criteria) this;
        }

        public Criteria andJlIdIsNotNull() {
            addCriterion("jl_id is not null");
            return (Criteria) this;
        }

        public Criteria andJlIdEqualTo(String value) {
            addCriterion("jl_id =", value, "jlId");
            return (Criteria) this;
        }

        public Criteria andJlIdNotEqualTo(String value) {
            addCriterion("jl_id <>", value, "jlId");
            return (Criteria) this;
        }

        public Criteria andJlIdGreaterThan(String value) {
            addCriterion("jl_id >", value, "jlId");
            return (Criteria) this;
        }

        public Criteria andJlIdGreaterThanOrEqualTo(String value) {
            addCriterion("jl_id >=", value, "jlId");
            return (Criteria) this;
        }

        public Criteria andJlIdLessThan(String value) {
            addCriterion("jl_id <", value, "jlId");
            return (Criteria) this;
        }

        public Criteria andJlIdLessThanOrEqualTo(String value) {
            addCriterion("jl_id <=", value, "jlId");
            return (Criteria) this;
        }

        public Criteria andJlIdLike(String value) {
            addCriterion("jl_id like", value, "jlId");
            return (Criteria) this;
        }

        public Criteria andJlIdNotLike(String value) {
            addCriterion("jl_id not like", value, "jlId");
            return (Criteria) this;
        }

        public Criteria andJlIdIn(List<String> values) {
            addCriterion("jl_id in", values, "jlId");
            return (Criteria) this;
        }

        public Criteria andJlIdNotIn(List<String> values) {
            addCriterion("jl_id not in", values, "jlId");
            return (Criteria) this;
        }

        public Criteria andJlIdBetween(String value1, String value2) {
            addCriterion("jl_id between", value1, value2, "jlId");
            return (Criteria) this;
        }

        public Criteria andJlIdNotBetween(String value1, String value2) {
            addCriterion("jl_id not between", value1, value2, "jlId");
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