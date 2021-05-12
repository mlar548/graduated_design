package com.gys.controller;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.shiro.authz.annotation.RequiresPermissions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.alibaba.fastjson.JSON;
import com.github.pagehelper.PageHelper;
import com.gys.entity.AllWarehouseOt;
import com.gys.entity.AllWarehouseOtExample;
import com.gys.entity.AllWarehouseOtExample.Criteria;
import com.gys.entity.Cities;
import com.gys.entity.Goods;
import com.gys.entity.Orders;
import com.gys.entity.Otnotice;
import com.gys.entity.OtnoticeExample;
import com.gys.entity.Provinces;
import com.gys.entity.Trade;
import com.gys.entity.Users;
import com.gys.entity.Warehouse;
import com.gys.entity.WarehouseGoods;
import com.gys.entity.WarehouseGoodsExample;
import com.gys.service.AllWarehouseOtService;
import com.gys.service.CitiesService;
import com.gys.service.GoodsService;
import com.gys.service.LogisticsCompanyService;
import com.gys.service.LogisticsService;
import com.gys.service.OrdersService;
import com.gys.service.OtnoticeService;
import com.gys.service.ProvincesService;
import com.gys.service.TradeService;
import com.gys.service.UsersService;
import com.gys.service.WarehouseGoodsService;
import com.gys.service.WarehouseOtService;
import com.gys.service.WarehouseService;
import com.gys.util.CreateId;
import com.gys.util.MyPageUtil;
import com.gys.util.PageGoUtil;

@Controller
public class WarehouseController {
	@Autowired
	private WarehouseService warehouseService;

	@Autowired
	private ProvincesService provincesService;

	@Autowired
	private CitiesService citiesService;

	@Autowired
	private WarehouseGoodsService warehouseGoodsService;

	@Autowired
	private LogisticsService logisticsService;

	@Autowired
	private LogisticsCompanyService logisticsCompanyService;

	@Autowired
	private WarehouseOtService warehouseOtService;
	
	@Autowired
	private UsersService usersService;
	
	
	@Autowired
	private AllWarehouseOtService allWarehouseOtService;

	@Autowired
	private GoodsService goodsService;
	
	@Autowired
	private OrdersService ordersService;
	
	@Autowired
	private OtnoticeService otnoticeService;
	

