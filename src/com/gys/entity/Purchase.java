package com.gys.entity;

import java.math.BigDecimal;
import java.util.Date;
import java.util.List;

import org.springframework.format.annotation.DateTimeFormat;

public class Purchase {
	private Integer id;

	private String purchaseId;

	private String payType;

	private String ordersId;

	private Integer warehouseId;
	
	private Warehouse warehouse;

	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private Date purchaseDate;

	private BigDecimal purchasePrice;

	private Integer logisticsId;

	private String status;

	private String employeeId;

	private String description;

	private Supplier supplier;
	
	private Integer supplierId;

	private Integer customerAddressId;

	private Integer payTime;

	private String type;

	private String other;

	private Users jl;
	 
	private Integer jlId;

	public Integer getWarehouseId() {
		return warehouseId;
	}

	public void setWarehouseId(Integer warehouseId) {
		this.warehouseId = warehouseId;
	}

	
	
	public Integer getSupplierId() {
		return supplierId;
	}

	public void setSupplierId(Integer supplierId) {
		this.supplierId = supplierId;
	}

	public Integer getJlId() {
		return jlId;
	}

	public void setJlId(Integer jlId) {
		this.jlId = jlId;
	}



	private List<Purchasetrade> purchasetrade;

	public List<Purchasetrade> getPurchasetrade() {
		return purchasetrade;
	}

	public void setPurchasetrade(List<Purchasetrade> purchasetrade) {
		this.purchasetrade = purchasetrade;
	}

	public String getPurchaseId() {
		return purchaseId;
	}

	public void setPurchaseId(String purchaseId) {
		this.purchaseId = purchaseId;
	}

	public String getPayType() {
		return payType;
	}

	public void setPayType(String payType) {
		this.payType = payType == null ? null : payType.trim();
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getOrdersId() {
		return ordersId;
	}

	public void setOrdersId(String ordersId) {
		this.ordersId = ordersId;
	}

	public Date getPurchaseDate() {
		return purchaseDate;
	}

	public void setPurchaseDate(Date purchaseDate) {
		this.purchaseDate = purchaseDate;
	}

	public BigDecimal getPurchasePrice() {
		return purchasePrice;
	}

	public void setPurchasePrice(BigDecimal purchasePrice) {
		this.purchasePrice = purchasePrice;
	}

	public Integer getLogisticsId() {
		return logisticsId;
	}

	public void setLogisticsId(Integer logisticsId) {
		this.logisticsId = logisticsId;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status == null ? null : status.trim();
	}

	public String getEmployeeId() {
		return employeeId;
	}

	public void setEmployeeId(String employeeId) {
		this.employeeId = employeeId;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description == null ? null : description.trim();
	}

	public Supplier getSupplier() {
		return supplier;
	}

	public void setSupplier(Supplier supplier) {
		this.supplier = supplier;
	}

	public Integer getCustomerAddressId() {
		return customerAddressId;
	}

	public void setCustomerAddressId(Integer customerAddressId) {
		this.customerAddressId = customerAddressId;
	}

	public Integer getPayTime() {
		return payTime;
	}

	public void setPayTime(Integer payTime) {
		this.payTime = payTime;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type == null ? null : type.trim();
	}

	public String getOther() {
		return other;
	}

	public void setOther(String other) {
		this.other = other == null ? null : other.trim();
	}

	public Warehouse getWarehouse() {
		return warehouse;
	}

	public void setWarehouse(Warehouse warehouse) {
		this.warehouse = warehouse;
	}

	public Users getJl() {
		return jl;
	}

	public void setJl(Users jl) {
		this.jl = jl;
	}

	@Override
	public String toString() {
		return "Purchase [id=" + id + ", purchaseId=" + purchaseId + ", payType=" + payType + ", ordersId=" + ordersId
				+ ", warehouseId=" + warehouseId + ", warehouse=" + warehouse + ", purchaseDate=" + purchaseDate
				+ ", purchasePrice=" + purchasePrice + ", logisticsId=" + logisticsId + ", status=" + status
				+ ", employeeId=" + employeeId + ", description=" + description + ", supplier=" + supplier
				+ ", supplierId=" + supplierId + ", customerAddressId=" + customerAddressId + ", payTime=" + payTime
				+ ", type=" + type + ", other=" + other + ", jl=" + jl + ", jlId=" + jlId + ", purchasetrade="
				+ purchasetrade + "]";
	}

	 

}
