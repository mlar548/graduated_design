package com.gys.util;

import org.springframework.ui.Model;

public class PageGoUtil {
	public static void pageGo(Integer pageNo, Model model, int pageSize, int AllCount) {
		int allPage = AllCount % pageSize == 0 ? (AllCount / pageSize) : AllCount / pageSize + 1;
		int prev = pageNo++;
		int next = pageNo--;

		if (pageNo <= 0) {
			prev = 1;
			next++;
		} else if (pageNo >= allPage) {
			next = allPage;
			prev--;
		}
		if(prev==0) {
			prev=1;
		}
System.out.println("prev"+prev);
System.out.println("pageNo"+pageNo);
System.out.println("next"+next);
		model.addAttribute("prev", prev);
		model.addAttribute("pageNo", pageNo);
		model.addAttribute("allPage", allPage);
		model.addAttribute("next", next);
		
	/*	System.out.println("上一页："+pageInfo.getPrePage());
		System.out.println("当前页："+pageInfo.getPageNum());
		System.out.println("下一页："+pageInfo.getNextPage());
		System.out.println("总页："+pageInfo.getPages());
		System.out.println("条数："+pageInfo.getTotal());*/
	}
}
