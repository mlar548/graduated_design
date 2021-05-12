package com.gys.entity;

import java.math.BigDecimal;
import java.util.Date;
import java.util.List;

import org.springframework.format.annotation.DateTimeFormat;

public class Orders {
    private Integer id;

    private String orderId;
    
    @DateTimeFormat(pattern="yyyy-MM-dd HH:mm:ss")
    private Date orderStartDate;
    @DateTimeFormat(pattern="yyyy-MM-dd HH:mm:ss")
    private Date orderFindTime;
    @DateTimeFormat(pattern="yyyy-MM-dd HH:mm:ss")
    private Date orderAnsTime;
    @DateTimeFormat(pattern="yyyy-MM-dd HH:mm:ss")
    private Date orderSendDate;

    private Integer logisticsId;

    private BigDecimal orderPrice;

    private Integer addressId;
    
    private Address address;

    private String payState;

    private String orderPayDate;

    private String orderPayType;

    private String touserDatelong;

    private Integer userId;

    private String cpEmployeeId;

    private String ansEmployeeId;

    private String msg;

    private String zt;

    private String description;

    private String jlId;

    private String other;

    private Integer warehouseId;
    
    private Warehouse warehouse ;
    
    private List<Trade> tradeList;
    
    

    public Warehouse getWarehouse() {
		return warehouse;
	}

	public void setWarehouse(Warehouse warehouse) {
		this.warehouse = warehouse;
	}

	public Address getAddress() {
		return address;
	}

	public void setAddress(Address address) {
		this.address = address;
	}

	public List<Trade> getTradeList() {
		return tradeList;
	}

	public void setTradeList(List<Trade> tradeList) {
		this.tradeList = tradeList;
	}

	public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

 

    public String getOrderId() {
		return orderId;
	}

	public void setOrderId(String orderId) {
		this.orderId = orderId;
	}

	public Date getOrderStartDate() {
        return orderStartDate;
    }

    public void setOrderStartDate(Date orderStartDate) {
        this.orderStartDate = orderStartDate;
    }

    public Date getOrderFindTime() {
        return orderFindTime;
    }

    public void setOrderFindTime(Date orderFindTime) {
        this.orderFindTime = orderFindTime;
    }

    public Date getOrderAnsTime() {
        return orderAnsTime;
    }

    public void setOrderAnsTime(Date orderAnsTime) {
        this.orderAnsTime = orderAnsTime;
    }

    public Date getOrderSendDate() {
        return orderSendDate;
    }

    public void setOrderSendDate(Date orderSendDate) {
        this.orderSendDate = orderSendDate;
    }

    public Integer getLogisticsId() {
        return logisticsId;
    }

    public void setLogisticsId(Integer logisticsId) {
        this.logisticsId = logisticsId;
    }

    public BigDecimal getOrderPrice() {
        return orderPrice;
    }

    public void setOrderPrice(BigDecimal orderPrice) {
        this.orderPrice = orderPrice;
    }

    public Integer getAddressId() {
        return addressId;
    }

    public void setAddressId(Integer addressId) {
        this.addressId = addressId;
    }

    public String getPayState() {
        return payState;
    }

    public void setPayState(String payState) {
        this.payState = payState == null ? null : payState.trim();
    }

    public String getOrderPayDate() {
        return orderPayDate;
    }

    public void setOrderPayDate(String orderPayDate) {
        this.orderPayDate = orderPayDate == null ? null : orderPayDate.trim();
    }

    public String getOrderPayType() {
        return orderPayType;
    }

    public void setOrderPayType(String orderPayType) {
        this.orderPayType = orderPayType == null ? null : orderPayType.trim();
    }

    public String getTouserDatelong() {
        return touserDatelong;
    }

    public void setTouserDatelong(String touserDatelong) {
        this.touserDatelong = touserDatelong == null ? null : touserDatelong.trim();
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public String getCpEmployeeId() {
        return cpEmployeeId;
    }

    public void setCpEmployeeId(String cpEmployeeId) {
        this.cpEmployeeId = cpEmployeeId == null ? null : cpEmployeeId.trim();
    }

    public String getAnsEmployeeId() {
        return ansEmployeeId;
    }

    public void setAnsEmployeeId(String ansEmployeeId) {
        this.ansEmployeeId = ansEmployeeId == null ? null : ansEmployeeId.trim();
    }

    public String getMsg() {
        return msg;
    }

    public void setMsg(String msg) {
        this.msg = msg == null ? null : msg.trim();
    }

    public String getZt() {
        return zt;
    }

    public void setZt(String zt) {
        this.zt = zt == null ? null : zt.trim();
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description == null ? null : description.trim();
    }

    public String getJlId() {
        return jlId;
    }

    public void setJlId(String jlId) {
        this.jlId = jlId == null ? null : jlId.trim();
    }

    public String getOther() {
        return other;
    }

    public void setOther(String other) {
        this.other = other == null ? null : other.trim();
    }

    public Integer getWarehouseId() {
        return warehouseId;
    }

    public void setWarehouseId(Integer warehouseId) {
        this.warehouseId = warehouseId;
    }

	@Override
	public String toString() {
		return "Orders [id=" + id + ", orderId=" + orderId + ", orderStartDate=" + orderStartDate + ", orderFindTime="
				+ orderFindTime + ", orderAnsTime=" + orderAnsTime + ", orderSendDate=" + orderSendDate
				+ ", logisticsId=" + logisticsId + ", orderPrice=" + orderPrice + ", addressId=" + addressId
				+ ", address=" + address + ", payState=" + payState + ", orderPayDate=" + orderPayDate
				+ ", orderPayType=" + orderPayType + ", touserDatelong=" + touserDatelong + ", userId=" + userId
				+ ", cpEmployeeId=" + cpEmployeeId + ", ansEmployeeId=" + ansEmployeeId + ", msg=" + msg + ", zt=" + zt
				+ ", description=" + description + ", jlId=" + jlId + ", other=" + other + ", warehouseId="
				+ warehouseId + ", warehouse=" + warehouse + ", tradeList=" + tradeList + "]";
	}

 

 
 
 
    
}