	// 页面跳转：到仓库管理页 且把仓库信息放到该页
	@RequestMapping("/warehouseList")
	@RequiresPermissions("role:warehouseList")
	public String warehouseList(Integer pageNo, Model model) {

		/* 分页开始 */

		if (pageNo == null) {
			pageNo = 1;
		}

		Integer pageSize = 8;
		List<Warehouse> warehouseList = warehouseService.selectWarehouseAndCapacityPage(pageNo, pageSize);

		int warehouseAllCount = warehouseService.getAllCount();

		// 分页
		PageGoUtil.pageGo(pageNo, model, pageSize, warehouseAllCount);
		model.addAttribute("warehouseList", warehouseList);

		/* 分页开始 */

		return "/admin/warehouse/warehouseList";
	}
	// 页面跳转：到仓库管理页 且把仓库信息放到该页
	@RequestMapping("/allWarehouseOttrade")
	@RequiresPermissions("role:warehouseList")
	public String allWarehouseOttrade(Integer id,  Model model) {
		
		AllWarehouseOt allWarehouseOt = allWarehouseOtService.selectByPrimaryKey(id);
		model.addAttribute("allWarehouseOt", allWarehouseOt);
		return "/admin/warehouse/allWarehouseOttrade";
	}
	// 页面跳转：到调拨页
	@RequestMapping("/warehouseOtNotice")
	@RequiresPermissions("role:warehouseList")
	public String warehouseOtNotice(Integer pageNo,
			@RequestParam(required=false,defaultValue="0",name="chooseZt")Integer chooseZt
			,Model model) {
		
		OtnoticeExample otnoticeExample=new OtnoticeExample();
		otnoticeExample.setOrderByClause("id desc");
		com.gys.entity.OtnoticeExample.Criteria criteria = otnoticeExample.createCriteria();
		
		if(chooseZt==0) {
			criteria.andZtNotEqualTo("移除");
		}else if(chooseZt==1) {
			criteria.andZtEqualTo("已读");
			
		}else if(chooseZt==2) {
			criteria.andZtEqualTo("未读");
			
		}
		 model.addAttribute("chooseZt",chooseZt);
		
		
		
		if (pageNo == null||pageNo==0) {
			pageNo = 1;
		} 
		
		PageHelper.startPage(pageNo, 8);
		  List<Otnotice> selectByExample = otnoticeService.selectByExample(otnoticeExample);
		 
		//分页2
		
		MyPageUtil.myPageUtil(pageNo, model, selectByExample);
		model.addAttribute("otnoticeList",selectByExample);
		
		return "/admin/warehouse/warehouseOtNotice";
	}
	// 页面跳转：到调拨页
	@RequestMapping("/warehouseOtList")
	@RequiresPermissions("role:warehouseList")
	public String warehouseOtList(Integer pageNo,Model model) {
		
		AllWarehouseOtExample example=new AllWarehouseOtExample();
		example.setOrderByClause("id desc");
		Criteria c1= example.createCriteria();
//		 c1.andZtEqualTo("已读"); 
		
		
	
		 if (pageNo == null||pageNo==0) {
				pageNo = 1;
			} 
			
		     PageHelper.startPage(pageNo, 8);
		 	List<AllWarehouseOt> selectByExample = allWarehouseOtService.selectByExample(example);
			for (AllWarehouseOt allWarehouseOt : selectByExample) {
				System.out.println("zheli"+allWarehouseOt);
			}
		 	//分页2
		 	
		MyPageUtil.myPageUtil(pageNo, model, selectByExample);
		model.addAttribute("AllWarehouseOtList",selectByExample);
		
		return "/admin/warehouse/warehouseOtList";
	}

	// 页面跳转：到调拨页
	@RequestMapping("/warehouseAllot")
	@RequiresPermissions("role:warehouseAllot")
	public String warehouseAllot(HttpSession session,Model model) {

		// 产生随机订单
				CreateId id = new CreateId();
				String createId = id.createId();
				String otid = "W" + createId;
				model.addAttribute("otid", otid);
				// 获取当前时间
				Date date = new Date();
				model.addAttribute("date", date);

			 
				// session获取出单人
				Users user = (Users) session.getAttribute("myuser");
				if (user != null) {
					model.addAttribute("username", user.getUsername());
				}

				List<Users> jlList = usersService.selectUsersByRoleId(6);
				model.addAttribute("jlList", jlList);
				List<Goods> goodsList = goodsService.selectGoods();
				model.addAttribute("goodsList", goodsList);
		
		
		
		
		List<Warehouse> warehouseList = warehouseService.selectWarehouseAndCapacity();
		model.addAttribute("warehouseList", warehouseList);
		/*
		// 传入省的数据
		List<Provinces> provincesList = provincesService.selectProvinces();
		model.addAttribute("provincesList", provincesList);
		// 传入快递公司的数据
		List<LogisticsCompany> logisticsCompanyList = logisticsCompanyService.selectLogisticsCompany();
		model.addAttribute("logisticsCompanyList", logisticsCompanyList);*/

		return "/admin/warehouse/warehouseAllot";
	}

	// 页面跳转：到仓品信息页 且把仓品信息放到该页
	@RequestMapping("/warehouseGoodsList")
	public String warehouseGoodsList(Integer pageNo, Integer warehouseId,Integer hid, Model model) {

//		WarehouseGoodsExample  example = new WarehouseGoodsExample();
		/* 分页开始 */

		System.out.println("仓库当前id======"+warehouseId);
		if (pageNo == null ) {
			pageNo = 1;
		}

		if (warehouseId!=null){
			hid = warehouseId;
			model.addAttribute("hid",hid);
		}else {
			hid = 1;
		}
		Integer pageSize = 4;
		List<WarehouseGoods> warehouseGoodsList = warehouseGoodsService.selectWarehouseGoodsPage(pageNo, pageSize,
				hid);
		int warehouseGoodsAllCount = warehouseGoodsService.getAllCount(hid);

		// 分页
		PageGoUtil.pageGo(pageNo, model, pageSize, warehouseGoodsAllCount);
		model.addAttribute("warehouseGoodsList", warehouseGoodsList);

		/* 分页开始 */

		return "/admin/warehouse/warehouseGoodsList";
	}

