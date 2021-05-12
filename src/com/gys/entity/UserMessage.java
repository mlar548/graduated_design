package com.gys.entity;

import java.util.Date;

import org.springframework.format.annotation.DateTimeFormat;

public class UserMessage {
    private Integer userMessageId;

    private String userMessageInformation;

    private Integer userId;
    @DateTimeFormat(pattern="yyyy-MM-dd HH:mm:ss")
    private Date time;
    
    private Users user;
    
    

    public Users getUser() {
		return user;
	}

	public void setUser(Users user) {
		this.user = user;
	}

	public Integer getUserMessageId() {
        return userMessageId;
    }

    public void setUserMessageId(Integer userMessageId) {
        this.userMessageId = userMessageId;
    }

    public String getUserMessageInformation() {
        return userMessageInformation;
    }

    public void setUserMessageInformation(String userMessageInformation) {
        this.userMessageInformation = userMessageInformation == null ? null : userMessageInformation.trim();
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public Date getTime() {
        return time;
    }

    public void setTime(Date time) {
        this.time = time;
    }

	@Override
	public String toString() {
		return "UserMessage [userMessageId=" + userMessageId + ", userMessageInformation=" + userMessageInformation
				+ ", userId=" + userId + ", time=" + time + ", user=" + user + "]";
	}
    
}