package com.gys.entity;

import java.util.Date;
import java.util.List;

import org.springframework.format.annotation.DateTimeFormat;



public class Supplier {
    private Integer supplierId;

    private String supplierName;
    
    private String smallName;

    private String englishName;

    private String brandLand;

    private String foundingDate;
    @DateTimeFormat(pattern="yyyy-MM-dd")
    private Date partnerDate;

    private String supplierPhone;

    private String supplierEmail;

    private String address;

    private String state;

    private String other;

    private Integer supplierLogCompanyId;
    
    private LogisticsCompany logisticsCompany;
    
    private List<Goods> goodsList;
    
    
    
    public String getSmallName() {
		return smallName;
	}

	public void setSmallName(String smallName) {
		this.smallName = smallName;
	}

	public List<Goods> getGoodsList() {
		return goodsList;
	}

	public void setGoodsList(List<Goods> goodsList) {
		this.goodsList = goodsList;
	}

	public LogisticsCompany getLogisticsCompany() {
		return logisticsCompany;
	}

	public void setLogisticsCompany(LogisticsCompany logisticsCompany) {
		this.logisticsCompany = logisticsCompany;
	}

	public String getOther() {
		return other;
	}

	public void setOther(String other) {
		this.other = other;
	}

	public Integer getSupplierLogCompanyId() {
		return supplierLogCompanyId;
	}

	public void setSupplierLogCompanyId(Integer supplierLogCompanyId) {
		this.supplierLogCompanyId = supplierLogCompanyId;
	}

	public Integer getSupplierId() {
        return supplierId;
    }

    public void setSupplierId(Integer supplierId) {
        this.supplierId = supplierId;
    }

    public String getSupplierName() {
        return supplierName;
    }

    public void setSupplierName(String supplierName) {
        this.supplierName = supplierName == null ? null : supplierName.trim();
    }

    public String getEnglishName() {
        return englishName;
    }

    public void setEnglishName(String englishName) {
        this.englishName = englishName == null ? null : englishName.trim();
    }

    public String getBrandLand() {
        return brandLand;
    }

    public void setBrandLand(String brandLand) {
        this.brandLand = brandLand == null ? null : brandLand.trim();
    }

    public String getFoundingDate() {
        return foundingDate;
    }

    public void setFoundingDate(String foundingDate) {
        this.foundingDate = foundingDate == null ? null : foundingDate.trim();
    }

    public Date getPartnerDate() {
        return partnerDate;
    }

    public void setPartnerDate(Date partnerDate) {
        this.partnerDate = partnerDate;
    }

    public String getSupplierPhone() {
        return supplierPhone;
    }

    public void setSupplierPhone(String supplierPhone) {
        this.supplierPhone = supplierPhone == null ? null : supplierPhone.trim();
    }

    public String getSupplierEmail() {
        return supplierEmail;
    }

    public void setSupplierEmail(String supplierEmail) {
        this.supplierEmail = supplierEmail == null ? null : supplierEmail.trim();
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address == null ? null : address.trim();
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state == null ? null : state.trim();
    }

	@Override
	public String toString() {
		return "Supplier [supplierId=" + supplierId + ", supplierName=" + supplierName + ", englishName=" + englishName
				+ ", brandLand=" + brandLand + ", foundingDate=" + foundingDate + ", partnerDate=" + partnerDate
				+ ", supplierPhone=" + supplierPhone + ", supplierEmail=" + supplierEmail + ", address=" + address
				+ ", state=" + state + ", other=" + other + ", supplierLogCompanyId=" + supplierLogCompanyId
				+ ", logisticsCompany=" + logisticsCompany + "]";
	}


    
}