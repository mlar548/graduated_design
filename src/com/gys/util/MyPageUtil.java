package com.gys.util;

import java.util.List;

import org.springframework.ui.Model;

import com.github.pagehelper.PageInfo;
import com.gys.entity.Purchase;

public class MyPageUtil {
	public static <T> void myPageUtil(Integer pageNo, Model model, List<T> selectByExample) {
		PageInfo<T> pageInfo = new PageInfo<T>(selectByExample);
		int next=pageInfo.getNextPage();
		if(pageNo==pageInfo.getPages()){
			next=pageNo;
		}
		
		model.addAttribute("prev", pageInfo.getPrePage());
		model.addAttribute("pageNo", pageNo);
		model.addAttribute("allPage", pageInfo.getPages());
		model.addAttribute("pageNum", pageInfo.getPageNum());
		model.addAttribute("next", next);
	}
}
