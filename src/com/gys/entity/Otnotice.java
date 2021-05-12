package com.gys.entity;

public class Otnotice {
    private Integer id;

    private Integer otnoticeEmployeeId;

    private String zt;

    private String description;

    private Integer tradeId;
    
    private Trade trade;

    private Integer warehouseLastNum;

    private Integer warehouseId;
    
    private Warehouse warehouse;
    

    public Otnotice() {
		super();
	}
     
	public Otnotice(Integer otnoticeEmployeeId, String zt, String description, Integer tradeId,  
			Integer warehouseLastNum, Integer warehouseId) {
		super();
		this.otnoticeEmployeeId = otnoticeEmployeeId;
		this.zt = zt;
		this.description = description;
		this.tradeId = tradeId;
		 
		this.warehouseLastNum = warehouseLastNum;
		this.warehouseId = warehouseId;
	}

	
	public Warehouse getWarehouse() {
		return warehouse;
	}

	public void setWarehouse(Warehouse warehouse) {
		this.warehouse = warehouse;
	}

	public Trade getTrade() {
		return trade;
	}

	public void setTrade(Trade trade) {
		this.trade = trade;
	}

	public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getOtnoticeEmployeeId() {
        return otnoticeEmployeeId;
    }

    public void setOtnoticeEmployeeId(Integer otnoticeEmployeeId) {
        this.otnoticeEmployeeId = otnoticeEmployeeId;
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

    public Integer getTradeId() {
        return tradeId;
    }

    public void setTradeId(Integer tradeId) {
        this.tradeId = tradeId;
    }

    public Integer getWarehouseLastNum() {
        return warehouseLastNum;
    }

    public void setWarehouseLastNum(Integer warehouseLastNum) {
        this.warehouseLastNum = warehouseLastNum;
    }

    public Integer getWarehouseId() {
        return warehouseId;
    }

    public void setWarehouseId(Integer warehouseId) {
        this.warehouseId = warehouseId;
    }

	@Override
	public String toString() {
		return "Otnotice [id=" + id + ", otnoticeEmployeeId=" + otnoticeEmployeeId + ", zt=" + zt + ", description="
				+ description + ", tradeId=" + tradeId + ", trade=" + trade + ", warehouseLastNum=" + warehouseLastNum
				+ ", warehouseId=" + warehouseId + ", warehouse=" + warehouse + "]";
	}
    
}