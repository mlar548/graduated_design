package com.gys.entity;

import java.util.Date;

import org.springframework.format.annotation.DateTimeFormat;

public class LogisticsInformation {
    private Integer id;

    private Integer ltId;

    private String address;

    private String information;
    @DateTimeFormat(pattern="yyyy-MM-dd HH:mm:ss")
    private Date ltTime;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getLtId() {
        return ltId;
    }

    public void setLtId(Integer ltId) {
        this.ltId = ltId;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address == null ? null : address.trim();
    }

    public String getInformation() {
        return information;
    }

    public void setInformation(String information) {
        this.information = information == null ? null : information.trim();
    }

    public Date getLtTime() {
        return ltTime;
    }

    public void setLtTime(Date ltTime) {
        this.ltTime = ltTime;
    }
}