	// 页面跳转：到仓库修改页 且该仓库信息传到该页
	@RequestMapping("/warehouseUpdate")
	@RequiresPermissions("role:warehouseUpdate")
	public String warehouseUpdate(Integer warehouseId, Model model) {

		Warehouse warehouse = warehouseService.selectByPrimaryKey(warehouseId);
		model.addAttribute("warehouse", warehouse);

		// 传入省的数据
		List<Provinces> provincesList = provincesService.selectProvinces();
		model.addAttribute("provincesList", provincesList);

		// 传入市的数据

		List<Cities> citiesList = citiesService.selectCitiesListByProvinces(warehouse.getWarehouseProvince());

		model.addAttribute("citiesList", citiesList);

		return "/admin/warehouse/warehouseUpdate";
	}

	// 页面处理：调拨处理
	@RequestMapping("/warehouseAllot.action")
	public String warehouseAllot(AllWarehouseOt allWarehouseOt, Model model) {
		
		System.out.println(allWarehouseOt);
		
		  warehouseOtService.createAllWarehouseOt(allWarehouseOt);
		
		/*Integer fromWarehouseId = warehouseOt.getFromWarehouseId();
		Integer goodsId = warehouseOt.getGoodsId();
		Integer warehouseGoodsQuantity = warehouseOt.getWarehouseGoodsQuantity();
		Integer toWarehouseId = warehouseOt.getToWarehouseId();
//此处修改过		String logisticsName = warehouseOt.getLogisticsName();

		// 减少被调拨仓库的数量
		int row = warehouseGoodsService.updateFromWarehouseGoods(fromWarehouseId, goodsId, warehouseGoodsQuantity);
		if (row > 0) {
			System.out.println("修改成功");
		} else {
			System.out.println("修改失败");
		}

		Logistics logistics = new Logistics();
		logistics.setFromWarehouseId(fromWarehouseId);
//此处修改过	logistics.setLogisticsName(logisticsName);
		logistics.setToWarehouseId(toWarehouseId);

		// 生成快递单
		logisticsService.insertSelective(logistics);

		 

		// 生成调拨信息
		warehouseOtService.insert(warehouseOt);
*/
		return "redirect:/warehouseAllot";
	}

