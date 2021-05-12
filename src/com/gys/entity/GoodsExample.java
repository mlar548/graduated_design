package com.gys.entity;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

public class GoodsExample {
    protected String orderByClause;

    protected boolean distinct;

    protected List<Criteria> oredCriteria;

    public GoodsExample() {
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

        public Criteria andGoodsNameIsNull() {
            addCriterion("goods_name is null");
            return (Criteria) this;
        }

        public Criteria andGoodsNameIsNotNull() {
            addCriterion("goods_name is not null");
            return (Criteria) this;
        }

        public Criteria andGoodsNameEqualTo(String value) {
            addCriterion("goods_name =", value, "goodsName");
            return (Criteria) this;
        }

        public Criteria andGoodsNameNotEqualTo(String value) {
            addCriterion("goods_name <>", value, "goodsName");
            return (Criteria) this;
        }

        public Criteria andGoodsNameGreaterThan(String value) {
            addCriterion("goods_name >", value, "goodsName");
            return (Criteria) this;
        }

        public Criteria andGoodsNameGreaterThanOrEqualTo(String value) {
            addCriterion("goods_name >=", value, "goodsName");
            return (Criteria) this;
        }

        public Criteria andGoodsNameLessThan(String value) {
            addCriterion("goods_name <", value, "goodsName");
            return (Criteria) this;
        }

        public Criteria andGoodsNameLessThanOrEqualTo(String value) {
            addCriterion("goods_name <=", value, "goodsName");
            return (Criteria) this;
        }

        public Criteria andGoodsNameLike(String value) {
            addCriterion("goods_name like", value, "goodsName");
            return (Criteria) this;
        }

        public Criteria andGoodsNameNotLike(String value) {
            addCriterion("goods_name not like", value, "goodsName");
            return (Criteria) this;
        }

        public Criteria andGoodsNameIn(List<String> values) {
            addCriterion("goods_name in", values, "goodsName");
            return (Criteria) this;
        }

        public Criteria andGoodsNameNotIn(List<String> values) {
            addCriterion("goods_name not in", values, "goodsName");
            return (Criteria) this;
        }

        public Criteria andGoodsNameBetween(String value1, String value2) {
            addCriterion("goods_name between", value1, value2, "goodsName");
            return (Criteria) this;
        }

        public Criteria andGoodsNameNotBetween(String value1, String value2) {
            addCriterion("goods_name not between", value1, value2, "goodsName");
            return (Criteria) this;
        }

        public Criteria andGoodsTypeIdIsNull() {
            addCriterion("goods_type_id is null");
            return (Criteria) this;
        }

        public Criteria andGoodsTypeIdIsNotNull() {
            addCriterion("goods_type_id is not null");
            return (Criteria) this;
        }

        public Criteria andGoodsTypeIdEqualTo(Integer value) {
            addCriterion("goods_type_id =", value, "goodsTypeId");
            return (Criteria) this;
        }

        public Criteria andGoodsTypeIdNotEqualTo(Integer value) {
            addCriterion("goods_type_id <>", value, "goodsTypeId");
            return (Criteria) this;
        }

        public Criteria andGoodsTypeIdGreaterThan(Integer value) {
            addCriterion("goods_type_id >", value, "goodsTypeId");
            return (Criteria) this;
        }

        public Criteria andGoodsTypeIdGreaterThanOrEqualTo(Integer value) {
            addCriterion("goods_type_id >=", value, "goodsTypeId");
            return (Criteria) this;
        }

        public Criteria andGoodsTypeIdLessThan(Integer value) {
            addCriterion("goods_type_id <", value, "goodsTypeId");
            return (Criteria) this;
        }

        public Criteria andGoodsTypeIdLessThanOrEqualTo(Integer value) {
            addCriterion("goods_type_id <=", value, "goodsTypeId");
            return (Criteria) this;
        }

        public Criteria andGoodsTypeIdIn(List<Integer> values) {
            addCriterion("goods_type_id in", values, "goodsTypeId");
            return (Criteria) this;
        }

        public Criteria andGoodsTypeIdNotIn(List<Integer> values) {
            addCriterion("goods_type_id not in", values, "goodsTypeId");
            return (Criteria) this;
        }

        public Criteria andGoodsTypeIdBetween(Integer value1, Integer value2) {
            addCriterion("goods_type_id between", value1, value2, "goodsTypeId");
            return (Criteria) this;
        }

        public Criteria andGoodsTypeIdNotBetween(Integer value1, Integer value2) {
            addCriterion("goods_type_id not between", value1, value2, "goodsTypeId");
            return (Criteria) this;
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

        public Criteria andTitleIsNull() {
            addCriterion("title is null");
            return (Criteria) this;
        }

        public Criteria andTitleIsNotNull() {
            addCriterion("title is not null");
            return (Criteria) this;
        }

        public Criteria andTitleEqualTo(String value) {
            addCriterion("title =", value, "title");
            return (Criteria) this;
        }

        public Criteria andTitleNotEqualTo(String value) {
            addCriterion("title <>", value, "title");
            return (Criteria) this;
        }

        public Criteria andTitleGreaterThan(String value) {
            addCriterion("title >", value, "title");
            return (Criteria) this;
        }

        public Criteria andTitleGreaterThanOrEqualTo(String value) {
            addCriterion("title >=", value, "title");
            return (Criteria) this;
        }

        public Criteria andTitleLessThan(String value) {
            addCriterion("title <", value, "title");
            return (Criteria) this;
        }

        public Criteria andTitleLessThanOrEqualTo(String value) {
            addCriterion("title <=", value, "title");
            return (Criteria) this;
        }

        public Criteria andTitleLike(String value) {
            addCriterion("title like", value, "title");
            return (Criteria) this;
        }

        public Criteria andTitleNotLike(String value) {
            addCriterion("title not like", value, "title");
            return (Criteria) this;
        }

        public Criteria andTitleIn(List<String> values) {
            addCriterion("title in", values, "title");
            return (Criteria) this;
        }

        public Criteria andTitleNotIn(List<String> values) {
            addCriterion("title not in", values, "title");
            return (Criteria) this;
        }

        public Criteria andTitleBetween(String value1, String value2) {
            addCriterion("title between", value1, value2, "title");
            return (Criteria) this;
        }

        public Criteria andTitleNotBetween(String value1, String value2) {
            addCriterion("title not between", value1, value2, "title");
            return (Criteria) this;
        }

        public Criteria andGoodsPhotoIsNull() {
            addCriterion("goods_photo is null");
            return (Criteria) this;
        }

        public Criteria andGoodsPhotoIsNotNull() {
            addCriterion("goods_photo is not null");
            return (Criteria) this;
        }

        public Criteria andGoodsPhotoEqualTo(String value) {
            addCriterion("goods_photo =", value, "goodsPhoto");
            return (Criteria) this;
        }

        public Criteria andGoodsPhotoNotEqualTo(String value) {
            addCriterion("goods_photo <>", value, "goodsPhoto");
            return (Criteria) this;
        }

        public Criteria andGoodsPhotoGreaterThan(String value) {
            addCriterion("goods_photo >", value, "goodsPhoto");
            return (Criteria) this;
        }

        public Criteria andGoodsPhotoGreaterThanOrEqualTo(String value) {
            addCriterion("goods_photo >=", value, "goodsPhoto");
            return (Criteria) this;
        }

        public Criteria andGoodsPhotoLessThan(String value) {
            addCriterion("goods_photo <", value, "goodsPhoto");
            return (Criteria) this;
        }

        public Criteria andGoodsPhotoLessThanOrEqualTo(String value) {
            addCriterion("goods_photo <=", value, "goodsPhoto");
            return (Criteria) this;
        }

        public Criteria andGoodsPhotoLike(String value) {
            addCriterion("goods_photo like", value, "goodsPhoto");
            return (Criteria) this;
        }

        public Criteria andGoodsPhotoNotLike(String value) {
            addCriterion("goods_photo not like", value, "goodsPhoto");
            return (Criteria) this;
        }

        public Criteria andGoodsPhotoIn(List<String> values) {
            addCriterion("goods_photo in", values, "goodsPhoto");
            return (Criteria) this;
        }

        public Criteria andGoodsPhotoNotIn(List<String> values) {
            addCriterion("goods_photo not in", values, "goodsPhoto");
            return (Criteria) this;
        }

        public Criteria andGoodsPhotoBetween(String value1, String value2) {
            addCriterion("goods_photo between", value1, value2, "goodsPhoto");
            return (Criteria) this;
        }

        public Criteria andGoodsPhotoNotBetween(String value1, String value2) {
            addCriterion("goods_photo not between", value1, value2, "goodsPhoto");
            return (Criteria) this;
        }

        public Criteria andPriceIsNull() {
            addCriterion("price is null");
            return (Criteria) this;
        }

        public Criteria andPriceIsNotNull() {
            addCriterion("price is not null");
            return (Criteria) this;
        }

        public Criteria andPriceEqualTo(BigDecimal value) {
            addCriterion("price =", value, "price");
            return (Criteria) this;
        }

        public Criteria andPriceNotEqualTo(BigDecimal value) {
            addCriterion("price <>", value, "price");
            return (Criteria) this;
        }

        public Criteria andPriceGreaterThan(BigDecimal value) {
            addCriterion("price >", value, "price");
            return (Criteria) this;
        }

        public Criteria andPriceGreaterThanOrEqualTo(BigDecimal value) {
            addCriterion("price >=", value, "price");
            return (Criteria) this;
        }

        public Criteria andPriceLessThan(BigDecimal value) {
            addCriterion("price <", value, "price");
            return (Criteria) this;
        }

        public Criteria andPriceLessThanOrEqualTo(BigDecimal value) {
            addCriterion("price <=", value, "price");
            return (Criteria) this;
        }

        public Criteria andPriceIn(List<BigDecimal> values) {
            addCriterion("price in", values, "price");
            return (Criteria) this;
        }

        public Criteria andPriceNotIn(List<BigDecimal> values) {
            addCriterion("price not in", values, "price");
            return (Criteria) this;
        }

        public Criteria andPriceBetween(BigDecimal value1, BigDecimal value2) {
            addCriterion("price between", value1, value2, "price");
            return (Criteria) this;
        }

        public Criteria andPriceNotBetween(BigDecimal value1, BigDecimal value2) {
            addCriterion("price not between", value1, value2, "price");
            return (Criteria) this;
        }

        public Criteria andBeforepriceIsNull() {
            addCriterion("beforeprice is null");
            return (Criteria) this;
        }

        public Criteria andBeforepriceIsNotNull() {
            addCriterion("beforeprice is not null");
            return (Criteria) this;
        }

        public Criteria andBeforepriceEqualTo(BigDecimal value) {
            addCriterion("beforeprice =", value, "beforeprice");
            return (Criteria) this;
        }

        public Criteria andBeforepriceNotEqualTo(BigDecimal value) {
            addCriterion("beforeprice <>", value, "beforeprice");
            return (Criteria) this;
        }

        public Criteria andBeforepriceGreaterThan(BigDecimal value) {
            addCriterion("beforeprice >", value, "beforeprice");
            return (Criteria) this;
        }

        public Criteria andBeforepriceGreaterThanOrEqualTo(BigDecimal value) {
            addCriterion("beforeprice >=", value, "beforeprice");
            return (Criteria) this;
        }

        public Criteria andBeforepriceLessThan(BigDecimal value) {
            addCriterion("beforeprice <", value, "beforeprice");
            return (Criteria) this;
        }

        public Criteria andBeforepriceLessThanOrEqualTo(BigDecimal value) {
            addCriterion("beforeprice <=", value, "beforeprice");
            return (Criteria) this;
        }

        public Criteria andBeforepriceIn(List<BigDecimal> values) {
            addCriterion("beforeprice in", values, "beforeprice");
            return (Criteria) this;
        }

        public Criteria andBeforepriceNotIn(List<BigDecimal> values) {
            addCriterion("beforeprice not in", values, "beforeprice");
            return (Criteria) this;
        }

        public Criteria andBeforepriceBetween(BigDecimal value1, BigDecimal value2) {
            addCriterion("beforeprice between", value1, value2, "beforeprice");
            return (Criteria) this;
        }

        public Criteria andBeforepriceNotBetween(BigDecimal value1, BigDecimal value2) {
            addCriterion("beforeprice not between", value1, value2, "beforeprice");
            return (Criteria) this;
        }

        public Criteria andUnitIsNull() {
            addCriterion("unit is null");
            return (Criteria) this;
        }

        public Criteria andUnitIsNotNull() {
            addCriterion("unit is not null");
            return (Criteria) this;
        }

        public Criteria andUnitEqualTo(String value) {
            addCriterion("unit =", value, "unit");
            return (Criteria) this;
        }

        public Criteria andUnitNotEqualTo(String value) {
            addCriterion("unit <>", value, "unit");
            return (Criteria) this;
        }

        public Criteria andUnitGreaterThan(String value) {
            addCriterion("unit >", value, "unit");
            return (Criteria) this;
        }

        public Criteria andUnitGreaterThanOrEqualTo(String value) {
            addCriterion("unit >=", value, "unit");
            return (Criteria) this;
        }

        public Criteria andUnitLessThan(String value) {
            addCriterion("unit <", value, "unit");
            return (Criteria) this;
        }

        public Criteria andUnitLessThanOrEqualTo(String value) {
            addCriterion("unit <=", value, "unit");
            return (Criteria) this;
        }

        public Criteria andUnitLike(String value) {
            addCriterion("unit like", value, "unit");
            return (Criteria) this;
        }

        public Criteria andUnitNotLike(String value) {
            addCriterion("unit not like", value, "unit");
            return (Criteria) this;
        }

        public Criteria andUnitIn(List<String> values) {
            addCriterion("unit in", values, "unit");
            return (Criteria) this;
        }

        public Criteria andUnitNotIn(List<String> values) {
            addCriterion("unit not in", values, "unit");
            return (Criteria) this;
        }

        public Criteria andUnitBetween(String value1, String value2) {
            addCriterion("unit between", value1, value2, "unit");
            return (Criteria) this;
        }

        public Criteria andUnitNotBetween(String value1, String value2) {
            addCriterion("unit not between", value1, value2, "unit");
            return (Criteria) this;
        }

        public Criteria andRemainIsNull() {
            addCriterion("remain is null");
            return (Criteria) this;
        }

        public Criteria andRemainIsNotNull() {
            addCriterion("remain is not null");
            return (Criteria) this;
        }

        public Criteria andRemainEqualTo(Integer value) {
            addCriterion("remain =", value, "remain");
            return (Criteria) this;
        }

        public Criteria andRemainNotEqualTo(Integer value) {
            addCriterion("remain <>", value, "remain");
            return (Criteria) this;
        }

        public Criteria andRemainGreaterThan(Integer value) {
            addCriterion("remain >", value, "remain");
            return (Criteria) this;
        }

        public Criteria andRemainGreaterThanOrEqualTo(Integer value) {
            addCriterion("remain >=", value, "remain");
            return (Criteria) this;
        }

        public Criteria andRemainLessThan(Integer value) {
            addCriterion("remain <", value, "remain");
            return (Criteria) this;
        }

        public Criteria andRemainLessThanOrEqualTo(Integer value) {
            addCriterion("remain <=", value, "remain");
            return (Criteria) this;
        }

        public Criteria andRemainIn(List<Integer> values) {
            addCriterion("remain in", values, "remain");
            return (Criteria) this;
        }

        public Criteria andRemainNotIn(List<Integer> values) {
            addCriterion("remain not in", values, "remain");
            return (Criteria) this;
        }

        public Criteria andRemainBetween(Integer value1, Integer value2) {
            addCriterion("remain between", value1, value2, "remain");
            return (Criteria) this;
        }

        public Criteria andRemainNotBetween(Integer value1, Integer value2) {
            addCriterion("remain not between", value1, value2, "remain");
            return (Criteria) this;
        }

        public Criteria andIntroduceIsNull() {
            addCriterion("introduce is null");
            return (Criteria) this;
        }

        public Criteria andIntroduceIsNotNull() {
            addCriterion("introduce is not null");
            return (Criteria) this;
        }

        public Criteria andIntroduceEqualTo(String value) {
            addCriterion("introduce =", value, "introduce");
            return (Criteria) this;
        }

        public Criteria andIntroduceNotEqualTo(String value) {
            addCriterion("introduce <>", value, "introduce");
            return (Criteria) this;
        }

        public Criteria andIntroduceGreaterThan(String value) {
            addCriterion("introduce >", value, "introduce");
            return (Criteria) this;
        }

        public Criteria andIntroduceGreaterThanOrEqualTo(String value) {
            addCriterion("introduce >=", value, "introduce");
            return (Criteria) this;
        }

        public Criteria andIntroduceLessThan(String value) {
            addCriterion("introduce <", value, "introduce");
            return (Criteria) this;
        }

        public Criteria andIntroduceLessThanOrEqualTo(String value) {
            addCriterion("introduce <=", value, "introduce");
            return (Criteria) this;
        }

        public Criteria andIntroduceLike(String value) {
            addCriterion("introduce like", value, "introduce");
            return (Criteria) this;
        }

        public Criteria andIntroduceNotLike(String value) {
            addCriterion("introduce not like", value, "introduce");
            return (Criteria) this;
        }

        public Criteria andIntroduceIn(List<String> values) {
            addCriterion("introduce in", values, "introduce");
            return (Criteria) this;
        }

        public Criteria andIntroduceNotIn(List<String> values) {
            addCriterion("introduce not in", values, "introduce");
            return (Criteria) this;
        }

        public Criteria andIntroduceBetween(String value1, String value2) {
            addCriterion("introduce between", value1, value2, "introduce");
            return (Criteria) this;
        }

        public Criteria andIntroduceNotBetween(String value1, String value2) {
            addCriterion("introduce not between", value1, value2, "introduce");
            return (Criteria) this;
        }

        public Criteria andGoodsCapacityIsNull() {
            addCriterion("goods_capacity is null");
            return (Criteria) this;
        }

        public Criteria andGoodsCapacityIsNotNull() {
            addCriterion("goods_capacity is not null");
            return (Criteria) this;
        }

        public Criteria andGoodsCapacityEqualTo(Integer value) {
            addCriterion("goods_capacity =", value, "goodsCapacity");
            return (Criteria) this;
        }

        public Criteria andGoodsCapacityNotEqualTo(Integer value) {
            addCriterion("goods_capacity <>", value, "goodsCapacity");
            return (Criteria) this;
        }

        public Criteria andGoodsCapacityGreaterThan(Integer value) {
            addCriterion("goods_capacity >", value, "goodsCapacity");
            return (Criteria) this;
        }

        public Criteria andGoodsCapacityGreaterThanOrEqualTo(Integer value) {
            addCriterion("goods_capacity >=", value, "goodsCapacity");
            return (Criteria) this;
        }

        public Criteria andGoodsCapacityLessThan(Integer value) {
            addCriterion("goods_capacity <", value, "goodsCapacity");
            return (Criteria) this;
        }

        public Criteria andGoodsCapacityLessThanOrEqualTo(Integer value) {
            addCriterion("goods_capacity <=", value, "goodsCapacity");
            return (Criteria) this;
        }

        public Criteria andGoodsCapacityIn(List<Integer> values) {
            addCriterion("goods_capacity in", values, "goodsCapacity");
            return (Criteria) this;
        }

        public Criteria andGoodsCapacityNotIn(List<Integer> values) {
            addCriterion("goods_capacity not in", values, "goodsCapacity");
            return (Criteria) this;
        }

        public Criteria andGoodsCapacityBetween(Integer value1, Integer value2) {
            addCriterion("goods_capacity between", value1, value2, "goodsCapacity");
            return (Criteria) this;
        }

        public Criteria andGoodsCapacityNotBetween(Integer value1, Integer value2) {
            addCriterion("goods_capacity not between", value1, value2, "goodsCapacity");
            return (Criteria) this;
        }

        public Criteria andLeastNumIsNull() {
            addCriterion("least_num is null");
            return (Criteria) this;
        }

        public Criteria andLeastNumIsNotNull() {
            addCriterion("least_num is not null");
            return (Criteria) this;
        }

        public Criteria andLeastNumEqualTo(Integer value) {
            addCriterion("least_num =", value, "leastNum");
            return (Criteria) this;
        }

        public Criteria andLeastNumNotEqualTo(Integer value) {
            addCriterion("least_num <>", value, "leastNum");
            return (Criteria) this;
        }

        public Criteria andLeastNumGreaterThan(Integer value) {
            addCriterion("least_num >", value, "leastNum");
            return (Criteria) this;
        }

        public Criteria andLeastNumGreaterThanOrEqualTo(Integer value) {
            addCriterion("least_num >=", value, "leastNum");
            return (Criteria) this;
        }

        public Criteria andLeastNumLessThan(Integer value) {
            addCriterion("least_num <", value, "leastNum");
            return (Criteria) this;
        }

        public Criteria andLeastNumLessThanOrEqualTo(Integer value) {
            addCriterion("least_num <=", value, "leastNum");
            return (Criteria) this;
        }

        public Criteria andLeastNumIn(List<Integer> values) {
            addCriterion("least_num in", values, "leastNum");
            return (Criteria) this;
        }

        public Criteria andLeastNumNotIn(List<Integer> values) {
            addCriterion("least_num not in", values, "leastNum");
            return (Criteria) this;
        }

        public Criteria andLeastNumBetween(Integer value1, Integer value2) {
            addCriterion("least_num between", value1, value2, "leastNum");
            return (Criteria) this;
        }

        public Criteria andLeastNumNotBetween(Integer value1, Integer value2) {
            addCriterion("least_num not between", value1, value2, "leastNum");
            return (Criteria) this;
        }

        public Criteria andSecondNumIsNull() {
            addCriterion("second_num is null");
            return (Criteria) this;
        }

        public Criteria andSecondNumIsNotNull() {
            addCriterion("second_num is not null");
            return (Criteria) this;
        }

        public Criteria andSecondNumEqualTo(Integer value) {
            addCriterion("second_num =", value, "secondNum");
            return (Criteria) this;
        }

        public Criteria andSecondNumNotEqualTo(Integer value) {
            addCriterion("second_num <>", value, "secondNum");
            return (Criteria) this;
        }

        public Criteria andSecondNumGreaterThan(Integer value) {
            addCriterion("second_num >", value, "secondNum");
            return (Criteria) this;
        }

        public Criteria andSecondNumGreaterThanOrEqualTo(Integer value) {
            addCriterion("second_num >=", value, "secondNum");
            return (Criteria) this;
        }

        public Criteria andSecondNumLessThan(Integer value) {
            addCriterion("second_num <", value, "secondNum");
            return (Criteria) this;
        }

        public Criteria andSecondNumLessThanOrEqualTo(Integer value) {
            addCriterion("second_num <=", value, "secondNum");
            return (Criteria) this;
        }

        public Criteria andSecondNumIn(List<Integer> values) {
            addCriterion("second_num in", values, "secondNum");
            return (Criteria) this;
        }

        public Criteria andSecondNumNotIn(List<Integer> values) {
            addCriterion("second_num not in", values, "secondNum");
            return (Criteria) this;
        }

        public Criteria andSecondNumBetween(Integer value1, Integer value2) {
            addCriterion("second_num between", value1, value2, "secondNum");
            return (Criteria) this;
        }

        public Criteria andSecondNumNotBetween(Integer value1, Integer value2) {
            addCriterion("second_num not between", value1, value2, "secondNum");
            return (Criteria) this;
        }

        public Criteria andSecondPriceIsNull() {
            addCriterion("second_price is null");
            return (Criteria) this;
        }

        public Criteria andSecondPriceIsNotNull() {
            addCriterion("second_price is not null");
            return (Criteria) this;
        }

        public Criteria andSecondPriceEqualTo(BigDecimal value) {
            addCriterion("second_price =", value, "secondPrice");
            return (Criteria) this;
        }

        public Criteria andSecondPriceNotEqualTo(BigDecimal value) {
            addCriterion("second_price <>", value, "secondPrice");
            return (Criteria) this;
        }

        public Criteria andSecondPriceGreaterThan(BigDecimal value) {
            addCriterion("second_price >", value, "secondPrice");
            return (Criteria) this;
        }

        public Criteria andSecondPriceGreaterThanOrEqualTo(BigDecimal value) {
            addCriterion("second_price >=", value, "secondPrice");
            return (Criteria) this;
        }

        public Criteria andSecondPriceLessThan(BigDecimal value) {
            addCriterion("second_price <", value, "secondPrice");
            return (Criteria) this;
        }

        public Criteria andSecondPriceLessThanOrEqualTo(BigDecimal value) {
            addCriterion("second_price <=", value, "secondPrice");
            return (Criteria) this;
        }

        public Criteria andSecondPriceIn(List<BigDecimal> values) {
            addCriterion("second_price in", values, "secondPrice");
            return (Criteria) this;
        }

        public Criteria andSecondPriceNotIn(List<BigDecimal> values) {
            addCriterion("second_price not in", values, "secondPrice");
            return (Criteria) this;
        }

        public Criteria andSecondPriceBetween(BigDecimal value1, BigDecimal value2) {
            addCriterion("second_price between", value1, value2, "secondPrice");
            return (Criteria) this;
        }

        public Criteria andSecondPriceNotBetween(BigDecimal value1, BigDecimal value2) {
            addCriterion("second_price not between", value1, value2, "secondPrice");
            return (Criteria) this;
        }

        public Criteria andThirdNumIsNull() {
            addCriterion("third_num is null");
            return (Criteria) this;
        }

        public Criteria andThirdNumIsNotNull() {
            addCriterion("third_num is not null");
            return (Criteria) this;
        }

        public Criteria andThirdNumEqualTo(Integer value) {
            addCriterion("third_num =", value, "thirdNum");
            return (Criteria) this;
        }

        public Criteria andThirdNumNotEqualTo(Integer value) {
            addCriterion("third_num <>", value, "thirdNum");
            return (Criteria) this;
        }

        public Criteria andThirdNumGreaterThan(Integer value) {
            addCriterion("third_num >", value, "thirdNum");
            return (Criteria) this;
        }

        public Criteria andThirdNumGreaterThanOrEqualTo(Integer value) {
            addCriterion("third_num >=", value, "thirdNum");
            return (Criteria) this;
        }

        public Criteria andThirdNumLessThan(Integer value) {
            addCriterion("third_num <", value, "thirdNum");
            return (Criteria) this;
        }

        public Criteria andThirdNumLessThanOrEqualTo(Integer value) {
            addCriterion("third_num <=", value, "thirdNum");
            return (Criteria) this;
        }

        public Criteria andThirdNumIn(List<Integer> values) {
            addCriterion("third_num in", values, "thirdNum");
            return (Criteria) this;
        }

        public Criteria andThirdNumNotIn(List<Integer> values) {
            addCriterion("third_num not in", values, "thirdNum");
            return (Criteria) this;
        }

        public Criteria andThirdNumBetween(Integer value1, Integer value2) {
            addCriterion("third_num between", value1, value2, "thirdNum");
            return (Criteria) this;
        }

        public Criteria andThirdNumNotBetween(Integer value1, Integer value2) {
            addCriterion("third_num not between", value1, value2, "thirdNum");
            return (Criteria) this;
        }

        public Criteria andThirdPriceIsNull() {
            addCriterion("third_price is null");
            return (Criteria) this;
        }

        public Criteria andThirdPriceIsNotNull() {
            addCriterion("third_price is not null");
            return (Criteria) this;
        }

        public Criteria andThirdPriceEqualTo(BigDecimal value) {
            addCriterion("third_price =", value, "thirdPrice");
            return (Criteria) this;
        }

        public Criteria andThirdPriceNotEqualTo(BigDecimal value) {
            addCriterion("third_price <>", value, "thirdPrice");
            return (Criteria) this;
        }

        public Criteria andThirdPriceGreaterThan(BigDecimal value) {
            addCriterion("third_price >", value, "thirdPrice");
            return (Criteria) this;
        }

        public Criteria andThirdPriceGreaterThanOrEqualTo(BigDecimal value) {
            addCriterion("third_price >=", value, "thirdPrice");
            return (Criteria) this;
        }

        public Criteria andThirdPriceLessThan(BigDecimal value) {
            addCriterion("third_price <", value, "thirdPrice");
            return (Criteria) this;
        }

        public Criteria andThirdPriceLessThanOrEqualTo(BigDecimal value) {
            addCriterion("third_price <=", value, "thirdPrice");
            return (Criteria) this;
        }

        public Criteria andThirdPriceIn(List<BigDecimal> values) {
            addCriterion("third_price in", values, "thirdPrice");
            return (Criteria) this;
        }

        public Criteria andThirdPriceNotIn(List<BigDecimal> values) {
            addCriterion("third_price not in", values, "thirdPrice");
            return (Criteria) this;
        }

        public Criteria andThirdPriceBetween(BigDecimal value1, BigDecimal value2) {
            addCriterion("third_price between", value1, value2, "thirdPrice");
            return (Criteria) this;
        }

        public Criteria andThirdPriceNotBetween(BigDecimal value1, BigDecimal value2) {
            addCriterion("third_price not between", value1, value2, "thirdPrice");
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