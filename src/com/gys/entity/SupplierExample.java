package com.gys.entity;

import java.util.ArrayList;
import java.util.Date;
import java.util.Iterator;
import java.util.List;

public class SupplierExample {
    protected String orderByClause;

    protected boolean distinct;

    protected List<Criteria> oredCriteria;

    public SupplierExample() {
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

        protected void addCriterionForJDBCDate(String condition, Date value, String property) {
            if (value == null) {
                throw new RuntimeException("Value for " + property + " cannot be null");
            }
            addCriterion(condition, new java.sql.Date(value.getTime()), property);
        }

        protected void addCriterionForJDBCDate(String condition, List<Date> values, String property) {
            if (values == null || values.size() == 0) {
                throw new RuntimeException("Value list for " + property + " cannot be null or empty");
            }
            List<java.sql.Date> dateList = new ArrayList<java.sql.Date>();
            Iterator<Date> iter = values.iterator();
            while (iter.hasNext()) {
                dateList.add(new java.sql.Date(iter.next().getTime()));
            }
            addCriterion(condition, dateList, property);
        }

        protected void addCriterionForJDBCDate(String condition, Date value1, Date value2, String property) {
            if (value1 == null || value2 == null) {
                throw new RuntimeException("Between values for " + property + " cannot be null");
            }
            addCriterion(condition, new java.sql.Date(value1.getTime()), new java.sql.Date(value2.getTime()), property);
        }

        public Criteria andSupplierIdIsNull() {
            addCriterion("supplier_id is null");
            return (Criteria) this;
        }

        public Criteria andSupplierIdIsNotNull() {
            addCriterion("supplier_id is not null");
            return (Criteria) this;
        }

        public Criteria andSupplierIdEqualTo(Integer value) {
            addCriterion("supplier_id =", value, "supplierId");
            return (Criteria) this;
        }

        public Criteria andSupplierIdNotEqualTo(Integer value) {
            addCriterion("supplier_id <>", value, "supplierId");
            return (Criteria) this;
        }

        public Criteria andSupplierIdGreaterThan(Integer value) {
            addCriterion("supplier_id >", value, "supplierId");
            return (Criteria) this;
        }

        public Criteria andSupplierIdGreaterThanOrEqualTo(Integer value) {
            addCriterion("supplier_id >=", value, "supplierId");
            return (Criteria) this;
        }

        public Criteria andSupplierIdLessThan(Integer value) {
            addCriterion("supplier_id <", value, "supplierId");
            return (Criteria) this;
        }

        public Criteria andSupplierIdLessThanOrEqualTo(Integer value) {
            addCriterion("supplier_id <=", value, "supplierId");
            return (Criteria) this;
        }

        public Criteria andSupplierIdIn(List<Integer> values) {
            addCriterion("supplier_id in", values, "supplierId");
            return (Criteria) this;
        }

        public Criteria andSupplierIdNotIn(List<Integer> values) {
            addCriterion("supplier_id not in", values, "supplierId");
            return (Criteria) this;
        }

        public Criteria andSupplierIdBetween(Integer value1, Integer value2) {
            addCriterion("supplier_id between", value1, value2, "supplierId");
            return (Criteria) this;
        }

        public Criteria andSupplierIdNotBetween(Integer value1, Integer value2) {
            addCriterion("supplier_id not between", value1, value2, "supplierId");
            return (Criteria) this;
        }

        public Criteria andSupplierNameIsNull() {
            addCriterion("supplier_name is null");
            return (Criteria) this;
        }

        public Criteria andSupplierNameIsNotNull() {
            addCriterion("supplier_name is not null");
            return (Criteria) this;
        }

        public Criteria andSupplierNameEqualTo(String value) {
            addCriterion("supplier_name =", value, "supplierName");
            return (Criteria) this;
        }

        public Criteria andSupplierNameNotEqualTo(String value) {
            addCriterion("supplier_name <>", value, "supplierName");
            return (Criteria) this;
        }

        public Criteria andSupplierNameGreaterThan(String value) {
            addCriterion("supplier_name >", value, "supplierName");
            return (Criteria) this;
        }

        public Criteria andSupplierNameGreaterThanOrEqualTo(String value) {
            addCriterion("supplier_name >=", value, "supplierName");
            return (Criteria) this;
        }

        public Criteria andSupplierNameLessThan(String value) {
            addCriterion("supplier_name <", value, "supplierName");
            return (Criteria) this;
        }

        public Criteria andSupplierNameLessThanOrEqualTo(String value) {
            addCriterion("supplier_name <=", value, "supplierName");
            return (Criteria) this;
        }

        public Criteria andSupplierNameLike(String value) {
            addCriterion("supplier_name like", value, "supplierName");
            return (Criteria) this;
        }

        public Criteria andSupplierNameNotLike(String value) {
            addCriterion("supplier_name not like", value, "supplierName");
            return (Criteria) this;
        }

        public Criteria andSupplierNameIn(List<String> values) {
            addCriterion("supplier_name in", values, "supplierName");
            return (Criteria) this;
        }

        public Criteria andSupplierNameNotIn(List<String> values) {
            addCriterion("supplier_name not in", values, "supplierName");
            return (Criteria) this;
        }

        public Criteria andSupplierNameBetween(String value1, String value2) {
            addCriterion("supplier_name between", value1, value2, "supplierName");
            return (Criteria) this;
        }

        public Criteria andSupplierNameNotBetween(String value1, String value2) {
            addCriterion("supplier_name not between", value1, value2, "supplierName");
            return (Criteria) this;
        }

        public Criteria andEnglishNameIsNull() {
            addCriterion("english_name is null");
            return (Criteria) this;
        }

        public Criteria andEnglishNameIsNotNull() {
            addCriterion("english_name is not null");
            return (Criteria) this;
        }

        public Criteria andEnglishNameEqualTo(String value) {
            addCriterion("english_name =", value, "englishName");
            return (Criteria) this;
        }

        public Criteria andEnglishNameNotEqualTo(String value) {
            addCriterion("english_name <>", value, "englishName");
            return (Criteria) this;
        }

        public Criteria andEnglishNameGreaterThan(String value) {
            addCriterion("english_name >", value, "englishName");
            return (Criteria) this;
        }

        public Criteria andEnglishNameGreaterThanOrEqualTo(String value) {
            addCriterion("english_name >=", value, "englishName");
            return (Criteria) this;
        }

        public Criteria andEnglishNameLessThan(String value) {
            addCriterion("english_name <", value, "englishName");
            return (Criteria) this;
        }

        public Criteria andEnglishNameLessThanOrEqualTo(String value) {
            addCriterion("english_name <=", value, "englishName");
            return (Criteria) this;
        }

        public Criteria andEnglishNameLike(String value) {
            addCriterion("english_name like", value, "englishName");
            return (Criteria) this;
        }

        public Criteria andEnglishNameNotLike(String value) {
            addCriterion("english_name not like", value, "englishName");
            return (Criteria) this;
        }

        public Criteria andEnglishNameIn(List<String> values) {
            addCriterion("english_name in", values, "englishName");
            return (Criteria) this;
        }

        public Criteria andEnglishNameNotIn(List<String> values) {
            addCriterion("english_name not in", values, "englishName");
            return (Criteria) this;
        }

        public Criteria andEnglishNameBetween(String value1, String value2) {
            addCriterion("english_name between", value1, value2, "englishName");
            return (Criteria) this;
        }

        public Criteria andEnglishNameNotBetween(String value1, String value2) {
            addCriterion("english_name not between", value1, value2, "englishName");
            return (Criteria) this;
        }

        public Criteria andBrandLandIsNull() {
            addCriterion("brand_land is null");
            return (Criteria) this;
        }

        public Criteria andBrandLandIsNotNull() {
            addCriterion("brand_land is not null");
            return (Criteria) this;
        }

        public Criteria andBrandLandEqualTo(String value) {
            addCriterion("brand_land =", value, "brandLand");
            return (Criteria) this;
        }

        public Criteria andBrandLandNotEqualTo(String value) {
            addCriterion("brand_land <>", value, "brandLand");
            return (Criteria) this;
        }

        public Criteria andBrandLandGreaterThan(String value) {
            addCriterion("brand_land >", value, "brandLand");
            return (Criteria) this;
        }

        public Criteria andBrandLandGreaterThanOrEqualTo(String value) {
            addCriterion("brand_land >=", value, "brandLand");
            return (Criteria) this;
        }

        public Criteria andBrandLandLessThan(String value) {
            addCriterion("brand_land <", value, "brandLand");
            return (Criteria) this;
        }

        public Criteria andBrandLandLessThanOrEqualTo(String value) {
            addCriterion("brand_land <=", value, "brandLand");
            return (Criteria) this;
        }

        public Criteria andBrandLandLike(String value) {
            addCriterion("brand_land like", value, "brandLand");
            return (Criteria) this;
        }

        public Criteria andBrandLandNotLike(String value) {
            addCriterion("brand_land not like", value, "brandLand");
            return (Criteria) this;
        }

        public Criteria andBrandLandIn(List<String> values) {
            addCriterion("brand_land in", values, "brandLand");
            return (Criteria) this;
        }

        public Criteria andBrandLandNotIn(List<String> values) {
            addCriterion("brand_land not in", values, "brandLand");
            return (Criteria) this;
        }

        public Criteria andBrandLandBetween(String value1, String value2) {
            addCriterion("brand_land between", value1, value2, "brandLand");
            return (Criteria) this;
        }

        public Criteria andBrandLandNotBetween(String value1, String value2) {
            addCriterion("brand_land not between", value1, value2, "brandLand");
            return (Criteria) this;
        }

        public Criteria andFoundingDateIsNull() {
            addCriterion("founding_date is null");
            return (Criteria) this;
        }

        public Criteria andFoundingDateIsNotNull() {
            addCriterion("founding_date is not null");
            return (Criteria) this;
        }

        public Criteria andFoundingDateEqualTo(String value) {
            addCriterion("founding_date =", value, "foundingDate");
            return (Criteria) this;
        }

        public Criteria andFoundingDateNotEqualTo(String value) {
            addCriterion("founding_date <>", value, "foundingDate");
            return (Criteria) this;
        }

        public Criteria andFoundingDateGreaterThan(String value) {
            addCriterion("founding_date >", value, "foundingDate");
            return (Criteria) this;
        }

        public Criteria andFoundingDateGreaterThanOrEqualTo(String value) {
            addCriterion("founding_date >=", value, "foundingDate");
            return (Criteria) this;
        }

        public Criteria andFoundingDateLessThan(String value) {
            addCriterion("founding_date <", value, "foundingDate");
            return (Criteria) this;
        }

        public Criteria andFoundingDateLessThanOrEqualTo(String value) {
            addCriterion("founding_date <=", value, "foundingDate");
            return (Criteria) this;
        }

        public Criteria andFoundingDateLike(String value) {
            addCriterion("founding_date like", value, "foundingDate");
            return (Criteria) this;
        }

        public Criteria andFoundingDateNotLike(String value) {
            addCriterion("founding_date not like", value, "foundingDate");
            return (Criteria) this;
        }

        public Criteria andFoundingDateIn(List<String> values) {
            addCriterion("founding_date in", values, "foundingDate");
            return (Criteria) this;
        }

        public Criteria andFoundingDateNotIn(List<String> values) {
            addCriterion("founding_date not in", values, "foundingDate");
            return (Criteria) this;
        }

        public Criteria andFoundingDateBetween(String value1, String value2) {
            addCriterion("founding_date between", value1, value2, "foundingDate");
            return (Criteria) this;
        }

        public Criteria andFoundingDateNotBetween(String value1, String value2) {
            addCriterion("founding_date not between", value1, value2, "foundingDate");
            return (Criteria) this;
        }

        public Criteria andPartnerDateIsNull() {
            addCriterion("partner_date is null");
            return (Criteria) this;
        }

        public Criteria andPartnerDateIsNotNull() {
            addCriterion("partner_date is not null");
            return (Criteria) this;
        }

        public Criteria andPartnerDateEqualTo(Date value) {
            addCriterionForJDBCDate("partner_date =", value, "partnerDate");
            return (Criteria) this;
        }

        public Criteria andPartnerDateNotEqualTo(Date value) {
            addCriterionForJDBCDate("partner_date <>", value, "partnerDate");
            return (Criteria) this;
        }

        public Criteria andPartnerDateGreaterThan(Date value) {
            addCriterionForJDBCDate("partner_date >", value, "partnerDate");
            return (Criteria) this;
        }

        public Criteria andPartnerDateGreaterThanOrEqualTo(Date value) {
            addCriterionForJDBCDate("partner_date >=", value, "partnerDate");
            return (Criteria) this;
        }

        public Criteria andPartnerDateLessThan(Date value) {
            addCriterionForJDBCDate("partner_date <", value, "partnerDate");
            return (Criteria) this;
        }

        public Criteria andPartnerDateLessThanOrEqualTo(Date value) {
            addCriterionForJDBCDate("partner_date <=", value, "partnerDate");
            return (Criteria) this;
        }

        public Criteria andPartnerDateIn(List<Date> values) {
            addCriterionForJDBCDate("partner_date in", values, "partnerDate");
            return (Criteria) this;
        }

        public Criteria andPartnerDateNotIn(List<Date> values) {
            addCriterionForJDBCDate("partner_date not in", values, "partnerDate");
            return (Criteria) this;
        }

        public Criteria andPartnerDateBetween(Date value1, Date value2) {
            addCriterionForJDBCDate("partner_date between", value1, value2, "partnerDate");
            return (Criteria) this;
        }

        public Criteria andPartnerDateNotBetween(Date value1, Date value2) {
            addCriterionForJDBCDate("partner_date not between", value1, value2, "partnerDate");
            return (Criteria) this;
        }

        public Criteria andSupplierPhoneIsNull() {
            addCriterion("supplier_phone is null");
            return (Criteria) this;
        }

        public Criteria andSupplierPhoneIsNotNull() {
            addCriterion("supplier_phone is not null");
            return (Criteria) this;
        }

        public Criteria andSupplierPhoneEqualTo(String value) {
            addCriterion("supplier_phone =", value, "supplierPhone");
            return (Criteria) this;
        }

        public Criteria andSupplierPhoneNotEqualTo(String value) {
            addCriterion("supplier_phone <>", value, "supplierPhone");
            return (Criteria) this;
        }

        public Criteria andSupplierPhoneGreaterThan(String value) {
            addCriterion("supplier_phone >", value, "supplierPhone");
            return (Criteria) this;
        }

        public Criteria andSupplierPhoneGreaterThanOrEqualTo(String value) {
            addCriterion("supplier_phone >=", value, "supplierPhone");
            return (Criteria) this;
        }

        public Criteria andSupplierPhoneLessThan(String value) {
            addCriterion("supplier_phone <", value, "supplierPhone");
            return (Criteria) this;
        }

        public Criteria andSupplierPhoneLessThanOrEqualTo(String value) {
            addCriterion("supplier_phone <=", value, "supplierPhone");
            return (Criteria) this;
        }

        public Criteria andSupplierPhoneLike(String value) {
            addCriterion("supplier_phone like", value, "supplierPhone");
            return (Criteria) this;
        }

        public Criteria andSupplierPhoneNotLike(String value) {
            addCriterion("supplier_phone not like", value, "supplierPhone");
            return (Criteria) this;
        }

        public Criteria andSupplierPhoneIn(List<String> values) {
            addCriterion("supplier_phone in", values, "supplierPhone");
            return (Criteria) this;
        }

        public Criteria andSupplierPhoneNotIn(List<String> values) {
            addCriterion("supplier_phone not in", values, "supplierPhone");
            return (Criteria) this;
        }

        public Criteria andSupplierPhoneBetween(String value1, String value2) {
            addCriterion("supplier_phone between", value1, value2, "supplierPhone");
            return (Criteria) this;
        }

        public Criteria andSupplierPhoneNotBetween(String value1, String value2) {
            addCriterion("supplier_phone not between", value1, value2, "supplierPhone");
            return (Criteria) this;
        }

        public Criteria andSupplierEmailIsNull() {
            addCriterion("supplier_email is null");
            return (Criteria) this;
        }

        public Criteria andSupplierEmailIsNotNull() {
            addCriterion("supplier_email is not null");
            return (Criteria) this;
        }

        public Criteria andSupplierEmailEqualTo(String value) {
            addCriterion("supplier_email =", value, "supplierEmail");
            return (Criteria) this;
        }

        public Criteria andSupplierEmailNotEqualTo(String value) {
            addCriterion("supplier_email <>", value, "supplierEmail");
            return (Criteria) this;
        }

        public Criteria andSupplierEmailGreaterThan(String value) {
            addCriterion("supplier_email >", value, "supplierEmail");
            return (Criteria) this;
        }

        public Criteria andSupplierEmailGreaterThanOrEqualTo(String value) {
            addCriterion("supplier_email >=", value, "supplierEmail");
            return (Criteria) this;
        }

        public Criteria andSupplierEmailLessThan(String value) {
            addCriterion("supplier_email <", value, "supplierEmail");
            return (Criteria) this;
        }

        public Criteria andSupplierEmailLessThanOrEqualTo(String value) {
            addCriterion("supplier_email <=", value, "supplierEmail");
            return (Criteria) this;
        }

        public Criteria andSupplierEmailLike(String value) {
            addCriterion("supplier_email like", value, "supplierEmail");
            return (Criteria) this;
        }

        public Criteria andSupplierEmailNotLike(String value) {
            addCriterion("supplier_email not like", value, "supplierEmail");
            return (Criteria) this;
        }

        public Criteria andSupplierEmailIn(List<String> values) {
            addCriterion("supplier_email in", values, "supplierEmail");
            return (Criteria) this;
        }

        public Criteria andSupplierEmailNotIn(List<String> values) {
            addCriterion("supplier_email not in", values, "supplierEmail");
            return (Criteria) this;
        }

        public Criteria andSupplierEmailBetween(String value1, String value2) {
            addCriterion("supplier_email between", value1, value2, "supplierEmail");
            return (Criteria) this;
        }

        public Criteria andSupplierEmailNotBetween(String value1, String value2) {
            addCriterion("supplier_email not between", value1, value2, "supplierEmail");
            return (Criteria) this;
        }

        public Criteria andAddressIsNull() {
            addCriterion("address is null");
            return (Criteria) this;
        }

        public Criteria andAddressIsNotNull() {
            addCriterion("address is not null");
            return (Criteria) this;
        }

        public Criteria andAddressEqualTo(String value) {
            addCriterion("address =", value, "address");
            return (Criteria) this;
        }

        public Criteria andAddressNotEqualTo(String value) {
            addCriterion("address <>", value, "address");
            return (Criteria) this;
        }

        public Criteria andAddressGreaterThan(String value) {
            addCriterion("address >", value, "address");
            return (Criteria) this;
        }

        public Criteria andAddressGreaterThanOrEqualTo(String value) {
            addCriterion("address >=", value, "address");
            return (Criteria) this;
        }

        public Criteria andAddressLessThan(String value) {
            addCriterion("address <", value, "address");
            return (Criteria) this;
        }

        public Criteria andAddressLessThanOrEqualTo(String value) {
            addCriterion("address <=", value, "address");
            return (Criteria) this;
        }

        public Criteria andAddressLike(String value) {
            addCriterion("address like", value, "address");
            return (Criteria) this;
        }

        public Criteria andAddressNotLike(String value) {
            addCriterion("address not like", value, "address");
            return (Criteria) this;
        }

        public Criteria andAddressIn(List<String> values) {
            addCriterion("address in", values, "address");
            return (Criteria) this;
        }

        public Criteria andAddressNotIn(List<String> values) {
            addCriterion("address not in", values, "address");
            return (Criteria) this;
        }

        public Criteria andAddressBetween(String value1, String value2) {
            addCriterion("address between", value1, value2, "address");
            return (Criteria) this;
        }

        public Criteria andAddressNotBetween(String value1, String value2) {
            addCriterion("address not between", value1, value2, "address");
            return (Criteria) this;
        }

        public Criteria andStateIsNull() {
            addCriterion("state is null");
            return (Criteria) this;
        }

        public Criteria andStateIsNotNull() {
            addCriterion("state is not null");
            return (Criteria) this;
        }

        public Criteria andStateEqualTo(String value) {
            addCriterion("state =", value, "state");
            return (Criteria) this;
        }

        public Criteria andStateNotEqualTo(String value) {
            addCriterion("state <>", value, "state");
            return (Criteria) this;
        }

        public Criteria andStateGreaterThan(String value) {
            addCriterion("state >", value, "state");
            return (Criteria) this;
        }

        public Criteria andStateGreaterThanOrEqualTo(String value) {
            addCriterion("state >=", value, "state");
            return (Criteria) this;
        }

        public Criteria andStateLessThan(String value) {
            addCriterion("state <", value, "state");
            return (Criteria) this;
        }

        public Criteria andStateLessThanOrEqualTo(String value) {
            addCriterion("state <=", value, "state");
            return (Criteria) this;
        }

        public Criteria andStateLike(String value) {
            addCriterion("state like", value, "state");
            return (Criteria) this;
        }

        public Criteria andStateNotLike(String value) {
            addCriterion("state not like", value, "state");
            return (Criteria) this;
        }

        public Criteria andStateIn(List<String> values) {
            addCriterion("state in", values, "state");
            return (Criteria) this;
        }

        public Criteria andStateNotIn(List<String> values) {
            addCriterion("state not in", values, "state");
            return (Criteria) this;
        }

        public Criteria andStateBetween(String value1, String value2) {
            addCriterion("state between", value1, value2, "state");
            return (Criteria) this;
        }

        public Criteria andStateNotBetween(String value1, String value2) {
            addCriterion("state not between", value1, value2, "state");
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

        public Criteria andSupplierLogCompanyIdIsNull() {
            addCriterion("supplier_log_company_id is null");
            return (Criteria) this;
        }

        public Criteria andSupplierLogCompanyIdIsNotNull() {
            addCriterion("supplier_log_company_id is not null");
            return (Criteria) this;
        }

        public Criteria andSupplierLogCompanyIdEqualTo(Integer value) {
            addCriterion("supplier_log_company_id =", value, "supplierLogCompanyId");
            return (Criteria) this;
        }

        public Criteria andSupplierLogCompanyIdNotEqualTo(Integer value) {
            addCriterion("supplier_log_company_id <>", value, "supplierLogCompanyId");
            return (Criteria) this;
        }

        public Criteria andSupplierLogCompanyIdGreaterThan(Integer value) {
            addCriterion("supplier_log_company_id >", value, "supplierLogCompanyId");
            return (Criteria) this;
        }

        public Criteria andSupplierLogCompanyIdGreaterThanOrEqualTo(Integer value) {
            addCriterion("supplier_log_company_id >=", value, "supplierLogCompanyId");
            return (Criteria) this;
        }

        public Criteria andSupplierLogCompanyIdLessThan(Integer value) {
            addCriterion("supplier_log_company_id <", value, "supplierLogCompanyId");
            return (Criteria) this;
        }

        public Criteria andSupplierLogCompanyIdLessThanOrEqualTo(Integer value) {
            addCriterion("supplier_log_company_id <=", value, "supplierLogCompanyId");
            return (Criteria) this;
        }

        public Criteria andSupplierLogCompanyIdIn(List<Integer> values) {
            addCriterion("supplier_log_company_id in", values, "supplierLogCompanyId");
            return (Criteria) this;
        }

        public Criteria andSupplierLogCompanyIdNotIn(List<Integer> values) {
            addCriterion("supplier_log_company_id not in", values, "supplierLogCompanyId");
            return (Criteria) this;
        }

        public Criteria andSupplierLogCompanyIdBetween(Integer value1, Integer value2) {
            addCriterion("supplier_log_company_id between", value1, value2, "supplierLogCompanyId");
            return (Criteria) this;
        }

        public Criteria andSupplierLogCompanyIdNotBetween(Integer value1, Integer value2) {
            addCriterion("supplier_log_company_id not between", value1, value2, "supplierLogCompanyId");
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