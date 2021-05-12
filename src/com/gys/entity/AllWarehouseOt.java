package com.gys.entity;

import java.util.Date;
import java.util.List;

import org.springframework.format.annotation.DateTimeFormat;

public class AllWarehouseOt {
    private Integer id;

    private String otid;
    @DateTimeFormat(pattern="yyyy-MM-dd")
    private Date otStartTime;

    private Integer fromWarehouseId;
    
    private Warehouse fromWarehouse;

    private Warehouse toWarehouse;
    
    private Integer toWarehouseId;

    private Integer logisticsId;

    private Integer jlId;

    private String employeeId;

    private String description;

    private String other;

    private String zt;
    
    private List<WarehouseOt> warehouseOtList;
    
    
    
    
    public Warehouse getFromWarehouse() {
		return fromWarehouse;
	}

	public void setFromWarehouse(Warehouse fromWarehouse) {
		this.fromWarehouse = fromWarehouse;
	}

	public Warehouse getToWarehouse() {
		return toWarehouse;
	}

	public void setToWarehouse(Warehouse toWarehouse) {
		this.toWarehouse = toWarehouse;
	}

	

    public List<WarehouseOt> getWarehouseOtList() {
		return warehouseOtList;
	}

	public void setWarehouseOtList(List<WarehouseOt> warehouseOtList) {
		this.warehouseOtList = warehouseOtList;
	}

	public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getOtid() {
        return otid;
    }

    public void setOtid(String otid) {
        this.otid = otid == null ? null : otid.trim();
    }

    public Date getOtStartTime() {
        return otStartTime;
    }

    public void setOtStartTime(Date otStartTime) {
        this.otStartTime = otStartTime;
    }

    public Integer getFromWarehouseId() {
        return fromWarehouseId;
    }

    public void setFromWarehouseId(Integer fromWarehouseId) {
        this.fromWarehouseId = fromWarehouseId;
    }

    public Integer getToWarehouseId() {
        return toWarehouseId;
    }

    public void setToWarehouseId(Integer toWarehouseId) {
        this.toWarehouseId = toWarehouseId;
    }

    public Integer getLogisticsId() {
        return logisticsId;
    }

    public void setLogisticsId(Integer logisticsId) {
        this.logisticsId = logisticsId;
    }

    public Integer getJlId() {
        return jlId;
    }

    public void setJlId(Integer jlId) {
        this.jlId = jlId;
    }

    public String getEmployeeId() {
        return employeeId;
    }

    public void setEmployeeId(String employeeId) {
        this.employeeId = employeeId == null ? null : employeeId.trim();
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description == null ? null : description.trim();
    }

    public String getOther() {
        return other;
    }

    public void setOther(String other) {
        this.other = other == null ? null : other.trim();
    }

    public String getZt() {
        return zt;
    }

    public void setZt(String zt) {
        this.zt = zt == null ? null : zt.trim();
    }

	@Override
	public String toString() {
		return "AllWarehouseOt [id=" + id + ", otid=" + otid + ", otStartTime=" + otStartTime + ", fromWarehouseId="
				+ fromWarehouseId + ", fromWarehouse=" + fromWarehouse + ", toWarehouse=" + toWarehouse
				+ ", toWarehouseId=" + toWarehouseId + ", logisticsId=" + logisticsId + ", jlId=" + jlId
				+ ", employeeId=" + employeeId + ", description=" + description + ", other=" + other + ", zt=" + zt
				+ ", warehouseOtList=" + warehouseOtList + "]";
	}

	 
    
}