	// 页面处理：到仓库修改页 且该仓库信息传到该页
	@RequestMapping("/warehouseUpdate.action")
	public String warehouseUpdate(Warehouse warehouse, Model model) {

		warehouseService.updateByPrimaryKeySelective(warehouse);

		List<Warehouse> warehouseList = warehouseService.selectWarehouseAndCapacity();
		model.addAttribute("warehouseList", warehouseList);
		return "/admin/warehouse/warehouseList";
	}
	// 改为已读
	@RequestMapping("/otnoticeYidu")
	public String otnoticeYidu(Integer id, Model model) {
		Otnotice otnotice = new Otnotice();
		otnotice.setId(id);
		otnotice.setZt("已读");
		otnoticeService.updateByPrimaryKeySelective(otnotice);
		 
		return "redirect:/warehouseOtNotice";
	}
	//移除
	@RequestMapping("/otnoticeYiChu")
	public String otnoticeYiChu(Integer id, Model model) {
		
		Otnotice otnotice = new Otnotice();
		otnotice.setId(id);
		otnotice.setZt("移除");
		otnoticeService.updateByPrimaryKeySelective(otnotice);
		return "redirect:/warehouseOtNotice";
	}

//	通知调拨
	@RequestMapping("/noticeOt.action")
	public String noticeOt(Integer warehouseLastNum,Integer warehouseId,Integer tradeId, Integer id,HttpSession session,Model model) {
    System.out.println("1111");		
	Users user=(Users)	session.getAttribute("myuser");
	 
	if(user!=null) {
	  	warehouseService.readAndInsToOtnotice(tradeId,user.getUserId(),warehouseLastNum,warehouseId);
	}
		 
	Orders order = ordersService.selectByPrimaryKey(id);
	System.out.println("OrderController测试order"+order);
	List<Trade> tradeList = order.getTradeList();
	List<Trade> tradeList2 =new ArrayList<>();
	List<WarehouseGoods> warehouseGoodsList = order.getWarehouse().getWarehouseGoodsList();
	
	for (Trade trade : tradeList) {
		Integer goodsId = trade.getGoods().getGoodsId();
	 
		for (WarehouseGoods warehouseGoods : warehouseGoodsList) {
			 
			 
			if(goodsId==warehouseGoods.getGoodsId()) {
				 Integer warehouseGoodsQuantity = warehouseGoods.getWarehouseGoodsQuantity();
				 trade.setLastQuantity(warehouseGoodsQuantity);
				 System.out.println("gai");
				 break;
			}
			
		}
		if(trade.getLastQuantity()==null) {
			 trade.setLastQuantity(0);
			 System.out.println("gai2");
		}
		tradeList2.add(trade);
	}
	order.setTradeList(tradeList2);
	model.addAttribute("id",id);
	model.addAttribute("order",order);
	return "/admin/orders/trade";
			
		  
		
	}
	// ajax
	@RequestMapping("/warehouseAjax.action")
	public void warehouseAjax(String warehouseProvince, HttpServletResponse response) {

		try {
			PrintWriter out = response.getWriter();
			System.out.println(warehouseProvince);
			List<Cities> cityList = citiesService.selectCitiesListByProvinces(warehouseProvince);
			for (Cities cities : cityList) {
				System.out.println(cities);
			}
			String json = JSON.toJSONString(cityList);

			out.print(json);
			out.flush();
			out.close();

		} catch (IOException e) {
			e.printStackTrace();
		}

	}

	// ajax
	@RequestMapping("/warehouseAjaxForOt.action")
	public void warehouseAjaxForOt(Integer warehouseId, HttpServletResponse response) {

		try {
			PrintWriter out = response.getWriter();
			List<WarehouseGoods> warehouseGoodsList = warehouseGoodsService.selectGoodNameByWarehouseId(warehouseId);
			String json = JSON.toJSONString(warehouseGoodsList);
			// System.out.println(json);
			out.print(json);
			out.flush();
			out.close();

		} catch (IOException e) {
			e.printStackTrace();
		}

	}

	// ajax
	@RequestMapping("/warehouseAjaxForGoods.action")
	public void warehouseAjaxForGoods(Integer goodsId, Integer warehouseId, HttpServletResponse response) {

		try {
			PrintWriter out = response.getWriter();
			WarehouseGoods warehouseGoods = warehouseGoodsService.selectWarehouseGoodsByGoodsIdWarehouseId(goodsId,
					warehouseId);
			String json = JSON.toJSONString(warehouseGoods);
			
			// System.out.println(json);
			out.print(json);
			out.flush();
			out.close();

		} catch (IOException e) {
			e.printStackTrace();
		}

	}
 
	// ajax
	@RequestMapping("/findLastNum.action")
	@ResponseBody
	public int findLastNum(Integer goodsId, Integer warehouseId ) {
	 
		System.out.println("goodsId="+goodsId);
		System.out.println("warehouseId="+warehouseId);
		 WarehouseGoodsExample warehouseGoodsExample =new WarehouseGoodsExample();
		 WarehouseGoodsExample.Criteria criteria = warehouseGoodsExample.createCriteria();
		 criteria.andGoodsIdEqualTo(goodsId);
		 criteria.andWarehouseIdEqualTo(warehouseId);
		  List<WarehouseGoods> selectByExample = warehouseGoodsService.selectByExample(warehouseGoodsExample);
		  if(!selectByExample.isEmpty()) {
			  WarehouseGoods warehouseGoods = selectByExample.get(0);
			  Integer num = warehouseGoods.getWarehouseGoodsQuantity();
			  System.out.println(num);
			  return num;
		  }else{
			  return 0;
		  }
	}
	

}
